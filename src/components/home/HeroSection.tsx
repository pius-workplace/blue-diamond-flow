import { Phone, Star, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-plumbing.jpg";

const PHONE_HREF = "tel:+16825550147";
const PHONE = "(682) 555-0147";

const HeroSection = () => (
  <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <img src={heroImg} alt="Professional plumber working in Fort Worth home" width={1920} height={1080} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/50" />
    </div>

    <div className="relative z-10 container-main px-4 md:px-8 py-20 text-primary-foreground">
      <div className="max-w-2xl space-y-6">
        <div className="flex items-center gap-2 text-sm font-medium opacity-90 animate-fade-in">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`h-4 w-4 ${i < 5 ? "fill-accent text-accent" : "text-primary-foreground/40"}`} />
            ))}
          </div>
          <span>4.7 Rating · 31+ Happy Customers</span>
        </div>

        <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight animate-fade-in-up">
          24/7 Emergency Plumbing Services in Fort Worth, TX
        </h1>

        <p className="text-lg md:text-xl opacity-90 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          Fast, Reliable & Licensed Plumbers You Can Trust
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-2 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <Button variant="cta" size="xl" asChild>
            <a href={PHONE_HREF}>
              <Phone className="h-5 w-5" /> Call Now
            </a>
          </Button>
          <Button variant="heroOutline" size="xl" asChild>
            <Link to="/contact">
              <FileText className="h-5 w-5" /> Request a Free Estimate
            </Link>
          </Button>
        </div>

        <a href={PHONE_HREF} className="inline-block text-lg font-bold mt-2 hover:underline opacity-90 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          📞 {PHONE}
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
