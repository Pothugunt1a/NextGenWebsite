
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ChevronDown,
  ChevronUp,
  Database,
  Settings,
  Cloud,
  GitBranch,
  Activity,
  Shield,
  Zap,
  Target,
  Users,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Award,
  BarChart3,
  Brain,
  Globe,
  Cpu,
  Server,
  Network,
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
    icon: Database,
    secondaryIcon: Brain,
    title: "Proven expertise in building high-performance pipelines at enterprise scale",
    description:
      "Our team has successfully designed and implemented data pipelines processing petabytes of data daily for Fortune 500 companies. We deliver scalable, fault-tolerant architectures that handle massive data volumes while maintaining optimal performance and reliability across hybrid and multi-cloud environments.",
    badge: "Enterprise-scale expertise",
  },
  {
    icon: Award,
    secondaryIcon: Cloud,
    title: "Certified professionals across AWS, Azure, GCP, Snowflake, Databricks",
    description:
      "Our engineers hold industry-leading certifications including AWS Data Analytics Specialty, Azure Data Engineer Associate, Google Cloud Professional Data Engineer, Snowflake SnowPro, and Databricks Certified Associate Developer. This ensures best practices and cutting-edge implementation techniques.",
    badge: "Industry-certified experts",
  },
  {
    icon: TrendingUp,
    secondaryIcon: Zap,
    title: "Experience across industries: healthcare, finance, retail, IoT manufacturing",
    description:
      "We've delivered data engineering solutions across diverse sectors, understanding unique industry requirements from HIPAA compliance in healthcare to real-time fraud detection in finance, inventory optimization in retail, and predictive maintenance in IoT manufacturing environments.",
    badge: "Cross-industry experience",
  },
  {
    icon: Shield,
    secondaryIcon: Target,
    title: "Secure, compliant pipelines (HIPAA, GDPR, SOC 2, PCI-DSS ready)",
    description:
      "Security and compliance are built into our data pipeline architecture from day one. We implement end-to-end encryption, role-based access controls, audit logging, and data lineage tracking to meet the strictest regulatory requirements while maintaining operational efficiency.",
    badge: "Security & compliance first",
  },
];

const capabilities = [
  {
    icon: <Database className="h-8 w-8 text-white" />,
    title: "Data Ingestion",
    description:
      "Build robust data ingestion pipelines supporting both batch processing (daily/weekly loads) and real-time streaming from APIs, IoT devices, and event streams. Utilize Apache Kafka, AWS Kinesis, Azure Event Hub, and Google Pub/Sub for reliable, scalable data collection across diverse sources.",
    backgroundImage: "/assets/Data-Governance.png",
  },
  {
    icon: <Settings className="h-8 w-8 text-white" />,
    title: "ETL & ELT Pipelines",
    description:
      "Design and implement both traditional ETL (Extract, Transform, Load) for legacy systems and modern ELT (Extract, Load, Transform) pipelines leveraging cloud-native platforms like Snowflake, BigQuery, and Redshift. Utilize Apache Spark, Databricks, AWS Glue, Azure Data Factory, and Airflow for optimal performance.",
    backgroundImage: "/assets/AI-Integration.png",
  },
  {
    icon: <GitBranch className="h-8 w-8 text-white" />,
    title: "Data Transformation",
    description:
      "Implement comprehensive data cleansing, normalization, and enrichment processes. Handle complex semi-structured and unstructured data formats including JSON, XML, IoT telemetry, and log files. Ensure schema evolution capabilities and robust data quality checks throughout the transformation process.",
    backgroundImage: "/assets/AI-ProcessOptimization.png",
  },
  {
    icon: <Network className="h-8 w-8 text-white" />,
    title: "Data Integration",
    description:
      "Seamlessly integrate enterprise systems including ERP (SAP, NetSuite), CRM (Salesforce, Dynamics), HRMS, and IoT platforms. Unify disparate data sources including SQL databases, NoSQL stores, SaaS applications, and APIs into cohesive, single-source-of-truth pipelines across AWS, Azure, and GCP.",
    backgroundImage: "/assets/AI-Robotic.png",
  },
  {
    icon: <Cloud className="h-8 w-8 text-white" />,
    title: "Data Storage & Delivery",
    description:
      "Optimize data loading into modern Data Lakes (S3, ADLS, GCS) and cloud Data Warehouses (Snowflake, Redshift, Synapse, BigQuery). Implement advanced partitioning and clustering strategies for optimal query performance while serving data efficiently to BI dashboards, ML models, and API endpoints.",
    backgroundImage: "/assets/AI-ML.png",
  },
];

