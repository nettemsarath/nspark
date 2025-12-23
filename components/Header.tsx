import React, { useState } from 'react';
import { Page } from '../types';
import { Menu, X, Zap } from 'lucide-react';

interface HeaderProps {
  activePage: Page;
  setActivePage: (page: Page) => void;
  isScrolled: boolean;
}

export const Header: React.FC<HeaderProps> = ({ activePage, setActivePage, isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', value: Page.HOME },
    { label: 'Services', value: Page.SERVICES },
    { label: 'About Us', value: Page.ABOUT },
    { label: 'Why Nspark', value: Page.WHY_US },
  ];

  const handleNavClick = (page: Page) => {
    setActivePage(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => handleNavClick(Page.HOME)}
          >
            <div className="w-10 h-10 bg-gradient-to-tr from-primary-600 to-accent-500 rounded-lg flex items-center justify-center text-white shadow-lg group-hover:shadow-primary-500/30 transition-all duration-300">
              <Zap size={24} fill="currentColor" />
            </div>
            <span className={`text-2xl font-bold tracking-tight transition-colors ${
               (isScrolled || isMobileMenuOpen) ? 'text-slate-900' : 'text-slate-900 lg:text-slate-800'
            }`}>
              Nspark
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNavClick(item.value)}
                className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                  activePage === item.value ? 'text-primary-600' : 'text-slate-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick(Page.CONTACT)}
              className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primary-600 transition-colors shadow-lg hover:shadow-xl"
            >
              Get Started
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 transition-colors"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-4 pt-4 pb-8 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNavClick(item.value)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  activePage === item.value 
                    ? 'bg-primary-50 text-primary-700' 
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 px-4">
              <button
                onClick={() => handleNavClick(Page.CONTACT)}
                className="w-full bg-primary-600 text-white px-5 py-3 rounded-lg text-base font-medium hover:bg-primary-700 transition-colors shadow-md"
              >
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};