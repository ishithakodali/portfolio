import './Aeon.css';

export default function Aeon() {
  const images = [
    { id: 1, src: '/aeon/media__1781254718669.jpg' },
    { id: 2, src: '/aeon/media__1781254718684.jpg' },
    { id: 3, src: '/aeon/media__1781254735467.png' },
    { id: 4, src: '/aeon/media__1781254735554.png' },
    { id: 5, src: '/aeon/media__1781254750543.jpg' },
    { id: 6, src: '/aeon/media__1781254861029.jpg' },
    { id: 7, src: '/aeon/media__1781254879122.png' },
    { id: 8, src: '/aeon/media__1781254879154.png' },
    { id: 9, src: '/aeon/media__1781254885578.png' },
    { id: 10, src: '/aeon/media__1781254891924.png' },
    { id: 11, src: '/aeon/media__1781254939499.png' },
    { id: 12, src: '/aeon/media__1781254983065.jpg' },
    { id: 13, src: '/aeon/media__1781254988855.jpg' },
    { id: 14, src: '/aeon/media__1781254992137.jpg' },
    { id: 15, src: '/aeon/media__1781255008926.png' },
    { id: 16, src: '/aeon/media__1781255013544.png' },
  ];

  const imagesRow2 = [
    { id: 17, src: '/aeon/media__1781255185646.png' },
    { id: 18, src: '/aeon/media__1781255186167.png' },
    { id: 19, src: '/aeon/media__1781255186867.png' },
  ];

  const imagesRow3 = [
    { id: 20, src: '/aeon/posts%201.png' },
    { id: 21, src: '/aeon/posts%202.png' },
    { id: 22, src: '/aeon/posts%203.png' },
  ];

  return (
    <article className="brand-case aeon-case" id="aeon">
      <div className="container">
        <div className="brand-case-content" style={{ paddingBottom: 'var(--space-sm)' }}>
          <h3 className="serif brand-case-title">Aeon 2026</h3>
          <div className="brand-case-text">
            <p>
              A comprehensive visual identity and collateral system for the Aeon 2026 event. 
              The project involved creating a cohesive design language spanning ID cards, mini banners, and environmental posters, leaning into an industrial, slightly futuristic aesthetic. @aeon.mu on instagram.
            </p>
          </div>
        </div>
        <div style={{ marginTop: 'var(--space-sm)' }}>
          <p className="text-util" style={{ marginBottom: 'var(--space-sm)' }}>ID cards</p>
          <div className="aeon-grid">
            {images.map((img) => (
              <div key={img.id} className="aeon-item">
                <img src={img.src} alt={`Aeon 2026 ID card ${img.id}`} className="aeon-img" />
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 'var(--space-2xl)' }}>
          <p className="text-util" style={{ marginBottom: 'var(--space-sm)' }}>Some banners</p>
          <div className="aeon-grid-banners">
            {imagesRow2.map((img) => (
              <div key={img.id} className="aeon-item">
                <img src={img.src} alt={`Aeon 2026 banner ${img.id}`} className="aeon-img" />
              </div>
            ))}
          </div>
        </div>
        
        <div style={{ marginTop: 'var(--space-2xl)' }}>
          <p className="text-util" style={{ marginBottom: 'var(--space-sm)' }}>Some instagram posts</p>
          <div className="aeon-grid aeon-grid-3">
            {imagesRow3.map((img) => (
              <div key={img.id} className="aeon-item">
                <img src={img.src} alt={`Aeon 2026 Instagram post ${img.id}`} className="aeon-img" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </article>
  );
}
