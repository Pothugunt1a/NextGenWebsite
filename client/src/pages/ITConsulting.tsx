
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ChevronDown,
  ChevronUp,
  Server,
  Cloud,
  Database,
  Settings,
  Shield,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Award,
  Target,
  Brain,
  Users,
  Zap,
} from "lucide-react";
import { Button } from "../components/ui/button";

interface FAQ {
  question: string;
  answer: string;
}

const consultingAreas = [
  {
    title: "Cloud AI & IT Consultation Services",
    description:
      "We focus on the delivery of sales and repair cloud implementation, reworking heritage applications to Force.com applications, services that alter enterprise quality and collaboration, and custom cloud app development exploitation the Force.com platform as a service. Our Salesforce.com consultants bring depth and breadth of expertise across varied industries to function sure partners for our customers.",
    details:
      "Our consultants provide effective planning and execution within the delivery of Salesforce.com solutions and leverage the Salesforce.com platform to help maximize return on investment. By combining our best-in-class agile preparation methodologies with deep market experience, we alter our preferences to satisfy our consumers' most advanced business and technology challenges.",
    icon: <Cloud className="h-8 w-8" />,
    color: "from-blue-500 to-cyan-500",
    services: [
      "Salesforce.com solutions",
      "Cloud app development",
      "Enterprise collaboration",
      "Legacy system modernization",
    ],
  },
  {
    title: "Application Development & Support",
    description:
      "Artificial Intelligence Technologies, LLC's capability in developing very large-scale, multi-million dollar client applications and supporting them established a robust Application Development & Support practice with successful execution of many fixed-price/fixed-outcome projects.",
    details:
      "Our Business Process Automation services supply customers economical alternatives for improving business and increasing organization effectiveness. Public sector customers can benefit from AI Technologies, LLC's expertise in building case management solutions with deep domain experience.",
    icon: <Settings className="h-8 w-8" />,
    color: "from-green-500 to-emerald-500",
    services: [
      "Large-scale applications",
      "Fixed-price projects",
      "Business process automation",
      "Case management solutions",
    ],
  },
  {
    title: "Cloud & Enterprise Solutions",
    description:
      "For customers looking to leverage quality and Cloud for enterprise adoption, AI Technologies, LLC offers an array of services from design, development, deployment, and support. Our practice in Application Testing is an innovative approach to On-Demand Testing Services.",
    details:
      "We provide a utility model which delivers testing in cloud complete with test environment (provision and de-provision on the fly) and enhance efficiency with integrated testing (test design + toolkit + test execution + test metrics).",
    icon: <Server className="h-8 w-8" />,
    color: "from-purple-500 to-violet-500",
    services: [
      "Cloud enterprise solutions",
      "On-demand testing services",
      "Test environment provisioning",
      "Integrated testing framework",
    ],
  },
  {
    title: "Big Data & Enterprise Intelligence",
    description:
      "AI Technologies, LLC's IT Consulting Services will help you catch the big data wave that is sweeping enterprise thinking. These services are designed to help customers produce competitive differentiation and discover new business opportunities.",
    details:
      "AI Technologies, LLC has developed skills and experience to implement big data technologies for enterprise. With distinctive Discover, Design, Develop and Deploy services, AI Technologies, LLC will help customers discover and implement new use cases.",
    icon: <Database className="h-8 w-8" />,
    color: "from-orange-500 to-red-500",
    services: [
      "Big data implementation",
      "Enterprise intelligence",
      "Competitive differentiation",
      "Use case discovery",
    ],
  },
  {
    title: "AI-Powered Consulting Solutions",
    description:
      "Today, we are operating with clients to drive AI innovations throughout the customer lifecycle through our target prediction, communication and analytics backed by cognitive engines and human assistance.",
    details:
      "Predictive solutions utilize client profile information for insights into organizations' requirements and preferences from previous interactions across all channels to determine intent and choose the best agent or resource to service their needs, including recommending the next best action to satisfy a consumer's need.",
    icon: <Brain className="h-8 w-8" />,
    color: "from-cyan-500 to-blue-500",
    services: [
      "Target prediction",
      "Communication analytics",
      "Cognitive engines",
      "Customer lifecycle optimization",
    ],
  },
  {
    title: "Fraud Prevention & Security",
    description:
      "Advanced biometrics solutions to fight fraud and allow customers to seamlessly authenticate in their channel of choice. Our security implementations provide enhanced responsiveness and competitive advantage.",
    details:
      "We implement comprehensive security measures that shorten project timelines and build more predictable time-to-market by eliminating server and code provisioning challenges, giving you the competitive advantage you need.",
    icon: <Shield className="h-8 w-8" />,
    color: "from-red-500 to-pink-500",
    services: [
      "Biometric authentication",
      "Fraud detection",
      "Multi-channel security",
      "Rapid deployment",
    ],
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Reduced Costs",
    description:
      "Cloud computing eliminates the capital expense of building server infrastructure, shifts support costs, and allows you to pay incrementally for services used.",
  },
  {
    icon: Zap,
    title: "Increased Efficiency",
    description:
      "Utilizing cloud services significantly reduces operational and system administration problems, allowing staff to focus on projects that move your business forward.",
  },
  {
    icon: ArrowRight,
    title: "Enhanced Responsiveness",
    description:
      "Shorten project timelines and build more predictable time-to-market by eliminating server and code provisioning, giving you the competitive advantage you need.",
  },
  {
    icon: Shield,
    title: "Advanced Security",
    description:
      "Biometrics to fight fraud and allow customers to seamlessly authenticate in their channel of choice with enterprise-grade security measures.",
  },
];

