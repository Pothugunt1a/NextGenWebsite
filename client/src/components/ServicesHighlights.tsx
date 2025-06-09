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
    icon: <Server className="h-10 w-10 text-primary" />,
    category: "it",
  },
  {
    id: 5,
    title: "Life Science Solutions",
    description:
      "Specialized services for pharmaceutical, biotechnology, and healthcare organizations focused on compliance and innovation.",
    icon: <Beaker className="h-10 w-10 text-primary" />,
    category: "life-science",
  },
  {
    id: 6,
    title: "IT Consulting",
    description:
      "Expert guidance on technology strategy, digital transformation, and maximizing IT investments.",
    icon: <Database className="h-10 w-10 text-primary" />,
    category: "it",
  },
  {
    id: 7,
    title: "Validation",
    description:
      "Computer system validation, process validation, and qualification services for regulated industries.",
    icon: <ChartBar className="h-10 w-10 text-primary" />,
    category: "life-science",
  },
  {
    id: 8,
    title: "Project Management",
    description:
      "End-to-end project planning, execution, and delivery services with a focus on quality and efficiency.",
    icon: <Shield className="h-10 w-10 text-primary" />,
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
                              : service.id === 3
                                ? "/assets/ai-network-banner1.jpg"
                                : `/assets/ai-network-banner${service.id}.jpg`
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
            className="max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div variants={itemVariants}>
              <Card className="group cursor-pointer overflow-hidden border border-white/20 bg-white/10 backdrop-blur-xl hover:border-white/30 hover:bg-white/15 transition-all duration-500 shadow-2xl shadow-black/40 rounded-3xl h-[500px]">
                <CardContent className="p-0 relative h-full">
                  {/* Background Image */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                      alt="IT & Consulting Solutions"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-slate-800/30 to-black/70" />
                  </div>

                  {/* Hexagonal Icon */}
                  <div className="absolute top-8 right-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400/90 to-blue-600/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-2xl border border-white/30 transform rotate-45">
                      <div className="transform -rotate-45">
                        <Server className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Glassmorphism Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent backdrop-blur-2xl border-t border-white/20 rounded-b-3xl">
                    <div className="p-8">
                      {/* Divider Line */}
                      <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mb-6 rounded-full"></div>
                      
                      {/* Title */}
                      <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                        IT & Consulting Solutions
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-200 text-lg leading-relaxed font-medium mb-6 max-w-2xl">
                        Comprehensive technology solutions including infrastructure management, cloud services, digital transformation, and strategic IT consulting to maximize your investments.
                      </p>

                      {/* Services List */}
                      <div className="flex flex-wrap gap-3">
                        {["IT Services", "IT Consulting", "Project Management"].map((service, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 text-sm bg-white/15 text-white rounded-full border border-white/25 backdrop-blur-sm font-medium"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="bg-gray-800 text-white px-6 py-2 rounded-full">
              Life Science & Validation
            </span>
          </h3>
          <motion.div
            className="max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div variants={itemVariants}>
              <Card className="group cursor-pointer overflow-hidden border border-white/20 bg-white/10 backdrop-blur-xl hover:border-white/30 hover:bg-white/15 transition-all duration-500 shadow-2xl shadow-black/40 rounded-3xl h-[500px]">
                <CardContent className="p-0 relative h-full">
                  {/* Background Image */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                      alt="Life Science & Validation Solutions"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-slate-800/30 to-black/70" />
                  </div>

                  {/* Hexagonal Icon */}
                  <div className="absolute top-8 right-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-400/90 to-purple-600/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-2xl border border-white/30 transform rotate-45">
                      <div className="transform -rotate-45">
                        <Beaker className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Glassmorphism Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent backdrop-blur-2xl border-t border-white/20 rounded-b-3xl">
                    <div className="p-8">
                      {/* Divider Line */}
                      <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mb-6 rounded-full"></div>
                      
                      {/* Title */}
                      <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                        Life Science & Validation
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-200 text-lg leading-relaxed font-medium mb-6 max-w-2xl">
                        Specialized services for pharmaceutical, biotechnology, and healthcare organizations focused on compliance, validation, and regulatory excellence.
                      </p>

                      {/* Services List */}
                      <div className="flex flex-wrap gap-3">
                        {["Life Science Solutions", "Validation", "Regulatory Compliance"].map((service, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 text-sm bg-white/15 text-white rounded-full border border-white/25 backdrop-blur-sm font-medium"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
