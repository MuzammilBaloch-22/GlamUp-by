import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import aboutImg from "@/assets/about-salon.jpg";

const AboutSection = () => (
  <section id="about" className="py-20 bg-secondary/30">
    <div className="container mx-auto px-4">
      <SectionHeading title="About Us" subtitle="Where beauty meets elegance" />
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
        <AnimatedSection delay={0.1}>
          <p className="font-body text-muted-foreground leading-relaxed mb-4">
            At <strong className="text-foreground">Glam Up Makeup Studio</strong>, we believe every individual deserves to feel confident, radiant, and beautiful. Founded by the talented Simra Usmani, our studio offers a serene, hygienic, and aesthetically curated environment where professional artistry meets genuine care.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed mb-6">
            Our skilled team is dedicated to delivering flawless results — from bridal transformations to everyday glam — using only premium products and the latest techniques. Your satisfaction is not just our goal; it's our promise.
          </p>
          <Link
            to="/about"
            className="inline-block gradient-primary text-primary-foreground px-6 py-2.5 rounded-full font-body font-medium text-sm hover:shadow-elevated transition-shadow"
          >
            Read More
          </Link>
        </AnimatedSection>
        <AnimatedSection delay={0.3}>
          <img
            src={aboutImg}
            alt="Glam Up Studio Interior"
            className="rounded-2xl shadow-card w-full object-cover max-h-[450px]"
            loading="lazy"
            width={800}
            height={1000}
          />
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default AboutSection;
