'use client';

import { motion } from 'framer-motion';

const stats = [
  { label: 'Artists', value: '10K+' },
  { label: 'Artworks', value: '50K+' },
  { label: 'Total Volume', value: '$100M+' },
  { label: 'Community', value: '100K+' },
];

export function HeroStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 3.5 }}
      className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4"
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-lg border bg-background/50 p-4 backdrop-blur-sm"
        >
          <div className="text-2xl font-bold">{stat.value}</div>
          <div className="text-sm text-muted-foreground">{stat.label}</div>
        </div>
      ))}
    </motion.div>
  );
}
