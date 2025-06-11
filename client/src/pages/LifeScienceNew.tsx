import React from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { useLocation } from "wouter";
import {
  Beaker,
  TrendingUp,
  Stethoscope,
  ScrollText,
  Shield,
  ArrowRight,
  CheckCircle,
  Target,
  Users,
  Clock,
  Award,
} from "lucide-react";

const services = [
  {
    icon: <Stethoscope className="h-8 w-8 text-white" />,
    title: "Clinical Operations",
    description:
      "Develop solutions that increase efficiencies, productivity, and quality in your clinical trial from study start-up through completion. By strategizing for the level of support you need, we create clinical operations solutions to facilitate all aspects of your clinical trial — including management of staff and training, budgets and contracts, patient recruitment and retention, and site operations — to drive on-time project delivery.",
    backgroundImage:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-white" />,
    title: "Biometrics",
    description:
      "Leverage our life science knowledge for guidance on biometric solutions, including clinical data management and SAS programming, throughout the clinical drug development process. We identify solutions for every stage of your trial, minimizing your timeline risks and improving data quality via world-class clinical data management.",
    backgroundImage:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    icon: <Beaker className="h-8 w-8 text-white" />,
    title: "Pharmacovigilance / Drug Safety",
    description:
      "If your organization is in the pharmaceutical, biotech, consumer health, animal health or medical device space, partner with us for consultation that streamlines your end-to-end drug safety surveillance activities for investigational and post-market products.",
    backgroundImage:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    icon: <ScrollText className="h-8 w-8 text-white" />,
    title: "Regulatory Affairs",
    description:
      "Engage our consultative approach to quickly identify solutions that reduce costs, accelerate approval timelines and improve your processes. Ranging from preapproval to post-approval, and from intellectual property to FDA approval, we strategized cost-effective, high-quality regulatory affairs solutions.",
    backgroundImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    icon: <Shield className="h-8 w-8 text-white" />,
    title: "Quality and Compliance",
    description:
      "Create a long-term plan that ensures the production of quality products while meeting compliance requirements. Specializing in corrective and preventive action, we develop solutions that address your quality and regulatory compliance processes.",
    backgroundImage:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
];

const benefits = [
  {
    icon: <Target className="h-6 w-6" />,
    title: "Accelerated Timelines",
    description: "Reduce time-to-market with streamlined processes"
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Expert Guidance",
    description: "Access specialized life science professionals"
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Enhanced Efficiency",
    description: "Optimize operations with cutting-edge technology"
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Compliance Assurance",
    description: "Meet regulatory standards with confidence"
  }
];

export default function LifeScience() {
  const [, navigate] = useLocation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
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
              Accelerating innovation through comprehensive life science solutions, regulatory expertise, and cutting-edge technology to bring breakthrough treatments to market faster
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
      </section>

      {/* Services Section - Hexagon Grid */}
      <div className="py-20 bg-gray-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 border border-blue-500 rotate-45"></div>
          <div className="absolute top-32 right-20 w-24 h-24 border border-cyan-500 rotate-12"></div>
          <div className="absolute bottom-20 left-32 w-40 h-40 border border-blue-400 rotate-45"></div>
          <div className="absolute bottom-32 right-40 w-28 h-28 border border-cyan-400 rotate-12"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              OUR SOLUTIONS
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive life science solutions designed to accelerate your research and development
            </p>
          </motion.div>

          {/* Hexagon Honeycomb Layout */}
          <div className="relative max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column - Services 1 & 2 */}
              <div className="lg:col-span-4 space-y-8">
                {services.slice(0, 2).map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.8 }}
                    className="group"
                  >
                    <div className="relative p-6 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-blue-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/20">
                      {/* Floating Number */}
                      <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-300">
                          {index === 0 && <Stethoscope className="h-7 w-7" />}
                          {index === 1 && <TrendingUp className="h-7 w-7" />}
                        </div>
                        <div>
                          <div className="text-sm text-blue-400 font-medium uppercase tracking-wider">
                            Solution
                          </div>
                          <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                            {service.title}
                          </h3>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 text-sm leading-relaxed mb-4 group-hover:text-blue-100 transition-colors duration-300">
                        {service.description.substring(0, 120)}...
                      </p>
                      
                      <button className="px-4 py-2 bg-gradient-to-r from-blue-600/80 to-cyan-600/80 text-white text-sm font-medium rounded-full hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 hover:scale-105">
                        Explore
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Center Column - Main Hexagon */}
              <div className="lg:col-span-4 flex justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 1, type: "spring" }}
                  className="relative group"
                >
                  {/* Main Hexagon Container */}
                  <div className="relative w-80 h-80 mx-auto">
                    {/* Hexagon Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-600 transform rotate-45 rounded-3xl shadow-2xl group-hover:shadow-blue-500/40 transition-all duration-500">
                      <div className="absolute inset-2 bg-gray-900 rounded-3xl"></div>
                    </div>
                    
                    {/* Central Content */}
                    <div className="relative z-10 p-8 h-full flex flex-col items-center justify-center text-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Beaker className="h-10 w-10 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors duration-300">
                        {services[2].title}
                      </h3>
                      
                      <p className="text-blue-100 text-sm leading-relaxed mb-6">
                        Advanced pharmaceutical safety surveillance with AI-powered monitoring
                      </p>
                      
                      <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg">
                        Learn More
                      </button>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-400 rounded-full animate-pulse"></div>
                    <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-cyan-400 rounded-full animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 -right-8 w-4 h-4 bg-blue-300 rounded-full animate-pulse delay-500"></div>
                  </div>
                </motion.div>
              </div>

              {/* Right Column - Services 4 & 5 */}
              <div className="lg:col-span-4 space-y-8">
                {services.slice(3, 5).map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index + 2) * 0.2, duration: 0.8 }}
                    className="group"
                  >
                    <div className="relative p-6 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-blue-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/20">
                      {/* Floating Number */}
                      <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {String(index + 4).padStart(2, '0')}
                      </div>
                      
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-300">
                          {index === 0 && <ScrollText className="h-7 w-7" />}
                          {index === 1 && <Shield className="h-7 w-7" />}
                        </div>
                        <div>
                          <div className="text-sm text-blue-400 font-medium uppercase tracking-wider">
                            Solution
                          </div>
                          <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                            {service.title}
                          </h3>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 text-sm leading-relaxed mb-4 group-hover:text-blue-100 transition-colors duration-300">
                        {service.description.substring(0, 120)}...
                      </p>
                      
                      <button className="px-4 py-2 bg-gradient-to-r from-blue-600/80 to-cyan-600/80 text-white text-sm font-medium rounded-full hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 hover:scale-105">
                        Explore
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Connecting Lines */}
            <div className="absolute inset-0 pointer-events-none">
              <svg className="w-full h-full opacity-20">
                <defs>
                  <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#06B6D4" />
                  </linearGradient>
                </defs>
                {/* Connecting lines between elements */}
                <path d="M200,150 Q400,100 600,150" stroke="url(#connectionGradient)" strokeWidth="2" fill="none" strokeDasharray="5,5" />
                <path d="M200,350 Q400,400 600,350" stroke="url(#connectionGradient)" strokeWidth="2" fill="none" strokeDasharray="5,5" />
              </svg>
            </div>
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
              onClick={() => navigate("/contact")}
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg text-lg"
            >
              Get Started Today
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}