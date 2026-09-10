import React, { useState } from 'react';
import { Camera, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { PROJECT_DATA, GalleryItem } from '../data/projectData';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Master Plan', 'Location & Highway', 'Land & Community', 'Infrastructure Planning'];

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
    <section id="gallery" className="py-20 sm:py-28 bg-dark-card/40 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-bg border border-brand/40 text-brand text-xs font-semibold uppercase tracking-widest mb-3">
              <Camera className="w-3.5 h-3.5" />
              <span>Project Visuals</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tightest text-neutral-warm leading-tight">
              PROJECT <span className="brand-gradient-text">GALLERY</span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-muted mt-3 leading-relaxed">
              Curated master planning diagrams, highway corridor views, and community landscape settings representing the environment of Citizen Housing Society (Green Block).
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
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

        {/* Gallery Grid (Mobile-First responsive) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-3xl overflow-hidden bg-dark-card border border-white/10 cursor-pointer shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-brand/40"
            >
              <div className="aspect-[4/3] w-full overflow-hidden relative">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/25 to-transparent opacity-85 group-hover:opacity-90 transition-opacity" />

                {/* Expand Overlay */}
                <div className="absolute top-4 right-4 p-2.5 rounded-full bg-dark-bg/80 border border-brand/40 text-brand opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-100 scale-75">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Category Pill */}
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] uppercase font-mono tracking-widest px-2.5 py-1 rounded-full bg-dark-bg/90 border border-brand/30 text-brand backdrop-blur-md">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Title & Caption */}
              <div className="p-5 bg-dark-card border-t border-white/5">
                <h3 className="text-base font-bold text-neutral-warm group-hover:text-brand transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-muted mt-1 line-clamp-2 leading-relaxed">
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-dark-card border-2 border-brand/40 rounded-3xl overflow-hidden shadow-dark-luxury flex flex-col"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-dark-bg">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-widest text-brand font-bold">
                  {selectedImage.category}
                </span>
                <span className="text-white/40">•</span>
                <span className="text-xs text-neutral-warm font-medium">{selectedImage.title}</span>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-muted hover:text-neutral-warm transition-colors"
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

              <button
                onClick={handlePrev}
                className="absolute left-4 p-3 rounded-full bg-black/60 border border-brand/40 text-brand hover:bg-black/90 transition-all"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 p-3 rounded-full bg-black/60 border border-brand/40 text-brand hover:bg-black/90 transition-all"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Caption */}
            <div className="p-4 sm:p-5 bg-dark-bg border-t border-white/10 flex items-center justify-between">
              <p className="text-xs sm:text-sm text-neutral-muted max-w-2xl leading-relaxed">
                {selectedImage.caption}
              </p>
              <span className="text-[11px] font-mono text-neutral-faint hidden sm:inline">
                Citizen Housing Visuals
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
