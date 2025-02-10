'use client';

import { motion, useAnimationControls } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useEffect } from 'react';

import { Button } from '@/components/ui/button';

export function HeroContent() {
  const headingControls = useAnimationControls();
  const restOfContentControls = useAnimationControls();

  useEffect(() => {
    const animateHero = async () => {
      // First, fade in the heading in lower position
      await headingControls.start({
        opacity: 1,
        transition: {
          duration: 1.2,
        },
      });

      // Wait for 2 seconds with heading in lower position
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Slide heading up to final position
      await headingControls.start({
        y: 0,
        transition: {
          duration: 1.5,
          type: 'spring',
          bounce: 0.3,
        },
      });

      // Show all other content simultaneously
      await restOfContentControls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.4,
        },
      });
    };

    animateHero();
  }, [headingControls, restOfContentControls]);

  return (
    <div className="mx-auto max-w-4xl text-center">
      {/* Welcome text positioned above but appears after */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={restOfContentControls}
        className="mb-2 flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground"
      >
        <Sparkles className="h-4 w-4" />
        <span>Welcome to Ethereal</span>
        <Sparkles className="h-4 w-4" />
      </motion.div>

      {/* Main heading only visible initially */}
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={headingControls}
        className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
      >
        Discover the Future of{' '}
        <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
          Decentralized Art & Finance
        </span>
      </motion.h1>

      {/* Rest of content */}
      <motion.div initial={{ opacity: 0 }} animate={restOfContentControls}>
        {/* Description and buttons */}
        <div className="mt-4 space-y-10">
          <p className="text-lg text-muted-foreground">
            Join a thriving community of artists and collectors in a secure,
            decentralized marketplace. Create, trade, and own unique digital
            assets with complete transparency and control.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="group gap-2">
              Explore Marketplace
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
