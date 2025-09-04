import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ChevronDown,
  ChevronUp,
  Shield,
  Database,
  Lock,
  Eye,
  CheckCircle,
  Users,
  Globe,
  TrendingUp,
  ArrowRight,
  Award,
  Target,
  Brain,
  AlertTriangle,
  ShieldCheck,
  X,
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
    icon: Shield,
    secondaryIcon: CheckCircle,
    title: "End-to-end coverage",
    description:
      "Comprehensive data governance solutions covering governance, security, MDM, and compliance. Our holistic approach ensures all aspects of your data ecosystem are managed, protected, and optimized for maximum business value and regulatory adherence.",
    badge: "Complete coverage",
  },
  {
    icon: Award,
    secondaryIcon: Users,
    title: "Certified experts in enterprise platforms",
    description:
      "Our team consists of certified professionals with deep expertise in AWS, Azure, GCP, Informatica, Collibra, and Databricks. We bring proven experience in implementing enterprise-grade data governance solutions across diverse technology stacks.",
    badge: "Certified professionals",
  },
  {
    icon: Globe,
    secondaryIcon: Lock,
    title: "Strong experience in regulated industries",
    description:
      "Extensive track record in healthcare, finance, and government sectors. We understand the unique compliance requirements and have successfully implemented data governance solutions that meet HIPAA, GDPR, SOC2, and other regulatory standards.",
    badge: "Regulatory expertise",
  },
  {
    icon: TrendingUp,
    secondaryIcon: Database,
    title: "Proven success in building enterprise-wide golden records",
    description:
      "Demonstrated expertise in creating Customer 360, Product 360, and Supplier 360 solutions. Our focus on scalability, automation, and trust ensures your master data management initiatives deliver sustained business value and operational efficiency.",
    badge: "Proven ROI results",
  },
];

const faqs: FAQ[] = [
  {
    question: "What is the difference between Data Governance and Master Data Management?",
    answer:
      "Data Governance is the overall framework of policies, procedures, and controls for managing data assets across the organization. Master Data Management (MDM) is a specific discipline within data governance that focuses on creating and maintaining a single, authoritative source of truth for critical business entities like customers, products, and suppliers.",
  },
  {
    question: "How long does it take to implement a data governance program?",
    answer:
      "Implementation timelines vary based on organizational complexity and scope. A basic framework can be established in 3-6 months, while comprehensive enterprise-wide programs typically take 12-18 months. We provide phased approaches to deliver value incrementally throughout the implementation process.",
  },
  {
    question: "Which compliance regulations do you help organizations meet?",
    answer:
      "We have extensive experience helping organizations comply with HIPAA, GDPR, SOC2, PCI-DSS, CCPA, and industry-specific regulations. Our governance frameworks are designed to be audit-ready and include automated compliance monitoring and reporting capabilities.",
  },
  {
    question: "What technologies do you use for data governance and MDM?",
    answer:
      "We work with leading platforms including Collibra, Informatica, Alation, Talend, Apache Atlas, Databricks Unity Catalog for governance, and Informatica MDM, SAP Master Data Governance, Reltio, and Semarchy for MDM. We also leverage cloud-native tools like AWS Lake Formation and Azure Purview.",
  },
  {
    question: "How do you ensure data quality in MDM implementations?",
    answer:
      "We implement comprehensive data quality frameworks including automated profiling, cleansing, standardization, and validation rules. Our solutions include real-time monitoring, exception handling, and continuous improvement processes to maintain high data quality standards across all master data domains.",
  },
];

