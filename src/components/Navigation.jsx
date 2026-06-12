import { motion } from 'framer-motion';
import './Navigation.css';

export default function Navigation() {
  return (
    <motion.nav 
      className="nav-structured"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container nav-inner">
        <div className="nav-logo">
          <a href="#top" className="serif">Ishitha Kodali</a>
        </div>
        <div className="nav-links text-util">
          <a href="#about">About</a>
          <a href="#posters">Posters</a>
          <a href="#brand">Brand Identity</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </motion.nav>
  );
}
