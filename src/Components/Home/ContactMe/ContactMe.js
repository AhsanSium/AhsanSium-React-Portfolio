import React from 'react';
import Contact from '../../Contact/Contact';

const ContactMe = () => (
  <section className="contact-container" style={{ padding: '60px 0 80px' }}>
    <div className="container">
      <div className="text-center mb-5">
        <p className="section-label">// contact.init()</p>
        <h2 className="section-title">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <div className="neon-line mx-auto" />
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: 480, margin: '0 auto' }}>
          Have a question or want to work together? Send me a message.
        </p>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-7">
          <div className="glass-panel p-4 p-md-5">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactMe;
