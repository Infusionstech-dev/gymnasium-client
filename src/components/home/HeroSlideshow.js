"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// How long each hero photo stays on screen before fading to the next one
const slideDurationMs = 5000;

export default function HeroSlideshow({ slideImages }) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const slideCount = slideImages.length;

  // Move to the next photo after slideDurationMs. Depending on activeSlideIndex
  // restarts the timer whenever a dot is clicked, so a manual pick gets a full turn.
  useEffect(() => {
    if (slideCount < 2) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const nextSlideTimer = setTimeout(() => {
      setActiveSlideIndex((currentSlideIndex) => (currentSlideIndex + 1) % slideCount);
    }, slideDurationMs);

    return () => clearTimeout(nextSlideTimer);
  }, [activeSlideIndex, slideCount]);

  return (
    <>
      <div className="absolute inset-0 -z-20 overflow-hidden">
        {slideImages.map((slideImage, slideIndex) => {
          const isActiveSlide = slideIndex === activeSlideIndex;

          return (
            <Image
              key={slideImage}
              src={slideImage}
              alt=""
              fill
              priority={slideIndex === 0}
              sizes="100vw"
              className={`object-cover transition-[opacity,transform] ease-out motion-reduce:transition-none ${
                isActiveSlide
                  ? // Fade in over 1.2s while slowly zooming in for the whole slide
                    "scale-105 opacity-100 duration-[1200ms,6000ms]"
                  : // Fade out, then reset the zoom once the photo is hidden
                    "scale-100 opacity-0 delay-[0ms,1200ms] duration-[1200ms,0ms]"
              }`}
            />
          );
        })}
      </div>

      {slideCount > 1 && (
        <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {slideImages.map((slideImage, slideIndex) => {
            const isActiveSlide = slideIndex === activeSlideIndex;

            return (
              <button
                key={slideImage}
                type="button"
                onClick={() => setActiveSlideIndex(slideIndex)}
                aria-label={`Show hero image ${slideIndex + 1}`}
                aria-current={isActiveSlide}
                className={`h-2.5 cursor-pointer rounded-full transition-all duration-300 ${
                  isActiveSlide ? "w-8 bg-mint" : "w-2.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            );
          })}
        </div>
      )}
    </>
  );
}
