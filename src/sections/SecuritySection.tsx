import React from 'react';
import { ShieldCheck, Camera, Lock, Eye, Check } from 'lucide-react';
import { PROJECT_DATA } from '../data/projectData';

export const SecuritySection: React.FC = () => {
  const iconList = [Lock, ShieldCheck, Camera, Eye];

  return (
    <section id="security" className="py-20 sm:py-28 bg-dark-bg relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-card border border-brand/40 text-brand text-xs font-semibold uppercase tracking-widest mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Community Protection</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tightest text-neutral-warm leading-tight">
            SECURITY YOU <span className="brand-gradient-text">CAN SEE.</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-muted mt-3 leading-relaxed">
            A peaceful family environment begins with tangible, organized security planning. Citizen Housing incorporates structural boundary management, designated access barriers, and planned surveillance to safeguard community boundaries.
          </p>
        </div>

        {/* 4 Security Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROJECT_DATA.securityHighlights.map((sec, idx) => {
            const Icon = iconList[idx] || ShieldCheck;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl bg-dark-card border border-white/5 hover:border-brand/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-brand-subtle flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-dark-bg border border-brand/30 text-brand flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-brand/10 border border-brand/30 text-brand font-bold">
                      {sec.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-neutral-warm mb-2">
                    {sec.title}
                  </h3>

                  <p className="text-xs text-neutral-muted leading-relaxed">
                    {sec.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/5 flex items-center gap-2 text-xs text-neutral-faint">
                  <Check className="w-3.5 h-3.5 text-brand" />
                  <span>Planned Security Feature</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Security Reassurance Note */}
        <div className="mt-10 p-5 rounded-2xl bg-dark-card border border-white/10 flex items-start gap-3 max-w-4xl text-xs text-neutral-muted">
          <ShieldCheck className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-neutral-warm">Security Standards:</strong> Security infrastructure protocols are designed to be deployed progressively in step with on-ground civil execution, ensuring controlled resident access and peace of mind.
          </p>
        </div>

      </div>
    </section>
  );
};
