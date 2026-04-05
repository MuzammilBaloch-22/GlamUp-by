import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";
import transformColor from "@/assets/transform-color.jpg";
import transformBridal from "@/assets/transform-bridal.jpg";

const transformations = [
  { title: "Hair Color Transformation", image: transformColor },
  { title: "Bridal Makeup Transformation", image: transformBridal },
];

const TransformationsSection = () => (
  <section className="py-20 bg-secondary/30">
    <div className="container mx-auto px-4">
      <SectionHeading title="Our Transformations" subtitle="See the stunning before & after results" />
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {transformations.map((t, i) => (
          <AnimatedSection key={t.title} delay={i * 0.15}>
            <div className="rounded-2xl overflow-hidden shadow-card group">
              <img
                src={t.image}
                alt={t.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="p-4 bg-card text-center">
                <h3 className="font-display text-lg font-semibold text-foreground">{t.title}</h3>
                <div className="flex justify-center gap-6 mt-2 font-body text-xs text-muted-foreground uppercase tracking-widest">
                  <span>Before</span>
                  <span>→</span>
                  <span>After</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TransformationsSection;
