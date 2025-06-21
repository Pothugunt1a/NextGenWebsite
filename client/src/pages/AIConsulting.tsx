import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ChevronDown,
  ChevronUp,
  Brain,
  Lightbulb,
  Target,
  Users,
  Zap,
  Shield,
  Network,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Award,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "../components/ui/button";

interface FAQ {
  question: string;
  answer: string;
}

const whyChooseUsItems = [
  {
    icon: Users,
    secondaryIcon: Brain,
    title: "Team of experienced professionals",
    description:
      "Our team of highly skilled consultants, many of whom hold Ph.D. degrees in AI or related fields, brings extensive knowledge and hands-on experience across diverse AI projects. We've successfully developed AI-driven solutions spanning multiple industries, from insurance and construction to finance, pharmaceutical, and real estate sectors.",
    badge: "PhD-level expertise",
  },
  {
    icon: Network,
    secondaryIcon: Zap,
    title: "Cutting-edge technology",
    description:
      "Beyond years of experience and deep domain expertise in AI development, we pride ourselves on leveraging the latest tools and technologies. Whether you're adopting AI for the first time, seeking to audit existing AI systems, or looking to scale your AI infrastructure, our team delivers cutting-edge solutions.",
    badge: "Latest AI technologies",
  },
  {
    icon: Shield,
    secondaryIcon: Target,
    title: "Reliability & flexibility guaranteed",
    description:
      "Transparency and continuous communication form the foundation of every successful AI project. At RTNextGenAI, we collaborate closely with our clients to ensure complete understanding of each project milestone. We maintain flexibility to align with your specific project goals and requirements, giving you confidence that you're partnering with trusted experts.",
    badge: "100% transparency",
  },
  {
    icon: TrendingUp,
    secondaryIcon: Lightbulb,
    title: "Take your business to new heights",
    description:
      "As a leading artificial intelligence consulting firm, we strategically implement AI across various business processes to ensure sustained efficiency and operational continuity. We thoroughly analyze areas and operations where AI-driven solutions can create significant value for your organization, helping you unlock AI's transformative potential.",
    badge: "Proven ROI results",
  },
];

const faqs: FAQ[] = [
  {
    question: "What makes RTNextGenAI's consulting approach different?",
    answer:
      "We combine deep technical expertise with industry-specific knowledge to deliver AI solutions that directly impact your business goals. Our team includes PhDs in machine learning, experienced engineers, and industry specialists who understand both the technology and your market.",
  },
  {
    question: "How long does a typical AI consulting project take?",
    answer:
      "Project timelines vary based on complexity and scope. Strategy assessments typically take 2-4 weeks, proof-of-concept development 4-8 weeks, and full implementation 3-6 months. We provide detailed timelines during our initial consultation.",
  },
  {
    question: "Do you work with companies that have no AI experience?",
    answer:
      "Absolutely. We specialize in helping organizations at every stage of their AI journey, from complete beginners to companies looking to optimize existing AI systems. We start with education and strategy before moving to implementation.",
  },
  {
    question: "What industries do you have the most experience with?",
    answer:
      "We have extensive experience across finance, healthcare, manufacturing, retail, and technology sectors. Our consultants bring both technical expertise and deep industry knowledge to ensure solutions fit your specific business context.",
  },
  {
    question: "How do you ensure AI solutions are ethical and compliant?",
    answer:
      "We prioritize responsible AI development with built-in bias detection, transparency mechanisms, and compliance frameworks. Our team stays current with regulations like GDPR, CCPA, and emerging AI governance standards to ensure your solutions meet all requirements.",
  },
];

const industries = [
  {
    name: "Finance",
    description:
      "Fraud detection, algorithmic trading, risk assessment, and personalized financial services using advanced machine learning models.",
  },
  {
    name: "Government",
    description:
      "Public service optimization, predictive analytics for policy making, citizen service chatbots, and smart city infrastructure.",
  },
  {
    name: "Internet & Tech Startups",
    description:
      "Recommendation engines, user behavior analysis, automated customer support, and scalable AI infrastructure for rapid growth.",
  },
  {
    name: "Media",
    description:
      "Content personalization, automated content generation, audience analytics, and intelligent content moderation systems.",
  },
  {
    name: "Oil & Gas",
    description:
      "Predictive maintenance, exploration optimization, supply chain automation, and environmental impact monitoring.",
  },
  {
    name: "Pharmaceuticals",
    description:
      "Drug discovery acceleration, clinical trial optimization, regulatory compliance automation, and personalized medicine solutions.",
  },
  {
    name: "NGOs, NPOs, NCOs",
    description:
      "Impact measurement analytics, donor behavior prediction, resource optimization, and automated reporting for greater transparency.",
  },
];

