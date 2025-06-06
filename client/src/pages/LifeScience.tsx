import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Beaker,
  FlaskConical,
  Stethoscope,
  ScrollText,
  Shield,
  Microscope,
  Database,
  BarChart3,
} from "lucide-react";

const services = [
  {
    icon: <Stethoscope className="h-8 w-8 text-white" />,
    title: "Clinical Operations",
    description: "Streamline clinical trials with comprehensive management solutions for enhanced efficiency and quality.",
    bgImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&crop=center",
    gradient: "from-blue-600/80 to-blue-800/80"
  },
  {
    icon: <FlaskConical className="h-8 w-8 text-white" />,
    title: "Biometrics & Data Analytics",
    description: "Advanced biometric solutions and clinical data management throughout drug development processes.",
    bgImage: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop&crop=center",
    gradient: "from-purple-600/80 to-purple-800/80"
  },
  {
    icon: <Shield className="h-8 w-8 text-white" />,
    title: "Pharmacovigilance & Drug Safety",
    description: "Comprehensive drug safety surveillance for investigational and post-market pharmaceutical products.",
    bgImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop&crop=center",
    gradient: "from-green-600/80 to-green-800/80"
  },
  {
    icon: <ScrollText className="h-8 w-8 text-white" />,
    title: "Regulatory Affairs",
    description: "Strategic regulatory guidance to accelerate approval timelines and reduce operational costs.",
    bgImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop&crop=center",
    gradient: "from-indigo-600/80 to-indigo-800/80"
  },
  {
    icon: <Beaker className="h-8 w-8 text-white" />,
    title: "Quality & Compliance",
    description: "Ensure production quality while meeting regulatory compliance requirements and standards.",
    bgImage: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=600&fit=crop&crop=center",
    gradient: "from-teal-600/80 to-teal-800/80"
  },
  {
    icon: <Microscope className="h-8 w-8 text-white" />,
    title: "Laboratory Services",
    description: "State-of-the-art laboratory testing and analysis for pharmaceutical research and development.",
    bgImage: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=600&fit=crop&crop=center",
    gradient: "from-orange-600/80 to-orange-800/80"
  },
  {
    icon: <Database className="h-8 w-8 text-white" />,
    title: "Clinical Data Management",
    description: "Robust data collection, validation, and management systems for clinical trial operations.",
    bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
    gradient: "from-cyan-600/80 to-cyan-800/80"
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-white" />,
    title: "Biostatistics & Analytics",
    description: "Advanced statistical analysis and data insights for evidence-based healthcare decisions.",
    bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
    gradient: "from-rose-600/80 to-rose-800/80"
  },
];

export default function LifeScience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-white min-h-screen"
    >
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/Lifescience_banner.jpg"
            alt="Life Science Digital Solutions"
            className="w-full h-full object-cover object-center opacity-40"
          />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl text-center mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Life Science Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Advancing healthcare through innovative technology solutions for pharmaceutical, biotech, and healthcare organizations
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6">Our Specialized Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive life science solutions designed to accelerate research, ensure compliance, and drive innovation in healthcare
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group cursor-pointer"
            >
              <div className="relative h-80 rounded-2xl overflow-hidden bg-gray-900 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={service.bgImage}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient}`} />
                
                {/* Icon */}
                <div className="absolute top-6 right-6">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                    {service.icon}
                  </div>
                </div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white/90 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}