import React from 'react';
import logoImg from '../assets/logo.png';

export default function Footer({ setCurrentView, onRequestDemo }) {
  const handleNav = (page) => {
    setCurrentView(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-gray-200 pt-20 pb-8 mt-10">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">

          <div className="lg:pr-6">
            <img
              src={logoImg}
              alt="mentodesk"
              className="h-[28px] w-auto object-contain mb-5"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `${import.meta.env.BASE_URL}logo.png`;
              }}
            />
            <p className="text-[0.9rem] text-gray-500 leading-relaxed">
              Enterprise software platforms and custom solutions for educational and corporate institutions.
            </p>
          </div>

          <div>
            <h4 className="text-[0.95rem] font-semibold text-gray-800 mb-5">Products</h4>
            <ul className="flex flex-col gap-3.5">
              <li>
                <button onClick={() => handleNav('products')} className="text-[0.9rem] text-gray-500 hover:text-brand-green transition-colors text-left bg-transparent border-none p-0 cursor-pointer font-medium">
                  MentoDesk Smart Campus
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('products')} className="text-[0.9rem] text-gray-500 hover:text-brand-green transition-colors text-left bg-transparent border-none p-0 cursor-pointer font-medium">
                  Fee Management System
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('products')} className="text-[0.9rem] text-gray-500 hover:text-brand-green transition-colors text-left bg-transparent border-none p-0 cursor-pointer font-medium">
                  Customized LMS
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[0.95rem] font-semibold text-gray-800 mb-5">Services</h4>
            <ul className="flex flex-col gap-3.5">
              <li>
                <button onClick={() => handleNav('services')} className="text-[0.9rem] text-gray-500 hover:text-brand-green transition-colors text-left bg-transparent border-none p-0 cursor-pointer font-medium">
                  Custom Software Dev
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="text-[0.9rem] text-gray-500 hover:text-brand-green transition-colors text-left bg-transparent border-none p-0 cursor-pointer font-medium">
                  Enterprise ERP Solutions
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="text-[0.9rem] text-gray-500 hover:text-brand-green transition-colors text-left bg-transparent border-none p-0 cursor-pointer font-medium">
                  Mobile App Development
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[0.95rem] font-semibold text-gray-800 mb-5">Company</h4>
            <ul className="flex flex-col gap-3.5">
              <li>
                <button onClick={() => handleNav('about')} className="text-[0.9rem] text-gray-500 hover:text-brand-green transition-colors text-left bg-transparent border-none p-0 cursor-pointer font-medium">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('careers')} className="text-[0.9rem] text-gray-500 hover:text-brand-green transition-colors text-left bg-transparent border-none p-0 cursor-pointer font-medium">
                  Careers
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[0.95rem] font-semibold text-gray-800 mb-5">Contact</h4>
            <ul className="flex flex-col gap-3.5 mb-6">
              <li className="text-[0.9rem] text-gray-500 font-medium">
                KR Puram, Bangalore 560036
              </li>
              <li>
                <a href="mailto:contact@mentodesk.com" className="text-[0.9rem] text-gray-500 hover:text-brand-green transition-colors no-underline font-medium">
                  contact@mentodesk.com
                </a>
              </li>
              <li className="text-[0.9rem] text-gray-500 font-medium">
                +91 7639 143 881
              </li>
            </ul>
            <div>
              <h4 className="text-[0.85rem] font-semibold text-gray-800 mb-3">Follow us on</h4>
              <div className="flex items-center gap-4">
                <a href="https://www.instagram.com/mentodesk?igsh=MTF2M2R0bDllcXJteg==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-green transition-colors cursor-pointer" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a href="https://www.linkedin.com/company/mentodesk" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-green transition-colors cursor-pointer" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-5 text-[0.85rem] text-gray-400 font-medium">
          <div>© {new Date().getFullYear()} mentodesk technologies. All rights reserved.</div>
          <div className="flex gap-8">
            <a href="#privacy" onClick={(e) => { e.preventDefault(); handleNav('faq'); }} className="text-gray-400 hover:text-gray-600 transition-colors no-underline">Privacy</a>
            <a href="#terms" onClick={(e) => { e.preventDefault(); handleNav('faq'); }} className="text-gray-400 hover:text-gray-600 transition-colors no-underline">Terms</a>
            <a href="#security" onClick={(e) => { e.preventDefault(); handleNav('faq'); }} className="text-gray-400 hover:text-gray-600 transition-colors no-underline">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
