import React from 'react';
import { GraduationCap, Building2, Globe2, School } from 'lucide-react';

export default function IndustriesView({ onRequestDemo }) {
  const industries = [
    { title: 'Higher Education Universities', desc: 'Multi-campus desk allocation, attendance sync, and tuition fee engines.', icon: GraduationCap },
    { title: 'Vocational & International Colleges', desc: 'Customized LMS platforms, student portals, and automated billing.', icon: Building2 },
    { title: 'Enterprise Corporate Campuses', desc: 'Contactless desk management, IoT occupancy, and visitor desk ops.', icon: Globe2 },
    { title: 'K-12 School Networks', desc: 'Parent fee portals, automated SMS notifications, and attendance tracking.', icon: School }
  ];

  return (
    <div className="container" style={{ paddingTop: '2.5rem', paddingBottom: '3.5rem', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
      <div className="section-header">
        <span className="section-label">Industries Served</span>
        <h2 className="section-title">Tailored Solutions Across Education & Enterprise</h2>
        <p className="section-subtitle">Empowering institutions with custom-fit operational platforms.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
        {industries.map((ind, idx) => {
          const IconComp = ind.icon;
          return (
            <div key={idx} className="minimal-card" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '8px', background: 'var(--brand-green-subtle)', color: 'var(--brand-green)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <IconComp size={22} />
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-primary)' }}>{ind.title}</h3>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>{ind.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