const capabilities = [
  {
    icon: <Shield className="h-8 w-8 text-white" />,
    title: "Data Governance Frameworks",
    description:
      "Comprehensive policy creation for data access, usage, and retention with Role-Based Access Control (RBAC) and Identity Management (IAM). We implement metadata and lineage tracking for compliance and audits, along with data quality monitoring with automated alerts to ensure your data governance program operates effectively across the enterprise.",
    backgroundImage: "/assets/Data-Governance.png",
  },
  {
    icon: <Database className="h-8 w-8 text-white" />,
    title: "Master Data Management (MDM)",
    description:
      "Single source of truth across ERP, CRM, HR, and SaaS systems through golden record creation and entity resolution. Our Customer 360, Product 360, and Supplier 360 solutions provide real-time synchronization across applications, ensuring data consistency and accuracy throughout your enterprise ecosystem.",
    backgroundImage: "/assets/AI&Data.png",
  },
  {
    icon: <Eye className="h-8 w-8 text-white" />,
    title: "Data Catalog & Metadata Management",
    description:
      "Automated data discovery and classification capabilities with comprehensive business glossaries for consistent definitions. We leverage leading tools like Collibra, Informatica, Alation, and Databricks Unity Catalog to provide complete visibility into your data landscape and enable self-service analytics.",
    backgroundImage: "/assets/AI-DataStratergy-banner.png",
  },
  {
    icon: <Lock className="h-8 w-8 text-white" />,
    title: "Data Security & Compliance",
    description:
      "Enterprise-grade encryption at rest and in transit using KMS and TLS/SSL protocols. Our solutions include data masking, tokenization, and anonymization capabilities with regulatory compliance for HIPAA, GDPR, SOC2, and PCI-DSS. Audit-ready monitoring with CloudTrail, GuardDuty, and Azure Purview ensures continuous security oversight.",
    backgroundImage: "/assets/AI-Training.png",
  },
  {
    icon: <Globe className="h-8 w-8 text-white" />,
    title: "Cloud & Hybrid Data Governance",
    description:
      "Unified governance across AWS, Azure, GCP, and on-premises environments using cloud-native tools like AWS Lake Formation, Azure Purview, and Google Data Catalog. Our multi-cloud metadata and lineage integration ensures consistent governance policies and seamless data management across your hybrid infrastructure.",
    backgroundImage: "/assets/GenerativeAI.png",
  },
];

const techStack = [
  "Governance & Catalog: Collibra, Informatica, Alation, Talend, Apache Atlas",
  "MDM Platforms: Informatica MDM, SAP Master Data Governance, Reltio, Semarchy",
  "Cloud Governance: AWS Lake Formation, Azure Purview, Google Data Catalog",
  "Security: IAM, RBAC, KMS, DLP, Cloud-native monitoring",
  "Data Quality: Informatica Data Quality, Talend Data Quality, Great Expectations",
  "Lineage & Metadata: Apache Atlas, DataHub, Databricks Unity Catalog",
  "Compliance: AWS Config, Azure Policy, GCP Security Command Center",
  "Monitoring: CloudTrail, GuardDuty, Azure Monitor, Google Cloud Logging",
];

// Industry data for the interactive section
const industryData = [
  {
    id: "healthcare",
    name: "Healthcare",
    image: "/assets/Healthcare.png",
    content:
      "Healthcare organizations leverage our data governance solutions to ensure HIPAA compliance, secure patient data, and unify EMR/EHR systems. We implement comprehensive data governance frameworks that protect sensitive health information while enabling analytics and research initiatives that improve patient outcomes and operational efficiency.",
  },
  {
    id: "finance",
    name: "Finance",
    image: "/assets/Finance.png",
    content:
      "Financial institutions rely on our expertise for golden records supporting KYC/AML compliance, fraud prevention, and secure reporting. Our governance solutions ensure regulatory compliance while enabling real-time risk assessment, customer analytics, and automated compliance reporting that meets stringent financial industry requirements.",
  },
  {
    id: "retail",
    name: "Retail & eCommerce",
    image: "/assets/Ecommerce&Retail.png",
    content:
      "Retail organizations implement our Customer 360 solutions, product catalog standardization, and GDPR compliance frameworks. We help create unified customer views, ensure product data accuracy across channels, and implement privacy controls that build customer trust while enabling personalization and analytics.",
  },
  {
    id: "manufacturing",
    name: "Manufacturing & Supply Chain",
    image: "/assets/Manufacturing&Automation.png",
    content:
      "Manufacturing companies leverage our unified supplier master data solutions and improved demand forecasting accuracy through comprehensive data governance. We help standardize product information, optimize supply chain data, and implement quality controls that enhance operational efficiency and decision-making.",
  },
  {
    id: "government",
    name: "Government & Public Sector",
    image: "/assets/Finance.png",
    content:
      "Government agencies benefit from our open data initiatives, citizen record management, and secure data sharing capabilities. We implement governance frameworks that ensure transparency, protect citizen privacy, and enable efficient inter-agency collaboration while maintaining the highest security standards.",
  },
];

