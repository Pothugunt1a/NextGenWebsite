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
      image: "./assets/ai-network-banner1.jpg",
    },
    {
      title: "WE ARE RT NEXTGEN AI",
      subtitle: "Smarter Business",
      description:
        "We help companies build smarter workflows and predictive systems using cutting-edge AI technologies and machine learning frameworks.",
      image: "./assets/ai-network-banner2.png",
    },
    {
      title: "WE ARE RT NEXTGEN AI",
      subtitle: "Innovate with Intelligence",
      description:
        "Join us on the journey to the future with adaptive technologies that think, learn, and evolve with your business needs.",
      image: "./assets/ai-network-banner3.png",
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
          src="/assets/Home-banner.gif"
          alt="Home Banner"
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
                      <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                        {banner.title}
                      </motion.h1>
                      <motion.h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                        {banner.subtitle}
                      </motion.h2>
                      <motion.p className="text-lg md:text-xl mb-8 text-slate-200">
                        {banner.description}
                      </motion.p>

                      <motion.div className="bg-white/10 rounded-xl p-4 mb-8 backdrop-blur-sm">
                        <div className="text-xl font-semibold mb-3">
                          Our AI Expertise:
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          {bannerIcons.map((item, idx) => (
                            <div
                              key={idx}
                              className="flex items-center space-x-2 bg-white/10 rounded-lg p-3 transition-all hover:bg-white/20"
                            >
                              <div className="text-white">{item.icon}</div>
                              <span>{item.label}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>

                      <motion.div 
                        className="bg-white rounded-lg shadow-xl p-4 w-60 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <div className="text-sm text-slate-500 mb-1">
                          Success Rate
                        </div>
                        <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-2">
                          95% Accuracy
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                            style={{ width: "95%" }}
                          ></div>
                        </div>
                      </motion.div>

                      <motion.div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold px-8 py-6 rounded-full text-center transition-colors h-auto">
                          Enterprise Solutions
                        </div>
                        <Button
                          onClick={() => scrollToSection("case-studies")}
                          className="bg-white text-blue-600 hover:bg-blue-50 hover:text-cyan-600 font-semibold px-8 py-6 rounded-full text-center transition-colors h-auto"
                        >
                          View Case Studies
                        </Button>
                        <Button
                          onClick={() => {
                            setLocation("/contact");
                            window.scrollTo(0, 0);
                          }}
                          variant="outline"
                          className="bg-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 border-2 border-blue-500 hover:border-cyan-500 font-semibold px-8 py-6 rounded-full text-center transition-all text-white h-auto"
                        >
                          Contact Us
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
