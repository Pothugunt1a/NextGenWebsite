import { motion } from "framer-motion";
import { ArrowRight, Bot, Brain, Eye, MessageSquare, Settings, Database, Shield, Zap, Users, TrendingUp, Award, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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

  const industries = [
    {
      name: "Healthcare",
      description: "AI diagnostics, medical imaging, patient monitoring",
      icon: <Shield className="h-6 w-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Retail & E-commerce",
      description: "Recommendation engines, demand forecasting, virtual shopping assistants",
      icon: <Users className="h-6 w-6" />,
      color: "from-purple-500 to-blue-500"
    },
    {
      name: "Finance",
      description: "Fraud detection, algorithmic trading, risk modeling",
      icon: <TrendingUp className="h-6 w-6" />,
      color: "from-green-500 to-blue-500"
    },
    {
      name: "Manufacturing",
      description: "Predictive maintenance, quality control, process optimization",
      icon: <Settings className="h-6 w-6" />,
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Customer Service",
      description: "AI chatbots, sentiment analysis, ticket triage",
      icon: <MessageSquare className="h-6 w-6" />,
      color: "from-cyan-500 to-blue-500"
    },
  ];

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI Application Development
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Unlock the Power of Artificial Intelligence
              </p>
              <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
                Artificial Intelligence (AI) is transforming industries, driving efficiency, and unlocking new possibilities. At RT NextGenAI, we specialize in designing and developing intelligent AI-powered applications tailored to your unique business needs.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
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

      {/* Industries We Serve Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industries We Serve
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Delivering specialized AI solutions across diverse industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-gray-700/50 hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${industry.color} mr-4`}>
                        <div className="text-white">
                          {industry.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {industry.name}
                      </h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {industry.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose RT NextGenAI
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Partner with industry leaders in AI application development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
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
                        <div className="text-white">{item.icon}</div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed flex-grow">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-cyan-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
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
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Contact us today to schedule a free consultation!
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}