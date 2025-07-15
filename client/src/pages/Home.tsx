import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { useEffect } from "react";
import Hero from "../components/Hero";

import ServicesHighlights from "../components/ServicesHighlights";
import CaseStudies from "../components/CaseStudies";
import Statistics from "../components/Statistics";
import Testimonials from "../components/Testimonials";
import LogoCarousel from "../components/LogoCarousel";
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
      className="min-h-screen bg-light text-white"
    >
      <Hero />
      <ServicesHighlights />
      <CaseStudies />
      <Statistics />
      <Testimonials />
      <LogoCarousel />
    </motion.div>
  );
}
