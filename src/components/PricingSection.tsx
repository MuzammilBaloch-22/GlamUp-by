import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";
import { WhatsAppIcon } from "./Navbar";

const plans = [
  { name: "Hair Styling", price: "Rs. 3,000", features: ["Professional Styling", "Hair Treatment", "Blow Dry & Set"] },
  { name: "Bridal Makeup", price: "Rs. 15,000", features: ["Full Bridal Look", "HD Makeup", "Hairstyling Included", "Touch-up Kit"], popular: true },
  { name: "Facial", price: "Rs. 2,500", features: ["Deep Cleansing", "Skin Analysis", "Premium Products"] },
];

const PricingSection = () => (
  <section id="pricing" className="py-20">
    <div className="container mx-auto px-4">
      <SectionHeading title="Our Pricing" subtitle="Premium services at competitive rates" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {plans.map((p, i) => (
          <AnimatedSection key={p.name} delay={i * 0.1}>
            <motion.div
              className={`relative rounded-2xl p-6 shadow-card border border-border bg-card h-full flex flex-col ${
                p.popular ? "ring-2 ring-primary" : ""
              }`}
              whileHover={{ y: -8, boxShadow: "var(--shadow-elevated)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-primary text-primary-foreground text-xs font-body font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-xl font-semibold text-foreground text-center mb-2">{p.name}</h3>
              <p className="font-display text-3xl font-bold text-primary text-center mb-6">{p.price}</p>
              <ul className="space-y-3 mb-6 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="font-body text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/923359767499?text=${encodeURIComponent(`Hi, I'm interested in the ${p.name} service (${p.price}).`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-whatsapp text-whatsapp-foreground w-full py-2.5 rounded-full font-body text-sm font-semibold text-center hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="w-4 h-4" />
                Get This Service
              </a>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
