'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import { AboutSection } from '@/components/about/about-section';
import { CTASection } from '@/components/cta/cta-section';
import { FeaturesSection } from '@/components/features/features-section';
import { HeroSection } from '@/components/hero/hero-section';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Delay showing other sections until hero animation completes
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3500); // Adjust timing based on hero animation duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Header />
            <AboutSection />
            <FeaturesSection />
            <CTASection />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
