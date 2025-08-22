
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Cloud,
  Shield,
  Zap,
  Database,
  Globe,
  Server,
  Users,
  BarChart3,
  Settings,
  ArrowRight,
  CheckCircle,
  Award,
  Layers,
  Target,
  TrendingUp,
  Building,
  Factory,
  GraduationCap,
  Star,
  Clock,
  Sparkles,
  ShoppingCart,
  UserCheck,
  MessageSquare,
  Workflow,
  Brain,
  Phone,
  Mail,
  Calendar,
  FileText,
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
    icon: <Users className="h-8 w-8" />,
    title: "98%",
    subtitle: "User Adoption",
    description: "Customer satisfaction",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "60%",
    subtitle: "Sales Increase",
    description: "Average improvement",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "80%",
    subtitle: "Time Savings",
    description: "Process automation",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "200+",
    subtitle: "CRM Implementations",
    description: "Successful deployments",
    color: "from-orange-500 to-red-500",
  },
];

const whyChooseUsItems = [
  {
    icon: <Award className="h-10 w-10" />,
    title: "Salesforce Certified Partners",
    description:
      "Our team consists of Salesforce Certified Administrators, Developers, and Architects with proven expertise in enterprise CRM implementations and customizations.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Layers className="h-10 w-10" />,
    title: "End-to-End CRM Solutions",
    description:
      "From initial consultation and custom development to integration and ongoing support. We provide comprehensive Salesforce services throughout your digital transformation.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <Brain className="h-10 w-10" />,
    title: "AI-Powered Automation",
    description:
      "Leverage Salesforce AI and Einstein Analytics to drive intelligent insights, predictive analytics, and automation-first approaches for competitive advantage.",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: <TrendingUp className="h-10 w-10" />,
    title: "Scalable & Customizable",
    description:
      "Tailored Salesforce solutions that scale from small businesses to large enterprises while maintaining optimal performance, user adoption, and ROI.",
    color: "from-orange-500 to-red-500",
  },
];

const faqs: FAQ[] = [
  {
    question: "Why should we choose Salesforce for our CRM needs?",
    answer:
      "Salesforce is the world's #1 CRM platform, offering comprehensive customer relationship management, sales automation, and service cloud capabilities. With NextGenAI as your Salesforce partner, you get customized solutions that drive customer engagement and business growth.",
  },
  {
    question: "How do you ensure data security and compliance in Salesforce?",
    answer:
      "We implement Salesforce Shield, field-level security, role-based access controls, and audit trails. Our solutions comply with GDPR, HIPAA, SOX, and other regulatory requirements while maintaining data integrity and user privacy.",
  },
  {
    question: "Can you help migrate our existing CRM data to Salesforce?",
    answer:
      "Yes, we provide comprehensive data migration services using Salesforce Data Loader and integration tools. We ensure data quality, mapping accuracy, and minimal business disruption during the migration process.",
  },
  {
    question: "What Salesforce clouds and products do you specialize in?",
    answer:
      "We specialize in Sales Cloud, Service Cloud, Marketing Cloud, Commerce Cloud, Community Cloud, and Einstein Analytics. We also work with Salesforce Platform for custom applications and integrations.",
  },
  {
    question: "How do you help with Salesforce adoption and training?",
    answer:
      "We provide comprehensive user training, change management, and adoption strategies. Our approach includes role-based training, documentation, ongoing support, and performance monitoring to ensure successful user adoption.",
  },
];

