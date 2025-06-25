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
} from "lucide-react";

export default function AIChatbotDevelopment() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const stats = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "98%",
      subtitle: "Customer Satisfaction",
      description: "Client retention rate",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: "150+",
      subtitle: "Chatbots Deployed",
      description: "Successfully launched",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "24/7",
      subtitle: "Response Time",
      description: "Continuous support",
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "65%",
      subtitle: "Cost Reduction",
      description: "Average savings",
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

  const chatbotServices = [
    {
      icon: <Bot className="h-8 w-8 text-white" />,
      title: "GPT-based AI chatbot development",
      description:
        "Leverage the capabilities of GPT-3 and its successors, including ChatGPT, through our advanced GPT-powered chatbot development services. Our team of experts builds intelligent conversational agents designed to accurately interpret and respond to user inquiries—delivering seamless experiences across personalized recommendations, content creation, and customer support.",
      backgroundImage: "/assets/AI-GPTChatbot.png",
    },
    {
      icon: <Headphones className="h-8 w-8 text-white" />,
      title: "Customer service & CRM-based chatbots",
      description:
        "Deliver exceptional customer service through AI chatbots tailored to your specific product data and customer interactions. By leveraging insights from CRM systems, our solutions provide precise and context-aware responses, driving improved customer satisfaction and fostering long-term loyalty.",
      backgroundImage: "/assets/AI-Customer.png",
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-white" />,
      title: "Social media bots engineering",
      description:
        "Enhance your digital reach with AI-powered social media chatbots. At AI Superior, we develop tailored chatbot solutions for platforms like Facebook, Instagram, and LinkedIn—designed to engage your target audience, stimulate meaningful interactions, and support long-term brand development.",
      backgroundImage: "/assets/AI-SocialMedia.png",
    },
    {
      icon: <Settings className="h-8 w-8 text-white" />,
      title: "AI-based virtual assistants programming",
      description:
        "Enhance operational efficiency with AI-powered virtual assistants. Our team can seamlessly integrate intelligent assistants into your workflow to deliver information, manage schedules, and execute tasks—while continuously learning and improving through user interactions.",
      backgroundImage: "/assets/AI-VirtualAssistant.png",
    },
    {
      icon: <Brain className="h-8 w-8 text-white" />,
      title: "Conversational AI development",
      description:
        "Build sophisticated conversational AI systems that understand context, maintain dialogue flow, and provide intelligent responses. Our solutions leverage advanced NLP techniques to create more human-like interactions and improve user engagement across all touchpoints.",
      backgroundImage: "/assets/AI-Conversational.png",
    },
  ];

  const advantages = [
    {
      title: "Optimize core business operations to save costs",
      description:
        "Our AI-powered chatbots can help you improve business productivity and streamline resource allocation. By managing inquiries 24/7, automating routine tasks, and performing time-consuming tasks such as large-scale analysis, summarization, and text generation, our chatbots can help you cut down on operational costs and free up valuable human resources for more innovative tasks.",
    },
    {
      title: "Provide faster responses and personalized experience",
      description:
        "AI chatbots can help guide your customers along the sales process. These conversational assistants are available for your customers 24/7, can quickly answer whatever question they have, and provide tailored recommendations and solutions depending on historical interactions and user preferences. Providing a more personalized experience fosters loyalty and improves customer retention.",
    },
    {
      title: "Improve engagement rate of your app and web products",
      description:
        "Leverage our AI chatbot development service to provide a better user experience and drive interactive engagements. Using NLP, machine learning, and conversational AI, you can use chatbots to answer questions, look into user intent, analyze their answers, and spark an interest in your services to increase brand loyalty and prolonged visits to your website.",
    },
    {
      title: "Increase sales by engaging your customers better",
      description:
        "Turn conversations into conversions by using AI chatbots to keep your users engaged right from form submission to checkout. Prevent them from leaving unattended and convert hesitant buyers into customers by providing real-time information about your services and personalized recommendations. Better customer engagement translates to improved sales and revenue.",
    },
  ];

  const whyChooseUs = [
    {
      icon: <Bot className="h-10 w-10" />,
      title: "Chatbot Expertise",
      description:
        "Advanced AI chatbot development with deep understanding of conversational design and user experience.",
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "Scalable Solutions",
      description:
        "Future-ready chatbots that grow with your business and adapt to evolving customer needs.",
    },
    {
      icon: <Settings className="h-10 w-10" />,
      title: "Custom Integration",
      description:
        "Seamless integration with existing systems, CRM platforms, and business workflows.",
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Enterprise Security",
      description:
        "Bank-grade security measures ensuring data protection and regulatory compliance.",
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "24/7 Support",
      description:
        "Round-the-clock technical support and maintenance for optimal chatbot performance.",
    },
    {
      icon: <Award className="h-10 w-10" />,
      title: "Proven Results",
      description:
        "Track record of successful deployments across industries with measurable ROI.",
    },
  ];

  const industries = [
    {
      icon: <ShoppingCart className="h-12 w-12" />,
      title: "E-commerce",
      description:
        "Enhance user experiences by providing personalized product recommendations and real-time suggestions, and streamlining order tracking to improve customer satisfaction and drive conversions.",
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Marketing & sales",
      description:
        "Boost lead generation and conversion rates with intelligent chatbots that qualify prospects, provide product information, and guide customers through the sales funnel.",
    },
    {
      icon: <CreditCard className="h-12 w-12" />,
      title: "Banking",
      description:
        "Provide secure, 24/7 customer support for account inquiries, transaction history, loan applications, and financial advice while maintaining strict security protocols.",
    },
    {
      icon: <Heart className="h-12 w-12" />,
      title: "Healthcare",
      description:
        "Streamline patient interactions with appointment scheduling, symptom checking, medication reminders, and health information while ensuring HIPAA compliance.",
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Insurance",
      description:
        "Simplify policy management, claims processing, and customer inquiries with intelligent chatbots that understand complex insurance terminology and procedures.",
    },
    {
      icon: <Plane className="h-12 w-12" />,
      title: "Travel",
      description:
        "Enhance travel experiences with chatbots that assist with booking, itinerary planning, real-time updates, and customer support throughout the journey.",
    },
    {
      icon: <Truck className="h-12 w-12" />,
      title: "Supply chain",
      description:
        "Optimize logistics and inventory management with chatbots that track shipments, manage supplier communications, and provide real-time supply chain insights.",
    },
  ];

  const developmentFlow = [
    {
      step: "01",
      title: "Validation stage",
      description:
        "Understand and analyze your challenges, identify project scope, objectives, and goals, develop a strategy to incorporate AI chatbots",
    },
    {
      step: "02",
      title: "Selecting technology",
      description:
        "Decide between rule-based and AI chatbot models, evaluate and choose communication channels, explore integration options with existing systems",
    },
    {
      step: "03",
      title: "Designing conversations",
      description:
        "Map user journeys and possible dialogue paths, design conversational flows that mimic human interactions, personalize conversations to enhance user engagement",
    },
    {
      step: "04",
      title: "Training models",
      description:
        "Gather and pre-process data to train the chatbot, fine-tune the AI model to understand industry jargon, maximize accuracy and improve performance",
    },
    {
      step: "05",
      title: "Testing",
      description:
        "Gather feedback by conducting usability testing, ensure context-aware and accurate responses in different scenarios, refine the chatbot's responses depending on user interactions",
    },
    {
      step: "06",
      title: "Deployment & maintenance",
      description:
        "Launch the chatbot on the chosen platforms, monitor real-time performance and user engagement, continuously optimize the chatbot based on user feedback",
    },
  ];

  const faqs = [
    {
      question: "What is an AI chatbot?",
      answer:
        "An AI chatbot is an intelligent virtual assistant powered by artificial intelligence and natural language processing that can understand, interpret, and respond to human language in a conversational manner. It can handle customer inquiries, provide information, and assist with various tasks automatically.",
    },
    {
      question: "How to build an AI chatbot?",
      answer:
        "Building an AI chatbot involves several steps: defining objectives and use cases, choosing the right technology stack, designing conversation flows, training the AI model with relevant data, testing and refining responses, and deploying on chosen platforms. Our team handles the entire development process from concept to deployment.",
    },
    {
      question: "Why do businesses need AI chatbots?",
      answer:
        "Businesses need AI chatbots to provide 24/7 customer support, reduce operational costs, improve response times, handle multiple inquiries simultaneously, and enhance customer experience. They help automate routine tasks, qualify leads, and provide consistent service quality.",
    },
    {
      question: "How long does it take to engineer an AI chatbot?",
      answer:
        "The development timeline varies based on complexity, features, and integration requirements. A basic chatbot can take 2-4 weeks, while more sophisticated AI chatbots with advanced features and integrations may take 8-12 weeks or longer. We provide detailed timelines during the planning phase.",
    },
    {
      question:
        "What are the main features of modern AI chatbots, and how can they benefit my business?",
      answer:
        "Modern AI chatbots feature natural language understanding, multi-language support, sentiment analysis, personalization, seamless integrations, and learning capabilities. They benefit businesses by improving customer satisfaction, reducing support costs, generating leads, and providing valuable insights from customer interactions.",
    },
    {
      question:
        "What is the difference between AI chatbot and conversational AI?",
      answer:
        "AI chatbots are specific applications that use conversational AI technology. Conversational AI is the broader technology that encompasses natural language processing, machine learning, and dialogue management. While chatbots are the interface, conversational AI is the underlying intelligence that powers them.",
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
            src="./assets/AI-Chatbot-banner.png"
            alt="AI Chatbot Development"
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
                AI Chatbot Development
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-4xl"
            >
              Leverage the power of AI chatbots to improve customer satisfaction
              and take your business to new heights with intelligent
              conversational solutions
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
                  Intelligent Conversational AI Excellence
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

      {/* Our AI Chatbot Development Services - Same as AI Consulting Capabilities Layout */}
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
              Our AI Chatbot Development Services
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI chatbot development solutions designed to enhance
              customer engagement and streamline business operations
            </p>
          </motion.div>

          {/* 2x2 Grid Layout with Central Image */}
          <div className="max-w-8xl mx-auto relative">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Top Row - GPT-based and Customer Service chatbots */}
              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* GPT-based AI chatbot development */}
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
                        src={chatbotServices[0].backgroundImage}
                        alt={chatbotServices[0].title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        style={{ backgroundAttachment: "fixed" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/90"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Bot className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          01
                        </div>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {chatbotServices[0].title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {chatbotServices[0].description}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Customer service & CRM-based chatbots */}
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
                        src={chatbotServices[1].backgroundImage}
                        alt={chatbotServices[1].title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        style={{ backgroundAttachment: "fixed" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/90"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Headphones className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          02
                        </div>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {chatbotServices[1].title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {chatbotServices[1].description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Second Row - Central Image with Social Media Bots */}
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
                        src="/assets/AI-ChatbotDevelopment.gif"
                        alt="AI Chatbot Development Services"
                        className="w-full h-auto object-contain group-hover:scale-105 transition-all duration-700"
                        style={{ backgroundAttachment: "fixed" }}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/assets/AI-Chatbot-banner.png";
                        }}
                      />
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute top-8 right-8 flex flex-col gap-4">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                        <Bot className="h-8 w-8 text-white" />
                      </div>
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                        AI
                      </div>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="mb-4">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                          <span className="text-blue-200 text-sm font-medium">
                            AI Chatbot Hub
                          </span>
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-3 leading-tight">
                          Intelligent Chatbot Solutions
                        </h3>
                        <p className="text-blue-100 leading-relaxed mb-6">
                          Advanced conversational AI solutions that transform
                          customer interactions.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Social media bots engineering */}
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
                        src={chatbotServices[2].backgroundImage}
                        alt={chatbotServices[2].title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        style={{ backgroundAttachment: "fixed" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/90"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <MessageSquare className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          03
                        </div>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {chatbotServices[2].title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {chatbotServices[2].description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Third Row - Virtual Assistants and Conversational AI */}
              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* AI-based virtual assistants programming */}
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
                        src={chatbotServices[3].backgroundImage}
                        alt={chatbotServices[3].title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        style={{ backgroundAttachment: "fixed" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/90"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Settings className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          04
                        </div>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {chatbotServices[3].title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {chatbotServices[3].description}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Conversational AI development */}
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
                        src={chatbotServices[4].backgroundImage}
                        alt={chatbotServices[4].title}
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
                        {chatbotServices[4].title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {chatbotServices[4].description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Advantages Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose AI Chatbots for Your Business?
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the transformative benefits of integrating AI chatbots into your business operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <Card className="h-full bg-gray-800/60 border-gray-700 hover:border-blue-500/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/20">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                          {advantage.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                          {advantage.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose RT NextGenAI
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience excellence in AI chatbot development with our proven expertise and innovative solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <Card className="h-full bg-gray-800/60 border-gray-700 hover:border-blue-500/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/20">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">{item.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industries We Serve
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Delivering specialized AI chatbot solutions across diverse industries with tailored approaches
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative cursor-pointer"
              >
                <Card className="h-full bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-700 hover:border-blue-500/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/20 group-hover:scale-105">
                  <CardContent className="p-6 text-center h-full flex flex-col justify-between">
                    <div>
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <div className="text-white">{industry.icon}</div>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {industry.title}
                      </h3>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {industry.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Flow Section */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Development Process
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A systematic approach to delivering high-quality AI chatbot solutions from concept to deployment
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full hidden lg:block"></div>

            <div className="space-y-12">
              {developmentFlow.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col lg:gap-12 gap-6`}
                >
                  <div className="flex-1 lg:max-w-md">
                    <Card className="bg-gray-800/60 border-gray-700 hover:border-blue-500/50 transition-all duration-300 group hover:shadow-lg hover:shadow-blue-500/20">
                      <CardContent className="p-8">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                            {step.step}
                          </div>
                          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                          {step.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline dot */}
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-4 border-gray-900 z-10 hidden lg:block"></div>

                  <div className="flex-1 lg:max-w-md lg:block hidden"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get answers to common questions about AI chatbot development and implementation
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <AccordionItem value={`item-${index}`} className="border-gray-700">
                    <AccordionTrigger className="text-white hover:text-blue-400 text-left font-medium text-lg py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300 leading-relaxed pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
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
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI Chatbots?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's discuss how our AI chatbot solutions can enhance your customer engagement and streamline your operations.
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
            >
              Start Your AI Chatbot Project
            </Button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}