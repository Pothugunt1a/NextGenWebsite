
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ChevronDown,
  ChevronUp,
  Brain,
  TrendingUp,
  Bot,
  Users,
  CheckCircle,
  Award,
  ArrowRight,
  Eye,
  Zap,
  Shield,
  Activity,
  Cpu,
  Target,
  Lightbulb,
  Search,
  BarChart3,
  Database,
  Settings,
  AlertTriangle,
  Clock,
  Globe,
  FileText,
  Camera,
  Mic,
  Code,
  Layers,
  PlayCircle,
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
    secondaryIcon: CheckCircle,
    title: "Full Lifecycle ML Expertise",
    description:
      "End-to-end machine learning expertise from data preparation and feature engineering to model training, deployment, and monitoring. Our certified ML engineers have deep experience across healthcare, finance, retail, and manufacturing sectors.",
    badge: "Complete ML lifecycle",
  },
  {
    icon: Shield,
    secondaryIcon: Award,
    title: "Cloud-Native ML Deployment",
    description:
      "Deploy scalable ML solutions on AWS SageMaker, Azure ML, and Google Vertex AI. Our cloud-native approach ensures high availability, automatic scaling, and enterprise-grade security for your ML models and pipelines.",
    badge: "Enterprise-grade platforms",
  },
  {
    icon: TrendingUp,
    secondaryIcon: Target,
    title: "MLOps & Governance Excellence",
    description:
      "Implement robust MLOps practices with CI/CD for models, automated retraining, performance monitoring, and drift detection. Using MLflow, Kubeflow, and platform-native tools for model lifecycle management.",
    badge: "Production-ready MLOps",
  },
  {
    icon: Cpu,
    secondaryIcon: Lightbulb,
    title: "Future-Ready AI Foundation",
    description:
      "Build ML solutions that serve as the foundation for Gen AI and Agentic AI implementations. Our ML infrastructure seamlessly integrates with advanced AI capabilities as your organization evolves.",
    badge: "AI-ready architecture",
  },
  {
    icon: Users,
    secondaryIcon: Award,
    title: "Proven Industry Success",
    description:
      "Demonstrated success across multiple industries with measurable business outcomes. Our ML solutions deliver real ROI through improved decision-making, operational efficiency, and customer experience enhancement.",
    badge: "Cross-industry expertise",
  },
];

const faqs: FAQ[] = [
  {
    question: "What's the difference between traditional analytics and machine learning?",
    answer:
      "Traditional analytics explains what happened using historical data, while machine learning predicts what will happen and recommends what to do next. ML algorithms learn from data patterns to make predictions, detect anomalies, and automate decision-making processes.",
  },
  {
    question: "How do you ensure ML model accuracy and performance?",
    answer:
      "We implement comprehensive MLOps practices including automated model validation, A/B testing, performance monitoring, and drift detection. Our models undergo rigorous testing with cross-validation, hyperparameter tuning, and continuous retraining to maintain accuracy.",
  },
  {
    question: "Can you integrate ML models with our existing enterprise systems?",
    answer:
      "Absolutely. We integrate ML models with data platforms (Snowflake, BigQuery, Redshift), BI dashboards (Power BI, Tableau), enterprise apps (SAP, Salesforce), and cloud platforms (AWS, Azure, GCP) through APIs and real-time endpoints.",
  },
  {
    question: "What machine learning frameworks and platforms do you use?",
    answer:
      "We use industry-leading frameworks including TensorFlow, PyTorch, Scikit-learn, and XGBoost. For deployment, we leverage AWS SageMaker, Azure ML, Google Vertex AI, and Databricks MLflow with orchestration through Airflow and Kubeflow.",
  },
  {
    question: "How do you handle data privacy and model governance?",
    answer:
      "We implement comprehensive ML governance with data lineage tracking, model versioning, audit logging, and compliance monitoring. Our solutions meet GDPR, HIPAA, and industry-specific requirements with built-in privacy-preserving techniques and explainable AI capabilities.",
  },
];

