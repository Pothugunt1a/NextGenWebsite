
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Brain,
  Eye,
  MessageCircle,
  Cpu,
  Mic,
  Palette,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle,
  Users,
  Target,
  Settings,
  Layers,
  Network,
  Award,
  Bot,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
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

const aiCapabilities = [
  {
    icon: <Brain className="h-8 w-8 text-white" />,
    title: "Deep Learning",
    description:
      "Advanced neural networks for vision, NLP, and speech AI. Object detection, defect inspection, facial recognition, sentiment analysis, summarization, document AI, voice assistants, transcription, and translation.",
    backgroundImage: "/assets/AI-ML.png",
    features: [
      "Computer vision & object detection",
      "Natural language processing",
      "Speech recognition & synthesis",
      "Medical imaging analysis"
    ]
  },
  {
    icon: <MessageCircle className="h-8 w-8 text-white" />,
    title: "Natural Language Processing (NLP)",
    description:
      "Conversational AI, multilingual chatbots, legal and compliance document analysis, and intelligent enterprise knowledge assistants that understand and process human language naturally.",
    backgroundImage: "/assets/AI-nlp.png",
    features: [
      "Conversational AI & chatbots",
      "Document analysis & extraction",
      "Sentiment analysis & classification",
      "Multilingual processing"
    ]
  },
  {
    icon: <Eye className="h-8 w-8 text-white" />,
    title: "Computer Vision",
    description:
      "Autonomous inspection in manufacturing, medical imaging analysis (X-ray, MRI, CT), smart surveillance systems, and retail analytics for enhanced visual intelligence.",
    backgroundImage: "/assets/AI-computerVision.png",
    features: [
      "Manufacturing quality inspection",
      "Medical imaging diagnostics",
      "Smart surveillance systems",
      "Retail visual analytics"
    ]
  },
  {
    icon: <Bot className="h-8 w-8 text-white" />,
    title: "AI-Powered Applications",
    description:
      "Intelligent virtual assistants, personalized recommendation engines, and AI copilots for finance, HR, customer service, and IT automation that enhance business operations.",
    backgroundImage: "/assets/AI-Custom.png",
    features: [
      "Intelligent virtual assistants",
      "Recommendation engines",
      "AI copilots for business functions",
      "Automated customer service"
    ]
  },
  {
    icon: <Cpu className="h-8 w-8 text-white" />,
    title: "Cognitive Services",
    description:
      "Speech-to-text, text-to-speech, image recognition, OCR (optical character recognition), knowledge extraction, and semantic search capabilities for intelligent automation.",
    backgroundImage: "/assets/AI-Training.png",
    features: [
      "Speech recognition & synthesis",
      "OCR & document processing",
      "Knowledge extraction",
      "Semantic search capabilities"
    ]
  },
  {
    icon: <Palette className="h-8 w-8 text-white" />,
    title: "Generative AI (Gen AI)",
    description:
      "AI-generated text, images, audio, and code. Marketing content creation, knowledge automation, and synthetic data generation for ML training and creative applications.",
    backgroundImage: "/assets/GenerativeAI.png",
    features: [
      "Text & content generation",
      "Image & media creation",
      "Code generation & automation",
      "Synthetic data generation"
    ]
  },
  {
    icon: <Network className="h-8 w-8 text-white" />,
    title: "Agentic AI (Autonomous Agents)",
    description:
      "Multi-agent workflows that reason, plan, and act autonomously. AI agents for IT operations, compliance monitoring, and supply chain optimization using LangChain, AutoGen, and Semantic Kernel.",
    backgroundImage: "/assets/AI-Capabilities.gif",
    features: [
      "Multi-agent orchestration",
      "Autonomous decision making",
      "IT operations automation",
      "Supply chain optimization"
    ]
  },
  {
    icon: <Shield className="h-8 w-8 text-white" />,
    title: "AI Ethics & Governance",
    description:
      "Bias detection and mitigation in AI models, compliance with regulations (GDPR, HIPAA, SOC2), and transparent, explainable AI (XAI) for responsible AI deployment.",
    backgroundImage: "/assets/AI-Training.png",
    features: [
      "Bias detection & mitigation",
      "Regulatory compliance",
      "Explainable AI (XAI)",
      "AI governance frameworks"
    ]
  },
];

const industryUseCases = [
  {
    name: "Healthcare",
    description: "Medical imaging AI, patient care chatbots, Gen AI for documentation",
    image: "/assets/Healthcare.png",
    metrics: "AI reduced diagnostic errors by 25%"
  },
  {
    name: "Finance",
    description: "Fraud detection, regulatory compliance agents, AI voice assistants",
    image: "/assets/Finance.png",
    metrics: "AI chatbots reduced call center volume by 40%"
  },
  {
    name: "Retail & eCommerce",
    description: "Personalized recommendations, visual search, AI-driven engagement",
    image: "/assets/Ecommerce.png",
    metrics: "AI-driven personalization boosted sales by 20%"
  },
  {
    name: "Manufacturing",
    description: "Automated quality inspection, predictive maintenance with IoT + AI",
    image: "/assets/Manufacturing.png",
    metrics: "Vision AI reduced defects by 35%"
  },
  {
    name: "Media & Entertainment",
    description: "AI-generated media, recommendation engines, real-time analytics",
    image: "/assets/Media.png",
    metrics: "AI-generated content improved engagement by 30%"
  },
  {
    name: "Government",
    description: "Citizen service chatbots, secure document automation, smart surveillance",
    image: "/assets/IT-Services.png",
    metrics: "Automated citizen services cut processing time by 50%"
  },
];

