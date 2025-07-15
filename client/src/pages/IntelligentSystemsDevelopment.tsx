import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ChevronDown,
  ChevronUp,
  Brain,
  Eye,
  MessageSquare,
  TrendingUp,
  Zap,
  Shield,
  Network,
  Settings,
  ArrowRight,
  CheckCircle,
  Award,
  Bot,
  Clock,
  Lightbulb,
  Target,
  Users,
} from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const whyChooseUsItems = [
  {
    icon: Eye,
    secondaryIcon: Brain,
    title: "Perception & Awareness",
    description:
      "Systems that interpret visual, audio, and sensor inputs—like facial recognition, quality inspection, and smart monitoring.",
    badge: "Advanced Computer Vision",
  },
  {
    icon: Zap,
    secondaryIcon: Clock,
    title: "Real‑Time Decision-Making",
    description:
      "Machine learning models that detect patterns and act autonomously in dynamic environments—from logistics to service workflows.",
    badge: "Autonomous Intelligence",
  },
  {
    icon: TrendingUp,
    secondaryIcon: Target,
    title: "Predictive & Proactive Intelligence",
    description:
      "By forecasting trends and anomalies, we enable continuous optimization—from predictive maintenance to inventory control.",
    badge: "Future-Ready Systems",
  },
  {
    icon: Network,
    secondaryIcon: Settings,
    title: "Seamless Integration",
    description:
      "Our systems integrate with existing ERP, CRM, robotics, cloud, and mobile frameworks enabling frictionless automation across business platforms.",
    badge: "Enterprise Integration",
  },
  {
    icon: Shield,
    secondaryIcon: Users,
    title: "Scalable & Secure Architecture",
    description:
      "Built for performance, security, and growth—on-premise or in the cloud, powered by robust, monitorable AI pipelines.",
    badge: "Enterprise-Grade Security",
  },
];

const capabilities = [
  {
    icon: <Eye className="h-8 w-8 text-white" />,
    title: "Computer Vision & Visual Analytics",
    description:
      "Object detection, image segmentation, video analytics, facial recognition, and real-time visual monitoring systems.",
    backgroundImage: "/assets/AI-ComputerVision.png",
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-white" />,
    title: "Natural Language & Conversational AI",
    description:
      "Intelligent chatbots, virtual assistants, text classification, summarization, and multilingual support systems.",
    backgroundImage: "/assets/AI-NLP.png",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-white" />,
    title: "Predictive Modeling & Anomaly Detection",
    description:
      "Time‑series forecasting, root‑cause identification, and automated alerting based on real‑time data.",
    backgroundImage: "/assets/AI-ML.png",
  },
  {
    icon: <Bot className="h-8 w-8 text-white" />,
    title: "Robotic Process Automation (RPA)",
    description:
      "End‑to‑end automation of routine tasks—from invoice processing to data entry and workflow orchestration.",
    backgroundImage: "/assets/AI-Robotic.png",
  },
  {
    icon: <Settings className="h-8 w-8 text-white" />,
    title: "Intelligent Automation",
    description:
      "Combining RPA with machine learning to build self‑learning processes that adapt to new data and evolving business needs.",
    backgroundImage: "/assets/AI-Intelligent.png",
  },
];

const developmentFramework = [
  {
    icon: <Lightbulb className="h-8 w-8 text-white" />,
    title: "Consultation & Strategy",
    description:
      "Understand your needs, envision KPIs, and align intelligent systems with your business goals.",
  },
  {
    icon: <Brain className="h-8 w-8 text-white" />,
    title: "Data & Feasibility Analysis",
    description:
      "Audit your data, evaluate availability and quality, and determine feasibility.",
  },
  {
    icon: <Target className="h-8 w-8 text-white" />,
    title: "Prototype & Design",
    description:
      "Build proof‑of‑concepts of vision, NLP, or predictive systems to validate approach.",
  },
  {
    icon: <Settings className="h-8 w-8 text-white" />,
    title: "Development & Integration",
    description:
      "Train models and deploy via APIs or microservices, embedding them into your infrastructure.",
  },
  {
    icon: <Network className="h-8 w-8 text-white" />,
    title: "Deployment & Monitoring",
    description:
      "Launch on your preferred environment (cloud or on-premise) with real‑time performance tracking.",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-white" />,
    title: "Optimization & Continuous Improvement",
    description:
      "Ongoing model refinement and feature scaling to keep systems ahead of evolving business needs.",
  },
];

