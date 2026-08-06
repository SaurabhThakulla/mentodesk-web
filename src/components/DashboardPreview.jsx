import React from 'react';
import { Monitor, Users, CheckCircle2, TrendingUp, Cpu, Server } from 'lucide-react';

export default function DashboardPreview() {
  return (
    <div className="minimal-card" style={{ padding: '1.5rem', background: '#ffffff' }}>
      {/* Console Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', paddingBottom: '0.85rem', borderBottom: '1px solid var(--border-color)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }}></div>
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }}></div>
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }}></div>
          <span style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-muted)', marginLeft: '0.5rem' }}>
            MentoDesk Control Console v4.2
          </span>
        </div>
        <div style={{ fontSize: '0.75rem', color: 'var(--brand-green)', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
          <Cpu size={14} /> System Live
        </div>
      </div>

      {/* Metrics Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.85rem', marginBottom: '1.25rem' }}>
        <div style={{ padding: '0.85rem', background: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)' }}>
          <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>Desk Occupancy</div>
          <div style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--text-primary)' }}>87.4%</div>
          <div style={{ fontSize: '0.7rem', color: '#00b853' }}>+12.3% peak load</div>
        </div>

        <div style={{ padding: '0.85rem', background: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)' }}>
          <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>Fee Recovery</div>
          <div style={{ fontSize: '1.25rem', fontWeight: '800', color: '#0284c7' }}>99.8%</div>
          <div style={{ fontSize: '0.7rem', color: '#0284c7' }}>Auto-reconciled</div>
        </div>

        <div style={{ padding: '0.85rem', background: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)' }}>
          <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>Active LMS Users</div>
          <div style={{ fontSize: '1.25rem', fontWeight: '800', color: '#7c3aed' }}>12,450</div>
          <div style={{ fontSize: '0.7rem', color: '#7c3aed' }}>Live Sessions</div>
        </div>
      </div>

      {/* Activity Feed */}
      <div style={{ background: '#fafafa', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', padding: '1rem' }}>
        <div style={{ fontSize: '0.78rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
          Real-Time Operations Feed
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={14} color="#00b853" /> Biometric Sync: Building A Turnstiles
            </span>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Just now</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={14} color="#0284c7" /> DBS Gateway: $42,500 Fee Reconciled
            </span>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>2m ago</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={14} color="#7c3aed" /> LMS: 320 Quizzes AI-Evaluated
            </span>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>5m ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}
