
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Database,
  Cloud,
  BarChart3,
  Shield,
  Settings,
  Zap,
  Target,
  Users,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Award,
  Layers,
  Server,
  Brain,
  Activity,
  Globe,
  Lock,
  Eye,
  FileText,
  Building,
  Heart,
  ShoppingCart,
  Factory,
  Tv,
  Phone,
  Calendar,
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
    icon: <Cloud className="h-8 w-8 text-white" />,
    title: "Cloud Data Warehousing",
    description: "Build scalable data warehouses using Snowflake, Amazon Redshift, Azure Synapse Analytics, and Google BigQuery for fast SQL-based analytics.",
    technologies: ["Snowflake", "Redshift", "Synapse", "BigQuery"],
    backgroundImage: "/assets/Data-Governance.png",
  },
  {
    icon: <Database className="h-8 w-8 text-white" />,
    title: "Data Lakes",
    description: "Store raw structured and unstructured data using AWS S3, Azure Data Lake Storage, Google Cloud Storage, and Hadoop HDFS.",
    technologies: ["S3", "ADLS", "GCS", "HDFS"],
    backgroundImage: "/assets/AI-ML.png",
  },
  {
    icon: <Layers className="h-8 w-8 text-white" />,
    title: "Lakehouse Architecture",
    description: "Combine the flexibility of data lakes with the performance of data warehouses using Databricks and Delta Lake.",
    technologies: ["Databricks", "Delta Lake", "Unity Catalog"],
    backgroundImage: "/assets/AI-Integration.png",
  },
  {
    icon: <Settings className="h-8 w-8 text-white" />,
    title: "Data Ingestion & ETL",
    description: "Build robust data pipelines using Apache Spark, AWS Glue, Azure Data Factory, and Apache Airflow.",
    technologies: ["Spark", "Glue", "ADF", "Airflow"],
    backgroundImage: "/assets/Process-Optimization.png",
  },
  {
    icon: <Shield className="h-8 w-8 text-white" />,
    title: "Security & Governance",
    description: "Implement comprehensive data governance with IAM, RBAC, Unity Catalog, and compliance frameworks.",
    technologies: ["IAM", "RBAC", "Unity Catalog", "Data Lineage"],
    backgroundImage: "/assets/AI-Vision.png",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-white" />,
    title: "BI & Analytics Integration",
    description: "Connect seamlessly with Power BI, Tableau, Qlik, and Looker for advanced analytics and visualization.",
    technologies: ["Power BI", "Tableau", "Qlik", "Looker"],
    backgroundImage: "/assets/AI-Robotic.png",
  },
];

const industryUseCases = [
  {
    icon: <Heart className="h-8 w-8 text-white" />,
    title: "Healthcare",
    description: "Patient data analytics, predictive diagnostics, and compliance dashboards with HIPAA compliance.",
    image: "/assets/Healthcare.png",
  },
  {
    icon: <Building className="h-8 w-8 text-white" />,
    title: "Finance",
    description: "Fraud detection, risk modeling, regulatory compliance reporting, and real-time analytics.",
    image: "/assets/Finance.png",
  },
  {
    icon: <ShoppingCart className="h-8 w-8 text-white" />,
    title: "Retail",
    description: "Customer 360 analytics, personalized recommendations, and demand forecasting.",
    image: "/assets/Ecommerce.png",
  },
  {
    icon: <Factory className="h-8 w-8 text-white" />,
    title: "Manufacturing & IoT",
    description: "Predictive maintenance, digital twins, and IoT sensor data analytics.",
    image: "/assets/Manufacturing.png",
  },
  {
    icon: <Tv className="h-8 w-8 text-white" />,
    title: "Media & Entertainment",
    description: "Streaming analytics, content personalization, and audience behavior insights.",
    image: "/assets/Media.png",
  },
];

