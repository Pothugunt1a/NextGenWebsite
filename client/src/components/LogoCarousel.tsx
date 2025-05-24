
import React from "react";
import { motion } from "framer-motion";

const logos = [
  { src: "/assets/microsoft-seeklogo.png", alt: "Microsoft" },
  { src: "/assets/infosys-limited-seeklogo.png", alt: "Infosys" },
  { src: "/assets/ibm-logo.png", alt: "IBM" },
  { src: "/assets/google-2015-new-seeklogo.png", alt: "Google" },
  { src: "/assets/envato-seeklogo.png", alt: "Envato" },
  { src: "/assets/deloitte-seeklogo.png", alt: "Deloitte" },
];

export default function LogoCarousel() {
  return (
    <section className="py-16 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-2xl font-bold text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Trusted by Industry Leaders
        </motion.h2>
        <div className="relative flex overflow-x-hidden group">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-16 py-8 group-hover:pause">
            {logos.concat(logos).map((logo, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 md:h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
