import { ArrowRight, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-cloud.jpg";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial pointer-events-none" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium">
              <Sparkles className="h-3.5 w-3.5 text-primary-glow" />
              <span className="text-muted-foreground">Trusted by 50+ companies in UAE & globally</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05]">
              We Build{" "}
              <span className="gradient-text">Scalable Cloud</span>{" "}
              Infrastructure for Modern Businesses
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Premium Cloud, DevOps & Infrastructure Engineering for startups, fintech, and enterprises.
            </p>

            <div className="flex flex-wrap gap-2 text-sm">
              {["AWS", "Azure", "Kubernetes", "Terraform", "DevOps"].map((tech) => (
                <span
                  key={tech}
                  className="glass rounded-full px-3 py-1 text-muted-foreground font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="#contact">
                  Schedule Consultation
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
              <Button variant="glass" size="lg">
                <Download className="mr-1 h-4 w-4" />
                Company Profile
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="font-display text-2xl font-bold gradient-text">99.99%</div>
                <div className="text-xs text-muted-foreground">Uptime SLA</div>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <div className="font-display text-2xl font-bold gradient-text">100+</div>
                <div className="text-xs text-muted-foreground">Deployments</div>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <div className="font-display text-2xl font-bold gradient-text">24/7</div>
                <div className="text-xs text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="absolute -inset-8 bg-gradient-glow blur-3xl opacity-60 animate-glow-pulse" />
            <div className="relative glass rounded-3xl p-2 shadow-elegant">
              <img
                src={heroImg}
                alt="Futuristic cloud infrastructure with Kubernetes nodes and network connections"
                width={1024}
                height={1024}
                className="rounded-2xl w-full h-auto animate-float"
              />
            </div>
            <div className="absolute -top-6 -right-6 glass rounded-2xl p-4 shadow-card hidden md:block animate-float" style={{ animationDelay: "1s" }}>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-primary-glow animate-pulse" />
                <div>
                  <div className="text-xs text-muted-foreground">Status</div>
                  <div className="text-sm font-semibold">All systems operational</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 shadow-card hidden md:block animate-float" style={{ animationDelay: "2s" }}>
              <div className="text-xs text-muted-foreground">Cost saved</div>
              <div className="font-display text-xl font-bold gradient-text">−42%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
