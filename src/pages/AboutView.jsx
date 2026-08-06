import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function AboutView({ onRequestDemo }) {
  return (
    <div className="container" style={{ paddingTop: '2.5rem', paddingBottom: '3.5rem', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
      
      <div className="section-header">
        <span className="section-label">About Us</span>
        <h2 className="section-title">Product & Software Solutions Enterprise</h2>
        <p className="section-subtitle">We build mission-critical software platforms and custom enterprise solutions.</p>
      </div>

      <div className="minimal-card" style={{ padding: '2rem' }}>
        <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '1rem' }}>Product & Engineering Focus</h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
          MentoDesk Technologies is an enterprise software engineering company. We own and maintain proprietary software platforms with dedicated R&D engineering teams, ISO 27001 data compliance, and 99.98% SLAs.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem' }}>
          <div>
            <div style={{ fontWeight: '700', fontSize: '0.9rem', color: 'var(--brand-green)' }}>✓ Flagship IP</div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>MentoDesk, Fee Engine, LMS</div>
          </div>
          <div>
            <div style={{ fontWeight: '700', fontSize: '0.9rem', color: 'var(--brand-green)' }}>✓ ISO 27001</div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Certified data security</div>
          </div>
          <div>
            <div style={{ fontWeight: '700', fontSize: '0.9rem', color: 'var(--brand-green)' }}>✓ 99.98% SLA</div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Guaranteed system uptime</div>
          </div>
        </div>
      </div>

    </div>
  );
}
