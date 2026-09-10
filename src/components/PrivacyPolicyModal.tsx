import React from 'react';
import { X, ShieldCheck, Lock } from 'lucide-react';
import { PROJECT_DATA } from '../data/projectData';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl bg-charcoal-900 border border-brand-500/30 rounded-3xl shadow-2xl overflow-hidden my-8 text-charcoal-100"
        role="dialog"
        aria-modal="true"
        aria-labelledby="privacy-headline"
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-charcoal-950">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-brand-900/60 text-brand-300 border border-brand-500/30">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 id="privacy-headline" className="text-xl font-bold text-white">
                Privacy Policy
              </h3>
              <p className="text-xs text-charcoal-400">
                Citizen Housing Society • Citizen Builders &amp; Developers
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-charcoal-300 hover:text-white transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6 text-xs sm:text-sm text-charcoal-300 leading-relaxed max-h-[75vh] overflow-y-auto">
          <section className="space-y-2">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              1. Information We Collect
            </h4>
            <p>
              When you submit an inquiry form or interact with our consultation desk, we collect contact information including your full name, phone number, WhatsApp contact, email address, and specific plot size preferences (80 Yards or 120 Yards).
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              2. How We Use Your Data
            </h4>
            <p>
              Your contact data is used solely by authorized representatives of Citizen Builders &amp; Developers to deliver requested payment schedules, allotment details, site visit logistics, and project announcements. We do not sell, barter, or distribute your private contact records to unaffiliated third-party marketing companies.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              3. Communications &amp; Consent
            </h4>
            <p>
              By checking the consent box on our booking forms or initiating WhatsApp communications, you authorize our sales team to contact you via telephone, WhatsApp, or email regarding Citizen Housing Society. You may request to cease communications at any time by simply informing our sales representative.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              4. Cookies &amp; Browser Analytics
            </h4>
            <p>
              Our website may utilize standard lightweight cookies or privacy-respecting analytics to analyze traffic performance, user device compatibility, and improve page navigation ergonomics. No personal identity files are stored in cookies.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              5. Data Protection &amp; Contact
            </h4>
            <p>
              We implement industry-standard encryption, SSL transport, and restricted administrative protocols to protect your personal inquiries. For any inquiries regarding your stored inquiry data, please contact sales@citizenhousing.pk.
            </p>
          </section>
        </div>

        <div className="px-6 py-4 border-t border-white/10 bg-charcoal-950 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            Close Policy
          </button>
        </div>
      </div>
    </div>
  );
};
