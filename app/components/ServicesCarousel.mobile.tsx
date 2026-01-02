"use client";

import { useState } from "react";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Frontend Development",
    subtitle: "Clean design that converts.",
    description:
      "Modern, responsive interfaces designed for usability, performance, and a consistent experience across devices.",
    image: "/assets/pizza-ui.jpg",
  },
  {
    id: 2,
    title: "Backend Integration",
    subtitle: "Reliable systems behind the scenes.",
    description:
      "Secure backends and APIs that power your product, handle traffic, and scale as your business grows.",
    image: "/assets/backend-money.jpg",
  },
  {
    id: 3,
    title: "SEO & Performance",
    subtitle: "Websites built to be found.",
    description:
      "Technical SEO and performance optimization to improve rankings, page speed, and user retention.",
    image: "/assets/seo-views.jpg",
  },
];

export default function ServicesCarouselMobile() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full px-4">
      {/* Cards Container */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
          }}
        >
          {services.map((service) => (
            <div key={service.id} className="w-full flex-shrink-0 px-2">
              <div className="bg-white dark:bg-zinc-900 rounded-xl p-6 border border-zinc-200 dark:border-zinc-800">
                <h3 className="text-xl font-bold text-black dark:text-zinc-50 mb-2">
                  {service.title}
                </h3>
                <p className="text-base font-semibold text-zinc-600 dark:text-zinc-400 mb-3">
                  {service.subtitle}
                </p>
                <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400 mb-4">
                  {service.description}
                </p>
                {service.image && (
                  <div className="rounded-lg overflow-hidden bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center p-4 h-48">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-3 mt-6">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === activeIndex
                ? "bg-black dark:bg-white w-10"
                : "bg-zinc-300 dark:bg-zinc-700"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
