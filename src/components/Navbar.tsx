import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { PROJECT_DATA } from '../data/projectData';

interface NavbarProps {
  onOpenBookingModal: (plotSize?: string) => void;
  onNavigateSection: (sectionId: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBookingModal,
  onNavigateSection,
  activeSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 35);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Location', id: 'location' },
    { label: 'Plots', id: 'plots' },
    { label: 'Payment Plans', id: 'payment-plans' },
    { label: 'Facilities', id: 'facilities' },
    { label: 'Master Plan', id: 'master-plan' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigateSection(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-navbar py-3 shadow-dark-luxury'
          : 'bg-gradient-to-b from-dark-bg/95 via-dark-bg/50 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <button
            onClick={() => handleNavClick('hero')}
            className="flex flex-col text-left group focus:outline-none"
            aria-label="Citizen Housing Home"
          >
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-brand text-dark-bg flex items-center justify-center font-bold text-sm shadow-brand-subtle">
                C
              </span>
              <span className="font-extrabold tracking-widest text-lg sm:text-xl text-neutral-warm group-hover:text-brand transition-colors">
                CITIZEN<span className="text-brand font-light ml-1">HOUSING</span>
              </span>
            </div>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-neutral-muted font-medium pl-10 -mt-0.5">
              A Project of Citizen Builders &amp; Developers
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-dark-bg bg-brand font-bold shadow-sm'
                      : 'text-neutral-muted hover:text-neutral-warm hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${PROJECT_DATA.brand.officialWhatsApp.replace(/[^0-9]/g, '')}?text=Hello%20Citizen%20Housing%20Sales,%20I%20am%20interested%20in%20Green%20Block%20plots.`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-white/10 bg-dark-card hover:border-brand/40 text-neutral-muted hover:text-brand transition-colors"
              title="WhatsApp Sales Desk"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <button
              onClick={() => onOpenBookingModal()}
              className="px-5 py-2.5 rounded-full bg-brand hover:bg-brand-400 text-dark-bg text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-brand-glow flex items-center gap-1.5 active:scale-95"
            >
              <span>Book Your Plot</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenBookingModal()}
              className="px-3.5 py-1.5 rounded-full bg-brand text-dark-bg text-[11px] font-bold tracking-wider uppercase active:scale-95"
            >
              Book Plot
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-neutral-soft hover:text-neutral-warm hover:bg-white/10 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Animated Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-navbar bg-dark-bg/95 border-b border-white/10 px-5 py-6 animate-fadeIn transition-all">
          <div className="grid grid-cols-2 gap-2 mb-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left px-3 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-xl transition-colors ${
                  activeSection === link.id
                    ? 'bg-brand text-dark-bg font-bold'
                    : 'text-neutral-muted hover:text-neutral-warm hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 space-y-3">
            <div className="flex items-center justify-between text-xs text-neutral-muted">
              <span>Sales Assistance:</span>
              <a href={`tel:${PROJECT_DATA.brand.displayPhone}`} className="text-brand font-mono font-medium flex items-center gap-1">
                <Phone className="w-3 h-3" /> {PROJECT_DATA.brand.displayPhone}
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookingModal();
              }}
              className="w-full py-3.5 rounded-xl bg-brand text-dark-bg text-xs font-bold uppercase tracking-wider transition-colors shadow-brand-glow flex items-center justify-center gap-2"
            >
              <span>Book Your Plot (0% Down Payment)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
