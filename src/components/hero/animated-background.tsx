'use client';

import { motion } from 'framer-motion';

export function AnimatedBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-96 w-96 rounded-full bg-primary/5"
            initial={{
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              scale: 0,
            }}
            animate={{
              x: Math.random() * 200 - 100,
              y: Math.random() * 200 - 100,
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: i * 2,
            }}
          />
        ))}
      </div>
      <div className="absolute bottom-0 h-24 w-full bg-gradient-to-t from-background to-transparent" />
    </>
  );
}
