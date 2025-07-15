
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import {
  CheckCircle,
  MessageSquare,
  Users,
  Zap,
  Shield,
  Settings,
  Bot,
  Headphones,
  Building2,
  ShoppingCart,
  CreditCard,
  Heart,
  Plane,
  Truck,
  Target,
  Lightbulb,
  Star,
  Sparkles,
  Clock,
  TrendingUp,
  ChevronDown,
  ChevronUp,
  Brain,
  Award,
  Palette,
  Code,
  Film,
  PenTool,
  Database,
  Image,
  FileText,
  Cpu,
  Network,
  Megaphone,
} from "lucide-react";

export default function GenerativeAIDevelopment() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Industry data for the interactive section
  const industryData = [
    {
      id: "ecommerce",
      name: "E-commerce",
      image: "/assets/Ecommerce.png",
      content:
        "Transform your e-commerce platform with AI-powered product descriptions, personalized recommendations, and automated customer service responses. Generate compelling marketing copy, create product variations, and develop chatbots that understand customer intent to drive sales and improve user experience.",
    },
    {
      id: "marketing-sales",
      name: "Marketing & Sales",
      image: "/assets/Marketing.png",
      content:
        "Revolutionize your marketing strategy with generative AI that creates personalized content at scale. Generate social media posts, email campaigns, ad copy, and sales presentations tailored to specific audiences. Automate lead nurturing with intelligent content generation that resonates with prospects.",
    },
    {
      id: "healthcare",
      name: "Healthcare",
      image: "/assets/Healthcare.png",
      content:
        "Enhance healthcare delivery with AI-generated medical documentation, patient education materials, and diagnostic support tools. Create personalized treatment plans, generate medical reports, and develop virtual health assistants that provide accurate medical information while maintaining HIPAA compliance.",
    },
    {
      id: "finance",
      name: "Finance & Banking",
      image: "/assets/Finance.png",
      content:
        "Streamline financial services with AI-generated risk assessments, investment reports, and personalized financial advice. Create automated compliance documentation, generate market analysis, and develop virtual financial advisors that provide tailored investment strategies and financial planning guidance.",
    },
    {
      id: "media",
      name: "Media & Entertainment",
      image: "/assets/Media.png",
      content:
        "Transform content creation with AI-generated scripts, articles, music, and visual content. Automate video editing, create personalized content recommendations, and develop virtual influencers that engage audiences with authentic, brand-aligned messaging across multiple platforms.",
    },
    {
      id: "education",
      name: "Education",
      image: "/assets/Internet-Tech-Startup.png",
      content:
        "Revolutionize learning with AI-generated curriculum, personalized tutoring systems, and adaptive educational content. Create interactive learning experiences, generate assessment materials, and develop virtual teaching assistants that provide individualized support to students at all levels.",
    },
    {
      id: "manufacturing",
      name: "Manufacturing",
      image: "/assets/Oil-Gas.png",
      content:
        "Optimize manufacturing processes with AI-generated maintenance schedules, quality control reports, and production optimization strategies. Create automated documentation, generate training materials, and develop predictive models that improve efficiency and reduce operational costs.",
    },
  ];

  const [selectedIndustryData, setSelectedIndustryData] = useState(
    industryData[0],
  );

  const stats = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "97%",
      subtitle: "Accuracy Rate",
      description: "Content generation precision",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: "200+",
      subtitle: "AI Models Deployed",
      description: "Successfully launched",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "85%",
      subtitle: "Time Reduction",
      description: "In content creation",
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "300%",
      subtitle: "ROI Increase",
      description: "Average client growth",
      color: "from-orange-500 to-red-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const generativeAIServices = [
    {
      icon: <Brain className="h-8 w-8 text-white" />,
      title: "Natural Language Generation",
      description:
        "Create human-like text content at scale with advanced NLG models. Generate articles, reports, product descriptions, and marketing copy that resonates with your target audience while maintaining brand consistency and quality standards across all communications.",
      backgroundImage: "/assets/AI-Training.png",
    },
    {
      icon: <Image className="h-8 w-8 text-white" />,
      title: "Computer Vision & Image Generation",
      description:
        "Transform visual content creation with AI-powered image generation, enhancement, and manipulation. Create stunning visuals, product mockups, architectural designs, and artistic content that meets your specific requirements and brand guidelines.",
      backgroundImage: "/assets/AI-Lifecycle.png",
    },
    {
      icon: <Film className="h-8 w-8 text-white" />,
      title: "Video & Audio Generation",
      description:
        "Revolutionize multimedia content with AI-generated videos, voiceovers, and audio content. Create engaging presentations, training materials, advertisements, and personalized video messages that captivate your audience and drive engagement.",
      backgroundImage: "/assets/AI-ProcessOptimization.png",
    },
    {
      icon: <Code className="h-8 w-8 text-white" />,
      title: "Code Generation & Automation",
      description:
        "Accelerate software development with AI-powered code generation, testing, and documentation. Automate repetitive programming tasks, generate boilerplate code, and create comprehensive technical documentation that improves development efficiency.",
      backgroundImage: "/assets/AI-Components.gif",
    },
    {
      icon: <Palette className="h-8 w-8 text-white" />,
      title: "Creative Content Generation",
      description:
        "Unleash creativity with AI-generated designs, artwork, music, and creative writing. Develop unique brand assets, marketing materials, and creative content that stands out in competitive markets while maintaining artistic integrity and brand alignment.",
      backgroundImage: "/assets/GenerativeAI.png",
    },
  ];

  const benefitSteps = [
    {
      number: "01",
      title: "Accelerated Content Creation",
      subtitle: "Reduce time-to-market significantly",
      description: "Our generative AI solutions dramatically reduce content creation time by automating writing, design, and multimedia production processes. Generate high-quality content in minutes rather than hours.",
      icon: <Clock className="h-8 w-8" />,
      bgColor: "from-slate-700 to-slate-800",
      arrowColor: "bg-slate-700"
    },
    {
      number: "02", 
      title: "Scalable Personalization",
      subtitle: "Scale across all customer touchpoints",
      description: "Create personalized experiences at unprecedented scale with AI-generated content tailored to individual customer preferences, behaviors, and demographics for increased engagement.",
      icon: <Users className="h-8 w-8" />,
      bgColor: "from-emerald-500 to-emerald-600",
      arrowColor: "bg-emerald-500"
    },
    {
      number: "03",
      title: "Enhanced Innovation",
      subtitle: "Augment creativity and capabilities",
      description: "Augment human creativity with AI-powered ideation, design exploration, and content variation generation. Break creative blocks and explore new concepts while maintaining brand consistency.",
      icon: <Lightbulb className="h-8 w-8" />,
      bgColor: "from-slate-700 to-slate-800",
      arrowColor: "bg-slate-700"
    },
    {
      number: "04",
      title: "Cost Optimization",
      subtitle: "Optimize resource allocation",
      description: "Reduce content creation costs by up to 70% while maintaining quality standards. Automate repetitive tasks and reallocate human resources to strategic initiatives.",
      icon: <TrendingUp className="h-8 w-8" />,
      bgColor: "from-emerald-500 to-emerald-600",
      arrowColor: "bg-emerald-500"
    }
  ];

  const whyChooseUs = [
    {
      icon: <Brain className="h-10 w-10" />,
      title: "AI Innovation Leaders",
      description:
        "Cutting-edge generative AI development with deep expertise in latest AI technologies and methodologies.",
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "Rapid Deployment",
      description:
        "Fast implementation and deployment of generative AI solutions with minimal disruption to existing workflows.",
    },
    {
      icon: <Settings className="h-10 w-10" />,
      title: "Custom AI Models",
      description:
        "Tailored generative AI models designed specifically for your industry, use case, and business requirements.",
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Enterprise Security",
      description:
        "Advanced security measures ensuring data protection, model safety, and compliance with industry regulations.",
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Expert Support",
      description:
        "Dedicated team of AI specialists providing ongoing support, training, and optimization services.",
    },
    {
      icon: <Award className="h-10 w-10" />,
      title: "Proven Results",
      description:
        "Track record of successful generative AI implementations with measurable business impact and ROI.",
    },
  ];

  // Use cases for generative AI (similar to LLM use cases)
  const useCaseSteps = [
    {
      number: "1.",
      title: "Content Marketing Automation",
      description: "Generate blog posts, social media content, email campaigns, and marketing materials that align with your brand voice and engage your target audience effectively.",
      icon: <PenTool className="h-8 w-8" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: "2.",
      title: "Product Development & Design",
      description: "Create product prototypes, design variations, and innovative concepts through AI-generated visuals, specifications, and development documentation.",
      icon: <Lightbulb className="h-8 w-8" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: "3.",
      title: "Customer Service Enhancement",
      description: "Develop intelligent virtual assistants and automated response systems that provide personalized customer support and resolve inquiries efficiently.",
      icon: <Headphones className="h-8 w-8" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: "4.",
      title: "Training & Educational Content",
      description: "Generate comprehensive training materials, e-learning courses, and educational resources tailored to specific learning objectives and skill levels.",
      icon: <FileText className="h-8 w-8" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: "5.",
      title: "Data Analysis & Reporting",
      description: "Create automated reports, data visualizations, and business intelligence dashboards that transform complex data into actionable insights and recommendations.",
      icon: <Database className="h-8 w-8" />,
      color: "from-blue-500 to-cyan-500",
    },
  ];

  const developmentFlow = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description:
        "Analyze your business requirements, identify opportunities for generative AI implementation, and develop a comprehensive strategy aligned with your objectives",
    },
    {
      step: "02",
      title: "Model Selection & Architecture",
      description:
        "Choose optimal AI models and design custom architectures, evaluate pre-trained models, and determine the best approach for your specific use case",
    },
    {
      step: "03",
      title: "Data Preparation & Training",
      description:
        "Collect and preprocess training data, fine-tune models with your specific requirements, and optimize performance for your target applications",
    },
    {
      step: "04",
      title: "Development & Integration",
      description:
        "Build custom generative AI applications, integrate with existing systems, and develop user-friendly interfaces for seamless adoption",
    },
    {
      step: "05",
      title: "Testing & Validation",
      description:
        "Conduct comprehensive testing across various scenarios, validate output quality and safety, and ensure compliance with industry standards",
    },
    {
      step: "06",
      title: "Deployment & Optimization",
      description:
        "Deploy solutions to production environments, monitor performance metrics, and continuously optimize based on user feedback and usage patterns",
    },
  ];

  const faqs = [
    {
      question: "What is generative AI and how does it work?",
      answer:
        "Generative AI refers to artificial intelligence models that can create new content, including text, images, code, music, and videos, based on patterns learned from training data. These models use deep learning techniques to understand and generate human-like content that meets specific requirements and maintains quality standards.",
    },
    {
      question: "How can generative AI benefit my business?",
      answer:
        "Generative AI can accelerate content creation, reduce operational costs, improve personalization at scale, enhance creativity, and automate repetitive tasks. It enables businesses to produce high-quality content faster, engage customers more effectively, and reallocate human resources to strategic initiatives.",
    },
    {
      question: "Is generative AI safe and reliable for business use?",
      answer:
        "When properly implemented with appropriate safeguards, generative AI is safe and reliable for business use. We implement robust security measures, content filtering, bias detection, and human oversight to ensure generated content meets quality standards and compliance requirements.",
    },
    {
      question: "How long does it take to implement generative AI solutions?",
      answer:
        "Implementation timelines vary based on complexity and requirements. Simple applications can be deployed in 2-4 weeks, while comprehensive custom solutions may take 8-16 weeks. We provide detailed project timelines during the planning phase and maintain transparent communication throughout development.",
    },
    {
      question: "What types of content can generative AI create?",
      answer:
        "Generative AI can create diverse content types including written content (articles, emails, reports), visual content (images, designs, videos), audio content (voiceovers, music), code (software applications, scripts), and interactive content (chatbots, virtual assistants). The possibilities are expanding rapidly with advancing technology.",
    },
    {
      question: "How do you ensure the quality and accuracy of AI-generated content?",
      answer:
        "We implement multi-layered quality assurance including model fine-tuning with high-quality data, automated content filtering, human review processes, and continuous monitoring. Our systems include fact-checking mechanisms, brand consistency validation, and customizable quality controls to meet your specific standards.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-light text-white"
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="./assets/GenerativeAI-banner.png"
            alt="Generative AI Development"
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
                Generative AI Development Services
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-4xl"
            >
              Transform your business with cutting-edge generative AI solutions
              that create, innovate, and accelerate your digital transformation
              journey
            </motion.p>

            {/* Badge */}
            <div className="mb-32">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0066CC]/20 border border-[#0080FF]/30 rounded-full backdrop-blur-sm"
              >
                <Sparkles className="h-5 w-5 text-cyan-400" />
                <span className="text-white font-medium">
                  Next-Generation AI Content Creation
                </span>
                <Star className="h-4 w-4 text-blue-400 fill-current" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="absolute bottom-8 left-0 right-0">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center md:justify-start">
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl w-full"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group relative"
                  >
                    <div className="relative p-4 md:p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden text-center">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                      />

                      <div className="relative z-10">
                        <div className="flex justify-center mb-3 md:mb-4">
                          <div
                            className={`inline-flex p-2 md:p-3 rounded-xl bg-gradient-to-br ${stat.color}`}
                          >
                            <div className="text-white">{stat.icon}</div>
                          </div>
                        </div>
                        <div className="text-2xl md:text-3xl font-bold mb-1 md:mb-2 text-white">
                          {stat.title}
                        </div>
                        <div className="text-xs md:text-sm font-semibold text-gray-300 mb-1">
                          {stat.subtitle}
                        </div>
                        <div className="text-xs text-gray-400">
                          {stat.description}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Generative AI Development Services - Same as AI Chatbot Services Layout */}
      <div className="py-20 bg-light relative overflow-hidden">
        {/* Background Pattern */}
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
              Our Generative AI Development Services
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive generative AI solutions designed to transform your
              content creation and business operations
            </p>
          </motion.div>

          {/* 2x2 Grid Layout with Central Image */}
          <div className="max-w-8xl mx-auto relative">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Top Row - Natural Language Generation and Computer Vision */}
              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Natural Language Generation */}
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
                        src={generativeAIServices[0].backgroundImage}
                        alt={generativeAIServices[0].title}
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
                          01
                        </div>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {generativeAIServices[0].title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {generativeAIServices[0].description}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Computer Vision & Image Generation */}
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
                        src={generativeAIServices[1].backgroundImage}
                        alt={generativeAIServices[1].title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        style={{ backgroundAttachment: "fixed" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/90"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Image className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          02
                        </div>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {generativeAIServices[1].title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {generativeAIServices[1].description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Second Row - Central Image with Video & Audio Generation */}
              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Central Image */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, type: "spring" }}
                  className="relative group"
                >
                  {/* Main Feature Card */}
                  <div className="relative min-h-96 w-full bg-gradient-to-br from-blue-600 to-cyan-600 rounded-[3rem] overflow-hidden shadow-2xl group-hover:shadow-blue-500/30 transition-all duration-700">
                    <div className="relative w-full">
                      <img
                        src="/assets/AI Gif.gif"
                        alt="Generative AI Development Services"
                        className="w-full h-auto object-contain group-hover:scale-105 transition-all duration-700"
                        style={{ backgroundAttachment: "fixed" }}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/assets/GenerativeAI-banner.png";
                        }}
                      />
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute top-8 right-8 flex flex-col gap-4">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                        <Sparkles className="h-8 w-8 text-white" />
                      </div>
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                        GEN
                      </div>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="mb-4">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                          <span className="text-blue-200 text-sm font-medium">
                            Generative AI Hub
                          </span>
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-3 leading-tight">
                          Intelligent Content Generation
                        </h3>
                        <p className="text-blue-100 leading-relaxed mb-6">
                          Advanced generative AI solutions that create, innovate,
                          and transform content creation.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Video & Audio Generation */}
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
                        src={generativeAIServices[2].backgroundImage}
                        alt={generativeAIServices[2].title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        style={{ backgroundAttachment: "fixed" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/90"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Film className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          03
                        </div>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {generativeAIServices[2].title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {generativeAIServices[2].description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Third Row - Code Generation and Creative Content */}
              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Code Generation & Automation */}
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
                        src={generativeAIServices[3].backgroundImage}
                        alt={generativeAIServices[3].title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        style={{ backgroundAttachment: "fixed" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/90"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Code className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          04
                        </div>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {generativeAIServices[3].title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {generativeAIServices[3].description}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Creative Content Generation */}
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
                        src={generativeAIServices[4].backgroundImage}
                        alt={generativeAIServices[4].title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        style={{ backgroundAttachment: "fixed" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/90"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Palette className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          05
                        </div>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {generativeAIServices[4].title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {generativeAIServices[4].description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section - Vertical Steps Layout */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Benefits of Employing Our Generative AI Development Services
            </h2>
          </div>
          
          {/* Vertical Steps Layout */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {benefitSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="flex items-center gap-8 relative"
                >
                  {/* Step Arrow Shape */}
                  <div className={`relative flex-shrink-0 bg-gradient-to-br ${step.bgColor} text-white rounded-l-lg`} 
                       style={{
                         clipPath: 'polygon(0 0, calc(100% - 30px) 0, 100% 50%, calc(100% - 30px) 100%, 0 100%)',
                         width: '280px',
                         height: '120px'
                       }}>
                    <div className="flex items-center h-full px-6">
                      {/* Step Number */}
                      <div className="text-4xl font-bold mr-4 opacity-90">
                        {step.number}
                      </div>
                      
                      {/* Icon in white shield */}
                      <div className="bg-white rounded-lg p-3 flex items-center justify-center text-gray-800 mr-4">
                        {step.icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <h4 className="text-lg text-gray-300 mb-3">
                      {step.subtitle}
                    </h4>
                    <p className="text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Generative AI Use Cases - Same as LLM Use Cases Layout */}
      <section className="py-16 relative">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40"></div>
          <div className="absolute top-1/4 left-10 w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-2xl opacity-30"></div>
          <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full blur-2xl opacity-30"></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Generative AI Use Cases
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how generative AI transforms business operations across
              industries
            </p>
          </motion.div>

          {/* Use Cases Flow */}
          <div className="flex flex-col lg:flex-row items-center justify-center max-w-7xl mx-auto overflow-x-auto">
            <div className="flex flex-col lg:flex-row items-center justify-center relative">
              {useCaseSteps.map((step, index) => (
                <div key={index} className="flex items-center">
                  {/* Step Box */}
                  <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: index * 0.15, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="group"
                  >
                    <div
                      className={`flex flex-col items-center justify-center p-4 w-56 text-center transition-all duration-500 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-blue-500/30 shadow-2xl hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/20 ${
                        index === 0
                          ? "rounded-l-2xl border-r-0"
                          : index === useCaseSteps.length - 1
                          ? "rounded-r-2xl border-l-0"
                          : "border-l-0 border-r-0"
                      }`}
                      style={{ height: "15rem" }}
                    >
                      {/* Icon */}
                      <div
                        className={`p-2 rounded-xl bg-gradient-to-br ${step.color} mb-2 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <div className="text-white">{step.icon}</div>
                      </div>

                      {/* Number */}
                      <div className="text-cyan-400 text-sm font-bold mb-1 group-hover:text-blue-300 transition-colors">
                        {step.number}
                      </div>

                      {/* Title */}
                      <div className="text-white font-bold text-xs leading-tight px-1 mb-2 group-hover:text-gray-100 transition-colors">
                        {step.title}
                      </div>

                      {/* Description */}
                      <div className="text-gray-300 text-[10px] leading-tight px-1 group-hover:text-gray-200 transition-colors overflow-hidden">
                        {step.description}
                      </div>
                    </div>
                  </motion.div>

                  {/* Arrow between sections */}
                  {index < useCaseSteps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.15 + 0.4, duration: 0.4 }}
                      viewport={{ once: true }}
                      className="relative z-10 -mx-1"
                    >
                      <div className="w-0 h-0 border-l-[15px] border-l-blue-500 border-t-[18px] border-t-transparent border-b-[18px] border-b-transparent shadow-lg bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                    </motion.div>
                  )}

                  {/* Mobile vertical arrow */}
                  {index < useCaseSteps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.15 + 0.4, duration: 0.4 }}
                      viewport={{ once: true }}
                      className="lg:hidden my-4 flex justify-center"
                    >
                      <div className="w-0 h-0 border-t-[15px] border-t-blue-500 border-l-[18px] border-l-transparent border-r-[18px] border-r-transparent shadow-lg bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Same as Validation Page */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose RT NextGenAI
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Partner with industry leaders in generative AI development
              services
            </p>
          </motion.div>

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
                {/* First slide - items 0,1,2 */}
                <CarouselItem className="pl-2 md:pl-4">
                  <div className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                      {whyChooseUs.slice(0, 3).map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          whileHover={{ y: -10, scale: 1.05 }}
                          viewport={{ once: true }}
                          className="group"
                        >
                          <div className="h-full bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 text-center">
                            <div className="flex justify-center mb-6">
                              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 group-hover:scale-110 transition-transform duration-300">
                                <div className="text-white">{item.icon}</div>
                              </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-white group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                              {item.title}
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CarouselItem>

                {/* Second slide - items 3,4,5 */}
                <CarouselItem className="pl-2 md:pl-4">
                  <div className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                      {whyChooseUs.slice(3, 6).map((item, index) => (
                        <motion.div
                          key={index + 3}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          whileHover={{ y: -10, scale: 1.05 }}
                          viewport={{ once: true }}
                          className="group"
                        >
                          <div className="h-full bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 text-center">
                            <div className="flex justify-center mb-6">
                              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 group-hover:scale-110 transition-transform duration-300">
                                <div className="text-white">{item.icon}</div>
                              </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-white group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                              {item.title}
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
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

      {/* Industries Section - Interactive Layout */}
      <section className="py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Transforming Industries with Generative AI
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
                        selectedIndustryData.id === industry.id
                          ? "default"
                          : "outline"
                      }
                      className={`text-center justify-center p-4 h-auto min-h-[60px] transition-all duration-300 ${
                        selectedIndustryData.id === industry.id
                          ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-none shadow-lg"
                          : "bg-slate-800/50 border-slate-600 text-white hover:bg-slate-700/70 hover:border-blue-400/40 hover:text-white"
                      }`}
                      onClick={() => {
                        setSelectedIndustryData(industry);
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
                  key={selectedIndustryData.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-cyan-400/20 rounded-xl overflow-hidden"
                >
                  {/* Industry Image */}
                  <div className="relative h-64 overflow-hidden group cursor-pointer">
                    <img
                      src={selectedIndustryData.image}
                      alt={selectedIndustryData.name}
                      className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                      onError={(e) => {
                        console.error(
                          `Failed to load image: ${selectedIndustryData.image}`,
                        );
                      }}
                      onLoad={() => {
                        console.log(
                          `Successfully loaded image: ${selectedIndustryData.image}`,
                        );
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent group-hover:from-gray-900/60 transition-all duration-300"></div>
                    <div className="absolute bottom-4 left-6">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {selectedIndustryData.name}
                      </h3>
                    </div>
                  </div>

                  {/* Industry Content */}
                  <div className="p-6">
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {selectedIndustryData.content}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Flow Section - Same as AIChatbotDevelopment */}
      <section className="py-16 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                How We Approach Your Generative AI Project
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We follow a systematic approach for all generative AI projects.
                Here's what you can expect when you choose us
              </p>
            </div>

            {/* Circular Process Layout */}
            <div className="relative flex items-center justify-center min-h-[800px] lg:min-h-[900px] px-8">
              {/* Central Circle */}
              <div className="relative z-20">
                <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl">
                  <div className="w-40 h-40 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex flex-col items-center justify-center border-4 border-blue-400/20">
                    <div className="text-white mb-2">
                      <Sparkles className="w-12 h-12" />
                    </div>
                    <div className="text-center">
                      <div className="text-white font-bold text-lg">
                        GENERATIVE
                      </div>
                      <div className="text-white font-bold text-lg">AI</div>
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
                    id="generativeAIProcessGradient"
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
                  stroke="url(#generativeAIProcessGradient)"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="8,6"
                  className="opacity-80"
                />
              </svg>

              {/* Process Steps - Positioned clockwise starting from top-left */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Step 1 - Top Left (10 o'clock) - Discovery & Strategy */}
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
                          <Target className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-white font-semibold text-lg">
                          Discovery & Strategy
                        </h3>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Analyze your business requirements, identify
                        opportunities for generative AI implementation, and
                        develop a comprehensive strategy aligned with your
                        objectives
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Step 2 - Top Right (2 o'clock) - Model Selection & Architecture */}
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
                          <Cpu className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-white font-semibold text-lg">
                          Model Selection & Architecture
                        </h3>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Choose optimal AI models and design custom architectures,
                        evaluate pre-trained models, and determine the best
                        approach for your specific use case
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Step 3 - Right Side (3 o'clock) - Data Preparation & Training */}
                <div
                  className="absolute"
                  style={{
                    top: "50%",
                    right: "calc(50% - 180px)",
                    transform: "translate(50%, -50%)",
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
                      style={{ marginLeft: "14rem" }}
                    >
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                          <Database className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-white font-semibold text-lg">
                          Data Preparation & Training
                        </h3>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Collect and preprocess training data, fine-tune models
                        with your specific requirements, and optimize performance
                        for your target applications
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Step 4 - Bottom Right (4 o'clock) - Development & Integration */}
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
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div
                      className="bg-slate-800/60 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-6 max-w-sm shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
                      style={{ marginLeft: "12rem", marginTop: "18rem" }}
                    >
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                          <Code className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-white font-semibold text-lg">
                          Development & Integration
                        </h3>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Build custom generative AI applications, integrate with
                        existing systems, and develop user-friendly interfaces
                        for seamless adoption
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Step 5 - Bottom Left (8 o'clock) - Testing & Validation */}
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
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div
                      className="bg-slate-800/60 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-6 max-w-sm shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
                      style={{ marginRight: "12rem", marginTop: "18rem" }}
                    >
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                          <Shield className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-white font-semibold text-lg">
                          Testing & Validation
                        </h3>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Conduct comprehensive testing across various scenarios,
                        validate output quality and safety, and ensure
                        compliance with industry standards
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Step 6 - Left Side (9 o'clock) - Deployment & Optimization */}
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
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div
                      className="bg-slate-800/60 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-6 max-w-sm shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
                      style={{ marginRight: "14rem" }}
                    >
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                          <Zap className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-white font-semibold text-lg">
                          Deployment & Optimization
                        </h3>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Deploy solutions to production environments, monitor
                        performance metrics, and continuously optimize based on
                        user feedback and usage patterns
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 text-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Still Have Some Confusion Regarding Generative AI?
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300">
                Answers to the following frequently asked questions can help
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Side - Generative AI Image */}
              <div className="lg:col-span-5">
                <div className="relative">
                  <img
                    src="./assets/AI Gif.gif"
                    alt="Generative AI Technology"
                    className="w-full h-[500px] object-cover rounded-2xl"
                  />
                </div>
              </div>

              {/* Right Side - FAQ Content */}
              <div className="lg:col-span-7">
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl border border-gray-700 overflow-hidden backdrop-blur-sm"
                    >
                      <AccordionTrigger className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-700/30 transition-colors">
                        <h3 className="text-lg font-semibold text-white pr-4">
                          {faq.question}
                        </h3>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-6">
                        <p className="text-gray-400 leading-relaxed">
                          {faq.answer}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
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
              <Sparkles className="h-5 w-5 text-cyan-400" />
              <span className="text-white font-medium">
                Next-Gen AI Innovation
              </span>
              <Star className="h-4 w-4 text-blue-400 fill-current" />
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
              <span className="text-white">Business with Generative AI?</span>
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Join innovative companies who trust RT NextGenAI for cutting-edge generative AI solutions. Our experts are ready to help you harness the power of next-generation AI technologies.
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
                  Custom AI Models
                </span>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <CheckCircle className="h-6 w-6 text-white bg-primary rounded-full p-1" />
                <span className="text-white font-semibold">
                  Expert Development
                </span>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <CheckCircle className="h-6 w-6 text-white bg-primary rounded-full p-1" />
                <span className="text-white font-semibold">
                  Scalable Solutions
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
                onClick={() => window.location.href = '/contact'}
              >
                <Brain className="mr-2 h-5 w-5" />
                Unleash AI Innovation
                <Sparkles className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
