import React from 'react';
import { Briefcase, Users, Laptop, Heart, ArrowRight, Zap, GraduationCap, CheckCircle2 } from 'lucide-react';

export default function CareerView({ onRequestDemo }) {
  const benefits = [
    {
      title: 'Remote-First Culture',
      desc: 'Work from anywhere with our flexible, remote-first approach and flexible hours.',
      icon: Laptop
    },
    {
      title: 'Health & Wellness',
      desc: 'Comprehensive medical, dental, and vision coverage for you and your family.',
      icon: Heart
    },
    {
      title: 'Continuous Learning',
      desc: 'Annual stipend for courses, conferences, and books to accelerate your growth.',
      icon: GraduationCap
    },
    {
      title: 'Impactful Work',
      desc: 'Build enterprise software that transforms the educational and corporate sectors.',
      icon: Zap
    }
  ];

  const positions = [
    {
      role: 'Senior Full Stack Engineer',
      type: 'Full-Time',
      location: 'Remote',
      dept: 'Engineering'
    },
    {
      role: 'Product Designer (UI/UX)',
      type: 'Full-Time',
      location: 'Remote',
      dept: 'Design'
    },
    {
      role: 'Enterprise Account Executive',
      type: 'Full-Time',
      location: 'Bangalore, India',
      dept: 'Sales'
    },
    {
      role: 'Technical Support Specialist',
      type: 'Full-Time',
      location: 'Remote',
      dept: 'Customer Success'
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
            Join Our Team
          </div>
          <h2 className="text-[2.8rem] lg:text-[3.8rem] font-bold text-gray-900 mb-6 tracking-tight leading-[1.15]">
            Build the Future of <span className="bg-gradient-to-br from-brand-green to-sky-600 bg-clip-text text-transparent">Enterprise Software.</span>
          </h2>
          <p className="text-[1.15rem] text-gray-500 leading-relaxed font-normal">
            We are always looking for talented individuals who are passionate about technology, education, and innovation to join our growing team.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-[2rem] font-bold text-gray-900 mb-3 tracking-tight">Why MentoDesk?</h3>
            <p className="text-[1.05rem] text-gray-500 max-w-2xl mx-auto">We invest in our people so they can do their best work.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((item, idx) => {
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
                    <p className="text-[0.92rem] text-gray-500 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Open Positions List */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-[2rem] font-bold text-gray-900 tracking-tight">Open Positions</h3>
            <div className="hidden sm:flex items-center gap-2 text-sm font-medium text-gray-500">
              <span className="w-2 h-2 rounded-full bg-brand-green"></span> {positions.length} Roles Available
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            {positions.map((pos, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-gray-200/70 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all duration-300 hover:border-brand-green/40 hover:shadow-md cursor-pointer group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[0.75rem] font-bold uppercase tracking-wider text-brand-green bg-brand-green/10 px-2.5 py-1 rounded-md">
                      {pos.dept}
                    </span>
                    <span className="text-[0.8rem] font-medium text-gray-500 border border-gray-200 px-2 py-0.5 rounded-md">
                      {pos.type}
                    </span>
                  </div>
                  <h4 className="text-[1.25rem] font-bold text-gray-900 mb-1 group-hover:text-brand-green transition-colors">
                    {pos.role}
                  </h4>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Briefcase size={14} /> {pos.location}
                  </div>
                </div>
                
                <button className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-gray-200 text-gray-700 font-semibold text-[0.9rem] hover:bg-gray-50 hover:border-gray-300 transition-all group-hover:bg-brand-green group-hover:text-white group-hover:border-brand-green shrink-0">
                  Apply Now <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* General Application Banner */}
        <div className="mt-16 bg-white/90 backdrop-blur-xl border border-gray-200/70 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[0.8rem] font-semibold text-brand-green uppercase tracking-wider mb-2">
              <Users size={16} /> Don't see a fit?
            </div>
            <h3 className="text-[1.5rem] font-bold text-gray-900 mb-3">Submit a General Application</h3>
            <p className="text-[0.95rem] text-gray-500 leading-relaxed font-normal">
              We're always looking for great talent. Send us your resume and we'll reach out when a role opens up that matches your skills.
            </p>
          </div>

          <a 
            href="mailto:careers@mentodesk.com" 
            className="px-6 py-3.5 rounded-2xl bg-gray-900 hover:bg-brand-green text-white text-[0.92rem] font-semibold transition-all duration-300 flex items-center gap-2.5 shrink-0 shadow-sm cursor-pointer no-underline"
          >
            Email Resume
            <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </div>
  );
}
