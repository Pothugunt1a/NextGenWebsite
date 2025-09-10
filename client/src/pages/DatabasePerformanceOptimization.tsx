
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Zap,
  Database,
  BarChart3,
  Settings,
  TrendingUp,
  Cpu,
  Activity,
  Target,
  CheckCircle,
  ArrowRight,
  Users,
  Award,
  Shield,
  Eye,
  Timer,
  Search,
  Server,
  Layers,
  Clock,
  Brain,
  RefreshCw,
  LineChart,
  CloudIcon,
  Monitor,
} from "lucide-react";
import { Button } from "../components/ui/button";

const keyOptimizationCapabilities = [
  {
    icon: <Search className="h-8 w-8 text-white" />,
    title: "Query Tuning & Execution Plan Analysis",
    description: "Advanced SQL query optimization with detailed execution plan analysis for maximum performance gains.",
    features: [
      "Inefficient SQL rewriting",
      "Execution plan analysis tools",
      "Batch vs real-time strategies",
      "Query performance monitoring"
    ]
  },
  {
    icon: <Database className="h-8 w-8 text-white" />,
    title: "Indexing Strategies",
    description: "Strategic index design and maintenance for optimal query performance and storage efficiency.",
    features: [
      "Clustered vs non-clustered indexes",
      "Index maintenance & rebuilds",
      "Advanced columnstore indexes",
      "Bitmap index optimization"
    ]
  },
  {
    icon: <Settings className="h-8 w-8 text-white" />,
    title: "Workload Balancing",
    description: "Intelligent workload distribution and resource allocation for consistent performance.",
    features: [
      "Load balancing strategies",
      "Resource allocation optimization",
      "Connection pool management",
      "Query routing optimization"
    ]
  },
  {
    icon: <Layers className="h-8 w-8 text-white" />,
    title: "Partitioning & Sharding",
    description: "Advanced data partitioning and sharding strategies for horizontal scalability.",
    features: [
      "Horizontal data partitioning",
      "Sharding implementation",
      "Cross-shard query optimization",
      "Partition pruning strategies"
    ]
  },
  {
    icon: <Zap className="h-8 w-8 text-white" />,
    title: "In-Memory & Caching Solutions",
    description: "High-performance caching and in-memory database solutions for ultra-fast data access.",
    features: [
      "Redis & Memcached implementation",
      "SQL Server In-Memory OLTP",
      "Oracle TimesTen optimization",
      "Hybrid caching strategies"
    ]
  },
  {
    icon: <CloudIcon className="h-8 w-8 text-white" />,
    title: "Cloud-Native Performance Tools",
    description: "Leverage cloud-native performance optimization tools and auto-scaling capabilities.",
    features: [
      "AWS Aurora Performance Insights",
      "Azure Intelligent Performance",
      "GCP Query Insights",
      "Cost-performance optimization"
    ]
  },
];

const scalingStrategies = [
  {
    type: "Vertical Scaling",
    description: "Adding more resources (CPU, RAM, storage) to existing servers",
    benefits: ["Immediate performance boost", "Simplified architecture", "No application changes needed"],
    icon: <Server className="h-6 w-6 text-blue-400" />
  },
  {
    type: "Horizontal Scaling",
    description: "Distributing workload across multiple servers and instances",
    benefits: ["Unlimited scalability", "Better fault tolerance", "Cost-effective scaling"],
    icon: <Layers className="h-6 w-6 text-green-400" />
  },
  {
    type: "Multi-Region Optimization",
    description: "Global workload distribution for reduced latency worldwide",
    benefits: ["Reduced global latency", "Enhanced availability", "Disaster recovery"],
    icon: <CloudIcon className="h-6 w-6 text-purple-400" />
  },
];

