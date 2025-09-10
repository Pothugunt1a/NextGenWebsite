
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Cloud,
  Database,
  Shield,
  Settings,
  Server,
  Cpu,
  BarChart3,
  Zap,
  Lock,
  Globe,
  CheckCircle,
  ArrowRight,
  Users,
  Target,
  Award,
  TrendingUp,
  Eye,
  Layers,
} from "lucide-react";
import { Button } from "../components/ui/button";

const cloudDatabasePlatforms = [
  {
    icon: <Database className="h-8 w-8 text-white" />,
    title: "AWS RDS & Aurora",
    description: "Fully managed relational database service with automated backups, patching, and scaling capabilities for MySQL, PostgreSQL, Oracle, and SQL Server.",
    backgroundImage: "/assets/AI-Training.png",
    features: [
      "Automated backups & recovery",
      "Multi-AZ deployments",
      "Read replicas for scaling",
      "Performance monitoring"
    ]
  },
  {
    icon: <Cloud className="h-8 w-8 text-white" />,
    title: "Azure SQL Database & Cosmos DB",
    description: "Intelligent, fully managed cloud database services with built-in AI capabilities and global distribution for mission-critical applications.",
    backgroundImage: "/assets/Process-optimization.png",
    features: [
      "Intelligent performance tuning",
      "Global distribution",
      "Multi-model database support",
      "Advanced security features"
    ]
  },
  {
    icon: <Server className="h-8 w-8 text-white" />,
    title: "Google Cloud SQL & Spanner",
    description: "Globally distributed database services with strong consistency, automatic scaling, and seamless integration with Google Cloud ecosystem.",
    backgroundImage: "/assets/AI-Integration.png",
    features: [
      "Horizontal scaling",
      "Strong consistency",
      "Multi-region replication",
      "Automatic failover"
    ]
  },
  {
    icon: <Layers className="h-8 w-8 text-white" />,
    title: "Multi-Cloud Database Management",
    description: "Comprehensive multi-cloud database strategies with unified management, monitoring, and optimization across AWS, Azure, and GCP platforms.",
    backgroundImage: "/assets/AI-Capabilities.gif",
    features: [
      "Cross-cloud data synchronization",
      "Unified monitoring dashboard",
      "Cost optimization strategies",
      "Disaster recovery planning"
    ]
  },
];

const keyBenefits = [
  {
    category: "Scalability & Performance",
    benefits: ["Auto-scaling capabilities", "Global data distribution", "Optimized query performance", "Load balancing"]
  },
  {
    category: "Security & Compliance",
    benefits: ["Encryption at rest & in transit", "Identity & access management", "Compliance certifications", "Advanced threat protection"]
  },
  {
    category: "Operational Excellence",
    benefits: ["Automated backups & recovery", "Patch management", "24/7 monitoring", "Performance optimization"]
  },
  {
    category: "Cost Optimization",
    benefits: ["Pay-as-you-scale pricing", "Reserved capacity options", "Resource utilization monitoring", "Cost allocation tracking"]
  },
];

const industryUseCases = [
  {
    name: "Healthcare",
    description: "HIPAA-compliant cloud databases for patient records with high availability",
    image: "/assets/Healthcare.png",
    metrics: "Achieved 99.99% uptime for 500K+ patient records with full HIPAA compliance"
  },
  {
    name: "Finance",
    description: "Secure, globally distributed databases for real-time trading and transactions",
    image: "/assets/Finance.png",
    metrics: "Processing 10M+ transactions daily with sub-second latency across 3 continents"
  },
  {
    name: "Retail",
    description: "Scalable eCommerce databases handling peak seasonal traffic automatically",
    image: "/assets/Ecommerce.png",
    metrics: "Auto-scaled to handle 50x traffic during Black Friday with zero downtime"
  },
  {
    name: "Manufacturing",
    description: "IoT data lakes and real-time analytics for operational intelligence",
    image: "/assets/Manufacturing.png",
    metrics: "Ingesting 1M+ IoT sensor readings per minute with real-time dashboards"
  },
  {
    name: "Media",
    description: "Content delivery databases with global edge caching and CDN integration",
    image: "/assets/Media.png",
    metrics: "Serving 100M+ users globally with <50ms response times"
  },
  {
    name: "Government",
    description: "Secure, compliant citizen databases with audit trails and governance",
    image: "/assets/IT-Services.png",
    metrics: "Managing 10M+ citizen records with FedRAMP compliance and zero breaches"
  },
];

const whyChooseFeatures = [
  {
    icon: Award,
    title: "Multi-cloud certified experts with deep database expertise",
    description: "Certified professionals across AWS, Azure, and Google Cloud platforms",
    badge: "Multi-Cloud Certified"
  },
  {
    icon: Shield,
    title: "Security-first approach with compliance expertise",
    description: "Enterprise-grade security with HIPAA, SOC 2, and PCI DSS compliance",
    badge: "Security Focused"
  },
  {
    icon: TrendingUp,
    title: "Proven track record in large-scale deployments",
    description: "Successfully managed databases serving millions of users globally",
    badge: "Enterprise Scale"
  },
  {
    icon: Target,
    title: "Cost optimization with performance excellence",
    description: "Balanced approach to cost efficiency and high performance",
    badge: "Cost Optimized"
  },
];

