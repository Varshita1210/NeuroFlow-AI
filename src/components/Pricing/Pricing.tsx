import { useState, useMemo } from 'react';
import { PLANS, CURRENCIES, CurrencyConfig } from '../../constants';
import { Check, ArrowRight, ShieldCheck, HelpCircle, Sliders } from 'lucide-react';
import CurrencySwitcher from '../CurrencySwitcher/CurrencySwitcher';
import BillingToggle from '../BillingToggle/BillingToggle';
import AnimatedCounter from '../AnimatedCounter/AnimatedCounter';

export default function Pricing() {
  const [currency, setCurrency] = useState<string>('USD');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [opsVolume, setOpsVolume] = useState<number>(100); // in thousands

  // Multiplier pricing matrix
  const pricingMatrix = useMemo(() => {
    return {
      currencies: CURRENCIES,
      plans: PLANS
    };
  }, []);

  const calculatedEstimate = useMemo(() => {
    const config: CurrencyConfig = pricingMatrix.currencies[currency] || pricingMatrix.currencies.USD;
    const basePrice = 29;
    const extraVolume = Math.max(0, opsVolume - 10);
    // 29 base cost plus 40 cents per extra thousand operations
    const cost = (basePrice + (extraVolume * 0.40)) * config.multiplier * config.regionalTariffAdjustment;
    return billingCycle === 'annual' ? cost * 0.8 : cost;
  }, [opsVolume, currency, billingCycle, pricingMatrix]);

  const activeCurrencySymbol = useMemo(() => {
    return pricingMatrix.currencies[currency]?.symbol || '$';
  }, [currency, pricingMatrix]);

  // Compute live price based on matrix
  const getCalculatedPrice = (basePriceUSD: number, currencyCode: string, cycle: 'monthly' | 'annual') => {
    const config: CurrencyConfig = pricingMatrix.currencies[currencyCode] || pricingMatrix.currencies.USD;
    let computed = basePriceUSD * config.multiplier * config.regionalTariffAdjustment;
    
    if (cycle === 'annual') {
      computed = computed * 0.8; // 20% discount
    }
    
    return Math.round(computed);
  };

  return (
    <section 
      id="pricing" 
      className="py-24 bg-[#050816] relative overflow-hidden border-t border-white/5"
    >
      {/* Background ambient accents */}
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header section with Dynamic Controls */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/30 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#3B82F6]">No Lock-in Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-white mb-6">
            Predictable Scaling Plans
          </h2>
          <p className="text-lg text-[#CBD5E1] mb-10">
            Choose a tier optimized for your data throughput. Upgrade or downgrade any time 
            with immediate regional billing adjustments.
          </p>

          {/* Pricing Config Control Panel (Isolated state modifiers) */}
          <div className="flex flex-col sm:flex-row items-center gap-4 p-2 bg-[#111827]/60 border border-white/8 rounded-2xl shadow-xl">
            <BillingToggle billingCycle={billingCycle} onBillingCycleChange={setBillingCycle} />
            <div className="hidden sm:block w-[1px] h-6 bg-white/8" />
            <CurrencySwitcher currentCurrency={currency} onCurrencyChange={setCurrency} />
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pricingMatrix.plans.map((plan) => {
            const finalPrice = getCalculatedPrice(plan.basePriceUSD, currency, billingCycle);
            
            return (
              <div
                key={plan.id}
                id={`plan-card-${plan.id}`}
                className={`flex flex-col justify-between rounded-2xl relative transition-all duration-500 overflow-hidden ${
                  plan.popular
                    ? 'bg-gradient-to-b from-[#1E1B4B]/40 via-[#111827]/90 to-[#111827]/95 border-2 border-[#8B5CF6]/60 shadow-[0_0_40px_rgba(139,92,246,0.15)] hover:shadow-[0_0_55px_rgba(139,92,246,0.35)] hover:-translate-y-2 hover:scale-[1.04] scale-[1.03] z-10'
                    : 'bg-[#111827]/40 hover:bg-[#111827]/80 border border-white/8 hover:border-white/15 hover:-translate-y-1 hover:scale-[1.01] z-0 shadow-lg'
                }`}
              >
                {/* Visual Popular Accent Lights */}
                {plan.popular && (
                  <>
                    <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-primary-accent via-secondary-accent to-highlight animate-pulse" />
                    <span className="absolute top-4 right-4 text-[9px] font-mono font-bold tracking-widest uppercase px-3 py-1.5 rounded-full bg-gradient-to-r from-secondary-accent/20 via-highlight/10 to-secondary-accent/20 border border-secondary-accent/40 text-highlight animate-pulse shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                      ★ Most Popular
                    </span>
                  </>
                )}

                {/* Plan Metadata */}
                <div className="p-6 md:p-8 border-b border-white/5 relative z-10">
                  <h3 className="text-xl font-bold text-white mb-2 font-display">{plan.name}</h3>
                  <p className="text-xs text-secondary-text min-h-[40px] leading-relaxed mb-6">{plan.description}</p>
                  
                  {/* Dynamic Pricing Engine Values Display */}
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl md:text-5xl font-extrabold font-mono text-white tracking-tight">
                      {activeCurrencySymbol}<AnimatedCounter value={finalPrice} formatter={(val) => Math.round(val).toLocaleString()} />
                    </span>
                    <span className="text-sm font-medium text-gray-400">
                      /{billingCycle === 'monthly' ? 'mo' : 'mo'}
                    </span>
                  </div>
                  {billingCycle === 'annual' && (
                    <span className="text-[10px] font-semibold text-success font-mono block mt-2">
                      Billed yearly ({activeCurrencySymbol}{(finalPrice * 12).toLocaleString()}/yr)
                    </span>
                  )}
                </div>

                {/* Plan Features Checklist */}
                <div className="p-6 md:p-8 flex-grow space-y-4 relative z-10 bg-[#0F172A]/25">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-2">What's included</span>
                  <ul className="space-y-3.5">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-gray-300">
                        <Check className="w-4 h-4 text-highlight shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA Trigger */}
                <div className="p-6 md:p-8 border-t border-white/5 relative z-10">
                  <button
                    id={`pricing-cta-${plan.id}`}
                    className={`w-full py-3.5 px-4 rounded-full font-bold text-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      plan.popular
                        ? 'bg-[#3B82F6] text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:scale-[1.02]'
                        : 'bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:scale-[1.01]'
                    }`}
                  >
                    Select {plan.name}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-center text-[10px] text-gray-500 mt-3 font-mono">
                    Instant deployment. 14-day cancel window.
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Real-time Custom Operations Calculator */}
        <div className="mt-16 p-8 rounded-2xl glass-panel border border-white/8 bg-[#111827]/40 max-w-3xl mx-auto relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-accent/5 to-transparent pointer-events-none" />
          <h3 className="text-lg font-bold text-white mb-2 font-display flex items-center gap-2 relative z-10">
            <Sliders className="w-5 h-5 text-highlight group-hover:rotate-6 transition-transform duration-300" />
            Cognitive Operations Estimator
          </h3>
          <p className="text-xs text-gray-400 mb-6 relative z-10">
            Drag the slider below to live-estimate customized transaction and volume pipeline scaling.
          </p>
          
          <div className="space-y-6 relative z-10">
            <div>
              <div className="flex justify-between text-sm font-mono mb-2">
                <span className="text-gray-400">Estimated Monthly Operations</span>
                <span className="text-highlight font-bold">{(opsVolume * 10).toLocaleString()} ops</span>
              </div>
              <input 
                type="range" 
                min="10" 
                max="500" 
                value={opsVolume} 
                onChange={(e) => setOpsVolume(Number(e.target.value))}
                className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#3B82F6] focus:outline-none"
              />
              <div className="flex justify-between text-[10px] font-mono text-gray-500 mt-1">
                <span>100k ops</span>
                <span>2.5M ops</span>
                <span>5M ops</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-white/5 items-center">
              <div>
                <span className="text-[10px] font-mono text-gray-500 block mb-2 uppercase tracking-wider">Target Billing Index</span>
                <div className="flex gap-2">
                  {Object.keys(CURRENCIES).map((code) => (
                    <button
                      key={code}
                      onClick={() => setCurrency(code)}
                      className={`px-3 py-1.5 text-xs font-mono rounded-lg border transition-all cursor-pointer ${
                        currency === code 
                          ? 'bg-[#3B82F6]/25 border-[#3B82F6] text-white shadow-sm shadow-[#3B82F6]/20' 
                          : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
                      }`}
                    >
                      {code}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="text-left sm:text-right">
                <span className="text-[10px] font-mono text-gray-500 block mb-1 uppercase tracking-wider">Custom Estimated Total</span>
                <div className="text-3xl font-extrabold font-mono text-white tracking-tight">
                  {activeCurrencySymbol}<AnimatedCounter value={calculatedEstimate} formatter={(val) => Math.round(val).toLocaleString()} />
                  <span className="text-sm font-medium text-gray-400">/mo</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Micro Enterprise SLA Disclaimer */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between p-6 rounded-2xl glass-panel border border-white/5 gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-highlight">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-white">Need custom regulatory cloud isolation?</p>
              <p className="text-xs text-gray-400">We design bespoke models for HIPAA, GDPR, and localized sovereign datacenters.</p>
            </div>
          </div>
          <button className="px-5 py-2.5 text-xs font-bold text-white bg-white/5 hover:bg-white/10 border border-white/8 rounded-xl transition-all shrink-0 cursor-pointer">
            Contact Security Architect
          </button>
        </div>

      </div>
    </section>
  );
}
