
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Brain,
  Palette,
  Bot,
  Code,
  Image,
  FileText,
  Video,
  Mic,
  Database,
  Workflow,
  Network,
  Shield,
  CheckCircle,
  ArrowRight,
  Users,
  Target,
  Settings,
  Layers,
  Award,
  TrendingUp,
  Cpu,
  Eye,
  MessageCircle,
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

const generativeAICapabilities = [
  {
    icon: <FileText className="h-8 w-8 text-white" />,
    title: "Text & Language Generation",
    description:
      "Advanced conversational chatbots and AI copilots, automated document drafting, intelligent summarization, compliance reporting, and code generation for accelerated software development.",
    backgroundImage: "/assets/AI-NLP.png",
    features: [
      "Conversational chatbots & AI copilots",
      "Document drafting & summarization",
      "Code generation & development acceleration",
      "Compliance reporting automation"
    ]
  },
  {
    icon: <Palette className="h-8 w-8 text-white" />,
    title: "Image, Audio & Video Generation",
    description:
      "AI-driven creative design for advertisements, marketing, and branding materials. Video generation for training simulations and voice cloning with multilingual speech synthesis.",
    backgroundImage: "/assets/AI-CreativeContent.png",
    features: [
      "Creative design for marketing & branding",
      "Training video generation & simulations",
      "Voice cloning & multilingual synthesis",
      "Automated visual content creation"
    ]
  },
  {
    icon: <Database className="h-8 w-8 text-white" />,
    title: "Synthetic Data Generation",
    description:
      "Privacy-safe synthetic data for ML training, rare-event data generation for fraud detection and healthcare anomalies, plus data augmentation for computer vision and NLP models.",
    backgroundImage: "/assets/AI-Training.png",
    features: [
      "Privacy-safe ML training data",
      "Rare-event data for anomaly detection",
      "Computer vision data augmentation",
      "NLP dataset enhancement"
    ]
  },
  {
    icon: <Brain className="h-8 w-8 text-white" />,
    title: "Enterprise Knowledge Automation",
    description:
      "AI-powered semantic search and knowledge systems, generative AI-driven insights integrated into BI dashboards for intelligent enterprise decision-making.",
    backgroundImage: "/assets/AI-Intelligent.png",
    features: [
      "Semantic search & knowledge systems",
      "Gen AI insights for BI dashboards",
      "Intelligent document processing",
      "Automated knowledge extraction"
    ]
  },
];

const agenticAICapabilities = [
  {
    icon: <Bot className="h-8 w-8 text-white" />,
    title: "Autonomous AI Agents",
    description:
      "Multi-agent systems that collaborate to complete complex tasks. AI agents specialized for IT operations, customer support, finance, and autonomous compliance monitoring.",
    backgroundImage: "/assets/AI-Robotic.png",
    features: [
      "Multi-agent collaborative systems",
      "IT operations & support agents",
      "Finance & compliance monitoring",
      "Customer service automation"
    ]
  },
  {
    icon: <Workflow className="h-8 w-8 text-white" />,
    title: "Workflow Orchestration",
    description:
      "End-to-end process automation including approvals, supply chain management, and HR onboarding. Event-driven architectures for real-time automated actions.",
    backgroundImage: "/assets/Process-optimization.png",
    features: [
      "End-to-end process automation",
      "Supply chain & HR workflows",
      "Event-driven real-time actions",
      "ERP & CRM integration"
    ]
  },
  {
    icon: <Network className="h-8 w-8 text-white" />,
    title: "AI + IoT + Edge Agents",
    description:
      "Edge-deployed agents for smart factories, healthcare monitoring, and logistics. Real-time decision-making capabilities that scale across distributed systems.",
    backgroundImage: "/assets/AI-Capabilities.gif",
    features: [
      "Smart factory edge deployment",
      "Healthcare monitoring agents",
      "Logistics optimization",
      "Real-time distributed decisions"
    ]
  },
  {
    icon: <Code className="h-8 w-8 text-white" />,
    title: "Tools & Frameworks",
    description:
      "Enterprise-grade implementation using LangChain, AutoGen, and Semantic Kernel. Integrated with AWS Bedrock Agents, Azure AI Studio, and Google Vertex AI Agents.",
    backgroundImage: "/assets/AI-Integration.png",
    features: [
      "LangChain & AutoGen frameworks",
      "AWS Bedrock & Azure AI Studio",
      "Kubernetes & MLflow orchestration",
      "Semantic Kernel integration"
    ]
  },
];

