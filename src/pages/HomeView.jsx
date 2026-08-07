import React from 'react';
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
  Sparkles
} from 'lucide-react';
import DashboardPreview from '../components/DashboardPreview';
import RoiCalculator from '../components/RoiCalculator';

export default function HomeView({ setCurrentView, onRequestDemo }) {
  return (
    <div className="flex flex-col gap-20 pb-16">
      
      {/* 1. HERO SECTION - MODERN ENTERPRISE SAAS HERO */}
      <section className="relative pt-14 pb-12 overflow-hidden">
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[90%] max-w-[1200px] h-[500px] bg-[radial-gradient(circle,rgba(0,184,83,0.12)_0%,rgba(2,132,199,0.08)_40%,rgba(255,255,255,0)_70%)] pointer-events-none z-0"></div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
            
            {/* Left Column: Hero Copy & Actions */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/25 text-brand-green text-[0.82rem] font-semibold mb-5 shadow-[0_2px_10px_rgba(0,184,83,0.08)] whitespace-nowrap">
                <Sparkles size={15} />
                <span>Next-Gen AI Campus Operations • ISO 27001 Certified</span>
              </div>

              <h1 className="text-[clamp(2.5rem,4.2vw,3.6rem)] font-extrabold leading-[1.12] tracking-[-0.03em] mb-5 text-gray-900">
                Smart Campus & Enterprise Software, <span className="bg-gradient-to-br from-[#00b853] via-[#008f40] to-sky-600 bg-clip-text text-transparent">Built for Scale.</span>
              </h1>

              <p className="text-[1.08rem] text-gray-600 leading-relaxed mb-8 max-w-[560px]">
                MentoDesk Technologies builds mission-critical product platforms for educational institutions and enterprise clients. Powering <strong>Smart Campus Operations</strong>, <strong>Tuition Fee Automation</strong>, and customized <strong>LMS Platforms</strong>.
              </p>

              <div className="flex items-center gap-4 flex-wrap mb-9">
                <button 
                  onClick={() => onRequestDemo('Request Demo')} 
                  className="bg-gradient-to-br from-brand-green to-brand-green-hover text-white py-3.5 px-7 rounded-xl text-[0.96rem] font-bold border-none inline-flex items-center gap-2 shadow-[0_8px_25px_rgba(0,184,83,0.35)] cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,184,83,0.5)]"
                >
                  <Sparkles size={16} />
                  <span>Request Live Demo</span>
                  <ArrowRight size={16} />
                </button>
                <button 
                  onClick={() => onRequestDemo('Schedule Consultation')} 
                  className="bg-white text-gray-900 py-3.5 px-7 rounded-xl text-[0.96rem] font-semibold border border-gray-200 inline-flex items-center gap-2 shadow-[0_2px_8px_rgba(0,0,0,0.04)] cursor-pointer transition-all duration-200 hover:bg-gray-50 hover:border-gray-300 hover:-translate-y-0.5"
                >
                  <span>Book Architecture Call</span>
                </button>
              </div>

              {/* Social Proof & Trust Metrics */}
              <div className="flex items-center gap-5 pt-6 border-t border-gray-200 flex-wrap">
                <div className="flex items-center">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80" alt="User" className="w-[34px] h-[34px] rounded-full border-2 border-white object-cover" />
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80" alt="User" className="w-[34px] h-[34px] rounded-full border-2 border-white -ml-2 object-cover" />
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80" alt="User" className="w-[34px] h-[34px] rounded-full border-2 border-white -ml-2 object-cover" />
                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80" alt="User" className="w-[34px] h-[34px] rounded-full border-2 border-white -ml-2 object-cover" />
                </div>
                <div className="text-[0.85rem] text-gray-600 font-medium">
                  <span className="font-bold text-gray-900">★★★★★ 4.9/5</span> from 50+ Global Campus Institutions
                </div>
              </div>

              <div className="flex items-center gap-6 mt-4 text-[0.82rem] text-gray-500 flex-wrap">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-brand-green" /> 50+ Enterprise Deployments
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-brand-green" /> 100k+ Active Daily Users
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-brand-green" /> 99.98% System SLA
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Hero Visual Snapshot Console */}
            <div>
              <DashboardPreview />
            </div>

          </div>
        </div>
      </section>

      {/* 2. THREE FLAGSHIP PRODUCT CARDS */}
      <section className="container">
        <div className="text-center max-w-[640px] mx-auto mb-10">
          <span className="inline-block text-[0.72rem] font-bold uppercase tracking-wider text-brand-green bg-brand-green-subtle px-3 py-1 rounded-full border border-brand-green-border mb-3">
            Core Product Suite
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3 tracking-tight">
            Three Mission-Critical Platforms
          </h2>
          <p className="text-[1.05rem] text-gray-600 leading-relaxed">
            Engineered specifically for campus operations, tuition billing, and virtual learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-7">
          
          {/* Card 1: MentoDesk */}
          <div className="group bg-white border border-gray-200 rounded-2xl p-8 pb-7 flex flex-col justify-between relative overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-green/30 hover:shadow-[0_15px_35px_-10px_rgba(0,184,83,0.12)]">
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-green/10 text-brand-green border border-brand-green/20 flex items-center justify-center mb-5">
                <Monitor size={24} />
              </div>

              <div className="text-[0.72rem] font-bold uppercase tracking-wider text-brand-green mb-1.5">
                Flagship Desk Ops
              </div>
              <h3 className="text-[1.35rem] font-extrabold text-gray-900 mb-2.5 tracking-tight">
                MentoDesk Smart Campus
              </h3>
              <p className="text-[0.9rem] text-gray-600 leading-relaxed mb-6">
                IoT-enabled desk management, contactless attendance tracker, and facility allocation platform for multi-building campus layouts.
              </p>

              <ul className="list-none pt-5 m-0 mb-7 border-t border-gray-200 flex flex-col gap-2.5">
                <li className="flex items-center gap-2 text-[0.84rem] text-gray-600 font-medium">
                  <CheckCircle2 size={15} className="text-brand-green" /> IoT Beacon & Biometric Hardware Sync
                </li>
                <li className="flex items-center gap-2 text-[0.84rem] text-gray-600 font-medium">
                  <CheckCircle2 size={15} className="text-brand-green" /> Real-time Occupancy & Seat Map
                </li>
                <li className="flex items-center gap-2 text-[0.84rem] text-gray-600 font-medium">
                  <CheckCircle2 size={15} className="text-brand-green" /> Role-based Admin & Student Portals
                </li>
              </ul>
            </div>

            <button 
              onClick={() => setCurrentView('products')} 
              className="w-full flex items-center justify-center gap-1.5 py-3 px-5 rounded-xl bg-gray-100 border border-gray-200 text-gray-900 text-[0.88rem] font-semibold cursor-pointer transition-all duration-200 group-hover:bg-brand-green-subtle group-hover:border-brand-green-border group-hover:text-brand-green"
            >
              <span>Explore MentoDesk Specs</span>
              <ArrowRight size={15} />
            </button>
          </div>

          {/* Card 2: Fee Engine */}
          <div className="group bg-white border border-gray-200 rounded-2xl p-8 pb-7 flex flex-col justify-between relative overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1.5 hover:border-sky-600/30 hover:shadow-[0_15px_35px_-10px_rgba(2,132,199,0.12)]">
            <div>
              <div className="w-12 h-12 rounded-xl bg-sky-600/10 text-sky-600 border border-sky-600/20 flex items-center justify-center mb-5">
                <CreditCard size={24} />
              </div>

              <div className="text-[0.72rem] font-bold uppercase tracking-wider text-sky-600 mb-1.5">
                Financial Automation
              </div>
              <h3 className="text-[1.35rem] font-extrabold text-gray-900 mb-2.5 tracking-tight">
                Fee Management System
              </h3>
              <p className="text-[0.9rem] text-gray-600 leading-relaxed mb-6">
                Automated tuition engine with multi-currency billing structures, payment gateway integrations, PDF receipts, and ledger reconciliation.
              </p>

              <ul className="list-none pt-5 m-0 mb-7 border-t border-gray-200 flex flex-col gap-2.5">
                <li className="flex items-center gap-2 text-[0.84rem] text-gray-600 font-medium">
                  <CheckCircle2 size={15} className="text-brand-green" /> 99.8% On-Time Fee Recovery
                </li>
                <li className="flex items-center gap-2 text-[0.84rem] text-gray-600 font-medium">
                  <CheckCircle2 size={15} className="text-brand-green" /> Stripe & DBS PayLah! Multi-Gateway
                </li>
                <li className="flex items-center gap-2 text-[0.84rem] text-gray-600 font-medium">
                  <CheckCircle2 size={15} className="text-brand-green" /> Zero Manual Bank Reconciliation
                </li>
              </ul>
            </div>

            <button 
              onClick={() => setCurrentView('products')} 
              className="w-full flex items-center justify-center gap-1.5 py-3 px-5 rounded-xl bg-gray-100 border border-gray-200 text-gray-900 text-[0.88rem] font-semibold cursor-pointer transition-all duration-200 group-hover:bg-sky-600/10 group-hover:border-sky-600/20 group-hover:text-sky-700"
            >
              <span>Explore Fee Engine</span>
              <ArrowRight size={15} />
            </button>
          </div>

          {/* Card 3: LMS */}
          <div className="group bg-white border border-gray-200 rounded-2xl p-8 pb-7 flex flex-col justify-between relative overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1.5 hover:border-violet-600/30 hover:shadow-[0_15px_35px_-10px_rgba(124,58,237,0.12)]">
            <div>
              <div className="w-12 h-12 rounded-xl bg-violet-600/10 text-violet-600 border border-violet-600/20 flex items-center justify-center mb-5">
                <BookOpen size={24} />
              </div>

              <div className="text-[0.72rem] font-bold uppercase tracking-wider text-violet-600 mb-1.5">
                Virtual Learning
              </div>
              <h3 className="text-[1.35rem] font-extrabold text-gray-900 mb-2.5 tracking-tight">
                Customized LMS Portal
              </h3>
              <p className="text-[0.9rem] text-gray-600 leading-relaxed mb-6">
                Virtual learning platform with video streaming, AI assignment evaluation, grading rubrics, live class integrations, and mobile learning.
              </p>

              <ul className="list-none pt-5 m-0 mb-7 border-t border-gray-200 flex flex-col gap-2.5">
                <li className="flex items-center gap-2 text-[0.84rem] text-gray-600 font-medium">
                  <CheckCircle2 size={15} className="text-brand-green" /> AI Quiz Generator & Scoring
                </li>
                <li className="flex items-center gap-2 text-[0.84rem] text-gray-600 font-medium">
                  <CheckCircle2 size={15} className="text-brand-green" /> High-Bandwidth Video Streaming
                </li>
                <li className="flex items-center gap-2 text-[0.84rem] text-gray-600 font-medium">
                  <CheckCircle2 size={15} className="text-brand-green" /> White-Label College Branding
                </li>
              </ul>
            </div>

            <button 
              onClick={() => setCurrentView('products')} 
              className="w-full flex items-center justify-center gap-1.5 py-3 px-5 rounded-xl bg-gray-100 border border-gray-200 text-gray-900 text-[0.88rem] font-semibold cursor-pointer transition-all duration-200 group-hover:bg-violet-600/10 group-hover:border-violet-600/20 group-hover:text-violet-700"
            >
              <span>Explore LMS Specs</span>
              <ArrowRight size={15} />
            </button>
          </div>

        </div>
      </section>

      {/* 3. SPOTLIGHT CASE STUDY: NIELLZ INTERNATIONAL COLLEGE (SINGAPORE) */}
      <section className="container">
        <div className="bg-gradient-to-br from-white to-brand-green-subtle border-[1.5px] border-brand-green-border rounded-[20px] py-12 px-10 shadow-[0_12px_35px_rgba(0,184,83,0.08)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
            
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-green/10 text-brand-green text-[0.78rem] font-bold uppercase tracking-wider mb-4">
                <GraduationCap size={16} />
                <span>Spotlight Case Study • Singapore Campus</span>
              </div>

              <h2 className="text-[clamp(1.6rem,2.5vw,2.1rem)] font-extrabold text-gray-900 mb-3.5 tracking-tight">
                Niellz International College (Singapore)
              </h2>

              <p className="text-[0.95rem] text-gray-600 leading-relaxed mb-6">
                Faced with managing 45,000+ multinational students across 3 physical campus sites in Singapore, Niellz International College deployed an integrated MentoDesk Smart Campus & Fee Management Engine.
              </p>

              {/* Executive Quote Callout */}
              <div className="bg-white border-l-4 border-brand-green py-3.5 px-4.5 rounded-r-xl text-[0.86rem] italic text-gray-900 mb-7 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
                "MentoDesk transformed our 3 campus locations into a single automated real-time operations dashboard, cutting admin workload by 60%."
                <span className="not-italic font-bold text-[0.78rem] text-brand-green mt-1.5 block">
                  — Dr. Aris Thorne, Director of Campus Operations
                </span>
              </div>

              <button 
                onClick={() => setCurrentView('case-studies')} 
                className="bg-gradient-to-br from-brand-green to-brand-green-hover text-white py-3 px-6 text-[0.9rem] rounded-xl font-bold border-none inline-flex items-center gap-2 cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,184,83,0.5)]"
              >
                <span>Read Full Case Study</span>
                <ArrowRight size={15} />
              </button>
            </div>

            {/* Right Side: Key Metrics Grid */}
            <div className="flex flex-col gap-4">
              <div className="py-4.5 px-5.5 rounded-xl flex items-center justify-between bg-brand-green/10 border border-brand-green/25">
                <div>
                  <div className="text-[0.76rem] text-gray-500 font-medium">Admin Efficiency</div>
                  <div className="text-[1.45rem] font-extrabold text-brand-green">60% Time Saved</div>
                </div>
              </div>

              <div className="py-4.5 px-5.5 rounded-xl flex items-center justify-between bg-sky-600/10 border border-sky-600/25">
                <div>
                  <div className="text-[0.76rem] text-gray-500 font-medium">Fee Recovery Rate</div>
                  <div className="text-[1.45rem] font-extrabold text-sky-600">99.8% Recovery</div>
                </div>
              </div>

              <div className="py-4.5 px-5.5 rounded-xl flex items-center justify-between bg-violet-600/10 border border-violet-600/25">
                <div>
                  <div className="text-[0.76rem] text-gray-500 font-medium">Active Student Scale</div>
                  <div className="text-[1.45rem] font-extrabold text-violet-600">45,000 Students</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SOFTWARE ENGINEERING & SERVICES GRID */}
      <section className="container">
        <div className="text-center max-w-[640px] mx-auto mb-10">
          <span className="inline-block text-[0.72rem] font-bold uppercase tracking-wider text-brand-green bg-brand-green-subtle px-3 py-1 rounded-full border border-brand-green-border mb-3">
            Software Services
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3 tracking-tight">
            Custom Development & ERP Solutions
          </h2>
          <p className="text-[1.05rem] text-gray-600 leading-relaxed">
            Full-service software engineering tailored to your enterprise architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { title: 'Custom Software Dev', desc: 'Bespoke web & desktop software tailored to unique business logic.', icon: Zap },
            { title: 'Enterprise ERP Solutions', desc: 'ERP ecosystem integration for finance, HR, inventory, and operations.', icon: Layers },
            { title: 'Mobile App Development', desc: 'Native iOS & Android apps built with high-performance tech.', icon: Smartphone },
            { title: 'Cloud DevOps & 24/7 SLA', desc: 'AWS/GCP infrastructure setup and guaranteed uptime SLAs.', icon: Server }
          ].map((service, idx) => {
            const IconComp = service.icon;
            return (
              <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-3">
                <div className="w-10 h-10 rounded-lg bg-gray-50 text-brand-green flex items-center justify-center">
                  <IconComp size={20} />
                </div>
                <h4 className="text-[1.05rem] font-bold text-gray-900">{service.title}</h4>
                <p className="text-[0.85rem] text-gray-500 leading-relaxed">{service.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-7">
          <button 
            onClick={() => setCurrentView('services')} 
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-900 font-semibold text-[0.88rem] cursor-pointer transition-all duration-200 hover:bg-gray-50 hover:border-gray-300"
          >
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
        <div className="bg-brand-green rounded-2xl py-12 px-8 text-center text-white">
          <h2 className="text-3xl font-extrabold mb-2 text-white">
            Ready to Modernize Your Operations with MentoDesk?
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
