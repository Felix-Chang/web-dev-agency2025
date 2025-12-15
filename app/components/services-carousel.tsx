'use client';

import { useState } from 'react';

const services = [
  {
    id: 1,
    title: 'Frontend Development',
    subtitle: 'Clean design that converts.',
    description: 'Modern, responsive interfaces designed for usability, performance, and a consistent experience across devices.',
  },
  {
    id: 2,
    title: 'Backend Development',
    subtitle: 'Reliable systems behind the scenes.',
    description: 'Secure backends and APIs that power your product, handle traffic, and scale as your business grows.',
  },
  {
    id: 3,
    title: 'SEO & Performance',
    subtitle: 'Websites built to be found.',
    description: 'Technical SEO and performance optimization to improve rankings, page speed, and user retention.',
  },
];

export default function ServicesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full max-w-5xl mx-auto px-6">
      <div className="relative flex items-center gap-4">
        {/* Left Arrow */}
        <button
          onClick={() => setActiveIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1))}
          className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors flex items-center justify-center text-xl"
          aria-label="Previous slide"
        >
          ←
        </button>

        {/* Cards Container */}
        <div className="flex-1 overflow-hidden">
          <div
            className="flex transition-transform duration-1000"
            style={{
              transform: `translateX(-${activeIndex * 100}%)`,
              transitionTimingFunction: 'cubic-bezier(0.4, 0.0, 0.2, 1)'
            }}
          >
            {services.map((service) => (
              <div
                key={service.id}
                className="w-full flex-shrink-0 px-4"
              >
                <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 border border-zinc-200 dark:border-zinc-800 h-full">
                  <h3 className="text-2xl font-bold text-black dark:text-zinc-50 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-lg font-semibold text-zinc-600 dark:text-zinc-400 mb-4">
                    {service.subtitle}
                  </p>
                  <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => setActiveIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1))}
          className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors flex items-center justify-center text-xl"
          aria-label="Next slide"
        >
          →
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === activeIndex
                ? 'bg-black dark:bg-white w-8'
                : 'bg-zinc-300 dark:bg-zinc-700'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