const industryUseCases = [
  {
    name: "Finance",
    description: "Faster fraud detection queries and real-time trading systems",
    image: "/assets/Finance.png",
    metrics: "Reduced query time by 70% for fraud detection systems",
    improvements: ["Sub-millisecond trading queries", "Real-time risk analytics", "Regulatory reporting optimization"]
  },
  {
    name: "Healthcare",
    description: "Real-time EMR access and patient data optimization",
    image: "/assets/Healthcare.png",
    metrics: "Doubled EMR performance for 10K+ concurrent users",
    improvements: ["Instant patient record access", "Real-time clinical dashboards", "HIPAA-compliant optimization"]
  },
  {
    name: "Retail",
    description: "Optimized checkout and inventory query performance",
    image: "/assets/Ecommerce.png",
    metrics: "40% faster checkouts during peak traffic",
    improvements: ["Real-time inventory updates", "Personalized recommendations", "Cart optimization"]
  },
  {
    name: "Manufacturing",
    description: "IoT data pipelines tuned for low-latency processing",
    image: "/assets/Manufacturing.png",
    metrics: "IoT latency reduced to near real-time processing",
    improvements: ["Real-time sensor analytics", "Predictive maintenance", "Supply chain optimization"]
  },
  {
    name: "Media",
    description: "Streaming analytics with minimal lag and high throughput",
    image: "/assets/Media.png",
    metrics: "Streaming analytics optimized for millions of concurrent users",
    improvements: ["Real-time content recommendations", "User engagement analytics", "Content delivery optimization"]
  },
];

const performanceMetrics = [
  {
    metric: "50-70%",
    description: "Query execution improvement",
    icon: <Timer className="h-8 w-8 text-green-400" />
  },
  {
    metric: "99.99%",
    description: "System uptime achieved",
    icon: <Shield className="h-8 w-8 text-blue-400" />
  },
  {
    metric: "40%",
    description: "Infrastructure cost reduction",
    icon: <TrendingUp className="h-8 w-8 text-purple-400" />
  },
  {
    metric: "80%",
    description: "Faster response times",
    icon: <Zap className="h-8 w-8 text-cyan-400" />
  },
];

const technologyStack = {
  databases: [
    { name: "Oracle", icon: "/assets/Oracle.png" },
    { name: "SQL Server", icon: "/assets/SQLServer.png" },
    { name: "PostgreSQL", icon: "/assets/PostgreSQL.png" },
    { name: "MySQL", icon: "/assets/MySQL.png" },
    { name: "MongoDB", icon: "/assets/MongoDB.png" },
    { name: "Cassandra", icon: "/assets/Cassandra.png" },
  ],
  performanceTools: [
    { name: "Oracle AWR", icon: "/assets/Oracle.png" },
    { name: "SQL Profiler", icon: "/assets/SQLServer.png" },
    { name: "pgAdmin", icon: "/assets/PostgreSQL.png" },
    { name: "MySQL Workbench", icon: "/assets/MySQL.png" },
  ],
  cloudPlatforms: [
    { name: "AWS Aurora", icon: "/assets/AWS.png" },
    { name: "Azure SQL", icon: "/assets/Azure.png" },
    { name: "GCP BigQuery", icon: "/assets/GCP.png" },
  ],
  monitoring: [
    { name: "Grafana", icon: "/assets/Grafana.png" },
    { name: "Prometheus", icon: "/assets/Prometheus.png" },
    { name: "Datadog", icon: "/assets/Datadog.png" },
  ],
};

const whyChooseFeatures = [
  {
    icon: Award,
    title: "Expert DB performance engineers",
    description: "Certified professionals with deep expertise across all major database platforms and performance optimization techniques",
    badge: "Performance Experts"
  },
  {
    icon: CloudIcon,
    title: "Multi-cloud & hybrid optimization specialists",
    description: "Comprehensive optimization across AWS, Azure, GCP, and hybrid cloud environments",
    badge: "Multi-Cloud Expertise"
  },
  {
    icon: Target,
    title: "Proven 50–70% query execution improvement",
    description: "Measurable performance gains with documented before/after metrics and ROI analysis",
    badge: "Proven Results"
  },
  {
    icon: Shield,
    title: "Secure + compliant optimization approach",
    description: "Security-first optimization maintaining compliance with industry standards and regulations",
    badge: "Secure & Compliant"
  },
];

