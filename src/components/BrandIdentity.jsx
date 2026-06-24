import './BrandIdentity.css';
import Aeon from './Aeon';
import BeyondSunset from './BeyondSunset';

export default function BrandIdentity() {
  return (
    <section className="brand-section" id="brand">
      <div className="container">
        <div className="brand-header">
          <h2 className="serif section-title">Brand Identity</h2>
          <p className="section-desc">Systems and visual languages.</p>
        </div>
      </div>

      <div className="brand-cases">
        <Aeon />
        <BeyondSunset />
      </div>
    </section>
  );
}
