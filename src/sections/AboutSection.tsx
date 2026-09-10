import React from 'react';
import { ArrowRight, Check, Compass, ShieldCheck, MapPin } from 'lucide-react';

interface AboutSectionProps {
  onOpenBookingModal: () => void;
  onExplorePlots: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenBookingModal,
  onExplorePlots,
}) => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-dark-bg relative overflow-hidden">
      {/* Subtle brand ambient glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-card border border-brand/40 text-brand text-xs font-semibold uppercase tracking-widest mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>About Citizen Housing</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tightest text-neutral-warm leading-tight">
            A Place To Start <span className="brand-gradient-text">With Land.</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-muted mt-4 leading-relaxed">
            Citizen Housing Society — Green Block is a master-planned residential plot development project by{' '}
            <strong className="text-neutral-warm font-semibold">Citizen Builders &amp; Developers</strong>, located on the M9 Karachi–Hyderabad Motorway.
          </p>
        </div>

        {/* 2-Column Editorial Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Landscape & Planning Graphic */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-dark-luxury group">
              <img
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"
                alt="Citizen Housing Society Open Terrain"
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/25 to-transparent" />
              
              {/* Bottom Callout Inside Image */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl glass-dark border border-brand/30 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-brand font-bold">
                    Pure Plot Development
                  </span>
                  <p className="text-sm font-bold text-neutral-warm">Own the land where your future home could begin.</p>
                </div>
                <div className="text-right pl-3 flex-shrink-0">
                  <span className="text-xs font-bold text-brand font-mono">0% Down</span>
                  <p className="text-[10px] text-neutral-muted">48 Months</p>
                </div>
              </div>
            </div>

            {/* Corner Card */}
            <div className="hidden sm:block absolute -bottom-5 -right-5 p-4 rounded-2xl bg-dark-card border border-brand/40 shadow-2xl max-w-xs">
              <div className="flex items-center gap-2 text-brand text-xs font-bold mb-1">
                <Check className="w-4 h-4 text-brand" />
                <span>Strategic Neighbors</span>
              </div>
              <p className="text-[11px] text-neutral-muted leading-snug">
                Close to DHA City, Saima Midtown, and the Nooriabad Industrial corridor.
              </p>
            </div>
          </div>

          {/* Right Column: Clear Philosophy & Land Distinction */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <div className="inline-block px-3 py-1 rounded-lg bg-brand/10 border border-brand/30 text-brand text-xs font-bold uppercase tracking-wider font-mono">
                THE CITIZEN HOUSING PRINCIPLE
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-warm tracking-tight">
                Buy The Plot. Own The Land. <br />
                <span className="text-brand">Build Your Own Future.</span>
              </h3>
              <p className="text-sm text-neutral-muted leading-relaxed">
                Citizen Housing offers residential plots where buyers purchase real land within an organized community. We do not sell prefabricated apartments or houses, and we are not a home construction contractor for customers.
              </p>
              <p className="text-sm text-neutral-muted leading-relaxed">
                Instead, you own your plot outright with flexible installments. When you are ready, you can decide how you wish to design and construct your future home on your plot, subject to applicable development rules and official approvals.
              </p>
            </div>

            {/* Benefit Checkpoints */}
            <div className="space-y-2.5 pt-1">
              {[
                "100% focused on residential plots (80 & 120 Sq. Yards)",
                "No forced developer construction packages or prefab compromises",
                "Full autonomy to plan and build on your plot when ready",
                "Direct frontage on the strategic M9 Karachi–Hyderabad Motorway",
                "Underground utility corridors planned for water, HESCO power & SSGC gas"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-soft">
                  <div className="w-4 h-4 rounded-full bg-brand/20 border border-brand text-brand flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-brand stroke-[3]" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button
                onClick={onExplorePlots}
                className="px-6 py-3 rounded-full bg-brand hover:bg-brand-400 text-dark-bg font-bold text-xs uppercase tracking-wider transition-colors shadow-brand-glow"
              >
                Explore Residential Plots
              </button>
              <button
                onClick={onOpenBookingModal}
                className="px-6 py-3 rounded-full glass-dark hover:bg-white/10 text-neutral-warm font-semibold text-xs uppercase tracking-wider transition-colors border border-white/10"
              >
                Inquire About Green Block
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