const whyChooseUs = [
  {
    icon: <Globe className="h-6 w-6 text-white" />,
    title: "Multi-cloud Expertise",
    description: "Certified specialists across AWS, Azure, Google Cloud, and specialized platforms like Snowflake and Databricks.",
  },
  {
    icon: <Zap className="h-6 w-6 text-white" />,
    title: "End-to-end Solutions",
    description: "Complete data pipeline from ingestion and storage to analytics, ML, and AI integration.",
  },
  {
    icon: <Shield className="h-6 w-6 text-white" />,
    title: "Governance & Compliance",
    description: "Built-in security, governance, and compliance for HIPAA, GDPR, and SOC2 requirements.",
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-white" />,
    title: "Enterprise Scale",
    description: "Proven deployments at enterprise scale with petabyte-level data processing capabilities.",
  },
  {
    icon: <Brain className="h-6 w-6 text-white" />,
    title: "AI/ML & IoT Integration",
    description: "Seamless integration with AI, machine learning models, and IoT data streams.",
  },
];

const successStories = [
  {
    industry: "Healthcare",
    metric: "70% faster reporting",
    description: "Implemented Snowflake + Power BI solution for real-time patient analytics and compliance dashboards.",
    technology: "Snowflake + Power BI",
  },
  {
    industry: "Finance",
    metric: "60% reduction in fraud detection latency",
    description: "Built real-time streaming pipelines for instant fraud detection and risk assessment.",
    technology: "Kafka + Databricks",
  },
  {
    industry: "Retail",
    metric: "+25% revenue increase",
    description: "Deployed real-time recommendation engine using lakehouse architecture.",
    technology: "Delta Lake + ML",
  },
];

const techStack = [
  { name: "Snowflake", logo: "/assets/logos/snowflake.png" },
  { name: "Databricks", logo: "/assets/logos/databricks.png" },
  { name: "Amazon Redshift", logo: "/assets/logos/redshift.png" },
  { name: "Azure Synapse", logo: "/assets/logos/synapse.png" },
  { name: "Google BigQuery", logo: "/assets/logos/bigquery.png" },
  { name: "Apache Spark", logo: "/assets/logos/spark.png" },
  { name: "Apache Kafka", logo: "/assets/logos/kafka.png" },
  { name: "Tableau", logo: "/assets/logos/tableau.png" },
  { name: "Power BI", logo: "/assets/logos/powerbi.png" },
];

