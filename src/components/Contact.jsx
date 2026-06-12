import './Contact.css';

export default function Contact() {
  return (
    <>
      <div className="section-divider-container container">
        <hr className="section-divider" />
      </div>
      <footer className="contact-section" id="contact">
        <div className="container">
        <div className="contact-content">
          <h2 className="contact-heading serif">
            <a href="mailto:hello@ishithakodali.com">
              fancy working together?
            </a>
          </h2>
          
          <div className="contact-footer-links">
            <div className="contact-info">
              <p>Ishitha Kodali</p>
              <p className="italic opacity-70" style={{fontSize: '1.1rem'}}>Graphic Designer</p>
            </div>
            
            <div className="social-links">
              <a href="mailto:ishitha502@gmail.com" className="social-link">Email</a>
              <a href="https://www.linkedin.com/in/lakshmi-ishitha-kodali" className="social-link" target = "_blank" rel = "noopener noreferrer">LinkedIn</a>
              <a href="https://www.instagram.com/ishisgfxacc" className="social-link" target = "_blank" rel = "noopener noreferrer">Instagram</a>
            </div>
            
            <div className="copyright">
              <p className="opacity-70">&copy; {new Date().getFullYear()}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
