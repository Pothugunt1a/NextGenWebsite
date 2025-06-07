import { motion } from "framer-motion";
import { Button } from "./ui/button";

export default function CTA() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-16 gradient-bg text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg mb-8">
            Take the first step toward leveraging AI to drive growth, efficiency, and innovation.
          </p>
          <Button
            onClick={scrollToContact}
            className="bg-white text-primary hover:bg-slate-200 font-semibold px-8 py-6 rounded-full transition-colors h-auto"
          >
            Schedule a Free Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
