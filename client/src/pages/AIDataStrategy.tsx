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
    description:
      "Unlock the hidden value in your data assets with comprehensive analysis and strategic planning.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Problematic Data Sources",
    description:
      "Transform noisy, incomplete, or inaccurate data into reliable, actionable insights.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Expert Resources & Experience",
    description:
      "Bridge the gap with our experienced team when you lack internal data expertise.",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Continuous Support & Evolution",
    description:
      "Ongoing support to evolve and optimize your analytics solutions over time.",
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
              Making informed decisions when developing and deploying AI
              solutions is essential to remain competitive in today’s rapidly
              evolving market. We’re here to guide you through the entire
              journey, offering end-to-end support to help drive your success.
              Our mission is to empower your business through expert consulting
              in Big Data, Data Science, AI, and Machine Learning.
            </motion.p>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-blue-200 mb-12 leading-relaxed max-w-4xl"
            >
              Our AI consultants follow industry best practices, assess and
              optimize your current data science initiatives, work closely with
              your subject matter experts (SMEs), and provide full support
              across all data-driven activities.
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our Comprehensive Approach
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Image Section */}
            <div className="relative">
              <img
                src="./assets/Data-Governance.png"
                alt="Data Governance"
                className="w-full h-80 lg:h-96 object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "./assets/data-governance.png";
                }}
              />
            </div>

            {/* Content Section */}
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Making the right decisions on developing and deploying AI
                products is crucial if you want to stay competitive in a
                fast-moving market. We will guide you through this process and
                ensure complete support. In short, it's our goal to make your
                business successful by providing Big Data, Data Science, AI and
                Machine Learning consulting.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our AI Consultant will implement best practices, find out how to
                adjust your data science existing solutions, closely cooperate
                with your subject matter expert (SME) and support you with all
                data-related activities.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose Our Data Strategy Services?
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Partner with industry leaders in AI and data strategy solutions
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {benefits.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group"
              >
                <div className="h-full bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">{item.icon}</div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-16 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10" />
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center p-16 rounded-3xl bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl border border-white/20 shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Top Badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 px-6 py-3 mb-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-full backdrop-blur-sm"
            >
              <Sparkles className="h-5 w-5 text-cyan-400" />
              <span className="text-white font-medium">
                Trusted Globally by Industry Leaders
              </span>
              <Star className="h-4 w-4 text-blue-400 fill-current" />
            </motion.div>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-white via-blue-100 to-[#0080FF] bg-clip-text text-transparent">
                Transform Your
              </span>
              <br />
              <span className="text-white">Data Strategy</span>
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Join hundreds of companies who trust RT NextGenAI for their AI and
              data strategy needs. Our experts are ready to accelerate your
              digital transformation journey with cutting-edge solutions.
            </motion.p>

            {/* Benefits Grid */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            >
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <CheckCircle2 className="h-6 w-6 text-white bg-primary rounded-full p-1" />
                <span className="text-white font-semibold">
                  Free Consultation
                </span>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <CheckCircle2 className="h-6 w-6 text-white bg-primary rounded-full p-1" />
                <span className="text-white font-semibold">
                  24/7 Expert Support
                </span>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <CheckCircle2 className="h-6 w-6 text-white bg-primary rounded-full p-1" />
                <span className="text-white font-semibold">
                  Guaranteed Results
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex justify-center"
            >
              <Button
                size="lg"
                className="group bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-10 py-6 text-lg font-semibold shadow-2xl shadow-blue-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
              >
                <Users className="mr-2 h-5 w-5" />
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