const industryUseCases = [
  {
    name: "Healthcare",
    description: "Gen AI for medical summaries, autonomous agents for patient monitoring",
    image: "/assets/Healthcare.png",
    metrics: "AI agents reduced hospital readmissions by 30%"
  },
  {
    name: "Finance",
    description: "AI copilots for financial reporting, autonomous compliance agents",
    image: "/assets/Finance.png",
    metrics: "Gen AI copilots reduced reporting time by 60%"
  },
  {
    name: "Retail & eCommerce",
    description: "Personalized product descriptions, AI chatbots, automated inventory",
    image: "/assets/Ecommerce.png",
    metrics: "Automated product descriptions boosted conversions by 25%"
  },
  {
    name: "Manufacturing",
    description: "AI-generated maintenance instructions, IoT-driven autonomous agents",
    image: "/assets/Manufacturing.png",
    metrics: "Autonomous agents reduced maintenance downtime by 40%"
  },
  {
    name: "Media & Entertainment",
    description: "AI-generated content, virtual production, audience engagement agents",
    image: "/assets/Media.png",
    metrics: "AI content generation improved engagement by 35%"
  },
  {
    name: "Government",
    description: "Gen AI for citizen communication, automated service delivery agents",
    image: "/assets/IT-Services.png",
    metrics: "Automated services cut processing time by 50%"
  },
];

const technologyPlatforms = [
  {
    category: "Gen AI Models",
    platforms: ["OpenAI GPT", "Azure OpenAI", "Anthropic Claude", "Google Gemini", "Stability AI"]
  },
  {
    category: "Agentic AI Frameworks",
    platforms: ["LangChain", "AutoGen", "Semantic Kernel", "CrewAI"]
  },
  {
    category: "Enterprise Platforms",
    platforms: ["AWS Bedrock Agents", "Azure AI Studio", "Google Vertex AI", "Databricks"]
  },
  {
    category: "Supporting Tools",
    platforms: ["Hugging Face", "Pinecone", "Redis", "MongoDB"]
  },
  {
    category: "Vector Databases",
    platforms: ["Weaviate", "Chroma", "Qdrant", "Milvus"]
  },
];

const whyChooseFeatures = [
  {
    icon: Brain,
    title: "Enterprise-ready Gen AI & Agentic AI solutions",
    description: "Complete AI stack from creation to autonomous action",
    badge: "Full AI Suite"
  },
  {
    icon: Award,
    title: "Certified AI engineers across all major platforms",
    description: "Expertise in AWS, Azure, GCP, and Databricks",
    badge: "Certified Experts"
  },
  {
    icon: Layers,
    title: "Integration with existing enterprise data platforms",
    description: "Seamless connectivity with Snowflake, Databricks, Redshift",
    badge: "Enterprise Integration"
  },
  {
    icon: Shield,
    title: "AI ethics, governance, and compliance focus",
    description: "Responsible AI deployment with regulatory compliance",
    badge: "Ethical AI"
  },
];

const clientImpacts = [
  {
    industry: "Finance",
    impact: "Gen AI copilots reduced reporting time by 60%",
    description: "Automated financial reporting and compliance documentation",
    icon: <TrendingUp className="h-6 w-6 text-green-400" />
  },
  {
    industry: "Healthcare",
    impact: "AI agents enabled 24/7 patient monitoring",
    description: "Autonomous patient monitoring reducing hospital readmissions",
    icon: <Shield className="h-6 w-6 text-blue-400" />
  },
  {
    industry: "Retail",
    impact: "Automated product descriptions boosted sales by 25%",
    description: "AI-generated product content at scale improving conversions",
    icon: <Target className="h-6 w-6 text-purple-400" />
  },
  {
    industry: "IT Operations",
    impact: "AI agents resolved incidents autonomously",
    description: "Autonomous incident resolution reducing downtime by 40%",
    icon: <Settings className="h-6 w-6 text-cyan-400" />
  },
];