const capabilities = [
  {
    icon: (
      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
        <Brain className="h-8 w-8 text-white" />
      </div>
    ),
    title: "AI Strategy & Roadmap",
    description:
      "Comprehensive AI strategy development aligned with your business objectives, including technology assessment and implementation roadmaps.",
  },
  {
    icon: (
      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
        <Lightbulb className="h-8 w-8 text-white" />
      </div>
    ),
    title: "Use Case Identification",
    description:
      "Systematic identification and prioritization of AI opportunities across your organization to maximize ROI and business impact.",
  },
  {
    icon: (
      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
        <Target className="h-8 w-8 text-white" />
      </div>
    ),
    title: "Proof of Concept Development",
    description:
      "Rapid prototyping and validation of AI solutions to demonstrate value and feasibility before full-scale implementation.",
  },
  {
    icon: (
      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
        <Users className="h-8 w-8 text-white" />
      </div>
    ),
    title: "Team Training & Enablement",
    description:
      "Comprehensive training programs to upskill your team and ensure successful adoption of AI technologies.",
  },
  {
    icon: (
      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
        <Zap className="h-8 w-8 text-white" />
      </div>
    ),
    title: "Process Optimization",
    description:
      "AI-powered process analysis and optimization to improve efficiency, reduce costs, and enhance decision-making.",
  },
  {
    icon: (
      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
        <Shield className="h-8 w-8 text-white" />
      </div>
    ),
    title: "AI Governance & Ethics",
    description:
      "Establishing responsible AI frameworks, bias detection, and compliance systems to ensure ethical AI deployment.",
  },
];

const techStack = [
  "Machine Learning: TensorFlow, PyTorch, Scikit-learn, XGBoost",
  "Deep Learning: Neural Networks, CNN, RNN, LSTM, Transformers",
  "Natural Language Processing: BERT, GPT, NLTK, spaCy",
  "Computer Vision: OpenCV, YOLO, ResNet, EfficientNet",
  "Cloud Platforms: AWS, Azure, Google Cloud, MLOps",
  "Data Engineering: Apache Spark, Kafka, Airflow, Docker",
  "Programming: Python, R, Java, Scala, SQL",
  "Visualization: Tableau, Power BI, D3.js, Plotly",
];

// Industry data for the interactive section
const industryData = [
  {
    id: "finance",
    name: "Finance",
    image: "/assets/Finance.png",
    content:
      "AI transforms financial services through automated risk assessment, algorithmic trading, fraud detection, and personalized customer experiences. Our solutions include predictive analytics for credit scoring, robo-advisors for investment management, and real-time transaction monitoring systems that enhance security and operational efficiency.",
  },
  {
    id: "government",
    name: "Government",
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
    content:
      "Government agencies leverage AI for citizen services automation, predictive policing, resource optimization, and policy analysis. We develop intelligent systems for document processing, citizen engagement platforms, traffic management solutions, and data-driven decision making tools that improve public service delivery and operational transparency.",
  },
  {
    id: "tech-startups",
    name: "Internet and Tech Startups",
    image: "/assets/Internet-Tech-Startup.png",
    content:
      "Tech startups accelerate growth with AI-powered product recommendations, user behavior analytics, automated content moderation, and intelligent scaling solutions. Our expertise includes building ML-driven features, implementing AI-first architectures, and creating competitive advantages through advanced algorithms and data intelligence platforms.",
  },
  {
    id: "media",
    name: "Media",
    image: "/assets/Media.png",
    content:
      "Media companies revolutionize content creation and distribution through AI-driven personalization, automated editing, content generation, and audience analytics. We develop solutions for real-time content optimization, sentiment analysis, automated transcription services, and intelligent content recommendation systems that enhance viewer engagement and operational efficiency.",
  },
  {
    id: "oil-gas",
    name: "Oil & Gas",
    image: "/assets/Oil-Gas.png",
    content:
      "Oil & Gas industry optimizes operations with AI-powered predictive maintenance, geological analysis, supply chain optimization, and safety monitoring. Our solutions include drilling optimization algorithms, reservoir modeling systems, equipment failure prediction, and environmental compliance monitoring that reduce costs while improving safety and sustainability.",
  },
  {
    id: "pharmaceuticals",
    name: "Pharmaceuticals",
    image: "/assets/Pharmaceuticals.png",
    content:
      "Pharmaceutical companies accelerate drug discovery and development through AI-driven molecular analysis, clinical trial optimization, and regulatory compliance automation. We create solutions for compound screening, patient recruitment optimization, side effect prediction, and manufacturing quality control that reduce development timelines and improve success rates.",
  },
  {
    id: "ngos",
    name: "NGOs, NPOs, NCOs",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
    content:
      "Non-profit organizations maximize impact through AI-powered donor analysis, program effectiveness measurement, resource allocation optimization, and community outreach automation. Our solutions include predictive analytics for fundraising, volunteer matching systems, impact assessment tools, and automated reporting that help organizations achieve their mission more effectively.",
  },
];

