import React from 'react';
import { Layers, Percent, DollarSign, Compass } from 'lucide-react';
import { PROJECT_DATA } from '../data/projectData';

export const TrustBar: React.FC = () => {
  const items = [
    {
      icon: Layers,
      value: "80 & 120",
      unit: "Sq. Yards",
      title: "Residential Plots",
      desc: "Optimally planned layouts for modern living"
    },
    {
      icon: Percent,
      value: "0%",
      unit: "Down Payment",
      title: "Booking with Rs. 0",
      desc: "Instant entry into monthly installment plan"
    },
    {
      icon: DollarSign,
      value: "Rs. 5,000",
      unit: "Monthly",
      title: "Starting Installment",
      desc: "48 equal, predictable monthly payments"
    },
    {
      icon: Compass,
      value: "M9 Motorway",
      unit: "Frontage",
      title: "Strategic Corridor",
      desc: "Near DHA City, Saima Midtown & Nooriabad"
    }
  ];

  return (
    <section className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="glass-card bg-charcoal-900/90 border border-brand-500/30 rounded-3xl p-6 sm:p-8 shadow-luxury backdrop-blur-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`flex items-start gap-4 transition-all duration-300 hover:translate-y-[-2px] ${
                  idx !== 0 ? 'pt-5 sm:pt-0 sm:pl-6' : ''
                }`}
              >
                <div className="p-3 rounded-2xl bg-brand-900/50 border border-brand-500/30 text-brand-400 flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xl sm:text-2xl font-bold tracking-tight text-white font-mono">
                      {item.value}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-brand-400">
                      {item.unit}
                    </span>
                  </div>
                  <h4 className="text-xs font-semibold text-charcoal-200 uppercase tracking-wider mt-1">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-charcoal-400 mt-0.5 leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
