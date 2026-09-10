import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Clock,
  Building,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ArrowRight
} from 'lucide-react';
import { PROJECT_DATA } from '../data/projectData';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [plotSize, setPlotSize] = useState('80 Yards');
  const [contactPref, setContactPref] = useState('WhatsApp');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(true);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!name.trim() || !phone.trim()) {
      setErrorMessage('Please provide your name and phone number.');
      return;
    }
    if (!consent) {
      setErrorMessage('Please consent to contact from the sales team.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        const stored = JSON.parse(localStorage.getItem('citizen_housing_leads') || '[]');
        stored.push({
          name,
          phone,
          email,
          plotSize,
          contactPref,
          message,
          source: 'Contact Page Section',
          date: new Date().toISOString()
        });
        localStorage.setItem('citizen_housing_leads', JSON.stringify(stored));
      } catch (e) {
        console.error(e);
      }
    }, 800);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-950 border border-brand-500/30 text-brand-300 text-xs font-semibold uppercase tracking-widest mb-3">
            <Phone className="w-3.5 h-3.5 text-brand-400" />
            <span>Official Sales Desk</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Connect with <span className="emerald-gradient-text">Citizen Housing</span>
          </h2>
          <p className="text-sm sm:text-base text-charcoal-300 mt-4 leading-relaxed font-normal">
            Whether you are booking your 80 or 120 Sq. Yards plot, planning a physical site visit, or seeking documentation verification, our sales team is here to assist you.
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Contact Details & Sales Offices */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Cards */}
            <div className="space-y-3">
              <a
                href={`https://wa.me/${PROJECT_DATA.brand.officialWhatsApp.replace(/[^0-9]/g, '')}?text=Hello%20Citizen%20Housing,%20I%20would%20like%20to%20inquire%20about%20Green%20Block.`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-charcoal-900 border border-white/5 hover:border-emerald-500/40 hover:bg-emerald-950/20 transition-all flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-950 border border-emerald-500/30 text-emerald-400 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400">
                    Direct Sales WhatsApp
                  </span>
                  <div className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                    Chat with an Advisor
                  </div>
                  <p className="text-xs text-charcoal-400">Instant responses during business hours</p>
                </div>
              </a>

              <a
                href={`tel:${PROJECT_DATA.brand.displayPhone}`}
                className="p-5 rounded-2xl bg-charcoal-900 border border-white/5 hover:border-brand-500/40 hover:bg-brand-950/20 transition-all flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-950 border border-brand-500/30 text-brand-400 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-brand-400">
                    Phone Consultation
                  </span>
                  <div className="text-sm sm:text-base font-bold text-white group-hover:text-brand-300 transition-colors">
                    {PROJECT_DATA.brand.displayPhone}
                  </div>
                  <p className="text-xs text-charcoal-400">Mon – Sat • 10:00 AM – 7:00 PM</p>
                </div>
              </a>

              <a
                href={`mailto:${PROJECT_DATA.brand.displayEmail}`}
                className="p-5 rounded-2xl bg-charcoal-900 border border-white/5 hover:border-brand-500/40 hover:bg-brand-950/20 transition-all flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-950 border border-brand-500/30 text-brand-400 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-brand-400">
                    Developer Inquiries
                  </span>
                  <div className="text-sm sm:text-base font-bold text-white group-hover:text-brand-300 transition-colors">
                    {PROJECT_DATA.brand.displayEmail}
                  </div>
                  <p className="text-xs text-charcoal-400">Official written correspondence</p>
                </div>
              </a>
            </div>

            {/* Address & Site Location Card */}
            <div className="p-6 rounded-3xl bg-charcoal-950 border border-white/10 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-brand-300 block mb-0.5">
                    Project Site Location
                  </span>
                  <h4 className="text-sm font-bold text-white">{PROJECT_DATA.brand.siteLocation}</h4>
                  <p className="text-xs text-charcoal-400 mt-1">
                    Near DHA City, Saima Midtown, and Nooriabad Industrial corridor.
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-start gap-3">
                <Building className="w-5 h-5 text-champagne-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-champagne-400 block mb-0.5">
                    Developer Office
                  </span>
                  <h4 className="text-sm font-bold text-white">{PROJECT_DATA.brand.officeAddress}</h4>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-7 bg-charcoal-950 border border-brand-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
            <div className="h-1.5 w-full bg-gradient-to-r from-brand-500 via-champagne-400 to-brand-600 absolute top-0 left-0 right-0 rounded-t-3xl" />

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                <div className="mb-6">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-brand-400 font-bold">
                    Direct Inquiry Form
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">
                    Book a Consultation / Plot Reservation
                  </h3>
                  <p className="text-xs text-charcoal-400 mt-1">
                    Fill in your contact information to receive our detailed brochure and installment schedule.
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-3 rounded-xl bg-red-950/60 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-charcoal-300 mb-1.5">
                    Full Name <span className="text-brand-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Asad Siddiqui"
                    className="w-full px-4 py-3 rounded-xl bg-charcoal-850 border border-white/10 text-sm text-white focus:outline-none focus:border-brand-400 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-charcoal-300 mb-1.5">
                      Phone / WhatsApp <span className="text-brand-400">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+92 300 0000000"
                      className="w-full px-4 py-3 rounded-xl bg-charcoal-850 border border-white/10 text-sm text-white focus:outline-none focus:border-brand-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-charcoal-300 mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="asad@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-charcoal-850 border border-white/10 text-sm text-white focus:outline-none focus:border-brand-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-charcoal-300 mb-1.5">
                      Plot Category
                    </label>
                    <select
                      value={plotSize}
                      onChange={(e) => setPlotSize(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-charcoal-850 border border-white/10 text-sm text-white focus:outline-none focus:border-brand-400 transition-colors"
                    >
                      <option value="80 Yards">80 Sq. Yards (Rs. 5,000/mo)</option>
                      <option value="120 Yards">120 Sq. Yards (Rs. 7,500/mo)</option>
                      <option value="Not Sure">Need Consultation on Both</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-charcoal-300 mb-1.5">
                      Preferred Channel
                    </label>
                    <select
                      value={contactPref}
                      onChange={(e) => setContactPref(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-charcoal-850 border border-white/10 text-sm text-white focus:outline-none focus:border-brand-400 transition-colors"
                    >
                      <option value="WhatsApp">WhatsApp Message</option>
                      <option value="Phone Call">Direct Phone Call</option>
                      <option value="Email">Email Communication</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-charcoal-300 mb-1.5">
                    Inquiry Details (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Provide any specific queries regarding site visits, corner plots, or booking paperwork..."
                    className="w-full px-4 py-2.5 rounded-xl bg-charcoal-850 border border-white/10 text-sm text-white focus:outline-none focus:border-brand-400 transition-colors resize-none"
                  />
                </div>

                <label className="flex items-start gap-3 cursor-pointer select-none pt-1">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded border-charcoal-600 bg-charcoal-800 text-brand-500 focus:ring-brand-400 focus:ring-offset-0"
                  />
                  <span className="text-xs text-charcoal-400 leading-relaxed">
                    I agree to be contacted regarding Citizen Housing Society pricing, payment schedules, and availability.
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl bg-brand-600 hover:bg-brand-500 disabled:opacity-50 text-white text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-200 shadow-glow-emerald flex items-center justify-center gap-2 border border-brand-400/40"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Consultation Request...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Inquiry to Sales Team</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-brand-400 mx-auto" />
                <h4 className="text-2xl font-bold text-white">Consultation Request Dispatched</h4>
                <p className="text-sm text-charcoal-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-white font-medium">{name}</span>. An official representative for Citizen Housing Society will connect with you via {contactPref} ({phone}) to furnish your requested information.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setName('');
                    setPhone('');
                    setEmail('');
                    setMessage('');
                  }}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
