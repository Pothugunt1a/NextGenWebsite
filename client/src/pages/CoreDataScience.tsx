
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
      "We gather and process data from databases, APIs, IoT devices, cloud apps, and web sources, ensuring accuracy and consistency. Our services include data cleansing, deduplication, normalization, feature engineering for ML readiness, and ETL/ELT pipelines with Spark, Databricks, and Airflow.",
    backgroundImage: "/assets/AI&Data.png",
  },
  {
    icon: <Search className="h-8 w-8 text-white" />,
    title: "Exploratory Data Analysis (EDA) & Statistics",
    description:
      "Discover meaningful insights before advanced modeling with descriptive and inferential statistics, correlation analysis, outlier detection, and hypothesis testing. We use visual EDA with Python (Seaborn, Plotly, Matplotlib) and R, along with Jupyter-based exploratory workflows.",
    backgroundImage: "/assets/AI-ML.png",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-white" />,
    title: "Data Visualization & Storytelling",
    description:
      "We design intuitive dashboards and reports that bring data to life. Our solutions include interactive dashboards with Power BI, Tableau, and Superset, executive scorecards and KPI monitoring, geospatial and time-series visualizations, and data storytelling for boardrooms and frontline teams.",
    backgroundImage: "/assets/AI-Vision.png",
  },
];

const industries = [
  {
    name: "Healthcare",
    description: "Patient data analytics, research dashboards, clinical trial analysis",
  },
  {
    name: "Finance",
    description: "Risk assessment, anomaly detection, compliance analytics, fraud prevention",
  },
  {
    name: "Retail & eCommerce",
    description: "Customer segmentation, product performance insights, inventory optimization",
  },
  {
    name: "Manufacturing",
    description: "Sensor data processing, defect tracking, predictive maintenance analytics",
  },
  {
    name: "Media & Entertainment",
    description: "Audience insights, engagement analytics, content performance tracking",
  },
  {
    name: "Technology",
    description: "User behavior analysis, system performance monitoring, product analytics",
  },
];

const techStack = [
  "Languages & Frameworks: Python (Pandas, NumPy, Scikit-learn), R, SQL",
  "Visualization Tools: Tableau, Power BI, Plotly, Dash, Superset",
  "Data Pipelines: Apache Spark, Databricks, Airflow, dbt",
  "Databases: PostgreSQL, MySQL, MongoDB, Snowflake, BigQuery",
  "Cloud Platforms: AWS, Azure, GCP",
  "Analytics: Jupyter, Statistical Analysis, Data Mining",
  "Quality Assurance: Data Validation, Governance, Testing",
  "Integration: APIs, IoT Devices, Enterprise Systems",
];

