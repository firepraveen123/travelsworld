'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, PhoneCall, Mail } from 'lucide-react';
import confetti from 'canvas-confetti';

export const QuoteFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Corporate Employee Transportation',
    city: 'Bangalore',
    passengers: '50-200',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [quoteRef, setQuoteRef] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;

    const ref = 'TW-QUOTE-' + Math.floor(100000 + Math.random() * 900000);
    setQuoteRef(ref);
    setSubmitted(true);

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <section id="quote-form" className="py-20 bg-slate-950 text-white px-4 sm:px-8 lg:px-16 border-t border-slate-800">
      <div className="max-w-[1536px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Contact Info & Value Prop */}
        <div className="lg:col-span-5 space-y-6">
          <span className="px-4 py-1.5 rounded-full bg-[#FFF0E6] text-[#D34F0D] border border-[#FFDEC9] text-xs font-extrabold uppercase tracking-wider">
            Fast Response Guarantee
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading">
            Request a Custom <span className="text-[#D34F0D]">Corporate Quote</span>
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Our enterprise transit specialists will review your requirements and provide a customized proposal within 2 hours.
          </p>

          <div className="space-y-4 pt-4 border-t border-slate-800 text-xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#D34F0D] text-white flex items-center justify-center shrink-0">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div>
                <span className="text-slate-400 block">Immediate Hotline</span>
                <span className="font-bold text-white text-sm">+91 80954 99999 / +91 (800) 123-4567</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#D34F0D] text-white flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-slate-400 block">Corporate Inquiries</span>
                <span className="font-bold text-white text-sm">info@travelsworld.com / sales@travelsworld.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form Card */}
        <div className="lg:col-span-7">
          <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl space-y-6">
            {submitted ? (
              <div className="text-center space-y-4 py-8">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white font-heading">Quote Request Received!</h3>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Thank you <strong className="text-amber-300">{formData.name}</strong>. Our enterprise account director will reach out shortly.
                </p>
                <div className="p-4 rounded-xl bg-slate-950 border border-white/10 text-xs inline-block">
                  <span className="text-slate-400">Reference Ticket: </span>
                  <span className="font-mono font-bold text-amber-400">{quoteRef}</span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-white font-heading">Get Started in 60 Seconds</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-slate-300 font-semibold block mb-1">Full Name *</label>
                    <input
                      type="text"
                      placeholder="e.g. Rajesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="custom-input text-xs"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-xs text-slate-300 font-semibold block mb-1">Corporate Email *</label>
                    <input
                      type="email"
                      placeholder="rajesh@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="custom-input text-xs"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-xs text-slate-300 font-semibold block mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="custom-input text-xs"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-xs text-slate-300 font-semibold block mb-1">Company Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Infosys / Wipro"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="custom-input text-xs"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-slate-300 font-semibold block mb-1">Service Required</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="custom-input text-xs cursor-pointer"
                    >
                      <option value="Corporate Employee Transportation">Corporate Employee Transportation</option>
                      <option value="Corporate Fleet Management">Corporate Fleet Management</option>
                      <option value="Airport Transfers">Airport Transfers</option>
                      <option value="Monthly & Hourly Rentals">Monthly & Hourly Rentals</option>
                      <option value="Outstation Rides">Outstation Rides</option>
                      <option value="Luxury Car Rentals">Luxury Car Rentals</option>
                      <option value="Electric Fleet">Electric Fleet</option>
                      <option value="Event Transport">Event Transport</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs text-slate-300 font-semibold block mb-1">Primary Location</label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="custom-input text-xs cursor-pointer"
                    >
                      <option value="Bangalore">Bangalore</option>
                      <option value="Hyderabad">Hyderabad</option>
                      <option value="Pune">Pune</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Chennai">Chennai</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Mangalore">Mangalore</option>
                      <option value="Coimbatore">Coimbatore</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs text-slate-300 font-semibold block mb-1">Additional Requirements</label>
                  <textarea
                    rows={3}
                    placeholder="Specific routes, vehicle preferences, shift timings..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="custom-input text-xs"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#D34F0D] hover:bg-[#b83e08] text-white font-bold text-sm shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> Submit Quote Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
