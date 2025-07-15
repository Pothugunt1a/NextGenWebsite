import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
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
  // IT Operations & Monitoring
  {
    title: "Predictive Maintenance of Servers",
    category: "IT Operations & Monitoring",
    description:
      "AI-powered monitoring to predict server failures before they occur",
    impact: "85% reduction in downtime",
    effort: "Medium",
    icon: Server,
    color: "from-blue-500 to-cyan-500",
    backgroundImage:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Intelligent Alert Correlation & Root Cause Analysis",
    category: "IT Operations & Monitoring",
    description:
      "Reduce alert fatigue with smart filtering and root cause identification",
    impact: "70% reduction in false alerts",
    effort: "Medium",
    icon: AlertTriangle,
    color: "from-green-500 to-teal-500",
    backgroundImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "AIOps for Incident Pattern Recognition",
    category: "IT Operations & Monitoring",
    description:
      "Advanced pattern recognition for incident prediction and resolution",
    impact: "65% faster incident resolution",
    effort: "High",
    icon: Monitor,
    color: "from-purple-500 to-blue-500",
    backgroundImage:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },

  // Service Management
  {
    title: "AI Chatbots for Tier 1 Support",
    category: "Service Management",
    description:
      "Intelligent chatbot for first-level IT support and troubleshooting",
    impact: "80% query resolution without human intervention",
    effort: "Low",
    icon: Bot,
    color: "from-cyan-500 to-blue-500",
    backgroundImage:
      "https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Automated Ticket Triage & Routing",
    category: "Service Management",
    description:
      "AI-driven ticket classification and automated routing to appropriate teams",
    impact: "60% faster response times",
    effort: "Medium",
    icon: RefreshCw,
    color: "from-purple-500 to-pink-500",
    backgroundImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "NLP-based Knowledge Base Search",
    category: "Service Management",
    description: "Intelligent search and knowledge retrieval for IT teams",
    impact: "75% faster information retrieval",
    effort: "Low",
    icon: Search,
    color: "from-teal-500 to-cyan-500",
    backgroundImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },

  // Security & Compliance
  {
    title: "AI-driven Threat Detection",
    category: "Security & Compliance",
    description: "Advanced threat detection using AI pattern recognition",
    impact: "90% improvement in threat detection accuracy",
    effort: "High",
    icon: Shield,
    color: "from-red-500 to-pink-500",
    backgroundImage:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Intelligent Log Analysis for Anomaly Detection",
    category: "Security & Compliance",
    description:
      "Automated log analysis to identify security anomalies and threats",
    impact: "85% reduction in false positives",
    effort: "Medium",
    icon: Eye,
    color: "from-orange-500 to-red-500",
    backgroundImage:
      "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Compliance Document Parsing",
    category: "Security & Compliance",
    description: "AI-powered parsing and analysis of compliance documents",
    impact: "70% faster compliance reporting",
    effort: "Low",
    icon: FileText,
    color: "from-indigo-500 to-purple-500",
    backgroundImage:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },

  // DevOps & Automation
  {
    title: "Code Review with AI Assistants",
    category: "DevOps & Automation",
    description: "AI-powered code review and quality assessment",
    impact: "50% fewer bugs in production",
    effort: "Medium",
    icon: Code,
    color: "from-orange-500 to-red-500",
    backgroundImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Predictive Deployment Risk Scoring",
    category: "DevOps & Automation",
    description: "AI-driven risk assessment for deployments",
    impact: "40% reduction in deployment failures",
    effort: "High",
    icon: TrendingUp,
    color: "from-blue-500 to-green-500",
    backgroundImage:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "CI/CD Pipeline Optimization",
    category: "DevOps & Automation",
    description: "Optimize continuous integration and deployment pipelines",
    impact: "35% faster deployment cycles",
    effort: "Medium",
    icon: Workflow,
    color: "from-purple-500 to-cyan-500",
    backgroundImage:
      "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },

  // Data & Asset Management
  {
    title: "Asset Discovery using AI",
    category: "Data & Asset Management",
    description: "Automated discovery and classification of IT assets",
    impact: "90% accuracy in asset tracking",
    effort: "Low",
    icon: Database,
    color: "from-green-500 to-blue-500",
    backgroundImage: "/assets/Usecase13.png",
  },
  {
    title: "Smart Capacity Planning",
    category: "Data & Asset Management",
    description: "AI-driven capacity forecasting and resource optimization",
    impact: "40% cost reduction",
    effort: "Medium",
    icon: Cloud,
    color: "from-indigo-500 to-blue-500",
    backgroundImage: "/assets/Usecase14.png",
  },
  {
    title: "AI-powered Data Classification",
    category: "Data & Asset Management",
    description: "Intelligent classification and tagging of enterprise data",
    impact: "80% improvement in data organization",
    effort: "Medium",
    icon: Settings,
    color: "from-teal-500 to-green-500",
    backgroundImage: "/assets/Usecase15.png",
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Identify Quick Wins",
    description:
      "Discover immediate AI opportunities that deliver fast results",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Target,
    title: "Long-term Strategic AI Plays",
    description: "Build a scalable pipeline of high-impact AI initiatives",
    color: "from-green-500 to-teal-500",
  },
  {
    icon: Users,
    title: "Cross-functional Collaboration",
    description: "Enable collaboration between business and technical teams",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: BarChart3,
    title: "Align AI with Business Priorities",
    description:
      "Connect AI efforts with core business objectives and digital transformation goals",
    color: "from-orange-500 to-red-500",
  },
];

