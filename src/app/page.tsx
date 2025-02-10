'use client';

import { FeaturesSection } from '@/components/features/features-section';
import { HeroSection } from '@/components/hero/hero-section';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <FeaturesSection />
    </main>
  );
}
