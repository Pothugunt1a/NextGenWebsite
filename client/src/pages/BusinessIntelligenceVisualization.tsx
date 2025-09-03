
import { useState } from "react";
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
} from "lucide-react";

const capabilities = [
  {
    icon: <BarChart3 className="h-8 w-8 text-white" />,
    title: "Dashboard Design & Development",
    description: "Executive dashboards, KPI scorecards, operational reporting with interactive drill-down charts and custom visualizations.",
    backgroundImage: "/assets/AI-DataStratergy-banner.png",
  },
  {
    icon: <Users className="h-8 w-8 text-white" />,
    title: "Self-Service BI Enablement",
    description: "Empower business teams to explore and analyze data without IT bottlenecks, with governance policies ensuring consistency.",
    backgroundImage: "/assets/Data-Governance.png",
  },
  {
    icon: <Smartphone className="h-8 w-8 text-white" />,
    title: "Embedded Analytics",
    description: "Integrate BI dashboards directly into web apps, mobile apps, ERP & CRM systems with white-label analytics portals.",
    backgroundImage: "/assets/AI-Integration.png",
  },
  {
    icon: <Cloud className="h-8 w-8 text-white" />,
    title: "Cloud BI Solutions",
    description: "Deploy BI platforms in AWS, Azure, GCP using Power BI, Tableau, Qlik, Looker with scalable, cost-efficient architecture.",
    backgroundImage: "/assets/AWS-banner.png",
  },
  {
    icon: <Brain className="h-8 w-8 text-white" />,
    title: "Advanced Visualization & Predictive Analytics",
    description: "Integrate BI with machine learning models for predictive insights, automated forecasting, and AI-powered visual storytelling.",
    backgroundImage: "/assets/AI-ML.png",
  },
];

const businessProblems = [
  {
    icon: <Database className="h-6 w-6 text-red-400" />,
    title: "Data Silos",
    description: "Critical business data scattered across multiple systems without unified view",
  },
  {
    icon: <Activity className="h-6 w-6 text-red-400" />,
    title: "Slow Decision-Making",
    description: "Manual reporting processes delay critical business decisions by days or weeks",
  },
  {
    icon: <PieChart className="h-6 w-6 text-red-400" />,
    title: "Inconsistent Reports",
    description: "Different teams generating conflicting reports from the same data sources",
  },
  {
    icon: <Monitor className="h-6 w-6 text-red-400" />,
    title: "Limited Visibility",
    description: "Executives lack real-time visibility into key performance indicators",
  },
];

const businessSolutions = [
  {
    icon: <Layers className="h-6 w-6 text-green-400" />,
    title: "Unified Data Platform",
    description: "Centralized data warehouse connecting all business systems for single source of truth",
  },
  {
    icon: <Zap className="h-6 w-6 text-green-400" />,
    title: "Real-Time Dashboards",
    description: "Interactive dashboards providing instant access to critical business metrics",
  },
  {
    icon: <Brain className="h-6 w-6 text-green-400" />,
    title: "Predictive Insights",
    description: "AI-powered analytics delivering forecasting and trend analysis capabilities",
  },
  {
    icon: <Target className="h-6 w-6 text-green-400" />,
    title: "Self-Service Analytics",
    description: "Empower business users with intuitive tools for independent data exploration",
  },
];

const industryUseCases = [
  {
    icon: <Activity className="h-8 w-8 text-blue-400" />,
    title: "Healthcare",
    description: "Patient dashboards, compliance reports, operational efficiency tracking",
    image: "/assets/Healthcare.png",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-green-400" />,
    title: "Finance",
    description: "Fraud detection, risk analytics, regulatory reporting",
    image: "/assets/Finance.png",
  },
  {
    icon: <Smartphone className="h-8 w-8 text-purple-400" />,
    title: "Retail",
    description: "Customer 360 view, demand forecasting, inventory optimization",
    image: "/assets/Ecommerce.png",
  },
  {
    icon: <Settings className="h-8 w-8 text-orange-400" />,
    title: "Manufacturing",
    description: "Factory floor dashboards, predictive maintenance, quality control",
    image: "/assets/Manufacturing.png",
  },
  {
    icon: <Monitor className="h-8 w-8 text-cyan-400" />,
    title: "Media",
    description: "Audience engagement dashboards, content performance analytics",
    image: "/assets/Media.png",
  },
];

