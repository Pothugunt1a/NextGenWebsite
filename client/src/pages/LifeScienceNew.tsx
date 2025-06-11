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

          {/* Orbital Layout */}
          <div className="relative max-w-6xl mx-auto min-h-[800px] flex items-center justify-center">
            {/* Central Hub */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1, type: "spring" }}
              className="relative z-20"
            >
              <div className="w-48 h-48 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full shadow-2xl flex items-center justify-center group hover:shadow-blue-500/40 transition-all duration-500">
                <div className="w-40 h-40 bg-gray-900 rounded-full flex flex-col items-center justify-center text-center p-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">Life Science</h3>
                  <p className="text-blue-200 text-xs">Solutions Hub</p>
                </div>
              </div>
            </motion.div>

            {/* Orbital Services */}
            {services.map((service, index) => {
              const angle = (index * 72) - 90; // 72 degrees apart, starting from top
              const radius = 280;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;
              
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, scale: 0.3 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: 0.5 + index * 0.15, 
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="absolute group"
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                    left: '50%',
                    top: '50%',
                    marginLeft: '-120px',
                    marginTop: '-100px'
                  }}
                >
                  <div className="relative w-60 h-52 bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-3xl hover:border-blue-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/25 group-hover:scale-105">
                    {/* Service Number Badge */}
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg z-10">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    
                    {/* Background Image */}
                    <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                      <img
                        src={service.backgroundImage}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10 p-6 h-full flex flex-col">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-300">
                          {index === 0 && <Stethoscope className="h-6 w-6" />}
                          {index === 1 && <TrendingUp className="h-6 w-6" />}
                          {index === 2 && <Beaker className="h-6 w-6" />}
                          {index === 3 && <ScrollText className="h-6 w-6" />}
                          {index === 4 && <Shield className="h-6 w-6" />}
                        </div>
                        <div className="text-xs text-blue-400 font-medium uppercase tracking-wider">
                          Solution
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-bold text-white mb-3 leading-tight group-hover:text-blue-300 transition-colors duration-300">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-300 text-xs leading-relaxed mb-4 flex-grow group-hover:text-blue-100 transition-colors duration-300">
                        {service.description.substring(0, 100)}...
                      </p>
                      
                      <button className="px-4 py-2 bg-gradient-to-r from-blue-600/80 to-cyan-600/80 text-white text-xs font-medium rounded-full hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 hover:scale-105 self-start">
                        Explore
                      </button>
                    </div>

                    {/* Connecting Line to Center */}
                    <div className="absolute inset-0 pointer-events-none">
                      <svg className="w-full h-full">
                        <line
                          x1="50%"
                          y1="50%"
                          x2={`${50 - (x / 4)}%`}
                          y2={`${50 - (y / 4)}%`}
                          stroke="url(#connectionGradient)"
                          strokeWidth="2"
                          strokeDasharray="3,3"
                          opacity="0.3"
                          className="group-hover:opacity-60 transition-opacity duration-300"
                        />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Connecting Lines */}
            <div className="absolute inset-0 pointer-events-none">
              <svg className="w-full h-full opacity-20">
                <defs>
                  <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#06B6D4" />
                  </linearGradient>
                  <radialGradient id="orbitalGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="transparent" />
                    <stop offset="80%" stopColor="#3B82F620" />
                    <stop offset="100%" stopColor="#06B6D620" />
                  </radialGradient>
                </defs>
                
                {/* Orbital Rings */}
                <circle cx="50%" cy="50%" r="280" fill="none" stroke="url(#connectionGradient)" strokeWidth="1" strokeDasharray="8,8" opacity="0.3" />
                <circle cx="50%" cy="50%" r="200" fill="none" stroke="url(#connectionGradient)" strokeWidth="1" strokeDasharray="4,4" opacity="0.2" />
                
                {/* Radial connecting lines */}
                {services.map((_, index) => {
                  const angle = (index * 72) - 90;
                  const startX = 50 + Math.cos((angle * Math.PI) / 180) * 12;
                  const startY = 50 + Math.sin((angle * Math.PI) / 180) * 12;
                  const endX = 50 + Math.cos((angle * Math.PI) / 180) * 35;
                  const endY = 50 + Math.sin((angle * Math.PI) / 180) * 35;
                  
                  return (
                    <line
                      key={index}
                      x1={`${startX}%`}
                      y1={`${startY}%`}
                      x2={`${endX}%`}
                      y2={`${endY}%`}
                      stroke="url(#connectionGradient)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      opacity="0.4"
                    />
                  );
                })}
              </svg>
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
              <div className="absolute top-40 right-32 w-3 h-3 bg-cyan-400 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute bottom-32 left-40 w-2 h-2 bg-blue-300 rounded-full animate-ping delay-500"></div>
              <div className="absolute bottom-20 right-20 w-1 h-1 bg-cyan-300 rounded-full animate-pulse delay-2000"></div>
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