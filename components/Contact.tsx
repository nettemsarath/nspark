import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { ContactForm } from './ContactForm';

interface ContactProps {
    previewMode?: boolean;
}

export const Contact: React.FC<ContactProps> = ({ previewMode }) => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-3">Contact Us</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">
              Let's Build Your <br /> Growth Engine
            </h3>
            <p className="text-lg text-slate-600 mb-12">
              Ready to modernize your technology and accelerate revenue? Fill out the form, and our strategy team will be in touch within 24 hours to schedule your free consultation.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 flex-shrink-0">
                  <Mail size={20} />
                </div>
<div className="space-y-6">
  <div>
    <h4 className="text-lg font-black text-slate-900 tracking-tight mb-3">Get in Touch</h4>

<div className="space-y-4">
  
  <div className="flex flex-col gap-1">
    <a 
      href="mailto:hello@nspark.agency" 
      className="text-primary-600 font-semibold hover:text-primary-700 transition-colors"
    >
      hello@nspark.agency
    </a>
    
    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">or reach out directly to</span>
    
    <a 
      href="mailto:nettemsarath1@gmail.com" 
      className="text-slate-600 font-semibold hover:text-slate-900 transition-colors"
    >
      nettemsarath1@gmail.com
    </a>
  </div>

  <p className="text-slate-500 text-sm max-w-xs">
    Connect with us on either address — we respond to both for all inquiries and support.
  </p>
</div>

            </div>
          </div>
          </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">Call Us</h4>
                  <p className="text-slate-600">+91 7989304409 </p>
                  <p className="text-slate-500 text-sm mt-1">Mon-Fri, 9am - 6pm EST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">Headquarters</h4>
                  <p className="text-slate-600">Bengaluru</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
};