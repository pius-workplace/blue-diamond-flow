import React from "react";
import { Zap, Award, DollarSign, ThumbsUp } from "lucide-react";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "@/components/AnimateOnScroll";

const whyImageSrc = new URL("../../assets/gallery/why.jpg", import.meta.url).href;

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

      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        {/* Image side */}
        <AnimateOnScroll variant="scaleIn" delay={0.2}>
          <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img 
  src={whyImageSrc}
              alt="Why choose Blue Diamond Plumbing" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-primary-foreground">
              <h3 className="font-heading text-2xl font-bold mb-1">Trusted Local Experts</h3>
              <p className="opacity-90">Over 500+ jobs completed</p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Features side */}
        <div>
          <div className="space-y-4">
            {reasons.map((r, index) => (
              <AnimateOnScroll variant="fadeUp" key={index}>

                <div className="flex gap-4 p-4 hover:bg-background/50 rounded-xl transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <r.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground text-lg mb-1">{r.title}</h3>
                    <p className="text-muted-foreground">{r.desc}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