const process = [
  {
    step: "01",
    title: "Understanding the IT Landscape",
    description: "Analyze core IT functions and identify common pain points",
    icon: Search,
  },
  {
    step: "02",
    title: "Use Case Discovery Framework",
    description:
      "Apply top-down and bottom-up approaches with impact vs. feasibility matrix",
    icon: Target,
  },
  {
    step: "03",
    title: "Opportunity Evaluation",
    description:
      "Assess business impact, technical feasibility, and strategic alignment",
    icon: BarChart3,
  },
  {
    step: "04",
    title: "Roadmap & Next Steps",
    description: "Create structured implementation plan with governance model",
    icon: Workflow,
  },
];

const capabilities = [
  {
    title: "Machine Learning & Predictive Analytics",
    description: "Forecast trends, predict failures, and optimize performance",
    icon: Brain,
    applications: [
      "Predictive maintenance",
      "Capacity planning",
      "Performance optimization",
    ],
    backgroundImage: "/assets/AI-Training.png",
  },
  {
    title: "Natural Language Processing (NLP)",
    description: "Process and understand human language for automation",
    icon: MessageSquare,
    applications: ["Chatbots", "Document analysis", "Knowledge base search"],
    backgroundImage: "/assets/AI-Lifecycle.png",
  },
  {
    title: "Robotic Process Automation (RPA)",
    description: "Automate repetitive tasks and workflows",
    icon: Cog,
    applications: ["Data entry", "Report generation", "System integration"],
    backgroundImage: "/assets/AI-ProcessOptimization.png",
  },
  {
    title: "Generative AI",
    description: "Generate text, code, and content for various IT applications",
    icon: Lightbulb,
    applications: ["Code generation", "Documentation", "Content creation"],
    backgroundImage: "/assets/GenerativeAI.png",
  },
  {
    title: "Anomaly Detection",
    description: "Identify unusual patterns and potential security threats",
    icon: Eye,
    applications: [
      "Security monitoring",
      "Performance monitoring",
      "Quality assurance",
    ],
    backgroundImage: "/assets/AI-Components.gif",
  },
  {
    title: "Intelligent Search & Chatbots",
    description:
      "Provide intelligent information retrieval and conversational interfaces",
    icon: Bot,
    applications: ["IT support", "Knowledge management", "User assistance"],
    backgroundImage: "/assets/AI-Chatbot.gif",
  },
];

const frameworks = [
  {
    title: "Top-Down Approach",
    description: "Align AI initiatives with strategic business goals",
    features: [
      "Cost reduction targets",
      "Faster incident resolution",
      "Digital transformation goals",
    ],
  },
  {
    title: "Bottom-Up Approach",
    description: "Identify opportunities through team collaboration",
    features: [
      "IT team member interviews",
      "Workshop sessions",
      "Pain point analysis",
    ],
  },
  {
    title: "Impact vs. Feasibility Matrix",
    description: "Prioritize opportunities based on value and complexity",
    features: [
      "Business value assessment",
      "Technical readiness",
      "Resource requirements",
    ],
  },
];

const itLandscape = [
  {
    title: "Infrastructure Management",
    description: "Core system administration and hardware management",
    icon: Server,
    painPoints: ["Manual processes", "Resource inefficiencies"],
  },
  {
    title: "IT Operations (ITOps)",
    description: "Day-to-day operational activities and monitoring",
    icon: Monitor,
    painPoints: ["Alert fatigue", "Manual monitoring"],
  },
  {
    title: "Service Desk & Support",
    description: "User support and incident management",
    icon: Bot,
    painPoints: ["High ticket volume", "Repetitive queries"],
  },
  {
    title: "Security & Compliance",
    description: "Information security and regulatory compliance",
    icon: Shield,
    painPoints: ["Complex threat landscape", "Manual compliance checks"],
  },
  {
    title: "DevOps & Application Management",
    description: "Development operations and application lifecycle",
    icon: Code,
    painPoints: ["Deployment risks", "Manual code reviews"],
  },
  {
    title: "Data Management",
    description: "Data governance, storage, and analytics",
    icon: Database,
    painPoints: ["Data silos", "Manual classification"],
  },
];

