import React from 'react';
import { Check, ArrowRight, Sparkles, Layers } from 'lucide-react';
import { PROJECT_DATA } from '../data/projectData';
import { formatPricePKR } from '../lib/utils';

interface PlotOptionsSectionProps {
  onSelectPlot: (plotId: '80-yards' | '120-yards') => void;
}

export const PlotOptionsSection: React.FC<PlotOptionsSectionProps> = ({ onSelectPlot }) => {
  return (
    <section id="plots" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-950 border border-brand-500/30 text-brand-300 text-xs font-semibold uppercase tracking-widest mb-3">
            <Layers className="w-3.5 h-3.5 text-brand-400" />
            <span>Plot Categories</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Residential Plot Choices Designed for <br />
            <span className="emerald-gradient-text">Your Lifestyle &amp; Budget</span>
          </h2>
          <p className="text-sm sm:text-base text-charcoal-300 mt-4 leading-relaxed max-w-2xl mx-auto">
            Choose between compact 80 Sq. Yards or spacious 120 Sq. Yards residential plots in Green Block. Both feature the signature 0% Down Payment structure.
          </p>
        </div>

        {/* Side-by-Side Plot Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {PROJECT_DATA.plotPlans.map((plan) => {
            const isFeatured = plan.id === '120-yards';
            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 sm:p-10 transition-all duration-300 flex flex-col justify-between ${
                  isFeatured
                    ? 'bg-gradient-to-b from-brand-950/90 to-charcoal-900 border-2 border-brand-400/60 shadow-glow-emerald hover:border-brand-300'
                    : 'bg-charcoal-900/90 border border-white/10 hover:border-brand-500/40'
                }`}
              >
                {/* Featured Badge */}
                {isFeatured && (
                  <div className="absolute -top-3.5 right-8 px-3.5 py-1 rounded-full bg-champagne-500 text-charcoal-950 text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                    <Sparkles className="w-3 h-3 text-charcoal-950" />
                    <span>Most Popular Family Plot</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-400">
                      Green Block Residential
                    </span>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-charcoal-300">
                      0% Down Payment
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {plan.sizeInYards} <span className="text-xl font-light text-charcoal-400">Sq. Yards</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-400 mt-1">
                    {plan.recommendedFor}
                  </p>

                  {/* Total Price Callout */}
                  <div className="my-6 p-4 rounded-2xl bg-charcoal-950/80 border border-white/5">
                    <span className="text-[11px] uppercase tracking-wider text-charcoal-400 block font-mono">
                      Total Package Price
                    </span>
                    <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono mt-0.5">
                      {formatPricePKR(plan.totalPrice)}
                    </div>
                  </div>

                  {/* Key Metrics Comparison Table */}
                  <div className="space-y-3 py-2 border-t border-b border-white/10 my-6 text-xs sm:text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-charcoal-400">Booking / Down Payment</span>
                      <span className="font-bold text-brand-400 font-mono">Rs. 0 (0% Down)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-charcoal-400">Monthly Installment (48 Mos)</span>
                      <span className="font-semibold text-white font-mono">{formatPricePKR(plan.monthlyInstallment)} / mo</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-charcoal-400">Half-Yearly Installment (8×)</span>
                      <span className="font-semibold text-white font-mono">{formatPricePKR(plan.halfYearlyInstallment)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-charcoal-400">Payment on Possession</span>
                      <span className="font-semibold text-white font-mono">{formatPricePKR(plan.possessionAmount)}</span>
                    </div>
                  </div>

                  {/* Feature Bullets */}
                  <ul className="space-y-2.5 mb-8">
                    {plan.features.slice(0, 4).map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-charcoal-300">
                        <Check className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA */}
                <button
                  onClick={() => onSelectPlot(plan.id)}
                  className={`w-full py-3.5 px-6 rounded-2xl font-semibold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 ${
                    isFeatured
                      ? 'bg-brand-600 hover:bg-brand-500 text-white shadow-glow-emerald border border-brand-400/50'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
                  }`}
                >
                  <span>Choose {plan.sizeInYards} Yards Plot</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
