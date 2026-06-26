import { useState, KeyboardEvent } from 'react';
import { FAQS } from '../../constants';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq1');

  const toggleFaq = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  const handleKeyDown = (e: KeyboardEvent, id: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleFaq(id);
    }
  };

  return (
    <section 
      id="faq" 
      className="py-24 bg-[#050816] relative overflow-hidden border-t border-white/5"
    >
      {/* Background soft glowing orb */}
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-cyan-600/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/30 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#3B82F6]">Resource Guide</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-white mb-6">
            Frequently Answered
          </h2>
          <p className="text-base sm:text-lg text-[#CBD5E1]">
            Everything you need to know about setting up real-time clusters, handling billing, 
            or managing secure row-level credentials.
          </p>
        </div>

        {/* FAQs List */}
        <div className="space-y-4">
          {FAQS.map((item) => {
            const isOpen = openId === item.id;
            
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'bg-[#111827] border-secondary-accent/40 shadow-xl' 
                    : 'bg-[#111827]/30 border-white/8 hover:border-white/15'
                }`}
              >
                {/* Accessible FAQ Button Trigger */}
                <button
                  id={`faq-trigger-${item.id}`}
                  onClick={() => toggleFaq(item.id)}
                  onKeyDown={(e) => handleKeyDown(e, item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${item.id}`}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-2 focus:ring-offset-[#050816] rounded-2xl transition-all"
                  role="button"
                >
                  <span className="text-base md:text-lg font-bold text-white pr-4">
                    {item.question}
                  </span>
                  <div className={`p-1.5 rounded-lg border border-white/8 transition-colors duration-300 ${
                    isOpen ? 'bg-secondary-accent/20 text-highlight border-secondary-accent/40' : 'bg-white/5 text-gray-500'
                  }`}>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${
                      isOpen ? 'transform rotate-180 text-highlight' : 'text-gray-500'
                    }`} />
                  </div>
                </button>

                {/* FAQ Content Section (smooth height transition) */}
                <div
                  id={`faq-content-${item.id}`}
                  aria-labelledby={`faq-trigger-${item.id}`}
                  role="region"
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen 
                      ? 'grid-rows-[1fr] opacity-100 border-t border-white/5' 
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="p-6">
                      <p className="text-sm md:text-base text-gray-300 leading-relaxed font-normal">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
