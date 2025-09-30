
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ChevronDown,
  ChevronUp,
  Brain,
  Lightbulb,
  Target,
  Users,
  Zap,
  Shield,
  Network,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Award,
  BarChart3,
  Eye,
  Bot,
  Cog,
  Activity,
  Cpu,
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
    icon: Brain,
    secondaryIcon: Zap,
    title: "Full-stack AI/ML expertise",
    description:
      "Our team provides end-to-end AI/ML solutions from data pipelines to ML models to Gen AI & autonomous agents. We have certified AI/ML engineers across AWS, Azure, GCP, and Databricks platforms, ensuring enterprise-grade implementation and seamless integration with your existing systems.",
    badge: "End-to-end AI expertise",
  },
  {
    icon: Shield,
    secondaryIcon: Award,
    title: "Enterprise-grade MLOps & AIOps",
    description:
      "We implement robust MLOps and AIOps practices with continuous integration, automated retraining, and comprehensive monitoring. Our solutions are proven in regulated industries including healthcare, finance, and government, ensuring compliance and reliability at scale.",
    badge: "Enterprise compliance",
  },
  {
    icon: Bot,
    secondaryIcon: Lightbulb,
    title: "Future-ready AI solutions",
    description:
      "Beyond traditional ML, we specialize in cutting-edge Generative AI and Agentic AI systems. Our solutions include autonomous agents that can reason, plan, and execute tasks across applications, preparing your organization for the next generation of AI capabilities.",
    badge: "Next-gen AI technology",
  },
  {
    icon: TrendingUp,
    secondaryIcon: Target,
    title: "Proven business transformation",
    description:
      "We deliver measurable results through advanced analytics that go beyond traditional BI. Our predictive, prescriptive, and generative AI solutions create continuous intelligence loops that learn, generate insights, and act in real-time to drive unprecedented business value.",
    badge: "Measurable ROI",
  },
];

const faqs: FAQ[] = [
  {
    question: "What's the difference between traditional analytics and advanced AI/ML?",
    answer:
      "Traditional BI tells you what happened. Predictive analytics shows what will happen. But our advanced AI/ML solutions go further - Generative AI creates new content and insights, while Agentic AI can autonomously reason, plan, and act on your behalf, creating a continuous intelligence loop.",
  },
  {
    question: "How do you implement Generative AI in enterprise environments?",
    answer:
      "We integrate Generative AI using platforms like OpenAI GPT, Azure OpenAI, and Anthropic Claude. Our approach includes text generation for chatbots, code generation for development, synthetic data creation, and content automation, all while maintaining enterprise security and compliance standards.",
  },
  {
    question: "What are Agentic AI systems and how do they benefit businesses?",
    answer:
      "Agentic AI systems are autonomous agents that can reason, plan, and execute tasks across applications without human intervention. They enable multi-agent workflows for finance approvals, supply chain optimization, and automated IT monitoring, significantly reducing manual overhead.",
  },
  {
    question: "How do you ensure MLOps best practices in AI implementations?",
    answer:
      "We implement comprehensive MLOps pipelines with CI/CD for models, automated retraining, performance monitoring, and version control. Using platforms like MLflow, SageMaker, and Azure ML, we ensure your AI models remain accurate, reliable, and continuously improved.",
  },
  {
    question: "Can you integrate AI/ML with our existing enterprise systems?",
    answer:
      "Absolutely. We integrate with data lakes (Snowflake, Databricks), BI platforms (Tableau, Power BI), enterprise apps (SAP, Salesforce), and streaming systems (Kafka, Kinesis) to embed AI capabilities seamlessly into your existing workflows and applications.",
  },
];

