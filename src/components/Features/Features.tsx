import { useState } from 'react';
import { 
  Zap, 
  BarChart3, 
  BrainCircuit, 
  Cpu, 
  Sliders, 
  RefreshCw, 
  ShieldCheck, 
  LineChart,
  Sparkles
} from 'lucide-react';
import BentoGrid from '../BentoGrid/BentoGrid';
import Accordion from '../Accordion/Accordion';

const IconMap: Record<string, any> = {
  Zap,
  BarChart3,
  BrainCircuit,
  Cpu,
  Sliders,
  RefreshCw,
  ShieldCheck,
  LineChart
};

export default function Features() {
  const [activeId, setActiveId] = useState<string>('ai-automation');

  return (
    <section 
      id="features" 
      className="py-24 bg-[#050816] relative overflow-hidden"
    >
      {/* Background ambient accents */}
      <div className="absolute top-1/4 left-1/3 w-[350px] h-[350px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/30 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#3B82F6]">Platform Overview</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-white mb-6">
            Bento Engine Suite
          </h2>
          <p className="text-lg text-[#CBD5E1]">
            Everything your team needs to ingest raw production datastores, transform values 
            with modern AI layers, and build low-latency custom interfaces.
          </p>
        </div>

        {/* Desktop View (Bento Grid) */}
        <div className="hidden md:block">
          <BentoGrid activeId={activeId} setActiveId={setActiveId} iconMap={IconMap} />
        </div>

        {/* Mobile View (Accordion) */}
        <div className="block md:hidden">
          <Accordion activeId={activeId} setActiveId={setActiveId} iconMap={IconMap} />
        </div>

      </div>
    </section>
  );
}