const capabilities = [
  {
    icon: <TrendingUp className="h-8 w-8 text-white" />,
    title: "Predictive & Prescriptive Modeling",
    description:
      "Advanced forecasting and optimization models for demand planning, churn prediction, financial risk assessment, and 'what-if' scenario planning that drive strategic business decisions.",
    backgroundImage: "/assets/AI-ML.png",
    features: [
      "Demand forecasting & inventory optimization",
      "Customer churn prediction & retention",
      "Financial risk modeling & credit scoring",
      "What-if scenario planning & optimization"
    ]
  },
  {
    icon: <Brain className="h-8 w-8 text-white" />,
    title: "Supervised & Unsupervised Learning",
    description:
      "Classification, regression, clustering, and recommendation systems using advanced algorithms to extract insights from structured and unstructured data across various business domains.",
    backgroundImage: "/assets/AI&Data.png",
    features: [
      "Classification & regression models",
      "Clustering & customer segmentation",
      "Recommendation engines",
      "Anomaly detection & fraud prevention"
    ]
  },
  {
    icon: <Bot className="h-8 w-8 text-white" />,
    title: "Reinforcement Learning",
    description:
      "Adaptive learning systems for robotics, IoT optimization, algorithmic trading, and real-time decision-making with continuous feedback-driven improvement and autonomous optimization.",
    backgroundImage: "/assets/AI-Robotic.png",
    features: [
      "Adaptive robotics & automation",
      "Real-time trading algorithms",
      "IoT optimization & control systems",
      "Dynamic pricing & resource allocation"
    ]
  },
  {
    icon: <FileText className="h-8 w-8 text-white" />,
    title: "Natural Language Processing (NLP)",
    description:
      "Advanced text analysis, sentiment analysis, chatbots, and document processing solutions that unlock insights from unstructured text data and enable intelligent automation.",
    backgroundImage: "/assets/AI-nlp.png",
    features: [
      "Sentiment analysis & text mining",
      "Document classification & summarization",
      "Intelligent chatbots & virtual assistants",
      "Entity extraction & knowledge graphs"
    ]
  },
  {
    icon: <Camera className="h-8 w-8 text-white" />,
    title: "Computer Vision",
    description:
      "Image recognition, object detection, defect identification, and medical imaging analysis that transform visual data into actionable insights for quality control and diagnostics.",
    backgroundImage: "/assets/AI-computerVision.png",
    features: [
      "Image recognition & object detection",
      "Quality control & defect detection",
      "Medical imaging & diagnostics",
      "Facial recognition & biometric systems"
    ]
  },
  {
    icon: <Activity className="h-8 w-8 text-white" />,
    title: "Time-Series & Streaming ML",
    description:
      "Real-time predictions on streaming data for finance (fraud detection), IoT (sensor data), retail (clickstream analysis), and other time-sensitive applications requiring immediate insights.",
    backgroundImage: "/assets/AI-ML.png",
    features: [
      "Real-time fraud detection",
      "IoT sensor data analysis",
      "Financial market predictions",
      "Live clickstream analytics"
    ]
  },
  {
    icon: <Settings className="h-8 w-8 text-white" />,
    title: "MLOps & Model Deployment",
    description:
      "Enterprise-grade ML operations with CI/CD pipelines, automated monitoring, model versioning, and governance frameworks that ensure reliable, scalable ML deployments.",
    backgroundImage: "/assets/AI-Training.png",
    features: [
      "CI/CD for ML models & pipelines",
      "Automated model monitoring & retraining",
      "Model versioning & governance",
      "Performance tracking & drift detection"
    ]
  },
  {
    icon: <Layers className="h-8 w-8 text-white" />,
    title: "AI/ML Integration with Gen AI & Agents",
    description:
      "ML models powering Gen AI copilots and agentic systems with multi-agent orchestration for autonomous workflows, bridging traditional ML with cutting-edge AI capabilities.",
    backgroundImage: "/assets/GenerativeAI.png",
    features: [
      "Gen AI copilot integration",
      "Multi-agent orchestration",
      "Autonomous workflow systems",
      "ML-powered AI agents"
    ]
  },
];

