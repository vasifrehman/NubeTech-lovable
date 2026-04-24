import { useEffect, useRef, useState } from "react";

const metrics = [
  { value: 100, suffix: "+", label: "Production deployments" },
  { value: 50, suffix: "+", label: "Happy clients worldwide" },
  { value: 99.99, suffix: "%", label: "Average uptime SLA", decimals: 2 },
  { value: 42, suffix: "%", label: "Average cost reduction" },
];

const Counter = ({ end, suffix = "", decimals = 0 }: { end: number; suffix?: string; decimals?: number }) => {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const duration = 2000;
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setVal(end * eased);
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [end]);

  return (
    <span ref={ref}>
      {val.toFixed(decimals)}
      {suffix}
    </span>
  );
};

const Metrics = () => {
  return (
    <section className="py-20 relative">
      <div className="container">
        <div className="glass rounded-3xl p-10 lg:p-14 relative overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-glow rounded-full blur-3xl opacity-50" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-glow rounded-full blur-3xl opacity-50" />

          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((m) => (
              <div key={m.label} className="text-center lg:text-left">
                <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text mb-2">
                  <Counter end={m.value} suffix={m.suffix} decimals={m.decimals} />
                </div>
                <div className="text-sm text-muted-foreground">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;
