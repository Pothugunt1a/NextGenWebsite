import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ChevronDown,
  ChevronUp,
  Brain,
  Database,
  TrendingUp,
  Cpu,
  Zap,
  Shield,
  Network,
  Target,
  Users,
  ArrowRight,
  CheckCircle,
  Award,
  BarChart3,
  LineChart,
  PieChart,
  Activity,
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

const capabilities = [
  {
    icon: <Brain className="h-8 w-8 text-white" />,
    title: "Core Data Science",
    description: "Statistical analysis, predictive modeling, and advanced analytics to drive data-informed decision making across your organization.",
    link: "/core-data-science",
    technologies: ["Python", "R", "Statistical Modeling", "Data Mining"],
    backgroundImage: "/assets/AI&Data.png",
  },
  {
    icon: <Cpu className="h-8 w-8 text-white" />,
    title: "Machine Learning",
    description: "Custom ML models for classification, regression, clustering, and recommendation systems tailored to your business needs.",
    link: "/machine-learning-services",
    technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "MLOps"],
    backgroundImage: "/assets/AI-DataStratergy-banner.png",
  },
  {
    icon: <Network className="h-8 w-8 text-white" />,
    title: "Artificial Intelligence",
    description: "End-to-end AI solutions including computer vision, NLP, and intelligent automation systems for enterprise deployment.",
    link: "/artificial-intelligence-services",
    technologies: ["Deep Learning", "Computer Vision", "NLP", "Neural Networks"],
    backgroundImage: "/assets/AI-ProcessOptimization.png",
  },
  {
    icon: <Zap className="h-8 w-8 text-white" />,
    title: "Generative & Agentic AI",
    description: "Cutting-edge generative AI and autonomous agent systems for content creation, automation, and intelligent decision-making.",
    link: "/generative-agentic-ai",
    technologies: ["LLMs", "GPT", "Stable Diffusion", "AI Agents"],
    backgroundImage: "/assets/GenerativeAI.png",
  },
];

const whyChooseUsItems = [
  {
    icon: Users,
    title: "Expert Data Science Team",
    description: "PhDs and certified data scientists with extensive experience across industries including finance, healthcare, retail, and manufacturing.",
    badge: "PhD-level expertise",
  },
  {
    icon: Network,
    title: "End-to-End Solutions",
    description: "From data collection and preparation to model deployment and monitoring, we handle the complete AI/DS lifecycle.",
    badge: "Full lifecycle support",
  },
  {
    icon: Shield,
    title: "Ethical AI Practices",
    description: "We prioritize responsible AI development with bias detection, fairness metrics, and transparent model explanations.",
    badge: "Responsible AI",
  },
  {
    icon: TrendingUp,
    title: "Proven ROI",
    description: "Our solutions deliver measurable business impact with average efficiency gains of 35% and cost reductions of 25%.",
    badge: "Measurable results",
  },
];

const industries = [
  {
    name: "Finance & Banking",
    description: "Fraud detection, credit risk modeling, algorithmic trading, and personalized financial recommendations.",
    icon: <BarChart3 className="h-6 w-6" />,
  },
  {
    name: "Healthcare & Life Sciences",
    description: "Disease prediction, drug discovery, medical imaging analysis, and patient outcome forecasting.",
    icon: <Activity className="h-6 w-6" />,
  },
  {
    name: "Retail & E-commerce",
    description: "Demand forecasting, customer segmentation, dynamic pricing, and recommendation engines.",
    icon: <TrendingUp className="h-6 w-6" />,
  },
  {
    name: "Manufacturing",
    description: "Predictive maintenance, quality control, supply chain optimization, and production forecasting.",
    icon: <Target className="h-6 w-6" />,
  },
  {
    name: "Telecommunications",
    description: "Churn prediction, network optimization, customer lifetime value modeling, and anomaly detection.",
    icon: <Network className="h-6 w-6" />,
  },
  {
    name: "Energy & Utilities",
    description: "Demand forecasting, grid optimization, predictive maintenance, and renewable energy analytics.",
    icon: <Zap className="h-6 w-6" />,
  },
];

