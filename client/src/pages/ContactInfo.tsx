import { motion } from "framer-motion";
import Contact from "../components/Contact";

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900/30"
          style={{
            backgroundImage: 'url("/assets/contact.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            opacity: 0.15,
          }}
        />
      </div>
      <div className="relative z-10 pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500">
              Get in Touch
            </h1>
            <p className="text-lg text-white">
              Have questions about our AI solutions or want to discuss how we
              can help your business? Fill out the form and our team will
              contact you shortly.
            </p>
          </div>
        </div>
        <Contact />
      </div>
    </motion.div>
  );
}
