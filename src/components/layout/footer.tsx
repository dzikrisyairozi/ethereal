'use client';

import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin, Mail, Twitter } from 'lucide-react';

import { Button } from '@/components/ui/button';

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'GitHub', icon: Github, href: '#' },
];

const footerLinks = [
  {
    title: 'Product',
    links: [
      { name: 'Features', href: '#features' },
      { name: 'Marketplace', href: '#marketplace' },
      { name: 'Pricing', href: '#pricing' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About', href: '#about' },
      { name: 'Blog', href: '#blog' },
      { name: 'Careers', href: '#careers' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Documentation', href: '#docs' },
      { name: 'Help Center', href: '#help' },
      { name: 'Privacy', href: '#privacy' },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-12 md:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {/* Brand and Contact */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-bold">Ethereal</h3>
            <p className="text-sm text-muted-foreground">
              Where art meets decentralized finance
            </p>
            <Button
              variant="ghost"
              className="flex items-center gap-2 px-0 text-muted-foreground hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
              contact@ethereal.com
            </Button>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={social.name}
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    asChild
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  </Button>
                );
              })}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <motion.div key={section.title} variants={itemVariants}>
              <h3 className="mb-4 text-sm font-semibold">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground"
        >
          © {new Date().getFullYear()} Ethereal. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}
