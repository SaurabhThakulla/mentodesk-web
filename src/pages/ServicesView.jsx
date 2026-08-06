import React from 'react';

export default function ServicesView({ onRequestDemo }) {
  const services = [
    { title: 'Custom Software Dev', desc: 'Bespoke web & desktop software tailored to business logic.' },
    { title: 'Enterprise ERP Solutions', desc: 'ERP integration for HR, finance, inventory, and operations.' },
    { title: 'Mobile App Development', desc: 'Native iOS & Android apps built with high-performance tech.' },
    { title: 'Website & Corporate Portals', desc: 'Modern corporate web portals and intranet suites.' },
    { title: 'API Integration & Migration', desc: 'REST/GraphQL APIs connecting hardware turnstiles & databases.' },
    { title: 'Cloud DevOps & AWS', desc: 'AWS/GCP infrastructure setup and Kubernetes orchestration.' },
    { title: 'WordPress Enterprise Dev', desc: 'High-security WordPress multi-site architecture and custom plugins.' },
    { title: '24/7 SLA & Maintenance', desc: 'Dedicated engineering support teams with guaranteed uptime SLAs.' }
  ];

  return (
    <div className="container" style={{ paddingTop: '2.5rem', paddingBottom: '3.5rem', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
      
      <div className="section-header">
        <span className="section-label">Services</span>
        <h2 className="section-title">Software Engineering Services</h2>
        <p className="section-subtitle">Full lifecycle software engineering, ERP solutions, and cloud maintenance.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
        {services.map((srv, idx) => (
          <div key={idx} className="minimal-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.4rem' }}>{srv.title}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5', marginBottom: '1rem' }}>{srv.desc}</p>
            </div>
            <button onClick={() => onRequestDemo(`Inquiry: ${srv.title}`)} className="btn-secondary" style={{ width: '100%', padding: '0.45rem', fontSize: '0.82rem' }}>
              Inquire Now
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}