const industries = [
  {
    name: "Manufacturing & Automation",
    description: "Visual inspection, predictive maintenance, robotics.",
  },
  {
    name: "Healthcare & Life Sciences",
    description: "Diagnostic image analysis, clinical workflow automation.",
  },
  {
    name: "FinTech",
    description:
      "Fraud detection, risk analysis, intelligent customer support.",
  },
  {
    name: "E‑commerce & Retail",
    description:
      "Personalized recommendations, demand forecasting, intelligent chatbots.",
  },
  {
    name: "Logistics & Supply Chain",
    description: "Route optimization, inventory management, anomaly detection.",
  },
];

// Industry applications for the multiple industries component
const industryApplications = [
  {
    name: "Manufacturing & Automation",
    image: "/assets/Manufacturing&Automation.png",
    description:
      "Transform manufacturing with intelligent systems for visual quality inspection, predictive equipment maintenance, and robotics automation. Our solutions include real-time defect detection, production optimization, and autonomous manufacturing processes that increase efficiency while maintaining quality standards.",
    useCases: [
      "Visual Quality Inspection",
      "Predictive Maintenance",
      "Robotics Automation",
      "Production Optimization",
    ],
  },
  {
    name: "Healthcare & Life Sciences",
    image: "/assets/Healthcare&LifeScience.png",
    description:
      "Revolutionize healthcare delivery with diagnostic image analysis, clinical workflow automation, and intelligent patient monitoring. We develop systems for medical image interpretation, treatment recommendation engines, and automated clinical documentation that improve patient outcomes while reducing administrative burden.",
    useCases: [
      "Diagnostic Image Analysis",
      "Clinical Workflow Automation",
      "Patient Monitoring",
      "Treatment Recommendations",
    ],
  },
  {
    name: "FinTech",
    image: "/assets/Fintech.png",
    description:
      "Enhance financial services with intelligent fraud detection, risk analysis systems, and customer support automation. Our solutions include real-time transaction monitoring, automated compliance checking, and intelligent investment advisory systems that protect assets while improving customer experience.",
    useCases: [
      "Fraud Detection",
      "Risk Analysis",
      "Customer Support",
      "Compliance Automation",
    ],
  },
  {
    name: "E‑commerce & Retail",
    image: "/assets/Ecommerce.png",
    description:
      "Optimize retail operations with personalized recommendation engines, demand forecasting systems, and intelligent customer service chatbots. We create solutions for dynamic pricing, inventory optimization, and customer behavior prediction that drive sales while improving operational efficiency.",
    useCases: [
      "Personalized Recommendations",
      "Demand Forecasting",
      "Dynamic Pricing",
      "Inventory Optimization",
    ],
  },
  {
    name: "Logistics & Supply Chain",
    image: "/assets/Logistics&SupplyChain.png",
    description:
      "Streamline logistics with intelligent route optimization, inventory management systems, and anomaly detection. Our solutions include predictive supply chain analytics, automated warehouse management, and real-time shipment tracking that reduce costs while improving delivery performance.",
    useCases: [
      "Route Optimization",
      "Inventory Management",
      "Anomaly Detection",
      "Predictive Analytics",
    ],
  },
];

