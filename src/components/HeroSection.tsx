import { motion } from "framer-motion";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg.jpg";
import { WhatsAppIcon } from "./Navbar";

// Background Component
const HeroBackground = () => (
  <div className="absolute inset-0">
    <img 
      src={heroBg} 
      alt="Glam Up Studio" 
      className="w-full h-full object-cover object-center" 
      width={1920} 
      height={1080} 
    />
    <div className="absolute inset-0 gradient-hero" />
  </div>
);

// Logo Component
const HeroLogo = () => (
  <motion.img
    src={logo}
    alt="Glam Up Logo"
    className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 mx-auto mb-4 sm:mb-6 drop-shadow-2xl rounded-full object-contain"
    initial={{ scale: 0, rotate: -180 }}
    animate={{ scale: 1, rotate: 0 }}
    transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
  />
);

// Heading Component
const HeroHeading = () => (
  <motion.h1
    className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-3 sm:mb-4 leading-tight px-2"
    initial={{ y: 30, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.3, duration: 0.6 }}
  >
    Glam Up Makeup Studio
    <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mt-2 sm:mt-3 italic text-primary-foreground/95">
      by Simra Usmani
    </span>
  </motion.h1>
);

// Tagline Component
const HeroTagline = () => (
  <motion.p
    className="font-body text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground/90 mb-2 sm:mb-3 px-4"
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.5, duration: 0.6 }}
  >
    Enhancing Your Beauty with Professional Care
  </motion.p>
);

// Services List Component
const HeroServices = () => (
  <motion.p
    className="font-body text-xs sm:text-sm md:text-base text-primary-foreground/75 tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-6 sm:mb-8 px-4"
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.6, duration: 0.6 }}
  >
    Bridal • Hair • Makeup • Skincare
  </motion.p>
);

// CTA Buttons Component
const HeroCTA = () => (
  <motion.div
    className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 px-4 w-full max-w-md sm:max-w-none mx-auto"
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.8, duration: 0.6 }}
  >
    <a
      href="#contact"
      className="gradient-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-body font-semibold text-sm sm:text-base tracking-wide hover:shadow-elevated transition-all duration-300 text-center hover:scale-105"
    >
      Book Appointment
    </a>
    <a
      href="https://wa.me/923359767499"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-whatsapp text-whatsapp-foreground px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-body font-semibold text-sm sm:text-base tracking-wide hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
    >
      <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5" />
      <span>Chat on WhatsApp</span>
    </a>
  </motion.div>
);

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-0"
    >
      <HeroBackground />

      <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 max-w-4xl lg:max-w-5xl mx-auto py-12 sm:py-16 md:py-20">
        <HeroLogo />
        <HeroHeading />
        <HeroTagline />
        <HeroServices />
        <HeroCTA />
      </div>
    </section>
  );
};

export default HeroSection;
