import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Brain, Eye, MessageSquare, Settings, Database, Shield, Zap, Users, TrendingUp, Award, Clock, CheckCircle, Star, Sparkles, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function AIApplicationDevelopment() {
  const aiServices = [
    {
      icon: <Bot className="h-8 w-8 text-white" />,
      title: "Custom AI Solutions",
      description: "We build AI applications from the ground up, tailored to solve your specific business challenges — whether it's automating processes, enhancing customer experiences, or unlocking insights from your data.",
      backgroundImage: "/assets/AI-Custom.png",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-white" />,
      title: "Machine Learning & Predictive Analytics",
      description: "Harness the power of data. We develop machine learning models that learn from your data and provide accurate predictions, recommendations, and real-time decision-making support.",
      backgroundImage: "/assets/AI-ML.png",
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-white" />,
      title: "Natural Language Processing (NLP)",
      description: "From chatbots and voice assistants to text analytics and sentiment analysis, we build NLP solutions that understand and interact in human language.",
      backgroundImage: "/assets/AI-NLP.png",
    },
    {
      icon: <Eye className="h-8 w-8 text-white" />,
      title: "Computer Vision",
      description: "Empower your applications to see and understand the world. We integrate computer vision capabilities for image recognition, object detection, facial recognition, and more.",
      backgroundImage: "/assets/AI-Vision.png",
    },
    {
      icon: <Settings className="h-8 w-8 text-white" />,
      title: "AI Integration & Automation",
      description: "We help integrate AI into your existing systems or workflows—be it CRM, ERP, or cloud platforms—streamlining operations and increasing productivity.",
      backgroundImage: "/assets/AI-Integration.png",
    },
  ];

  const stats = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "95%",
      subtitle: "Success Rate",
      description: "AI Project delivery",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "200+",
      subtitle: "AI Applications",
      description: "Successfully developed",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "80%",
      subtitle: "Time Reduction",
      description: "In development cycles",
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "50+",
      subtitle: "Industries Served",
      description: "Across all sectors",
      color: "from-orange-500 to-red-500",
    },
  ];

  const industryData = [
    {
      id: "healthcare",
      name: "Healthcare",
      image: "/assets/Healthcare.png",
      content: "Transform healthcare delivery with AI-powered diagnostic tools, medical imaging analysis, patient monitoring systems, and personalized treatment recommendations. Our AI applications improve patient outcomes through predictive analytics, automated clinical documentation, and intelligent drug discovery platforms that accelerate medical research and enhance care quality."
    },
    {
      id: "retail",
      name: "Retail & E-commerce",
      image: "/assets/Ecommerce.png",
      content: "Revolutionize retail experiences with AI-driven recommendation engines, dynamic pricing optimization, inventory management, and virtual shopping assistants. Our applications enable personalized customer journeys, demand forecasting, supply chain optimization, and automated customer service that drives sales growth and customer satisfaction."
    },
    {
      id: "finance",
      name: "Finance & Banking",
      image: "/assets/Banking.png",
      content: "Secure financial operations with AI applications for fraud detection, risk assessment, algorithmic trading, and regulatory compliance. We develop intelligent systems for credit scoring, portfolio management, automated financial advisory services, and real-time transaction monitoring that enhance security while improving customer experiences."
    },
    {
      id: "manufacturing",
      name: "Manufacturing",
      image: "/assets/Manufacturing.png",
      content: "Optimize manufacturing processes with AI applications for predictive maintenance, quality control, supply chain optimization, and production planning. Our solutions include computer vision for defect detection, IoT-integrated monitoring systems, and intelligent automation that reduces costs while improving operational efficiency and product quality."
    },
    {
      id: "customer-service",
      name: "Customer Service",
      image: "/assets/Marketing.png",
      content: "Enhance customer experiences with AI-powered chatbots, sentiment analysis, intelligent ticket routing, and automated response systems. Our applications provide 24/7 customer support, multi-language communication, predictive customer insights, and personalized service recommendations that improve satisfaction and reduce operational costs."
    },
  ];

  const [selectedIndustry, setSelectedIndustry] = useState(industryData[0]);

  const whyChooseUs = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "End-to-End Expertise",
      description: "From ideation and prototyping to deployment and support, we guide you through the entire AI development lifecycle."
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Cutting-edge Technologies",
      description: "We work with the latest AI frameworks and tools, including TensorFlow, PyTorch, OpenAI, Hugging Face, and AWS/GCP/Azure AI services."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Data Privacy & Ethics Focused",
      description: "Our AI solutions are designed with fairness, transparency, and data protection in mind."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Scalable & Future-Ready",
      description: "We build AI solutions that grow with your business and adapt to evolving challenges."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Proven Track Record",
      description: "Successfully delivered AI solutions across various industries with measurable business impact."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Rapid Deployment",
      description: "Agile development methodologies ensure faster time-to-market for your AI applications."
    },
  ];

  return (
    <div className="min-h-screen bg-light text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/assets/AIApplication-banner.png"
            alt="AI Application Development"
            className="w-full h-full object-cover brightness-110 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30"></div>
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
                AI Application Development
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-4xl"
            >
              Unlock the Power of Artificial Intelligence
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
                  AI Application Excellence
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
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
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

      {/* AI Development Services Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our AI Development Services
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to transform your business operations and drive innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {aiServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/20 hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
                  <CardContent className="p-8 text-center h-full flex flex-col">
                    <div className="flex justify-center mb-6">
                      <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed flex-grow">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section - Interactive Layout matching AI Consulting */}
      <section className="py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                How we implement AI applications across multiple industries
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

      {/* Why Choose Us Section - Same as Generative AI Development */}
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
              Partner with industry leaders in AI application development
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
              
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* CTA Section - Same as AI Consulting */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-cyan-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Build Your AI-Powered Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Whether you're looking to automate tasks, uncover insights, or deliver smarter customer experiences, we can help turn your AI vision into reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Start Your AI Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300"
                >
                  Schedule Free Consultation
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}