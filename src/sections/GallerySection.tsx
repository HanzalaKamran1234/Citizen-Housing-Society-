import React, { useState } from 'react';
import { Camera, Maximize2, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { PROJECT_DATA, GalleryItem } from '../data/projectData';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Master Plan', 'Location & Surroundings', 'Concept Architecture', 'Community & Nature', 'Development Vision'];

  const filteredItems = activeCategory === 'All'
    ? PROJECT_DATA.galleryImages
    : PROJECT_DATA.galleryImages.filter((img) => img.category === activeCategory);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedImage) return;
    const currentIndex = filteredItems.findIndex((img) => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedImage(filteredItems[prevIndex]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedImage) return;
    const currentIndex = filteredItems.findIndex((img) => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedImage(filteredItems[nextIndex]);
  };

  return (
    <section id="gallery" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-950 border border-brand-500/30 text-brand-300 text-xs font-semibold uppercase tracking-widest mb-3">
              <Camera className="w-3.5 h-3.5 text-brand-400" />
              <span>Visual Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Project Imagery &amp; <br />
              <span className="emerald-gradient-text">Architectural Concepts</span>
            </h2>
            <p className="text-sm sm:text-base text-charcoal-300 mt-4 leading-relaxed">
              Curated conceptual architectural renderings and regional site photographs depicting the vision and setting of Citizen Housing Society (Green Block).
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-3xl overflow-hidden bg-charcoal-900 border border-white/10 cursor-pointer shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-400/50"
            >
              <div className="aspect-[4/3] w-full overflow-hidden relative">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Expand Overlay Icon */}
                <div className="absolute top-4 right-4 p-2.5 rounded-full bg-charcoal-950/70 border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-100 scale-75">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Category Pill */}
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] uppercase font-mono tracking-widest px-2.5 py-1 rounded-full bg-charcoal-950/80 border border-white/10 text-brand-300 backdrop-blur-md">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Title & Caption */}
              <div className="p-5 bg-charcoal-950/90 border-t border-white/5">
                <h3 className="text-base font-bold text-white group-hover:text-brand-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-charcoal-400 mt-1 line-clamp-2 leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-lg animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-charcoal-950 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-widest text-brand-400">
                  {selectedImage.category}
                </span>
                <span className="text-white/40">•</span>
                <span className="text-xs text-white font-medium">{selectedImage.title}</span>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-charcoal-300 hover:text-white transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Image */}
            <div className="relative aspect-[16/10] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={selectedImage.imageUrl}
                alt={selectedImage.title}
                className="w-full h-full object-contain"
              />

              {/* Nav Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-4 p-3 rounded-full bg-black/60 border border-white/20 text-white hover:bg-black/90 transition-all"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 p-3 rounded-full bg-black/60 border border-white/20 text-white hover:bg-black/90 transition-all"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Caption */}
            <div className="p-4 sm:p-6 bg-charcoal-900 border-t border-white/10 flex items-center justify-between">
              <p className="text-xs sm:text-sm text-charcoal-300 max-w-2xl leading-relaxed">
                {selectedImage.caption}
              </p>
              <span className="text-[11px] font-mono text-charcoal-500 hidden sm:inline">
                Citizen Housing Visual Library
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