// Salesforce Core Services
const salesforceOfferings = [
  {
    icon: Users,
    title: "Sales Cloud",
    description:
      "Comprehensive sales automation with lead management, opportunity tracking, forecasting, and Einstein AI for intelligent sales insights and productivity.",
    features: [
      "Lead and opportunity management",
      "Sales process automation",
      "Einstein AI predictions",
      "Mobile sales enablement",
    ],
    backgroundImage: "/assets/cloud_1752856032189.gif",
  },
  {
    icon: Phone,
    title: "Service Cloud",
    description:
      "Complete customer service platform with case management, knowledge base, omnichannel support, and AI-powered service automation.",
    features: [
      "Case and knowledge management",
      "Omnichannel support",
      "Service automation",
      "Customer self-service portals",
    ],
    backgroundImage: "/assets/cloud2_1752856022708.gif",
  },
  {
    icon: Mail,
    title: "Marketing Cloud",
    description:
      "Integrated marketing automation with email campaigns, social media management, customer journey mapping, and personalized marketing experiences.",
    features: [
      "Email marketing automation",
      "Customer journey builder",
      "Social media integration",
      "Personalization and segmentation",
    ],
    backgroundImage: "/assets/AI-ML.png",
  },
  {
    icon: ShoppingCart,
    title: "Commerce Cloud",
    description:
      "Enterprise e-commerce platform with personalized shopping experiences, inventory management, and integrated payment processing.",
    features: [
      "B2B and B2C commerce",
      "Personalized experiences",
      "Mobile commerce",
      "Order management",
    ],
    backgroundImage: "/assets/cloud3_1752856017147.gif",
  },
  {
    icon: BarChart3,
    title: "Analytics & Einstein",
    description:
      "AI-powered analytics with Einstein Discovery, Tableau integration, custom dashboards, and predictive insights for data-driven decisions.",
    features: [
      "Einstein Analytics",
      "Custom dashboards",
      "Predictive modeling",
      "Real-time reporting",
    ],
    backgroundImage: "/assets/cloud 5_1752856047806.gif",
  },
  {
    icon: Settings,
    title: "Platform & Integration",
    description:
      "Custom application development on Salesforce Platform with API integrations, workflow automation, and third-party system connectivity.",
    features: [
      "Custom app development",
      "API integrations",
      "Workflow automation",
      "Third-party connections",
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
      "Transform healthcare operations with HIPAA-compliant Salesforce Health Cloud, patient relationship management, care coordination, and telehealth solutions. Our solutions improve patient engagement, streamline care delivery, and ensure regulatory compliance while enhancing provider efficiency.",
  },
  {
    id: "financial",
    name: "Financial Services",
    image: "/assets/Finance.png",
    content:
      "Accelerate financial services with Salesforce Financial Services Cloud, wealth management, banking solutions, and insurance platforms. We deliver customer-centric solutions that improve client relationships, ensure compliance, and drive business growth in the financial sector.",
  },
  {
    id: "retail",
    name: "Retail & Consumer",
    image: "/assets/Ecommerce.png",
    content:
      "Enhance retail operations with omnichannel customer experiences, loyalty programs, inventory management, and personalized marketing. Our Salesforce solutions help retailers increase customer lifetime value, improve operational efficiency, and drive sustainable growth.",
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    image: "/assets/Manufacturing.png",
    content:
      "Optimize manufacturing operations with Salesforce Manufacturing Cloud, partner relationship management, supply chain visibility, and production forecasting. Our solutions help manufacturers improve collaboration, reduce costs, and accelerate time-to-market.",
  },
  {
    id: "nonprofit",
    name: "Nonprofit",
    image: "/assets/Education.png",
    content:
      "Empower nonprofit organizations with Salesforce Nonprofit Cloud, donor management, volunteer coordination, and program delivery tracking. Our solutions help nonprofits increase fundraising effectiveness, improve stakeholder engagement, and measure program impact.",
  },
  {
    id: "education",
    name: "Higher Education",
    image: "/assets/Media.png",
    content:
      "Transform educational institutions with Salesforce Education Cloud, student lifecycle management, alumni relations, and advancement services. Our solutions help universities improve student success, increase enrollment, and strengthen alumni engagement.",
  },
];

export default function SalesforceServices() {
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
        {/* Background for Salesforce page */}
        <div className="absolute inset-0">
          <img
            src="/assets/CloudComputing-banner.png"
            alt="Salesforce CRM Solutions"
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
              <span className="bg-gradient-to-r from-white via-blue-100 to-[#00A1E0] bg-clip-text text-transparent">
                Salesforce CRM Solutions
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl"
            >
              Transform your customer relationships with NextGenAI's Salesforce
              expertise. We deliver comprehensive CRM solutions that drive
              customer engagement, sales growth, and business success across all
              industries.
            </motion.p>

            {/* Badge below description */}
            <div className="mb-32">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#00A1E0]/20 border border-[#00A1E0]/30 rounded-full backdrop-blur-sm"
              >
                <CheckCircle className="h-5 w-5 text-cyan-400 fill-none" />
                <span className="text-white font-medium">
                  Salesforce Certified Partner
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

      {/* Our Salesforce Offerings */}
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
              Our Salesforce Solutions
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive Salesforce CRM solutions designed to transform your
              customer relationships and drive business growth
            </p>
          </motion.div>

          {/* Salesforce Offerings Layout */}
          <div className="max-w-8xl mx-auto relative">
            {/* Top Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {salesforceOfferings.slice(0, 2).map((offering, index) => (
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
                      alt="Salesforce CRM Solutions"
                      className="w-full h-auto object-contain group-hover:scale-105 transition-all duration-700"
                    />
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute top-8 right-8 flex flex-col gap-4">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                      SF
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="mb-4">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                        <span className="text-blue-200 text-sm font-medium">
                          Salesforce CRM Hub
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-3 leading-tight">
                        Customer-Centric Solutions
                      </h3>
                      <p className="text-blue-100 leading-relaxed mb-6">
                        Advanced Salesforce solutions that transform customer
                        relationships, streamline sales processes, and drive
                        sustainable business growth.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Side - Items 3 & 4 */}
              <div className="flex flex-col gap-6">
                {salesforceOfferings.slice(2, 4).map((offering, index) => (
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
              {salesforceOfferings.slice(4).map((offering, index) => (
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
                How Our Salesforce Solutions Help Different Industries
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

      {/* Why Salesforce with NextGenAI? Section */}
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
              Why Salesforce with NextGenAI?
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Salesforce is the world's #1 CRM platform with comprehensive
              customer relationship management capabilities. With NextGenAI as
              your Salesforce partner, you gain access to industry-leading
              solutions that drive customer engagement and business growth.
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
                Get answers to common questions about our Salesforce services
                and expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Side - Salesforce Image */}
              <div className="lg:col-span-5">
                <div className="relative">
                  <img
                    src="./assets/CloudComputing-banner.png"
                    alt="Salesforce CRM Technology"
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
                Trusted Salesforce Partner Worldwide
              </span>
              <Award className="h-4 w-4 text-blue-400 fill-current" />
            </motion.div>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-white via-blue-100 to-[#00A1E0] bg-clip-text text-transparent">
                Transform Your
              </span>
              <br />
              <span className="text-white">Customer Relationships</span>
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Whether you're implementing your first CRM or scaling your
              customer operations, NextGenAI is your trusted Salesforce partner.
              Let's build lasting customer relationships together.
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
                  Free CRM Assessment
                </span>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <CheckCircle className="h-6 w-6 text-white bg-primary rounded-full p-1" />
                <span className="text-white font-semibold">
                  Salesforce Certified
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
