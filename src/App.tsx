import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { TrustBar } from './sections/TrustBar';
import { AboutSection } from './sections/AboutSection';
import { LocationSection } from './sections/LocationSection';
import { WhyCitizenSection } from './sections/WhyCitizenSection';
import { PlotOptionsSection } from './sections/PlotOptionsSection';
import { PaymentPlansSection } from './sections/PaymentPlansSection';
import { FacilitiesSection } from './sections/FacilitiesSection';
import { InvestmentSection } from './sections/InvestmentSection';
import { DocumentationSection } from './sections/DocumentationSection';
import { PartnersSection } from './sections/PartnersSection';
import { MasterPlanSection } from './sections/MasterPlanSection';
import { GallerySection } from './sections/GallerySection';
import { FAQSection } from './sections/FAQSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './components/Footer';

import { LeadModal } from './components/LeadModal';
import { MasterPlanModal } from './components/MasterPlanModal';
import { DocumentationModal } from './components/DocumentationModal';
import { LegalDisclaimerModal } from './components/LegalDisclaimerModal';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { MobileStickyBar } from './components/MobileStickyBar';

export const App: React.FC = () => {
  // Modal states
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [selectedPlotForModal, setSelectedPlotForModal] = useState<string>('80 Yards');
  const [leadModalSource, setLeadModalSource] = useState<string>('Website CTA');

  const [isMasterPlanModalOpen, setIsMasterPlanModalOpen] = useState(false);
  const [isDocumentationModalOpen, setIsDocumentationModalOpen] = useState(false);
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  // Active section for navbar highlighting
  const [activeSection, setActiveSection] = useState('hero');

  // Selected plot ID for synchronized payment plan highlight
  const [selectedPlanId, setSelectedPlanId] = useState<'80-yards' | '120-yards'>('80-yards');

  // Open lead modal helper
  const openLeadModal = (plotSize?: string, source = 'Direct CTA') => {
    if (plotSize) setSelectedPlotForModal(plotSize);
    setLeadModalSource(source);
    setIsLeadModalOpen(true);
  };

  // Smooth navigation helper
  const navigateToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = [
      'hero',
      'about',
      'location',
      'plots',
      'payment-plans',
      'facilities',
      'investment',
      'documentation',
      'master-plan',
      'gallery',
      'faq',
      'contact'
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-charcoal-950 text-charcoal-100 flex flex-col font-sans selection:bg-brand-600 selection:text-white relative">
      
      {/* Top Sticky Navigation */}
      <Navbar
        onOpenBookingModal={(size) => openLeadModal(size, 'Navbar CTA')}
        onNavigateSection={navigateToSection}
        activeSection={activeSection}
      />

      <main className="flex-grow">
        {/* 1. Hero Section */}
        <HeroSection
          onOpenBookingModal={() => openLeadModal(undefined, 'Hero Book Consultation')}
          onExplorePlans={() => navigateToSection('payment-plans')}
        />

        {/* 2. Quick Trust Bar */}
        <TrustBar />

        {/* 3. About Project */}
        <AboutSection
          onOpenBookingModal={() => openLeadModal(undefined, 'About Section Inquire')}
        />

        {/* 4. Location Section */}
        <LocationSection />

        {/* 5. Why Citizen Housing */}
        <WhyCitizenSection />

        {/* 6. Plot Options (80 vs 120 side-by-side) */}
        <PlotOptionsSection
          onSelectPlot={(plotId) => {
            setSelectedPlanId(plotId);
            navigateToSection('payment-plans');
          }}
        />

        {/* 7. Payment Plans & Extra Charges Block */}
        <PaymentPlansSection
          selectedPlanId={selectedPlanId}
          onOpenBookingModal={(size) => openLeadModal(size, 'Payment Plans Section')}
        />

        {/* 8. Facilities */}
        <FacilitiesSection />

        {/* 9. Investment Proposition */}
        <InvestmentSection
          onOpenBookingModal={() => openLeadModal(undefined, 'Investment Section')}
        />

        {/* 10. Documentation & Approvals */}
        <DocumentationSection
          onOpenDocumentationModal={() => setIsDocumentationModalOpen(true)}
        />

        {/* 11. Development Partners */}
        <PartnersSection />

        {/* 12. Master Plan */}
        <MasterPlanSection
          onOpenMasterPlanModal={() => setIsMasterPlanModalOpen(true)}
          onOpenBookingModal={() => openLeadModal(undefined, 'Master Plan Section')}
        />

        {/* 13. Gallery */}
        <GallerySection />

        {/* 14. FAQ */}
        <FAQSection />

        {/* 15. Contact Section */}
        <ContactSection />
      </main>

      {/* 16. Multi-Column Footer */}
      <Footer
        onOpenPrivacyModal={() => setIsPrivacyModalOpen(true)}
        onOpenDisclaimerModal={() => setIsLegalModalOpen(true)}
        onNavigateSection={navigateToSection}
      />

      {/* Floating WhatsApp CTA button */}
      <WhatsAppFloatingButton />

      {/* Mobile persistent bottom CTA */}
      <MobileStickyBar
        onOpenBookingModal={() => openLeadModal(undefined, 'Mobile Sticky Bar')}
      />

      {/* Modals */}
      <LeadModal
        isOpen={isLeadModalOpen}
        onClose={() => setIsLeadModalOpen(false)}
        defaultPlotSize={selectedPlotForModal}
        sourceTitle={leadModalSource}
      />

      <MasterPlanModal
        isOpen={isMasterPlanModalOpen}
        onClose={() => setIsMasterPlanModalOpen(false)}
        onOpenBookingModal={() => {
          setIsMasterPlanModalOpen(false);
          openLeadModal(undefined, 'Master Plan Modal');
        }}
      />

      <DocumentationModal
        isOpen={isDocumentationModalOpen}
        onClose={() => setIsDocumentationModalOpen(false)}
      />

      <LegalDisclaimerModal
        isOpen={isLegalModalOpen}
        onClose={() => setIsLegalModalOpen(false)}
      />

      <PrivacyPolicyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />

    </div>
  );
};