export default function DatabasePerformanceOptimization() {
  const [selectedIndustry, setSelectedIndustry] = useState(industryUseCases[0]);

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
            alt="Database Performance Optimization Services"
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
                  Maximize Speed, Efficiency, and Reliability with Database Performance Optimization
                </span>
              </motion.h1>

              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-4xl"
              >
                RTNextGenAI helps enterprises fine-tune their databases for lightning-fast queries, reduced costs, and enhanced scalability
              </motion.p>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 mb-8"
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Request a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-lg transition-all duration-300"
                >
                  Talk to a Performance Expert
                </Button>
              </motion.div>

              <div className="mb-32">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, type: "spring" }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0066CC]/20 border border-[#0080FF]/30 rounded-full backdrop-blur-sm"
                >
                  <Activity className="h-5 w-5 text-cyan-400 fill-none" />
                  <span className="text-white font-medium">
                    Speedometer + Database Cluster Optimization
                  </span>
                  <BarChart3 className="h-4 w-4 text-blue-400 fill-current" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Why Performance Optimization Matters */}
      <section className="py-20 text-white relative overflow-hidden">
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
                Why Database Performance{" "}
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  Optimization Matters
                </span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Slow databases impact revenue, user experience, and productivity. Optimized databases deliver faster applications, lower costs, and greater customer satisfaction.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {performanceMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    {metric.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{metric.metric}</div>
                  <div className="text-gray-300">{metric.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Optimization Capabilities */}
      <section className="py-20 bg-light relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6 text-white">
              Key Optimization Capabilities
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive performance optimization across all database layers and components
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {keyOptimizationCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-blue-500/20 rounded-2xl p-6 h-full hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2">
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      {capability.icon}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {capability.title}
                    </h3>

                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      {capability.description}
                    </p>

                    <div className="space-y-2">
                      {capability.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 text-xs text-gray-400">
                          <CheckCircle className="h-3 w-3 text-blue-400" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Query Optimization Deep Dive */}
      <section className="py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Query Optimization Deep Dive
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced SQL optimization techniques with measurable performance improvements
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">Before vs After Performance</h3>
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-red-900/20 to-red-800/20 border border-red-500/20 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-red-400 font-semibold">Before Optimization</span>
                      <span className="text-red-400 text-2xl font-bold">500ms</span>
                    </div>
                    <div className="w-full bg-red-900/30 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-900/20 to-green-800/20 border border-green-500/20 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-green-400 font-semibold">After Optimization</span>
                      <span className="text-green-400 text-2xl font-bold">25ms</span>
                    </div>
                    <div className="w-full bg-green-900/30 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full w-1/20"></div>
                    </div>
                  </div>
                  
                  <div className="text-center p-4 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-500/20 rounded-lg">
                    <div className="text-cyan-400 text-3xl font-bold mb-2">95% Improvement</div>
                    <div className="text-gray-300">Query execution time reduction</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-blue-500/20 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-blue-400 mb-3">Rewriting Inefficient SQL</h4>
                    <p className="text-gray-300 text-sm">Transform complex queries into optimized statements with proper indexing strategies and execution plans.</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-blue-500/20 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-blue-400 mb-3">Execution Plan Analysis</h4>
                    <p className="text-gray-300 text-sm">Deep analysis using advanced tools to identify bottlenecks and optimize query execution paths.</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-blue-500/20 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-blue-400 mb-3">Batch vs Real-time Strategies</h4>
                    <p className="text-gray-300 text-sm">Optimize processing strategies based on workload patterns and business requirements.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Scaling Strategies */}
      <section className="py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Scaling Strategies
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive scaling approaches for growing businesses and increasing workloads
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {scalingStrategies.map((strategy, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mb-4">
                    {strategy.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {strategy.type}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {strategy.description}
                  </p>
                  <div className="space-y-2">
                    {strategy.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-cyan-400" />
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Monitoring & Observability */}
      <section className="py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Monitoring & Observability
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real-time monitoring and AI-driven analytics for proactive performance management
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-blue-500/20 rounded-xl p-6 text-center"
              >
                <Monitor className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Real-time Dashboards</h3>
                <p className="text-gray-300 text-sm">Live performance metrics and alerts</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-blue-500/20 rounded-xl p-6 text-center"
              >
                <Brain className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">AI/ML Anomaly Detection</h3>
                <p className="text-gray-300 text-sm">Predictive performance insights</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-blue-500/20 rounded-xl p-6 text-center"
              >
                <LineChart className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Performance Analytics</h3>
                <p className="text-gray-300 text-sm">Grafana, Prometheus integration</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-blue-500/20 rounded-xl p-6 text-center"
              >
                <RefreshCw className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Automated Optimization</h3>
                <p className="text-gray-300 text-sm">Datadog, CloudWatch tools</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Industry Use Cases
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Performance optimization solutions tailored for industry-specific requirements
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-4">
                <div className="grid grid-cols-1 gap-4">
                  {industryUseCases.map((industry, index) => (
                    <Button
                      key={index}
                      variant={
                        selectedIndustry.name === industry.name
                          ? "default"
                          : "outline"
                      }
                      className={`text-left justify-start p-4 h-auto min-h-[80px] transition-all duration-300 ${
                        selectedIndustry.name === industry.name
                          ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-none shadow-lg"
                          : "bg-slate-800/50 border-slate-600 text-white hover:bg-slate-700/70 hover:border-blue-400/40 hover:text-white"
                      }`}
                      onClick={() => setSelectedIndustry(industry)}
                    >
                      <div>
                        <div className="font-semibold text-sm leading-tight">
                          {industry.name}
                        </div>
                        <div className="text-xs opacity-80 mt-1">
                          {industry.description}
                        </div>
                      </div>
                    </Button>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-8">
                <motion.div
                  key={selectedIndustry.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-cyan-400/20 rounded-xl overflow-hidden"
                >
                  <div className="relative h-64 overflow-hidden group cursor-pointer">
                    <img
                      src={selectedIndustry.image}
                      alt={selectedIndustry.name}
                      className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent group-hover:from-gray-900/60 transition-all duration-300"></div>
                    <div className="absolute bottom-4 left-6">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                        {selectedIndustry.name}
                      </h3>
                      <p className="text-gray-200 text-sm">
                        {selectedIndustry.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 bg-gradient-to-r from-green-900/20 to-green-800/20 border border-green-500/20 rounded-lg p-4 mb-6">
                      <TrendingUp className="h-6 w-6 text-green-400" />
                      <span className="text-white font-semibold">
                        Success Metric: {selectedIndustry.metrics}
                      </span>
                    </div>

                    <h4 className="text-lg font-semibold text-white mb-4">Key Improvements:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {selectedIndustry.improvements.map((improvement, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-cyan-400" />
                          <span className="text-gray-300 text-sm">{improvement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose RTNextGenAI */}
      <section className="py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose RTNextGenAI
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Your trusted partner for database performance optimization excellence
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyChooseFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 h-full hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
                      <div className="flex items-start gap-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="h-8 w-8 text-cyan-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                            {feature.title}
                          </h3>
                          <p className="text-gray-300 leading-relaxed mb-4">
                            {feature.description}
                          </p>
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-400/30 rounded-full">
                            <CheckCircle className="h-4 w-4 text-blue-400" />
                            <span className="text-blue-300 text-sm font-medium">
                              {feature.badge}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Technology Stack
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive expertise across databases, performance tools, cloud platforms, and monitoring solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-blue-500/20 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-blue-400 mb-4">Databases</h3>
                <div className="space-y-2">
                  {["Oracle", "SQL Server", "PostgreSQL", "MySQL", "MongoDB", "Cassandra"].map((tech, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Database className="h-4 w-4 text-cyan-400" />
                      <span className="text-gray-300 text-sm">{tech}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-blue-500/20 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-blue-400 mb-4">Performance Tools</h3>
                <div className="space-y-2">
                  {["Oracle AWR", "SQL Profiler", "pgAdmin", "MySQL Workbench"].map((tech, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Settings className="h-4 w-4 text-cyan-400" />
                      <span className="text-gray-300 text-sm">{tech}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-blue-500/20 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-blue-400 mb-4">Cloud Platforms</h3>
                <div className="space-y-2">
                  {["AWS Aurora", "Azure SQL", "GCP BigQuery"].map((tech, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CloudIcon className="h-4 w-4 text-cyan-400" />
                      <span className="text-gray-300 text-sm">{tech}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-blue-500/20 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-blue-400 mb-4">Monitoring</h3>
                <div className="space-y-2">
                  {["Grafana", "Prometheus", "Datadog"].map((tech, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Monitor className="h-4 w-4 text-cyan-400" />
                      <span className="text-gray-300 text-sm">{tech}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-cyan-600/10 to-blue-600/10" />
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
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 px-6 py-3 mb-8 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-400/30 rounded-full backdrop-blur-sm"
            >
              <Activity className="h-5 w-5 text-blue-400" />
              <span className="text-white font-medium">
                Futuristic Database + Speed Graphics
              </span>
              <Zap className="h-4 w-4 text-cyan-400 fill-current" />
            </motion.div>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-white via-blue-100 to-[#0080FF] bg-clip-text text-transparent">
                Get the Most Out of
              </span>
              <br />
              <span className="text-white">Your Databases</span>
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Partner with RTNextGenAI for expert database optimization — faster queries, lower costs, and better reliability
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
                <Timer className="mr-2 h-5 w-5" />
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-10 py-6 text-lg font-semibold transition-all duration-300"
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
