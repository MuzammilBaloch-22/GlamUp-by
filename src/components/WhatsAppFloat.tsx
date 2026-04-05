import { motion } from "framer-motion";
import { WhatsAppIcon } from "./Navbar";

const WhatsAppFloat = () => (
  <motion.a
    href="https://wa.me/923359767499"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-whatsapp rounded-full flex items-center justify-center shadow-elevated hover:scale-110 transition-transform"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 1, type: "spring" }}
    aria-label="Chat on WhatsApp"
  >
    <WhatsAppIcon className="w-7 h-7 text-whatsapp-foreground" />
  </motion.a>
);

export default WhatsAppFloat;
