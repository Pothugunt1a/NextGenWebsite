import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";
import { ArrowRight, Building2, FlaskConical, MapPin, Cpu, Zap, Users } from "lucide-react";
import { useLocation } from "wouter";
import Autoplay from "embla-carousel-autoplay";
import lifeScienceImage from "@assets/life-science.svg";

const serviceCards = [
  {
    id: 1,
    title: "AI Consulting",
    subtitle: "Artificial Intelligence Solutions",
    description: "Strategic AI implementation and consulting services to transform your business operations.",
    icon: <Zap className="h-8 w-8 text-white" />,
    backgroundImage: "/assets/ai-network-banner2.png",
    category: "consulting",
    features: ["AI Strategy", "Digital Transformation", "Process Automation"],
    route: "/consulting"
  },
  {
    id: 2,
    title: "AI Software Development",
    subtitle: "Artificial Intelligence Solutions",
    description: "Custom AI software development and machine learning solutions for enterprise applications.",
    icon: <Building2 className="h-8 w-8 text-white" />,
    backgroundImage: "/assets/ai-network-banner3.png",
    category: "consulting",
    features: ["Custom AI Development", "Machine Learning", "Enterprise Solutions"],
    route: "/consulting"
  },
  {
    id: 3,
    title: "Generative AI Development",
    subtitle: "Artificial Intelligence Solutions",
    description: "Advanced generative AI solutions for content creation, automation, and innovative applications.",
    icon: <MapPin className="h-8 w-8 text-white" />,
    backgroundImage: "/assets/ai-network-banner1.jpg",
    category: "consulting", 
    features: ["Content Generation", "AI Models", "Creative Solutions"],
    route: "/consulting"
  },
  {
    id: 4,
    title: "SDI National Mapping",
    subtitle: "Life Science & Validation",
    description: "Transforming the way we experience and navigate indoor spaces.",
    icon: <Users className="h-8 w-8 text-white" />,
    backgroundImage: lifeScienceImage,
    category: "life-science",
    features: ["Spatial Data Infrastructure", "Digital Mapping", "Navigation Systems"],
    route: "/life-science"
  },
  {
    id: 5,
    title: "Pharmaceutical Validation",
    subtitle: "Life Science & Validation",
    description: "Comprehensive validation services for pharmaceutical manufacturing and quality assurance.",
    icon: <FlaskConical className="h-8 w-8 text-white" />,
    backgroundImage: lifeScienceImage,
    category: "life-science",
    features: ["Process Validation", "Equipment Qualification", "Regulatory Compliance"],
    route: "/validation"
  },
  {
    id: 6,
    title: "AI-Powered Analytics",
    subtitle: "Life Science & Validation",
    description: "Advanced AI solutions for research data analysis and clinical trial optimization.",
    icon: <Cpu className="h-8 w-8 text-pink-400" />,
    backgroundImage: lifeScienceImage,
    category: "life-science",
    features: ["Clinical Data Analysis", "Research Automation", "Predictive Modeling"],
    route: "/validation"
  }
];

export default function ServiceCards() {
  const [, setLocation] = useLocation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const handleCardClick = (route: string) => {
    setLocation(route);
  };

  return (
    <section className="py-16 md:py-24 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Service Solutions</h2>
          <p className="text-lg text-gray-300">
            Explore our comprehensive range of IT consulting and life science validation services
          </p>
        </motion.div>

        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Carousel
            className="w-full max-w-7xl mx-auto"
            opts={{
              align: "start",
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
            <CarouselContent className="-ml-2 md:-ml-4">
              {serviceCards.map((card) => (
                <CarouselItem key={card.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.div variants={cardVariants}>
                    <Card 
                      className="group cursor-pointer overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl hover:border-white/20 hover:bg-white/8 transition-all duration-500 hover:scale-[1.02] shadow-2xl shadow-black/30 rounded-2xl"
                      onClick={() => handleCardClick(card.route)}
                    >
                      <CardContent className="p-0 relative h-96">
                        {/* Background Image */}
                        <div className="absolute inset-0 rounded-2xl overflow-hidden">
                          <img
                            src={card.backgroundImage}
                            alt={card.title}
                            className="w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity duration-500 scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/90" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        </div>

                        {/* Glassmorphism Content Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-xl border-t border-white/10 rounded-b-2xl">
                          <div className="p-8">
                            {/* Hexagonal Icon */}
                            <div className="absolute -top-6 right-8">
                              <div className="w-12 h-12 bg-gradient-to-br from-blue-400/90 to-blue-600/90 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-xl border border-white/20">
                                {card.icon}
                              </div>
                            </div>

                            {/* Category Badge */}
                            <div className="mb-4">
                              <span className="px-3 py-1 text-xs font-medium bg-white/15 text-white/90 rounded-full border border-white/20 backdrop-blur-sm">
                                {card.subtitle}
                              </span>
                            </div>
                            
                            {/* Title */}
                            <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                              {card.title}
                            </h3>
                            
                            {/* Description */}
                            <p className="text-gray-200 text-base leading-relaxed mb-6 font-medium">
                              {card.description}
                            </p>

                            {/* Features Tags */}
                            <div className="flex flex-wrap gap-2 mb-6">
                              {card.features.slice(0, 2).map((feature, index) => (
                                <span
                                  key={index}
                                  className="px-3 py-1 text-xs bg-white/10 text-gray-200 rounded-lg border border-white/20 backdrop-blur-sm font-medium"
                                >
                                  {feature}
                                </span>
                              ))}
                            </div>

                            {/* CTA Button */}
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-white border border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 backdrop-blur-sm px-6 py-2 rounded-lg font-medium"
                            >
                              Learn More
                              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious className="left-4 bg-white/10 border-white/30 hover:bg-white/20 text-white" />
            <CarouselNext className="right-4 bg-white/10 border-white/30 hover:bg-white/20 text-white" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}