import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, AlertCircle, Phone, MessageSquare, Mail, Loader2, ArrowRight } from 'lucide-react';
import { PROJECT_DATA } from '../data/projectData';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlotSize?: string;
  sourceTitle?: string;
}

export const LeadModal: React.FC<LeadModalProps> = ({
  isOpen,
  onClose,
  defaultPlotSize = '80 Yards',
  sourceTitle = 'Direct Booking Inquiry',
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [plotSize, setPlotSize] = useState<'80 Yards' | '120 Yards' | 'Not Sure'>('80 Yards');
  const [preferredContact, setPreferredContact] = useState<'Phone' | 'WhatsApp' | 'Email'>('WhatsApp');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(true);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (defaultPlotSize === '120-yards' || defaultPlotSize === '120 Yards') {
      setPlotSize('120 Yards');
    } else if (defaultPlotSize === '80-yards' || defaultPlotSize === '80 Yards') {
      setPlotSize('80 Yards');
    }
  }, [defaultPlotSize]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!phone.trim() || phone.trim().length < 8) {
      setErrorMessage('Please provide a valid phone or WhatsApp number.');
      return;
    }
    if (!consent) {
      setErrorMessage('Please check the consent box to authorize contact.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      try {
        const existingLeads = JSON.parse(localStorage.getItem('citizen_housing_leads') || '[]');
        existingLeads.push({
          fullName,
          phone,
          email,
          plotSize,
          preferredContact,
          message,
          sourceTitle,
          timestamp: new Date().toISOString(),
        });
        localStorage.setItem('citizen_housing_leads', JSON.stringify(existingLeads));
      } catch (err) {
        console.error('Storage error', err);
      }
    }, 850);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    setIsSubmitting(false);
    setErrorMessage('');
    onClose();
  };

  const openWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Citizen Housing Team,\n\nI have submitted an inquiry for ${plotSize} residential plot.\nName: ${fullName}\nPhone: ${phone}\nSource: ${sourceTitle}`
    );
    window.open(`https://wa.me/${PROJECT_DATA.brand.officialWhatsApp.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-xl bg-dark-card border-2 border-brand/40 rounded-3xl shadow-dark-luxury overflow-hidden my-8 text-neutral-warm"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        {/* Top brand accent bar */}
        <div className="h-1.5 w-full bg-brand" />

        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-muted hover:text-neutral-warm transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          {!isSuccess ? (
            <div>
              {/* Modal Header */}
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/40 text-brand text-[11px] font-mono font-bold uppercase mb-2">
                  <span>Green Block</span>
                  <span className="text-white/40">•</span>
                  <span>0% Down Payment</span>
                </div>
                <h3 id="modal-headline" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-warm">
                  Book Your Residential Plot
                </h3>
                <p className="text-xs sm:text-sm text-neutral-muted mt-1">
                  Submit your details to receive full installment schedule, allotment paperwork, and personal developer consultation.
                </p>
              </div>

              {errorMessage && (
                <div className="mb-5 p-3 rounded-xl bg-red-950/60 border border-red-500/40 text-red-200 text-xs flex items-center gap-2.5">
                  <AlertCircle className="w-4 h-4 flex-shrink-0 text-red-400" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-neutral-soft mb-1.5">
                    Full Name <span className="text-brand">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Muhammad Tariq"
                    className="w-full px-4 py-3 rounded-xl bg-dark-bg border border-white/10 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand text-sm text-neutral-warm placeholder-neutral-faint transition-colors"
                  />
                </div>

                {/* Phone & Email */}
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
                      placeholder="+92 300 1234567"
                      className="w-full px-4 py-3 rounded-xl bg-dark-bg border border-white/10 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand text-sm text-neutral-warm placeholder-neutral-faint transition-colors"
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
                      placeholder="tariq@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-dark-bg border border-white/10 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand text-sm text-neutral-warm placeholder-neutral-faint transition-colors"
                    />
                  </div>
                </div>

                {/* Plot Size */}
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-neutral-soft mb-1.5">
                    Plot Size Preference
                  </label>
                  <div className="grid grid-cols-3 gap-2.5">
                    {(['80 Yards', '120 Yards', 'Not Sure'] as const).map((size) => (
                      <button
                        type="button"
                        key={size}
                        onClick={() => setPlotSize(size)}
                        className={`py-2.5 px-3 rounded-xl text-xs font-medium border transition-all text-center ${
                          plotSize === size
                            ? 'bg-brand text-dark-bg font-bold border-brand'
                            : 'bg-dark-bg border-white/10 text-neutral-muted hover:text-neutral-warm hover:border-white/20'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Contact Method */}
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-neutral-soft mb-1.5">
                    Preferred Contact Method
                  </label>
                  <div className="grid grid-cols-3 gap-2.5">
                    {[
                      { id: 'WhatsApp', label: 'WhatsApp', icon: MessageSquare },
                      { id: 'Phone', label: 'Phone Call', icon: Phone },
                      { id: 'Email', label: 'Email', icon: Mail },
                    ].map((m) => {
                      const Icon = m.icon;
                      const isSelected = preferredContact === m.id;
                      return (
                        <button
                          type="button"
                          key={m.id}
                          onClick={() => setPreferredContact(m.id as any)}
                          className={`flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl text-xs border transition-all ${
                            isSelected
                              ? 'bg-brand/15 border-brand text-brand font-bold'
                              : 'bg-dark-bg border-white/10 text-neutral-muted hover:text-neutral-warm'
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5" />
                          <span>{m.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-neutral-soft mb-1.5">
                    Specific Questions / Remarks (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Inquiring about corner, west-open options, or site visit..."
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-bg border border-white/10 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand text-sm text-neutral-warm placeholder-neutral-faint transition-colors resize-none"
                  />
                </div>

                {/* Checkbox */}
                <label className="flex items-start gap-3 cursor-pointer select-none pt-1">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded border-neutral-faint bg-dark-bg text-brand focus:ring-brand focus:ring-offset-0"
                  />
                  <span className="text-xs text-neutral-muted leading-relaxed">
                    I agree to be contacted regarding Citizen Housing pricing, schedule, and site consultation.
                  </span>
                </label>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-3 py-3.5 px-6 rounded-xl bg-brand hover:bg-brand-400 disabled:opacity-50 text-dark-bg text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-brand-glow flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Request a Call</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          ) : (
            /* Success State */
            <div className="py-8 text-center space-y-5 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-brand/20 border border-brand text-brand flex items-center justify-center mx-auto shadow-brand-glow">
                <CheckCircle2 className="w-8 h-8 text-brand" />
              </div>

              <div>
                <h4 className="text-2xl font-bold text-neutral-warm mb-2">
                  Inquiry Received Successfully
                </h4>
                <p className="text-sm text-neutral-muted max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-neutral-warm font-medium">{fullName}</span>. An official project representative for <span className="text-brand font-semibold">Citizen Housing (Green Block)</span> will connect with you via <span className="text-neutral-warm font-medium">{preferredContact}</span> shortly.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-dark-bg border border-brand/20 text-xs text-neutral-soft text-left max-w-md mx-auto space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-neutral-muted">Selected Plot Size:</span>
                  <span className="text-neutral-warm font-bold">{plotSize}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-muted">Contact Number:</span>
                  <span className="text-neutral-warm font-mono">{phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-muted">Installment Terms:</span>
                  <span className="text-brand font-bold">0% Down Payment Plan</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={openWhatsAppDirect}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-brand hover:bg-brand-400 text-dark-bg text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-brand-glow"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Start WhatsApp Chat Now</span>
                </button>

                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-neutral-soft text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
