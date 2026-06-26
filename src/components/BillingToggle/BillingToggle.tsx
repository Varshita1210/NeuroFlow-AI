interface BillingToggleProps {
  billingCycle: 'monthly' | 'annual';
  onBillingCycleChange: (cycle: 'monthly' | 'annual') => void;
}

export default function BillingToggle({ billingCycle, onBillingCycleChange }: BillingToggleProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4">
      <div className="flex items-center p-1.5 rounded-2xl bg-white/[0.02] border border-white/5 shadow-inner relative max-w-xs">
        {/* Sliding background indicator pill */}
        <div 
          className="absolute top-1.5 bottom-1.5 left-1.5 bg-gradient-to-r from-slate-900 to-slate-800 border border-white/10 rounded-xl shadow-lg transition-all duration-300 ease-out pointer-events-none"
          style={{
            width: 'calc(50% - 3px)',
            transform: billingCycle === 'annual' ? 'translateX(100%)' : 'translateX(0%)'
          }}
        />
        
        <button
          id="billing-btn-monthly"
          onClick={() => onBillingCycleChange('monthly')}
          className={`relative z-10 w-28 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors duration-300 cursor-pointer focus:outline-none ${
            billingCycle === 'monthly'
              ? 'text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Monthly
        </button>
        
        <button
          id="billing-btn-annual"
          onClick={() => onBillingCycleChange('annual')}
          className={`relative z-10 w-28 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors duration-300 cursor-pointer focus:outline-none ${
            billingCycle === 'annual'
              ? 'text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Annual
        </button>
      </div>
      
      {/* Save Badge */}
      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-widest uppercase px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 animate-pulse">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
        Save 20%
      </span>
    </div>
  );
}
