import { motion } from "framer-motion";
import { BrainCircuit, Code, FileCode, Server, Beaker, Database, ChartBar, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    id: 1,
    title: "AI Consulting",
    description: "Strategic guidance on implementing AI to enhance operations, improve efficiency, and drive innovation.",
    icon: <BrainCircuit className="h-10 w-10 text-primary" />,
    category: "ai"
  },
  {
    id: 2,
    title: "AI Software Development",
    description: "Custom AI solutions tailored to your business needs, from proof-of-concept to full-scale deployment.",
    icon: <Code className="h-10 w-10 text-primary" />,
    category: "ai"
  },
  {
    id: 3,
    title: "Generative AI Development",
    description: "Implementation of cutting-edge generative models for content creation, design, and process automation.",
    icon: <FileCode className="h-10 w-10 text-primary" />,
    category: "ai"
  },
  {
    id: 4,
    title: "IT Services",
    description: "Comprehensive IT solutions including infrastructure management, cloud services, and enterprise applications.",
    icon: <Server className="h-10 w-10 text-secondary" />,
    category: "it"
  },
  {
    id: 5,
    title: "Life Science Solutions",
    description: "Specialized services for pharmaceutical, biotechnology, and healthcare organizations focused on compliance and innovation.",
    icon: <Beaker className="h-10 w-10 text-secondary" />,
    category: "life-science"
  },
  {
    id: 6,
    title: "IT Consulting",
    description: "Expert guidance on technology strategy, digital transformation, and maximizing IT investments.",
    icon: <Database className="h-10 w-10 text-secondary" />,
    category: "it"
  },
  {
    id: 7,
    title: "Validation",
    description: "Computer system validation, process validation, and qualification services for regulated industries.",
    icon: <ChartBar className="h-10 w-10 text-secondary" />,
    category: "life-science"
  },
  {
    id: 8,
    title: "Project Management",
    description: "End-to-end project planning, execution, and delivery services with a focus on quality and efficiency.",
    icon: <Shield className="h-10 w-10 text-secondary" />,
    category: "it"
  }
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
    <section id="services" className="py-16 md:py-24 bg-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h2>
          <p className="text-lg text-slate-600">
            Comprehensive solutions to drive your organization's digital transformation and innovation
          </p>
        </motion.div>
        
        <div className="mb-10">
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="bg-gray-800 text-white px-6 py-2 rounded-full">AI & Machine Learning</span>
          </h3>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {services.filter(service => service.category === "ai").map((service) => (
              <motion.div key={service.id} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-none primary-shadow">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4 p-3 bg-primary/10 rounded-full">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-slate-600">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        <div className="mb-10">
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="bg-gray-800 text-white px-6 py-2 rounded-full">IT & Consulting</span>
          </h3>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {services.filter(service => service.category === "it").map((service) => (
              <motion.div key={service.id} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-none" style={{ boxShadow: "0 8px 30px rgba(249, 115, 22, 0.15)" }}>
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4 p-3 bg-secondary/10 rounded-full">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-slate-600">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="bg-gray-800 text-white px-6 py-2 rounded-full">Life Science & Validation</span>
          </h3>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {services.filter(service => service.category === "life-science").map((service) => (
              <motion.div key={service.id} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-none shadow-lg">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4 p-3 bg-gray-100 rounded-full">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-slate-600">
                      {service.description}
                    </p>
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