type Props = {
  items: Array<{ question: string; answer: string }>;
};

export function AdsFAQ({ items }: Props) {
  if (!items.length) return null;

  return (
    <section className="ads-section ads-section--light">
      <div className="container">
        <h2 className="ads-section-title">Questions fréquentes</h2>
        <div className="ads-faq-list">
          {items.map((item) => (
            <details key={item.question} className="ads-faq-item">
              <summary>{item.question}</summary>
              <div className="ads-faq-answer">{item.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
