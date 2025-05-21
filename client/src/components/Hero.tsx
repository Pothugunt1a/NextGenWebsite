import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 gradient-bg text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              variants={itemVariants}
            >
              Transforming Business with Advanced AI
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl mb-8 text-slate-200"
              variants={itemVariants}
            >
              Leverage cutting-edge artificial intelligence technologies to streamline operations, 
              gain valuable insights, and drive unprecedented growth.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              variants={itemVariants}
            >
              <Button
                onClick={() => scrollToSection("solutions")}
                className="bg-white text-primary hover:bg-slate-200 font-semibold px-8 py-6 rounded-full text-center transition-colors h-auto"
              >
                Explore Solutions
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="bg-transparent hover:bg-primary-dark border-2 border-white font-semibold px-8 py-6 rounded-full text-center transition-colors text-white h-auto"
              >
                Contact Us
              </Button>
            </motion.div>
          </motion.div>
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=680&h=500&q=80" 
              alt="Advanced AI visualization" 
              className="rounded-xl shadow-2xl w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
