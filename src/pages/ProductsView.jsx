import React from 'react';
import { Monitor, CreditCard, BookOpen, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ProductsView({ onRequestDemo }) {
  return (
    <div className="flex flex-col gap-24 pb-20 pt-10">
      
      {/* 1. Header Section */}
      <div className="container">
        <div className="text-center max-w-[700px] mx-auto mb-10">
          <span className="inline-block text-[0.78rem] font-bold uppercase tracking-[0.1em] text-brand-green bg-brand-green/10 px-4 py-1.5 rounded-full mb-4">
            Core IP Products
          </span>
          <h2 className="text-[2.5rem] lg:text-[3rem] font-bold text-gray-900 mb-6 tracking-tight leading-tight">
            Enterprise Software Product Suite
          </h2>
          <p className="text-[1.1rem] text-gray-500 leading-relaxed">
            Scalable, mission-critical product platforms built specifically for modern campus operations, tuition automation, and custom education management.
          </p>
        </div>
      </div>

      {/* 2. MentoDesk Smart Campus (Text Left, Image Right) */}
      <section className="container">
        <div className="bg-white rounded-3xl p-8 lg:p-14 border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_-10px_rgba(0,184,83,0.1)] transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-green/10 text-brand-green text-[0.8rem] font-bold uppercase tracking-wider mb-5">
                <Monitor size={18} /> Flagship Desk & Operations IP
              </div>
              <h3 className="text-[2rem] font-bold text-gray-900 mb-4 tracking-tight leading-snug">
                MentoDesk Smart Campus
              </h3>
              <p className="text-[1.05rem] text-gray-500 leading-relaxed mb-8">
                IoT-enabled seat allocation, contactless turnstile attendance, biometric hardware sync, and real-time facility map for multi-building campus environments.
              </p>
              
              <div className="bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-100">
                <h4 className="text-[0.85rem] font-bold uppercase text-gray-400 tracking-wider mb-4">Core Capabilities</h4>
                <ul className="flex flex-col gap-4">
                  {[
                    'Biometric & Beacon Sync',
                    'Live Occupancy Heatmap',
                    'Role-based Student & Admin Portals',
                    'Automated Facility Allocation'
                  ].map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-[0.95rem] text-gray-700 font-medium">
                      <CheckCircle2 size={20} className="text-brand-green shrink-0" /> {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <button onClick={() => onRequestDemo(`Demo: MentoDesk Smart Campus`)} className="bg-brand-green text-white py-3.5 px-8 rounded-xl font-bold inline-flex items-center gap-2 shadow-[0_8px_25px_rgba(0,184,83,0.3)] hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,184,83,0.4)] transition-all">
                Schedule Technical Walkthrough <ArrowRight size={18} />
              </button>
            </div>

            <div className="order-1 lg:order-2 relative w-full h-full min-h-[300px] lg:min-h-[450px]">
               <div className="absolute inset-0 bg-brand-green/5 transform rotate-2 rounded-3xl -z-10"></div>
               <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80" alt="MentoDesk Dashboard Preview" className="w-full h-full object-cover rounded-3xl shadow-xl border border-gray-100" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Fee Management Engine (Image Left, Text Right) */}
      <section className="container">
        <div className="bg-white rounded-3xl p-8 lg:p-14 border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_-10px_rgba(2,132,199,0.1)] transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative w-full h-full min-h-[300px] lg:min-h-[450px]">
               <div className="absolute inset-0 bg-sky-500/5 transform -rotate-2 rounded-3xl -z-10"></div>
               <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80" alt="Fee Management Preview" className="w-full h-full object-cover rounded-3xl shadow-xl border border-gray-100" />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/10 text-sky-600 text-[0.8rem] font-bold uppercase tracking-wider mb-5">
                <CreditCard size={18} /> Financial Automation IP
              </div>
              <h3 className="text-[2rem] font-bold text-gray-900 mb-4 tracking-tight leading-snug">
                Fee Management Engine
              </h3>
              <p className="text-[1.05rem] text-gray-500 leading-relaxed mb-8">
                Multi-currency tuition billing engine, automated reminder workflows, DBS & Stripe gateway reconciliation, and instant PDF receipt generation.
              </p>
              
              <div className="bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-100">
                <h4 className="text-[0.85rem] font-bold uppercase text-gray-400 tracking-wider mb-4">Core Capabilities</h4>
                <ul className="flex flex-col gap-4">
                  {[
                    '99.8% Recovery Acceleration',
                    'Zero Manual Reconciliation',
                    'Multi-currency Tuition Schedules',
                    'Automated Payment Reminders'
                  ].map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-[0.95rem] text-gray-700 font-medium">
                      <CheckCircle2 size={20} className="text-sky-500 shrink-0" /> {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <button onClick={() => onRequestDemo(`Demo: Fee Management Engine`)} className="bg-sky-600 text-white py-3.5 px-8 rounded-xl font-bold inline-flex items-center gap-2 shadow-[0_8px_25px_rgba(2,132,199,0.3)] hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(2,132,199,0.4)] transition-all">
                Schedule Technical Walkthrough <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Customized LMS Portal (Text Left, Image Right) */}
      <section className="container">
        <div className="bg-white rounded-3xl p-8 lg:p-14 border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_-10px_rgba(139,92,246,0.1)] transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 text-violet-600 text-[0.8rem] font-bold uppercase tracking-wider mb-5">
                <BookOpen size={18} /> Virtual Learning IP
              </div>
              <h3 className="text-[2rem] font-bold text-gray-900 mb-4 tracking-tight leading-snug">
                Customized LMS Portal
              </h3>
              <p className="text-[1.05rem] text-gray-500 leading-relaxed mb-8">
                High-performance virtual learning platform featuring AI assignment evaluation, SCORM compliance, high-bandwidth video streaming, and mobile learning.
              </p>
              
              <div className="bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-100">
                <h4 className="text-[0.85rem] font-bold uppercase text-gray-400 tracking-wider mb-4">Core Capabilities</h4>
                <ul className="flex flex-col gap-4">
                  {[
                    'AI Quiz & Rubric Scoring',
                    'Live Video Class Integration',
                    'White-Label Branding Suite',
                    'Offline Mobile Sync'
                  ].map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-[0.95rem] text-gray-700 font-medium">
                      <CheckCircle2 size={20} className="text-violet-500 shrink-0" /> {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <button onClick={() => onRequestDemo(`Demo: Customized LMS Portal`)} className="bg-violet-600 text-white py-3.5 px-8 rounded-xl font-bold inline-flex items-center gap-2 shadow-[0_8px_25px_rgba(139,92,246,0.3)] hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(139,92,246,0.4)] transition-all">
                Schedule Technical Walkthrough <ArrowRight size={18} />
              </button>
            </div>

            <div className="order-1 lg:order-2 relative w-full h-full min-h-[300px] lg:min-h-[450px]">
               <div className="absolute inset-0 bg-violet-500/5 transform rotate-2 rounded-3xl -z-10"></div>
               <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80" alt="LMS Portal Preview" className="w-full h-full object-cover rounded-3xl shadow-xl border border-gray-100" />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
