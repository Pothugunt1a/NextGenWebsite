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
  DollarSign,
  UserCheck,
  MousePointer,
  ShoppingBag,
} from "lucide-react";

export default function AIChatbotDevelopment() {
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
        "Enhance user experiences by providing personalized product recommendations and real-time suggestions, and streamlining order tracking to improve customer satisfaction and drive conversions. AI chatbots can handle customer inquiries 24/7, provide instant product information, assist with checkout processes, and reduce cart abandonment rates through proactive engagement.",
    },
    {
      id: "marketing-sales",
      name: "Marketing & Sales",
      image: "/assets/Marketing.png",
      content:
        "Boost lead generation and conversion rates with intelligent chatbots that qualify prospects, provide product information, and guide customers through the sales funnel. Our chatbots can capture leads, schedule appointments, provide instant quotes, and nurture prospects with personalized content, significantly improving your sales team's efficiency.",
    },
    {
      id: "banking",
      name: "Banking",
      image: "/assets/Banking.png",
      content:
        "Provide secure, 24/7 customer support for account inquiries, transaction history, loan applications, and financial advice while maintaining strict security protocols. Banking chatbots can handle routine transactions, provide balance information, assist with loan applications, and offer financial planning advice, all while ensuring compliance with financial regulations.",
    },
    {
      id: "healthcare",
      name: "Healthcare",
      image: "/assets/Healthcare.png",
      content:
        "Streamline patient interactions with appointment scheduling, symptom checking, medication reminders, and health information while ensuring HIPAA compliance. Healthcare chatbots can triage patients, provide health education, send medication reminders, and facilitate telemedicine consultations, improving patient care while reducing administrative burden.",
    },
    {
      id: "insurance",
      name: "Insurance",
      image: "/assets/Insurance.png",
      content:
        "Simplify policy management, claims processing, and customer inquiries with intelligent chatbots that understand complex insurance terminology and procedures. Insurance chatbots can help customers file claims, check policy details, get quotes, and understand coverage options, making insurance services more accessible and efficient.",
    },
    {
      id: "travel",
      name: "Travel",
      image: "/assets/Travel.png",
      content:
        "Enhance travel experiences with chatbots that assist with booking, itinerary planning, real-time updates, and customer support throughout the journey. Travel chatbots can handle flight bookings, hotel reservations, provide destination information, send travel alerts, and assist with travel-related issues, creating seamless travel experiences.",
    },
    {
      id: "supply-chain",
      name: "Supply Chain",
      image: "/assets/Supplychain.png",
      content:
        "Optimize logistics and inventory management with chatbots that track shipments, manage supplier communications, and provide real-time supply chain insights. Supply chain chatbots can monitor delivery status, handle vendor inquiries, manage inventory alerts, and provide analytics on supply chain performance, improving operational efficiency.",
    },
  ];

  const [selectedIndustryData, setSelectedIndustryData] = useState(
    industryData[0],
  );

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
      number: "01",
      icon: DollarSign,
      title: "Optimize core business operations to save costs",
      description:
        "Our AI chatbots boost productivity and streamline resources by offering 24/7 support, automating routine tasks, and managing complex processes like analysis and content generation—reducing costs and freeing teams for strategic work.",
    },
    {
      number: "02",
      icon: UserCheck,
      title: "Provide faster responses and personalized experience",
      description:
        "AI chatbots support customers throughout the sales process by offering 24/7 assistance, prompt responses, and personalized recommendations based on past interactions and preferences. This enhances the customer experience, fostering loyalty and improving retention.",
    },
    {
      number: "03",
      icon: MousePointer,
      title: "Improve engagement rate of your app and web products",
      description:
        "Utilize our AI chatbot development service to enhance user experience and boost engagement. Powered by NLP and machine learning, our chatbots understand user intent, respond accurately, and promote your services—driving brand loyalty and encouraging longer website visits.",
    },
    {
      number: "04",
      icon: ShoppingBag,
      title: "Increase sales by engaging your customers better",
      description:
        "Transform conversations into conversions with AI chatbots that engage users from form submission to checkout. By offering real-time support and personalized recommendations, you can reduce drop-offs and turn hesitant visitors into customers—leading to stronger engagement, increased sales, and higher revenue.",
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
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-500 grouphover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
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

      {/* Advantages Section - Benefits Layout Same as GenerativeAI */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advantages of Integrating AI-Powered Chatbots Into Your Business
              Operations
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business operations with intelligent chatbot
              solutions that drive efficiency and enhance customer satisfaction
            </p>
          </div>

          {/* Main Layout: 3 Columns */}
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              {/* First Column - Image (60% width) */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative mt-32"
              >
                <div className="relative rounded-2xl overflow-hidden h-full">
                  <img
                    src="/assets/AI-chatbot.gif"
                    alt="AI Chatbot Advantages"
                    className="w-full h-full object-cover rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
              </motion.div>

              {/* Second Column - Advantages 01 & 02 */}
              <div className="space-y-6">
                {advantages.slice(0, 2).map((advantage, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="relative"
                  >
                    {/* Step Arrow Shape */}
                    <div
                      className="relative bg-gradient-to-br from-blue-500/30 to-cyan-500/40 text-white rounded-lg backdrop-blur-sm border border-white/10 mb-4"
                      style={{
                        clipPath:
                          "polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%)",
                        height: "80px",
                      }}
                    >
                      <div className="flex items-center h-full px-4">
                        {/* Step Number */}
                        <div className="text-2xl font-bold mr-3 opacity-90">
                          {advantage.number}
                        </div>

                        {/* Icon in white shield */}
                        <div className="bg-white rounded-lg p-2 flex items-center justify-center text-gray-800">
                          <div className="scale-75">
                            <advantage.icon className="h-8 w-8" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">
                        {advantage.title}
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {advantage.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Third Column - Advantages 03 & 04 */}
              <div className="space-y-6">
                {advantages.slice(2, 4).map((advantage, index) => (
                  <motion.div
                    key={index + 2}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: (index + 2) * 0.1 }}
                    className="relative"
                  >
                    {/* Step Arrow Shape */}
                    <div
                      className="relative bg-gradient-to-br from-blue-500/30 to-cyan-500/40 text-white rounded-lg backdrop-blur-sm border border-white/10 mb-4"
                      style={{
                        clipPath:
                          "polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%)",
                        height: "80px",
                      }}
                    >
                      <div className="flex items-center h-full px-4">
                        {/* Step Number */}
                        <div className="text-2xl font-bold mr-3 opacity-90">
                          {advantage.number}
                        </div>

                        {/* Icon in white shield */}
                        <div className="bg-white rounded-lg p-2 flex items-center justify-center text-gray-800">
                          <div className="scale-75">
                            <advantage.icon className="h-8 w-8" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">
                        {advantage.title}
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {advantage.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
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
              Partner with industry leaders in AI chatbot development services
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
                How Our Chatbot Can Help Businesses in Different Industries
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

      {/* Development Flow Section */}
      <section className="py-16 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our AI Chatbot Development Flow
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We follow a systematic approach for all AI chatbot projects. So
                when you choose us, here's what you can expect
              </p>
            </div>

            {/* Circular Process Layout */}
            <div className="relative flex items-center justify-center min-h-[800px] lg:min-h-[900px] px-8">
              {/* Central Circle */}
              <div className="relative z-20">
                <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl">
                  <div className="w-40 h-40 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex flex-col items-center justify-center border-4 border-blue-400/20">
                    <div className="text-white mb-2">
                      <Bot className="w-12 h-12" />
                    </div>
                    <div className="text-center">
                      <div className="text-white font-bold text-lg">
                        CHATBOT
                      </div>
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
                    id="chatbotProcessGradient"
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
                  stroke="url(#chatbotProcessGradient)"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="8,6"
                  className="opacity-80"
                />
              </svg>

              {/* Process Steps - Positioned clockwise starting from top-left */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Step 1 - Top Left (10 o'clock) - Validation Stage */}
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
                          <CheckCircle className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-white font-semibold text-lg">
                          Validation stage
                        </h3>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Understand and analyze your challenges, identify project
                        scope, objectives, and goals, develop a strategy to
                        incorporate AI chatbots
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Step 2 - Top Right (2 o'clock) - Selecting Technology */}
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
                          <Settings className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-white font-semibold text-lg">
                          Selecting technology
                        </h3>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Decide between rule-based and AI chatbot models,
                        evaluate and choose communication channels, explore
                        integration options with existing systems
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Step 3 - Right Side (3 o'clock) - Designing Conversations */}
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
                          <MessageSquare className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-white font-semibold text-lg">
                          Designing conversations
                        </h3>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Map user journeys and possible dialogue paths, design
                        conversational flows that mimic human interactions,
                        personalize conversations to enhance user engagement
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Step 4 - Bottom Right (4 o'clock) - Training Models */}
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
                          <Bot className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-white font-semibold text-lg">
                          Training models
                        </h3>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Gather and pre-process data to train the chatbot,
                        fine-tune the AI model to understand industry jargon,
                        maximize accuracy and improve performance
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Step 5 - Bottom Left (8 o'clock) - Testing */}
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
                          Testing
                        </h3>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Gather feedback by conducting usability testing, ensure
                        context-aware and accurate responses in different
                        scenarios, refine the chatbot's responses depending on
                        user interactions
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Step 6 - Left Side (9 o'clock) - Deployment & Maintenance */}
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
                          Deployment & maintenance
                        </h3>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Launch the chatbot on the chosen platforms, monitor
                        real-time performance and user engagement, continuously
                        optimize the chatbot based on user feedback
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
                AI Chatbot FAQs
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300">
                Common questions about our AI chatbot development services
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Side - AI Chatbot Image */}
              <div className="lg:col-span-5">
                <div className="relative">
                  <img
                    src="./assets/AI-Chatbot.gif"
                    alt="AI Chatbot Technology"
                    className="w-full h-[500px] object-cover"
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
              <Bot className="h-5 w-5 text-cyan-400" />
              <span className="text-white font-medium">
                Leading AI Chatbot Solutions
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
              <span className="text-white">Business with AI Chatbots?</span>
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Join thousands of businesses who trust RT NextGenAI for
              intelligent chatbot solutions. Our experts are ready to
              revolutionize your customer engagement with AI-powered
              conversations.
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
                  Free Demo & Consultation
                </span>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <CheckCircle className="h-6 w-6 text-white bg-primary rounded-full p-1" />
                <span className="text-white font-semibold">
                  24/7 Technical Support
                </span>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <CheckCircle className="h-6 w-6 text-white bg-primary rounded-full p-1" />
                <span className="text-white font-semibold">
                  Custom AI Training
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
                onClick={() => (window.location.href = "/contact")}
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Start Your Chatbot Journey
                <Zap className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
