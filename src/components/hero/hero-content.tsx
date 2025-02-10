'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

import { Button } from '@/components/ui/button';

export function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-4xl text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground"
      >
        <Sparkles className="h-4 w-4" />
        <span>Welcome to the Future of Digital Art</span>
        <Sparkles className="h-4 w-4" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
      >
        Discover the Future of{' '}
        <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
          Decentralized Art & Finance
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-6 text-lg text-muted-foreground"
      >
        Join a thriving community of artists and collectors in a secure,
        decentralized marketplace. Create, trade, and own unique digital assets
        with complete transparency and control.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
      >
        <Button size="lg" className="group gap-2">
          Explore Marketplace
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
        <Button size="lg" variant="outline">
          Learn More
        </Button>
      </motion.div>
    </motion.div>
  );
}