const capabilities = [
  {
    icon: <BarChart3 className="h-8 w-8 text-white" />,
    title: "Predictive & Prescriptive Analytics",
    description:
      "Advanced forecasting using time-series analysis, demand modeling, and risk assessment. We build optimization models for supply chain, finance, and healthcare operations, along with scenario planning and 'what-if' simulations that guide strategic decision-making and operational efficiency.",
    backgroundImage: "/assets/AI&Data.png",
  },
  {
    icon: <Cpu className="h-8 w-8 text-white" />,
    title: "Machine Learning Solutions",
    description:
      "Comprehensive ML implementations using supervised, unsupervised, and reinforcement learning approaches. Classification, anomaly detection, and automation solutions that leverage platforms like AWS SageMaker, Azure ML, Google Vertex AI, and Databricks MLflow with robust pipelines.",
    backgroundImage: "/assets/AI-ML.png",
  },
  {
    icon: <Eye className="h-8 w-8 text-white" />,
    title: "Deep Learning & AI",
    description:
      "Advanced neural networks for computer vision (image/video analysis, defect detection), natural language processing (chatbots, sentiment analysis, document processing), and speech recognition. Our deep learning solutions transform unstructured data into actionable business insights.",
    backgroundImage: "/assets/AI-Vision.png",
  },
  {
    icon: <Zap className="h-8 w-8 text-white" />,
    title: "Generative AI Development",
    description:
      "Cutting-edge Generative AI solutions including text generation, code generation, image and video synthesis, and simulations. We build AI copilots using OpenAI GPT, Azure OpenAI, and Hugging Face platforms to accelerate content creation and development workflows.",
    backgroundImage: "/assets/GenerativeAI.png",
  },
  {
    icon: <Bot className="h-8 w-8 text-white" />,
    title: "Agentic AI Systems",
    description:
      "Autonomous AI agents that reason, plan, and execute tasks across applications. We build multi-agent workflows for finance approvals, supply chain optimization, and automated IT monitoring using frameworks like LangChain, AutoGen, Semantic Kernel, and AWS Bedrock Agents.",
    backgroundImage: "/assets/AI-Robotic.png",
  },
  {
    icon: <Cog className="h-8 w-8 text-white" />,
    title: "MLOps & AIOps",
    description:
      "Enterprise-grade model lifecycle management, monitoring, and governance. We implement CI/CD for models, automated retraining, performance monitoring, and compliance frameworks to ensure your AI solutions remain accurate, reliable, and continuously improved at scale.",
    backgroundImage: "/assets/AI-Integration.png",
  },
];

const industries = [
  {
    name: "Healthcare",
    description:
      "Predictive patient outcomes, Gen AI for medical documentation, AI imaging for diagnostics, and autonomous monitoring systems.",
  },
  {
    name: "Finance",
    description:
      "Real-time fraud detection, Gen AI for regulatory reports, AI agents for compliance monitoring, and automated risk assessment.",
  },
  {
    name: "Retail & eCommerce",
    description:
      "Personalized recommendations, Gen AI-driven marketing content, demand forecasting, and autonomous inventory management.",
  },
  {
    name: "Manufacturing & IoT",
    description:
      "Predictive maintenance, AI-powered robotics, autonomous IoT monitoring agents, and quality control automation.",
  },
  {
    name: "Media & Entertainment",
    description:
      "Generative content creation, recommendation engines, real-time audience analytics, and automated content moderation.",
  },
  {
    name: "Customer Support",
    description:
      "AI chatbots, Gen AI agents for ticket resolution, autonomous workflows, and intelligent routing systems.",
  },
];

const techStack = [
  "ML Platforms: AWS SageMaker, Azure ML, Google Vertex AI, Databricks MLflow",
  "Frameworks: TensorFlow, PyTorch, Keras, Scikit-learn, XGBoost",
  "Generative AI: OpenAI GPT, Azure OpenAI, Anthropic Claude, Hugging Face",
  "Agentic AI: LangChain, AutoGen, Semantic Kernel, AWS Bedrock Agents",
  "Data Processing: Apache Spark, Kafka, Airflow, Kubernetes",
  "MLOps: MLflow, Kubeflow, DVC, Weights & Biases",
  "Cloud Services: AWS, Azure, GCP, Databricks, Snowflake",
  "Visualization: Tableau, Power BI, Grafana, TensorBoard",
];

// Industry data for the interactive section
const industryData = [
  {
    id: "healthcare",
    name: "Healthcare",
    image: "/assets/Healthcare.png",
    content:
      "Healthcare organizations leverage our advanced AI/ML solutions for predictive patient outcomes, automated medical documentation through Generative AI, and diagnostic imaging powered by computer vision. Our Agentic AI systems enable autonomous monitoring of patient vitals and automated care coordination workflows.",
  },
  {
    id: "finance",
    name: "Finance",
    image: "/assets/Finance.png",
    content:
      "Financial institutions utilize our real-time fraud detection systems, Generative AI for automated regulatory reporting, and Agentic AI for compliance monitoring. Our solutions include predictive risk assessment, algorithmic trading optimization, and autonomous financial analysis workflows.",
  },
  {
    id: "retail",
    name: "Retail & eCommerce",
    image: "/assets/Ecommerce.png",
    content:
      "Retail companies transform customer experiences with personalized recommendation engines, Generative AI for dynamic marketing content creation, and demand forecasting models. Our Agentic AI systems enable autonomous inventory management and intelligent pricing optimization.",
  },
  {
    id: "manufacturing",
    name: "Manufacturing & IoT",
    image: "/assets/Manufacturing.png",
    content:
      "Manufacturing enterprises optimize operations with predictive maintenance models, AI-powered robotics integration, and autonomous IoT monitoring agents. Our solutions include quality control automation, supply chain optimization, and intelligent production planning systems.",
  },
  {
    id: "media",
    name: "Media & Entertainment",
    image: "/assets/Media.png",
    content:
      "Media companies revolutionize content creation with Generative AI for automated content production, intelligent recommendation engines, and real-time audience analytics. Our Agentic AI systems enable autonomous content moderation and intelligent distribution strategies.",
  },
  {
    id: "support",
    name: "Customer Support",
    image: "/assets/AI-Customer.png",
    content:
      "Customer service organizations enhance experiences with advanced AI chatbots, Generative AI agents for automated ticket resolution, and autonomous workflow management. Our solutions include intelligent routing, sentiment analysis, and predictive support issue prevention.",
  },
];

