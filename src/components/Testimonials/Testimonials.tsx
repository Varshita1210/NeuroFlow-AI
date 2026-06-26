import { TESTIMONIALS } from '../../constants';
import { Star, Quote, Heart } from 'lucide-react';

export default function Testimonials() {
  return (
    <section 
      id="testimonials" 
      className="py-24 bg-[#0B1120] relative overflow-hidden border-t border-white/5"
    >
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/30 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#3B82F6]">Proven Reliability</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-white mb-6">
            Ingestion Verified
          </h2>
          <p className="text-lg text-[#CBD5E1]">
            Read stories from infrastructure leads and enterprise operators who replaced legacy 
            synchronization clusters with NeuroFlow AI nodes.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-8 rounded-2xl bg-white/[0.02] hover:bg-[#0f172a]/65 backdrop-blur-md border border-white/8 hover:border-[#8B5CF6]/50 transition-all duration-500 ease-out relative group flex flex-col justify-between hover:shadow-[0_20px_50px_rgba(139,92,246,0.12)] hover:-translate-y-2"
            >
              <div className="absolute top-6 right-8 text-gray-800 pointer-events-none">
                <Quote className="w-8 h-8 opacity-40 group-hover:text-[#8B5CF6]/20 group-hover:scale-110 transition-transform duration-300" />
              </div>

              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 mb-5" aria-label={`Rating: ${testimonial.rating} stars`}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400 shrink-0 group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: `${i * 75}ms` }} />
                  ))}
                </div>

                {/* Review */}
                <p className="text-sm md:text-base text-gray-300 leading-relaxed font-normal mb-8">
                  "{testimonial.review}"
                </p>
              </div>

              {/* User Identity Details */}
              <div className="flex items-center gap-3.5 border-t border-white/5 pt-5">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  referrerPolicy="no-referrer"
                  className="w-11 h-11 rounded-full object-cover border border-white/15 group-hover:border-[#8B5CF6] group-hover:scale-110 transition-all duration-300"
                />
                <div className="text-left">
                  <h4 className="text-sm font-bold text-white leading-tight">{testimonial.name}</h4>
                  <p className="text-xs text-gray-400 mt-0.5">{testimonial.designation}</p>
                  <span className="text-[10px] font-mono font-bold tracking-wider text-highlight uppercase mt-1 block">
                    {testimonial.company}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
