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

const whyChooseUsItems = [
  {
    icon: Brain,
    secondaryIcon: Cpu,
    title: "AI-Optimized Infrastructure",
    description:
      "Our cloud platform is designed with AI workloads in mind—supporting high-performance GPUs, distributed training, and real-time inference at scale. Every component is optimized for machine learning and artificial intelligence applications.",
    badge: "AI-Ready Platform",
  },
  {
    icon: Layers,
    secondaryIcon: Zap,
    title: "Flexible Deployment Options",
    description:
      "Deploy your AI models anywhere: public cloud, private cloud, or hybrid environments. All while ensuring seamless integration and performance consistency across all deployment scenarios.",
    badge: "Multi-Cloud Ready",
  },
  {
    icon: Shield,
    secondaryIcon: Lock,
    title: "Data Security & Compliance",
    description:
      "Your data is encrypted, monitored, and managed in compliance with global standards (GDPR, HIPAA, ISO/IEC 27001). We prioritize trust and transparency in every aspect of our cloud services.",
    badge: "Enterprise Security",
  },
  {
    icon: TrendingUp,
    secondaryIcon: BarChart3,
    title: "Scalability & Cost Efficiency",
    description:
      "Scale up during peak processing loads, and scale down when not needed—ensuring optimal costs without compromising performance. Our intelligent scaling ensures you only pay for what you use.",
    badge: "Smart Scaling",
  },
];

const faqs: FAQ[] = [
  {
    question: "What makes RT NextGenAI's cloud services different?",
    answer:
      "Our cloud services are specifically optimized for AI and ML workloads, featuring high-performance GPU clusters, automated MLOps pipelines, and intelligent scaling. We combine cutting-edge infrastructure with deep AI expertise to deliver superior performance.",
  },
  {
    question: "Which cloud platforms do you support?",
    answer:
      "We work with all major cloud providers including AWS, Microsoft Azure, Google Cloud Platform, and IBM Cloud. We also support hybrid and multi-cloud deployments based on your specific requirements.",
  },
  {
    question: "How do you ensure data security in the cloud?",
    answer:
      "We implement multiple layers of security including end-to-end encryption, secure API gateways, compliance monitoring, and regular security audits. All our services meet industry standards like GDPR, HIPAA, and ISO/IEC 27001.",
  },
  {
    question: "Can you migrate our existing AI infrastructure to the cloud?",
    answer:
      "Yes, we provide comprehensive cloud migration services with minimal downtime. Our team assesses your current infrastructure, creates a detailed migration plan, and handles the entire process while ensuring data integrity and performance optimization.",
  },
  {
    question: "What support do you provide for deployed cloud services?",
    answer:
      "We offer 24/7 monitoring, performance optimization, security updates, and technical support. Our team proactively manages your cloud infrastructure to ensure optimal performance and reliability of your AI applications.",
  },
];

// Cloud Services data
const cloudServices = [
  {
    icon: <Server className="h-8 w-8 text-white" />,
    title: "AI/ML Model Hosting",
    description:
      "Deploy and manage AI models using containerized services or serverless functions. Our hosting platform provides automatic scaling, load balancing, and high availability for your machine learning models.",
    backgroundImage: "/assets/cloud_1752856032189.gif",
  },
  {
    icon: <Database className="h-8 w-8 text-white" />,
    title: "Data Lake & Storage Solutions",
    description:
      "Centralize your structured and unstructured data with intelligent data pipelines for real-time processing. Build scalable data architectures that support advanced analytics and AI workloads.",
    backgroundImage: "/assets/cloud2_1752856022708.gif",
  },
  {
    icon: <Workflow className="h-8 w-8 text-white" />,
    title: "MLOps Tools",
    description:
      "Automate model training, validation, and deployment with our integrated MLOps framework. Streamline your machine learning lifecycle with continuous integration and deployment pipelines.",
    backgroundImage: "/assets/cloud3_1752856017147.gif",
  },
  {
    icon: <Network className="h-8 w-8 text-white" />,
    title: "Cloud API Gateway",
    description:
      "Secure and monitor AI endpoints at scale using our robust API management platform. Implement rate limiting, authentication, and analytics for your cloud-based AI services.",
    backgroundImage: "/assets/cloud 5_1752856047806.gif",
  },
  {
    icon: <Settings className="h-8 w-8 text-white" />,
    title: "Custom Cloud Architecture",
    description:
      "Get personalized consultation and infrastructure design to meet your specific AI use case. Our architects design scalable, secure, and cost-effective cloud solutions tailored to your needs.",
    backgroundImage: "/assets/CloudComputing-banner.png",
  },
];

