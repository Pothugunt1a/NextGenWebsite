import { motion } from "framer-motion";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
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
  CheckCircle,
  Target,
  Lightbulb,
  Brain,
  TrendingUp,
  Users,
  Shield,
  Settings,
  Database,
  Zap,
  Star,
  Sparkles,
  Search,
  BarChart3,
  MapPin,
  Clock,
  Award,
  ArrowRight,
  Wrench,
  AlertTriangle,
  Activity,
  Code,
  FileText,
  Cog,
  Eye,
  ChevronDown,
  ChevronUp,
  Building2,
  Globe,
  Network,
  Cpu,
  HardDrive,
  Server,
  MonitorSpeaker,
  Lock,
  GitBranch,
  Workflow,
  MessageSquare,
  BookOpen,
  PieChart,
  Gauge,
  Filter,
  Radar,
  Flag,
  Rocket,
  CheckCircle2,
  Headphones,
} from "lucide-react";

export default function AIUsecaseDiscovery() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Key Benefits Data
  const keyBenefits = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Identify Quick Wins",
      description: "Discover immediate opportunities for AI implementation with high ROI and low complexity",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Strategic Alignment",
      description: "Align AI initiatives with core business priorities and digital transformation goals",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Scalable Pipeline",
      description: "Build a comprehensive pipeline of high-impact AI initiatives for sustained growth",
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Cross-Functional Collaboration",
      description: "Enable seamless collaboration between business and technical teams",
      color: "from-orange-500 to-red-500",
    },
  ];

  // Service Deliverables
  const serviceDeliverables = [
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Clarity",
      description: "Understand where AI can deliver measurable business outcomes",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Focus",
      description: "Prioritize AI opportunities with the highest strategic and financial ROI",
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Action",
      description: "Receive a structured roadmap to move from ideation to implementation",
    },
  ];

  // AI Capabilities
  const aiCapabilities = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Machine Learning & Predictive Analytics",
      description: "Advanced algorithms for forecasting and pattern recognition",
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Natural Language Processing (NLP)",
      description: "Text analysis, sentiment detection, and language understanding",
    },
    {
      icon: <Workflow className="h-6 w-6" />,
      title: "Robotic Process Automation (RPA)",
      description: "Automated workflows and intelligent process optimization",
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Generative AI",
      description: "Text and code generation for enhanced productivity",
    },
    {
      icon: <Radar className="h-6 w-6" />,
      title: "Anomaly Detection",
      description: "Intelligent identification of unusual patterns and behaviors",
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "Intelligent Search & Chatbots",
      description: "Smart information retrieval and conversational interfaces",
    },
  ];

  // Use Case Categories
  const useCaseCategories = [
    {
      id: "it-operations",
      name: "IT Operations & Monitoring",
      icon: <Server className="h-6 w-6" />,
      color: "from-blue-500 to-cyan-500",
      useCases: [
        "Predictive Maintenance of Servers",
        "Intelligent Alert Correlation & Root Cause Analysis",
        "AIOps for Incident Pattern Recognition",
        "Automated Performance Optimization",
      ],
    },
    {
      id: "service-management",
      name: "Service Management",
      icon: <Headphones className="h-6 w-6" />,
      color: "from-green-500 to-emerald-500",
      useCases: [
        "AI Chatbots for Tier 1 Support",
        "Automated Ticket Triage & Routing",
        "NLP-based Knowledge Base Search",
        "Intelligent Service Request Processing",
      ],
    },
    {
      id: "security-compliance",
      name: "Security & Compliance",
      icon: <Shield className="h-6 w-6" />,
      color: "from-purple-500 to-violet-500",
      useCases: [
        "AI-driven Threat Detection",
        "Intelligent Log Analysis for Anomaly Detection",
        "Compliance Document Parsing",
        "Automated Security Incident Response",
      ],
    },
    {
      id: "devops-automation",
      name: "DevOps & Automation",
      icon: <GitBranch className="h-6 w-6" />,
      color: "from-orange-500 to-red-500",
      useCases: [
        "Code Review with AI Assistants",
        "Predictive Deployment Risk Scoring",
        "CI/CD Pipeline Optimization",
        "Automated Testing and Quality Assurance",
      ],
    },
    {
      id: "data-asset-management",
      name: "Data & Asset Management",
      icon: <Database className="h-6 w-6" />,
      color: "from-indigo-500 to-purple-500",
      useCases: [
        "Asset Discovery using AI",
        "Smart Capacity Planning",
        "AI-powered Data Classification",
        "Intelligent Data Governance",
      ],
    },
  ];

  const [selectedUseCase, setSelectedUseCase] = useState(useCaseCategories[0]);

  // Evaluation Criteria
  const evaluationCriteria = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Business Impact",
      description: "Evaluate cost reduction, speed improvements, and quality enhancements",
      metrics: ["Cost Savings", "Time Reduction", "Quality Improvement", "Revenue Growth"],
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Technical Feasibility",
      description: "Assess data availability, model complexity, and implementation readiness",
      metrics: ["Data Quality", "Model Complexity", "Infrastructure Requirements", "Integration Effort"],
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Strategic Alignment",
      description: "Alignment with digital transformation goals and business objectives",
      metrics: ["Goal Alignment", "Priority Level", "Resource Availability", "Timeline Fit"],
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "User Adoption Potential",
      description: "Likelihood of successful user adoption and change management",
      metrics: ["User Readiness", "Change Impact", "Training Requirements", "Support Needs"],
    },
  ];

  // Tools & Platforms
  const toolsPlatforms = [
    {
      category: "AI/ML Toolkits",
      tools: ["Azure ML", "AWS SageMaker", "Google Vertex AI", "IBM Watson"],
      icon: <Brain className="h-6 w-6" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      category: "AIOps Platforms",
      tools: ["Dynatrace", "Splunk", "Moogsoft", "BigPanda"],
      icon: <Activity className="h-6 w-6" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      category: "Automation Tools",
      tools: ["UiPath", "ServiceNow", "Ansible", "Terraform"],
      icon: <Workflow className="h-6 w-6" />,
      color: "from-purple-500 to-violet-500",
    },
  ];

  // Roadmap Steps
  const roadmapSteps = [
    {
      step: "01",
      title: "Shortlist Top Opportunities",
      description: "Identify and prioritize the most promising AI use cases",
      icon: <Filter className="h-6 w-6" />,
    },
    {
      step: "02",
      title: "Conduct POCs",
      description: "Execute proof of concepts for selected use cases",
      icon: <Code className="h-6 w-6" />,
    },
    {
      step: "03",
      title: "Establish AI Governance",
      description: "Create frameworks for AI implementation and oversight",
      icon: <Shield className="h-6 w-6" />,
    },
    {
      step: "04",
      title: "Build AI Task Force",
      description: "Form cross-functional teams for AI initiative execution",
      icon: <Users className="h-6 w-6" />,
    },
    {
      step: "05",
      title: "Define Success Metrics",
      description: "Establish KPIs and measurement frameworks",
      icon: <BarChart3 className="h-6 w-6" />,
    },
  ];

  // FAQs
  const faqs = [
    {
      question: "What is AI Use Case Discovery?",
      answer: "AI Use Case Discovery is a systematic process of identifying, evaluating, and prioritizing opportunities where artificial intelligence can deliver measurable business value. It involves analyzing your current operations, pain points, and strategic objectives to pinpoint the most impactful areas for AI deployment.",
    },
    {
      question: "How long does the discovery process take?",
      answer: "The discovery process typically takes 4-8 weeks, depending on the organization's size and complexity. This includes stakeholder interviews, data assessment, use case identification, feasibility analysis, and roadmap development.",
    },
    {
      question: "What deliverables do we receive?",
      answer: "You'll receive a comprehensive report including prioritized use case recommendations, feasibility assessments, ROI projections, implementation roadmap, risk analysis, and detailed next steps for moving forward with selected initiatives.",
    },
    {
      question: "Do you work with specific industries?",
      answer: "We work across all industries, with particular expertise in technology, healthcare, financial services, manufacturing, retail, and telecommunications. Our methodology is adaptable to any sector's unique requirements and challenges.",
    },
    {
      question: "What's the typical ROI for AI initiatives?",
      answer: "ROI varies significantly based on the use case and implementation approach. Our clients typically see 15-30% efficiency improvements and 10-25% cost reductions within the first year of deployment. We provide detailed ROI projections for each recommended use case.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-light text-white"
    >
      {/* Hero Section */}
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
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
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
                className="text-xl md:text-2xl text-white mb-8 leading-relaxed max-w-3xl"
              >
                In a world increasingly driven by data and intelligent systems, knowing where and how to apply Artificial Intelligence is critical to gaining a competitive edge. Our AI Use Case Discovery & Opportunity Identification service empowers organizations to unlock transformational value by pinpointing the most impactful areas for AI deployment.
              </motion.p>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-6 justify-start items-center"
              >
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-10 py-6 text-lg font-bold shadow-2xl shadow-blue-500/25 hover:shadow-cyan-500/40 transition-all duration-300 border-0"
                  onClick={() => window.location.href = '/contact'}
                >
                  <Search className="mr-3 h-6 w-6" />
                  Start Discovery Process
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-10 py-6 text-lg font-semibold"
                >
                  <FileText className="mr-3 h-6 w-6" />
                  Download Framework
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Service Deliverables */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What This Service Delivers
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceDeliverables.map((deliverable, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 h-full">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full w-fit">
                      {deliverable.icon}
                    </div>
                    <CardTitle className="text-xl text-white">{deliverable.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-center">{deliverable.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-gradient-to-b from-gray-900/50 to-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Key Benefits
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 h-full hover:border-blue-500/50 transition-all duration-300 group-hover:scale-105">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${benefit.color} mb-4`}>
                    <div className="text-white">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ideal For
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Building2 className="h-12 w-12" />,
                title: "Enterprises Exploring AI",
                description: "Organizations taking their first steps into AI implementation",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: <Target className="h-12 w-12" />,
                title: "Scattered AI Initiatives",
                description: "Companies with multiple AI projects that need strategic alignment",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: <Rocket className="h-12 w-12" />,
                title: "Innovation Leaders",
                description: "Forward-thinking leaders aligning AI with digital transformation",
                color: "from-purple-500 to-violet-500",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`inline-flex p-6 rounded-full bg-gradient-to-r ${item.color} mb-6`}>
                  <div className="text-white">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-16 bg-gradient-to-b from-gray-900/50 to-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Capabilities Relevant to IT
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg">
                        {capability.icon}
                      </div>
                      <CardTitle className="text-lg text-white">{capability.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{capability.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* High-Value AI Use Cases */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              High-Value AI Use Cases in IT
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Navigation */}
            <div className="lg:col-span-4">
              <div className="grid grid-cols-1 gap-4">
                {useCaseCategories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedUseCase.id === category.id ? "default" : "outline"}
                    className={`text-left justify-start p-4 h-auto min-h-[60px] transition-all duration-300 ${
                      selectedUseCase.id === category.id
                        ? `bg-gradient-to-r ${category.color} text-white border-none shadow-lg`
                        : "bg-slate-800/50 border-slate-600 text-white hover:bg-slate-700/70 hover:border-blue-400/40"
                    }`}
                    onClick={() => setSelectedUseCase(category)}
                  >
                    <div className="flex items-center gap-3">
                      {category.icon}
                      <span className="font-semibold text-sm leading-tight">
                        {category.name}
                      </span>
                    </div>
                  </Button>
                ))}
              </div>
            </div>

            {/* Content Display */}
            <div className="lg:col-span-8">
              <motion.div
                key={selectedUseCase.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${selectedUseCase.color}`}>
                    {selectedUseCase.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{selectedUseCase.name}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedUseCase.useCases.map((useCase, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-white/5 rounded-lg backdrop-blur-sm"
                    >
                      <CheckCircle className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300">{useCase}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Evaluation Criteria */}
      <section className="py-16 bg-gradient-to-b from-gray-900/50 to-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Opportunity Evaluation Criteria
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {evaluationCriteria.map((criteria, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg">
                        {criteria.icon}
                      </div>
                      <CardTitle className="text-xl text-white">{criteria.title}</CardTitle>
                    </div>
                    <CardDescription className="text-gray-300 mt-2">
                      {criteria.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      {criteria.metrics.map((metric, metricIndex) => (
                        <div
                          key={metricIndex}
                          className="flex items-center gap-2 p-2 bg-white/5 rounded-lg"
                        >
                          <CheckCircle2 className="h-4 w-4 text-green-400" />
                          <span className="text-sm text-gray-300">{metric}</span>
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

      {/* Tools & Platforms */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tools & Platforms
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {toolsPlatforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 h-full">
                  <CardHeader className="text-center">
                    <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${platform.color} mb-4`}>
                      {platform.icon}
                    </div>
                    <CardTitle className="text-xl text-white">{platform.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {platform.tools.map((tool, toolIndex) => (
                        <div
                          key={toolIndex}
                          className="flex items-center gap-2 p-2 bg-white/5 rounded-lg"
                        >
                          <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                          <span className="text-gray-300">{tool}</span>
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

      {/* Roadmap */}
      <section className="py-16 bg-gradient-to-b from-gray-900/50 to-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Roadmap & Next Steps
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {roadmapSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="text-center">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-lg">{step.step}</span>
                    </div>
                    {index < roadmapSteps.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-16 w-full h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                    )}
                  </div>
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-lg p-4 h-full">
                    <div className="p-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg w-fit mx-auto mb-3">
                      {step.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-300 text-sm">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-lg px-6 data-[state=open]:border-blue-500/50"
                  >
                    <AccordionTrigger className="text-left text-white hover:text-blue-400 transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-16 relative overflow-hidden">
        {/* Background Effects */}
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
            {/* Top Badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 px-6 py-3 mb-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-full backdrop-blur-sm"
            >
              <Search className="h-5 w-5 text-cyan-400" />
              <span className="text-white font-medium">
                AI Discovery Experts
              </span>
              <Star className="h-4 w-4 text-blue-400 fill-current" />
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
              Join forward-thinking organizations who trust RT NextGenAI to identify and prioritize their most valuable AI opportunities. Our experts are ready to help you unlock transformational value through strategic AI deployment.
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
                  Strategic Assessment
                </span>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <CheckCircle className="h-6 w-6 text-white bg-primary rounded-full p-1" />
                <span className="text-white font-semibold">
                  ROI-Focused Roadmap
                </span>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <CheckCircle className="h-6 w-6 text-white bg-primary rounded-full p-1" />
                <span className="text-white font-semibold">
                  Implementation Support
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
                onClick={() => window.location.href = '/contact'}
              >
                <Search className="mr-2 h-5 w-5" />
                Begin AI Discovery
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}