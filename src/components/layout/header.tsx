'use client';

import { motion } from 'framer-motion';
import { Codesandbox } from 'lucide-react';
import { useEffect, useState } from 'react';

import MobileNav from '@/components/layout/mobile-nav';
import { cn } from '@/lib/utils';

import { ThemeToggle } from '../theme-toggle';
import { WalletConnectButton } from '../wallet/connect-button';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Features', href: '#features' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'border-b bg-background/80 backdrop-blur-md'
          : 'bg-transparent'
      )}
    >
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex w-1/3 items-center gap-2"
        >
          <Codesandbox className="h-8 w-8" />
          <span className="text-xl font-bold">Ethereal</span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden w-1/3 items-center justify-center gap-8 md:flex">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        <div className="hidden w-1/3 items-center justify-end gap-2 md:flex">
          <ThemeToggle />
          <WalletConnectButton />
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <MobileNav items={navItems} />
        </div>
      </nav>
    </motion.header>
  );
}
