"use client";

import { useEffect, useState } from "react";

type Item = { id: string; label: string };

export function DotNav({ items }: { items: Item[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="t-dots" aria-label="Sections">
      <ul>
        {items.map((it) => (
          <li key={it.id}>
            <a
              href={`#${it.id}`}
              className={active === it.id ? "is-active" : undefined}
              aria-current={active === it.id ? "location" : undefined}
            >
              <span className="t-dots-label">{it.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
