import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import serviceHair from "@/assets/service-hair.jpg";
import serviceNails from "@/assets/service-nails.jpg";

const images = [
  { src: serviceHair, alt: "Hair Styling", span: "row-span-2" },
  { src: gallery1, alt: "Elegant Updo" },
  { src: gallery3, alt: "Nail Art" },
  { src: gallery2, alt: "Braided Hairstyle", span: "row-span-2" },
  { src: gallery5, alt: "Loose Curls" },
  { src: gallery4, alt: "Skincare Products" },
  { src: gallery6, alt: "Makeup Products" },
  { src: serviceNails, alt: "Acrylic Nails" },
];

const GallerySection = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <SectionHeading title="Our Gallery" subtitle="A showcase of our finest work" />
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 max-w-5xl mx-auto">
          {images.map((img, i) => (
            <AnimatedSection key={i} delay={i * 0.05} className="mb-4 break-inside-avoid">
              <motion.div
                className="rounded-xl overflow-hidden cursor-pointer shadow-soft group"
                whileHover={{ scale: 1.03 }}
                onClick={() => setSelected(img.src)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full object-cover group-hover:brightness-110 transition-all duration-300"
                  loading="lazy"
                />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 bg-foreground/80 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <button className="absolute top-4 right-4 text-primary-foreground" onClick={() => setSelected(null)}>
              <X size={32} />
            </button>
            <motion.img
              src={selected}
              alt="Gallery preview"
              className="max-w-full max-h-[90vh] rounded-xl object-contain"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
