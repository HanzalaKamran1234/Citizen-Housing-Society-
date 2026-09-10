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
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Location', id: 'location' },
    { label: 'Plot Options', id: 'plots' },
    { label: 'Payment Plans', id: 'payment-plans' },
    { label: 'Facilities', id: 'facilities' },
    { label: 'Master Plan', id: 'master-plan' },
    { label: 'Investment', id: 'investment' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigateSection(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-nav py-3.5 shadow-2xl backdrop-blur-md bg-charcoal-950/85 border-b border-white/10'
          : 'bg-gradient-to-b from-charcoal-950/90 via-charcoal-950/40 to-transparent py-5'
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
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-600 to-brand-900 border border-brand-400/30 flex items-center justify-center font-serif font-bold text-white shadow-glow-emerald">
                C
              </span>
              <span className="font-bold tracking-widest text-lg sm:text-xl text-white group-hover:text-brand-300 transition-colors">
                CITIZEN<span className="text-brand-400 font-light ml-1">HOUSING</span>
              </span>
            </div>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-charcoal-400 font-medium pl-10 -mt-0.5">
              A Project of Citizen Builders &amp; Developers
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1.5" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-1.5 text-xs font-medium uppercase tracking-wider rounded-md transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-white/10 font-semibold shadow-inner'
                      : 'text-charcoal-300 hover:text-white hover:bg-white/5'
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
              className="p-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-brand-900/40 text-charcoal-300 hover:text-brand-300 transition-colors"
              title="WhatsApp Sales Desk"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <button
              onClick={() => onOpenBookingModal()}
              className="relative group overflow-hidden px-5 py-2.5 rounded-full bg-brand-600 hover:bg-brand-500 text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-glow-emerald flex items-center gap-2 border border-brand-400/40"
            >
              <span>Book Your Plot</span>
              <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={() => onOpenBookingModal()}
              className="sm:hidden px-3.5 py-1.5 rounded-full bg-brand-600 text-white text-[11px] font-semibold tracking-wider uppercase border border-brand-400/40"
            >
              Book Plot
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-charcoal-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden glass-nav bg-charcoal-950/95 border-b border-white/10 px-6 py-6 animate-fadeIn transition-all">
          <div className="grid grid-cols-2 gap-2 mb-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left px-3 py-2.5 text-xs font-medium uppercase tracking-wider rounded-lg transition-colors ${
                  activeSection === link.id
                    ? 'bg-brand-900/60 text-brand-300 font-semibold border border-brand-500/30'
                    : 'text-charcoal-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 space-y-3">
            <div className="flex items-center justify-between text-xs text-charcoal-400">
              <span>Sales Assistance:</span>
              <a href={`tel:${PROJECT_DATA.brand.displayPhone}`} className="text-brand-400 font-medium flex items-center gap-1">
                <Phone className="w-3 h-3" /> {PROJECT_DATA.brand.displayPhone}
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookingModal();
              }}
              className="w-full py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-glow-emerald flex items-center justify-center gap-2"
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
