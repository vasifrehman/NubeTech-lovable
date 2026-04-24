import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Metrics from "@/components/Metrics";
import CaseStudies from "@/components/CaseStudies";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Metrics />
        <CaseStudies />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
