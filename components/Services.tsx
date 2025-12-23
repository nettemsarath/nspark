import React from 'react';
import { ServiceItem } from '../types';
import { Database, TrendingUp, Cpu, Workflow, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ServicesProps {
  previewMode?: boolean;
  onLearnMore?: () => void;
}

const servicesList: ServiceItem[] = [
  {
    id: 'software-systems',
    title: 'Software Development',
    description: 'We build scalable, business-critical software systems designed for high performance and long-term reliability.',
    icon: Database,
    features: ['Scalable Architecture', 'Cloud-Native Solutions', 'High-Availability Systems']
  },
  {
    id: 'contract-engineering',
    title: 'Contract Engineering',
    description: 'Augment your team with senior engineering expertise to improve performance and scale existing infrastructure.',
    icon: Workflow,
    features: ['Performance Optimization', 'Infrastructure Scaling', 'Legacy Refactoring']
  },
  {
    id: 'ai-marketing',
    title: 'AI-Driven Marketing',
    description: 'Leverage artificial intelligence to optimize campaigns, acquire customers, and maximize measurable revenue.',
    icon: TrendingUp,
    features: ['AI-Powered Analytics', 'Customer Acquisition', 'Revenue Optimization']
  },
  {
    id: 'consulting',
    title: 'Tech Consulting',
    description: 'Strategic planning to ensure your technology stack supports your long-term business goals.',
    icon: Cpu,
    features: ['Technology Roadmap', 'Scalability Audits', 'Vendor Selection']
  }
];

export const Services: React.FC<ServicesProps> = ({ previewMode = false, onLearnMore }) => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-3">Our Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Engineered for Impact. <br/> Built to Scale.
          </h3>
          <p className="text-lg text-slate-600">
            We move beyond basic development. Our focus is on building robust engineering systems and data-driven growth engines that propel your business forward.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesList.map((service, index) => (
            <div 
              key={service.id}
              className="group bg-slate-50 rounded-2xl p-8 transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-1 border border-slate-100"
            >
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                <service.icon size={28} />
              </div>
              
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-slate-500">
                    <CheckCircle2 size={16} className="text-primary-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {previewMode && (
          <div className="mt-16 text-center">
            <button 
              onClick={onLearnMore}
              className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            >
              Explore All Solutions <ArrowRight size={20} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};