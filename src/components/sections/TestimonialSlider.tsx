'use client';

import { testimonials } from '@/data/testimonials';
import { Testimonial } from '@/types';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface TestimonialSliderProps {
  filter?: Testimonial['type'];
  autoPlay?: boolean;
  interval?: number;
}

export default function TestimonialSlider({
  filter,
  autoPlay = true,
  interval = 5000,
}: TestimonialSliderProps) {
  const filteredTestimonials = filter
    ? testimonials.filter((t) => t.type === filter)
    : testimonials;

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, filteredTestimonials.length]);

  const goTo = (index: number) => {
    setCurrentIndex(index);
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const goPrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length
    );
  };

  const currentTestimonial = filteredTestimonials[currentIndex];

  const renderStars = (note: number | undefined) => {
    if (!note) return null;
    const fullStars = Math.floor(note > 5 ? note / 2 : note);
    return (
      <div className="flex gap-1 justify-center mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < fullStars ? 'text-[var(--chateau-gold)]' : 'text-gray-300'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Navigation Arrows */}
      <button
        onClick={goPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-2 text-[var(--chateau-stone)] hover:text-[var(--chateau-gold)] transition-colors z-10"
        aria-label="Témoignage précédent"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={goNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-2 text-[var(--chateau-stone)] hover:text-[var(--chateau-gold)] transition-colors z-10"
        aria-label="Témoignage suivant"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Testimonial Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4 }}
          className="text-center px-8 md:px-16"
        >
          {/* Quote Icon */}
          <svg
            className="w-12 h-12 mx-auto mb-6 text-[var(--chateau-gold-light)]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>

          {renderStars(currentTestimonial.note)}

          <blockquote className="text-lg md:text-xl text-[var(--chateau-navy)] leading-relaxed mb-6 italic">
            &ldquo;{currentTestimonial.texte}&rdquo;
          </blockquote>

          <div className="flex items-center justify-center gap-3">
            <span className="font-heading text-lg font-semibold text-[var(--chateau-navy)]">
              {currentTestimonial.auteur}
            </span>
            <span className="text-[var(--chateau-stone)]">|</span>
            <span className="text-sm text-[var(--chateau-stone)]">
              {currentTestimonial.source}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 mt-8">
        {filteredTestimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-8 bg-[var(--chateau-gold)]'
                : 'bg-[var(--chateau-stone)]/30 hover:bg-[var(--chateau-stone)]/50'
            }`}
            aria-label={`Aller au témoignage ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
