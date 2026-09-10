import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, Download, Calendar, ShieldCheck, Sparkles, Percent } from 'lucide-react';
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

  // Visual breakdown percentages
  const monthlyPercent = Math.round((currentPlan.monthlyTotal / currentPlan.totalPrice) * 100);
  const halfYearlyPercent = Math.round((currentPlan.halfYearlyTotal / currentPlan.totalPrice) * 100);
  const possessionPercent = Math.round((currentPlan.possessionAmount / currentPlan.totalPrice) * 100);

  return (
    <section id="payment-plans" className="py-24 sm:py-32 bg-charcoal-900/80 relative overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-950 border border-brand-500/30 text-brand-300 text-xs font-semibold uppercase tracking-widest mb-3">
            <Percent className="w-3.5 h-3.5 text-brand-400" />
            <span>Transparent Investment</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Clear, Predictable <span className="emerald-gradient-text">Payment Plans</span>
          </h2>
          <p className="text-sm sm:text-base text-charcoal-300 mt-4 leading-relaxed max-w-2xl mx-auto">
            Experience absolute pricing clarity with 0% down payment, no hidden interest fees, and a transparent 48-month milestone schedule.
          </p>

          {/* Interactive Plot Size Switcher */}
          <div className="mt-8 inline-flex p-1.5 rounded-full bg-charcoal-950 border border-white/10 shadow-2xl">
            <button
              onClick={() => setActiveTab('80-yards')}
              className={`px-6 sm:px-8 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === '80-yards'
                  ? 'bg-brand-600 text-white shadow-glow-emerald border border-brand-400/50'
                  : 'text-charcoal-400 hover:text-white'
              }`}
            >
              80 Yards Residential
            </button>
            <button
              onClick={() => setActiveTab('120-yards')}
              className={`px-6 sm:px-8 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === '120-yards'
                  ? 'bg-brand-600 text-white shadow-glow-emerald border border-brand-400/50'
                  : 'text-charcoal-400 hover:text-white'
              }`}
            >
              120 Yards Residential
            </button>
          </div>
        </div>

        {/* The Master Payment Schedule Card */}
        <div className="max-w-4xl mx-auto bg-charcoal-950 rounded-3xl border border-brand-500/30 p-6 sm:p-10 shadow-2xl relative">
          
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded bg-brand-900/60 border border-brand-500/40 text-[11px] font-mono font-bold text-brand-300 uppercase">
                  Green Block
                </span>
                <span className="text-xs text-charcoal-400">{currentPlan.dimensions}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                {currentPlan.sizeInYards} Sq. Yards Residential Plot
              </h3>
            </div>

            <div className="sm:text-right">
              <span className="text-xs text-charcoal-400 uppercase tracking-widest font-mono">
                Total Allotment Price
              </span>
              <div className="text-3xl sm:text-4xl font-black text-white font-mono mt-0.5">
                {formatPricePKR(currentPlan.totalPrice)}
              </div>
            </div>
          </div>

          {/* Visual Installment Allocation Bar */}
          <div className="py-6 border-b border-white/10">
            <div className="flex items-center justify-between text-xs text-charcoal-400 mb-2 font-mono">
              <span>Capital Breakdown</span>
              <span>4-Year Structured Schedule</span>
            </div>
            
            <div className="h-4 w-full bg-charcoal-800 rounded-full flex overflow-hidden p-0.5 gap-0.5">
              <div
                style={{ width: `${monthlyPercent}%` }}
                className="h-full bg-brand-500 rounded-l-full transition-all duration-500 relative group"
                title={`Monthly Installments: ${monthlyPercent}%`}
              />
              <div
                style={{ width: `${halfYearlyPercent}%` }}
                className="h-full bg-champagne-400 transition-all duration-500 relative group"
                title={`Half-Yearly Installments: ${halfYearlyPercent}%`}
              />
              <div
                style={{ width: `${possessionPercent}%` }}
                className="h-full bg-brand-300 rounded-r-full transition-all duration-500 relative group"
                title={`Possession: ${possessionPercent}%`}
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 mt-3 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-brand-500" />
                <span className="text-charcoal-300">Monthly Installments ({monthlyPercent}%)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-champagne-400" />
                <span className="text-charcoal-300">Half-Yearly Installments ({halfYearlyPercent}%)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-brand-300" />
                <span className="text-charcoal-300">Handover Possession ({possessionPercent}%)</span>
              </div>
            </div>
          </div>

          {/* Detailed Milestone Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-8">
            {/* Step 1: Booking */}
            <div className="p-5 rounded-2xl bg-charcoal-900 border border-white/5 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-brand-400 block mb-1">
                  Milestone 01
                </span>
                <h4 className="text-sm font-semibold text-white">Booking</h4>
                <p className="text-xs text-charcoal-400 mt-1">0% Down Payment Policy</p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5">
                <div className="text-xl font-bold font-mono text-brand-300">
                  Rs. 0
                </div>
                <span className="text-[10px] text-charcoal-500">Zero Upfront Burden</span>
              </div>
            </div>

            {/* Step 2: Monthly */}
            <div className="p-5 rounded-2xl bg-charcoal-900 border border-brand-500/20 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-brand-400 block mb-1">
                  Milestone 02
                </span>
                <h4 className="text-sm font-semibold text-white">48 Monthly Payments</h4>
                <p className="text-xs text-charcoal-400 mt-1">{formatPricePKR(currentPlan.monthlyInstallment)} × 48 Months</p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5">
                <div className="text-xl font-bold font-mono text-white">
                  {formatPricePKR(currentPlan.monthlyTotal)}
                </div>
                <span className="text-[10px] text-brand-400 font-medium">Rs. {currentPlan.monthlyInstallment.toLocaleString()}/mo</span>
              </div>
            </div>

            {/* Step 3: Half-Yearly */}
            <div className="p-5 rounded-2xl bg-charcoal-900 border border-white/5 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-champagne-400 block mb-1">
                  Milestone 03
                </span>
                <h4 className="text-sm font-semibold text-white">8 Half-Yearly</h4>
                <p className="text-xs text-charcoal-400 mt-1">{formatPricePKR(currentPlan.halfYearlyInstallment)} × 8 Semi-Annual</p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5">
                <div className="text-xl font-bold font-mono text-white">
                  {formatPricePKR(currentPlan.halfYearlyTotal)}
                </div>
                <span className="text-[10px] text-champagne-300">Every 6 Months</span>
              </div>
            </div>

            {/* Step 4: Possession */}
            <div className="p-5 rounded-2xl bg-charcoal-900 border border-white/5 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-brand-300 block mb-1">
                  Milestone 04
                </span>
                <h4 className="text-sm font-semibold text-white">At Possession</h4>
                <p className="text-xs text-charcoal-400 mt-1">Payable upon physical handover</p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5">
                <div className="text-xl font-bold font-mono text-white">
                  {formatPricePKR(currentPlan.possessionAmount)}
                </div>
                <span className="text-[10px] text-charcoal-400">Final Handover Payment</span>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-charcoal-400">
              <ShieldCheck className="w-4 h-4 text-brand-400 flex-shrink-0" />
              <span>
                All amounts in PKR. Installment receipts officially provided by Citizen Builders &amp; Developers.
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => onOpenBookingModal(`${currentPlan.sizeInYards} Yards`)}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-glow-emerald flex items-center justify-center gap-2 border border-brand-400/50"
              >
                <span>Book {currentPlan.sizeInYards} Yards Plot</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenBookingModal(`Payment Schedule Request - ${currentPlan.sizeInYards} Yards`)}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-charcoal-200 text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 border border-white/10"
              >
                <Download className="w-4 h-4 text-charcoal-400" />
                <span>Request Full Schedule</span>
              </button>
            </div>
          </div>

        </div>

        {/* Section 11: Extra Charges Information Block */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="p-6 sm:p-8 rounded-3xl bg-charcoal-950 border border-champagne-500/30 relative overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-champagne-400 font-mono mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-champagne-400" />
                  <span>Important Plot Category Information</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Additional Prime Location Surcharges
                </h3>
              </div>

              <div className="px-4 py-2 rounded-xl bg-champagne-500/10 border border-champagne-400/30 text-champagne-300 text-xs font-mono font-semibold self-start md:self-auto">
                Payment Window: 180 Days
              </div>
            </div>

            {/* Extra Charges Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6">
              {PROJECT_DATA.extraCharges.map((charge, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-charcoal-900 border border-white/5">
                  <span className="text-2xl font-black text-champagne-300 font-mono block">
                    +{charge.percentage}%
                  </span>
                  <h4 className="text-sm font-semibold text-white mt-1">
                    {charge.category}
                  </h4>
                  <p className="text-[11px] text-charcoal-400 mt-1 leading-snug">
                    {charge.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Essential Developer Note */}
            <div className="p-4 rounded-2xl bg-charcoal-900/90 border border-white/10 flex items-center justify-between text-xs text-charcoal-300">
              <span className="font-medium text-white">
                Official Developer Policy Note:
              </span>
              <span className="font-semibold text-champagne-300">
                “{PROJECT_DATA.extraChargesNote}”
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
