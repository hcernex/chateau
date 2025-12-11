'use client';

import { cn } from '@/lib/utils';
import { navigation } from '@/data/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Button from '../ui/Button';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenSubmenu(null);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-md py-2'
          : 'bg-transparent py-4'
      )}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative">
            <span
              className={cn(
                'font-heading text-xl md:text-2xl font-bold transition-colors duration-300',
                isScrolled ? 'text-[var(--chateau-navy)]' : 'text-white'
              )}
            >
              Château de Beaujeu
            </span>
            <span
              className={cn(
                'block text-xs font-accent tracking-[0.2em] transition-colors duration-300',
                isScrolled ? 'text-[var(--chateau-stone)]' : 'text-white/80'
              )}
            >
              Depuis 1566
            </span>
          </div>
        </Link>

        {/* Navigation Desktop */}
        <nav className="hidden lg:flex items-center gap-1">
          {navigation.map((item) => (
            <div
              key={item.href}
              className="relative group"
              onMouseEnter={() => item.children && setOpenSubmenu(item.href)}
              onMouseLeave={() => setOpenSubmenu(null)}
            >
              <Link
                href={item.href}
                className={cn(
                  'px-4 py-2 font-accent text-sm tracking-wide transition-colors duration-300 flex items-center gap-1',
                  isScrolled
                    ? 'text-[var(--chateau-navy)] hover:text-[var(--chateau-gold)]'
                    : 'text-white hover:text-[var(--chateau-gold-light)]',
                  pathname === item.href && 'text-[var(--chateau-gold)]'
                )}
              >
                {item.label}
                {item.children && (
                  <svg
                    className="w-4 h-4 transition-transform group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>

              {/* Submenu */}
              {item.children && (
                <AnimatePresence>
                  {openSubmenu === item.href && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl overflow-hidden"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            'block px-4 py-3 text-sm text-[var(--chateau-navy)] hover:bg-[var(--chateau-gold-light)] transition-colors',
                            pathname === child.href && 'bg-[var(--chateau-gold-light)] text-[var(--chateau-gold)]'
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}

          <Button href="/reservation" variant="primary" size="sm" className="ml-4">
            Réserver
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span
              className={cn(
                'block h-0.5 w-full transition-all duration-300',
                isScrolled ? 'bg-[var(--chateau-navy)]' : 'bg-white',
                isMobileMenuOpen && 'rotate-45 translate-y-2'
              )}
            />
            <span
              className={cn(
                'block h-0.5 w-full transition-all duration-300',
                isScrolled ? 'bg-[var(--chateau-navy)]' : 'bg-white',
                isMobileMenuOpen && 'opacity-0'
              )}
            />
            <span
              className={cn(
                'block h-0.5 w-full transition-all duration-300',
                isScrolled ? 'bg-[var(--chateau-navy)]' : 'bg-white',
                isMobileMenuOpen && '-rotate-45 -translate-y-2'
              )}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white shadow-lg overflow-hidden"
          >
            <nav className="container-custom py-4">
              {navigation.map((item) => (
                <div key={item.href} className="border-b border-[var(--chateau-cream)] last:border-b-0">
                  <Link
                    href={item.href}
                    className={cn(
                      'block py-3 font-accent text-[var(--chateau-navy)]',
                      pathname === item.href && 'text-[var(--chateau-gold)]'
                    )}
                    onClick={() => !item.children && setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pl-4 pb-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            'block py-2 text-sm text-[var(--chateau-stone)]',
                            pathname === child.href && 'text-[var(--chateau-gold)]'
                          )}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Button href="/reservation" variant="primary" size="md" className="w-full">
                  Réserver
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
