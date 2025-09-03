
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ChevronDown,
  ChevronUp,
  Database,
  Cloud,
  BarChart3,
  Shield,
  Zap,
  Users,
  Network,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Award,
  Server,
  HardDrive,
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
    icon: Cloud,
    secondaryIcon: Database,
    title: "Multi-cloud expertise",
    description:
      "Our team has deep expertise across AWS, Azure, Google Cloud Platform, Snowflake, and Databricks. We design and implement cloud-native data platforms that leverage the best features of each platform, ensuring optimal performance, scalability, and cost-effectiveness for your specific business requirements.",
    badge: "AWS, Azure, GCP certified",
  },
  {
    icon: Network,
    secondaryIcon: Zap,
    title: "End-to-end solutions",
    description:
      "From data ingestion and storage to business intelligence and machine learning, we provide comprehensive data platform solutions. Our approach covers the entire data lifecycle - ingestion, transformation, storage, analytics, and AI/ML - ensuring seamless integration across your technology stack.",
    badge: "Complete data pipeline",
  },
  {
    icon: Shield,
    secondaryIcon: Users,
    title: "Deep industry experience",
    description:
      "We bring specialized knowledge across healthcare, finance, retail, and manufacturing industries. Our solutions are designed with industry-specific compliance requirements, regulatory standards, and business processes in mind, ensuring your data platform meets both technical and regulatory needs.",
    badge: "Industry-specific solutions",
  },
  {
    icon: TrendingUp,
    secondaryIcon: BarChart3,
    title: "Scalable & future-ready",
    description:
      "Our data architectures are built to scale from gigabytes to petabytes while supporting AI, IoT, deep learning, and real-time analytics. We design platforms that grow with your business and adapt to emerging technologies, ensuring your investment remains valuable as your data needs evolve.",
    badge: "AI & ML ready",
  },
];

const faqs: FAQ[] = [
  {
    question: "What's the difference between a data warehouse and a data lake?",
    answer:
      "Data warehouses are optimized for structured data and fast SQL queries, making them ideal for business intelligence and reporting. Data lakes store raw data in its native format (structured, semi-structured, unstructured), offering flexibility for diverse analytics and machine learning use cases. Modern lakehouse architectures combine the best of both approaches.",
  },
  {
    question: "Which cloud platform is best for data warehousing?",
    answer:
      "The best platform depends on your specific needs, existing infrastructure, and budget. Snowflake offers excellent performance and ease of use, AWS Redshift integrates well with the AWS ecosystem, Azure Synapse works great for Microsoft-centric environments, and Google BigQuery excels at analytics workloads. We help you choose the optimal solution.",
  },
  {
    question: "How do you ensure data security and compliance?",
    answer:
      "We implement comprehensive security measures including encryption at rest and in transit, role-based access controls (RBAC), audit logging, and compliance frameworks for HIPAA, GDPR, SOC2, and PCI-DSS. Our solutions include metadata management, data lineage tracking, and automated compliance reporting.",
  },
  {
    question: "Can you migrate our existing on-premises data warehouse to the cloud?",
    answer:
      "Yes, we specialize in cloud migration strategies including lift-and-shift, refactoring, and rebuilding approaches. We assess your current architecture, data volumes, and business requirements to design a migration plan that minimizes downtime while optimizing performance and cost in the cloud environment.",
  },
  {
    question: "How do you handle real-time data streaming and analytics?",
    answer:
      "We implement streaming architectures using technologies like Apache Kafka, Amazon Kinesis, Azure Event Hubs, and Google Pub/Sub. Our solutions support real-time ingestion, processing with Apache Spark Streaming, and delivery to both operational systems and analytical platforms for immediate insights and decision-making.",
  },
];

