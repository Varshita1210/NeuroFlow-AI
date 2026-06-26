import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Cpu } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = ['hero', 'features', 'dashboard', 'pricing', 'testimonials', 'faq'];
    
    const handleScrollActive = () => {
      const scrollPosition = window.scrollY + 150; // offset
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollActive);
    handleScrollActive();
    return () => window.removeEventListener('scroll', handleScrollActive);
  }, []);

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#030712]/80 backdrop-blur-xl border-b border-white/8 py-2.5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2.5 text-white font-semibold text-lg tracking-tight group focus:outline-none focus:ring-2 focus:ring-primary-accent/40 rounded-lg p-1"
          aria-label="NeuroFlow AI - Home"
        >
          <div className="relative w-9 h-9 flex items-center justify-center rounded-xl bg-gradient-to-tr from-primary-accent via-secondary-accent to-highlight overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]">
            <Cpu className="w-5 h-5 text-white relative z-10 transition-transform duration-500 group-hover:rotate-12" />
            <div className="absolute inset-0 bg-gradient-to-bl from-secondary-accent to-highlight opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <span className="font-display font-bold tracking-normal bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent group-hover:text-white transition-colors">
            NeuroFlow <span className="text-highlight">AI</span>
          </span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2 bg-white/[0.02] border border-white/5 px-2 py-1.5 rounded-full backdrop-blur-md">
          <button 
            onClick={() => handleScrollTo('features')} 
            className={`text-xs font-semibold tracking-wide uppercase transition-all duration-300 cursor-pointer px-4 py-1.5 rounded-full ${
              activeSection === 'features' 
                ? 'text-white bg-[#3B82F6]/20 border border-[#3B82F6]/40 shadow-[0_0_15px_rgba(59,130,246,0.25)]' 
                : 'text-gray-400 hover:text-white border border-transparent hover:bg-white/5'
            }`}
          >
            Features
          </button>
          <button 
            onClick={() => handleScrollTo('dashboard')} 
            className={`text-xs font-semibold tracking-wide uppercase transition-all duration-300 cursor-pointer px-4 py-1.5 rounded-full ${
              activeSection === 'dashboard' 
                ? 'text-white bg-[#3B82F6]/20 border border-[#3B82F6]/40 shadow-[0_0_15px_rgba(59,130,246,0.25)]' 
                : 'text-gray-400 hover:text-white border border-transparent hover:bg-white/5'
            }`}
          >
            Dashboard
          </button>
          <button 
            onClick={() => handleScrollTo('pricing')} 
            className={`text-xs font-semibold tracking-wide uppercase transition-all duration-300 cursor-pointer px-4 py-1.5 rounded-full ${
              activeSection === 'pricing' 
                ? 'text-white bg-[#3B82F6]/20 border border-[#3B82F6]/40 shadow-[0_0_15px_rgba(59,130,246,0.25)]' 
                : 'text-gray-400 hover:text-white border border-transparent hover:bg-white/5'
            }`}
          >
            Pricing
          </button>
          <button 
            onClick={() => handleScrollTo('testimonials')} 
            className={`text-xs font-semibold tracking-wide uppercase transition-all duration-300 cursor-pointer px-4 py-1.5 rounded-full ${
              activeSection === 'testimonials' 
                ? 'text-white bg-[#3B82F6]/20 border border-[#3B82F6]/40 shadow-[0_0_15px_rgba(59,130,246,0.25)]' 
                : 'text-gray-400 hover:text-white border border-transparent hover:bg-white/5'
            }`}
          >
            Testimonials
          </button>
          <button 
            onClick={() => handleScrollTo('faq')} 
            className={`text-xs font-semibold tracking-wide uppercase transition-all duration-300 cursor-pointer px-4 py-1.5 rounded-full ${
              activeSection === 'faq' 
                ? 'text-white bg-[#3B82F6]/20 border border-[#3B82F6]/40 shadow-[0_0_15px_rgba(59,130,246,0.25)]' 
                : 'text-gray-400 hover:text-white border border-transparent hover:bg-white/5'
            }`}
          >
            FAQ
          </button>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => handleScrollTo('pricing')}
            className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white rounded-full shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.55)] hover:scale-[1.03] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/50 cursor-pointer flex items-center gap-1.5 group"
          >
            Start Free Trial
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white hover:text-secondary-text focus:outline-none p-1.5 rounded-lg border border-white/5 bg-white/5"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        id="mobile-menu"
        className={`md:hidden absolute top-full left-0 right-0 bg-primary-bg/95 backdrop-blur-xl border-b border-white/8 transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[380px] py-6 opacity-100' : 'max-h-0 py-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-5 px-6">
          <button
            onClick={() => handleScrollTo('features')}
            className="text-left text-base font-medium text-secondary-text hover:text-white py-1 transition-colors"
          >
            Features
          </button>
          <button
            onClick={() => handleScrollTo('dashboard')}
            className="text-left text-base font-medium text-secondary-text hover:text-white py-1 transition-colors"
          >
            Dashboard
          </button>
          <button
            onClick={() => handleScrollTo('pricing')}
            className="text-left text-base font-medium text-secondary-text hover:text-white py-1 transition-colors"
          >
            Pricing
          </button>
          <button
            onClick={() => handleScrollTo('testimonials')}
            className="text-left text-base font-medium text-secondary-text hover:text-white py-1 transition-colors"
          >
            Testimonials
          </button>
          <button
            onClick={() => handleScrollTo('faq')}
            className="text-left text-base font-medium text-secondary-text hover:text-white py-1 transition-colors"
          >
            FAQ
          </button>
          <div className="h-[1px] bg-white/8 my-1" />
          <div className="flex items-center">
            <button
              onClick={() => handleScrollTo('pricing')}
              className="w-full text-center py-2.5 text-sm font-semibold text-white bg-[#3B82F6] rounded-full shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all"
            >
              Start Free
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
