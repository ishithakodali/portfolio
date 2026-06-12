import { motion } from 'framer-motion';
import './About.css';

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="grid-12 about-grid">
          
          <motion.div 
            className="col-span-4 about-portrait-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <img src="/about-portrait.jpg" alt="Ishitha Kodali" className="about-portrait" />
          </motion.div>

          <motion.div 
            className="col-span-8 about-text-block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="serif about-quote-text text-huge">
              I am a graphic designer with a soft spot for <span className="italic" style={{color: 'var(--accent-terracotta)'}}>vintage textures</span> and visual storytelling.
            </h2>
            <div className="about-util-text">
              <p className="text-util">Based in Hyderabad</p>
              <p className="text-util">Exploring fresh styles constantly.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