const useCases = [
  {
    name: "Business Intelligence & Dashboards",
    description:
      "Create unified sources of truth for Tableau, Power BI, and Looker with centralized data warehousing that enables consistent reporting across your organization.",
  },
  {
    name: "Machine Learning & AI",
    description:
      "Build feature engineering and model training pipelines with SageMaker, Azure ML, and TensorFlow using scalable data lake architectures optimized for ML workloads.",
  },
  {
    name: "IoT & Streaming Analytics",
    description:
      "Process real-time sensor and telemetry data for predictive maintenance, operational monitoring, and automated decision-making with streaming data architectures.",
  },
  {
    name: "Customer 360 & Personalization",
    description:
      "Unify customer data from multiple touchpoints to enable personalized recommendations, churn prediction, and enhanced customer experience through integrated data platforms.",
  },
  {
    name: "Risk Analytics & Compliance",
    description:
      "Build regulatory reporting, fraud detection, and risk assessment systems with secure, compliant data architectures designed for financial services and regulated industries.",
  },
  {
    name: "Healthcare Analytics",
    description:
      "Develop patient care dashboards, predictive diagnostics, and population health analytics with HIPAA-compliant data platforms that support clinical and operational decision-making.",
  },
];

const capabilities = [
  {
    icon: <Database className="h-8 w-8 text-white" />,
    title: "Cloud Data Warehousing",
    description:
      "Design and implement scalable cloud data warehouses using Snowflake, Amazon Redshift, Azure Synapse Analytics, and Google BigQuery. Our solutions feature fast SQL-based analytics, elastic compute and storage separation, advanced query optimization, and intelligent workload management to support enterprise-scale business intelligence and reporting requirements.",
    backgroundImage: "/assets/Data-Warehousing.png",
  },
  {
    icon: <HardDrive className="h-8 w-8 text-white" />,
    title: "Data Lakes",
    description:
      "Build flexible data lakes on AWS S3, Azure Data Lake Storage, Google Cloud Storage, and Hadoop HDFS with Delta Lake integration. Store raw structured and unstructured data with schema-on-read flexibility, enabling machine learning and AI workloads while providing seamless integration with Spark, Databricks, EMR, and Presto for advanced analytics.",
    backgroundImage: "/assets/Data-Lakes.png",
  },
  {
    icon: <Cloud className="h-8 w-8 text-white" />,
    title: "Lakehouse Architectures",
    description:
      "Implement unified analytics platforms with Databricks and Delta Lake that combine the flexibility of data lakes with the governance and performance of data warehouses. Support batch, streaming, and machine learning workloads in a single platform, enabling advanced analytics and AI/ML capabilities with enterprise-grade data governance.",
    backgroundImage: "/assets/Lakehouse.png",
  },
  {
    icon: <Network className="h-8 w-8 text-white" />,
    title: "Data Integration & Ingestion",
    description:
      "Design robust data pipelines that ingest from on-premises and cloud applications including ERP, CRM, IoT devices, and APIs. Build ETL/ELT workflows using Apache Spark, AWS Glue, Azure Data Factory, and dbt, with streaming ingestion capabilities from Kafka, Kinesis, and Event Hub for real-time data processing.",
    backgroundImage: "/assets/Data-Integration.png",
  },
  {
    icon: <Shield className="h-8 w-8 text-white" />,
    title: "Data Security & Governance",
    description:
      "Implement comprehensive data security with access controls, encryption using IAM, KMS, and RBAC frameworks. Deploy metadata management solutions with Unity Catalog, Collibra, and Informatica, while building compliance-ready architectures that meet HIPAA, GDPR, SOC2, and PCI-DSS requirements for regulated industries.",
    backgroundImage: "/assets/Data-Governance.png",
  },
];

const techStack = [
  "Cloud Platforms: AWS, Azure, Google Cloud, Snowflake, Databricks",
  "Data Warehouses: Redshift, Synapse Analytics, BigQuery, Snowflake",
  "Data Lakes: S3, ADLS, Cloud Storage, HDFS, Delta Lake",
  "ETL/ELT Tools: Apache Spark, Glue, Data Factory, dbt, Airflow",
  "Query Engines: Presto, Athena, Trino, Dremio, Spark SQL",
  "Streaming: Kafka, Kinesis, Event Hub, Pub/Sub, Spark Streaming",
  "Visualization: Tableau, Power BI, Qlik, Looker, Superset",
  "Programming: Python, SQL, Scala, Java, R",
];

