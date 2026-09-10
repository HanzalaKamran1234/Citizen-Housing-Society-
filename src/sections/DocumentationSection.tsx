import React from 'react';
import { FileText, ShieldCheck, Download, AlertTriangle } from 'lucide-react';
import { PROJECT_DATA } from '../data/projectData';

interface DocumentationSectionProps {
  onOpenDocumentationModal: () => void;
}

export const DocumentationSection: React.FC<DocumentationSectionProps> = ({
  onOpenDocumentationModal,
}) => {
  return (
    <section id="documentation" className="py-20 sm:py-28 bg-dark-card/40 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-bg border border-brand/40 text-brand text-xs font-semibold uppercase tracking-widest mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Compliance &amp; Due Diligence</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tightest text-neutral-warm leading-tight">
            PROJECT <span className="brand-gradient-text">DOCUMENTATION</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-muted mt-3 leading-relaxed">
            Project documentation and approval references provided by the developer. We support full buyer transparency and encourage investors to examine all master-planning submissions.
          </p>
        </div>

        {/* Documentation Records Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {PROJECT_DATA.documentationReferences.map((ref, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-dark-card border border-white/5 hover:border-brand/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-xl bg-dark-bg border border-brand/30 text-brand">
                    <FileText className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-faint">
                    Record {idx + 1}
                  </span>
                </div>

                <h3 className="text-base font-bold text-neutral-warm mb-1 leading-snug">
                  {ref.authority}
                </h3>
                <p className="text-xs text-brand font-semibold mb-2">
                  {ref.scope}
                </p>
                <p className="text-[11px] text-neutral-muted leading-relaxed">
                  {ref.note}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] text-neutral-faint">
                <span className="text-brand font-mono">{ref.status}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Bar */}
        <div className="p-6 sm:p-8 rounded-3xl bg-dark-card border border-brand/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-dark-luxury">
          <div className="space-y-1.5 max-w-xl">
            <h3 className="text-lg sm:text-xl font-bold text-neutral-warm">
              Inspect Official Project Dossiers
            </h3>
            <p className="text-xs text-neutral-muted leading-relaxed">
              Schedule an in-person file verification at our corporate sales desk or request digital copies of developer-provided documentation.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <button
              onClick={onOpenDocumentationModal}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-brand hover:bg-brand-400 text-dark-bg text-xs font-bold uppercase tracking-wider transition-colors shadow-brand-glow flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>View Documents</span>
            </button>

            <button
              onClick={onOpenDocumentationModal}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-neutral-warm text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 border border-white/10"
            >
              <Download className="w-4 h-4 text-brand" />
              <span>Request Documentation</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