export default function DataWarehousingLakes() {
  const [activeTab, setActiveTab] = useState("warehouse");

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
            src="/assets/AI-DataStratergy-banner.png"
            alt="Data Warehousing & Lakes"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold leading-tight"
              >
                <span className="bg-gradient-to-r from-white via-blue-100 to-[#0080FF] bg-clip-text text-transparent">
                  Unify, Store, and Scale
                </span>
                <br />
                <span className="text-white">Your Enterprise Data</span>
              </motion.h1>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl text-gray-300 leading-relaxed max-w-2xl"
              >
                Modern cloud-native data warehouses and lakes built for analytics, AI, and real-time insights. 
                RTNextGenAI delivers scalable data platforms on AWS, Azure, Google Cloud, and Snowflake.
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  <Calendar className="mr-2 h-5 w-5" />
                  Request a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="border-blue-400/50 text-white hover:bg-blue-400/10 px-8 py-4 rounded-lg">
                  <Phone className="mr-2 h-5 w-5" />
                  Talk to a Data Architect
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Side - Illustration */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-full h-96 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl overflow-hidden backdrop-blur-sm border border-blue-400/30">
                <img
                  src="/assets/Data-Governance.png"
                  alt="Data Pipeline Illustration"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Floating elements */}
                <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <Database className="h-6 w-6 text-cyan-400" />
                </div>
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <BarChart3 className="h-6 w-6 text-blue-400" />
                </div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <Brain className="h-6 w-6 text-purple-400" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What & Why Section */}
      <section className="py-20 bg-light relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Definitions */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <h2 className="text-4xl font-bold text-white mb-8">
                  Understanding Modern Data Architecture
                </h2>

                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-400/30 rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-white mb-3 flex items-center">
                      <Database className="h-6 w-6 text-blue-400 mr-3" />
                      What is a Data Warehouse?
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      A structured repository optimized for analytics and BI reporting. Ideal for transactional data, 
                      ERP systems, and SQL-based queries with fast performance and ACID compliance.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-white mb-3 flex items-center">
                      <Cloud className="h-6 w-6 text-cyan-400 mr-3" />
                      What is a Data Lake?
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      A flexible storage system for raw, unstructured data including IoT sensors, logs, social media, 
                      images, and videos. Schema-on-read enables diverse analytics and ML workloads.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-400/30 rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-white mb-3 flex items-center">
                      <Layers className="h-6 w-6 text-purple-400 mr-3" />
                      What is a Lakehouse?
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      The hybrid approach combining data lake flexibility with data warehouse performance. 
                      Unified platform supporting both BI and AI/ML workloads with ACID transactions.
                    </p>
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
                    { id: "warehouse", label: "Warehouse", icon: Database },
                    { id: "lake", label: "Lake", icon: Cloud },
                    { id: "lakehouse", label: "Lakehouse", icon: Layers },
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
                  {activeTab === "warehouse" && (
                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-blue-400">Data Warehouse</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-green-400 font-semibold mb-2">✓ Best For:</p>
                          <ul className="text-gray-300 space-y-1 text-sm">
                            <li>• Structured data</li>
                            <li>• BI reporting</li>
                            <li>• SQL analytics</li>
                            <li>• ACID compliance</li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-orange-400 font-semibold mb-2">⚠ Limitations:</p>
                          <ul className="text-gray-300 space-y-1 text-sm">
                            <li>• Schema-on-write</li>
                            <li>• Higher storage costs</li>
                            <li>• Less flexibility</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "lake" && (
                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-cyan-400">Data Lake</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-green-400 font-semibold mb-2">✓ Best For:</p>
                          <ul className="text-gray-300 space-y-1 text-sm">
                            <li>• Raw data storage</li>
                            <li>• ML/AI workloads</li>
                            <li>• IoT data streams</li>
                            <li>• Cost-effective storage</li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-orange-400 font-semibold mb-2">⚠ Limitations:</p>
                          <ul className="text-gray-300 space-y-1 text-sm">
                            <li>• Data swamps risk</li>
                            <li>• Slower queries</li>
                            <li>• Governance challenges</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "lakehouse" && (
                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-purple-400">Lakehouse</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-green-400 font-semibold mb-2">✓ Best For:</p>
                          <ul className="text-gray-300 space-y-1 text-sm">
                            <li>• Unified analytics</li>
                            <li>• BI + ML workloads</li>
                            <li>• ACID + flexibility</li>
                            <li>• Modern architectures</li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-blue-400 font-semibold mb-2">🚀 Advantages:</p>
                          <ul className="text-gray-300 space-y-1 text-sm">
                            <li>• Best of both worlds</li>
                            <li>• Reduced complexity</li>
                            <li>• Lower TCO</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>

                {/* Architecture Visualization Image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mt-8"
                >
                  <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden">
                    <img
                      src="/assets/DataLake-DataWarehouse.png"
                      alt="Data Lake and Data Warehouse Architecture Comparison"
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <p className="text-center text-gray-400 text-sm mt-3">
                    Modern Data Architecture: Data Lake vs Data Warehouse Comparison
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Overview Section */}
      <section className="py-20 bg-light relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Modern Data Architecture Overview
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Understand the comprehensive landscape of data lakes and data warehouses, 
              and how they work together to create a unified data ecosystem for your enterprise.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-6xl mx-auto"
          >
            <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700 rounded-3xl overflow-hidden p-8">
              <div className="relative">
                <img
                  src="/assets/DataLake-DataWarehouse.png"
                  alt="Data Lake and Data Warehouse Architecture Overview"
                  className="w-full h-auto object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl"></div>
              </div>
              
              <div className="mt-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Complete Data Ecosystem Architecture
                </h3>
                <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">
                  This comprehensive diagram illustrates how data flows from various sources through 
                  ingestion layers, gets processed and stored in both data lakes and warehouses, 
                  and ultimately serves analytics, BI, and AI/ML workloads across your organization.
                </p>
              </div>

              {/* Key Architecture Components */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="bg-blue-500/10 border border-blue-400/30 rounded-xl p-6 text-center">
                  <Database className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                  <h4 className="text-lg font-bold text-white mb-2">Data Sources</h4>
                  <p className="text-gray-300 text-sm">
                    Multiple data inputs from ERP, CRM, IoT, social media, and operational systems
                  </p>
                </div>
                
                <div className="bg-cyan-500/10 border border-cyan-400/30 rounded-xl p-6 text-center">
                  <Cloud className="h-8 w-8 text-cyan-400 mx-auto mb-3" />
                  <h4 className="text-lg font-bold text-white mb-2">Processing Layer</h4>
                  <p className="text-gray-300 text-sm">
                    ETL/ELT pipelines, real-time streaming, and data transformation workflows
                  </p>
                </div>
                
                <div className="bg-purple-500/10 border border-purple-400/30 rounded-xl p-6 text-center">
                  <BarChart3 className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                  <h4 className="text-lg font-bold text-white mb-2">Analytics & AI</h4>
                  <p className="text-gray-300 text-sm">
                    BI dashboards, machine learning models, and advanced analytics platforms
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
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
              Comprehensive data warehousing and lake solutions covering the entire data lifecycle
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

      {/* Reference Architectures Section */}
      <section className="py-20 bg-light relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Cloud-Agnostic Reference Architectures
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive data architecture patterns that work across AWS, Azure, and Google Cloud platforms
            </p>
          </motion.div>

          {/* Architecture Flow */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20"
          >
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700 rounded-3xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-6 gap-6 items-center">
                {/* Ingest */}
                <div className="text-center">
                  <h3 className="text-lg font-bold text-blue-400 mb-4">Ingest</h3>
                  <div className="space-y-2">
                    {["Batch", "CDC", "Streaming"].map((type, index) => (
                      <div key={index} className="bg-blue-500/20 rounded-lg p-2 border border-blue-400/30">
                        <span className="text-white text-sm font-medium">{type}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <ArrowRight className="h-6 w-6 text-cyan-400 mx-auto" />

                {/* Store */}
                <div className="text-center">
                  <h3 className="text-lg font-bold text-cyan-400 mb-4">Store</h3>
                  <div className="space-y-2">
                    <div className="bg-cyan-500/20 rounded-lg p-2 border border-cyan-400/30">
                      <span className="text-white text-xs">Object Storage</span>
                    </div>
                    <div className="bg-cyan-500/20 rounded-lg p-2 border border-cyan-400/30">
                      <span className="text-white text-xs">ACID Tables</span>
                    </div>
                  </div>
                </div>

                <ArrowRight className="h-6 w-6 text-green-400 mx-auto" />

                {/* Transform */}
                <div className="text-center">
                  <h3 className="text-lg font-bold text-green-400 mb-4">Transform</h3>
                  <div className="space-y-2">
                    <div className="bg-green-500/20 rounded-lg p-2 border border-green-400/30">
                      <span className="text-white text-xs">ELT/ETL</span>
                    </div>
                    <div className="bg-green-500/20 rounded-lg p-2 border border-green-400/30">
                      <span className="text-white text-xs">SQL/Notebooks</span>
                    </div>
                  </div>
                </div>

                <ArrowRight className="h-6 w-6 text-purple-400 mx-auto" />

                {/* Serve & Govern */}
                <div className="text-center">
                  <h3 className="text-lg font-bold text-purple-400 mb-4">Serve & Govern</h3>
                  <div className="space-y-2">
                    <div className="bg-purple-500/20 rounded-lg p-2 border border-purple-400/30">
                      <span className="text-white text-xs">BI Semantic Layer</span>
                    </div>
                    <div className="bg-purple-500/20 rounded-lg p-2 border border-purple-400/30">
                      <span className="text-white text-xs">Feature Store</span>
                    </div>
                    <div className="bg-purple-500/20 rounded-lg p-2 border border-purple-400/30">
                      <span className="text-white text-xs">Catalog & Lineage</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Detailed Architecture Components */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Data Warehouse */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8"
            >
              <div className="flex items-center mb-6">
                <Database className="h-8 w-8 text-blue-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">Data Warehouse</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-blue-300 mb-2">What You Get</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Dimensional models (star/snowflake)</li>
                    <li>• Governed semantic layer</li>
                    <li>• Fast aggregates & materialized views</li>
                    <li>• Data quality SLAs</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-green-300 mb-2">Use Cases</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Financial & regulatory reporting</li>
                    <li>• Sales pipeline dashboards</li>
                    <li>• Inventory & supply chain KPIs</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-purple-300 mb-2">Key Capabilities</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• SQL performance tuning</li>
                    <li>• Role-based access control</li>
                    <li>• SCD handling & data vault</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Data Lake */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8"
            >
              <div className="flex items-center mb-6">
                <Cloud className="h-8 w-8 text-cyan-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">Data Lake</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-blue-300 mb-2">What You Get</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Low-cost, elastic storage</li>
                    <li>• Schema-on-read flexibility</li>
                    <li>• Notebooks for exploration</li>
                    <li>• ML feature creation</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-green-300 mb-2">Use Cases</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Clickstream & IoT data</li>
                    <li>• Image/audio NLP</li>
                    <li>• Experimentation datasets</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-purple-300 mb-2">Key Capabilities</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Bronze/Silver/Gold zoning</li>
                    <li>• Schema evolution</li>
                    <li>• Cost-aware lifecycle</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Lakehouse */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8"
            >
              <div className="flex items-center mb-6">
                <Layers className="h-8 w-8 text-purple-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">Lakehouse</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-blue-300 mb-2">What You Get</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• ACID table format (Delta/Iceberg)</li>
                    <li>• Time travel & incremental upserts</li>
                    <li>• Warehouse-quality SQL + ML</li>
                    <li>• Unified catalog & governance</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-green-300 mb-2">Use Cases</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Real-time dashboards</li>
                    <li>• ML-powered BI</li>
                    <li>• Unified metrics layer</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-purple-300 mb-2">Key Capabilities</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Table optimization (Z-order)</li>
                    <li>• Fine-grained access control</li>
                    <li>• Change data feed</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Stack & Tooling */}
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
              Enterprise-Grade Tooling & Technology
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology stack for modern data platforms
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Ingestion Tools */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center">
                <Database className="h-6 w-6 mr-2" />
                Data Ingestion
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Fivetran", "Stitch", "Debezium", "Kafka", "Kinesis", "Airbyte"].map((tool, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-400/30">
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Transform & Orchestrate */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center">
                <Settings className="h-6 w-6 mr-2" />
                Transform & Orchestrate
              </h3>
              <div className="flex flex-wrap gap-2">
                {["dbt", "Airflow", "Databricks", "AWS Glue", "Data Factory"].map((tool, index) => (
                  <span key={index} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-400/30">
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Storage & Tables */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center">
                <Cloud className="h-6 w-6 mr-2" />
                Storage & Tables
              </h3>
              <div className="flex flex-wrap gap-2">
                {["S3/ADLS/GCS", "Delta Lake", "Iceberg", "Hudi"].map((tool, index) => (
                  <span key={index} className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-400/30">
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* BI & Analytics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center">
                <BarChart3 className="h-6 w-6 mr-2" />
                BI & Analytics
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Power BI", "Looker", "Tableau", "Fabric", "BigQuery"].map((tool, index) => (
                  <span key={index} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-400/30">
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* ML & AI */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-orange-400 mb-4 flex items-center">
                <Brain className="h-6 w-6 mr-2" />
                ML & AI Platform
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Databricks", "SageMaker", "Vertex AI", "MLflow", "Feature Store"].map((tool, index) => (
                  <span key={index} className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm border border-orange-400/30">
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Governance */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center">
                <Shield className="h-6 w-6 mr-2" />
                Governance & Security
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Unity Catalog", "Purview", "Great Expectations", "Data Catalog"].map((tool, index) => (
                  <span key={index} className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm border border-red-400/30">
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security, Compliance & Governance */}
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
              Enterprise Security & Compliance
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive security frameworks with built-in compliance for regulated industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Access Control */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-6"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                <Lock className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Access Control</h3>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>• Central catalog with least privilege</li>
                <li>• Attribute-based access control</li>
                <li>• Role-based permissions</li>
                <li>• Fine-grained column/row security</li>
              </ul>
            </motion.div>

            {/* Data Protection */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-6"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Data Protection</h3>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>• PII tokenization & masking</li>
                <li>• Encryption at rest & in transit</li>
                <li>• Data anonymization</li>
                <li>• Secure key management</li>
              </ul>
            </motion.div>

            {/* Quality & Contracts */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-6"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Data Quality</h3>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>• Data contracts & quality rules</li>
                <li>• Freshness monitoring</li>
                <li>• Completeness validation</li>
                <li>• Uniqueness checks</li>
              </ul>
            </motion.div>

            {/* Compliance */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-6"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Compliance</h3>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>• SOC 2 Type II compliance</li>
                <li>• HIPAA for healthcare</li>
                <li>• GDPR for EU data</li>
                <li>• PCI DSS for payments</li>
              </ul>
            </motion.div>
          </div>

          {/* Governance Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16"
          >
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white text-center mb-8">
                Advanced Governance Capabilities
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Eye className="h-8 w-8 text-blue-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Data Lineage</h4>
                  <p className="text-gray-400 text-sm">End-to-end impact analysis and change management</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-cyan-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Audit Trails</h4>
                  <p className="text-gray-400 text-sm">Comprehensive logging for compliance and security</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Activity className="h-8 w-8 text-green-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Cost Controls</h4>
                  <p className="text-gray-400 text-sm">Unit cost dashboards and workload isolation</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-purple-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Performance</h4>
                  <p className="text-gray-400 text-sm">Right-sizing, caching, and optimization strategies</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Migration & Modernization Roadmap */}
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
              Migration & Modernization Roadmap
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proven methodology for migrating from legacy systems to modern data platforms
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                phase: "01",
                title: "Assess & Inventory",
                description: "Comprehensive analysis of current data sources, reports, pipelines, SLAs, and costs",
                icon: <Eye className="h-6 w-6 text-white" />,
                color: "from-blue-500 to-cyan-500",
                deliverables: ["Asset inventory", "Cost baseline", "Performance metrics", "Gap analysis"]
              },
              {
                phase: "02", 
                title: "Design & Plan",
                description: "Target architecture design with data models, security frameworks, and migration strategy",
                icon: <Settings className="h-6 w-6 text-white" />,
                color: "from-cyan-500 to-blue-500",
                deliverables: ["Architecture blueprint", "Security model", "Data contracts", "Migration plan"]
              },
              {
                phase: "03",
                title: "Pilot & Validate",
                description: "End-to-end migration of 1-2 data products to validate approach and performance",
                icon: <Target className="h-6 w-6 text-white" />,
                color: "from-green-500 to-teal-500",
                deliverables: ["Pilot implementation", "KPI validation", "Cost analysis", "Lessons learned"]
              },
              {
                phase: "04",
                title: "Migrate & Automate",
                description: "Full-scale migration with automated ELT, comprehensive testing, and BI source swapping",
                icon: <ArrowRight className="h-6 w-6 text-white" />,
                color: "from-purple-500 to-blue-500",
                deliverables: ["Automated pipelines", "Test frameworks", "Dual-run validation", "User training"]
              },
              {
                phase: "05",
                title: "Optimize & Scale",
                description: "Performance tuning, governance rollout, and legacy system decommissioning",
                icon: <TrendingUp className="h-6 w-6 text-white" />,
                color: "from-orange-500 to-red-500",
                deliverables: ["Performance optimization", "Governance policies", "Cost optimization", "Legacy sunset"]
              },
              {
                phase: "06",
                title: "Operate & Monitor",
                description: "Ongoing operations with observability, SLOs, CI/CD, and FinOps implementation",
                icon: <Activity className="h-6 w-6 text-white" />,
                color: "from-pink-500 to-purple-500",
                deliverables: ["Monitoring dashboards", "SLO definitions", "CI/CD pipelines", "Cost controls"]
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 h-full hover:border-blue-500/50 transition-all duration-300 group-hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${phase.color} rounded-lg flex items-center justify-center mr-4`}>
                      {phase.icon}
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-400">Phase {phase.phase}</span>
                      <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                    </div>
                  </div>

                  <p className="text-gray-400 leading-relaxed mb-6">
                    {phase.description}
                  </p>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Deliverables:</h4>
                    <ul className="space-y-1">
                      {phase.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="text-gray-400 text-sm flex items-center">
                          <CheckCircle className="h-3 w-3 text-green-400 mr-2 flex-shrink-0" />
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sample Packages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20"
          >
            <h3 className="text-3xl font-bold text-white text-center mb-12">
              Sample Implementation Packages
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Warehouse QuickStart",
                  duration: "4-6 weeks",
                  description: "Conformed data model with semantic layer, 10-15 KPIs, automated refresh, and governance baseline",
                  features: ["Dimensional modeling", "Semantic layer", "BI dashboards", "Data quality rules"],
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Lakehouse Accelerator", 
                  duration: "6-10 weeks",
                  description: "Delta/Iceberg tables, streaming pipelines, dbt transformations, feature store, and ML use case",
                  features: ["ACID tables", "Streaming pipelines", "Feature store", "ML integration"],
                  color: "from-purple-500 to-blue-500"
                },
                {
                  title: "Modernization & FinOps",
                  duration: "3-4 weeks",
                  description: "Cost baseline analysis, right-sizing recommendations, tiering strategy, and optimization roadmap",
                  features: ["Cost analysis", "Right-sizing", "Storage tiering", "Performance tuning"],
                  color: "from-green-500 to-teal-500"
                }
              ].map((package_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-6 h-full hover:border-blue-500/50 transition-all duration-300 group-hover:scale-105">
                    <div className={`w-full h-2 bg-gradient-to-r ${package_.color} rounded-full mb-6`}></div>
                    
                    <h4 className="text-xl font-bold text-white mb-2">{package_.title}</h4>
                    <p className="text-sm text-blue-300 font-medium mb-4">{package_.duration}</p>
                    
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {package_.description}
                    </p>

                    <div className="space-y-2">
                      {package_.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
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
              Real-world applications across multiple industries
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
              Industry-leading platforms and tools we work with
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
              Partner with certified data experts for proven enterprise solutions
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
                Enterprise Data Platform Solutions
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
                Ready to Build Your 
              </span>
              <br />
              <span className="text-white">Modern Data Platform?</span>
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Partner with RTNextGenAI to implement scalable, secure, and AI-ready data warehousing & lake solutions that transform your business intelligence capabilities.
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
