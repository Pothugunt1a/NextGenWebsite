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
      title: "Cloud Implementation & Migration",
      description:
        "Seamless integration of cloud technologies to enhance operational efficiency and scalability.",
    },
    {
      icon: <Code className="h-8 w-8 text-blue-400" />,
      title: "Legacy App Modernization",
      description:
        "Transform outdated applications into high-performing solutions.",
    },
    {
      icon: <Users className="h-8 w-8 text-purple-400" />,
      title: "Enterprise Collaboration Solutions",
      description:
        "Tools and platforms that drive team productivity and streamline communication.",
    },
    {
      icon: <Database className="h-8 w-8 text-green-400" />,
      title: "Custom Development",
      description:
        "Bespoke applications built on the platform to meet your unique business needs.",
    },
  ];

  const consultingAreas = [
    {
      title: "Business Process Automation",
      description:
        "Efficient, scalable solutions designed to streamline operations and improve organizational effectiveness for public and private sector organizations.",
    },
    {
      title: "Public Sector Solutions",
      description:
        "Advanced case management solutions tailored for public sector organizations to improve service delivery, enhance transparency, and achieve compliance.",
    },
    {
      title: "Cloud and Mobility Services",
      description:
        "End-to-end services from design and development to deployment and ongoing support, built for scalability, security, and performance.",
    },
    {
      title: "Application Testing Innovation",
      description:
        "On-Demand Testing Services with complete cloud-based testing environment, including test design, automation toolkits, execution strategies, and reporting.",
    },
    {
      title: "Big Data & Enterprise Intelligence",
      description:
        "Data-driven strategies using our proven Discover, Design, Develop, and Deploy methodology to turn complex information into actionable business intelligence.",
    },
  ];

  const benefits: Benefit[] = [
    {
      icon: <Target className="h-6 w-6 text-green-400" />,
      title: "Reduced Costs",
      description:
        "Cloud computing eliminates capital expenses of server infrastructure and shifts to a flexible, pay-as-you-go model.",
    },
    {
      icon: <Zap className="h-6 w-6 text-yellow-400" />,
      title: "Increased Operational Efficiency",
      description:
        "Reduce administrative overhead, allowing your teams to focus on strategic initiatives that drive growth.",
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-blue-400" />,
      title: "Enhanced Responsiveness",
      description:
        "Accelerate time-to-market by removing delays from hardware or software provisioning and giving teams tools to act faster.",
    },
  ];

  const predictiveCapabilities = [
    "Next-Best-Action Recommendations: Optimal path suggestions through IVRs, virtual assistants, or live agents",
    "Churn Reduction: Early signal identification through sentiment, tone, or online behavior analysis",
    "Proactive Engagement: Personalized, timely notifications for offers, support, or relevant assistance",
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
                At RT NextGen AI, we specialize in delivering comprehensive IT
                consultation services that empower businesses to succeed in the
                cloud-first era. Our expertise spans across cloud
                implementation, legacy application modernization, and custom
                cloud application development.
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
                We help organizations unlock the power of AI-driven innovation
                across the entire customer lifecycle through comprehensive
                consulting solutions.
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
                  For large enterprises managing billions of customer
                  interactions annually, our predictive solutions analyze
                  customer profile data and past interactions across all
                  channels to detect intent and personalize engagement.
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
                Our IT consulting solutions are designed to drive efficiency,
                agility, and innovation in your organization.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
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
