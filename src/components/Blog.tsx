import Reveal from "./Reveal";
import terraform from "@/assets/blog-terraform.jpg";
import devops from "@/assets/blog-devops.jpg";
import security from "@/assets/blog-security.jpg";

const posts = [
  {
    img: terraform,
    category: "Terraform",
    date: "Apr 18, 2026",
    title: "Terraform module patterns that scale across 100+ accounts",
    read: "8 min",
  },
  {
    img: devops,
    category: "DevOps",
    date: "Apr 02, 2026",
    title: "Building CI/CD pipelines that ship 50× per day, safely",
    read: "6 min",
  },
  {
    img: security,
    category: "Security",
    date: "Mar 21, 2026",
    title: "Zero-trust on Kubernetes: a practical architecture guide",
    read: "10 min",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-24 lg:py-32 relative">
      <div className="container">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-sm font-semibold uppercase tracking-widest text-primary-glow mb-4">
              Insights
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              From the <span className="gradient-text">engineering desk</span>.
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <article className="group glass rounded-2xl overflow-hidden h-full hover:shadow-glow-blue transition-shadow duration-500">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    width={1024}
                    height={640}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span className="px-2 py-0.5 rounded-md bg-gradient-primary/10 text-primary-glow font-medium">
                      {p.category}
                    </span>
                    <span>{p.date}</span>
                    <span>·</span>
                    <span>{p.read}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold leading-snug group-hover:gradient-text transition-all">
                    {p.title}
                  </h3>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
