
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BrainCircuit, Cpu, ServerCog } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

  const banners = [
    {
      title: "WE ARE RT NEXTGEN AI",
      subtitle: "Transformative AI Solutions",
      description: "Pioneering the future with cutting-edge artificial intelligence and machine learning solutions that revolutionize business operations and unlock unprecedented possibilities.",
      image: "https://images.unsplash.com/photo-1680553437331-6d66121ada86?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1932&h=1024"
    },
    {
      title: "WE ARE RT NEXTGEN AI",
      subtitle: "AI-Powered Innovation",
      description: "Harness the power of neural networks, deep learning, and advanced algorithms to transform your data into actionable intelligence and competitive advantage.",
      image: "https://images.unsplash.com/photo-1488229297570-58520851e868?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1932&h=1024"
    }
  ];

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
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 relative text-white">
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop"
          alt="Banner Background"
          className="w-full h-full object-cover brightness-50"
        />
      </div>
      <div className="relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Carousel className="w-full">
          <CarouselContent>
            {banners.map((banner, index) => (
              <CarouselItem key={index}>
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <motion.div 
                    className="md:w-1/2 mb-10 md:mb-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.h1 
                      className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
                    >
                      {banner.title}
                    </motion.h1>
                    <motion.h2 
                      className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6"
                    >
                      {banner.subtitle}
                    </motion.h2>
                    <motion.p 
                      className="text-lg md:text-xl mb-8 text-slate-200"
                    >
                      {banner.description}
                    </motion.p>

                    <motion.div 
                      className="bg-white/10 rounded-xl p-4 mb-8 backdrop-blur-sm"
                    >
                      <div className="text-xl font-semibold mb-3">Our AI Expertise:</div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {bannerIcons.map((item, idx) => (
                          <div key={idx} className="flex items-center space-x-2 bg-white/10 rounded-lg p-3 transition-all hover:bg-white/20">
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
                        src={banner.image}
                        alt="AI visualization" 
                        className="rounded-xl shadow-2xl w-full h-auto"
                      />
                      
                      <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-4 w-60">
                        <div className="text-sm text-slate-500 mb-1">Success Rate</div>
                        <div className="text-2xl font-bold text-primary mb-2">95% Accuracy</div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full" style={{ width: "95%" }}></div>
                        </div>
                      </div>
                      
                      <div className="absolute -top-4 -right-4 bg-secondary rounded-full shadow-lg p-3 text-white">
                        <div className="text-sm font-bold">Enterprise</div>
                        <div className="text-xs">AI Solutions</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}
