"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Types `text` out the first time it scrolls into view, like a command being entered.
 * Server render, no-JS and reduced-motion visitors always see the full text.
 * Text already on screen at load is left as is, so nothing visible ever blanks out.
 */
export function TypedText({ text }: { text: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(text.length);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return; // already visible

    setShown(0);
    let timer: number | undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        setTyping(true);
        const step = Math.max(14, Math.min(32, 420 / text.length));
        let n = 0;
        timer = window.setInterval(() => {
          n += 1;
          setShown(n);
          if (n >= text.length) {
            window.clearInterval(timer);
            setTyping(false);
          }
        }, step);
      },
      { rootMargin: "0px 0px -15% 0px" },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      window.clearInterval(timer);
    };
  }, [text]);

  return (
    <span ref={ref}>
      {text.slice(0, shown)}
      {typing && <span className="t-type-caret" />}
    </span>
  );
}
