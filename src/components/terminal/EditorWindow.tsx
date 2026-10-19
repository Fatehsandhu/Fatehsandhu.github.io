"use client";

import { useEffect, useState } from "react";
export type LogRow = { key: string; before: string; after: string };

type Line = { kind: "cmd" | "row" | "ok" | "blank"; text: string; after?: string };

function buildLines(timings: LogRow[]): Line[] {
  const pad = Math.max(...timings.map((t) => t.key.length));
  return [
    { kind: "cmd", text: "./benchmark --before --after" },
    { kind: "blank", text: "" },
    ...timings.map<Line>((t) => ({
      kind: "row",
      text: `${t.key.padEnd(pad)}  ${t.before.padStart(8)}  → `,
      after: t.after,
    })),
    { kind: "blank", text: "" },
    { kind: "ok", text: `✓ ${timings.length}/${timings.length} improved` },
  ];
}

const lineLength = (l: Line) => l.text.length + (l.after?.length ?? 0);

export function EditorWindow({ timings }: { timings: LogRow[] }) {
  const lines = buildLines(timings);
  const total = lines.reduce((n, l) => n + lineLength(l), 0);

  // Server render and no-JS show the full output; typing starts after hydration.
  const [shown, setShown] = useState(total);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setShown(0);
    let n = 0;
    const id = window.setInterval(() => {
      n += 3;
      setShown(Math.min(n, total));
      if (n >= total) window.clearInterval(id);
    }, 16);
    return () => window.clearInterval(id);
  }, [total]);

  let budget = shown;
  const done = shown >= total;

  return (
    <figure className="t-editor" aria-label="Before and after timings from work at TECHCOM">
      <div className="t-editor-bar" aria-hidden="true">
        <span className="t-dot t-dot-r" />
        <span className="t-dot t-dot-y" />
        <span className="t-dot t-dot-g" />
        <span className="t-editor-file">perf.log</span>
      </div>
      <pre className="t-editor-body">
        {lines.map((l, i) => {
          const len = lineLength(l);
          const take = Math.max(0, Math.min(budget, len));
          budget -= len;
          const main = l.text.slice(0, take);
          const after = l.after ? l.after.slice(0, Math.max(0, take - l.text.length)) : "";
          return (
            <span key={i} className={`t-line t-line-${l.kind}`}>
              {l.kind === "cmd" && <span className="t-prompt">$ </span>}
              {main}
              {after && <span className="t-after">{after}</span>}
              {"\n"}
            </span>
          );
        })}
        <span className={`t-caret${done ? " t-caret-blink" : ""}`} aria-hidden="true" />
      </pre>
    </figure>
  );
}
