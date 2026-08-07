import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';

import HomeView from './pages/HomeView';
import AboutView from './pages/AboutView';
import ProductsView from './pages/ProductsView';
import ServicesView from './pages/ServicesView';
import IndustriesView from './pages/IndustriesView';
import CaseStudiesView from './pages/CaseStudiesView';
import ContactView from './pages/ContactView';
import FaqView from './pages/FaqView';

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [demoModalTitle, setDemoModalTitle] = useState('Request Demo');

  const handleOpenDemoModal = (title = 'Request Demo') => {
    setDemoModalTitle(title);
    setDemoModalOpen(true);
  };

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <HomeView setCurrentView={setCurrentView} onRequestDemo={handleOpenDemoModal} />;
      case 'about':
        return <AboutView onRequestDemo={handleOpenDemoModal} />;
      case 'products':
        return <ProductsView onRequestDemo={handleOpenDemoModal} />;
      case 'services':
        return <ServicesView onRequestDemo={handleOpenDemoModal} />;
      case 'industries':
        return <IndustriesView onRequestDemo={handleOpenDemoModal} />;
      case 'case-studies':
        return <CaseStudiesView onRequestDemo={handleOpenDemoModal} />;
      case 'contact':
        return <ContactView onRequestDemo={handleOpenDemoModal} />;
      case 'faq':
        return <FaqView onRequestDemo={handleOpenDemoModal} />;
      default:
        return <HomeView setCurrentView={setCurrentView} onRequestDemo={handleOpenDemoModal} />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-main)' }}>
      {/* Sticky Header */}
      <Header 
        currentView={currentView} 
        setCurrentView={setCurrentView} 
        onRequestDemo={handleOpenDemoModal}
      />

      {/* Main Dynamic View Area */}
      <main style={{ flex: 1 }}>
        {renderView()}
      </main>

      {/* Enterprise Global Footer */}
      <Footer 
        setCurrentView={setCurrentView}
        onRequestDemo={handleOpenDemoModal}
      />

      {/* Global Interactive Lead Capture & Consultation Modal */}
      <DemoModal 
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        initialTitle={demoModalTitle}
      />
    </div>
  );
}
