import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Search,
  Target,
  Lightbulb,
  BarChart3,
  Users,
  Settings,
  Zap,
  CheckCircle,
  ArrowRight,
  Brain,
  Database,
  Shield,
  Cog,
  TrendingUp,
  Clock,
  DollarSign,
  Award,
  ChevronRight,
  Play,
  FileText,
  PieChart,
  Workflow,
  AlertTriangle,
  Server,
  Monitor,
  Code,
  Cloud,
  Bot,
  MessageSquare,
  Eye,
  RefreshCw,
} from "lucide-react";

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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const useCases = [
  {
    title: "Predictive Maintenance of Servers",
    category: "IT Operations",
    description: "AI-powered monitoring to predict server failures before they occur",
    impact: "85% reduction in downtime",
    effort: "Medium",
    icon: Server,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Intelligent Alert Management",
    category: "IT Operations",
    description: "Reduce alert fatigue with smart filtering and prioritization",
    impact: "70% reduction in false alerts",
    effort: "Low",
    icon: AlertTriangle,
    color: "from-green-500 to-teal-500",
  },
  {
    title: "Automated Incident Response",
    category: "DevOps",
    description: "AI-driven incident detection and automated resolution workflows",
    impact: "60% faster response times",
    effort: "High",
    icon: RefreshCw,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Code Quality Analysis",
    category: "Development",
    description: "AI-powered code review and quality assessment",
    impact: "50% fewer bugs in production",
    effort: "Medium",
    icon: Code,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Infrastructure Optimization",
    category: "Cloud Management",
    description: "Optimize cloud costs and resource allocation with AI insights",
    impact: "40% cost reduction",
    effort: "Medium",
    icon: Cloud,
    color: "from-indigo-500 to-blue-500",
  },
  {
    title: "IT Helpdesk Chatbot",
    category: "Support",
    description: "Intelligent chatbot for first-level IT support and troubleshooting",
    impact: "80% query resolution without human intervention",
    effort: "Low",
    icon: Bot,
    color: "from-cyan-500 to-blue-500",
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Efficiency Gains",
    description: "Automate routine tasks and optimize workflows",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: DollarSign,
    title: "Cost Savings",
    description: "Reduce operational costs through intelligent automation",
    color: "from-green-500 to-teal-500",
  },
  {
    icon: Shield,
    title: "Risk Mitigation",
    description: "Proactively identify and address potential issues",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Award,
    title: "Innovation",
    description: "Enable new capabilities and competitive advantages",
    color: "from-orange-500 to-red-500",
  },
];

const process = [
  {
    step: "01",
    title: "Current State Assessment",
    description: "Analyze existing IT landscape and identify pain points",
    icon: Search,
  },
  {
    step: "02",
    title: "Opportunity Identification",
    description: "Map AI capabilities to business challenges",
    icon: Target,
  },
  {
    step: "03",
    title: "Use Case Prioritization",
    description: "Evaluate impact vs. feasibility for each opportunity",
    icon: BarChart3,
  },
  {
    step: "04",
    title: "Implementation Roadmap",
    description: "Create detailed action plan with timelines and resources",
    icon: Workflow,
  },
];

const capabilities = [
  {
    title: "Machine Learning & Predictive Analytics",
    description: "Forecast trends, predict failures, and optimize performance",
    icon: Brain,
    applications: ["Predictive maintenance", "Capacity planning", "Performance optimization"],
  },
  {
    title: "Natural Language Processing",
    description: "Process and understand human language for automation",
    icon: MessageSquare,
    applications: ["Chatbots", "Document analysis", "Sentiment analysis"],
  },
  {
    title: "Anomaly Detection",
    description: "Identify unusual patterns and potential security threats",
    icon: Eye,
    applications: ["Security monitoring", "Performance monitoring", "Quality assurance"],
  },
  {
    title: "Robotic Process Automation",
    description: "Automate repetitive tasks and workflows",
    icon: Cog,
    applications: ["Data entry", "Report generation", "System integration"],
  },
];

const frameworks = [
  {
    title: "Top-Down Approach",
    description: "Align AI initiatives with strategic business goals",
    features: ["Cost reduction targets", "Efficiency improvements", "Digital transformation goals"],
  },
  {
    title: "Bottom-Up Approach",
    description: "Identify opportunities through team collaboration",
    features: ["Stakeholder interviews", "Workshop sessions", "Pain point analysis"],
  },
  {
    title: "Impact vs. Feasibility Matrix",
    description: "Prioritize opportunities based on value and complexity",
    features: ["Business value assessment", "Technical readiness", "Resource requirements"],
  },
];

