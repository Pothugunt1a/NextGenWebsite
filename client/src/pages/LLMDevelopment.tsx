import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import {
  Brain,
  Code,
  Zap,
  Target,
  Settings,
  Users,
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  Star,
  Sparkles,
  Rocket,
  Shield,
  Database,
  Cpu,
  MessageSquare,
  GitBranch,
  BarChart3,
  Globe,
  Cog,
  TrendingUp,
} from "lucide-react";

const services = [
  {
    icon: <Brain className="h-8 w-8" />,
    title: "Custom LLM Development",
    description:
      "Build tailored Large Language Models designed specifically for your business needs and domain expertise.",
    color: "from-blue-500 to-cyan-500",
    features: [
      "Domain-specific training",
      "Custom architecture design",
      "Performance optimization",
      "Scalable deployment",
    ],
  },
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: "LLM Fine-tuning",
    description:
      "Enhance existing models with your proprietary data to achieve superior performance in your specific use cases.",
    color: "from-green-500 to-emerald-500",
    features: [
      "Task-specific fine-tuning",
      "Data preprocessing",
      "Model evaluation",
      "Continuous improvement",
    ],
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: "LLM Integration",
    description:
      "Seamlessly integrate Large Language Models into your existing systems and workflows.",
    color: "from-purple-500 to-violet-500",
    features: [
      "API development",
      "System integration",
      "Real-time processing",
      "Security implementation",
    ],
  },
  {
    icon: <Settings className="h-8 w-8" />,
    title: "LLM Optimization",
    description:
      "Optimize model performance, reduce costs, and improve efficiency while maintaining quality.",
    color: "from-orange-500 to-red-500",
    features: [
      "Performance tuning",
      "Cost optimization",
      "Latency reduction",
      "Resource management",
    ],
  },
];

const capabilities = [
  {
    icon: <Cpu className="h-6 w-6" />,
    title: "Model Architecture Design",
    description:
      "Custom neural network architectures optimized for your specific requirements",
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Data Pipeline Development",
    description: "Robust data processing pipelines for training and inference",
  },
  {
    icon: <GitBranch className="h-6 w-6" />,
    title: "Model Versioning & Management",
    description: "Complete MLOps solutions for model lifecycle management",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Security & Compliance",
    description:
      "Enterprise-grade security and regulatory compliance implementation",
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Performance Monitoring",
    description: "Real-time monitoring and analytics for deployed models",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Multi-language Support",
    description: "Global deployment with multi-language model capabilities",
  },
];

const stats = [
  {
    icon: <Target className="h-8 w-8" />,
    title: "99.9%",
    subtitle: "Model Accuracy",
    description: "Average performance",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Rocket className="h-8 w-8" />,
    title: "50+",
    subtitle: "LLM Projects",
    description: "Successfully delivered",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: "70%",
    subtitle: "Cost Reduction",
    description: "Through optimization",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: <Star className="h-8 w-8" />,
    title: "24/7",
    subtitle: "Model Support",
    description: "Continuous monitoring",
    color: "from-orange-500 to-red-500",
  },
];

const processSteps = [
  {
    number: "1.",
    title: "Identify Target User Groups",
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: "2.",
    title: "Define Goals and Objectives",
    color: "from-green-500 to-emerald-500",
  },
  {
    number: "3.",
    title: "Create Wireframes or Prototypes",
    color: "from-purple-500 to-violet-500",
  },
  {
    number: "4.",
    title: "List Actions and Scenarios",
    color: "from-orange-500 to-red-500",
  },
  {
    number: "5.",
    title: "Conduct Usability Testing",
    color: "from-pink-500 to-rose-500",
  },
];

export default function LLMDevelopment() {
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
            src="/assets/LLM-banner.png"
            alt="LLM Development and Consulting"
            className="w-full h-full object-cover"
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
                LLM Development and Consulting
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-4xl"
            >
              Transform your business with cutting-edge Large Language Models
              tailored to your specific needs
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
                  Next-Generation AI Solutions
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

      {/* About LLM Section */}
      <section className="py-16 bg-light relative">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40"></div>
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Why Choose Our LLM Development Services?
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="/assets/LLM.png"
                alt="LLM Development"
                className="w-full h-80 lg:h-96 object-cover rounded-2xl"
              />
            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                Large Language Models (LLMs) represent the cutting edge of
                artificial intelligence, capable of understanding and generating
                human-like text with unprecedented accuracy and context
                awareness. Our expert team specializes in developing custom LLM
                solutions that transform how businesses communicate, automate
                processes, and deliver value to customers.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Whether you need a specialized chatbot, content generation
                system, or complex document analysis tool, we provide end-to-end
                LLM development services that integrate seamlessly with your
                existing infrastructure while delivering measurable business
                results.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-light relative">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40"></div>
          <div className="absolute top-1/4 left-10 w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-2xl opacity-30"></div>
          <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full blur-2xl opacity-30"></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Our LLM Development Services
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive LLM solutions designed to meet your specific
              business requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <div className="h-full bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-8 hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
                  <div className="mb-6">
                    <div
                      className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} group-hover:scale-110 transition-transform duration-300 mb-4`}
                    >
                      <div className="text-white">{service.icon}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LLM Development Process Section */}
      <section className="py-16 bg-gray-50 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              LLM Use Cases & Applications
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
          </motion.div>

          {/* Process Steps Flow */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0 max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center"
              >
                {/* Step Box */}
                <div className="relative">
                  <div className="bg-white border-2 border-gray-300 rounded-2xl p-6 w-48 h-32 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:border-blue-400 group">
                    <div className={`text-2xl font-bold mb-2 bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                      {step.number}
                    </div>
                    <div className="text-gray-800 font-semibold text-sm leading-tight">
                      {step.title}
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:flex items-center mx-2">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.2 + 0.3, duration: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <ArrowRight className="h-8 w-8 text-gray-400" />
                    </motion.div>
                  </div>
                )}

                {/* Mobile Arrow (Vertical) */}
                {index < processSteps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-2">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.2 + 0.3, duration: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <ArrowRight className="h-8 w-8 text-gray-400 rotate-90" />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 bg-light relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40"></div>
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Our Technical Capabilities
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="h-full bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 hover:border-blue-400/40 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl border border-blue-400/30 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-blue-400 group-hover:text-cyan-300 transition-colors">
                        {capability.icon}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {capability.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-light relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/20 to-transparent"></div>
          <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-8"
            >
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-400 bg-clip-text text-transparent">
                Ready to Transform Your Business with
              </span>
              <br />
              <span className="text-white">Custom LLM Solutions?</span>
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Let's discuss how our LLM development and consulting services can
              accelerate your AI transformation and deliver unprecedented
              business value
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            >
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <CheckCircle2 className="h-6 w-6 text-white bg-primary rounded-full p-1" />
                <span className="text-white font-semibold">
                  Free LLM Strategy Session
                </span>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <CheckCircle2 className="h-6 w-6 text-white bg-primary rounded-full p-1" />
                <span className="text-white font-semibold">
                  Expert LLM Guidance
                </span>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <CheckCircle2 className="h-6 w-6 text-white bg-primary rounded-full p-1" />
                <span className="text-white font-semibold">
                  Proven LLM Results
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
                className="group bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-12 py-6 text-lg font-bold shadow-2xl shadow-blue-500/25 hover:shadow-cyan-500/40 transition-all duration-300 border-0"
              >
                Get Started Today
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
