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

const services = [
  {
    id: 1,
    title: "AI Consulting",
    description:
      "Strategic guidance on implementing AI to enhance operations, improve efficiency, and drive innovation.",
    icon: <BrainCircuit className="h-10 w-10 text-white" />,
    category: "ai",
  },
  {
    id: 2,
    title: "AI Software Development",
    description:
      "Custom AI solutions tailored to your business needs, from proof-of-concept to full-scale deployment.",
    icon: <Code className="h-10 w-10 text-white" />,
    category: "ai",
  },
  {
    id: 3,
    title: "Generative AI Development",
    description:
      "Implementation of cutting-edge generative models for content creation, design, and process automation.",
    icon: <FileCode className="h-10 w-10 text-white" />,
    category: "ai",
  },
  {
    id: 4,
    title: "IT Services",
    description:
      "Comprehensive IT solutions including infrastructure management, cloud services, and enterprise applications.",
    icon: <Server className="h-10 w-10 text-white" />,
    category: "it",
  },
  {
    id: 5,
    title: "Life Science Solutions",
    description:
      "Specialized services for pharmaceutical, biotechnology, and healthcare organizations focused on compliance and innovation.",
    icon: <Beaker className="h-10 w-10 text-white" />,
    category: "life-science",
  },
  {
    id: 6,
    title: "IT Consulting",
    description:
      "Expert guidance on technology strategy, digital transformation, and maximizing IT investments.",
    icon: <Database className="h-10 w-10 text-white" />,
    category: "it",
  },
  {
    id: 7,
    title: "Validation",
    description:
      "Computer system validation, process validation, and qualification services for regulated industries.",
    icon: <ChartBar className="h-10 w-10 text-white" />,
    category: "life-science",
  },
  {
    id: 8,
    title: "Project Management",
    description:
      "End-to-end project planning, execution, and delivery services with a focus on quality and efficiency.",
    icon: <Shield className="h-10 w-10 text-white" />,
    category: "it",
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
    <section id="services" className="py-16 md:py-24 text-white">
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

        <div className="mb-10">
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="bg-gray-800 text-white px-6 py-2 rounded-full">
              Artificial Intelligence
            </span>
          </h3>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {services
              .filter((service) => service.category === "ai")
              .map((service) => (
                <motion.div key={service.id} variants={itemVariants}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-none primary-shadow relative overflow-hidden group">
                    <div className="absolute inset-0">
                      <img
                        src={
                          service.id === 1
                            ? "/assets/ai-network-banner2.png"
                            : service.id === 2
                              ? "/assets/ai-network-banner3.png"
                              : "/assets/ai-network-banner1.jpg"
                        }
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/50"></div>
                    </div>
                    <CardContent className="p-6 flex flex-col items-center text-center relative z-10">
                      <div className="mb-4 p-3 bg-white/10 backdrop-blur-sm rounded-full">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-white">
                        {service.title}
                      </h3>
                      <p className="text-slate-200">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </motion.div>
        </div>

        <div className="mb-10">
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="bg-gray-800 text-white px-6 py-2 rounded-full">
              IT & Consulting
            </span>
          </h3>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {services
              .filter((service) => service.category === "it")
              .map((service, index) => (
                <motion.div key={service.id} variants={itemVariants}>
                  <Card className="group cursor-pointer overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl hover:border-white/20 hover:bg-white/8 transition-all duration-500 hover:scale-[1.02] shadow-2xl shadow-black/30 rounded-2xl h-96">
                    <CardContent className="p-0 relative h-full">
                      {/* Background Image */}
                      <div className="absolute inset-0 rounded-2xl overflow-hidden">
                        <img
                          src={
                            index === 0 
                              ? "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                              : index === 1
                                ? "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                : "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                          }
                          alt={service.title}
                          className="w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity duration-500 scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/90" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      </div>

                      {/* Glassmorphism Content Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-xl border-t border-white/10 rounded-b-2xl">
                        <div className="p-6">
                          {/* Icon */}
                          <div className="absolute -top-6 right-6">
                            <div className="w-12 h-12 bg-primary backdrop-blur-sm rounded-lg flex items-center justify-center shadow-xl border border-white/20">
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
                </motion.div>
              ))}
          </motion.div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="bg-gray-800 text-white px-6 py-2 rounded-full">
              Life Science & Validation
            </span>
          </h3>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {services
              .filter((service) => service.category === "life-science")
              .map((service, index) => (
                <motion.div key={service.id} variants={itemVariants}>
                  <Card className="group cursor-pointer overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl hover:border-white/20 hover:bg-white/8 transition-all duration-500 hover:scale-[1.02] shadow-2xl shadow-black/30 rounded-2xl h-96">
                    <CardContent className="p-0 relative h-full">
                      {/* Background Image */}
                      <div className="absolute inset-0 rounded-2xl overflow-hidden">
                        <img
                          src={
                            index === 0 
                              ? "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                              : "https://images.unsplash.com/photo-1628595351029-c2bf17511435?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                          }
                          alt={service.title}
                          className="w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity duration-500 scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/90" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      </div>

                      {/* Glassmorphism Content Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-xl border-t border-white/10 rounded-b-2xl">
                        <div className="p-6">
                          {/* Icon */}
                          <div className="absolute -top-6 right-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-purple-400/90 to-purple-600/90 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-xl border border-white/20">
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
                </motion.div>
              ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