const faqs: FAQ[] = [
  {
    question: "What makes your IT consulting approach different?",
    answer:
      "We combine deep technical expertise with industry-specific knowledge to deliver solutions that directly impact your business goals. Our team includes certified professionals with extensive experience in cloud technologies, enterprise applications, and AI-driven solutions.",
  },
  {
    question: "How do you handle large-scale application development?",
    answer:
      "Our proven capability in developing very large-scale, multi-million dollar client applications is backed by a robust Application Development & Support practice with successful execution of many fixed-price/fixed-outcome projects.",
  },
  {
    question: "What cloud services do you specialize in?",
    answer:
      "We specialize in Salesforce.com solutions, Force.com platform development, cloud app development, and comprehensive cloud enterprise adoption services from design through deployment and support.",
  },
  {
    question: "How do you ensure quality in your testing services?",
    answer:
      "Our innovative On-Demand Testing Services use a utility model that provides testing in cloud complete with test environment provisioning and integrated testing framework including test design, toolkit, execution, and metrics.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We serve various industries including public sector organizations, enterprises looking for cloud adoption, organizations needing case management solutions, and businesses seeking big data implementation and AI-powered consulting solutions.",
  },
];

// Industry data for the interactive section
const serviceData = [
  {
    id: "cloud-ai",
    name: "Cloud AI & IT Consultation",
    image: "/assets/IT-Consulting-banner.png",
    content:
      "We focus on delivering comprehensive cloud implementation services, reworking heritage applications to modern Force.com applications, and developing custom cloud applications. Our Salesforce.com consultants bring extensive expertise across varied industries, providing effective planning and execution to maximize return on investment through best-in-class agile methodologies.",
  },
  {
    id: "app-development",
    name: "Application Development & Support",
    image: "/assets/AI-Components.gif",
    content:
      "Our proven capability in developing very large-scale, multi-million dollar client applications has established a robust practice with successful execution of fixed-price/fixed-outcome projects. We provide Business Process Automation services that offer economical alternatives for improving business operations and increasing organizational effectiveness.",
  },
  {
    id: "cloud-enterprise",
    name: "Cloud & Enterprise Solutions",
    image: "/assets/AI-DataStratergy-banner.png",
    content:
      "For customers leveraging cloud for enterprise adoption, we offer comprehensive services from design through deployment and support. Our innovative On-Demand Testing Services provide a utility model delivering cloud-based testing with dynamic environment provisioning and integrated testing frameworks for enhanced efficiency.",
  },
  {
    id: "big-data",
    name: "Big Data & Enterprise Intelligence",
    image: "/assets/AI-Lifecycle.png",
    content:
      "Our IT Consulting Services help you leverage the big data wave sweeping enterprise thinking. These services enable competitive differentiation and new business opportunity discovery. With our distinctive Discover, Design, Develop and Deploy methodology, we help customers implement big data technologies and discover new use cases.",
  },
  {
    id: "ai-consulting",
    name: "AI-Powered Consulting Solutions",
    image: "/assets/AI-Consulting.png",
    content:
      "We drive AI innovations throughout the customer lifecycle through target prediction, communication analytics, and cognitive engines. Our predictive solutions utilize client profile information to determine intent and recommend optimal actions, minimizing churn through behavioral analysis and providing proactive notifications for relevant assistance.",
  },
  {
    id: "security",
    name: "Fraud Prevention & Security",
    image: "/assets/Data-Governance.png",
    content:
      "Advanced biometric solutions fight fraud while enabling seamless customer authentication across multiple channels. Our security implementations provide enhanced responsiveness, shortened project timelines, and competitive advantages through efficient server and code provisioning elimination.",
  },
];

