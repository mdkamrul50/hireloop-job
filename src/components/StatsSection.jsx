import { FiBriefcase, FiUsers, FiTarget, FiAward } from 'react-icons/fi';
import Image from 'next/image';
import Globe from "@/assets/globe.png";

export default function StatsSection() {
  return (
    <section className="relative -mt-10 overflow-hidden pt-20">
      {/* Glow */}
      <div className="absolute left-1/2 top-44 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-700/30 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Globe */}
        <div className="flex justify-center">
          <Image
            src={Globe}
            alt="Globe"
            width={1100}
            height={700}
            className="w-full max-w-6xl"
            priority
          />
        </div>

        {/* Text */}
        <div className="absolute left-1/2 top-88 -translate-x-1/2 text-center">
          <h2 className="max-w-xl text-2xl  text-white md:text-4xl">
            Assisting over <span className='font-bold'>15,000</span> job seekers find their dream
            positions.
          </h2>
        </div>

        {/* Cards */}
        <div className="relative z-10 -mt-140 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
            <FiBriefcase className="text-white" />
            <h3 className="mt-8 text-5xl font-bold text-white">50K</h3>
            <p className="mt-2 text-gray-400">Active Jobs</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
            <FiTarget className="text-white" />
            <h3 className="mt-8 text-5xl font-bold text-white">12K</h3>
            <p className="mt-2 text-gray-400">Companies</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
            <FiUsers className="text-white" />
            <h3 className="mt-8 text-5xl font-bold text-white">2M</h3>
            <p className="mt-2 text-gray-400">Job Seekers</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
            <FiAward className="text-white" />
            <h3 className="mt-8 text-5xl font-bold text-white">97%</h3>
            <p className="mt-2 text-gray-400">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
}