const techStack = [
  { name: "Python", logo: "/assets/logos/python.png" },
  { name: "TensorFlow", logo: "/assets/logos/tensorflow.png" },
  { name: "PyTorch", logo: "/assets/logos/pytorch.png" },
  { name: "Scikit-learn", logo: "/assets/logos/sklearn.png" },
  { name: "Keras", logo: "/assets/logos/keras.png" },
  { name: "Apache Spark", logo: "/assets/logos/spark.png" },
  { name: "Jupyter", logo: "/assets/logos/jupyter.png" },
  { name: "R", logo: "/assets/logos/r.png" },
];

const faqs = [
  {
    question: "What's the difference between AI and Data Science services?",
    answer: "Data Science focuses on extracting insights from data using statistical methods and machine learning. AI encompasses broader capabilities including deep learning, natural language processing, and autonomous systems. Our services cover the full spectrum from foundational data science to advanced AI implementations.",
  },
  {
    question: "How do you ensure model accuracy and reliability?",
    answer: "We employ rigorous validation techniques including cross-validation, A/B testing, and continuous monitoring. Our models undergo extensive testing before deployment and are continuously monitored for performance degradation or drift.",
  },
  {
    question: "Can you work with our existing data infrastructure?",
    answer: "Yes, we're experienced with diverse data ecosystems including cloud platforms (AWS, Azure, GCP), on-premise systems, and hybrid environments. We can integrate with your existing tools or recommend optimal solutions.",
  },
  {
    question: "What's the typical timeline for an AI/DS project?",
    answer: "Timelines vary by complexity: Proof of concepts typically take 4-8 weeks, full implementations 3-6 months. We provide detailed project plans with milestones and deliverables during our initial assessment.",
  },
  {
    question: "Do you provide ongoing support after deployment?",
    answer: "Absolutely. We offer comprehensive support including model retraining, performance monitoring, bug fixes, and feature enhancements. Our MLOps practices ensure your models remain effective over time.",
  },
];

export default function AIDataScienceServices() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/AI&Data.png"
            alt="AI & Data Science Services"
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
              className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-blue-100 to-[#0080FF] bg-clip-text text-transparent">
                AI & Data Science Services
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl"
            >
              Transform your data into intelligent solutions with advanced AI and data science capabilities
            </motion.p>

            <div className="mb-32">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0066CC]/20 border border-[#0080FF]/30 rounded-full backdrop-blur-sm"
              >
                <Brain className="h-5 w-5 text-cyan-400" />
                <span className="text-white font-medium">
                  Enterprise AI & Data Science Solutions
                </span>
                <Award className="h-4 w-4 text-blue-400 fill-current" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Capabilities Section */}
      <section className="py-20 bg-light relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6 text-white">
              Our AI & Data Science Capabilities
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI and data science solutions to unlock insights and drive intelligent automation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <Link href={capability.link}>
                  <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 h-full hover:border-blue-500/50 hover:bg-gray-800/90 transition-all duration-500 group-hover:scale-105"
                    data-testid={`card-capability-${index}`}
                  >
                    <div className="relative w-16 h-16 mb-6 rounded-xl overflow-hidden">
                      <img
                        src={capability.backgroundImage}
                        alt={capability.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        {capability.icon}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {capability.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed mb-6">
                      {capability.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {capability.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center text-cyan-400 font-medium group-hover:translate-x-2 transition-transform duration-300">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-b from-light to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose Our AI & Data Science Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Partner with experts who deliver measurable results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUsItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
                  data-testid={`card-why-choose-${index}`}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div className="mb-3">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Delivering AI & Data Science solutions across diverse sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
                data-testid={`card-industry-${index}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    {industry.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{industry.name}</h3>
                    <p className="text-gray-400 text-sm">{industry.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-light to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden"
                data-testid={`faq-item-${index}`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-800/50 transition-colors"
                  data-testid={`button-faq-toggle-${index}`}
                >
                  <span className="text-lg font-semibold text-white pr-8">
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Data into Intelligence?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI & Data Science services can drive innovation in your organization
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-6 text-lg"
                data-testid="button-get-started"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
