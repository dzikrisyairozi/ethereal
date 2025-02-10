'use client';

import { motion } from 'framer-motion';
import { Brush, Shield, Wallet } from 'lucide-react';

import { FeatureCard } from './feature-card';

const features = [
  {
    title: 'Secure Wallet Integration',
    description:
      'Connect your Web3 wallet seamlessly and manage your digital assets with complete security and control.',
    icon: Wallet,
  },
  {
    title: 'Protected Transactions',
    description:
      'Every transaction is verified and secured by blockchain technology, ensuring complete transparency and trust.',
    icon: Shield,
  },
  {
    title: 'Creator Tools',
    description:
      'Powerful tools for artists to mint, showcase, and sell their digital artwork in the marketplace.',
    icon: Brush,
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="relative overflow-hidden py-24 sm:py-32">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to create and trade
            <span className="block text-primary">digital masterpieces</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our platform provides all the tools and features you need to
            participate in the future of digital art and collectibles.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
