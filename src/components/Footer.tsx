import React from 'react';
import { ShieldCheck, MessageSquare, Phone, Mail, MapPin, ArrowUp, ExternalLink } from 'lucide-react';
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
    <footer className="bg-charcoal-950 border-t border-white/10 pt-16 pb-12 text-charcoal-300 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          
          {/* Column 1: Brand (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-600 to-brand-900 border border-brand-400/30 flex items-center justify-center font-serif font-bold text-white shadow-glow-emerald">
                C
              </span>
              <span className="font-bold tracking-widest text-xl text-white">
                CITIZEN<span className="text-brand-400 font-light ml-1">HOUSING</span>
              </span>
            </div>

            <p className="text-xs font-mono uppercase tracking-widest text-champagne-400 font-medium">
              {PROJECT_DATA.brand.subline}
            </p>

            <p className="text-xs text-charcoal-400 leading-relaxed max-w-sm">
              Citizen Housing Society (Green Block) is a strategically planned residential development on the M9 Karachi–Hyderabad Motorway, offering transparent 80 and 120 Sq. Yards plots with 0% down payment.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-950 border border-brand-500/30 text-[10px] font-mono text-brand-300">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-400" />
                <span>Transparent Ownership</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-charcoal-900 border border-white/10 text-[10px] font-mono text-charcoal-400">
                <span>Green Block</span>
              </span>
            </div>
          </div>

          {/* Column 2: Explore Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white font-mono">
              Explore Project
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { label: 'Home & Overview', id: 'hero' },
                { label: 'About Citizen Housing', id: 'about' },
                { label: 'M9 Motorway Location', id: 'location' },
                { label: 'Plot Categories (80 & 120)', id: 'plots' },
                { label: 'Payment Plans & Schedules', id: 'payment-plans' },
                { label: 'Community Facilities', id: 'facilities' },
                { label: 'Master Plan Layout', id: 'master-plan' },
                { label: 'Frequently Asked Questions', id: 'faq' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigateSection(link.id)}
                    className="hover:text-brand-300 transition-colors text-charcoal-400 hover:translate-x-1 inline-block transform duration-150"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white font-mono">
              Sales &amp; Consultation
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <span className="text-[10px] uppercase font-mono tracking-wider text-charcoal-500 block">
                  Project Site Location
                </span>
                <p className="text-charcoal-300 mt-0.5">{PROJECT_DATA.brand.siteLocation}</p>
              </li>
              <li>
                <span className="text-[10px] uppercase font-mono tracking-wider text-charcoal-500 block">
                  Phone Consultation
                </span>
                <a href={`tel:${PROJECT_DATA.brand.displayPhone}`} className="text-charcoal-300 hover:text-brand-300 transition-colors font-mono">
                  {PROJECT_DATA.brand.displayPhone}
                </a>
              </li>
              <li>
                <span className="text-[10px] uppercase font-mono tracking-wider text-charcoal-500 block">
                  Sales WhatsApp Desk
                </span>
                <a
                  href={`https://wa.me/${PROJECT_DATA.brand.officialWhatsApp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-400 hover:text-brand-300 transition-colors font-mono flex items-center gap-1 mt-0.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </li>
              <li>
                <span className="text-[10px] uppercase font-mono tracking-wider text-charcoal-500 block">
                  Official Inquiries
                </span>
                <a href={`mailto:${PROJECT_DATA.brand.displayEmail}`} className="text-charcoal-300 hover:text-brand-300 transition-colors">
                  {PROJECT_DATA.brand.displayEmail}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal & Compliance (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white font-mono">
              Legal &amp; Policy
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={onOpenDisclaimerModal}
                  className="hover:text-brand-300 transition-colors text-charcoal-400 text-left"
                >
                  Legal Disclaimer
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenDisclaimerModal}
                  className="hover:text-brand-300 transition-colors text-charcoal-400 text-left"
                >
                  Terms &amp; Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenPrivacyModal}
                  className="hover:text-brand-300 transition-colors text-charcoal-400 text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenDisclaimerModal}
                  className="hover:text-brand-300 transition-colors text-charcoal-400 text-left"
                >
                  Due Diligence Notice
                </button>
              </li>
            </ul>

            <div className="pt-4">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 p-2 rounded-xl bg-charcoal-900 border border-white/10 hover:border-white/20 text-xs text-charcoal-300 hover:text-white transition-colors"
                title="Scroll back to top"
              >
                <ArrowUp className="w-4 h-4" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Mandatory Legal Disclaimer Note */}
        <div className="pt-8 space-y-4">
          <p className="text-[11px] text-charcoal-400 leading-relaxed bg-charcoal-900/60 p-4 rounded-2xl border border-white/5">
            <strong className="text-charcoal-300">Disclaimer:</strong> Information shown on this website is subject to change. Please verify current pricing, approvals, availability and terms directly with Citizen Builders &amp; Developers prior to financial commitments. Visual renders and layouts represent conceptual designs and may be modified during civil implementation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-charcoal-400 gap-4 pt-2">
            <div>
              © 2026 <strong className="text-white">Citizen Housing</strong>. A Project of Citizen Builders &amp; Developers. All rights reserved.
            </div>
            <div className="flex items-center gap-4 text-[11px]">
              <button onClick={onOpenPrivacyModal} className="hover:text-white transition-colors">Privacy Policy</button>
              <span>•</span>
              <button onClick={onOpenDisclaimerModal} className="hover:text-white transition-colors">Disclaimer &amp; Due Diligence</button>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
