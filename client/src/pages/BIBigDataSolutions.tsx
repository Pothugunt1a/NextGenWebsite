
import { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Database,
  BarChart3,
  Brain,
  Zap,
  Shield,
  TrendingUp,
  Eye,
  Clock,
  Target,
  ArrowRight,
  Users,
  Award,
  Cloud,
  Cpu,
  Network,
  Settings,
  Lightbulb,
  MessageSquare,
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
import Layout from "../components/Layout";

// Service areas data for the interactive section
const serviceAreaData = [
  {
    id: "data-engineering-etl",
    name: "Data Engineering & ETL",
    image: "/assets/AI-DataStratergy-banner.png",
    content: "We design robust data pipelines that move, transform, and prepare data for analytics and AI. Our comprehensive ETL/ELT solutions handle batch and real-time processing at enterprise scale.",
    features: [
      "ETL & ELT pipeline design (batch + real-time)",
      "Tools: Apache Spark, Databricks, Apache Airflow, AWS Glue, Azure Data Factory",
      "Data integration across SQL, NoSQL, APIs, SaaS, and IoT devices",
      "Streaming ingestion with Kafka, Kinesis, Azure Event Hub",
      "Automation & orchestration for large-scale deployments"
    ],
    additionalInfo: "Use Cases: Collecting IoT sensor data at scale, Migrating enterprise ERP data into cloud pipelines, Preparing ML-ready datasets for predictive models."
  },
  {
    id: "data-warehousing-lakes",
    name: "Data Warehousing & Lakehouse",
    image: "/assets/AI-Capabilities.gif",
    content: "Build modern, cloud-first data platforms that unify structured, semi-structured, and unstructured data. Our solutions provide scalable storage for AI/ML and BI workloads.",
    features: [
      "Cloud Data Warehouses: Snowflake, Amazon Redshift, Azure Synapse, Google BigQuery",
      "Data Lakes: AWS S3, Azure Data Lake Storage, Delta Lake, Hadoop HDFS",
      "Lakehouse: Databricks Unified Analytics, Delta Lake",
      "Query acceleration with Presto, Athena, Dremio",
      "Metadata & cataloging with Hive Metastore, Unity Catalog"
    ],
    additionalInfo: "Use Cases: Centralizing enterprise data into a single source of truth, Creating foundation for BI dashboards and ML pipelines, Handling petabyte-scale data cost-effectively."
  },
  {
    id: "business-intelligence",
    name: "Business Intelligence & Visualization",
    image: "/assets/AI-Components.gif",
    content: "Empower decision-makers with real-time dashboards, interactive reporting, and predictive insights. Our BI solutions provide self-service analytics for business teams.",
    features: [
      "BI Tools: Power BI, Tableau, Qlik, Looker",
      "Embedded BI for web & mobile apps",
      "Real-time analytics with Druid, ClickHouse, Superset",
      "KPI-driven dashboards for executives",
      "Integration with ERP, CRM, IoT, and cloud platforms"
    ],
    additionalInfo: "Use Cases: Sales & marketing performance dashboards, Healthcare patient care & compliance dashboards, Financial reporting with drill-down analytics."
  },
  {
    id: "advanced-analytics",
    name: "Advanced Analytics & AI/ML",
    image: "/assets/AI-ML.png",
    content: "Go beyond BI into predictive and prescriptive analytics with ML and AI. Our solutions provide accurate predictions, recommendations, and real-time decision-making support.",
    features: [
      "ML Platforms: AWS SageMaker, Azure ML, Google Vertex AI, Databricks MLflow",
      "Deep Learning Frameworks: TensorFlow, PyTorch, Keras",
      "NLP: spaCy, Hugging Face Transformers",
      "Computer Vision: OpenCV, AWS Rekognition",
      "ML model lifecycle management (MLOps)"
    ],
    additionalInfo: "Use Cases: Retail demand forecasting, Fraud detection in finance, Healthcare predictive diagnostics, AI-powered recommendations & personalization."
  },
  {
    id: "real-time-streaming",
    name: "Real-Time Data & Streaming",
    image: "/assets/AI-Robotic.png",
    content: "Process and analyze data-in-motion for instant decision-making. Our streaming solutions enable real-time anomaly detection and event-driven architectures.",
    features: [
      "Streaming platforms: Apache Kafka, AWS Kinesis, Azure Event Hub, Apache Flink",
      "Real-time databases: Cassandra, DynamoDB, InfluxDB, TimescaleDB",
      "Stream processing frameworks: Spark Streaming, Storm, Beam",
      "IoT device monitoring and clickstream analytics",
      "Event-driven architectures with serverless"
    ],
    additionalInfo: "Use Cases: Smart manufacturing with IoT, Financial transaction monitoring, Retail personalization in real time, Anomaly detection systems."
  },
  {
    id: "data-governance",
    name: "Data Governance & MDM",
    image: "/assets/AI-Intelligent.png",
    content: "Ensure your data is secure, compliant, and trusted across the enterprise. Our governance solutions provide metadata management and role-based access control.",
    features: [
      "Governance Tools: Collibra, Informatica, Alation, Databricks Unity Catalog",
      "Security: IAM, RBAC, KMS, encryption",
      "Compliance: HIPAA, GDPR, CCPA, SOC 2",
      "Master Data Management (MDM) across ERP, CRM, SaaS",
      "Automated data lineage tracking"
    ],
    additionalInfo: "Use Cases: Regulatory compliance in healthcare/finance, Single source of truth for customer data, Secure cloud adoption with enterprise governance."
  }
];

// Core capabilities for the main section
const capabilities = [
  {
    icon: <Database className="h-8 w-8 text-white" />,
    title: "Data Engineering & ETL",
    description:
      "Robust data pipelines that move, transform, and prepare data for analytics and AI with real-time and batch processing capabilities.",
    backgroundImage: "/assets/AI-DataStratergy-banner.png",
  },
  {
    icon: <Cloud className="h-8 w-8 text-white" />,
    title: "Data Warehousing & Lakehouse",
    description:
      "Modern, cloud-first data platforms that unify structured, semi-structured, and unstructured data for enterprise analytics.",
    backgroundImage: "/assets/AI-Capabilities.gif",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-white" />,
    title: "Business Intelligence & Visualization",
    description:
      "Real-time dashboards, interactive reporting, and predictive insights that empower data-driven decision making.",
    backgroundImage: "/assets/AI-Components.gif",
  },
  {
    icon: <Brain className="h-8 w-8 text-white" />,
    title: "Advanced Analytics & AI/ML",
    description:
      "Predictive and prescriptive analytics with machine learning and AI for accurate forecasting and recommendations.",
    backgroundImage: "/assets/AI-ML.png",
  },
  {
    icon: <Zap className="h-8 w-8 text-white" />,
    title: "Real-Time Data & Streaming",
    description:
      "Process and analyze data-in-motion for instant decision-making with streaming platforms and real-time analytics.",
    backgroundImage: "/assets/AI-Robotic.png",
  },
  {
    icon: <Shield className="h-8 w-8 text-white" />,
    title: "Data Governance & MDM",
    description:
      "Secure, compliant, and trusted data management with comprehensive governance and master data management solutions.",
    backgroundImage: "/assets/AI-Intelligent.png",
  },
];

// Why choose us items for carousel
const whyChooseUsItems = [
  {
    icon: Database,
    title: "End-to-End Data Lifecycle",
    description:
      "Complete expertise from data ingestion and analytics to AI/ML deployment and governance, ensuring seamless data transformation.",
    badge: "Full-Stack Data Solutions",
  },
  {
    icon: Award,
    title: "Certified Cloud Professionals",
    description:
      "Team of certified experts in AWS, Azure, GCP, Snowflake, and Databricks with proven track record in enterprise deployments.",
    badge: "Industry Certified",
  },
  {
    icon: TrendingUp,
    title: "AI-Ready Architecture",
    description:
      "Future-ready designs that seamlessly integrate AI, IoT, mobile, and web applications for scalable business growth.",
    badge: "Future-Proof Solutions",
  },
  {
    icon: Users,
    title: "Industry Experience",
    description:
      "Strong portfolio across healthcare, finance, retail, and manufacturing with deep understanding of sector-specific requirements.",
    badge: "Cross-Industry Expertise",
  },
  {
    icon: Target,
    title: "Measurable Business Impact",
    description:
      "Data-driven solutions that deliver measurable ROI through improved efficiency, better insights, and automated decision-making.",
    badge: "Proven Results",
  },
];

// Industry applications
const industryApplications = [
  {
    name: "Healthcare & Life Sciences",
    image: "/assets/Healthcare&LifeScience.png",
    description:
      "Transform healthcare delivery with predictive care analytics, compliance dashboards, and patient data platforms. Our solutions enable real-time monitoring, clinical decision support, and regulatory compliance while improving patient outcomes.",
    useCases: [
      "Predictive Care Analytics",
      "Compliance Dashboards",
      "Patient Data Platforms",
      "Clinical Decision Support",
    ],
  },
  {
    name: "Financial Services",
    image: "/assets/Finance.png",
    description:
      "Enhance financial operations with fraud detection, risk analytics, and algorithmic trading systems. Our solutions provide real-time transaction monitoring, regulatory reporting, and customer 360-degree views for competitive advantage.",
    useCases: [
      "Fraud Detection",
      "Risk Analytics",
      "Algorithmic Trading",
      "Regulatory Reporting",
    ],
  },
  {
    name: "Retail & E-commerce",
    image: "/assets/Ecommerce.png",
    description:
      "Optimize retail operations with demand forecasting, customer 360 analytics, and real-time personalization. Our solutions enable inventory optimization, price analytics, and omnichannel customer experiences.",
    useCases: [
      "Demand Forecasting",
      "Customer 360 Analytics",
      "Real-Time Personalization",
      "Inventory Optimization",
    ],
  },
  {
    name: "Manufacturing & IoT",
    image: "/assets/Manufacturing.png",
    description:
      "Enable smart manufacturing with IoT-driven predictive maintenance, digital twins, and supply chain optimization. Our solutions reduce downtime, improve quality control, and implement Industry 4.0 technologies.",
    useCases: [
      "Predictive Maintenance",
      "Digital Twins",
      "Supply Chain Optimization",
      "Quality Control Analytics",
    ],
  },
  {
    name: "Technology & Startups",
    image: "/assets/Internet-Tech-Startup.png",
    description:
      "Accelerate innovation with data-driven APIs, app analytics, and user behavior insights. Our solutions provide real-time personalization, A/B testing frameworks, and scalable analytics infrastructure.",
    useCases: [
      "Data-Driven APIs",
      "App Analytics",
      "User Behavior Insights",
      "A/B Testing Frameworks",
    ],
  },
];

export default function BIBigDataSolutions() {
  const [selectedServiceArea, setSelectedServiceArea] = useState(serviceAreaData[0]);
  const [selectedIndustryApp, setSelectedIndustryApp] = useState(industryApplications[0]);

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/assets/AI-DataStratergy-banner.png"
              alt="BI & Big Data Solutions Banner"
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
                <span className="bg-gradient-to-r from-white via-blue-100 to-[#0080FF] bg-clip-text text-transparent">
                  Turn Data Into Intelligence with BI & Big Data Solutions
                </span>
              </motion.h1>

              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-4xl"
              >
                At RT NextGen AI, we help enterprises harness the power of Big Data, Business Intelligence (BI), AI, Machine Learning, and IoT to make smarter decisions, automate workflows, and unlock new opportunities.
              </motion.p>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
                  Request a Demo
                </button>
                <button className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300">
                  Talk to a Data Expert
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Our BI & Big Data Capabilities Section */}
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
                Our BI & Big Data Capabilities
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive data solutions that transform raw information into actionable business intelligence
              </p>
            </motion.div>

            {/* Capabilities Grid */}
            <div className="max-w-8xl mx-auto relative">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Top Row */}
                <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {capabilities.slice(0, 2).map((capability, index) => (
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
                            src={capability.backgroundImage}
                            alt={capability.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/90"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            {capability.icon}
                          </div>
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                              {index + 1}
                            </div>
                          </div>
                          <h4 className="text-lg font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                            {capability.title}
                          </h4>
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {capability.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Middle Row with Central Feature */}
                <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* Central Feature Card */}
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
                          src="/assets/AI-DataStratergy-banner.png"
                          alt="BI & Big Data Capabilities"
                          className="w-full h-auto object-contain group-hover:scale-105 transition-all duration-700"
                        />
                      </div>

                      {/* Floating Elements */}
                      <div className="absolute top-8 right-8 flex flex-col gap-4">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                          <Database className="h-8 w-8 text-white" />
                        </div>
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                          BI
                        </div>
                      </div>

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <div className="mb-4">
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                            <span className="text-blue-200 text-sm font-medium">
                              Data Intelligence Hub
                            </span>
                          </div>
                          <h3 className="text-3xl font-bold text-white mb-3 leading-tight">
                            Comprehensive BI & Big Data Solutions
                          </h3>
                          <p className="text-blue-100 leading-relaxed mb-6">
                            Transform raw data into actionable intelligence with our end-to-end analytics and AI-powered insights platform.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Third capability */}
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
                          {capabilities[2].icon}
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

                {/* Bottom Row */}
                <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
                  {capabilities.slice(3).map((capability, index) => (
                    <motion.div
                      key={index + 3}
                      initial={{ opacity: 0, x: index === 0 ? -100 : index === 1 ? 0 : 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className="group cursor-pointer h-full"
                    >
                      <div className="flex flex-col items-center gap-4 p-6 bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-blue-500/50 hover:bg-gray-800/80 transition-all duration-500 group-hover:translate-y-2 h-full">
                        <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                          <img
                            src={capability.backgroundImage}
                            alt={capability.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/90"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            {capability.icon}
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center gap-3 mb-2">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                              {index + 4}
                            </div>
                          </div>
                          <h4 className="text-lg font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                            {capability.title}
                          </h4>
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {capability.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Services Section */}
        <section className="py-16 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">
                  How we implement BI & Big Data across multiple service areas
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Navigation */}
                <div className="lg:col-span-4">
                  <div className="grid grid-cols-1 gap-4">
                    {serviceAreaData.map((serviceArea) => (
                      <Button
                        key={serviceArea.id}
                        variant={
                          selectedServiceArea.id === serviceArea.id
                            ? "default"
                            : "outline"
                        }
                        className={`text-center justify-center p-4 h-auto min-h-[60px] transition-all duration-300 ${
                          selectedServiceArea.id === serviceArea.id
                            ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-none shadow-lg"
                            : "bg-slate-800/50 border-slate-600 text-white hover:bg-slate-700/70 hover:border-blue-400/40 hover:text-white"
                        }`}
                        onClick={() => {
                          setSelectedServiceArea(serviceArea);
                        }}
                      >
                        <span className="font-semibold text-sm leading-tight text-center whitespace-normal">
                          {serviceArea.name}
                        </span>
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Right Content Display */}
                <div className="lg:col-span-8">
                  <motion.div
                    key={selectedServiceArea.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-cyan-400/20 rounded-xl overflow-hidden"
                  >
                    {/* Service Area Image */}
                    <div className="relative h-64 overflow-hidden group cursor-pointer">
                      <img
                        src={selectedServiceArea.image}
                        alt={selectedServiceArea.name}
                        className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent group-hover:from-gray-900/60 transition-all duration-300"></div>
                      <div className="absolute bottom-4 left-6">
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                          {selectedServiceArea.name}
                        </h3>
                      </div>
                    </div>

                    {/* Service Area Content */}
                    <div className="p-6 space-y-6">
                      <p className="text-gray-300 leading-relaxed text-lg">
                        {selectedServiceArea.content}
                      </p>

                      {/* Features List */}
                      {selectedServiceArea.features && (
                        <div className="space-y-4">
                          <h4 className="text-xl font-semibold text-white mb-4">
                            Key Features & Technologies:
                          </h4>
                          <div className="grid gap-3">
                            {selectedServiceArea.features.map((feature, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex items-start space-x-3"
                              >
                                <CheckCircle className="h-5 w-5 text-cyan-400 mt-1 flex-shrink-0" />
                                <p className="text-gray-300 text-sm leading-relaxed">{feature}</p>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Additional Information */}
                      {selectedServiceArea.additionalInfo && (
                        <div className="mt-6 p-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg">
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {selectedServiceArea.additionalInfo}
                          </p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Applications Section */}
        <section className="py-16 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Where BI & Big Data Are Used Across Industries
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Navigation */}
                <div className="lg:col-span-4">
                  <div className="grid grid-cols-1 gap-4">
                    {industryApplications.map((industry, index) => (
                      <Button
                        key={index}
                        variant={
                          selectedIndustryApp?.name === industry.name
                            ? "default"
                            : "outline"
                        }
                        className={`text-center justify-center p-4 h-auto min-h-[60px] transition-all duration-300 ${
                          selectedIndustryApp?.name === industry.name
                            ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-none shadow-lg"
                            : "bg-slate-800/50 border-slate-600 text-white hover:bg-slate-700/70 hover:border-blue-400/40 hover:text-white"
                        }`}
                        onClick={() => {
                          setSelectedIndustryApp(industry);
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
                    key={selectedIndustryApp?.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-cyan-400/20 rounded-xl overflow-hidden"
                  >
                    {/* Industry Image */}
                    <div className="relative h-64 overflow-hidden group cursor-pointer">
                      <img
                        src={selectedIndustryApp?.image}
                        alt={selectedIndustryApp?.name}
                        className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent group-hover:from-gray-900/60 transition-all duration-300"></div>
                      <div className="absolute bottom-4 left-6">
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                          {selectedIndustryApp?.name}
                        </h3>
                      </div>
                    </div>

                    {/* Industry Content */}
                    <div className="p-6">
                      <p className="text-gray-300 leading-relaxed text-lg mb-4">
                        {selectedIndustryApp?.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {selectedIndustryApp?.useCases.map((useCase, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-xs text-blue-200"
                          >
                            {useCase}
                          </span>
                        ))}
                      </div>
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
                Why Choose RT NextGen AI for BI & Big Data?
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leading expertise in transforming data into actionable business intelligence
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
                  {/* First slide */}
                  <CarouselItem className="pl-2 md:pl-4">
                    <div className="p-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {whyChooseUsItems.slice(0, 3).map((item, index) => {
                          const IconComponent = item.icon;
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
                              <div className="h-full bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 text-center">
                                <div className="flex justify-center mb-6">
                                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 group-hover:scale-110 transition-transform duration-300">
                                    <div className="text-white">
                                      <IconComponent className="h-10 w-10" />
                                    </div>
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
                          );
                        })}
                      </div>
                    </div>
                  </CarouselItem>

                  {/* Second slide */}
                  <CarouselItem className="pl-2 md:pl-4">
                    <div className="p-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {whyChooseUsItems.slice(3, 5).map((item, index) => {
                          const IconComponent = item.icon;
                          return (
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
                                    <div className="text-white">
                                      <IconComponent className="h-10 w-10" />
                                    </div>
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
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 relative overflow-hidden">
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
                <Database className="h-5 w-5 text-cyan-400" />
                <span className="text-white font-medium">
                  Ready to transform your data into intelligence?
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
                  Ready to Transform Your Data
                </span>
                <br />
                <span className="text-white">Into Intelligence?</span>
              </motion.h2>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
              >
                Let RT NextGen AI help you design scalable, AI-ready BI & Big Data platforms for the future
              </motion.p>

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
                  <Database className="mr-2 h-5 w-5" />
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-10 py-6 text-lg font-semibold transition-all duration-300"
                >
                  Get a Demo
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </Layout>
  );
}
