import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import StatsSection from '@/components/StatsSection';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='bg-black'>
      <Navbar />
      <HeroSection />
      <StatsSection />
    </main>
  );
}
