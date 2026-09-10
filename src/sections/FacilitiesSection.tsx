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
  Layers
} from 'lucide-react';
import { PROJECT_DATA } from '../data/projectData';

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
    <section id="facilities" className="py-20 sm:py-28 bg-dark-card/40 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-bg border border-brand/40 text-brand text-xs font-semibold uppercase tracking-widest mb-3">
              <Trees className="w-3.5 h-3.5 text-brand" />
              <span>Community Planning</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tightest text-neutral-warm leading-tight">
              MASTER-PLANNED <br />
              <span className="brand-gradient-text">INFRASTRUCTURE</span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-muted mt-3 leading-relaxed">
              Citizen Housing Society (Green Block) is planned as an integrated enclave, blending modern road networks, utility corridors, academic institutions, and central green spaces.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeCategory === cat
                    ? 'bg-brand text-dark-bg shadow-brand-subtle font-bold'
                    : 'bg-dark-bg border border-white/10 text-neutral-muted hover:text-neutral-warm'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 13 Facilities Grid (2-column on mobile, up to 4 on desktop) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredFacilities.map((facility) => {
            const IconComponent = iconMap[facility.iconName] || Layers;
            return (
              <div
                key={facility.id}
                className="group relative p-5 sm:p-6 rounded-3xl bg-dark-card border border-white/5 hover:border-brand/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-brand-subtle flex flex-col justify-between"
              >
                {facility.highlight && (
                  <span className="absolute top-3 right-3 text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full bg-brand/10 border border-brand/30 text-brand">
                    Priority
                  </span>
                )}

                <div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-dark-bg border border-brand/30 text-brand flex items-center justify-center mb-4 group-hover:scale-105 group-hover:bg-brand/10 transition-all">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-faint block mb-1">
                    {facility.category}
                  </span>

                  <h3 className="text-sm sm:text-base font-bold text-neutral-warm group-hover:text-brand transition-colors">
                    {facility.title}
                  </h3>

                  <p className="text-xs text-neutral-muted mt-2 line-clamp-3 leading-relaxed hidden sm:block">
                    {facility.description}
                  </p>
                </div>

                <div className="mt-4 pt-2.5 border-t border-white/5 flex items-center justify-between text-[10px] text-neutral-faint">
                  <span>Planned Amenity</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
