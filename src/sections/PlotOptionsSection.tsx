import React from 'react';
import { Check, ArrowRight, Sparkles, Layers } from 'lucide-react';
import { PROJECT_DATA } from '../data/projectData';
import { formatPricePKR } from '../lib/utils';

interface PlotOptionsSectionProps {
  onSelectPlot: (plotId: '80-yards' | '120-yards') => void;
}

export const PlotOptionsSection: React.FC<PlotOptionsSectionProps> = ({ onSelectPlot }) => {
  return (
    <section id="plots" className="py-20 sm:py-28 bg-dark-card/40 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-bg border border-brand/40 text-brand text-xs font-semibold uppercase tracking-widest mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Available Plot Options</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tightest text-neutral-warm leading-tight">
            RESIDENTIAL PLOT CHOICES <br />
            <span className="brand-gradient-text">FOR YOUR VISION</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-muted mt-3 leading-relaxed max-w-2xl mx-auto">
            Choose between 80 Sq. Yards and 120 Sq. Yards residential plots in Green Block. Both feature 0% Down Payment at booking and a predictable 48-month installment plan.
          </p>
        </div>

        {/* Side-by-Side Mobile-Friendly Plot Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {PROJECT_DATA.plotPlans.map((plan) => {
            const isFeatured = plan.id === '120-yards';
            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-7 sm:p-10 transition-all duration-300 flex flex-col justify-between ${
                  isFeatured
                    ? 'bg-dark-card border-2 border-brand shadow-brand-subtle'
                    : 'bg-dark-card border border-white/10 hover:border-brand/40'
                }`}
              >
                {/* Popular Badge */}
                {isFeatured && (
                  <div className="absolute -top-3.5 right-6 sm:right-8 px-3.5 py-1 rounded-full bg-brand text-dark-bg text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md font-mono">
                    <Sparkles className="w-3 h-3" />
                    <span>Popular Choice</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand">
                      Green Block • Land
                    </span>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-dark-bg border border-brand/30 text-neutral-soft">
                      0% Down Payment
                    </span>
                  </div>

                  <h3 className="text-4xl sm:text-5xl font-black text-neutral-warm tracking-tightest">
                    {plan.sizeInYards} <span className="text-xl font-medium text-neutral-muted">YARDS</span>
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-brand uppercase tracking-wider mt-1 font-mono">
                    RESIDENTIAL PLOT
                  </p>
                  <p className="text-xs text-neutral-muted mt-1">
                    {plan.recommendedFor}
                  </p>

                  {/* Total Price Highlight Callout */}
                  <div className="my-6 p-4 rounded-2xl bg-dark-bg border border-brand/30">
                    <span className="text-[11px] uppercase tracking-wider text-neutral-muted block font-mono">
                      TOTAL PLOT PRICE
                    </span>
                    <div className="text-2xl sm:text-3xl font-black text-brand font-mono mt-0.5">
                      {formatPricePKR(plan.totalPrice)}
                    </div>
                  </div>

                  {/* Vertical Breakdown for Mobile Clarity */}
                  <div className="space-y-3 py-3 border-t border-b border-white/10 my-6 text-xs sm:text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-muted">Booking (Down Payment)</span>
                      <span className="font-bold text-brand font-mono">Rs. 0 (0% Down)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-muted">Monthly Payment (48 Mos)</span>
                      <span className="font-semibold text-neutral-warm font-mono">{formatPricePKR(plan.monthlyInstallment)} / mo</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-muted">Half-Yearly Payment (8×)</span>
                      <span className="font-semibold text-neutral-warm font-mono">{formatPricePKR(plan.halfYearlyInstallment)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-muted">Possession Handover</span>
                      <span className="font-semibold text-neutral-warm font-mono">{formatPricePKR(plan.possessionAmount)}</span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-2 mb-8">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-neutral-soft">
                        <Check className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA */}
                <button
                  onClick={() => onSelectPlot(plan.id)}
                  className={`w-full py-4 px-6 rounded-2xl font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 ${
                    isFeatured
                      ? 'bg-brand hover:bg-brand-400 text-dark-bg shadow-brand-glow'
                      : 'bg-white/10 hover:bg-white/20 text-neutral-warm border border-white/10'
                  }`}
                >
                  <span>Choose This Plot</span>
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