// Industry data for the interactive section
const industryData = [
  {
    id: "healthcare",
    name: "Healthcare",
    image: "/assets/Healthcare.png",
    content:
      "Predictive diagnostics, patient risk scoring, AI imaging analysis, clinical decision support systems, and Gen AI for medical documentation that improve patient outcomes while reducing operational costs and enhancing care quality.",
    impact: "Improved diagnostic accuracy by 40% and reduced readmission rates by 25%"
  },
  {
    id: "finance",
    name: "Finance",
    image: "/assets/Finance.png",
    content:
      "Fraud detection, algorithmic trading, credit scoring, risk assessment models, and autonomous compliance monitoring with AI agents that protect financial institutions while optimizing investment strategies and regulatory compliance.",
    impact: "Reduced fraud losses by 60% and improved trading algorithm performance by 35%"
  },
  {
    id: "retail",
    name: "Retail & eCommerce",
    image: "/assets/Ecommerce.png",
    content:
      "Recommendation engines, demand forecasting, customer churn prevention, personalization systems, and Gen AI-driven marketing content that enhance customer experience and drive revenue growth.",
    impact: "Increased conversion rates by 45% and reduced inventory costs by 30%"
  },
  {
    id: "manufacturing",
    name: "Manufacturing & IoT",
    image: "/assets/Manufacturing.png",
    content:
      "Predictive maintenance, defect detection, supply chain optimization, quality control systems, and IoT agents for automation that minimize downtime and maximize operational efficiency.",
    impact: "Reduced equipment downtime by 50% and improved quality control by 40%"
  },
  {
    id: "media",
    name: "Media & Entertainment",
    image: "/assets/Media.png",
    content:
      "Audience analytics, content personalization, real-time recommendations, content generation, and engagement optimization that enhance viewer experience and content performance.",
    impact: "Enhanced content engagement by 55% and improved recommendation accuracy by 40%"
  },
  {
    id: "energy",
    name: "Energy & Utilities",
    image: "/assets/Oil-Gas.png",
    content:
      "Smart grid forecasting, consumption optimization, predictive outage management, and demand response systems that improve grid reliability and reduce operational costs.",
    impact: "Reduced energy waste by 35% and improved grid reliability by 45%"
  }
];

// Success metrics for carousel
const successMetrics = [
  {
    industry: "Healthcare",
    metric: "40%",
    description: "Improved diagnostic accuracy with ML models",
    icon: Activity,
    color: "from-red-500 to-pink-500"
  },
  {
    industry: "Finance",
    metric: "60%",
    description: "Reduction in fraud losses through ML detection",
    icon: Shield,
    color: "from-green-500 to-emerald-500"
  },
  {
    industry: "Retail",
    metric: "45%",
    description: "Increased conversion rates with ML recommendations",
    icon: TrendingUp,
    color: "from-blue-500 to-cyan-500"
  },
  {
    industry: "Manufacturing",
    metric: "50%",
    description: "Reduced equipment downtime with predictive maintenance",
    icon: Settings,
    color: "from-orange-500 to-red-500"
  },
  {
    industry: "Energy",
    metric: "35%",
    description: "Reduced energy waste with smart grid optimization",
    icon: Zap,
    color: "from-yellow-500 to-orange-500"
  }
];

