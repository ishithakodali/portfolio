import './Aeon.css'; // Reusing Aeon's grid styles for consistency

export default function BeyondSunset() {
  const images = [
    { id: 1, src: '/beyond sunset/1.jpg' },
    { id: 2, src: '/beyond sunset/2.jpg' },
    { id: 3, src: '/beyond sunset/3.jpg' },
    { id: 4, src: '/beyond sunset/4.jpg' },
    { id: 5, src: '/beyond sunset/5.jpg' },
    { id: 6, src: '/beyond sunset/6.jpg' },
  ];

  return (
    <article className="brand-case aeon-case" id="beyond-sunset" style={{ backgroundColor: 'var(--bg-color)', borderTop: '1px solid rgba(48, 42, 39, 0.1)', paddingTop: 'var(--space-md)' }}>
      <div className="container">
        <div className="brand-case-content" style={{ paddingBottom: 'var(--space-lg)' }}>
          <h3 className="serif brand-case-title" style={{ color: 'var(--accent-terracotta)' }}>Beyond Sunset (Sample Branding)</h3>
          <div className="brand-case-text">
            <p>
              A warm, vibrant branding concept exploring peachy tones and playful typography to create a memorable suncare aesthetic.
            </p>
          </div>
        </div>
        <div className="aeon-grid">
          {images.map((img) => (
            <div key={img.id} className="aeon-item">
              <img src={img.src} alt={`Beyond Sunset Branding ${img.id}`} className="aeon-img" />
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
