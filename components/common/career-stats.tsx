"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 40, suffix: "+", label: "Successful Projects" },
  { value: 6, suffix: "+", label: "Years of Experience" },
  { value: 99, suffix: "%", label: "Success Rate" },
  { value: 15, suffix: "+", label: "Happy Clients Worldwide" },
];

export function CareerStats() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { amount: 0.25 });
  const reduceMotion = useReducedMotion();
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    if (reduceMotion) {
      setProgress(1);
      return;
    }
    if (!inView) {
      setProgress(0);
      return;
    }
    const controls = animate(0, 1, {
      duration: 2.5,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: setProgress,
    });
    return () => controls.stop();
  }, [inView, reduceMotion]);

  return (
    <section
      ref={ref}
      className="container my-14"
      aria-label="Career highlights"
    >
      <dl className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map(({ value, suffix, label }) => (
          <div
            key={label}
            className="flex h-full flex-col items-center justify-center rounded-2xl bg-muted/45 px-4 py-10 text-center sm:px-8"
          >
            <dt className="order-2 mt-3 max-w-[13rem] text-sm leading-relaxed text-muted-foreground">
              {label}
            </dt>
            <dd className="order-1 whitespace-nowrap font-heading text-4xl leading-none tracking-tight text-foreground tabular-nums sm:text-5xl">
              <span className="sr-only">{value}{suffix}</span>
              <span aria-hidden="true">
                {Math.round(value * progress)}
                <span>{suffix}</span>
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
