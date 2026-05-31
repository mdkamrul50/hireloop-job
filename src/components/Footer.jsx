import React from 'react';
import { FaFacebookF, FaPinterestP, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12 px-4 sm:px-6 lg:px-8 font-sans border-t border-zinc-900/60 relative overflow-hidden">
      {/* Subtle Top Mesh Glow to blend with previous section curves */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Main Links Container Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 gap-x-8 pb-16">
          {/* Left Side: Brand Logo and Description */}
          <div className="md:col-span-5 lg:col-span-6 flex flex-col space-y-5">
            {/* Logo area matched with 'hireloop' text concept */}
            <div className="flex items-center gap-1 select-none">
              <span className="text-2xl font-bold tracking-tight text-blue-500">
                hire
              </span>
              {/* Custom Loop style SVG/Graphic Indicator instead of standard icon */}
              <div className="relative flex items-center justify-center w-7 h-7 mx-0.5">
                <div className="absolute inset-0 rounded-full border-2 border-blue-400 opacity-80 animate-pulse" />
                <div className="absolute w-4 h-4 rounded-full border-2 border-orange-500 transform rotate-45 translate-x-1" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-orange-500 -ml-1">
                oop
              </span>
            </div>

            {/* Description Text */}
            <p className="text-zinc-500 text-sm font-light leading-relaxed max-w-sm">
              The AI-native career platform. Built for people who take their
              work seriously.
            </p>
          </div>

          {/* Right Side: Columns Links */}
          <div className="md:col-span-7 lg:col-span-6 grid grid-cols-3 gap-x-4">
            {/* Product Column */}
            <div>
              <h4 className="text-[15px] font-medium text-indigo-400 mb-6 tracking-wide select-none">
                Product
              </h4>
              <ul className="space-y-4">
                {['Job discovery', 'Worker AI', 'Companies', 'Salary data'].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-zinc-500 text-[13px] font-light hover:text-zinc-200 transition-colors duration-200 relative group block py-0.5"
                      >
                        {item}
                        <span className="absolute bottom-0 left-0 w-0 h-px bg-zinc-600 transition-all duration-300 group-hover:w-12" />
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Navigations Column */}
            <div>
              <h4 className="text-[15px] font-medium text-indigo-400 mb-6 tracking-wide select-none">
                Navigations
              </h4>
              <ul className="space-y-4">
                {['Help center', 'Career library', 'Contact'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-zinc-500 text-[13px] font-light hover:text-zinc-200 transition-colors duration-200 relative group block py-0.5"
                    >
                      {item}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-zinc-600 transition-all duration-300 group-hover:w-12" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h4 className="text-[15px] font-medium text-indigo-400 mb-6 tracking-wide select-none">
                Resources
              </h4>
              <ul className="space-y-4">
                {['Brand Guideline', 'Newsroom'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-zinc-500 text-[13px] font-light hover:text-zinc-200 transition-colors duration-200 relative group block py-0.5"
                    >
                      {item}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-zinc-600 transition-all duration-300 group-hover:w-12" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer Area (Divider, Socials & Credits) */}
        <div className="border-t border-zinc-900/80 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social Icons with Premium Glass hover styles */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="w-10 h-10 bg-zinc-900/40 border border-zinc-800/60 rounded-xl flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800/80 hover:border-zinc-700 hover:-translate-y-0.5 transition-all duration-300"
            >
              <FaFacebookF className="text-sm" />
            </a>
            <a
              href="#"
              aria-label="Pinterest"
              className="w-10 h-10 bg-zinc-900/40 border border-zinc-800/60 rounded-xl flex items-center justify-center text-zinc-400 hover:text-white hover:bg-indigo-950/40 hover:border-indigo-800 transition-all duration-300"
            >
              <FaPinterestP className="text-sm" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="w-10 h-10 bg-zinc-900/40 border border-zinc-800/60 rounded-xl flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800/80 hover:border-zinc-700 hover:-translate-y-0.5 transition-all duration-300"
            >
              <FaLinkedinIn className="text-sm" />
            </a>
          </div>

          {/* Subtext info: Copyright & Policy Links */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-[12px] text-zinc-600 tracking-wide font-light">
            <p className="select-none">Copyright 2024 — Programming Hero</p>
            <div className="hidden sm:block w-px h-3 bg-zinc-800" />
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-zinc-400 transition-colors">
                Terms & Policy
              </a>
              <a href="#" className="hover:text-zinc-400 transition-colors">
                Privacy Guideline
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
