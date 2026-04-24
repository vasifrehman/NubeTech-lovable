import { useState } from "react";
import { z } from "zod";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Reveal from "./Reveal";

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  company: z.string().trim().max(120).optional(),
  message: z.string().trim().min(10, "Tell us a bit more").max(1000),
});

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast({
        title: "Please check your input",
        description: parsed.error.errors[0]?.message,
        variant: "destructive",
      });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Thanks — we'll be in touch!",
        description: "A senior engineer will reach out within one business day.",
      });
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <>
      {/* CTA */}
      <section className="py-20">
        <div className="container">
          <Reveal>
            <div className="relative glass rounded-3xl p-10 md:p-16 text-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-glow opacity-40" />
              <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-radial" />
              <div className="relative">
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl mx-auto">
                  Ready to <span className="gradient-text">modernize your cloud?</span>
                </h2>
                <p className="mt-5 text-lg text-muted-foreground max-w-xl mx-auto">
                  Book a free 30-minute architecture review with a senior cloud engineer.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Button variant="hero" size="lg" asChild>
                    <a href="#contact-form">
                      Contact Nube Tech <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="glass" size="lg">View pricing</Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact form */}
      <section id="contact" className="py-20 lg:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-10">
            <Reveal>
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <div className="text-sm font-semibold uppercase tracking-widest text-primary-glow mb-4">
                    Get in touch
                  </div>
                  <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight">
                    Let's build your <span className="gradient-text">cloud platform</span>.
                  </h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Tell us about your project. We typically respond within one business day.
                  </p>
                </div>

                <ul className="space-y-4">
                  {[
                    { icon: Mail, label: "hello@nubetech.io" },
                    { icon: Phone, label: "+971 4 000 0000" },
                    { icon: MapPin, label: "Dubai, UAE · Remote globally" },
                  ].map((c) => (
                    <li key={c.label} className="flex items-center gap-4">
                      <div className="p-2.5 rounded-lg bg-gradient-primary/10 ring-1 ring-primary/20">
                        <c.icon className="h-5 w-5 text-primary-glow" />
                      </div>
                      <span className="text-foreground/90">{c.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <form
                id="contact-form"
                onSubmit={onSubmit}
                className="lg:col-span-3 glass rounded-2xl p-6 md:p-8 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full name</Label>
                    <Input id="name" name="name" placeholder="Jane Doe" required maxLength={100} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Work email</Label>
                    <Input id="email" name="email" type="email" placeholder="jane@company.com" required maxLength={255} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" name="company" placeholder="Acme Corp" maxLength={120} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Tell us about your project</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="We're looking to migrate to AWS..."
                    required
                    maxLength={1000}
                  />
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
                  {loading ? "Sending..." : "Send message"}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
