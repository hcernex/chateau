'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  badge,
  centered = true,
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn(
        'mb-12',
        centered && 'text-center',
        className
      )}
    >
      {badge && (
        <span
          className={cn(
            'inline-block font-accent tracking-[0.2em] text-sm mb-4',
            light ? 'text-[var(--chateau-gold-light)]' : 'text-[var(--chateau-gold)]'
          )}
        >
          {badge}
        </span>
      )}
      <h2
        className={cn(
          'font-heading text-3xl md:text-4xl font-semibold mb-4',
          light ? 'text-white' : 'text-[var(--chateau-navy)]'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'text-lg max-w-2xl leading-relaxed',
            centered && 'mx-auto',
            light ? 'text-white/80' : 'text-[var(--chateau-stone)]'
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
