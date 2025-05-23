
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
          className="absolute inset-0 opacity-20" 
          style={{ 
            backgroundImage: 'url("/pattern-dots.svg")',
            backgroundSize: '800px 800px',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            transform: 'scale(1.5)',
            filter: 'blur(0.5px)'
          }}
        />
      </div>
      <Contact />
    </motion.div>
  );
}
