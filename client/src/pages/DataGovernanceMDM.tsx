import { useState } from "react";
import { motion } from "framer-motion";
import {
  Database,
  Cloud,
  Shield,
  Lock,
  Eye,
  Settings,
  Zap,
  Target,
  Users,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Award,
  Globe,
  Brain,
  Activity,
  FileText,
  Building,
  Heart,
  ShoppingCart,
  Factory,
  Calendar,
  Phone,
  AlertTriangle,
  ShieldCheck,
  X,
  ChevronDown,
  ChevronUp,
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

const capabilities = [
  {
    icon: <Shield className="h-8 w-8 text-white" />,
    title: "Data Governance Frameworks",
    description: "Comprehensive policy creation, RBAC, IAM implementation, and metadata lineage tracking for compliance and audit readiness with automated monitoring.",
    technologies: ["Policies", "RBAC", "IAM", "Data Lineage"],
    backgroundImage: "/assets/Data-Governance.png",
  },
  {
    icon: <Database className="h-8 w-8 text-white" />,
    title: "Master Data Management (MDM)",
    description: "Customer 360, Product 360, and Supplier 360 solutions with golden record creation and real-time synchronization across enterprise systems.",
    technologies: ["Customer 360", "Product 360", "Golden Records", "Entity Resolution"],
    backgroundImage: "/assets/AI&Data.png",
  },
  {
    icon: <Eye className="h-8 w-8 text-white" />,
    title: "Data Catalog & Metadata",
    description: "Automated data discovery, classification, and business glossaries using Collibra, Informatica, and Databricks Unity Catalog.",
    technologies: ["Collibra", "Informatica", "Unity Catalog", "Data Discovery"],
    backgroundImage: "/assets/AI-DataStratergy-banner.png",
  },
  {
    icon: <Lock className="h-8 w-8 text-white" />,
    title: "Security & Compliance",
    description: "Enterprise encryption, data masking, tokenization, and regulatory compliance for HIPAA, GDPR, SOC2, and PCI-DSS requirements.",
    technologies: ["IAM", "Encryption", "HIPAA", "GDPR"],
    backgroundImage: "/assets/AI-Training.png",
  },
  {
    icon: <Globe className="h-8 w-8 text-white" />,
    title: "Cloud & Hybrid Governance",
    description: "Unified governance across AWS, Azure, GCP using Lake Formation, Azure Purview, and Google Data Catalog with cross-cloud lineage.",
    technologies: ["AWS Lake Formation", "Azure Purview", "GCP Data Catalog", "Multi-cloud"],
    backgroundImage: "/assets/GenerativeAI.png",
  },
  {
    icon: <Activity className="h-8 w-8 text-white" />,
    title: "Data Quality & Monitoring",
    description: "Real-time data profiling, cleansing, validation rules, and continuous quality monitoring with exception handling and alerts.",
    technologies: ["Data Profiling", "Quality Rules", "Monitoring", "Alerting"],
    backgroundImage: "/assets/AI-Vision.png",
  },
];

const industryUseCases = [
  {
    icon: <Heart className="h-8 w-8 text-white" />,
    title: "Healthcare",
    description: "HIPAA compliance, unified EMR systems, patient data governance, and secure health information management.",
    image: "/assets/Healthcare.png",
  },
  {
    icon: <Building className="h-8 w-8 text-white" />,
    title: "Finance",
    description: "Golden records for KYC/AML, fraud prevention, regulatory compliance, and secure financial data governance.",
    image: "/assets/Finance.png",
  },
  {
    icon: <ShoppingCart className="h-8 w-8 text-white" />,
    title: "Retail",
    description: "GDPR-ready customer 360, product catalog standardization, and omnichannel data governance.",
    image: "/assets/Ecommerce.png",
  },
  {
    icon: <Factory className="h-8 w-8 text-white" />,
    title: "Manufacturing",
    description: "Supplier master data management, product information governance, and supply chain data quality.",
    image: "/assets/Manufacturing.png",
  },
  {
    icon: <FileText className="h-8 w-8 text-white" />,
    title: "Government",
    description: "Citizen record management, secure data sharing, and open data governance initiatives.",
    image: "/assets/Finance.png",
  },
];

const whyChooseUs = [
  {
    icon: <Globe className="h-6 w-6 text-white" />,
    title: "Multi-platform Expertise",
    description: "Certified specialists across Collibra, Informatica, AWS, Azure, GCP, and specialized governance platforms.",
  },
  {
    icon: <Zap className="h-6 w-6 text-white" />,
    title: "End-to-end Solutions",
    description: "Complete governance lifecycle from policy creation and MDM to compliance monitoring and audit readiness.",
  },
  {
    icon: <Shield className="h-6 w-6 text-white" />,
    title: "Regulatory Compliance",
    description: "Proven compliance frameworks for HIPAA, GDPR, SOC2, PCI-DSS, and industry-specific regulations.",
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-white" />,
    title: "Enterprise Scale",
    description: "Proven implementations at enterprise scale with comprehensive data governance across all business domains.",
  },
  {
    icon: <Brain className="h-6 w-6 text-white" />,
    title: "AI/ML Ready Governance",
    description: "Data governance frameworks optimized for AI/ML initiatives with bias detection and model governance.",
  },
];

const successStories = [
  {
    industry: "Healthcare",
    metric: "100% HIPAA compliance",
    description: "Implemented comprehensive data governance framework ensuring patient data security and regulatory compliance across multiple EMR systems.",
    technology: "Collibra + AWS",
  },
  {
    industry: "Finance",
    metric: "90% faster KYC processing",
    description: "Built unified customer master data management system enabling real-time KYC/AML compliance and fraud detection.",
    technology: "Informatica MDM",
  },
  {
    industry: "Retail",
    metric: "85% data quality improvement",
    description: "Deployed Customer 360 solution with automated data quality monitoring and GDPR-compliant privacy controls.",
    technology: "Azure Purview + MDM",
  },
];

const techStack = [
  { name: "Collibra", logo: "/assets/logos/collibra.png" },
  { name: "Informatica", logo: "/assets/logos/informatica.png" },
  { name: "AWS Lake Formation", logo: "/assets/logos/aws.png" },
  { name: "Azure Purview", logo: "/assets/logos/azure.png" },
  { name: "Unity Catalog", logo: "/assets/logos/databricks.png" },
  { name: "Alation", logo: "/assets/logos/alation.png" },
  { name: "Talend", logo: "/assets/logos/talend.png" },
  { name: "Apache Atlas", logo: "/assets/logos/atlas.png" },
  { name: "GCP Data Catalog", logo: "/assets/logos/gcp.png" },
];

// FAQ data
const faqs = [
  {
    question: "What is the difference between Data Governance and Master Data Management?",
    answer: "Data Governance is the overall framework of policies, procedures, and controls for managing data assets across the organization. Master Data Management (MDM) is a specific discipline within data governance that focuses on creating and maintaining a single, authoritative source of truth for critical business entities like customers, products, and suppliers."
  },
  {
    question: "How long does it take to implement a data governance program?",
    answer: "Implementation timelines vary based on organizational complexity and scope. A basic framework can be established in 3-6 months, while comprehensive enterprise-wide programs typically take 12-18 months. We provide phased approaches to deliver value incrementally throughout the implementation process."
  },
  {
    question: "Which compliance regulations do you help organizations meet?",
    answer: "We have extensive experience helping organizations comply with HIPAA, GDPR, SOC2, PCI-DSS, CCPA, and industry-specific regulations. Our governance frameworks are designed to be audit-ready and include automated compliance monitoring and reporting capabilities."
  },
  {
    question: "What technologies do you use for data governance and MDM?",
    answer: "We work with leading platforms including Collibra, Informatica, Alation, Talend, Apache Atlas, Databricks Unity Catalog for governance, and Informatica MDM, SAP Master Data Governance, Reltio, and Semarchy for MDM. We also leverage cloud-native tools like AWS Lake Formation and Azure Purview."
  },
  {
    question: "How do you ensure data quality in MDM implementations?",
    answer: "We implement comprehensive data quality frameworks including automated profiling, cleansing, standardization, and validation rules. Our solutions include real-time monitoring, exception handling, and continuous improvement processes to maintain high data quality standards across all master data domains."
  }
];

export default function DataGovernanceMDM() {
  const [activeTab, setActiveTab] = useState("governance");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/assets/DataGovernance-banner.png"
            alt="Data Governance & MDM"
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
                Data Governance Excellence
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl"
            >
              Enterprise-grade data governance and master data management for accuracy, compliance, and business trust through intelligent automation and data-driven insights
            </motion.p>

            {/* Badge below description */}
            <div className="mb-32">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0066CC]/20 border border-[#0080FF]/30 rounded-full backdrop-blur-sm"
              >
                <Shield className="h-5 w-5 text-cyan-400" />
                <span className="text-white font-medium">
                  Industry-Leading Data Governance Solutions
                </span>
                <Award className="h-4 w-4 text-blue-400 fill-current" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Data Governance & MDM Matter Section */}
      <section className="py-20 bg-light relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-8">
              Understanding Data Governance & MDM
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Risks vs Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-red-500/20 to-red-400/20 backdrop-blur-sm border border-red-400/30 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 flex items-center">
                    <AlertTriangle className="h-6 w-6 text-red-400 mr-3" />
                    Risks Without Governance
                  </h3>
                  <div className="space-y-2">
                    {[
                      "Wrong decisions from poor data quality",
                      "Compliance violations (HIPAA, GDPR)",
                      "Data silos preventing insights",
                      "Higher costs from duplication",
                    ].map((risk, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <X className="h-4 w-4 text-red-400" />
                        <span className="text-gray-300 text-sm">{risk}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-500/20 to-emerald-400/20 backdrop-blur-sm border border-green-400/30 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 flex items-center">
                    <ShieldCheck className="h-6 w-6 text-green-400 mr-3" />
                    Benefits with Governance
                  </h3>
                  <div className="space-y-2">
                    {[
                      "Trusted decisions from quality data",
                      "Audit-ready compliance",
                      "Single source of truth",
                      "Improved efficiency",
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Interactive Comparison */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Tab Navigation */}
              <div className="flex bg-gray-800/60 rounded-xl p-2 backdrop-blur-sm border border-gray-700">
                {[
                  { id: "governance", label: "Enterprise Apps (Data Source)", icon: Shield },
                  { id: "mdm", label: "Data & Feature Governance Layer", icon: Database },
                  { id: "compliance", label: "Consumption & Responsible AI Audit", icon: Lock },
                ].map((tab) => {
                  const IconComponent = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg transition-all duration-300 ${
                        activeTab === tab.id
                          ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                          : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                      }`}
                    >
                      <IconComponent className="h-4 w-4" />
                      <span className="font-medium">{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Tab Content */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-8"
              >
                {activeTab === "governance" && (
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-blue-400">Data Governance</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-green-400 font-semibold mb-2">✓ Best For:</p>
                        <ul className="text-gray-300 space-y-1 text-sm">
                          <li>• Policy management</li>
                          <li>• Access controls</li>
                          <li>• Data lineage</li>
                          <li>• Compliance audits</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-orange-400 font-semibold mb-2">⚠ Challenges:</p>
                        <ul className="text-gray-300 space-y-1 text-sm">
                          <li>• Cultural adoption</li>
                          <li>• Process changes</li>
                          <li>• Tool integration</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "mdm" && (
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-blue-400">Master Data Management</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-green-400 font-semibold mb-2">✓ Best For:</p>
                        <ul className="text-gray-300 space-y-1 text-sm">
                          <li>• Customer 360</li>
                          <li>• Product catalogs</li>
                          <li>• Golden records</li>
                          <li>• Data synchronization</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-orange-400 font-semibold mb-2">⚠ Challenges:</p>
                        <ul className="text-gray-300 space-y-1 text-sm">
                          <li>• Data quality issues</li>
                          <li>• System integration</li>
                          <li>• Business rules</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "compliance" && (
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-blue-400">Compliance & Security</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-green-400 font-semibold mb-2">✓ Best For:</p>
                        <ul className="text-gray-300 space-y-1 text-sm">
                          <li>• HIPAA/GDPR compliance</li>
                          <li>• Data encryption</li>
                          <li>• Access monitoring</li>
                          <li>• Audit trails</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-blue-400 font-semibold mb-2">🚀 Benefits:</p>
                        <ul className="text-gray-300 space-y-1 text-sm">
                          <li>• Risk reduction</li>
                          <li>• Trust building</li>
                          <li>• Regulatory readiness</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Capabilities Section */}
      <section className="py-20 bg-light relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6 text-white">
              Our Capabilities
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive data governance and MDM solutions covering the entire data lifecycle
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 h-full hover:border-blue-500/50 hover:bg-gray-800/90 transition-all duration-500 group-hover:scale-105">
                  <div className="relative w-16 h-16 mb-6 rounded-xl overflow-hidden">
                    <img
                      src={capability.backgroundImage}
                      alt={capability.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      {capability.icon}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {capability.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-6">
                    {capability.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {capability.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium border border-blue-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance Architecture for the AI Era Section */}
      <section className="py-20 bg-gradient-to-b from-light via-gray-900/50 to-light relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 rounded-full backdrop-blur-sm mb-6"
            >
              <Brain className="h-5 w-5 text-cyan-400" />
              <span className="text-blue-300 font-medium">AI-First Governance</span>
              <Shield className="h-5 w-5 text-blue-400" />
            </motion.div>

            <h2 className="text-5xl font-bold mb-6 text-white">
              Governance Architecture for the AI Era
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 mx-auto mb-8 animate-pulse"></div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transform your diverse data assets into reliable, trustworthy inputs for your most critical AI initiatives.
              <span className="text-cyan-400 font-semibold"> Every prediction, insight, and automated decision is governed, auditable, and compliant.</span>
            </p>
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-400/30 rounded-2xl p-8 max-w-4xl mx-auto mt-8">
              <p className="text-lg text-gray-200 leading-relaxed text-center">
                Below is the framework we implement to transform your diverse data assets into reliable, trustworthy inputs for your most critical AI initiatives.
                This architecture ensures <span className="text-cyan-400 font-semibold">every prediction, insight, and automated decision is governed, auditable, and compliant.</span>
              </p>
            </div>
          </motion.div>

          {/* Main Layout - Content Left, Diagram Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            {/* Left Side - Content */}
            <div className="lg:col-span-7 space-y-8">

              {/* Tabbed Content Navigation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                {/* Tab Navigation */}
                <div className="flex bg-gray-800/60 rounded-xl p-2 backdrop-blur-sm border border-gray-700">
                  {[
                    { id: "governance", label: "Governance", icon: Shield },
                    { id: "mdm", label: "MDM", icon: Database },
                    { id: "compliance", label: "Compliance", icon: Lock },
                  ].map((tab) => {
                    const IconComponent = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg transition-all duration-300 ${
                          activeTab === tab.id
                            ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                            : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                        }`}
                      >
                        <IconComponent className="h-4 w-4" />
                        <span className="font-medium">{tab.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Simplified Content */}
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-8"
                >
                  {activeTab === "governance" && (
                    <div className="space-y-4">
                      <h5 className="text-lg font-bold text-white mb-4">1. Enterprise Apps (Data Source)</h5>
                      <p className="text-gray-300 text-sm mb-4">
                        The journey of trustworthy data begins by unifying all sources across your organization. Our approach acknowledges that governance must be uniform, regardless of the system of origin.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gray-800/40 rounded-lg p-4 border border-gray-700/50">
                          <h6 className="text-blue-300 font-semibold mb-2 flex items-center gap-2 text-sm">
                            <Building className="h-4 w-4" />
                            ERP, CRM, SaaS
                          </h6>
                          <p className="text-gray-400 text-xs mb-2">AI Governance Focus:</p>
                          <p className="text-gray-300 text-xs">
                            Integrating structured system data with policies for PII (Personally Identifiable Information) and role-based access controls (RBAC) before it ever enters an AI pipeline.
                          </p>
                        </div>

                        <div className="bg-gray-800/40 rounded-lg p-4 border border-gray-700/50">
                          <h6 className="text-cyan-300 font-semibold mb-2 flex items-center gap-2 text-sm">
                            <Activity className="h-4 w-4" />
                            IoT, Legacy, Web
                          </h6>
                          <p className="text-gray-400 text-xs mb-2">AI Governance Focus:</p>
                          <p className="text-gray-300 text-xs">
                            Establishing standards for unstructured (e.g., sensor data, text, images) and legacy data, ensuring data quality and lineage are captured from the very first ingestion point.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "mdm" && (
                    <div className="space-y-4">
                      <h5 className="text-lg font-bold text-white mb-4">2. Data & Feature Governance Layer (The Control Center)</h5>
                      <p className="text-gray-300 text-sm mb-4">
                        This is the core of our solution, where raw data is transformed into standardized, high-quality Features for Machine Learning, enforced by strict governance rules.
                      </p>

                      <div className="space-y-3">
                        {[
                          { 
                            title: "MDM Feature 360", 
                            desc: "Master Data Management is redefined as the engine for Feature Engineering. It creates unified \"Golden Records\" (Customer 360, Product 360) that serve as consistent, non-biased features for all downstream AI models."
                          },
                          { 
                            title: "Feature Store", 
                            desc: "The central repository for validated, versioned, and easily discoverable features. It enforces a single quality standard for training, serving, and testing models, critical for MLOps efficiency."
                          },
                          { 
                            title: "Responsible AI Policies", 
                            desc: "Automated policy layers that govern data usage, ethical sourcing, and model documentation. This layer defines rules for data minimization and consent tracking."
                          },
                          { 
                            title: "AI Bias Detection", 
                            desc: "Proactively running statistical tests on features and model outputs to detect and mitigate algorithmic bias before models are deployed, ensuring fair and equitable outcomes."
                          },
                          { 
                            title: "Model Lineage", 
                            desc: "Provides an unbreakable audit trail, tracking every feature, data transformation, and training parameter used to create a model. Essential for Explainable AI (XAI) and regulatory compliance."
                          }
                        ].map((item, idx) => (
                          <div key={idx} className="bg-gray-800/40 rounded-lg p-4 border border-gray-700/50 hover:border-cyan-400/40 transition-all duration-300">
                            <h6 className="text-white font-semibold text-sm mb-2">{item.title}</h6>
                            <p className="text-gray-300 text-xs leading-relaxed">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === "compliance" && (
                    <div className="space-y-4">
                      <h5 className="text-lg font-bold text-white mb-4">3. Consumption & Responsible AI Audit (The Output & Feedback)</h5>
                      <p className="text-gray-300 text-sm mb-4">
                        The final stage ensures that all outputs—whether a dashboard or an automated decision—are trusted and that a continuous feedback loop maintains compliance.
                      </p>

                      <div className="space-y-3">
                        {[
                          {
                            title: "BI Dashboards & Advanced Analytics",
                            desc: "Consumes trusted, governed data to ensure business intelligence reports are accurate, driving high-confidence strategic decision-making."
                          },
                          {
                            title: "AI/ML Models & Generative AI Endpoints",
                            desc: "The consumption point for final, governed features. This includes production-level machine learning models and secure, enterprise-ready Generative AI applications (e.g., custom LLM endpoints)."
                          },
                          {
                            title: "Compliance & Audit Reports",
                            desc: "Automated generation of reports proving adherence to regulations (GDPR, HIPAA) and internal AI Ethics standards, ready for external auditing."
                          },
                          {
                            title: "Continuous Monitoring & Policy Enforcement",
                            desc: "The crucial step. It actively monitors live model performance (checking for drift and bias post-deployment) and automatically enforces governance policies, feeding insights back into the Data & Feature Governance Layer for iterative improvement."
                          }
                        ].map((item, idx) => (
                          <div key={idx} className="bg-gray-800/40 rounded-lg p-4 border border-gray-700/50">
                            <h6 className="text-white font-semibold text-sm mb-2">{item.title}</h6>
                            <p className="text-gray-300 text-xs leading-relaxed">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            </div>

            {/* Right Side - Architecture Diagram */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 30 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="sticky top-8"
              >
                <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-gray-700 rounded-3xl overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition-all duration-500">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 animate-pulse"></div>
                  <img
                    src="/assets/GovernanceArchitecture.png"
                    alt="Governance Architecture for the AI Era"
                    className="w-full h-auto"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/assets/Data-Governance.png";
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* RTNextGenAI Difference - Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-purple-500/20 backdrop-blur-xl border border-gray-700 rounded-3xl p-10 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 animate-pulse"></div>
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-3xl opacity-20"></div>

              <div className="relative text-center">
                <Award className="h-12 w-12 text-cyan-400 mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-white mb-4">
                  The RT<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">NextGenAI</span> Difference
                </h3>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Our AI Governance architecture doesn't just check a box—it <span className="text-cyan-400 font-semibold">enables speed with safety</span>.
                  By placing the Data & Feature Governance Layer at the heart of your pipeline, we help you
                  <span className="text-blue-400 font-semibold"> launch more accurate, less-risky AI solutions faster than the competition.</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="py-20 bg-light relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              Industry Use Cases
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-world governance applications across multiple industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {industryUseCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 group-hover:scale-105">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={useCase.image}
                      alt={useCase.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                      {useCase.icon}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {useCase.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-light relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              Technology Stack
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Industry-leading governance and MDM platforms we work with
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300 group-hover:scale-105">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{tech.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-white font-medium text-sm">{tech.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose RTNextGenAI */}
      <section className="py-20 bg-light relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              Why Choose RTNextGenAI
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Partner with certified data governance experts for proven enterprise solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {whyChooseUs.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-6 h-full hover:border-blue-500/50 transition-all duration-300 group-hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-light relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              Success Stories
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proven results across industries with measurable impact
            </p>
          </motion.div>

          <Carousel
            className="w-full max-w-5xl mx-auto"
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
                stopOnInteraction: true,
              }),
            ]}
          >
            <CarouselContent>
              {successStories.map((story, index) => (
                <CarouselItem key={index}>
                  <div className="p-6">
                    <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 text-center">
                      <div className="mb-6">
                        <h3 className="text-3xl font-bold text-blue-400 mb-2">{story.metric}</h3>
                        <h4 className="text-xl font-semibold text-white mb-4">{story.industry}</h4>
                      </div>
                      <p className="text-gray-300 leading-relaxed mb-6 max-w-2xl mx-auto">
                        {story.description}
                      </p>
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full">
                        <Award className="h-4 w-4 text-blue-400" />
                        <span className="text-blue-300 text-sm font-medium">{story.technology}</span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-gradient-to-r from-gray-800/90 to-gray-700/90 border border-cyan-400/40 hover:border-cyan-400/70 text-cyan-400 hover:text-white" />
            <CarouselNext className="right-4 bg-gradient-to-r from-gray-800/90 to-gray-700/90 border border-cyan-400/40 hover:border-cyan-400/70 text-cyan-400 hover:text-white" />
          </Carousel>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-light relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              Frequently Asked Questions
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Common questions about our Data Governance & MDM services
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden"
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
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-6 pb-6"
                    >
                      <p className="text-gray-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 relative overflow-hidden">
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
              <Target className="h-5 w-5 text-cyan-400" />
              <span className="text-white font-medium">
                Enterprise Data Governance Solutions
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
                Ready to Secure and Govern
              </span>
              <br />
              <span className="text-white">Your Enterprise Data?</span>
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Partner with RTNextGenAI to implement enterprise-grade data governance and MDM solutions that ensure trust, compliance, and business value from your data assets.
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
                <Calendar className="mr-2 h-5 w-5" />
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-400/50 text-white hover:bg-blue-400/10 px-10 py-6 text-lg font-semibold"
              >
                <Eye className="mr-2 h-5 w-5" />
                Get a Demo
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}