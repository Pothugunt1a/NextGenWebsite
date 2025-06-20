import React from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import {
  Database,
  Brain,
  TrendingUp,
  Shield,
  Target,
  Users,
  CheckCircle2,
  ArrowRight,
  BarChart3,
  Lightbulb,
  Settings,
  Zap,
  Star,
  Sparkles,
} from "lucide-react";

const benefits = [
  {
    icon: <Database className="h-8 w-8" />,
    title: "Understand Your Data Potential",
    description: "Unlock the hidden value in your data assets with comprehensive analysis and strategic planning.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Problematic Data Sources",
    description: "Transform noisy, incomplete, or inaccurate data into reliable, actionable insights.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Expert Resources & Experience",
    description: "Bridge the gap with our experienced team when you lack internal data expertise.",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Continuous Support & Evolution",
    description: "Ongoing support to evolve and optimize your analytics solutions over time.",
    color: "from-orange-500 to-red-500",
  },
];

const services = [
  {
    icon: <Brain className="h-6 w-6" />,
    title: "AI Strategy Development",
    description: "Comprehensive roadmap for AI implementation and deployment",
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Data Science Consulting",
    description: "Advanced analytics and machine learning model development",
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Big Data Solutions",
    description: "Scalable data processing and storage architectures",
  },
  {
    icon: <Settings className="h-6 w-6" />,
    title: "Data Governance",
    description: "Establish data quality, security, and compliance frameworks",
  },
];

const stats = [
  {
    icon: <Target className="h-8 w-8" />,
    title: "95%",
    subtitle: "Success Rate",
    description: "Project delivery",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: "200+",
    subtitle: "AI Projects",
    description: "Successfully delivered",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "70%",
    subtitle: "Efficiency Gain",
    description: "Average improvement",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: <Star className="h-8 w-8" />,
    title: "50+",
    subtitle: "Expert Consultants",
    description: "Certified specialists",
    color: "from-orange-500 to-red-500",
  },
];

export default function AIDataStrategy() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-white"
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="./assets/AI-DataStatergy.png"
            alt="AI and Data Strategy"
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "./assets/ai-datastatergy.png";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40"></div>
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
                AI & Data Strategy
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-4xl"
            >
              Making the right decisions on developing and deploying AI products is crucial if you want to stay competitive in a fast-moving market. We will guide you through this process and ensure complete support.
            </motion.p>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-blue-200 mb-12 leading-relaxed max-w-4xl"
            >
              In short, it's our goal to make your business successful by providing Big Data, Data Science, AI and Machine Learning consulting.
            </motion.p>

            {/* Badge */}
            <div className="mb-32">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0066CC]/20 border border-[#0080FF]/30 rounded-full backdrop-blur-sm"
              >
                <Sparkles className="h-5 w-5 text-cyan-400" />
                <span className="text-white font-medium">
                  Strategic AI Implementation Excellence
                </span>
                <Star className="h-4 w-4 text-blue-400 fill-current" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="absolute bottom-8 left-0 right-0">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center md:justify-start">
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl w-full"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group relative"
                  >
                    <div className="relative p-4 md:p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden text-center">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                      />

                      <div className="relative z-10">
                        <div className="flex justify-center mb-3 md:mb-4">
                          <div
                            className={`inline-flex p-2 md:p-3 rounded-xl bg-gradient-to-br ${stat.color}`}
                          >
                            <div className="text-white">{stat.icon}</div>
                          </div>
                        </div>
                        <div className="text-2xl md:text-3xl font-bold mb-1 md:mb-2 text-white">
                          {stat.title}
                        </div>
                        <div className="text-xs md:text-sm font-semibold text-gray-300 mb-1">
                          {stat.subtitle}
                        </div>
                        <div className="text-xs text-gray-400">
                          {stat.description}
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

      {/* Our Approach Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Our Comprehensive Approach
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our AI Consultant will implement best practices, find out how to adjust your data science existing solutions, 
              closely cooperate with your subject matter expert (SME) and support you with all data-related activities.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 mr-4">
                        <div className="text-white">{service.icon}</div>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Why Choose Our Data Strategy Services?
              </span>
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className={`p-4 rounded-xl bg-gradient-to-br ${benefit.color} flex-shrink-0`}>
                        <div className="text-white">{benefit.icon}</div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Transform Your Data Strategy?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Let our experts guide you through the AI transformation journey and unlock the full potential of your data assets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8 py-3"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-3"
              >
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}