import React from 'react';
import { ShieldCheck, MessageSquare, Phone, Mail, ArrowUp } from 'lucide-react';
import { PROJECT_DATA } from '../data/projectData';

interface FooterProps {
  onOpenPrivacyModal: () => void;
  onOpenDisclaimerModal: () => void;
  onNavigateSection: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacyModal,
  onOpenDisclaimerModal,
  onNavigateSection,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-bg border-t border-white/10 pt-16 pb-12 text-neutral-muted relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          
          {/* Column 1: Brand (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-brand text-dark-bg flex items-center justify-center font-bold text-sm shadow-brand-subtle">
                C
              </span>
              <span className="font-extrabold tracking-widest text-xl text-neutral-warm">
                CITIZEN<span className="text-brand font-light ml-1">HOUSING</span>
              </span>
            </div>

            <p className="text-xs font-mono uppercase tracking-widest text-brand font-bold">
              {PROJECT_DATA.brand.subline}
            </p>

            <p className="text-xs text-neutral-muted leading-relaxed max-w-sm">
              Citizen Housing Society — Green Block is an exclusive residential plot development project on the M9 Karachi–Hyderabad Motorway, offering 80 and 120 Sq. Yards plots with 0% down payment.
            </p>

            <div className="flex items-center gap-2.5 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-dark-card border border-brand/40 text-[10px] font-mono text-brand font-bold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>100% Residential Plots</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-dark-card border border-white/10 text-[10px] font-mono text-neutral-muted">
                <span>Green Block</span>
              </span>
            </div>
          </div>

          {/* Column 2: Explore Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-warm font-mono">
              Explore
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { label: 'Home', id: 'hero' },
                { label: 'About', id: 'about' },
                { label: 'Location', id: 'location' },
                { label: 'Plots', id: 'plots' },
                { label: 'Payment Plans', id: 'payment-plans' },
                { label: 'Facilities', id: 'facilities' },
                { label: 'Master Plan', id: 'master-plan' },
                { label: 'FAQ', id: 'faq' },
                { label: 'Contact', id: 'contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigateSection(link.id)}
                    className="hover:text-brand transition-colors text-neutral-muted hover:translate-x-1 inline-block transform duration-150"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-warm font-mono">
              Contact
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-faint block">
                  Project Location
                </span>
                <p className="text-neutral-soft mt-0.5">{PROJECT_DATA.brand.siteLocation}</p>
              </li>
              <li>
                <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-faint block">
                  Phone
                </span>
                <a href={`tel:${PROJECT_DATA.brand.displayPhone}`} className="text-neutral-soft hover:text-brand transition-colors font-mono">
                  {PROJECT_DATA.brand.displayPhone}
                </a>
              </li>
              <li>
                <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-faint block">
                  WhatsApp
                </span>
                <a
                  href={`https://wa.me/${PROJECT_DATA.brand.officialWhatsApp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand hover:text-brand-300 transition-colors font-mono flex items-center gap-1 mt-0.5 font-semibold"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </li>
              <li>
                <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-faint block">
                  Email
                </span>
                <a href={`mailto:${PROJECT_DATA.brand.displayEmail}`} className="text-neutral-soft hover:text-brand transition-colors">
                  {PROJECT_DATA.brand.displayEmail}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-warm font-mono">
              Legal
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={onOpenPrivacyModal}
                  className="hover:text-brand transition-colors text-neutral-muted text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenDisclaimerModal}
                  className="hover:text-brand transition-colors text-neutral-muted text-left"
                >
                  Terms &amp; Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenDisclaimerModal}
                  className="hover:text-brand transition-colors text-neutral-muted text-left"
                >
                  Disclaimer
                </button>
              </li>
            </ul>

            <div className="pt-4">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 p-2 rounded-xl bg-dark-card border border-white/10 hover:border-brand/40 text-xs text-neutral-soft hover:text-brand transition-colors"
                title="Scroll back to top"
              >
                <ArrowUp className="w-4 h-4" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Exact Developer Disclaimer */}
        <div className="pt-8 space-y-4">
          <p className="text-[11px] text-neutral-muted leading-relaxed bg-dark-card p-4 rounded-2xl border border-white/5">
            <strong className="text-neutral-soft">Disclaimer:</strong> Information displayed on this website is subject to change. Please verify current pricing, availability, documentation, approvals and terms with the developer before making any decision.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-faint gap-3 pt-1">
            <div>
              © 2026 <strong className="text-neutral-soft">Citizen Housing</strong>. A Project of Citizen Builders &amp; Developers. All rights reserved.
            </div>
            <div className="flex items-center gap-4 text-[11px]">
              <button onClick={onOpenPrivacyModal} className="hover:text-brand transition-colors">Privacy Policy</button>
              <span>•</span>
              <button onClick={onOpenDisclaimerModal} className="hover:text-brand transition-colors">Terms &amp; Disclaimer</button>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
