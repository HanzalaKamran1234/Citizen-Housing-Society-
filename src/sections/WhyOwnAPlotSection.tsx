import React from 'react';
import { Layers, DraftingCompass, Hammer, ArrowRight, Check } from 'lucide-react';
import { PROJECT_DATA } from '../data/projectData';

interface WhyOwnAPlotSectionProps {
  onExplorePlots: () => void;
}

export const WhyOwnAPlotSection: React.FC<WhyOwnAPlotSectionProps> = ({ onExplorePlots }) => {
  const stepIcons = [Layers, DraftingCompass, Hammer];

  return (
    <section className="py-20 sm:py-28 bg-dark-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Narrative Flow Banner */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-dark-card border border-brand/20 shadow-dark-luxury">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand block mb-2">
              THE LAND OWNERSHIP REVOLUTION
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-neutral-warm tracking-tight">
              You Don't Have To Buy A Finished Home. <br />
              <span className="text-brand">You Can Start With Land.</span>
            </h3>
            <p className="text-xs sm:text-sm text-neutral-muted mt-2 leading-relaxed">
              Buying a finished property locks you into someone else's floorplan, dated finishes, and inflated builder margins. When you start with a residential plot at Citizen Housing, you own the ground beneath your feet and keep complete control over your family's future.
            </p>
          </div>

          {/* Visual Step Sequence Indicator */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-white/10">
            {[
              { num: "STEP 1", label: "CHOOSE YOUR PLOT" },
              { num: "STEP 2", label: "OWN YOUR SPACE" },
              { num: "STEP 3", label: "PLAN YOUR FUTURE" },
              { num: "STEP 4", label: "BUILD WHAT YOU WANT" },
            ].map((s, i) => (
              <div key={i} className="p-3 rounded-xl bg-dark-bg border border-white/5">
                <span className="text-[10px] font-mono text-brand font-bold block">{s.num}</span>
                <span className="text-xs font-bold text-neutral-soft">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-card border border-brand/40 text-brand text-xs font-semibold uppercase tracking-widest mb-3">
            <span>The Power of Land</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tightest text-neutral-warm leading-tight">
            YOU BUY THE LAND. <br />
            <span className="brand-gradient-text">YOU DECIDE THE FUTURE.</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-muted mt-3 leading-relaxed">
            A residential plot gives the owner complete personal freedom to plan what they want to build on their land, subject to applicable development rules, approvals, and statutory regulations.
          </p>
        </div>

        {/* 3 Visual Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {PROJECT_DATA.whyOwnAPlot.map((item, idx) => {
            const Icon = stepIcons[idx] || Layers;
            return (
              <div
                key={item.step}
                className="group relative p-7 sm:p-9 rounded-3xl bg-dark-card border border-white/5 hover:border-brand/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-brand-subtle flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-3xl font-black text-brand">
                      {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-dark-bg border border-brand/30 text-brand flex items-center justify-center group-hover:bg-brand/10 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-neutral-warm mb-3 group-hover:text-brand transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-neutral-faint">
                  <span>Customer Autonomy</span>
                  <div className="w-2 h-2 rounded-full bg-brand" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 text-center">
          <button
            onClick={onExplorePlots}
            className="px-8 py-4 rounded-full bg-brand hover:bg-brand-400 text-dark-bg font-bold text-xs uppercase tracking-wider transition-colors shadow-brand-glow inline-flex items-center gap-2"
          >
            <span>Choose Your Residential Plot</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
