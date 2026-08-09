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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

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
            <h4 className="text-[0.95rem] font-semibold text-gray-800 mb-5">Contact</h4>
            <ul className="flex flex-col gap-3.5">
              <li className="text-[0.9rem] text-gray-500 font-medium">
                Manu Krishna<br />
                KR Puram, Bangalore 560036
              </li>
              <li>
                <a href="mailto:enterprise@mentodesk.com" className="text-[0.9rem] text-gray-500 hover:text-brand-green transition-colors no-underline font-medium">
                  contact@mentodesk.com
                </a>
              </li>
              <li className="text-[0.9rem] text-gray-500 font-medium">
                +91 7639 143 881
              </li>
            </ul>
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
