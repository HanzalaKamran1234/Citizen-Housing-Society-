import React from 'react';
import { FileText, ShieldCheck, Download, AlertCircle, ArrowRight, ExternalLink } from 'lucide-react';
import { PROJECT_DATA } from '../data/projectData';

interface DocumentationSectionProps {
  onOpenDocumentationModal: () => void;
}

export const DocumentationSection: React.FC<DocumentationSectionProps> = ({
  onOpenDocumentationModal,
}) => {
  return (
    <section id="documentation" className="py-24 sm:py-32 bg-charcoal-900/60 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-950 border border-brand-500/30 text-brand-300 text-xs font-semibold uppercase tracking-widest mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-400" />
            <span>Compliance &amp; Due Diligence</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Documentation &amp; <span className="emerald-gradient-text">Statutory References</span>
          </h2>
          <p className="text-sm sm:text-base text-charcoal-300 mt-4 leading-relaxed font-normal">
            Project documentation and approval references provided by the developer. We support full buyer transparency and encourage investors to examine all master-planning submissions.
          </p>
        </div>

        {/* Documentation Highlight Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {PROJECT_DATA.documentationReferences.map((ref, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-charcoal-950 border border-white/5 hover:border-brand-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-xl bg-brand-950 border border-brand-500/20 text-brand-400">
                    <FileText className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-charcoal-400">
                    Record Ref {idx + 1}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-1 leading-snug">
                  {ref.authority}
                </h3>
                <p className="text-xs text-brand-300 font-medium mb-2">
                  {ref.scope}
                </p>
                <p className="text-[11px] text-charcoal-400 leading-relaxed">
                  {ref.note}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] text-charcoal-500">
                <span className="text-brand-400/80 font-mono">{ref.status}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action & Transparency Card */}
        <div className="p-8 rounded-3xl bg-charcoal-950 border border-brand-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span>Inspect Official Project Dossiers</span>
            </h3>
            <p className="text-xs text-charcoal-300 leading-relaxed">
              Schedule an in-person file verification at our corporate sales desk or request a digital compilation of developer-submitted documentation.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <button
              onClick={onOpenDocumentationModal}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-glow-emerald flex items-center justify-center gap-2 border border-brand-400/40"
            >
              <FileText className="w-4 h-4" />
              <span>View Documentation</span>
            </button>

            <button
              onClick={onOpenDocumentationModal}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 border border-white/10"
            >
              <Download className="w-4 h-4 text-charcoal-400" />
              <span>Request Documents</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
