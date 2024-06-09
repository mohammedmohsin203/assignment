import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import { benefitOne, benefitThree, benefitTwo } from "@/components/data";

export default function Home() {
  return (
    <Container>
      <Hero />
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <Benefits data={benefitThree} />
      <SectionTitle
        preTitle="Testimonials"
        title="What Our Users Say About Us?"
      >
        Testimonials is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions" />
      <Faq />
      <Cta />
    </Container>
  );
}
