import { Zap, Award, DollarSign, ThumbsUp } from "lucide-react";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "@/components/AnimateOnScroll";

const reasons = [
  { icon: Zap, title: "Fast Response Times", desc: "We arrive quickly so your plumbing issue doesn't become a disaster." },
  { icon: Award, title: "Certified Technicians", desc: "Experienced, licensed professionals you can count on." },
  { icon: DollarSign, title: "Upfront Pricing", desc: "No hidden fees — you'll know the cost before we start." },
  { icon: ThumbsUp, title: "100% Satisfaction", desc: "We guarantee our work. If you're not happy, we make it right." },
];

const WhyChooseUs = () => (
  <section className="section-padding bg-secondary">
    <div className="container-main">
      <AnimateOnScroll>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-4">Why Choose Blue Diamond?</h2>
          <p className="text-muted-foreground text-lg">Fort Worth homeowners trust us for quality, honesty, and reliability.</p>
        </div>
      </AnimateOnScroll>

      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {reasons.map((r) => (
          <StaggerItem key={r.title}>
            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <r.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground">{r.desc}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

export default WhyChooseUs;