// Industry data for the interactive section
const industryData = [
  {
    id: "healthcare",
    name: "Healthcare",
    image: "/assets/Healthcare.png",
    content:
      "Healthcare organizations leverage our Core Data Science solutions for comprehensive patient data analytics, research dashboard development, and clinical trial analysis. We help medical institutions transform complex healthcare data into actionable insights that improve patient outcomes and operational efficiency.",
  },
  {
    id: "finance",
    name: "Finance",
    image: "/assets/Finance.png",
    content:
      "Financial institutions utilize our data science expertise for risk assessment, anomaly detection, and compliance analytics. Our solutions help banks and financial services companies identify fraud patterns, assess credit risks, and maintain regulatory compliance through advanced data analysis.",
  },
  {
    id: "retail",
    name: "Retail & eCommerce",
    image: "/assets/Ecommerce.png",
    content:
      "Retail companies transform customer experiences with data-driven customer segmentation, product performance insights, and inventory optimization. Our data science solutions help retailers understand buying patterns, optimize pricing strategies, and improve supply chain efficiency.",
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    image: "/assets/Manufacturing.png",
    content:
      "Manufacturing enterprises optimize operations with sensor data processing, defect tracking, and predictive maintenance analytics. Our solutions help manufacturers reduce downtime, improve quality control, and optimize production processes through data-driven insights.",
  },
  {
    id: "media",
    name: "Media & Entertainment",
    image: "/assets/Media.png",
    content:
      "Media companies enhance content strategies with audience insights, engagement analytics, and content performance tracking. Our data science solutions help media organizations understand viewer preferences, optimize content distribution, and improve audience engagement.",
  },
  {
    id: "technology",
    name: "Technology",
    image: "/assets/AI-Integration.png",
    content:
      "Technology companies leverage our data science expertise for user behavior analysis, system performance monitoring, and product analytics. We help tech organizations optimize user experiences, improve system performance, and make data-driven product decisions.",
  },
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
                  Transform Raw Data into Business Intelligence
                </span>
              </motion.h1>

              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl"
              >
                At RTNextGenAI, we help enterprises harness the full power of their data. From collection and preparation to exploratory analysis, visualization, and storytelling, our Core Data Science solutions turn complexity into clarity.
              </motion.p>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-8 py-4 text-lg font-semibold shadow-2xl shadow-blue-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
                >
                  <Database className="mr-2 h-5 w-5" />
                  Talk to a Data Scientist
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 px-8 py-4 text-lg font-semibold backdrop-blur-sm"
                >
                  <BarChart3 className="mr-2 h-5 w-5" />
                  Request a Demo
                </Button>
              </motion.div>

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
                    Enterprise Data Science Solutions
                  </span>
                  <Award className="h-4 w-4 text-blue-400 fill-current" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Why Core Data Science Matters */}
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full border border-cyan-400/20 mb-6">
                <Database className="h-4 w-4 text-cyan-400" />
                <span className="text-cyan-300 text-sm font-medium">
                  Why Core Data Science Matters
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Turn Data Complexity into{" "}
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  Business Clarity
                </span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Today's businesses collect vast amounts of data — but most of it is underutilized. Without proper preparation, analysis, and visualization, data remains just noise.
              </p>
            </motion.div>

            {/* Data Quality Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { title: "Clean & Reliable", desc: "Accurate insights from quality data", icon: Shield, color: "from-blue-500 to-blue-600" },
                { title: "Advanced Analytics", desc: "Hidden trends revealed through statistics", icon: TrendingUp, color: "from-purple-500 to-purple-600" },
                { title: "Visual Dashboards", desc: "Empower decision-makers with clarity", icon: BarChart3, color: "from-cyan-500 to-cyan-600" },
                { title: "Strategic Stories", desc: "Data narratives that drive action", icon: FileSpreadsheet, color: "from-green-500 to-green-600" },
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 text-center hover:border-blue-400/40 transition-all duration-300"
                  >
                    <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 text-white relative overflow-hidden">
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
                for Core Data Science
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Partner with certified data scientists who deliver end-to-end solutions focused on business impact
              </p>
            </motion.div>

            {/* Carousel */}
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

      {/* Core Data Science Services Section */}
      <div
        id="services-section"
        className="py-20 bg-light relative overflow-hidden"
      >
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
              Our Core Data Science Services
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive data science solutions from collection to insights
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="max-w-8xl mx-auto relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const IconComponent = service.icon.type;
                return (
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
                      
                      <p className="text-gray-400 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Industries Section */}
      <section className="py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Industry Applications of Core Data Science
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
      <section className="py-20 bg-light relative overflow-hidden">
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
                Technology Stack – Data Science at RTNextGenAI
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                At RTNextGenAI, we use a modern, enterprise-grade Data Science toolkit to ensure accuracy, scalability, and business impact. Our stack covers the entire data lifecycle — from ingestion and preparation to exploration, visualization, and governance.
              </p>
            </motion.div>

            {/* Category Sections */}
            <div className="space-y-16">
              {/* Data Collection & Integration */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                    <Database className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">Data Collection & Integration</h3>
                    <p className="text-gray-300 text-lg">Seamlessly ingest data from enterprise apps, IoT, APIs, and cloud platforms.</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {[
                    { name: "MySQL", tooltip: "MySQL → Relational Database" },
                    { name: "PostgreSQL", tooltip: "PostgreSQL → Advanced SQL Database" },
                    { name: "MongoDB", tooltip: "MongoDB → NoSQL Document Database" },
                    { name: "Snowflake", tooltip: "Snowflake → Cloud Data Warehouse" },
                    { name: "BigQuery", tooltip: "BigQuery → Google Cloud Data Warehouse" },
                    { name: "Amazon Redshift", tooltip: "Amazon Redshift → AWS Data Warehouse" },
                    { name: "Apache NiFi", tooltip: "Apache NiFi → Data Flow Automation" },
                    { name: "Talend", tooltip: "Talend → Data Integration Platform" },
                    { name: "Fivetran", tooltip: "Fivetran → Automated Data Pipelines" },
                    { name: "AWS Glue", tooltip: "AWS Glue → Serverless ETL Service" },
                    { name: "Azure Data Factory", tooltip: "Azure Data Factory → Cloud ETL Service" },
                    { name: "Databricks", tooltip: "Databricks → Unified Analytics Platform" },
                  ].map((tech, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.05 }}
                      className="group cursor-pointer relative"
                    >
                      <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700 rounded-xl p-4 text-center hover:border-blue-500/50 transition-all duration-300 group-hover:scale-105 h-full">
                        <h4 className="text-white font-semibold text-sm mb-1 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                          {tech.name}
                        </h4>
                      </div>
                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                        {tech.tooltip}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Data Preparation & Wrangling */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">Data Preparation & Wrangling</h3>
                    <p className="text-gray-300 text-lg">Clean, enrich, and prepare data for accurate analysis.</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {[
                    { name: "Pandas", tooltip: "Pandas → Python Data Manipulation" },
                    { name: "NumPy", tooltip: "NumPy → Numerical Computing Library" },
                    { name: "Dask", tooltip: "Dask → Parallel Computing in Python" },
                    { name: "R", tooltip: "R → Statistical Computing Language" },
                    { name: "dplyr", tooltip: "dplyr → R Data Manipulation" },
                    { name: "OpenRefine", tooltip: "OpenRefine → Data Cleaning Tool" },
                    { name: "Alteryx", tooltip: "Alteryx → Self-Service Analytics" },
                    { name: "Apache Airflow", tooltip: "Apache Airflow → Workflow Orchestration" },
                    { name: "Luigi", tooltip: "Luigi → Python Workflow Engine" },
                    { name: "Prefect", tooltip: "Prefect → Modern Workflow Engine" },
                  ].map((tech, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.05 }}
                      className="group cursor-pointer relative"
                    >
                      <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700 rounded-xl p-4 text-center hover:border-purple-500/50 transition-all duration-300 group-hover:scale-105 h-full">
                        <h4 className="text-white font-semibold text-sm mb-1 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                          {tech.name}
                        </h4>
                      </div>
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                        {tech.tooltip}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Exploratory Data Analysis */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                    <Search className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">Exploratory Data Analysis & Statistics</h3>
                    <p className="text-gray-300 text-lg">Uncover hidden trends and relationships before advanced modeling.</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {[
                    { name: "SciPy", tooltip: "SciPy → Scientific Computing Library" },
                    { name: "Statsmodels", tooltip: "Statsmodels → Statistical Modeling" },
                    { name: "Seaborn", tooltip: "Seaborn → Statistical Visualization" },
                    { name: "Matplotlib", tooltip: "Matplotlib → Python Plotting Library" },
                    { name: "SAS", tooltip: "SAS → Statistical Analysis Software" },
                    { name: "SPSS", tooltip: "SPSS → Statistical Package" },
                    { name: "JupyterLab", tooltip: "JupyterLab → Interactive Development" },
                    { name: "RStudio", tooltip: "RStudio → R Development Environment" },
                    { name: "Apache Zeppelin", tooltip: "Apache Zeppelin → Web Notebook" },
                  ].map((tech, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.05 }}
                      className="group cursor-pointer relative"
                    >
                      <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700 rounded-xl p-4 text-center hover:border-green-500/50 transition-all duration-300 group-hover:scale-105 h-full">
                        <h4 className="text-white font-semibold text-sm mb-1 group-hover:bg-gradient-to-r group-hover:from-green-500 group-hover:to-emerald-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                          {tech.name}
                        </h4>
                      </div>
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                        {tech.tooltip}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Data Visualization & Storytelling */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                    <BarChart3 className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">Data Visualization & Storytelling</h3>
                    <p className="text-gray-300 text-lg">Deliver insights through intuitive dashboards and executive storytelling.</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {[
                    { name: "Tableau", tooltip: "Tableau → Business Intelligence Platform" },
                    { name: "Power BI", tooltip: "Power BI → Microsoft Analytics Service" },
                    { name: "Qlik Sense", tooltip: "Qlik Sense → Associative Analytics" },
                    { name: "Looker", tooltip: "Looker → Modern BI Platform" },
                    { name: "Apache Superset", tooltip: "Apache Superset → Open Source BI" },
                    { name: "Plotly", tooltip: "Plotly → Interactive Visualizations" },
                    { name: "Altair", tooltip: "Altair → Statistical Visualization Grammar" },
                    { name: "Bokeh", tooltip: "Bokeh → Interactive Visualization Library" },
                    { name: "D3.js", tooltip: "D3.js → Data-Driven Documents" },
                    { name: "Flourish", tooltip: "Flourish → Data Storytelling Platform" },
                  ].map((tech, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.05 }}
                      className="group cursor-pointer relative"
                    >
                      <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700 rounded-xl p-4 text-center hover:border-orange-500/50 transition-all duration-300 group-hover:scale-105 h-full">
                        <h4 className="text-white font-semibold text-sm mb-1 group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-red-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                          {tech.name}
                        </h4>
                      </div>
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                        {tech.tooltip}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Data Governance & Quality */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">Data Governance & Quality</h3>
                    <p className="text-gray-300 text-lg">Ensure trust, accuracy, and compliance with HIPAA, GDPR, SOC2.</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {[
                    { name: "Collibra", tooltip: "Collibra → Data Intelligence Platform" },
                    { name: "Alation", tooltip: "Alation → Data Catalog Platform" },
                    { name: "Unity Catalog", tooltip: "Unity Catalog → Databricks Data Catalog" },
                    { name: "Apache Atlas", tooltip: "Apache Atlas → Data Governance" },
                    { name: "Great Expectations", tooltip: "Great Expectations → Data Quality Testing" },
                    { name: "Monte Carlo", tooltip: "Monte Carlo → Data Observability" },
                    { name: "AWS Lake Formation", tooltip: "AWS Lake Formation → Data Lake Security" },
                    { name: "Azure Purview", tooltip: "Azure Purview → Data Governance Service" },
                    { name: "Google Data Catalog", tooltip: "Google Data Catalog → Metadata Management" },
                  ].map((tech, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.05 }}
                      className="group cursor-pointer relative"
                    >
                      <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700 rounded-xl p-4 text-center hover:border-indigo-500/50 transition-all duration-300 group-hover:scale-105 h-full">
                        <h4 className="text-white font-semibold text-sm mb-1 group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                          {tech.name}
                        </h4>
                      </div>
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                        {tech.tooltip}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Collaboration & Version Control */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">Collaboration & Version Control</h3>
                    <p className="text-gray-300 text-lg">Enable team-based, secure, and governed Data Science workflows.</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {[
                    { name: "GitHub", tooltip: "GitHub → Version Control Platform" },
                    { name: "GitLab", tooltip: "GitLab → DevOps Platform" },
                    { name: "Bitbucket", tooltip: "Bitbucket → Git Repository Management" },
                    { name: "JupyterHub", tooltip: "JupyterHub → Multi-User Jupyter Server" },
                    { name: "Google Colab", tooltip: "Google Colab → Cloud Jupyter Notebooks" },
                    { name: "Deepnote", tooltip: "Deepnote → Collaborative Data Science" },
                    { name: "Hex", tooltip: "Hex → Collaborative Data Workspace" },
                  ].map((tech, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.05 }}
                      className="group cursor-pointer relative"
                    >
                      <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700 rounded-xl p-4 text-center hover:border-teal-500/50 transition-all duration-300 group-hover:scale-105 h-full">
                        <h4 className="text-white font-semibold text-sm mb-1 group-hover:bg-gradient-to-r group-hover:from-teal-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                          {tech.name}
                        </h4>
                      </div>
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                        {tech.tooltip}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
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
                Core Data Science Experts
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
                Unlock the Full Potential
              </span>
              <br />
              <span className="text-white">of Your Data</span>
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Whether you're modernizing analytics or building AI-ready pipelines, our Core Data Science team delivers clarity, accuracy, and insights you can trust.
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
