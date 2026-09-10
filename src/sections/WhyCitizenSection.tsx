import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { PROJECT_DATA } from '../data/projectData';

export const WhyCitizenSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-950 border border-brand-500/30 text-brand-300 text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-400" />
            <span>The Developer Standard</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Why Choose <span className="emerald-gradient-text">Citizen Housing</span>
          </h2>
          <p className="text-sm sm:text-base text-charcoal-300 mt-4 leading-relaxed font-normal">
            Eight foundational principles guiding the development of Green Block — combining transparent pricing with forward-looking engineering.
          </p>
        </div>

        {/* Numbered Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROJECT_DATA.whyCitizenHousing.map((item) => (
            <div
              key={item.number}
              className="group p-6 sm:p-8 rounded-3xl bg-charcoal-900/70 border border-white/5 hover:border-brand-400/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-luxury flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-black text-brand-400 group-hover:text-brand-300 transition-colors">
                    {item.number}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-white/10 group-hover:bg-brand-400 transition-colors" />
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug group-hover:text-brand-200 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-charcoal-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/5 flex items-center gap-2 text-[10px] text-charcoal-500 font-mono">
                <span>Citizen Housing Standard</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
