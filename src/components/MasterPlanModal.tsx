import React, { useState } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw, Download, Maximize2, ShieldAlert } from 'lucide-react';

interface MasterPlanModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBookingModal: () => void;
}

export const MasterPlanModal: React.FC<MasterPlanModalProps> = ({
  isOpen,
  onClose,
  onOpenBookingModal,
}) => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [activeSector, setActiveSector] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));
  const handleReset = () => {
    setZoomLevel(1);
    setActiveSector(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/90 backdrop-blur-md overflow-hidden animate-fadeIn">
      <div 
        className="relative w-full max-w-5xl h-[90vh] bg-dark-card border-2 border-brand/40 rounded-3xl shadow-dark-luxury flex flex-col overflow-hidden text-neutral-warm"
        role="dialog"
        aria-modal="true"
        aria-labelledby="master-plan-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-white/10 bg-dark-bg">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-brand font-mono">
                ARCHITECTURAL MASTER LAYOUT
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-brand/15 text-brand border border-brand/30">
                Green Block
              </span>
            </div>
            <h3 id="master-plan-title" className="text-base sm:text-xl font-extrabold text-neutral-warm mt-0.5">
              Citizen Housing Society Master Plan
            </h3>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-dark-bg border border-white/10 rounded-xl p-1">
              <button
                onClick={handleZoomOut}
                disabled={zoomLevel <= 0.75}
                className="p-1.5 rounded-lg hover:bg-white/10 text-neutral-muted hover:text-neutral-warm disabled:opacity-30 transition-colors"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="px-2 text-xs font-mono text-neutral-soft">
                {Math.round(zoomLevel * 100)}%
              </span>
              <button
                onClick={handleZoomIn}
                disabled={zoomLevel >= 2.5}
                className="p-1.5 rounded-lg hover:bg-white/10 text-neutral-muted hover:text-neutral-warm disabled:opacity-30 transition-colors"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={handleReset}
                className="p-1.5 rounded-lg hover:bg-white/10 text-neutral-muted hover:text-neutral-warm transition-colors ml-1"
                title="Reset Zoom"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-muted hover:text-neutral-warm transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Master Plan Canvas Body with Zoom & Touch Pan */}
        <div className="relative flex-1 overflow-auto bg-dark-bg p-4 flex items-center justify-center">
          <div
            style={{ transform: `scale(${zoomLevel})`, transition: 'transform 0.2s ease-out' }}
            className="relative w-full max-w-3xl aspect-[16/10] bg-dark-card rounded-2xl border-2 border-dashed border-brand/40 p-5 sm:p-6 flex flex-col justify-between shadow-2xl select-none"
          >
            {/* Architectural Grid Blueprint */}
            <div className="absolute inset-0 bg-grid-pattern opacity-40 rounded-2xl pointer-events-none" />

            {/* Official Overlay Notice */}
            <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
              <div>
                <span className="text-xs uppercase tracking-widest text-brand font-bold font-mono">
                  GREEN BLOCK MASTER PLAN (ARCHITECTURAL DRAFT)
                </span>
                <p className="text-[11px] text-neutral-muted">
                  Citizen Builders &amp; Developers • Architectural Planning by Shadab Links
                </p>
              </div>
              <span className="text-[10px] px-2.5 py-1 rounded bg-dark-bg border border-brand/30 text-brand font-mono">
                SCALE 1:1500 (TENTATIVE)
              </span>
            </div>

            {/* Interactive Sector Representation */}
            <div className="grid grid-cols-12 gap-2.5 my-auto py-4 relative z-10">
              {/* Left Sector: 80 Yards */}
              <div 
                onClick={() => setActiveSector('sec-80')}
                className={`col-span-4 p-3.5 rounded-xl border cursor-pointer transition-all ${
                  activeSector === 'sec-80' 
                    ? 'bg-dark-bg border-brand shadow-brand-subtle scale-[1.02]' 
                    : 'bg-dark-bg/80 border-white/10 hover:border-brand/40'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-neutral-warm uppercase">Sector A &amp; B</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-brand" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-brand">80 Sq. Yds Plots</h4>
                <p className="text-[10px] text-neutral-muted mt-1">48 Mo. Installments • Rs. 5,000/mo</p>
              </div>

              {/* Center Sector: Theme Park & Grand Masjid */}
              <div 
                onClick={() => setActiveSector('sec-park')}
                className={`col-span-4 p-3.5 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
                  activeSector === 'sec-park' 
                    ? 'bg-dark-bg border-brand shadow-brand-subtle scale-[1.02]' 
                    : 'bg-dark-bg/80 border-brand/30 hover:border-brand'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-neutral-warm uppercase">Central Green</span>
                    <span className="w-2.5 h-2.5 rounded-full bg-brand animate-pulse" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-brand">Theme Park &amp; Masjid</h4>
                  <p className="text-[10px] text-neutral-muted mt-1">Green Avenues &amp; Open Space</p>
                </div>
                <div className="h-1.5 w-full bg-brand/40 rounded-full mt-2" />
              </div>

              {/* Right Sector: 120 Yards */}
              <div 
                onClick={() => setActiveSector('sec-120')}
                className={`col-span-4 p-3.5 rounded-xl border cursor-pointer transition-all ${
                  activeSector === 'sec-120' 
                    ? 'bg-dark-bg border-brand shadow-brand-subtle scale-[1.02]' 
                    : 'bg-dark-bg/80 border-white/10 hover:border-brand/40'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-neutral-warm uppercase">Sector C &amp; D</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-brand" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-brand">120 Sq. Yds Plots</h4>
                <p className="text-[10px] text-neutral-muted mt-1">48 Mo. Installments • Rs. 7,500/mo</p>
              </div>

              {/* Bottom Civic & Education */}
              <div 
                onClick={() => setActiveSector('sec-civic')}
                className="col-span-6 p-3 rounded-xl bg-dark-bg border border-white/10 cursor-pointer hover:border-brand/40 transition-all"
              >
                <span className="text-xs font-bold text-neutral-soft uppercase">Commercial &amp; Hospital Parcel</span>
                <p className="text-[10px] text-neutral-muted mt-0.5">Healthcare, Markets &amp; Administration</p>
              </div>

              <div 
                onClick={() => setActiveSector('sec-edu')}
                className="col-span-6 p-3 rounded-xl bg-dark-bg border border-white/10 cursor-pointer hover:border-brand/40 transition-all"
              >
                <span className="text-xs font-bold text-neutral-soft uppercase">School, College &amp; University Area</span>
                <p className="text-[10px] text-neutral-muted mt-0.5">Institutional Reservations</p>
              </div>
            </div>

            {/* M9 Frontage Arterial Line */}
            <div className="relative z-10 border-t border-dashed border-brand/50 pt-2.5 flex items-center justify-between text-xs">
              <span className="text-brand font-mono font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand" />
                M9 KARACHI–HYDERABAD MOTORWAY CORRIDOR (DIRECT ACCESS BOULEVARD)
              </span>
              <span className="text-neutral-muted text-[11px]">
                Controlled Gated Entry
              </span>
            </div>
          </div>
        </div>

        {/* Footer info & CTA */}
        <div className="px-6 py-4 border-t border-white/10 bg-dark-bg flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-neutral-muted">
            <ShieldAlert className="w-4 h-4 text-brand flex-shrink-0" />
            <span>
              On-ground demarcations subject to civil execution by Shadab Links. Certified layout blueprints can be inspected at the developer sales desk.
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onOpenBookingModal();
              }}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-brand hover:bg-brand-400 text-dark-bg text-xs font-bold uppercase tracking-wider transition-colors shadow-brand-glow"
            >
              Reserve Plot in Layout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
