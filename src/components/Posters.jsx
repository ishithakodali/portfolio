import './Posters.css';

export default function Posters() {
  const items = [
    { id: 2, src: '/posters/media__1781253849044.jpg', title: 'Lifafa', textColor: '#FFFFFF' },
    { id: 4, src: '/posters/media__1781253900277.jpg', title: 'The Dream Tour', textColor: '#FFFFFF' },
    { id: 1, src: '/posters/media__1781253785267.jpg', title: 'Safety Matches', textColor: '#FFFFFF' },
    { id: 5, src: '/posters/media__1781253962392.jpg', title: 'Jam Session', textColor: '#FFFFFF' },
    { id: 3, src: '/posters/media__1781253884422.jpg', title: 'Miu Miu', textColor: 'var(--text-color)' },
    { id: 6, src: '/posters/media__1781254116699.png', title: 'Orientation', textColor: '#FFFFFF' },
  ];

  return (
    <section className="posters-section" id="posters">
      <div className="container">
        <div className="section-header">
          <h2 className="serif section-title">Posters</h2>
          <p className="section-desc">Selected works showcasing typographic exploration and composition.</p>
        </div>

        <div className="masonry-grid">
          {items.map((item) => (
            <div key={item.id} className="masonry-item">
              <div className="poster-placeholder">
                <img src={item.src} alt={item.title} className="poster-img" />
                <div className="poster-overlay">
                  <span className="poster-title serif" style={{ color: item.textColor }}>{item.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
