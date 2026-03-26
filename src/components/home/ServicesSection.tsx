import { Link } from "react-router-dom";
import { Droplets, Search, Construction, Flame, Wrench, Fuel, AlertTriangle, Bath } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { icon: Droplets, title: "Drain Cleaning", desc: "Fast unclogging for sinks, tubs, and main lines." },
  { icon: Search, title: "Leak Detection & Repair", desc: "Pinpoint and fix leaks before they cause damage." },
  { icon: Construction, title: "Sewer Line Repair", desc: "Expert sewer line diagnosis and trenchless repair." },
  { icon: Flame, title: "Water Heater Services", desc: "Installation, repair, and replacement of all types." },
  { icon: Wrench, title: "Toilet, Faucet & Shower", desc: "Repairs and installations for all fixtures." },
  { icon: Fuel, title: "Gas Line Services", desc: "Safe gas line installation, repair, and inspection." },
  { icon: AlertTriangle, title: "Emergency Plumbing", desc: "Available 24/7 for urgent plumbing emergencies." },
  { icon: Bath, title: "Kitchen & Bathroom", desc: "Complete plumbing for remodels and new builds." },
];

const ServicesSection = () => (
  <section className="section-padding bg-background">
    <div className="container-main">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-4">Our Plumbing Services</h2>
        <p className="text-muted-foreground text-lg">From minor repairs to major installations, we handle it all with skill and integrity.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <div key={s.title} className="group bg-card rounded-xl border border-border p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300">
            <div className="p-3 rounded-lg bg-primary/10 text-primary inline-block mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
              <s.icon className="h-6 w-6" />
            </div>
            <h3 className="font-heading font-bold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Button variant="default" size="lg" asChild>
          <Link to="/services">View All Services</Link>
        </Button>
      </div>
    </div>
  </section>
);

export default ServicesSection;
