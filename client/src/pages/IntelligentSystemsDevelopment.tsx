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

interface FAQ {
  question: string;
  answer: string;
}

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

const faqs: FAQ[] = [
  {
    question: "What makes intelligent systems different from traditional automation?",
    answer:
      "Intelligent systems learn from data, adapt to new situations, and make autonomous decisions. Unlike traditional automation that follows pre-programmed rules, our systems use AI to understand context, recognize patterns, and continuously improve their performance.",
  },
  {
    question: "How long does it take to develop and deploy intelligent systems?",
    answer:
      "Development timelines vary based on complexity. Simple computer vision systems take 4-8 weeks, while comprehensive intelligent automation platforms require 3-6 months. We provide detailed project timelines during our consultation phase.",
  },
  {
    question: "Can intelligent systems work with our existing infrastructure?",
    answer:
      "Yes, we design our systems for seamless integration with existing ERP, CRM, manufacturing, and cloud platforms. Our solutions can work alongside current systems while gradually expanding automation capabilities.",
  },
  {
    question: "What types of data do intelligent systems need to function?",
    answer:
      "Different systems require different data types: computer vision uses image/video data, NLP systems need text data, and predictive models use historical operational data. We help assess your data readiness and quality during the feasibility phase.",
  },
  {
    question: "How do you ensure intelligent systems remain accurate over time?",
    answer:
      "We implement continuous monitoring, model retraining capabilities, and performance tracking. Our systems include feedback loops that allow them to learn from new data and maintain accuracy as business conditions change.",
  },
];

