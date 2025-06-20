import { motion } from "framer-motion";
import {
  BrainCircuit,
  Code,
  FileCode,
  Server,
  Beaker,
  Database,
  ChartBar,
  Shield,
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const serviceCategories = [
  {
    id: 1,
    category: "Artificial Intelligence",
    description: "Cutting-edge AI solutions to transform your business operations",
    services: [
      {
        id: 1,
        title: "AI Consulting",
        description: "Strategic guidance on implementing AI to enhance operations, improve efficiency, and drive innovation.",
        icon: <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg flex-shrink-0"><BrainCircuit className="h-10 w-10 text-white" /></div>,
        backgroundImage: "/assets/ai-network-banner2.png",
      },
      {
        id: 2,
        title: "AI Software Development",
        description: "Custom AI solutions tailored to your business needs, from proof-of-concept to full-scale deployment.",
        icon: <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg flex-shrink-0"><Code className="h-10 w-10 text-white" /></div>,
        backgroundImage: "/assets/ai-network-banner3.png",
      },
      {
        id: 3,
        title: "Generative AI Development",
        description: "Implementation of cutting-edge generative models for content creation, design, and process automation.",
        icon: <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg flex-shrink-0"><FileCode className="h-10 w-10 text-white" /></div>,
        backgroundImage: "/assets/ai-network-banner1.jpg",
      },
    ]
  },
  {
    id: 2,
    category: "IT & Consulting",
    description: "Comprehensive IT solutions and strategic consulting services",
    services: [
      {
        id: 4,
        title: "IT Services",
        description: "Comprehensive IT solutions including infrastructure management, cloud services, and enterprise applications.",
        icon: <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg flex-shrink-0"><Server className="h-10 w-10 text-white" /></div>,
        backgroundImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 6,
        title: "IT Consulting",
        description: "Expert guidance on technology strategy, digital transformation, and maximizing IT investments.",
        icon: <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg flex-shrink-0"><Database className="h-10 w-10 text-white" /></div>,
        backgroundImage: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 8,
        title: "Project Management",
        description: "End-to-end project planning, execution, and delivery services with a focus on quality and efficiency.",
        icon: <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg flex-shrink-0"><Shield className="h-10 w-10 text-white" /></div>,
        backgroundImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      },
    ]
  },
  {
    id: 3,
    category: "Life Science & Validation",
    description: "Specialized validation services for regulated industries",
    services: [
      {
        id: 5,
        title: "Life Science Solutions",
        description: "Specialized services for pharmaceutical, biotechnology, and healthcare organizations focused on compliance and innovation.",
        icon: <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg flex-shrink-0"><Beaker className="h-10 w-10 text-white" /></div>,
        backgroundImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 7,
        title: "Validation",
        description: "Computer system validation, process validation, and qualification services for regulated industries.",
        icon: <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg flex-shrink-0"><ChartBar className="h-10 w-10 text-white" /></div>,
        backgroundImage: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      },
    ]
  },
];

export default function ServicesHighlights() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section id="services" className="py-16 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h2>
          <p className="text-lg text-gray-300">
            Comprehensive solutions to drive your organization's digital
            transformation and innovation
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
                delay: 5000,
                stopOnInteraction: true,
                stopOnMouseEnter: true,
              })
            ]}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {serviceCategories.map((categoryGroup) => (
                <CarouselItem key={categoryGroup.id} className="pl-2 md:pl-4">
                  <motion.div variants={itemVariants} className="space-y-8">
                    {/* Category Header */}
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold mb-4">
                        <span className="bg-gray-800 text-white px-6 py-2 rounded-full">
                          {categoryGroup.category}
                        </span>
                      </h3>
                      <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        {categoryGroup.description}
                      </p>
                    </div>

                    {/* Services Grid */}
                    <div className={`grid gap-6 ${
                      categoryGroup.category === "Artificial Intelligence" 
                        ? "grid-cols-1 md:grid-cols-3" 
                        : categoryGroup.category === "IT & Consulting"
                        ? "grid-cols-1 md:grid-cols-3"
                        : "grid-cols-1 md:grid-cols-2"
                    }`}>
                      {categoryGroup.services.map((service) => (
                        <Card 
                          key={service.id} 
                          className="group cursor-pointer overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl hover:border-white/20 hover:bg-white/8 transition-all duration-500 hover:scale-[1.02] shadow-2xl shadow-black/30 rounded-2xl h-96"
                        >
                          <CardContent className="p-0 relative h-full">
                            {/* Background Image */}
                            <div className="absolute inset-0 rounded-2xl overflow-hidden">
                              <img
                                src={service.backgroundImage}
                                alt={service.title}
                                className="w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity duration-500 scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/90" />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            </div>

                            {/* Content Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-xl border-t border-white/10 rounded-b-2xl">
                              <div className="p-6">
                                {/* Icon */}
                                <div className="absolute -top-6 right-6">
                                  <div className={`w-12 h-12 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-xl border border-white/20 ${
                                    categoryGroup.category === "Artificial Intelligence" 
                                      ? "bg-white/10" 
                                      : "bg-primary"
                                  }`}>
                                    {service.icon}
                                  </div>
                                </div>
                                
                                {/* Title */}
                                <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                                  {service.title}
                                </h3>
                                
                                {/* Description */}
                                <p className="text-gray-200 text-sm leading-relaxed font-medium">
                                  {service.description}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
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