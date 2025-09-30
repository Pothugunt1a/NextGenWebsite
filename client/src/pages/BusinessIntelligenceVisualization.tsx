
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Eye,
  Users,
  Brain,
  BarChart3,
  Database,
  Smartphone,
  Cloud,
  Settings,
  ArrowRight,
  CheckCircle,
  Zap,
  Target,
  Shield,
  Award,
  Lightbulb,
  Activity,
  PieChart,
  LineChart,
  Monitor,
  Layers,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  Factory,
  Heart,
  DollarSign,
  ShoppingCart,
  Tv,
  Server,
  GitBranch,
  Gauge,
  Lock,
} from "lucide-react";

const capabilities = [
  {
    icon: <BarChart3 className="h-8 w-8 text-white" />,
    title: "Dashboard Design & Development",
    description: "Executive dashboards, KPI scorecards, operational reporting with interactive drill-down capabilities.",
    backgroundImage: "/assets/AI-DataStratergy-banner.png",
  },
  {
    icon: <Users className="h-8 w-8 text-white" />,
    title: "Self-Service BI",
    description: "Empower business users to explore data independently with governed, user-friendly analytics tools.",
    backgroundImage: "/assets/Data-Governance.png",
  },
  {
    icon: <Smartphone className="h-8 w-8 text-white" />,
    title: "Embedded Analytics",
    description: "Seamlessly integrate BI dashboards into web apps, mobile apps, and existing business systems.",
    backgroundImage: "/assets/AI-Integration.png",
  },
  {
    icon: <Cloud className="h-8 w-8 text-white" />,
    title: "Cloud BI Solutions",
    description: "Modern cloud-native BI platforms: Tableau, Power BI, Qlik, Looker with enterprise scalability.",
    backgroundImage: "/assets/AWS-banner.png",
  },
  {
    icon: <Brain className="h-8 w-8 text-white" />,
    title: "Predictive Analytics",
    description: "AI-powered insights with machine learning integration for forecasting and predictive modeling.",
    backgroundImage: "/assets/AI-ML.png",
  },
];

const businessChallenges = [
  {
    icon: <Database className="h-6 w-6 text-red-400" />,
    title: "Data Silos",
    description: "Critical business data scattered across multiple systems without unified view",
  },
  {
    icon: <Activity className="h-6 w-6 text-red-400" />,
    title: "Manual Reports",
    description: "Time-consuming manual reporting processes that delay critical business decisions",
  },
  {
    icon: <Gauge className="h-6 w-6 text-red-400" />,
    title: "Lack of Real-Time Insights",
    description: "Outdated information preventing timely responses to market changes and opportunities",
  },
];

const businessSolutions = [
  {
    icon: <Monitor className="h-6 w-6 text-green-400" />,
    title: "Unified Dashboards",
    description: "Centralized view of all business metrics with real-time data integration across systems",
  },
  {
    icon: <Brain className="h-6 w-6 text-green-400" />,
    title: "Predictive Insights",
    description: "AI-powered analytics delivering forecasting and trend analysis for proactive decision-making",
  },
  {
    icon: <Zap className="h-6 w-6 text-green-400" />,
    title: "Faster Decision-Making",
    description: "Real-time analytics enabling instant access to critical business intelligence",
  },
];

const industryUseCases = [
  {
    icon: <Heart className="h-8 w-8 text-blue-400" />,
    title: "Healthcare",
    description: "Patient care dashboards, compliance reports, operational efficiency tracking",
    image: "/assets/Healthcare.png",
  },
  {
    icon: <DollarSign className="h-8 w-8 text-green-400" />,
    title: "Finance",
    description: "Fraud detection, risk analytics, regulatory reporting, portfolio management",
    image: "/assets/Finance.png",
  },
  {
    icon: <ShoppingCart className="h-8 w-8 text-purple-400" />,
    title: "Retail",
    description: "Customer 360 view, product performance dashboards, demand forecasting",
    image: "/assets/Ecommerce.png",
  },
  {
    icon: <Factory className="h-8 w-8 text-orange-400" />,
    title: "Manufacturing & IoT",
    description: "Factory dashboards, predictive maintenance, quality control analytics",
    image: "/assets/Manufacturing.png",
  },
  {
    icon: <Tv className="h-8 w-8 text-cyan-400" />,
    title: "Media",
    description: "Audience analytics, content engagement tracking, performance optimization",
    image: "/assets/Media.png",
  },
];

