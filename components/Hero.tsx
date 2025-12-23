import React from 'react';
import { ArrowRight, TrendingUp, Server, Cpu, BarChart3 } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative overflow-hidden pt-10 pb-20 lg:pt-20 lg:pb-32">
      {/* Background Decor */}
{/* Background Blurs */}
<div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-primary-100/50 rounded-full blur-3xl opacity-50 pointer-events-none" />
<div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-accent-100/50 rounded-full blur-3xl opacity-50 pointer-events-none" />

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
  <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
    
    {/* Text Content */}
    <div className="max-w-2xl">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-semibold tracking-wide uppercase mb-6">
        <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
        Engineering Growth
      </div>
      
      {/* Updated Header Font: Tightened leading and tracking for a "Big Tech" look */}
      <h1 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-[-0.04em] leading-[0.95] mb-6">
        Smart Strategy. <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">
          Intelligent Expansion.
        </span>
      </h1>

      <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
        We provide the <strong>expert tech consulting</strong> you need to navigate the digital landscape, 
        build the <strong>custom software</strong> that powers your operations, and deploy <strong>AI-driven marketing</strong> to scale your revenue with precision.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <button 
          onClick={onCtaClick}
          className="inline-flex justify-center items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-700 transition-all shadow-lg hover:shadow-primary-500/25 hover:-translate-y-1"
        >
          Let's Build Your Growth Engine
          <ArrowRight size={20} />
        </button>
        
        <button 
          onClick={onCtaClick}
          className="inline-flex justify-center items-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-slate-50 transition-all hover:border-slate-300"
        >
          View Our Work
        </button>
      </div>

      <div className="mt-12 flex items-center gap-8 text-slate-500 text-sm font-medium">
        <div className="flex items-center gap-2">
          <Server size={18} className="text-primary-500" />
          <span>Custom Software</span>
        </div>
        <div className="flex items-center gap-2">
          <Cpu size={18} className="text-primary-500" />
          <span>AI Marketing</span>
        </div>
        <div className="flex items-center gap-2">
          <TrendingUp size={18} className="text-primary-500" />
          <span>Tech Consulting</span>
        </div>
      </div>
    </div>

    {/* Hero Visual */}
    <div className="relative lg:h-[600px] w-full flex items-center justify-center">
       <div className="relative w-full aspect-square max-w-[500px] lg:max-w-none">
          {/* Abstract UI representation */}
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden transform rotate-3 hover:rotate-0 transition-all duration-700 ease-out">
                    <img 
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" 
                        alt="Data Driven Growth" 
                        className="w-full h-full object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex flex-col justify-end p-8">
                        <div className="bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg max-w-xs transform translate-y-4 lg:translate-y-0">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                    <BarChart3 size={16} />
                                </div>
                                <div>
                                    <div className="text-xs text-slate-500">Revenue Growth</div>
                                    <div className="text-sm font-bold text-slate-900">+127% YoY Increase</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-xs font-semibold text-green-600 mt-2">
                                <TrendingUp size={12} />
                                <span>AI Optimized Campaigns</span>
                            </div>
                        </div>
                    </div>  
                  </div> 
          {/* Floating Elements */}
          <div className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent-100 flex items-center justify-center text-accent-600">
                       <Cpu size={20} />
                  </div>
                  <div>
                      <div className="text-sm font-bold">AI Integration</div>
                      <div className="text-xs text-slate-500">Automated Growth</div>
                  </div>
              </div>
          </div>
       </div>
    </div>
  </div>
</div>
    </section>
  );
};