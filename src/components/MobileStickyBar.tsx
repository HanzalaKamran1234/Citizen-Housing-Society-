import React from 'react';
import { MessageSquare, Calendar } from 'lucide-react';
import { PROJECT_DATA } from '../data/projectData';

interface MobileStickyBarProps {
  onOpenBookingModal: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenBookingModal }) => {
  const handleWhatsApp = () => {
    const rawNumber = PROJECT_DATA.brand.officialWhatsApp.replace(/[^0-9]/g, '');
    const message = encodeURIComponent(
      "Hello! I am viewing Citizen Housing Society (Green Block) and would like quick sales assistance regarding plot availability."
    );
    window.open(`https://wa.me/${rawNumber}?text=${message}`, '_blank');
  };

  return (
    <aside aria-label="Mobile Quick Actions" className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-dark-bg/95 border-t border-brand/20 px-4 py-2.5 backdrop-blur-xl pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-2xl">
      <div className="grid grid-cols-2 gap-2.5 max-w-sm mx-auto">
        <button
          onClick={handleWhatsApp}
          className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-dark-card border border-brand/40 text-brand font-bold text-xs tracking-wider uppercase active:scale-95 transition-transform"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp Sales</span>
        </button>

        <button
          onClick={onOpenBookingModal}
          className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-brand border border-brand/50 text-dark-bg font-extrabold text-xs tracking-wider uppercase shadow-brand-glow active:scale-95 transition-transform"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Your Plot</span>
        </button>
      </div>
    </aside>
  );
};
