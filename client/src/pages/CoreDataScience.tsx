import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ChevronDown,
  ChevronUp,
  Database,
  BarChart3,
  TrendingUp,
  Users,
  CheckCircle,
  Award,
  ArrowRight,
  Eye,
  Zap,
  Shield,
  Activity,
  Cpu,
  Brain,
  Target,
  Lightbulb,
  Search,
  PieChart,
  LineChart,
  FileSpreadsheet,
  Settings,
  AlertTriangle,
  TrendingDown,
  Clock,
  Filter,
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
    secondaryIcon: CheckCircle,
    title: "End-to-end Data Expertise",
    description:
      "From raw data collection to executive insights, we provide comprehensive data science solutions. Our certified data scientists have industry experience across healthcare, finance, retail, and IoT, ensuring your data transformation delivers measurable business impact.",
    badge: "Complete data lifecycle",
  },
  {
    icon: Shield,
    secondaryIcon: Award,
    title: "Cloud-Native Solutions",
    description:
      "We build modern, scalable data science platforms on AWS, Azure, and GCP. Our cloud-native approach ensures high availability, security, and performance while reducing infrastructure overhead and enabling rapid scaling.",
    badge: "Enterprise-grade platforms",
  },
  {
    icon: TrendingUp,
    secondaryIcon: Target,
    title: "Business Impact Focus",
    description:
      "We don't just deliver numbers—we deliver insights that drive action. Our data science solutions are designed with business objectives in mind, translating complex analytics into clear, actionable strategies that improve decision-making.",
    badge: "Results-driven approach",
  },
  {
    icon: Brain,
    secondaryIcon: Lightbulb,
    title: "Advanced Analytics & AI-Ready",
    description:
      "Our data science foundation prepares your organization for advanced analytics and AI implementations. We build clean, well-structured datasets and pipelines that seamlessly integrate with machine learning and AI workflows.",
    badge: "Future-ready infrastructure",
  },
  {
    icon: Users,
    secondaryIcon: Award,
    title: "Industry Success Record",
    description:
      "Proven track record across healthcare, finance, retail, and IoT sectors. Our team combines technical expertise with deep industry knowledge to deliver solutions that address real business challenges and create measurable value.",
    badge: "Cross-industry expertise",
  },
];

const faqs: FAQ[] = [
  {
    question: "What's the difference between data science and business intelligence?",
    answer:
      "While BI focuses on reporting historical data, data science goes deeper to discover patterns, predict trends, and generate actionable insights. Our Core Data Science services bridge both worlds—providing clean, reliable data for BI while enabling advanced analytics and predictive modeling.",
  },
  {
    question: "How do you ensure data quality in your data science projects?",
    answer:
      "We implement comprehensive data quality frameworks including automated validation, cleansing protocols, and governance standards. Our ETL/ELT pipelines include built-in quality checks using tools like Spark, Databricks, and Airflow to ensure data accuracy and consistency.",
  },
  {
    question: "Can you work with our existing data infrastructure?",
    answer:
      "Absolutely. We integrate with existing databases, APIs, IoT devices, cloud applications, and web sources. Our solutions work with PostgreSQL, MySQL, MongoDB, Snowflake, BigQuery, and other enterprise data platforms to maximize your current investments.",
  },
  {
    question: "What visualization tools do you use for data storytelling?",
    answer:
      "We use industry-leading visualization platforms including Tableau, Power BI, Plotly, Dash, and Superset. Our approach focuses on creating intuitive dashboards, executive scorecards, and interactive reports that make complex data accessible to all stakeholders.",
  },
  {
    question: "How do you prepare data for machine learning and AI projects?",
    answer:
      "Our data preparation includes feature engineering, normalization, and ML-ready formatting. We use Python (Pandas, NumPy, Scikit-learn) and R for statistical analysis, ensuring your data is clean, structured, and optimized for advanced analytics and AI implementations.",
  },
];

