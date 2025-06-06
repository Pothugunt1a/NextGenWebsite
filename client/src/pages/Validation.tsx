import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Cog,
  Monitor,
  FlaskConical,
  Binary,
  CheckCircle2,
  Settings,
  Database,
  Shield,
  Zap,
  Globe,
  Users,
  BarChart3,
} from "lucide-react";

const itConsultingServices = [
  {
    icon: <Monitor className="h-8 w-8 text-white" />,
    title: "Digital Infrastructure Solutions",
    description: "Building smarter, more connected systems with next-generation network management solutions.",
    bgImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop&crop=center",
    gradient: "from-blue-600/80 to-blue-800/80"
  },
  {
    icon: <Zap className="h-8 w-8 text-white" />,
    title: "Digital Energy Solutions",
    description: "Unlocking the potential of data to generate creative solutions and insights for energy optimization.",
    bgImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop&crop=center",
    gradient: "from-orange-600/80 to-orange-800/80"
  },
  {
    icon: <Globe className="h-8 w-8 text-white" />,
    title: "Location Intelligence Solutions",
    description: "Making smarter decisions with real-time location data and advanced analytics capabilities.",
    bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&crop=center",
    gradient: "from-green-600/80 to-green-800/80"
  },
  {
    icon: <Users className="h-8 w-8 text-white" />,
    title: "Enterprise Mapping Solutions",
    description: "Transforming the way we experience and navigate complex business environments and processes.",
    bgImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&crop=center",
    gradient: "from-purple-600/80 to-purple-800/80"
  }
];

const validationServices = [
  {
    icon: <Cog className="h-8 w-8 text-white" />,
    title: "Equipment Validation Engineering",
    description: "Comprehensive equipment testing, calibration, and validation to ensure optimal manufacturing performance.",
    bgImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&crop=center",
    gradient: "from-indigo-600/80 to-indigo-800/80"
  },
  {
    icon: <FlaskConical className="h-8 w-8 text-white" />,
    title: "Cleaning Validation Engineering",
    description: "Risk-based cleaning validation with comprehensive policies, procedures, and analytical testing.",
    bgImage: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=600&fit=crop&crop=center",
    gradient: "from-teal-600/80 to-teal-800/80"
  },
  {
    icon: <Monitor className="h-8 w-8 text-white" />,
    title: "Computer System Validation",
    description: "Complete lifecycle validation for automated systems, DCS, PLC, and regulatory compliance.",
    bgImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&crop=center",
    gradient: "from-cyan-600/80 to-cyan-800/80"
  },
  {
    icon: <Binary className="h-8 w-8 text-white" />,
    title: "Process Validation",
    description: "Risk assessment and validation for manufacturing processes ensuring GMP compliance and quality.",
    bgImage: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=600&fit=crop&crop=center",
    gradient: "from-rose-600/80 to-rose-800/80"
  },
];

const benefits = [
  {
    title: "Regulatory Compliance",
    description: "Ensure adherence to industry standards and regulations",
    icon: <CheckCircle2 className="h-6 w-6" />,
  },
  {
    title: "Risk Reduction",
    description: "Minimize product failures and operational risks",
    icon: <CheckCircle2 className="h-6 w-6" />,
  },
  {
    title: "Process Efficiency",
    description: "Optimize workflows and improve productivity",
    icon: <CheckCircle2 className="h-6 w-6" />,
  },
  {
    title: "Quality Assurance",
    description: "Maintain consistent product quality standards",
    icon: <CheckCircle2 className="h-6 w-6" />,
  },
  {
    title: "Cost Optimization",
    description: "Reduce operational costs and minimize waste",
    icon: <CheckCircle2 className="h-6 w-6" />,
  },
  {
    title: "Market Readiness",
    description: "Accelerate time-to-market for new products",
    icon: <CheckCircle2 className="h-6 w-6" />,
  },
];

export default function Validation() {
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
            src="/assets/validation.jpg"
            alt="Validation Services Banner"
            className="w-full h-full object-cover opacity-40"
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
                IT & Consulting Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
                Comprehensive IT solutions and validation services ensuring quality, compliance, and operational excellence
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* IT & Consulting Services */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6">IT & Consulting Solutions</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Digital transformation services designed to modernize your infrastructure and optimize business operations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {itConsultingServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group cursor-pointer"
            >
              <div className="relative h-80 rounded-2xl overflow-hidden bg-gray-900 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                <div className="absolute inset-0">
                  <img
                    src={service.bgImage}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient}`} />
                <div className="absolute top-6 right-6">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                    {service.icon}
                  </div>
                </div>
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

        {/* Validation Services */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-4xl font-bold mb-6">Validation Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Expert validation engineering services ensuring regulatory compliance and operational excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {validationServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (index + 4) * 0.1, duration: 0.6 }}
              className="group cursor-pointer"
            >
              <div className="relative h-80 rounded-2xl overflow-hidden bg-gray-900 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                <div className="absolute inset-0">
                  <img
                    src={service.bgImage}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient}`} />
                <div className="absolute top-6 right-6">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                    {service.icon}
                  </div>
                </div>
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

        {/* Benefits Section */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Benefits</h2>
            <p className="text-gray-300">
              Experience the advantages of our comprehensive IT and validation services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex flex-col gap-3 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/20 rounded-lg text-white">
                    {benefit.icon}
                  </div>
                  <h3 className="font-semibold text-lg text-white">{benefit.title}</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