const clientSuccessMetrics = [
  {
    industry: "Finance",
    impact: "Reduced database costs by 40% with AWS Aurora Serverless",
    description: "Automatic scaling reduced costs during low-traffic periods",
    icon: <TrendingUp className="h-6 w-6 text-green-400" />
  },
  {
    industry: "Healthcare",
    impact: "Achieved 99.99% uptime with multi-region failover",
    description: "Zero patient data loss during disaster recovery testing",
    icon: <Shield className="h-6 w-6 text-blue-400" />
  },
  {
    industry: "Retail",
    impact: "Scaled to handle 10x traffic with zero manual intervention",
    description: "Auto-scaling handled Black Friday traffic surge seamlessly",
    icon: <Target className="h-6 w-6 text-purple-400" />
  },
  {
    industry: "Manufacturing",
    impact: "Reduced query response time by 80% with global distribution",
    description: "Edge locations improved IoT data processing significantly",
    icon: <Zap className="h-6 w-6 text-cyan-400" />
  },
];

export default function CloudManagedDatabases() {
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
            alt="Cloud & Managed Databases Services"
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
                  Scalable, Secure, and Fully-Managed Cloud Databases
                </span>
              </motion.h1>

              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-4xl"
              >
                RTNextGenAI helps enterprises adopt cloud-native and managed database services across AWS, Azure, and GCP to ensure high availability, scalability, and cost efficiency
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
                  Talk to a Cloud Expert
                </Button>
              </motion.div>

              <div className="mb-32">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, type: "spring" }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0066CC]/20 border border-[#0080FF]/30 rounded-full backdrop-blur-sm"
                >
                  <Cloud className="h-5 w-5 text-cyan-400 fill-none" />
                  <span className="text-white font-medium">
                    Cloud-Native Database Solutions
                  </span>
                  <Database className="h-4 w-4 text-blue-400 fill-current" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Why Cloud Databases Matter */}
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
                Why Cloud & Managed{" "}
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  Databases Matter
                </span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Traditional on-premises databases require significant infrastructure investment and ongoing maintenance. Cloud databases offer scalability, reliability, and cost-effectiveness without the operational overhead.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-red-900/20 to-red-800/20 backdrop-blur-sm border border-red-500/20 rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold text-red-400 mb-6">Traditional On-Premises Challenges</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>High upfront infrastructure costs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Manual scaling and capacity planning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Time-consuming maintenance and updates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Limited disaster recovery options</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gradient-to-br from-green-900/20 to-green-800/20 backdrop-blur-sm border border-green-500/20 rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold text-green-400 mb-6">Cloud Database Advantages</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Pay-as-you-scale pricing model</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Automatic scaling and load balancing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Managed updates, backups, and security</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Built-in high availability and disaster recovery</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Database Platforms */}
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
              Cloud Database Platforms
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive managed database services across major cloud platforms
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {cloudDatabasePlatforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-blue-500/20 rounded-2xl p-6 h-full hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2">
                  <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                    <img
                      src={platform.backgroundImage}
                      alt={platform.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/assets/AI-Training.png";
                      }}
                    />
                  </div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      {platform.icon}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {platform.title}
                    </h3>

                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      {platform.description}
                    </p>

                    <div className="space-y-2">
                      {platform.features.map((feature, featureIndex) => (
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

      {/* Key Benefits */}
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
                Key Benefits
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive advantages of cloud and managed database solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {keyBenefits.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6"
                >
                  <h3 className="text-xl font-bold text-white mb-4">
                    {category.category}
                  </h3>
                  <div className="space-y-2">
                    {category.benefits.map((benefit, benefitIndex) => (
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
                Cloud database solutions tailored for industry-specific requirements
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
                    <div className="flex items-center gap-3 bg-gradient-to-r from-green-900/20 to-green-800/20 border border-green-500/20 rounded-lg p-4">
                      <TrendingUp className="h-6 w-6 text-green-400" />
                      <span className="text-white font-semibold">
                        Success Metric: {selectedIndustry.metrics}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Metrics */}
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
                Client Success & Impact Metrics
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results from our cloud database implementations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {clientSuccessMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center">
                      {metric.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-2">
                        {metric.industry}
                      </h3>
                      <div className="text-cyan-400 font-semibold mb-2">
                        {metric.impact}
                      </div>
                      <p className="text-gray-300 text-sm">
                        {metric.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
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
                Your trusted partner for cloud and managed database solutions
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
              <Cloud className="h-5 w-5 text-blue-400" />
              <span className="text-white font-medium">
                Cloud Database Excellence
              </span>
              <Database className="h-4 w-4 text-cyan-400 fill-current" />
            </motion.div>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-white via-blue-100 to-[#0080FF] bg-clip-text text-transparent">
                Scale Your Business
              </span>
              <br />
              <span className="text-white">with Cloud Databases</span>
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Partner with RTNextGenAI to implement scalable, secure, and cost-effective cloud database solutions
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
                <Cloud className="mr-2 h-5 w-5" />
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
