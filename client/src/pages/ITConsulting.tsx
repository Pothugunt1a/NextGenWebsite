
import { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Cloud,
  Database,
  Shield,
  Code,
  BarChart3,
  Cpu,
  Zap,
  Users,
  Target,
  ArrowRight,
  Brain,
} from "lucide-react";
import { Button } from "../components/ui/button";
import Layout from "../components/Layout";

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Service areas data for the interactive section
const serviceAreaData = [
  {
    id: "cloud-ai-consultation",
    name: "Cloud AI & IT Consultation",
    image: "/assets/AI-Consulting.png",
    content: "At RT NextGen AI, we specialize in delivering comprehensive IT consultation services that empower businesses to succeed in the cloud-first era. Our expertise spans across cloud implementation, legacy application modernization, and custom cloud application development.",
    features: [
      "Cloud Implementation & Migration: Seamless integration of cloud technologies to enhance operational efficiency and scalability",
      "Legacy App Modernization: Transform outdated applications into high-performing solutions",
      "Enterprise Collaboration Solutions: Tools and platforms that drive team productivity and streamline communication",
      "Custom Development: Bespoke applications built on robust platforms to meet your unique business needs"
    ],
    additionalInfo: "Our team of certified consultants brings a wealth of experience from diverse industries. They serve as trusted partners in delivering effective, scalable, and ROI-driven AWS, AZURE, and Salesforce DevOps solutions. We combine best-in-class agile and JIRA, ServiceNow deployment methodologies with deep industry insight."
  },
  {
    id: "big-data-intelligence",
    name: "Big Data & Enterprise Intelligence",
    image: "/assets/AI-DataStratergy-banner.png",
    content: "Catch the Big Data wave with RT NextGen AI. Our IT Consulting Services help enterprises uncover new business opportunities and gain competitive advantage through data-driven strategies.",
    features: [
      "Identify high-impact use cases",
      "Design scalable big data solutions", 
      "Develop enterprise-grade architectures",
      "Deploy actionable insights for smarter decisions"
    ],
    additionalInfo: "With our proven Discover, Design, Develop, and Deploy methodology, RT NextGen AI has the expertise and tools to bring your data strategy to life—turning complex information into business intelligence that drives growth."
  },
  {
    id: "consulting-solutions",
    name: "Consulting Solutions",
    image: "/assets/AI-brain-banner.png",
    content: "At RT NextGen AI, we help organizations unlock the power of AI-driven innovation across the entire customer lifecycle. Our consulting solutions combine predictive analytics, natural language processing, and cognitive engines—backed by human expertise.",
    features: [
      "Next-Best-Action Recommendations: Suggesting the optimal path forward through IVRs, virtual assistants, or live agents",
      "Churn Reduction: Identifying early signals—like sentiment, tone, or online behavior—that indicate potential churn or purchase intent",
      "Proactive Engagement: Sending personalized, timely notifications for offers, support, or relevant assistance"
    ],
    additionalInfo: "For large enterprises managing billions of customer interactions annually, the ability to anticipate and address customer needs before they arise delivers transformative benefits. These capabilities enable businesses to evolve from reactive to predictive."
  },
  {
    id: "application-development",
    name: "Application Development & Support",
    image: "/assets/AI-Components.gif",
    content: "At RT NextGen AI, we bring cutting-edge capabilities to the development of large-scale, multi-million-dollar enterprise applications. Our success in executing numerous fixed-price, fixed-outcome projects has enabled us to build a robust Application Development & Support practice.",
    features: [
      "Business Process Automation (BPA) services for streamlined operations and improved organizational effectiveness",
      "Advanced case management solutions tailored for public sector organizations",
      "End-to-end cloud and mobility services—from design and development to deployment and ongoing support",
      "On-Demand Testing Services with complete cloud-based testing environment"
    ],
    additionalInfo: "Our integrated testing framework includes test design, automation toolkits, execution strategies, and comprehensive metrics reporting. This ensures faster delivery cycles and higher software quality at reduced costs."
  }
];

