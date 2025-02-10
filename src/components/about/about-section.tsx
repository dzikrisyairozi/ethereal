'use client';

import { motion, useInView } from 'framer-motion';
import { Globe as GlobeIcon, Users, Zap } from 'lucide-react';
import { useTheme } from 'next-themes';
// eslint-disable-next-line import/order
import dynamic from 'next/dynamic';
import { Suspense, useEffect, useRef, useState } from 'react';

// Dynamically import Globe with no SSR
const Globe = dynamic(() => import('react-globe.gl'), {
  ssr: false,
  loading: () => (
    <div className="flex h-[400px] w-[400px] items-center justify-center sm:h-[600px] sm:w-[600px]">
      <div className="h-32 w-32 animate-pulse rounded-full bg-primary/10" />
    </div>
  ),
});

const stats = [
  {
    icon: Users,
    value: '150+',
    label: 'Countries',
    description: 'Global user base across continents',
  },
  {
    icon: GlobeIcon,
    value: '1M+',
    label: 'Transactions',
    description: 'Processed securely on blockchain',
  },
  {
    icon: Zap,
    value: '24/7',
    label: 'Support',
    description: 'Round-the-clock assistance',
  },
];

// Pre-calculate arcs data
const N = 15;
const arcsData = [...Array(N)].map(() => ({
  startLat: (Math.random() - 0.5) * 180,
  startLng: (Math.random() - 0.5) * 360,
  endLat: (Math.random() - 0.5) * 180,
  endLng: (Math.random() - 0.5) * 360,
  color: ['#FF6B6B', '#4ECDC4', '#45B7D1'][Math.round(Math.random() * 2)],
}));

function GlobeVisualization() {
  const globeRef = useRef();
  const { theme } = useTheme();
  const [dimensions, setDimensions] = useState({ width: 600, height: 600 });

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth < 640 ? 400 : 600;
      setDimensions({ width, height: width });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const globeImageUrl =
    theme === 'dark'
      ? '//unpkg.com/three-globe/example/img/earth-dark.jpg'
      : '//unpkg.com/three-globe/example/img/earth-blue-marble.jpg';

  return (
    <div className="relative">
      <Globe
        ref={globeRef}
        width={dimensions.width}
        height={dimensions.height}
        globeImageUrl={globeImageUrl}
        backgroundColor="rgba(0,0,0,0)"
        arcsData={arcsData}
        arcColor="color"
        arcDashLength={0.4}
        arcDashGap={4}
        arcDashAnimateTime={1500}
        arcStroke={1}
        atmosphereColor="#007AFF"
        atmosphereAltitude={0.1}
        enablePointerInteraction={false}
      />
    </div>
  );
}

export function AboutSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-background py-24 sm:py-32"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
      <div className="container relative px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Global NFT Marketplace
              <span className="block text-primary">Powered by Blockchain</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Join our worldwide community of artists and collectors. Experience
              the future of digital art ownership with our secure, transparent,
              and decentralized platform.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="relative overflow-hidden rounded-lg border bg-background p-6"
                  >
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-primary/10 p-3">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">{stat.value}</div>
                        <div className="text-sm font-medium text-muted-foreground">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {stat.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7 }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <Suspense
              fallback={
                <div className="flex h-[400px] w-[400px] items-center justify-center sm:h-[600px] sm:w-[600px]">
                  <div className="h-32 w-32 animate-pulse rounded-full bg-primary/10" />
                </div>
              }
            >
              <GlobeVisualization />
            </Suspense>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