// Industry data for the interactive section
const industryData = [
  {
    id: "manufacturing",
    name: "Manufacturing & Automation",
    image: "/assets/Manufacturing.png",
    content:
      "Transform manufacturing with intelligent systems for visual quality inspection, predictive equipment maintenance, and robotics automation. Our solutions include real-time defect detection, production optimization, and autonomous manufacturing processes that increase efficiency while maintaining quality standards.",
  },
  {
    id: "healthcare",
    name: "Healthcare & Life Sciences",
    image: "/assets/Healthcare.png",
    content:
      "Revolutionize healthcare delivery with diagnostic image analysis, clinical workflow automation, and intelligent patient monitoring. We develop systems for medical image interpretation, treatment recommendation engines, and automated clinical documentation that improve patient outcomes while reducing administrative burden.",
  },
  {
    id: "fintech",
    name: "FinTech",
    image: "/assets/Finance.png",
    content:
      "Enhance financial services with intelligent fraud detection, risk analysis systems, and customer support automation. Our solutions include real-time transaction monitoring, automated compliance checking, and intelligent investment advisory systems that protect assets while improving customer experience.",
  },
  {
    id: "ecommerce",
    name: "E‑commerce & Retail",
    image: "/assets/Ecommerce.png",
    content:
      "Optimize retail operations with personalized recommendation engines, demand forecasting systems, and intelligent customer service chatbots. We create solutions for dynamic pricing, inventory optimization, and customer behavior prediction that drive sales while improving operational efficiency.",
  },
  {
    id: "logistics",
    name: "Logistics & Supply Chain",
    image: "/assets/Logistics.png",
    content:
      "Streamline logistics with intelligent route optimization, inventory management systems, and anomaly detection. Our solutions include predictive supply chain analytics, automated warehouse management, and real-time shipment tracking that reduce costs while improving delivery performance.",
  },
];

