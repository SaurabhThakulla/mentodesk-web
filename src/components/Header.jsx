import React, { useState, useEffect } from 'react';
import logoImg from '../assets/logo.png';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Sparkles, 
  GraduationCap, 
  CreditCard, 
  BookOpen, 
  BarChart3, 
  ArrowRight,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

export default function Header({ currentView, setCurrentView, onRequestDemo }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products', hasDropdown: true },
    { id: 'services', label: 'Services' },
    { id: 'industries', label: 'Industries' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'about', label: 'About Us' },
    { id: 'careers', label: 'Careers' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' }
  ];

  const productsList = [
    {
      id: 'smart-campus',
      title: 'MentoDesk Smart Campus',
      desc: 'Complete automated campus administration & student lifecycle engine.',
      icon: GraduationCap,
      badge: 'Popular',
      badgeClass: 'bg-brand-green/10 text-brand-green border-brand-green/25'
    },
    {
      id: 'fee-management',
      title: 'Fee & Billing System',
      desc: 'Automated fee collections, receipts, gateway integration & reporting.',
      icon: CreditCard
    },
    {
      id: 'custom-lms',
      title: 'Customized LMS',
      desc: 'Interactive virtual classrooms, assignments, exams & gradebooks.',
      icon: BookOpen
    },
    {
      id: 'ai-analytics',
      title: 'AI Operational Analytics',
      desc: 'Real-time student insights, predictive attendance & revenue metrics.',
      icon: BarChart3,
      badge: 'New 2.0',
      badgeClass: 'bg-sky-600/10 text-sky-600 border-sky-600/25'
    }
  ];

  const handleNavClick = (id) => {
    setCurrentView(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Announcement Bar */}
      {showAnnouncement && (
        <div className="bg-gradient-to-r from-[#00b853] via-[#008f40] to-sky-600 text-white text-[0.82rem] font-medium py-2 px-4 text-center flex items-center justify-center gap-2.5 relative z-50 leading-snug">
          <span className="inline-flex items-center justify-center bg-white/25 backdrop-blur-sm px-2.5 py-1 rounded-full text-[0.72rem] font-bold uppercase tracking-wider leading-none whitespace-nowrap">
            MentoDesk 2.0
          </span>
          <span>Next-gen AI Campus Management is now live!</span>
          <span 
            onClick={() => handleNavClick('products')}
            className="inline-flex items-center gap-1 text-white font-semibold underline underline-offset-2 cursor-pointer"
          >
            Explore Platform <ChevronRight size={14} />
          </span>
          <button 
            onClick={() => setShowAnnouncement(false)} 
            className="absolute right-4 bg-transparent border-none text-white cursor-pointer opacity-85 flex items-center"
            aria-label="Close announcement"
          >
            <X size={14} />
          </button>
        </div>
      )}

      {/* Main Header Container */}
      <header className={`sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200/80 transition-all duration-300 ${scrolled ? 'shadow-[0_10px_25px_-5px_rgba(0,0,0,0.08)]' : ''}`}>
        <div className="container flex items-center justify-between h-[72px]">
          
          {/* Logo Section */}
          <div onClick={() => handleNavClick('home')} className="flex items-center gap-2 cursor-pointer no-underline group">
            <img 
              src={logoImg} 
              alt="MentoDesk" 
              className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105 mix-blend-multiply" 
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `${import.meta.env.BASE_URL}logo.png`;
              }}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1.5 h-full">
            {navLinks.map((link) => (
              <div 
                key={link.id} 
                className="group relative flex items-center h-[72px]"
              >
                <button
                  onClick={() => handleNavClick(link.id)}
                  className={`border-none px-3.5 py-2 rounded-xl text-[0.88rem] flex items-center gap-1.5 cursor-pointer transition-all duration-200 ${
                    currentView === link.id 
                      ? 'bg-brand-green/10 font-bold text-brand-green shadow-xs' 
                      : 'bg-transparent font-medium text-gray-600 hover:text-brand-green hover:bg-brand-green/10 hover:-translate-y-0.5'
                  }`}
                >
                  {link.label}
                  {link.hasDropdown && (
                    <ChevronDown size={14} className="transition-transform duration-250 group-hover:rotate-180 text-gray-400 group-hover:text-brand-green" />
                  )}
                </button>

                {/* Hover / Active Indicator Line */}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2.5px] rounded-t-full transition-all duration-300 pointer-events-none ${
                  currentView === link.id 
                    ? 'w-6 bg-brand-green' 
                    : 'w-0 bg-brand-green group-hover:w-5 opacity-70'
                }`} />

                {/* Mega Dropdown for Products */}
                {link.hasDropdown && (
                  <div className="absolute top-[calc(100%-6px)] left-1/2 -translate-x-1/2 translate-y-2 w-[580px] bg-white border border-gray-200/90 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.02)] p-5 z-50 opacity-0 invisible pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto group-hover:translate-y-0">
                    <div className="text-[0.72rem] font-bold uppercase tracking-wider text-gray-500 mb-3.5 pl-1.5">
                      MentoDesk Suite Solutions
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      {productsList.map((product) => {
                        const IconComponent = product.icon;
                        return (
                          <div 
                            key={product.id} 
                            onClick={() => handleNavClick('products')}
                            className="flex items-start gap-3.5 p-3 rounded-xl cursor-pointer transition-all duration-200 border border-transparent hover:bg-brand-green/5 hover:border-brand-green/20 hover:-translate-y-px"
                          >
                            <div className="w-[38px] h-[38px] rounded-lg bg-gradient-to-br from-brand-green/10 to-sky-600/10 text-brand-green flex items-center justify-center shrink-0">
                              <IconComponent size={20} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-[0.88rem] font-semibold text-gray-900 flex items-center justify-between gap-2 leading-tight">
                                <span>{product.title}</span>
                                {product.badge && (
                                  <span className={`inline-flex items-center justify-center text-[0.65rem] font-bold px-2 py-0.5 rounded-full leading-none whitespace-nowrap shrink-0 border ${product.badgeClass}`}>
                                    {product.badge}
                                  </span>
                                )}
                              </div>
                              <div className="text-[0.76rem] text-gray-600 mt-1 leading-snug">
                                {product.desc}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-4 pt-3.5 border-t border-gray-200 flex items-center justify-between text-sm text-gray-500">
                      <span className="flex items-center gap-1.5">
                        <ShieldCheck size={15} className="text-brand-green" /> ISO 27001 Certified & SOC2 Compliant
                      </span>
                      <span 
                        onClick={() => handleNavClick('products')}
                        className="text-brand-green font-semibold flex items-center gap-1 cursor-pointer hover:underline"
                      >
                        View All Features <ArrowRight size={13} />
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => onRequestDemo('Request Demo')} 
              className="hidden sm:flex bg-gradient-to-br from-brand-green to-brand-green-hover text-white py-2.5 px-5 rounded-xl text-[0.86rem] font-semibold border-none items-center gap-1.5 shadow-[0_4px_14px_rgba(0,184,83,0.3)] cursor-pointer hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(0,184,83,0.4)] transition-all duration-200"
            >
              <Sparkles size={15} />
              <span>Request Demo</span>
            </button>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="lg:hidden flex items-center justify-center w-[38px] h-[38px] rounded-xl bg-gray-100 border border-gray-200 text-gray-900 cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 p-5 flex flex-col gap-2 shadow-[0_15px_30px_rgba(0,0,0,0.1)]">
            {navLinks.map((link) => (
              <React.Fragment key={link.id}>
                <button 
                  onClick={() => handleNavClick(link.id)} 
                  className={`flex items-center justify-between p-3 rounded-xl border-none text-[0.95rem] text-left cursor-pointer transition-all duration-200 ${
                    currentView === link.id
                      ? 'bg-brand-green/10 font-bold text-brand-green'
                      : 'bg-transparent font-medium text-gray-800 hover:bg-brand-green/10 hover:text-brand-green hover:translate-x-1'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.hasDropdown && <ChevronDown size={15} />}
                </button>
                {link.hasDropdown && (
                  <div className="pl-4 flex flex-col gap-1.5 mb-2">
                    {productsList.map((prod) => (
                      <div 
                        key={prod.id} 
                        onClick={() => handleNavClick('products')}
                        className="flex items-center gap-2 p-2 rounded-md text-[0.85rem] text-gray-600 cursor-pointer hover:bg-gray-50"
                      >
                        <prod.icon size={15} className="text-brand-green" />
                        <span>{prod.title}</span>
                      </div>
                    ))}
                  </div>
                )}
              </React.Fragment>
            ))}

            <div className="mt-3 pt-3.5 border-t border-gray-200 flex flex-col gap-3">
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRequestDemo('Request Demo');
                }} 
                className="w-full bg-gradient-to-br from-brand-green to-brand-green-hover text-white py-2.5 px-5 rounded-xl text-[0.88rem] font-semibold border-none flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
              >
                <Sparkles size={16} />
                <span>Request Demo</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
