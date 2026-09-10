import React, { useState } from 'react';
import { X, FileText, CheckCircle2, ShieldCheck, Download, Mail, ArrowRight, AlertTriangle } from 'lucide-react';
import { PROJECT_DATA } from '../data/projectData';

interface DocumentationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DocumentationModal: React.FC<DocumentationModalProps> = ({ isOpen, onClose }) => {
  const [requestedDoc, setRequestedDoc] = useState('All Official Project Dossier');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl bg-charcoal-900 border border-brand-500/30 rounded-3xl shadow-2xl overflow-hidden my-8 text-charcoal-100"
        role="dialog"
        aria-modal="true"
        aria-labelledby="doc-modal-title"
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-charcoal-950">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-brand-900/60 text-brand-300 border border-brand-500/30">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 id="doc-modal-title" className="text-xl font-bold text-white">
                Project Documentation &amp; Statutory References
              </h3>
              <p className="text-xs text-charcoal-400">
                Citizen Housing Society — Green Block | Citizen Builders &amp; Developers
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

        <div className="p-6 sm:p-8 space-y-6">
          {/* Transparency Alert Box */}
          <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-500/30 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <div className="text-xs text-amber-200/90 leading-relaxed">
              <span className="font-semibold text-amber-300 block mb-0.5">Developer Transparency Notice:</span>
              Project documentation and approval references are provided directly by Citizen Builders &amp; Developers. In line with ethical real estate practice, buyers are encouraged to inspect original certified copies and conduct independent due diligence prior to signing final registration deeds.
            </div>
          </div>

          {/* Reference Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PROJECT_DATA.documentationReferences.map((ref, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-charcoal-850 border border-white/10 hover:border-brand-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-4 h-4 text-brand-400" />
                  <h4 className="text-sm font-semibold text-white">{ref.authority}</h4>
                </div>
                <p className="text-xs text-charcoal-300 font-medium">{ref.scope}</p>
                <p className="text-[11px] text-charcoal-500 mt-2 italic">{ref.note}</p>
                <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] text-brand-300 font-mono">{ref.status}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-charcoal-400">Available upon request</span>
                </div>
              </div>
            ))}
          </div>

          {/* Direct Document Dispatch Form */}
          <div className="p-5 rounded-2xl bg-charcoal-950 border border-brand-500/20">
            {!submitted ? (
              <form onSubmit={handleRequest} className="space-y-4">
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider flex items-center gap-2">
                  <Mail className="w-4 h-4 text-brand-400" />
                  <span>Request Full Project File &amp; Town Planning Dossier</span>
                </h4>
                <p className="text-xs text-charcoal-400">
                  Enter your contact details to receive digital PDF copies of available project approvals, payment schedules, and master plan maps.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="px-3.5 py-2.5 rounded-xl bg-charcoal-850 border border-white/10 text-xs text-white placeholder-charcoal-500 focus:outline-none focus:border-brand-400"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="WhatsApp / Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="px-3.5 py-2.5 rounded-xl bg-charcoal-850 border border-white/10 text-xs text-white placeholder-charcoal-500 focus:outline-none focus:border-brand-400"
                  />
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-[11px] text-charcoal-400">
                    Documents are provided strictly for investor appraisal.
                  </span>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-glow-emerald flex items-center gap-1.5"
                  >
                    <span>Send Dossier</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-4 space-y-2">
                <CheckCircle2 className="w-8 h-8 text-brand-400 mx-auto" />
                <h5 className="text-base font-semibold text-white">Document Request Dispatched</h5>
                <p className="text-xs text-charcoal-300 max-w-sm mx-auto">
                  Our developer relations desk has logged your request for {name} ({phone}). You will receive the available documentation package shortly.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
