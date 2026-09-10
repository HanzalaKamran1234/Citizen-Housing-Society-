import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { TrustBar } from './sections/TrustBar';
import { AboutSection } from './sections/AboutSection';
import { LocationSection } from './sections/LocationSection';
import { WhyOwnAPlotSection } from './sections/WhyOwnAPlotSection';
import { PlotOptionsSection } from './sections/PlotOptionsSection';
import { PaymentPlansSection } from './sections/PaymentPlansSection';
import { FacilitiesSection } from './sections/FacilitiesSection';
import { SecuritySection } from './sections/SecuritySection';
import { InvestmentSection } from './sections/InvestmentSection';
import { MasterPlanSection } from './sections/MasterPlanSection';
import { DocumentationSection } from './sections/DocumentationSection';
import { PartnersSection } from './sections/PartnersSection';
import { GallerySection } from './sections/GallerySection';
import { HowItWorksSection } from './sections/HowItWorksSection';
import { FAQSection } from './sections/FAQSection';
import { FinalCTASection } from './sections/FinalCTASection';
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
      'facts',
      'about',
      'location',
      'plots',
      'payment-plans',
      'facilities',
      'security',
      'investment',
      'master-plan',
      'documentation',
      'gallery',
      'how-it-works',
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
    <div className="min-h-screen bg-dark-bg text-neutral-warm flex flex-col font-sans selection:bg-brand selection:text-dark-bg relative">
      
      {/* Top Sticky Navigation */}
      <Navbar
        onOpenBookingModal={(size) => openLeadModal(size, 'Navbar CTA')}
        onNavigateSection={navigateToSection}
        activeSection={activeSection}
      />

      <main className="flex-grow">
        {/* 01 — HERO */}
        <HeroSection
          onExplorePlots={() => navigateToSection('plots')}
          onViewPaymentPlans={() => navigateToSection('payment-plans')}
        />

        {/* 02 — KEY PROJECT FACTS */}
        <TrustBar />

        {/* 03 — ABOUT CITIZEN HOUSING */}
        <AboutSection
          onOpenBookingModal={() => openLeadModal(undefined, 'About Section Inquire')}
          onExplorePlots={() => navigateToSection('plots')}
        />

        {/* 04 — LOCATION */}
        <LocationSection />

        {/* 05 — WHY OWN A PLOT */}
        <WhyOwnAPlotSection
          onExplorePlots={() => navigateToSection('plots')}
        />

        {/* 06 — PLOT OPTIONS */}
        <PlotOptionsSection
          onSelectPlot={(plotId) => {
            setSelectedPlanId(plotId);
            navigateToSection('payment-plans');
          }}
        />

        {/* 07 — PAYMENT PLANS & 08 — ADDITIONAL CHARGES */}
        <PaymentPlansSection
          selectedPlanId={selectedPlanId}
          onOpenBookingModal={(size) => openLeadModal(size, 'Payment Plans Section')}
        />

        {/* 09 — FACILITIES */}
        <FacilitiesSection />

        {/* 10 — SECURITY (Dedicated Section) */}
        <SecuritySection />

        {/* 11 — INVESTMENT / OWNERSHIP OPPORTUNITY */}
        <InvestmentSection
          onOpenBookingModal={() => openLeadModal(undefined, 'Investment Section')}
        />

        {/* 12 — MASTER PLAN */}
        <MasterPlanSection
          onOpenMasterPlanModal={() => setIsMasterPlanModalOpen(true)}
          onOpenBookingModal={() => openLeadModal(undefined, 'Master Plan Section')}
        />

        {/* 13 — PROJECT DOCUMENTATION */}
        <DocumentationSection
          onOpenDocumentationModal={() => setIsDocumentationModalOpen(true)}
        />

        {/* 14 — DEVELOPMENT PARTNERS */}
        <PartnersSection />

        {/* 15 — GALLERY */}
        <GallerySection />

        {/* 16 — HOW IT WORKS */}
        <HowItWorksSection
          onOpenBookingModal={() => openLeadModal(undefined, 'How It Works Section')}
        />

        {/* 17 — FAQ */}
        <FAQSection />

        {/* 18 — FINAL CTA */}
        <FinalCTASection
          onOpenBookingModal={() => openLeadModal(undefined, 'Final CTA Section')}
        />

        {/* CONTACT PAGE SECTION */}
        <ContactSection />
      </main>

      {/* 19 — FOOTER */}
      <Footer
        onOpenPrivacyModal={() => setIsPrivacyModalOpen(true)}
        onOpenDisclaimerModal={() => setIsLegalModalOpen(true)}
        onNavigateSection={navigateToSection}
      />

      {/* Persistent WhatsApp Floating CTA */}
      <WhatsAppFloatingButton />

      {/* Persistent Mobile Sticky Action Bar */}
      <MobileStickyBar
        onOpenBookingModal={() => openLeadModal(undefined, 'Mobile Sticky Bar')}
      />

      {/* Modals & Dialogs */}
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