const toolsPlatforms = [
  {
    category: "AI/ML Toolkits",
    tools: ["Azure ML", "AWS SageMaker", "Google Vertex AI"],
    icon: Brain,
    color: "from-blue-500 to-cyan-500",
  },
  {
    category: "AIOps Platforms",
    tools: ["Dynatrace", "Splunk", "Moogsoft"],
    icon: Monitor,
    color: "from-green-500 to-emerald-500",
  },
  {
    category: "Automation Tools",
    tools: ["UiPath", "ServiceNow", "Ansible", "Terraform"],
    icon: Cog,
    color: "from-purple-500 to-violet-500",
  },
];

const roadmapSteps = [
  {
    step: "01",
    title: "Shortlist Top Opportunities",
    description: "Identify and prioritize the most promising AI use cases",
    icon: Target,
  },
  {
    step: "02",
    title: "Conduct POCs",
    description: "Execute proof of concepts for selected use cases",
    icon: Play,
  },
  {
    step: "03",
    title: "Establish AI Governance",
    description: "Create frameworks for AI implementation and oversight",
    icon: Shield,
  },
  {
    step: "04",
    title: "Build AI Task Force",
    description: "Form cross-functional teams for AI initiative execution",
    icon: Users,
  },
  {
    step: "05",
    title: "Define Success Metrics",
    description: "Establish KPIs and measurement frameworks",
    icon: BarChart3,
  },
];

const evaluationCriteria = [
  {
    title: "Business Impact",
    description: "Cost reduction, speed improvements, quality enhancements",
    icon: TrendingUp,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Technical Feasibility",
    description:
      "Data availability, model complexity, integration requirements",
    icon: Settings,
    color: "from-green-500 to-teal-500",
  },
  {
    title: "Strategic Alignment",
    description:
      "Alignment with digital transformation goals and business strategy",
    icon: Target,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "User Adoption Potential",
    description:
      "Ease of adoption, user acceptance, change management requirements",
    icon: Users,
    color: "from-orange-500 to-red-500",
  },
];

const riskConsiderations = [
  {
    title: "Data Privacy & Security",
    description:
      "Ensure compliance with data protection regulations and security standards",
    icon: Shield,
    color: "from-red-500 to-pink-500",
  },
  {
    title: "Change Management",
    description:
      "Address organizational resistance and manage cultural transformation",
    icon: Users,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Talent & Skill Gaps",
    description: "Identify and address AI expertise and training requirements",
    icon: Brain,
    color: "from-green-500 to-teal-500",
  },
  {
    title: "Integration Complexity",
    description:
      "Manage technical integration challenges and system compatibility",
    icon: Settings,
    color: "from-purple-500 to-violet-500",
  },
];