export default function DataGovernanceMDM() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState(industryData[0]);

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
            src="/assets/Data-Governance.png"
            alt="Data Governance & MDM Services"
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
                  Secure, Govern, and Trust Your Enterprise Data
                </span>
              </motion.h1>

              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl"
              >
                RTNextGenAI delivers enterprise-grade Data Governance and Master Data Management (MDM) solutions to ensure data is accurate, compliant, secure, and trusted for BI, AI, and business transformation
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
                    Enterprise Data Governance Solutions
                  </span>
                  <Award className="h-4 w-4 text-blue-400 fill-current" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Why Data Governance & MDM Matter Section */}
      <section className="py-20 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 to-cyan-500/10"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Why Data Governance &{" "}
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  MDM Matter
                </span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Enterprises are collecting more data than ever before — but without governance, 
                data becomes a liability. Transform your data from risk to value.
              </p>
            </motion.div>

            {/* Business Risks vs Benefits - Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Left Column - Risks without Governance */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-red-900/20 to-red-800/20 border border-red-500/30 rounded-2xl p-8 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                      <AlertTriangle className="h-6 w-6 text-red-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-red-300">Risks Without Governance</h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      "Wrong business decisions based on poor data quality",
                      "Compliance violations (HIPAA, GDPR, SOC2)",
                      "Data silos preventing unified insights",
                      "Higher operational costs due to duplication",
                      "Security risks and data breaches",
                      "Inconsistent data definitions across teams"
                    ].map((risk, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <X className="h-5 w-5 text-red-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{risk}</span>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-red-500/10 rounded-lg border border-red-500/20">
                    <p className="text-red-300 font-semibold text-center">
                      Unmanaged Data = Risk
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Benefits with Governance */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-green-900/20 to-emerald-800/20 border border-green-500/30 rounded-2xl p-8 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                      <ShieldCheck className="h-6 w-6 text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-green-300">Benefits with Governance</h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      "Trusted decisions from high-quality data",
                      "Audit-ready compliance and regulatory adherence",
                      "Single source of truth across all systems",
                      "Improved operational efficiency and cost savings",
                      "Enhanced security with proper access controls",
                      "Consistent data definitions and business rules"
                    ].map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                    <p className="text-green-300 font-semibold text-center">
                      Governed Data = Value
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Infographic Banner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border border-blue-500/30 rounded-2xl p-8">
                <div className="flex items-center justify-center gap-8 flex-wrap">
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center">
                      <AlertTriangle className="h-8 w-8 text-red-400" />
                    </div>
                    <div className="text-left">
                      <p className="text-2xl font-bold text-red-300">Unmanaged Data</p>
                      <p className="text-red-400">= Risk & Liability</p>
                    </div>
                  </div>

                  <ArrowRight className="h-8 w-8 text-gray-400" />

                  <div className="flex items-center gap-3">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
                      <ShieldCheck className="h-8 w-8 text-green-400" />
                    </div>
                    <div className="text-left">
                      <p className="text-2xl font-bold text-green-300">Governed Data</p>
                      <p className="text-green-400">= Business Value</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-16 text-white relative overflow-hidden">
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
                <Award className="h-4 w-4 text-cyan-400" />
                <span className="text-cyan-300 text-sm font-medium">
                  Why Choose RTNextGenAI
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Why choose{" "}
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  RTNextGenAI
                </span>{" "}
                for Data Governance & MDM
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Partner with enterprise data governance experts who combine deep
                technical knowledge with proven regulatory compliance results
              </p>
            </motion.div>

            {/* Embla Carousel */}
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
                  {/* First slide - items 0,1 */}
                  <CarouselItem className="pl-2 md:pl-4">
                    <div className="p-6">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {whyChooseUsItems.slice(0, 2).map((item, index) => {
                          const IconComponent = item.icon;
                          const SecondaryIconComponent = item.secondaryIcon;

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
                                  <div className="relative">
                                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center border border-cyan-400/30 group-hover:border-cyan-400/50 transition-colors">
                                      <IconComponent className="h-10 w-10 text-white" />
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                                      <SecondaryIconComponent className="h-4 w-4 text-white" />
                                    </div>
                                  </div>

                                  <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                                      {item.title}
                                    </h3>
                                    <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mb-4"></div>
                                  </div>
                                </div>

                                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                                  {item.description}
                                </p>

                                <div className="flex items-center gap-2 text-cyan-400">
                                  <CheckCircle className="h-4 w-4" />
                                  <span className="text-sm font-medium">
                                    {item.badge}
                                  </span>
                                </div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  </CarouselItem>

                  {/* Second slide - items 2,3 */}
                  <CarouselItem className="pl-2 md:pl-4">
                    <div className="p-6">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {whyChooseUsItems.slice(2, 4).map((item, index) => {
                          const IconComponent = item.icon;
                          const SecondaryIconComponent = item.secondaryIcon;

                          return (
                            <motion.div
                              key={index + 2}
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
                                  <div className="relative">
                                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center border border-cyan-400/30 group-hover:border-cyan-400/50 transition-colors">
                                      <IconComponent className="h-10 w-10 text-white" />
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                                      <SecondaryIconComponent className="h-4 w-4 text-white" />
                                    </div>
                                  </div>

                                  <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                                      {item.title}
                                    </h3>
                                    <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mb-4"></div>
                                  </div>
                                </div>

                                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                                  {item.description}
                                </p>

                                <div className="flex items-center gap-2 text-cyan-400">
                                  <CheckCircle className="h-4 w-4" />
                                  <span className="text-sm font-medium">
                                    {item.badge}
                                  </span>
                                </div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  </CarouselItem>
                </CarouselContent>

                <CarouselPrevious className="left-4 bg-gradient-to-r from-gray-800/90 to-gray-700/90 border border-cyan-400/40 hover:border-cyan-400/70 text-cyan-400 hover:text-white" />
                <CarouselNext className="right-4 bg-gradient-to-r from-gray-800/90 to-gray-700/90 border border-cyan-400/40 hover:border-cyan-400/70 text-cyan-400 hover:text-white" />
              </Carousel>
            </div>

            {/* Call to Action */}
            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="inline-flex items-center gap-4 bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">
                    Ready to secure your data?
                  </span>
                </div>
                <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Request Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Data Governance & MDM Capabilities */}
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
              Our Data Governance & MDM Capabilities
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive data governance solutions that ensure trust, compliance, and quality
            </p>
          </motion.div>

          {/* 2x2 Grid Layout with Central Image */}
          <div className="max-w-8xl mx-auto relative">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Top Row - Data Governance Frameworks and Master Data Management */}
              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Data Governance Frameworks */}
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
                        src={capabilities[0].backgroundImage}
                        alt={capabilities[0].title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/90"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Shield className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          01
                        </div>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {capabilities[0].title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {capabilities[0].description}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Master Data Management */}
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
                        src={capabilities[1].backgroundImage}
                        alt={capabilities[1].title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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
                        {capabilities[1].title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {capabilities[1].description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Second Row - Central Image with Data Catalog */}
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
                        src="/assets/Data-Governance.png"
                        alt="Data Governance Capabilities"
                        className="w-full h-auto object-contain group-hover:scale-105 transition-all duration-700"
                      />
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute top-8 right-8 flex flex-col gap-4">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                        <Shield className="h-8 w-8 text-white" />
                      </div>
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                        DG
                      </div>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="mb-4">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                          <span className="text-blue-200 text-sm font-medium">
                            Enterprise Data Governance
                          </span>
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-3 leading-tight">
                          Data Governance & MDM
                        </h3>
                        <p className="text-blue-100 leading-relaxed mb-6">
                          Comprehensive data governance solutions that ensure trust and compliance.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Data Catalog & Metadata Management */}
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
                        src={capabilities[2].backgroundImage}
                        alt={capabilities[2].title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/90"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Eye className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          03
                        </div>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {capabilities[2].title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {capabilities[2].description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Third Row - Data Security and Cloud Governance */}
              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Data Security & Compliance */}
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
                        src={capabilities[3].backgroundImage}
                        alt={capabilities[3].title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/90"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Lock className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          04
                        </div>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {capabilities[3].title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {capabilities[3].description}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Cloud & Hybrid Data Governance */}
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
                        src={capabilities[4].backgroundImage}
                        alt={capabilities[4].title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/90"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Globe className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          05
                        </div>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {capabilities[4].title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {capabilities[4].description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Industries Section */}
      <section className="py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Industry Use Cases
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
                        selectedIndustry.id === industry.id
                          ? "default"
                          : "outline"
                      }
                      className={`text-center justify-center p-4 h-auto min-h-[60px] transition-all duration-300 ${
                        selectedIndustry.id === industry.id
                          ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-none shadow-lg"
                          : "bg-slate-800/50 border-slate-600 text-white hover:bg-slate-700/70 hover:border-blue-400/40 hover:text-white"
                      }`}
                      onClick={() => {
                        setSelectedIndustry(industry);
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
                  key={selectedIndustry.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-cyan-400/20 rounded-xl overflow-hidden"
                >
                  {/* Industry Image */}
                  <div className="relative h-64 overflow-hidden group cursor-pointer">
                    <img
                      src={selectedIndustry.image}
                      alt={selectedIndustry.name}
                      className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent group-hover:from-gray-900/60 transition-all duration-300"></div>
                    <div className="absolute bottom-4 left-6">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {selectedIndustry.name}
                      </h3>
                    </div>
                  </div>

                  {/* Industry Content */}
                  <div className="p-6">
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {selectedIndustry.content}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Technologies We Use
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-lg border border-gray-700 hover:border-cyan-400/40 transition-all duration-300"
                >
                  <p className="text-gray-300 text-sm font-medium">{tech}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">FAQs</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300">
                Common questions about our Data Governance & MDM services
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Side - Image */}
              <div className="lg:col-span-5">
                <div className="relative group">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src="/assets/Data-Governance.png"
                      alt="Data Governance Technology"
                      className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Data Governance Solutions
                      </h3>
                      <p className="text-gray-200 text-sm">
                        Enterprise-grade governance frameworks for trusted data management
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
              <Shield className="h-5 w-5 text-cyan-400" />
              <span className="text-white font-medium">
                Enterprise Data Governance Experts
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
                Is your data trusted,
              </span>
              <br />
              <span className="text-white">secure, and audit-ready?</span>
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Partner with RTNextGenAI to implement enterprise-class Data Governance and MDM solutions that power reliable BI, AI, and digital transformation
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
                  Free Data Governance Assessment
                </span>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <CheckCircle className="h-6 w-6 text-white bg-primary rounded-full p-1" />
                <span className="text-white font-semibold">
                  Compliance Ready Solutions
                </span>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <CheckCircle className="h-6 w-6 text-white bg-primary rounded-full p-1" />
                <span className="text-white font-semibold">Proven Results</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                className="group bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-10 py-6 text-lg font-semibold shadow-2xl shadow-blue-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
              >
                <Shield className="mr-2 h-5 w-5" />
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-cyan-400/40 text-cyan-400 hover:bg-cyan-400/10 hover:text-white px-10 py-6 text-lg font-semibold transition-all duration-300"
              >
                Request a Demo
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}