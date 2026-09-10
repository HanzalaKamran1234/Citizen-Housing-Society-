import React from 'react';
import { Maximize2, Compass, Layers } from 'lucide-react';

interface MasterPlanSectionProps {
  onOpenMasterPlanModal: () => void;
  onOpenBookingModal: () => void;
}

export const MasterPlanSection: React.FC<MasterPlanSectionProps> = ({
  onOpenMasterPlanModal,
  onOpenBookingModal,
}) => {
  return (
    <section id="master-plan" className="py-20 sm:py-28 bg-dark-bg relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-card border border-brand/40 text-brand text-xs font-semibold uppercase tracking-widest mb-3">
              <Compass className="w-3.5 h-3.5 text-brand" />
              <span>Town Planning Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tightest text-neutral-warm leading-tight">
              MASTER PLAN &amp; <br />
              <span className="brand-gradient-text">SPATIAL SECTORS</span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-muted mt-3 leading-relaxed">
              Engineered by Shadab Links Engineers &amp; Contractors, featuring balanced road grids, dedicated central parks, civic allocations, and demarcated residential plot zones.
            </p>
          </div>

          <button
            onClick={onOpenMasterPlanModal}
            className="px-6 py-3.5 rounded-full bg-brand/15 hover:bg-brand/25 text-brand border border-brand/40 text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors self-start md:self-auto shadow-brand-subtle"
          >
            <Maximize2 className="w-4 h-4 text-brand" />
            <span>Interactive Layout Viewer</span>
          </button>
        </div>

        {/* Master Plan Featured Canvas */}
        <div className="relative rounded-3xl overflow-hidden border-2 border-brand/30 bg-dark-card shadow-dark-luxury group">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-dark-card flex items-center justify-center p-6 sm:p-8">
            <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
            
            <img
              src="https://images.unsplash.com/photo-1524813686514-a57563d77d66?auto=format&fit=crop&w=1600&q=80"
              alt="Citizen Housing Society Master Plan Blueprint"
              className="w-full h-full object-cover opacity-30 mix-blend-luminosity group-hover:scale-105 transition-transform duration-700"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/60 to-dark-bg/30" />

            {/* Central Callout */}
            <div className="relative z-10 text-center max-w-lg p-6 rounded-2xl glass-dark border border-brand/40 shadow-2xl backdrop-blur-md">
              <span className="text-[11px] uppercase font-mono tracking-widest text-brand font-bold block mb-1.5">
                OFFICIAL TOWN PLANNING BLUEPRINT
              </span>
              <h3 className="text-lg sm:text-2xl font-bold text-neutral-warm mb-2">
                Green Block Master Plan Layout
              </h3>
              <p className="text-xs text-neutral-muted mb-5 leading-relaxed">
                Click below to launch the interactive viewer with zoom capabilities, sector demarcations, and boulevard dimensions.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={onOpenMasterPlanModal}
                  className="px-6 py-2.5 rounded-xl bg-brand hover:bg-brand-400 text-dark-bg text-xs font-bold uppercase tracking-wider transition-colors shadow-brand-glow flex items-center gap-2"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Explore Plan Details</span>
                </button>

                <button
                  onClick={onOpenBookingModal}
                  className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-neutral-warm text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  Reserve In Block
                </button>
              </div>
            </div>

            {/* Corner Status Badge */}
            <div className="absolute bottom-4 left-6 hidden sm:flex items-center gap-2 text-[11px] text-neutral-muted font-mono">
              <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
              <span>Scale Reference &amp; Grid Demarcation System Active</span>
            </div>
          </div>

          {/* Key Metrics Ribbon */}
          <div className="p-5 sm:p-7 bg-dark-card border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            <div>
              <span className="text-xs text-neutral-muted font-mono uppercase tracking-wider block">
                Zoning
              </span>
              <span className="text-sm sm:text-base font-bold text-neutral-warm">Residential &amp; Civic</span>
            </div>
            <div>
              <span className="text-xs text-neutral-muted font-mono uppercase tracking-wider block">
                Plot Types
              </span>
              <span className="text-sm sm:text-base font-bold text-brand">80 &amp; 120 Sq. Yards</span>
            </div>
            <div>
              <span className="text-xs text-neutral-muted font-mono uppercase tracking-wider block">
                Green Belts
              </span>
              <span className="text-sm sm:text-base font-bold text-neutral-warm">Theme Park &amp; Gardens</span>
            </div>
            <div>
              <span className="text-xs text-neutral-muted font-mono uppercase tracking-wider block">
                Direct Road Links
              </span>
              <span className="text-sm sm:text-base font-bold text-brand">M9 Motorway Front</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
