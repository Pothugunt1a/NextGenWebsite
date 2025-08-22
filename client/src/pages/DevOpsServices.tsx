
import { useState } from "react";
import { motion } from "framer-motion";
import {
  GitBranch,
  Server,
  Monitor,
  Zap,
  Database,
  Shield,
  Users,
  Star,
  Clock,
  Target,
  TrendingUp,
  Award,
  Layers,
  Brain,
  CheckCircle,
  ArrowRight,
  Settings,
  Code,
  Activity,
  Cloud,
  Workflow,
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

const stats = [
  {
    icon: <GitBranch className="h-8 w-8" />,
    title: "90%",
    subtitle: "Faster Deployments",
    description: "CI/CD optimization",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "99.9%",
    subtitle: "System Uptime",
    description: "Infrastructure reliability",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "75%",
    subtitle: "Cost Reduction",
    description: "Infrastructure automation",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "200%",
    subtitle: "Team Productivity",
    description: "Development velocity",
    color: "from-orange-500 to-red-500",
  },
];

const whyChooseUsItems = [
  {
    icon: <Award className="h-10 w-10" />,
    title: "DevOps Excellence",
    description:
      "Certified DevOps engineers with expertise in AWS, Azure, Docker, Kubernetes, Jenkins, and GitLab CI/CD for comprehensive automation solutions.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Layers className="h-10 w-10" />,
    title: "Infrastructure as Code",
    description:
      "Automated infrastructure provisioning with Terraform, CloudFormation, and Ansible for consistent, scalable, and repeatable deployments.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <Brain className="h-10 w-10" />,
    title: "AI-Driven Monitoring",
    description:
      "Intelligent monitoring and alerting systems with machine learning-powered anomaly detection and predictive analytics for proactive issue resolution.",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: <TrendingUp className="h-10 w-10" />,
    title: "Continuous Optimization",
    description:
      "Performance monitoring, cost optimization, and continuous improvement processes to maximize efficiency and minimize operational overhead.",
    color: "from-orange-500 to-red-500",
  },
];

const faqs: FAQ[] = [
  {
    question: "What DevOps tools and technologies do you use?",
    answer:
      "We use industry-leading tools including Docker, Kubernetes, Jenkins, GitLab CI/CD, Terraform, Ansible, AWS DevOps services, Azure DevOps, Prometheus, Grafana, and ELK stack for comprehensive DevOps solutions.",
  },
  {
    question: "How long does it take to implement DevOps practices?",
    answer:
      "Implementation timeline varies based on complexity. Basic CI/CD pipelines take 2-4 weeks, infrastructure automation takes 4-8 weeks, and complete DevOps transformation can take 3-6 months depending on organization size and requirements.",
  },
  {
    question: "Do you provide ongoing DevOps support and maintenance?",
    answer:
      "Yes, we offer comprehensive DevOps support including pipeline maintenance, infrastructure monitoring, security updates, performance optimization, and 24/7 incident response to ensure smooth operations.",
  },
  {
    question: "Can you help migrate existing infrastructure to DevOps practices?",
    answer:
      "Absolutely! We specialize in legacy system modernization, gradual migration strategies, and implementing DevOps practices in existing environments with minimal disruption to ongoing operations.",
  },
  {
    question: "How do you ensure security in DevOps pipelines?",
    answer:
      "We implement DevSecOps practices including automated security testing, vulnerability scanning, compliance checks, secret management, and security monitoring throughout the entire development and deployment lifecycle.",
  },
];

const devopsOfferings = [
  {
    icon: GitBranch,
    title: "CI/CD Pipeline Development",
    description:
      "Automated continuous integration and deployment pipelines with Jenkins, GitLab CI/CD, and AWS CodePipeline for faster and reliable software delivery.",
    features: [
      "Automated build and testing",
      "Multi-environment deployments",
      "Rollback and versioning",
      "Quality gates and approvals",
    ],
    backgroundImage: "/assets/AI-ApplicationDevelopment.gif",
  },
  {
    icon: Server,
    title: "Infrastructure Automation",
    description:
      "Infrastructure as Code solutions with Terraform, CloudFormation, and Ansible for consistent, scalable, and repeatable infrastructure provisioning.",
    features: [
      "Infrastructure as Code (IaC)",
      "Automated provisioning",
      "Configuration management",
      "Environment consistency",
    ],
    backgroundImage: "/assets/AI-Components.gif",
  },
  {
    icon: Monitor,
    title: "Monitoring & Observability",
    description:
      "Comprehensive monitoring solutions with Prometheus, Grafana, ELK stack, and cloud-native monitoring for full visibility into your systems.",
    features: [
      "Real-time monitoring",
      "Custom dashboards",
      "Alerting and notifications",
      "Performance analytics",
    ],
    backgroundImage: "/assets/GenerativeAI.gif",
  },
  {
    icon: Cloud,
    title: "Cloud DevOps Services",
    description:
      "Cloud-native DevOps solutions for AWS, Azure, and Google Cloud with auto-scaling, serverless deployments, and multi-cloud strategies.",
    features: [
      "Cloud-native architectures",
      "Auto-scaling configuration",
      "Serverless deployments",
      "Multi-cloud management",
    ],
    backgroundImage: "/assets/AI-chatbot.gif",
  },
  {
    icon: Shield,
    title: "DevSecOps Implementation",
    description:
      "Security-first DevOps practices with automated security testing, vulnerability scanning, compliance management, and security monitoring.",
    features: [
      "Security automation",
      "Vulnerability scanning",
      "Compliance monitoring",
      "Secret management",
    ],
    backgroundImage: "/assets/AI-ML.png",
  },
  {
    icon: Settings,
    title: "DevOps Consulting",
    description:
      "Strategic DevOps consulting and transformation services including assessment, roadmap planning, team training, and culture transformation.",
    features: [
      "DevOps assessment",
      "Transformation roadmap",
      "Team training",
      "Culture transformation",
    ],
    backgroundImage: "/assets/cloud 5_1752856047806.gif",
  },
];

const industryData = [
  {
    id: "fintech",
    name: "Financial Services",
    image: "/assets/Finance.png",
    content:
      "Secure and compliant DevOps solutions for financial institutions with automated compliance checks, regulatory reporting, risk management, and high-availability architectures for critical financial systems.",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    image: "/assets/Healthcare.png",
    content:
      "HIPAA-compliant DevOps practices for healthcare organizations with secure patient data handling, automated compliance monitoring, disaster recovery, and scalable infrastructure for healthcare applications.",
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    image: "/assets/Ecommerce.png",
    content:
      "High-performance DevOps solutions for e-commerce platforms with auto-scaling for traffic spikes, zero-downtime deployments, performance optimization, and comprehensive monitoring for peak shopping periods.",
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    image: "/assets/Manufacturing.png",
    content:
      "Industrial DevOps solutions for manufacturing with IoT integration, edge computing deployments, predictive maintenance systems, and real-time production monitoring with automated alert systems.",
  },
  {
    id: "startup",
    name: "Startups & Tech",
    image: "/assets/Internet-Tech-Startup.png",
    content:
      "Agile DevOps practices for startups and tech companies with rapid deployment cycles, cost-effective infrastructure, scalable architectures, and developer-friendly automation tools for fast innovation.",
  },
  {
    id: "education",
    name: "Education",
    image: "/assets/Education.png",
    content:
      "Educational technology DevOps solutions with scalable learning management systems, automated content delivery, student data protection, and reliable infrastructure for online learning platforms.",
  },
];

export default function DevOpsServices() {
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
        <div className="absolute inset-0">
          <img
            src="/assets/AI-ApplicationDevelopment.gif"
            alt="DevOps Services"
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
              <span className="bg-gradient-to-r from-white via-blue-100 to-[#FF6B6B] bg-clip-text text-transparent">
                DevOps & Automation Solutions
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl"
            >
              Accelerate your development lifecycle with comprehensive DevOps
              solutions. From CI/CD pipelines to infrastructure automation, we
              streamline your operations for maximum efficiency.
            </motion.p>

            <div className="mb-32">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF6B6B]/20 border border-[#FF6B6B]/30 rounded-full backdrop-blur-sm"
              >
                <CheckCircle className="h-5 w-5 text-cyan-400 fill-none" />
                <span className="text-white font-medium">
                  Expert DevOps Engineering Team
                </span>
                <Award className="h-4 w-4 text-blue-400 fill-current" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
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

      {/* DevOps Services */}
      <div className="py-20 bg-light relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6 text-white">
              Our DevOps & Automation Services
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive DevOps solutions for continuous integration,
              deployment, and infrastructure automation
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="max-w-8xl mx-auto relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {devopsOfferings.slice(0, 2).map((offering, index) => (
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

            {/* Central Image Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, type: "spring" }}
                className="relative group"
              >
                <div className="relative min-h-96 w-full bg-gradient-to-br from-red-600 to-orange-600 rounded-[3rem] overflow-hidden shadow-2xl group-hover:shadow-red-500/30 transition-all duration-700">
                  <div className="relative w-full">
                    <img
                      src="/assets/AI-ApplicationDevelopment.gif"
                      alt="DevOps Services"
                      className="w-full h-auto object-contain group-hover:scale-105 transition-all duration-700"
                    />
                  </div>

                  <div className="absolute top-8 right-8 flex flex-col gap-4">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                      <GitBranch className="h-8 w-8 text-white" />
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-orange-400 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                      D
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="mb-4">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                        <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                        <span className="text-orange-200 text-sm font-medium">
                          DevOps Innovation Hub
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-3 leading-tight">
                        Next-Generation DevOps
                      </h3>
                      <p className="text-orange-100 leading-relaxed mb-6">
                        Streamlined development and operations with automated
                        pipelines, infrastructure as code, and intelligent
                        monitoring.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="flex flex-col gap-6">
                {devopsOfferings.slice(2, 4).map((offering, index) => (
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
              {devopsOfferings.slice(4).map((offering, index) => (
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

      {/* Industries Section */}
      <section className="py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Industries We Serve
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
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

              <div className="lg:col-span-8">
                <motion.div
                  key={selectedIndustryData.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-cyan-400/20 rounded-xl overflow-hidden"
                >
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

      {/* Why Choose Us Section */}
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
              Why Choose NextGenAI for DevOps?
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert DevOps engineering with cutting-edge automation tools and
              proven methodologies for operational excellence.
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
                Common questions about our DevOps and automation services.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5">
                <div className="relative">
                  <img
                    src="/assets/AI-ApplicationDevelopment.gif"
                    alt="DevOps Services"
                    className="w-full h-[500px] object-cover rounded-2xl"
                  />
                </div>
              </div>

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

      {/* CTA Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-orange-600/10 to-yellow-600/10" />
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl animate-pulse"
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
              className="inline-flex items-center gap-2 px-6 py-3 mb-8 bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-400/30 rounded-full backdrop-blur-sm"
            >
              <GitBranch className="h-5 w-5 text-red-400" />
              <span className="text-white font-medium">
                Leading DevOps Automation Partner
              </span>
              <Award className="h-4 w-4 text-orange-400 fill-current" />
            </motion.div>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-white via-red-100 to-[#FF6B6B] bg-clip-text text-transparent">
                Ready to Automate
              </span>
              <br />
              <span className="text-white">Your Operations?</span>
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Transform your development and operations with cutting-edge DevOps
              solutions. Let's build efficient, scalable, and reliable systems
              together.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            >
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <CheckCircle className="h-6 w-6 text-white bg-primary rounded-full p-1" />
                <span className="text-white font-semibold">
                  Free DevOps Assessment
                </span>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <CheckCircle className="h-6 w-6 text-white bg-primary rounded-full p-1" />
                <span className="text-white font-semibold">
                  CI/CD Pipeline Setup
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
                className="group bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 px-10 py-6 text-lg font-semibold shadow-2xl shadow-red-500/25 hover:shadow-orange-500/40 transition-all duration-300"
              >
                <Users className="mr-2 h-5 w-5" />
                Start Your DevOps Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
