import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, Brain, Lightbulb, Target, Users, Zap, Shield, Network, TrendingUp, ArrowRight, CheckCircle, Award } from "lucide-react";
import { Button } from "../components/ui/button";
import Layout from "../components/Layout";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What makes AI Superior's consulting approach different?",
    answer: "We combine deep technical expertise with industry-specific knowledge to deliver AI solutions that directly impact your business goals. Our team includes PhDs in machine learning, experienced engineers, and industry specialists who understand both the technology and your market."
  },
  {
    question: "How long does a typical AI consulting project take?",
    answer: "Project timelines vary based on complexity and scope. Strategy assessments typically take 2-4 weeks, proof-of-concept development 4-8 weeks, and full implementation 3-6 months. We provide detailed timelines during our initial consultation."
  },
  {
    question: "Do you work with companies that have no AI experience?",
    answer: "Absolutely. We specialize in helping organizations at every stage of their AI journey, from complete beginners to companies looking to optimize existing AI systems. We start with education and strategy before moving to implementation."
  },
  {
    question: "What industries do you have the most experience with?",
    answer: "We have extensive experience across finance, healthcare, manufacturing, retail, and technology sectors. Our consultants bring both technical expertise and deep industry knowledge to ensure solutions fit your specific business context."
  },
  {
    question: "How do you ensure AI solutions are ethical and compliant?",
    answer: "We prioritize responsible AI development with built-in bias detection, transparency mechanisms, and compliance frameworks. Our team stays current with regulations like GDPR, CCPA, and emerging AI governance standards to ensure your solutions meet all requirements."
  }
];

const industries = [
  {
    name: "Finance",
    description: "Fraud detection, algorithmic trading, risk assessment, and personalized financial services using advanced machine learning models."
  },
  {
    name: "Government",
    description: "Public service optimization, predictive analytics for policy making, citizen service chatbots, and smart city infrastructure."
  },
  {
    name: "Internet & Tech Startups", 
    description: "Recommendation engines, user behavior analysis, automated customer support, and scalable AI infrastructure for rapid growth."
  },
  {
    name: "Media",
    description: "Content personalization, automated content generation, audience analytics, and intelligent content moderation systems."
  },
  {
    name: "Oil & Gas",
    description: "Predictive maintenance, exploration optimization, supply chain automation, and environmental impact monitoring."
  },
  {
    name: "Pharmaceuticals",
    description: "Drug discovery acceleration, clinical trial optimization, regulatory compliance automation, and personalized medicine solutions."
  },
  {
    name: "NGOs, NPOs, NCOs",
    description: "Impact measurement analytics, donor behavior prediction, resource optimization, and automated reporting for greater transparency."
  }
];

const capabilities = [
  {
    icon: <Brain className="h-8 w-8 text-cyan-400" />,
    title: "AI Strategy & Roadmap",
    description: "Comprehensive AI strategy development aligned with your business objectives, including technology assessment and implementation roadmaps."
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-yellow-400" />,
    title: "Use Case Identification",
    description: "Systematic identification and prioritization of AI opportunities across your organization to maximize ROI and business impact."
  },
  {
    icon: <Target className="h-8 w-8 text-green-400" />,
    title: "Proof of Concept Development",
    description: "Rapid prototyping and validation of AI solutions to demonstrate value and feasibility before full-scale implementation."
  },
  {
    icon: <Users className="h-8 w-8 text-blue-400" />,
    title: "Team Training & Enablement",
    description: "Comprehensive training programs to upskill your team and ensure successful adoption of AI technologies."
  },
  {
    icon: <Zap className="h-8 w-8 text-purple-400" />,
    title: "Process Optimization",
    description: "AI-powered process analysis and optimization to improve efficiency, reduce costs, and enhance decision-making."
  },
  {
    icon: <Shield className="h-8 w-8 text-red-400" />,
    title: "AI Governance & Ethics",
    description: "Establishing responsible AI frameworks, bias detection, and compliance systems to ensure ethical AI deployment."
  }
];

const techStack = [
  "Machine Learning: TensorFlow, PyTorch, Scikit-learn, XGBoost",
  "Deep Learning: Neural Networks, CNN, RNN, LSTM, Transformers",
  "Natural Language Processing: BERT, GPT, NLTK, spaCy",
  "Computer Vision: OpenCV, YOLO, ResNet, EfficientNet",
  "Cloud Platforms: AWS, Azure, Google Cloud, MLOps",
  "Data Engineering: Apache Spark, Kafka, Airflow, Docker",
  "Programming: Python, R, Java, Scala, SQL",
  "Visualization: Tableau, Power BI, D3.js, Plotly"
];

