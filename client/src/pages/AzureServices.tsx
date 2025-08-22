
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Cloud,
  Shield,
  Zap,
  Database,
  Globe,
  Server,
  Lock,
  Cpu,
  BarChart3,
  Settings,
  ArrowRight,
  CheckCircle,
  Award,
  Layers,
  Network,
  Monitor,
  HardDrive,
  Workflow,
  Brain,
  Target,
  Users,
  TrendingUp,
  Building,
  Factory,
  GraduationCap,
  Star,
  Clock,
  Sparkles,
  ShoppingCart,
} from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

// Stats for hero section
const stats = [
  {
    icon: <Shield className="h-8 w-8" />,
    title: "99.9%",
    subtitle: "Uptime SLA",
    description: "Service reliability",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "45%",
    subtitle: "Cost Reduction",
    description: "Average savings",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "70%",
    subtitle: "Faster Deployment",
    description: "Accelerated delivery",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "300+",
    subtitle: "Azure Projects",
    description: "Successful implementations",
    color: "from-orange-500 to-red-500",
  },
];

const whyChooseUsItems = [
  {
    icon: <Award className="h-10 w-10" />,
    title: "Microsoft Certified Partners",
    description:
      "Our team consists of Microsoft Azure Solutions Architects, Cloud Engineers, and DevOps specialists with proven expertise in enterprise Azure implementations.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Layers className="h-10 w-10" />,
    title: "End-to-End Azure Solutions",
    description:
      "From migration planning and hybrid cloud setup to AI integration and analytics. We provide comprehensive Azure services throughout your cloud journey.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <Brain className="h-10 w-10" />,
    title: "AI & Analytics Focus",
    description:
      "Leverage Azure AI services, Machine Learning, and Power BI to drive intelligent insights and automation-first approaches for competitive advantage.",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: <TrendingUp className="h-10 w-10" />,
    title: "Enterprise & Scalable",
    description:
      "Robust Azure solutions that scale from small businesses to large enterprises while maintaining optimal performance, security, and cost efficiency.",
    color: "from-orange-500 to-red-500",
  },
];

const faqs: FAQ[] = [
  {
    question: "Why choose Azure over other cloud platforms?",
    answer:
      "Azure offers seamless integration with Microsoft ecosystem, hybrid cloud capabilities, and advanced AI services. With NextGenAI as your Azure partner, you get access to enterprise-grade solutions combined with our expertise in cloud migration and optimization.",
  },
  {
    question: "How do you ensure security and compliance on Azure?",
    answer:
      "We implement Azure Security Center, Azure Active Directory, and Azure Sentinel for comprehensive security. Our solutions meet compliance requirements including GDPR, HIPAA, SOC 2, and ISO 27001 standards.",
  },
  {
    question: "Can you help migrate our existing infrastructure to Azure?",
    answer:
      "Yes, we provide comprehensive migration services using Azure Migrate tools. We handle lift-and-shift migrations, application modernization with Azure App Service, and container orchestration with AKS, ensuring minimal downtime.",
  },
  {
    question: "What AI and analytics services do you specialize in on Azure?",
    answer:
      "We specialize in Azure Machine Learning, Cognitive Services, Power BI, Azure Synapse Analytics, and Azure Bot Service for comprehensive AI and data analytics solutions.",
  },
  {
    question: "How do you help with cost optimization on Azure?",
    answer:
      "We implement Azure Cost Management, use Reserved Instances strategically, leverage Azure Hybrid Benefit, and continuously monitor usage patterns to optimize costs while maintaining performance.",
  },
];

