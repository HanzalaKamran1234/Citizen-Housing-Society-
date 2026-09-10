import React from 'react';
import { TrendingUp, Scale, Check, ArrowRight } from 'lucide-react';

interface InvestmentSectionProps {
  onOpenBookingModal: () => void;
}

export const InvestmentSection: React.FC<InvestmentSectionProps> = ({ onOpenBookingModal }) => {
  const pillars = [
    {
      step: "01",
      title: "Strategic Highway Growth Corridor",
      desc: "The M9 Motorway is the primary development corridor expanding out of Karachi towards Hyderabad. Proximity to established regional anchors like DHA City and Saima Midtown provides an enduring location foundation."
    },
    {
      step: "02",
      title: "Pure Land Value & Accessibility",
      desc: "Starting at Rs. 5,000/month with 0% down payment, capital requirements remain manageable and transparent, enabling families to secure physical land without straining monthly liquidity."
    },
    {
      step: "03",
      title: "Autonomy Over Future Construction",
      desc: "Because you own the plot, you are never locked into forced builder contracts. You preserve the long-term freedom to construct what fits your lifestyle when your family is ready."
    },
    {
      step: "04",
      title: "Regional Economic Drivers",
      desc: "Close proximity to the Nooriabad Industrial Area and planned university campus zones fosters sustained long-term demographic and residential necessity along the corridor."
    }
  ];

  return (
    <section id="investment" className="py-20 sm:py-28 bg-dark-card/50 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-bg border border-brand/40 text-brand text-xs font-semibold uppercase tracking-widest mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Land Ownership Perspective</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tightest text-neutral-warm leading-tight">
            START WITH <span className="brand-gradient-text">LAND.</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-muted mt-3 leading-relaxed">
            A disciplined, long-term opportunity to secure residential plots in an expanding highway corridor. Real estate value evolves through regional growth, infrastructure connectivity, and patient land ownership.
          </p>
        </div>

        {/* 2-Column Strategic Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: 4 Ownership Pillars */}
          <div className="lg:col-span-7 space-y-4 flex flex-col justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((p, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-dark-bg border border-white/5 hover:border-brand/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="w-8 h-8 rounded-xl bg-dark-card border border-brand/30 text-brand font-mono text-xs font-bold flex items-center justify-center mb-3">
                      {p.step}
                    </span>
                    <h3 className="text-base font-bold text-neutral-warm mb-2">
                      {p.title}
                    </h3>
                    <p className="text-xs text-neutral-muted leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Ethical Advisory Callout */}
            <div className="p-5 rounded-2xl bg-dark-bg border border-brand/20 flex items-start gap-3 mt-4">
              <Scale className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
              <div className="text-xs text-neutral-muted leading-relaxed">
                <strong className="text-neutral-warm block mb-0.5">Responsible Land Investment Notice:</strong>
                Citizen Builders &amp; Developers does not make speculative claims of guaranteed profit, guaranteed ROI, or instant capital appreciation. Land ownership should be evaluated from a long-term family security and realistic regional development standpoint.
              </div>
            </div>
          </div>

          {/* Right: Summary Highlights Card */}
          <div className="lg:col-span-5 rounded-3xl bg-dark-card border border-brand/40 p-7 sm:p-8 flex flex-col justify-between shadow-dark-luxury relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-brand font-bold">
                  Key Advantages
                </span>
                <span className="px-2.5 py-1 rounded-full bg-brand/10 text-[10px] text-brand border border-brand/30 font-semibold font-mono">
                  Pure Land
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-neutral-warm">
                Why Buy Land in Citizen Housing?
              </h3>

              <div className="space-y-3.5 my-6">
                {[
                  "Total valuations from Rs. 450,000 for 80 Sq. Yards",
                  "Manageable monthly installments starting at Rs. 5,000",
                  "0% Down Payment required to initiate your booking",
                  "Highway frontage on the expanding M9 Motorway",
                  "You retain complete freedom over what and when you build",
                  "Official developer receipts and independent due diligence"
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-soft">
                    <Check className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-3">
              <button
                onClick={onOpenBookingModal}
                className="w-full py-4 px-6 rounded-2xl bg-brand hover:bg-brand-400 text-dark-bg font-bold text-xs uppercase tracking-wider transition-colors shadow-brand-glow text-center"
              >
                Schedule an Ownership Consultation
              </button>
              <p className="text-[11px] text-center text-neutral-muted">
                Discuss plot orientation, boulevard frontages, and payment schedules with our sales desk.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
