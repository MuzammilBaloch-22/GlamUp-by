import { Shield, Star, Heart, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";

const reasons = [
  { icon: Shield, title: "Hygienic Environment", desc: "We maintain the highest standards of cleanliness and hygiene for your safety." },
  { icon: Star, title: "Professional Staff", desc: "Our trained beauty experts deliver flawless results every time." },
  { icon: Sparkles, title: "Premium Products", desc: "We exclusively use top-tier, skin-friendly beauty products." },
  { icon: Heart, title: "Customer Satisfaction", desc: "Your happiness and confidence are at the heart of everything we do." },
];

const WhyChooseUs = () => (
  <section className="py-20 bg-secondary/30">
    <div className="container mx-auto px-4">
      <SectionHeading title="Why Choose Us" subtitle="Experience the Glam Up difference" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {reasons.map((r, i) => (
          <AnimatedSection key={r.title} delay={i * 0.1}>
            <div className="bg-card rounded-2xl p-6 text-center shadow-soft hover:shadow-card transition-shadow border border-border group">
              <div className="w-14 h-14 rounded-full gradient-primary mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <r.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{r.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{r.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
