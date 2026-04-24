import { Shield, Zap, Layers } from "lucide-react";
import Reveal from "./Reveal";

const pillars = [
  {
    icon: Layers,
    title: "Scalable by design",
    desc: "Architectures that elastically grow with your business — from MVP to enterprise scale.",
  },
  {
    icon: Shield,
    title: "Security-first",
    desc: "Zero-trust principles, compliance-ready frameworks, and continuous threat monitoring.",
  },
  {
    icon: Zap,
    title: "Automation everywhere",
    desc: "Infrastructure as Code and CI/CD pipelines that ship faster and fail less.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="container">
        <Reveal>
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-widest text-primary-glow mb-4">
              About Nube Tech
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Cloud engineering, <span className="gradient-text">re-engineered</span> for ambitious teams.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              We partner with startups, fintech innovators, and enterprises to architect, automate, and operate
              modern cloud platforms. Our engineers live and breathe AWS, Azure, Kubernetes, and Terraform —
              delivering systems that are resilient, secure, and cost-efficient by default.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div className="glass rounded-2xl p-8 h-full hover:shadow-glow-blue transition-shadow duration-500 group">
                <div className="inline-flex p-3 rounded-xl bg-gradient-primary/10 ring-1 ring-primary/20 mb-5 group-hover:scale-110 transition-transform">
                  <p.icon className="h-6 w-6 text-primary-glow" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
