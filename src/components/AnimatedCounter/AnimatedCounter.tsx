import { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  formatter?: (val: number) => string;
}

export default function AnimatedCounter({ value, duration = 2000, formatter = (v) => Math.floor(v).toLocaleString() }: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) {
      setDisplayValue(value);
    }
  }, [value]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTimestamp: number | null = null;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            
            // Cubic easeOut for smooth decelerating
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            setDisplayValue(easeProgress * value);

            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setDisplayValue(value);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [value, duration]);

  return <span ref={elementRef}>{formatter(displayValue)}</span>;
}
