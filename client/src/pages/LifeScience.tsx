import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { useLocation } from "wouter";
import {
  Beaker,
  FlaskConical,
  Stethoscope,
  ScrollText,
  Shield,
  ArrowRight,
  CheckCircle,
  Target,
  TrendingUp,
  Users,
  Clock,
  Award,
  Star,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: <Stethoscope className="h-8 w-8 text-white" />,
    title: "Clinical Operations Solutions",
    description: "Making smarter decisions with real-time clinical data and analytics.",
    backgroundImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    icon: <FlaskConical className="h-8 w-8 text-white" />,
    title: "Laboratory Intelligence",
    description: "Advanced analytics and AI-driven insights for laboratory operations and research.",
    backgroundImage: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    icon: <Beaker className="h-8 w-8 text-white" />,
    title: "Drug Safety Intelligence",
    description: "Real-time monitoring and predictive analytics for pharmacovigilance operations.",
    backgroundImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    icon: <ScrollText className="h-8 w-8 text-white" />,
    title: "Regulatory Intelligence",
    description: "Intelligent regulatory solutions with automated compliance monitoring.",
    backgroundImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    icon: <Shield className="h-8 w-8 text-white" />,
    title: "Quality Intelligence",
    description: "Smart quality assurance with predictive analytics and risk assessment.",
    backgroundImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
];

const benefits = [
  {
    icon: <Target className="h-6 w-6" />,
    title: "Accelerated Timelines",
    description: "Reduce time-to-market with streamlined processes"
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Enhanced Efficiency",
    description: "Optimize operations with cutting-edge technology"
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Expert Guidance",
    description: "Access specialized life science professionals"
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Compliance Assurance",
    description: "Meet regulatory standards with confidence"
  }
];

export default function LifeScience() {
  const [, setLocation] = useLocation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-900"
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background for life science page */}
        <div className="absolute inset-0">
          <img
            src="/assets/Lifescience_banner.jpg"
            alt="Life Science Solutions"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
              style={{ fontWeight: 700 }}
            >
              <span className="bg-gradient-to-r from-white via-blue-100 to-[#0080FF] bg-clip-text text-transparent">
                Life Science Excellence
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl"
            >
              Advancing healthcare through innovative technology solutions for
              pharmaceutical, biotech, and healthcare organizations
            </motion.p>

            {/* Badge below description */}
            <div className="mb-32">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0066CC]/20 border border-[#0080FF]/30 rounded-full backdrop-blur-sm"
              >
                <CheckCircle className="h-5 w-5 text-cyan-400 fill-none" />
                <span className="text-white font-medium">
                  Industry-Leading Life Science Solutions
                </span>
                <Award className="h-4 w-4 text-blue-400 fill-current" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="absolute bottom-8 left-0 right-0">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center md:justify-start">
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl w-full"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                    className="group relative"
                  >
                    <div className="relative p-4 md:p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden text-center">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="relative z-10">
                        <div className="flex justify-center mb-3 md:mb-4">
                          <div className="inline-flex p-2 md:p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                            <div className="text-white">{benefit.icon}</div>
                          </div>
                        </div>
                        <div className="text-lg md:text-xl font-bold mb-1 md:mb-2 text-white">
                          {benefit.title}
                        </div>
                        <div className="text-xs text-gray-300">
                          {benefit.description}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <div className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Our Services
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive life science solutions designed to accelerate your research and development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group"
              >
                <div className="relative h-48 rounded-2xl overflow-hidden bg-gradient-to-r from-slate-800/90 to-slate-700/90 backdrop-blur-sm border border-slate-600/30 hover:border-blue-400/50 transition-all duration-300 group-hover:scale-[1.01]">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={service.backgroundImage}
                      alt={service.title}
                      className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-800/70 to-slate-700/60"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 p-6 h-full flex items-center justify-between">
                    {/* Left side - Text content */}
                    <div className="flex-1 pr-6">
                      <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    
                    {/* Right side - Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-gray-800/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Why Choose Us
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Transform Your Life Science Operations?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Partner with us to accelerate your research, ensure compliance, and bring life-changing treatments to market faster.
            </p>
            <Button
              onClick={() => setLocation("/contact")}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}