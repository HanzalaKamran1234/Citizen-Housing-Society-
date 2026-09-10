import React from 'react';
import { X, Scale, AlertTriangle, ShieldCheck } from 'lucide-react';

interface LegalDisclaimerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LegalDisclaimerModal: React.FC<LegalDisclaimerModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl bg-dark-card border-2 border-brand/40 rounded-3xl shadow-dark-luxury overflow-hidden my-8 text-neutral-warm"
        role="dialog"
        aria-modal="true"
        aria-labelledby="legal-headline"
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-dark-bg">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-brand/10 text-brand border border-brand/30">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h3 id="legal-headline" className="text-xl font-extrabold text-neutral-warm">
                Terms &amp; Legal Disclaimer
              </h3>
              <p className="text-xs text-neutral-muted">
                Citizen Housing Society — Citizen Builders &amp; Developers
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
          <div className="p-4 rounded-2xl bg-dark-bg border border-brand/30 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
            <p className="text-neutral-soft text-xs leading-relaxed">
              Information displayed on this website is subject to change. Please verify current pricing, availability, documentation, approvals and terms with the developer before making any decision.
            </p>
          </div>

          <section className="space-y-2">
            <h4 className="text-sm font-bold text-neutral-warm uppercase tracking-wider font-mono">
              1. Plot Pricing &amp; Payment Schedules
            </h4>
            <p>
              Published installment schedules (including 80 Sq. Yards at Rs. 450,000 and 120 Sq. Yards at Rs. 650,000) reflect developer pricing frameworks at the time of publication. Inventory availability, plot category surcharges (5% West Open, 5% Park Facing, 5% Corner, 5% Road), and payment milestones can change based on operational developer reviews.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="text-sm font-bold text-neutral-warm uppercase tracking-wider font-mono">
              2. Pure Residential Plot Project Clarification
            </h4>
            <p>
              Citizen Housing Society is exclusively a residential plot and land development project. Citizen Builders &amp; Developers does not sell ready-made houses, apartments, or finished villas, and is not a building contractor for customers. Buyers purchase land and retain the autonomy to build their own vision subject to applicable rules and statutory approvals.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="text-sm font-bold text-neutral-warm uppercase tracking-wider font-mono">
              3. Approvals &amp; Independent Due Diligence
            </h4>
            <p>
              References to authorities including Sindh Master Plan Authority Hyderabad, Town Planning standards, HESCO, and SSGC reflect statutory coordination, submission dossiers, and infrastructure planning initiated by Citizen Builders &amp; Developers and technical partners. All buyers should independently review certified physical files and conduct their own due diligence before signing deeds.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="text-sm font-bold text-neutral-warm uppercase tracking-wider font-mono">
              4. Visual &amp; Master Plan Representations
            </h4>
            <p>
              Master plan diagrams, road concepts, sector demarcations, and landscape renders are illustrative representations of design intent. On-ground civil engineering execution and statutory town planning modifications may introduce refinements.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="text-sm font-bold text-neutral-warm uppercase tracking-wider font-mono">
              5. No Guaranteed Investment Returns
            </h4>
            <p>
              Real estate investments involve macroeconomic dynamics and highway development pacing. Citizen Builders &amp; Developers does not guarantee profit, appreciation, or investment ROI. Buyers should evaluate land purchases with a disciplined, long-term family ownership perspective.
            </p>
          </section>
        </div>

        <div className="px-6 py-4 border-t border-white/10 bg-dark-bg flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-brand hover:bg-brand-400 text-dark-bg text-xs font-bold uppercase tracking-wider transition-colors shadow-brand-glow"
          >
            I Understand &amp; Agree
          </button>
        </div>
      </div>
    </div>
  );
};
