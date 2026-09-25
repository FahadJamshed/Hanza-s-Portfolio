"use client";

import { useEffect, useRef } from "react";

export function AnimatedCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!dot || !ring) return;

    let frame = 0;
    let targetX = -100;
    let targetY = -100;
    let ringX = targetX;
    let ringY = targetY;

    const moveCursor = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
    };

    const animateRing = () => {
      ringX += (targetX - ringX) * 0.38;
      ringY += (targetY - ringY) * 0.38;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      frame = window.requestAnimationFrame(animateRing);
    };

    const updateInteractiveState = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const isInteractive = Boolean(
        target.closest("a, button, [role='button'], input, textarea, select")
      );
      ring.classList.toggle("cursor-ring-active", isInteractive);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", updateInteractiveState);
    frame = window.requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", updateInteractiveState);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
