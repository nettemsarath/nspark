import React from 'react';
import { Page } from '../types';
import { Zap, Twitter, Linkedin, Github } from 'lucide-react';

interface FooterProps {
    setActivePage: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActivePage }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <div 
              className="flex items-center gap-2 mb-6 text-white cursor-pointer"
              onClick={() => setActivePage(Page.HOME)}
            >
              <div className="w-8 h-8 bg-gradient-to-tr from-primary-600 to-accent-500 rounded-lg flex items-center justify-center">
                 <Zap size={18} fill="white" />
              </div>
              <span className="text-xl font-bold">Nspark</span>
            </div>
            <p className="max-w-sm mb-6">
              Empowering businesses to navigate the digital landscape with confidence. We build the technology that powers your growth.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Github size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><button onClick={() => setActivePage(Page.ABOUT)} className="hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={() => setActivePage(Page.WHY_US)} className="hover:text-white transition-colors">Why Nspark</button></li>
              <li><button onClick={() => setActivePage(Page.CONTACT)} className="hover:text-white transition-colors">Careers</button></li>
              <li><button onClick={() => setActivePage(Page.CONTACT)} className="hover:text-white transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              <li><button onClick={() => setActivePage(Page.SERVICES)} className="hover:text-white transition-colors">Software Development</button></li>
              <li><button onClick={() => setActivePage(Page.SERVICES)} className="hover:text-white transition-colors">Contract Engineering</button></li>
              <li><button onClick={() => setActivePage(Page.SERVICES)} className="hover:text-white transition-colors">AI-Driven Marketing</button></li>
              <li><button onClick={() => setActivePage(Page.SERVICES)} className="hover:text-white transition-colors">Tech Consulting</button></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} Nspark Digital. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};