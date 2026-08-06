import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Header({ currentView, setCurrentView, onRequestDemo }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products', hasDropdown: true },
    { id: 'services', label: 'Services' },
    { id: 'industries', label: 'Industries' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'about', label: 'About Us' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id) => {
    setCurrentView(id);
    setMobileMenuOpen(false);
    setProductDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header style={{
      background: '#ffffff',
      borderBottom: '1px solid var(--border-color)',
      position: 'sticky',
      top: 0,
      zIndex: 50
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>
        
        {/* Logo */}
        <div onClick={() => handleNavClick('home')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
          <img src="/logo.png" alt="mentodesk" style={{ height: '32px', objectFit: 'contain' }} />
        </div>

        {/* Navigation */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          {navLinks.map((link) => (
            <div key={link.id} style={{ position: 'relative' }}>
              {link.hasDropdown ? (
                <div 
                  onMouseEnter={() => setProductDropdownOpen(true)}
                  onMouseLeave={() => setProductDropdownOpen(false)}
                >
                  <button 
                    onClick={() => handleNavClick('products')}
                    style={{
                      background: 'none',
                      fontSize: '0.88rem',
                      fontWeight: currentView === 'products' ? '700' : '500',
                      color: currentView === 'products' ? 'var(--brand-green)' : 'var(--text-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.2rem',
                      padding: '0.4rem 0'
                    }}
                  >
                    Products <ChevronDown size={13} />
                  </button>

                  {productDropdownOpen && (
                    <div style={{
                      position: 'absolute',
                      top: '100%',
                      left: 0,
                      width: '240px',
                      background: '#ffffff',
                      border: '1px solid var(--border-color)',
                      borderRadius: 'var(--radius-sm)',
                      boxShadow: 'var(--shadow-card)',
                      padding: '0.5rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.25rem',
                      zIndex: 100
                    }}>
                      <div onClick={() => handleNavClick('products')} style={{ padding: '0.5rem', borderRadius: '4px', cursor: 'pointer', fontSize: '0.85rem', fontWeight: '600' }}>
                        MentoDesk Smart Campus
                      </div>
                      <div onClick={() => handleNavClick('products')} style={{ padding: '0.5rem', borderRadius: '4px', cursor: 'pointer', fontSize: '0.85rem', fontWeight: '600' }}>
                        Fee Management System
                      </div>
                      <div onClick={() => handleNavClick('products')} style={{ padding: '0.5rem', borderRadius: '4px', cursor: 'pointer', fontSize: '0.85rem', fontWeight: '600' }}>
                        Customized LMS
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => handleNavClick(link.id)}
                  style={{
                    background: 'none',
                    fontSize: '0.88rem',
                    fontWeight: currentView === link.id ? '700' : '500',
                    color: currentView === link.id ? 'var(--brand-green)' : 'var(--text-secondary)',
                    padding: '0.4rem 0'
                  }}
                >
                  {link.label}
                </button>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button onClick={() => onRequestDemo('Request Demo')} className="btn-primary" style={{ padding: '0.55rem 1.1rem', fontSize: '0.85rem' }}>
            Request Demo
          </button>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="mobile-toggle" style={{ display: 'none', background: 'none', padding: '0.25rem' }}>
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{ background: '#ffffff', borderTop: '1px solid var(--border-color)', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {navLinks.map((link) => (
            <button key={link.id} onClick={() => handleNavClick(link.id)} style={{ background: 'none', textAlign: 'left', padding: '0.5rem 0', fontSize: '0.9rem', color: currentView === link.id ? 'var(--brand-green)' : 'var(--text-primary)' }}>
              {link.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
}
