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
  ChevronDown,
  ChevronUp,
  Smartphone,
  Package,
  GitBranch,
  Eye,
  MessageSquare,
  Search,
  Bot,
  Building,
  ShoppingCart,
  Gamepad2,
  Video,
  Dna,
  Factory,
  GraduationCap,
  Star,
  Clock,
  Sparkles,
  BarChart,
} from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
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

// Stats for hero section
const stats = [
  {
    icon: <Shield className="h-8 w-8" />,
    title: "100%",
    subtitle: "Uptime SLA",
    description: "Service reliability",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "50%",
    subtitle: "Cost Savings",
    description: "Average reduction",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "75%",
    subtitle: "Faster Deployment",
    description: "Accelerated delivery",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "500+",
    subtitle: "Projects Deployed",
    description: "Successful implementations",
    color: "from-orange-500 to-red-500",
  },
];

const whyChooseUsItems = [
  {
    icon: <Award className="h-10 w-10" />,
    title: "Certified AWS Experts",
    description:
      "Our team consists of AWS Solutions Architects, DevOps Engineers, and Data Scientists with proven expertise in architecting enterprise-scale solutions on AWS infrastructure.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Layers className="h-10 w-10" />,
    title: "Full-Cycle Support",
    description:
      "From initial consulting and migration planning to 24/7 monitoring and optimization. We provide comprehensive support throughout your entire AWS journey.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <Brain className="h-10 w-10" />,
    title: "Innovation-Focused",
    description:
      "Leverage cutting-edge AWS services including Generative AI, predictive intelligence, and automation-first approaches to stay ahead of the competition.",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: <TrendingUp className="h-10 w-10" />,
    title: "Agile & Scalable",
    description:
      "Modular deployments that scale from startups to enterprises. Our solutions grow with your business while maintaining optimal performance and cost efficiency.",
    color: "from-orange-500 to-red-500",
  },
];

const faqs: FAQ[] = [
  {
    question: "Why should I choose AWS over other cloud platforms?",
    answer:
      "AWS offers over 200 fully featured services from data centers globally, making it the most comprehensive cloud platform. With NextGenAI as your AWS partner, you get access to industry-leading solutions combined with our expertise in AI, ML, and DevOps.",
  },
  {
    question: "How do you ensure security and compliance on AWS?",
    answer:
      "We implement AWS best practices including IAM, GuardDuty, WAF, and Shield for comprehensive security. Our solutions are designed to meet compliance requirements including HIPAA, GDPR, and SOC 2 standards.",
  },
  {
    question: "Can you help migrate our existing infrastructure to AWS?",
    answer:
      "Yes, we provide comprehensive migration services using AWS Well-Architected Framework. We handle lift-and-shift migrations, application modernization with Lambda, ECS, and EKS, ensuring minimal downtime and optimized performance.",
  },
  {
    question: "What AI and ML services do you specialize in on AWS?",
    answer:
      "We specialize in Amazon SageMaker for model building and deployment, Bedrock for Generative AI, Rekognition for image analysis, Comprehend for NLP, and Lex & Polly for conversational AI and voice synthesis.",
  },
  {
    question: "How do you help with cost optimization on AWS?",
    answer:
      "We implement intelligent scaling, use reserved instances strategically, leverage spot instances for appropriate workloads, and continuously monitor usage patterns to optimize costs while maintaining performance.",
  },
];

