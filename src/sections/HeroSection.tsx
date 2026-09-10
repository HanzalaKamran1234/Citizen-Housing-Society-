import React from 'react';
import { ArrowRight, MapPin, ShieldCheck, ChevronDown, Sparkles } from 'lucide-react';
import { PROJECT_DATA } from '../data/projectData';

interface HeroSectionProps {
  onOpenBookingModal: () => void;
  onExplorePlans: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBookingModal,
  onExplorePlans,
}) => {
  return (
    <section id="hero" className="relative min-h-[100svh] flex flex-col justify-between pt-28 pb-12 overflow-hidden">
      {/* Background Image with Cinematic Dark Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85"
          alt="Citizen Housing Society Modern Community"
          className="w-full h-full object-cover object-center scale-105 animate-pulse-subtle"
          loading="eager"
        />
        {/* Layered cinematic gradients for extreme luxury editorial readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/75 to-charcoal-950/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/90 via-charcoal-950/40 to-charcoal-950/80" />
        <div className="absolute inset-0 bg-radial-glow opacity-80" />
      </div>

      {/* Hero Central Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full">
        <div className="max-w-3xl space-y-6 sm:space-y-8">
          
          {/* Tag & Subline Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card border border-brand-500/40 text-xs text-charcoal-200 shadow-glow-emerald backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-brand-400 animate-ping" />
            <span className="font-semibold tracking-wider text-brand-300 uppercase">
              {PROJECT_DATA.brand.locationLine}
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-2 sm:space-y-3">
            <div className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-champagne-400 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-champagne-400" />
              <span>{PROJECT_DATA.brand.subline}</span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
              A Modern Address. <br />
              <span className="emerald-gradient-text font-black">
                A Smarter Investment.
              </span>
            </h1>
          </div>

          {/* Supporting Narrative */}
          <p className="text-base sm:text-lg md:text-xl text-charcoal-200/95 max-w-2xl font-normal leading-relaxed text-balance">
            {PROJECT_DATA.brand.heroDescription}
          </p>

          {/* Value Badges Strip */}
          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-charcoal-300 pt-1">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
              <ShieldCheck className="w-4 h-4 text-brand-400" />
              <span>0% Down Payment</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-champagne-400" />
              <span>80 &amp; 120 Sq. Yards</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
              <MapPin className="w-4 h-4 text-brand-400" />
              <span>Near DHA City &amp; Saima Midtown</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
            <button
              onClick={onExplorePlans}
              className="group px-7 py-4 rounded-full bg-brand-600 hover:bg-brand-500 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-glow-emerald flex items-center justify-center gap-3 border border-brand-400/50"
            >
              <span>Explore Payment Plans</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
            </button>

            <button
              onClick={onOpenBookingModal}
              className="px-7 py-4 rounded-full glass-card hover:bg-white/10 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 border border-white/20 flex items-center justify-center gap-2"
            >
              <span>Book a Consultation</span>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Bottom Bar: Scroll Indicator & Location Quick Stat */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 flex items-end justify-between text-xs text-charcoal-400">
        <div className="flex items-center gap-2 font-mono text-[11px]">
          <MapPin className="w-3.5 h-3.5 text-brand-400" />
          <span>M9 KARACHI–HYDERABAD MOTORWAY CORRIDOR</span>
        </div>

        <a
          href="#about"
          className="hidden sm:flex items-center gap-2 hover:text-white transition-colors group cursor-pointer"
        >
          <span className="text-[11px] uppercase tracking-widest font-mono">Scroll to Discover</span>
          <ChevronDown className="w-4 h-4 transform group-hover:translate-y-1 transition-transform text-brand-400" />
        </a>
      </div>
    </section>
  );
};
