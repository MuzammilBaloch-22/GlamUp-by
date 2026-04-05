import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import AnimatedSection from "@/components/AnimatedSection";
import aboutImg from "@/assets/about-salon.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery5 from "@/assets/gallery-5.jpg";

const About = () => (
  <>
    <Navbar />
    <section className="pt-28 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <AnimatedSection>
          <Link to="/" className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </AnimatedSection>

        <AnimatedSection>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">About Glam Up</h1>
          <div className="w-20 h-1 gradient-primary rounded-full mb-8" />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <AnimatedSection delay={0.1}>
            <img src={aboutImg} alt="Our Studio" className="rounded-2xl shadow-card w-full h-80 object-cover" loading="lazy" />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Our Story</h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              Glam Up Makeup Studio was born from a passion for beauty and a vision to create a space where every individual feels seen, valued, and transformed. Founded by the talented Simra Usmani, the studio has grown into one of Karachi's most trusted beauty destinations.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              From humble beginnings to serving hundreds of satisfied clients, our journey has been fueled by dedication, creativity, and an unwavering commitment to excellence.
            </p>
          </AnimatedSection>
        </div>

        <AnimatedSection className="mb-16">
          <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Our Philosophy</h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-4">
            At Glam Up, we believe beauty is not about conforming to standards — it's about celebrating individuality. Every brushstroke, every style, and every treatment is thoughtfully crafted to enhance your unique features and bring out the very best version of you.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed">
            We invest in premium products, continuous learning, and a hygienic, welcoming environment because our clients deserve nothing less than perfection. Whether it's your wedding day, a special celebration, or a self-care afternoon, we ensure your experience is nothing short of extraordinary.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-3 gap-4 mb-16">
          {[heroBg, gallery1, gallery5].map((img, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <motion.img
                src={img}
                alt="Glam Up work"
                className="rounded-xl w-full h-48 object-cover shadow-soft"
                loading="lazy"
                whileHover={{ scale: 1.03 }}
              />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="gradient-primary rounded-2xl p-8 text-center">
            <h2 className="font-display text-2xl font-bold text-primary-foreground mb-3">Visit Us Today</h2>
            <p className="font-body text-primary-foreground/80 mb-6 max-w-lg mx-auto">
              Step into Glam Up and experience the art of professional beauty care in a warm, luxurious setting.
            </p>
            <Link to="/#contact" className="inline-block bg-card text-foreground px-6 py-2.5 rounded-full font-body font-semibold text-sm hover:shadow-elevated transition-shadow">
              Book Appointment
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
    <Footer />
    <WhatsAppFloat />
  </>
);

export default About;
