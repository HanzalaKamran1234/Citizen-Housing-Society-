import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { PROJECT_DATA } from '../data/projectData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Land & Clarification', 'Pricing & Payment', 'Location & Land', 'Facilities', 'Documentation'];

  const filteredFaqs = activeCategory === 'All'
    ? PROJECT_DATA.faqs
    : PROJECT_DATA.faqs.filter((faq) => faq.category === activeCategory);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-dark-bg relative overflow-hidden border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-card border border-brand/40 text-brand text-xs font-semibold uppercase tracking-widest mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Buyer Questions Answered</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tightest text-neutral-warm leading-tight">
            FREQUENTLY ASKED <br />
            <span className="brand-gradient-text">QUESTIONS</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-muted mt-3 leading-relaxed">
            Essential facts regarding residential plots, installment terms, location connectivity, and project documentation for Green Block.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenIndex(0);
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeCategory === cat
                    ? 'bg-brand text-dark-bg font-bold shadow-brand-subtle'
                    : 'bg-dark-card border border-white/10 text-neutral-muted hover:text-neutral-warm'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-dark-card border-brand/50 shadow-dark-luxury'
                    : 'bg-dark-card/60 border-white/5 hover:border-white/15'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={`text-sm sm:text-base font-bold ${isOpen ? 'text-neutral-warm' : 'text-neutral-soft'}`}>
                    {faq.question}
                  </span>
                  <div
                    className={`p-1.5 rounded-full border transition-transform duration-300 flex-shrink-0 ${
                      isOpen
                        ? 'bg-brand text-dark-bg border-brand rotate-180 font-bold'
                        : 'bg-white/5 border-white/10 text-neutral-muted'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-neutral-muted leading-relaxed border-t border-white/5 animate-fadeIn">
                    <p className="text-neutral-soft leading-relaxed">{faq.answer}</p>
                    <div className="mt-3 flex items-center gap-2 text-[10px] font-mono text-brand">
                      <span>Source: Citizen Housing Project Schedule</span>
                      <span>•</span>
                      <span>Category: {faq.category}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Strip */}
        <div className="mt-10 p-5 sm:p-7 rounded-3xl bg-dark-card border border-brand/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base font-bold text-neutral-warm">
              Have a question not listed here?
            </h4>
            <p className="text-xs text-neutral-muted mt-0.5">
              Connect directly with our sales desk for on-ground plot verification and latest information.
            </p>
          </div>

          <a
            href={`https://wa.me/${PROJECT_DATA.brand.officialWhatsApp.replace(/[^0-9]/g, '')}?text=Hello%20Citizen%20Housing,%20I%20have%20an%20inquiry%20regarding%20Green%20Block%20plots.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-brand hover:bg-brand-400 text-dark-bg text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 shadow-brand-glow"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
