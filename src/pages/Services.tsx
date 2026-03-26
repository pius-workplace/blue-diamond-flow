import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Droplets, Search, Construction, Flame, Wrench, Fuel, AlertTriangle, Bath, Phone, ShowerHead, Pipette } from "lucide-react";

const allServices = [
  { icon: Droplets, title: "Drain Cleaning", desc: "Clogged drains are one of the most common plumbing issues. We use professional-grade equipment to clear blockages in kitchen sinks, bathroom drains, floor drains, and main sewer lines — quickly and effectively." },
  { icon: Search, title: "Leak Detection & Repair", desc: "Hidden leaks can cause extensive damage over time. Our advanced leak detection technology pinpoints the problem fast, allowing us to repair it with minimal disruption to your home." },
  { icon: Construction, title: "Sewer Line Repair & Replacement", desc: "From tree root intrusions to aging pipes, we offer trenchless sewer repair and full replacement services. We'll restore your sewer system with minimal yard damage." },
  { icon: Flame, title: "Water Heater Installation & Repair", desc: "Whether you need a new tank or tankless water heater installed, or your existing unit repaired, we service all major brands and ensure your hot water flows reliably." },
  { icon: Wrench, title: "Toilet, Faucet & Shower Repair", desc: "Running toilets, dripping faucets, and faulty showerheads waste water and money. Our technicians handle all fixture repairs and replacements efficiently." },
  { icon: Fuel, title: "Gas Line Installation & Repair", desc: "Gas line work requires precision and safety. Our licensed technicians install, repair, and inspect gas lines for stoves, water heaters, fireplaces, and more." },
  { icon: AlertTriangle, title: "Emergency Plumbing Services", desc: "Burst pipes, overflowing toilets, or major leaks? We're available 24/7 for emergency plumbing situations. Call us anytime and we'll be there fast." },
  { icon: Bath, title: "Kitchen & Bathroom Plumbing", desc: "Planning a remodel? We provide complete plumbing services for kitchen and bathroom renovations, from rough-in piping to final fixture installation." },
  { icon: ShowerHead, title: "Fixture Installation", desc: "Upgrade your home with new sinks, faucets, showerheads, and tubs. We ensure proper installation for long-lasting performance." },
  { icon: Pipette, title: "Water Filtration Systems", desc: "Improve your home's water quality with whole-house or point-of-use filtration systems. We install and maintain all types of water treatment solutions." },
];

const Services = () => (
  <>
    <Header />
    <main>
      <section className="bg-primary text-primary-foreground section-padding">
        <div className="container-main text-center max-w-3xl mx-auto">
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl mb-4">Our Plumbing Services</h1>
          <p className="text-lg opacity-90">Comprehensive plumbing solutions for homes and businesses across Fort Worth, TX.</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="grid gap-8">
            {allServices.map((s, i) => (
              <div key={s.title} className={`flex flex-col md:flex-row gap-6 items-start bg-card rounded-xl border border-border p-6 md:p-8 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="p-4 rounded-xl bg-primary/10 text-primary shrink-0">
                  <s.icon className="h-10 w-10" />
                </div>
                <div>
                  <h2 className="font-heading font-bold text-xl text-foreground mb-2">{s.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-4">Don't see what you need? Call us — we handle it all.</p>
            <Button variant="cta" size="xl" asChild>
              <a href="tel:+16825550147"><Phone className="h-5 w-5" /> Call Now</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    <FloatingCallButton />
  </>
);

export default Services;