const faqs: FAQ[] = [
  {
    question: "What's the difference between ETL and ELT, and which should I choose?",
    answer:
      "ETL (Extract, Transform, Load) processes data before loading it into the target system, ideal for legacy systems and complex transformations. ELT (Extract, Load, Transform) loads raw data first then transforms it using the target system's computing power, perfect for cloud data warehouses like Snowflake and BigQuery. We recommend ELT for modern cloud-first architectures due to better scalability and cost-efficiency.",
  },
  {
    question: "How do you ensure data quality and reliability in your pipelines?",
    answer:
      "We implement multi-layered data quality checks including schema validation, data profiling, anomaly detection, and automated testing. Our pipelines include comprehensive monitoring, alerting, and data lineage tracking. We also implement circuit breakers, retry mechanisms, and dead letter queues to handle failures gracefully while maintaining data integrity.",
  },
  {
    question: "Can you handle real-time data processing at scale?",
    answer:
      "Yes, our streaming data solutions using Apache Kafka, AWS Kinesis, and Azure Event Hub can process millions of events per second with sub-second latency. We've built real-time analytics platforms that handle petabyte-scale data streams while maintaining consistent performance for mission-critical applications.",
  },
  {
    question: "How do you ensure security and compliance in data pipelines?",
    answer:
      "Security is built into our pipeline architecture with end-to-end encryption, role-based access controls, audit logging, and comprehensive data lineage tracking. Our solutions meet HIPAA, GDPR, SOC 2, and PCI-DSS requirements with automated compliance monitoring and reporting capabilities.",
  },
  {
    question: "What's the typical timeline for implementing a data engineering solution?",
    answer:
      "Implementation timelines vary based on complexity and scope. Simple ETL pipelines can be delivered in 2-4 weeks, while comprehensive enterprise data platforms typically take 8-16 weeks. We focus on delivering value incrementally with MVP implementations followed by iterative enhancements.",
  },
];

// Industry data for the interactive section
const industryData = [
  {
    id: "healthcare",
    name: "Healthcare",
    image: "/assets/Healthcare.png",
    content:
      "Healthcare organizations leverage our data engineering solutions for patient data integration with HIPAA compliance, clinical trial data processing, and real-time health monitoring systems. We build secure pipelines that consolidate electronic health records, medical imaging data, and IoT device telemetry into comprehensive analytics platforms for improved patient outcomes and operational efficiency.",
  },
  {
    id: "finance",
    name: "Finance",
    image: "/assets/Finance.png",
    content:
      "Financial institutions use our ETL solutions for real-time fraud detection, regulatory reporting automation, and risk analytics. We design high-throughput pipelines that process millions of transactions per second, integrate trading systems with compliance databases, and deliver real-time insights for algorithmic trading and credit risk assessment.",
  },
  {
    id: "retail-ecommerce",
    name: "Retail & eCommerce",
    image: "/assets/Ecommerce.png",
    content:
      "Retail companies implement our data pipelines for customer 360° analytics, inventory optimization, and personalized marketing campaigns. We integrate point-of-sale systems, e-commerce platforms, supply chain data, and customer touchpoints to enable real-time pricing, demand forecasting, and recommendation engines.",
  },
  {
    id: "manufacturing-iot",
    name: "Manufacturing & IoT",
    image: "/assets/Manufacturing.png",
    content:
      "Manufacturing companies utilize our IoT data engineering solutions for predictive maintenance, quality control, and production optimization. We build pipelines that ingest sensor data from factory floors, process time-series data for anomaly detection, and integrate with MES/ERP systems for comprehensive operational intelligence.",
  },
  {
    id: "media-entertainment",
    name: "Media & Entertainment",
    image: "/assets/Media.png",
    content:
      "Media companies deploy our streaming data solutions for content analytics, audience measurement, and personalized content delivery. We process petabyte-scale viewing data, social media interactions, and content metadata to power recommendation engines, ad targeting systems, and real-time audience engagement analytics.",
  },
];

