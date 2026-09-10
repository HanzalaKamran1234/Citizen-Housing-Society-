import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { PROJECT_DATA } from '../data/projectData';

export const WhatsAppFloatingButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleWhatsAppClick = () => {
    const rawNumber = PROJECT_DATA.brand.officialWhatsApp.replace(/[^0-9]/g, '');
    const message = encodeURIComponent(
      "Hello Citizen Housing Sales Team! I am interested in Green Block residential plots on the M9 Motorway. Please share payment schedule and availability."
    );
    window.open(`https://wa.me/${rawNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-20 sm:bottom-8 right-4 sm:right-6 z-40 flex items-end gap-3 pointer-events-none">
      {/* Tooltip prompt (dismissable) */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 p-3 rounded-2xl bg-dark-card border border-brand/40 text-xs text-neutral-warm shadow-2xl backdrop-blur-md pointer-events-auto animate-fadeIn">
          <span className="w-2 h-2 rounded-full bg-brand animate-ping" />
          <div className="flex flex-col">
            <span className="font-bold text-brand">Have questions?</span>
            <span className="text-neutral-muted text-[11px]">Chat with our project sales advisor</span>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="p-1 rounded-md text-neutral-muted hover:text-neutral-warm transition-colors ml-1"
            aria-label="Dismiss prompt"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={handleWhatsAppClick}
        aria-label="Chat With Sales on WhatsApp"
        className="pointer-events-auto group relative flex items-center justify-center p-3.5 sm:p-4 rounded-full bg-brand hover:bg-brand-400 text-dark-bg shadow-brand-glow transition-all duration-300 hover:scale-105 active:scale-95 border border-brand-300/40"
      >
        <span className="absolute inset-0 rounded-full bg-brand opacity-25 group-hover:opacity-45 animate-ping pointer-events-none" />
        <MessageSquare className="w-6 h-6 fill-current" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-black uppercase tracking-wider pl-0 group-hover:pl-2">
          CHAT WITH SALES
        </span>
      </button>
    </div>
  );
};
