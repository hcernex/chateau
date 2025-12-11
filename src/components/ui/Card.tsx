'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  href?: string;
  hover?: boolean;
}

export function Card({ children, className, href, hover = true }: CardProps) {
  const cardContent = (
    <motion.div
      className={cn(
        'bg-white rounded-lg overflow-hidden shadow-md',
        hover && 'transition-shadow duration-300 hover:shadow-xl',
        className
      )}
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return <Link href={href}>{cardContent}</Link>;
  }

  return cardContent;
}

interface CardImageProps {
  src: string;
  alt: string;
  aspectRatio?: 'square' | 'video' | 'wide';
  className?: string;
}

export function CardImage({ src, alt, aspectRatio = 'video', className }: CardImageProps) {
  const aspectRatios = {
    square: 'aspect-square',
    video: 'aspect-video',
    wide: 'aspect-[21/9]',
  };

  return (
    <div className={cn('relative overflow-hidden', aspectRatios[aspectRatio], className)}>
      {src.startsWith('/images/') ? (
        // Placeholder pour les images non encore fournies
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--chateau-gold-light)] to-[var(--chateau-stone)] flex items-center justify-center">
          <div className="text-center text-white">
            <svg
              className="w-12 h-12 mx-auto mb-2 opacity-60"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="text-sm opacity-60">{alt}</span>
          </div>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      )}
    </div>
  );
}

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export function CardContent({ children, className }: CardContentProps) {
  return <div className={cn('p-6', className)}>{children}</div>;
}

interface CardTitleProps {
  children: ReactNode;
  className?: string;
  as?: 'h2' | 'h3' | 'h4';
}

export function CardTitle({ children, className, as: Component = 'h3' }: CardTitleProps) {
  return (
    <Component className={cn('font-heading text-xl font-semibold text-[var(--chateau-navy)] mb-2', className)}>
      {children}
    </Component>
  );
}

interface CardDescriptionProps {
  children: ReactNode;
  className?: string;
}

export function CardDescription({ children, className }: CardDescriptionProps) {
  return (
    <p className={cn('text-[var(--chateau-stone)] leading-relaxed', className)}>
      {children}
    </p>
  );
}

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

export function CardFooter({ children, className }: CardFooterProps) {
  return (
    <div className={cn('px-6 pb-6 pt-2 flex items-center justify-between', className)}>
      {children}
    </div>
  );
}
