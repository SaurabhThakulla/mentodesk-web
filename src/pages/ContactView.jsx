import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactView({ onRequestDemo }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container" style={{ paddingTop: '2.5rem', paddingBottom: '4rem', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
      <div className="section-header">
        <span className="section-label">Contact Us</span>
        <h2 className="section-title">Get in Touch with Our Solutions Team</h2>
        <p className="section-subtitle">Have questions about MentoDesk platforms or enterprise custom development?</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        <div className="minimal-card" style={{ padding: '2rem' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '1.25rem' }}>Headquarters</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <MapPin size={18} color="var(--brand-green)" style={{ marginTop: '0.2rem' }} />
              <div>
                <strong>Marina Bay Financial Tower 2</strong><br />
                10 Marina Boulevard, Singapore 018983
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Mail size={18} color="var(--brand-green)" />
              <span>enterprise@mentodesk.com</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Phone size={18} color="var(--brand-green)" />
              <span>+65 6701 8890</span>
            </div>
          </div>
        </div>

        <div className="minimal-card" style={{ padding: '2rem' }}>
          {!submitted ? (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '0.5rem' }}>Send Us a Message</h3>
              <input type="text" required placeholder="Your Name" className="input-minimal" />
              <input type="email" required placeholder="Your Email" className="input-minimal" />
              <textarea required rows={4} placeholder="How can we help your institution?" className="input-minimal" style={{ resize: 'vertical' }}></textarea>
              <button type="submit" className="btn-primary" style={{ justifyContent: 'center' }}>
                Send Message <Send size={15} />
              </button>
            </form>
          ) : (
            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--brand-green)', marginBottom: '0.5rem' }}>Message Sent</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Thank you for reaching out. We will get back to you shortly.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
