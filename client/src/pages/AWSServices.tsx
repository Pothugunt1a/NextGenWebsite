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
    icon: Award,
    secondaryIcon: CheckCircle,
    title: "Certified AWS Experts",
    description:
      "Our team consists of AWS Solutions Architects, DevOps Engineers, and Data Scientists with proven expertise in architecting enterprise-scale solutions on AWS infrastructure.",
    badge: "AWS Certified",
  },
  {
    icon: Layers,
    secondaryIcon: Zap,
    title: "Full-Cycle Support",
    description:
      "From initial consulting and migration planning to 24/7 monitoring and optimization. We provide comprehensive support throughout your entire AWS journey.",
    badge: "End-to-End Service",
  },
  {
    icon: Brain,
    secondaryIcon: Cpu,
    title: "Innovation-Focused",
    description:
      "Leverage cutting-edge AWS services including Generative AI, predictive intelligence, and automation-first approaches to stay ahead of the competition.",
    badge: "GenAI Ready",
  },
  {
    icon: TrendingUp,
    secondaryIcon: BarChart3,
    title: "Agile & Scalable",
    description:
      "Modular deployments that scale from startups to enterprises. Our solutions grow with your business while maintaining optimal performance and cost efficiency.",
    badge: "Enterprise Ready",
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
    description: "HIPAA-compliant architectures, AI diagnostics, secure patient data management",
    useCases: ["AI Diagnostics", "Patient Data Security", "Telemedicine Platforms"],
  },
  {
    icon: TrendingUp,
    title: "Finance",
    description: "Secure data lakes, fraud detection, real-time transaction processing",
    useCases: ["Fraud Detection", "Risk Analytics", "Regulatory Compliance"],
  },
  {
    icon: ShoppingCart,
    title: "Retail & eCommerce",
    description: "Personalization engines, customer analytics, scalable shopping platforms",
    useCases: ["Recommendation Engines", "Inventory Management", "Customer Insights"],
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "IoT analytics, predictive maintenance, supply chain optimization",
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
    description: "Real-time multiplayer, game analytics, content delivery networks",
    useCases: ["Multiplayer Infrastructure", "Game Analytics", "Content Streaming"],
  },
];

// Advanced Technologies
const advancedTechnologies = [
  {
    icon: Globe,
    title: "Internet of Things (IoT)",
    description: "Build scalable IoT applications with AWS IoT Core and Greengrass for edge computing.",
    features: ["Device Management", "Real-time Processing", "Edge Computing"],
  },
  {
    icon: MessageSquare,
    title: "Generative AI & LLM",
    description: "Implement Large Language Models using Amazon Bedrock with private, fine-tuned capabilities.",
    features: ["Custom LLMs", "Private Deployment", "Multi-modal AI"],
  },
  {
    icon: Zap,
    title: "Serverless Computing",
    description: "Develop serverless applications with AWS Lambda and real-time processing with Kinesis.",
    features: ["Auto-scaling", "Cost Optimization", "Real-time Processing"],
  },
];

export default function AWSServices() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-slate-900 dark:via-blue-900 dark:to-cyan-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 via-blue-700/90 to-cyan-600/90"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center mb-6"
            >
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
                <Cloud className="h-16 w-16 text-white" />
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              AWS Cloud Solutions
              <span className="block text-cyan-300">for the Future</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              Welcome to NextGenAI, where innovation meets scalability. We empower businesses through Amazon Web Services (AWS) — the world's most comprehensive and widely adopted cloud platform.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Get Started with AWS
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6 rounded-xl backdrop-blur-sm transition-all duration-300"
              >
                View Our Solutions
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why AWS with NextGenAI Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Why AWS with NextGenAI?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              AWS offers over 200 fully featured services from data centers globally. With NextGenAI as your AWS partner, you gain access to industry-leading solutions that combine cloud efficiency with cutting-edge technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUsItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-8 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-blue-900 rounded-2xl border border-blue-100 dark:border-blue-800 hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 text-xs font-semibold bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 rounded-full">
                    {item.badge}
                  </span>
                </div>
                
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl mr-4">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <item.secondaryIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AWS Core Services Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our AWS Offerings
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive AWS services designed to accelerate your digital transformation and unlock new possibilities for your business.
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
                className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.backgroundGradient} opacity-90`}></div>
                
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
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Advanced Technologies Integration
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Leverage cutting-edge AWS technologies to build next-generation applications and stay ahead of the competition.
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
                className="group p-8 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-blue-900 rounded-2xl border border-blue-100 dark:border-blue-800 hover:shadow-xl transition-all duration-300"
              >
                <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl w-fit mb-6">
                  <tech.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {tech.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {tech.description}
                </p>
                
                <div className="space-y-2">
                  {tech.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Delivering specialized AWS solutions across diverse industries with deep domain expertise and proven results.
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
                className="group p-6 bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl mr-4">
                    <industry.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {industry.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {industry.description}
                </p>
                
                <div className="space-y-2">
                  {industry.useCases.map((useCase, caseIndex) => (
                    <div key={caseIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-700 dark:text-gray-300">{useCase}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Get answers to common questions about our AWS services and expertise.
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
                className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors duration-200 flex justify-between items-center"
                >
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">
                    {faq.question}
                  </span>
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="p-6 bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AWS?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Whether you're modernizing your IT stack or building the next AI-powered platform, NextGenAI is your trusted AWS partner. Let's architect the future, together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6 rounded-xl backdrop-blur-sm transition-all duration-300"
              >
                Contact Our Experts
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}