export type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  honey?: string;
};

export async function submitContactForm(data: ContactFormData): Promise<void> {
  if (data.honey?.trim()) return;

  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Contact form submission failed');
  }

  const result = (await response.json()) as { ok?: boolean };
  if (!result.ok) {
    throw new Error('Contact form submission failed');
  }
}
