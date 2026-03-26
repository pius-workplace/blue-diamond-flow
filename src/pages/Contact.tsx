import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";

const PHONE = "(817) 852-9498";
const PHONE_HREF = "tel:+1 (817) 852-9498";

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("Please fill in your name and phone number.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Thank you! We'll call you back shortly.");
      setForm({ name: "", phone: "", service: "", message: "" });
    }, 1000);
  };

  return (
    <>
      <Header />
      <main>
        <section className="bg-primary text-primary-foreground section-padding">
          <div className="container-main text-center max-w-3xl mx-auto">
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl mb-4">Contact Us</h1>
            <p className="text-lg opacity-90">Get in touch for a free estimate or emergency service.</p>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-main grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-card rounded-xl border border-border p-6 md:p-8">
              <h2 className="font-heading font-bold text-2xl text-foreground mb-6">Request a Free Estimate</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Name *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Your full name"
                    maxLength={100}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Phone *</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="(555) 123-4567"
                    maxLength={20}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Service Needed</label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select a service</option>
                    <option>Drain Cleaning</option>
                    <option>Leak Detection & Repair</option>
                    <option>Sewer Line Repair</option>
                    <option>Water Heater Services</option>
                    <option>Toilet, Faucet & Shower Repair</option>
                    <option>Gas Line Services</option>
                    <option>Emergency Plumbing</option>
                    <option>Kitchen & Bathroom Plumbing</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring min-h-[100px]"
                    placeholder="Tell us about your plumbing issue..."
                    maxLength={1000}
                  />
                </div>
                <Button type="submit" variant="cta" size="lg" className="w-full" disabled={loading}>
                  {loading ? "Sending..." : "Submit Request"}
                </Button>
              </form>
            </div>

            {/* Contact info + map placeholder */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading font-bold text-2xl text-foreground mb-6">Get In Touch</h2>
                <div className="space-y-4">
                  <a href={PHONE_HREF} className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary"><Phone className="h-5 w-5" /></div>
                    <div>
                      <p className="text-sm text-muted-foreground">Call Us 24/7</p>
                      <p className="font-bold">{PHONE}</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-3 text-foreground">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary"><MapPin className="h-5 w-5" /></div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-bold">Fort Worth, TX</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary"><Clock className="h-5 w-5" /></div>
                    <div>
                      <p className="text-sm text-muted-foreground">Hours</p>
                      <p className="font-bold">Open 24 Hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="rounded-xl overflow-hidden border border-border h-64 bg-muted flex items-center justify-center">
                <iframe
                  title="Blue Diamond Plumbing Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214587.67924757996!2d-97.51283!3d32.7554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e6e122dc807ad%3A0xa4af8bf8dd69acbd!2sFort%20Worth%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCallButton />
    </>
  );
};

export default Contact;
