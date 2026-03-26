import { PhoneCall, ClipboardCheck, Wrench } from "lucide-react";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "@/components/AnimateOnScroll";

const steps = [
  { icon: PhoneCall, step: "1", title: "Call or Book Online", desc: "Reach us 24/7 by phone or through our online form." },
  { icon: ClipboardCheck, step: "2", title: "We Inspect & Diagnose", desc: "Our technician arrives and provides a clear diagnosis." },
  { icon: Wrench, step: "3", title: "We Fix It Fast", desc: "We get the job done right — efficiently and affordably." },
];

const HowItWorks = () => (
  <section className="section-padding bg-background">
    <div className="container-main">
      <AnimateOnScroll>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-4">How It Works</h2>
          <p className="text-muted-foreground text-lg">Getting your plumbing fixed is as easy as 1-2-3.</p>
        </div>
      </AnimateOnScroll>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {steps.map((s) => (
          <StaggerItem key={s.step}>
            <div className="text-center relative">
              <div className="mx-auto w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-5 shadow-lg">
                <s.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center shadow">
                {s.step}
              </div>
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

export default HowItWorks;
