import { Link } from "react-router-dom";
import { Droplets, Phone, MapPin, Facebook, Instagram } from "lucide-react";

const PHONE = "(817) 852-9498";
const PHONE_HREF = "tel:+1(817) 852-9498";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container-main section-padding grid grid-cols-1 md:grid-cols-3 gap-10">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Droplets className="h-7 w-7" />
          <span className="font-heading font-extrabold text-lg">Blue Diamond Plumbing</span>
        </div>
        <p className="text-primary-foreground/80 text-sm leading-relaxed">
          Fort Worth's trusted plumbing professionals. Licensed, insured, and available 24/7 for all your plumbing needs.
        </p>
      </div>

      <div>
        <h4 className="font-heading font-bold text-base mb-4">Quick Links</h4>
        <ul className="space-y-2 text-sm text-primary-foreground/80">
          {[
            { to: "/", label: "Home" },
            { to: "/services", label: "Services" },
            { to: "/about", label: "About Us" },
            { to: "/contact", label: "Contact" },
          ].map((l) => (
            <li key={l.to}>
              <Link to={l.to} className="hover:text-primary-foreground transition-colors">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-heading font-bold text-base mb-4">Contact Us</h4>
        <ul className="space-y-3 text-sm text-primary-foreground/80">
          <li className="flex items-center gap-2">
            <Phone className="h-4 w-4 shrink-0" />
            <a href={PHONE_HREF} className="hover:text-primary-foreground">{PHONE}</a>
          </li>
          <li className="flex items-start gap-2">
            <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
            Fort Worth, TX
          </li>
        </ul>
        <div className="flex gap-3 mt-4">
          <a href="#" aria-label="Facebook" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
            <Facebook className="h-4 w-4" />
          </a>
          <a href="#" aria-label="Instagram" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
            <Instagram className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
    <div className="border-t border-primary-foreground/20 text-center py-6 text-xs text-primary-foreground/60">
      © {new Date().getFullYear()} Blue Diamond Plumbing of Texas. All rights reserved.
    </div>
  </footer>
);

export default Footer;