const benefitSteps = [
  {
    number: "01",
    title: "Rapid Deployment & Scaling",
    description:
      "Deploy AI applications faster with our pre-configured cloud templates and automated scaling capabilities that adapt to your workload demands in real-time.",
    icon: <Zap className="h-8 w-8" />,
    bgColor: "from-blue-500/30 to-cyan-500/40",
    arrowColor: "bg-blue-500/30",
  },
  {
    number: "02",
    title: "Cost Optimization",
    description:
      "Reduce infrastructure costs by up to 40% with intelligent resource allocation, spot instance management, and automated scaling that optimizes spend without compromising performance.",
    icon: <TrendingUp className="h-8 w-8" />,
    bgColor: "from-blue-500/30 to-cyan-500/40",
    arrowColor: "bg-blue-500/30",
  },
  {
    number: "03",
    title: "Enhanced Security & Compliance",
    description:
      "Ensure enterprise-grade security with automated compliance monitoring, data encryption, and access controls that meet the strictest industry regulations and standards.",
    icon: <Shield className="h-8 w-8" />,
    bgColor: "from-blue-500/30 to-cyan-500/40",
    arrowColor: "bg-blue-500/30",
  },
  {
    number: "04",
    title: "Global Performance & Reliability",
    description:
      "Deliver consistent performance worldwide with multi-region deployments, edge computing capabilities, and 99.9% uptime SLA backed by robust disaster recovery.",
    icon: <Globe className="h-8 w-8" />,
    bgColor: "from-blue-500/30 to-cyan-500/40",
    arrowColor: "bg-blue-500/30",
  },
];

// Tech Stack data
const techStackPartners = [
  {
    category: "Cloud Providers",
    technologies: [
      "Amazon Web Services (AWS)",
      "Microsoft Azure",
      "Google Cloud Platform (GCP)",
      "IBM Cloud",
    ],
  },
  {
    category: "Container Orchestration",
    technologies: ["Kubernetes", "Docker", "OpenShift", "Amazon EKS"],
  },
  {
    category: "AI/ML Frameworks",
    technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "MLflow"],
  },
  {
    category: "Data Processing",
    technologies: ["Apache Spark", "Kafka", "Airflow", "Databricks"],
  },
  {
    category: "Monitoring & Analytics",
    technologies: ["Prometheus", "Grafana", "ELK Stack", "DataDog"],
  },
  {
    category: "Security & Compliance",
    technologies: ["HashiCorp Vault", "AWS IAM", "Azure AD", "SIEM"],
  },
];

// Industry use cases
const industryUseCases = [
  {
    id: "healthcare",
    name: "Healthcare",
    image: "/assets/Healthcare.png",
    content:
      "Transform healthcare delivery with cloud-based AI solutions for medical imaging analysis, patient data management, and predictive diagnostics. Our HIPAA-compliant cloud infrastructure ensures secure handling of sensitive medical data while enabling real-time collaboration between healthcare providers.",
  },
  {
    id: "finance",
    name: "Finance & Banking",
    image: "/assets/Finance.png",
    content:
      "Revolutionize financial services with cloud-native AI for fraud detection, algorithmic trading, and risk assessment. Deploy scalable trading algorithms, real-time fraud monitoring, and compliance reporting systems with enterprise-grade security and performance.",
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    image: "/assets/Manufacturing.png",
    content:
      "Optimize manufacturing operations with cloud-based IoT analytics, predictive maintenance, and quality control systems. Connect factory floor data to cloud AI models for real-time decision making and operational efficiency improvements.",
  },
  {
    id: "retail",
    name: "Retail & E-commerce",
    image: "/assets/Ecommerce.png",
    content:
      "Enhance customer experiences with cloud-powered recommendation engines, inventory optimization, and demand forecasting. Scale your e-commerce platform to handle peak traffic while delivering personalized shopping experiences in real-time.",
  },
  {
    id: "education",
    name: "Education",
    image: "/assets/Education.png",
    content:
      "Revolutionize learning with cloud-based AI tutoring systems, automated grading, and personalized learning paths. Deploy scalable educational platforms that adapt to individual student needs while ensuring data privacy and accessibility.",
  },
];