export default function MachineLearningServices() {
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
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/AI-ML.png"
            alt="Machine Learning Services"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40"></div>

        <div className="relative flex items-center h-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Side - Content */}
              <div className="lg:col-span-7">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.h1
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
                  >
                    <span className="bg-gradient-to-r from-white via-blue-100 to-[#0080FF] bg-clip-text text-transparent">
                      Unlock Predictive Power with Machine Learning
                    </span>
                  </motion.h1>

                  <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed"
                  >
                    At RTNextGenAI, we design, build, and deploy enterprise-grade Machine Learning solutions that transform raw data into intelligence, automate decision-making, and deliver measurable business outcomes.
                  </motion.p>

                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <Button
                      size="lg"
                      className="group bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-8 py-4 text-lg font-semibold shadow-2xl shadow-blue-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
                    >
                      <Brain className="mr-2 h-5 w-5" />
                      Request a Demo
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 px-8 py-4 text-lg font-semibold backdrop-blur-sm"
                    >
                      <Bot className="mr-2 h-5 w-5" />
                      Talk to an ML Expert
                    </Button>
                  </motion.div>
                </motion.div>
              </div>

              {/* Right Side - ML Pipeline Visual */}
              <div className="lg:col-span-5">
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <h3 className="text-2xl font-bold text-white mb-6 text-center">ML Pipeline</h3>
                    <div className="space-y-4">
                      {[
                        { icon: Database, label: "Data", color: "from-blue-500 to-blue-600" },
                        { icon: Brain, label: "Training", color: "from-purple-500 to-purple-600" },
                        { icon: Bot, label: "Models", color: "from-green-500 to-green-600" },
                        { icon: BarChart3, label: "Predictions", color: "from-orange-500 to-orange-600" }
                      ].map((step, index) => {
                        const IconComponent = step.icon;
                        return (
                          <motion.div
                            key={index}
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1 + index * 0.2, duration: 0.6 }}
                            className="flex items-center gap-4"
                          >
                            <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center`}>
                              <IconComponent className="h-6 w-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="text-white font-medium">{step.label}</div>
                              {index < 3 && (
                                <div className="w-full h-0.5 bg-gradient-to-r from-white/30 to-transparent mt-2"></div>
                              )}
                            </div>
                            {index < 3 && (
                              <ArrowRight className="h-5 w-5 text-white/60" />
                            )}
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Machine Learning Matters */}
      <section className="py-20 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Why{" "}
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  Machine Learning
                </span>
                {" "}Matters
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Left: Traditional Analytics */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-8">
                  <BarChart3 className="h-8 w-8 text-orange-400" />
                  <h3 className="text-2xl font-bold text-white">Traditional Analytics</h3>
                </div>
                <div className="p-6 bg-orange-500/10 border border-orange-500/20 rounded-xl">
                  <h4 className="text-lg font-semibold text-white mb-3">Explains What Happened</h4>
                  <p className="text-gray-300 mb-4">Historical reporting and descriptive statistics showing past performance and trends.</p>
                  <div className="text-orange-400 font-medium">Reactive • Descriptive • Historical</div>
                </div>
              </motion.div>

              {/* Right: Machine Learning */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-8">
                  <Brain className="h-8 w-8 text-green-400" />
                  <h3 className="text-2xl font-bold text-white">Machine Learning</h3>
                </div>
                <div className="p-6 bg-green-500/10 border border-green-500/20 rounded-xl">
                  <h4 className="text-lg font-semibold text-white mb-3">Predicts What Will Happen</h4>
                  <p className="text-gray-300 mb-4">Forecasting, recommendation engines, and intelligent automation for proactive decision-making.</p>
                  <div className="text-green-400 font-medium">Predictive • Prescriptive • Intelligent</div>
                </div>
              </motion.div>
            </div>

            {/* ML Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { icon: Shield, title: "Detect Anomalies", desc: "Real-time risk detection", color: "from-red-500 to-red-600" },
                { icon: Users, title: "Personalize Experiences", desc: "Customer-centric solutions", color: "from-blue-500 to-blue-600" },
                { icon: TrendingUp, title: "Optimize Operations", desc: "Reduce costs & improve efficiency", color: "from-green-500 to-green-600" },
                { icon: Bot, title: "Intelligent Automation", desc: "Smart process automation", color: "from-purple-500 to-purple-600" }
              ].map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">{benefit.title}</h4>
                    <p className="text-gray-400 text-sm">{benefit.desc}</p>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-cyan-400/20 rounded-2xl">
                <div className="text-lg font-semibold text-white">
                  ML is the foundation for AI, deep learning, and Gen AI innovations
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Machine Learning Capabilities */}
      <section className="py-20 bg-light relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl font-bold mb-6 text-white">
                Our Machine Learning Capabilities
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive ML solutions from supervised learning to advanced MLOps
              </p>
            </motion.div>

            {/* Capabilities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((capability, index) => (
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
                    
                    <h4 className="text-xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 mb-4">
                      {capability.title}
                    </h4>
                    
                    <p className="text-gray-400 leading-relaxed mb-6">
                      {capability.description}
                    </p>

                    <div className="space-y-2">
                      {capability.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integration Capabilities */}
      <section className="py-20 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Integration Capabilities
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Seamlessly integrate ML models into your existing enterprise ecosystem
              </p>
            </motion.div>

            {/* Integration Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Data Platforms",
                  icon: Database,
                  color: "from-blue-500 to-cyan-500",
                  platforms: ["Snowflake", "BigQuery", "Redshift", "Synapse"]
                },
                {
                  title: "BI Dashboards",
                  icon: BarChart3,
                  color: "from-purple-500 to-pink-500",
                  platforms: ["Power BI", "Tableau", "Qlik", "Looker"]
                },
                {
                  title: "Enterprise Apps",
                  icon: Globe,
                  color: "from-green-500 to-emerald-500",
                  platforms: ["SAP", "Salesforce", "NetSuite", "Dynamics"]
                },
                {
                  title: "Cloud Platforms",
                  icon: Zap,
                  color: "from-orange-500 to-red-500",
                  platforms: ["AWS", "Azure", "GCP", "Multi-cloud"]
                },
                {
                  title: "AI/Gen AI Tools",
                  icon: Brain,
                  color: "from-pink-500 to-purple-500",
                  platforms: ["OpenAI", "Hugging Face", "LangChain", "Azure OpenAI"]
                }
              ].map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center`}>
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                    <div className="space-y-2">
                      {category.platforms.map((platform, idx) => (
                        <div key={idx} className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-lg px-3 py-2">
                          <span className="text-sm text-gray-300">{platform}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 bg-light text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Industry Use Cases
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
                    <p className="text-gray-300 leading-relaxed text-lg mb-4">
                      {selectedIndustry.content}
                    </p>
                    <div className="flex items-center gap-2 text-green-400">
                      <TrendingUp className="h-5 w-5" />
                      <span className="font-medium">{selectedIndustry.impact}</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies We Use */}
      <section className="py-20 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Technologies We Use
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            </motion.div>

            {/* Technology Categories */}
            <div className="space-y-12">
              {[
                {
                  title: "ML Frameworks",
                  icon: Cpu,
                  color: "from-blue-500 to-cyan-500",
                  tools: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "XGBoost", "LightGBM", "CatBoost"]
                },
                {
                  title: "ML Platforms",
                  icon: Brain,
                  color: "from-purple-500 to-pink-500",
                  tools: ["AWS SageMaker", "Azure ML", "Google Vertex AI", "Databricks MLflow", "MLflow", "Kubeflow"]
                },
                {
                  title: "Pipeline & Orchestration",
                  icon: Settings,
                  color: "from-green-500 to-emerald-500",
                  tools: ["Apache Airflow", "Kubeflow", "Apache Spark MLlib", "Prefect", "Luigi", "Argo Workflows"]
                },
                {
                  title: "Visualization & Monitoring",
                  icon: BarChart3,
                  color: "from-orange-500 to-red-500",
                  tools: ["Power BI", "Tableau", "Looker", "Grafana", "Weights & Biases", "TensorBoard", "Neptune"]
                },
                {
                  title: "Gen AI & Agent Frameworks",
                  icon: Bot,
                  color: "from-purple-500 to-pink-500",
                  tools: ["OpenAI GPT", "Azure OpenAI", "Hugging Face", "LangChain", "AutoGen", "CrewAI", "LlamaIndex"]
                }
              ].map((category, categoryIndex) => {
                const IconComponent = category.icon;
                return (
                  <motion.div
                    key={categoryIndex}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                    className="relative"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                      {category.tools.map((tool, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: index * 0.05 }}
                          className="group cursor-pointer"
                        >
                          <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700 rounded-xl p-4 text-center hover:border-blue-500/50 transition-all duration-300 group-hover:scale-105 h-full">
                            <h4 className={`text-white font-semibold text-sm group-hover:bg-gradient-to-r group-hover:${category.color} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                              {tool}
                            </h4>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose RTNextGenAI */}
      <section className="py-20 bg-light text-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Why Choose{" "}
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  RTNextGenAI
                </span>
                {" "}for Machine Learning?
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            </motion.div>

            {/* Feature Blocks */}
            <div className="space-y-8">
              {whyChooseUsItems.map((item, index) => {
                const IconComponent = item.icon;
                const SecondaryIconComponent = item.secondaryIcon;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
                      <div className="flex items-start gap-6">
                        <div className="relative flex-shrink-0">
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
                          <p className="text-gray-300 leading-relaxed text-lg mb-4">
                            {item.description}
                          </p>
                          <div className="flex items-center gap-2 text-cyan-400">
                            <CheckCircle className="h-4 w-4" />
                            <span className="text-sm font-medium">
                              {item.badge}
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

      {/* Success Metrics */}
      <section className="py-20 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Proven ML Success Metrics
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            </motion.div>

            <div className="relative max-w-4xl mx-auto">
              <Carousel
                className="w-full"
                opts={{
                  align: "start",
                  loop: true,
                }}
                plugins={[
                  Autoplay({
                    delay: 4000,
                    stopOnInteraction: true,
                    stopOnMouseEnter: true,
                  }),
                ]}
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {successMetrics.map((metric, index) => {
                    const IconComponent = metric.icon;
                    return (
                      <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2">
                        <div className="p-6">
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 text-center hover:border-blue-400/40 transition-all duration-500"
                          >
                            <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${metric.color} rounded-2xl flex items-center justify-center`}>
                              <IconComponent className="h-10 w-10 text-white" />
                            </div>
                            <div className="text-4xl font-bold text-white mb-2">{metric.metric}</div>
                            <div className="text-lg font-semibold text-cyan-400 mb-3">{metric.industry}</div>
                            <p className="text-gray-300">{metric.description}</p>
                          </motion.div>
                        </div>
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
                <CarouselPrevious className="left-4 bg-gradient-to-r from-gray-800/90 to-gray-700/90 border border-cyan-400/40 hover:border-cyan-400/70 text-cyan-400 hover:text-white" />
                <CarouselNext className="right-4 bg-gradient-to-r from-gray-800/90 to-gray-700/90 border border-cyan-400/40 hover:border-cyan-400/70 text-cyan-400 hover:text-white" />
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-light text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">FAQs</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Side - ML Image */}
              <div className="lg:col-span-5">
                <div className="relative group">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src="/assets/AI-ML.png"
                      alt="Machine Learning Solutions"
                      className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Enterprise Machine Learning
                      </h3>
                      <p className="text-gray-200 text-sm">
                        Transforming business intelligence through predictive analytics and intelligent automation
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

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
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
                Ready to leverage Machine Learning
              </span>
              <br />
              <span className="text-white">for smarter decisions?</span>
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Partner with RTNextGenAI to design, build, and deploy ML solutions that deliver real business value. Transform your data into intelligence that drives growth and innovation.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Button
                size="lg"
                className="group bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-10 py-6 text-lg font-semibold shadow-2xl shadow-blue-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
              >
                <Brain className="mr-2 h-5 w-5" />
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 px-10 py-6 text-lg font-semibold backdrop-blur-sm"
              >
                <Bot className="mr-2 h-5 w-5" />
                Request a Demo
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
