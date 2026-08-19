type Props = {
  title: string;
  steps: Array<{ number: string; title: string; text: string }>;
};

export function AdsProcess({ title, steps }: Props) {
  return (
    <section className="ads-section ads-section--light">
      <div className="container">
        <h2 className="ads-section-title">{title}</h2>
        <div className="ads-process-grid">
          {steps.map((step) => (
            <div key={step.number} className="ads-process-step">
              <div className="ads-process-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
