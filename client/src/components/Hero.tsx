import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BrainCircuit, Cpu, ServerCog } from "lucide-react";

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

  const bannerIcons = [
    {
      icon: <BrainCircuit size={24} />,
      label: "AI Consulting"
    },
    {
      icon: <Cpu size={24} />,
      label: "Machine Learning"
    },
    {
      icon: <ServerCog size={24} />,
      label: "Generative AI"
    }
  ];

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
              Advanced AI Solutions for Business Innovation
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl mb-8 text-slate-200"
              variants={itemVariants}
            >
              Leverage cutting-edge artificial intelligence technologies to streamline operations, 
              gain valuable insights, and drive unprecedented growth across your organization.
            </motion.p>

            {/* AI Solutions Banner */}
            <motion.div
              className="bg-white/10 rounded-xl p-4 mb-8 backdrop-blur-sm"
              variants={itemVariants}
            >
              <div className="text-xl font-semibold mb-3">Our AI Expertise:</div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {bannerIcons.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-white/10 rounded-lg p-3 transition-all hover:bg-white/20">
                    <div className="text-white">
                      {item.icon}
                    </div>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              variants={itemVariants}
            >
              <Button
                onClick={() => scrollToSection("case-studies")}
                className="bg-white text-primary hover:bg-slate-200 font-semibold px-8 py-6 rounded-full text-center transition-colors h-auto"
              >
                View Case Studies
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
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=680&h=500&q=80" 
                alt="Advanced AI visualization" 
                className="rounded-xl shadow-2xl w-full h-auto"
              />
              
              {/* Floating card with stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-4 w-60">
                <div className="text-sm text-slate-500 mb-1">Success Rate</div>
                <div className="text-2xl font-bold text-primary mb-2">95% Accuracy</div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: "95%" }}></div>
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-secondary rounded-full shadow-lg p-3 text-white">
                <div className="text-sm font-bold">Enterprise</div>
                <div className="text-xs">AI Solutions</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
