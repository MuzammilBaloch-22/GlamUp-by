import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Check } from "lucide-react";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";
import { WhatsAppIcon } from "./Navbar";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", service: "", date: "", time: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Book Your Appointment" subtitle="We'd love to hear from you" />
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <AnimatedSection delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-input bg-card font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                maxLength={20}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-input bg-card font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <select
                required
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-input bg-card font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">Select Service</option>
                <option>Hair Styling & Treatment</option>
                <option>Bridal Makeup</option>
                <option>Party Makeup</option>
                <option>Facial & Skincare</option>
                <option>Nails</option>
              </select>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="date"
                  required
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-input bg-card font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <input
                  type="time"
                  required
                  value={form.time}
                  onChange={(e) => setForm({ ...form, time: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-input bg-card font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <textarea
                placeholder="Additional Message (optional)"
                maxLength={500}
                rows={3}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-input bg-card font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              />
              <button
                type="submit"
                className="w-full gradient-primary text-primary-foreground py-3 rounded-full font-body font-semibold text-sm hover:shadow-elevated transition-shadow"
              >
                Submit Booking Request
              </button>
            </form>

            <AnimatePresence>
              {submitted && (
                <motion.div
                  className="mt-4 bg-card border border-primary/30 rounded-xl p-4 flex items-start gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <p className="font-body text-sm text-muted-foreground">
                    Your booking request has been received. Our team will contact you shortly. Please arrive on time for your appointment.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="font-body text-sm text-muted-foreground">
                  Shop 1, N571, opp. Rao Israr Heights Road, near Farhan Biryani, Block 12 Gulistan-e-Johar, Karachi, Pakistan
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:03359767499" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                  0335-9767499
                </a>
              </div>
              <a
                href="https://wa.me/923359767499"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-whatsapp text-whatsapp-foreground px-5 py-2.5 rounded-full font-body text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                <WhatsAppIcon className="w-4 h-4" />
                Chat on WhatsApp
              </a>
              <div className="rounded-xl overflow-hidden shadow-soft mt-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.6!2d67.1!3d24.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDU0JzAwLjAiTiA2N8KwMDYnMDAuMCJF!5e0!3m2!1sen!2s!4v1"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Glam Up Location"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