const techStack = [
  "Data Ingestion & Streaming: Apache Kafka, AWS Kinesis, Azure Event Hub, Google Pub/Sub, Apache Flume",
  "ETL/ELT & Transformation: Apache Spark, Databricks, AWS Glue, Azure Data Factory, dbt, Apache Airflow",
  "Workflow Orchestration: Apache Airflow, Prefect, Luigi, AWS Step Functions, Azure Logic Apps",
  "Storage & Warehousing: Snowflake, Amazon Redshift, Google BigQuery, Azure Synapse, Apache Iceberg",
  "Monitoring & Governance: Databricks Unity Catalog, Apache Atlas, Collibra, Informatica, DataDog",
  "Cloud Platforms: AWS, Azure, Google Cloud Platform, Multi-cloud and Hybrid deployments",
  "Programming & Frameworks: Python, Scala, Java, SQL, Apache Beam, Apache Flink",
  "Data Quality & Testing: Great Expectations, Monte Carlo, Soda, Custom validation frameworks",
];

// Use cases data
const useCases = [
  {
    title: "Business Intelligence (BI)",
    description: "Prepare clean, aggregated datasets for Power BI, Tableau, Qlik",
    icon: <BarChart3 className="h-6 w-6 text-blue-400" />,
  },
  {
    title: "Machine Learning",
    description: "Build ML-ready feature pipelines for SageMaker, Azure ML, TensorFlow, PyTorch",
    icon: <Brain className="h-6 w-6 text-blue-400" />,
  },
  {
    title: "IoT & Real-Time Analytics",
    description: "Stream sensor data into time-series databases for instant insights",
    icon: <Activity className="h-6 w-6 text-blue-400" />,
  },
  {
    title: "Web & Mobile Apps",
    description: "Deliver customer insights from APIs, logs, and clickstreams",
    icon: <Globe className="h-6 w-6 text-blue-400" />,
  },
  {
    title: "Enterprise Data Lakes",
    description: "Centralize data from ERP, CRM, SaaS apps into a single source of truth",
    icon: <Server className="h-6 w-6 text-blue-400" />,
  },
];

