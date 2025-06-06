import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, FlaskConical, MapPin, Cpu, Zap, Users } from "lucide-react";
import { useLocation } from "wouter";
import Autoplay from "embla-carousel-autoplay";

const serviceCards = [
  {
    id: 1,
    title: "Digital Utility Infrastructure",
    subtitle: "IT & Consulting",
    description: "Building a smarter, more connected grid with next-generation network management systems and smart infrastructure solutions.",
    icon: <Zap className="h-10 w-10 text-cyan-300" />,
    backgroundImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "consulting",
    features: ["Smart Grid Technology", "Network Management", "Infrastructure Optimization"],
    route: "/consulting"
  },
  {
    id: 2,
    title: "Digital Energy Solutions",
    subtitle: "IT & Consulting", 
    description: "Unlocking the potential of data to generate creative energy solutions and drive sustainable innovation through advanced analytics.",
    icon: <Building2 className="h-10 w-10 text-amber-300" />,
    backgroundImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "consulting",
    features: ["Data Analytics", "Energy Optimization", "Predictive Modeling"],
    route: "/consulting"
  },
  {
    id: 3,
    title: "Location Intelligence Solutions",
    subtitle: "IT & Consulting",
    description: "Making smarter decisions with real-time location data, spatial analytics, and intelligent mapping technologies.",
    icon: <MapPin className="h-10 w-10 text-emerald-300" />,
    backgroundImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "consulting", 
    features: ["GIS Technology", "Spatial Analytics", "Location Intelligence"],
    route: "/consulting"
  },
  {
    id: 4,
    title: "SDI National Mapping",
    subtitle: "Life Science & Validation",
    description: "Transforming navigation and spatial data management through comprehensive mapping solutions and digital infrastructure.",
    icon: <Users className="h-10 w-10 text-violet-300" />,
    backgroundImage: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "life-science",
    features: ["Spatial Data Infrastructure", "Digital Mapping", "Navigation Systems"],
    route: "/life-science"
  },
  {
    id: 5,
    title: "Pharmaceutical Validation",
    subtitle: "Life Science & Validation",
    description: "Comprehensive validation services ensuring pharmaceutical manufacturing excellence and regulatory compliance standards.",
    icon: <FlaskConical className="h-10 w-10 text-blue-300" />,
    backgroundImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "life-science",
    features: ["Process Validation", "Equipment Qualification", "Regulatory Compliance"],
    route: "/validation"
  },
  {
    id: 6,
    title: "AI-Powered Research Analytics",
    subtitle: "Life Science & Validation",
    description: "Advanced AI solutions for research data analysis, clinical trial optimization, and breakthrough scientific discoveries.",
    icon: <Cpu className="h-10 w-10 text-pink-300" />,
    backgroundImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
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
                      className="group cursor-pointer overflow-hidden border border-white/10 bg-gradient-to-br from-black/20 via-slate-900/30 to-blue-900/20 backdrop-blur-xl hover:from-black/30 hover:via-slate-800/40 hover:to-blue-800/30 transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20"
                      onClick={() => handleCardClick(card.route)}
                    >
                      <CardContent className="p-0 relative h-96 overflow-hidden">
                        {/* Background Image with Enhanced Effects */}
                        <div className="absolute inset-0">
                          <img
                            src={card.backgroundImage}
                            alt={card.title}
                            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-purple-900/20 opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                        </div>

                        {/* Floating Icon */}
                        <div className="absolute top-6 right-6 z-20">
                          <div className="p-3 rounded-2xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md border border-white/20 group-hover:scale-110 transition-transform duration-300">
                            {card.icon}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                          {/* Top Section */}
                          <div className="mt-8">
                            <div className="mb-4">
                              <span className="inline-block px-4 py-2 text-sm font-medium bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-white rounded-full border border-blue-400/40 backdrop-blur-sm">
                                {card.subtitle}
                              </span>
                            </div>
                            
                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors duration-300 leading-tight">
                              {card.title}
                            </h3>
                            
                            <p className="text-gray-200 text-sm leading-relaxed mb-6 line-clamp-3">
                              {card.description}
                            </p>
                          </div>

                          {/* Bottom Section */}
                          <div className="space-y-4">
                            {/* Features */}
                            <div className="flex flex-wrap gap-2">
                              {card.features.map((feature, index) => (
                                <span
                                  key={index}
                                  className="px-3 py-1 text-xs bg-white/15 text-gray-100 rounded-lg border border-white/25 backdrop-blur-sm font-medium"
                                >
                                  {feature}
                                </span>
                              ))}
                            </div>

                            {/* Enhanced CTA Button */}
                            <Button
                              variant="ghost"
                              size="sm"
                              className="w-full text-white bg-gradient-to-r from-blue-600/40 to-purple-600/40 border border-blue-400/50 hover:from-blue-500/60 hover:to-purple-500/60 hover:border-blue-300/70 transition-all duration-300 backdrop-blur-sm font-medium group/btn"
                            >
                              Explore Solution
                              <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                            </Button>
                          </div>
                        </div>

                        {/* Hover Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/0 via-blue-500/0 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious className="left-4 bg-gradient-to-r from-blue-600/40 to-purple-600/40 border-blue-400/50 hover:from-blue-500/60 hover:to-purple-500/60 text-white backdrop-blur-md shadow-lg hover:shadow-blue-500/20 transition-all duration-300" />
            <CarouselNext className="right-4 bg-gradient-to-r from-blue-600/40 to-purple-600/40 border-blue-400/50 hover:from-blue-500/60 hover:to-purple-500/60 text-white backdrop-blur-md shadow-lg hover:shadow-blue-500/20 transition-all duration-300" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}