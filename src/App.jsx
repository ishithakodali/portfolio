import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Posters from './components/Posters';
import BrandIdentity from './components/BrandIdentity';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <>
      <CustomCursor />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Posters />
        <BrandIdentity />
      </main>
      <Contact />
    </>
  );
}

export default App;