const whyChooseUs = [
  {
    icon: <Award className="h-6 w-6 text-blue-400" />,
    title: "Certified BI Experts",
    description: "Tableau, Power BI, Looker certified professionals with enterprise experience",
  },
  {
    icon: <CheckCircle className="h-6 w-6 text-green-400" />,
    title: "Proven Enterprise Deployments",
    description: "Successfully deployed BI solutions across Fortune 500 companies",
  },
  {
    icon: <Brain className="h-6 w-6 text-purple-400" />,
    title: "AI/ML-driven BI Capabilities",
    description: "Advanced analytics with machine learning integration for predictive insights",
  },
  {
    icon: <Cloud className="h-6 w-6 text-cyan-400" />,
    title: "Cloud-Native Solutions",
    description: "Mobile-ready, scalable solutions built for modern cloud infrastructure",
  },
  {
    icon: <Shield className="h-6 w-6 text-yellow-400" />,
    title: "Governance-First Approach",
    description: "Data accuracy, security, and compliance built into every solution",
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
  { name: "Databricks", logo: "🧱" },
];

const successStories = [
  {
    industry: "Retail",
    metric: "25% increase in sales",
    description: "Using customer analytics dashboards for personalized marketing campaigns",
  },
  {
    industry: "Healthcare",
    metric: "Reduced reporting time from days to minutes",
    description: "Automated compliance reporting and patient outcome tracking",
  },
  {
    industry: "Finance",
    metric: "Real-time fraud detection",
    description: "AI-powered dashboards identifying suspicious transactions instantly",
  },
];

export default function BusinessIntelligenceVisualization() {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-light text-white"
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/Data-Governance.png"
            alt="Business Intelligence & Visualization"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div>
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              >
                <span className="bg-gradient-to-r from-white via-blue-100 to-[#0080FF] bg-clip-text text-transparent">
                  Transform Complex Data
                </span>
                <br />
                <span className="text-white">Into Actionable Insights</span>
              </motion.h1>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed"
              >
                Interactive dashboards, real-time analytics, and AI-powered insights for smarter decisions across your enterprise.
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2">
                  <Monitor className="h-5 w-5" />
                  See a Live Dashboard
                </button>
                <button className="border border-white/30 hover:border-white/60 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-white/10 flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Talk to a BI Expert
                </button>
              </motion.div>
            </div>

            {/* Right Side - Dashboard Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4 rounded-lg">
                    <BarChart3 className="h-8 w-8 text-white mb-2" />
                    <div className="text-sm text-white/80">Revenue Growth</div>
                    <div className="text-2xl font-bold text-white">+24.5%</div>
                  </div>
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-4 rounded-lg">
                    <TrendingUp className="h-8 w-8 text-white mb-2" />
                    <div className="text-sm text-white/80">Customer Satisfaction</div>
                    <div className="text-2xl font-bold text-white">94.2%</div>
                  </div>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <LineChart className="h-6 w-6 text-blue-400 mb-2" />
                  <div className="text-sm text-gray-300">Real-time Analytics</div>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm">Live Data</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why BI Matters Section */}
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
              {/* Problems */}
              <div>
                <h3 className="text-2xl font-bold text-red-400 mb-8 flex items-center gap-3">
                  <AlertTriangle className="h-6 w-6" />
                  Common Business Challenges
                </h3>
                <div className="space-y-6">
                  {businessProblems.map((problem, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className="flex items-start gap-4 p-4 bg-red-900/20 border border-red-500/20 rounded-lg"
                    >
                      {problem.icon}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">{problem.title}</h4>
                        <p className="text-gray-300">{problem.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Solutions */}
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

      {/* Capabilities Section */}
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

      {/* Industry Use Cases */}
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

      {/* Technology Stack */}
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

      {/* Why Choose RTNextGenAI */}
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

      {/* Success Stories Carousel */}
      <section className="py-20 bg-gray-900/50">
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
                Success Stories
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
                <div className="text-4xl font-bold text-blue-400 mb-4">
                  {successStories[currentStoryIndex].metric}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {successStories[currentStoryIndex].industry}
                </h3>
                <p className="text-gray-300 text-lg">
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

      {/* Call-to-Action */}
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
            Partner with RTNextGenAI to design intuitive, AI-powered BI dashboards that empower your enterprise with actionable insights
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
