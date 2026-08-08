import React from 'react';
import { 
  GraduationCap, 
  Building2, 
  Globe2, 
  School,
  ShieldCheck,
  Building,
  ArrowRight
} from 'lucide-react';

export default function IndustriesView({ onRequestDemo }) {
  const industries = [
    { title: 'Higher Education Universities', desc: 'Multi-campus desk allocation, attendance hardware sync, and enterprise tuition fee engines.', icon: GraduationCap },
    { title: 'Vocational & Colleges', desc: 'Customized LMS platforms, role-based student portals, and automated installment billing.', icon: Building2 },
    { title: 'Enterprise Campuses', desc: 'Contactless seat management, live IoT occupancy heatmaps, and visitor access control.', icon: Globe2 },
    { title: 'K-12 School Networks', desc: 'Parent fee collection portals, automated SMS attendance alerts, and biometric tracking.', icon: School },
    { title: 'Healthcare Facilities', desc: 'Biometric turnstile integration, shift scheduling platforms, and HIPAA-compliant data security.', icon: ShieldCheck },
    { title: 'Government & Public Sector', desc: 'High-security compliance portals, cloud infrastructure orchestration, and guaranteed SLA support.', icon: Building }
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
            Industries Served
          </div>
          <h2 className="text-[2.8rem] lg:text-[3.8rem] font-bold text-gray-900 mb-6 tracking-tight leading-[1.15]">
            Tailored <span className="bg-gradient-to-br from-brand-green to-sky-600 bg-clip-text text-transparent">Solutions.</span>
          </h2>
          <p className="text-[1.15rem] text-gray-500 leading-relaxed font-normal">
            Empowering higher education institutions, enterprise campuses, and public sector organizations with custom-fit operational platforms.
          </p>
        </div>

        {/* Premium Light Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, idx) => {
            const IconComp = ind.icon;
            return (
              <div 
                key={idx} 
                className="group relative bg-white/80 backdrop-blur-xl border border-gray-200/60 rounded-3xl p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(0,184,83,0.12)] hover:border-brand-green/30 hover:bg-white"
              >
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200/50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:from-brand-green/10 group-hover:to-brand-green/5 group-hover:border-brand-green/20 transition-all duration-500 shadow-sm">
                    <IconComp size={24} className="text-gray-400 group-hover:text-brand-green transition-colors duration-500" />
                  </div>
                  <h3 className="text-[1.15rem] font-semibold text-gray-900 mb-3 tracking-tight group-hover:text-brand-green transition-colors duration-300">{ind.title}</h3>
                  <p className="text-[0.92rem] text-gray-500 leading-relaxed mb-10 font-normal">{ind.desc}</p>
                </div>
                
                <button 
                  onClick={() => onRequestDemo(`Inquiry: ${ind.title}`)} 
                  className="relative z-10 flex items-center gap-2 text-[0.9rem] font-semibold text-gray-500 group-hover:text-brand-green transition-colors duration-300 bg-transparent border-none p-0 cursor-pointer w-fit"
                >
                  Inquire Solution 
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
