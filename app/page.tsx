import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { WhyChooseUs } from "@/components/why-choose-us";
import { About } from "@/components/about";
import { Portfolio } from "@/components/portfolio";
import { Pricing } from "@/components/pricing";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Pricing />
      <About />
      <WhyChooseUs />
      <Services />
      <Portfolio />
      {/* <Testimonials /> */}
      {/* <CTA /> */}
      <Contact />
    </main>
  );
}
