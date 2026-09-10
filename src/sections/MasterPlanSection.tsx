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
    <section id="master-plan" className="py-24 sm:py-32 bg-charcoal-900/60 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-950 border border-brand-500/30 text-brand-300 text-xs font-semibold uppercase tracking-widest mb-3">
              <Compass className="w-3.5 h-3.5 text-brand-400" />
              <span>Town Planning Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Master Plan &amp; <br />
              <span className="emerald-gradient-text">Green Block Spatial Layout</span>
            </h2>
            <p className="text-sm sm:text-base text-charcoal-300 mt-4 leading-relaxed font-normal">
              A comprehensive blueprint orchestrated by Shadab Links Engineers &amp; Contractors, featuring balanced road hierarchies, designated central parks, civic avenues, and segregated residential zones.
            </p>
          </div>

          <button
            onClick={onOpenMasterPlanModal}
            className="px-6 py-3.5 rounded-full glass-card hover:bg-brand-900/40 text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-colors border border-white/10 self-start md:self-auto shadow-glow-emerald"
          >
            <Maximize2 className="w-4 h-4 text-brand-400" />
            <span>Interactive Layout Viewer</span>
          </button>
        </div>

        {/* Master Plan Featured Canvas */}
        <div className="relative rounded-3xl overflow-hidden border border-brand-500/30 bg-charcoal-950 shadow-2xl group">
          {/* Blueprint image representation */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-charcoal-950 flex items-center justify-center p-8">
            <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
            
            <img
              src="https://images.unsplash.com/photo-1524813686514-a57563d77d66?auto=format&fit=crop&w=1600&q=80"
              alt="Citizen Housing Society Master Plan Layout Blueprint"
              className="w-full h-full object-cover opacity-35 mix-blend-luminosity group-hover:scale-105 transition-transform duration-700"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/60 to-charcoal-950/40" />

            {/* Central Blueprint Callout */}
            <div className="relative z-10 text-center max-w-lg p-6 rounded-2xl glass-card border border-brand-500/40 shadow-2xl backdrop-blur-md">
              <span className="text-[11px] uppercase font-mono tracking-widest text-brand-300 font-bold block mb-2">
                OFFICIAL TOWN PLANNING BLUEPRINT
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Green Block Master Plan Layout
              </h3>
              <p className="text-xs text-charcoal-300 mb-5 leading-relaxed">
                Click below to launch the interactive viewer with zoom capabilities, sector demarcations, and boulevard dimensions.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={onOpenMasterPlanModal}
                  className="px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-glow-emerald flex items-center gap-2"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Explore Plan Details</span>
                </button>

                <button
                  onClick={onOpenBookingModal}
                  className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  Reserve In Block
                </button>
              </div>
            </div>

            {/* Corner Badge */}
            <div className="absolute bottom-4 left-6 hidden sm:flex items-center gap-2 text-[11px] text-charcoal-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
              <span>Scale Reference &amp; Grid Demarcation System Active</span>
            </div>
          </div>

          {/* Master Plan Key Stats Ribbon */}
          <div className="p-6 sm:p-8 bg-charcoal-900/90 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div>
              <span className="text-xs text-charcoal-400 font-mono uppercase tracking-wider block">
                Zoning
              </span>
              <span className="text-sm sm:text-base font-bold text-white">Residential &amp; Civic</span>
            </div>
            <div>
              <span className="text-xs text-charcoal-400 font-mono uppercase tracking-wider block">
                Plot Types
              </span>
              <span className="text-sm sm:text-base font-bold text-brand-300">80 &amp; 120 Sq. Yards</span>
            </div>
            <div>
              <span className="text-xs text-charcoal-400 font-mono uppercase tracking-wider block">
                Green Belts
              </span>
              <span className="text-sm sm:text-base font-bold text-white">Theme Park &amp; Gardens</span>
            </div>
            <div>
              <span className="text-xs text-charcoal-400 font-mono uppercase tracking-wider block">
                Direct Road Links
              </span>
              <span className="text-sm sm:text-base font-bold text-champagne-300">M9 Motorway Front</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