export default function ITConsulting() {
  const [selectedServiceArea, setSelectedServiceArea] = useState(serviceAreaData[0]);

  const predictiveCapabilities = [
    "Recommending next best action to satisfy a consumer's want through IVR, virtual assistant or live agent",
    "Minimizing churn by identifying and pursuing signals that a client may be near purchasing a product or managing their service supported by net activity, words, tone or sentiment",
    "Proactive notifications for relevant, helpful assistance or customized deals",
    "Predictive, conversational and analytic AI solutions for enterprise customer lifecycle management",
  ];

  const benefits: Benefit[] = [
    {
      icon: <img src="/assets/reduced-cost.png" alt="Reduced Costs" className="h-6 w-6" />,
      title: "Reduced Costs",
      description:
        "Cloud computing eliminates the capital expense of building a server infrastructure, shifts support costs, and permits you to pay incrementally just for services used.",
    },
    {
      icon: <Zap className="h-6 w-6 text-yellow-400" />,
      title: "Increased Efficiency",
      description:
        "Utilizing cloud services considerably reduces operational and system administration problems, permitting staff to target projects that move your business forward.",
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-blue-400" />,
      title: "Enhanced Responsiveness",
      description:
        "Shorten project timelines and build more foreseeable time-to-market by eliminating server and code provisioning, supplying you with the competitive advantage you need.",
    },
    {
      icon: <Shield className="h-6 w-6 text-purple-400" />,
      title: "Biometric Security",
      description:
        "Biometrics to fight fraud and permit customers to seamlessly authenticate in their channel of choice, providing advanced security solutions.",
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/assets/IT-Consulting-banner.png"
              alt="IT Consulting Services Banner"
              className="w-full h-full object-cover object-right"
              style={{ objectPosition: "right center" }}
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
                  IT Consultation Services
                </span>
              </motion.h1>

              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-4xl"
              >
                Our Salesforce.com consultants bring depth and breadth of expertise across varied industries to function as trusted partners for our customers. We provide effective planning and execution in the delivery of Salesforce.com solutions and leverage the platform to help maximize return on investment. By combining our best-in-class agile preparation methodologies with deep market experience, we enable our clients to meet their most advanced business and technology challenges.
              </motion.p>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
                  Get Started Today
                </button>
              </motion.div>
            </motion.div>
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
                    {serviceAreaData.map((serviceArea) => (
                      <Button
                        key={serviceArea.id}
                        variant={
                          selectedServiceArea.id === serviceArea.id
                            ? "default"
                            : "outline"
                        }
                        className={`text-center justify-center p-4 h-auto min-h-[60px] transition-all duration-300 ${
                          selectedServiceArea.id === serviceArea.id
                            ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-none shadow-lg"
                            : "bg-slate-800/50 border-slate-600 text-white hover:bg-slate-700/70 hover:border-blue-400/40 hover:text-white"
                        }`}
                        onClick={() => {
                          setSelectedServiceArea(serviceArea);
                        }}
                      >
                        <span className="font-semibold text-sm leading-tight text-center whitespace-normal">
                          {serviceArea.name}
                        </span>
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Right Content Display */}
                <div className="lg:col-span-8">
                  <motion.div
                    key={selectedServiceArea.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-cyan-400/20 rounded-xl overflow-hidden"
                  >
                    {/* Service Area Image */}
                    <div className="relative h-64 overflow-hidden group cursor-pointer">
                      <img
                        src={selectedServiceArea.image}
                        alt={selectedServiceArea.name}
                        className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                        onError={(e) => {
                          console.error(
                            `Failed to load image: ${selectedServiceArea.image}`,
                          );
                        }}
                        onLoad={() => {
                          console.log(
                            `Successfully loaded image: ${selectedServiceArea.image}`,
                          );
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent group-hover:from-gray-900/60 transition-all duration-300"></div>
                      <div className="absolute bottom-4 left-6">
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                          {selectedServiceArea.name}
                        </h3>
                      </div>
                    </div>

                    {/* Service Area Content */}
                    <div className="p-6 space-y-6">
                      <p className="text-gray-300 leading-relaxed text-lg">
                        {selectedServiceArea.content}
                      </p>

                      {/* Features List */}
                      {selectedServiceArea.features && (
                        <div className="space-y-4">
                          <h4 className="text-xl font-semibold text-white mb-4">
                            {selectedServiceArea.id === 'cloud-ai-consultation' ? 'Our Core Services Include:' : 
                             selectedServiceArea.id === 'big-data-intelligence' ? 'Our Methodology:' :
                             selectedServiceArea.id === 'consulting-solutions' ? 'Key Capabilities:' :
                             'Key Features:'}
                          </h4>
                          <div className="grid gap-3">
                            {selectedServiceArea.features.map((feature, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex items-start space-x-3"
                              >
                                <CheckCircle className="h-5 w-5 text-cyan-400 mt-1 flex-shrink-0" />
                                <p className="text-gray-300 text-sm leading-relaxed">{feature}</p>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Additional Information */}
                      {selectedServiceArea.additionalInfo && (
                        <div className="mt-6 p-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg">
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {selectedServiceArea.additionalInfo}
                          </p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Predictive Intelligence Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="max-w-6xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  Predictive Intelligence That{" "}
                  <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                    Powers Results
                  </span>
                  <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mt-2 mx-auto"></div>
                </h2>
                <p className="text-lg text-gray-300 max-w-4xl mx-auto">
                  Predictive solutions utilize client profile information for insights into organizations' requirements and preferences from previous interactions across all channels to see intent and choose the best agent or resource to service their needs.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  {predictiveCapabilities.map((capability, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <CheckCircle className="h-6 w-6 text-cyan-400 mt-1 flex-shrink-0" />
                      <p className="text-gray-300">{capability}</p>
                    </motion.div>
                  ))}
                </div>
                <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-white">
                    Human + AI: The Future
                  </h3>
                  <p className="text-gray-300 mb-6">
                    While AI can predict, analyze, and automate at scale, it
                    cannot fully replicate human intuition and decision-making.
                    Our AI solutions are always complemented by human
                    assistance, ensuring accurate, ethical, and intelligent
                    outcomes.
                  </p>
                  <div className="flex items-center space-x-2">
                    <Cpu className="h-6 w-6 text-blue-400" />
                    <span className="text-sm text-gray-400">
                      AI-Powered Intelligence
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Benefits of Our IT Consulting Services
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mt-2 mx-auto"></div>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                With our focus on training and certification, you can be certain that AI Technologies, LLC employs only the most qualified Salesforce.com-certified professionals with extensive expertise in Force.com business cloud application development.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-8 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 text-center"
                  variants={itemVariants}
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl mb-6 mx-auto border border-green-500/30">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
                Certified{" "}
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  Expertise
                </span>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mt-2 mx-auto"></div>
              </h2>
              <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-8">
                <p className="text-lg text-gray-300 mb-6">
                  Our team of certified consultants brings wealth of experience
                  from diverse industries. They serve as trusted partners in
                  delivering effective, scalable, and ROI-driven solutions.
                </p>
                <p className="text-gray-400">
                  We combine best-in-class agile methodologies with deep industry insight, allowing us to adapt
                  quickly to your evolving business and technology challenges. With our stress on training and certification, you can be certain that AI Technologies, LLC employs only the most qualified professionals with extensive expertise.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 relative overflow-hidden">
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
                <span className="text-white">Business with IT Solutions?</span>
              </motion.h2>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
              >
                Let's discuss how our IT consulting services can accelerate your
                digital transformation and drive unprecedented business growth
              </motion.p>

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
                  Start Your IT Journey
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </Layout>
  );
}
