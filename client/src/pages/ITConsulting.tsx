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
} from "lucide-react";
import Layout from "../components/Layout";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ITConsulting() {
  const coreServices: Service[] = [
    {
      icon: <Cloud className="h-8 w-8 text-cyan-400" />,
      title: "Cloud AI and IT Consultation Services",
      description:
        "We focus on the delivery of sales and repair cloud implementation services, reworking heritage applications to Force.com applications, services that alter enterprise quality and collaboration, and custom cloud app development exploitation the Force.com platform as a service.",
    },
    {
      icon: <Code className="h-8 w-8 text-blue-400" />,
      title: "IT Consultation",
      description:
        "AI Technologies, LLC's capability in developing very large-scale, multi-million dollar client applications and supporting them established a sturdy Application Development & Support practice in conjunction with successful execution of many fixed-price/fixed-outcome projects.",
    },
    {
      icon: <Database className="h-8 w-8 text-green-400" />,
      title: "Big Data & Enterprise Intelligence",
      description:
        "We help clients catch the big data wave that is sweeping enterprise thinking. These services are designed to help customers produce competitive differentiation and discover new business opportunities.",
    },
    {
      icon: <Users className="h-8 w-8 text-purple-400" />,
      title: "Consulting Solutions",
      description:
        "Today, we are operating with clients to drive AI innovations throughout the customer lifecycle through our target prediction, spoken communication and analytics backed by cognitive engines and human help.",
    },
  ];

  const consultingAreas = [
    {
      title: "Business Process Automation",
      description:
        "AI Technologies, LLC's Business Process Automation services supply customers economical alternatives for improving business operations and increasing organizational effectiveness. Our solutions are designed to streamline operations and improve efficiency for public and private sector organizations.",
    },
    {
      title: "Application Development & Support",
      description:
        "Our capability in developing very large-scale, multi-million dollar client applications and supporting them established a robust Application Development & Support practice with successful execution of many fixed-price/fixed-outcome projects.",
    },
    {
      title: "Cloud and Enterprise Solutions",
      description:
        "For customers looking to leverage quality and Cloud for enterprise adoption, AI Technologies, LLC offers an array of services from design, development, deployment, and support. We help organizations build scalable, secure solutions.",
    },
    {
      title: "On-Demand Testing Services",
      description:
        "AI Technologies, LLC's practice in Application Testing is an innovative approach to On-Demand Testing Services – a utility model which provides testing in cloud complete with test environment (provision and de-provision on the fly) and enhancing efficiency with integrated testing.",
    },
    {
      title: "Big Data Implementation",
      description:
        "AI Technologies, LLC has developed skills and experience to implement big data technologies for enterprise. With our distinctive Discover, Design, Develop and Deploy services, we help customers discover and implement new use cases to create competitive differentiation.",
    },
  ];

  const benefits: Benefit[] = [
    {
      icon: <Target className="h-6 w-6 text-green-400" />,
      title: "Reduced Costs",
      description:
        "Cloud computing eliminates the capital expense of building a server infrastructure, shifts support prices, and permits you to pay incrementally just for services used.",
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

  const predictiveCapabilities = [
    "Recommending next best action to meet a consumer's want through IVR, virtual assistant or live agent",
    "Minimizing churn by identifying and pursuing signals that a client may be near purchasing a product or managing their service supported net activity, words, tone or sentiment",
    "Proactive notifications for relevant, helpful assistance or customized deals",
    "Predictive, conversational and analytic AI solutions for enterprise customer lifecycle management",
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

        {/* Core Services Section */}
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
                Our Core Services
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mt-2 mx-auto"></div>
              </h2>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {coreServices.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="group"
                >
                  <div className="h-full bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 text-center">
                    <div className="flex justify-center mb-6">
                      <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 group-hover:scale-110 transition-transform duration-300">
                        <div className="text-white [&>svg]:text-white">{service.icon}</div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Consulting Areas Section */}
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
                Consulting Solutions
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mt-2 mx-auto"></div>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Today, we are operating with clients to drive AI innovations throughout the customer lifecycle through our target prediction, spoken communication and analytics backed by cognitive engines and human help. For large organizations that field billions of client interactions annually, the power to anticipate and resolve client wants before they arise has enormous potential to drive client satisfaction up and prices down.
              </p>
            </motion.div>

            <motion.div
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {consultingAreas.map((area, index) => (
                <motion.div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-8 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                  variants={itemVariants}
                >
                  <h3 className="text-2xl font-semibold mb-4 text-white">
                    {area.title}
                  </h3>
                  <p className="text-gray-400 text-lg">{area.description}</p>
                </motion.div>
              ))}
            </motion.div>
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
                  Predictive solutions utilize client profile information for insights into organizations' requirements and preferences from previous interactions across all channels to see intent and choose the simplest agent or resource to service their wants.
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
                With our stress on coaching and certification, you can be certain that AI Technologies, LLC employs solely the most qualified Salesforce.com-certified professionals with intensive expertise in Force.com business cloud application development.
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
                  delivering effective, scalable, and ROI-driven AWS, AZURE, and
                  Salesforce DevOps solutions.
                </p>
                <p className="text-gray-400">
                  We combine best-in-class agile and JIRA, ServiceNow deployment
                  methodologies with deep industry insight, allowing us to adapt
                  quickly to your evolving business and technology challenges.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </Layout>
  );
}
