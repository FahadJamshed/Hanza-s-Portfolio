"use client";

import { useEffect, useRef } from "react";

export function AnimatedCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!dot || !ring) return;

    const moveCursor = (event: MouseEvent) => {
      const transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      dot.style.transform = transform;
      ring.style.transform = transform;
    };

    const updateInteractiveState = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const isInteractive = Boolean(
        target.closest("a, button, [role='button'], input, textarea, select")
      );
      ring.classList.toggle("cursor-ring-active", isInteractive);
      ring.classList.toggle(
        "cursor-ring-view",
        Boolean(target.closest("nav a"))
      );
      dot.classList.toggle(
        "cursor-dot-hidden",
        Boolean(target.closest("nav a"))
      );
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", updateInteractiveState);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", updateInteractiveState);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true"><span className="cursor-caret">&gt;</span></div>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true"><span className="cursor-view-label">View</span></div>
    </>
  );
}
