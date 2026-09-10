import React from 'react';
import { Layers, Percent, DollarSign, Compass, MapPin } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const facts = [
    {
      icon: Layers,
      highlight: "80 YARDS",
      title: "Residential Plot",
      desc: "Optimally scaled land parcel"
    },
    {
      icon: Layers,
      highlight: "120 YARDS",
      title: "Residential Plot",
      desc: "Spacious avenue-fronting land"
    },
    {
      icon: Percent,
      highlight: "0%",
      title: "Down Payment",
      desc: "Rs. 0 required at booking"
    },
    {
      icon: DollarSign,
      highlight: "FROM Rs. 5,000",
      title: "Monthly Installment",
      desc: "48 equal, predictable months"
    },
    {
      icon: MapPin,
      highlight: "M9 MOTORWAY",
      title: "Karachi–Hyderabad",
      desc: "Strategic growth corridor"
    }
  ];

  return (
    <section id="facts" className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-dark-card border border-brand/30 rounded-3xl p-5 sm:p-7 shadow-brand-subtle backdrop-blur-xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {facts.map((fact, idx) => {
            const Icon = fact.icon;
            return (
              <div
                key={idx}
                className={`flex flex-col justify-between transition-all duration-300 hover:translate-y-[-2px] ${
                  idx !== 0 ? 'pt-4 sm:pt-0 sm:pl-5' : ''
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 rounded-lg bg-dark-bg border border-brand/30 text-brand">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-brand font-semibold">
                    {fact.title}
                  </span>
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-extrabold tracking-tight text-neutral-warm font-mono">
                    {fact.highlight}
                  </div>
                  <p className="text-[11px] text-neutral-muted mt-0.5 leading-snug">
                    {fact.desc}
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