// Use case data for the interactive section
const useCaseData = [
  {
    id: "business-intelligence",
    name: "Business Intelligence",
    image: "/assets/BI-Dashboards.png",
    content:
      "Transform raw data into actionable insights with unified data warehouses that serve as single sources of truth for Tableau, Power BI, and Looker. Our solutions enable consistent reporting, self-service analytics, and real-time dashboards that empower data-driven decision making across your organization.",
  },
  {
    id: "machine-learning",
    name: "Machine Learning & AI",
    image: "/assets/ML-AI-Analytics.png",
    content:
      "Build scalable feature engineering and model training pipelines using cloud-native data lakes optimized for ML workloads. Our platforms integrate seamlessly with SageMaker, Azure ML, and TensorFlow, enabling data scientists to access clean, prepared data for advanced analytics, predictive modeling, and AI applications.",
  },
  {
    id: "iot-streaming",
    name: "IoT & Streaming",
    image: "/assets/IoT-Streaming.png",
    content:
      "Process millions of real-time sensor events and telemetry data for predictive maintenance, operational monitoring, and automated decision-making. Our streaming architectures handle high-velocity data ingestion while providing low-latency analytics capabilities for time-sensitive business operations.",
  },
  {
    id: "retail-ecommerce",
    name: "Retail & eCommerce",
    image: "/assets/Ecommerce&Retail.png",
    content:
      "Create comprehensive customer 360-degree views by unifying data from multiple touchpoints including web, mobile, in-store, and social channels. Enable personalized product recommendations, churn prediction, inventory optimization, and customer journey analytics that drive revenue growth and customer satisfaction.",
  },
  {
    id: "finance",
    name: "Finance",
    image: "/assets/Finance.png",
    content:
      "Build regulatory reporting systems, fraud detection platforms, and risk assessment tools with secure, compliant data architectures. Our solutions support real-time transaction monitoring, regulatory compliance automation, and advanced analytics for credit risk, market risk, and operational risk management.",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    image: "/assets/Healthcare&LifeScience.png",
    content:
      "Develop HIPAA-compliant patient care dashboards, predictive diagnostic systems, and population health analytics platforms. Our healthcare data solutions integrate clinical, operational, and research data while maintaining strict privacy controls and supporting evidence-based care delivery and health outcomes improvement.",
  },
];

