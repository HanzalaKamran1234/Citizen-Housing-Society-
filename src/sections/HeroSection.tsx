import React from 'react';
import { ArrowRight, MapPin, Compass, ChevronDown, CheckCircle2 } from 'lucide-react';
import { PROJECT_DATA } from '../data/projectData';

interface HeroSectionProps {
  onExplorePlots: () => void;
  onViewPaymentPlans: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExplorePlots,
  onViewPaymentPlans,
}) => {
  return (
    <section id="hero" className="relative min-h-[100svh] flex flex-col justify-between pt-28 pb-8 sm:pb-12 overflow-hidden bg-dark-bg">
      {/* Cinematic Land & Landscape Visual */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2400&q=85"
          alt="Citizen Housing Society Open Land & Green Block"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          loading="eager"
        />
        {/* Layered Obsidian & Emerald Dark Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/85 to-dark-bg/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-dark-bg/75 to-dark-bg/60" />
        <div className="absolute inset-0 bg-radial-glow opacity-90 pointer-events-none" />
      </div>

      {/* Hero Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full">
        <div className="max-w-3xl space-y-6 sm:space-y-8">
          
          {/* Small Label Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-card border border-brand/40 text-xs text-neutral-soft shadow-brand-subtle backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-brand animate-ping" />
            <span className="font-mono font-bold tracking-widest text-brand uppercase text-[11px] sm:text-xs">
              CITIZEN HOUSING — GREEN BLOCK
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tightest text-neutral-warm leading-[1.06]">
              OWN THE PLOT. <br />
              <span className="brand-gradient-text font-black">
                SHAPE YOUR FUTURE.
              </span>
            </h1>
          </div>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg md:text-xl text-neutral-muted max-w-2xl font-normal leading-relaxed text-balance">
            {PROJECT_DATA.brand.heroDescription}
          </p>

          {/* Core Value Pills */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs sm:text-sm text-neutral-soft pt-1">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-dark-card/90 border border-white/10 backdrop-blur-sm">
              <CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0" />
              <span>0% Down Payment</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-dark-card/90 border border-white/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-brand flex-shrink-0" />
              <span>80 &amp; 120 Sq. Yards Plots</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-dark-card/90 border border-white/10 backdrop-blur-sm">
              <MapPin className="w-4 h-4 text-brand flex-shrink-0" />
              <span>Near DHA City &amp; Saima Midtown</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
            <button
              onClick={onExplorePlots}
              className="group px-7 py-4 rounded-full bg-brand hover:bg-brand-400 text-dark-bg font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-brand-glow flex items-center justify-center gap-2.5 active:scale-95"
            >
              <span>Explore Plots</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onViewPaymentPlans}
              className="px-7 py-4 rounded-full glass-dark hover:bg-white/10 text-neutral-warm font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 border border-white/15 flex items-center justify-center gap-2 active:scale-95"
            >
              <span>View Payment Plans</span>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Bottom Bar: Location Indicator & Animated Scroll */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-6 flex items-end justify-between text-xs text-neutral-muted">
        <div className="flex items-center gap-2 font-mono text-[11px] sm:text-xs text-neutral-soft">
          <Compass className="w-3.5 h-3.5 text-brand" />
          <span className="tracking-wider uppercase font-semibold">
            {PROJECT_DATA.brand.locationLine}
          </span>
        </div>

        <a
          href="#facts"
          className="hidden sm:flex items-center gap-1.5 hover:text-brand transition-colors group cursor-pointer text-[11px] font-mono uppercase tracking-widest text-neutral-muted"
        >
          <span>Discover Land</span>
          <ChevronDown className="w-4 h-4 transform group-hover:translate-y-1 transition-transform text-brand" />
        </a>
      </div>
    </section>
  );
};