const services = [
  {
    icon: <Database className="h-8 w-8 text-white" />,
    title: "Data Collection & Preparation",
    description:
      "Reliable, analysis-ready datasets from multiple sources. We gather and process data from databases, APIs, IoT devices, cloud apps, and web sources, ensuring accuracy and consistency through advanced ETL/ELT pipelines.",
    backgroundImage: "/assets/AI&Data.png",
    features: [
      "Data cleansing & deduplication",
      "ETL/ELT pipelines with Spark & Databricks",
      "Feature engineering for ML readiness",
      "Quality checks & governance"
    ]
  },
  {
    icon: <Search className="h-8 w-8 text-white" />,
    title: "Exploratory Data Analysis (EDA) & Statistics",
    description:
      "Discover trends, outliers, and correlations. Uncover meaningful insights through descriptive statistics, hypothesis testing, and visual exploration before advanced modeling.",
    backgroundImage: "/assets/AI-ML.png",
    features: [
      "Statistical analysis & hypothesis testing",
      "Correlation analysis & outlier detection",
      "Visual EDA with Python & R",
      "Jupyter-based workflows"
    ]
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-white" />,
    title: "Data Visualization & Storytelling",
    description:
      "Turn insights into intuitive dashboards and executive stories. Design compelling visualizations that make complex data accessible and actionable for all stakeholders.",
    backgroundImage: "/assets/AI-Vision.png",
    features: [
      "Interactive dashboards & scorecards",
      "Executive-ready visualizations",
      "Geospatial & time-series charts",
      "Data storytelling for decision-makers"
    ]
  },
];

// Data Science Lifecycle steps
const lifecycleSteps = [
  {
    step: "01",
    title: "Collect",
    description: "Gather data from multiple sources",
    icon: Database,
    color: "from-blue-500 to-blue-600"
  },
  {
    step: "02",
    title: "Prepare",
    description: "Clean and structure for analysis",
    icon: Filter,
    color: "from-purple-500 to-purple-600"
  },
  {
    step: "03",
    title: "Explore (EDA)",
    description: "Discover patterns and relationships",
    icon: Search,
    color: "from-green-500 to-green-600"
  },
  {
    step: "04",
    title: "Visualize",
    description: "Create dashboards and charts",
    icon: BarChart3,
    color: "from-orange-500 to-orange-600"
  },
  {
    step: "05",
    title: "Share Insights",
    description: "Deliver actionable business intelligence",
    icon: TrendingUp,
    color: "from-cyan-500 to-cyan-600"
  }
];

// Industry data for the interactive section
const industryData = [
  {
    id: "healthcare",
    name: "Healthcare",
    image: "/assets/Healthcare.png",
    content:
      "Patient analytics, research dashboards, and clinical data insights. Transform complex healthcare data into actionable insights that improve patient outcomes and operational efficiency.",
    impact: "Reduced research data prep time by 40%"
  },
  {
    id: "finance",
    name: "Finance",
    image: "/assets/Finance.png",
    content:
      "Risk analysis, anomaly detection, and compliance monitoring. Advanced analytics help financial institutions identify patterns, assess risks, and maintain regulatory compliance.",
    impact: "Faster compliance reporting with automated data prep"
  },
  {
    id: "retail",
    name: "Retail & eCommerce",
    image: "/assets/Ecommerce.png",
    content:
      "Customer segmentation, product performance insights, and inventory optimization. Data-driven strategies that enhance customer experiences and drive revenue growth.",
    impact: "Improved product insights leading to +15% revenue lift"
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    image: "/assets/Manufacturing.png",
    content:
      "IoT sensor data processing, defect tracking, and predictive maintenance. Transform manufacturing operations through data-driven insights and optimization.",
    impact: "Reduced equipment downtime by 30%"
  },
  {
    id: "media",
    name: "Media & Entertainment",
    image: "/assets/Media.png",
    content:
      "Audience insights, engagement analytics, and content performance tracking. Understand viewer preferences and optimize content strategies through data analysis.",
    impact: "Enhanced content engagement by 25%"
  }
];

