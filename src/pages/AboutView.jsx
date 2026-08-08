import React from 'react';
import { Code2, ShieldCheck, Server, Globe, CheckCircle2, ArrowRight, Award, Zap } from 'lucide-react';

export default function AboutView({ onRequestDemo }) {
  const pillars = [
    { 
      title: 'Proprietary Software IP', 
      desc: 'MentoDesk Technologies owns and operates flagship enterprise platforms including Smart Campus, Fee Engine, and LMS.',
      icon: Code2 
    },
    { 
      title: 'ISO 27001 Data Security', 
      desc: 'Certified data compliance, enterprise role-based access controls, and multi-tenant encrypted cloud databases.',
      icon: ShieldCheck 
    },
    { 
      title: '99.98% SLA Uptime', 
      desc: 'Guaranteed high-availability infrastructure with 24/7 dedicated engineering support teams globally.',
      icon: Server 
    },
    { 
      title: 'Hardware & IoT Integration', 
      desc: 'Seamless REST/GraphQL API connections with physical turnstiles, biometric scanners, and IoT beacons.',
      icon: Globe 
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50/50 relative overflow-hidden flex flex-col items-center justify-center pt-20 pb-28">
      
      {/* Soft Light Mode Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120vw] h-[700px] bg-[radial-gradient(ellipse_at_top,rgba(0,184,83,0.06)_0%,rgba(2,132,199,0.03)_40%,rgba(255,255,255,0)_70%)] pointer-events-none z-0"></div>

      <div className="container relative z-10">
        
        {/* Premium Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200/80 text-gray-600 text-[0.8rem] font-semibold tracking-widest uppercase mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse shadow-[0_0_8px_rgba(0,184,83,0.6)]"></span>
            Corporate Overview
          </div>
          <h2 className="text-[2.8rem] lg:text-[3.8rem] font-bold text-gray-900 mb-6 tracking-tight leading-[1.15]">
            Engineering <span className="bg-gradient-to-br from-brand-green to-sky-600 bg-clip-text text-transparent">Enterprise Software.</span>
          </h2>
          <p className="text-[1.15rem] text-gray-500 leading-relaxed font-normal">
            MentoDesk Technologies is a premier software engineering firm building mission-critical platforms, campus automation IP, and high-security enterprise solutions.
          </p>
        </div>

        {/* Premium Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pillars.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx} 
                className="group relative bg-white/80 backdrop-blur-xl border border-gray-200/60 rounded-3xl p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(0,184,83,0.12)] hover:border-brand-green/30 hover:bg-white"
              >
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200/50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:from-brand-green/10 group-hover:to-brand-green/5 group-hover:border-brand-green/20 transition-all duration-500 shadow-sm">
                    <IconComp size={24} className="text-gray-400 group-hover:text-brand-green transition-colors duration-500" />
                  </div>
                  <h3 className="text-[1.15rem] font-semibold text-gray-900 mb-3 tracking-tight group-hover:text-brand-green transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[0.92rem] text-gray-500 leading-relaxed mb-6 font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enterprise Commitment Banner */}
        <div className="bg-white/90 backdrop-blur-xl border border-gray-200/70 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[0.8rem] font-semibold text-brand-green uppercase tracking-wider mb-2">
              <Award size={16} /> Certified Quality & Security Standard
            </div>
            <h3 className="text-[1.5rem] font-bold text-gray-900 mb-3">Dedicated Enterprise Engineering Team</h3>
            <p className="text-[0.95rem] text-gray-500 leading-relaxed font-normal">
              We partner directly with university chancellor boards, enterprise CTOs, and campus operations leads to deliver full lifecycle software development and long-term support.
            </p>
          </div>

          <button 
            onClick={() => onRequestDemo('Corporate Consultation')} 
            className="px-6 py-3.5 rounded-2xl bg-gray-900 hover:bg-brand-green text-white text-[0.92rem] font-semibold transition-all duration-300 flex items-center gap-2.5 shrink-0 shadow-sm cursor-pointer"
          >
            Connect With Our Team
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </div>
  );
}
