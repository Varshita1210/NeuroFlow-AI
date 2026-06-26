import { useMemo } from 'react';

export default function TrustedCompanies() {
  const companies = useMemo(() => [
    {
      name: 'Google',
      colorClass: 'group-hover:text-[#4285F4]',
      svg: (
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current transition-colors duration-300" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
        </svg>
      )
    },
    {
      name: 'Microsoft',
      colorClass: 'group-hover:text-[#F25022]',
      svg: (
        <svg viewBox="0 0 23 23" className="h-6 w-6 fill-current transition-colors duration-300" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h11v11H0z"/>
          <path d="M12 0h11v11H12z" />
          <path d="M0 12h11v11H0z" />
          <path d="M12 12h11v11H12z" />
        </svg>
      )
    },
    {
      name: 'Amazon',
      colorClass: 'group-hover:text-[#FF9900]',
      svg: (
        <svg viewBox="0 0 24 24" className="h-6 w-10 fill-current transition-colors duration-300" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.4 12c0-2.6-1.8-4-4.5-4h-4v8H11c2.7 0 4.4-1.3 4.4-4zm-6 2.5v-5h1.5c1.7 0 2.8.7 2.8 2.5s-1.1 2.5-2.8 2.5H9.4zm12.3-5.2c-.4-.5-1.1-.7-2-.7h-2.5v7.2h1.2v-2.5h1.3c.9 0 1.6-.2 2-.7.4-.5.6-1.2.6-2s-.2-1.3-.6-1.83zm-1.8 3.5h-1.2v-2.2h1.2c.8 0 1.2.4 1.2 1.1 0 .7-.4 1.1-1.2 1.1zm-13.8 2.5c4.5 1.5 8.7 1.5 13.2 0 .5-.2.8.2.4.5-1.2.8-2.6 1.4-4.2 1.7-1.6.3-3.2.4-4.8.2-1.5-.2-2.9-.6-4.2-1.2-.5-.3-.1-.8.6-.7z"/>
        </svg>
      )
    },
    {
      name: 'OpenAI',
      colorClass: 'group-hover:text-[#10a37f]',
      svg: (
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current transition-colors duration-300" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.74 11.9a5.13 5.13 0 0 0-2.52-4.43l1-.57a1.28 1.28 0 0 0 .47-1.74 1.26 1.26 0 0 0-1.72-.47l-4.86 2.8a5.12 5.12 0 0 0-5.11-.08l-.94-.54a1.27 1.27 0 0 0-1.73.47 1.28 1.28 0 0 0 .47 1.74l4.81 2.78a5.08 5.08 0 0 0-1.23 4.5l-1 .57a1.28 1.28 0 0 0-.47 1.74 1.26 1.26 0 0 0 1.72.47l4.86-2.8a5.12 5.12 0 0 0 5.11.08l.94.54a1.27 1.27 0 0 0 1.73-.47 1.28 1.28 0 0 0-.47-1.74l-4.81-2.78a5.08 5.08 0 0 0 1.23-4.5l1-.57a1.28 1.28 0 0 0 .47-1.74 1.26 1.26 0 0 0-1.72-.47zm-14 3.73l-1.39.8a3 3 0 0 1-4.08-1.12 3 3 0 0 1 1.1-4.11l1.39-.8a5.13 5.13 0 0 0 .18 4.41l.8 1.39zm12.62-5.45l-.8-1.39a5.13 5.13 0 0 0-4.23-2.52l1.39-.8a3 3 0 0 1 4.08 1.12 3 3 0 0 1-1.1 4.11l-.8.64a5.13 5.13 0 0 0 .66-1.16zm-5.73-5.26c-.46-.8-1.3-1.3-2.23-1.3s-1.77.5-2.23 1.3l-1.39-.8a3 3 0 0 1 .83-4.17 3 3 0 0 1 4.19.85l.83 1.39zm-5.19 13.06l.8 1.39a5.13 5.13 0 0 0 4.23 2.52l-1.39.8a3 3 0 0 1-4.08-1.12 3 3 0 0 1 1.1-4.11l.8-.64a5.13 5.13 0 0 0-.66 1.16z"/>
        </svg>
      )
    },
    {
      name: 'Adobe',
      colorClass: 'group-hover:text-[#FA0F00]',
      svg: (
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current transition-colors duration-300" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.966 22l-3.375-7.733H6.06L13.966 22zM15.111 2h8.889V22L15.111 2zm-6.222 0H0v20L8.889 2z"/>
        </svg>
      )
    },
    {
      name: 'Spotify',
      colorClass: 'group-hover:text-[#1DB954]',
      svg: (
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current transition-colors duration-300" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.563.387-.857.207-2.377-1.454-5.37-1.783-8.893-1.02-.333.075-.665-.138-.74-.47-.075-.333.138-.665.47-.74 3.85-.88 7.15-.502 9.814 1.13.295.18.387.563.206.858zm1.224-2.723c-.226.367-.707.487-1.074.26-2.72-1.672-6.87-2.157-10.082-1.182-.413.125-.847-.107-.972-.52-.125-.413.107-.847.52-.972 3.67-1.114 8.24-.57 11.35 1.344.366.226.486.707.258 1.07zm.105-2.833C14.383 8.8 8.163 8.59 4.574 9.68a1.004 1.004 0 0 1-1.22-1.206c1.09-3.59 7.31-3.8 11.45-2.525.485.15.753.66.603 1.145-.15.484-.66.753-1.145.603z"/>
        </svg>
      )
    },
    {
      name: 'Netflix',
      colorClass: 'group-hover:text-[#E50914]',
      svg: (
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current transition-colors duration-300" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.633 21.036c-.198.058-.396.11-.595.155V2.809c.199.044.397.097.595.156v18.071zm12.734-.029V3.036c.198-.058.397-.11.595-.155v18.125c-.198-.045-.397-.097-.595-.156zm-1.89-18.04V20.81l-4.52-13.91-4.522 13.91V2.966l4.522 14.162 4.52-14.161z"/>
        </svg>
      )
    }
  ], []);

  return (
    <section 
      id="trusted" 
      className="py-14 border-y border-white/5 bg-[#0B1120]/50 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-radial-glow opacity-25 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-center text-xs font-mono uppercase tracking-widest text-gray-400 mb-8">
          Trusted by infrastructure leads at world-class engineering teams
        </h2>
        
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-16">
          {companies.map((company) => (
            <div 
              key={company.name} 
              className="flex items-center gap-2.5 group cursor-pointer"
              aria-label={`Trusted partner: ${company.name}`}
            >
              <div className={`text-gray-500 filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-out transform ${company.colorClass}`}>
                {company.svg}
              </div>
              <span className="text-sm font-semibold tracking-tight text-gray-500 group-hover:text-white transition-colors duration-300">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
