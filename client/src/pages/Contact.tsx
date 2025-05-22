
import { motion } from "framer-motion";
import Contact from "@/components/Contact";

export default function ContactPage() {
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
      <Contact />
    </motion.div>
  );
}
