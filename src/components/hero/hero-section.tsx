'use client';

import { AnimatedBackground } from './animated-background';
import { HeroContent } from './hero-content';
import { HeroStats } from './hero-stats';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <AnimatedBackground />
      <div className="container relative px-4 pt-32 md:pt-40">
        <HeroContent />
        <HeroStats />
      </div>
    </section>
  );
}
