'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {
      name: 'Browse Jobs',
      href: '/jobs',
    },
    {
      name: 'Companies',
      href: '/companies',
    },
    {
      name: 'Pricing',
      href: '/pricing',
    },
  ];

  return (
    <header className="w-full px-4 py-5">
      <div className="mx-auto max-w-7xl">
        <nav className="flex h-16 items-center justify-between rounded-2xl border border-white/10 bg-[#111827]/90 px-5 md:px-8 backdrop-blur-xl shadow-lg">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-sky-500">hire</span>
            <span className="text-2xl font-bold text-orange-500">loop</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative text-sm font-medium transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.name}

                  <span
                    className={`absolute -bottom-2 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-violet-500 transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center gap-5">
            <Link
              href="/login"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Sign In
            </Link>

            <Link
              href="/register"
              className="rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white"
            aria-label="Toggle Menu"
          >
            {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mt-3 lg:hidden">
            <div className="rounded-2xl border border-white/10 bg-[#111827] p-5 shadow-lg">
              <div className="flex flex-col gap-5">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`font-medium transition-colors ${
                        isActive
                          ? 'text-violet-400'
                          : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}

                <div className="h-px bg-white/10" />

                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Sign In
                </Link>

                <Link
                  href="/register"
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-3 text-center font-medium text-white"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