export default function AdvancedAnalyticsAIML() {
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
      className="min-h-screen bg-light text-white"
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/AdvancedAnalytics-AI&ML-banner.png"
            alt="Advanced Analytics AI/ML Services"
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/assets/AI-ML.png";
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
                Advanced Analytics Excellence
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl"
            >
              From predictive insights to generative & agentic AI solutions that analyze, create, adapt, and act for enterprise transformation
            </motion.p>

            {/* Badge below description */}
            <div className="mb-32">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0066CC]/20 border border-[#0080FF]/30 rounded-full backdrop-blur-sm"
              >
                <Brain className="h-5 w-5 text-cyan-400" />
                <span className="text-white font-medium">
                  Industry-Leading Advanced Analytics Solutions
                </span>
                <Award className="h-4 w-4 text-blue-400 fill-current" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Advanced Analytics & AI/ML Matter */}
      <section className="py-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 to-cyan-500/10"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full border border-cyan-400/20 mb-6">
                <Brain className="h-4 w-4 text-cyan-400" />
                <span className="text-cyan-300 text-sm font-medium">
                  Why Advanced Analytics & AI/ML Matter
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Beyond Traditional{" "}
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  Business Intelligence
                </span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Traditional BI answers what happened. Predictive analytics shows what will happen. 
                But Generative AI and Agentic AI go further — they can create, adapt, and act on your behalf.
              </p>
            </motion.div>

            {/* Intelligence Progression */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { title: "Traditional BI", desc: "What happened?", icon: BarChart3, color: "from-gray-500 to-gray-600" },
                { title: "Predictive Analytics", desc: "What will happen?", icon: TrendingUp, color: "from-blue-500 to-blue-600" },
                { title: "Generative AI", desc: "What can be created?", icon: Zap, color: "from-purple-500 to-purple-600" },
                { title: "Agentic AI", desc: "What can be done?", icon: Bot, color: "from-cyan-500 to-cyan-600" },
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 text-center hover:border-blue-400/40 transition-all duration-300"
                  >
                    <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full border border-cyan-400/20 mb-6">
                <Award className="h-4 w-4 text-cyan-400" />
                <span className="text-cyan-300 text-sm font-medium">
                  Why Choose RTNextGenAI
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Why choose{" "}
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  RTNextGenAI
                </span>{" "}
                for AI/ML & Gen AI
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Partner with industry-leading AI experts who deliver future-ready solutions
              </p>
            </motion.div>

            {/* Carousel */}
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
                  <CarouselItem className="pl-2 md:pl-4">
                    <div className="p-6">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {whyChooseUsItems.slice(0, 2).map((item, index) => {
                          const IconComponent = item.icon;
                          const SecondaryIconComponent = item.secondaryIcon;

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
                              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 h-full hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
                                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-bl-2xl"></div>

                                <div className="flex items-start gap-6 mb-6">
                                  <div className="relative">
                                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center border border-cyan-400/30 group-hover:border-cyan-400/50 transition-colors">
                                      <IconComponent className="h-10 w-10 text-white" />
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                                      <SecondaryIconComponent className="h-4 w-4 text-white" />
                                    </div>
                                  </div>

                                  <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                                      {item.title}
                                    </h3>
                                    <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mb-4"></div>
                                  </div>
                                </div>

                                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                                  {item.description}
                                </p>

                                <div className="flex items-center gap-2 text-cyan-400">
                                  <CheckCircle className="h-4 w-4" />
                                  <span className="text-sm font-medium">
                                    {item.badge}
                                  </span>
                                </div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  </CarouselItem>

                  <CarouselItem className="pl-2 md:pl-4">
                    <div className="p-6">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {whyChooseUsItems.slice(2, 4).map((item, index) => {
                          const IconComponent = item.icon;
                          const SecondaryIconComponent = item.secondaryIcon;

                          return (
                            <motion.div
                              key={index + 2}
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: index * 0.1 }}
                              whileHover={{ y: -10, scale: 1.05 }}
                              viewport={{ once: true }}
                              className="group"
                            >
                              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 h-full hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
                                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-bl-2xl"></div>

                                <div className="flex items-start gap-6 mb-6">
                                  <div className="relative">
                                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center border border-cyan-400/30 group-hover:border-cyan-400/50 transition-colors">
                                      <IconComponent className="h-10 w-10 text-white" />
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                                      <SecondaryIconComponent className="h-4 w-4 text-white" />
                                    </div>
                                  </div>

                                  <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                                      {item.title}
                                    </h3>
                                    <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mb-4"></div>
                                  </div>
                                </div>

                                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                                  {item.description}
                                </p>

                                <div className="flex items-center gap-2 text-cyan-400">
                                  <CheckCircle className="h-4 w-4" />
                                  <span className="text-sm font-medium">
                                    {item.badge}
                                  </span>
                                </div>
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
        </div>
      </section>

      {/* AI/ML Capabilities Section */}
      <div
        id="capabilities-section"
        className="py-20 bg-light relative overflow-hidden"
      >
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
              Our AI/ML Capabilities
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI/ML solutions from predictive analytics to autonomous agents
            </p>
          </motion.div>

          {/* Capabilities Grid */}
          <div className="max-w-8xl mx-auto relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((capability, index) => {
                const IconComponent = capability.icon.type;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group cursor-pointer h-full"
                  >
                    <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 h-full hover:border-blue-500/50 hover:bg-gray-800/80 transition-all duration-500 group-hover:scale-105">
                      <div className="relative w-20 h-20 rounded-xl overflow-hidden mb-6">
                        <img
                          src={capability.backgroundImage}
                          alt={capability.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/90"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          {capability.icon}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                        <h4 className="text-xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                          {capability.title}
                        </h4>
                      </div>
                      
                      <p className="text-gray-400 leading-relaxed">
                        {capability.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Industries Section */}
      <section className="py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                How we implement AI/ML across multiple industries
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Navigation */}
              <div className="lg:col-span-4">
                <div className="grid grid-cols-1 gap-4">
                  {industryData.map((industry) => (
                    <Button
                      key={industry.id}
                      variant={
                        selectedIndustry.id === industry.id
                          ? "default"
                          : "outline"
                      }
                      className={`text-center justify-center p-4 h-auto min-h-[60px] transition-all duration-300 ${
                        selectedIndustry.id === industry.id
                          ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-none shadow-lg"
                          : "bg-slate-800/50 border-slate-600 text-white hover:bg-slate-700/70 hover:border-blue-400/40 hover:text-white"
                      }`}
                      onClick={() => {
                        setSelectedIndustry(industry);
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
                  key={selectedIndustry.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-cyan-400/20 rounded-xl overflow-hidden"
                >
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
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {selectedIndustry.content}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our AI/ML technology stack and expertise
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-lg border border-gray-700 hover:border-cyan-400/40 transition-all duration-300"
                >
                  <p className="text-gray-300 text-sm font-medium">{tech}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">FAQs</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300">
                Common questions about our advanced AI/ML services
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Side - AI Image */}
              <div className="lg:col-span-5">
                <div className="relative group">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src="/assets/AI-ML.png"
                      alt="AI/ML Technology and Innovation"
                      className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Advanced AI/ML Solutions
                      </h3>
                      <p className="text-gray-200 text-sm">
                        Transforming businesses through predictive insights, generative AI, and autonomous agents
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - FAQ Content */}
              <div className="lg:col-span-7">
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 overflow-hidden"
                    >
                      <button
                        className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-700/30 transition-colors"
                        onClick={() => toggleFaq(index)}
                      >
                        <h3 className="text-lg font-semibold text-white pr-4">
                          {faq.question}
                        </h3>
                        {openFaq === index ? (
                          <ChevronUp className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                        )}
                      </button>
                      {openFaq === index && (
                        <div className="px-6 pb-6">
                          <p className="text-gray-400 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
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
                Advanced AI/ML Implementation Experts
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
                Ready to Build AI That Predicts,
              </span>
              <br />
              <span className="text-white">Creates, and Acts?</span>
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Partner with RTNextGenAI to implement Advanced Analytics, Generative AI, and Agentic AI solutions that transform your business
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
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
