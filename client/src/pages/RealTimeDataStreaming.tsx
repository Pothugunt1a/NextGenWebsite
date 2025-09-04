
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  Activity,
  Zap,
  Database,
  Cloud,
  Brain,
  Shield,
  Network,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Award,
  Target,
  Lightbulb,
  BarChart3,
  Smartphone,
  Server,
  Radio,
  Cpu,
  HardDrive,
  Monitor,
  Settings,
  AlertTriangle,
  DollarSign,
  ShoppingCart,
  Heart,
  Factory,
  Tv,
  Building,
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

const whyRealTimeMatters = [
  {
    icon: Shield,
    secondaryIcon: AlertTriangle,
    title: "Detect Fraud & Threats Instantly",
    description:
      "Real-time fraud detection and cybersecurity monitoring protect your business by identifying and responding to threats as they happen, preventing losses and maintaining customer trust through immediate threat mitigation.",
    badge: "Zero-delay protection",
  },
  {
    icon: Target,
    secondaryIcon: Lightbulb,
    title: "Personalize Experiences in Real Time",
    description:
      "Deliver personalized customer experiences by processing user interactions, preferences, and behaviors instantly. Create dynamic content, recommendations, and offers that adapt to customer needs in real-time.",
    badge: "Instant personalization",
  },
  {
    icon: Network,
    secondaryIcon: Settings,
    title: "Monitor IoT & Predictive Maintenance",
    description:
      "Process IoT sensor data from industrial equipment, smart devices, and connected systems to enable predictive maintenance, reduce downtime, and optimize operational efficiency through continuous monitoring.",
    badge: "IoT intelligence",
  },
  {
    icon: TrendingUp,
    secondaryIcon: Zap,
    title: "Process Transactions Instantly",
    description:
      "Enable instant financial transactions, payment processing, and real-time settlement systems. Support high-frequency trading, instant payments, and financial services that require millisecond response times.",
    badge: "Instant processing",
  },
];

const faqs: FAQ[] = [
  {
    question: "What makes RTNextGenAI's real-time streaming different?",
    answer:
      "We combine enterprise-grade streaming platforms with AI/ML integration to deliver not just fast data, but intelligent insights. Our solutions handle millions of events per second while maintaining low latency and high reliability.",
  },
  {
    question: "How quickly can you implement a real-time data pipeline?",
    answer:
      "Implementation timelines vary based on complexity. Simple streaming pipelines can be deployed in 2-4 weeks, while complex enterprise solutions with multiple data sources take 6-12 weeks. We provide detailed timelines during consultation.",
  },
  {
    question: "Can you work with our existing data infrastructure?",
    answer:
      "Absolutely. We specialize in hybrid architectures that integrate with existing databases, data warehouses, and cloud platforms. Our solutions work seamlessly with your current technology stack.",
  },
  {
    question: "What industries benefit most from real-time streaming?",
    answer:
      "Finance, retail, healthcare, manufacturing, and media see the greatest impact. Any industry requiring instant decision-making, fraud detection, IoT monitoring, or real-time customer engagement benefits significantly.",
  },
  {
    question: "How do you ensure data accuracy in high-velocity streams?",
    answer:
      "We implement robust data validation, duplicate detection, and error handling mechanisms. Our solutions include data quality monitoring, schema validation, and exactly-once processing guarantees to ensure accuracy.",
  },
];

