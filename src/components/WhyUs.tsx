import { Award, Bot, Lock, LineChart, Check } from "lucide-react";
import Reveal from "./Reveal";

const reasons = [
  { icon: Award, title: "AWS & Azure Experts", desc: "Certified architects with battle-tested production experience across both clouds." },
  { icon: Bot, title: "Automation-first", desc: "Every system we ship is fully automated — no snowflakes, no surprises." },
  { icon: Lock, title: "Security by design", desc: "Encryption, secrets management, and least-privilege baked into every layer." },
  { icon: LineChart, title: "Cost-obsessed", desc: "We measure success in your savings — not just our deliverables." },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 lg:py-32 relative">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div>
              <div className="text-sm font-semibold uppercase tracking-widest text-primary-glow mb-4">
                Why Choose Us
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                A partner your <span className="gradient-text">CTO</span> will love.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We're not a generic IT vendor. We're senior cloud engineers who treat your infrastructure
                like it's our own — pragmatic, opinionated, and obsessed with quality.
              </p>
              <ul className="space-y-3">
                {[
                  "Senior engineers only — no junior offshoring",
                  "Transparent communication & weekly reporting",
                  "Outcome-based engagements",
                  "Knowledge transfer baked into every project",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-0.5 p-1 rounded-md bg-gradient-primary">
                      <Check className="h-3 w-3 text-primary-foreground" strokeWidth={3} />
                    </div>
                    <span className="text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 100}>
                <div className={`glass rounded-2xl p-6 h-full hover:glow-purple transition-shadow duration-500 ${i % 2 === 1 ? "sm:translate-y-8" : ""}`}>
                  <div className="inline-flex p-2.5 rounded-lg bg-gradient-primary/10 ring-1 ring-primary/20 mb-4">
                    <r.icon className="h-5 w-5 text-primary-glow" />
                  </div>
                  <h3 className="font-display font-semibold mb-2">{r.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
