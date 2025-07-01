import React from 'react';
import '../about.css';

const AboutMe = () => (
  <main>
    <section className="contact">
      <div className="contact-description">
        <div className="contact-description-item">
          <p><span>EN</span> Dare.Ogunnaike Bureau is a [city]-based art direction and design practice founded by Dare Ogunnaike. The bureau creates visual identities, editorial objects, and spatial experiences for clients across diverse fields.</p>
          <p><span>FR</span> Dare.Ogunnaike Bureau est un bureau de direction artistique et design graphique basé à [city], fondé par Dare Ogunnaike. Le bureau crée des identités visuelles, des objets éditoriaux et des expériences spatiales pour des clients dans divers domaines.</p>
        </div>
        <div>
          <div className="contact-description-refs">
            <h2>Contact</h2>
            <ul>
              <li><a href="#" target="_blank">@placeholder</a></li>
              <li>placeholder@email.com</li>
              <li>+234 000 000 0000</li>
              <li>123 Placeholder Street</li>
              <li>Lagos, Nigeria</li>
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
            <ul>
              <li>Client 1</li>
              <li>Client 2</li>
              <li>Client 3</li>
            </ul>
          </div>
          <div className="contact-description-refs">
            <h2>Contributors</h2>
            <ul>
              <li>Contributor 1</li>
              <li>Contributor 2</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default AboutMe;
