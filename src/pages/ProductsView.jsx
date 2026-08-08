import React from 'react';
import { Monitor, CreditCard, BookOpen, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ProductsView({ onRequestDemo }) {
  const products = [
    {
      title: 'MentoDesk Smart Campus',
      tag: 'Flagship Desk & Operations IP',
      desc: 'IoT-enabled seat allocation, contactless turnstile attendance, biometric hardware sync, and real-time facility map for multi-building campus environments.',
      features: ['Biometric & Beacon Sync', 'Live Occupancy Heatmap', 'Role-based Student & Admin Portals', 'Automated Facility Allocation'],
      icon: Monitor,
      badgeColor: '#00b853'
    },
    {
      title: 'Fee Management Engine',
      tag: 'Financial Automation IP',
      desc: 'Multi-currency tuition billing engine, automated reminder workflows, DBS & Stripe gateway reconciliation, and instant PDF receipt generation.',
      features: ['99.8% Recovery Acceleration', 'Zero Manual Reconciliation', 'Multi-currency Tuition Schedules', 'Automated Payment Reminders'],
      icon: CreditCard,
      badgeColor: '#0284c7'
    },
    {
      title: 'Customized LMS Portal',
      tag: 'Virtual Learning IP',
      desc: 'High-performance virtual learning platform featuring AI assignment evaluation, SCORM compliance, high-bandwidth video streaming, and mobile learning.',
      features: ['AI Quiz & Rubric Scoring', 'Live Video Class Integration', 'White-Label Branding Suite', 'Offline Mobile Sync'],
      icon: BookOpen,
      badgeColor: '#059669'
    }
  ];

  return (
    <div className="container" style={{ paddingTop: '2.5rem', paddingBottom: '4rem', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      <div className="section-header">
        <span className="section-label">Core IP Products</span>
        <h2 className="section-title">Enterprise Software Product Suite</h2>
        <p className="section-subtitle">Scalable, mission-critical product platforms built for campus operations and education management.</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {products.map((prod, idx) => {
          const IconComp = prod.icon;
          return (
            <div key={idx} className="minimal-card" style={{ padding: '2rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center' }}>
                <div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', fontWeight: '600', textTransform: 'uppercase', color: prod.badgeColor, marginBottom: '0.6rem' }}>
                    <IconComp size={16} /> {prod.tag}
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>{prod.title}</h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>{prod.desc}</p>
                  
                  <button onClick={() => onRequestDemo(`Demo: ${prod.title}`)} className="btn-primary" style={{ fontSize: '0.88rem' }}>
                    Schedule Technical Walkthrough <ArrowRight size={15} />
                  </button>
                </div>

                <div style={{ background: 'var(--bg-subtle)', padding: '1.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
                  <div style={{ fontSize: '0.82rem', fontWeight: '600', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.85rem' }}>Core Capabilities</div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    {prod.features.map((feat, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <CheckCircle2 size={16} color={prod.badgeColor} /> {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
