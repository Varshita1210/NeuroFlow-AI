import { FEATURES } from '../../constants';
import { Zap } from 'lucide-react';

interface BentoGridProps {
  activeId: string;
  setActiveId: (id: string) => void;
  iconMap: Record<string, any>;
}

export default function BentoGrid({ activeId, setActiveId, iconMap }: BentoGridProps) {
  return (
    <div className="grid grid-cols-3 gap-6 auto-rows-[220px]" id="desktop-bento-grid">
      {FEATURES.map((feature) => {
        const IconComponent = iconMap[feature.iconName] || Zap;
        const isActive = activeId === feature.id;
        
        let gridSpan = "col-span-1";
        if (feature.id === 'ai-automation' || feature.id === 'api-integrations' || feature.id === 'no-code-builder' || feature.id === 'real-time-monitoring') {
          gridSpan = "col-span-2";
        }

        return (
          <button
            key={feature.id}
            id={`bento-btn-${feature.id}`}
            onClick={() => setActiveId(feature.id)}
            className={`group text-left p-8 rounded-2xl transition-all duration-500 ease-out relative flex flex-col justify-between overflow-hidden cursor-pointer ${gridSpan} ${
              isActive 
                ? 'bg-gradient-to-br from-[#111827] via-[#111827] to-[#1E1B4B]/45 border-[#3B82F6] shadow-[0_0_35px_rgba(59,130,246,0.22)] scale-[1.02] z-10' 
                : 'bg-[#111827]/40 hover:bg-[#111827]/80 border-white/8 hover:border-[#3B82F6]/60 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(59,130,246,0.15)] z-0'
            } border`}
            aria-selected={isActive}
            role="tab"
          >
            {/* Light sweep animation */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

            {/* Glowing background */}
            <div className={`absolute inset-0 bg-gradient-to-tr ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`} />
            {isActive && (
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-accent/15 rounded-full blur-2xl pointer-events-none" />
            )}

            {/* Top Row */}
            <div className="flex items-start justify-between relative z-10 w-full">
              <div className={`p-3 rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 ${
                isActive ? 'bg-secondary-accent/20 text-highlight' : 'bg-white/5 text-gray-400 group-hover:text-white group-hover:bg-white/10'
              }`}>
                <IconComponent className="w-6 h-6" />
              </div>
              {feature.badge && (
                <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-secondary-text">
                  {feature.badge}
                </span>
              )}
            </div>

            {/* Text details */}
            <div className="relative z-10 mt-6">
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-highlight transition-colors flex items-center gap-2">
                {feature.title}
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-highlight animate-ping" />}
              </h3>
              <p className="text-sm text-secondary-text leading-relaxed line-clamp-2 group-hover:text-gray-300 transition-colors">
                {feature.description}
              </p>
            </div>
          </button>
        );
      })}
    </div>
  );
}
