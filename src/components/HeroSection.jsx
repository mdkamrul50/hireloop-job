'use client';

import { FiSearch, FiMapPin, FiBriefcase } from 'react-icons/fi';

export default function HeroSection() {
  const tags = ['Product Designer', 'AI Engineering', 'DevOps Engineer'];

  return (
    <section className="relative overflow-hidden pt-20 md:pt-28">
      <div className="mx-auto max-w-5xl px-4 text-center">
        {/* Badge */}
        <div className="mb-8 flex justify-center">
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 backdrop-blur-xl">
            <FiBriefcase className="text-orange-400" />
            <span className="text-xs font-semibold text-white">50,000+</span>
            <span className="text-xs uppercase tracking-wider text-gray-400">
              New Jobs This Month
            </span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
          Find Your Dream Job Today
        </h1>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-2xl text-gray-400">
          HireLoop connects top talent with world-class companies. Browse
          thousands of curated opportunities and land your next role faster.
        </p>

        {/* Search Box */}
        <div className="mx-auto mt-10 flex max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0f1117] md:flex-row">
          <div className="flex flex-1 items-center gap-3 px-5 py-4">
            <FiSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Job title, skill or company"
              className="w-full bg-transparent outline-none text-white placeholder:text-gray-500"
            />
          </div>

          <div className="hidden w-px bg-white/10 md:block" />

          <div className="flex flex-1 items-center gap-3 px-5 py-4">
            <FiMapPin className="text-gray-500" />
            <input
              type="text"
              placeholder="Location or Remote"
              className="w-full bg-transparent outline-none text-white placeholder:text-gray-500"
            />
          </div>

          <button className="flex items-center justify-center bg-violet-600 px-6 py-4 text-white transition hover:bg-violet-500">
            <FiSearch size={20} />
          </button>
        </div>

        {/* Trending */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          <span className="text-sm text-gray-500">Trending Position</span>

          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
