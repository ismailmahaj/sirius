type Props = {
  title: string;
  items: Array<{ title: string; text: string }>;
};

export function AdsWhySirius({ title, items }: Props) {
  return (
    <section className="ads-section ads-section--light">
      <div className="container">
        <h2 className="ads-section-title">{title}</h2>
        <div className="ads-why-grid">
          {items.map((item) => (
            <article key={item.title} className="ads-why-item">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
