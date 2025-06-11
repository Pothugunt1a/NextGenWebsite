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
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Life Science Excellence
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed max-w-3xl">
              Accelerating innovation through comprehensive life science solutions, regulatory expertise, and cutting-edge technology to bring breakthrough treatments to market faster.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-16">
              <Button
                onClick={() => navigate("/contact")}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-full hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25 text-lg"
              >
                Get Started
              </Button>
              <Button
                variant="outline"
                className="px-8 py-4 border-blue-400 text-blue-400 hover:bg-blue-500/10 font-semibold rounded-full transition-all duration-300 hover:scale-105 text-lg"
              >
                Learn More
              </Button>
            </div>

            <div className="flex flex-wrap gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                  className="flex items-center gap-3 bg-black/20 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-500/30"
                >
                  <div className="text-blue-400">
                    {benefit.icon}
                  </div>
                  <span className="text-white font-medium">{benefit.title}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-4 mt-8">
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

      {/* Services Section - Timeline Style */}
      <div className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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

          {/* Timeline Layout */}
          <div className="relative max-w-6xl mx-auto">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
            
            <div className="space-y-16">
              {services.map((service, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.8 }}
                    className={`flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'} gap-8`}
                  >
                    {/* Content Side */}
                    <div className="w-5/12">
                      <div className={`p-8 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 ${!isLeft ? 'text-right' : ''}`}>
                        <div className={`flex items-center gap-4 mb-6 ${!isLeft ? 'justify-end' : ''}`}>
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center text-blue-400">
                            {index === 0 && <Stethoscope className="h-6 w-6" />}
                            {index === 1 && <TrendingUp className="h-6 w-6" />}
                            {index === 2 && <Beaker className="h-6 w-6" />}
                            {index === 3 && <ScrollText className="h-6 w-6" />}
                            {index === 4 && <Shield className="h-6 w-6" />}
                          </div>
                          <div className="text-sm text-blue-400 font-medium">
                            Solution {String(index + 1).padStart(2, '0')}
                          </div>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-4">
                          {service.title}
                        </h3>
                        
                        <p className="text-gray-300 leading-relaxed mb-6">
                          {service.description}
                        </p>
                        
                        <div className={`flex items-center gap-4 ${!isLeft ? 'justify-end' : ''}`}>
                          <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium rounded-full hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 hover:scale-105">
                            Learn More
                          </button>
                          <ArrowRight className="h-5 w-5 text-blue-400" />
                        </div>
                      </div>
                    </div>

                    {/* Timeline Point */}
                    <div className="relative">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-4 border-gray-900 z-10 relative"></div>
                    </div>

                    {/* Image Side */}
                    <div className="w-5/12">
                      <div className="relative h-64 rounded-2xl overflow-hidden shadow-2xl group">
                        <img
                          src={service.backgroundImage}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 to-cyan-900/40 group-hover:from-blue-800/70 group-hover:to-cyan-800/50 transition-all duration-500"></div>
                        
                        {/* Service Number Overlay */}
                        <div className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
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