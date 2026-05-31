import React from 'react';

export default function CallToAction() {
  return (
    <section className="bg-black text-white py-36 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden relative flex flex-col items-center justify-end min-h-[580px]">
      {/* Premium SVG Spherical Grid Background - Screenshot 2026-05-31 094348.png এর হুবহু রুপ */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[170%] md:w-[120%] lg:w-[100%] max-w-[1200px] aspect-[2/1] pointer-events-none select-none z-0 overflow-hidden">
        {/* Deep Blue & Indigo Radial Glow Container */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(29,78,216,0.65)_0%,rgba(67,56,202,0.35)_25%,rgba(49,46,129,0.1)_50%,transparent_75%)] z-0" />

        {/* Pixel-Perfect SVG Grid Lines */}
        <svg
          viewBox="0 0 1000 500"
          className="w-full h-full opacity-40 mix-blend-screen relative z-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
           
            <linearGradient id="grid-fade-x" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#818cf8" stopOpacity="0" />
              <stop offset="20%" stopColor="#818cf8" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="80%" stopColor="#818cf8" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
            </linearGradient>
          </defs>

          
          <g stroke="url(#grid-fade-x)" strokeWidth="0.8" fill="none">
            {/* Concentric Arcs / Horizontal Curved Lines */}
            <path d="M 0,100 Q 500,180 1000,100" />
            <path d="M 0,160 Q 500,260 1000,160" />
            <path d="M 0,230 Q 500,350 1000,230" />
            <path d="M 0,310 Q 500,450 1000,310" />
            <path d="M 0,400 Q 500,560 1000,400" />

            {/* Vertical Perspective/Longitude Lines */}
            <path d="M 500,0 L 500,500" />
            <path d="M 500,0 Q 420,250 350,500" />
            <path d="M 500,0 Q 340,250 200,500" />
            <path d="M 500,0 Q 260,250 50,500" />

            <path d="M 500,0 Q 580,250 650,500" />
            <path d="M 500,0 Q 660,250 800,500" />
            <path d="M 500,0 Q 740,250 950,500" />
          </g>
        </svg>

        {/* Smooth Bottom Mask to fade seamlessly into dark sections */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 text-center max-w-3xl mx-auto flex flex-col items-center">
        {/* Main Heading with tracking and weight adjustment */}
        <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-normal tracking-tight text-white mb-6 leading-[1.12] font-sans">
          Your next role is <br /> already looking for you
        </h2>

        {/* Subtitle / Description */}
        <p className="text-zinc-400 text-base sm:text-lg font-light tracking-wide max-w-xl mx-auto mb-12 leading-relaxed">
          Build a profile in three minutes. The matches start arriving tomorrow
          morning.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {/* Create Account Button (White Premium) */}
          <button className="w-full sm:w-auto bg-white text-black text-sm font-medium px-8 py-3.5 rounded-xl hover:bg-zinc-200 active:scale-95 transition-all duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.15)]">
            Create a free account
          </button>

          {/* View Pricing Button (Glassmorphism Dark) */}
          <button className="w-full sm:w-auto bg-zinc-900/40 text-zinc-300 text-sm font-medium px-8 py-3.5 rounded-xl border border-zinc-800/80 hover:bg-zinc-900 hover:text-white hover:border-zinc-600 active:scale-95 transition-all duration-300 backdrop-blur-md">
            View pricing
          </button>
        </div>
      </div>
    </section>
  );
}
