import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { useLocation } from "wouter";
import { ArrowRight, BrainCircuit, Cpu, ServerCog } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export default function Hero() {
  const [, setLocation] = useLocation();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const banners = [
    {
      title: "WE ARE RT NEXTGEN AI",
      subtitle: "Creative AI Solutions",
      description:
        "Accelerating innovation with next-gen AI-powered technologies designed to empower enterprises and drive progress through intelligent automation and data-driven insights.",
      image: "/assets/ai-network-banner1.jpg",
    },
    {
      title: "WE ARE RT NEXTGEN AI",
      subtitle: "Smarter Business",
      description:
        "We help companies build smarter workflows and predictive systems using cutting-edge AI technologies and machine learning frameworks.",
      image: "/assets/ai-network-banner2.png",
    },
    {
      title: "WE ARE RT NEXTGEN AI",
      subtitle: "Innovate with Intelligence",
      description:
        "Join us on the journey to the future with adaptive technologies that think, learn, and evolve with your business needs.",
      image: "/assets/ai-network-banner3.png",
    },
  ];

  const bannerIcons = [
    {
      icon: <BrainCircuit size={24} />,
      label: "AI Consulting",
    },
    {
      icon: <Cpu size={24} />,
      label: "Machine Learning",
    },
    {
      icon: <ServerCog size={24} />,
      label: "Generative AI",
    },
  ];

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 text-white"
    >
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/assets/ai-brain-banner.png"
          alt="AI Brain Banner"
          className="w-full h-full object-cover opacity-60 brightness-125"
        />
      </div>
      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Carousel 
            className="w-full" 
            opts={{
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: true,
                stopOnMouseEnter: true,
              })
            ]}
          >
            <CarouselContent>
              {banners.map((banner, index) => (
                <CarouselItem key={index}>
                  <div className="flex flex-col items-center justify-center gap-8 px-4 md:px-8">
                    <motion.div
                      className="w-full mb-10 md:mb-0 max-w-3xl mx-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.h1 
                        className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                      >
                        <span className="bg-gradient-to-r from-white via-blue-100 to-[#0080FF] bg-clip-text text-transparent">
                          {banner.title}
                        </span>
                      </motion.h1>
                      <motion.h2 
                        className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                      >
                        {banner.subtitle}
                      </motion.h2>
                      <motion.p 
                        className="text-lg md:text-xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed"
                        style={{ lineHeight: '1.75rem' }}
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                      >
                        {banner.description}
                      </motion.p>

                      <motion.div 
                        className="bg-white/5 rounded-xl p-6 mb-8 backdrop-blur-sm border border-white/10"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                      >
                        <div className="text-xl font-semibold mb-4 text-white">
                          Our AI Expertise:
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          {bannerIcons.map((item, idx) => (
                            <motion.div
                              key={idx}
                              className="flex items-center space-x-3 bg-white/5 rounded-lg p-4 transition-all hover:bg-blue-500/20 hover:scale-105 cursor-pointer group"
                              whileHover={{ y: -2 }}
                            >
                              <div className="text-cyan-400 group-hover:text-white transition-colors">{item.icon}</div>
                              <span className="text-white font-medium">{item.label}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>

                      <motion.div 
                        className="bg-white/5 rounded-xl shadow-xl p-6 w-72 mb-8 backdrop-blur-sm border border-white/10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.0, duration: 0.8 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                      >
                        <div className="text-sm text-gray-300 mb-2">
                          Success Rate
                        </div>
                        <div className="text-3xl font-bold text-white mb-3">
                          95% Accuracy
                        </div>
                        <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: "95%" }}
                            transition={{ delay: 1.2, duration: 1.0 }}
                          ></motion.div>
                        </div>
                      </motion.div>

                      <motion.div 
                        className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.4, duration: 0.8 }}
                      >
                        <motion.div 
                          className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold px-8 py-4 rounded-full text-center transition-all hover:from-blue-600 hover:to-cyan-600 hover:scale-105 cursor-pointer"
                          whileHover={{ y: -2 }}
                        >
                          Enterprise Solutions
                        </motion.div>
                        <Button
                          onClick={() => scrollToSection("case-studies")}
                          className="group bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 rounded-full text-center transition-all hover:scale-105"
                        >
                          View Case Studies
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button
                          onClick={() => {
                            setLocation("/contact");
                            window.scrollTo(0, 0);
                          }}
                          variant="outline"
                          className="group bg-transparent hover:bg-blue-500 border-2 border-white font-semibold px-8 py-4 rounded-full text-center transition-all text-white hover:scale-105"
                        >
                          Contact Us
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </motion.div>
                    </motion.div>
                    
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-2 text-black hover:text-primary transition-colors" />
            <CarouselNext className="hidden md:flex -right-2 text-black hover:text-primary transition-colors" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