// AWS Core Services
const awsCoreServices = [
  {
    icon: <Server className="h-8 w-8 text-white" />,
    title: "Compute Services",
    description:
      "Amazon EC2 for resizable virtual servers, AWS Lambda for serverless computing, EKS for Kubernetes, and ECS for container orchestration.",
    services: ["EC2", "Lambda", "EKS", "ECS", "Batch"],
    backgroundGradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Database className="h-8 w-8 text-white" />,
    title: "Storage & Databases",
    description:
      "Scalable storage with S3, managed databases with RDS and DynamoDB, and high-performance Aurora for mission-critical applications.",
    services: ["S3", "RDS", "DynamoDB", "Aurora", "Glacier"],
    backgroundGradient: "from-purple-500 to-pink-500",
  },
  {
    icon: <Brain className="h-8 w-8 text-white" />,
    title: "AI & Machine Learning",
    description:
      "End-to-end ML services with SageMaker, Generative AI with Bedrock, and ready-to-use AI services for vision, speech, and language.",
    services: ["SageMaker", "Bedrock", "Rekognition", "Lex", "Comprehend"],
    backgroundGradient: "from-green-500 to-emerald-500",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-white" />,
    title: "Data Analytics",
    description:
      "Transform raw data into insights with Redshift data warehousing, Glue ETL automation, Athena querying, and QuickSight visualizations.",
    services: ["Redshift", "Glue", "Athena", "QuickSight", "Kinesis"],
    backgroundGradient: "from-orange-500 to-red-500",
  },
  {
    icon: <Shield className="h-8 w-8 text-white" />,
    title: "Security & Compliance",
    description:
      "Comprehensive security with IAM, GuardDuty threat detection, WAF protection, and compliance frameworks for various industries.",
    services: ["IAM", "GuardDuty", "WAF", "Shield", "CloudTrail"],
    backgroundGradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: <GitBranch className="h-8 w-8 text-white" />,
    title: "DevOps & Automation",
    description:
      "Accelerate development with CodePipeline, Infrastructure as Code with CloudFormation, and comprehensive monitoring with CloudWatch.",
    services: ["CodePipeline", "CloudFormation", "CloudWatch", "CodeDeploy"],
    backgroundGradient: "from-teal-500 to-blue-500",
  },
];

// Industries We Serve
const industries = [
  {
    icon: Building,
    title: "Healthcare",
    description:
      "HIPAA-compliant architectures, AI diagnostics, secure patient data management",
    useCases: [
      "AI Diagnostics",
      "Patient Data Security",
      "Telemedicine Platforms",
    ],
  },
  {
    icon: TrendingUp,
    title: "Finance",
    description:
      "Secure data lakes, fraud detection, real-time transaction processing",
    useCases: ["Fraud Detection", "Risk Analytics", "Regulatory Compliance"],
  },
  {
    icon: ShoppingCart,
    title: "Retail & eCommerce",
    description:
      "Personalization engines, customer analytics, scalable shopping platforms",
    useCases: [
      "Recommendation Engines",
      "Inventory Management",
      "Customer Insights",
    ],
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "IoT analytics, predictive maintenance, supply chain optimization",
    useCases: ["Predictive Maintenance", "Quality Control", "Supply Chain"],
  },
  {
    icon: GraduationCap,
    title: "EdTech",
    description: "Scalable content delivery, AI tutors, learning analytics",
    useCases: ["AI Tutoring", "Content Delivery", "Learning Analytics"],
  },
  {
    icon: Gamepad2,
    title: "Gaming",
    description:
      "Real-time multiplayer, game analytics, content delivery networks",
    useCases: [
      "Multiplayer Infrastructure",
      "Game Analytics",
      "Content Streaming",
    ],
  },
];

// Advanced Technologies
const advancedTechnologies = [
  {
    icon: Globe,
    title: "Internet of Things (IoT)",
    description:
      "Build scalable IoT applications with AWS IoT Core and Greengrass for edge computing.",
    features: ["Device Management", "Real-time Processing", "Edge Computing"],
  },
  {
    icon: MessageSquare,
    title: "Generative AI & LLM",
    description:
      "Implement Large Language Models using Amazon Bedrock with private, fine-tuned capabilities.",
    features: ["Custom LLMs", "Private Deployment", "Multi-modal AI"],
  },
  {
    icon: Zap,
    title: "Serverless Computing",
    description:
      "Develop serverless applications with AWS Lambda and real-time processing with Kinesis.",
    features: ["Auto-scaling", "Cost Optimization", "Real-time Processing"],
  },
];