export default function IntelligentSystemsDevelopment() {
  const [selectedIndustry, setSelectedIndustry] = useState(industryData[0]);
  const [selectedIndustryApp, setSelectedIndustryApp] = useState(
    industryApplications[0],
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-light text-white"
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/assets/IntelligentSystemsDevelopment-banner.png"
            alt="Intelligent Systems Development"
            className="w-full h-full object-cover object-center"
            style={{
              imageRendering: "crisp-edges",
              filter: "contrast(1.1) saturate(1.1) brightness(1.05)",
              transform: "translateZ(0)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20"></div>
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
                Transforming Data into Actionable Intelligence
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-4xl"
            >
              RT NextGen AI builds intelligent systems that learn, adapt, and
              act autonomously—enhancing efficiency through computer vision,
              NLP, analytics, and robotics.
            </motion.p>

            {/* Badge */}
            <div className="mb-32">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0066CC]/20 border border-[#0080FF]/30 rounded-full backdrop-blur-sm"
              >
                <CheckCircle className="h-5 w-5 text-cyan-400" />
                <span className="text-white font-medium">
                  Intelligent Systems Excellence
                </span>
                <Award className="h-4 w-4 text-blue-400 fill-current" />
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
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 1.4, duration: 0.6 }}
                  className="group relative"
                >
                  <div className="relative p-4 md:p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden text-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                    <div className="relative z-10">
                      <div className="flex justify-center mb-3 md:mb-4">
                        <div className="inline-flex p-2 md:p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                          <div className="text-white">
                            <Target className="h-6 w-6 md:h-8 md:w-8" />
                          </div>
                        </div>
                      </div>
                      <div className="text-2xl md:text-3xl font-bold mb-1 md:mb-2 text-white">
                        95%
                      </div>
                      <div className="text-xs md:text-sm font-semibold text-gray-300 mb-1">
                        Success Rate
                      </div>
                      <div className="text-xs text-gray-400">
                        System deployment
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 1.5, duration: 0.6 }}
                  className="group relative"
                >
                  <div className="relative p-4 md:p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden text-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                    <div className="relative z-10">
                      <div className="flex justify-center mb-3 md:mb-4">
                        <div className="inline-flex p-2 md:p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500">
                          <div className="text-white">
                            <Brain className="h-6 w-6 md:h-8 md:w-8" />
                          </div>
                        </div>
                      </div>
                      <div className="text-2xl md:text-3xl font-bold mb-1 md:mb-2 text-white">
                        150+
                      </div>
                      <div className="text-xs md:text-sm font-semibold text-gray-300 mb-1">
                        Intelligent Systems
                      </div>
                      <div className="text-xs text-gray-400">
                        Successfully deployed
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 1.6, duration: 0.6 }}
                  className="group relative"
                >
                  <div className="relative p-4 md:p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden text-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-violet-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                    <div className="relative z-10">
                      <div className="flex justify-center mb-3 md:mb-4">
                        <div className="inline-flex p-2 md:p-3 rounded-xl bg-gradient-to-br from-purple-500 to-violet-500">
                          <div className="text-white">
                            <Zap className="h-6 w-6 md:h-8 md:w-8" />
                          </div>
                        </div>
                      </div>
                      <div className="text-2xl md:text-3xl font-bold mb-1 md:mb-2 text-white">
                        70%
                      </div>
                      <div className="text-xs md:text-sm font-semibold text-gray-300 mb-1">
                        Efficiency Gain
                      </div>
                      <div className="text-xs text-gray-400">
                        Process optimization
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 1.7, duration: 0.6 }}
                  className="group relative"
                >
                  <div className="relative p-4 md:p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden text-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                    <div className="relative z-10">
                      <div className="flex justify-center mb-3 md:mb-4">
                        <div className="inline-flex p-2 md:p-3 rounded-xl bg-gradient-to-br from-orange-500 to-red-500">
                          <div className="text-white">
                            <Users className="h-6 w-6 md:h-8 md:w-8" />
                          </div>
                        </div>
                      </div>
                      <div className="text-2xl md:text-3xl font-bold mb-1 md:mb-2 text-white">
                        40+
                      </div>
                      <div className="text-xs md:text-sm font-semibold text-gray-300 mb-1">
                        Industries Served
                      </div>
                      <div className="text-xs text-gray-400">
                        Across all sectors
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Technical Capabilities - Same as AI Consulting main capabilities */}
      <div
        id="capabilities-section"
        className="py-20 bg-light relative overflow-hidden"
      >
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
            <h2 className="text-5xl font-bold mb-6 text-white">
              Our Technical Capabilities
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced intelligent systems that drive innovation and operational
              excellence
            </p>
          </motion.div>

          {/* 2x2 Grid Layout with Central Image */}
          <div className="max-w-8xl mx-auto relative">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Top Row - Computer Vision and NLP */}
              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Computer Vision & Visual Analytics */}
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="group cursor-pointer h-full"
                >
                  <div className="flex items-center gap-6 p-6 bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-blue-500/50 hover:bg-gray-800/80 transition-all duration-500 group-hover:translate-x-2 h-full">
                    <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                      <img
                        src="/assets/AI-Vision.png"
                        alt="Computer Vision"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        style={{ backgroundAttachment: "fixed" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/90"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Eye className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          01
                        </div>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        Computer Vision & Visual Analytics
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Object detection, image segmentation, video analytics,
                        facial recognition, and real-time visual monitoring
                        systems.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Natural Language & Conversational AI */}
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="group cursor-pointer h-full"
                >
                  <div className="flex items-center gap-6 p-6 bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-blue-500/50 hover:bg-gray-800/80 transition-all duration-500 group-hover:translate-x-2 h-full">
                    <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                      <img
                        src="/assets/AI-NLP.png"
                        alt="Natural Language Processing"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        style={{ backgroundAttachment: "fixed" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/90"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <MessageSquare className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          02
                        </div>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        Natural Language & Conversational AI
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Intelligent chatbots, virtual assistants, text
                        classification, summarization, and multilingual support
                        systems.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Second Row - Central Image with Predictive Modeling */}
              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Central Image */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, type: "spring" }}
                  className="relative group"
                >
                  {/* Main Feature Card */}
                  <div className="relative min-h-96 w-full bg-gradient-to-br from-blue-600 to-cyan-600 rounded-[3rem] overflow-hidden shadow-2xl group-hover:shadow-blue-500/30 transition-all duration-700">
                    <div className="relative w-full">
                      <img
                        src="/assets/IntelligentSystemDevelopment.gif"
                        alt="Intelligent Systems Capabilities"
                        className="w-full h-auto object-contain group-hover:scale-105 transition-all duration-700"
                        style={{ backgroundAttachment: "fixed" }}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/assets/AI-Capabilities.gif";
                        }}
                      />
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute top-8 right-8 flex flex-col gap-4">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                        <Brain className="h-8 w-8 text-white" />
                      </div>
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                        AI
                      </div>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="mb-4">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                          <span className="text-blue-200 text-sm font-medium">
                            Intelligent Systems Hub
                          </span>
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-3 leading-tight">
                          Intelligent Systems Capabilities
                        </h3>
                        <p className="text-blue-100 leading-relaxed mb-6">
                          Advanced intelligent systems that transform business
                          operations through automation and AI.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Predictive Modeling & Anomaly Detection */}
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="group cursor-pointer h-full"
                >
                  <div className="flex items-center gap-6 p-6 bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-blue-500/50 hover:bg-gray-800/80 transition-all duration-500 group-hover:translate-x-2 h-full">
                    <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                      <img
                        src="/assets/AI-ML.png"
                        alt="Predictive Modeling"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        style={{ backgroundAttachment: "fixed" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/90"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <TrendingUp className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          03
                        </div>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        Predictive Modeling & Anomaly Detection
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Time‑series forecasting, root‑cause identification, and
                        automated alerting based on real‑time data.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Third Row - RPA and Intelligent Automation */}
              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Robotic Process Automation */}
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="group cursor-pointer h-full"
                >
                  <div className="flex items-center gap-6 p-6 bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-blue-500/50 hover:bg-gray-800/80 transition-all duration-500 group-hover:translate-x-2 h-full">
                    <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                      <img
                        src="/assets/AI-Training.png"
                        alt="RPA Automation"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        style={{ backgroundAttachment: "fixed" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/90"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Bot className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          04
                        </div>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        Robotic Process Automation (RPA)
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        End‑to‑end automation of routine tasks—from invoice
                        processing to data entry and workflow orchestration.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Intelligent Automation */}
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="group cursor-pointer h-full"
                >
                  <div className="flex items-center gap-6 p-6 bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-blue-500/50 hover:bg-gray-800/80 transition-all duration-500 group-hover:translate-x-2 h-full">
                    <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                      <img
                        src="/assets/AI-ProcessOptimization.png"
                        alt="Intelligent Automation"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        style={{ backgroundAttachment: "fixed" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/90"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Settings className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          05
                        </div>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        Intelligent Automation
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Combining RPA with machine learning to build
                        self‑learning processes that adapt to new data and
                        evolving business needs.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Development Framework - Same as AI Chatbot Development Flow */}
      <section className="py-16 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Development Framework
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our structured development framework ensures intelligent systems
                that deliver measurable business value through every phase
              </p>
            </div>

            {/* Circular Process Layout */}
            <div className="relative flex items-center justify-center min-h-[800px] lg:min-h-[900px] px-8">
              {/* Central Circle */}
              <div className="relative z-20">
                <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl">
                  <div className="w-40 h-40 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex flex-col items-center justify-center border-4 border-blue-400/20">
                    <div className="text-white mb-2">
                      <Brain className="w-12 h-12" />
                    </div>
                    <div className="text-center">
                      <div className="text-white font-bold text-lg">
                        INTELLIGENT
                      </div>
                      <div className="text-white font-bold text-lg">
                        SYSTEMS
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dotted Circle Path */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ zIndex: 1 }}
              >
                <defs>
                  <linearGradient
                    id="systemsProcessGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.7" />
                  </linearGradient>
                </defs>

                {/* Dotted circle that connects all process steps */}
                <circle
                  cx="50%"
                  cy="50%"
                  r="180"
                  stroke="url(#systemsProcessGradient)"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="8,6"
                  className="opacity-80"
                />
              </svg>

              {/* Process Steps - Positioned clockwise starting from top-left */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Step 1 - Top Left (10 o'clock) - Consultation & Strategy */}
                <div
                  className="absolute"
                  style={{
                    top: "calc(50% - 127px)",
                    left: "calc(50% - 127px)",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div
                      className="bg-slate-800/60 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-6 max-w-sm shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
                      style={{ marginRight: "12rem", marginBottom: "18rem" }}
                    >
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                          <Lightbulb className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-white font-semibold text-lg">
                          Consultation & Strategy
                        </h3>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Understand your needs, envision KPIs, and align
                        intelligent systems with your business goals.
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Step 2 - Top Right (2 o'clock) - Data & Feasibility Analysis */}
                <div
                  className="absolute"
                  style={{
                    top: "calc(50% - 127px)",
                    right: "calc(50% - 127px)",
                    transform: "translate(50%, -50%)",
                  }}
                >
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div
                      className="bg-slate-800/60 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-6 max-w-sm shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
                      style={{ marginLeft: "12rem", marginBottom: "18rem" }}
                    >
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                          <Brain className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-white font-semibold text-lg">
                          Data & Feasibility Analysis
                        </h3>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Audit your data, evaluate availability and quality, and
                        determine feasibility.
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Step 3 - Right Side (3 o'clock) - Prototype & Design */}
                <div
                  className="absolute"
                  style={{
                    top: "50%",
                    right: "calc(50% - 180px)",
                    transform: "translate(50%, -50%)",
                  }}
                >
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div
                      className="bg-slate-800/60 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-6 max-w-sm shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
                      style={{ marginLeft: "14rem" }}
                    >
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                          <Target className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-white font-semibold text-lg">
                          Prototype & Design
                        </h3>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Build proof‑of‑concepts of vision, NLP, or predictive
                        systems to validate approach.
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Step 4 - Bottom Right (4 o'clock) - Development & Integration */}
                <div
                  className="absolute"
                  style={{
                    bottom: "calc(50% - 127px)",
                    right: "calc(50% - 127px)",
                    transform: "translate(50%, 50%)",
                  }}
                >
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div
                      className="bg-slate-800/60 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-6 max-w-sm shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
                      style={{ marginLeft: "12rem", marginTop: "18rem" }}
                    >
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                          <Settings className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-white font-semibold text-lg">
                          Development & Integration
                        </h3>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Train models and deploy via APIs or microservices,
                        embedding them into your infrastructure.
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Step 5 - Bottom Left (8 o'clock) - Deployment & Monitoring */}
                <div
                  className="absolute"
                  style={{
                    bottom: "calc(50% - 127px)",
                    left: "calc(50% - 127px)",
                    transform: "translate(-50%, 50%)",
                  }}
                >
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div
                      className="bg-slate-800/60 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-6 max-w-sm shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
                      style={{ marginRight: "12rem", marginTop: "18rem" }}
                    >
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                          <Network className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-white font-semibold text-lg">
                          Deployment & Monitoring
                        </h3>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Launch on your preferred environment (cloud or
                        on-premise) with real‑time performance tracking.
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Step 6 - Left Side (9 o'clock) - Optimization & Continuous Improvement */}
                <div
                  className="absolute"
                  style={{
                    top: "50%",
                    left: "calc(50% - 180px)",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div
                      className="bg-slate-800/60 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-6 max-w-sm shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
                      style={{ marginRight: "14rem" }}
                    >
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                          <TrendingUp className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-white font-semibold text-lg">
                          Optimization & Continuous Improvement
                        </h3>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Ongoing model refinement and feature scaling to keep
                        systems ahead of evolving business needs.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications Section - Same as AI Consulting */}
      <section className="py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                How we implement intelligent systems across multiple industries
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Navigation */}
              <div className="lg:col-span-4">
                <div className="grid grid-cols-1 gap-4">
                  {industryApplications.map((industry, index) => (
                    <Button
                      key={index}
                      variant={
                        selectedIndustryApp?.name === industry.name
                          ? "default"
                          : "outline"
                      }
                      className={`text-center justify-center p-4 h-auto min-h-[60px] transition-all duration-300 ${
                        selectedIndustryApp?.name === industry.name
                          ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-none shadow-lg"
                          : "bg-slate-800/50 border-slate-600 text-white hover:bg-slate-700/70 hover:border-blue-400/40 hover:text-white"
                      }`}
                      onClick={() => {
                        setSelectedIndustryApp(industry);
                      }}
                    >
                      <span className="font-semibold text-sm leading-tight text-center whitespace-normal">
                        {industry.name}
                      </span>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Right Content Display */}
              <div className="lg:col-span-8">
                <motion.div
                  key={selectedIndustryApp?.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-cyan-400/20 rounded-xl overflow-hidden"
                >
                  {/* Industry Image */}
                  <div className="relative h-64 overflow-hidden group cursor-pointer">
                    <img
                      src={selectedIndustryApp?.image}
                      alt={selectedIndustryApp?.name}
                      className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                      onError={(e) => {
                        console.error(
                          `Failed to load image: ${selectedIndustryApp?.image}`,
                        );
                      }}
                      onLoad={() => {
                        console.log(
                          `Successfully loaded image: ${selectedIndustryApp?.image}`,
                        );
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent group-hover:from-gray-900/60 transition-all duration-300"></div>
                    <div className="absolute bottom-4 left-6">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {selectedIndustryApp?.name}
                      </h3>
                    </div>
                  </div>

                  {/* Industry Content */}
                  <div className="p-6">
                    <p className="text-gray-300 leading-relaxed text-lg mb-4">
                      {selectedIndustryApp?.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selectedIndustryApp?.useCases.map((useCase, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-xs text-blue-200"
                        >
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Intelligent Systems Section - Moved above CTA */}
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
              Why Choose Our Intelligent Systems
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced AI-driven systems that transform business operations
              through intelligent automation
            </p>
          </motion.div>

          <div className="relative max-w-6xl mx-auto">
            <Carousel
              className="w-full"
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 5000,
                  stopOnInteraction: true,
                  stopOnMouseEnter: true,
                }),
              ]}
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {/* First slide - items 0,1,2 */}
                <CarouselItem className="pl-2 md:pl-4">
                  <div className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                      {whyChooseUsItems.slice(0, 3).map((item, index) => {
                        const IconComponent = item.icon;

                        return (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -10, scale: 1.05 }}
                            viewport={{ once: true }}
                            className="group"
                          >
                            <div className="h-full bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 text-center">
                              <div className="flex justify-center mb-6">
                                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 group-hover:scale-110 transition-transform duration-300">
                                  <div className="text-white">
                                    <IconComponent className="h-10 w-10" />
                                  </div>
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
                        );
                      })}
                    </div>
                  </div>
                </CarouselItem>

                {/* Second slide - items 3,4 */}
                <CarouselItem className="pl-2 md:pl-4">
                  <div className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                      {whyChooseUsItems.slice(3, 5).map((item, index) => {
                        const IconComponent = item.icon;

                        return (
                          <motion.div
                            key={index + 3}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -10, scale: 1.05 }}
                            viewport={{ once: true }}
                            className="group"
                          >
                            <div className="h-full bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 text-center">
                              <div className="flex justify-center mb-6">
                                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 group-hover:scale-110 transition-transform duration-300">
                                  <div className="text-white">
                                    <IconComponent className="h-10 w-10" />
                                  </div>
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
                        );
                      })}
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>

              <CarouselPrevious className="left-4 bg-gradient-to-r from-gray-800/90 to-gray-700/90 border border-cyan-400/40 hover:border-cyan-400/70 text-cyan-400 hover:text-white" />
              <CarouselNext className="right-4 bg-gradient-to-r from-gray-800/90 to-gray-700/90 border border-cyan-400/40 hover:border-cyan-400/70 text-cyan-400 hover:text-white" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section - Updated to match AI Consulting */}
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
              <Target className="h-5 w-5 text-cyan-400" />
              <span className="text-white font-medium">
                Intelligent Systems Innovation Experts
              </span>
              <Award className="h-4 w-4 text-blue-400 fill-current" />
            </motion.div>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-white via-blue-100 to-[#0080FF] bg-clip-text text-transparent">
                Ready to Bring Intelligence
              </span>
              <br />
              <span className="text-white">to Your Business?</span>
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Let's build intelligent systems that do more than automate—systems
              that learn, reason, adapt, and truly partner with your business
              strategy
            </motion.p>

            {/* Benefits Grid */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            >
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <CheckCircle className="h-6 w-6 text-white bg-primary rounded-full p-1" />
                <span className="text-white font-semibold">
                  Free Strategy Session
                </span>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <CheckCircle className="h-6 w-6 text-white bg-primary rounded-full p-1" />
                <span className="text-white font-semibold">
                  Expert AI Guidance
                </span>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <CheckCircle className="h-6 w-6 text-white bg-primary rounded-full p-1" />
                <span className="text-white font-semibold">Proven Results</span>
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
