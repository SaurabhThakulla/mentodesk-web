import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Monitor, 
  CreditCard, 
  BookOpen, 
  ShieldCheck, 
  Zap, 
  Layers, 
  Smartphone, 
  Server, 
  Calculator,
  GraduationCap
} from 'lucide-react';
import DashboardPreview from '../components/DashboardPreview';
import RoiCalculator from '../components/RoiCalculator';

export default function HomeView({ setCurrentView, onRequestDemo }) {
  const [activeTab, setActiveTab] = useState('mentodesk');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem', paddingBottom: '4rem' }}>
      
      {/* 1. HERO SECTION - ULTRA CLEAN MODERN ENTERPRISE */}
      <section style={{ paddingTop: '3.5rem', paddingBottom: '1rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '3rem', alignItems: 'center' }}>
            
            {/* Left Column: Hero Text */}
            <div>
              <div className="badge-minimal" style={{ marginBottom: '1.25rem' }}>
                <ShieldCheck size={14} /> ISO 27001 & SOC 2 Certified Enterprise Platform
              </div>

              <h1 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.4rem)', fontWeight: '800', lineHeight: '1.15', marginBottom: '1.25rem', color: 'var(--text-primary)' }}>
                Smart Campus & Enterprise Software, <span style={{ color: 'var(--brand-green)' }}>Built for Scale.</span>
              </h1>

              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: '1.65', marginBottom: '2rem', maxWidth: '540px' }}>
                MentoDesk Technologies builds mission-critical product platforms for educational institutions and enterprise clients. Powering <strong>Smart Campus Desk Operations</strong>, <strong>Fee Automation</strong>, and customized <strong>LMS Platforms</strong>.
              </p>

              <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                <button onClick={() => onRequestDemo('Request Demo')} className="btn-primary" style={{ padding: '0.8rem 1.6rem', fontSize: '0.95rem' }}>
                  Request Live Demo <ArrowRight size={16} />
                </button>
                <button onClick={() => onRequestDemo('Schedule Consultation')} className="btn-secondary" style={{ padding: '0.8rem 1.6rem', fontSize: '0.95rem' }}>
                  Book Architecture Call
                </button>
              </div>

              {/* Trust Badges Bar */}
              <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={15} color="#00b853" /> 50+ Enterprise Deployments
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={15} color="#00b853" /> 100k+ Active Users Daily
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={15} color="#00b853" /> 99.98% System SLA
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Snapshot Console */}
            <div>
              <DashboardPreview />
            </div>

          </div>
        </div>
      </section>

      {/* 2. THREE FLAGSHIP PRODUCT CARDS */}
      <section className="container">
        <div className="section-header">
          <span className="section-label">Core Product Suite</span>
          <h2 className="section-title">Three Mission-Critical Platforms</h2>
          <p className="section-subtitle">Engineered specifically for campus operations, tuition billing, and virtual learning.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          
          {/* Card 1: MentoDesk */}
          <div className="minimal-card" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ width: '44px', height: '44px', borderRadius: '8px', background: 'var(--brand-green-subtle)', color: 'var(--brand-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', border: '1px solid var(--brand-green-border)' }}>
                <Monitor size={22} />
              </div>

              <div style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--brand-green)', marginBottom: '0.35rem' }}>
                Flagship Desk Ops
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                MentoDesk Smart Campus
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                IoT-enabled desk management, contactless attendance tracker, and facility allocation platform for multi-building campus layouts.
              </p>

              <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem', marginBottom: '1.5rem' }}>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  <li style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}><CheckCircle2 size={14} color="#00b853" /> IoT Beacon & Biometric Hardware Sync</li>
                  <li style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}><CheckCircle2 size={14} color="#00b853" /> Real-time Occupancy & Seat Map</li>
                  <li style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}><CheckCircle2 size={14} color="#00b853" /> Role-based Admin & Student Portals</li>
                </ul>
              </div>
            </div>

            <button onClick={() => setCurrentView('products')} className="btn-secondary" style={{ width: '100%', justifyContent: 'center', fontSize: '0.85rem' }}>
              Explore MentoDesk Specs <ArrowRight size={14} />
            </button>
          </div>

          {/* Card 2: Fee Engine */}
          <div className="minimal-card" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ width: '44px', height: '44px', borderRadius: '8px', background: '#f0f9ff', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', border: '1px solid #bae6fd' }}>
                <CreditCard size={22} />
              </div>

              <div style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: '#0284c7', marginBottom: '0.35rem' }}>
                Financial Automation
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                Fee Management System
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                Automated tuition engine with multi-currency billing structures, payment gateway integrations, PDF receipts, and ledger reconciliation.
              </p>

              <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem', marginBottom: '1.5rem' }}>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  <li style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}><CheckCircle2 size={14} color="#00b853" /> 99.8% On-Time Fee Recovery</li>
                  <li style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}><CheckCircle2 size={14} color="#00b853" /> Stripe & DBS PayLah! Multi-Gateway</li>
                  <li style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}><CheckCircle2 size={14} color="#00b853" /> Zero Manual Bank Reconciliation</li>
                </ul>
              </div>
            </div>

            <button onClick={() => setCurrentView('products')} className="btn-secondary" style={{ width: '100%', justifyContent: 'center', fontSize: '0.85rem' }}>
              Explore Fee Engine <ArrowRight size={14} />
            </button>
          </div>

          {/* Card 3: LMS */}
          <div className="minimal-card" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ width: '44px', height: '44px', borderRadius: '8px', background: '#ecfdf5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', border: '1px solid #a7f3d0' }}>
                <BookOpen size={22} />
              </div>

              <div style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: '#059669', marginBottom: '0.35rem' }}>
                Virtual Learning
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                Customized LMS Portal
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                Virtual learning platform with video streaming, AI assignment evaluation, grading rubrics, live class integrations, and mobile learning.
              </p>

              <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem', marginBottom: '1.5rem' }}>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  <li style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}><CheckCircle2 size={14} color="#00b853" /> AI Quiz Generator & Scoring</li>
                  <li style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}><CheckCircle2 size={14} color="#00b853" /> High-Bandwidth Video Streaming</li>
                  <li style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}><CheckCircle2 size={14} color="#00b853" /> White-Label College Branding</li>
                </ul>
              </div>
            </div>

            <button onClick={() => setCurrentView('products')} className="btn-secondary" style={{ width: '100%', justifyContent: 'center', fontSize: '0.85rem' }}>
              Explore LMS Specs <ArrowRight size={14} />
            </button>
          </div>

        </div>
      </section>

      {/* 3. SPOTLIGHT CASE STUDY: NIELLZ INTERNATIONAL COLLEGE (SINGAPORE) */}
      <section className="container">
        <div className="minimal-card" style={{ padding: '2.5rem', background: '#ffffff', border: '1.5px solid var(--brand-green-border)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '2.5rem', alignItems: 'center' }}>
            
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '6px', background: 'var(--brand-green)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <GraduationCap size={18} />
                </div>
                <span style={{ fontSize: '0.78rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--brand-green)' }}>
                  Spotlight Case Study
                </span>
              </div>

              <h2 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                Niellz International College (Singapore)
              </h2>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.65', marginBottom: '1.5rem' }}>
                Faced with managing 45,000+ multinational students across 3 physical campus sites in Singapore, Niellz International College deployed an integrated MentoDesk Smart Campus & Fee Management Engine.
              </p>

              <button onClick={() => setCurrentView('case-studies')} className="btn-primary" style={{ padding: '0.65rem 1.4rem', fontSize: '0.88rem' }}>
                Read Full Case Study <ArrowRight size={15} />
              </button>
            </div>

            {/* Right Side: Key Metrics Grid */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div style={{ padding: '1rem 1.25rem', background: 'var(--brand-green-subtle)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--brand-green-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Admin Efficiency</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--brand-green)' }}>60% Time Saved</div>
                </div>
              </div>

              <div style={{ padding: '1rem 1.25rem', background: '#f0f9ff', borderRadius: 'var(--radius-sm)', border: '1px solid #bae6fd', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Fee Recovery Rate</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#0284c7' }}>99.8% Recovery</div>
                </div>
              </div>

              <div style={{ padding: '1rem 1.25rem', background: '#f8faf9', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Active Student Scale</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-primary)' }}>45,000 Students</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SOFTWARE ENGINEERING & SERVICES GRID */}
      <section className="container">
        <div className="section-header">
          <span className="section-label">Software Services</span>
          <h2 className="section-title">Custom Development & ERP Solutions</h2>
          <p className="section-subtitle">Full-service software engineering tailored to your enterprise architecture.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
          {[
            { title: 'Custom Software Dev', desc: 'Bespoke web & desktop software tailored to unique business logic.', icon: Zap },
            { title: 'Enterprise ERP Solutions', desc: 'ERP ecosystem integration for finance, HR, inventory, and operations.', icon: Layers },
            { title: 'Mobile App Development', desc: 'Native iOS & Android apps built with high-performance tech.', icon: Smartphone },
            { title: 'Cloud DevOps & 24/7 SLA', desc: 'AWS/GCP infrastructure setup and guaranteed uptime SLAs.', icon: Server }
          ].map((service, idx) => {
            const IconComp = service.icon;
            return (
              <div key={idx} className="minimal-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '6px', background: 'var(--bg-subtle)', color: 'var(--brand-green)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <IconComp size={20} />
                </div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--text-primary)' }}>{service.title}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>{service.desc}</p>
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: 'center', marginTop: '1.75rem' }}>
          <button onClick={() => setCurrentView('services')} className="btn-secondary" style={{ fontSize: '0.88rem' }}>
            View All Engineering Services <ArrowRight size={14} />
          </button>
        </div>
      </section>

      {/* 5. INTERACTIVE ROI VALUE CALCULATOR */}
      <section className="container">
        <RoiCalculator onRequestDemo={onRequestDemo} />
      </section>

      {/* 6. HIGH-CONVERTING BOTTOM CALL-TO-ACTION */}
      <section className="container">
        <div style={{
          background: 'var(--brand-green)',
          borderRadius: 'var(--radius-md)',
          padding: '3rem 2rem',
          textAlign: 'center',
          color: '#ffffff'
        }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '0.5rem', color: '#ffffff' }}>
            Ready to Modernize Your Operations with MentoDesk?
          </h2>
          <p style={{ fontSize: '1rem', opacity: 0.95, maxWidth: '560px', margin: '0 auto 1.75rem', lineHeight: '1.6' }}>
            Join 50+ leading institutions like Niellz International College. Schedule a 1-on-1 architecture consultation today.
          </p>

          <div style={{ display: 'flex', gap: '0.85rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => onRequestDemo('Request Demo')} style={{ padding: '0.75rem 1.6rem', borderRadius: 'var(--radius-sm)', background: '#ffffff', color: 'var(--brand-green)', fontWeight: '700', fontSize: '0.9rem' }}>
              Request Live Demo
            </button>
            <button onClick={() => onRequestDemo('Schedule Consultation')} style={{ padding: '0.75rem 1.6rem', borderRadius: 'var(--radius-sm)', background: 'transparent', border: '1px solid #ffffff', color: '#ffffff', fontWeight: '600', fontSize: '0.9rem' }}>
              Schedule Call
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
