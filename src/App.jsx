import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Posters from './components/Posters';
import SocialMedia from './components/SocialMedia';
import BrandIdentity from './components/BrandIdentity';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Posters />
        <SocialMedia />
        <BrandIdentity />
      </main>
      <Contact />
    </>
  );
}

export default App;
