import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import {
  Database,
  Cloud,
  Shield,
  Zap,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Server,
  Lock,
  BarChart3,
  Users,
  Globe,
  Settings,
  Layers,
  X,
  CloudCog,
  Move,
  Gauge,
} from "lucide-react";
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function DatabaseMigration() {
  const [activeApproach, setActiveApproach] = useState(0);

  // Core Capabilities Data
  const coreCapabilities = [
    {
      icon: <Cloud className="h-8 w-8 text-blue-400" />,
      title: "On-Prem to Cloud Migrations",
      description: "Seamlessly migrate your databases from on-premises infrastructure to cloud platforms with zero downtime."
    },
    {
      icon: <Database className="h-8 w-8 text-green-400" />,
      title: "Cross-Platform Migrations", 
      description: "Expert migrations between different database systems - Oracle to PostgreSQL, SQL Server to MySQL, and more."
    },
    {
      icon: <Settings className="h-8 w-8 text-purple-400" />,
      title: "Application-Aware Migrations",
      description: "Specialized migrations for ERP, CRM, and SaaS applications with full compatibility assurance."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-orange-400" />,
      title: "Legacy Database Modernization",
      description: "Transform outdated database systems into modern, scalable, and high-performance solutions."
    },
    {
      icon: <Layers className="h-8 w-8 text-cyan-400" />,
      title: "Hybrid Integration",
      description: "Seamless integration between cloud and on-premises databases for flexible deployment strategies."
    },
    {
      icon: <Shield className="h-8 w-8 text-red-400" />,
      title: "Compliance-First Approach",
      description: "HIPAA, GDPR, PCI DSS compliant migrations with end-to-end security and data protection."
    }
  ];

  // Migration Approaches Data
  const migrationApproaches = [
    {
      title: "Lift-and-Shift",
      description: "Quick migration with minimal changes - fastest path to cloud",
      benefits: ["Minimal downtime", "Cost-effective", "Rapid deployment", "Preserve existing functionality"],
      icon: <CloudCog className="h-8 w-8 text-blue-400" />
    },
    {
      title: "Re-Platforming",
      description: "Optimize workloads specifically for cloud database engines",
      benefits: ["Enhanced performance", "Cloud-native features", "Better scalability", "Improved cost efficiency"],
      icon: <Gauge className="h-8 w-8 text-green-400" />
    },
    {
      title: "Re-Architecting", 
      description: "Transform to microservices and serverless architectures",
      benefits: ["Future-proof design", "Microservices ready", "Auto-scaling", "Serverless capabilities"],
      icon: <Layers className="h-8 w-8 text-purple-400" />
    },
    {
      title: "Hybrid Deployments",
      description: "Gradual migration combining legacy and cloud until cutover",
      benefits: ["Risk mitigation", "Gradual transition", "Business continuity", "Flexible timeline"],
      icon: <Move className="h-8 w-8 text-orange-400" />
    }
  ];

  // Supported Platforms Data
  const supportedPlatforms = {
    sql: ["Oracle", "SQL Server", "PostgreSQL", "MySQL", "MariaDB"],
    nosql: ["MongoDB", "Cassandra", "DynamoDB", "Cosmos DB", "Redis"],
    cloudNative: ["AWS RDS", "Aurora", "Redshift", "Azure SQL", "BigQuery", "Firestore"]
  };

  // Migration Tools Data
  const migrationTools = [
    "AWS Database Migration Service (DMS)",
    "Azure Database Migration Service", 
    "Google Database Migration Service",
    "Schema conversion tools (AWS SCT, Ora2PG)",
    "Orchestration: Airflow, Talend, Informatica"
  ];

  // Industry Use Cases Data
  const industryUseCases = [
    {
      industry: "Healthcare",
      challenge: "Legacy EMR system compliance",
      solution: "Cloud-compliant database with HIPAA security",
      icon: <Users className="h-6 w-6 text-green-400" />
    },
    {
      industry: "Finance", 
      challenge: "Mainframe modernization",
      solution: "PostgreSQL migration for compliance reporting",
      icon: <BarChart3 className="h-6 w-6 text-blue-400" />
    },
    {
      industry: "Retail",
      challenge: "Catalog scalability issues", 
      solution: "MongoDB/DynamoDB migration for global scale",
      icon: <Globe className="h-6 w-6 text-purple-400" />
    },
    {
      industry: "Manufacturing",
      challenge: "ERP performance bottlenecks",
      solution: "PostgreSQL & Azure SQL modernization",
      icon: <Settings className="h-6 w-6 text-orange-400" />
    }
  ];

  // Success Metrics Data
  const successMetrics = [
    {
      title: "Finance Sector Migration",
      metric: "40% cost reduction",
      description: "Reduced licensing costs after Oracle to PostgreSQL migration",
      impact: "Annual savings of $2.4M in database licensing"
    },
    {
      title: "Healthcare EMR Migration", 
      metric: "Zero downtime",
      description: "Migrated critical EMR system with continuous availability",
      impact: "Maintained 24/7 patient care operations"
    },
    {
      title: "Retail Scale Achievement",
      metric: "10M+ daily queries",
      description: "Successfully scaled to handle massive traffic after DynamoDB migration",
      impact: "Supporting Black Friday traffic spikes"
    },
    {
      title: "Manufacturing Performance",
      metric: "3x faster reporting",
      description: "ERP reporting speed improvement post-migration",
      impact: "Real-time business intelligence capabilities"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        
        {/* Hero Section */}
        <section className="relative pt-20 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto text-center">
            <motion.div {...fadeInUp}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Seamless Database Migration &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Modernization
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                RTNextGenAI helps enterprises move from legacy systems to modern, cloud-native, 
                and high-performance databases — with minimal downtime and maximum security.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold"
                  data-testid="button-request-demo"
                >
                  Request a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 text-lg font-semibold"
                  data-testid="button-talk-expert"
                >
                  Talk to a Migration Expert
                </Button>
              </div>

              {/* Migration Flow Visual */}
              <div className="flex items-center justify-center space-x-8 text-gray-400 mb-8">
                <div className="flex items-center space-x-2">
                  <Server className="h-8 w-8" />
                  <span className="text-lg font-medium">On-Premises DB</span>
                </div>
                <ArrowRight className="h-8 w-8 text-cyan-400 animate-pulse" />
                <div className="flex items-center space-x-4">
                  <Cloud className="h-8 w-8 text-blue-400" />
                  <span className="text-lg font-medium text-blue-400">AWS</span>
                  <span className="text-lg font-medium text-green-400">Azure</span>
                  <span className="text-lg font-medium text-orange-400">GCP</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Why Database Migration & Modernization Matter
              </h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-left">
                  <h3 className="text-2xl font-semibold text-red-400 mb-4">Legacy Database Challenges</h3>
                  <ul className="space-y-3 text-gray-300 text-lg">
                    <li className="flex items-center"><X className="h-5 w-5 text-red-400 mr-3" />High licensing and maintenance costs</li>
                    <li className="flex items-center"><X className="h-5 w-5 text-red-400 mr-3" />Limited scalability and performance</li>
                    <li className="flex items-center"><X className="h-5 w-5 text-red-400 mr-3" />Security vulnerabilities and compliance risks</li>
                    <li className="flex items-center"><X className="h-5 w-5 text-red-400 mr-3" />Difficulty integrating with modern applications</li>
                  </ul>
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-semibold text-green-400 mb-4">Modern Database Benefits</h3>
                  <ul className="space-y-3 text-gray-300 text-lg">
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-400 mr-3" />Cloud-ready and auto-scaling</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-400 mr-3" />Cost-effective pay-as-you-scale model</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-400 mr-3" />Built-in security and compliance features</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-400 mr-3" />Future-proof with AI/ML integration</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Core Capabilities Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Core Migration & Modernization Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive database transformation services designed for enterprise-grade reliability and performance
              </p>
            </motion.div>

            <motion.div 
              {...staggerChildren}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {coreCapabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  {...fadeInUp}
                  className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-600/30 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/10"
                  data-testid={`capability-${index}`}
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl mb-6 border border-slate-600/50">
                    {capability.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{capability.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{capability.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Migration Approaches Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Migration Approaches Tailored to Your Needs
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the right migration strategy based on your business requirements, timeline, and technical constraints
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Approach Selector */}
              <div className="space-y-4">
                {migrationApproaches.map((approach, index) => (
                  <motion.div
                    key={index}
                    {...fadeInUp}
                    className={`p-6 rounded-xl border cursor-pointer transition-all duration-300 ${
                      activeApproach === index 
                        ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-cyan-400/50' 
                        : 'bg-slate-800/50 border-slate-600/30 hover:border-slate-500/50'
                    }`}
                    onClick={() => setActiveApproach(index)}
                    data-testid={`approach-${index}`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        {approach.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{approach.title}</h3>
                        <p className="text-gray-400">{approach.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Approach Details */}
              <motion.div
                key={activeApproach}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-cyan-400/30"
                data-testid="approach-details"
              >
                <div className="flex items-center space-x-4 mb-6">
                  {migrationApproaches[activeApproach].icon}
                  <h3 className="text-2xl font-bold text-white">
                    {migrationApproaches[activeApproach].title}
                  </h3>
                </div>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  {migrationApproaches[activeApproach].description}
                </p>
                <h4 className="text-lg font-semibold text-cyan-400 mb-4">Key Benefits:</h4>
                <ul className="space-y-3">
                  {migrationApproaches[activeApproach].benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Supported Platforms Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Supported Platforms & Technologies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We support migration across all major database platforms and cloud providers
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              <motion.div {...fadeInUp} className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-600/30">
                <div className="flex items-center mb-6">
                  <Database className="h-8 w-8 text-blue-400 mr-3" />
                  <h3 className="text-2xl font-semibold text-white">SQL Databases</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {supportedPlatforms.sql.map((platform, index) => (
                    <span key={index} className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg text-sm font-medium border border-blue-500/30">
                      {platform}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div {...fadeInUp} className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-600/30">
                <div className="flex items-center mb-6">
                  <Layers className="h-8 w-8 text-green-400 mr-3" />
                  <h3 className="text-2xl font-semibold text-white">NoSQL Databases</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {supportedPlatforms.nosql.map((platform, index) => (
                    <span key={index} className="px-4 py-2 bg-green-500/20 text-green-300 rounded-lg text-sm font-medium border border-green-500/30">
                      {platform}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div {...fadeInUp} className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-600/30">
                <div className="flex items-center mb-6">
                  <Cloud className="h-8 w-8 text-purple-400 mr-3" />
                  <h3 className="text-2xl font-semibold text-white">Cloud-Native</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {supportedPlatforms.cloudNative.map((platform, index) => (
                    <span key={index} className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg text-sm font-medium border border-purple-500/30">
                      {platform}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Migration Tools & Frameworks Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Migration Tools & Frameworks
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Industry-leading tools and frameworks for seamless, automated database migrations
              </p>
            </motion.div>

            <motion.div {...staggerChildren} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {migrationTools.map((tool, index) => (
                <motion.div
                  key={index}
                  {...fadeInUp}
                  className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm p-6 rounded-xl border border-slate-600/30 hover:border-cyan-400/50 transition-all duration-300"
                  data-testid={`migration-tool-${index}`}
                >
                  <div className="flex items-center">
                    <Settings className="h-6 w-6 text-cyan-400 mr-3 flex-shrink-0" />
                    <span className="text-white font-medium">{tool}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Data Integrity & Security Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ensuring Data Integrity & Security
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Your data security and integrity are our top priorities throughout the migration process
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              <motion.div {...fadeInUp} className="text-center">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-full mb-6 mx-auto border border-red-400/30">
                  <Lock className="h-10 w-10 text-red-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">End-to-End Encryption</h3>
                <p className="text-gray-400 leading-relaxed">
                  Complete encryption during migration with advanced security protocols to protect sensitive data in transit and at rest.
                </p>
              </motion.div>

              <motion.div {...fadeInUp} className="text-center">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full mb-6 mx-auto border border-green-400/30">
                  <CheckCircle className="h-10 w-10 text-green-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Validation & Reconciliation</h3>
                <p className="text-gray-400 leading-relaxed">
                  Comprehensive validation checks and data reconciliation post-migration to ensure 100% data accuracy and completeness.
                </p>
              </motion.div>

              <motion.div {...fadeInUp} className="text-center">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full mb-6 mx-auto border border-blue-400/30">
                  <Shield className="h-10 w-10 text-blue-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Compliance-First Approach</h3>
                <p className="text-gray-400 leading-relaxed">
                  HIPAA, GDPR, PCI DSS compliant migrations with audit trails and compliance documentation throughout the process.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Industry Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industry-Specific Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real-world database migration and modernization success across diverse industries
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {industryUseCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  {...fadeInUp}
                  className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-600/30 hover:border-cyan-400/30 transition-all duration-300"
                  data-testid={`use-case-${index}`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl border border-slate-600/50">
                      {useCase.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{useCase.industry}</h3>
                      <div className="mb-3">
                        <span className="text-sm text-gray-400 uppercase tracking-wide">Challenge:</span>
                        <p className="text-gray-300 mt-1">{useCase.challenge}</p>
                      </div>
                      <div>
                        <span className="text-sm text-cyan-400 uppercase tracking-wide">Solution:</span>
                        <p className="text-gray-300 mt-1">{useCase.solution}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose RTNextGenAI Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose RTNextGenAI for Database Migration
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our proven expertise and methodologies ensure successful database transformations
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div {...fadeInUp} className="space-y-6">
                {[
                  {
                    icon: <Zap className="h-6 w-6 text-yellow-400" />,
                    title: "Expertise in Zero-Downtime Migrations",
                    description: "Advanced techniques to ensure business continuity during migration"
                  },
                  {
                    icon: <Cloud className="h-6 w-6 text-blue-400" />,
                    title: "Multi-Cloud Certified Database Engineers", 
                    description: "AWS, Azure, and GCP certified professionals with deep expertise"
                  },
                  {
                    icon: <TrendingUp className="h-6 w-6 text-green-400" />,
                    title: "Proven Cost Savings Post-Modernization",
                    description: "Documented cost reductions averaging 30-60% post-migration"
                  },
                  {
                    icon: <Shield className="h-6 w-6 text-red-400" />,
                    title: "Secure, Compliance-First Methodologies",
                    description: "Industry-leading security practices and compliance frameworks"
                  },
                  {
                    icon: <Settings className="h-6 w-6 text-purple-400" />,
                    title: "End-to-End Approach",
                    description: "Complete lifecycle management from planning to optimization"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl border border-slate-600/50">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </motion.div>

              <motion.div {...fadeInUp} className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-cyan-400/30">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Migration Process</h3>
                <div className="space-y-4">
                  {[
                    "Assessment & Planning",
                    "Schema & Data Analysis", 
                    "Migration Strategy Design",
                    "Testing & Validation",
                    "Production Migration",
                    "Post-Migration Optimization"
                  ].map((step, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="flex items-center justify-center w-8 h-8 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-bold border border-cyan-400/30">
                        {index + 1}
                      </div>
                      <span className="text-gray-300 font-medium">{step}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Success Metrics Carousel Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Client Success Metrics
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Measurable results from our database migration and modernization projects
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {successMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  {...fadeInUp}
                  className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-600/30 hover:border-cyan-400/30 transition-all duration-300"
                  data-testid={`success-metric-${index}`}
                >
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-2">
                      {metric.metric}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{metric.title}</h3>
                  </div>
                  <p className="text-gray-400 text-center mb-4 leading-relaxed">
                    {metric.description}
                  </p>
                  <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 p-4 rounded-lg border border-cyan-400/20">
                    <p className="text-cyan-300 text-center font-medium">
                      {metric.impact}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call-to-Action Footer */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900 via-purple-900/50 to-slate-900">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Modernize Your Databases Without the Risk
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Partner with RTNextGenAI for seamless database migration & modernization — secure, compliant, and built for the future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold"
                  data-testid="button-schedule-consultation"
                >
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 text-lg font-semibold"
                  data-testid="button-request-demo-footer"
                >
                  Request a Demo
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

    </div>
  );
}