'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';

interface ImagePlaceholderProps {
  src?: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export default function ImagePlaceholder({
  src,
  alt,
  fill = false,
  width,
  height,
  className,
  priority = false,
}: ImagePlaceholderProps) {
  // Si l'image n'existe pas, afficher le placeholder
  const isPlaceholder = !src;

  if (isPlaceholder) {
    return (
      <div
        className={cn(
          'bg-gradient-to-br from-[var(--chateau-gold-light)] to-[var(--chateau-stone)] flex items-center justify-center',
          fill && 'absolute inset-0',
          className
        )}
        style={!fill && width && height ? { width, height } : undefined}
      >
        <div className="text-center text-white p-4">
          <svg
            className="w-16 h-16 mx-auto mb-3 opacity-50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <p className="text-sm opacity-70 max-w-[200px] mx-auto">{alt}</p>
        </div>
      </div>
    );
  }

  // Si c'est une vraie image
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={cn('object-cover', className)}
        priority={priority}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width || 800}
      height={height || 600}
      className={cn('object-cover', className)}
      priority={priority}
    />
  );
}
