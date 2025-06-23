
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

  const services = [
    {
      title: "GPT-based AI chatbot development",
      description:
        "Take advantage of the power of GPT-3 and beyond, including ChatGPT, with our GPT-based AI chatbot development services. Our experts create conversational agents that easily understand and effectively respond to user queries, whether it's for personalized recommendations, content generation, or customer support.",
      icon: <Bot className="h-8 w-8" />,
    },
    {
      title: "Customer service & CRM-based chatbots",
      description:
        "Provide better customer service with AI chatbots trained on your unique product data and customer interactions. By harnessing data from CRM systems, we ensure that our solutions answer all customer queries accurately, enhancing customer loyalty and satisfaction.",
      icon: <Headphones className="h-8 w-8" />,
    },
    {
      title: "Social media bots engineering",
      description:
        "Expand your online presence with social media AI chatbots. Whether for Facebook, Instagram, or LinkedIn, AI Superior can create customized chatbots for your business that captivate your target audience, drive conversations, and foster brand growth.",
      icon: <MessageSquare className="h-8 w-8" />,
    },
    {
      title: "AI-based virtual assistants programming",
      description:
        "Streamline business processes with AI-based virtual assistants. We can help you integrate virtual assistants into your workflow that can provide information, manage schedules, and handle tasks while learning from user interactions.",
      icon: <Settings className="h-8 w-8" />,
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
      icon: <Bot className="h-12 w-12" />,
      title: "Experts in chatbot development",
      description:
        "We take pride in creating intelligent chatbots that perfectly cater to your needs. Our seasoned professionals have in-depth knowledge and hands-on experience in creating AI chatbots that understand user intent well and provide valuable interactions.",
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: "Deliver scalable solutions",
      description:
        "We design chatbots that grow alongside your business and adapt to the evolving needs and increased user demands while maintaining excellent performance to improve customer engagement.",
    },
    {
      icon: <Settings className="h-12 w-12" />,
      title: "Provide endless customization options",
      description:
        "We offer customization options that align with your brand identity and meet your business requirements. Regardless of your objective, whether it's lead generation or better customer support, our tailored solutions can help.",
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Deliver seamless integration",
      description:
        "Beyond chatbot creation, we can also help you seamlessly integrate the chatbot with your existing systems and tools, such as social media platforms or CRMs, to provide a cohesive and efficient user experience.",
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Stay on top of recent technologies",
      description:
        "We stay updated with the latest AI advancements, such as AI, ML, and NLP, to offer cutting-edge solutions that keep you ahead of the curve.",
    },
    {
      icon: <Headphones className="h-12 w-12" />,
      title: "Provide support & maintenance services",
      description:
        "We offer continuous support and maintenance to make sure your chatbot stays optimized and effective. You can rely on us to handle issues and implement updates when needed.",
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
            src="/assets/AI-Chatbot-banner.png"
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

      {/* Services Section */}
      <section className="py-20 bg-light relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our AI Chatbot Development Services
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-gray-800/80 border-gray-700 hover:bg-gray-750/80 transition-colors backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-blue-400">{service.icon}</div>
                      <CardTitle className="text-xl text-white">
                        {service.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-gray-300">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-light relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advantages of Integrating AI-Powered Chatbots Into Your Business
              Operations
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-gray-700/80 border-gray-600 hover:bg-gray-650/80 transition-colors backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl mb-4 text-white">
                      {advantage.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-gray-300">
                      {advantage.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-light relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Us as Your AI Chatbot Development Company?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choosing AI Superior as your AI chatbot development company
              ensures a partnership with a dependable and creative team that
              takes pride in delivering high-performance chatbots that drive
              impactful business outcomes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center bg-gray-800/80 border-gray-700 hover:bg-gray-750/80 transition-colors backdrop-blur-sm">
                  <CardHeader>
                    <div className="mx-auto text-blue-400 mb-4">
                      {item.icon}
                    </div>
                    <CardTitle className="text-xl text-white">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-gray-300">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-light relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How Our Chatbot Can Help Businesses in Different Industries
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center bg-gray-700/80 border-gray-600 hover:bg-gray-650/80 transition-colors backdrop-blur-sm">
                  <CardHeader>
                    <div className="mx-auto text-blue-400 mb-4">
                      {industry.icon}
                    </div>
                    <CardTitle className="text-xl text-white">
                      {industry.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-gray-300">
                      {industry.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Flow Section - Updated to match "How we work" style */}
      <section className="py-16 bg-light relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40"></div>
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
              Our AI Chatbot Development Flow
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We follow a systematic approach for all AI projects. So when you choose us, here's what you can expect
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Left side - Process steps */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {developmentFlow.map((step, index) => (
                  <motion.div
                    key={index}
                    className="flex gap-6 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {/* Step number */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-lg">
                          {step.step}
                        </span>
                      </div>
                    </div>

                    {/* Step content */}
                    <div className="flex-1 pt-2">
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Right side - Image */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-600/20 p-1">
                  <div className="bg-gray-900/50 rounded-3xl p-8 backdrop-blur-sm">
                    <img
                      src="/assets/AI-Chatbot.gif"
                      alt="AI Chatbot Development Process"
                      className="w-full h-80 lg:h-96 object-cover rounded-2xl"
                    />
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 text-white bg-light relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40"></div>
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
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
                    src="/assets/AI-Chatbot.gif"
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

      {/* CTA Section */}
      <section className="py-20 bg-light relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI Chatbots?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our AI chatbot development services can help
                you improve customer engagement and drive business growth.
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Let's Talk
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
