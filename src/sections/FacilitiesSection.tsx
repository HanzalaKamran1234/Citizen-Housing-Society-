import React, { useState } from 'react';
import {
  ShieldCheck,
  Compass,
  Trees,
  Landmark,
  Stethoscope,
  Lock,
  Droplets,
  Flame,
  Zap,
  GraduationCap,
  BookOpen,
  Award,
  Camera,
  Layers,
  Sparkles
} from 'lucide-react';
import { PROJECT_DATA, Facility } from '../data/projectData';

const iconMap: Record<string, React.ElementType> = {
  ShieldCheck,
  Compass,
  Trees,
  Landmark,
  Stethoscope,
  Lock,
  Droplets,
  Flame,
  Zap,
  GraduationCap,
  BookOpen,
  Award,
  Camera,
};

export const FacilitiesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Infrastructure', 'Security', 'Lifestyle', 'Education', 'Healthcare'];

  const filteredFacilities = activeCategory === 'All'
    ? PROJECT_DATA.facilities
    : PROJECT_DATA.facilities.filter((f) => f.category === activeCategory);

  return (
    <section id="facilities" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-950 border border-brand-500/30 text-brand-300 text-xs font-semibold uppercase tracking-widest mb-3">
              <Trees className="w-3.5 h-3.5 text-brand-400" />
              <span>Community Amenities</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              A Complete Ecosystem for <br />
              <span className="emerald-gradient-text">Wholesome Family Living</span>
            </h2>
            <p className="text-sm sm:text-base text-charcoal-300 mt-4 leading-relaxed">
              Citizen Housing Society (Green Block) is planned as an integrated enclave, blending modern infrastructure, uninterrupted utility corridors, academic institutions, and lush green leisure avenues.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeCategory === cat
                    ? 'bg-brand-600 text-white shadow-glow-emerald border border-brand-400/40'
                    : 'bg-charcoal-900 border border-white/10 text-charcoal-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredFacilities.map((facility) => {
            const IconComponent = iconMap[facility.iconName] || Layers;
            return (
              <div
                key={facility.id}
                className="group relative p-6 rounded-3xl bg-charcoal-900/80 border border-white/5 hover:border-brand-400/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-luxury flex flex-col justify-between"
              >
                {/* Highlight Badge */}
                {facility.highlight && (
                  <span className="absolute top-4 right-4 text-[9px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-brand-900/80 border border-brand-400/30 text-brand-300">
                    Key Pillar
                  </span>
                )}

                <div>
                  <div className="w-12 h-12 rounded-2xl bg-brand-950 border border-brand-500/20 text-brand-400 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-brand-900/80 group-hover:border-brand-400/50 transition-all">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <span className="text-[10px] uppercase font-mono tracking-widest text-charcoal-400 block mb-1">
                    {facility.category}
                  </span>

                  <h3 className="text-lg font-bold text-white group-hover:text-brand-300 transition-colors">
                    {facility.title}
                  </h3>

                  <p className="text-xs text-charcoal-400 mt-2 leading-relaxed">
                    {facility.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] text-charcoal-500">
                  <span>Planned Society Amenity</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
