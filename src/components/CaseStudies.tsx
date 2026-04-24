import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import fintech from "@/assets/case-fintech.jpg";
import k8s from "@/assets/case-kubernetes.jpg";
import migration from "@/assets/case-migration.jpg";

const cases = [
  {
    img: fintech,
    tag: "Fintech",
    title: "PCI-DSS compliant cloud platform for a UAE neobank",
    metrics: [{ k: "Uptime", v: "99.99%" }, { k: "Cost saved", v: "$420K/yr" }],
    stack: ["AWS", "Terraform", "EKS"],
  },
  {
    img: k8s,
    tag: "SaaS",
    title: "Multi-region Kubernetes platform for a global SaaS",
    metrics: [{ k: "Regions", v: "6" }, { k: "Deploy time", v: "−85%" }],
    stack: ["GKE", "ArgoCD", "Istio"],
  },
  {
    img: migration,
    tag: "Enterprise",
    title: "Zero-downtime migration from on-prem to Azure",
    metrics: [{ k: "Workloads", v: "180+" }, { k: "Downtime", v: "0 min" }],
    stack: ["Azure", "AKS", "Bicep"],
  },
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-24 lg:py-32 relative">
      <div className="container">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <div className="text-sm font-semibold uppercase tracking-widest text-primary-glow mb-4">
                Case Studies
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Real outcomes from <span className="gradient-text">real architectures</span>.
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <article className="group glass rounded-2xl overflow-hidden h-full flex flex-col hover:shadow-elegant transition-all duration-500 hover:-translate-y-1">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.title}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                  <span className="absolute top-4 left-4 glass rounded-full px-3 py-1 text-xs font-medium">
                    {c.tag}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-display text-lg font-semibold leading-snug mb-4">{c.title}</h3>

                  <div className="grid grid-cols-2 gap-4 mb-5 pb-5 border-b border-border">
                    {c.metrics.map((m) => (
                      <div key={m.k}>
                        <div className="font-display text-xl font-bold gradient-text">{m.v}</div>
                        <div className="text-xs text-muted-foreground">{m.k}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
                    {c.stack.map((t) => (
                      <span key={t} className="text-xs px-2 py-1 rounded-md bg-secondary text-muted-foreground font-mono">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a href="#contact" className="inline-flex items-center gap-1 text-sm font-medium text-primary-glow hover:gap-2 transition-all">
                    Read case study <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
