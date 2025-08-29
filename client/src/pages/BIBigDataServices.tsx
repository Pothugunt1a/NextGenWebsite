
import React from "react";
import { motion } from "framer-motion";
import {
  Database,
  BarChart3,
  Brain,
  Cloud,
  Shield,
  TrendingUp,
  Zap,
  Globe,
  Users,
  Settings,
  Eye,
  Lock,
} from "lucide-react";

const biServices = [
  {
    title: "Data Engineering & ETL",
    description:
      "Build robust data pipelines that connect, transform, and optimize data from multiple sources for analytics and AI.",
    details:
      "Our data engineering services create scalable ETL/ELT pipelines that handle batch and real-time data processing. We design fault-tolerant architectures using modern tools like Apache Spark, Kafka, and cloud-native services.",
    backgroundImage: "/assets/AI-DataStratergy-banner.png",
    services: [
      "Real-time streaming pipelines",
      "Batch processing optimization",
      "Data quality & validation",
      "Schema evolution management",
    ],
  },
  {
    title: "Data Warehousing & Lakehouse",
    description:
      "Design modern data architectures that combine the best of data lakes and warehouses for optimal performance and cost.",
    details:
      "We implement cutting-edge lakehouse architectures using Snowflake, Databricks, and cloud platforms. Our solutions provide ACID transactions, schema enforcement, and unified analytics capabilities.",
    backgroundImage: "/assets/AI-DataStratergy-banner.png",
    services: [
      "Snowflake & Databricks implementation",
      "Delta Lake architecture",
      "Data partitioning strategies",
      "Performance optimization",
    ],
  },
  {
    title: "Business Intelligence & Visualization",
    description:
      "Transform raw data into actionable insights with interactive dashboards and self-service analytics platforms.",
    details:
      "Our BI solutions leverage Power BI, Tableau, and Looker to create intuitive dashboards that empower business users. We focus on real-time reporting and mobile-responsive design.",
    backgroundImage: "/assets/AI-DataStratergy-banner.png",
    services: [
      "Interactive dashboard development",
      "Self-service analytics",
      "Mobile BI applications",
      "Embedded analytics",
    ],
  },
  {
    title: "Advanced Analytics & AI/ML",
    description:
      "Implement predictive and prescriptive analytics using machine learning models for data-driven decision making.",
    details:
      "We develop custom ML models for forecasting, classification, and recommendation systems. Our solutions integrate seamlessly with your existing data infrastructure.",
    backgroundImage: "/assets/AI-DataStratergy-banner.png",
    services: [
      "Predictive modeling",
      "Recommendation engines",
      "Anomaly detection",
      "MLOps implementation",
    ],
  },
  {
    title: "Real-Time Data & Streaming",
    description:
      "Process and analyze data in real-time using streaming technologies for immediate insights and rapid response.",
    details:
      "Our streaming solutions use Kafka, Kinesis, and Flink to process millions of events per second. Perfect for IoT, fraud detection, and real-time personalization.",
    backgroundImage: "/assets/AI-DataStratergy-banner.png",
    services: [
      "Event streaming platforms",
      "Real-time analytics",
      "IoT data processing",
      "Complex event processing",
    ],
  },
  {
    title: "Data Governance & MDM",
    description:
      "Ensure data quality, security, and compliance with comprehensive governance frameworks and master data management.",
    details:
      "We implement data governance solutions that provide data lineage, cataloging, and quality monitoring. Our MDM solutions create single sources of truth for critical business entities.",
    backgroundImage: "/assets/AI-DataStratergy-banner.png",
    services: [
      "Data cataloging & lineage",
      "Quality monitoring",
      "Privacy compliance (GDPR, HIPAA)",
      "Master data management",
    ],
  },
];

