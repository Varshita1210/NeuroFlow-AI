import { CURRENCIES } from '../../constants';

interface CurrencySwitcherProps {
  currentCurrency: string;
  onCurrencyChange: (code: string) => void;
}

export default function CurrencySwitcher({ currentCurrency, onCurrencyChange }: CurrencySwitcherProps) {
  const codes = Object.keys(CURRENCIES);
  const activeIndex = codes.indexOf(currentCurrency);

  return (
    <div className="flex items-center p-1.5 rounded-2xl bg-white/[0.02] border border-white/5 relative shadow-inner">
      {/* Sliding background indicator pill */}
      <div 
        className="absolute top-1.5 bottom-1.5 left-1.5 bg-gradient-to-r from-slate-900 to-slate-800 border border-white/10 rounded-xl shadow-lg transition-all duration-300 ease-out pointer-events-none"
        style={{
          width: 'calc(33.333% - 3px)',
          transform: `translateX(calc(${activeIndex * 100}%))`
        }}
      />
      
      {Object.values(CURRENCIES).map((curr) => (
        <button
          key={curr.code}
          id={`currency-btn-${curr.code.toLowerCase()}`}
          onClick={() => onCurrencyChange(curr.code)}
          className={`relative z-10 w-24 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors duration-300 cursor-pointer focus:outline-none ${
            currentCurrency === curr.code
              ? 'text-highlight'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          {curr.code} ({curr.symbol})
        </button>
      ))}
    </div>
  );
}