const integrationPlatforms = [
  {
    category: "Data Platforms",
    platforms: ["Snowflake", "Redshift", "BigQuery", "Synapse", "Databricks"]
  },
  {
    category: "BI Tools",
    platforms: ["Power BI", "Tableau", "Qlik", "Looker"]
  },
  {
    category: "Enterprise Systems",
    platforms: ["SAP", "Salesforce", "NetSuite", "Dynamics"]
  },
  {
    category: "Cloud AI Services",
    platforms: ["AWS AI/ML", "Azure Cognitive", "Google AI"]
  },
  {
    category: "Gen AI & Agents",
    platforms: ["OpenAI GPT", "Azure OpenAI", "LangChain", "Bedrock"]
  },
];

const whyChooseFeatures = [
  {
    icon: Brain,
    title: "End-to-end AI expertise",
    description: "Vision, NLP, Speech, Gen AI, and Autonomous Agents",
    badge: "Complete AI Stack"
  },
  {
    icon: Layers,
    title: "Multi-cloud & hybrid solutions",
    description: "Seamless deployment across AWS, Azure, and GCP",
    badge: "Cloud Agnostic"
  },
  {
    icon: Shield,
    title: "Secure & scalable architectures",
    description: "Enterprise-grade security and compliance frameworks",
    badge: "Enterprise Ready"
  },
  {
    icon: Award,
    title: "Proven industry deployments",
    description: "Successful implementations in regulated industries",
    badge: "Proven Results"
  },
];

export default function ArtificialIntelligenceServices() {
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
            src="/assets/AI-brain-banner.png"
            alt="Artificial Intelligence Services"
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
                  Build Intelligent Systems with Artificial Intelligence
                </span>
              </motion.h1>

              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-4xl"
              >
                Enterprise-ready AI solutions — from computer vision and NLP to generative AI, autonomous agents, and cognitive services — helping businesses innovate, automate, and scale with the latest technologies
              </motion.p>

              

              {/* Badge below CTA */}
              <div className="mb-32">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, type: "spring" }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0066CC]/20 border border-[#0080FF]/30 rounded-full backdrop-blur-sm"
                >
                  <Brain className="h-5 w-5 text-cyan-400 fill-none" />
                  <span className="text-white font-medium">
                    Complete AI Solutions Suite
                  </span>
                  <Award className="h-4 w-4 text-blue-400 fill-current" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Why AI Matters Section */}
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
                Why Artificial Intelligence{" "}
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  Matters
                </span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Artificial Intelligence goes beyond traditional analytics — it enables systems to <strong>see, listen, understand, create, and act</strong>
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Left Column - Risks */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-red-900/20 to-red-800/20 backdrop-blur-sm border border-red-500/20 rounded-xl p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                    <Target className="h-6 w-6 text-red-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Without AI</h3>
                </div>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Slow, manual processes that can't scale</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Limited insights from unstructured data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Rising operational costs and human errors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Reactive decision-making based on outdated information</span>
                  </li>
                </ul>
              </motion.div>

              {/* Right Column - Benefits */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-green-900/20 to-green-800/20 backdrop-blur-sm border border-green-500/20 rounded-xl p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">With AI</h3>
                </div>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Intelligent automation and real-time decision-making</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Predictive insights and autonomous task execution</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Scalable personalization and content generation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Enhanced customer experiences and operational efficiency</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Infographic */}
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
                    <Settings className="h-8 w-8 text-orange-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Traditional Automation</h4>
                  <p className="text-gray-400 text-sm">Rules-based</p>
                </div>
                <div className="text-cyan-400 text-2xl font-bold">VS</div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Brain className="h-8 w-8 text-cyan-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Artificial Intelligence</h4>
                  <p className="text-gray-400 text-sm">Learning, Generating & Adapting</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Capabilities Section */}
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
              Our AI Capabilities
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete artificial intelligence solutions spanning vision, language, speech, and autonomous systems
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {aiCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 h-full hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2">
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
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      {capability.icon}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
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

      {/* Integration Capabilities Section */}
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
                Integration Capabilities
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                RTNextGenAI integrates AI seamlessly with your existing technology stack
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {integrationPlatforms.map((category, index) => (
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
                AI solutions tailored for specific industry challenges and opportunities
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
                          ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-none shadow-lg"
                          : "bg-slate-800/50 border-slate-600 text-white hover:bg-slate-700/70 hover:border-blue-400/40 hover:text-white"
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
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
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
                Your trusted partner for enterprise AI transformation
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
                    <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 h-full hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
                      <div className="flex items-start gap-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="h-8 w-8 text-cyan-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                            {feature.title}
                          </h3>
                          <p className="text-gray-300 leading-relaxed mb-4">
                            {feature.description}
                          </p>
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-full">
                            <CheckCircle className="h-4 w-4 text-cyan-400" />
                            <span className="text-cyan-300 text-sm font-medium">
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
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 px-6 py-3 mb-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-full backdrop-blur-sm"
            >
              <Brain className="h-5 w-5 text-cyan-400" />
              <span className="text-white font-medium">
                AI-Powered Business Transformation
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
                Ready to Build Intelligent
              </span>
              <br />
              <span className="text-white">AI-Powered Solutions?</span>
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Partner with RTNextGenAI to harness Artificial Intelligence — from predictive insights to generative and agentic AI systems
            </motion.p>

            
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
