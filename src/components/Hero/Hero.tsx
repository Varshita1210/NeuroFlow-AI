import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Play, Database, Activity, Cpu, Sparkles } from 'lucide-react';
import AnimatedCounter from '../AnimatedCounter/AnimatedCounter';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [stats, setStats] = useState({ opsCount: 8492041, activeNodes: 48, latency: 12.4 });

  // Live simulation for stats
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        opsCount: prev.opsCount + Math.floor(Math.random() * 8) + 2,
        activeNodes: Math.min(128, Math.max(12, prev.activeNodes + Math.floor(Math.random() * 3) - 1)),
        latency: parseFloat((11.2 + Math.random() * 2.1).toFixed(1))
      }));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  // ResizeObserver for responsive canvas sizing
  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      if (!entries || entries.length === 0) return;
      const { width, height } = entries[0].contentRect;
      
      // Debounce slightly by updating dimensions
      setDimensions({ width, height: Math.max(height, 500) });
    });

    resizeObserver.observe(containerRef.current);
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  // HTML5 Neural Network interactive canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || dimensions.width === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    const nodes: { x: number; y: number; vx: number; vy: number; radius: number; color: string }[] = [];
    const nodeCount = Math.min(65, Math.floor(dimensions.width / 18));
    const maxDistance = 120;
    
    // Create random floating nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2.5 + 1,
        color: Math.random() > 0.4 ? '#3B82F6' : '#8B5CF6'
      });
    }

    // Track cursor
    let cursor = { x: -1000, y: -1000 };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      cursor.x = e.clientX - rect.left;
      cursor.y = e.clientY - rect.top;
    };
    const handleMouseLeave = () => {
      cursor = { x: -1000, y: -1000 };
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      // Draw subtle background radial light
      const bgGradient = ctx.createRadialGradient(
        dimensions.width / 2, dimensions.height / 2, 50,
        dimensions.width / 2, dimensions.height / 2, dimensions.width * 0.6
      );
      bgGradient.addColorStop(0, 'rgba(11, 17, 32, 0.5)');
      bgGradient.addColorStop(1, 'rgba(5, 8, 22, 0)');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, dimensions.width, dimensions.height);

      // Move & draw nodes
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce boundaries
        if (node.x < 0 || node.x > dimensions.width) node.vx *= -1;
        if (node.y < 0 || node.y > dimensions.height) node.vy *= -1;

        // Draw connections to cursor
        if (cursor.x > 0) {
          const dx = node.x - cursor.x;
          const dy = node.y - cursor.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(cursor.x, cursor.y);
            ctx.strokeStyle = `rgba(6, 182, 212, ${0.25 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Draw node circles
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();
      });

      // Draw connections between nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const n1 = nodes[i];
          const n2 = nodes[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            const alpha = 0.15 * (1 - dist / maxDistance);
            ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Cursor accent glowing particle
      if (cursor.x > 0) {
        ctx.beginPath();
        ctx.arc(cursor.x, cursor.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#06B6D4';
        ctx.shadowColor = '#06B6D4';
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [dimensions]);

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
      id="hero"
      className="relative min-h-screen pt-32 pb-20 flex flex-col items-center justify-center overflow-hidden bg-[#050816] cyber-grid"
    >
      {/* Aurora Ambient Orbs */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-primary-accent/15 to-secondary-accent/20 blur-[130px] animate-aurora pointer-events-none z-0" />
      <div className="absolute bottom-10 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-highlight/15 to-secondary-accent/15 blur-[150px] animate-aurora-reverse pointer-events-none z-0" />

      {/* Tiny Floating Particles */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[20%] left-[15%] w-1.5 h-1.5 rounded-full bg-[#3B82F6] opacity-40 animate-float-p1" />
        <div className="absolute top-[60%] left-[8%] w-2 h-2 rounded-full bg-[#8B5CF6] opacity-30 animate-float-p2" />
        <div className="absolute top-[35%] right-[12%] w-1.5 h-1.5 rounded-full bg-[#06B6D4] opacity-40 animate-float-p3" />
        <div className="absolute top-[75%] right-[20%] w-2 h-2 rounded-full bg-[#3B82F6] opacity-25 animate-float-p1" />
      </div>

      {/* Interactive Neural Canvas Background */}
      <div 
        ref={containerRef} 
        className="absolute inset-0 w-full h-full opacity-45 pointer-events-auto z-0"
      >
        <canvas ref={canvasRef} className="block w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        {/* Sparkle Badge */}
        <div 
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/30 hover:border-[#3B82F6]/60 transition-all duration-300 mb-8 animate-float-slow cursor-pointer w-fit"
          onClick={() => handleScrollTo('features')}
        >
          <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse"></span>
          <span className="text-xs font-bold text-[#3B82F6] uppercase tracking-wider">
            v2.4 Now Enterprise Ready
          </span>
          <ArrowRight className="w-3.5 h-3.5 text-[#3B82F6]/75" />
        </div>

        {/* Hero Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight text-white mb-6 max-w-5xl leading-[1.05]">
          <span className="bg-gradient-to-b from-white via-white to-gray-400 bg-clip-text text-transparent">
            Automate.
          </span>{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#06B6D4]">
            Analyze.
          </span>
          <br />
          <span className="bg-gradient-to-r from-[#3B82F6] via-secondary-accent to-[#06B6D4] bg-clip-text text-transparent">
            Accelerate.
          </span>
        </h1>

        {/* Hero Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-[#CBD5E1] max-w-3xl mb-10 leading-relaxed font-normal">
          NeuroFlow AI is the premier enterprise intelligence network. Intelligently connect 
          your existing data endpoints, automate high-volume operations, and execute self-healing 
          workflows in under 40 milliseconds.
        </p>

        {/* CTA Actions */}
        <div className="flex justify-center mb-16 w-full relative z-10">
          <button
            onClick={() => handleScrollTo('pricing')}
            className="relative inline-flex items-center justify-center px-10 py-4.5 text-base font-bold text-white bg-[#3B82F6] rounded-full shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:shadow-[0_0_40px_rgba(59,130,246,0.7)] hover:scale-[1.04] active:scale-[0.97] transition-all duration-300 group cursor-pointer overflow-hidden border border-white/15 animate-sweep-hover"
          >
            {/* Gloss sweep effect */}
            <span className="sweep-effect absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-110%] pointer-events-none" />
            <span className="relative z-10 flex items-center gap-2.5">
              Start Free Trial
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
            </span>
          </button>
        </div>

        {/* Live Performance Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 max-w-4xl w-full py-8 px-6 rounded-2xl glass-panel border border-white/5 shadow-2xl relative">
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none rounded-2xl" />
          
          <div className="flex flex-col items-center justify-center text-center">
            <div className="flex items-center gap-2 mb-1.5">
              <Database className="w-4 h-4 text-primary-accent" />
              <span className="text-xs uppercase tracking-widest text-gray-400 font-mono">Automated Actions</span>
            </div>
            <span className="text-2xl sm:text-3xl font-bold text-white font-mono tracking-tight">
              <AnimatedCounter value={stats.opsCount} />
            </span>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <div className="flex items-center gap-2 mb-1.5">
              <Cpu className="w-4 h-4 text-secondary-accent" />
              <span className="text-xs uppercase tracking-widest text-gray-400 font-mono">Nodes Connected</span>
            </div>
            <span className="text-2xl sm:text-3xl font-bold text-white font-mono tracking-tight">
              <AnimatedCounter value={stats.activeNodes} />
            </span>
          </div>

          <div className="col-span-2 md:col-span-1 flex flex-col items-center justify-center text-center">
            <div className="flex items-center gap-2 mb-1.5">
              <Activity className="w-4 h-4 text-highlight animate-pulse" />
              <span className="text-xs uppercase tracking-widest text-gray-400 font-mono">Avg Latency</span>
            </div>
            <span className="text-2xl sm:text-3xl font-bold text-highlight font-mono tracking-tight">
              <AnimatedCounter value={stats.latency} formatter={(val) => val.toFixed(1)} />ms
            </span>
          </div>
        </div>

        {/* Micro Scroll Indicator */}
        <button
          onClick={() => handleScrollTo('trusted')}
          className="mt-16 flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 group focus:outline-none"
          aria-label="Scroll to trusted companies"
        >
          <span className="text-xs font-mono uppercase tracking-widest">Explore Systems</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/10 flex justify-center p-1.5 group-hover:border-highlight/50 transition-colors">
            <div className="w-1.5 h-1.5 rounded-full bg-highlight animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
}
