import { useEffect, useState } from "react";
import { revenueSeries, channels, goals } from "./data";

/* ---------- Sparkline ---------- */
export function Sparkline({ points, color }: { points: number[]; color: string }) {
  const w = 120;
  const h = 36;
  const max = Math.max(...points);
  const min = Math.min(...points);
  const d = points
    .map((p, i) => {
      const x = (i / (points.length - 1)) * w;
      const y = h - ((p - min) / (max - min || 1)) * (h - 6) - 3;
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
  const id = color.replace("#", "");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-9 w-full overflow-visible">
      <defs>
        <linearGradient id={`sp-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.35" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${d} L${w},${h} L0,${h} Z`} fill={`url(#sp-${id})`} />
      <path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        className="spark-draw"
      />
    </svg>
  );
}

/* ---------- Area chart ---------- */
export function RevenueChart() {
  const [hover, setHover] = useState<number | null>(null);
  const w = 720;
  const h = 260;
  const pad = { l: 38, r: 12, t: 16, b: 28 };
  const max = 110;
  const iw = w - pad.l - pad.r;
  const ih = h - pad.t - pad.b;
  const x = (i: number) => pad.l + (i / (revenueSeries.length - 1)) * iw;
  const y = (v: number) => pad.t + ih - (v / max) * ih;

  const line = (key: "a" | "b") =>
    revenueSeries.map((p, i) => `${i === 0 ? "M" : "L"}${x(i)},${y(p[key])}`).join(" ");
  const area = (key: "a" | "b") =>
    `${line(key)} L${x(revenueSeries.length - 1)},${pad.t + ih} L${pad.l},${pad.t + ih} Z`;

  return (
    <div className="relative">
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full">
        <defs>
          <linearGradient id="gA" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gB" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
          </linearGradient>
        </defs>

        {[0, 25, 50, 75, 100].map((g) => (
          <g key={g}>
            <line
              x1={pad.l}
              x2={w - pad.r}
              y1={y(g)}
              y2={y(g)}
              className="stroke-slate-200 dark:stroke-white/10"
              strokeDasharray="4 6"
            />
            <text x={8} y={y(g) + 4} className="fill-slate-400 text-[10px]">
              {g}k
            </text>
          </g>
        ))}

        <path d={area("b")} fill="url(#gB)" className="area-rise" />
        <path d={area("a")} fill="url(#gA)" className="area-rise" />
        <path d={line("b")} fill="none" stroke="#22d3ee" strokeWidth="2.5" className="line-draw" />
        <path d={line("a")} fill="none" stroke="#6366f1" strokeWidth="2.5" className="line-draw" />

        {revenueSeries.map((p, i) => (
          <g key={p.m} onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}>
            <rect x={x(i) - iw / 24} y={pad.t} width={iw / 12} height={ih} fill="transparent" />
            <text x={x(i)} y={h - 8} textAnchor="middle" className="fill-slate-400 text-[10px]">
              {p.m}
            </text>
            {hover === i && (
              <>
                <line x1={x(i)} x2={x(i)} y1={pad.t} y2={pad.t + ih} stroke="#6366f1" strokeOpacity="0.4" />
                <circle cx={x(i)} cy={y(p.a)} r="5" fill="#6366f1" className="pulse-dot" />
                <circle cx={x(i)} cy={y(p.b)} r="5" fill="#22d3ee" className="pulse-dot" />
              </>
            )}
          </g>
        ))}
      </svg>

      {hover !== null && (
        <div
          className="pointer-events-none absolute -translate-x-1/2 -translate-y-2 rounded-xl border border-slate-200 bg-white/95 px-3 py-2 text-xs shadow-xl backdrop-blur dark:border-white/10 dark:bg-slate-900/95"
          style={{ left: `${(x(hover) / w) * 100}%`, top: 0 }}
        >
          <div className="mb-1 font-semibold text-slate-900 dark:text-white">{revenueSeries[hover].m}</div>
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-300">
            <span className="h-2 w-2 rounded-full bg-indigo-500" /> ${revenueSeries[hover].a}k
          </div>
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-300">
            <span className="h-2 w-2 rounded-full bg-cyan-400" /> ${revenueSeries[hover].b}k
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------- Donut ---------- */
export function ChannelDonut() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 120);
    return () => clearTimeout(t);
  }, []);
  const r = 62;
  const c = 2 * Math.PI * r;
  let offset = 0;
  return (
    <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-between">
      <div className="relative h-44 w-44 shrink-0">
        <svg viewBox="0 0 160 160" className="h-full w-full -rotate-90">
          <circle cx="80" cy="80" r={r} fill="none" strokeWidth="16" className="stroke-slate-100 dark:stroke-white/5" />
          {channels.map((ch) => {
            const len = (ch.value / 100) * c;
            const el = (
              <circle
                key={ch.name}
                cx="80"
                cy="80"
                r={r}
                fill="none"
                stroke={ch.color}
                strokeWidth="16"
                strokeLinecap="round"
                strokeDasharray={`${mounted ? len : 0} ${c}`}
                strokeDashoffset={-offset}
                style={{ transition: "stroke-dasharray 1.1s cubic-bezier(.22,1,.36,1)" }}
              />
            );
            offset += len;
            return el;
          })}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-slate-900 dark:text-white">100%</span>
          <span className="text-[11px] uppercase tracking-widest text-slate-400">traffic</span>
        </div>
      </div>
      <ul className="w-full space-y-3">
        {channels.map((ch, i) => (
          <li key={ch.name} className="fade-up flex items-center gap-3" style={{ animationDelay: `${i * 90}ms` }}>
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: ch.color }} />
            <span className="flex-1 text-sm text-slate-600 dark:text-slate-300">{ch.name}</span>
            <span className="text-sm font-semibold text-slate-900 dark:text-white">{ch.value}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- Goal rings/bars ---------- */
export function Goals() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 200);
    return () => clearTimeout(t);
  }, []);
  return (
    <div className="space-y-5">
      {goals.map((g) => (
        <div key={g.label}>
          <div className="mb-2 flex justify-between text-sm">
            <span className="text-slate-600 dark:text-slate-300">{g.label}</span>
            <span className="font-semibold text-slate-900 dark:text-white">{g.pct}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-white/10">
            <div
              className="h-full rounded-full shimmer"
              style={{
                width: mounted ? `${g.pct}%` : "0%",
                background: `linear-gradient(90deg, ${g.color}, ${g.color}99)`,
                transition: "width 1.2s cubic-bezier(.22,1,.36,1)",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
