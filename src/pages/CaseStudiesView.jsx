import React from 'react';
import { GraduationCap, ArrowRight, Building2, BookOpen, CheckCircle2, TrendingUp, Users, ShieldCheck } from 'lucide-react';

export default function CaseStudiesView({ onRequestDemo }) {
  const caseStudies = [
    {
      title: 'Niellz International College (Singapore)',
      tag: 'Singapore EdTech Deployment',
      icon: GraduationCap,
      desc: 'Deployed MentoDesk Smart Campus & Fee Management Engine across 3 physical campus sites in Singapore, servicing over 1,500 active students.',
      metrics: [
        { label: 'Admin Hours Saved', value: '60%', color: 'text-brand-green' },
        { label: 'Tuition Fee Recovery', value: '99.8%', color: 'text-sky-600' },
        { label: 'Active Student Users', value: '1,500+', color: 'text-violet-600' }
      ]
    },
    {
      title: 'Pacific Technology University (Australia)',
      tag: 'IoT Campus Operations',
      icon: Building2,
      desc: 'Integrated IoT turnstiles, automated desk management, and biometric beacon sync across multi-building university facilities.',
      metrics: [
        { label: 'Occupancy Efficiency', value: '85%', color: 'text-brand-green' },
        { label: 'Manual Ops Reduced', value: '100%', color: 'text-sky-600' },
        { label: 'Daily Passages', value: '1,800+', color: 'text-violet-600' }
      ]
    },
    {
      title: 'Global EdTech Network (Malaysia)',
      tag: 'Virtual Learning IP',
      icon: BookOpen,
      desc: 'Implemented enterprise customized LMS virtual learning platform featuring AI quiz evaluation, live video classes, and offline mobile sync.',
      metrics: [
        { label: 'Student Engagement', value: '4.9 / 5', color: 'text-brand-green' },
        { label: 'Faster AI Grading', value: '70%', color: 'text-sky-600' },
        { label: 'SCORM Compliance', value: '100%', color: 'text-violet-600' }
      ]
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
            Case Studies & Deployments
          </div>
          <h2 className="text-[2.8rem] lg:text-[3.8rem] font-bold text-gray-900 mb-6 tracking-tight leading-[1.15]">
            Proven <span className="bg-gradient-to-br from-brand-green to-sky-600 bg-clip-text text-transparent">Impact.</span>
          </h2>
          <p className="text-[1.15rem] text-gray-500 leading-relaxed font-normal">
            Real-world enterprise deployments and measurable operational outcomes across higher education and campus networks.
          </p>
        </div>

        {/* Premium Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx} 
                className="group relative bg-white/80 backdrop-blur-xl border border-gray-200/60 rounded-3xl p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(0,184,83,0.12)] hover:border-brand-green/30 hover:bg-white"
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200/50 flex items-center justify-center group-hover:scale-110 group-hover:from-brand-green/10 group-hover:to-brand-green/5 group-hover:border-brand-green/20 transition-all duration-500 shadow-sm">
                      <IconComp size={24} className="text-gray-400 group-hover:text-brand-green transition-colors duration-500" />
                    </div>
                    <span className="text-[0.75rem] font-semibold text-brand-green bg-brand-green/10 px-3 py-1 rounded-full uppercase tracking-wider">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-[1.25rem] font-semibold text-gray-900 mb-3 tracking-tight group-hover:text-brand-green transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[0.92rem] text-gray-500 leading-relaxed mb-8 font-normal">
                    {item.desc}
                  </p>

                  {/* Metrics Bar */}
                  <div className="grid grid-cols-3 gap-2 pt-6 border-t border-gray-100 mb-8">
                    {item.metrics.map((m, i) => (
                      <div key={i} className="text-center">
                        <div className={`text-[1.15rem] font-bold ${m.color}`}>{m.value}</div>
                        <div className="text-[0.72rem] text-gray-400 leading-snug mt-0.5">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <button 
                  onClick={() => onRequestDemo(`Case Study Inquiry: ${item.title}`)} 
                  className="relative z-10 flex items-center gap-2 text-[0.9rem] font-semibold text-gray-500 group-hover:text-brand-green transition-colors duration-300 bg-transparent border-none p-0 cursor-pointer w-fit"
                >
                  Read Case Study Details
                  <ArrowRight size={16} className="transform group-hover:translate-x-1.5 transition-transform duration-300" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
