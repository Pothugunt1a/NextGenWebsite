
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Cpu,
  TrendingUp,
  Target,
  Zap,
  Shield,
  CheckCircle,
  Award,
  ArrowRight,
  BarChart3,
  Network,
  Eye,
} from "lucide-react";
import { Button } from "../components/ui/button";

const aimlCapabilities = [
  {
    category: "Machine Learning Models",
    description: "Advanced ML algorithms for predictive analytics, classification, and regression analysis.",
    tools: ["TensorFlow", "PyTorch", "Scikit-learn", "XGBoost"],
    icon: <Brain className="h-8 w-8 text-white" />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    category: "Deep Learning & Neural Networks",
    description: "Complex neural network architectures for computer vision, NLP, and pattern recognition.",
    tools: ["CNN", "RNN", "LSTM", "Transformers"],
    icon: <Network className="h-8 w-8 text-white" />,
    color: "from-purple-500 to-violet-500",
  },
  {
    category: "Predictive Analytics",
    description: "Time-series forecasting and predictive modeling for business optimization.",
    tools: ["Prophet", "ARIMA", "LSTM", "Random Forest"],
    icon: <TrendingUp className="h-8 w-8 text-white" />,
    color: "from-green-500 to-emerald-500",
  },
];

const applications = [
  {
    icon: <Target className="h-8 w-8 text-white" />,
    title: "Predictive Maintenance",
    description: "AI-powered predictive maintenance systems that forecast equipment failures and optimize maintenance schedules.",
    benefits: ["Reduced Downtime", "Cost Optimization", "Asset Longevity"],
  },
  {
    icon: <Eye className="h-8 w-8 text-white" />,
    title: "Anomaly Detection",
    description: "Advanced anomaly detection systems for fraud prevention, quality control, and security monitoring.",
    benefits: ["Fraud Prevention", "Quality Assurance", "Security Enhancement"],
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-white" />,
    title: "Customer Analytics",
    description: "Deep customer behavior analysis, churn prediction, and personalization engines for improved customer experience.",
    benefits: ["Customer Retention", "Personalization", "Revenue Growth"],
  },
  {
    icon: <Cpu className="h-8 w-8 text-white" />,
    title: "Process Optimization",
    description: "AI-driven process optimization and automation for operational efficiency and cost reduction.",
    benefits: ["Efficiency Gains", "Cost Reduction", "Process Automation"],
  },
];

export default function AdvancedAnalyticsAIML() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-light text-white"
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/AI-Capabilities.gif"
            alt="Advanced Analytics AI ML"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70"></div>
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
            >
              <span className="bg-gradient-to-r from-white via-blue-100 to-[#0080FF] bg-clip-text text-transparent">
                Advanced Analytics & AI/ML Solutions
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-4xl"
            >
              Harness the power of artificial intelligence and machine learning to unlock predictive insights and automate intelligent decision-making.
            </motion.p>

            <div className="mb-32">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0066CC]/20 border border-[#0080FF]/30 rounded-full backdrop-blur-sm"
              >
                <CheckCircle className="h-5 w-5 text-cyan-400" />
                <span className="text-white font-medium">
                  Next-Generation AI/ML Excellence
                </span>
                <Award className="h-4 w-4 text-blue-400 fill-current" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI/ML Capabilities Section */}
      <section className="py-20 bg-light relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6 text-white">
              Our AI/ML Technology Stack
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge AI and machine learning technologies for enterprise solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {aimlCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 h-full hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 text-center">
                  <div className="flex justify-center mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${capability.color}`}>
                      {capability.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {capability.category}
                  </h3>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {capability.description}
                  </p>

                  <div className="flex flex-wrap justify-center gap-2">
                    {capability.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-xs text-blue-200"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                AI/ML Applications
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {applications.map((app, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                      {app.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {app.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {app.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {app.benefits.map((benefit, benefitIndex) => (
                      <span
                        key={benefitIndex}
                        className="px-3 py-1 bg-green-500/20 border border-green-400/30 rounded-full text-xs text-green-200"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center p-16 rounded-3xl bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl border border-white/20 shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-white via-blue-100 to-[#0080FF] bg-clip-text text-transparent">
                Ready to Unleash AI
              </span>
              <br />
              <span className="text-white">in Your Business?</span>
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Transform your business with advanced AI and machine learning solutions that deliver measurable results
            </motion.p>

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
                <Brain className="mr-2 h-5 w-5" />
                Start Your AI Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