const capabilities = [
  {
    icon: <Radio className="h-8 w-8 text-white" />,
    title: "Real-Time Data Ingestion",
    description:
      "Collect data from IoT sensors, mobile apps, ERP/CRM systems, logs, and APIs using enterprise-grade ingestion platforms like Apache Kafka, AWS Kinesis, Azure Event Hub, Google Pub/Sub, and MQTT brokers for seamless, scalable data collection.",
    backgroundImage: "/assets/AI-Integration.png",
  },
  {
    icon: <Cpu className="h-8 w-8 text-white" />,
    title: "Stream Processing & Analytics",
    description:
      "Process and analyze data-in-motion with Apache Flink, Spark Streaming, Storm, and Beam. Implement serverless stream processing with AWS Lambda, Azure Functions, and Google Cloud Functions for real-time analytics and instant decision-making dashboards.",
    backgroundImage: "/assets/AI-ML.png",
  },
  {
    icon: <Network className="h-8 w-8 text-white" />,
    title: "Event-Driven Architectures",
    description:
      "Design microservices triggered by real-time events, integrate with serverless workflows using Step Functions and Durable Functions. Power customer engagement platforms, fraud detection systems, and IoT applications with event-driven design patterns.",
    backgroundImage: "/assets/AWS-banner.png",
  },
  {
    icon: <HardDrive className="h-8 w-8 text-white" />,
    title: "Low-Latency Data Storage",
    description:
      "Implement real-time databases including Cassandra, DynamoDB, InfluxDB, and TimescaleDB. Deploy in-memory systems for ultra-fast analytics using Redis, Memcached, and Hazelcast for millisecond query response times.",
    backgroundImage: "/assets/Data-Governance.png",
  },
  {
    icon: <Brain className="h-8 w-8 text-white" />,
    title: "AI & ML with Streaming Data",
    description:
      "Enable real-time anomaly detection for fraud and IoT faults, implement online machine learning with continuous model updates, and deploy AI-powered personalization engines for e-commerce and media platforms with streaming data integration.",
    backgroundImage: "/assets/GenerativeAI.png",
  },
];

const techStack = [
  "Streaming: Apache Kafka, AWS Kinesis, Azure Event Hub, Google Pub/Sub",
  "Processing: Apache Flink, Spark Streaming, Storm, Apache Beam",
  "Databases: Cassandra, DynamoDB, InfluxDB, TimescaleDB",
  "Serverless: AWS Lambda, Azure Functions, Google Cloud Functions",
  "In-Memory: Redis, Memcached, Hazelcast, Apache Ignite",
  "Visualization: Power BI, Grafana, Kibana, Apache Superset",
  "Message Queues: RabbitMQ, Apache Pulsar, NATS",
  "Monitoring: Prometheus, Elastic Stack, Datadog, New Relic",
];

const industryData = [
  {
    id: "finance",
    name: "Finance",
    image: "/assets/Finance.png",
    content:
      "Financial services leverage real-time streaming for instant fraud detection, high-frequency trading, payment processing, and regulatory compliance monitoring. Our solutions process millions of transactions per second while maintaining strict security and compliance requirements, enabling instant risk assessment and automated decision-making.",
  },
  {
    id: "retail",
    name: "Retail & eCommerce",
    image: "/assets/Ecommerce.png",
    content:
      "Retail companies use real-time data streaming for personalized product recommendations, clickstream analysis, inventory management, and dynamic pricing. Our solutions process customer interactions instantly to deliver personalized shopping experiences and optimize supply chain operations.",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    image: "/assets/Healthcare.png",
    content:
      "Healthcare organizations implement real-time streaming for remote patient monitoring, emergency alert systems, medical device data processing, and clinical decision support. Our HIPAA-compliant solutions enable continuous patient monitoring and instant clinical alerts.",
  },
  {
    id: "manufacturing",
    name: "Manufacturing & IoT",
    image: "/assets/Manufacturing.png",
    content:
      "Manufacturing companies utilize IoT sensor data streaming for predictive maintenance, quality control, supply chain optimization, and production monitoring. Our solutions process sensor data from thousands of devices to prevent equipment failures and optimize operations.",
  },
  {
    id: "media",
    name: "Media & Entertainment",
    image: "/assets/Media.png",
    content:
      "Media companies leverage streaming analytics for content delivery optimization, audience engagement tracking, advertising targeting, and streaming quality monitoring. Our solutions handle millions of concurrent users while providing real-time insights into viewer behavior.",
  },
  {
    id: "smart-cities",
    name: "Smart Cities & Energy",
    image: "/assets/Manufacturing.png",
    content:
      "Smart city initiatives use real-time streaming for traffic management, environmental monitoring, energy grid optimization, and public safety systems. Our solutions process data from thousands of sensors to improve urban efficiency and citizen services.",
  },
];

