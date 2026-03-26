import { ShieldCheck, Clock, CalendarCheck, MapPin } from "lucide-react";

const badges = [
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: Clock, label: "24/7 Emergency Service" },
  { icon: CalendarCheck, label: "Same-Day Service" },
  { icon: MapPin, label: "Locally Owned & Operated" },
];

const TrustBar = () => (
  <section className="bg-card border-y border-border">
    <div className="container-main px-4 md:px-8 py-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {badges.map((b) => (
          <div key={b.label} className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <b.icon className="h-5 w-5" />
            </div>
            <span className="text-sm font-semibold text-foreground">{b.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;