export default function DataEngineeringETL() {
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
            src="/assets/AI-DataStratergy-banner.png"
            alt="Data Engineering & ETL Services"
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
                  Build Reliable Data Pipelines
                </span>
                <br />
                <span className="text-white">for Scalable Analytics & AI</span>
              </motion.h1>

              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-4xl"
              >
                RTNextGenAI delivers end-to-end Data Engineering and ETL solutions that transform raw, fragmented data into trusted, analytics-ready datasets for BI, Big Data, AI, and IoT applications
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 mb-16"
              >
                <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Talk to a Data Engineer
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="border-blue-400/50 text-white hover:bg-blue-400/10 px-8 py-4 rounded-lg">
                  Get a Free Assessment
                </Button>
              </motion.div>

              {/* Badge below CTA */}
              <div className="mb-32">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, type: "spring" }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0066CC]/20 border border-[#0080FF]/30 rounded-full backdrop-blur-sm"
                >
                  <CheckCircle className="h-5 w-5 text-cyan-400 fill-none" />
                  <span className="text-white font-medium">
                    Enterprise-Grade Data Pipeline Solutions
                  </span>
                  <Award className="h-4 w-4 text-blue-400 fill-current" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Why Data Engineering Matters Section */}
      <section className="py-16 text-white relative overflow-hidden">
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Why Data Engineering Matters
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12">
                In today's digital economy, enterprises generate massive volumes of structured, semi-structured, and unstructured data from web apps, mobile apps, IoT devices, ERP/CRM systems, and cloud platforms. Without the right pipelines, this data remains inaccessible and inconsistent.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {[
                  "Unified across sources (databases, SaaS apps, APIs, IoT)",
                  "Cleansed & Standardized for consistency",
                  "Transformed for analytics, BI, and ML",
                  "Delivered in real time for actionable insights"
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-6 rounded-xl border border-green-500/20"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span className="text-green-400 font-semibold text-sm">Our Data Engineering & ETL services ensure your data is:</span>
                    </div>
                    <p className="text-gray-300">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Data Engineering Capabilities - Life Science Style */}
      <div
        id="capabilities-section"
        className="py-20 bg-light relative overflow-hidden"
      >
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
              Our Data Engineering Capabilities
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive data engineering solutions that power modern analytics and AI
            </p>
          </motion.div>

          {/* 2x2 Grid Layout with Central Image */}
          <div className="max-w-8xl mx-auto relative">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Top Row - Data Ingestion and ETL & ELT Pipelines */}
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
                            {String(index + 1).padStart(2, '0')}
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

              {/* Second Row - Central Image with Data Transformation */}
              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Central Image */}
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
                        alt="Data Engineering Capabilities"
                        className="w-full h-auto object-contain group-hover:scale-105 transition-all duration-700"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/assets/Data-Governance.png";
                        }}
                      />
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute top-8 right-8 flex flex-col gap-4">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                        <Database className="h-8 w-8 text-white" />
                      </div>
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                        ETL
                      </div>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="mb-4">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                          <span className="text-blue-200 text-sm font-medium">
                            Data Pipeline Architecture
                          </span>
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-3 leading-tight">
                          Data Engineering Solutions
                        </h3>
                        <p className="text-blue-100 leading-relaxed mb-6">
                          Transform raw data into analytics-ready insights with enterprise-grade pipelines.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Data Transformation */}
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

              {/* Third Row - Data Integration and Data Storage & Delivery */}
              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
                {capabilities.slice(3, 5).map((capability, index) => (
                  <motion.div
                    key={index + 3}
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
                            {String(index + 4).padStart(2, '0')}
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

      {/* Use Cases Section */}
      <section className="py-16 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Use Cases
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your business operations with our data engineering solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-6 rounded-xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    {useCase.icon}
                    <h3 className="text-lg font-semibold text-white">{useCase.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
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
                for Data Engineering & ETL
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Partner with certified data engineering experts who deliver enterprise-scale solutions with proven business results
              </p>
            </motion.div>

            {/* Embla Carousel - Same as AI Consulting */}
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
          </div>
        </div>
      </section>

      {/* Industries Section - Interactive Layout */}
      <section className="py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Industry Applications
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                How we implement data engineering solutions across multiple industries
              </p>
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
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Industry-leading tools and platforms for robust data engineering solutions
              </p>
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
                Common questions about our Data Engineering & ETL services
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Side - Data Pipeline Image */}
              <div className="lg:col-span-5">
                <div className="relative group">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src="/assets/Data-Governance.png"
                      alt="Data Engineering & ETL Solutions"
                      className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Data Pipeline Excellence
                      </h3>
                      <p className="text-gray-200 text-sm">
                        Building reliable, scalable data pipelines that power modern analytics and AI
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
              <Target className="h-5 w-5 text-cyan-400" />
              <span className="text-white font-medium">
                Enterprise Data Pipeline Experts
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
                Ready to modernize
              </span>
              <br />
              <span className="text-white">your data pipelines?</span>
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Partner with RTNextGenAI to build scalable, real-time, and cloud-native Data Engineering & ETL solutions
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
                <Database className="mr-2 h-5 w-5" />
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-400/50 text-white hover:bg-blue-400/10 px-10 py-6 text-lg font-semibold"
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
