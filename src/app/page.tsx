'use client';

import { AboutSection } from '@/components/about/about-section';
import { CTASection } from '@/components/cta/cta-section';
import { FeaturesSection } from '@/components/features/features-section';
import { HeroSection } from '@/components/hero/hero-section';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <CTASection />
    </main>
  );
}