export default function DataWarehousingLakes() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedUseCase, setSelectedUseCase] = useState(useCaseData[0]);

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
            src="/assets/DataWarehousing-banner.png"
            alt="Data Warehousing & Lakes Services"
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/assets/CloudComputing-banner.png";
            }}
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
                  Unify, Store, and Scale Your Enterprise Data
                </span>
              </motion.h1>

              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl"
              >
                RTNextGenAI helps organizations design and implement modern data warehouses and lakes on AWS, Azure, Google Cloud, and Snowflake — enabling real-time analytics, AI/ML, and enterprise-wide insights
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
                    Modern Data Architecture Solutions
                  </span>
                  <Award className="h-4 w-4 text-blue-400 fill-current" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Why Data Warehousing & Data Lakes Matter */}
      <section className="py-16 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Why Data Warehousing &{" "}
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  Data Lakes
                </span>{" "}
                Matter
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <div className="max-w-4xl mx-auto space-y-6">
                <p className="text-xl text-gray-300">
                  Today's enterprises deal with massive volumes of structured, semi-structured, and unstructured data from ERP, CRM, IoT, mobile, and cloud applications.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-400/20 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-blue-300 mb-3">Data Warehouses</h4>
                    <p className="text-gray-300">Excel at structured data (transactions, ERP, BI reporting)</p>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 border border-cyan-400/20 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-cyan-300 mb-3">Data Lakes</h4>
                    <p className="text-gray-300">Excel at raw and semi-structured data (IoT, logs, social media, images)</p>
                  </div>
                </div>
                <p className="text-lg text-gray-300">
                  The new approach is the <strong className="text-white">Lakehouse</strong> — combining the flexibility of a data lake with the performance of a data warehouse.
                </p>
                <p className="text-lg text-blue-200">
                  RTNextGenAI builds scalable, cloud-native data platforms that support analytics, machine learning, deep learning, and real-time decision-making.
                </p>
              </div>
            </motion.div>
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
                for Data Warehousing & Lakes
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Partner with cloud data experts who deliver scalable, secure, and future-ready data platforms
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
                  <span className="text-gray-300 text-sm">
                    Ready to modernize your data platform?
                  </span>
                </div>
                <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Request a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Capabilities Section */}
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
              Our Data Platform Capabilities
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive data warehousing and lake solutions for modern enterprise needs
            </p>
          </motion.div>

          {/* Capabilities Grid */}
          <div className="max-w-8xl mx-auto relative">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Grid Layout */}
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
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "/assets/Data-Warehousing.png";
                          }}
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

              {/* Second Row with remaining capabilities */}
              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
                {capabilities.slice(2, 5).map((capability, index) => (
                  <motion.div
                    key={index + 2}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="group cursor-pointer h-full"
                  >
                    <div className="flex flex-col gap-6 p-6 bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-blue-500/50 hover:bg-gray-800/80 transition-all duration-500 group-hover:translate-y-2 h-full">
                      <div className="relative w-full h-32 rounded-xl overflow-hidden">
                        <img
                          src={capability.backgroundImage}
                          alt={capability.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "/assets/Data-Lakes.png";
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/90"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          {capability.icon}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                            {String(index + 3).padStart(2, '0')}
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

      {/* Use Cases Section - Interactive Layout */}
      <section className="py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Data Platform Use Cases Across Industries
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Navigation */}
              <div className="lg:col-span-4">
                <div className="grid grid-cols-1 gap-4">
                  {useCaseData.map((useCase) => (
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
                  {/* Use Case Image */}
                  <div className="relative h-64 overflow-hidden group cursor-pointer">
                    <img
                      src={selectedUseCase.image}
                      alt={selectedUseCase.name}
                      className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/assets/Data-Warehousing.png";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent group-hover:from-gray-900/60 transition-all duration-300"></div>
                    <div className="absolute bottom-4 left-6">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {selectedUseCase.name}
                      </h3>
                    </div>
                  </div>

                  {/* Use Case Content */}
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

      {/* Technology Stack */}
      <section className="py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Data Platform Technology Stack
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
                Common questions about our data warehousing and lakes services
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Side - Data Platform Image */}
              <div className="lg:col-span-5">
                <div className="relative group">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src="/assets/Data-Platform-FAQ.png"
                      alt="Data Platform Technology"
                      className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/assets/FAQ's.png";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Data-Driven Solutions
                      </h3>
                      <p className="text-gray-200 text-sm">
                        Modern data platforms that scale with your business
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
              <Database className="h-5 w-5 text-cyan-400" />
              <span className="text-white font-medium">
                Enterprise Data Platform Experts
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
                Ready to Modernize Your
              </span>
              <br />
              <span className="text-white">Data Platform?</span>
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Partner with RTNextGenAI to build scalable, secure, and AI-ready data warehousing and lake solutions that unlock your data's full potential
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
                  Free Architecture Assessment
                </span>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <CheckCircle className="h-6 w-6 text-white bg-primary rounded-full p-1" />
                <span className="text-white font-semibold">
                  Expert Data Architects
                </span>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <CheckCircle className="h-6 w-6 text-white bg-primary rounded-full p-1" />
                <span className="text-white font-semibold">Proven Scalability</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex justify-center gap-4"
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
                className="group border-2 border-white/20 hover:border-cyan-400/50 text-white hover:text-cyan-400 px-10 py-6 text-lg font-semibold backdrop-blur-sm transition-all duration-300"
              >
                <Server className="mr-2 h-5 w-5" />
                Talk to a Data Architect
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
