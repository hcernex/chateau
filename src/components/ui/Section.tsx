'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import Container from './Container';

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerSize?: 'default' | 'narrow' | 'wide';
  background?: 'cream' | 'white' | 'navy' | 'gold-light';
  padding?: 'sm' | 'md' | 'lg';
  id?: string;
}

export default function Section({
  children,
  className,
  containerSize = 'default',
  background = 'cream',
  padding = 'lg',
  id,
}: SectionProps) {
  const backgrounds = {
    cream: 'bg-[var(--chateau-cream)]',
    white: 'bg-white',
    navy: 'bg-[var(--chateau-navy)] text-white',
    'gold-light': 'bg-[var(--chateau-gold-light)]',
  };

  const paddings = {
    sm: 'py-8 md:py-12',
    md: 'py-12 md:py-16',
    lg: 'py-16 md:py-24',
  };

  return (
    <motion.section
      id={id}
      className={cn(backgrounds[background], paddings[padding], className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      <Container size={containerSize}>{children}</Container>
    </motion.section>
  );
}
