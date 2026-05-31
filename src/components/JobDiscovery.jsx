import React from 'react';
import {
  FiMapPin,
  FiBriefcase,
  FiDollarSign,
  FiArrowRight,
} from 'react-icons/fi';

const jobsData = [
  {
    id: 1,
    role: 'Frontend Developer',
    description:
      'Showcase your commitment to diversity and inclusion by highlighting initiatives',
    location: 'New York, USA',
    type: 'Hybrid',
    salary: '€25–€40/hour',
  },
  {
    id: 2,
    role: 'Frontend Developer',
    description:
      'Showcase your commitment to diversity and inclusion by highlighting initiatives',
    location: 'New York, USA',
    type: 'Hybrid',
    salary: '€25–€40/hour',
  },
  {
    id: 3,
    role: 'Frontend Developer',
    description:
      'Showcase your commitment to diversity and inclusion by highlighting initiatives',
    location: 'New York, USA',
    type: 'Hybrid',
    salary: '€25–€40/hour',
  },
  {
    id: 4,
    role: 'Frontend Developer',
    description:
      'Showcase your commitment to diversity and inclusion by highlighting initiatives',
    location: 'New York, USA',
    type: 'Hybrid',
    salary: '€25–€40/hour',
  },
  {
    id: 5,
    role: 'Frontend Developer',
    description:
      'Showcase your commitment to diversity and inclusion by highlighting initiatives',
    location: 'New York, USA',
    type: 'Hybrid',
    salary: '€25–€40/hour',
  },
  {
    id: 6,
    role: 'Frontend Developer',
    description:
      'Showcase your commitment to diversity and inclusion by highlighting initiatives',
    location: 'New York, USA',
    type: 'Hybrid',
    salary: '€25–€40/hour',
  },
];

export default function JobDiscovery() {
  return (
    <section className="bg-black text-white py-20 px-4 sm:px-6 lg:px-8 font-sans antialiased">
      <div className="max-w-6xl mx-auto text-center mb-16">
        {/* Top Mini Badge */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-indigo-400 uppercase mb-4 select-none">
          <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse"></span>
          Smart Job Discovery
          <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse"></span>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-5xl font-normal tracking-tight max-w-2xl mx-auto leading-tight">
          The roles you'd never find by searching
        </h2>
      </div>

      {/* Job Cards Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {jobsData.map((job) => (
          <div
            key={job.id}
            className="group relative bg-[#121212] border border-[#1f1f1f] rounded-2xl p-8 flex flex-col justify-between transition-all duration-500 ease-out hover:border-zinc-700 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] cursor-pointer"
          >
            <div>
              {/* Job Title */}
              <h3 className="text-2xl font-medium mb-3 text-gray-100 group-hover:text-white transition-colors duration-300">
                {job.role}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-400 leading-relaxed mb-6 font-light">
                {job.description}
              </p>

              {/* Badges / Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 bg-[#1a1a1a] text-xs text-gray-300 px-3 py-1.5 rounded-full border border-[#262626] transition-colors duration-300 group-hover:border-zinc-800">
                  <FiMapPin className="text-purple-400 text-sm" />
                  {job.location}
                </span>
                <span className="inline-flex items-center gap-1.5 bg-[#1a1a1a] text-xs text-gray-300 px-3 py-1.5 rounded-full border border-[#262626] transition-colors duration-300 group-hover:border-zinc-800">
                  <FiBriefcase className="text-purple-400 text-sm" />
                  {job.type}
                </span>
              </div>

              {/* Salary Badge */}
              <div className="mb-8">
                <span className="inline-flex items-center gap-1.5 bg-[#1a1a1a] text-xs text-gray-300 px-3 py-1.5 rounded-full border border-[#262626] transition-colors duration-300 group-hover:border-zinc-800">
                  <FiDollarSign className="text-purple-400 text-sm" />
                  {job.salary}
                </span>
              </div>
            </div>

            {/* Apply Now Button with link animation */}
            <div>
              <div className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
                <span>Apply Now</span>
                <FiArrowRight className="transform transition-transform duration-300 ease-out group-hover:translate-x-2" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Footer Button */}
      <div className="text-center">
        <button className="bg-white text-black font-medium text-sm px-6 py-3 rounded-xl hover:bg-gray-200 active:scale-95 transition-all duration-200 shadow-sm">
          View all job open
        </button>
      </div>
    </section>
  );
}
