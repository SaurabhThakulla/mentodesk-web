import React, { useState } from 'react';
import { Calculator, ArrowRight, TrendingUp } from 'lucide-react';

export default function RoiCalculator({ onRequestDemo }) {
  const [students, setStudents] = useState(2500);
  const [tuition, setTuition] = useState(8000);

  const annualFeeVolume = students * tuition;
  const estimatedSavings = Math.round(annualFeeVolume * 0.035);
  const hoursSaved = Math.round(students * 1.8);

  return (
    <div className="minimal-card" style={{ padding: '2rem', background: '#ffffff' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
        <Calculator size={20} color="var(--brand-green)" />
        <span className="section-label" style={{ marginBottom: 0 }}>Interactive ROI Estimator</span>
      </div>
      <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
        Calculate Operational Cost Savings with MentoDesk
      </h3>
      <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.75rem' }}>
        Estimate annual tuition recovery acceleration and administrative hour savings for your institution.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontSize: '0.88rem', fontWeight: '600' }}>
              <span>Total Active Students:</span>
              <span style={{ color: 'var(--brand-green)' }}>{students.toLocaleString()} Students</span>
            </div>
            <input 
              type="range" 
              min="500" 
              max="25000" 
              step="500" 
              value={students} 
              onChange={(e) => setStudents(Number(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--brand-green)' }}
            />
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontSize: '0.88rem', fontWeight: '600' }}>
              <span>Avg Annual Tuition Fee ($):</span>
              <span style={{ color: 'var(--brand-green)' }}>${tuition.toLocaleString()} / year</span>
            </div>
            <input 
              type="range" 
              min="1000" 
              max="30000" 
              step="1000" 
              value={tuition} 
              onChange={(e) => setTuition(Number(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--brand-green)' }}
            />
          </div>
        </div>

        <div style={{ padding: '1.5rem', background: 'var(--brand-green-subtle)', borderRadius: 'var(--radius-md)', border: '1px solid var(--brand-green-border)' }}>
          <div style={{ fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--brand-green)', marginBottom: '0.5rem' }}>
            Estimated Annual Return
          </div>
          <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--brand-green)', marginBottom: '0.25rem' }}>
            ${estimatedSavings.toLocaleString()}
          </div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
            + {hoursSaved.toLocaleString()} Administrative Hours Saved Annually
          </div>

          <button onClick={() => onRequestDemo('Custom ROI Report')} className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '0.85rem' }}>
            Get Customized ROI Audit <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
