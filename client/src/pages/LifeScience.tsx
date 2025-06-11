import React from "react";
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
    description: "Reduce time-to-market with streamlined processes",
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Enhanced Efficiency",
    description: "Optimize operations with cutting-edge technology",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Expert Guidance",
    description: "Access specialized life science professionals",
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Compliance Assurance",
    description: "Meet regulatory standards with confidence",
  },
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
              OUR SOLUTIONS
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive life science solutions designed to accelerate your
              research and development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group cursor-pointer"
              >
                <div className="relative h-72 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 hover:from-blue-900 hover:to-cyan-900 transition-all duration-500 group-hover:scale-[1.02] shadow-xl">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={service.backgroundImage}
                      alt={service.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  </div>

                  {/* Content Container */}
                  <div className="relative z-10 p-6 h-full flex flex-col">
                    {/* Icon in top-left corner */}
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors duration-300">
                      <div className="text-white group-hover:text-blue-300 transition-colors duration-300">
                        {index === 0 && <Stethoscope className="h-6 w-6" />}
                        {index === 1 && <TrendingUp className="h-6 w-6" />}
                        {index === 2 && <Beaker className="h-6 w-6" />}
                        {index === 3 && <ScrollText className="h-6 w-6" />}
                        {index === 4 && <Shield className="h-6 w-6" />}
                      </div>
                    </div>

                    {/* Title and Description at bottom */}
                    <div className="mt-auto">
                      <h4 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-blue-100 transition-colors duration-300">
                        {service.title}
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed group-hover:text-blue-200 transition-colors duration-300">
                        {service.description}
                      </p>
                    </div>

                    {/* Icon overlay in bottom-right */}
                    <div className="absolute bottom-4 right-4 w-12 h-12 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 group-hover:border-blue-300/50 transition-all duration-300">
                      <div className="text-blue-300 group-hover:text-blue-200 transition-colors duration-300">
                        {index === 0 && <Stethoscope className="h-5 w-5" />}
                        {index === 1 && <TrendingUp className="h-5 w-5" />}
                        {index === 2 && <Beaker className="h-5 w-5" />}
                        {index === 3 && <ScrollText className="h-5 w-5" />}
                        {index === 4 && <Shield className="h-5 w-5" />}
                      </div>
                    </div>
                  </div>

                  {/* Subtle hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/0 via-blue-500/0 to-cyan-500/0 group-hover:from-blue-600/10 group-hover:via-blue-500/5 group-hover:to-cyan-500/10 transition-all duration-500 rounded-2xl"></div>
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
              Partner with us to accelerate your research, ensure compliance,
              and bring life-changing treatments to market faster.
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
