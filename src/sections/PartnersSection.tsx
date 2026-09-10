import React from 'react';
import { Building, DraftingCompass, HardHat, Briefcase, ShieldCheck } from 'lucide-react';
import { PROJECT_DATA } from '../data/projectData';

export const PartnersSection: React.FC = () => {
  const getRoleIcon = (role: string) => {
    if (role.includes('Project By')) return Building;
    if (role.includes('Architect')) return DraftingCompass;
    if (role.includes('Contractor')) return HardHat;
    return Briefcase;
  };

  return (
    <section className="py-20 sm:py-28 bg-dark-bg relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-card border border-brand/40 text-brand text-xs font-semibold uppercase tracking-widest mb-3">
            <Building className="w-3.5 h-3.5 text-brand" />
            <span>Project Consortium</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tightest text-neutral-warm leading-tight">
            DEVELOPMENT <span className="brand-gradient-text">PARTNERS</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-muted mt-3 leading-relaxed max-w-2xl mx-auto">
            A collaborative consortium of engineering consultants, civil contractors, and land development teams bringing Green Block to life.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROJECT_DATA.partners.map((partner, idx) => {
            const Icon = getRoleIcon(partner.role);
            return (
              <div
                key={idx}
                className="group p-6 sm:p-7 rounded-3xl bg-dark-card border border-white/5 hover:border-brand/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-brand-subtle flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-dark-bg border border-brand/30 text-brand flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-brand/10 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-dark-bg border border-brand/30 text-brand inline-block mb-3">
                    {partner.role}
                  </span>

                  <h3 className="text-base sm:text-lg font-bold text-neutral-warm mb-1 group-hover:text-brand transition-colors">
                    {partner.name}
                  </h3>

                  {partner.tagline && (
                    <p className="text-xs text-brand font-medium mb-3 italic">
                      “{partner.tagline}”
                    </p>
                  )}

                  <p className="text-xs text-neutral-muted leading-relaxed">
                    {partner.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] text-neutral-faint font-mono">
                  <span>Project Stakeholder</span>
                  <ShieldCheck className="w-3.5 h-3.5 text-brand" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
