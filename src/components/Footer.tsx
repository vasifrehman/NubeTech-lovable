import { Github, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/nube-tech-logo.png";

const groups = [
  {
    title: "Services",
    links: ["Cloud Architecture", "DevOps Automation", "Kubernetes", "Security", "Cost Optimization", "Migration"],
  },
  {
    title: "Company",
    links: ["About", "Case Studies", "Blog", "Careers", "Contact"],
  },
  {
    title: "Resources",
    links: ["Documentation", "Whitepapers", "Newsletter", "Status"],
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-border/50 mt-12">
      <div className="container py-16">
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-5">
            <a href="#" className="flex items-center gap-2.5" aria-label="Nube Tech home">
              <img
                src={logo}
                alt="Nube Tech logo"
                className="h-10 w-auto object-contain"
                width={40}
                height={40}
              />
              <span className="font-display font-bold text-lg">
                Nube<span className="gradient-text">Tech</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              Premium cloud, DevOps & infrastructure engineering for startups, fintech, and enterprises —
              based in Dubai, serving the world.
            </p>
            <div className="flex gap-3">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="p-2 rounded-lg glass hover:shadow-glow-blue transition-shadow"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {groups.map((g) => (
            <div key={g.title}>
              <h4 className="font-display font-semibold mb-4">{g.title}</h4>
              <ul className="space-y-2.5">
                {g.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Nube Tech. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
