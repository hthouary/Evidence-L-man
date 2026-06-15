import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Sectors from "@/components/sections/Sectors";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Realisations from "@/components/sections/Realisations";
import Benefits from "@/components/sections/Benefits";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Sectors />
      <Problem />
      <Solution />
      <Benefits />
      <Realisations />
      <Process />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
