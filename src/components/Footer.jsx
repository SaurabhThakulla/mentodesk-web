import React from 'react';

export default function Footer({ setCurrentView, onRequestDemo }) {
  const handleNav = (page) => {
    setCurrentView(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ background: '#ffffff', borderTop: '1px solid var(--border-color)', paddingTop: '3rem', paddingBottom: '2rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2.5rem' }}>
          
          <div>
            <img src="/logo.png" alt="mentodesk" style={{ height: '28px', marginBottom: '0.85rem' }} />
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
              Enterprise software platforms and custom solutions for educational and corporate institutions.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '0.88rem', fontWeight: '700', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Products</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              <li><button onClick={() => handleNav('products')} style={{ background: 'none', color: 'inherit' }}>MentoDesk Smart Campus</button></li>
              <li><button onClick={() => handleNav('products')} style={{ background: 'none', color: 'inherit' }}>Fee Management System</button></li>
              <li><button onClick={() => handleNav('products')} style={{ background: 'none', color: 'inherit' }}>Customized LMS</button></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '0.88rem', fontWeight: '700', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Services</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              <li><button onClick={() => handleNav('services')} style={{ background: 'none', color: 'inherit' }}>Custom Software Dev</button></li>
              <li><button onClick={() => handleNav('services')} style={{ background: 'none', color: 'inherit' }}>Enterprise ERP Solutions</button></li>
              <li><button onClick={() => handleNav('services')} style={{ background: 'none', color: 'inherit' }}>Mobile App Development</button></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '0.88rem', fontWeight: '700', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Headquarters</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
              Marina Bay Financial Tower 2, Singapore<br />
              enterprise@mentodesk.com<br />
              +65 6701 8890
            </p>
          </div>

        </div>

        <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          <div>© {new Date().getFullYear()} mentodesk technologies. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#privacy" onClick={(e) => { e.preventDefault(); handleNav('faq'); }}>Privacy</a>
            <a href="#terms" onClick={(e) => { e.preventDefault(); handleNav('faq'); }}>Terms</a>
            <a href="#security" onClick={(e) => { e.preventDefault(); handleNav('faq'); }}>Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
