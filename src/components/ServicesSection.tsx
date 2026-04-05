import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";
import serviceHair from "@/assets/service-hair.jpg";
import serviceBridal from "@/assets/service-bridal.jpg";
import serviceParty from "@/assets/service-party.jpg";
import serviceFacial from "@/assets/service-facial.jpg";
import serviceNails from "@/assets/service-nails.jpg";

const services = [
  { title: "Hair Styling & Treatment", image: serviceHair, featured: true },
  { title: "Bridal Makeup", image: serviceBridal },
  { title: "Party Makeup", image: serviceParty },
  { title: "Facial & Skincare", image: serviceFacial },
  { title: "Nails — Acrylic, Manicure & Pedicure", image: serviceNails },
];

const ServicesSection = () => (
  <section id="services" className="py-20">
    <div className="container mx-auto px-4">
      <SectionHeading title="Our Services" subtitle="Premium beauty services tailored to perfection" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {services.map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 0.1} className={s.featured ? "sm:col-span-2 lg:col-span-1" : ""}>
            <motion.div
              className="group relative rounded-2xl overflow-hidden shadow-card cursor-pointer h-72"
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-display text-xl font-semibold text-primary-foreground">{s.title}</h3>
                {s.featured && (
                  <span className="inline-block mt-2 bg-primary/90 text-primary-foreground text-xs font-body px-3 py-1 rounded-full">
                    Featured
                  </span>
                )}
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
