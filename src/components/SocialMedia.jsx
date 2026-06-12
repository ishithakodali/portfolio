import './SocialMedia.css';

export default function SocialMedia() {
  const posts = [
    { id: 1, color: 'var(--accent-lavender)' },
    { id: 2, color: 'var(--accent-sage)' },
    { id: 3, color: 'var(--bg-color-alt)' },
    { id: 4, color: 'var(--accent-terracotta)' },
    { id: 5, color: 'var(--accent-ochre)' },
  ];

  return (
    <section className="social-section" id="social">
      <div className="container">
        <div className="social-header">
          <h2 className="serif section-title">Social</h2>
          <p className="section-desc">Digital campaigns and micro-content.</p>
        </div>

        <div className="social-staggered-grid">
          {posts.map((post, index) => (
            <div 
              key={post.id} 
              className={`social-item ${index % 2 === 0 ? 'offset-down' : 'offset-up'}`}
            >
              <div 
                className="social-placeholder"
                style={{ backgroundColor: post.color }}
              >
                {/* Subtle detail like a star or crosshair */}
                <svg className="corner-crosshair" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <line x1="10" y1="0" x2="10" y2="20" stroke="rgba(48,42,39,0.3)" strokeWidth="1" />
                  <line x1="0" y1="10" x2="20" y2="10" stroke="rgba(48,42,39,0.3)" strokeWidth="1" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