export default function CloudServices() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedUseCase, setSelectedUseCase] = useState(industryUseCases[0]);

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
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/CloudComputing-banner.png"
            alt="Cloud Services"
            className="w-full h-full object-cover object-center"
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
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
                style={{ fontWeight: 700 }}
              >
                <span className="bg-gradient-to-r from-white via-blue-100 to-[#0080FF] bg-clip-text text-transparent">
                  Cloud Services
                </span>
              </motion.h1>

              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl"
              >
                Scalable. Secure. Smart. Harness the power of the cloud to
                unlock intelligent, data-driven solutions that scale with your
                business
              </motion.p>

              {/* Badge below description */}
              <div className="mb-32">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6, type: "spring" }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0066CC]/20 border border-[#0080FF]/30 rounded-full backdrop-blur-sm"
                >
                  <Cloud className="h-5 w-5 text-cyan-400" />
                  <span className="text-white font-medium">
                    AI-Optimized Cloud Infrastructure
                  </span>
                  <Award className="h-4 w-4 text-blue-400 fill-current" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* How We Help Our Clients Section */}
      <section className="py-16 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 to-cyan-500/10"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full border border-cyan-400/20 mb-6">
                <Target className="h-4 w-4 text-cyan-400" />
                <span className="text-cyan-300 text-sm font-medium">
                  Client-Centric Solutions
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                RTNextGenAI{" "}
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  Cloud Services
                </span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                At RTNextGenAI, we empower businesses with intelligent,
                scalable, and secure cloud-native solutions that accelerate
                growth and innovation. We don't just provide cloud
                infrastructure — we architect end-to-end digital ecosystems
                designed to meet your business goals.
              </p>
            </motion.div>

            {/* Our Core Cloud Capabilities Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {[
                {
                  title: "Cloud Strategy & Consulting",
                  description:
                    "We guide clients in choosing the right cloud model (AWS, Azure, GCP, hybrid, or multi-cloud) and align it with business priorities.",
                  icon: Cloud,
                },
                {
                  title: "Cloud Migration & Modernization",
                  description:
                    "We help organizations move from legacy systems to modern cloud platforms with minimal downtime and optimized costs.",
                  icon: Server,
                },
                {
                  title: "Data & AI Services",
                  description:
                    "With AI/ML pipelines, data lakes, and real-time analytics, we transform raw data into actionable insights.",
                  icon: Database,
                },
                {
                  title: "DevOps & Automation",
                  description:
                    "CI/CD pipelines, Infrastructure-as-Code (Terraform, Kubernetes), and AI-powered automation ensure faster, error-free deployments.",
                  icon: Zap,
                },
                {
                  title: "Cloud Security & Compliance",
                  description:
                    "We implement zero-trust security, governance frameworks, and compliance solutions (HIPAA, GDPR, SOC 2, etc.) to safeguard client data.",
                  icon: Shield,
                },
                {
                  title: "Industry-Specific Solutions",
                  description:
                    "Healthcare, Finance, Retail & E-Commerce solutions with personalization, recommendation engines, and AI-powered features.",
                  icon: Target,
                },
              ].map((service, index) => {
                const IconComponent = service.icon;
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
                    <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 h-full hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-bl-2xl"></div>

                      <div className="flex items-start gap-6 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center border border-cyan-400/30 group-hover:border-cyan-400/50 transition-colors flex-shrink-0">
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>

                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                            {service.title}
                          </h3>
                          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mb-4"></div>
                        </div>
                      </div>

                      <p className="text-gray-300 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* How It Works Process */}
            {/* Our Cloud Transformation Journey - Circular Layout like AI Chatbot Flow */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-3xl font-bold text-white mb-12 text-center">
                Our Cloud Transformation Journey
              </h3>

              {/* Circular Process Layout */}
              <div className="relative flex items-center justify-center min-h-[800px] lg:min-h-[900px] px-8">
                {/* Central Circle */}
                <div className="relative z-20">
                  <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl">
                    <div className="w-40 h-40 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex flex-col items-center justify-center border-4 border-blue-400/20">
                      <Cloud className="h-16 w-16 text-cyan-400 mb-2" />
                      <span className="text-white text-sm font-semibold">Cloud</span>
                      <span className="text-cyan-400 text-xs">Journey</span>
                    </div>
                  </div>
                </div>

                {/* Dotted Circle Path */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  style={{ zIndex: 1 }}
                >
                  <defs>
                    <linearGradient
                      id="cloudProcessGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.7" />
                      <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.7" />
                    </linearGradient>
                  </defs>

                  <circle
                    cx="50%"
                    cy="50%"
                    r="180"
                    stroke="url(#cloudProcessGradient)"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="8,6"
                    className="opacity-80"
                  />
                </svg>

                {/* Process Steps - Positioned clockwise */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Step 1 - Top Left */}
                  <div
                    className="absolute"
                    style={{
                      top: "calc(50% - 127px)",
                      left: "calc(50% - 127px)",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <motion.div
                      className="relative"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div
                        className="bg-slate-800/60 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-6 max-w-sm shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
                        style={{ marginRight: "12rem", marginBottom: "18rem" }}
                      >
                        <div className="flex items-center mb-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                            <CheckCircle className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="text-white font-semibold text-lg">
                            Discovery & Assessment
                          </h3>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          We begin with an in-depth analysis of your current systems, challenges, and future goals.
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Step 2 - Top Right */}
                  <div
                    className="absolute"
                    style={{
                      top: "calc(50% - 127px)",
                      right: "calc(50% - 127px)",
                      transform: "translate(50%, -50%)",
                    }}
                  >
                    <motion.div
                      className="relative"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div
                        className="bg-slate-800/60 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-6 max-w-sm shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
                        style={{ marginLeft: "12rem", marginBottom: "18rem" }}
                      >
                        <div className="flex items-center mb-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                            <Settings className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="text-white font-semibold text-lg">
                            Tailored Roadmap
                          </h3>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          Our experts design a custom cloud adoption plan — from selecting providers to defining architecture.
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Step 3 - Right Side */}
                  <div
                    className="absolute"
                    style={{
                      top: "50%",
                      right: "calc(50% - 180px)",
                      transform: "translate(50%, -50%)",
                    }}
                  >
                    <motion.div
                      className="relative"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div
                        className="bg-slate-800/60 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-6 max-w-sm shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
                        style={{ marginLeft: "14rem" }}
                      >
                        <div className="flex items-center mb-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                            <Zap className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="text-white font-semibold text-lg">
                            Seamless Migration
                          </h3>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          We migrate applications, data, and workflows using proven frameworks, minimizing disruption.
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Step 4 - Bottom Right */}
                  <div
                    className="absolute"
                    style={{
                      bottom: "calc(50% - 127px)",
                      right: "calc(50% - 127px)",
                      transform: "translate(50%, 50%)",
                    }}
                  >
                    <motion.div
                      className="relative"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div
                        className="bg-slate-800/60 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-6 max-w-sm shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
                        style={{ marginLeft: "12rem", marginTop: "18rem" }}
                      >
                        <div className="flex items-center mb-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                            <Server className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="text-white font-semibold text-lg">
                            Cloud-Native Development
                          </h3>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          We build or modernize apps using microservices, APIs, serverless computing, and containerization for agility.
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Step 5 - Bottom Left */}
                  <div
                    className="absolute"
                    style={{
                      bottom: "calc(50% - 127px)",
                      left: "calc(50% - 127px)",
                      transform: "translate(-50%, 50%)",
                    }}
                  >
                    <motion.div
                      className="relative"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div
                        className="bg-slate-800/60 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-6 max-w-sm shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
                        style={{ marginRight: "12rem", marginTop: "18rem" }}
                      >
                        <div className="flex items-center mb-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                            <Brain className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="text-white font-semibold text-lg">
                            Automation & Intelligence
                          </h3>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          AI-driven automation, real-time monitoring, and DevOps practices keep your systems running efficiently.
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Step 6 - Left Side */}
                  <div
                    className="absolute"
                    style={{
                      top: "50%",
                      left: "calc(50% - 180px)",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <motion.div
                      className="relative"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div
                        className="bg-slate-800/60 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-6 max-w-sm shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
                        style={{ marginRight: "14rem" }}
                      >
                        <div className="flex items-center mb-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                            <TrendingUp className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="text-white font-semibold text-lg">
                            Ongoing Optimization & Support
                          </h3>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          We provide continuous monitoring, performance tuning, and 24/7 support so your business stays ahead.
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Industry Use Cases Section */}
            <section className="py-16 text-white">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-6">
                      Industry Use Cases
                    </h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                      Discover how our cloud services transform industries
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Navigation */}
                    <div className="lg:col-span-4">
                      <div className="grid grid-cols-1 gap-4">
                        {industryUseCases.map((useCase) => (
                          <Button
                            key={useCase.id}
                            variant={
                              selectedUseCase.id === useCase.id
                                ? "default"
                                : "outline"
                            }
                            className={`text-center justify-center p-4 h-auto min-h-[60px] transition-all duration-300 ${
                              selectedUseCase.id === useCase.id
                                ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-none shadow-lg"
                                : "bg-slate-800/50 border-slate-600 text-white hover:bg-slate-700/70 hover:border-blue-400/40 hover:text-white"
                            }`}
                            onClick={() => {
                              setSelectedUseCase(useCase);
                            }}
                          >
                            <span className="font-semibold text-sm leading-tight text-center whitespace-normal">
                              {useCase.name}
                            </span>
                          </Button>
                        ))}
                      </div>
                    </div>

                    {/* Right Content Display */}
                    <div className="lg:col-span-8">
                      <motion.div
                        key={selectedUseCase.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-cyan-400/20 rounded-xl overflow-hidden"
                      >
                        {/* Industry Image */}
                        <div className="relative h-64 overflow-hidden group cursor-pointer">
                          <img
                            src={selectedUseCase.image}
                            alt={selectedUseCase.name}
                            className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent group-hover:from-gray-900/60 transition-all duration-300"></div>
                          <div className="absolute bottom-4 left-6">
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                              {selectedUseCase.name}
                            </h3>
                          </div>
                        </div>

                        {/* Industry Content */}
                        <div className="p-6">
                          <p className="text-gray-300 leading-relaxed text-lg">
                            {selectedUseCase.content}
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Why Choose Us Section - Moved here */}
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
                    Why Choose RT NextGenAI
                  </h2>
                  <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Partner with industry leaders in cloud infrastructure development
                  </p>
                </motion.div>

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
                        <div className="p-8">
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                            {[
                              {
                                icon: <Brain className="h-10 w-10" />,
                                title: "Multi-Cloud Expertise",
                                description:
                                  "Deep knowledge across AWS, Azure, and GCP.",
                              },
                              {
                                icon: <Zap className="h-10 w-10" />,
                                title: "AI-First Approach",
                                description:
                                  "Every solution leverages AI/ML intelligence for smarter decisions.",
                              },
                              {
                                icon: <Target className="h-10 w-10" />,
                                title: "Industry Alignment",
                                description:
                                  "Tailored frameworks for healthcare, finance, e-commerce, and more.",
                              },
                            ].map((item, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -10, scale: 1.05 }}
                                viewport={{ once: true }}
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
                          </div>
                        </div>
                      </CarouselItem>

                      {/* Second slide - items 3,4,5 */}
                      <CarouselItem className="pl-2 md:pl-4">
                        <div className="p-8">
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                            {[
                              {
                                icon: <Shield className="h-10 w-10" />,
                                title: "Security by Design",
                                description:
                                  "Compliance, encryption, and zero-trust woven into every layer.",
                              },
                              {
                                icon: <Award className="h-10 w-10" />,
                                title: "Proven Results",
                                description:
                                  "Faster go-to-market, reduced IT costs, and higher ROI.",
                              },
                              {
                                icon: <TrendingUp className="h-10 w-10" />,
                                title: "Future-Ready",
                                description:
                                  "AI-powered cloud ecosystem that evolves with your business.",
                              },
                            ].map((item, index) => (
                              <motion.div
                                key={index + 3}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -10, scale: 1.05 }}
                                viewport={{ once: true }}
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
                          </div>
                        </div>
                      </CarouselItem>
                    </CarouselContent>

                    <CarouselPrevious className="left-4 bg-gradient-to-r from-gray-800/90 to-gray-700/90 border border-cyan-400/40 hover:border-cyan-400/70 text-cyan-400 hover:text-white" />
                    <CarouselNext className="right-4 bg-gradient-to-r from-gray-800/90 to-gray-700/90 border border-cyan-400/40 hover:border-cyan-400/70 text-cyan-400 hover:text-white" />
                  </Carousel>
                </div>
              </div>
            </section>

            {/* Cloud Services Section */}
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
                    Cloud Services We Offer
                  </h2>
                  <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Comprehensive cloud solutions designed to accelerate your AI and
                    digital transformation initiatives
                  </p>
                </motion.div>

                {/* 2x2 Grid Layout with Central Image */}
                <div className="max-w-8xl mx-auto relative">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Top Row - AI/ML Model Hosting and Data Lake */}
                    <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      {/* AI/ML Model Hosting */}
                      <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="group cursor-pointer h-full"
                      >
                        <div className="flex items-center gap-6 p-6 bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-blue-500/50 hover:bg-gray-800/80 transition-all duration-500 group-hover:translate-x-2 h-full">
                          <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                            <img
                              src={cloudServices[0].backgroundImage}
                              alt={cloudServices[0].title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              style={{ backgroundAttachment: "fixed" }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/90"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <Server className="h-6 w-6 text-white" />
                            </div>
                          </div>
                          <div className="flex-grow">
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                                01
                              </div>
                            </div>
                            <h4 className="text-lg font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                              {cloudServices[0].title}
                            </h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                              {cloudServices[0].description}
                            </p>
                          </div>
                        </div>
                      </motion.div>

                      {/* Data Lake & Storage Solutions */}
                      <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="group cursor-pointer h-full"
                      >
                        <div className="flex items-center gap-6 p-6 bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-blue-500/50 hover:bg-gray-800/80 transition-all duration-500 group-hover:translate-x-2 h-full">
                          <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                            <img
                              src={cloudServices[1].backgroundImage}
                              alt={cloudServices[1].title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              style={{ backgroundAttachment: "fixed" }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/90"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <Database className="h-6 w-6 text-white" />
                            </div>
                          </div>
                          <div className="flex-grow">
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                                02
                              </div>
                            </div>
                            <h4 className="text-lg font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                              {cloudServices[1].title}
                            </h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                              {cloudServices[1].description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Second Row - Central Image with MLOps Tools */}
                    <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      {/* Central Image */}
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, type: "spring" }}
                        className="relative group"
                      >
                        {/* Main Feature Card */}
                        <div className="relative min-h-96 w-full bg-gradient-to-br from-blue-600 to-cyan-600 rounded-[3rem] overflow-hidden shadow-2xl group-hover:shadow-blue-500/30 transition-all duration-700">
                          <div className="relative w-full">
                            <img
                              src="/assets/Cloud1_1752856011773.gif"
                              alt="Cloud Services"
                              className="w-full h-auto object-contain group-hover:scale-105 transition-all duration-700"
                              style={{ backgroundAttachment: "fixed" }}
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = "/assets/CloudComputing-banner.png";
                              }}
                            />
                          </div>

                          {/* Floating Elements */}
                          <div className="absolute top-8 right-8 flex flex-col gap-4">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                              <Cloud className="h-8 w-8 text-white" />
                            </div>
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                              AI
                            </div>
                          </div>

                          {/* Content */}
                          <div className="absolute bottom-0 left-0 right-0 p-8">
                            <div className="mb-4">
                              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                                <span className="text-blue-200 text-sm font-medium">
                                  Cloud Innovation Hub
                                </span>
                              </div>
                              <h3 className="text-3xl font-bold text-white mb-3 leading-tight">
                                Intelligent Cloud Solutions
                              </h3>
                              <p className="text-blue-100 leading-relaxed mb-6">
                                Advanced cloud infrastructure optimized for AI
                                workloads and enterprise scalability.
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* MLOps Tools */}
                      <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="group cursor-pointer h-full"
                      >
                        <div className="flex items-center gap-6 p-6 bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-blue-500/50 hover:bg-gray-800/80 transition-all duration-500 group-hover:translate-x-2 h-full">
                          <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                            <img
                              src={cloudServices[2].backgroundImage}
                              alt={cloudServices[2].title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              style={{ backgroundAttachment: "fixed" }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/90"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <Workflow className="h-6 w-6 text-white" />
                            </div>
                          </div>
                          <div className="flex-grow">
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                                03
                              </div>
                            </div>
                            <h4 className="text-lg font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                              {cloudServices[2].title}
                            </h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                              {cloudServices[2].description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Third Row - Cloud API Gateway and Custom Cloud Architecture */}
                    <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Cloud API Gateway */}
                      <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="group cursor-pointer h-full"
                      >
                        <div className="flex items-center gap-6 p-6 bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-blue-500/50 hover:bg-gray-800/80 transition-all duration-500 group-hover:translate-x-2 h-full">
                          <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                            <img
                              src={cloudServices[3].backgroundImage}
                              alt={cloudServices[3].title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              style={{ backgroundAttachment: "fixed" }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/90"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <Network className="h-6 w-6 text-white" />
                            </div>
                          </div>
                          <div className="flex-grow">
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                                04
                              </div>
                            </div>
                            <h4 className="text-lg font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                              {cloudServices[3].title}
                            </h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                              {cloudServices[3].description}
                            </p>
                          </div>
                        </div>
                      </motion.div>

                      {/* Custom Cloud Architecture */}
                      <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="group cursor-pointer h-full"
                      >
                        <div className="flex items-center gap-6 p-6 bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-blue-500/50 hover:bg-gray-800/80 transition-all duration-500 group-hover:translate-x-2 h-full">
                          <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                            <img
                              src={cloudServices[4].backgroundImage}
                              alt={cloudServices[4].title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              style={{ backgroundAttachment: "fixed" }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/90"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <Settings className="h-6 w-6 text-white" />
                            </div>
                          </div>
                          <div className="flex-grow">
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                                05
                              </div>
                            </div>
                            <h4 className="text-lg font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                              {cloudServices[4].title}
                            </h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                              {cloudServices[4].description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <section className="py-20 relative">
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Benefits of Our Cloud Services
                  </h2>
                </div>

                {/* Main Layout: 3 Equal Columns */}
                <div className="max-w-7xl mx-auto">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* First Column - Image */}
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      className="relative"
                    >
                      <div className="relative rounded-2xl overflow-hidden h-full">
                        <img
                          src="/assets/GenerativeAI1_1752648438146.gif"
                          alt="Cloud Benefits"
                          className="w-full h-full object-cover rounded-2xl shadow-2xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                      </div>
                    </motion.div>

                    {/* Second Column - Benefits 01 & 02 */}
                    <div className="space-y-6">
                      {benefitSteps.slice(0, 2).map((benefitStep, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: index * 0.1 }}
                          className="relative"
                        >
                          {/* Step Arrow Shape */}
                          <div
                            className={`relative bg-gradient-to-br ${benefitStep.bgColor} text-white rounded-lg backdrop-blur-sm border border-white/10 mb-4`}
                            style={{
                              clipPath:
                                "polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%)",
                              height: "80px",
                            }}
                          >
                            <div className="flex items-center h-full px-4">
                              {/* Step Number */}
                              <div className="text-2xl font-bold mr-3 opacity-90">
                                {benefitStep.number}
                              </div>

                              {/* Icon in white shield */}
                              <div className="bg-white rounded-lg p-2 flex items-center justify-center text-gray-800">
                                <div className="scale-75">{benefitStep.icon}</div>
                              </div>
                            </div>
                          </div>

                          {/* Content */}
                          <div>
                            <h3 className="text-lg font-bold text-white mb-2">
                              {benefitStep.title}
                            </h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                              {benefitStep.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Third Column - Benefits 03 & 04 */}
                    <div className="space-y-6">
                      {benefitSteps.slice(2, 4).map((benefitStep, index) => (
                        <motion.div
                          key={index + 2}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: (index + 2) * 0.1 }}
                          className="relative"
                        >
                          {/* Step Arrow Shape */}
                          <div
                            className={`relative bg-gradient-to-br ${benefitStep.bgColor} text-white rounded-lg backdrop-blur-sm border border-white/10 mb-4`}
                            style={{
                              clipPath:
                                "polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%)",
                              height: "80px",
                            }}
                          >
                            <div className="flex items-center h-full px-4">
                              {/* Step Number */}
                              <div className="text-2xl font-bold mr-3 opacity-90">
                                {benefitStep.number}
                              </div>

                              {/* Icon in white shield */}
                              <div className="bg-white rounded-lg p-2 flex items-center justify-center text-gray-800">
                                <div className="scale-75">{benefitStep.icon}</div>
                              </div>
                            </div>
                          </div>

                          {/* Content */}
                          <div>
                            <h3 className="text-lg font-bold text-white mb-2">
                              {benefitStep.title}
                            </h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                              {benefitStep.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Tech Stack & Partners Section */}
            <section className="py-16 text-white">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-6">
                      Tech Stack & Partners
                    </h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                      We work with top-tier providers and cutting-edge technologies
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {techStackPartners.map((category, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg border border-gray-700 hover:border-cyan-400/40 transition-all duration-300"
                      >
                        <h3 className="text-lg font-bold text-white mb-4">
                          {category.category}
                        </h3>
                        <div className="space-y-2">
                          {category.technologies.map((tech, techIndex) => (
                            <p
                              key={techIndex}
                              className="text-gray-300 text-sm font-medium"
                            >
                              {tech}
                            </p>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* FAQs Section */}
            <section className="py-16 text-white">

            {/* FAQs Section */}
            <section className="py-16 text-white">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-6">
                      Frequently Asked Questions
                    </h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
                    <p className="text-xl text-gray-300">
                      Common questions about our cloud services
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Left Side - Cloud Image */}
                    <div className="lg:col-span-5">
                      <div className="relative group">
                        <div className="relative overflow-hidden rounded-2xl">
                          <img
                            src="/assets/FAQ's.png"
                            alt="Cloud Technology"
                            className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                          <div className="absolute bottom-6 left-6 right-6">
                            <h3 className="text-2xl font-bold text-white mb-2">
                              Cloud-Powered Solutions
                            </h3>
                            <p className="text-gray-200 text-sm">
                              Scalable, secure, and intelligent cloud infrastructure
                              for modern businesses
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Side - FAQ Content */}
                    <div className="lg:col-span-7">
                      <div className="space-y-4">
                        {faqs.map((faq, index) => (
                          <div
                            key={index}
                            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 overflow-hidden"
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
                              <div className="px-6 pb-6">
                                <p className="text-gray-400 leading-relaxed">
                                  {faq.answer}
                                </p>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
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
                    <Cloud className="h-5 w-5 text-cyan-400" />
                    <span className="text-white font-medium">
                      Future-Ready Cloud Solutions
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
                      Ready to Scale Your
                    </span>
                    <br />
                    <span className="text-white">Business in the Cloud?</span>
                  </motion.h2>

                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
                  >
                    Let's discuss how our cloud services can accelerate your digital
                    transformation and unlock new possibilities for your business
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
                        Free Cloud Assessment
                      </span>
                    </div>
                    <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                      <CheckCircle className="h-6 w-6 text-white bg-primary rounded-full p-1" />
                      <span className="text-white font-semibold">
                        Expert Cloud Architecture
                      </span>
                    </div>
                    <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                      <CheckCircle className="h-6 w-6 text-white bg-primary rounded-full p-1" />
                      <span className="text-white font-semibold">
                        24/7 Cloud Support
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
                      onClick={() => (window.location.href = "/contact")}
                    >
                      <Cloud className="mr-2 h-5 w-5" />
                      Start Your Cloud Journey
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </motion.div>
  );
}