// Azure Core Services
const azureOfferings = [
  {
    icon: Cloud,
    title: "Compute Services",
    description:
      "Azure Virtual Machines for scalable computing, Azure Functions for serverless, Azure Kubernetes Service (AKS) for container orchestration, and Azure App Service for web applications.",
    features: [
      "Application migration and modernization",
      "Legacy system transformation",
      "Serverless architecture implementation",
      "Container orchestration with AKS",
    ],
    backgroundImage: "/assets/cloud_1752856032189.gif",
  },
  {
    icon: Database,
    title: "Data & Storage",
    description:
      "Azure SQL Database, Cosmos DB for NoSQL, Azure Storage for scalable storage, and Azure Data Lake for big data analytics and processing.",
    features: [
      "Database migration and optimization",
      "Data warehouse implementation",
      "Real-time analytics setup",
      "Backup and disaster recovery",
    ],
    backgroundImage: "/assets/cloud2_1752856022708.gif",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Azure Machine Learning for model development, Cognitive Services for AI APIs, Azure Bot Service for chatbots, and Power BI for business intelligence.",
    features: [
      "Custom ML model development",
      "Computer vision and NLP solutions",
      "Intelligent automation",
      "Predictive analytics platforms",
    ],
    backgroundImage: "/assets/AI-ML.png",
  },
  {
    icon: BarChart3,
    title: "Analytics & BI",
    description:
      "Transform your data into actionable insights with Azure Synapse Analytics, Power BI, and Azure Data Factory for comprehensive business intelligence.",
    features: [
      "Data pipeline automation",
      "Interactive dashboards",
      "Real-time reporting",
      "Advanced analytics",
    ],
    backgroundImage: "/assets/cloud3_1752856017147.gif",
  },
  {
    icon: Shield,
    title: "Security & Identity",
    description:
      "Comprehensive security with Azure Active Directory, Azure Security Center, Azure Sentinel, and Azure Key Vault for enterprise-grade protection.",
    features: [
      "Identity and access management",
      "Threat detection and response",
      "Security monitoring",
      "Compliance management",
    ],
    backgroundImage: "/assets/cloud 5_1752856047806.gif",
  },
  {
    icon: Settings,
    title: "DevOps & Integration",
    description:
      "Streamline development with Azure DevOps, Azure Pipelines, Logic Apps for integration, and Azure Resource Manager for infrastructure as code.",
    features: [
      "CI/CD pipeline setup",
      "Infrastructure automation",
      "Application integration",
      "Monitoring and alerting",
    ],
    backgroundImage: "/assets/cloud 5_1752856047806.gif",
  },
];

// Industries We Serve
const industryData = [
  {
    id: "healthcare",
    name: "Healthcare",
    image: "/assets/Healthcare.png",
    content:
      "Transform healthcare delivery with HIPAA-compliant Azure architectures, AI-powered diagnostics, and secure patient data management. Our solutions include telemedicine platforms, electronic health records, and advanced analytics that improve patient outcomes while ensuring regulatory compliance and data security.",
  },
  {
    id: "finance",
    name: "Financial Services",
    image: "/assets/Finance.png",
    content:
      "Secure your financial operations with Azure solutions designed for fraud detection, real-time transaction processing, and regulatory compliance. We build scalable data solutions, implement advanced security measures, and develop analytics platforms that help financial institutions make informed decisions.",
  },
  {
    id: "retail",
    name: "Retail & eCommerce",
    image: "/assets/Ecommerce.png",
    content:
      "Enhance customer experiences with personalization engines, customer analytics, and scalable e-commerce platforms. Our Azure solutions include recommendation systems, inventory management, real-time analytics, and omnichannel platforms that drive sales and improve customer satisfaction.",
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    image: "/assets/Manufacturing.png",
    content:
      "Optimize manufacturing processes with IoT analytics, predictive maintenance, and supply chain optimization. Our Azure solutions help manufacturers reduce downtime, improve quality control, streamline operations, and implement Industry 4.0 technologies for competitive advantage.",
  },
  {
    id: "education",
    name: "Education",
    image: "/assets/Education.png",
    content:
      "Scale educational content delivery with AI tutors, learning analytics, and personalized learning experiences. Our Azure solutions include content management systems, virtual classrooms, assessment platforms, and analytics tools that enhance learning outcomes and operational efficiency.",
  },
  {
    id: "government",
    name: "Government & Public Sector",
    image: "/assets/Media.png",
    content:
      "Enable digital transformation in government with secure, compliant Azure solutions. Our offerings include citizen services platforms, data analytics for policy decisions, secure collaboration tools, and hybrid cloud solutions that meet strict security and compliance requirements.",
  },
];

