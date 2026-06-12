import { motion } from 'framer-motion';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="container">
        <motion.div 
          className="grid-12 hero-grid"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="col-span-12 hero-text-block">
            <h1 className="hero-title serif text-massive">
              Ishitha
            </h1>
          </div>
          
          <div className="col-span-12 hero-text-block right-align">
            <h1 className="hero-title serif text-massive">
              Kodali
            </h1>
          </div>

          <div className="col-span-4 hero-subtitle-block">
            <h6 className="text-util">making posters,<br/>brands & pretty things.</h6>
          </div>
          
          <div className="col-span-4 col-start-9 hero-scroll-block">
            <p className="text-util" style={{textAlign: 'right'}}>Scroll down &darr;</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
