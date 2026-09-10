import React from 'react';
import { Briefcase, Building, DraftingCompass, HardHat, ShieldCheck } from 'lucide-react';
import { PROJECT_DATA } from '../data/projectData';

export const PartnersSection: React.FC = () => {
  const getRoleIcon = (role: string) => {
    if (role.includes('Project By')) return Building;
    if (role.includes('Architect')) return DraftingCompass;
    if (role.includes('Contractor')) return HardHat;
    return Briefcase;
  };

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-950 border border-brand-500/30 text-brand-300 text-xs font-semibold uppercase tracking-widest mb-3">
            <Building className="w-3.5 h-3.5 text-brand-400" />
            <span>Project Consortium</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Development &amp; <span className="emerald-gradient-text">Execution Partners</span>
          </h2>
          <p className="text-sm sm:text-base text-charcoal-300 mt-4 leading-relaxed max-w-2xl mx-auto">
            A collaborative alliance of experienced engineering consultants, civil contractors, and project developers bringing Green Block to life.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROJECT_DATA.partners.map((partner, idx) => {
            const Icon = getRoleIcon(partner.role);
            return (
              <div
                key={idx}
                className="group p-6 sm:p-8 rounded-3xl bg-charcoal-900/80 border border-white/5 hover:border-brand-500/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-luxury flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-brand-950 border border-brand-500/20 text-brand-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-900/80 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-brand-950 border border-brand-500/30 text-brand-300 inline-block mb-3">
                    {partner.role}
                  </span>

                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-brand-200 transition-colors">
                    {partner.name}
                  </h3>

                  {partner.tagline && (
                    <p className="text-xs text-champagne-400 font-medium mb-3 italic">
                      “{partner.tagline}”
                    </p>
                  )}

                  <p className="text-xs text-charcoal-400 leading-relaxed">
                    {partner.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] text-charcoal-500 font-mono">
                  <span>Verified Project Stakeholder</span>
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-500" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
