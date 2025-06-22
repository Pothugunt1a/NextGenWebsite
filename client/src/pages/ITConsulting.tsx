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
  Search,
  Settings,
  Globe,
  Award,
  TrendingUp,
  Monitor,
  Layers,
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
      icon: <Cpu className="h-8 w-8 text-blue-400" />,
      title: "Business Process Automation",
      description:
        "Our Business Process Automation (BPA) services provide customers with efficient, scalable solutions designed to streamline operations and improve organizational effectiveness. Whether you're in the public or private sector, RT NextGen AI empowers your digital transformation journey.",
    },
    {
      icon: <Shield className="h-8 w-8 text-green-400" />,
      title: "Public Sector Solutions",
      description:
        "We have deep domain expertise in developing advanced case management solutions tailored for public sector organizations. These solutions help agencies improve service delivery, enhance transparency, and achieve compliance—faster and more effectively.",
    },
    {
      icon: <Globe className="h-8 w-8 text-cyan-400" />,
      title: "Cloud and Mobility Services",
      description:
        "For enterprises looking to harness the power of cloud and mobile platforms, RT NextGen AI offers end-to-end services—from design and development to deployment and ongoing support. Our solutions are built for scalability, security, and performance.",
    },
    {
      icon: <Settings className="h-8 w-8 text-orange-400" />,
      title: "Application Testing Innovation",
      description:
        "RT NextGen AI revolutionizes application testing with our On-Demand Testing Services model. This utility-based approach provides a complete cloud-based testing environment, dynamically provisioned and de-provisioned as needed.",
    },
  ];

  const bigDataFeatures = [
    {
      icon: <Search className="h-6 w-6 text-cyan-400" />,
      title: "Identify high-impact use cases",
    },
    {
      icon: <Layers className="h-6 w-6 text-blue-400" />,
      title: "Design scalable big data solutions",
    },
    {
      icon: <Monitor className="h-6 w-6 text-purple-400" />,
      title: "Develop enterprise-grade architectures",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-green-400" />,
      title: "Deploy actionable insights for smarter decisions",
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
    "Next-Best-Action Recommendations: Suggesting the optimal path forward through IVRs, virtual assistants, or live agents.",
    "Churn Reduction: Identifying early signals—like sentiment, tone, or online behavior—that indicate potential churn or purchase intent.",
    "Proactive Engagement: Sending personalized, timely notifications for offers, support, or relevant assistance.",
  ];

  const testingFeatures = [
    "Test design",
    "Automation toolkits", 
    "Execution strategies",
    "Test metrics and reporting",
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
                At RT NextGen AI, we specialize in delivering comprehensive IT consultation services that empower businesses to succeed in the cloud-first era. Our expertise spans across cloud implementation, legacy application modernization, and custom cloud application development—all tailored through the robust platform.
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

        {/* Cloud AI & IT Consultation Section */}
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
                Cloud AI & IT Consultation
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mt-2 mx-auto"></div>
              </h2>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Our team of certified consultants brings a wealth of experience from diverse industries. They serve as trusted partners in delivering effective, scalable, and ROI-driven AWS, AZURE, and Salesforce DevOps solutions. From planning to execution, we leverage the full capabilities of these platforms to accelerate your business transformation.
              </p>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                We combine best-in-class agile and JIRA, ServiceNow deployment methodologies with deep industry insight, allowing us to adapt quickly to your evolving business and technology challenges. When you work with RT NextGen AI, you're not just getting a service provider—you're gaining a dedicated partner committed to your long-term success in the AI and cloud.
              </p>
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

        {/* Big Data & Enterprise Intelligence Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Big Data & Enterprise Intelligence
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mt-2 mx-auto"></div>
              </h2>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Catch the Big Data wave with RT NextGen AI. Our IT Consulting Services help enterprises uncover new business opportunities and gain competitive advantage through data-driven strategies. With our proven Discover, Design, Develop, and Deploy methodology, we help clients turn complex information into business intelligence that drives growth.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {bigDataFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/30">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Consulting Solutions Section */}
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
              <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                At RT NextGen AI, we help organizations unlock the power of AI-driven innovation across the entire customer lifecycle. Our consulting solutions combine predictive analytics, natural language processing, and cognitive engines—backed by human expertise—to transform how businesses engage with their customers.
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
                  className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-8 hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20"
                  variants={itemVariants}
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                        {area.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-4 text-white">
                        {area.title}
                      </h3>
                      <p className="text-gray-300 text-lg leading-relaxed">{area.description}</p>
                      {area.title === "Application Testing Innovation" && (
                        <div className="mt-6">
                          <h4 className="text-lg font-semibold text-white mb-3">Our integrated testing framework includes:</h4>
                          <div className="grid grid-cols-2 gap-3">
                            {testingFeatures.map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-cyan-400" />
                                <span className="text-gray-300">{feature}</span>
                              </div>
                            ))}
                          </div>
                          <p className="text-gray-400 mt-4">This ensures faster delivery cycles and higher software quality at reduced costs.</p>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Predictive Intelligence Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-cyan-600/10"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
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
                  For large enterprises managing billions of customer interactions annually, the ability to anticipate and address customer needs before they arise delivers transformative benefits. Our predictive solutions analyze customer profile data and past interactions across all channels to detect intent and personalize engagement.
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
                  <div className="mt-8 p-6 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl">
                    <p className="text-gray-300 text-lg">
                      These capabilities enable businesses to evolve from reactive to predictive, delivering contextually relevant, personalized experiences that build loyalty and reduce costs.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-white">
                    Enterprise Application Excellence
                  </h3>
                  <p className="text-gray-300 mb-6">
                    At RT NextGen AI, we bring cutting-edge capabilities to the development of large-scale, multi-million-dollar enterprise applications. Our success in executing numerous fixed-price, fixed-outcome projects has enabled us to build a robust Application Development & Support practice that consistently delivers measurable results.
                  </p>
                  <div className="flex items-center space-x-2">
                    <Award className="h-6 w-6 text-blue-400" />
                    <span className="text-sm text-gray-400">
                      Enterprise-Grade Solutions
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
                With our emphasis on training and certification, you can be certain that RT NextGen AI employs only the most qualified professionals with extensive expertise in business cloud application development.
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
      </motion.div>
    </Layout>
  );
}