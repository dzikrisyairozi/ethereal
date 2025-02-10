'use client';

import { useTheme } from 'next-themes';
// eslint-disable-next-line import/order
import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';

import { ErrorBoundary } from './error-boundary';

interface ArcData {
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  color: string;
}

// Dynamically import Globe with no SSR
const Globe = dynamic(() => import('react-globe.gl'), {
  ssr: false,
  loading: () => <LoadingFallback />,
});

function LoadingFallback() {
  return (
    <div className="flex h-[400px] w-[400px] items-center justify-center sm:h-[600px] sm:w-[600px]">
      <div className="h-32 w-32 animate-pulse rounded-full bg-primary/10" />
    </div>
  );
}

export function GlobeVisualization() {
  const globeRef = useRef();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 600, height: 600 });
  const [arcsData, setArcsData] = useState<ArcData[]>([]); // Properly type the state

  useEffect(() => {
    setMounted(true);
    // Generate arcs data on client side only
    const N = 15;
    const newArcsData: ArcData[] = [...Array(N)].map(() => ({
      startLat: (Math.random() - 0.5) * 180,
      startLng: (Math.random() - 0.5) * 360,
      endLat: (Math.random() - 0.5) * 180,
      endLng: (Math.random() - 0.5) * 360,
      color: ['#FF6B6B', '#4ECDC4', '#45B7D1'][Math.round(Math.random() * 2)],
    }));
    setArcsData(newArcsData);

    const updateDimensions = () => {
      const width = window.innerWidth < 640 ? 400 : 600;
      setDimensions({ width, height: width });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  if (!mounted) return <LoadingFallback />;

  const globeImageUrl =
    theme === 'dark'
      ? '//unpkg.com/three-globe/example/img/earth-dark.jpg'
      : '//unpkg.com/three-globe/example/img/earth-blue-marble.jpg';

  return (
    <ErrorBoundary fallback={<LoadingFallback />}>
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
    </ErrorBoundary>
  );
}
