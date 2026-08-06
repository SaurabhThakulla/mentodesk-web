import React from 'react';
import { GraduationCap, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CaseStudiesView({ onRequestDemo }) {
  return (
    <div className="container" style={{ paddingTop: '2.5rem', paddingBottom: '3.5rem', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
      <div className="section-header">
        <span className="section-label">Case Studies & Deployments</span>
        <h2 className="section-title">Enterprise Success Stories</h2>
        <p className="section-subtitle">Real-world impact across higher education institutions in Asia-Pacific.</p>
      </div>

      <div className="minimal-card" style={{ padding: '2.5rem', background: '#ffffff' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
          <GraduationCap size={20} color="var(--brand-green)" />
          <span style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--brand-green)' }}>Singapore EdTech Deployment</span>
        </div>
        <h3 style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem', color: 'var(--text-primary)' }}>
          Niellz International College (Singapore)
        </h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.65', marginBottom: '1.5rem' }}>
          Niellz International College deployed MentoDesk Smart Campus & Fee Management Engine across 3 physical campus sites in Singapore, servicing 45,000+ active students.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem' }}>
          <div>
            <div style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--brand-green)' }}>60% Saved</div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Admin Hours Reduced</div>
          </div>
          <div>
            <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#0284c7' }}>99.8% Recovery</div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Tuition Fee On-Time</div>
          </div>
          <div>
            <div style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--text-primary)' }}>45,000 Users</div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Active Student Scale</div>
          </div>
        </div>
      </div>
    </div>
  );
}
