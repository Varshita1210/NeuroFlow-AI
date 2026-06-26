import { ArrowRight, HelpCircle, Mail, Sparkles } from 'lucide-react';

export default function CTA() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="cta" 
      className="py-24 bg-[#050816] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Core Container with full gradient mesh and aurora glows */}
        <div className="relative rounded-3xl p-8 md:p-16 text-center border border-white/10 bg-gradient-to-tr from-[#1E1B4B]/40 via-[#0B1120] to-[#0891B2]/10 overflow-hidden shadow-2xl">
          
          {/* Internal ambient backglows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#8B5CF6]/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#06B6D4]/15 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            {/* Sparkle badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/30 mb-8 animate-float-slow">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse"></span>
              <span className="text-xs font-mono uppercase tracking-widest text-[#3B82F6]">Scale and Deploy Instantly</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
              Ready to automate your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#06B6D4]">
                production datastores?
              </span>
            </h2>

            {/* Supporting text */}
            <p className="text-base sm:text-lg text-[#CBD5E1] max-w-2xl mx-auto mb-10 leading-relaxed">
              Join thousands of engineering teams and platform leads who rely on NeuroFlow AI 
              to stream operations, generate cognitive summaries, and triggers actions live.
            </p>

            {/* Action Buttons */}
            <div className="flex items-center justify-center">
              <button
                onClick={() => handleScrollTo('pricing')}
                className="w-full sm:w-auto relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-[#3B82F6] rounded-full shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] hover:scale-[1.02] transition-all duration-300 group cursor-pointer"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
            </div>

            {/* Footnote */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 text-xs text-gray-500 font-mono">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-success" />
                No credit card required
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-highlight" />
                Cancel or scale any time
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-accent" />
                SOC-2 Type II Certified
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
