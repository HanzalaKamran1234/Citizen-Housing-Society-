import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare, Phone } from 'lucide-react';
import { PROJECT_DATA, FAQItem } from '../data/projectData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Pricing & Payment', 'Location & Land', 'Facilities', 'Documentation'];

  const filteredFaqs = activeCategory === 'All'
    ? PROJECT_DATA.faqs
    : PROJECT_DATA.faqs.filter((faq) => faq.category === activeCategory);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-charcoal-900/60 relative overflow-hidden border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-950 border border-brand-500/30 text-brand-300 text-xs font-semibold uppercase tracking-widest mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-brand-400" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Clear Answers for <span className="emerald-gradient-text">Informed Decisions</span>
          </h2>
          <p className="text-sm sm:text-base text-charcoal-300 mt-4 leading-relaxed">
            Everything you need to know regarding plot allotments, installment schedules, location access, and project documentation for Green Block.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenIndex(0);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeCategory === cat
                    ? 'bg-brand-600 text-white shadow-glow-emerald border border-brand-400/40'
                    : 'bg-charcoal-950 border border-white/10 text-charcoal-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-charcoal-950 border-brand-500/40 shadow-luxury'
                    : 'bg-charcoal-950/60 border-white/5 hover:border-white/15'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`p-1.5 rounded-full border transition-transform duration-300 flex-shrink-0 ${
                      isOpen
                        ? 'bg-brand-900/60 border-brand-400/40 text-brand-300 rotate-180'
                        : 'bg-white/5 border-white/10 text-charcoal-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-charcoal-300 leading-relaxed border-t border-white/5 animate-fadeIn">
                    <p>{faq.answer}</p>
                    <div className="mt-3 flex items-center gap-2 text-[10px] font-mono text-brand-400/80">
                      <span>Source: Developer Project Schedule</span>
                      <span>•</span>
                      <span>Category: {faq.category}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Strip */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-charcoal-950 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base font-bold text-white">
              Have a specific question not listed here?
            </h4>
            <p className="text-xs text-charcoal-400 mt-0.5">
              Our official sales desk is available to assist you with latest plot demarcations and allotment queries.
            </p>
          </div>

          <a
            href={`https://wa.me/${PROJECT_DATA.brand.officialWhatsApp.replace(/[^0-9]/g, '')}?text=Hello%20Citizen%20Housing,%20I%20have%20an%20inquiry%20regarding%20Green%20Block.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-brand-700/70 hover:bg-brand-600 text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-2 border border-brand-400/40"
          >
            <MessageSquare className="w-4 h-4 text-brand-300" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
