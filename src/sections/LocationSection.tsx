import React, { useState } from 'react';
import { MapPin, Compass, ExternalLink, Milestone, ShieldCheck, Navigation } from 'lucide-react';
import { PROJECT_DATA } from '../data/projectData';

export const LocationSection: React.FC = () => {
  const [activeLocationIndex, setActiveLocationIndex] = useState(0);
  const activeLandmark = PROJECT_DATA.nearbyLandmarks[activeLocationIndex];

  return (
    <section id="location" className="py-20 sm:py-28 bg-dark-card/60 relative overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-bg border border-brand/40 text-brand text-xs font-semibold uppercase tracking-widest mb-3">
              <Compass className="w-3.5 h-3.5 text-brand" />
              <span>Location &amp; Accessibility</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tightest text-neutral-warm leading-tight">
              POSITIONED FOR <br />
              <span className="brand-gradient-text">WHAT'S NEXT.</span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-muted mt-4 leading-relaxed">
              Situated on the M9 Karachi–Hyderabad Motorway, Citizen Housing Society benefits from direct highway connectivity between two major metropolitan and regional centers, close to DHA City, Saima Midtown, and the Nooriabad Industrial corridor.
            </p>
          </div>

          <a
            href="https://maps.google.com/?q=M9+Karachi+Hyderabad+Motorway"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-full bg-brand/15 hover:bg-brand/25 text-brand border border-brand/40 text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all self-start md:self-auto shadow-brand-subtle"
          >
            <MapPin className="w-4 h-4 text-brand" />
            <span>Explore Location</span>
            <ExternalLink className="w-3.5 h-3.5 text-brand/80" />
          </a>
        </div>

        {/* Corridor Schematic & Landmark Nodes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive M9 Corridor Ribbon */}
          <div className="lg:col-span-7 bg-dark-bg rounded-3xl p-5 sm:p-8 border border-brand/20 shadow-dark-luxury relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-brand font-bold font-mono">
                  M9 MOTORWAY HIGHWAY ALIGNMENT
                </span>
                <p className="text-xs text-neutral-muted mt-0.5">
                  Direct Frontage • Strategic Node Between Karachi &amp; Hyderabad
                </p>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-brand/10 border border-brand/40 text-[10px] text-brand font-mono font-semibold">
                Direct Highway Link
              </span>
            </div>

            {/* Stylized Highway Node Diagram */}
            <div className="py-4">
              <div className="relative h-28 bg-dark-card rounded-2xl border border-brand/20 flex items-center justify-between px-4 sm:px-6 overflow-hidden">
                {/* Green Highlighted Route Line */}
                <div className="absolute inset-x-0 top-1/2 h-1 bg-gradient-to-r from-neutral-faint via-brand to-neutral-faint -translate-y-1/2 opacity-70" />
                <div className="absolute inset-x-0 top-1/2 h-0.5 border-t border-dashed border-dark-bg -translate-y-1/2" />
                
                {/* Node: Karachi */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-3.5 h-3.5 rounded-full bg-dark-bg border-2 border-white/60" />
                  <span className="text-[11px] font-bold text-neutral-soft mt-1.5 uppercase">Karachi</span>
                  <span className="text-[9px] text-neutral-faint">Southbound</span>
                </div>

                {/* Node: DHA City & Saima Midtown */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-brand border-2 border-dark-bg animate-pulse" />
                  <span className="text-[11px] font-bold text-brand mt-1.5 uppercase text-center">
                    DHA / Saima
                  </span>
                  <span className="text-[9px] text-neutral-muted">Urban Cluster</span>
                </div>

                {/* Node: Citizen Housing (Green Block) */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-brand border-2 border-white shadow-brand-glow flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-dark-bg" />
                  </div>
                  <span className="text-xs font-black text-brand mt-1.5 uppercase bg-dark-bg px-2 py-0.5 rounded border border-brand/50 shadow-sm">
                    Citizen Housing
                  </span>
                  <span className="text-[9px] text-brand font-mono">Green Block</span>
                </div>

                {/* Node: Nooriabad */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-3.5 h-3.5 rounded-full bg-dark-bg border-2 border-white/60" />
                  <span className="text-[11px] font-bold text-neutral-soft mt-1.5 uppercase">Nooriabad</span>
                  <span className="text-[9px] text-neutral-faint">Industrial Hub</span>
                </div>

                {/* Node: Hyderabad */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-3.5 h-3.5 rounded-full bg-dark-bg border-2 border-white/60" />
                  <span className="text-[11px] font-bold text-neutral-soft mt-1.5 uppercase">Hyderabad</span>
                  <span className="text-[9px] text-neutral-faint">Northbound</span>
                </div>
              </div>
            </div>

            {/* Active Landmark Information Card */}
            <div className="mt-5 p-4 sm:p-5 rounded-2xl bg-dark-card border border-brand/30">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Milestone className="w-4 h-4 text-brand" />
                  <h4 className="text-base font-bold text-neutral-warm">{activeLandmark.name}</h4>
                </div>
                <span className="text-[11px] font-mono text-brand bg-dark-bg px-2.5 py-0.5 rounded border border-brand/30">
                  {activeLandmark.relativePosition}
                </span>
              </div>
              <p className="text-xs text-neutral-muted leading-relaxed">
                {activeLandmark.significance}
              </p>
              <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-neutral-faint">
                <span>Access: <strong className="text-neutral-soft">{activeLandmark.route}</strong></span>
                <span className="text-brand font-semibold">{activeLandmark.role}</span>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 text-[11px] text-neutral-faint">
              <ShieldCheck className="w-3.5 h-3.5 text-brand flex-shrink-0" />
              <span>
                Highway connectivity mapped directly along national M9 motorway alignment.
              </span>
            </div>
          </div>

          {/* Right: Selectable Landmark Cards */}
          <div className="lg:col-span-5 space-y-2.5">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-faint mb-2">
              Key Nearby Urban &amp; Economic Anchors
            </h3>

            {PROJECT_DATA.nearbyLandmarks.map((landmark, idx) => {
              const isSelected = activeLocationIndex === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveLocationIndex(idx)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all duration-200 ${
                    isSelected
                      ? 'bg-dark-card border-brand shadow-brand-subtle translate-x-1'
                      : 'bg-dark-bg/80 border-white/5 hover:border-white/20 hover:bg-dark-card/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-2 h-2 rounded-full ${isSelected ? 'bg-brand' : 'bg-neutral-faint'}`} />
                      <h4 className={`text-sm font-semibold ${isSelected ? 'text-neutral-warm font-bold' : 'text-neutral-soft'}`}>
                        {landmark.name}
                      </h4>
                    </div>
                    <span className="text-[10px] uppercase font-mono text-neutral-faint">
                      {landmark.relativePosition}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-muted mt-1 pl-4.5 line-clamp-2">
                    {landmark.role}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
