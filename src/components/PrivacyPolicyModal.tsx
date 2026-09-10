import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl bg-dark-card border-2 border-brand/40 rounded-3xl shadow-dark-luxury overflow-hidden my-8 text-neutral-warm"
        role="dialog"
        aria-modal="true"
        aria-labelledby="privacy-headline"
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-dark-bg">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-brand/10 text-brand border border-brand/30">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 id="privacy-headline" className="text-xl font-extrabold text-neutral-warm">
                Privacy Policy
              </h3>
              <p className="text-xs text-neutral-muted">
                Citizen Housing Society • Citizen Builders &amp; Developers
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-muted hover:text-neutral-warm transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6 text-xs sm:text-sm text-neutral-muted leading-relaxed max-h-[75vh] overflow-y-auto">
          <section className="space-y-2">
            <h4 className="text-sm font-bold text-neutral-warm uppercase tracking-wider font-mono">
              1. Information Collected
            </h4>
            <p>
              When you submit a plot booking inquiry or contact our sales team, we collect your full name, phone number, WhatsApp contact, email address, and plot preference (80 Yards or 120 Yards).
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="text-sm font-bold text-neutral-warm uppercase tracking-wider font-mono">
              2. Contact Forms &amp; Communications
            </h4>
            <p>
              Your contact details are used exclusively by authorized representatives of Citizen Builders &amp; Developers to furnish requested payment schedules, allotment files, and project announcements. We do not sell or trade your contact records.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="text-sm font-bold text-neutral-warm uppercase tracking-wider font-mono">
              3. Cookies &amp; Analytics
            </h4>
            <p>
              Our website may utilize lightweight browser cookies or privacy-conscious analytics solely to understand mobile performance, navigation flow, and screen responsiveness.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="text-sm font-bold text-neutral-warm uppercase tracking-wider font-mono">
              4. Data Security &amp; User Rights
            </h4>
            <p>
              We implement industry-standard encryption, SSL transport, and restricted administrative controls. You hold the right to request deletion or modification of your inquiry details by emailing sales@citizenhousing.pk.
            </p>
          </section>
        </div>

        <div className="px-6 py-4 border-t border-white/10 bg-dark-bg flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-brand hover:bg-brand-400 text-dark-bg text-xs font-bold uppercase tracking-wider transition-colors shadow-brand-glow"
          >
            Close Policy
          </button>
        </div>
      </div>
    </div>
  );
};
