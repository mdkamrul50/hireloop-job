import CallToAction from '@/components/CallToAction';
import FeaturesSection from '@/components/FeaturesSection';
import HeroSection from '@/components/HeroSection';
import JobDiscovery from '@/components/JobDiscovery';
import Navbar from '@/components/Navbar';
import PricingSection from '@/components/PricingSection';
import StatsSection from '@/components/StatsSection';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-black">
      <HeroSection />
      <StatsSection />
      <JobDiscovery />
      <FeaturesSection />
      <PricingSection />
      <CallToAction />
    </main>
  );
}