export default function ITConsulting() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState(serviceData[0]);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

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
            src="/assets/IT-Consulting-banner.png"
            alt="IT Consulting Services"
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
                IT Consulting Services
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl"
            >
              Comprehensive IT consulting solutions including cloud implementation, application development, big data analytics, and AI-powered business transformation
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
                  Enterprise IT Solutions & Cloud Excellence
                </span>
                <Award className="h-4 w-4 text-blue-400 fill-current" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our IT Consulting Service Areas
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {consultingAreas.map((area, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${area.color} rounded-lg flex items-center justify-center mb-6`}>
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {area.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    {area.description}
                  </p>
                  <ul className="space-y-2">
                    {area.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-cyan-400 mr-2" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Services Section - FIXED COMPONENT */}
      <section className="py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                How we implement IT consulting across multiple service areas
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Navigation */}
              <div className="lg:col-span-4">
                <div className="grid grid-cols-1 gap-4">
                  {serviceData.map((service) => (
                    <Button
                      key={service.id}
                      variant={
                        selectedService.id === service.id
                          ? "default"
                          : "outline"
                      }
                      className={`text-center justify-center p-4 h-auto min-h-[60px] transition-all duration-300 ${
                        selectedService.id === service.id
                          ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-none shadow-lg"
                          : "bg-slate-800/50 border-slate-600 text-white hover:bg-slate-700/70 hover:border-blue-400/40 hover:text-white"
                      }`}
                      onClick={() => {
                        setSelectedService(service);
                      }}
                    >
                      <span className="font-semibold text-sm leading-tight text-center whitespace-normal">
                        {service.name}
                      </span>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Right Content Display */}
              <div className="lg:col-span-8">
                <motion.div
                  key={selectedService.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-cyan-400/20 rounded-xl overflow-hidden"
                >
                  {/* Service Image */}
                  <div className="relative h-64 overflow-hidden group cursor-pointer">
                    <img
                      src={selectedService.image}
                      alt={selectedService.name}
                      className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent group-hover:from-gray-900/60 transition-all duration-300"></div>
                    <div className="absolute bottom-4 left-6">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {selectedService.name}
                      </h3>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-6">
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {selectedService.content}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Benefits of our IT Consulting Services
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
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
                Common questions about our IT consulting services
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Side - IT Image */}
              <div className="lg:col-span-5">
                <div className="relative group">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src="/assets/FAQ's.png"
                      alt="IT Consulting Solutions"
                      className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        IT Solutions Excellence
                      </h3>
                      <p className="text-gray-200 text-sm">
                        Transforming businesses through comprehensive IT consulting and cloud solutions
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
                Comprehensive IT Consulting Experts
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
              <span className="text-white">IT Infrastructure?</span>
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Let's discuss how our comprehensive IT consulting services can modernize your technology stack and accelerate your business growth
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
                  Free IT Strategy Consultation
                </span>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <CheckCircle className="h-6 w-6 text-white bg-primary rounded-full p-1" />
                <span className="text-white font-semibold">
                  Enterprise Cloud Solutions
                </span>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <CheckCircle className="h-6 w-6 text-white bg-primary rounded-full p-1" />
                <span className="text-white font-semibold">
                  Proven Implementation Results
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
                <Server className="mr-2 h-5 w-5" />
                Start Your IT Transformation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
