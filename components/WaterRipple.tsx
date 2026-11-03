"use client";

import { useEffect, useRef } from "react";

// Blue water ripples follow the pointer over the parent section.
const CELL = 4;
const DAMPING = 0.95;
const DROP_RADIUS = 3;
const DROP_FORCE = 180;
const COLOR = [39, 118, 234];

export default function WaterRipple({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !host || !ctx) return;
    if (window.matchMedia("(max-width: 767px), (hover: none)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const buffer = document.createElement("canvas");
    const bufferCtx = buffer.getContext("2d");
    if (!bufferCtx) return;

    let cols = 0;
    let rows = 0;
    let current = new Float32Array(0);
    let previous = new Float32Array(0);
    let image: ImageData | null = null;
    let pixels = new Uint32Array(0);
    let raf = 0;
    let visible = true;
    let last: { x: number; y: number } | null = null;
    const color = (alpha: number) =>
      ((alpha << 24) | (COLOR[2] << 16) | (COLOR[1] << 8) | COLOR[0]) >>> 0;

    const resize = () => {
      cols = Math.max(2, Math.ceil(host.clientWidth / CELL));
      rows = Math.max(2, Math.ceil(host.clientHeight / CELL));
      current = new Float32Array(cols * rows);
      previous = new Float32Array(cols * rows);
      buffer.width = cols;
      buffer.height = rows;
      image = bufferCtx.createImageData(cols, rows);
      pixels = new Uint32Array(image.data.buffer);
      canvas.width = host.clientWidth;
      canvas.height = host.clientHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    const drop = (x: number, y: number, force: number) => {
      const cx = Math.floor(x / CELL);
      const cy = Math.floor(y / CELL);
      for (let dy = -DROP_RADIUS; dy <= DROP_RADIUS; dy++) {
        for (let dx = -DROP_RADIUS; dx <= DROP_RADIUS; dx++) {
          const px = cx + dx;
          const py = cy + dy;
          if (px < 1 || py < 1 || px >= cols - 1 || py >= rows - 1) continue;
          const falloff = 1 - Math.hypot(dx, dy) / (DROP_RADIUS + 1);
          if (falloff > 0) previous[py * cols + px] += force * falloff;
        }
      }
    };

    const step = () => {
      let energy = 0;
      for (let y = 1; y < rows - 1; y++) {
        for (let x = 1; x < cols - 1; x++) {
          const i = y * cols + x;
          const value =
            ((previous[i - 1] + previous[i + 1] + previous[i - cols] + previous[i + cols]) / 2 -
              current[i]) *
            DAMPING;
          current[i] = value;
          energy += Math.abs(value);
        }
      }
      [current, previous] = [previous, current];

      for (let y = 1; y < rows - 1; y++) {
        for (let x = 1; x < cols - 1; x++) {
          const i = y * cols + x;
          const slope = previous[i - 1] - previous[i + 1] + previous[i - cols] - previous[i + cols];
          const alpha = Math.min(110, Math.abs(slope) * (slope > 0 ? 1.1 : 0.55)) | 0;
          pixels[i] = alpha > 2 ? color(alpha) : 0;
        }
      }
      bufferCtx.putImageData(image!, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.imageSmoothingEnabled = true;
      ctx.drawImage(buffer, 0, 0, canvas.width, canvas.height);
      return energy / (cols * rows);
    };

    const tick = () => {
      const energy = step();
      raf = visible && energy > 0.02 ? requestAnimationFrame(tick) : 0;
      if (!raf) ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
    const start = () => {
      if (!raf && visible) raf = requestAnimationFrame(tick);
    };
    const onMove = (event: PointerEvent) => {
      const rect = host.getBoundingClientRect();
      const point = { x: event.clientX - rect.left, y: event.clientY - rect.top };
      if (last) {
        const distance = Math.hypot(point.x - last.x, point.y - last.y);
        const steps = Math.min(12, Math.floor(distance / (CELL * 3)));
        for (let s = 1; s <= steps; s++) {
          drop(
            last.x + ((point.x - last.x) * s) / (steps + 1),
            last.y + ((point.y - last.y) * s) / (steps + 1),
            DROP_FORCE * 0.6,
          );
        }
      }
      drop(point.x, point.y, DROP_FORCE);
      last = point;
      start();
    };
    const onLeave = () => {
      last = null;
    };
    const onDown = (event: PointerEvent) => {
      const rect = host.getBoundingClientRect();
      drop(event.clientX - rect.left, event.clientY - rect.top, DROP_FORCE * 3);
      start();
    };

    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);
    const visibility = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
    });
    visibility.observe(host);
    host.addEventListener("pointermove", onMove);
    host.addEventListener("pointerleave", onLeave);
    host.addEventListener("pointerdown", onDown);
    return () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      visibility.disconnect();
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
      host.removeEventListener("pointerdown", onDown);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
}
