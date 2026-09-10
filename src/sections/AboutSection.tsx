import React from 'react';
import { Check, Shield, TrendingUp, Navigation, Home } from 'lucide-react';
import { PROJECT_DATA } from '../data/projectData';

interface AboutSectionProps {
  onOpenBookingModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBookingModal }) => {
  const corePillars = [
    {
      icon: Navigation,
      title: "Arterial Highway Link",
      desc: "Frontage on the M9 Karachi–Hyderabad Motorway between two powerhouse economic urban centers."
    },
    {
      icon: Home,
      title: "Planned Residential Enclave",
      desc: "Green Block is curated with wide boulevards, demarcated residential plots, and underground utilities."
    },
    {
      icon: Shield,
      title: "Security-Centric Master Planning",
      desc: "Gated entry checkpoints, boundary demarcation, and planned 24/7 CCTV surveillance architecture."
    },
    {
      icon: TrendingUp,
      title: "Unrivaled Payment Accessibility",
      desc: "0% Down Payment at booking with manageable 48-month installments starting at Rs. 5,000/month."
    }
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-950 border border-brand-500/30 text-brand-300 text-xs font-semibold uppercase tracking-widest mb-3">
            <span>Project Overview</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            A Thoughtfully Planned Residential Society on the <span className="emerald-gradient-text">M9 Motorway</span>.
          </h2>
          <p className="text-base sm:text-lg text-charcoal-300 mt-4 leading-relaxed font-normal">
            Citizen Housing Society is a modern master-planned residential development envisioned and executed by{' '}
            <strong className="text-white font-semibold">Citizen Builders &amp; Developers</strong>. Strategically situated between Karachi and Hyderabad on the primary M9 Motorway corridor, the project delivers practical land ownership with zero speculative inflation.
          </p>
        </div>

        {/* Editorial 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Composite with Stat Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
                alt="Citizen Housing Society Master Vision"
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent" />
              
              {/* Bottom Floating Badge inside Image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-card border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-brand-400 font-mono">
                    Development Precinct
                  </span>
                  <p className="text-sm font-bold text-white">Green Block — Citizen Housing</p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-champagne-400 font-mono">0% Booking</span>
                  <p className="text-[11px] text-charcoal-300">48-Mo. Tenure</p>
                </div>
              </div>
            </div>

            {/* Decorative Corner Element */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 p-5 rounded-2xl bg-charcoal-900 border border-brand-500/40 shadow-2xl max-w-xs">
              <div className="flex items-center gap-2 text-brand-400 text-xs font-bold mb-1">
                <Check className="w-4 h-4" />
                <span>Strategic Alignment</span>
              </div>
              <p className="text-[11px] text-charcoal-300 leading-snug">
                Located near DHA City, Saima Midtown, and the Nooriabad Industrial corridor.
              </p>
            </div>
          </div>

          {/* Right Column: Pillars & Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Designed Around Real Family Living &amp; Tangible Ownership
              </h3>
              <p className="text-sm text-charcoal-300 leading-relaxed">
                Rather than treating land as an unattainable luxury, Citizen Housing Society brings affordable, structured land ownership into direct reach. Situated adjacent to emerging regional infrastructure, the development benefits from existing connectivity between Karachi and Hyderabad.
              </p>
            </div>

            {/* Grid of Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {corePillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-charcoal-900/60 border border-white/5 hover:border-brand-500/30 transition-colors"
                  >
                    <div className="p-2.5 rounded-xl bg-brand-950 border border-brand-500/20 text-brand-400 inline-block mb-2.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-semibold text-white mb-1">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-charcoal-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={onOpenBookingModal}
                className="px-6 py-3 rounded-full bg-brand-600 hover:bg-brand-500 text-white font-semibold text-xs uppercase tracking-wider transition-colors shadow-glow-emerald"
              >
                Inquire About Green Block
              </button>
              <a
                href="#location"
                className="text-xs font-semibold text-charcoal-300 hover:text-white uppercase tracking-wider flex items-center gap-1.5 transition-colors"
              >
                <span>Explore Location Dynamics</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