const whyChooseUs = [
  {
    icon: <Award className="h-6 w-6 text-blue-400" />,
    title: "Certified BI & Data Visualization Experts",
    description: "Tableau, Power BI, Looker certified professionals with enterprise deployment experience",
  },
  {
    icon: <CheckCircle className="h-6 w-6 text-green-400" />,
    title: "Proven Enterprise Deployments",
    description: "Successfully implemented BI solutions across Fortune 500 companies with measurable results",
  },
  {
    icon: <Cloud className="h-6 w-6 text-purple-400" />,
    title: "Cloud + AI Integrated Dashboards",
    description: "Modern cloud-native solutions with artificial intelligence capabilities for advanced analytics",
  },
  {
    icon: <Shield className="h-6 w-6 text-yellow-400" />,
    title: "Governance & Accuracy by Design",
    description: "Built-in data governance, security compliance, and accuracy validation frameworks",
  },
  {
    icon: <Smartphone className="h-6 w-6 text-cyan-400" />,
    title: "Mobile-Ready BI Solutions",
    description: "Responsive dashboards optimized for desktop, tablet, and mobile accessibility",
  },
];

const techStack = [
  { name: "Tableau", logo: "📊" },
  { name: "Power BI", logo: "📈" },
  { name: "Qlik Sense", logo: "🎯" },
  { name: "Looker", logo: "👀" },
  { name: "Apache Superset", logo: "🔍" },
  { name: "Snowflake", logo: "❄️" },
  { name: "Amazon Redshift", logo: "🔴" },
  { name: "Azure Synapse", logo: "🔷" },
  { name: "BigQuery", logo: "🔍" },
  { name: "Databricks", logo: "🧱" },
];

const successStories = [
  {
    industry: "Retail",
    metric: "+25% Sales Lift",
    description: "BI-driven personalization and customer analytics increased revenue by 25% through targeted marketing campaigns",
    icon: <ShoppingCart className="h-8 w-8 text-purple-400" />,
  },
  {
    industry: "Healthcare",
    metric: "Days to Minutes",
    description: "Reduced reporting time from days to minutes with automated compliance dashboards and real-time patient analytics",
    icon: <Heart className="h-8 w-8 text-blue-400" />,
  },
  {
    industry: "Finance",
    metric: "Real-Time Fraud Detection",
    description: "Implemented real-time fraud detection dashboards identifying suspicious transactions instantly, reducing fraud by 40%",
    icon: <DollarSign className="h-8 w-8 text-green-400" />,
  },
];

const dataFlowSteps = [
  {
    step: "Data Sources",
    description: "ERP, CRM, IoT, SaaS",
    icon: <Database className="h-6 w-6 text-blue-400" />,
  },
  {
    step: "Data Warehouses/Lakes",
    description: "Snowflake, Redshift, BigQuery, Synapse",
    icon: <Server className="h-6 w-6 text-green-400" />,
  },
  {
    step: "BI Tools",
    description: "Tableau, Power BI, Qlik, Looker",
    icon: <BarChart3 className="h-6 w-6 text-purple-400" />,
  },
  {
    step: "Dashboards",
    description: "Web + Mobile",
    icon: <Monitor className="h-6 w-6 text-cyan-400" />,
  },
];

