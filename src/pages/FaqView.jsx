import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FaqView({ onRequestDemo }) {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'What is MentoDesk Smart Campus?',
      a: 'MentoDesk is an IoT-enabled desk allocation, contactless attendance tracking, and campus facility management platform engineered for higher education and enterprises.'
    },
    {
      q: 'How does the Fee Management System automate recovery?',
      a: 'The Fee Engine integrates directly with gateways like Stripe and DBS PayLah!, sending automated reminders, generating PDF invoices, and auto-reconciling bank ledgers with zero manual labor.'
    },
    {
      q: 'Is the LMS platform SCORM and mobile compliant?',
      a: 'Yes, the Customized LMS is fully SCORM compliant, supports mobile offline learning, live video streaming, and AI assignment grading rubrics.'
    },
    {
      q: 'What data security standards does MentoDesk adhere to?',
      a: 'All MentoDesk platforms are ISO 27001 certified, SOC 2 compliant, and feature role-based end-to-end data encryption.'
    }
  ];

  return (
    <div className="container" style={{ paddingTop: '2.5rem', paddingBottom: '4rem', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
      <div className="section-header">
        <span className="section-label">FAQ</span>
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">Common technical and deployment questions answered.</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '720px', margin: '0 auto', width: '100%' }}>
        {faqs.map((faq, idx) => (
          <div key={idx} className="minimal-card" style={{ padding: '1.25rem 1.5rem', cursor: 'pointer' }} onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: '700', fontSize: '0.95rem' }}>
              <span>{faq.q}</span>
              <ChevronDown size={18} style={{ transform: openIdx === idx ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
            </div>
            {openIdx === idx && (
              <p style={{ marginTop: '0.75rem', fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6', borderTop: '1px solid var(--border-color)', paddingTop: '0.75rem' }}>
                {faq.a}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
