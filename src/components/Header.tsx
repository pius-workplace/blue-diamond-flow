import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";

const PHONE = "+1(817) 852-9498";
const PHONE_HREF = "tel:+1(817) 852-9498";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-sm py-2 px-4 text-center font-medium">
        24/7 Emergency Service — Call Us Now:{" "}
        <a href={PHONE_HREF} className="underline font-bold">
          {PHONE}
        </a>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md shadow-sm border-b border-border">
        <div className="container-main flex items-center justify-between h-16 px-4 md:px-8">
          <Link to="/" className="flex items-center gap-2">
            <Droplets className="h-8 w-8 text-primary" />
            <div className="leading-tight">
              <span className="font-heading font-extrabold text-lg text-primary block leading-none">Blue Diamond</span>
              <span className="text-xs text-muted-foreground font-medium tracking-wider uppercase">Plumbing of Texas</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === l.to ? "text-primary" : "text-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href={PHONE_HREF} className="flex items-center gap-2 text-primary font-bold text-sm">
              <Phone className="h-4 w-4" />
              {PHONE}
            </a>
            <Button variant="cta" size="default" asChild>
              <Link to="/contact">Free Estimate</Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden p-2 text-foreground" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden bg-card border-t border-border px-4 pb-4 animate-fade-in">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm font-medium border-b border-border last:border-0 text-foreground hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-2">
              <Button variant="cta" size="lg" asChild>
                <a href={PHONE_HREF}>
                  <Phone className="h-4 w-4" /> Call Now
                </a>
              </Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