export default function AIConsulting() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedIndustry, setSelectedIndustry] = useState(industryData[0]);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Auto carousel effect for 2x2 grid (2 slides total)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 2); // 2 slides: first shows items 0,1 and second shows items 2,3
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-white"
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/AI-Consulting.png"
            alt="AI Consulting Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-left">
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
                AI Consulting Services
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl"
            >
              Transform your business with strategic AI implementation, expert
              guidance, and comprehensive solutions that drive innovation and
              competitive advantage
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
                  Strategic AI Transformation Solutions
                </span>
                <Award className="h-4 w-4 text-blue-400 fill-current" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Consulting Services Section */}
      <section className="py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our AI Consulting Services
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer comprehensive AI consulting services to help you
                identify opportunities, develop strategies, and optimize
                processes with artificial intelligence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {/* AI and Data Strategy */}
              <Link href="/ai-data-strategy">
                <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-8 hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 group cursor-pointer">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    AI and Data Strategy
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Develop comprehensive AI strategies aligned with your
                    business objectives. We help you create data-driven roadmaps
                    that maximize AI investment returns and ensure sustainable
                    growth.
                  </p>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    AI readiness assessment
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    Data architecture planning
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    Technology stack recommendations
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    ROI forecasting and budgeting
                  </li>
                </ul>
                </div>
              </Link>

              {/* Process Optimization with AI */}
              <Link href="/process-optimization" className="block">
                <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-8 hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 group cursor-pointer">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Zap className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      Process Optimization with AI
                    </h3>
                  <p className="text-gray-300 mb-6">
                    Transform your business processes with AI-powered automation
                    and optimization. We identify bottlenecks, streamline
                    workflows, and implement intelligent solutions that drive
                    efficiency.
                  </p>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    Process analysis and mapping
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    Automation opportunity identification
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    Workflow optimization design
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    Implementation roadmap creation
                  </li>
                </ul>
                </div>
              </Link>

              {/* AI Use Case Discovery & Identification */}
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-8 hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 group">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    AI Use Case Discovery & Identification
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Uncover high-impact AI opportunities across your
                    organization. We conduct systematic discovery workshops to
                    identify, evaluate, and prioritize AI use cases that deliver
                    maximum business value.
                  </p>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    Discovery workshops and interviews
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    Use case feasibility analysis
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    ROI impact assessment
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    Priority matrix and roadmap
                  </li>
                </ul>
              </div>
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
                Why work with{" "}
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  RTNextGenAI
                </span>{" "}
                on your next AI project
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Partner with industry-leading AI experts who combine deep
                technical knowledge with proven business results
              </p>
            </motion.div>

            {/* Auto Carousel - 2x2 Grid */}
            <div className="relative max-w-6xl mx-auto">
              {/* Left Arrow */}
              <button
                onClick={() => setCurrentSlide(currentSlide === 0 ? 1 : 0)}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-gray-800/90 to-gray-700/90 border border-cyan-400/40 hover:border-cyan-400/70 transition-all duration-300 group hover:shadow-lg hover:shadow-cyan-400/20 backdrop-blur-sm"
              >
                <ChevronLeft className="h-6 w-6 text-cyan-400 group-hover:text-white transition-colors" />
              </button>

              {/* Right Arrow */}
              <button
                onClick={() => setCurrentSlide(currentSlide === 1 ? 0 : 1)}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-gray-800/90 to-gray-700/90 border border-cyan-400/40 hover:border-cyan-400/70 transition-all duration-300 group hover:shadow-lg hover:shadow-cyan-400/20 backdrop-blur-sm"
              >
                <ChevronRight className="h-6 w-6 text-cyan-400 group-hover:text-white transition-colors" />
              </button>

              <div className="overflow-hidden">
                <motion.div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {/* First slide - items 0,1 */}
                  <div className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {whyChooseUsItems.slice(0, 2).map((item, index) => {
                        const IconComponent = item.icon;
                        const SecondaryIconComponent = item.secondaryIcon;

                        return (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group"
                          >
                            <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full hover:border-cyan-400/30 transition-all duration-500 group-hover:transform group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-cyan-500/10">
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

                  {/* Second slide - items 2,3 */}
                  <div className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {whyChooseUsItems.slice(2, 4).map((item, index) => {
                        const IconComponent = item.icon;
                        const SecondaryIconComponent = item.secondaryIcon;

                        return (
                          <motion.div
                            key={index + 2}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group"
                          >
                            <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full hover:border-cyan-400/30 transition-all duration-500 group-hover:transform group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-cyan-500/10">
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
                </motion.div>
              </div>
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
                    Ready to get started?
                  </span>
                </div>
                <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Discuss Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main AI Consulting Capabilities */}
      <section className="py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our main AI consulting capabilities
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20"
                >
                  <div className="mb-6">{capability.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {capability.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                How we work
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We follow a systematic approach for all AI projects. So when you
                choose us, here's what you can expect
              </p>
            </div>

            {/* Circular Process Layout */}
            <div className="relative flex items-center justify-center min-h-[800px] lg:min-h-[900px] px-8">
              {/* Central Circle */}
              <div className="relative z-20">
                <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl">
                  <div className="w-40 h-40 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex flex-col items-center justify-center border-4 border-blue-400/20">
                    <div className="text-white mb-2">
                      <svg
                        className="w-12 h-12"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
                      </svg>
                    </div>
                    <div className="text-center">
                      <div className="text-white font-bold text-lg">AI</div>
                      <div className="text-white font-bold text-lg">
                        PROCESS
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dotted Circle Path */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ zIndex: 1 }}
              >
                <defs>
                  <linearGradient
                    id="processGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.7" />
                  </linearGradient>
                </defs>

                {/* Dotted circle that connects all process steps */}
                <circle
                  cx="50%"
                  cy="50%"
                  r="180"
                  stroke="url(#processGradient)"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="8,6"
                  className="opacity-80"
                />
              </svg>

              {/* Process Steps - Positioned clockwise starting from top-left */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Step 1 - Top Left (10 o'clock) - Discovery Stage */}
                <div
                  className="absolute"
                  style={{
                    top: "calc(50% - 127px)",
                    left: "calc(50% - 127px)",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div
                      className="bg-slate-800/60 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-6 max-w-sm shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
                      style={{ marginRight: "12rem", marginBottom: "18rem" }}
                    >
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                          <svg
                            className="w-6 h-6 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21A2 2 0 0 0 5 23H19A2 2 0 0 0 21 21V9Z" />
                          </svg>
                        </div>
                        <h3 className="text-white font-semibold text-lg">
                          Initial Setup
                        </h3>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        After identifying your needs, we take the time to
                        understand your team and how your data is collected,
                        ensuring we have everything required for a successful
                        project. Using the available dataset, we then assess
                        whether AI is the most suitable solution for the problem
                        at hand.
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Step 2 - Top Right (2 o'clock) - Initial Setup */}
                <div
                  className="absolute"
                  style={{
                    top: "calc(50% - 127px)",
                    right: "calc(50% - 127px)",
                    transform: "translate(50%, -50%)",
                  }}
                >
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div
                      className="bg-slate-800/60 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-6 max-w-sm shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
                      style={{ marginLeft: "12rem", marginBottom: "18rem" }}
                    >
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                          <svg
                            className="w-6 h-6 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M3 3H21A1 1 0 0 1 22 4V20A1 1 0 0 1 21 21H3A1 1 0 0 1 2 20V4A1 1 0 0 1 3 3ZM4 5V19H20V5H4ZM6 7H8V9H6V7ZM6 11H8V13H6V11ZM6 15H8V17H6V15ZM10 7H18V9H10V7ZM10 11H18V13H10V11ZM10 15H18V17H10V15Z" />
                          </svg>
                        </div>
                        <h3 className="text-white font-semibold text-lg">
                          Discovery stage
                        </h3>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        We begin by gaining a clear understanding of the problem
                        you're trying to solve, working closely with you to
                        gather valuable insights. From there, we outline the
                        overall strategy and approach, providing high-level
                        estimates to help you visualize the project scope and
                        anticipated results.
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Step 3 - Bottom Right (4 o'clock) - Building MVP */}
                <div
                  className="absolute"
                  style={{
                    bottom: "calc(50% - 127px)",
                    right: "calc(50% - 127px)",
                    transform: "translate(50%, 50%)",
                  }}
                >
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div
                      className="bg-slate-800/60 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-6 max-w-sm shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
                      style={{ marginLeft: "12rem", marginTop: "18rem" }}
                    >
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                          <svg
                            className="w-6 h-6 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2L1 7L12 12L21 7.5V16H23V7L12 2ZM18.5 9L12 12L5.5 9L12 6L18.5 9ZM12 13L1 8V18C1 19.1 1.9 20 3 20H9V12H15V20H21C22.1 20 23 19.1 23 18V8L12 13Z" />
                          </svg>
                        </div>
                        <h3 className="text-white font-semibold text-lg">
                          Evaluating results
                        </h3>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        We collaborate with you to analyze the outcomes of the
                        AI integration, offering clear and detailed insights to
                        ensure accurate interpretation and understanding.
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Step 4 - Bottom Left (8 o'clock) - Scaling & Integrating */}
                <div
                  className="absolute"
                  style={{
                    bottom: "calc(50% - 127px)",
                    left: "calc(50% - 127px)",
                    transform: "translate(-50%, 50%)",
                  }}
                >
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div
                      className="bg-slate-800/60 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-6 max-w-sm shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
                      style={{ marginRight: "12rem", marginTop: "18rem" }}
                    >
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                          <svg
                            className="w-6 h-6 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
                          </svg>
                        </div>
                        <h3 className="text-white font-semibold text-lg">
                          Scaling & Integrating
                        </h3>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        After validating the prototype, we focus on integrating
                        the AI solution into your existing system, ensuring
                        smooth compatibility with your data. We fine-tune the
                        models and make any necessary adjustments to optimize
                        performance.
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Step 5 - Left (9 o'clock) - Evaluating Results */}
                <div
                  className="absolute"
                  style={{
                    top: "50%",
                    left: "calc(50% - 180px)",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="absolute top-1/2 right-0 w-5 h-5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full z-10 transform translate-x-1/2 -translate-y-1/2"></div>
                    <div
                      className="bg-slate-800/60 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-6 max-w-sm shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
                      style={{ marginRight: "24rem" }}
                    >
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                          <svg
                            className="w-6 h-6 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20ZM15.88 8.29L10 14.17L8.12 12.29C7.73 11.9 7.1 11.9 6.71 12.29S6.32 13.27 6.71 13.66L9.3 16.25C9.69 16.64 10.32 16.64 10.71 16.25L17.3 9.66C17.69 9.27 17.69 8.64 17.3 8.25S16.27 7.86 15.88 8.29Z" />
                          </svg>
                        </div>
                        <h3 className="text-white font-semibold text-lg">
                          Building MVP
                        </h3>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        We begin with a small-scale implementation using the
                        available dataset to validate the feasibility of our
                        concept. This step-by-step approach helps us assess the
                        effectiveness of the idea and whether it justifies
                        further investment.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
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
                How we implement artificial intelligence across multiple
                industries
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
                  {/* Industry Image */}
                  <div className="relative h-64 overflow-hidden group cursor-pointer">
                    <img
                      src={selectedIndustry.image}
                      alt={selectedIndustry.name}
                      className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                      onError={(e) => {
                        console.error(
                          `Failed to load image: ${selectedIndustry.image}`,
                        );
                      }}
                      onLoad={() => {
                        console.log(
                          `Successfully loaded image: ${selectedIndustry.image}`,
                        );
                      }}
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
                Our main AI technology stack and expertise
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
                Common questions about our AI consulting services
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Side - AI Image */}
              <div className="lg:col-span-5">
                <div className="relative group">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src="/assets/FAQ's.png"
                      alt="AI Technology and Innovation"
                      className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        AI-Powered Solutions
                      </h3>
                      <p className="text-gray-200 text-sm">
                        Transforming businesses through intelligent automation
                        and data-driven insights
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
                Strategic AI Implementation Experts
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
                Ready to Transform Your
              </span>
              <br />
              <span className="text-white">Business with AI?</span>
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Let's discuss how our AI consulting services can accelerate your
              digital transformation and drive unprecedented business growth
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
                  Free AI Strategy Session
                </span>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <CheckCircle className="h-6 w-6 text-white bg-primary rounded-full p-1" />
                <span className="text-white font-semibold">
                  Expert AI Guidance
                </span>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <CheckCircle className="h-6 w-6 text-white bg-primary rounded-full p-1" />
                <span className="text-white font-semibold">
                  Proven ROI Results
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex justify-center"
            >
              <Button
                size="lg"
                className="group bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-10 py-6 text-lg font-semibold shadow-2xl shadow-blue-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
              >
                <Brain className="mr-2 h-5 w-5" />
                Start Your AI Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
