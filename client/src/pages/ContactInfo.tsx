
import { motion } from "framer-motion";
import Contact from "@/components/Contact";

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen bg-gradient-to-b from-slate-900 to-slate-800"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 opacity-10" 
          style={{ 
            backgroundImage: 'url("/assets/contact-banner.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(3px)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/90" />
      </div>
      <div className="relative z-10 pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Get in Touch</h1>
            <p className="text-xl font-medium text-white max-w-2xl mx-auto">
              Let's discuss how our AI solutions can transform your business. 
              We're here to help you navigate the future of technology.
            </p>
          </div>
        </div>
        <Contact />
      </div>
    </motion.div>
  );
}
