import express from 'express';
import fs from 'fs';
import multer from 'multer';
import nodemailer from 'nodemailer';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = Number(process.env.PORT || 3000);
const DIST = path.join(__dirname, '..', 'dist');
const MAIL_TO = process.env.MAIL_TO || 'sales@siriussecurity.be';

app.use(express.json({ limit: '32kb' }));

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter(_req, file, cb) {
    const ok =
      /pdf|msword|officedocument.wordprocessingml.document/.test(file.mimetype) ||
      /\.(pdf|doc|docx)$/i.test(file.originalname);
    cb(ok ? null : new Error('invalid_file'), ok);
  },
});

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function buildBodies(data) {
  const text = [
    `Nom : ${data.name}`,
    `Email : ${data.email}`,
    `Téléphone : ${data.phone || '—'}`,
    `Objet : ${data.subject}`,
    '',
    'Message :',
    data.message,
  ].join('\n');

  const html = `
    <p><strong>Nom :</strong> ${escapeHtml(data.name)}</p>
    <p><strong>Email :</strong> ${escapeHtml(data.email)}</p>
    <p><strong>Téléphone :</strong> ${escapeHtml(data.phone || '—')}</p>
    <p><strong>Objet :</strong> ${escapeHtml(data.subject)}</p>
    <p><strong>Message :</strong></p>
    <p>${escapeHtml(data.message).replace(/\n/g, '<br>')}</p>
  `;

  return { text, html };
}

async function sendViaDiscord(data) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  if (!webhookUrl) return false;

  const content = [
    `📩 **${data.kind === 'apply' ? 'Nouvelle candidature' : 'Nouveau message'} — Sirius Security**`,
    '',
    `**Nom :** ${data.name}`,
    `**Email :** ${data.email}`,
    `**Téléphone :** ${data.phone || '—'}`,
    `**Objet :** ${data.subject}`,
    '',
    '**Message :**',
    data.message,
  ]
    .join('\n')
    .slice(0, 1900);

  if (data.attachment) {
    const form = new FormData();
    form.append('payload_json', JSON.stringify({ content }));
    form.append(
      'files[0]',
      new Blob([data.attachment.buffer], { type: data.attachment.mimetype }),
      data.attachment.filename,
    );

    const response = await fetch(webhookUrl, { method: 'POST', body: form });
    if (!response.ok) {
      console.error('Discord webhook error:', await response.text());
      return false;
    }
    return true;
  }

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content }),
  });

  if (!response.ok) {
    console.error('Discord webhook error:', await response.text());
    return false;
  }

  return true;
}

async function sendViaResend(data) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return false;

  const from =
    process.env.MAIL_FROM || 'Sirius Security <onboarding@resend.dev>';
  const { text, html } = buildBodies(data);

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [MAIL_TO],
      reply_to: data.email,
      subject: `[Sirius Security] ${data.subject}`,
      text,
      html,
      attachments: data.attachment
        ? [
            {
              filename: data.attachment.filename,
              content: data.attachment.buffer.toString('base64'),
            },
          ]
        : undefined,
    }),
  });

  if (!response.ok) {
    console.error('Resend error:', await response.text());
    return false;
  }

  return true;
}

async function sendViaSmtp(data) {
  const { SMTP_HOST, SMTP_USER, SMTP_PASS, SMTP_PORT, MAIL_FROM } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) return false;

  const transport = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT || 587),
    secure: SMTP_PORT === '465',
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const { text, html } = buildBodies(data);

  await transport.sendMail({
    from: `"Sirius Security" <${MAIL_FROM || SMTP_USER}>`,
    to: MAIL_TO,
    replyTo: data.email,
    subject: `[Sirius Security] ${data.subject}`,
    text,
    html,
    attachments: data.attachment
      ? [
          {
            filename: data.attachment.filename,
            content: data.attachment.buffer,
            contentType: data.attachment.mimetype,
          },
        ]
      : undefined,
  });

  return true;
}