export default function BusinessIntelligenceVisualization() {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  // Auto-rotate success stories
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStoryIndex((prev) => (prev + 1) % successStories.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-light text-white"
    >
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/BI&Visualization-banner.png"
            alt="Business Intelligence & Visualization"
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/assets/Data-Governance.png";
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
                Business Intelligence Excellence
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl"
            >
              Transform complex data into actionable insights through modern BI platforms and intelligent visualization solutions
            </motion.p>

            {/* Badge below description */}
            <div className="mb-32">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0066CC]/20 border border-[#0080FF]/30 rounded-full backdrop-blur-sm"
              >
                <BarChart3 className="h-5 w-5 text-cyan-400" />
                <span className="text-white font-medium">
                  Industry-Leading Business Intelligence Solutions
                </span>
                <Award className="h-4 w-4 text-blue-400 fill-current" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Why BI Matters (Business Impact) */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Business Intelligence Matters
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Data without context is noise. BI & Visualization turns raw data into meaningful insights that drive business transformation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left - Challenges */}
              <div>
                <h3 className="text-2xl font-bold text-red-400 mb-8 flex items-center gap-3">
                  <AlertTriangle className="h-6 w-6" />
                  Business Challenges
                </h3>
                <div className="space-y-6">
                  {businessChallenges.map((challenge, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className="flex items-start gap-4 p-4 bg-red-900/20 border border-red-500/20 rounded-lg"
                    >
                      {challenge.icon}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">{challenge.title}</h4>
                        <p className="text-gray-300">{challenge.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right - Solutions */}
              <div>
                <h3 className="text-2xl font-bold text-green-400 mb-8 flex items-center gap-3">
                  <CheckCircle className="h-6 w-6" />
                  RTNextGenAI Solutions
                </h3>
                <div className="space-y-6">
                  {businessSolutions.map((solution, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className="flex items-start gap-4 p-4 bg-green-900/20 border border-green-500/20 rounded-lg"
                    >
                      {solution.icon}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">{solution.title}</h4>
                        <p className="text-gray-300">{solution.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Capabilities Section (Grid of 5 Cards) */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our BI & Visualization Capabilities
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group cursor-pointer"
                >
                  <div className="relative h-80 rounded-2xl overflow-hidden">
                    <img
                      src={capability.backgroundImage}
                      alt={capability.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="mb-4">{capability.icon}</div>
                      <h3 className="text-xl font-bold text-white mb-3">{capability.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{capability.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. BI Architecture Diagram */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                BI Architecture & Data Flow
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                How we transform your data sources into actionable business intelligence
              </p>
            </motion.div>

            <div className="relative">
              <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-4">
                {dataFlowSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    className="flex-1 text-center"
                  >
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                      <div className="flex justify-center mb-4">{step.icon}</div>
                      <h3 className="text-lg font-bold text-white mb-3">{step.step}</h3>
                      <p className="text-gray-300 text-sm">{step.description}</p>
                    </div>
                    {index < dataFlowSteps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 transform -translate-y-1/2 text-blue-400" 
                           style={{ left: `${((index + 1) * 100) / dataFlowSteps.length - 5}%` }}>
                        <ArrowRight className="h-6 w-6" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Industry Use Cases */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Industry Use Cases
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Discover how different industries leverage our BI solutions for competitive advantage
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industryUseCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group cursor-pointer"
                >
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center gap-4 mb-4">
                      {useCase.icon}
                      <h3 className="text-xl font-bold text-white">{useCase.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-4">{useCase.description}</p>
                    <img
                      src={useCase.image}
                      alt={useCase.title}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Technology Stack */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Technology Stack
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300">
                Industry-leading BI and data platform technologies
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 text-center"
                >
                  <div className="text-4xl mb-3">{tech.logo}</div>
                  <p className="text-white font-medium">{tech.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Why Choose RTNextGenAI */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose RTNextGenAI
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="flex items-start gap-4 p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700"
                >
                  {reason.icon}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{reason.title}</h3>
                    <p className="text-gray-300">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Success Stories Carousel */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Success Stories & Metrics
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
            </motion.div>

            <div className="relative">
              <motion.div
                key={currentStoryIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 text-center"
              >
                <div className="flex justify-center mb-6">
                  {successStories[currentStoryIndex].icon}
                </div>
                <div className="text-4xl font-bold text-blue-400 mb-4">
                  {successStories[currentStoryIndex].metric}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {successStories[currentStoryIndex].industry}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {successStories[currentStoryIndex].description}
                </p>
              </motion.div>

              <div className="flex justify-center mt-8 gap-2">
                {successStories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStoryIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentStoryIndex
                        ? 'bg-blue-500 scale-125'
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Call-to-Action */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/AI-DataStratergy-banner.png"
            alt="Ready to unlock your data"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-[#0080FF] bg-clip-text text-transparent">
              Ready to Unlock the Power
            </span>
            <br />
            <span className="text-white">of Your Data?</span>
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            Partner with RTNextGenAI to build intuitive, AI-powered BI solutions for your enterprise. Transform your data into competitive advantage.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2">
              <Monitor className="h-5 w-5" />
              Schedule a BI Demo
            </button>
            <button className="border border-white/30 hover:border-white/60 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-white/10 flex items-center gap-2">
              <Users className="h-5 w-5" />
              Get a Consultation
            </button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
