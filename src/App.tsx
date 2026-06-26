import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import TrustedCompanies from './components/TrustedCompanies/TrustedCompanies';
import Features from './components/Features/Features';
import DashboardPreview from './components/DashboardPreview/DashboardPreview';
import Pricing from './components/Pricing/Pricing';
import Testimonials from './components/Testimonials/Testimonials';
import FAQ from './components/FAQ/FAQ';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';

export default function App() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 550);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-primary-bg text-white antialiased selection:bg-highlight/30 selection:text-white relative overflow-hidden">
      {/* Premium Loader Overlay */}
      <div 
        className={`fixed inset-0 bg-[#02050E] z-50 flex flex-col items-center justify-center transition-all duration-500 ease-out ${
          isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-6 max-w-xs px-6">
          {/* Futuristic glowing spin ring */}
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 rounded-full border-2 border-white/5" />
            <div className="absolute inset-0 rounded-full border-2 border-t-highlight border-r-secondary-accent animate-spin" />
            <div className="absolute inset-2 rounded-full bg-primary-bg flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-highlight animate-pulse" />
            </div>
          </div>
          
          <div className="text-center space-y-2">
            <h3 className="text-sm font-display font-bold uppercase tracking-widest text-white animate-pulse">
              NeuroFlow AI
            </h3>
            <p className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">
              Initializing AI Engine...
            </p>
          </div>
          
          {/* Subtle loading bar */}
          <div className="w-40 h-[1.5px] bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-primary-accent to-highlight animate-loading-bar" style={{ width: '100%' }} />
          </div>
        </div>
      </div>

      {/* Subtle radial mouse glow */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 opacity-60"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.05), transparent 80%)`
        }}
      />

      {/* Aurora Background Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#3B82F6] opacity-[0.15] blur-[120px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#8B5CF6] opacity-[0.12] blur-[100px] rounded-full pointer-events-none z-0"></div>

      {/* Sticky navigation layout overlay */}
      <Navbar />

      <main>
        {/* Dynamic Interactive Hero with Canvas neural particles */}
        <Hero />

        {/* Gray trusted partners scroll */}
        <TrustedCompanies />

        {/* Modular Bento grid suite + synced Mobile Accordion */}
        <Features />

        {/* Live operational logs, visual charts and smart NLP summarizer */}
        <DashboardPreview />

        {/* Pricing calculator under custom regional index parameters */}
        <Pricing />

        {/* Client reviews layout */}
        <Testimonials />

        {/* Keyboard-navigable accessible accordion */}
        <FAQ />

        {/* Bottom aurora call-to-action */}
        <CTA />
      </main>

      {/* Global corporate column navigation */}
      <Footer />
    </div>
  );
}
