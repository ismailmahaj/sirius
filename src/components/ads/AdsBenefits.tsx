type Props = {
  title: string;
  text?: string;
  points?: string[];
  items?: string[];
  variant?: 'problem' | 'needs';
};

export function AdsBenefits({ title, text, points, items, variant = 'problem' }: Props) {
  return (
    <section className="ads-section ads-section--light">
      <div className="container">
        <h2 className="ads-section-title">{title}</h2>

        {variant === 'problem' && (
          <>
            {text && <p className="ads-problem-text">{text}</p>}
            {points && (
              <div className="ads-points-grid">
                {points.map((point) => (
                  <div key={point} className="ads-point">
                    {point}
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {variant === 'needs' && items && (
          <div className="ads-needs-grid">
            {items.map((item) => (
              <div key={item} className="ads-need-item">
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
