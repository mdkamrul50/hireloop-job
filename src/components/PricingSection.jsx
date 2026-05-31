'use client';

import React, { useState } from 'react';
import { FiPlus, FiArrowRight, FiZap } from 'react-icons/fi';
import { FaCrown, FaChartLine } from 'react-icons/fa';

const pricingData = {
  Starter: {
    icon: FaCrown,
    iconColor: 'text-pink-400',
    iconBg: 'bg-pink-950/40 border-pink-900/50',
    title: 'Starter',
    price: { monthly: 0, yearly: 0 },
    features: [
      'Daily AI match brief (top 5)',
      'Verified salary bands',
      'Company insight dashboards',
      '1-click apply, unlimited',
    ],
    isPopular: false,
  },
  Growth: {
    icon: FaChartLine,
    iconColor: 'text-purple-400',
    iconBg: 'bg-purple-950/40 border-purple-900/50',
    title: 'Growth',
    price: { monthly: 17, yearly: 12 },
    features: [
      'Daily AI match brief (top 5)',
      'Verified salary bands',
      'Company insight dashboards',
      '1-click apply, unlimited',
    ],
    isPopular: true, // ইনিশিয়াল হাইলাইটের জন্য এটি true রাখা হয়েছে
  },
  Premium: {
    icon: FiZap,
    iconColor: 'text-purple-400',
    iconBg: 'bg-purple-950/40 border-purple-900/50',
    title: 'Premium',
    price: { monthly: 99, yearly: 75 },
    features: [
      'Everything in Pro',
      'Multi-profile career portfolios',
      'Shared talent rooms',
      'Recruiter view (read-only)',
    ],
    isPopular: false,
  },
};

export default function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  return (
    <section className="bg-black text-white py-24 px-4 sm:px-6 lg:px-8 font-sans antialiased">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-indigo-400 uppercase mb-4 select-none">
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-xs"></span>
            PRICING
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-xs"></span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-normal tracking-tight max-w-2xl mx-auto leading-tight text-gray-100">
            Pay for the leverage,
            <br />
            not the listings
          </h2>
        </div>

        {/* Billing Toggle Switch */}
        <div className="flex justify-center mb-16">
          <div className="bg-[#141414] p-1 rounded-full border border-zinc-800/80 flex items-center relative select-none">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                billingPeriod === 'monthly'
                  ? 'bg-white text-black'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`px-5 py-2 text-sm font-medium rounded-full flex items-center gap-2 transition-all duration-300 ${
                billingPeriod === 'yearly'
                  ? 'bg-white text-black'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Yearly
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold bg-[#e114bd] text-white ${billingPeriod === 'yearly' ? 'bg-black text-[#e114bd]' : ''}`}
              >
                25%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
          {Object.values(pricingData).map((plan) => {
            const IconComponent = plan.icon;
            const displayPrice =
              billingPeriod === 'monthly'
                ? plan.price.monthly
                : plan.price.yearly;

            return (
              <div
                key={plan.title}
                className={`group relative bg-[#0b0b0b] border rounded-2xl p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 ${
                  plan.isPopular
                    ? 'border-zinc-700/90 shadow-[0_0_40px_rgba(255,255,255,0.03)] scale-[1.02] md:scale-[1.03]'
                    : 'border-zinc-900/80 hover:border-zinc-700'
                }`}
              >
              
                {plan.isPopular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-zinc-800 border border-zinc-700 text-[10px] font-semibold tracking-wider uppercase px-3 py-0.5 rounded-full text-zinc-300 select-none">
                    Most Popular
                  </div>
                )}

                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 ${plan.iconBg} border rounded-lg flex items-center justify-center`}
                      >
                        <IconComponent
                          className={`text-base ${plan.iconColor}`}
                        />
                      </div>
                      <h3 className="text-xl font-normal text-gray-200">
                        {plan.title}
                      </h3>
                    </div>
                    <div className="flex items-baseline text-white">
                      <span className="text-3xl font-medium">$</span>
                      <span className="text-4xl font-medium tracking-tight">
                        {displayPrice}
                      </span>
                      <span className="text-gray-500 text-xs ml-1">/month</span>
                    </div>
                  </div>

                  {/* Feature Section Title */}
                  <p className="text-[13px] font-medium text-gray-200 mb-5">
                    Start building your insights hub:
                  </p>

                  {/* Feature List */}
                  <ul className="space-y-3.5 mb-10">
                    {plan.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-[13px] text-gray-400 font-light"
                      >
                        <span
                          className={`flex-shrink-0 w-4 h-4 rounded-xs border flex items-center justify-center mt-0.5 transition-colors duration-300 ${
                            plan.isPopular
                              ? 'bg-zinc-800 border-zinc-600'
                              : 'bg-zinc-900/80 border-zinc-800 group-hover:border-zinc-700'
                          }`}
                        >
                          <FiPlus
                            className={`text-[10px] ${plan.isPopular ? 'text-zinc-300' : 'text-gray-500 group-hover:text-gray-400'}`}
                          />
                        </span>
                        <span className="leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div>
                  <button
                    className={`w-full py-3 px-4 rounded-xl text-xs font-medium flex items-center justify-center gap-2 transition-all duration-300 ${
                      plan.isPopular
                        ? 'bg-white text-black hover:bg-gray-200 shadow-lg'
                        : 'bg-[#222222]/60 text-gray-300 border border-transparent hover:bg-[#2a2a2a] hover:text-white hover:border-zinc-700'
                    }`}
                  >
                    <span>Choose This Plan</span>
                    <FiArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
