import { Phone } from "lucide-react";

const FloatingCallButton = () => (
  <a
    href="tel:+16825550147"
    className="fixed bottom-6 right-6 z-50 md:hidden flex items-center justify-center w-14 h-14 rounded-full bg-accent text-accent-foreground shadow-xl hover:brightness-110 transition-all animate-fade-in"
    aria-label="Call Now"
  >
    <Phone className="h-6 w-6" />
  </a>
);

export default FloatingCallButton;
