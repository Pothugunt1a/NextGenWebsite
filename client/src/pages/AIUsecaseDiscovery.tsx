
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Search,
  Target,
  Users,
  TrendingUp,
  Shield,
  Zap,
  Brain,
  Network,
  Database,
  BarChart3,
  Globe,
  FileText,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Cpu,
  Bot,
  Eye,
  Cog,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Rocket,
  Award,
  Clock,
  ChevronRight,
  Building2,
  Factory,
  Heart,
  DollarSign,
  Briefcase,
  Mail,
  Server,
  AlertTriangle,
  Code,
  Lock,
  Monitor,
  Settings,
  Activity,
  Layers,
  CloudLightning,
  Workflow,
} from "lucide-react";

export default function AIUsecaseDiscovery() {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("operational");

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  // Enhanced Service Deliverables
  const serviceDeliverables = [
    {
      icon: <Target className="h-12 w-12" />,
      title: "Strategic Clarity",
      description:
        "Comprehensive AI roadmap with clear implementation priorities, ROI projections, and measurable business outcomes for maximum strategic impact.",
      color: "from-blue-500 to-cyan-500",
      features: ["Business Alignment", "ROI Analysis", "Strategic Roadmap", "Success Metrics"]
    },
    {
      icon: <Eye className="h-12 w-12" />,
      title: "Opportunity Focus",
      description:
        "Detailed analysis of high-value AI use cases with feasibility assessments, impact matrices, and prioritization frameworks.",
      color: "from-purple-500 to-pink-500",
      features: ["Use Case Identification", "Feasibility Analysis", "Impact Assessment", "Value Matrix"]
    },
    {
      icon: <Rocket className="h-12 w-12" />,
      title: "Implementation Roadmap",
      description:
        "Actionable next steps with resource requirements, timelines, governance models, and cross-functional team structures.",
      color: "from-green-500 to-emerald-500",
      features: ["Action Plan", "Resource Planning", "Timeline Definition", "Team Structure"]
    },
  ];

  // Enhanced IT-Focused Use Case Categories
  const useCaseCategories = [
    {
      id: "operations",
      title: "IT Operations & Monitoring",
      icon: <Server className="h-10 w-10" />,
      color: "from-blue-500 to-cyan-500",
      description: "AI-powered infrastructure and operations management",
      useCases: [
        "Predictive Maintenance of Servers & Infrastructure",
        "Intelligent Alert Correlation & Root Cause Analysis",
        "AIOps for Incident Pattern Recognition",
        "Automated Capacity Planning & Resource Optimization",
        "Performance Anomaly Detection & Prevention",
      ],
      tools: ["Dynatrace", "Splunk", "Moogsoft", "Azure Monitor"],
      benefits: ["Reduced Downtime", "Faster Resolution", "Proactive Monitoring"]
    },
    {
      id: "service",
      title: "Service Management",
      icon: <MessageSquare className="h-10 w-10" />,
      color: "from-purple-500 to-pink-500",
      description: "Intelligent IT service delivery and support",
      useCases: [
        "AI Chatbots for Tier 1 Support Automation",
        "Automated Ticket Triage & Smart Routing",
        "NLP-based Knowledge Base Search & Recommendations",
        "Predictive Issue Resolution & Self-Healing",
        "Customer Sentiment Analysis & Satisfaction Prediction",
      ],
      tools: ["ServiceNow", "Microsoft Bot Framework", "Zendesk"],
      benefits: ["24/7 Support", "Faster Response", "Cost Reduction"]
    },
    {
      id: "security",
      title: "Security & Compliance",
      icon: <Lock className="h-10 w-10" />,
      color: "from-red-500 to-orange-500",
      description: "AI-driven cybersecurity and compliance automation",
      useCases: [
        "AI-driven Threat Detection & Response",
        "Intelligent Log Analysis for Security Anomalies",
        "Automated Compliance Document Processing",
        "Behavioral Analysis for Insider Threat Detection",
        "Vulnerability Assessment & Risk Scoring",
      ],
      tools: ["Splunk Security", "CrowdStrike", "IBM QRadar"],
      benefits: ["Enhanced Security", "Automated Compliance", "Risk Reduction"]
    },
    {
      id: "devops",
      title: "DevOps & Development",
      icon: <Code className="h-10 w-10" />,
      color: "from-green-500 to-emerald-500",
      description: "AI-enhanced development and deployment processes",
      useCases: [
        "AI-Assisted Code Review & Quality Analysis",
        "Predictive Deployment Risk Assessment",
        "CI/CD Pipeline Optimization & Automation",
        "Intelligent Testing & Bug Detection",
        "Code Generation & Documentation Automation",
      ],
      tools: ["GitHub Copilot", "SonarQube", "Jenkins", "Azure DevOps"],
      benefits: ["Faster Development", "Higher Quality", "Reduced Errors"]
    },
    {
      id: "data",
      title: "Data & Asset Management",
      icon: <Database className="h-10 w-10" />,
      color: "from-indigo-500 to-blue-500",
      description: "Intelligent data governance and asset optimization",
      useCases: [
        "Automated Asset Discovery & Classification",
        "Smart Data Governance & Quality Management",
        "AI-powered Data Cataloging & Lineage Tracking",
        "Intelligent Backup & Recovery Optimization",
        "Predictive Storage & Resource Planning",
      ],
      tools: ["Collibra", "Informatica", "Talend", "AWS Glue"],
      benefits: ["Better Data Quality", "Compliance", "Cost Optimization"]
    },
  ];

  // Discovery Framework Steps
  const discoverySteps = [
    {
      step: "01",
      title: "Assessment & Analysis",
      description: "Comprehensive evaluation of current IT landscape, pain points, and strategic objectives",
      icon: <Search className="h-8 w-8" />,
      activities: ["Stakeholder Interviews", "Process Mapping", "Technology Audit", "Gap Analysis"]
    },
    {
      step: "02",
      title: "Opportunity Identification",
      description: "Systematic discovery of AI use cases using top-down and bottom-up approaches",
      icon: <Lightbulb className="h-8 w-8" />,
      activities: ["Use Case Workshops", "Impact Assessment", "Feasibility Analysis", "Value Modeling"]
    },
    {
      step: "03",
      title: "Prioritization & Planning",
      description: "Strategic prioritization using impact vs. feasibility matrix and ROI analysis",
      icon: <Target className="h-8 w-8" />,
      activities: ["Priority Matrix", "ROI Calculation", "Risk Assessment", "Timeline Planning"]
    },
    {
      step: "04",
      title: "Roadmap Development",
      description: "Creation of actionable implementation roadmap with governance and success metrics",
      icon: <Rocket className="h-8 w-8" />,
      activities: ["Roadmap Creation", "Governance Framework", "KPI Definition", "Team Structure"]
    },
  ];

  // Enhanced Key Benefits
  const keyBenefits = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Competitive Advantage",
      description: "Identify unique AI opportunities before competitors and establish market leadership",
      metrics: "15-30% efficiency gains",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "ROI Maximization",
      description: "Focus resources on highest-impact AI initiatives with proven value propositions",
      metrics: "10-25% cost reduction",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Risk Mitigation",
      description: "Avoid costly AI implementation mistakes through systematic evaluation",
      metrics: "50% faster implementation",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Accelerated Adoption",
      description: "Streamline AI adoption with clear priorities and structured approach",
      metrics: "3x faster time-to-value",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Cross-Functional Alignment",
      description: "Unite stakeholders around shared AI vision and strategic objectives",
      metrics: "90% stakeholder buy-in",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Innovation Culture",
      description: "Foster data-driven innovation and continuous improvement mindset",
      metrics: "2x innovation pipeline",
      color: "from-pink-500 to-rose-500",
    },
  ];

  // Enhanced AI Capabilities
  const aiCapabilities = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Machine Learning & Predictive Analytics",
      description: "Advanced algorithms for pattern recognition, forecasting, and decision support",
      applications: ["Predictive Maintenance", "Demand Forecasting", "Risk Assessment"]
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Natural Language Processing",
      description: "Text analysis, sentiment detection, and conversational AI capabilities",
      applications: ["Chatbots", "Document Analysis", "Knowledge Extraction"]
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: "Robotic Process Automation",
      description: "Intelligent automation of repetitive tasks and business processes",
      applications: ["Data Entry", "Report Generation", "Workflow Automation"]
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Generative AI",
      description: "Content creation, code generation, and creative problem-solving",
      applications: ["Code Generation", "Documentation", "Creative Content"]
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Anomaly Detection",
      description: "Intelligent monitoring and early warning systems for critical operations",
      applications: ["Security Monitoring", "Performance Tracking", "Quality Control"]
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "Intelligent Search & Discovery",
      description: "Advanced search capabilities with semantic understanding and context",
      applications: ["Knowledge Management", "Asset Discovery", "Information Retrieval"]
    },
  ];

  // Enhanced FAQ
  const faqs = [
    {
      id: "what-is-discovery",
      question: "What is AI Use Case Discovery and why is it essential?",
      answer:
        "AI Use Case Discovery is a strategic process that systematically identifies, evaluates, and prioritizes AI opportunities within your organization. It's essential because it prevents scattered AI efforts, ensures alignment with business objectives, and maximizes ROI by focusing on high-impact initiatives that deliver measurable outcomes.",
    },
    {
      id: "how-long",
      question: "What's the typical timeline for the discovery process?",
      answer:
        "The discovery process typically takes 4-8 weeks depending on organizational complexity. This includes stakeholder interviews (1-2 weeks), process analysis and data assessment (2-3 weeks), use case identification and evaluation (1-2 weeks), and final roadmap development (1 week). We can accelerate this for urgent initiatives.",
    },
    {
      id: "what-deliverables",
      question: "What specific deliverables will we receive?",
      answer:
        "You'll receive a comprehensive AI strategy document including: prioritized use case recommendations with ROI projections, detailed feasibility assessments, implementation roadmap with timelines, governance framework, success metrics and KPIs, risk analysis, resource requirements, and executive summary for leadership presentation.",
    },
    {
      id: "industry-focus",
      question: "Do you work with specific industries or IT functions?",
      answer:
        "We work across all industries and IT functions, with particular expertise in IT operations, service management, security, DevOps, and data management. Our methodology is adaptable to any sector's unique requirements, whether you're in healthcare, finance, manufacturing, or technology services.",
    },
    {
      id: "roi-expectations",
      question: "What ROI can we expect from AI initiatives?",
      answer:
        "ROI varies by use case and implementation approach. Our clients typically see 15-30% efficiency improvements, 10-25% cost reductions, and 50% faster incident resolution within the first year. We provide detailed ROI projections and success metrics for each recommended use case to ensure measurable outcomes.",
    },
    {
      id: "team-requirements",
      question: "What team involvement is required during discovery?",
      answer:
        "We need access to key stakeholders including IT leadership, operations teams, security personnel, and business users. The process involves workshops, interviews, and collaborative sessions. We provide a detailed preparation checklist and work around your team's schedule to minimize disruption to daily operations.",
    },
  ];

  const selectedCategoryData = useCaseCategories.find(cat => cat.id === selectedCategory) || useCaseCategories[0];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-light text-white"
    >
      {/* Enhanced Hero Section */}
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/AI-Usecase-banner.png"
            alt="AI Use Case Discovery Banner"
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              console.error("Failed to load banner image");
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40"></div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "2s" }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-green-500/30 to-emerald-500/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "4s" }}></div>
        </div>

        <div className="relative flex items-center h-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-left">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="max-w-6xl"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="mb-8"
              >
                <Badge className="mb-6 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-cyan-400 border-cyan-400/30 px-6 py-3 text-lg">
                  <Search className="mr-2 h-5 w-5" />
                  AI Use Case Discovery & Opportunity Identification
                </Badge>
              </motion.div>

              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
                style={{ fontWeight: 700 }}
              >
                <span className="bg-gradient-to-r from-white via-blue-100 to-[#0080FF] bg-clip-text text-transparent">
                  Reveal What's Possible.
                </span>
                <br />
                <span className="text-white">Prioritize What Matters.</span>
              </motion.h1>

              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-4xl"
              >
                In a world increasingly driven by data and intelligent systems, knowing where and how to apply AI is critical to gaining competitive edge. Unlock transformational value by pinpointing the most impactful areas for AI deployment.
              </motion.p>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-6 justify-start items-center"
              >
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-12 py-8 text-xl font-bold shadow-2xl shadow-blue-500/25 hover:shadow-cyan-500/40 transition-all duration-300 border-0"
                  onClick={() => window.location.href = '/contact'}
                >
                  <Search className="mr-3 h-7 w-7" />
                  Start Your Discovery
                  <ArrowRight className="ml-3 h-7 w-7 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-12 py-8 text-xl font-semibold"
                >
                  <FileText className="mr-3 h-7 w-7" />
                  Download Framework
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced Service Deliverables */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              What This Service Delivers
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI strategy with clarity, focus, and actionable insights to transform your organization's potential into measurable outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceDeliverables.map((deliverable, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-gray-700/50 hover:border-blue-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
                  <CardContent className="p-8">
                    <div className="flex justify-center mb-6">
                      <div className={`p-4 rounded-2xl bg-gradient-to-r ${deliverable.color} group-hover:scale-110 transition-transform duration-300 text-white`}>
                        {deliverable.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 text-center">
                      {deliverable.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-6 text-center">
                      {deliverable.description}
                    </p>
                    <div className="space-y-2">
                      {deliverable.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Discovery Framework Steps */}
      <section className="py-20 bg-gradient-to-b from-gray-900/50 to-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our Discovery Framework
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Systematic approach combining top-down strategic alignment with bottom-up opportunity identification for comprehensive AI transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {discoverySteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 h-full hover:border-green-400/50 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {step.step}
                    </div>
                    <div className="p-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg text-green-400">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{step.description}</p>
                  <div className="space-y-1">
                    {step.activities.map((activity, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                        {activity}
                      </div>
                    ))}
                  </div>
                </div>
                {index < discoverySteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-gray-600" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced IT Use Case Categories */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-40 left-40 w-56 h-56 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-40 w-64 h-64 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              High-Value AI Use Cases in IT
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover transformational AI opportunities across critical IT functions with proven ROI and implementation success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Category Selection */}
            <div className="space-y-4">
              {useCaseCategories.map((category) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`cursor-pointer transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "scale-105"
                      : "hover:scale-102"
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <div
                    className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                      selectedCategory === category.id
                        ? "bg-gradient-to-r from-slate-800/90 to-slate-900/90 border-blue-400/60 shadow-xl shadow-blue-500/20"
                        : "bg-slate-800/60 border-gray-700/50 hover:border-gray-600/70"
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-r ${category.color} ${
                          selectedCategory === category.id ? "scale-110" : ""
                        } transition-transform duration-300 text-white`}
                      >
                        {category.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1">
                          {category.title}
                        </h3>
                        <p className="text-gray-300 text-sm">
                          {category.description}
                        </p>
                      </div>
                      <ChevronRight
                        className={`h-6 w-6 text-gray-400 transition-transform duration-300 ${
                          selectedCategory === category.id ? "rotate-90" : ""
                        }`}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Selected Category Details */}
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8"
            >
              <div className="flex items-center mb-6">
                <div className={`p-4 rounded-xl bg-gradient-to-r ${selectedCategoryData.color} text-white`}>
                  {selectedCategoryData.icon}
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-white">
                    {selectedCategoryData.title}
                  </h3>
                  <p className="text-gray-300">{selectedCategoryData.description}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">
                    Key Use Cases:
                  </h4>
                  <div className="space-y-3">
                    {selectedCategoryData.useCases.map((useCase, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                        className="flex items-start p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-colors duration-200"
                      >
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{useCase}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-3">Tools & Platforms:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCategoryData.tools.map((tool, index) => (
                        <Badge key={index} variant="secondary" className="bg-slate-700/50 text-gray-300">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-3">Key Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCategoryData.benefits.map((benefit, index) => (
                        <Badge key={index} variant="outline" className="border-green-400/50 text-green-400">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Capabilities Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900/50 to-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              AI Capabilities Relevant to IT
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced AI technologies that power intelligent IT operations and drive digital transformation across your organization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <div className="h-full bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-gray-700/30 hover:border-purple-400/50 rounded-xl p-6 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/20">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 group-hover:scale-110 transition-transform duration-300 text-white">
                      {capability.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white ml-4 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {capability.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {capability.description}
                  </p>
                  <div className="space-y-1">
                    {capability.applications.map((app, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></div>
                        {app}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Key Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Key Benefits of AI Discovery
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform uncertainty into opportunity with our proven methodology that delivers measurable business outcomes and competitive advantages.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="group"
              >
                <div className="h-full bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-gray-700/30 hover:border-yellow-400/50 rounded-xl p-6 transition-all duration-500 hover:shadow-xl hover:shadow-yellow-500/20">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${benefit.color} group-hover:scale-110 transition-transform duration-300 text-white`}>
                      {benefit.icon}
                    </div>
                    <div className="ml-4 flex-1">
                      <h3 className="text-lg font-bold text-white group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-orange-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {benefit.title}
                      </h3>
                      <div className="text-sm text-yellow-400 font-semibold">{benefit.metrics}</div>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900/50 to-gray-800/50">
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
            <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get answers to common questions about our AI Use Case Discovery process and how it transforms your organization.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gradient-to-r from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-gray-700/30 rounded-xl overflow-hidden hover:border-gray-600/50 transition-all duration-300"
              >
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors duration-200"
                  onClick={() => toggleFAQ(faq.id)}
                >
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openFAQ === faq.id ? (
                      <ChevronUp className="h-5 w-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </button>
                {openFAQ === faq.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20"></div>
          <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Ready to{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Discover
              </span>{" "}
              Your AI Potential?
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Join hundreds of IT leaders who have transformed their operations through strategic AI discovery and implementation.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-12 py-8 text-xl font-bold shadow-2xl shadow-blue-500/25 hover:shadow-cyan-500/40 transition-all duration-300 border-0"
                onClick={() => window.location.href = '/contact'}
              >
                <Mail className="mr-3 h-7 w-7" />
                Start Discovery Process
                <ArrowRight className="ml-3 h-7 w-7 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-12 py-8 text-xl font-semibold"
                onClick={() => window.location.href = '/contact'}
              >
                <MessageSquare className="mr-3 h-7 w-7" />
                Schedule Consultation
              </Button>
            </div>

            <div className="mt-12 p-8 bg-gradient-to-r from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-gray-700/30 rounded-2xl">
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                  <span className="text-gray-300">Free Initial Assessment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                  <span className="text-gray-300">Custom Use Case Analysis</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                  <span className="text-gray-300">Strategic Implementation Roadmap</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
