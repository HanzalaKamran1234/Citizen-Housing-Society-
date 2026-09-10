import React from 'react';
import { ArrowRight, CheckCircle2, UserCheck, Layers, CreditCard, Key } from 'lucide-react';
import { PROJECT_DATA } from '../data/projectData';

interface HowItWorksSectionProps {
  onOpenBookingModal: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onOpenBookingModal }) => {
  const stepIcons = [Layers, CreditCard, UserCheck, Key];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-dark-bg relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-card border border-brand/40 text-brand text-xs font-semibold uppercase tracking-widest mb-3">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Simple Process</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tightest text-neutral-warm leading-tight">
            HOW IT <span className="brand-gradient-text">WORKS</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-muted mt-3 leading-relaxed max-w-2xl mx-auto">
            Acquiring your residential plot in Citizen Housing is designed to be straightforward, transparent, and completely free from upfront stress.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROJECT_DATA.howItWorksSteps.map((step, idx) => {
            const Icon = stepIcons[idx] || Layers;
            return (
              <div
                key={step.step}
                className="group p-6 sm:p-7 rounded-3xl bg-dark-card border border-white/5 hover:border-brand/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-brand-subtle flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-3xl font-black text-brand">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-dark-bg border border-brand/30 text-brand flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-neutral-warm mb-2 group-hover:text-brand transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-neutral-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/5 flex items-center gap-1 text-[11px] font-mono text-brand">
                  <span>Step {idx + 1} of 4</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Trigger */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenBookingModal}
            className="px-8 py-4 rounded-full bg-brand hover:bg-brand-400 text-dark-bg font-bold text-xs uppercase tracking-wider transition-colors shadow-brand-glow inline-flex items-center gap-2"
          >
            <span>Start Your Booking Process</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
