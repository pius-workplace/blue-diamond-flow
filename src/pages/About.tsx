import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import { ShieldCheck, Users, Clock, Award } from "lucide-react";

const values = [
  { icon: ShieldCheck, title: "Licensed & Insured", desc: "Full licensing and insurance for your peace of mind." },
  { icon: Users, title: "Family-Owned", desc: "We treat every customer like family — because that's who we are." },
  { icon: Clock, title: "24/7 Availability", desc: "Plumbing emergencies don't wait, and neither do we." },
  { icon: Award, title: "Quality Guaranteed", desc: "We stand behind our work with a 100% satisfaction guarantee." },
];

const About = () => (
  <>
    <Header />
    <main>
      <section className="bg-primary text-primary-foreground section-padding">
        <div className="container-main text-center max-w-3xl mx-auto">
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl mb-4">About Blue Diamond Plumbing</h1>
          <p className="text-lg opacity-90">Locally owned. Proudly serving Fort Worth, Texas.</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-main max-w-3xl mx-auto space-y-6 text-foreground leading-relaxed">
          <p className="text-lg">
            Blue Diamond Plumbing of Texas was founded with a simple mission: provide honest, reliable plumbing services to the Fort Worth community at fair prices.
          </p>
          <p>
            As a locally owned and operated company, we understand the unique plumbing needs of Texas homes and businesses. From scorching summers that stress water heaters to aging sewer systems, our experienced team has seen — and fixed — it all.
          </p>
          <p>
            Every member of our team is licensed, background-checked, and committed to treating your home with respect. We show up on time, explain everything in plain language, and never surprise you with hidden fees.
          </p>
          <p>
            Whether it's a late-night emergency or a planned renovation, Blue Diamond Plumbing is the name Fort Worth trusts.
          </p>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container-main">
          <h2 className="font-heading font-extrabold text-3xl text-foreground text-center mb-10">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="text-center">
                <div className="mx-auto w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <v.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
    <FloatingCallButton />
  </>
);

export default About;
