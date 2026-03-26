import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Sarah M.", text: "They came out within the hour on a Sunday night. Fixed our burst pipe fast and the price was fair. Couldn't ask for more!", rating: 5 },
  { name: "James T.", text: "Very professional and courteous. They explained everything upfront and did an excellent job on our water heater replacement.", rating: 5 },
  { name: "Linda R.", text: "Blue Diamond is our go-to plumber. Always on time, always honest, and their work is top-notch. Highly recommend!", rating: 5 },
  { name: "Carlos G.", text: "Had a major drain clog and they had it cleared in no time. Great communication and reasonable pricing.", rating: 4 },
];

const ReviewsSection = () => (
  <section className="section-padding bg-secondary">
    <div className="container-main">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-4">What Our Customers Say</h2>
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-accent text-accent" />
            ))}
          </div>
          <span className="font-semibold">4.7 out of 5</span>
          <span>· 31 Reviews</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {reviews.map((r) => (
          <div key={r.name} className="bg-card rounded-xl border border-border p-6">
            <Quote className="h-6 w-6 text-primary/30 mb-3" />
            <p className="text-foreground text-sm leading-relaxed mb-4">"{r.text}"</p>
            <div className="flex items-center justify-between">
              <span className="font-semibold text-foreground text-sm">{r.name}</span>
              <div className="flex gap-0.5">
                {[...Array(r.rating)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewsSection;
