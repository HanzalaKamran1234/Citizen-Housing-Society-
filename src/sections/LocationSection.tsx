import React, { useState } from 'react';
import { MapPin, Navigation2, Compass, ExternalLink, ShieldCheck, Milestone } from 'lucide-react';
import { PROJECT_DATA } from '../data/projectData';

export const LocationSection: React.FC = () => {
  const [activeLocationIndex, setActiveLocationIndex] = useState(0);

  const activeLandmark = PROJECT_DATA.nearbyLandmarks[activeLocationIndex];

  return (
    <section id="location" className="py-24 sm:py-32 bg-charcoal-900/60 relative overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-950 border border-brand-500/30 text-brand-300 text-xs font-semibold uppercase tracking-widest mb-3">
              <Compass className="w-3.5 h-3.5 text-brand-400" />
              <span>Location &amp; Connectivity</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Connected to Where <br />
              <span className="emerald-gradient-text">Tomorrow Is Being Built.</span>
            </h2>
            <p className="text-sm sm:text-base text-charcoal-300 mt-4 leading-relaxed">
              Situated on the premier M9 Karachi–Hyderabad Motorway, Citizen Housing Society benefits from direct highway access, positioned close to landmark developments including DHA City, Saima Midtown, and the economic powerhouse of Nooriabad.
            </p>
          </div>

          <a
            href="https://maps.google.com/?q=M9+Karachi+Hyderabad+Motorway"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-full glass-card hover:bg-brand-900/40 text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-colors border border-white/10 self-start md:self-auto"
          >
            <MapPin className="w-4 h-4 text-brand-400" />
            <span>Open in Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5 text-charcoal-400" />
          </a>
        </div>

        {/* Interactive Location Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Stylized M9 Corridor Schematic Map */}
          <div className="lg:col-span-7 bg-charcoal-950 rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-brand-400 font-bold font-mono">
                  M9 MOTORWAY GROWTH CORRIDOR
                </span>
                <p className="text-xs text-charcoal-400 mt-0.5">
                  Strategic Highway Alignment • Karachi &lt;—&gt; Hyderabad
                </p>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-brand-900/60 border border-brand-500/40 text-[10px] text-brand-300 font-mono">
                Highway Node Active
              </span>
            </div>

            {/* Stylized Transit Ribbon */}
            <div className="relative py-6">
              {/* Central Roadway Graphic */}
              <div className="relative h-24 bg-charcoal-900 rounded-2xl border border-white/10 flex items-center justify-between px-6 overflow-hidden">
                <div className="absolute inset-x-0 top-1/2 h-0.5 border-t-2 border-dashed border-champagne-400/40 -translate-y-1/2" />
                
                {/* Node: Karachi */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-charcoal-700 border-2 border-white/60" />
                  <span className="text-[11px] font-bold text-white mt-1.5 uppercase tracking-wider">Karachi</span>
                  <span className="text-[9px] text-charcoal-400">Southbound</span>
                </div>

                {/* Node: DHA City & Saima Midtown */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-champagne-400 border-2 border-charcoal-900 animate-pulse" />
                  <span className="text-[11px] font-bold text-champagne-300 mt-1.5 uppercase tracking-wider text-center">
                    DHA City / Saima
                  </span>
                  <span className="text-[9px] text-charcoal-400">Urban Cluster</span>
                </div>

                {/* Node: Citizen Housing (Green Block) */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-brand-500 border-2 border-white shadow-glow-emerald flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <span className="text-xs font-black text-brand-300 mt-1.5 uppercase tracking-wider bg-brand-950 px-2 py-0.5 rounded border border-brand-500/40">
                    Citizen Housing
                  </span>
                  <span className="text-[9px] text-brand-400 font-mono">Green Block</span>
                </div>

                {/* Node: Nooriabad */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-charcoal-700 border-2 border-white/60" />
                  <span className="text-[11px] font-bold text-white mt-1.5 uppercase tracking-wider">Nooriabad</span>
                  <span className="text-[9px] text-charcoal-400">Industrial Hub</span>
                </div>

                {/* Node: Hyderabad */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-charcoal-700 border-2 border-white/60" />
                  <span className="text-[11px] font-bold text-white mt-1.5 uppercase tracking-wider">Hyderabad</span>
                  <span className="text-[9px] text-charcoal-400">Northbound</span>
                </div>
              </div>
            </div>

            {/* Active Landmark Detail Card */}
            <div className="mt-6 p-5 rounded-2xl bg-charcoal-900 border border-brand-500/30">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Milestone className="w-4 h-4 text-brand-400" />
                  <h4 className="text-base font-bold text-white">{activeLandmark.name}</h4>
                </div>
                <span className="text-[11px] font-mono text-brand-300 bg-brand-950 px-2 py-0.5 rounded border border-brand-500/30">
                  {activeLandmark.relativePosition}
                </span>
              </div>
              <p className="text-xs text-charcoal-300 leading-relaxed">
                {activeLandmark.significance}
              </p>
              <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between text-[11px] text-charcoal-400">
                <span>Access Route: <strong className="text-charcoal-200">{activeLandmark.route}</strong></span>
                <span className="text-brand-400 font-medium">{activeLandmark.role}</span>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 text-[11px] text-charcoal-500">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-500 flex-shrink-0" />
              <span>
                Road infrastructure and physical connectivity verified via national highway M9 alignment.
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Location Cards */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-charcoal-400 mb-2">
              Key Nearby Economic &amp; Urban Hubs
            </h3>

            {PROJECT_DATA.nearbyLandmarks.map((landmark, idx) => {
              const isSelected = activeLocationIndex === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveLocationIndex(idx)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all duration-200 ${
                    isSelected
                      ? 'bg-brand-900/40 border-brand-400 shadow-glow-emerald translate-x-1'
                      : 'bg-charcoal-950/80 border-white/5 hover:border-white/20 hover:bg-charcoal-900/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-2 h-2 rounded-full ${isSelected ? 'bg-brand-400' : 'bg-charcoal-600'}`} />
                      <h4 className={`text-sm font-semibold ${isSelected ? 'text-white' : 'text-charcoal-200'}`}>
                        {landmark.name}
                      </h4>
                    </div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-charcoal-400">
                      {landmark.relativePosition}
                    </span>
                  </div>
                  <p className="text-xs text-charcoal-400 mt-1 pl-4.5 line-clamp-2">
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
