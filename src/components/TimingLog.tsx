import type { CSSProperties } from "react";
import type { Timing } from "@/content/site";

type Props = { timings: Timing[] };

export function TimingLog({ timings }: Props) {
  return (
    <figure className="log" aria-labelledby="log-caption">
      <figcaption id="log-caption" className="log-caption">
        Before and after, from work at TECHCOM
      </figcaption>
      <ul className="log-rows">
        {timings.map((t, i) => (
          <li
            key={t.task}
            className="log-row"
            style={{ "--w": `${Math.max(t.ratio, 0.04) * 100}%`, "--i": i } as CSSProperties}
          >
            <span className="log-task">{t.task}</span>
            <span className="log-track" aria-hidden="true">
              <span className="log-bar" />
            </span>
            <span className="log-values">
              <span className="log-before">
                <span className="sr-only">from </span>
                {t.before}
              </span>
              <span className="log-after">
                <span className="sr-only"> to </span>
                {t.after}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </figure>
  );
}
