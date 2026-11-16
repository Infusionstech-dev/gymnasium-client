"use client";

import { useEffect, useRef, useState } from "react";

// How long the count-up takes, from 0 to the final number
const countUpDurationMs = 2000;

// Splits a stat like "10,000+" or "4.9/5" into the number to count up to and the text after it
function parseStatValue(statValue) {
  const statMatch = statValue.match(/^([\d,]+(?:\.\d+)?)(.*)$/);
  if (!statMatch) return null;

  const [, numberText, suffixText] = statMatch;
  const decimalPart = numberText.split(".")[1];

  return {
    targetNumber: Number(numberText.replace(/,/g, "")),
    suffixText,
    decimalPlaces: decimalPart ? decimalPart.length : 0,
    useThousandsSeparator: numberText.includes(","),
  };
}

function formatStatNumber(currentNumber, parsedStat) {
  return currentNumber.toLocaleString("en-US", {
    minimumFractionDigits: parsedStat.decimalPlaces,
    maximumFractionDigits: parsedStat.decimalPlaces,
    useGrouping: parsedStat.useThousandsSeparator,
  });
}

// Starts fast and slows down near the end, so the last digits settle smoothly
const easeOutCubic = (progress) => 1 - Math.pow(1 - progress, 3);

export default function StatCounter({ value, className = "" }) {
  const parsedStat = parseStatValue(value);
  const counterElementRef = useRef(null);
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    if (!parsedStat) return;
    const counterElement = counterElementRef.current;
    const { targetNumber } = parsedStat;

    // With "reduce motion" turned on, jump straight to the final number
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const animationDurationMs = prefersReducedMotion ? 0 : countUpDurationMs;

    let animationFrameId;

    const startCountUp = () => {
      const countUpStartTime = performance.now();

      const updateCount = (frameTime) => {
        const progress =
          animationDurationMs === 0 ? 1 : Math.min((frameTime - countUpStartTime) / animationDurationMs, 1);
        setCurrentNumber(targetNumber * easeOutCubic(progress));
        if (progress < 1) animationFrameId = requestAnimationFrame(updateCount);
      };

      animationFrameId = requestAnimationFrame(updateCount);
    };

    // Count up only once, when the stat first scrolls into view
    const visibilityObserver = new IntersectionObserver(
      ([counterEntry]) => {
        if (counterEntry.isIntersecting) {
          startCountUp();
          visibilityObserver.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    visibilityObserver.observe(counterElement);

    return () => {
      visibilityObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
    // value is a plain string, so re-run only if the stat itself changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  // Text that isn't a number (e.g. "24/7") is shown as it is, without animation
  if (!parsedStat) return <p className={className}>{value}</p>;

  return (
    <p ref={counterElementRef} className={`tabular-nums ${className}`}>
      {/* Screen readers get the final value once, not every changing number */}
      <span className="sr-only">{value}</span>
      <span aria-hidden="true">
        {formatStatNumber(currentNumber, parsedStat)}
        {parsedStat.suffixText}
      </span>
    </p>
  );
}
