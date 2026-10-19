"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * The experience timeline. As the visitor scrolls, the line draws down to a point
 * 70% of the way down the screen and each commit dot lights up as the line reaches it.
 * Without JS, or with reduced motion, the timeline simply shows fully drawn.
 */
export function GitLog({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    el.classList.add("is-animated");
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.7;
      const box = el.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, (line - box.top) / box.height));
      el.style.setProperty("--draw", progress.toFixed(4));
      el.querySelectorAll<HTMLLIElement>(":scope > li").forEach((li) => {
        li.classList.toggle("is-lit", li.getBoundingClientRect().top + 22 < line);
      });
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
      el.classList.remove("is-animated");
    };
  }, []);

  return (
    <ol ref={ref} className="t-log">
      {children}
    </ol>
  );
}
