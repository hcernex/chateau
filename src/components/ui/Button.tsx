'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isLoading?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

export default function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  href,
  isLoading,
  disabled,
  type = 'button',
  onClick,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-accent font-medium tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-[var(--chateau-gold)] text-white hover:bg-[var(--chateau-wine)] focus:ring-[var(--chateau-gold)]',
    secondary: 'bg-[var(--chateau-navy)] text-white hover:bg-[var(--chateau-wine)] focus:ring-[var(--chateau-navy)]',
    outline: 'border-2 border-[var(--chateau-gold)] text-[var(--chateau-gold)] hover:bg-[var(--chateau-gold)] hover:text-white focus:ring-[var(--chateau-gold)]',
    ghost: 'text-[var(--chateau-navy)] hover:bg-[var(--chateau-gold-light)] focus:ring-[var(--chateau-gold)]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const buttonClasses = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      className={buttonClasses}
      disabled={disabled || isLoading}
      onClick={onClick}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      {isLoading ? (
        <>
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Chargement...
        </>
      ) : (
        children
      )}
    </motion.button>
  );
}
