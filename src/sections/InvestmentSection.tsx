import React from 'react';
import { TrendingUp, ShieldCheck, Check, Sparkles, Scale, Building2, Landmark } from 'lucide-react';
import { PROJECT_DATA } from '../data/projectData';

interface InvestmentSectionProps {
  onOpenBookingModal: () => void;
}

export const InvestmentSection: React.FC<InvestmentSectionProps> = ({ onOpenBookingModal }) => {
  const investmentPillars = [
    {
      title: "Regional Highway Appreciation Trajectory",
      desc: "The M9 Motorway represents the premier growth corridor out of Karachi. Positioning your plot adjacent to established master-developments like DHA City and Saima Midtown creates enduring spatial value."
    },
    {
      title: "Barrier-Free Capital Entry",
      desc: "With 0% down payment and predictable installments of Rs. 5,000 or Rs. 7,500 monthly, capital accumulation happens smoothly without stressful initial liquidity constraints."
    },
    {
      title: "Real Land Ownership vs Speculation",
      desc: "Plots in Green Block are mapped for planned residential construction, providing a genuine family asset rather than speculative paper trading."
    },
    {
      title: "Industrial & Educational Synergy",
      desc: "Proximity to the Nooriabad Industrial Area and planned university campus corridors supports long-term housing requirements and rental feasibility."
    }
  ];

  return (
    <section id="investment" className="py-24 sm:py-32 bg-charcoal-900/60 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-950 border border-brand-500/30 text-brand-300 text-xs font-semibold uppercase tracking-widest mb-3">
            <TrendingUp className="w-3.5 h-3.5 text-brand-400" />
            <span>Value &amp; Strategic Vision</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Invest Today. <br />
            <span className="emerald-gradient-text">Build Tomorrow.</span>
          </h2>
          <p className="text-sm sm:text-base text-charcoal-300 mt-4 leading-relaxed font-normal">
            A responsible, long-term opportunity to own genuine residential land along the dynamic M9 corridor. We believe in clear ownership milestones, disciplined development pacing, and sustainable family value.
          </p>
        </div>

        {/* 2-Column Investment Perspective Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Investment Philosophy & Ethics */}
          <div className="lg:col-span-7 space-y-4 flex flex-col justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {investmentPillars.map((p, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-charcoal-950 border border-white/5 hover:border-brand-500/30 transition-all"
                >
                  <div className="w-8 h-8 rounded-xl bg-brand-950 text-brand-400 font-mono text-xs font-bold flex items-center justify-center border border-brand-500/30 mb-3">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-xs text-charcoal-400 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Ethical Real Estate Disclaimer Notice */}
            <div className="p-5 rounded-3xl bg-charcoal-950 border border-white/10 flex items-start gap-3.5 mt-4">
              <Scale className="w-5 h-5 text-champagne-400 flex-shrink-0 mt-0.5" />
              <div className="text-xs text-charcoal-300 leading-relaxed">
                <span className="font-semibold text-white block mb-0.5">
                  Professional Investment Advisory Note:
                </span>
                Citizen Builders &amp; Developers advocates objective, disciplined property acquisition. We do not make guaranteed-return, instant profit, or speculative ROI claims. Real estate value evolves through infrastructure progress, regional population growth, and sustained community delivery.
              </div>
            </div>
          </div>

          {/* Right Column: Key Investment Card Summary */}
          <div className="lg:col-span-5 rounded-3xl bg-gradient-to-b from-brand-950 to-charcoal-950 border border-brand-500/40 p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-brand-300 font-bold">
                  Opportunity Highlights
                </span>
                <span className="px-2.5 py-1 rounded-full bg-brand-900/80 text-[10px] text-brand-200 border border-brand-400/30">
                  Green Block
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-white">
                Why Experienced Buyers Choose Citizen Housing
              </h3>

              <div className="space-y-4 my-6">
                {[
                  "Total valuations starting from Rs. 450,000 for 80 Sq. Yards",
                  "Monthly installment starting from just Rs. 5,000",
                  "Zero down payment at the moment of booking",
                  "Direct connectivity along the expanding M9 Motorway",
                  "Integrated educational institutions, hospital, and parks",
                  "Independent due diligence welcome on all documentation"
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-charcoal-200">
                    <Check className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-3">
              <button
                onClick={onOpenBookingModal}
                className="w-full py-3.5 px-6 rounded-2xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-xs uppercase tracking-wider transition-colors shadow-glow-emerald border border-brand-400/40 text-center"
              >
                Schedule an Investment Consultation
              </button>
              <p className="text-[11px] text-center text-charcoal-400">
                Discuss custom payment pacing and on-ground plot orientation with our sales desk.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