export default function AIUsecaseDiscovery() {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedUseCase, setSelectedUseCase] = useState(null);

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
            src="/assets/AI-Usecase-banner.png"
            alt="AI Use Case Discovery"
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/assets/ai-usecase-banner.png";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40"></div>
        </div>

        {/* Content */}
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
                AI Use Case Discovery
              </span>
              <br />
              <span className="text-white">& Opportunity Identification</span>
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-4xl"
            >
              Reveal What's Possible. Prioritize What Matters.
            </motion.p>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-gray-300 mb-12 max-w-4xl leading-relaxed"
            >
              In a world increasingly driven by data and intelligent systems,
              knowing where and how to apply Artificial Intelligence is critical
              to gaining a competitive edge. Our AI Use Case Discovery &
              Opportunity Identification service empowers organizations to
              unlock transformational value by pinpointing the most impactful
              areas for AI deployment.
            </motion.p>

            <div className="mb-32">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0066CC]/20 border border-[#0080FF]/30 rounded-full backdrop-blur-sm"
              >
                <Search className="h-5 w-5 text-cyan-400" />
                <span className="text-white font-medium">
                  Strategic AI Discovery & Implementation
                </span>
                <TrendingUp className="h-4 w-4 text-blue-400 fill-current" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
        {/* Animated Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 -left-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute -bottom-40 right-1/3 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Navigation Tabs */}
        <section className="sticky top-20 z-40 bg-black/80 backdrop-blur-lg border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex overflow-x-auto scrollbar-hide">
              {[
                { id: "overview", label: "Overview", icon: FileText },
                { id: "benefits", label: "Benefits", icon: Award },
                { id: "landscape", label: "IT Landscape", icon: Server },
                { id: "usecases", label: "Use Cases", icon: Lightbulb },
                { id: "capabilities", label: "AI Capabilities", icon: Brain },
                { id: "framework", label: "Framework", icon: PieChart },
                { id: "evaluation", label: "Evaluation", icon: BarChart3 },
                { id: "roadmap", label: "Roadmap", icon: Target },
                { id: "tools", label: "Tools & Platforms", icon: Settings },
                { id: "risks", label: "Risks", icon: AlertTriangle },
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
                          description:
                            "Understand where AI can deliver measurable business outcomes",
                          icon: Eye,
                        },
                        {
                          title: "Focus",
                          description:
                            "Prioritize AI opportunities with the highest strategic and financial ROI",
                          icon: Target,
                        },
                        {
                          title: "Action",
                          description:
                            "Receive a structured roadmap to move from ideation to implementation",
                          icon: Zap,
                        },
                      ].map((item, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-start"
                          custom={idx}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, amount: 0.3 }}
                          variants={{
                            hidden: { opacity: 0, x: -20 },
                            visible: (custom) => ({
                              opacity: 1,
                              x: 0,
                              transition: {
                                delay: 0.3 + custom * 0.2,
                                duration: 0.5,
                              },
                            }),
                          }}
                        >
                          <div className="flex-shrink-0 mt-1">
                            <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500">
                              <item.icon className="text-xl text-white" />
                            </div>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-xl font-semibold mb-2 text-white">
                              {item.title}
                            </h4>
                            <p className="text-gray-300">{item.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="relative">
                    {/* AI Use Case Discovery Image */}
                    <div className="mb-8">
                      <img
                        src="/assets/AI-UsecaseDiscovery.png"
                        alt="AI Use Case Discovery Process"
                        className="w-full h-auto object-contain rounded-2xl shadow-2xl"
                        onError={(e) => {
                          console.error(
                            "Failed to load AI Use Case Discovery image",
                          );
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    </div>

                    <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-blue-500/30">
                      <h3 className="text-2xl font-bold mb-6 text-center">
                        Ideal For
                      </h3>
                      <div className="space-y-4">
                        {[
                          "Enterprises exploring AI for the first time",
                          "Organizations with scattered or stalled AI initiatives",
                          "Innovation leaders seeking to align AI with digital transformation goals",
                        ].map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-3"
                          >
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
                  <motion.div
                    variants={itemVariants}
                    className="text-center mb-12"
                  >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      Key Benefits
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
                      Transform your organization with strategic AI
                      implementation
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
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center mb-4`}
                        >
                          <benefit.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-white">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-400">{benefit.description}</p>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    variants={itemVariants}
                    className="mt-12 text-center"
                  >
                    <div className="bg-gradient-to-r from-blue-900/50 to-cyan-900/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-blue-500/30 max-w-4xl mx-auto">
                      <h3 className="text-2xl font-bold mb-4">
                        Strategic Outcomes
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                        {[
                          {
                            label: "Quick Wins",
                            desc: "Identify immediate opportunities",
                          },
                          {
                            label: "Long-term Strategy",
                            desc: "Build scalable AI pipeline",
                          },
                          {
                            label: "Cross-functional",
                            desc: "Enable team collaboration",
                          },
                          {
                            label: "Business Alignment",
                            desc: "Connect AI to core priorities",
                          },
                        ].map((outcome, idx) => (
                          <div key={idx}>
                            <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2">
                              {outcome.label}
                            </div>
                            <div className="text-sm text-gray-400">
                              {outcome.desc}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </section>
          )}

          

          {/* Use Cases Section */}
          {activeTab === "usecases" && (
            <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
              {/* Background Images */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl"></div>
                <div className="absolute top-40 right-20 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl"></div>
                <div className="absolute bottom-20 left-1/4 w-36 h-36 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full blur-2xl"></div>
                <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-2xl"></div>
                {/* Additional geometric patterns */}
                <div className="absolute top-1/3 left-1/3 w-20 h-20 border border-blue-500/10 rounded-lg rotate-45"></div>
                <div className="absolute bottom-1/3 right-1/4 w-24 h-24 border border-purple-500/10 rounded-full"></div>
                <div className="absolute top-1/2 right-1/2 w-16 h-16 bg-cyan-500/5 rounded-full"></div>
              </div>

              <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div
                    variants={itemVariants}
                    className="text-center mb-12"
                  >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      High-Value AI Use Cases in IT
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
                      Explore proven AI applications that deliver measurable
                      business value
                    </p>
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {useCases.map((useCase, idx) => (
                      <motion.div
                        key={idx}
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        className="relative bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 cursor-pointer overflow-hidden"
                        onClick={() =>
                          setSelectedUseCase(
                            selectedUseCase === idx ? null : idx,
                          )
                        }
                      >
                        {/* Background Image */}
                        {useCase.backgroundImage && (
                          <div className="absolute inset-0 opacity-10">
                            <img
                              src={useCase.backgroundImage}
                              alt={useCase.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60"></div>
                          </div>
                        )}

                        {/* Content */}
                        <div className="relative z-10">
                          <div className="flex items-center justify-between mb-4">
                            <div
                              className={`w-12 h-12 bg-gradient-to-r ${useCase.color} rounded-xl flex items-center justify-center`}
                            >
                              <useCase.icon className="w-6 h-6 text-white" />
                            </div>
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-medium ${
                                useCase.effort === "Low"
                                  ? "bg-green-500/20 text-green-400 border border-green-500/30"
                                  : useCase.effort === "Medium"
                                    ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                                    : "bg-red-500/20 text-red-400 border border-red-500/30"
                              }`}
                            >
                              {useCase.effort} Effort
                            </span>
                          </div>

                          <div className="mb-3">
                            <span className="text-sm text-blue-400 font-medium">
                              {useCase.category}
                            </span>
                          </div>

                          <h3 className="text-xl font-semibold mb-3 text-white">
                            {useCase.title}
                          </h3>
                          <p className="text-gray-400 mb-4">
                            {useCase.description}
                          </p>

                          <div className="flex items-center justify-between text-sm">
                            <span className="text-green-400 font-medium">
                              {useCase.impact}
                            </span>
                            <ChevronRight
                              className={`w-4 h-4 text-gray-400 transition-transform ${selectedUseCase === idx ? "rotate-90" : ""}`}
                            />
                          </div>

                          {selectedUseCase === idx && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-4 pt-4 border-t border-gray-700"
                            >
                              <div className="space-y-2 text-sm text-gray-300">
                                <div>
                                  <strong>Implementation:</strong> 2-4 weeks
                                </div>
                                <div>
                                  <strong>ROI Timeline:</strong> 3-6 months
                                </div>
                                <div>
                                  <strong>Key Technologies:</strong> ML,
                                  Predictive Analytics
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </div>
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
                  <motion.div
                    variants={itemVariants}
                    className="text-center mb-12"
                  >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      AI Capabilities Relevant to IT
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
                      Advanced technologies that power intelligent IT operations
                    </p>
                  </motion.div>

                  {/* Embla Carousel - Same as AI Consulting page */}
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
                          <div className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                              {capabilities.slice(0, 3).map((capability, index) => {
                                const IconComponent = capability.icon;

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
                                    <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 h-full hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 overflow-hidden">
                                      {/* Background Image */}
                                      {capability.backgroundImage && (
                                        <div className="absolute inset-0 opacity-10">
                                          <img
                                            src={capability.backgroundImage}
                                            alt={capability.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                          />
                                          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60"></div>
                                        </div>
                                      )}

                                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-bl-2xl"></div>

                                      <div className="relative z-10">
                                        <div className="flex items-start gap-6 mb-6">
                                          <div className="relative">
                                            <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center border border-cyan-400/30 group-hover:border-cyan-400/50 transition-colors">
                                              <IconComponent className="h-10 w-10 text-white" />
                                            </div>
                                          </div>

                                          <div className="flex-1">
                                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                                              {capability.title}
                                            </h3>
                                            <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mb-4"></div>
                                          </div>
                                        </div>

                                        <p className="text-gray-300 leading-relaxed text-lg mb-6">
                                          {capability.description}
                                        </p>

                                        <div>
                                          <h4 className="text-lg font-medium text-white mb-3">
                                            Applications:
                                          </h4>
                                          <div className="space-y-2">
                                            {capability.applications.map((app, appIdx) => (
                                              <div
                                                key={appIdx}
                                                className="flex items-center space-x-3"
                                              >
                                                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                                                <span className="text-gray-300">{app}</span>
                                              </div>
                                            ))}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </motion.div>
                                );
                              })}
                            </div>
                          </div>
                        </CarouselItem>

                        {/* Second slide - items 3,4,5 */}
                        <CarouselItem className="pl-2 md:pl-4">
                          <div className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                              {capabilities.slice(3, 6).map((capability, index) => {
                                const IconComponent = capability.icon;

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
                                    <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 h-full hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 overflow-hidden">
                                      {/* Background Image */}
                                      {capability.backgroundImage && (
                                        <div className="absolute inset-0 opacity-10">
                                          <img
                                            src={capability.backgroundImage}
                                            alt={capability.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                          />
                                          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60"></div>
                                        </div>
                                      )}

                                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-bl-2xl"></div>

                                      <div className="relative z-10">
                                        <div className="flex items-start gap-6 mb-6">
                                          <div className="relative">
                                            <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center border border-cyan-400/30 group-hover:border-cyan-400/50 transition-colors">
                                              <IconComponent className="h-10 w-10 text-white" />
                                            </div>
                                          </div>

                                          <div className="flex-1">
                                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                                              {capability.title}
                                            </h3>
                                            <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mb-4"></div>
                                          </div>
                                        </div>

                                        <p className="text-gray-300 leading-relaxed text-lg mb-6">
                                          {capability.description}
                                        </p>

                                        <div>
                                          <h4 className="text-lg font-medium text-white mb-3">
                                            Applications:
                                          </h4>
                                          <div className="space-y-2">
                                            {capability.applications.map((app, appIdx) => (
                                              <div
                                                key={appIdx}
                                                className="flex items-center space-x-3"
                                              >
                                                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                                                <span className="text-gray-300">{app}</span>
                                              </div>
                                            ))}
                                          </div>
                                        </div>
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
                  <motion.div
                    variants={itemVariants}
                    className="text-center mb-12"
                  >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      Use Case Discovery Framework
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
                      Structured methodologies for identifying and evaluating AI
                      opportunities
                    </p>
                  </motion.div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {frameworks.map((framework, idx) => (
                      <motion.div
                        key={idx}
                        variants={itemVariants}
                        className="bg-white/5 backdrop-blur-lg rounded-xl p-6 sm:p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                      >
                        <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-white">
                          {framework.title}
                        </h3>
                        <p className="text-gray-400 mb-6">
                          {framework.description}
                        </p>

                        <div className="space-y-3">
                          {framework.features.map((feature, featureIdx) => (
                            <div
                              key={featureIdx}
                              className="flex items-center space-x-3"
                            >
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
                      <h3 className="text-2xl font-bold mb-6 text-center">
                        Executive Summary
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center border border-blue-500/30 mx-auto mb-4">
                            <Target className="w-8 h-8 text-blue-400" />
                          </div>
                          <h4 className="text-lg font-semibold mb-2">
                            Purpose
                          </h4>
                          <p className="text-gray-400 text-sm">
                            Outline the goal of discovering high-impact AI
                            opportunities within IT
                          </p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-xl flex items-center justify-center border border-green-500/30 mx-auto mb-4">
                            <TrendingUp className="w-8 h-8 text-green-400" />
                          </div>
                          <h4 className="text-lg font-semibold mb-2">
                            Importance
                          </h4>
                          <p className="text-gray-400 text-sm">
                            Highlight strategic benefits—efficiency, cost
                            savings, innovation
                          </p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center border border-purple-500/30 mx-auto mb-4">
                            <Award className="w-8 h-8 text-purple-400" />
                          </div>
                          <h4 className="text-lg font-semibold mb-2">
                            Outcome
                          </h4>
                          <p className="text-gray-400 text-sm">
                            Define expected deliverables (e.g., AI use case
                            shortlist, value matrix, roadmap)
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </section>
          )}

          {/* IT Landscape Section */}
          {activeTab === "landscape" && (
            <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div
                    variants={itemVariants}
                    className="text-center mb-12"
                  >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      Understanding the IT Landscape
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
                      Core IT functions and their common pain points that AI can
                      address
                    </p>
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {itLandscape.map((area, idx) => (
                      <motion.div
                        key={idx}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                      >
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center border border-blue-500/30 mr-4">
                            <area.icon className="w-6 h-6 text-blue-400" />
                          </div>
                          <h3 className="text-xl font-semibold text-white">
                            {area.title}
                          </h3>
                        </div>
                        <p className="text-gray-400 mb-4">{area.description}</p>
                        <div className="space-y-2">
                          <h4 className="text-sm font-medium text-gray-300">
                            Common Pain Points:
                          </h4>
                          {area.painPoints.map((point, pointIdx) => (
                            <div
                              key={pointIdx}
                              className="flex items-center space-x-2"
                            >
                              <div className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0"></div>
                              <span className="text-sm text-gray-400">
                                {point}
                              </span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </section>
          )}

          {/* Evaluation Criteria Section */}
          {activeTab === "evaluation" && (
            <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div
                    variants={itemVariants}
                    className="text-center mb-12"
                  >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      Opportunity Evaluation Criteria
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
                      Key factors for assessing and prioritizing AI use cases
                    </p>
                  </motion.div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {evaluationCriteria.map((criteria, idx) => (
                      <motion.div
                        key={idx}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                      >
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${criteria.color} rounded-xl flex items-center justify-center mb-4`}
                        >
                          <criteria.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-white">
                          {criteria.title}
                        </h3>
                        <p className="text-gray-400">{criteria.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </section>
          )}

          {/* Roadmap Section */}
          {activeTab === "roadmap" && (
            <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div
                    variants={itemVariants}
                    className="text-center mb-12"
                  >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      Roadmap & Next Steps
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
                      Strategic implementation path for AI initiatives
                    </p>
                  </motion.div>

                  {/* Custom Roadmap Component matching the new screenshot */}
                  <motion.div variants={itemVariants} className="mb-12">
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                      <div className="relative max-w-6xl mx-auto">
                        {/* Vertical dotted lines */}
                        <div className="absolute left-1/4 top-0 bottom-0 w-px border-l-2 border-dotted border-gray-500/50"></div>
                        <div className="absolute right-1/4 top-0 bottom-0 w-px border-l-2 border-dotted border-gray-500/50"></div>

                        {/* Q1 - CONCEPT */}
                        <div className="relative mb-16">
                          <div className="flex items-center justify-between">
                            <div className="w-1/4 text-center">
                              <div className="w-20 h-20 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full flex items-center justify-center mb-4 mx-auto">
                                <Lightbulb className="w-10 h-10 text-white" />
                              </div>
                              <div className="bg-indigo-500 text-white px-4 py-2 rounded font-semibold">
                                Q1
                              </div>
                              <div className="mt-4 text-left">
                                <h3 className="text-lg font-semibold text-indigo-300 mb-2">
                                  IDEATION:
                                </h3>
                                <p className="text-sm text-gray-300 mb-2">
                                  <strong>Use case ideation:</strong>
                                  <br />
                                  Stakeholder interviews, workshops, pain point
                                  analysis
                                </p>
                                <p className="text-sm text-gray-300 mb-2">
                                  <strong>Competitor research</strong>
                                </p>
                                <p className="text-sm text-gray-300">
                                  <strong>Market sounding</strong>
                                </p>
                              </div>
                            </div>

                            <div className="w-1/4 text-center">
                              <div className="bg-blue-600 text-white px-4 py-2 rounded font-semibold">
                                Q2
                              </div>
                              <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mb-4 mx-auto mt-4">
                                <Target className="w-10 h-10 text-white" />
                              </div>
                            </div>

                            <div className="w-1/4 text-center">
                              <div className="bg-teal-600 text-white px-4 py-2 rounded font-semibold">
                                Q3
                              </div>
                              <div className="w-20 h-20 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full flex items-center justify-center mb-4 mx-auto mt-4">
                                <Settings className="w-10 h-10 text-white" />
                              </div>
                            </div>

                            <div className="w-1/4 text-center">
                              <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center mb-4 mx-auto">
                                <TrendingUp className="w-10 h-10 text-white" />
                              </div>
                              <div className="bg-cyan-600 text-white px-4 py-2 rounded font-semibold">
                                Q4
                              </div>
                              <div className="mt-4 text-left">
                                <h3 className="text-lg font-semibold text-cyan-300 mb-2">
                                  TESTING:
                                </h3>
                                <p className="text-sm text-gray-300 mb-2">
                                  <strong>
                                    Concept production and testing:
                                  </strong>
                                  <br />
                                  Test performance, scalability, functionality
                                </p>
                                <p className="text-sm text-gray-300">
                                  <strong>Market analysis:</strong>
                                  <br />
                                  ROI validation, success metrics, campaign
                                  planning
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Top descriptions */}
                          <div className="absolute -top-32 left-0 right-0 flex justify-between">
                            <div className="w-1/4 text-center">
                              <h3 className="text-lg font-semibold text-indigo-300 mb-2">
                                CONCEPT:
                              </h3>
                              <p className="text-sm text-gray-300 mb-2">
                                <strong>Use case ideation continued</strong>
                              </p>
                              <p className="text-sm text-gray-300 mb-2">
                                <strong>Use case concept:</strong>
                                <br />
                                Feasibility? Business value? Target
                                implementation?
                              </p>
                              <p className="text-sm text-gray-300">
                                <strong>
                                  AI implementation strategy concepts,
                                  technology development
                                </strong>
                              </p>
                            </div>

                            <div className="w-1/4"></div>

                            <div className="w-1/4 text-center">
                              <h3 className="text-lg font-semibold text-teal-300 mb-2">
                                RELEASE:
                              </h3>
                              <p className="text-sm text-gray-300 mb-2">
                                <strong>Pilot testing continued:</strong>
                                <br />
                                Reiterate, optimize, finalize
                              </p>
                              <p className="text-sm text-gray-300">
                                <strong>End of Q4:</strong>
                                <br />
                                Full deployment, release strategy, prepare for
                                scaling
                              </p>
                            </div>

                            <div className="w-1/4"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Detailed Steps */}
                  <div className="relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
                      {roadmapSteps.map((step, idx) => (
                        <motion.div
                          key={idx}
                          variants={itemVariants}
                          className="relative"
                        >
                          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 h-full">
                            <div className="flex flex-col items-center text-center">
                              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                                {step.step}
                              </div>
                              <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center border border-blue-500/30 mb-4">
                                <step.icon className="w-6 h-6 text-blue-400" />
                              </div>
                              <h3 className="text-lg font-semibold mb-3 text-white">
                                {step.title}
                              </h3>
                              <p className="text-gray-400 text-sm leading-relaxed">
                                {step.description}
                              </p>
                            </div>
                          </div>
                          {idx < roadmapSteps.length - 1 && (
                            <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                              <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                                <ArrowRight className="w-4 h-4 text-white" />
                              </div>
                            </div>
                          )}
                        </motion.div>
                      ))}
                    </div>

                    {/* Connection Line for Large Screens */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-blue-500/30 -translate-y-1/2 -z-10"></div>
                  </div>
                </motion.div>
              </div>
            </section>
          )}

          {/* Tools & Platforms Section */}
          {activeTab === "tools" && (
            <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div
                    variants={itemVariants}
                    className="text-center mb-12"
                  >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      Tools & Platforms
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
                      Essential platforms and tools for AI implementation
                    </p>
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {toolsPlatforms.map((platform, idx) => (
                      <motion.div
                        key={idx}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                      >
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${platform.color} rounded-xl flex items-center justify-center mb-4`}
                        >
                          <platform.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4 text-white">
                          {platform.category}
                        </h3>
                        <div className="space-y-2">
                          {platform.tools.map((tool, toolIdx) => (
                            <div
                              key={toolIdx}
                              className="flex items-center space-x-3"
                            >
                              <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                              <span className="text-gray-300">{tool}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </section>
          )}

          {/* Risks & Considerations Section */}
          {activeTab === "risks" && (
            <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div
                    variants={itemVariants}
                    className="text-center mb-12"
                  >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      Risks & Considerations
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
                      Key challenges and mitigation strategies for AI
                      implementation
                    </p>
                  </motion.div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {riskConsiderations.map((risk, idx) => (
                      <motion.div
                        key={idx}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-red-500/50 transition-all duration-300"
                      >
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${risk.color} rounded-xl flex items-center justify-center mb-4`}
                        >
                          <risk.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-white">
                          {risk.title}
                        </h3>
                        <p className="text-gray-400">{risk.description}</p>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div variants={itemVariants} className="mt-12">
                    <div className="bg-gradient-to-r from-red-900/50 to-orange-900/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-red-500/30">
                      <h3 className="text-2xl font-bold mb-6 text-center">
                        Conclusion & Call to Action
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div>
                          <h4 className="text-lg font-semibold mb-2 text-white">
                            Strategic Value
                          </h4>
                          <p className="text-gray-400 text-sm">
                            Recap the strategic value of AI in IT operations and
                            business transformation
                          </p>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold mb-2 text-white">
                            Proactive Exploration
                          </h4>
                          <p className="text-gray-400 text-sm">
                            Encourage organizations to actively explore AI
                            opportunities
                          </p>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold mb-2 text-white">
                            Cross-Departmental Collaboration
                          </h4>
                          <p className="text-gray-400 text-sm">
                            Recommend building bridges between business and
                            technical teams
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </section>
          )}
        </div>

        {/* Enhanced CTA Section */}
        <section className="py-16 relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10" />
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
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
              {/* Top Badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="inline-flex items-center gap-2 px-6 py-3 mb-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-full backdrop-blur-sm"
              >
                <Target className="h-5 w-5 text-cyan-400" />
                <span className="text-white font-medium">
                  Strategic AI Discovery & Implementation
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
                  Ready to Discover Your
                </span>
                <br />
                <span className="text-white">AI Opportunities?</span>
              </motion.h2>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
              >
                Let's identify the AI initiatives that will drive the most value
                for your organization and transform your business operations
                with strategic AI implementation.
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
                    Strategic AI Discovery
                  </span>
                </div>
                <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                  <CheckCircle className="h-6 w-6 text-white bg-primary rounded-full p-1" />
                  <span className="text-white font-semibold">
                    Implementation Roadmap
                  </span>
                </div>
                <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                  <CheckCircle className="h-6 w-6 text-white bg-primary rounded-full p-1" />
                  <span className="text-white font-semibold">
                    Measurable ROI
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
                  className="group bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-10 py-6 text-lg font-semibold shadow-2xl shadow-blue-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
                >
                  <Users className="mr-2 h-5 w-5" />
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