export default function GenerativeAgenticAI() {
  const [selectedIndustry, setSelectedIndustry] = useState(industryUseCases[0]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-light text-white"
    >
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/GenerativeAI-banner.png"
            alt="Generative & Agentic AI Services"
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
                  From Creation to Autonomy: Generative & Agentic AI
                </span>
              </motion.h1>

              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-4xl"
              >
                RTNextGenAI builds intelligent systems powered by Generative AI and Agentic AI — enabling enterprises to create, adapt, and act in real time
              </motion.p>

              

              {/* Badge below CTA */}
              <div className="mb-32">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, type: "spring" }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-full backdrop-blur-sm"
                >
                  <Palette className="h-5 w-5 text-cyan-400 fill-none" />
                  <span className="text-white font-medium">
                    Create + Autonomy AI Solutions
                  </span>
                  <Bot className="h-4 w-4 text-blue-400 fill-current" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Why Generative & Agentic AI Matter Section */}
      <section className="py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 to-cyan-500/10"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Why Generative & Agentic AI{" "}
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  Matter
                </span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Traditional AI analyzes data, but <strong>Generative & Agentic AI extend intelligence further</strong> by enabling creation and autonomous action
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Left Column - Generative AI */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-purple-900/20 to-purple-800/20 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <Palette className="h-6 w-6 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Generative AI (Gen AI)</h3>
                </div>
                <p className="text-gray-300 mb-4">AI that creates text, code, images, video, audio, and synthetic data</p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span>Automate repetitive knowledge work</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span>Generate personalized content at scale</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span>Create synthetic training data</span>
                  </li>
                </ul>
              </motion.div>

              {/* Right Column - Agentic AI */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-cyan-900/20 to-cyan-800/20 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                    <Bot className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Agentic AI</h3>
                </div>
                <p className="text-gray-300 mb-4">Autonomous agents that reason, plan, and execute workflows</p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>Orchestrate complex workflows autonomously</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>Enhanced decision-making with adaptive learning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>Execute tasks without constant supervision</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* AI Evolution Infographic */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-8 bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <TrendingUp className="h-8 w-8 text-orange-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">ML</h4>
                  <p className="text-gray-400 text-sm">Predict</p>
                </div>
                <ArrowRight className="text-cyan-400 text-2xl" />
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Palette className="h-8 w-8 text-purple-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Gen AI</h4>
                  <p className="text-gray-400 text-sm">Create</p>
                </div>
                <ArrowRight className="text-cyan-400 text-2xl" />
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Bot className="h-8 w-8 text-cyan-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Agentic AI</h4>
                  <p className="text-gray-400 text-sm">Act</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Generative AI Capabilities Section */}
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
              Our Generative AI Capabilities
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced AI systems that create, generate, and produce intelligent content across multiple modalities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20">
            {generativeAICapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6 h-full hover:border-purple-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2">
                  {/* Background Image */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                    <img
                      src={capability.backgroundImage}
                      alt={capability.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/assets/AI-Training.png";
                      }}
                    />
                  </div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      {capability.icon}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {capability.title}
                    </h3>

                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      {capability.description}
                    </p>

                    <div className="space-y-2">
                      {capability.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 text-xs text-gray-400">
                          <CheckCircle className="h-3 w-3 text-purple-400" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Agentic AI Capabilities Section */}
      <section className="py-20 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6 text-white">
              Our Agentic AI Capabilities
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Autonomous AI agents that reason, plan, and execute complex workflows independently
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {agenticAICapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 h-full hover:border-cyan-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2">
                  {/* Background Image */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                    <img
                      src={capability.backgroundImage}
                      alt={capability.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/assets/AI-Training.png";
                      }}
                    />
                  </div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      {capability.icon}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-blue-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {capability.title}
                    </h3>

                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      {capability.description}
                    </p>

                    <div className="space-y-2">
                      {capability.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 text-xs text-gray-400">
                          <CheckCircle className="h-3 w-3 text-cyan-400" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Platforms Section */}
      <section className="py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Technologies We Use
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leading-edge platforms and frameworks for enterprise-grade Gen AI and Agentic AI solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technologyPlatforms.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6"
                >
                  <h3 className="text-xl font-bold text-white mb-4">
                    {category.category}
                  </h3>
                  <div className="space-y-2">
                    {category.platforms.map((platform, platformIndex) => (
                      <div key={platformIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-cyan-400" />
                        <span className="text-gray-300 text-sm">{platform}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Use Cases Section */}
      <section className="py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Industry Use Cases
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Generative and Agentic AI solutions tailored for industry-specific challenges
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Navigation */}
              <div className="lg:col-span-4">
                <div className="grid grid-cols-1 gap-4">
                  {industryUseCases.map((industry, index) => (
                    <Button
                      key={index}
                      variant={
                        selectedIndustry.name === industry.name
                          ? "default"
                          : "outline"
                      }
                      className={`text-left justify-start p-4 h-auto min-h-[80px] transition-all duration-300 ${
                        selectedIndustry.name === industry.name
                          ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white border-none shadow-lg"
                          : "bg-slate-800/50 border-slate-600 text-white hover:bg-slate-700/70 hover:border-purple-400/40 hover:text-white"
                      }`}
                      onClick={() => setSelectedIndustry(industry)}
                    >
                      <div>
                        <div className="font-semibold text-sm leading-tight">
                          {industry.name}
                        </div>
                        <div className="text-xs opacity-80 mt-1">
                          {industry.description}
                        </div>
                      </div>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Right Content Display */}
              <div className="lg:col-span-8">
                <motion.div
                  key={selectedIndustry.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-cyan-400/20 rounded-xl overflow-hidden"
                >
                  {/* Industry Image */}
                  <div className="relative h-64 overflow-hidden group cursor-pointer">
                    <img
                      src={selectedIndustry.image}
                      alt={selectedIndustry.name}
                      className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent group-hover:from-gray-900/60 transition-all duration-300"></div>
                    <div className="absolute bottom-4 left-6">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                        {selectedIndustry.name}
                      </h3>
                      <p className="text-gray-200 text-sm">
                        {selectedIndustry.description}
                      </p>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 bg-gradient-to-r from-green-900/20 to-green-800/20 border border-green-500/20 rounded-lg p-4">
                      <TrendingUp className="h-6 w-6 text-green-400" />
                      <span className="text-white font-semibold">
                        Success Metric: {selectedIndustry.metrics}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Impact Section */}
      <section className="py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Client Impact & Success Metrics
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Measurable results from our Generative and Agentic AI implementations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {clientImpacts.map((impact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center">
                      {impact.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-2">
                        {impact.industry}
                      </h3>
                      <div className="text-cyan-400 font-semibold mb-2">
                        {impact.impact}
                      </div>
                      <p className="text-gray-300 text-sm">
                        {impact.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose RTNextGenAI Section */}
      <section className="py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose RTNextGenAI
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Your trusted partner for enterprise Generative and Agentic AI transformation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyChooseFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 h-full hover:border-purple-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
                      <div className="flex items-start gap-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="h-8 w-8 text-cyan-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                            {feature.title}
                          </h3>
                          <p className="text-gray-300 leading-relaxed mb-4">
                            {feature.description}
                          </p>
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-400/30 rounded-full">
                            <CheckCircle className="h-4 w-4 text-purple-400" />
                            <span className="text-purple-300 text-sm font-medium">
                              {feature.badge}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-cyan-600/10" />
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"
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
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 px-6 py-3 mb-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-full backdrop-blur-sm"
            >
              <Palette className="h-5 w-5 text-cyan-400" />
              <span className="text-white font-medium">
                Generative + Agentic AI Solutions
              </span>
              <Bot className="h-4 w-4 text-blue-400 fill-current" />
            </motion.div>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-white via-purple-100 to-[#0080FF] bg-clip-text text-transparent">
                Ready to Transform with
              </span>
              <br />
              <span className="text-white">Generative & Agentic AI?</span>
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Partner with RTNextGenAI to build enterprise-grade AI solutions that create, adapt, and act autonomously
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
