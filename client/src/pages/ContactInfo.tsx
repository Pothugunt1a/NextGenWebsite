
import { motion } from "framer-motion";
import Contact from "@/components/Contact";

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 opacity-10" 
          style={{ 
            backgroundImage: 'url("/pattern-dots.svg")',
            backgroundSize: '30px 30px',
            backgroundPosition: '0 0',
            transform: 'rotate(-5deg) scale(1.2)'
          }}
        />
      </div>
      <Contact />
    </motion.div>
  );
}