const whyChooseUsReasons = [
  {
    icon: <Award className="h-6 w-6 text-blue-400" />,
    title: "Proven Low-Latency Expertise",
    description: "Demonstrated experience designing high-throughput pipelines handling millions of events per second with sub-millisecond latency",
  },
  {
    icon: <Cloud className="h-6 w-6 text-green-400" />,
    title: "Cloud-Native & Hybrid Solutions",
    description: "Enterprise solutions on AWS, Azure, and GCP with seamless integration to existing on-premise infrastructure",
  },
  {
    icon: <CheckCircle className="h-6 w-6 text-purple-400" />,
    title: "Cross-Industry Experience",
    description: "Proven success across finance, retail, healthcare, manufacturing, media, and smart city implementations",
  },
  {
    icon: <Brain className="h-6 w-6 text-yellow-400" />,
    title: "AI/ML Integration",
    description: "Native integration with machine learning models for predictive insights and intelligent automation",
  },
  {
    icon: <Shield className="h-6 w-6 text-cyan-400" />,
    title: "Enterprise-Grade Reliability",
    description: "Focus on scalability, compliance, security, and 99.99% uptime for mission-critical applications",
  },
];

export default function RealTimeDataStreaming() {
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
            alt="Real-Time Data & Streaming Services"
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
                  Stream, Process, and Act on Data in Real Time
                </span>
              </motion.h1>

              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl"
              >
                RTNextGenAI helps enterprises harness the power of real-time data pipelines, streaming analytics, and event-driven architectures to deliver instant insights, improve agility, and enable intelligent automation
              </motion.p>

              <div className="mb-32">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6, type: "spring" }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0066CC]/20 border border-[#0080FF]/30 rounded-full backdrop-blur-sm"
                >
                  <CheckCircle className="h-5 w-5 text-cyan-400 fill-none" />
                  <span className="text-white font-medium">
                    Enterprise Real-Time Analytics Solutions
                  </span>
                  <Award className="h-4 w-4 text-blue-400 fill-current" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Why Real-Time Data Matters Section */}
      <section className="py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 to-cyan-500/10"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full border border-cyan-400/20 mb-6">
                <Activity className="h-4 w-4 text-cyan-400" />
                <span className="text-cyan-300 text-sm font-medium">
                  Why Real-Time Data Matters
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Real-Time Data Isn't Just Faster —{" "}
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  It's Critical for Business Success
                </span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                In today's digital-first world, waiting hours or days for reports is no longer enough. Businesses need instant insights to stay competitive and responsive.
              </p>
            </motion.div>

            {/* Two-Column Layout: Challenges vs Solutions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Left Column: Challenges */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full border border-red-400/20 mb-4">
                    <AlertTriangle className="h-4 w-4 text-red-400" />
                    <span className="text-red-300 text-sm font-medium">Business Challenges</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-6">
                    The Cost of Delayed Decisions
                  </h3>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-red-900/20 to-orange-900/20 rounded-xl border border-red-500/20">
                    <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="h-6 w-6 text-red-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Delayed Reports</h4>
                      <p className="text-gray-300">Critical business insights arrive hours or days too late, missing time-sensitive opportunities</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-red-900/20 to-orange-900/20 rounded-xl border border-red-500/20">
                    <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="h-6 w-6 text-red-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Fraud Detected Too Late</h4>
                      <p className="text-gray-300">Security threats and fraudulent activities go undetected for hours, resulting in significant losses</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-red-900/20 to-orange-900/20 rounded-xl border border-red-500/20">
                    <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="h-6 w-6 text-red-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Missed Business Opportunities</h4>
                      <p className="text-gray-300">Customer behavior insights arrive too late to capitalize on sales opportunities and market trends</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Solutions */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full border border-green-400/20 mb-4">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-green-300 text-sm font-medium">Real-Time Solutions</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-6">
                    The Power of Instant Intelligence
                  </h3>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-green-900/20 to-cyan-900/20 rounded-xl border border-green-500/20">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Fraud Detection in Seconds</h4>
                      <p className="text-gray-300">Identify and block fraudulent transactions instantly with real-time monitoring and AI-powered alerts</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-green-900/20 to-cyan-900/20 rounded-xl border border-green-500/20">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Smartphone className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Real-Time Personalization</h4>
                      <p className="text-gray-300">Deliver personalized experiences instantly based on live user behavior and preferences</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-green-900/20 to-cyan-900/20 rounded-xl border border-green-500/20">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Settings className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Predictive IoT Maintenance</h4>
                      <p className="text-gray-300">Prevent equipment failures with continuous monitoring and predictive analytics on sensor data</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Infographic: Batch vs Real-Time */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-cyan-400/20 rounded-3xl p-8 lg:p-12"
            >
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Batch Processing vs Real-Time Streaming
                </h3>
                <p className="text-gray-300 text-lg">
                  See the dramatic difference in response times
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Batch Processing */}
                <div className="text-center p-8 bg-gradient-to-br from-red-900/20 to-orange-900/20 rounded-2xl border border-red-500/20">
                  <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <BarChart3 className="h-10 w-10 text-red-400" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">Batch Processing</h4>
                  <div className="text-4xl font-bold text-red-400 mb-2">Hours - Days</div>
                  <p className="text-gray-300">Traditional data processing with significant delays</p>
                  <div className="mt-6 space-y-2">
                    <div className="flex items-center gap-2 text-red-300">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span className="text-sm">Scheduled reports</span>
                    </div>
                    <div className="flex items-center gap-2 text-red-300">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span className="text-sm">Historical analysis</span>
                    </div>
                    <div className="flex items-center gap-2 text-red-300">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span className="text-sm">Delayed insights</span>
                    </div>
                  </div>
                </div>

                {/* Real-Time Processing */}
                <div className="text-center p-8 bg-gradient-to-br from-green-900/20 to-cyan-900/20 rounded-2xl border border-green-500/20">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Activity className="h-10 w-10 text-green-400" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">Real-Time Streaming</h4>
                  <div className="text-4xl font-bold text-green-400 mb-2">Seconds</div>
                  <p className="text-gray-300">Instant processing and immediate insights</p>
                  <div className="mt-6 space-y-2">
                    <div className="flex items-center gap-2 text-green-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm">Live dashboards</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm">Instant alerts</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm">Immediate action</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

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
                    Ready to make real-time decisions?
                  </span>
                </div>
                <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <div
        id="capabilities-section"
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
              Our Real-Time Data & Streaming Capabilities
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Enterprise-grade streaming solutions that process millions of events per second with ultra-low latency
            </p>
          </motion.div>

          <div className="max-w-8xl mx-auto relative">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Real-Time Data Ingestion */}
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="group cursor-pointer h-full"
                >
                  <div className="flex items-center gap-6 p-6 bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-blue-500/50 hover:bg-gray-800/80 transition-all duration-500 group-hover:translate-x-2 h-full">
                    <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                      <img
                        src={capabilities[0].backgroundImage}
                        alt={capabilities[0].title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        style={{ backgroundAttachment: "fixed" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/90"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Radio className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          01
                        </div>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {capabilities[0].title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {capabilities[0].description}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Stream Processing & Analytics */}
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
                        src={capabilities[1].backgroundImage}
                        alt={capabilities[1].title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        style={{ backgroundAttachment: "fixed" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/90"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Cpu className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          02
                        </div>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {capabilities[1].title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {capabilities[1].description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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
                        alt="Real-Time Streaming Architecture"
                        className="w-full h-auto object-contain group-hover:scale-105 transition-all duration-700"
                        style={{ backgroundAttachment: "fixed" }}
                      />
                    </div>

                    <div className="absolute top-8 right-8 flex flex-col gap-4">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                        <Activity className="h-8 w-8 text-white" />
                      </div>
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                        RT
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="mb-4">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                          <span className="text-blue-200 text-sm font-medium">
                            Real-Time Processing
                          </span>
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-3 leading-tight">
                          Streaming Data Architecture
                        </h3>
                        <p className="text-blue-100 leading-relaxed mb-6">
                          Enterprise-grade real-time data processing pipelines that deliver instant insights.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Event-Driven Architectures */}
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
                        style={{ backgroundAttachment: "fixed" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/90"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Network className="h-6 w-6 text-white" />
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

              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Low-Latency Data Storage */}
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="group cursor-pointer h-full"
                >
                  <div className="flex items-center gap-6 p-6 bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-blue-500/50 hover:bg-gray-800/80 transition-all duration-500 group-hover:translate-x-2 h-full">
                    <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                      <img
                        src={capabilities[3].backgroundImage}
                        alt={capabilities[3].title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        style={{ backgroundAttachment: "fixed" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/90"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <HardDrive className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          04
                        </div>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {capabilities[3].title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {capabilities[3].description}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* AI & ML with Streaming Data */}
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
                        src={capabilities[4].backgroundImage}
                        alt={capabilities[4].title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        style={{ backgroundAttachment: "fixed" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/90"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Brain className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          05
                        </div>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {capabilities[4].title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {capabilities[4].description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
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
                Industry Use Cases for Real-Time Streaming
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300">
                Discover how different industries leverage real-time data streaming for competitive advantage
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
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

      {/* Real-Time Data Architecture Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20"></div>
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full border border-cyan-400/20 mb-6">
                <Network className="h-4 w-4 text-cyan-400" />
                <span className="text-cyan-300 text-sm font-medium">
                  Enterprise Architecture
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Real-Time Data Architecture
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                End-to-end streaming data pipeline from ingestion to insights
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-cyan-400/20 rounded-3xl p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                  {/* Sources */}
                  <div className="text-center group">
                    <div className="relative mx-auto mb-4 w-20 h-20 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center border border-green-400/30 group-hover:border-green-400/50 transition-colors">
                      <Database className="h-10 w-10 text-green-400" />
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">1</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Data Sources</h3>
                    <p className="text-gray-400 text-sm">IoT • Web • Mobile • ERP/CRM</p>
                  </div>

                  {/* Arrow */}
                  <div className="hidden lg:flex justify-center">
                    <ArrowRight className="h-8 w-8 text-cyan-400 animate-pulse" />
                  </div>

                  {/* Streaming Platform */}
                  <div className="text-center group">
                    <div className="relative mx-auto mb-4 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center border border-blue-400/30 group-hover:border-blue-400/50 transition-colors">
                      <Radio className="h-10 w-10 text-blue-400" />
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">2</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Streaming Platform</h3>
                    <p className="text-gray-400 text-sm">Kafka • Kinesis • Event Hub</p>
                  </div>

                  {/* Arrow */}
                  <div className="hidden lg:flex justify-center">
                    <ArrowRight className="h-8 w-8 text-cyan-400 animate-pulse" />
                  </div>

                  {/* Processing */}
                  <div className="text-center group">
                    <div className="relative mx-auto mb-4 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center border border-purple-400/30 group-hover:border-purple-400/50 transition-colors">
                      <Cpu className="h-10 w-10 text-purple-400" />
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">3</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Stream Processing</h3>
                    <p className="text-gray-400 text-sm">Flink • Spark • Lambda</p>
                  </div>
                </div>

                <div className="flex justify-center my-8">
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  {/* Storage */}
                  <div className="text-center group">
                    <div className="relative mx-auto mb-4 w-20 h-20 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl flex items-center justify-center border border-orange-400/30 group-hover:border-orange-400/50 transition-colors">
                      <HardDrive className="h-10 w-10 text-orange-400" />
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">4</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Low-Latency Storage</h3>
                    <p className="text-gray-400 text-sm">Cassandra • DynamoDB • InfluxDB</p>
                  </div>

                  {/* Arrow */}
                  <div className="hidden lg:flex justify-center">
                    <ArrowRight className="h-8 w-8 text-cyan-400 animate-pulse" />
                  </div>

                  {/* Outputs */}
                  <div className="text-center group">
                    <div className="relative mx-auto mb-4 w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-2xl flex items-center justify-center border border-cyan-400/30 group-hover:border-cyan-400/50 transition-colors">
                      <Monitor className="h-10 w-10 text-cyan-400" />
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">5</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Real-Time Outputs</h3>
                    <p className="text-gray-400 text-sm">Dashboards • Alerts • ML Models</p>
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl border border-blue-400/20">
                    <div className="text-3xl font-bold text-blue-400 mb-2">&lt;100ms</div>
                    <div className="text-gray-300 text-sm">Processing Latency</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl border border-green-400/20">
                    <div className="text-3xl font-bold text-green-400 mb-2">99.99%</div>
                    <div className="text-gray-300 text-sm">Uptime SLA</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-400/20">
                    <div className="text-3xl font-bold text-purple-400 mb-2">1M+</div>
                    <div className="text-gray-300 text-sm">Events/Second</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Technologies We Use for Real-Time Streaming
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300">
                Industry-leading streaming and processing technologies
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-lg border border-gray-700 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <p className="text-gray-300 text-sm font-medium">{tech}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Impact / Success Metrics */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Real Results from Real-Time Solutions
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300">
                Proven success stories across industries
              </p>
            </div>

            <Carousel
              className="w-full max-w-5xl mx-auto"
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
              <CarouselContent>
                <CarouselItem>
                  <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-400/20 rounded-2xl p-8 lg:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                            <DollarSign className="h-6 w-6 text-white" />
                          </div>
                          <span className="text-cyan-400 font-semibold text-lg">Financial Services</span>
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-4">
                          Fraud Detection in 2 Seconds
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                          Implemented real-time analytics pipeline that processes 500K transactions per second, 
                          reducing fraud detection time from 24 hours to under 2 seconds, preventing $50M in 
                          potential losses annually.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center p-3 bg-blue-500/10 rounded-lg">
                            <div className="text-2xl font-bold text-blue-400">2s</div>
                            <div className="text-gray-400 text-sm">Detection Time</div>
                          </div>
                          <div className="text-center p-3 bg-green-500/10 rounded-lg">
                            <div className="text-2xl font-bold text-green-400">$50M</div>
                            <div className="text-gray-400 text-sm">Losses Prevented</div>
                          </div>
                        </div>
                      </div>
                      <div className="relative">
                        <img
                          src="/assets/Finance.png"
                          alt="Financial Services Success"
                          className="w-full h-80 object-cover rounded-xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent rounded-xl"></div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>

                <CarouselItem>
                  <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-400/20 rounded-2xl p-8 lg:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                            <ShoppingCart className="h-6 w-6 text-white" />
                          </div>
                          <span className="text-emerald-400 font-semibold text-lg">Retail & eCommerce</span>
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-4">
                          20% Conversion Boost
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                          Built real-time personalization engine processing clickstream data from 2M daily users, 
                          delivering instant product recommendations that increased conversion rates by 20% and 
                          average order value by 15%.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center p-3 bg-green-500/10 rounded-lg">
                            <div className="text-2xl font-bold text-green-400">+20%</div>
                            <div className="text-gray-400 text-sm">Conversions</div>
                          </div>
                          <div className="text-center p-3 bg-blue-500/10 rounded-lg">
                            <div className="text-2xl font-bold text-blue-400">2M</div>
                            <div className="text-gray-400 text-sm">Daily Users</div>
                          </div>
                        </div>
                      </div>
                      <div className="relative">
                        <img
                          src="/assets/Ecommerce.png"
                          alt="Retail Success"
                          className="w-full h-80 object-cover rounded-xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent rounded-xl"></div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>

                <CarouselItem>
                  <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-400/20 rounded-2xl p-8 lg:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                            <Factory className="h-6 w-6 text-white" />
                          </div>
                          <span className="text-orange-400 font-semibold text-lg">Manufacturing</span>
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-4">
                          40% Downtime Reduction
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                          Deployed IoT streaming analytics for predictive maintenance across 200+ machines, 
                          processing sensor data in real-time to predict failures 48 hours in advance, 
                          reducing unplanned downtime by 40%.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center p-3 bg-orange-500/10 rounded-lg">
                            <div className="text-2xl font-bold text-orange-400">-40%</div>
                            <div className="text-gray-400 text-sm">Downtime</div>
                          </div>
                          <div className="text-center p-3 bg-purple-500/10 rounded-lg">
                            <div className="text-2xl font-bold text-purple-400">48h</div>
                            <div className="text-gray-400 text-sm">Prediction Lead</div>
                          </div>
                        </div>
                      </div>
                      <div className="relative">
                        <img
                          src="/assets/Manufacturing.png"
                          alt="Manufacturing Success"
                          className="w-full h-80 object-cover rounded-xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent rounded-xl"></div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>

              <CarouselPrevious className="left-4 bg-gradient-to-r from-gray-800/90 to-gray-700/90 border border-cyan-400/40 hover:border-cyan-400/70 text-cyan-400 hover:text-white" />
              <CarouselNext className="right-4 bg-gradient-to-r from-gray-800/90 to-gray-700/90 border border-cyan-400/40 hover:border-cyan-400/70 text-cyan-400 hover:text-white" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Why Choose RTNextGenAI */}
      <section className="py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose RTNextGenAI for Real-Time Streaming
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUsReasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="flex items-start gap-4 p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 hover:border-cyan-400/30 transition-all duration-300"
                >
                  {reason.icon}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{reason.title}</h3>
                    <p className="text-gray-300">{reason.description}</p>
                  </div>
                </motion.div>
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
              <h2 className="text-4xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300">
                Common questions about our real-time streaming services
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5">
                <div className="relative group">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src="/assets/AI-DataStratergy-banner.png"
                      alt="Real-Time Data Streaming Technology"
                      className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Real-Time Intelligence
                      </h3>
                      <p className="text-gray-200 text-sm">
                        Processing millions of events per second with enterprise-grade reliability
                      </p>
                    </div>
                  </div>
                </div>
              </div>

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

      {/* CTA Section */}
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
              <Activity className="h-5 w-5 text-cyan-400" />
              <span className="text-white font-medium">
                Real-Time Data Streaming Experts
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
                Ready to Make Real-Time
              </span>
              <br />
              <span className="text-white">Decisions?</span>
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Partner with RTNextGenAI to build scalable, secure, and intelligent real-time data platforms that deliver instant insights and competitive advantage
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            >
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <CheckCircle className="h-6 w-6 text-white bg-primary rounded-full p-1" />
                <span className="text-white font-semibold">
                  Free Streaming Consultation
                </span>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <CheckCircle className="h-6 w-6 text-white bg-primary rounded-full p-1" />
                <span className="text-white font-semibold">
                  Expert Architecture Design
                </span>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <CheckCircle className="h-6 w-6 text-white bg-primary rounded-full p-1" />
                <span className="text-white font-semibold">Proven Results</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-6"
            >
              <Button
                size="lg"
                className="group bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-10 py-6 text-lg font-semibold shadow-2xl shadow-blue-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
              >
                <Monitor className="mr-2 h-5 w-5" />
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group border-white/30 hover:border-white/60 px-10 py-6 text-lg font-semibold hover:bg-white/10"
              >
                <Activity className="mr-2 h-5 w-5" />
                Request a Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
