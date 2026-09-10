import React from 'react';
import { ArrowRight, MessageSquare, Phone, ShieldCheck } from 'lucide-react';
import { PROJECT_DATA } from '../data/projectData';

interface FinalCTASectionProps {
  onOpenBookingModal: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onOpenBookingModal }) => {
  const handleWhatsApp = () => {
    const raw = PROJECT_DATA.brand.officialWhatsApp.replace(/[^0-9]/g, '');
    const msg = encodeURIComponent("Hello Citizen Housing! I would like to talk to sales regarding Green Block residential plots.");
    window.open(`https://wa.me/${raw}?text=${msg}`, '_blank');
  };

  return (
    <section className="py-20 sm:py-28 bg-dark-bg relative overflow-hidden border-t border-white/5">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-brand/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="p-8 sm:p-14 rounded-3xl bg-dark-card border-2 border-brand/40 shadow-dark-luxury">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-bg border border-brand/40 text-brand text-xs font-semibold uppercase tracking-widest mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Own Your Land Today</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tightest text-neutral-warm leading-[1.08]">
            YOUR FUTURE CAN START <br />
            <span className="brand-gradient-text">WITH A PLOT.</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-neutral-muted max-w-xl mx-auto mt-4 leading-relaxed">
            Explore available residential plot options and find a payment plan that works for you. 0% Down Payment at booking.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-8">
            <button
              onClick={onOpenBookingModal}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand hover:bg-brand-400 text-dark-bg font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-brand-glow flex items-center justify-center gap-2.5 active:scale-95"
            >
              <span>Book Your Plot</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={handleWhatsApp}
              className="w-full sm:w-auto px-8 py-4 rounded-full glass-dark hover:bg-white/10 text-neutral-warm font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 border border-white/15 flex items-center justify-center gap-2 active:scale-95"
            >
              <MessageSquare className="w-4 h-4 text-brand" />
              <span>Talk to Sales</span>
            </button>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-faint font-mono">
            <span>80 &amp; 120 Sq. Yards</span>
            <span>•</span>
            <span>0% Down Payment</span>
            <span>•</span>
            <span>M9 Karachi–Hyderabad Motorway</span>
          </div>

        </div>

      </div>
    </section>
  );
};
