import React from 'react';
import '../about.css';

const AboutMe = () => (
  <main>
    <section className="contact">
      <div className="contact-description">
        <div className="contact-description-item">
          <p><span>EN</span> Dare.Ogunnaike is an Art Director & Graphic Designer at BELONWUS. Previously, he was a Brand Designer at Rise Vest. He received a BSc in Architecture from the University of Lagos in 2017 and has since built a multifaceted and dynamic career in design, spanning architecture, industrial design, and set design.</p>
          <p><span>FR</span> Dare.Ogunnaike est directeur artistique et graphiste chez BELONWUS. Auparavant, il était designer de marque chez Rise Vest. Il a obtenu une licence en architecture à l'Université de Lagos en 2017 et a depuis mené une carrière polyvalente et dynamique dans le design, couvrant l'architecture, le design industriel et la scénographie.</p>
          <p className="about-title">
            Hello <span className="wave" role="img" aria-label="waving hand">👋</span> don&apos;t hesitate to write to us to receive a detailed portfolio, or to meet and discuss a project.
          </p>
        </div>
        <div>
          <div className="contact-description-refs">
            <h2>Contact</h2>
            <ul className="about-contact-list">
              <li>@dare.ogunnnaike</li>
              <li>dareogunnaike@gmail.com</li>
              <li>‭+234 (0)818 971 8428‬</li>
              <li>11 Monsuro Road Abule Oja Lagos</li>
              <li>Nigeria</li>
            </ul>
          </div>
          <div className="contact-description-refs">
            <h2>Services</h2>
            <ul>
              <li>Branding</li>
              <li>Art Direction</li>
              <li>Editorial Design</li>
              <li>Type Design</li>
              <li>Visual Identity</li>
              <li>Signage</li>
              <li>Web Design</li>
              <li>Scenography</li>
            </ul>
          </div>
          <div className="contact-description-refs">
            <h2>Clients</h2>
            <ul className="about-contact-list">
              <li>Bamboo</li>
              <li>Risevest</li>
              <li>OctaFx</li>
              <li>Sporting Lagos</li>
              <li>Spotify</li>
              <li>Pocket</li>
              <li>Maggi</li>
              <li>Babban Gona</li>
              <li>9mobile</li>
            </ul>
          </div>
          <div className="contact-description-refs">
            <h2>Contributors</h2>
            <ul className="about-contact-list">
              <li>Jordan</li>
              <li>Wale</li>
              <li>Richard</li>
              <li>Ogbeni Seyi</li>
              <li>Ife</li>
              <li>Joseph</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default AboutMe;
