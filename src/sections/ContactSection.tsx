import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
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
    <section id="contact" className="py-20 sm:py-28 bg-dark-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-card border border-brand/40 text-brand text-xs font-semibold uppercase tracking-widest mb-3">
            <Phone className="w-3.5 h-3.5" />
            <span>Sales &amp; Consultation</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tightest text-neutral-warm leading-tight">
            LET'S TALK ABOUT <br />
            <span className="brand-gradient-text">YOUR PLOT.</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-muted mt-3 leading-relaxed">
            Whether you want to learn about available 80 or 120 Sq. Yards residential plots, request payment schedules, or discuss documentation, our sales team is here to assist.
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left: Contact Channels */}
          <div className="lg:col-span-5 space-y-4">
            
            <a
              href={`https://wa.me/${PROJECT_DATA.brand.officialWhatsApp.replace(/[^0-9]/g, '')}?text=Hello%20Citizen%20Housing,%20I%20would%20like%20to%20inquire%20about%20Green%20Block%20plots.`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-dark-card border border-white/5 hover:border-brand/50 transition-all flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-dark-bg border border-brand/30 text-brand flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-brand">
                  Official WhatsApp Desk
                </span>
                <div className="text-sm sm:text-base font-bold text-neutral-warm group-hover:text-brand transition-colors">
                  Chat with a Sales Advisor
                </div>
                <p className="text-xs text-neutral-muted">Instant responses during business hours</p>
              </div>
            </a>

            <a
              href={`tel:${PROJECT_DATA.brand.displayPhone}`}
              className="p-5 rounded-2xl bg-dark-card border border-white/5 hover:border-brand/50 transition-all flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-dark-bg border border-brand/30 text-brand flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-brand">
                  Phone Consultation
                </span>
                <div className="text-sm sm:text-base font-bold text-neutral-warm group-hover:text-brand transition-colors">
                  {PROJECT_DATA.brand.displayPhone}
                </div>
                <p className="text-xs text-neutral-muted">Monday – Saturday • 10 AM – 7 PM</p>
              </div>
            </a>

            <a
              href={`mailto:${PROJECT_DATA.brand.displayEmail}`}
              className="p-5 rounded-2xl bg-dark-card border border-white/5 hover:border-brand/50 transition-all flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-dark-bg border border-brand/30 text-brand flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-brand">
                  Email Correspondence
                </span>
                <div className="text-sm sm:text-base font-bold text-neutral-warm group-hover:text-brand transition-colors">
                  {PROJECT_DATA.brand.displayEmail}
                </div>
                <p className="text-xs text-neutral-muted">Official developer correspondence</p>
              </div>
            </a>

            {/* Address & Site Location Card */}
            <div className="p-6 rounded-3xl bg-dark-card border border-white/10 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-brand block mb-0.5">
                    Project Site Location
                  </span>
                  <h4 className="text-sm font-bold text-neutral-warm">{PROJECT_DATA.brand.siteLocation}</h4>
                  <p className="text-xs text-neutral-muted mt-1">
                    Direct access via M9 Motorway, near DHA City and Saima Midtown.
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-start gap-3">
                <Building className="w-5 h-5 text-neutral-soft flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-muted block mb-0.5">
                    Developer Corporate Office
                  </span>
                  <h4 className="text-sm font-bold text-neutral-warm">{PROJECT_DATA.brand.officeAddress}</h4>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Booking & Inquiry Form */}
          <div className="lg:col-span-7 bg-dark-card border-2 border-brand/30 rounded-3xl p-6 sm:p-9 shadow-dark-luxury relative">
            <div className="h-1.5 w-full bg-gradient-to-r from-brand via-brand-300 to-brand absolute top-0 left-0 right-0 rounded-t-3xl" />

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 pt-1">
                <div className="mb-5">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-brand font-bold">
                    Plot Inquiry Form
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-warm mt-1">
                    Inquire About Plot Availability
                  </h3>
                  <p className="text-xs text-neutral-muted mt-1">
                    Fill in your contact information to receive our complete installment schedule and allotment paperwork.
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-3 rounded-xl bg-red-950/60 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-neutral-soft mb-1.5">
                    Full Name <span className="text-brand">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Asad Siddiqui"
                    className="w-full px-4 py-3 rounded-xl bg-dark-bg border border-white/10 text-sm text-neutral-warm focus:outline-none focus:border-brand transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-neutral-soft mb-1.5">
                      Phone / WhatsApp <span className="text-brand">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+92 300 0000000"
                      className="w-full px-4 py-3 rounded-xl bg-dark-bg border border-white/10 text-sm text-neutral-warm focus:outline-none focus:border-brand transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-neutral-soft mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="asad@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-dark-bg border border-white/10 text-sm text-neutral-warm focus:outline-none focus:border-brand transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-neutral-soft mb-1.5">
                      Plot Category
                    </label>
                    <select
                      value={plotSize}
                      onChange={(e) => setPlotSize(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-dark-bg border border-white/10 text-sm text-neutral-warm focus:outline-none focus:border-brand transition-colors"
                    >
                      <option value="80 Yards">80 Sq. Yards (Rs. 5,000/mo)</option>
                      <option value="120 Yards">120 Sq. Yards (Rs. 7,500/mo)</option>
                      <option value="Not Sure">Need Information on Both</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-neutral-soft mb-1.5">
                      Preferred Channel
                    </label>
                    <select
                      value={contactPref}
                      onChange={(e) => setContactPref(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-dark-bg border border-white/10 text-sm text-neutral-warm focus:outline-none focus:border-brand transition-colors"
                    >
                      <option value="WhatsApp">WhatsApp</option>
                      <option value="Phone Call">Phone Call</option>
                      <option value="Email">Email</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-neutral-soft mb-1.5">
                    Questions / Remarks (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Inquiring regarding site visits, corner plots, or documentation..."
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-bg border border-white/10 text-sm text-neutral-warm focus:outline-none focus:border-brand transition-colors resize-none"
                  />
                </div>

                <label className="flex items-start gap-3 cursor-pointer select-none pt-1">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded border-neutral-faint bg-dark-bg text-brand focus:ring-brand focus:ring-offset-0"
                  />
                  <span className="text-xs text-neutral-muted leading-relaxed">
                    I agree to be contacted regarding Citizen Housing Society pricing, schedules, and plot availability.
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl bg-brand hover:bg-brand-400 disabled:opacity-50 text-dark-bg text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-brand-glow flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting Inquiry...</span>
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
              <div className="py-10 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-brand mx-auto" />
                <h4 className="text-2xl font-bold text-neutral-warm">Inquiry Received</h4>
                <p className="text-sm text-neutral-muted max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-neutral-warm font-semibold">{name}</span>. An official representative for Citizen Housing Society will connect with you via {contactPref} ({phone}) to furnish your requested plot information.
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
                  className="mt-3 px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-neutral-warm text-xs font-semibold uppercase tracking-wider transition-colors"
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
