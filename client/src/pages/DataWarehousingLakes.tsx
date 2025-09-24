
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

      {/* Modern Data Architecture Section */}
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
              What is Modern Data Architecture
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              A blueprint/framework for how data is collected, transformed, stored, managed, and used across an organization.
              Designed to support both historical/batch analytics and real-time/streaming analytics, with scalability, flexibility, and governance baked in.
            </p>
          </motion.div>

          {/* Main Architecture Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-7xl mx-auto mb-16"
          >
            <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700 rounded-3xl overflow-hidden p-8">
              <div className="relative">
                <img
                  src="/assets/DataArchitecture.png"
                  alt="Modern Data Architecture Blueprint"
                  className="w-full h-auto object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl"></div>
              </div>
              
              <div className="mt-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Complete Modern Data Architecture Framework
                </h3>
                <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">
                  This framework facilitates integration across many data sources (structured, semi-structured, unstructured) 
                  and enables advanced use cases like machine learning, AI, predictive analytics.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Key Components/Layers Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-white text-center mb-12">Key Components / Layers</h3>
            
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-b border-gray-600">
                    <tr>
                      <th className="px-6 py-4 text-left text-lg font-bold text-blue-400">Layer / Component</th>
                      <th className="px-6 py-4 text-left text-lg font-bold text-cyan-400">What it does / includes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    <tr className="hover:bg-gray-700/50 transition-colors duration-300">
                      <td className="px-6 py-6">
                        <div className="flex items-center gap-4">
                          <Database className="h-8 w-8 text-blue-400" />
                          <span className="text-xl font-semibold text-white">Data Sources</span>
                        </div>
                      </td>
                      <td className="px-6 py-6 text-gray-300 leading-relaxed">
                        ERP systems, CRM, IoT devices, SaaS apps, mobile devices, logs, external data feeds, etc.
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-700/50 transition-colors duration-300">
                      <td className="px-6 py-6">
                        <div className="flex items-center gap-4">
                          <Settings className="h-8 w-8 text-cyan-400" />
                          <span className="text-xl font-semibold text-white">Ingestion / Processing</span>
                        </div>
                      </td>
                      <td className="px-6 py-6 text-gray-300 leading-relaxed">
                        ETL or ELT pipelines; streaming ingestion; tools like Spark, Glue, Databricks, Azure Data Factory; cleaning, transforming, enriching data.
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-700/50 transition-colors duration-300">
                      <td className="px-6 py-6">
                        <div className="flex items-center gap-4">
                          <Server className="h-8 w-8 text-purple-400" />
                          <span className="text-xl font-semibold text-white">Storage</span>
                        </div>
                      </td>
                      <td className="px-6 py-6 text-gray-300 leading-relaxed">
                        Data lake (e.g. S3, ADLS), data warehouse for structured, curated data; often hybrid storage solutions.
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-700/50 transition-colors duration-300">
                      <td className="px-6 py-6">
                        <div className="flex items-center gap-4">
                          <BarChart3 className="h-8 w-8 text-green-400" />
                          <span className="text-xl font-semibold text-white">Analytics & Consumption</span>
                        </div>
                      </td>
                      <td className="px-6 py-6 text-gray-300 leading-relaxed">
                        BI dashboards, reporting, ad-hoc queries; dashboards for business users; real-time & interactive analytics.
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-700/50 transition-colors duration-300">
                      <td className="px-6 py-6">
                        <div className="flex items-center gap-4">
                          <Brain className="h-8 w-8 text-orange-400" />
                          <span className="text-xl font-semibold text-white">Machine Learning / AI</span>
                        </div>
                      </td>
                      <td className="px-6 py-6 text-gray-300 leading-relaxed">
                        Training models, deploying models, using data for predictions, recommendations, anomaly detection.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* Benefits and Challenges Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-green-500/10 to-blue-500/10 backdrop-blur-sm border border-green-400/30 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <CheckCircle className="h-7 w-7 text-green-400 mr-3" />
                Key Benefits
              </h3>
              <ul className="space-y-4">
                {[
                  "Enables faster insights and decision making, because data is available sooner and in richer form",
                  "Better support for real-time or near real-time analytics & streaming",
                  "Flexibility: supports many types of data (structured, semi-structured, unstructured) and many processing paradigms",
                  "Improved governance, data quality, security",
                  "Efficiency and cost savings: avoiding unnecessary duplication of data, using cloud storage / compute elastically"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 leading-relaxed text-sm">{benefit}</p>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Challenges */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-sm border border-orange-400/30 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Activity className="h-7 w-7 text-orange-400 mr-3" />
                Implementation Challenges
              </h3>
              <ul className="space-y-4">
                {[
                  "Legacy systems integration: many organizations have older systems that are hard to migrate",
                  "Ensuring data quality, consistency, and metadata / lineage",
                  "Balancing speed vs cost vs governance/security. Real-time systems can be expensive and complex",
                  "Avoiding data silos and ensuring interoperability between tools, platforms, and formats",
                  "Ensuring appropriate team skills, ownership, and domain knowledge"
                ].map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 leading-relaxed text-sm">{challenge}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
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

      {/* Architecture Diagram Section */}
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
              Modern Data Architecture
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              End-to-end data flow from multiple sources to insights and AI models
            </p>
          </motion.div>

          <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
              {/* Sources */}
              <div className="text-center">
                <h3 className="text-lg font-bold text-blue-400 mb-4">Data Sources</h3>
                <div className="space-y-3">
                  {["ERP", "CRM", "IoT", "SaaS", "Mobile"].map((source, index) => (
                    <div key={index} className="bg-blue-500/20 rounded-lg p-3 border border-blue-400/30">
                      <span className="text-white text-sm font-medium">{source}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Arrow 1 */}
              <div className="flex justify-center">
                <ArrowRight className="h-8 w-8 text-cyan-400" />
              </div>

              {/* ETL Tools */}
              <div className="text-center">
                <h3 className="text-lg font-bold text-cyan-400 mb-4">ETL/ELT</h3>
                <div className="space-y-3">
                  {["Spark", "Databricks", "Glue", "ADF"].map((tool, index) => (
                    <div key={index} className="bg-cyan-500/20 rounded-lg p-3 border border-cyan-400/30">
                      <span className="text-white text-sm font-medium">{tool}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Arrow 2 */}
              <div className="flex justify-center">
                <ArrowRight className="h-8 w-8 text-purple-400" />
              </div>

              {/* Storage & Analytics */}
              <div className="text-center">
                <h3 className="text-lg font-bold text-purple-400 mb-4">Storage & Analytics</h3>
                <div className="space-y-3">
                  <div className="bg-purple-500/20 rounded-lg p-3 border border-purple-400/30">
                    <span className="text-white text-sm font-medium">Data Lake (S3/ADLS)</span>
                  </div>
                  <div className="bg-purple-500/20 rounded-lg p-3 border border-purple-400/30">
                    <span className="text-white text-sm font-medium">Data Warehouse</span>
                  </div>
                  <div className="bg-purple-500/20 rounded-lg p-3 border border-purple-400/30">
                    <span className="text-white text-sm font-medium">BI Dashboards</span>
                  </div>
                  <div className="bg-purple-500/20 rounded-lg p-3 border border-purple-400/30">
                    <span className="text-white text-sm font-medium">ML Models</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
