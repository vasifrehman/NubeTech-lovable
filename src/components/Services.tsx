import { Cloud, Cog, Boxes, ShieldCheck, TrendingDown, MoveRight } from "lucide-react";
import Reveal from "./Reveal";

const services = [
  { icon: Cloud, title: "Cloud Architecture", desc: "Well-architected AWS & Azure designs tailored to your scale and budget." },
  { icon: Cog, title: "DevOps Automation", desc: "GitOps, CI/CD pipelines, and IaC that turn deployments into a non-event." },
  { icon: Boxes, title: "Kubernetes Engineering", desc: "Production-grade EKS, AKS & GKE clusters with observability built in." },
  { icon: ShieldCheck, title: "Security & Compliance", desc: "SOC 2, ISO 27001 & PCI-DSS readiness with zero-trust foundations." },
  { icon: TrendingDown, title: "Cost Optimization", desc: "FinOps audits and rightsizing that typically cut cloud spend by 30–50%." },
  { icon: MoveRight, title: "Cloud Migration", desc: "Seamless lift-and-shift or re-platform with zero downtime guarantees." },
];

const Services = () => {
  return (
    <section id="services" className="py-24 lg:py-32 relative">
      <div className="container">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-sm font-semibold uppercase tracking-widest text-primary-glow mb-4">
              Our Services
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Everything your cloud needs, <span className="gradient-text">under one roof</span>.
            </h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="group relative h-full">
                <div className="absolute -inset-px bg-gradient-primary rounded-2xl opacity-0 group-hover:opacity-60 blur transition-opacity duration-500" />
                <div className="relative glass rounded-2xl p-7 h-full transition-transform duration-500 group-hover:-translate-y-1">
                  <div className="flex items-start justify-between mb-6">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-primary text-primary-foreground shadow-glow-blue">
                      <s.icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-mono text-muted-foreground">0{i + 1}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