export default function AzureServices() {
  const [selectedIndustryData, setSelectedIndustryData] = useState(
    industryData[0],
  );

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

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
        {/* Background for Azure page */}
        <div className="absolute inset-0">
          <img
            src="/assets/CloudComputing-banner.png"
            alt="Azure Cloud Solutions"
            className="w-full h-full object-cover object-center"
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
              <span className="bg-gradient-to-r from-white via-blue-100 to-[#0078D4] bg-clip-text text-transparent">
                Microsoft Azure Solutions
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl"
            >
              Unlock the power of Microsoft Azure with NextGenAI. We deliver
              comprehensive cloud solutions that integrate seamlessly with your
              Microsoft ecosystem, driving digital transformation and business
              growth.
            </motion.p>

            {/* Badge below description */}
            <div className="mb-32">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0078D4]/20 border border-[#0078D4]/30 rounded-full backdrop-blur-sm"
              >
                <CheckCircle className="h-5 w-5 text-cyan-400 fill-none" />
                <span className="text-white font-medium">
                  Microsoft Certified Azure Partner
                </span>
                <Award className="h-4 w-4 text-blue-400 fill-current" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="absolute bottom-8 left-0 right-0">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center md:justify-start">
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl w-full"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group relative"
                  >
                    <div className="relative p-4 md:p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden text-center">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                      />

                      <div className="relative z-10">
                        <div className="flex justify-center mb-3 md:mb-4">
                          <div
                            className={`inline-flex p-2 md:p-3 rounded-xl bg-gradient-to-br ${stat.color}`}
                          >
                            <div className="text-white">{stat.icon}</div>
                          </div>
                        </div>
                        <div className="text-2xl md:text-3xl font-bold mb-1 md:mb-2 text-white">
                          {stat.title}
                        </div>
                        <div className="text-xs md:text-sm font-semibold text-gray-300 mb-1">
                          {stat.subtitle}
                        </div>
                        <div className="text-xs text-gray-400">
                          {stat.description}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Azure Offerings */}
      <div className="py-20 bg-light relative overflow-hidden">
        {/* Background Pattern */}
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
              Our Azure Offerings
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive Microsoft Azure solutions designed to accelerate
              your digital transformation and business growth
            </p>
          </motion.div>

          {/* Azure Offerings Layout */}
          <div className="max-w-8xl mx-auto relative">
            {/* Top Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {azureOfferings.slice(0, 2).map((offering, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="group cursor-pointer h-full"
                >
                  <div className="flex items-center gap-6 p-6 bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-blue-500/50 hover:bg-gray-800/80 transition-all duration-500 group-hover:translate-x-2 h-full">
                    <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                      <img
                        src={offering.backgroundImage}
                        alt={offering.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/90"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <offering.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {offering.title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {offering.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Middle Row - Central Image with Items 3 & 4 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Left Side - Central Image */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, type: "spring" }}
                className="relative group"
              >
                <div className="relative min-h-96 w-full bg-gradient-to-br from-blue-600 to-cyan-600 rounded-[3rem] overflow-hidden shadow-2xl group-hover:shadow-blue-500/30 transition-all duration-700">
                  <div className="relative w-full">
                    <img
                      src="/assets/cloud_1752856032189.gif"
                      alt="Azure Cloud Solutions"
                      className="w-full h-auto object-contain group-hover:scale-105 transition-all duration-700"
                    />
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute top-8 right-8 flex flex-col gap-4">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                      <Cloud className="h-8 w-8 text-white" />
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                      AZ
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="mb-4">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                        <span className="text-blue-200 text-sm font-medium">
                          Azure Cloud Hub
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-3 leading-tight">
                        Enterprise Cloud Solutions
                      </h3>
                      <p className="text-blue-100 leading-relaxed mb-6">
                        Advanced Azure solutions that transform, scale, and
                        secure your business operations with Microsoft's
                        enterprise-grade cloud platform.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Side - Items 3 & 4 */}
              <div className="flex flex-col gap-6">
                {azureOfferings.slice(2, 4).map((offering, index) => (
                  <motion.div
                    key={index + 2}
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="group cursor-pointer h-full"
                  >
                    <div className="flex items-center gap-6 p-6 bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-blue-500/50 hover:bg-gray-800/80 transition-all duration-500 group-hover:translate-x-2 h-full">
                      <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                        <img
                          src={offering.backgroundImage}
                          alt={offering.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/90"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <offering.icon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                            {String(index + 3).padStart(2, "0")}
                          </div>
                        </div>
                        <h4 className="text-lg font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                          {offering.title}
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {offering.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {azureOfferings.slice(4).map((offering, index) => (
                <motion.div
                  key={index + 4}
                  initial={{ opacity: 0, x: index === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="group cursor-pointer h-full"
                >
                  <div className="flex items-center gap-6 p-6 bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-blue-500/50 hover:bg-gray-800/80 transition-all duration-500 group-hover:translate-x-2 h-full">
                    <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                      <img
                        src={offering.backgroundImage}
                        alt={offering.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/90"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <offering.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          {String(index + 5).padStart(2, "0")}
                        </div>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {offering.title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {offering.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Industries We Serve Section */}
      <section className="py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                How Our Azure Solutions Help Different Industries
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
                        selectedIndustryData.id === industry.id
                          ? "default"
                          : "outline"
                      }
                      className={`text-center justify-center p-4 h-auto min-h-[60px] transition-all duration-300 ${
                        selectedIndustryData.id === industry.id
                          ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-none shadow-lg"
                          : "bg-slate-800/50 border-slate-600 text-white hover:bg-slate-700/70 hover:border-blue-400/40 hover:text-white"
                      }`}
                      onClick={() => {
                        setSelectedIndustryData(industry);
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
                  key={selectedIndustryData.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-cyan-400/20 rounded-xl overflow-hidden"
                >
                  {/* Industry Image */}
                  <div className="relative h-64 overflow-hidden group cursor-pointer">
                    <img
                      src={selectedIndustryData.image}
                      alt={selectedIndustryData.name}
                      className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent group-hover:from-gray-900/60 transition-all duration-300"></div>
                    <div className="absolute bottom-4 left-6">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {selectedIndustryData.name}
                      </h3>
                    </div>
                  </div>

                  {/* Industry Content */}
                  <div className="p-6">
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {selectedIndustryData.content}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Azure with NextGenAI? Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Azure with NextGenAI?
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Microsoft Azure offers comprehensive cloud services with seamless
              Microsoft ecosystem integration. With NextGenAI as your Azure
              partner, you gain access to enterprise-grade solutions that
              combine cloud efficiency with cutting-edge technologies.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {whyChooseUsItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group"
              >
                <div className="h-full bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">{item.icon}</div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 text-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300">
                Get answers to common questions about our Azure services and
                expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Side - Azure Image */}
              <div className="lg:col-span-5">
                <div className="relative">
                  <img
                    src="./assets/CloudComputing-banner.png"
                    alt="Azure Cloud Technology"
                    className="w-full h-[500px] object-cover rounded-2xl"
                  />
                </div>
              </div>

              {/* Right Side - FAQ Content */}
              <div className="lg:col-span-7">
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl border border-gray-700 overflow-hidden backdrop-blur-sm"
                    >
                      <AccordionTrigger className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-700/30 transition-colors">
                        <h3 className="text-lg font-semibold text-white pr-4">
                          {faq.question}
                        </h3>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-6">
                        <p className="text-gray-400 leading-relaxed">
                          {faq.answer}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
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
              <Globe className="h-5 w-5 text-cyan-400" />
              <span className="text-white font-medium">
                Trusted Microsoft Azure Partner
              </span>
              <Award className="h-4 w-4 text-blue-400 fill-current" />
            </motion.div>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-white via-blue-100 to-[#0078D4] bg-clip-text text-transparent">
                Transform Your
              </span>
              <br />
              <span className="text-white">Business with Azure</span>
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Whether you're modernizing your infrastructure or building
              next-generation applications, NextGenAI is your trusted Azure
              partner. Let's build the future together.
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
                  Free Azure Assessment
                </span>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <CheckCircle className="h-6 w-6 text-white bg-primary rounded-full p-1" />
                <span className="text-white font-semibold">
                  Microsoft Certified
                </span>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <CheckCircle className="h-6 w-6 text-white bg-primary rounded-full p-1" />
                <span className="text-white font-semibold">24/7 Support</span>
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
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
