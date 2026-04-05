import AnimatedSection from "./AnimatedSection";
import { WhatsAppIcon } from "./Navbar";

const CTASection = () => (
  <section className="py-16 gradient-primary">
    <div className="container mx-auto px-4 text-center">
      <AnimatedSection>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Ready to Glow?
        </h2>
        <p className="font-body text-primary-foreground/80 mb-8 max-w-lg mx-auto">
          Book your appointment today and let us bring out the best version of you.
        </p>
        <a
          href="https://wa.me/923359767499"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-whatsapp text-whatsapp-foreground px-8 py-3 rounded-full font-body font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          <WhatsAppIcon className="w-5 h-5" />
          Chat on WhatsApp
        </a>
      </AnimatedSection>
    </div>
  </section>
);

export default CTASection;
