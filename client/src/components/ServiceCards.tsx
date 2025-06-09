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

const serviceCards = [
  {
    id: 1,
    title: "Digital Utility Infrastructure",
    subtitle: "IT & Consulting",
    description: "Building a smarter, more connected grid with Esri's next-generation network management system.",
    icon: <Zap className="h-8 w-8 text-blue-400" />,
    backgroundImage: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "consulting",
    features: ["Smart Grid Technology", "Network Management", "Infrastructure Optimization"],
    route: "/consulting"
  },
  {
    id: 2,
    title: "Digital Energy Solutions",
    subtitle: "IT & Consulting", 
    description: "Unlocking the potential of data to generate creative solutions and insights.",
    icon: <Building2 className="h-8 w-8 text-orange-400" />,
    backgroundImage: "https://images.unsplash.com/photo-1497436072909-f5e4be1ddc98?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "consulting",
    features: ["Data Analytics", "Energy Optimization", "Predictive Modeling"],
    route: "/consulting"
  },
  {
    id: 3,
    title: "Location Intelligence Solutions",
    subtitle: "IT & Consulting",
    description: "Making smarter decisions with real-time location data and analytics.",
    icon: <MapPin className="h-8 w-8 text-green-400" />,
    backgroundImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "consulting", 
    features: ["GIS Technology", "Spatial Analytics", "Location Intelligence"],
    route: "/consulting"
  },
  {
    id: 4,
    title: "SDI National Mapping",
    subtitle: "Life Science & Validation",
    description: "Transforming the way we experience and navigate indoor spaces.",
    icon: <Users className="h-8 w-8 text-purple-400" />,
    backgroundImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "life-science",
    features: ["Spatial Data Infrastructure", "Digital Mapping", "Navigation Systems"],
    route: "/life-science"
  },
  {
    id: 5,
    title: "Pharmaceutical Validation",
    subtitle: "Life Science & Validation",
    description: "Comprehensive validation services for pharmaceutical manufacturing and quality assurance.",
    icon: <FlaskConical className="h-8 w-8 text-cyan-400" />,
    backgroundImage: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
    backgroundImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
                      className="group cursor-pointer overflow-hidden border border-white/20 bg-white/5 backdrop-blur-xl hover:border-white/30 hover:bg-white/10 transition-all duration-500 hover:scale-105 shadow-2xl shadow-black/20"
                      onClick={() => handleCardClick(card.route)}
                    >
                      <CardContent className="p-0 relative h-80">
                        {/* Background Image */}
                        <div className="absolute inset-0">
                          <img
                            src={card.backgroundImage}
                            alt={card.title}
                            className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        </div>

                        {/* Content */}
                        <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                          {/* Top Section */}
                          <div>
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center space-x-3">
                                <div className="p-2 rounded-lg bg-white/10 backdrop-blur-sm">
                                  {card.icon}
                                </div>
                              </div>
                              <span className="px-3 py-1 text-xs font-medium bg-white/10 text-white rounded-full border border-white/30 backdrop-blur-sm">
                                {card.subtitle}
                              </span>
                            </div>
                            
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-300 transition-colors duration-300">
                              {card.title}
                            </h3>
                            
                            <p className="text-gray-300 text-sm leading-relaxed mb-4">
                              {card.description}
                            </p>
                          </div>

                          {/* Bottom Section */}
                          <div>
                            {/* Features */}
                            <div className="mb-4">
                              <div className="flex flex-wrap gap-1">
                                {card.features.map((feature, index) => (
                                  <span
                                    key={index}
                                    className="px-2 py-1 text-xs bg-white/10 text-gray-300 rounded border border-white/30 backdrop-blur-sm"
                                  >
                                    {feature}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* CTA Button */}
                            <Button
                              variant="ghost"
                              size="sm"
                              className="w-full text-white border border-white/30 hover:bg-white/15 hover:border-white/50 transition-all duration-300 group backdrop-blur-sm"
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