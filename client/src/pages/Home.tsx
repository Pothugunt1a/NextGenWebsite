import { motion } from "framer-motion";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ServicesHighlights from "@/components/ServicesHighlights";
import CaseStudies from "@/components/CaseStudies";
import Statistics from "@/components/Statistics";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

export default function Home() {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <About />
      <ServicesHighlights />
      <CaseStudies />
      <Statistics />
      <Testimonials />
      <motion.div
          className="max-w-5xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-slate-100 rounded-xl overflow-hidden shadow-md">
            <div className="relative p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 bg-gradient-to-r from-slate-100 to-slate-200">
              <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/pattern-dots.svg')]"></div>
              
              <div className="flex-1 relative z-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
                  For Further Information And To Learn More About Our AI Solutions
                </h2>
                <p className="text-slate-700 mb-4">
                  Along with how we can support your organisation in harnessing the full potential of AI make contact with our experienced IT staff.
                </p>
              </div>
              
              <div className="relative z-10 shrink-0 text-center md:text-right">
                <p className="text-sm font-semibold uppercase text-slate-600 tracking-wider mb-1">REACH OUT NOW!</p>
                <a 
                  href="tel:+14696660019" 
                  className="text-2xl md:text-3xl font-bold text-primary hover:text-primary-dark transition-colors block mb-3"
                >
                  +1 (469) 666-0019
                </a>
                <Button 
                  className="bg-primary hover:bg-primary-dark text-white"
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Contact us
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      <CTA />
    </motion.div>
  );
}