const industryUseCases = [
  {
    industry: "Healthcare",
    icon: <Users className="h-6 w-6" />,
    cases: [
      "Patient data analytics with HIPAA compliance",
      "Predictive diagnostics with AI/ML models",
      "Real-time hospital resource monitoring",
    ],
  },
  {
    industry: "Finance",
    icon: <TrendingUp className="h-6 w-6" />,
    cases: [
      "Fraud detection with real-time streaming analytics",
      "Risk modeling and regulatory compliance reporting",
      "Algorithmic trading powered by big data pipelines",
    ],
  },
  {
    industry: "Retail & eCommerce",
    icon: <Globe className="h-6 w-6" />,
    cases: [
      "Personalized product recommendations with ML",
      "Customer 360° dashboards with integrated sales & marketing data",
      "Demand forecasting using predictive analytics",
    ],
  },
  {
    industry: "Manufacturing & IoT",
    icon: <Settings className="h-6 w-6" />,
    cases: [
      "Smart factory monitoring with IoT sensors",
      "Predictive maintenance using time-series data",
      "Digital twin simulations for production efficiency",
    ],
  },
];

export default function BIBigDataServices() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
        <div className="absolute inset-0 bg-[url('/assets/AI-DataStratergy-banner.png')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900"></div>

        <div className="relative flex items-center h-full w-full">
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
                  Turn Data Into Intelligence with BI & Big Data Solutions
                </span>
              </motion.h1>

              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-4xl"
              >
                At RTNextGenAI, we help enterprises harness the power of Big Data, Business Intelligence (BI), AI, Machine Learning, Deep Learning, and IoT to make smarter decisions, automate workflows, and unlock new business opportunities.
              </motion.p>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Request a Demo
                </button>
                <button className="px-8 py-4 border-2 border-blue-400 text-blue-100 rounded-xl font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300">
                  Talk to a Data Expert
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Transform Raw Data Into Actionable Intelligence
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-lg leading-relaxed"
            >
              In today's digital-first economy, data is more than an asset—it's the backbone of business innovation and competitive advantage. However, most organizations struggle with disconnected systems, complex data pipelines, lack of real-time insights, and difficulty scaling analytics for AI & ML.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: <Database />, title: "Ingest", desc: "Connect data from all sources" },
              { icon: <Cloud />, title: "Store", desc: "Organize in scalable architectures" },
              { icon: <Settings />, title: "Process", desc: "Transform with ETL/ELT pipelines" },
              { icon: <BarChart3 />, title: "Analyze", desc: "Apply BI, analytics, and ML" },
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Comprehensive BI & Big Data Services
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              End-to-end solutions covering the entire spectrum of enterprise data needs
            </p>
          </motion.div>

          {/* 2x3 Grid Layout */}
          <div className="max-w-8xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {biServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group cursor-pointer h-full"
                >
                  <div className="flex flex-col p-6 bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-blue-500/50 hover:bg-gray-800/80 transition-all duration-500 group-hover:translate-y-[-4px] h-full">
                    <div className="relative w-full h-48 rounded-xl overflow-hidden mb-6">
                      <img
                        src={service.backgroundImage}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/90"></div>
                      <div className="absolute bottom-4 left-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <h4 className="text-xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {service.title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <div className="space-y-2">
                        {service.services.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                            <span className="text-gray-300 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Industry Use Cases
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Real-world applications delivering measurable business impact across industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industryUseCases.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="p-8 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white">
                    {industry.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{industry.industry}</h3>
                </div>
                <div className="space-y-3">
                  {industry.cases.map((case_item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300">{case_item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why RTNextGenAI Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose RTNextGenAI?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Brain />,
                title: "Full-Stack Expertise",
                desc: "Complete expertise across BI, Big Data, ML, AI, IoT, and Cloud technologies"
              },
              {
                icon: <Shield />,
                title: "Certified Specialists",
                desc: "Certified professionals in AWS, Azure, Google Cloud, Snowflake, and Databricks"
              },
              {
                icon: <Zap />,
                title: "Proven Experience",
                desc: "Delivering real-time, AI-ready analytics platforms for enterprise clients"
              },
              {
                icon: <Eye />,
                title: "Business Focused",
                desc: "Focus on outcomes: speed, cost optimization, scalability, and security"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-slate-900 to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Unlock the Power of Your Data?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Partner with RTNextGenAI to build scalable, intelligent, and secure BI & Big Data solutions that transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                📞 Schedule a Consultation
              </button>
              <button className="px-8 py-4 border-2 border-blue-400 text-blue-100 rounded-xl font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300">
                📩 Get a Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
