'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import Button from '../ui/Button';
import ImagePlaceholder from '../ui/ImagePlaceholder';

interface HeroProps {
  title: string;
  subtitle?: string;
  badge?: string;
  image?: string;
  imageAlt?: string;
  height?: 'full' | 'large' | 'medium';
  overlay?: boolean;
  children?: ReactNode;
  primaryCTA?: {
    label: string;
    href: string;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
  centered?: boolean;
}

export default function Hero({
  title,
  subtitle,
  badge,
  image,
  imageAlt = 'Château de Beaujeu',
  height = 'full',
  overlay = true,
  children,
  primaryCTA,
  secondaryCTA,
  centered = true,
}: HeroProps) {
  const heights = {
    full: 'min-h-screen',
    large: 'min-h-[80vh]',
    medium: 'min-h-[60vh]',
  };

  return (
    <section className={cn('relative flex items-center', heights[height])}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImagePlaceholder src={image} alt={imageAlt} fill priority className="object-cover" />
        {overlay && <div className="absolute inset-0 hero-overlay" />}
      </div>

      {/* Content */}
      <div
        className={cn(
          'relative z-10 container-custom py-20',
          centered && 'text-center'
        )}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={centered ? 'max-w-3xl mx-auto' : 'max-w-2xl'}
        >
          {badge && (
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block font-accent tracking-[0.3em] text-sm mb-6"
              style={{ color: '#E8D5A3' }}
            >
              {badge}
            </motion.span>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
            style={{ color: '#FFFFFF' }}
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl mb-8 leading-relaxed"
              style={{ color: 'rgba(255, 255, 255, 0.9)' }}
            >
              {subtitle}
            </motion.p>
          )}

          {children}

          {(primaryCTA || secondaryCTA) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={cn(
                'flex flex-col sm:flex-row gap-4',
                centered && 'justify-center'
              )}
            >
              {primaryCTA && (
                <Button href={primaryCTA.href} variant="primary" size="lg">
                  {primaryCTA.label}
                </Button>
              )}
              {secondaryCTA && (
                <Button href={secondaryCTA.href} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[var(--chateau-navy)]">
                  {secondaryCTA.label}
                </Button>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      {height === 'full' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          >
            <motion.div className="w-1.5 h-3 bg-white/70 rounded-full mt-2" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