// Success metrics for carousel
const successMetrics = [
  {
    industry: "Healthcare",
    metric: "40%",
    description: "Reduced research data preparation time",
    icon: Activity,
    color: "from-red-500 to-pink-500"
  },
  {
    industry: "Retail",
    metric: "15%",
    description: "Revenue lift through improved product insights",
    icon: TrendingUp,
    color: "from-green-500 to-emerald-500"
  },
  {
    industry: "Finance",
    metric: "60%",
    description: "Faster compliance reporting automation",
    icon: Shield,
    color: "from-blue-500 to-cyan-500"
  },
  {
    industry: "Manufacturing",
    metric: "30%",
    description: "Reduced equipment downtime",
    icon: Settings,
    color: "from-orange-500 to-red-500"
  }
];

export default function CoreDataScience() {
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
            src="/assets/AI&Data.png"
            alt="Core Data Science Services"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40"></div>

        <div className="relative flex items-center h-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-grid-cols-12 gap-12 items-center">
              {/* Left Side - Content */}
              <div className="lg:col-span-7">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.h1
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
                  >
                    <span className="bg-gradient-to-r from-white via-blue-100 to-[#0080FF] bg-clip-text text-transparent">
                      Transform Raw Data into Business Intelligence
                    </span>
                  </motion.h1>

                  <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed"
                  >
                    From collection and preparation to visualization and storytelling, RTNextGenAI helps enterprises unlock the full value of data.
                  </motion.p>

                  {/* CTA buttons removed */}
                </motion.div>
              </div>

              {/* Right Side - Flow Diagram Visual */}
              <div className="lg:col-span-5">
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <h3 className="text-2xl font-bold text-white mb-6 text-center">Data Flow</h3>
                    <div className="space-y-4">
                      {[
                        { icon: Database, label: "Raw Data Streams", color: "from-blue-500 to-blue-600" },
                        { icon: Filter, label: "Data Cleaning", color: "from-purple-500 to-purple-600" },
                        { icon: BarChart3, label: "Dashboard Insights", color: "from-green-500 to-green-600" }
                      ].map((step, index) => {
                        const IconComponent = step.icon;
                        return (
                          <motion.div
                            key={index}
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1 + index * 0.2, duration: 0.6 }}
                            className="flex items-center gap-4"
                          >
                            <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center`}>
                              <IconComponent className="h-6 w-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="text-white font-medium">{step.label}</div>
                              {index < 2 && (
                                <div className="w-full h-0.5 bg-gradient-to-r from-white/30 to-transparent mt-2"></div>
                              )}
                            </div>
                            {index < 2 && (
                              <ArrowRight className="h-5 w-5 text-white/60" />
                            )}
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Data Science Matters */}
      <section className="py-20 text-white relative overflow-hidden">
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
                <Database className="h-4 w-4 text-cyan-400" />
                <span className="text-cyan-300 text-sm font-medium">
                  Why Data Science Matters
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Turn Data Complexity into{" "}
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  Business Clarity
                </span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            </motion.div>

            {/* Two-Column Layout: Challenges vs Benefits */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Left: Challenges */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-8">
                  <AlertTriangle className="h-8 w-8 text-red-400" />
                  <h3 className="text-2xl font-bold text-white">Without Data Science</h3>
                </div>
                {[
                  { title: "Unstructured Data", desc: "Raw data scattered across systems", icon: TrendingDown },
                  { title: "Poor Insights", desc: "Limited visibility into trends and patterns", icon: Eye },
                  { title: "Reactive Decisions", desc: "Making choices based on outdated information", icon: Clock },
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="flex items-start gap-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                      <IconComponent className="h-6 w-6 text-red-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                        <p className="text-gray-300">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </motion.div>

              {/* Right: Benefits */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-8">
                  <CheckCircle className="h-8 w-8 text-green-400" />
                  <h3 className="text-2xl font-bold text-white">With Data Science</h3>
                </div>
                {[
                  { title: "Clean Data", desc: "Structured, reliable datasets ready for analysis", icon: Shield },
                  { title: "Hidden Patterns", desc: "Discover trends and correlations through advanced analytics", icon: Search },
                  { title: "Real-time Dashboards", desc: "Intuitive visualizations for informed decision-making", icon: BarChart3 },
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="flex items-start gap-4 p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                      <IconComponent className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                        <p className="text-gray-300">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </div>

            {/* Infographic */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-8 p-8 bg-gradient-to-r from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-cyan-400/20 rounded-2xl">
                <div className="text-center">
                  <TrendingDown className="h-12 w-12 text-red-400 mx-auto mb-3" />
                  <div className="text-xl font-bold text-white">Unmanaged Data</div>
                  <div className="text-red-400 font-medium">= Noise</div>
                </div>
                <ArrowRight className="h-8 w-8 text-cyan-400" />
                <div className="text-center">
                  <TrendingUp className="h-12 w-12 text-green-400 mx-auto mb-3" />
                  <div className="text-xl font-bold text-white">Governed Data</div>
                  <div className="text-green-400 font-medium">= Insights</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Data Science Services */}
      <section className="py-20 bg-light relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl font-bold mb-6 text-white">
                Our Core Data Science Services
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive data science solutions from collection to insights
              </p>
            </motion.div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer h-full"
                >
                  <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 h-full hover:border-blue-500/50 hover:bg-gray-800/80 transition-all duration-500 group-hover:scale-105">
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden mb-6">
                      <img
                        src={service.backgroundImage}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/90"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        {service.icon}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <h4 className="text-xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {service.title}
                      </h4>
                    </div>

                    <p className="text-gray-400 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Data Science Lifecycle */}
      <section className="py-20 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Data Science Lifecycle
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                RTNextGenAI follows a structured lifecycle ensuring accuracy, trust, and value
              </p>
            </motion.div>

            {/* Process Diagram */}
            <div className="relative">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                {lifecycleSteps.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="relative flex flex-col items-center text-center max-w-xs"
                    >
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-4 shadow-lg`}>
                        <IconComponent className="h-10 w-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {step.step}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-400">{step.description}</p>

                      {/* Connection Arrow */}
                      {index < lifecycleSteps.length - 1 && (
                        <div className="hidden lg:block absolute top-10 left-full w-16">
                          <ArrowRight className="h-6 w-6 text-cyan-400 mx-auto" />
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 bg-light text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Industry Applications
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

                  <div className="p-6">
                    <p className="text-gray-300 leading-relaxed text-lg mb-4">
                      {selectedIndustry.content}
                    </p>
                    <div className="flex items-center gap-2 text-green-400">
                      <TrendingUp className="h-5 w-5" />
                      <span className="font-medium">{selectedIndustry.impact}</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Technology Stack
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Category-based toolkit covering the entire data science lifecycle
              </p>
            </motion.div>

            {/* Category Sections */}
            <div className="space-y-12">
              {[
                {
                  title: "Data Collection & Integration",
                  icon: Database,
                  color: "from-blue-500 to-cyan-500",
                  tools: ["MySQL", "PostgreSQL", "Snowflake", "BigQuery", "dbt", "Airflow", "Apache NiFi", "Fivetran"]
                },
                {
                  title: "Data Preparation & Wrangling",
                  icon: Filter,
                  color: "from-purple-500 to-pink-500",
                  tools: ["Pandas", "NumPy", "R (dplyr, tidyr)", "Alteryx", "OpenRefine", "Dask", "Apache Spark"]
                },
                {
                  title: "EDA & Statistics",
                  icon: Search,
                  color: "from-green-500 to-emerald-500",
                  tools: ["RStudio", "Jupyter", "SciPy", "Statsmodels", "Seaborn", "Matplotlib", "Apache Zeppelin"]
                },
                {
                  title: "Visualization & Storytelling",
                  icon: BarChart3,
                  color: "from-orange-500 to-red-500",
                  tools: ["Tableau", "Power BI", "Looker", "Plotly", "Superset", "D3.js", "Bokeh", "Flourish"]
                },
                {
                  title: "Data Governance & Quality",
                  icon: Shield,
                  color: "from-indigo-500 to-purple-500",
                  tools: ["Collibra", "Alation", "Informatica", "Great Expectations", "Monte Carlo", "Unity Catalog"]
                },
                {
                  title: "Collaboration",
                  icon: Users,
                  color: "from-teal-500 to-cyan-500",
                  tools: ["GitHub", "JupyterHub", "Google Colab", "Hex", "GitLab", "Deepnote"]
                }
              ].map((category, categoryIndex) => {
                const IconComponent = category.icon;
                return (
                  <motion.div
                    key={categoryIndex}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                    className="relative"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                      {category.tools.map((tool, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: index * 0.05 }}
                          className="group cursor-pointer"
                        >
                          <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700 rounded-xl p-4 text-center hover:border-blue-500/50 transition-all duration-300 group-hover:scale-105 h-full">
                            <h4 className={`text-white font-semibold text-sm mb-1 group-hover:bg-gradient-to-r group-hover:${category.color} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                              {tool}
                            </h4>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose RTNextGenAI */}
      <section className="py-20 bg-light text-white relative overflow-hidden">
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
                Why Choose{" "}
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  RTNextGenAI
                </span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Partner with certified data scientists who deliver end-to-end solutions focused on business impact
              </p>
            </motion.div>

            {/* Horizontal Feature Blocks */}
            <div className="space-y-8">
              {whyChooseUsItems.map((item, index) => {
                const IconComponent = item.icon;
                const SecondaryIconComponent = item.secondaryIcon;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
                      <div className="flex items-start gap-6">
                        <div className="relative flex-shrink-0">
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
                          <p className="text-gray-300 leading-relaxed text-lg mb-4">
                            {item.description}
                          </p>
                          <div className="flex items-center gap-2 text-cyan-400">
                            <CheckCircle className="h-4 w-4" />
                            <span className="text-sm font-medium">
                              {item.badge}
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

      {/* Client Impact / Success Metrics */}
      <section className="py-20 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Client Impact & Success Metrics
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Measurable results across industries through data science excellence
              </p>
            </motion.div>

            {/* Success Metrics Carousel */}
            <div className="relative max-w-4xl mx-auto">
              <Carousel
                className="w-full"
                opts={{
                  align: "start",
                  loop: true,
                }}
                plugins={[
                  Autoplay({
                    delay: 4000,
                    stopOnInteraction: true,
                    stopOnMouseEnter: true,
                  }),
                ]}
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {successMetrics.map((metric, index) => {
                    const IconComponent = metric.icon;
                    return (
                      <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2">
                        <div className="p-6">
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 text-center hover:border-blue-400/40 transition-all duration-500"
                          >
                            <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${metric.color} rounded-2xl flex items-center justify-center`}>
                              <IconComponent className="h-10 w-10 text-white" />
                            </div>
                            <div className="text-4xl font-bold text-white mb-2">{metric.metric}</div>
                            <div className="text-lg font-semibold text-cyan-400 mb-3">{metric.industry}</div>
                            <p className="text-gray-300">{metric.description}</p>
                          </motion.div>
                        </div>
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
                <CarouselPrevious className="left-4 bg-gradient-to-r from-gray-800/90 to-gray-700/90 border border-cyan-400/40 hover:border-cyan-400/70 text-cyan-400 hover:text-white" />
                <CarouselNext className="right-4 bg-gradient-to-r from-gray-800/90 to-gray-700/90 border border-cyan-400/40 hover:border-cyan-400/70 text-cyan-400 hover:text-white" />
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-light text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">FAQs</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300">
                Common questions about our Core Data Science services
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Side - Data Science Image */}
              <div className="lg:col-span-5">
                <div className="relative group">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src="/assets/AI&Data.png"
                      alt="Core Data Science Solutions"
                      className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Core Data Science Excellence
                      </h3>
                      <p className="text-gray-200 text-sm">
                        Transforming raw data into actionable business intelligence through expert analysis and visualization
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
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-white via-blue-100 to-[#0080FF] bg-clip-text text-transparent">
                Ready to Unlock the Power
              </span>
              <br />
              <span className="text-white">of Your Data?</span>
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Partner with RTNextGenAI to implement data science solutions that deliver clarity and confidence. Whether you're modernizing analytics or building AI-ready pipelines, our team delivers results you can trust.
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
                className="border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 px-10 py-6 text-lg font-semibold backdrop-blur-sm"
              >
                <BarChart3 className="mr-2 h-5 w-5" />
                Request a Demo Dashboard
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}