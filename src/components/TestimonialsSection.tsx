import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  { name: "Mehlub Usmani", text: "Amazing experience, very professional and relaxing environment. The team truly knows how to make you feel special." },
  { name: "Samiya Yasir", text: "Comfortable environment, very satisfied with the services. I always leave feeling beautiful and confident." },
  { name: "Syeda Fozia Adeel", text: "Highly recommended! Staff is very friendly and skilled. The bridal look they created for me was absolutely stunning." },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Client Testimonials" subtitle="What our valued clients say about us" />
        <AnimatedSection className="max-w-2xl mx-auto relative">
          <div className="relative overflow-hidden min-h-[200px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                className="bg-card rounded-2xl p-8 shadow-card border border-border text-center w-full"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Quote className="w-8 h-8 text-primary/30 mx-auto mb-4" />
                <p className="font-body text-muted-foreground italic leading-relaxed mb-6">
                  "{testimonials[current].text}"
                </p>
                <div className="w-12 h-12 rounded-full gradient-primary mx-auto mb-2 flex items-center justify-center text-primary-foreground font-display font-bold text-lg">
                  {testimonials[current].name[0]}
                </div>
                <p className="font-display font-semibold text-foreground">{testimonials[current].name}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-border"}`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrent((c) => (c + 1) % testimonials.length)}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TestimonialsSection;
