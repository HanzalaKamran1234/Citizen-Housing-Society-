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

  const sectors = [
    { id: 'sec-80', label: '80 Sq. Yds Residential Sector', color: '#1B6452', desc: 'Planned compact residential enclaves with dedicated lane networks' },
    { id: 'sec-120', label: '120 Sq. Yds Residential Sector', color: '#329B81', desc: 'Spacious avenue-fronting residential plots' },
    { id: 'sec-park', label: 'Theme Park & Central Green Oasis', color: '#2E8B57', desc: 'Central recreational park, children play areas, and botanical green belt' },
    { id: 'sec-civic', label: 'Civic & Commercial Enclave', color: '#B89865', desc: 'Convenience markets, retail stores, and service utilities' },
    { id: 'sec-edu', label: 'School, College & Masjid Zone', color: '#525F6B', desc: 'Central grand masjid and integrated campus educational spaces' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-hidden animate-fadeIn">
      <div 
        className="relative w-full max-w-5xl h-[90vh] bg-charcoal-900 border border-brand-500/30 rounded-3xl shadow-2xl flex flex-col overflow-hidden text-charcoal-100"
        role="dialog"
        aria-modal="true"
        aria-labelledby="master-plan-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-charcoal-950/80">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-400">
                Architectural Master Layout
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-charcoal-300">
                Green Block
              </span>
            </div>
            <h3 id="master-plan-title" className="text-lg sm:text-xl font-bold text-white">
              Citizen Housing Society Master Plan
            </h3>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center bg-charcoal-800 border border-white/10 rounded-xl p-1">
              <button
                onClick={handleZoomOut}
                disabled={zoomLevel <= 0.75}
                className="p-1.5 rounded-lg hover:bg-white/10 text-charcoal-300 hover:text-white disabled:opacity-40 transition-colors"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="px-2 text-xs font-mono text-charcoal-300">
                {Math.round(zoomLevel * 100)}%
              </span>
              <button
                onClick={handleZoomIn}
                disabled={zoomLevel >= 2.5}
                className="p-1.5 rounded-lg hover:bg-white/10 text-charcoal-300 hover:text-white disabled:opacity-40 transition-colors"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={handleReset}
                className="p-1.5 rounded-lg hover:bg-white/10 text-charcoal-300 hover:text-white transition-colors ml-1"
                title="Reset Zoom"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-charcoal-300 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Master Plan Canvas Body */}
        <div className="relative flex-1 overflow-auto bg-charcoal-950 p-4 flex items-center justify-center">
          <div
            style={{ transform: `scale(${zoomLevel})`, transition: 'transform 0.2s ease-out' }}
            className="relative w-full max-w-3xl aspect-[16/10] bg-charcoal-900 rounded-2xl border-2 border-dashed border-brand-500/30 p-6 flex flex-col justify-between shadow-2xl select-none"
          >
            {/* Architectural Grid Blueprint */}
            <div className="absolute inset-0 bg-grid-pattern opacity-40 rounded-2xl pointer-events-none" />

            {/* Official Overlay Notice */}
            <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
              <div>
                <span className="text-xs uppercase tracking-widest text-brand-400 font-bold font-mono">
                  GREEN BLOCK MASTER PLAN (ARCHITECTURAL DRAFT)
                </span>
                <p className="text-[11px] text-charcoal-400">
                  Citizen Builders &amp; Developers • Architectural Planning by Shadab Links
                </p>
              </div>
              <span className="text-[10px] px-2.5 py-1 rounded bg-brand-900/60 border border-brand-500/30 text-brand-300 font-mono">
                SCALE 1:1500 (TENTATIVE)
              </span>
            </div>

            {/* Interactive Sector Representation */}
            <div className="relative z-10 grid grid-cols-12 gap-3 my-auto py-4">
              {/* Left Sector: 80 Yards */}
              <div 
                onClick={() => setActiveSector('sec-80')}
                className={`col-span-4 p-4 rounded-xl border cursor-pointer transition-all ${
                  activeSector === 'sec-80' 
                    ? 'bg-brand-800/80 border-brand-300 shadow-glow-emerald scale-[1.02]' 
                    : 'bg-brand-950/60 border-brand-500/30 hover:border-brand-400'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-white uppercase">Sector A &amp; B</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-400" />
                </div>
                <h4 className="text-sm font-semibold text-brand-300">80 Sq. Yds Plots</h4>
                <p className="text-[10px] text-charcoal-400 mt-1">48 Mo. Installments • Rs. 5,000/mo</p>
              </div>

              {/* Center Sector: Theme Park & Community Spine */}
              <div 
                onClick={() => setActiveSector('sec-park')}
                className={`col-span-4 p-4 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
                  activeSector === 'sec-park' 
                    ? 'bg-emerald-900/70 border-emerald-300 shadow-glow-emerald scale-[1.02]' 
                    : 'bg-emerald-950/40 border-emerald-500/30 hover:border-emerald-400'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-white uppercase">Central Spine</span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  <h4 className="text-sm font-semibold text-emerald-300">Theme Park &amp; Masjid</h4>
                  <p className="text-[10px] text-charcoal-400 mt-1">Lush Green Corridors &amp; Open Boulevards</p>
                </div>
                <div className="h-2 w-full bg-emerald-700/50 rounded-full mt-2" />
              </div>

              {/* Right Sector: 120 Yards */}
              <div 
                onClick={() => setActiveSector('sec-120')}
                className={`col-span-4 p-4 rounded-xl border cursor-pointer transition-all ${
                  activeSector === 'sec-120' 
                    ? 'bg-brand-800/80 border-brand-300 shadow-glow-emerald scale-[1.02]' 
                    : 'bg-brand-950/60 border-brand-500/30 hover:border-brand-400'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-white uppercase">Sector C &amp; D</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-300" />
                </div>
                <h4 className="text-sm font-semibold text-brand-300">120 Sq. Yds Plots</h4>
                <p className="text-[10px] text-charcoal-400 mt-1">48 Mo. Installments • Rs. 7,500/mo</p>
              </div>

              {/* Bottom Spine: Boulevard & Civic/Education */}
              <div 
                onClick={() => setActiveSector('sec-civic')}
                className={`col-span-6 p-3.5 rounded-xl border cursor-pointer transition-all ${
                  activeSector === 'sec-civic' 
                    ? 'bg-champagne-500/20 border-champagne-300 scale-[1.01]' 
                    : 'bg-charcoal-850 border-white/10 hover:border-champagne-400/40'
                }`}
              >
                <span className="text-xs font-bold text-champagne-300 uppercase">Commercial &amp; Hospital Zone</span>
                <p className="text-[10px] text-charcoal-400 mt-0.5">Healthcare, Retail, &amp; Administrative Facilities</p>
              </div>

              <div 
                onClick={() => setActiveSector('sec-edu')}
                className={`col-span-6 p-3.5 rounded-xl border cursor-pointer transition-all ${
                  activeSector === 'sec-edu' 
                    ? 'bg-blue-900/40 border-blue-400 scale-[1.01]' 
                    : 'bg-charcoal-850 border-white/10 hover:border-blue-400/30'
                }`}
              >
                <span className="text-xs font-bold text-blue-300 uppercase">School, College &amp; University Zone</span>
                <p className="text-[10px] text-charcoal-400 mt-0.5">Earmarked Educational Reservation Corridor</p>
              </div>
            </div>

            {/* M9 Frontage Arterial Line */}
            <div className="relative z-10 border-t border-dashed border-champagne-400/40 pt-3 flex items-center justify-between text-xs">
              <span className="text-champagne-300 font-mono font-medium flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-champagne-400" />
                M9 KARACHI–HYDERABAD MOTORWAY CORRIDOR (DIRECT ACCESS BOULEVARD)
              </span>
              <span className="text-charcoal-400 text-[11px]">
                Controlled Gated Entry / Main Gate
              </span>
            </div>
          </div>
        </div>

        {/* Footer info & CTA */}
        <div className="px-6 py-4 border-t border-white/10 bg-charcoal-950 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-charcoal-400">
            <ShieldAlert className="w-4 h-4 text-brand-400 flex-shrink-0" />
            <span>
              Official site demarcations are subject to on-ground engineering by Shadab Links. Verified layout blueprints can be inspected at the sales office.
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onOpenBookingModal();
              }}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-glow-emerald"
            >
              Reserve Plot in Layout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
