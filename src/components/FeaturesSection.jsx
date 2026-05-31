import React from 'react';
import {
  FiSearch,
  FiTrendingUp,
  FiBarChart2,
  FiBookmark,
  FiMousePointer,
  FiFileText,
  FiHexagon,
  FiArrowUpRight,
} from 'react-icons/fi';

const featuresData = [
  {
    id: 1,
    title: 'Smart Search',
    description: 'Find your ideal job with advanced filters.',
    icon: FiSearch,
  },
  {
    id: 2,
    title: 'Salary Insights',
    description: 'Get real salary data to negotiate confidently.',
    icon: FiTrendingUp,
  },
  {
    id: 3,
    title: 'Top Companies',
    description: 'Apply to vetted companies that are hiring.',
    icon: FiBarChart2,
  },
  {
    id: 4,
    title: 'Saved Jobs',
    description: 'Manage apps & favorites on your dashboard.',
    icon: FiBookmark,
  },
  {
    id: 5,
    title: 'One-Click Apply',
    description: 'Simplify your job applications for an easier process!',
    icon: FiMousePointer,
  },
  {
    id: 6,
    title: 'Resume Builder',
    description: 'Create professional resumes with modern templates.',
    icon: FiFileText,
  },
  {
    id: 7,
    title: 'Skill-Based Matching',
    description: 'Discover jobs that match your skills and experience.',
    icon: FiHexagon,
  },
  {
    id: 8,
    title: 'Career Growth Resources',
    description: 'Boost your career with quick interview tips.',
    icon: FiArrowUpRight,
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-[#0f0f0f] text-white py-24 px-4 sm:px-6 lg:px-8 font-sans antialiased">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          {/* Top Mini Badge */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-indigo-400 uppercase mb-4 select-none">
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-xs"></span>
            FEATURES JOB
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-xs"></span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl sm:text-5xl font-normal tracking-tight max-w-2xl mx-auto leading-tight text-gray-100">
            Everything you need <br /> to succeed
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 max-w-6xl mx-auto">
          {featuresData.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.id}
                className="group flex items-start gap-4 cursor-pointer select-none"
              >
                {/* Icon Box with Smooth Glow and Scale Animation */}
                <div className="flex-shrink-0 w-14 h-14 bg-[#141414] border border-[#222] rounded-xl flex items-center justify-center relative overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:border-purple-900/50 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]">
                  {/* Subtle purple gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Icon */}
                  <IconComponent className="text-xl text-purple-400 transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* Text Content */}
                <div className="flex flex-col justify-center pt-1">
                  <h3 className="text-[15px] font-medium text-gray-200 mb-1 transition-colors duration-200 group-hover:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-[13px] text-gray-400 leading-normal font-light max-w-[180px] transition-colors duration-200 group-hover:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
