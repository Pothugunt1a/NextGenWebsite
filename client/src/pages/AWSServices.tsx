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

export default function AWSServices() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

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
        {/* Background for AWS page */}
        <div className="absolute inset-0">
          <img
            src="/assets/AWS-banner.png"
            alt="AWS Cloud Solutions"
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/assets/aws-banner.png";
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

            {/* Badge below description */}
            <div className="mb-32">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0066CC]/20 border border-[#0080FF]/30 rounded-full backdrop-blur-sm"
              >
                <CheckCircle className="h-5 w-5 text-cyan-400 fill-none" />
                <span className="text-white font-medium">
                  Industry-Leading AWS Solutions
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

      {/* Why Choose Us Section - Same style as Validation page */}
      <section className="py-16 bg-light">
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
                    <div
                      className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${item.color} group-hover:scale-110 transition-transform duration-300`}
                    >
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

      {/* AWS Core Services Section */}
      <section className="py-20 bg-light relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 border border-blue-500 rotate-45"></div>
          <div className="absolute top-32 right-20 w-24 h-24 border border-cyan-500 rotate-12"></div>
          <div className="absolute bottom-20 left-32 w-40 h-40 border border-blue-400 rotate-45"></div>
          <div className="absolute bottom-32 right-40 w-28 h-28 border border-cyan-400 rotate-12"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our AWS Offerings
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AWS services designed to accelerate your digital
              transformation and unlock new possibilities for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awsCoreServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.backgroundGradient} opacity-90`}
                ></div>

                <div className="relative p-8 text-white">
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <div className="ml-4">
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                    </div>
                  </div>

                  <p className="text-white/90 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.services.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm font-medium bg-white/20 backdrop-blur-sm rounded-full"
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

      {/* Industries We Serve Section */}
      <section className="py-20 bg-light relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 border border-blue-500 rotate-45"></div>
          <div className="absolute top-32 right-20 w-24 h-24 border border-cyan-500 rotate-12"></div>
          <div className="absolute bottom-20 left-32 w-40 h-40 border border-blue-400 rotate-45"></div>
          <div className="absolute bottom-32 right-40 w-28 h-28 border border-cyan-400 rotate-12"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Industries We Serve
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Delivering specialized AWS solutions across diverse industries
              with deep domain expertise and proven results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl mr-4">
                    <industry.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {industry.title}
                  </h3>
                </div>

                <p className="text-gray-300 mb-4">{industry.description}</p>

                <div className="space-y-2">
                  {industry.useCases.map((useCase, caseIndex) => (
                    <div key={caseIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-300">{useCase}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300">
              Get answers to common questions about our AWS services and
              expertise.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="border border-white/10 rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left hover:bg-white/10 transition-colors duration-200 flex justify-between items-center"
                >
                  <span className="text-lg font-semibold text-white">
                    {faq.question}
                  </span>
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="p-6 border-t border-white/10">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section - Same style as LifeScience */}
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
