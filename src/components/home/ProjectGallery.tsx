import { useState } from "react";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "@/components/AnimateOnScroll";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

import before1 from "@/assets/gallery/before-1.jpg";
import after1 from "@/assets/gallery/after-1.jpg";
import before2 from "@/assets/gallery/before-2.jpg";
import after2 from "@/assets/gallery/after-2.jpg";
import before3 from "@/assets/gallery/before-3.jpg";
import after3 from "@/assets/gallery/after-3.jpg";

const projects = [
  { before: before1, after: after1, title: "Pipe Replacement", desc: "Replaced corroded bathroom pipes with new PVC piping" },
  { before: before2, after: after2, title: "Water Heater Upgrade", desc: "Upgraded old tank heater to modern tankless system" },
  { before: before3, after: after3, title: "Drain Restoration", desc: "Cleared and restored a severely clogged kitchen drain" },
];

const ProjectGallery = () => {
  const [lightbox, setLightbox] = useState<{ img: string; title: string } | null>(null);

  return (
    <section className="section-padding bg-background">
      <div className="container-main">
        <AnimateOnScroll>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-4">Our Work</h2>
            <p className="text-muted-foreground text-lg">See the difference Blue Diamond makes — real before & after results.</p>
          </div>
        </AnimateOnScroll>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((p) => (
            <StaggerItem key={p.title}>
              <div className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="grid grid-cols-2 gap-0.5 bg-border">
                  <button
                    onClick={() => setLightbox({ img: p.before, title: `${p.title} — Before` })}
                    className="relative group cursor-pointer overflow-hidden"
                  >
                    <img src={p.before} alt={`Before - ${p.title}`} loading="lazy" width={640} height={640} className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300" />
                    <span className="absolute bottom-2 left-2 bg-destructive text-destructive-foreground text-xs font-bold px-2 py-1 rounded">BEFORE</span>
                  </button>
                  <button
                    onClick={() => setLightbox({ img: p.after, title: `${p.title} — After` })}
                    className="relative group cursor-pointer overflow-hidden"
                  >
                    <img src={p.after} alt={`After - ${p.title}`} loading="lazy" width={640} height={640} className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300" />
                    <span className="absolute bottom-2 left-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded flex items-center gap-1">AFTER <ArrowRight className="h-3 w-3" /></span>
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-heading font-bold text-foreground mb-1">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-foreground/80 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-10 right-0 text-primary-foreground hover:text-accent transition-colors"
                aria-label="Close"
              >
                <X className="h-6 w-6" />
              </button>
              <img src={lightbox.img} alt={lightbox.title} className="w-full rounded-xl shadow-2xl" />
              <p className="text-center text-primary-foreground font-semibold mt-3">{lightbox.title}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectGallery;
