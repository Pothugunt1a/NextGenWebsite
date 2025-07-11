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
} from "lucide-react";

export default function AIUsecaseDiscovery() {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  // Enhanced Service Deliverables with icons and better descriptions
  const serviceDeliverables = [
    {
      icon: <Target className="h-12 w-12 text-blue-400" />,
      title: "AI Strategy Clarity",
      description:
        "Comprehensive AI roadmap with clear implementation priorities and expected outcomes for maximum business impact.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Eye className="h-12 w-12 text-purple-400" />,
      title: "Opportunity Focus",
      description:
        "Detailed analysis of high-value AI use cases with implementation feasibility and ROI projections.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Rocket className="h-12 w-12 text-green-400" />,
      title: "Actionable Insights",
      description:
        "Concrete next steps with resource requirements, timelines, and success metrics for each identified opportunity.",
      color: "from-green-500 to-emerald-500",
    },
  ];

  // Enhanced Benefits with better visual design
  const keyBenefits = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Competitive Advantage",
      description: "Identify unique AI opportunities before competitors",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "ROI Maximization",
      description: "Focus resources on highest-impact AI initiatives",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Risk Mitigation",
      description: "Avoid costly AI implementation mistakes",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Faster Time-to-Value",
      description: "Accelerate AI adoption with clear priorities",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Team Alignment",
      description: "Unite stakeholders around AI vision and goals",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Innovation Culture",
      description: "Foster data-driven decision making across teams",
      color: "from-pink-500 to-rose-500",
    },
  ];

  // Enhanced Use Case Categories with modern design
  const useCaseCategories = [
    {
      id: "operational",
      title: "Operational Excellence",
      icon: <Cog className="h-10 w-10" />,
      color: "from-blue-500 to-cyan-500",
      description: "Streamline processes and boost efficiency",
      useCases: [
        "Predictive Maintenance Systems",
        "Supply Chain Optimization",
        "Quality Control Automation",
        "Resource Allocation Intelligence",
        "Workflow Optimization",
      ],
    },
    {
      id: "customer",
      title: "Customer Experience",
      icon: <Heart className="h-10 w-10" />,
      color: "from-purple-500 to-pink-500",
      description: "Enhance customer satisfaction and engagement",
      useCases: [
        "Personalized Recommendation Engines",
        "Intelligent Chatbots & Virtual Assistants",
        "Customer Sentiment Analysis",
        "Predictive Customer Support",
        "Dynamic Pricing Optimization",
      ],
    },
    {
      id: "analytics",
      title: "Analytics & Insights",
      icon: <BarChart3 className="h-10 w-10" />,
      color: "from-green-500 to-emerald-500",
      description: "Transform data into actionable intelligence",
      useCases: [
        "Real-time Business Intelligence",
        "Predictive Analytics Platforms",
        "Market Trend Analysis",
        "Performance Optimization",
        "Risk Assessment Models",
      ],
    },
    {
      id: "automation",
      title: "Process Automation",
      icon: <Bot className="h-10 w-10" />,
      color: "from-orange-500 to-red-500",
      description: "Automate repetitive tasks and workflows",
      useCases: [
        "Document Processing Automation",
        "Intelligent Data Entry",
        "Automated Compliance Monitoring",
        "Smart Contract Management",
        "Workflow Orchestration",
      ],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(useCaseCategories[0]);

  // Enhanced FAQ with better content
  const faqs = [
    {
      id: "what-is-discovery",
      question: "What exactly is AI Use Case Discovery?",
      answer:
        "AI Use Case Discovery is a systematic process where we analyze your business operations, challenges, and opportunities to identify specific areas where AI can create maximum value. We examine your data, processes, and strategic goals to pinpoint the most impactful AI implementations for your organization.",
    },
    {
      id: "how-long",
      question: "How long does the discovery process take?",
      answer:
        "The timeline varies based on your organization's complexity and scope. Typically, a comprehensive discovery process takes 2-4 weeks, including stakeholder interviews, data assessment, process analysis, and final recommendations. We can also provide expedited assessments for urgent initiatives.",
    },
    {
      id: "what-deliverables",
      question: "What deliverables will we receive?",
      answer:
        "You'll receive a comprehensive AI strategy document including identified use cases, implementation roadmap, ROI projections, resource requirements, risk assessments, and next-step recommendations. We also provide executive summaries and technical specifications tailored to different stakeholder groups.",
    },
    {
      id: "prerequisites",
      question: "What do we need to prepare beforehand?",
      answer:
        "We'll need access to key stakeholders, process documentation, sample data sets, and information about your current technology infrastructure. We provide a detailed preparation checklist once you engage our services to ensure maximum efficiency.",
    },
    {
      id: "cost-structure",
      question: "How is the discovery process priced?",
      answer:
        "Our pricing is based on the scope and complexity of your organization. We offer flexible engagement models including fixed-price packages for standard assessments and custom pricing for enterprise-wide evaluations. Contact us for a personalized quote based on your specific needs.",
    },
  ];

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
                  AI Use Case Discovery & Identification
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
                  Unlock Your AI
                </span>
                <br />
                <span className="text-white">Potential Today</span>
              </motion.h1>

              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-4xl"
              >
                Transform your business with our comprehensive AI Use Case Discovery service. We identify high-impact opportunities, prioritize implementation strategies, and create actionable roadmaps that deliver measurable results.
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
                  Download Guide
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
              What You'll Receive
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive discovery process delivers actionable insights and strategic guidance to accelerate your AI transformation journey.
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
                  <CardContent className="p-8 text-center">
                    <div className="flex justify-center mb-6">
                      <div className={`p-4 rounded-2xl bg-gradient-to-r ${deliverable.color} group-hover:scale-110 transition-transform duration-300`}>
                        {deliverable.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {deliverable.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {deliverable.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Key Benefits */}
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
              Why Choose Our Discovery Process?
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform uncertainty into opportunity with our proven methodology that identifies and prioritizes the most impactful AI use cases for your business.
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
                <div className="h-full bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-gray-700/30 hover:border-purple-400/50 rounded-xl p-6 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/20">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${benefit.color} group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">{benefit.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold text-white ml-4 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {benefit.title}
                    </h3>
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

      {/* Enhanced Use Case Categories */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-40 left-40 w-56 h-56 bg-gradient-to-r from-green-500/15 to-emerald-500/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-40 w-64 h-64 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl"></div>
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
              AI Use Case Categories
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore the diverse range of AI applications across different business functions and discover opportunities tailored to your industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                    selectedCategory.id === category.id
                      ? "scale-105"
                      : "hover:scale-102"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  <div
                    className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                      selectedCategory.id === category.id
                        ? "bg-gradient-to-r from-slate-800/90 to-slate-900/90 border-blue-400/60 shadow-xl shadow-blue-500/20"
                        : "bg-slate-800/60 border-gray-700/50 hover:border-gray-600/70"
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-r ${category.color} ${
                          selectedCategory.id === category.id ? "scale-110" : ""
                        } transition-transform duration-300`}
                      >
                        <div className="text-white">{category.icon}</div>
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
                          selectedCategory.id === category.id ? "rotate-90" : ""
                        }`}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Selected Category Details */}
            <motion.div
              key={selectedCategory.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8"
            >
              <div className="flex items-center mb-6">
                <div className={`p-4 rounded-xl bg-gradient-to-r ${selectedCategory.color}`}>
                  <div className="text-white">{selectedCategory.icon}</div>
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-white">
                    {selectedCategory.title}
                  </h3>
                  <p className="text-gray-300">{selectedCategory.description}</p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Key Use Cases:
                </h4>
                {selectedCategory.useCases.map((useCase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="flex items-center p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-colors duration-200"
                  >
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{useCase}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
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
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get answers to common questions about our AI Use Case Discovery process and how it can benefit your organization.
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
                Transform
              </span>{" "}
              Your Business?
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Join hundreds of companies that have discovered their AI potential with our comprehensive use case identification process.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-12 py-8 text-xl font-bold shadow-2xl shadow-blue-500/25 hover:shadow-cyan-500/40 transition-all duration-300 border-0"
                onClick={() => window.location.href = '/contact'}
              >
                <Mail className="mr-3 h-7 w-7" />
                Get Started Today
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
                  <span className="text-gray-300">Free Initial Consultation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                  <span className="text-gray-300">Custom ROI Analysis</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                  <span className="text-gray-300">Strategic Implementation Plan</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}