const awsOfferings = [
  {
    icon: Cloud,
    title: "Compute Services",
    description:
      "Amazon EC2 for resizable virtual servers, AWS Lambda for serverless computing, EKS for Kubernetes, and ECS for container orchestration.",
    features: [
      "Application assessment and planning",
      "Legacy system modernization",
      "Zero-downtime migration strategies",
      "Post-migration optimization",
    ],
    backgroundImage: "/assets/cloud_1752856032189.gif",
  },
  {
    icon: Server,
    title: "Storage & Databases",
    description:
      "Scalable storage with S3, managed databases with RDS and DynamoDB, and high-performance Aurora for mission-critical applications.",
    features: [
      "Well-architected framework design",
      "Auto-scaling implementation",
      "High availability setup",
      "Cost optimization strategies",
    ],
    backgroundImage: "/assets/cloud2_1752856022708.gif",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "End-to-end ML services with SageMaker, Generative AI with Bedrock, and ready-to-use AI services for vision, speech, and language.",
    features: [
      "SageMaker model development",
      "Computer vision solutions",
      "Natural language processing",
      "Predictive analytics platforms",
    ],
    backgroundImage: "/assets/AI-ML.png",
  },
  {
    icon: BarChart,
    title: "Data Analytics",
    description:
      "Transform your data into actionable insights with comprehensive analytics and BI solutions on AWS.",
    features: [
      "Data lake architecture",
      "Real-time analytics dashboards",
      "ETL pipeline automation",
      "Advanced reporting systems",
    ],
    backgroundImage: "/assets/cloud3_1752856017147.gif",
  },
  {
    icon: Settings,
    title: "Security & Compliance",
    description:
      "Streamline your development lifecycle with AWS DevOps tools and automation best practices.",
    features: [
      "CI/CD pipeline setup",
      "Infrastructure as Code",
      "Automated testing frameworks",
      "Monitoring and alerting",
    ],
    backgroundImage: "/assets/cloud 5_1752856047806.gif",
  },
  {
    icon: Settings,
    title: "DevOps & Automation",
    description:
      "Streamline your development lifecycle with AWS DevOps tools and automation best practices.",
    features: [
      "CI/CD pipeline setup",
      "Infrastructure as Code",
      "Automated testing frameworks",
      "Monitoring and alerting",
    ],
    backgroundImage: "/assets/cloud 5_1752856047806.gif",
  },
];