export default function AIConsulting() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <Layout>
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
                Transform your business with strategic AI implementation, expert guidance, 
                and comprehensive solutions that drive innovation and competitive advantage
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
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  We offer comprehensive AI consulting services to help you identify opportunities, develop strategies, and optimize processes with artificial intelligence.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {/* AI and Data Strategy */}
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-cyan-400/30 rounded-xl p-8 hover:border-cyan-400/60 transition-all duration-300 group">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center border border-cyan-400/40 mb-4">
                    <Brain className="h-8 w-8 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    AI and Data Strategy
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Develop comprehensive AI strategies aligned with your business objectives. We help you create data-driven roadmaps that maximize AI investment returns and ensure sustainable growth.
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

              {/* Process Optimization with AI */}
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-green-400/30 rounded-xl p-8 hover:border-green-400/60 transition-all duration-300 group">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center border border-green-400/40 mb-4">
                    <Zap className="h-8 w-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                    Process Optimization with AI
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Transform your business processes with AI-powered automation and optimization. We identify bottlenecks, streamline workflows, and implement intelligent solutions that drive efficiency.
                  </p>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Process analysis and mapping
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Automation opportunity identification
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Workflow optimization design
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Implementation roadmap creation
                  </li>
                </ul>
              </div>

              {/* AI Use Case Discovery & Identification */}
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-purple-400/30 rounded-xl p-8 hover:border-purple-400/60 transition-all duration-300 group">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center border border-purple-400/40 mb-4">
                    <Target className="h-8 w-8 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                    AI Use Case Discovery & Identification
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Uncover high-impact AI opportunities across your organization. We conduct systematic discovery workshops to identify, evaluate, and prioritize AI use cases that deliver maximum business value.
                  </p>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    Discovery workshops and interviews
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    Use case feasibility analysis
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    ROI impact assessment
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    Priority matrix and roadmap
                  </li>
                </ul>
              </div>
            </div>
          </div>
          </div>
        </section>

        {/* Why Work With Us Section */}
        <section className="py-16 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Why work with AI Superior on your next AI project
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Team of experienced professionals */}
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <Users className="h-16 w-16 text-cyan-400" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <Brain className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Team of experienced professionals
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Our team of highly skilled consultants, many of whom hold Ph.D. degrees in AI or related fields, 
                  brings extensive knowledge and hands-on experience across diverse AI projects. We've successfully 
                  developed AI-driven solutions spanning multiple industries, from insurance and construction to 
                  finance, pharmaceutical, and real estate sectors.
                </p>
              </div>

              {/* Cutting-edge technology */}
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <Network className="h-16 w-16 text-cyan-400" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                      <Zap className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Cutting-edge technology
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Beyond years of experience and deep domain expertise in AI development, we pride ourselves on 
                  leveraging the latest tools and technologies. Whether you're adopting AI for the first time, 
                  seeking to audit existing AI systems, or looking to scale your AI infrastructure, our team 
                  delivers cutting-edge solutions.
                </p>
              </div>

              {/* Reliability & flexibility guaranteed */}
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <Shield className="h-16 w-16 text-cyan-400" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <Target className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Reliability & flexibility guaranteed
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Transparency and continuous communication form the foundation of every successful AI project. 
                  At AI Superior, we collaborate closely with our clients to ensure complete understanding of 
                  each project milestone. We maintain flexibility to align with your specific project goals and 
                  requirements, giving you confidence that you're partnering with trusted experts.
                </p>
              </div>

              {/* Take your business to new heights */}
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <TrendingUp className="h-16 w-16 text-cyan-400" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                      <Lightbulb className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Take your business to new heights
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  As a leading artificial intelligence consulting firm, we strategically implement AI across 
                  various business processes to ensure sustained efficiency and operational continuity. We 
                  thoroughly analyze areas and operations where AI-driven solutions can create significant 
                  value for your organization, helping you unlock AI's transformative potential.
                </p>
              </div>
            </div>
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
        <section className="py-16 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">How we work</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-1">
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 p-8 rounded-xl border border-cyan-400/30">
                  <div className="text-3xl font-bold text-cyan-400 mb-4">01</div>
                  <h3 className="text-xl font-semibold text-white mb-4">Discovery & Assessment</h3>
                  <p className="text-gray-400">We analyze your current state, identify opportunities, and define success metrics.</p>
                </div>
              </div>
              <div className="lg:col-span-1">
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-8 rounded-xl border border-blue-400/30">
                  <div className="text-3xl font-bold text-blue-400 mb-4">02</div>
                  <h3 className="text-xl font-semibold text-white mb-4">Strategy Development</h3>
                  <p className="text-gray-400">We create a comprehensive AI roadmap tailored to your business goals and constraints.</p>
                </div>
              </div>
              <div className="lg:col-span-1">
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-8 rounded-xl border border-purple-400/30">
                  <div className="text-3xl font-bold text-purple-400 mb-4">03</div>
                  <h3 className="text-xl font-semibold text-white mb-4">Proof of Concept</h3>
                  <p className="text-gray-400">We build and validate prototypes to demonstrate value and technical feasibility.</p>
                </div>
              </div>
              <div className="lg:col-span-1">
                <div className="bg-gradient-to-br from-pink-500/20 to-red-500/20 p-8 rounded-xl border border-pink-400/30">
                  <div className="text-3xl font-bold text-pink-400 mb-4">04</div>
                  <h3 className="text-xl font-semibold text-white mb-4">Implementation & Scale</h3>
                  <p className="text-gray-400">We deploy production-ready solutions and ensure successful adoption across your organization.</p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                How we implement artificial intelligence across multiple industries
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-cyan-400/40 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                    {industry.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              ))}
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
            <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">FAQs</h2>
              <p className="text-xl text-gray-300">
                Common questions about our AI consulting services
              </p>
            </div>
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
                      <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to transform your business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our AI consulting services can accelerate your digital transformation
              </p>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                Start Your AI Journey
              </button>
            </div>
          </div>
        </section>
      </motion.div>
    </Layout>
  );
}