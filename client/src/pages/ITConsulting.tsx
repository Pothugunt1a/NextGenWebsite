
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
    content:
      "We focus on the delivery of sales and repair cloud implementation services, reworking heritage applications to Force.com applications, services that alter enterprise quality and collaboration, and custom cloud app development exploitation the Force.com platform as a service. Our Salesforce.com consultants bring depth and breadth of expertise across varied industries to function as trusted partners for our customers. They provide effective planning and execution in the delivery of Salesforce.com solutions and leverage the platform to help maximize return on investment.",
  },
  {
    id: "application-development",
    name: "Application Development & Support",
    image: "/assets/AI-Components.gif",
    content:
      "AI Technologies, LLC's capability in developing very large-scale, multi-million dollar client applications and supporting them established a sturdy Application Development & Support practice in conjunction with successful execution of many fixed-price/fixed-outcome projects. Our Business Process Automation services supply customers economical alternatives for improving business operations and increasing organizational effectiveness.",
  },
  {
    id: "cloud-enterprise",
    name: "Cloud & Enterprise Solutions",
    image: "/assets/IT-Consulting-banner.png",
    content:
      "For customers looking to leverage quality and Cloud for enterprise adoption, AI Technologies, LLC offers an array of services from design, development, deployment, and support. Our practice in Application Testing is an innovative approach to On-Demand Testing Services – a utility model which provides testing in cloud complete with test environment (provision and de-provision on the fly) and enhancing efficiency with integrated testing.",
  },
  {
    id: "big-data-intelligence",
    name: "Big Data & Enterprise Intelligence",
    image: "/assets/AI-DataStratergy-banner.png",
    content:
      "AI Technologies, LLC's IT Consulting Services will assist you catch the big data wave that is sweeping enterprise thinking. These services are designed to help customers produce competitive differentiation and discover new business opportunities. We have developed skills and experience to implement big data technologies for enterprise with our distinctive Discover, Design, Develop and Deploy services.",
  },
  {
    id: "ai-consulting-solutions",
    name: "AI-Powered Consulting Solutions",
    image: "/assets/AI-brain-banner.png",
    content:
      "Today, we are operating with clients to drive AI innovations throughout the customer lifecycle through our target prediction, spoken communication and analytics backed by cognitive engines and human help. For large organizations that field billions of client interactions annually, the power to anticipate and resolve client needs before they arise has enormous potential to drive client satisfaction up and costs down.",
  },
  {
    id: "fraud-prevention",
    name: "Fraud Prevention & Security",
    image: "/assets/Process-Optimization.png",
    content:
      "Biometrics to fight fraud and permit customers to seamlessly authenticate in their channel of choice. Our security solutions provide advanced protection mechanisms that help organizations maintain secure operations while ensuring smooth user experiences across all touchpoints.",
  },
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
      icon: <Target className="h-6 w-6 text-green-400" />,
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
                    <div className="p-6">
                      <p className="text-gray-300 leading-relaxed text-lg">
                        {selectedServiceArea.content}
                      </p>
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
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-xl mb-6 mx-auto border border-green-500/30">
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
