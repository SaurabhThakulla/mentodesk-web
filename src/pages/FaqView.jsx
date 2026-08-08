import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FaqView({ onRequestDemo }) {
  const [openIdx, setOpenIdx] = useState(0);

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
    <div className="min-h-screen bg-gray-50/50 relative overflow-hidden flex flex-col items-center justify-center pt-20 pb-28">
      
      {/* Soft Light Mode Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120vw] h-[700px] bg-[radial-gradient(ellipse_at_top,rgba(0,184,83,0.06)_0%,rgba(2,132,199,0.03)_40%,rgba(255,255,255,0)_70%)] pointer-events-none z-0"></div>

      <div className="container relative z-10">
        
        {/* Premium Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200/80 text-gray-600 text-[0.8rem] font-semibold tracking-widest uppercase mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse shadow-[0_0_8px_rgba(0,184,83,0.6)]"></span>
            Frequently Asked Questions
          </div>
          <h2 className="text-[2.8rem] lg:text-[3.8rem] font-bold text-gray-900 mb-6 tracking-tight leading-[1.15]">
            Got <span className="bg-gradient-to-br from-brand-green to-sky-600 bg-clip-text text-transparent">Questions?</span>
          </h2>
          <p className="text-[1.15rem] text-gray-500 leading-relaxed font-normal">
            Common technical specifications, integration processes, and enterprise deployment details answered.
          </p>
        </div>

        {/* Premium Accordion List */}
        <div className="flex flex-col gap-4 max-w-3xl mx-auto w-full">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-white/80 backdrop-blur-xl border border-gray-200/60 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:border-brand-green/30 hover:shadow-[0_10px_30px_-10px_rgba(0,184,83,0.1)]"
              onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
            >
              <div className="flex items-center justify-between gap-4 font-semibold text-[1.05rem] text-gray-900">
                <span className="flex items-center gap-3">
                  <HelpCircle size={20} className="text-brand-green shrink-0" />
                  {faq.q}
                </span>
                <ChevronDown size={20} className={`text-gray-400 shrink-0 transform transition-transform duration-300 ${openIdx === idx ? 'rotate-180 text-brand-green' : ''}`} />
              </div>
              {openIdx === idx && (
                <p className="mt-4 pt-4 border-t border-gray-100 text-[0.92rem] text-gray-500 leading-relaxed font-normal pl-8">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
