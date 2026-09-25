"use client";

import { useEffect, useState } from "react";

const loadingDuration = 1800;

export function PageLoader() {
  const [progress, setProgress] = useState(0);
  const [isLeaving, setIsLeaving] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const startedAt = performance.now();
    let frame = 0;

    const updateProgress = (now: number) => {
      const elapsed = now - startedAt;
      const completion = Math.min(elapsed / loadingDuration, 1);
      const easedProgress = Math.round((1 - Math.pow(1 - completion, 2)) * 100);

      setProgress(easedProgress);

      if (completion < 1) {
        frame = window.requestAnimationFrame(updateProgress);
      } else {
        setIsLeaving(true);
        window.setTimeout(() => setIsVisible(false), 450);
      }
    };

    frame = window.requestAnimationFrame(updateProgress);

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`page-loader${isLeaving ? " page-loader-leaving" : ""}`}
      role="status"
      aria-live="polite"
      aria-label={`Loading portfolio ${progress}%`}
    >
      <strong className="page-loader-number">{progress}</strong>
      <div className="page-loader-progress" aria-hidden="true">
        <span style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}
