import React from 'react';
import { X, ShieldAlert, Scale, AlertCircle } from 'lucide-react';
import { PROJECT_DATA } from '../data/projectData';

interface LegalDisclaimerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LegalDisclaimerModal: React.FC<LegalDisclaimerModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl bg-charcoal-900 border border-brand-500/30 rounded-3xl shadow-2xl overflow-hidden my-8 text-charcoal-100"
        role="dialog"
        aria-modal="true"
        aria-labelledby="legal-headline"
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-charcoal-950">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-white/5 text-champagne-400 border border-white/10">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h3 id="legal-headline" className="text-xl font-bold text-white">
                Project Legal Disclaimer &amp; Terms
              </h3>
              <p className="text-xs text-charcoal-400">
                Citizen Housing Society — Citizen Builders &amp; Developers
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
          <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-500/30 flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <p className="text-amber-200/90 text-xs leading-relaxed">
              Information published on this website is for informational and educational presentation purposes for Citizen Housing Society (Green Block). Prospective purchasers should verify current terms, allotment conditions, and status directly with Citizen Builders &amp; Developers prior to financial transactions.
            </p>
          </div>

          <section className="space-y-2">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              1. Pricing &amp; Inventory Availability
            </h4>
            <p>
              Published installment schedules (including 80 Sq. Yards at Rs. 450,000 and 120 Sq. Yards at Rs. 650,000) reflect developer pricing frameworks at the time of publication. Inventory availability, plot category surcharges (5% West Open, 5% Park Facing, 5% Corner, 5% Main Road), and payment terms may be updated or amended by the developer in accordance with operational requirements.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              2. Independent Due Diligence &amp; Approvals
            </h4>
            <p>
              References to authorities including Sindh Master Plan Authority Hyderabad, Town Planning standards, HESCO, and SSGC reflect statutory coordination, submission dossiers, and infrastructure planning initiated by Citizen Builders &amp; Developers and technical partners (Shadab Links, AAC, Jasper Enterprises). All buyers are explicitly advised and encouraged to review physical certified documents and conduct independent legal verification.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              3. Visual &amp; Architectural Representations
            </h4>
            <p>
              Architectural renders, master plan conceptual diagrams, landscape visions, and site imagery displayed on this website are conceptual artistic representations intended to convey design intent. Actual on-ground finished construction, infrastructure materials, and site conditions may vary based on final civil execution and engineering clearances.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              4. No Financial or Guaranteed Return Claims
            </h4>
            <p>
              Citizen Builders &amp; Developers does not guarantee property appreciation, rental yield, or speculative financial returns. Real estate investments involve market dynamics, regional development timelines, and macro-economic factors. Prospective buyers should evaluate plot purchases based on long-term family utility and objective personal financial planning.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              5. Official Inquiries &amp; Dispute Resolution
            </h4>
            <p>
              All contracts, receipts, transfer deeds, and possession certificates are valid solely when executed on official developer stationery with certified bank deposits and authorized signatures.
            </p>
          </section>
        </div>

        <div className="px-6 py-4 border-t border-white/10 bg-charcoal-950 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            I Understand &amp; Agree
          </button>
        </div>
      </div>
    </div>
  );
};
