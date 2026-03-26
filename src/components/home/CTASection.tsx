import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

const PHONE_HREF = "tel:+1 (817) 852-9498";
const PHONE = "(817) 852-9498";

const CTASection = () => (
  <section className="section-padding bg-primary text-primary-foreground">
    <AnimateOnScroll variant="scaleIn">
      <div className="container-main text-center max-w-2xl mx-auto">
        <h2 className="font-heading font-extrabold text-3xl md:text-4xl mb-4">Need a Plumber Right Now?</h2>
        <p className="text-lg opacity-90 mb-8">We're available 24/7 — call us anytime, day or night.</p>
        <Button variant="cta" size="xl" asChild>
          <a href={PHONE_HREF}>
            <Phone className="h-5 w-5" /> Call Now: {PHONE}
          </a>
        </Button>
      </div>
    </AnimateOnScroll>
  </section>
);

export default CTASection;
