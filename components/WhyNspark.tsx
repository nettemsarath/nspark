import React from 'react';
import { ValueProp } from '../types';
import { Zap, Shield, Users, Layers } from 'lucide-react';

interface WhyNsparkProps {
    previewMode?: boolean;
}

const valueProps: ValueProp[] = [
  {
    title: 'Business-First Mindset',
    description: 'We don\'t speak in jargon. We focus on KPIs: system uptime, load capacity, and revenue growth.',
    icon: Zap
  },
  {
    title: 'Senior Expertise',
    description: 'Work directly with experienced engineers who have scaled complex systems, not junior trainees.',
    icon: Users
  },
  {
    title: 'Scalable Architecture',
    description: 'We build systems designed to handle growth. No band-aids, just robust, future-proof engineering.',
    icon: Layers
  },
  {
    title: 'AI-Powered Advantage',
    description: 'We integrate the latest AI technologies into both our development and marketing strategies.',
    icon: Shield
  }
];

export const WhyNspark: React.FC<WhyNsparkProps> = ({ previewMode }) => {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-24">
          
          <div className="lg:col-span-1">
            <h2 className="text-primary-400 font-semibold tracking-wide uppercase text-sm mb-3">Why Choose Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              The Nspark <br/> Standard
            </h3>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              In a crowded market of generalist agencies, we stand out as a specialized technology partner. We combine high-performance engineering with aggressive growth strategies to deliver measurable business impact.
            </p>
            {!previewMode && (
                <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700">
                    <p className="italic text-slate-300 mb-4">"Their ability to understand our complex infrastructure and improve it while driving new leads was game-changing."</p>
                    <div className="font-bold text-white">- Sarah J., Founder at TechFlow</div>
                </div>
            )}
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
            {valueProps.map((prop, index) => (
              <div key={index} className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-primary-500/50 transition-colors">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center text-primary-400 mb-4 shadow-inner">
                  <prop.icon size={24} />
                </div>
                <h4 className="text-xl font-bold mb-3 text-white">{prop.title}</h4>
                <p className="text-slate-400 leading-relaxed">
                  {prop.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};