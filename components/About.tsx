import React from 'react';
import { Target, Heart, Users } from 'lucide-react';
import { ContactForm } from './ContactForm';

export const About: React.FC = () => {
  return (
    <>
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative">
            <div className="absolute inset-0 bg-primary-600 rounded-3xl transform rotate-3 opacity-10"></div>
            <img 
              src="https://picsum.photos/seed/engineer/800/1000" 
              alt="Nspark Engineering Team" 
              className="relative rounded-3xl shadow-2xl object-cover w-full h-[600px] grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur p-6 rounded-xl shadow-lg border border-slate-100">
                <p className="text-slate-800 font-medium italic">
                  "Nspark optimized our core platform and helped us handle 10x traffic without a hitch. True engineering partners."
                </p>
                <div className="mt-4 flex items-center gap-3">
                   <div className="w-10 h-10 bg-slate-200 rounded-full overflow-hidden">
                     <img src="https://picsum.photos/seed/cto/100/100" alt="Client CTO" />
                   </div>
                   <div>
                      <div className="text-sm font-bold text-slate-900">David Chen</div>
                      <div className="text-xs text-slate-500">CTO, ScaleUp Inc.</div>
                   </div>
                </div>
            </div>
          </div>

          <div>
            <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-3">About Nspark</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">
              Engineering Rigor Meets <br/> Business Strategy
            </h3>
            
            <div className="space-y-6 text-lg text-slate-600">
              <p>
                Founded in 2021, Nspark was built to solve a specific problem: fast-growing companies often outgrow their initial tech stack, stifling future expansion.
              </p>
              <p>
                We are a team of senior engineers and growth strategists dedicated to <strong>Scalability</strong>. We don't just patch code; we architect systems that support your business objectives for the next 5 years, not just the next 5 months.
              </p>
            </div>

            <div className="mt-12 grid sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Our Mission</h4>
                  <p className="text-slate-600 text-sm">To empower businesses with the scalable technology and AI tools needed to lead their markets.</p>
                </div>
              </div>

              <div className="flex gap-4">
                 <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center text-rose-600 flex-shrink-0">
                  <Heart size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Core Value</h4>
                  <p className="text-slate-600 text-sm">We believe in "Tech for Revenue." Every line of code must contribute to a business outcome.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-white border border-slate-200 rounded-xl">
               <div className="flex items-center gap-4">
                  <Users size={32} className="text-slate-400" />
                  <div>
                    <div className="text-3xl font-bold text-slate-900">50+</div>
                    <div className="text-sm text-slate-500">Systems Scaled Globally</div>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    {/* Contact Form Section on About Page */}
    <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Partner with Us</h3>
                <p className="text-lg text-slate-600">
                    Ready to scale your technology or accelerate your growth? Let's discuss your specific needs.
                </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
                <ContactForm />
            </div>
        </div>
    </section>
    </>
  );
};