export default function AWSServices() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  // Industry data for the interactive section
  const industryData = [
    {
      id: "healthcare",
      name: "Healthcare",
      image: "/assets/Healthcare.png",
      content:
        "Transform healthcare delivery with HIPAA-compliant AWS architectures, AI-powered diagnostics, and secure patient data management. Our solutions include telemedicine platforms, electronic health records, and advanced analytics that improve patient outcomes while ensuring regulatory compliance and data security.",
    },
    {
      id: "finance",
      name: "Finance",
      image: "/assets/Finance.png",
      content:
        "Secure your financial operations with AWS solutions designed for fraud detection, real-time transaction processing, and regulatory compliance. We build scalable data lakes, implement advanced security measures, and develop analytics platforms that help financial institutions make informed decisions while protecting sensitive data.",
    },
    {
      id: "retail",
      name: "Retail & eCommerce",
      image: "/assets/Ecommerce.png",
      content:
        "Enhance customer experiences with personalization engines, customer analytics, and scalable shopping platforms. Our AWS solutions include recommendation systems, inventory management, real-time analytics, and omnichannel platforms that drive sales and improve customer satisfaction.",
    },
    {
      id: "manufacturing",
      name: "Manufacturing",
      image: "/assets/Manufacturing.png",
      content:
        "Optimize manufacturing processes with IoT analytics, predictive maintenance, and supply chain optimization. Our AWS solutions help manufacturers reduce downtime, improve quality control, streamline operations, and implement Industry 4.0 technologies for competitive advantage.",
    },
    {
      id: "education",
      name: "EdTech",
      image: "/assets/Education.png",
      content:
        "Scale educational content delivery with AI tutors, learning analytics, and personalized learning experiences. Our AWS solutions include content management systems, virtual classrooms, assessment platforms, and analytics tools that enhance learning outcomes and operational efficiency.",
    },
    {
      id: "media",
      name: "Media & Entertainment",
      image: "/assets/Media.png",
      content:
        "Deliver engaging content with real-time streaming, content delivery networks, and audience analytics. Our AWS solutions help media companies scale their platforms, optimize content delivery, implement live streaming, and gain insights into audience behavior and preferences.",
    },
  ];

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
      {/* Hero Section - Same style as LifeScienceNew */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background for AWS page - Enhanced with cloud transformation graphics */}
        <div className="absolute inset-0">
          <img
            src="/assets/cloud_1752856032189.gif"
            alt="AWS Cloud Transformation"
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/assets/AWS-banner.png";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40"></div>

          {/* Floating AWS Logo */}
          <div className="absolute top-8 right-8 opacity-30">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Cloud className="h-10 w-10 text-white" />
            </div>
          </div>
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
                AWS Cloud Solutions
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl"
            >
              Welcome to NextGenAI, where innovation meets scalability. We
              empower businesses through Amazon Web Services (AWS) — the world's
              most comprehensive and widely adopted cloud platform.
            </motion.p>

            {/* Certifications and Trust Badges */}
            <div className="mb-32">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
                className="flex flex-col items-center gap-4"
              >
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#0066CC]/20 border border-[#0080FF]/30 rounded-full backdrop-blur-sm">
                  <CheckCircle className="h-5 w-5 text-cyan-400 fill-none" />
                  <span className="text-white font-medium">
                    Certified AWS Partner
                  </span>
                  <Award className="h-4 w-4 text-blue-400 fill-current" />
                </div>

                {/* AWS Certifications */}
                <div className="flex flex-wrap justify-center gap-4 mt-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                    <Shield className="h-4 w-4 text-blue-400" />
                    <span className="text-sm text-gray-300">
                      Solutions Architect
                    </span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                    <Settings className="h-4 w-4 text-green-400" />
                    <span className="text-sm text-gray-300">
                      DevOps Engineer
                    </span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                    <Brain className="h-4 w-4 text-purple-400" />
                    <span className="text-sm text-gray-300">ML Specialty</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                    <Lock className="h-4 w-4 text-orange-400" />
                    <span className="text-sm text-gray-300">HIPAA/GDPR</span>
                  </div>
                </div>
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

      {/* AWS Capabilities Section - Anblicks Style */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              Our AWS Capabilities
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AWS expertise across cloud infrastructure, security, and modern application development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Environment Management Capability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="capability-flipbox"
              style={{ perspective: "1000px", height: "280px" }}
            >
              <div className="capability-flipbox-wrap w-full h-full relative transform-style-preserve-3d transition-transform duration-700 hover:rotate-y-180">
                {/* Front Face */}
                <div className="capability-face capability-front absolute w-full h-full backface-hidden bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-2xl flex flex-col items-center justify-center p-8 hover:border-blue-400/40 transition-all duration-300">
                  <div className="capability-icon-box text-center">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center border border-blue-400/30">
                      <Settings className="h-8 w-8 text-blue-400" />
                    </div>
                    <h4 className="text-2xl font-bold text-white">Environment Management</h4>
                  </div>
                </div>

                {/* Back Face */}
                <div className="capability-face capability-back absolute w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-blue-600/90 to-cyan-600/90 backdrop-blur-xl border border-blue-400/50 rounded-2xl flex items-center justify-center p-8">
                  <div className="capability-content text-center">
                    <ul className="text-white space-y-3 text-sm">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        Automated provisioning and configuration
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        Version control and deployment
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        Infrastructure as Code
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Security & Compliance Capability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="capability-flipbox"
              style={{ perspective: "1000px", height: "280px" }}
            >
              <div className="capability-flipbox-wrap w-full h-full relative transform-style-preserve-3d transition-transform duration-700 hover:rotate-y-180">
                {/* Front Face */}
                <div className="capability-face capability-front absolute w-full h-full backface-hidden bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-2xl flex flex-col items-center justify-center p-8 hover:border-green-400/40 transition-all duration-300">
                  <div className="capability-icon-box text-center">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center border border-green-400/30">
                      <Shield className="h-8 w-8 text-green-400" />
                    </div>
                    <h4 className="text-2xl font-bold text-white">Security & Compliance</h4>
                  </div>
                </div>

                {/* Back Face */}
                <div className="capability-face capability-back absolute w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-green-600/90 to-emerald-600/90 backdrop-blur-xl border border-green-400/50 rounded-2xl flex items-center justify-center p-8">
                  <div className="capability-content text-center">
                    <ul className="text-white space-y-3 text-sm">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        IAM and access management
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        Threat detection and monitoring
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        HIPAA, GDPR compliance
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Data Analytics Capability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="capability-flipbox"
              style={{ perspective: "1000px", height: "280px" }}
            >
              <div className="capability-flipbox-wrap w-full h-full relative transform-style-preserve-3d transition-transform duration-700 hover:rotate-y-180">
                {/* Front Face */}
                <div className="capability-face capability-front absolute w-full h-full backface-hidden bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-2xl flex flex-col items-center justify-center p-8 hover:border-purple-400/40 transition-all duration-300">
                  <div className="capability-icon-box text-center">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-2xl flex items-center justify-center border border-purple-400/30">
                      <BarChart3 className="h-8 w-8 text-purple-400" />
                    </div>
                    <h4 className="text-2xl font-bold text-white">Data Analytics</h4>
                  </div>
                </div>

                {/* Back Face */}
                <div className="capability-face capability-back absolute w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-purple-600/90 to-violet-600/90 backdrop-blur-xl border border-purple-400/50 rounded-2xl flex items-center justify-center p-8">
                  <div className="capability-content text-center">
                    <ul className="text-white space-y-3 text-sm">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        Real-time data processing
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        Advanced analytics dashboards
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        ML-powered insights
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our AWS Offerings - Same style as Generative AI Development Services Layout */}
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
              Our AWS Offerings
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AWS cloud solutions designed to accelerate your
              digital transformation and business growth
            </p>
          </motion.div>

          {/* Modern Capabilities Grid - Inspired by Anblicks Design */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {awsOfferings.map((offering, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="group h-full"
                >
                  <div className="relative h-full bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-700"></div>
                    
                    {/* Icon Container */}
                    <div className="relative z-10 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center border border-blue-400/30 group-hover:border-blue-400/60 group-hover:scale-110 transition-all duration-300">
                        {index === 0 && <Server className="h-8 w-8 text-blue-400" />}
                        {index === 1 && <Database className="h-8 w-8 text-blue-400" />}
                        {index === 2 && <Brain className="h-8 w-8 text-blue-400" />}
                        {index === 3 && <BarChart className="h-8 w-8 text-blue-400" />}
                        {index === 4 && <Shield className="h-8 w-8 text-blue-400" />}
                        {index === 5 && <Settings className="h-8 w-8 text-blue-400" />}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold mb-4 text-white group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {offering.title}
                      </h3>
                      
                      <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mb-6 group-hover:w-24 transition-all duration-300"></div>
                      
                      <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                        {offering.description}
                      </p>

                      {/* Features List */}
                      <div className="space-y-3">
                        {offering.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mt-2.5 flex-shrink-0"></div>
                            <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Hover Arrow */}
                    <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                        <ArrowRight className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Industries We Serve Section - Interactive Layout */}
      <section className="py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                How Our AWS Solutions Can Help Businesses in Different
                Industries
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Navigation - Enhanced with icons */}
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
                      className={`flex items-center justify-start gap-3 p-4 h-auto min-h-[60px] transition-all duration-300 ${
                        selectedIndustryData.id === industry.id
                          ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-none shadow-lg"
                          : "bg-slate-800/50 border-slate-600 text-white hover:bg-slate-700/70 hover:border-blue-400/40 hover:text-white"
                      }`}
                      onClick={() => {
                        setSelectedIndustryData(industry);
                      }}
                    >
                      {/* Industry specific icons */}
                      <div className="flex-shrink-0">
                        {industry.id === "healthcare" && (
                          <Building className="h-5 w-5" />
                        )}
                        {industry.id === "finance" && (
                          <TrendingUp className="h-5 w-5" />
                        )}
                        {industry.id === "retail" && (
                          <ShoppingCart className="h-5 w-5" />
                        )}
                        {industry.id === "manufacturing" && (
                          <Factory className="h-5 w-5" />
                        )}
                        {industry.id === "education" && (
                          <GraduationCap className="h-5 w-5" />
                        )}
                        {industry.id === "media" && (
                          <Video className="h-5 w-5" />
                        )}
                      </div>
                      <span className="font-semibold text-sm leading-tight text-left whitespace-normal flex-grow">
                        {industry.name}
                      </span>
                    </Button>
                  ))}
                </div>

                {/* Success Metrics Infographic */}
                <div className="mt-8 p-6 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-cyan-400/20 rounded-xl">
                  <h4 className="text-lg font-bold text-white mb-4 text-center">
                    Client Success Metrics
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-green-400" />
                        <span className="text-sm text-gray-300">
                          Cost Reduction
                        </span>
                      </div>
                      <span className="text-lg font-bold text-green-400">
                        60%
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Zap className="h-4 w-4 text-blue-400" />
                        <span className="text-sm text-gray-300">
                          Faster Reporting
                        </span>
                      </div>
                      <span className="text-lg font-bold text-blue-400">
                        3X
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-purple-400" />
                        <span className="text-sm text-gray-300">
                          Uptime SLA
                        </span>
                      </div>
                      <span className="text-lg font-bold text-purple-400">
                        99.9%
                      </span>
                    </div>
                  </div>
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
                      onError={(e) => {
                        console.error(
                          `Failed to load image: ${selectedIndustryData.image}`,
                        );
                      }}
                      onLoad={() => {
                        console.log(
                          `Successfully loaded image: ${selectedIndustryData.image}`,
                        );
                      }}
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

      {/* Advanced Technologies Section */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Advanced Technologies Integration
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage cutting-edge AWS technologies to build next-generation
              applications and stay ahead of the competition.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {advancedTechnologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 rounded-2xl hover:shadow-xl transition-all duration-300"
              >
                <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl w-fit mb-6">
                  <tech.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {tech.title}
                </h3>
                <p className="text-gray-300 mb-6">{tech.description}</p>

                <div className="space-y-2">
                  {tech.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why AWS with NextGenAI? Section - Same style as Validation page */}
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
              Why AWS with NextGenAI?
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AWS offers over 200 fully featured services from data centers
              globally. With NextGenAI as your AWS partner, you gain access to
              industry-leading solutions that combine cloud efficiency with
              cutting-edge technologies.
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

      {/* FAQ Section - Same style as AI Chatbot FAQs */}
      <section className="py-16 text-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300">
                Get answers to common questions about our AWS services and
                expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Side - AWS Services Image */}
              <div className="lg:col-span-5">
                <div className="relative">
                  <img
                    src="./assets/AWS-banner.png"
                    alt="AWS Cloud Technology"
                    className="w-full h-[500px] object-cover rounded-2xl"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/assets/cloud_1752856032189.gif";
                    }}
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

      {/* Enhanced CTA Section with Team Collaboration Theme */}
      <section className="py-16 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10" />
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />

          {/* Floating collaboration icons */}
          <div className="absolute top-16 left-16 opacity-20">
            <Users className="h-12 w-12 text-blue-400 animate-pulse" />
          </div>
          <div className="absolute top-32 right-16 opacity-20">
            <MessageSquare
              className="h-10 w-10 text-cyan-400 animate-pulse"
              style={{ animationDelay: "0.5s" }}
            />
          </div>
          <div className="absolute bottom-32 left-32 opacity-20">
            <Sparkles
              className="h-8 w-8 text-purple-400 animate-pulse"
              style={{ animationDelay: "1.5s" }}
            />
          </div>
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
                Trusted AWS Partner Worldwide
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
                Transform Your
              </span>
              <br />
              <span className="text-white">Business with AWS</span>
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Whether you're modernizing your IT stack or building the next
              AI-powered platform, NextGenAI is your trusted AWS partner. Let's
              architect the future, together.
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
                  Free AWS Assessment
                </span>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <CheckCircle className="h-6 w-6 text-white bg-primary rounded-full p-1" />
                <span className="text-white font-semibold">
                  Certified Experts
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