export default function AIUsecaseDiscovery() {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedUseCase, setSelectedUseCase] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-40 right-1/3 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-sm font-medium">
                <Search className="w-4 h-4 mr-2" />
                Discovery & Identification
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
              AI Use Case Discovery &
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Opportunity Identification
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Reveal What's Possible. Prioritize What Matters.
            </motion.p>

            <motion.p variants={itemVariants} className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto mb-10">
              In a world increasingly driven by data and intelligent systems, knowing where and how to apply 
              Artificial Intelligence is critical to gaining a competitive edge. Our AI Use Case Discovery & 
              Opportunity Identification service empowers organizations to unlock transformational value by 
              pinpointing the most impactful areas for AI deployment.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl transition-all duration-300 transform hover:scale-105">
                Start Discovery Process
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-blue-500/50 hover:bg-blue-500/10 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="sticky top-20 z-40 bg-black/80 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto scrollbar-hide">
            {[
              { id: "overview", label: "Overview", icon: FileText },
              { id: "benefits", label: "Benefits", icon: Award },
              { id: "process", label: "Process", icon: Workflow },
              { id: "usecases", label: "Use Cases", icon: Lightbulb },
              { id: "capabilities", label: "AI Capabilities", icon: Brain },
              { id: "framework", label: "Framework", icon: PieChart },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 sm:px-6 py-4 whitespace-nowrap border-b-2 transition-all duration-300 ${
                  activeTab === tab.id
                    ? "border-blue-500 text-blue-400"
                    : "border-transparent text-gray-400 hover:text-white hover:border-gray-500"
                }`}
              >
                <tab.icon className="w-4 h-4 mr-2" />
                <span className="text-sm sm:text-base">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="relative">
        {/* Overview Section */}
        {activeTab === "overview" && (
          <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
              >
                <motion.div variants={itemVariants}>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    What This Service Delivers
                  </h2>
                  <div className="space-y-6">
                    {[
                      {
                        title: "Clarity",
                        description: "Understand where AI can deliver measurable business outcomes",
                        icon: Eye,
                      },
                      {
                        title: "Focus", 
                        description: "Prioritize AI opportunities with the highest strategic and financial ROI",
                        icon: Target,
                      },
                      {
                        title: "Action",
                        description: "Receive a structured roadmap to move from ideation to implementation",
                        icon: Zap,
                      },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center border border-blue-500/30">
                          <item.icon className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                          <p className="text-gray-400">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="relative">
                  <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-blue-500/30">
                    <h3 className="text-2xl font-bold mb-6 text-center">Ideal For</h3>
                    <div className="space-y-4">
                      {[
                        "Enterprises exploring AI for the first time",
                        "Organizations with scattered or stalled AI initiatives",
                        "Innovation leaders seeking to align AI with digital transformation goals",
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Benefits Section */}
        {activeTab === "benefits" && (
          <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={itemVariants} className="text-center mb-12">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Key Benefits
                  </h2>
                  <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
                    Transform your organization with strategic AI implementation
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                  {benefits.map((benefit, idx) => (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center mb-4`}>
                        <benefit.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-white">{benefit.title}</h3>
                      <p className="text-gray-400">{benefit.description}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.div variants={itemVariants} className="mt-12 text-center">
                  <div className="bg-gradient-to-r from-blue-900/50 to-cyan-900/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-blue-500/30 max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold mb-4">Strategic Outcomes</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                      {[
                        { label: "Quick Wins", desc: "Identify immediate opportunities" },
                        { label: "Long-term Strategy", desc: "Build scalable AI pipeline" },
                        { label: "Cross-functional", desc: "Enable team collaboration" },
                        { label: "Business Alignment", desc: "Connect AI to core priorities" },
                      ].map((outcome, idx) => (
                        <div key={idx}>
                          <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2">{outcome.label}</div>
                          <div className="text-sm text-gray-400">{outcome.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Process Section */}
        {activeTab === "process" && (
          <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={itemVariants} className="text-center mb-12">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Discovery Process
                  </h2>
                  <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
                    Our systematic approach to identifying and prioritizing AI opportunities
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {process.map((step, idx) => (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      className="relative"
                    >
                      <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 h-full">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-3xl font-bold text-blue-400">{step.step}</span>
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center border border-blue-500/30">
                            <step.icon className="w-6 h-6 text-blue-400" />
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-white">{step.title}</h3>
                        <p className="text-gray-400">{step.description}</p>
                      </div>

                      {idx < process.length - 1 && (
                        <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                          <ChevronRight className="w-8 h-8 text-blue-400" />
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Use Cases Section */}
        {activeTab === "usecases" && (
          <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={itemVariants} className="text-center mb-12">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    High-Value AI Use Cases in IT
                  </h2>
                  <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
                    Explore proven AI applications that deliver measurable business value
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {useCases.map((useCase, idx) => (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                      className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 cursor-pointer"
                      onClick={() => setSelectedUseCase(selectedUseCase === idx ? null : idx)}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${useCase.color} rounded-xl flex items-center justify-center`}>
                          <useCase.icon className="w-6 h-6 text-white" />
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          useCase.effort === "Low" 
                            ? "bg-green-500/20 text-green-400 border border-green-500/30"
                            : useCase.effort === "Medium"
                            ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                            : "bg-red-500/20 text-red-400 border border-red-500/30"
                        }`}>
                          {useCase.effort} Effort
                        </span>
                      </div>

                      <div className="mb-3">
                        <span className="text-sm text-blue-400 font-medium">{useCase.category}</span>
                      </div>

                      <h3 className="text-xl font-semibold mb-3 text-white">{useCase.title}</h3>
                      <p className="text-gray-400 mb-4">{useCase.description}</p>

                      <div className="flex items-center justify-between text-sm">
                        <span className="text-green-400 font-medium">{useCase.impact}</span>
                        <ChevronRight className={`w-4 h-4 text-gray-400 transition-transform ${selectedUseCase === idx ? "rotate-90" : ""}`} />
                      </div>

                      {selectedUseCase === idx && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-4 pt-4 border-t border-gray-700"
                        >
                          <div className="space-y-2 text-sm text-gray-300">
                            <div><strong>Implementation:</strong> 2-4 weeks</div>
                            <div><strong>ROI Timeline:</strong> 3-6 months</div>
                            <div><strong>Key Technologies:</strong> ML, Predictive Analytics</div>
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* AI Capabilities Section */}
        {activeTab === "capabilities" && (
          <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={itemVariants} className="text-center mb-12">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    AI Capabilities Relevant to IT
                  </h2>
                  <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
                    Advanced technologies that power intelligent IT operations
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {capabilities.map((capability, idx) => (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      className="bg-white/5 backdrop-blur-lg rounded-xl p-6 sm:p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                    >
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center border border-blue-500/30 mr-4">
                          <capability.icon className="w-6 h-6 text-blue-400" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-white">{capability.title}</h3>
                      </div>

                      <p className="text-gray-400 mb-6">{capability.description}</p>

                      <div>
                        <h4 className="text-lg font-medium text-white mb-3">Applications:</h4>
                        <div className="space-y-2">
                          {capability.applications.map((app, appIdx) => (
                            <div key={appIdx} className="flex items-center space-x-3">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                              <span className="text-gray-300">{app}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Framework Section */}
        {activeTab === "framework" && (
          <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={itemVariants} className="text-center mb-12">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Use Case Discovery Framework
                  </h2>
                  <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
                    Structured methodologies for identifying and evaluating AI opportunities
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {frameworks.map((framework, idx) => (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      className="bg-white/5 backdrop-blur-lg rounded-xl p-6 sm:p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                    >
                      <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-white">{framework.title}</h3>
                      <p className="text-gray-400 mb-6">{framework.description}</p>

                      <div className="space-y-3">
                        {framework.features.map((feature, featureIdx) => (
                          <div key={featureIdx} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div variants={itemVariants} className="mt-12">
                  <div className="bg-gradient-to-r from-blue-900/50 to-cyan-900/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-blue-500/30">
                    <h3 className="text-2xl font-bold mb-6 text-center">Executive Summary</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center border border-blue-500/30 mx-auto mb-4">
                          <Target className="w-8 h-8 text-blue-400" />
                        </div>
                        <h4 className="text-lg font-semibold mb-2">Purpose</h4>
                        <p className="text-gray-400 text-sm">Outline the goal of discovering high-impact AI opportunities within IT</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-xl flex items-center justify-center border border-green-500/30 mx-auto mb-4">
                          <TrendingUp className="w-8 h-8 text-green-400" />
                        </div>
                        <h4 className="text-lg font-semibold mb-2">Importance</h4>
                        <p className="text-gray-400 text-sm">Highlight strategic benefits—efficiency, cost savings, innovation</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center border border-purple-500/30 mx-auto mb-4">
                          <Award className="w-8 h-8 text-purple-400" />
                        </div>
                        <h4 className="text-lg font-semibold mb-2">Outcome</h4>
                        <p className="text-gray-400 text-sm">Define expected deliverables (e.g., AI use case shortlist, value matrix, roadmap)</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>
        )}
      </div>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/20 to-cyan-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Ready to Discover Your AI Opportunities?
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg sm:text-xl text-gray-400 mb-8">
              Let's identify the AI initiatives that will drive the most value for your organization.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-blue-500/50 hover:bg-blue-500/10 px-8 py-4 text-lg rounded-xl">
                Download Framework
                <FileText className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}