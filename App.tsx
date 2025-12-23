import React, { useState, useEffect } from 'react';
import { Page } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { WhyNspark } from './components/WhyNspark';
import { Contact } from './components/Contact';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>(Page.HOME);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simple view router
  const renderPage = () => {
    switch (activePage) {
      case Page.HOME:
        return (
          <>
            <Hero onCtaClick={() => setActivePage(Page.CONTACT)} />
            <Services previewMode onLearnMore={() => setActivePage(Page.SERVICES)} />
            <WhyNspark previewMode />
            <Contact previewMode />
          </>
        );
      case Page.SERVICES:
        return <Services />;
      case Page.ABOUT:
        return <About />;
      case Page.WHY_US:
        return <WhyNspark />;
      case Page.CONTACT:
        return <Contact />;
      default:
        return <Hero onCtaClick={() => setActivePage(Page.CONTACT)} />;
    }
  };

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-900">
      <Header 
        activePage={activePage} 
        setActivePage={setActivePage} 
        isScrolled={isScrolled}
      />
      
      <main className="flex-grow pt-16">
        {renderPage()}
      </main>

      <Footer setActivePage={setActivePage} />
    </div>
  );
};

export default App;