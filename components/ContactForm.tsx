import React, { useState } from 'react';
import { Send } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    service: 'Software Development Projects'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // NOTE: This is where you would send data to your backend (e.g., via fetch/axios).
    // For this demo, we are logging the data to the browser console to show it works.
    console.log("Form Submitted with Data:", formState);

    // Simulate API call delay
    setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormState({ name: '', email: '', company: '', message: '', service: 'Software Development Projects' });
        // Reset success message after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center py-12 bg-white rounded-xl">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
              <Send size={40} />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
          <p className="text-slate-600">Thank you for reaching out. We'll be in touch shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Full Name</label>
          <input 
              type="text" 
              required
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
              placeholder="John Doe"
              value={formState.name}
              onChange={(e) => setFormState({...formState, name: e.target.value})}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Email Address</label>
          <input 
              type="email" 
              required
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
              placeholder="john@company.com"
              value={formState.email}
              onChange={(e) => setFormState({...formState, email: e.target.value})}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-700">Company Name</label>
        <input 
          type="text" 
          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
          placeholder="Acme Inc."
          value={formState.company}
          onChange={(e) => setFormState({...formState, company: e.target.value})}
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-700">Interested Service</label>
        <select 
          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all bg-white"
          value={formState.service}
          onChange={(e) => setFormState({...formState, service: e.target.value})}
        >
            <option>Software Development Projects</option>
            <option>Contract Engineering Services</option>
            <option>AI-Driven Digital Marketing</option>
            <option>Tech Consulting & Strategy</option>
            <option>Other</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-700">How can we help?</label>
        <textarea 
          required
          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all h-32 resize-none"
          placeholder="Tell us about your project goals or engineering challenges..."
          value={formState.message}
          onChange={(e) => setFormState({...formState, message: e.target.value})}
        ></textarea>
      </div>

      <button 
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-primary-600 transition-colors shadow-lg disabled:opacity-70 flex items-center justify-center gap-2"
      >
          {isSubmitting ? 'Sending...' : 'Book Free Consultation'}
      </button>
    </form>
  );
};