const capabilities = [
  {
    icon: <Eye className="h-8 w-8 text-white" />,
    title: "Computer Vision & Visual Analytics",
    description:
      "Object detection, image segmentation, video analytics, facial recognition, and real-time visual monitoring systems.",
    backgroundImage: "/assets/computer-vision.png",
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
    backgroundImage: "/assets/AI-automation.png",
  },
  {
    icon: <Settings className="h-8 w-8 text-white" />,
    title: "Intelligent Automation",
    description:
      "Combining RPA with machine learning to build self‑learning processes that adapt to new data and evolving business needs.",
    backgroundImage: "/assets/AI-intelligent-automation.png",
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
    description:
      "Visual inspection, predictive maintenance, robotics.",
  },
  {
    name: "Healthcare & Life Sciences",
    description:
      "Diagnostic image analysis, clinical workflow automation.",
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
    description:
      "Route optimization, inventory management, anomaly detection.",
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
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState(industryData[0]);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-white"
    >
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/IntelligentSystemsDevelopment-banner.png"
            alt="Intelligent Systems Development"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40"></div>

        <div className="relative flex items-center h-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-left">
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
                  Empower Your Business with Next-Gen AI‑Driven Systems
                </span>
              </motion.h1>

              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl"
              >
                At RT NextGen AI, we develop intelligent systems that learn from data, understand their environment, and make autonomous decisions. Our solutions—spanning computer vision, NLP, predictive analytics, and robotics—optimize workflows, boost efficiency, and enable real-time responsiveness.
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
                    Next-Generation Intelligent Systems
                  </span>
                  <Award className="h-4 w-4 text-blue-400 fill-current" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Why Choose Our Intelligent Systems Section - Same as AI Chatbot Development */}
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
              Advanced AI-driven systems that transform business operations through intelligent automation
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
              Advanced intelligent systems that drive innovation and operational excellence
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
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                          Computer Vision & Visual Analytics
                        </h3>
                        <ArrowRight className="h-5 w-5 text-blue-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Object detection, image segmentation, video analytics, facial recognition, and real-time visual monitoring systems.
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
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                          Natural Language & Conversational AI
                        </h3>
                        <ArrowRight className="h-5 w-5 text-blue-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Intelligent chatbots, virtual assistants, text classification, summarization, and multilingual support systems.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Middle Row - Predictive Modeling */}
              <div className="lg:col-span-3 mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="group cursor-pointer"
                >
                  <div className="flex items-center gap-6 p-6 bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-blue-500/50 hover:bg-gray-800/80 transition-all duration-500 group-hover:translate-y-2">
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
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                          Predictive Modeling & Anomaly Detection
                        </h3>
                        <ArrowRight className="h-5 w-5 text-blue-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Time‑series forecasting, root‑cause identification, and automated alerting based on real‑time data.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Bottom Row - RPA and Intelligent Automation */}
              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Robotic Process Automation */}
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="group cursor-pointer h-full"
                >
                  <div className="flex items-center gap-6 p-6 bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-blue-500/50 hover:bg-gray-800/80 transition-all duration-500 group-hover:translate-x-2 h-full">
                    <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                      <img
                        src="/assets/AI-automation.png"
                        alt="RPA Automation"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        style={{ backgroundAttachment: "fixed" }}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/assets/AI-Training.png";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/90"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Bot className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                          Robotic Process Automation (RPA)
                        </h3>
                        <ArrowRight className="h-5 w-5 text-blue-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        End‑to‑end automation of routine tasks—from invoice processing to data entry and workflow orchestration.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Intelligent Automation */}
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="group cursor-pointer h-full"
                >
                  <div className="flex items-center gap-6 p-6 bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-blue-500/50 hover:bg-gray-800/80 transition-all duration-500 group-hover:translate-x-2 h-full">
                    <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                      <img
                        src="/assets/AI-intelligent-automation.png"
                        alt="Intelligent Automation"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        style={{ backgroundAttachment: "fixed" }}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/assets/AI-ProcessOptimization.png";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/90"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Settings className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                          Intelligent Automation
                        </h3>
                        <ArrowRight className="h-5 w-5 text-blue-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Combining RPA with machine learning to build self‑learning processes that adapt to new data and evolving business needs.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Development Framework - Same as How we work component */}
      <section className="py-20 bg-light relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6 text-white">
              Our Development Framework
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Systematic approach to building intelligent systems that deliver measurable business value
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developmentFramework.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 h-full hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
                  <div className="absolute top-4 right-4 text-6xl font-bold text-blue-500/10">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center border border-cyan-400/30 group-hover:border-cyan-400/50 transition-colors">
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications - Same as multiple industries component */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6 text-white">
              Industry Applications
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Intelligent systems transforming operations across diverse industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Side - AI Image */}
            <div className="lg:col-span-5">
              <div className="relative group">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={selectedIndustry.image}
                    alt={selectedIndustry.name}
                    className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {selectedIndustry.name}
                    </h3>
                    <p className="text-gray-200 text-sm">
                      Advanced intelligent systems driving industry transformation
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Industry Buttons and Content */}
            <div className="lg:col-span-7">
              {/* Industry Selection Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {industryData.map((industry) => (
                  <motion.button
                    key={industry.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    onClick={() => setSelectedIndustry(industry)}
                    className={`p-4 rounded-xl text-left transition-all duration-300 border ${
                      selectedIndustry.id === industry.id
                        ? "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-blue-400/40 text-white"
                        : "bg-gray-800/40 border-gray-700 text-gray-300 hover:border-blue-500/30 hover:bg-gray-800/60"
                    }`}
                  >
                    <h4 className="font-semibold text-sm mb-2">{industry.name}</h4>
                    <p className="text-xs opacity-75">
                      {industries.find(ind => ind.name === industry.name)?.description}
                    </p>
                  </motion.button>
                ))}
              </div>

              {/* Selected Industry Content */}
              <motion.div
                key={selectedIndustry.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  {selectedIndustry.name}
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mb-6"></div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {selectedIndustry.content}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Bring Intelligence CTA - Same as AI Consulting */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-700/20 to-cyan-600/20"></div>
        <div className="absolute inset-0 bg-light/80"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-300 bg-clip-text text-transparent">
                Ready to Bring Intelligence to Your Business?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed">
              Let's build intelligent systems that do more than automate—systems that learn, reason, adapt, and truly partner with your business strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl text-lg">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section - Same as AI Consulting */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Frequently Asked Questions
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get answers to common questions about intelligent systems development
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-4"
              >
                <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/20 rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors"
                  >
                    <span className="text-lg font-semibold text-white pr-8">
                      {faq.question}
                    </span>
                    {openFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-8 pb-6"
                    >
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}