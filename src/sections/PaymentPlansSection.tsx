import React, { useState } from 'react';
import { ArrowRight, Download, ShieldCheck, Sparkles, Percent, AlertCircle } from 'lucide-react';
import { PROJECT_DATA, PlotPlan } from '../data/projectData';
import { formatPricePKR } from '../lib/utils';

interface PaymentPlansSectionProps {
  onOpenBookingModal: (plotSize?: string) => void;
  selectedPlanId?: '80-yards' | '120-yards';
}

export const PaymentPlansSection: React.FC<PaymentPlansSectionProps> = ({
  onOpenBookingModal,
  selectedPlanId = '80-yards',
}) => {
  const [activeTab, setActiveTab] = useState<'80-yards' | '120-yards'>(selectedPlanId);

  const currentPlan: PlotPlan = PROJECT_DATA.plotPlans.find((p) => p.id === activeTab) || PROJECT_DATA.plotPlans[0];

  const monthlyPercent = Math.round((currentPlan.monthlyTotal / currentPlan.totalPrice) * 100);
  const halfYearlyPercent = Math.round((currentPlan.halfYearlyTotal / currentPlan.totalPrice) * 100);
  const possessionPercent = Math.round((currentPlan.possessionAmount / currentPlan.totalPrice) * 100);

  return (
    <section id="payment-plans" className="py-20 sm:py-28 bg-dark-bg relative overflow-hidden border-t border-white/5">
      {/* Subtle brand ambient glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-card border border-brand/40 text-brand text-xs font-semibold uppercase tracking-widest mb-3">
            <Percent className="w-3.5 h-3.5 text-brand" />
            <span>Structured Land Investment</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tightest text-neutral-warm leading-tight">
            TRANSPARENT <span className="brand-gradient-text">PAYMENT PLANS</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-muted mt-3 leading-relaxed max-w-2xl mx-auto">
            Clear, predictable installment schedules for residential plots. 0% Down Payment at booking with manageable 48-month terms and zero hidden fees.
          </p>

          {/* Interactive Toggle Switcher */}
          <div className="mt-8 inline-flex p-1.5 rounded-full bg-dark-card border border-white/10 shadow-2xl">
            <button
              onClick={() => setActiveTab('80-yards')}
              className={`px-5 sm:px-8 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === '80-yards'
                  ? 'bg-brand text-dark-bg shadow-brand-glow'
                  : 'text-neutral-muted hover:text-neutral-warm'
              }`}
            >
              80 Yards Residential
            </button>
            <button
              onClick={() => setActiveTab('120-yards')}
              className={`px-5 sm:px-8 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === '120-yards'
                  ? 'bg-brand text-dark-bg shadow-brand-glow'
                  : 'text-neutral-muted hover:text-neutral-warm'
              }`}
            >
              120 Yards Residential
            </button>
          </div>
        </div>

        {/* Master Schedule Vertical Card (Optimized for Mobile & Desktop) */}
        <div className="max-w-4xl mx-auto bg-dark-card rounded-3xl border border-brand/40 p-6 sm:p-10 shadow-dark-luxury relative">
          
          {/* Top Bar with Big Price Highlight */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded bg-dark-bg border border-brand/40 text-[11px] font-mono font-bold text-brand uppercase">
                  Green Block
                </span>
                <span className="text-xs text-neutral-muted">{currentPlan.dimensions}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-warm mt-1 tracking-tight">
                {currentPlan.sizeInYards} Sq. Yards Residential Plot
              </h3>
            </div>

            {/* TOTAL PRICE HIGHLIGHTED WITH #89C742 */}
            <div className="p-3 sm:p-4 rounded-2xl bg-dark-bg border border-brand/50 sm:text-right">
              <span className="text-[10px] sm:text-xs text-neutral-muted uppercase tracking-widest font-mono block">
                TOTAL PLOT PRICE
              </span>
              <div className="text-3xl sm:text-4xl font-black text-brand font-mono mt-0.5">
                {formatPricePKR(currentPlan.totalPrice)}
              </div>
            </div>
          </div>

          {/* Allocation Bar */}
          <div className="py-6 border-b border-white/10">
            <div className="flex items-center justify-between text-xs text-neutral-muted mb-2 font-mono">
              <span>Capital Distribution</span>
              <span>48-Month Structured Pacing</span>
            </div>
            
            <div className="h-3.5 w-full bg-dark-bg rounded-full flex overflow-hidden p-0.5 gap-0.5">
              <div
                style={{ width: `${monthlyPercent}%` }}
                className="h-full bg-brand rounded-l-full transition-all duration-500"
                title={`Monthly Installments: ${monthlyPercent}%`}
              />
              <div
                style={{ width: `${halfYearlyPercent}%` }}
                className="h-full bg-neutral-soft transition-all duration-500"
                title={`Half-Yearly Installments: ${halfYearlyPercent}%`}
              />
              <div
                style={{ width: `${possessionPercent}%` }}
                className="h-full bg-brand-300 rounded-r-full transition-all duration-500"
                title={`Possession: ${possessionPercent}%`}
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 mt-3 text-xs">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-brand" />
                <span className="text-neutral-soft">Monthly Installments ({monthlyPercent}%)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-soft" />
                <span className="text-neutral-soft">Half-Yearly Installments ({halfYearlyPercent}%)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-300" />
                <span className="text-neutral-soft">Possession Handover ({possessionPercent}%)</span>
              </div>
            </div>
          </div>

          {/* 4 Vertical Milestones (Mobile-First Stacking) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-6">
            
            {/* Milestone 1: Booking */}
            <div className="p-5 rounded-2xl bg-dark-bg border border-brand/30 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-brand block mb-1">
                  Milestone 01
                </span>
                <h4 className="text-sm font-bold text-neutral-warm">Booking Amount</h4>
                <p className="text-xs text-neutral-muted mt-0.5">0% Down Payment</p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5">
                <div className="text-xl font-bold font-mono text-brand">
                  Rs. 0
                </div>
                <span className="text-[10px] text-neutral-faint">Zero Upfront Burden</span>
              </div>
            </div>

            {/* Milestone 2: Monthly */}
            <div className="p-5 rounded-2xl bg-dark-bg border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-brand block mb-1">
                  Milestone 02
                </span>
                <h4 className="text-sm font-bold text-neutral-warm">Monthly Installment</h4>
                <p className="text-xs text-neutral-muted mt-0.5">{formatPricePKR(currentPlan.monthlyInstallment)} × 48 Months</p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5">
                <div className="text-xl font-bold font-mono text-neutral-warm">
                  {formatPricePKR(currentPlan.monthlyTotal)}
                </div>
                <span className="text-[10px] text-brand font-mono font-semibold">
                  Rs. {currentPlan.monthlyInstallment.toLocaleString()}/month
                </span>
              </div>
            </div>

            {/* Milestone 3: Half-Yearly */}
            <div className="p-5 rounded-2xl bg-dark-bg border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-soft block mb-1">
                  Milestone 03
                </span>
                <h4 className="text-sm font-bold text-neutral-warm">8 Half-Yearly</h4>
                <p className="text-xs text-neutral-muted mt-0.5">{formatPricePKR(currentPlan.halfYearlyInstallment)} × 8 Payments</p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5">
                <div className="text-xl font-bold font-mono text-neutral-warm">
                  {formatPricePKR(currentPlan.halfYearlyTotal)}
                </div>
                <span className="text-[10px] text-neutral-muted">Every 6 Months</span>
              </div>
            </div>

            {/* Milestone 4: Possession */}
            <div className="p-5 rounded-2xl bg-dark-bg border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-brand-300 block mb-1">
                  Milestone 04
                </span>
                <h4 className="text-sm font-bold text-neutral-warm">Possession</h4>
                <p className="text-xs text-neutral-muted mt-0.5">Physical plot handover</p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5">
                <div className="text-xl font-bold font-mono text-neutral-warm">
                  {formatPricePKR(currentPlan.possessionAmount)}
                </div>
                <span className="text-[10px] text-neutral-muted">Payable at Handover</span>
              </div>
            </div>

          </div>

          {/* Action Row */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-neutral-muted">
              <ShieldCheck className="w-4 h-4 text-brand flex-shrink-0" />
              <span>Official payment receipts issued directly by Citizen Builders &amp; Developers.</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => onOpenBookingModal(`${currentPlan.sizeInYards} Yards`)}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-brand hover:bg-brand-400 text-dark-bg text-xs font-bold uppercase tracking-wider transition-colors shadow-brand-glow flex items-center justify-center gap-2"
              >
                <span>Book {currentPlan.sizeInYards} Yards Plot</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenBookingModal(`Payment Schedule Request - ${currentPlan.sizeInYards} Yards`)}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-soft text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 border border-white/10"
              >
                <Download className="w-4 h-4 text-brand" />
                <span>Request Full Payment Schedule</span>
              </button>
            </div>
          </div>

        </div>

        {/* SECTION 08 — ADDITIONAL CHARGES (Highly Visible Block) */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="p-6 sm:p-8 rounded-3xl bg-dark-card border-2 border-brand/30 shadow-dark-luxury relative overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-white/10">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-widest text-brand mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Important Plot Category Policy</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-warm">
                  Additional Prime Location Charges
                </h3>
              </div>

              <div className="px-3.5 py-1.5 rounded-xl bg-brand/10 border border-brand/40 text-brand text-xs font-mono font-bold self-start md:self-auto">
                Payment Period: 180 Days
              </div>
            </div>

            {/* 4 Charge Blocks */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 my-6">
              {PROJECT_DATA.extraCharges.map((charge, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-dark-bg border border-white/5">
                  <span className="text-2xl font-black text-brand font-mono block">
                    +{charge.percentage}%
                  </span>
                  <h4 className="text-sm font-bold text-neutral-warm mt-1">
                    {charge.category}
                  </h4>
                  <p className="text-[11px] text-neutral-muted mt-1 leading-snug">
                    {charge.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Mandatory Developer Note in Full Visibility */}
            <div className="p-4 rounded-2xl bg-dark-bg border border-brand/40 flex items-center gap-3 text-xs">
              <AlertCircle className="w-4 h-4 text-brand flex-shrink-0" />
              <div className="text-neutral-soft">
                <span className="font-semibold text-neutral-warm mr-1">Official Policy Note:</span>
                <span className="text-brand font-mono font-bold">
                  “{PROJECT_DATA.extraChargesNote}”
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
