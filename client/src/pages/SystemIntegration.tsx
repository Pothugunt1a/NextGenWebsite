import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ChevronDown,
  ChevronUp,
  GitBranch,
  Puzzle,
  RefreshCw,
  Zap,
  Shield,
  Network,
  Cloud,
  Database,
  Code,
  Settings,
  Users,
  CheckCircle,
  Award,
  ArrowRight,
  Boxes,
  Workflow,
  Link as LinkIcon,
  Server,
} from "lucide-react";
import { Button } from "../components/ui/button";

const capabilities = [
  {
    icon: <LinkIcon className="h-8 w-8 text-white" />,
    title: "API Integration",
    description: "Seamless API integration services connecting your applications through RESTful APIs, GraphQL, webhooks, and microservices architectures.",
    link: "/it-services/integration/api-integration",
    technologies: ["REST API", "GraphQL", "Webhooks", "Microservices"],
    backgroundImage: "/assets/AI&Data.png",
  },
  {
    icon: <Puzzle className="h-8 w-8 text-white" />,
    title: "Third-Party Integrations",
    description: "Integration with SaaS platforms, payment gateways, CRM systems, marketing tools, and enterprise applications.",
    link: "/it-services/integration/third-party",
    technologies: ["Salesforce", "Stripe", "AWS", "Microsoft 365"],
    backgroundImage: "/assets/Data-Governance.png",
  },
  {
    icon: <RefreshCw className="h-8 w-8 text-white" />,
    title: "Legacy System Modernization",
    description: "Modernize legacy systems with API layers, data synchronization, and gradual migration strategies without business disruption.",
    link: "/it-services/integration/legacy-modernization",
    technologies: ["API Layer", "Data Sync", "Cloud Migration", "Modernization"],
    backgroundImage: "/assets/AI-Training.png",
  },
];

const integrationTypes = [
  {
    icon: <Cloud className="h-6 w-6" />,
    title: "Cloud Integration",
    description: "Connect on-premise systems with cloud platforms (AWS, Azure, GCP) using iPaaS solutions and hybrid architectures.",
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Data Integration",
    description: "ETL/ELT pipelines, real-time data synchronization, and master data management across systems.",
  },
  {
    icon: <Workflow className="h-6 w-6" />,
    title: "Business Process Integration",
    description: "Workflow automation, process orchestration, and event-driven architectures for seamless operations.",
  },
  {
    icon: <Server className="h-6 w-6" />,
    title: "Enterprise Application Integration",
    description: "Connect ERP, CRM, HR, and other enterprise applications for unified data flow.",
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Custom Integration Development",
    description: "Bespoke integration solutions with custom connectors, middleware, and integration platforms.",
  },
  {
    icon: <Boxes className="h-6 w-6" />,
    title: "EDI & B2B Integration",
    description: "Electronic data interchange, partner connectivity, and supply chain integration solutions.",
  },
];

const integrationPlatforms = [
  { name: "MuleSoft", description: "Anypoint Platform for API-led connectivity" },
  { name: "Dell Boomi", description: "Cloud-based integration platform as a service" },
  { name: "Informatica", description: "Enterprise data integration and management" },
  { name: "Apache Kafka", description: "Distributed event streaming platform" },
  { name: "Zapier", description: "Workflow automation and app integration" },
  { name: "Microsoft Logic Apps", description: "Azure cloud integration service" },
  { name: "AWS AppFlow", description: "Secure data transfer between SaaS applications" },
  { name: "Talend", description: "Open-source data integration platform" },
];

const whyChooseUsItems = [
  {
    icon: Network,
    title: "Integration Expertise",
    description: "15+ years of experience integrating complex enterprise systems across diverse technology stacks.",
    badge: "Expert integrators",
  },
  {
    icon: Shield,
    title: "Secure Integration",
    description: "Enterprise-grade security with encryption, OAuth, API security, and compliance standards.",
    badge: "Security first",
  },
  {
    icon: Zap,
    title: "Real-Time Sync",
    description: "Low-latency, real-time data synchronization ensuring data consistency across all systems.",
    badge: "Real-time data",
  },
  {
    icon: CheckCircle,
    title: "Proven Methodology",
    description: "Structured approach with minimal downtime, comprehensive testing, and smooth cutover.",
    badge: "Zero downtime",
  },
];

const integrationBenefits = [
  {
    title: "Productivity Gain",
    stat: "45%",
    description: "improvement in operational efficiency",
    icon: <Zap className="h-8 w-8" />,
  },
  {
    title: "Cost Savings",
    stat: "$250K",
    description: "average annual cost reduction",
    icon: <Database className="h-8 w-8" />,
  },
  {
    title: "Time Savings",
    stat: "60%",
    description: "reduction in manual data entry",
    icon: <Settings className="h-8 w-8" />,
  },
  {
    title: "Data Accuracy",
    stat: "98%",
    description: "improvement in data quality",
    icon: <CheckCircle className="h-8 w-8" />,
  },
];

