"use client";

import { useEffect, useRef } from "react";

export function AnimatedCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!dot || !ring) return;

    let pointerX = 0;
    let pointerY = 0;
    let animationFrame = 0;

    const moveCursor = (event: MouseEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;

      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(() => {
        const transform = `translate3d(${pointerX}px, ${pointerY}px, 0)`;
        dot.style.transform = transform;
        ring.style.transform = transform;
        animationFrame = 0;
      });
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
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true"><span className="cursor-caret">&gt;</span></div>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true"><span className="cursor-view-label">View</span></div>
    </>
  );
}
