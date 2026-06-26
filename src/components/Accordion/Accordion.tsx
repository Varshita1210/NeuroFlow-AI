import { FEATURES } from '../../constants';
import { Zap, ChevronDown, ChevronUp } from 'lucide-react';

interface AccordionProps {
  activeId: string;
  setActiveId: (id: string) => void;
  iconMap: Record<string, any>;
}

export default function Accordion({ activeId, setActiveId, iconMap }: AccordionProps) {
  return (
    <div className="grid gap-4" id="mobile-accordion">
      {FEATURES.map((feature) => {
        const IconComponent = iconMap[feature.iconName] || Zap;
        const isActive = activeId === feature.id;

        return (
          <div 
            key={feature.id}
            id={`accordion-item-${feature.id}`}
            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
              isActive 
                ? 'bg-[#111827] border-secondary-accent/40 shadow-lg' 
                : 'bg-[#111827]/40 border-white/5'
            }`}
          >
            {/* Header Trigger */}
            <button
              id={`accordion-trigger-${feature.id}`}
              onClick={() => setActiveId(feature.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveId(feature.id);
                }
              }}
              className="w-full flex items-center justify-between p-5 text-left focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-2 focus:ring-offset-[#050816] rounded-2xl transition-all"
              aria-expanded={isActive}
              aria-controls={`accordion-content-${feature.id}`}
            >
              <div className="flex items-center gap-3.5">
                <div className={`p-2.5 rounded-xl ${
                  isActive ? 'bg-secondary-accent/25 text-highlight' : 'bg-white/5 text-gray-400'
                }`}>
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-1.5">
                    {feature.title}
                    {feature.badge && (
                      <span className="text-[8px] font-mono tracking-wider uppercase px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-400">
                        {feature.badge}
                      </span>
                    )}
                  </h3>
                </div>
              </div>
              <div>
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${
                  isActive ? 'transform rotate-180 text-highlight' : 'text-gray-500'
                }`} />
              </div>
            </button>

            {/* Expanded details */}
            <div 
              id={`accordion-content-${feature.id}`}
              aria-labelledby={`accordion-trigger-${feature.id}`}
              role="region"
              className={`grid transition-all duration-300 ease-in-out ${
                isActive ? 'grid-rows-[1fr] opacity-100 border-t border-white/5' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="p-5">
                  <p className="text-sm text-secondary-text leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                    <span className="text-xs font-mono text-gray-400 font-medium">Automatic layout active</span>
                    <span className="flex items-center gap-1.5 text-xs text-success font-medium">
                      <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                      No delays
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