const useCases = [
  {
    title: "E-commerce Integration",
    description: "Connect your online store with inventory management, shipping, payment processing, and marketing platforms.",
    icon: <Boxes className="h-6 w-6" />,
  },
  {
    title: "CRM-ERP Integration",
    description: "Unified customer data flow between sales, marketing, and operations for seamless customer experience.",
    icon: <Network className="h-6 w-6" />,
  },
  {
    title: "Payment Gateway Integration",
    description: "Secure integration with Stripe, PayPal, Square, and other payment processors.",
    icon: <Shield className="h-6 w-6" />,
  },
  {
    title: "Marketing Automation",
    description: "Connect marketing platforms with CRM, analytics, and customer data platforms.",
    icon: <Zap className="h-6 w-6" />,
  },
  {
    title: "Supply Chain Integration",
    description: "Real-time visibility across suppliers, logistics, warehouses, and distribution networks.",
    icon: <Workflow className="h-6 w-6" />,
  },
  {
    title: "Cloud Migration",
    description: "Migrate on-premise applications to cloud with seamless data integration and synchronization.",
    icon: <Cloud className="h-6 w-6" />,
  },
];

const faqs = [
  {
    question: "What types of systems can you integrate?",
    answer: "We integrate virtually any system including ERPs (SAP, Oracle, Microsoft Dynamics), CRMs (Salesforce, HubSpot), databases (SQL, NoSQL), cloud platforms (AWS, Azure, GCP), SaaS applications, legacy systems, and custom applications. Our expertise covers REST APIs, SOAP, GraphQL, webhooks, and file-based integrations.",
  },
  {
    question: "How do you ensure data security during integration?",
    answer: "We implement multiple security layers including encrypted data transmission (TLS/SSL), OAuth 2.0 authentication, API security best practices, data masking for sensitive information, and compliance with GDPR, HIPAA, and other regulations. All integrations undergo security audits before deployment.",
  },
  {
    question: "Can you integrate with legacy systems?",
    answer: "Yes, we specialize in legacy system integration using API wrappers, middleware solutions, and data transformation layers. We can connect mainframes, AS/400, old databases, and custom applications with modern cloud systems without requiring complete system replacement.",
  },
  {
    question: "What is your integration implementation process?",
    answer: "Our process includes: 1) Requirements analysis and system assessment, 2) Integration architecture design, 3) Development and configuration, 4) Testing and validation, 5) Deployment and cutover, 6) Monitoring and support. We follow agile methodology with regular checkpoints and minimal business disruption.",
  },
  {
    question: "Do you provide ongoing support after integration?",
    answer: "Yes, we offer comprehensive support including 24/7 monitoring, performance optimization, troubleshooting, bug fixes, and enhancements. Our support packages include proactive monitoring, regular health checks, and continuous improvement of integration processes.",
  },
];

export default function SystemIntegration() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-light text-white"
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/AI-DataStratergy-banner.png"
            alt="System Integration"
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
              className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-blue-100 to-[#0080FF] bg-clip-text text-transparent">
                System Integration Services
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl"
            >
              Connect your business systems seamlessly with enterprise integration solutions
            </motion.p>

            <div className="mb-32">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0066CC]/20 border border-[#0080FF]/30 rounded-full backdrop-blur-sm"
              >
                <GitBranch className="h-5 w-5 text-cyan-400" />
                <span className="text-white font-medium">
                  Enterprise Integration Excellence
                </span>
                <Award className="h-4 w-4 text-blue-400 fill-current" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Integration Services */}
      <section className="py-20 bg-light relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6 text-white">
              Integration Solutions We Offer
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive system integration services for seamless connectivity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <Link href={capability.link}>
                  <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 h-full hover:border-blue-500/50 hover:bg-gray-800/90 transition-all duration-500 group-hover:scale-105"
                    data-testid={`card-capability-${index}`}
                  >
                    <div className="relative w-16 h-16 mb-6 rounded-xl overflow-hidden">
                      <img
                        src={capability.backgroundImage}
                        alt={capability.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        {capability.icon}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-4">
                      {capability.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed mb-6">
                      {capability.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {capability.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center text-cyan-400 font-medium group-hover:translate-x-2 transition-transform duration-300">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Integration Types */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {integrationTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
                data-testid={`card-type-${index}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    {type.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{type.title}</h3>
                    <p className="text-gray-400 text-sm">{type.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Benefits */}
      <section className="py-20 bg-gradient-to-b from-light to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Integration Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Measurable impact of system integration on your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrationBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 backdrop-blur-sm border border-green-500/30 rounded-xl p-6 text-center"
                data-testid={`card-benefit-${index}`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-4 text-green-400">
                  {benefit.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{benefit.stat}</div>
                <h3 className="text-lg font-semibold text-green-400 mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Platforms */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Integration Platforms & Technologies
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {integrationPlatforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-4 hover:border-blue-500/50 transition-all duration-300"
                data-testid={`card-platform-${index}`}
              >
                <h3 className="text-lg font-bold text-white mb-1">{platform.name}</h3>
                <p className="text-gray-400 text-sm">{platform.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gradient-to-b from-light to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Integration Use Cases
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
                data-testid={`card-usecase-${index}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    {useCase.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{useCase.title}</h3>
                    <p className="text-gray-400 text-sm">{useCase.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose Our Integration Services
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUsItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
                  data-testid={`card-why-choose-${index}`}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div className="mb-3">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-light to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden"
                data-testid={`faq-item-${index}`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-800/50 transition-colors"
                  data-testid={`button-faq-toggle-${index}`}
                >
                  <span className="text-lg font-semibold text-white pr-8">
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Connect Your Systems?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our integration services can streamline your operations
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-6 text-lg"
                data-testid="button-get-started"
              >
                Start Integration Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
