import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'gold' | 'wine' | 'success' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
}

export default function Badge({
  children,
  variant = 'default',
  size = 'md',
  className,
}: BadgeProps) {
  const variants = {
    default: 'bg-[var(--chateau-stone)] text-white',
    gold: 'bg-[var(--chateau-gold)] text-white',
    wine: 'bg-[var(--chateau-wine)] text-white',
    success: 'bg-[var(--success)] text-white',
    outline: 'border border-[var(--chateau-gold)] text-[var(--chateau-gold)]',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center font-accent font-medium rounded-full',
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </span>
  );
}
