import { Cpu, Github, Twitter, Linkedin, MessageSquare, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer 
      id="footer" 
      className="bg-[#050816] border-t border-white/8 relative overflow-hidden pt-16 pb-12"
    >
      {/* Background ambient light */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-indigo-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 md:gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="col-span-2 space-y-6">
            <button
              onClick={handleScrollToTop}
              className="flex items-center gap-2.5 text-white font-semibold text-lg tracking-tight group focus:outline-none focus:ring-2 focus:ring-primary-accent/40 rounded-lg p-1 text-left cursor-pointer"
              aria-label="NeuroFlow AI - Scroll to top"
            >
              <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-tr from-primary-accent to-secondary-accent overflow-hidden shadow">
                <Cpu className="w-4.5 h-4.5 text-white" />
              </div>
              <span className="font-display font-bold text-white group-hover:text-highlight transition-colors">
                NeuroFlow <span className="text-highlight">AI</span>
              </span>
            </button>
            <p className="text-xs text-gray-400 leading-relaxed max-w-xs font-normal">
              Advanced neural-orchestrated pipeline engines built to unify datastores, 
              synthesize cognitive anomalies, and command actions in real-time.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 rounded-lg bg-white/5 border border-white/8 text-gray-400 hover:text-white hover:border-white/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-accent/40"
                aria-label="GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 rounded-lg bg-white/5 border border-white/8 text-gray-400 hover:text-highlight hover:border-white/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-accent/40"
                aria-label="Twitter Profile"
              >
                <Twitter className="w-4 h-4 fill-current" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 rounded-lg bg-white/5 border border-white/8 text-gray-400 hover:text-highlight hover:border-white/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-accent/40"
                aria-label="LinkedIn Page"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://discord.com" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 rounded-lg bg-white/5 border border-white/8 text-gray-400 hover:text-secondary-accent hover:border-white/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-accent/40"
                aria-label="Discord Guild"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Product */}
          <div className="col-span-1 text-left">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white font-mono mb-4">Product</h3>
            <ul className="space-y-3 text-xs text-gray-400">
              <li><a href="#features" className="hover:text-white transition-colors duration-200">Pipeline Engine</a></li>
              <li><a href="#features" className="hover:text-white transition-colors duration-200">Predictive Suite</a></li>
              <li><a href="#features" className="hover:text-white transition-colors duration-200">Cognitive Insights</a></li>
              <li><a href="#features" className="hover:text-white transition-colors duration-200">No-Code Builder</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors duration-200">Pricing Matrix</a></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="col-span-1 text-left">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white font-mono mb-4">Resources</h3>
            <ul className="space-y-3 text-xs text-gray-400">
              <li><a href="#features" className="hover:text-white transition-colors duration-200">Documentation</a></li>
              <li><a href="#features" className="hover:text-white transition-colors duration-200">API Specifications</a></li>
              <li><a href="#features" className="hover:text-white transition-colors duration-200">Connector Ecosystem</a></li>
              <li><a href="#features" className="hover:text-white transition-colors duration-200">Guides & Tutorials</a></li>
              <li><a href="#features" className="hover:text-white transition-colors duration-200">System Status</a></li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div className="col-span-1 text-left">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white font-mono mb-4">Company</h3>
            <ul className="space-y-3 text-xs text-gray-400">
              <li><a href="#features" className="hover:text-white transition-colors duration-200">About Systems</a></li>
              <li><a href="#features" className="hover:text-white transition-colors duration-200">Engineering Blog</a></li>
              <li><a href="#features" className="hover:text-white transition-colors duration-200">Security & Trust</a></li>
              <li><a href="#features" className="hover:text-white transition-colors duration-200">Open Source Core</a></li>
              <li><a href="#features" className="hover:text-white transition-colors duration-200">Press Kit</a></li>
            </ul>
          </div>

          {/* Column 5: Compliance */}
          <div className="col-span-1 text-left">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white font-mono mb-4">Security</h3>
            <ul className="space-y-3 text-xs text-gray-400">
              <li><a href="#faq" className="hover:text-white transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors duration-200">Terms of Service</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors duration-200">SOC-2 Type II</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors duration-200">GDPR Compliance</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors duration-200">SLA Agreement</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright and Attribution details */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-gray-500">
          <div>
            © {currentYear} NeuroFlow AI, Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            Engineered with <Heart className="w-3 h-3 text-red-500 fill-red-500/20 animate-pulse" /> in Cloud Native Workspace
          </div>
        </div>

      </div>
    </footer>
  );
}