function getDeliveryProvider() {
  if (process.env.DISCORD_WEBHOOK_URL) return 'discord';
  if (process.env.RESEND_API_KEY) return 'resend';
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    return 'smtp';
  }
  return 'none';
}

function hasDeliveryConfig() {
  return getDeliveryProvider() !== 'none';
}

async function deliver(payload) {
  return (
    (await sendViaDiscord(payload)) ||
    (await sendViaResend(payload)) ||
    (await sendViaSmtp(payload))
  );
}

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, subject, message, honey } = req.body ?? {};

  if (typeof honey === 'string' && honey.trim()) {
    return res.json({ ok: true });
  }

  if (
    typeof name !== 'string' ||
    typeof email !== 'string' ||
    typeof subject !== 'string' ||
    typeof message !== 'string' ||
    !name.trim() ||
    !email.trim() ||
    !subject.trim() ||
    !message.trim() ||
    !isValidEmail(email)
  ) {
    return res.status(400).json({ error: 'invalid_fields' });
  }

  const payload = {
    name: name.trim(),
    email: email.trim(),
    phone: typeof phone === 'string' ? phone.trim() : '',
    subject: subject.trim(),
    message: message.trim(),
  };

  try {
    const sent = await deliver(payload);

    if (!sent) {
      console.error(
        'No delivery configured: set DISCORD_WEBHOOK_URL, RESEND_API_KEY or SMTP_*',
      );
      return res.status(503).json({ error: 'mail_not_configured' });
    }

    return res.json({ ok: true });
  } catch (error) {
    console.error('Contact delivery error:', error);
    return res.status(500).json({ error: 'send_failed' });
  }
});

app.post('/api/apply', upload.single('cv'), async (req, res) => {
  const { firstName, lastName, email, phone, role, message, _honey } =
    req.body ?? {};

  if (typeof _honey === 'string' && _honey.trim()) {
    return res.json({ ok: true });
  }

  if (
    typeof firstName !== 'string' ||
    typeof lastName !== 'string' ||
    typeof email !== 'string' ||
    typeof phone !== 'string' ||
    typeof role !== 'string' ||
    typeof message !== 'string' ||
    !firstName.trim() ||
    !lastName.trim() ||
    !email.trim() ||
    !phone.trim() ||
    !role.trim() ||
    !message.trim() ||
    !isValidEmail(email) ||
    !req.file
  ) {
    return res.status(400).json({ error: 'invalid_fields' });
  }

  const payload = {
    kind: 'apply',
    name: `${firstName.trim()} ${lastName.trim()}`,
    email: email.trim(),
    phone: phone.trim(),
    subject: `Candidature — ${role.trim()}`,
    message: [
      `Prénom : ${firstName.trim()}`,
      `Nom : ${lastName.trim()}`,
      `Poste : ${role.trim()}`,
      '',
      message.trim(),
    ].join('\n'),
    attachment: {
      filename: req.file.originalname || 'cv.pdf',
      buffer: req.file.buffer,
      mimetype: req.file.mimetype || 'application/pdf',
    },
  };

  try {
    const sent = await deliver(payload);

    if (!sent) {
      console.error(
        'No delivery configured: set DISCORD_WEBHOOK_URL, RESEND_API_KEY or SMTP_*',
      );
      return res.status(503).json({ error: 'mail_not_configured' });
    }

    return res.json({ ok: true });
  } catch (error) {
    console.error('Apply delivery error:', error);
    return res.status(500).json({ error: 'send_failed' });
  }
});

app.get('/api/health', (_req, res) => {
  res.json({
    ok: true,
    configured: hasDeliveryConfig(),
    provider: getDeliveryProvider(),
  });
});

if (fs.existsSync(DIST)) {
  app.use(express.static(DIST));
  app.get(/^(?!\/api).*/, (_req, res) => {
    res.sendFile(path.join(DIST, 'index.html'));
  });
}

app.use((err, _req, res, next) => {
  if (err instanceof multer.MulterError || err.message === 'invalid_file') {
    return res.status(400).json({ error: 'invalid_file' });
  }
  return next(err);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Sirius server listening on ${PORT}`);
});
