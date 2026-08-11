import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Monitor, 
  CreditCard, 
  BookOpen, 
  Zap, 
  Layers, 
  Smartphone, 
  Server, 
  GraduationCap,
  Sparkles,
  Building2,
  HelpCircle,
  ChevronDown
} from 'lucide-react';
import DashboardPreview from '../components/DashboardPreview';
import RoiCalculator from '../components/RoiCalculator';

export default function HomeView({ setCurrentView, onRequestDemo }) {
  const [openFaqIdx, setOpenFaqIdx] = useState(0);

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
    <div className="flex flex-col gap-20 pb-16">
      
      {/* 1. HERO SECTION - IAMNEO STRUCTURE (Left Text, Right Graphic) */}
      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden min-h-[85vh] flex items-center">
        <div className="absolute top-[-300px] left-1/2 -translate-x-1/2 w-[150vw] h-[1200px] bg-[radial-gradient(ellipse_at_center,rgba(0,184,83,0.12)_0%,rgba(2,132,199,0.06)_35%,rgba(255,255,255,0)_60%)] pointer-events-none z-0"></div>

        <div className="container relative z-10">
          <div className="flex flex-col items-center text-center">
            
            {/* Top: Hero Copy & Actions */}
            <div className="max-w-4xl mx-auto flex flex-col items-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/25 text-brand-green text-[0.82rem] font-semibold mb-6 shadow-[0_2px_10px_rgba(0,184,83,0.08)]">
                <Sparkles size={15} className="shrink-0" />
                <span>Next-Gen AI Campus Operations <span className="hidden sm:inline">• ISO 27001 Certified</span></span>
              </div>

              <h1 className="text-[clamp(2.5rem,4.8vw,4rem)] font-extrabold leading-[1.12] tracking-[-0.03em] mb-6 text-gray-900 text-center max-w-4xl">
                Smart Campus & Enterprise Software, <span className="bg-gradient-to-br from-[#00b853] via-[#008f40] to-sky-600 bg-clip-text text-transparent">Built for Scale.</span>
              </h1>

              <p className="text-[1.15rem] text-gray-500 leading-relaxed mb-9 max-w-2xl text-center">
                Enterprise-grade platforms tailored for modern institutions. Connecting campuses and corporates through <strong>Smart Operations</strong>, <strong>Tuition Automation</strong>, and <strong>Virtual Learning</strong>.
              </p>

              <div className="flex items-center justify-center gap-4 flex-wrap mb-10">
                <button 
                  onClick={() => onRequestDemo('Request Demo')} 
                  className="bg-gradient-to-br from-brand-green to-brand-green-hover text-white py-3.5 px-8 rounded-xl text-[0.96rem] font-bold border-none inline-flex items-center gap-2 shadow-[0_8px_25px_rgba(0,184,83,0.35)] cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,184,83,0.5)]"
                >
                  <Sparkles size={16} />
                  <span>Request Live Demo</span>
                  <ArrowRight size={16} />
                </button>
                <button 
                  onClick={() => onRequestDemo('Schedule Consultation')} 
                  className="bg-white text-gray-900 py-3.5 px-8 rounded-xl text-[0.96rem] font-semibold border border-gray-200 inline-flex items-center gap-2 shadow-[0_2px_8px_rgba(0,0,0,0.04)] cursor-pointer transition-all duration-200 hover:bg-gray-50 hover:border-gray-300 hover:-translate-y-0.5"
                >
                  <span>Enquire Now</span>
                </button>
              </div>

              {/* Social Proof & Trust Metrics */}
              <div className="flex items-center justify-center gap-4 pt-6 border-t border-gray-100 flex-wrap w-full max-w-md">
                <div className="flex items-center">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80" alt="User" className="w-[34px] h-[34px] rounded-full border-2 border-white object-cover" />
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80" alt="User" className="w-[34px] h-[34px] rounded-full border-2 border-white -ml-3 object-cover" />
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80" alt="User" className="w-[34px] h-[34px] rounded-full border-2 border-white -ml-3 object-cover" />
                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80" alt="User" className="w-[34px] h-[34px] rounded-full border-2 border-white -ml-3 object-cover" />
                </div>
                <div className="text-[0.85rem] text-gray-600 font-medium">
                  <span className="font-bold text-gray-900">★★★★★ 4.9/5</span> from 50+ Global Institutions
                </div>
              </div>
            </div>

            {/* Bottom: Interactive Dashboard Preview */}
            <div className="relative w-full max-w-4xl mt-12 text-left hidden">
              <DashboardPreview />
            </div>

          </div>
        </div>
      </section>

      {/* 2. TRUSTED PARTNERS / CLIENTS LOGO TICKER */}
      <section className="container border-y border-gray-100 py-10 bg-white/50">
        <div className="text-center mb-6">
          <p className="text-[0.85rem] font-bold tracking-widest uppercase text-gray-400">Trusted By Leading Institutions & Enterprises</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Placeholder Logos using generic text or Lucide icons for now */}
          <div className="flex items-center gap-2 font-bold text-xl text-gray-800"><GraduationCap size={28}/> Garden City University</div>
          <div className="flex items-center gap-2 font-bold text-xl text-gray-800"><Building2 size={28}/> Niellz International College</div>
          <div className="flex items-center gap-2 font-bold text-xl text-gray-800"><Monitor size={28}/> Innovate Inc</div>
          <div className="flex items-center gap-2 font-bold text-xl text-gray-800"><Layers size={28}/> Synergy Systems</div>
          <div className="flex items-center gap-2 font-bold text-xl text-gray-800"><BookOpen size={28}/> Apex Academy</div>
        </div>
      </section>

      {/* 3. ALTERNATING Z-PATTERN PRODUCT SECTIONS (IAMNEO STYLE) */}
      <section className="container pt-10">
        <div className="text-center max-w-[640px] mx-auto mb-16">
          <span className="inline-block text-[0.72rem] font-semibold uppercase tracking-wider text-brand-green bg-brand-green-subtle px-3 py-1 rounded-full border border-brand-green-border mb-3">
            Our Solutions
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            AI-Powered Solutions Connecting Campuses and Corporates
          </h2>
          <p className="text-[1.05rem] text-gray-600 leading-relaxed">
            Select us for customized software solutions that help enterprises and universities succeed.
          </p>
        </div>

        <div className="flex flex-col gap-24">
          
          {/* Product 1: MentoDesk (Left Text, Right Image) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-green/10 text-brand-green text-[0.78rem] font-bold uppercase tracking-wider mb-4">
                <Monitor size={16} /> Flagship Desk Ops
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
                Transform Campus Operations with MentoDesk
              </h3>
              <p className="text-lg text-gray-500 leading-relaxed mb-6">
                IoT-enabled desk management, contactless attendance tracker, and facility allocation platform for multi-building campus layouts.
              </p>
              <ul className="flex flex-col gap-3 mb-8">
                <li className="flex items-start gap-3 text-base text-gray-700 font-medium">
                  <CheckCircle2 size={20} className="text-brand-green shrink-0 mt-0.5" /> 
                  <span>IoT Beacon & Biometric Hardware Sync</span>
                </li>
                <li className="flex items-start gap-3 text-base text-gray-700 font-medium">
                  <CheckCircle2 size={20} className="text-brand-green shrink-0 mt-0.5" /> 
                  <span>Real-time Occupancy & Seat Map Dashboard</span>
                </li>
                <li className="flex items-start gap-3 text-base text-gray-700 font-medium">
                  <CheckCircle2 size={20} className="text-brand-green shrink-0 mt-0.5" /> 
                  <span>Role-based Admin & Student Portals</span>
                </li>
              </ul>
              <button 
                onClick={() => setCurrentView('products')} 
                className="bg-brand-green text-white py-3 px-7 rounded-xl font-bold inline-flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                Explore MentoDesk Specs <ArrowRight size={18} />
              </button>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="absolute inset-0 bg-brand-green/10 transform rotate-3 rounded-3xl -z-10"></div>
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80" alt="MentoDesk Dashboard" className="rounded-3xl shadow-2xl border border-gray-100 object-cover w-full h-[400px]" />
            </div>
          </div>

          {/* Product 2: Fee Engine (Left Image, Right Text) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-sky-500/10 transform -rotate-3 rounded-3xl -z-10"></div>
              <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80" alt="Fee Management System" className="rounded-3xl shadow-2xl border border-gray-100 object-cover w-full h-[400px]" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/10 text-sky-600 text-[0.78rem] font-bold uppercase tracking-wider mb-4">
                <CreditCard size={16} /> Financial Automation
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
                Transform Fee Collection with Automated Engine
              </h3>
              <p className="text-lg text-gray-500 leading-relaxed mb-6">
                Automated tuition engine with multi-currency billing structures, payment gateway integrations, PDF receipts, and zero-touch ledger reconciliation.
              </p>
              <ul className="flex flex-col gap-3 mb-8">
                <li className="flex items-start gap-3 text-base text-gray-700 font-medium">
                  <CheckCircle2 size={20} className="text-sky-500 shrink-0 mt-0.5" /> 
                  <span>99.8% On-Time Fee Recovery Workflows</span>
                </li>
                <li className="flex items-start gap-3 text-base text-gray-700 font-medium">
                  <CheckCircle2 size={20} className="text-sky-500 shrink-0 mt-0.5" /> 
                  <span>Stripe & DBS PayLah! Multi-Gateway Integration</span>
                </li>
                <li className="flex items-start gap-3 text-base text-gray-700 font-medium">
                  <CheckCircle2 size={20} className="text-sky-500 shrink-0 mt-0.5" /> 
                  <span>Zero Manual Bank Reconciliation Required</span>
                </li>
              </ul>
              <button 
                onClick={() => setCurrentView('products')} 
                className="bg-sky-600 text-white py-3 px-7 rounded-xl font-bold inline-flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                Explore Fee Engine <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Product 3: LMS (Left Text, Right Image) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 text-violet-600 text-[0.78rem] font-bold uppercase tracking-wider mb-4">
                <BookOpen size={16} /> Virtual Learning
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
                Transform Student Education with AI-Ready LMS
              </h3>
              <p className="text-lg text-gray-500 leading-relaxed mb-6">
                High-performance virtual learning platform featuring AI assignment evaluation, grading rubrics, live class integrations, and mobile learning.
              </p>
              <ul className="flex flex-col gap-3 mb-8">
                <li className="flex items-start gap-3 text-base text-gray-700 font-medium">
                  <CheckCircle2 size={20} className="text-violet-500 shrink-0 mt-0.5" /> 
                  <span>AI Quiz Generator & Dynamic Scoring</span>
                </li>
                <li className="flex items-start gap-3 text-base text-gray-700 font-medium">
                  <CheckCircle2 size={20} className="text-violet-500 shrink-0 mt-0.5" /> 
                  <span>High-Bandwidth Live Video Streaming</span>
                </li>
                <li className="flex items-start gap-3 text-base text-gray-700 font-medium">
                  <CheckCircle2 size={20} className="text-violet-500 shrink-0 mt-0.5" /> 
                  <span>White-Label College Branding Options</span>
                </li>
              </ul>
              <button 
                onClick={() => setCurrentView('products')} 
                className="bg-violet-600 text-white py-3 px-7 rounded-xl font-bold inline-flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                Explore LMS Specs <ArrowRight size={18} />
              </button>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="absolute inset-0 bg-violet-500/10 transform rotate-3 rounded-3xl -z-10"></div>
              <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80" alt="LMS Portal" className="rounded-3xl shadow-2xl border border-gray-100 object-cover w-full h-[400px]" />
            </div>
          </div>

        </div>
      </section>

      {/* 4. SOFTWARE ENGINEERING & SERVICES GRID */}
      <section className="container mt-10">
        <div className="text-center max-w-[640px] mx-auto mb-12">
          <span className="inline-block text-[0.78rem] font-bold uppercase tracking-[0.1em] text-brand-green bg-brand-green/10 px-4 py-1.5 rounded-full mb-4">
            Software Services
          </span>
          <h2 className="text-[2rem] font-bold text-gray-900 mb-4 tracking-tight">
            Custom Development & ERP Solutions
          </h2>
          <p className="text-[1rem] text-gray-500 leading-relaxed">
            Full-service software engineering tailored to your enterprise architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Custom Software Dev', desc: 'Bespoke web & desktop software tailored to unique business logic.', icon: Zap },
            { title: 'Enterprise ERP Solutions', desc: 'ERP ecosystem integration for finance, HR, inventory, and operations.', icon: Layers },
            { title: 'Mobile App Development', desc: 'Native iOS & Android apps built with high-performance tech.', icon: Smartphone },
            { title: 'Cloud DevOps & 24/7 SLA', desc: 'AWS/GCP infrastructure setup and guaranteed uptime SLAs.', icon: Server }
          ].map((service, idx) => {
            const IconComp = service.icon;
            return (
              <div key={idx} className="group bg-white border border-gray-200 rounded-2xl p-7 flex flex-col gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:-translate-y-1.5 hover:shadow-[0_12px_30px_-10px_rgba(0,184,83,0.12)] hover:border-brand-green/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 group-hover:from-brand-green/10 group-hover:to-brand-green/5 text-gray-400 group-hover:text-brand-green border border-gray-100 group-hover:border-brand-green/20 flex items-center justify-center transition-colors duration-300">
                  <IconComp size={22} />
                </div>
                <div>
                  <h4 className="text-[1.05rem] font-semibold text-gray-800 mb-2">{service.title}</h4>
                  <p className="text-[0.9rem] text-gray-500 leading-relaxed">{service.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>


      {/* 6. INTERACTIVE ROI VALUE CALCULATOR */}
      <section className="container hidden">
        <RoiCalculator onRequestDemo={onRequestDemo} />
      </section>

      {/* 7. HOMEPAGE FAQ SECTION */}
      <section className="container mt-10 mb-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-[2.8rem] font-bold text-gray-900 mb-4 tracking-tight">
            Got <span className="bg-gradient-to-br from-brand-green to-sky-600 bg-clip-text text-transparent">Questions?</span>
          </h2>
          <p className="text-[1.1rem] text-gray-500 leading-relaxed font-normal">
            Common technical specifications and enterprise deployment details answered.
          </p>
        </div>

        <div className="flex flex-col gap-4 max-w-3xl mx-auto w-full">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-gray-200/80 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:border-brand-green/30 hover:shadow-md"
              onClick={() => setOpenFaqIdx(openFaqIdx === idx ? -1 : idx)}
            >
              <div className="flex items-center justify-between gap-4 font-semibold text-[1.05rem] text-gray-900">
                <span className="flex items-center gap-3">
                  <HelpCircle size={20} className="text-brand-green shrink-0" />
                  {faq.q}
                </span>
                <ChevronDown size={20} className={`text-gray-400 shrink-0 transform transition-transform duration-300 ${openFaqIdx === idx ? 'rotate-180 text-brand-green' : ''}`} />
              </div>
              {openFaqIdx === idx && (
                <p className="mt-4 pt-4 border-t border-gray-100 text-[0.95rem] text-gray-500 leading-relaxed">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
            <button 
                onClick={() => setCurrentView('faq')}
                className="text-brand-green font-semibold hover:underline inline-flex items-center gap-1"
            >
                View all FAQs <ArrowRight size={16} />
            </button>
        </div>
      </section>

      {/* 8. HIGH-CONVERTING BOTTOM CALL-TO-ACTION */}
      <section className="container">
        <div className="bg-brand-green rounded-2xl py-12 px-8 text-center text-white">
          <h2 className="text-3xl font-extrabold mb-2 text-white">
            Ready to Transform Your Campus Placements & Operations?
          </h2>
          <p className="text-base text-white/95 max-w-[560px] mx-auto mb-7 leading-relaxed">
            Join 50+ leading institutions like Niellz International College. Schedule a 1-on-1 architecture consultation today.
          </p>

          <div className="flex gap-3.5 justify-center flex-wrap">
            <button 
              onClick={() => onRequestDemo('Request Demo')} 
              className="py-3 px-6.5 rounded-lg bg-white text-brand-green font-bold text-[0.9rem] border-none cursor-pointer hover:-translate-y-0.5 transition-transform"
            >
              Request Live Demo
            </button>
            <button 
              onClick={() => onRequestDemo('Schedule Consultation')} 
              className="py-3 px-6.5 rounded-lg bg-transparent border border-white text-white font-semibold text-[0.9rem] cursor-pointer hover:bg-white/10 transition-colors"
            >
              Schedule Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
