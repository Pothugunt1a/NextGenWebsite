import { motion } from "framer-motion";
import { useEffect } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ServicesHighlights from "@/components/ServicesHighlights";
import CaseStudies from "@/components/CaseStudies";
import Statistics from "@/components/Statistics";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import InfoBanner from "@/components/InfoBanner";

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
      <CTA />
      <InfoBanner />
    </motion.div>
  );
}
