import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ChevronDown,
  ChevronUp,
  Package,
  Settings,
  Headphones,
  Building2,
  Users,
  TrendingUp,
  Zap,
  Shield,
  CheckCircle,
  Award,
  ArrowRight,
  BarChart3,
  Database,
  Workflow,
  Cog,
  Cloud,
  Boxes,
} from "lucide-react";
import { Button } from "../components/ui/button";

const capabilities = [
  {
    icon: <Package className="h-8 w-8 text-white" />,
    title: "ERP Implementation",
    description: "End-to-end ERP implementation services including requirements analysis, system design, data migration, and go-live support for SAP, Oracle, Microsoft Dynamics, and NetSuite.",
    link: "/it-services/erp/implementation",
    technologies: ["SAP S/4HANA", "Oracle ERP Cloud", "Microsoft Dynamics 365", "NetSuite"],
    backgroundImage: "/assets/Data-Governance.png",
  },
  {
    icon: <Settings className="h-8 w-8 text-white" />,
    title: "ERP Customization",
    description: "Tailored ERP solutions with custom modules, workflows, integrations, and extensions to meet your unique business requirements.",
    link: "/it-services/erp/customization",
    technologies: ["Custom Development", "Workflow Design", "Integration", "Extensions"],
    backgroundImage: "/assets/AI&Data.png",
  },
  {
    icon: <Headphones className="h-8 w-8 text-white" />,
    title: "ERP Support & Maintenance",
    description: "24/7 managed ERP support, system optimization, performance tuning, and continuous enhancement services.",
    link: "/it-services/erp/support",
    technologies: ["24/7 Support", "Performance Tuning", "System Updates", "User Training"],
    backgroundImage: "/assets/AI-Training.png",
  },
];

const erpSolutions = [
  {
    icon: <Building2 className="h-6 w-6" />,
    title: "SAP S/4HANA",
    description: "Implementation, migration, and optimization of SAP's intelligent ERP suite for digital transformation.",
  },
  {
    icon: <Cloud className="h-6 w-6" />,
    title: "Oracle ERP Cloud",
    description: "Cloud-based ERP implementation with AI-driven insights and automated business processes.",
  },
  {
    icon: <Boxes className="h-6 w-6" />,
    title: "Microsoft Dynamics 365",
    description: "Unified business applications connecting CRM and ERP for seamless operations.",
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "NetSuite ERP",
    description: "Cloud ERP platform for financials, inventory, CRM, and e-commerce management.",
  },
  {
    icon: <Workflow className="h-6 w-6" />,
    title: "Odoo",
    description: "Open-source ERP with modular applications for all business needs.",
  },
  {
    icon: <Cog className="h-6 w-6" />,
    title: "Custom ERP Solutions",
    description: "Bespoke ERP systems built from scratch to match your exact business processes.",
  },
];

const whyChooseUsItems = [
  {
    icon: Users,
    title: "Certified ERP Consultants",
    description: "Our team includes SAP certified consultants, Oracle experts, and Microsoft Dynamics specialists with 15+ years of experience.",
    badge: "Certified experts",
  },
  {
    icon: Zap,
    title: "Proven Implementation Methodology",
    description: "Structured approach ensuring on-time, on-budget ERP implementations with minimal business disruption.",
    badge: "Proven process",
  },
  {
    icon: Shield,
    title: "Industry Expertise",
    description: "Deep domain knowledge across manufacturing, retail, healthcare, finance, and professional services sectors.",
    badge: "Industry leaders",
  },
  {
    icon: TrendingUp,
    title: "Post-Go-Live Success",
    description: "Comprehensive training, documentation, and support ensuring long-term ERP adoption and ROI.",
    badge: "Long-term partnership",
  },
];

const implementationPhases = [
  {
    phase: "Discovery & Planning",
    description: "Requirements gathering, process mapping, gap analysis, and project roadmap creation.",
    duration: "2-4 weeks",
  },
  {
    phase: "Design & Configuration",
    description: "System design, configuration, customization development, and integration setup.",
    duration: "8-12 weeks",
  },
  {
    phase: "Data Migration",
    description: "Data cleansing, mapping, migration, and validation from legacy systems.",
    duration: "4-6 weeks",
  },
  {
    phase: "Testing & Training",
    description: "UAT, system testing, user training, and documentation preparation.",
    duration: "4-6 weeks",
  },
  {
    phase: "Go-Live & Support",
    description: "Deployment, hypercare support, and continuous optimization.",
    duration: "Ongoing",
  },
];

const benefits = [
  {
    title: "Operational Efficiency",
    stat: "40%",
    description: "Average improvement in process efficiency",
    icon: <Zap className="h-8 w-8" />,
  },
  {
    title: "Cost Reduction",
    stat: "30%",
    description: "Reduction in operational costs",
    icon: <TrendingUp className="h-8 w-8" />,
  },
  {
    title: "Data Accuracy",
    stat: "95%",
    description: "Improvement in data accuracy and real-time visibility",
    icon: <Database className="h-8 w-8" />,
  },
  {
    title: "ROI Timeline",
    stat: "18 mo.",
    description: "Average time to achieve positive ROI",
    icon: <BarChart3 className="h-8 w-8" />,
  },
];

const industries = [
  {
    name: "Manufacturing",
    description: "Production planning, inventory management, supply chain optimization, and quality control.",
  },
  {
    name: "Retail & Distribution",
    description: "Multi-channel retail, warehouse management, demand planning, and point of sale integration.",
  },
  {
    name: "Healthcare",
    description: "Patient management, billing, compliance, supply chain, and regulatory reporting.",
  },
  {
    name: "Financial Services",
    description: "Financial accounting, regulatory compliance, risk management, and audit trail.",
  },
  {
    name: "Professional Services",
    description: "Project management, resource planning, time tracking, and client billing.",
  },
  {
    name: "Logistics",
    description: "Fleet management, route optimization, warehouse operations, and shipment tracking.",
  },
];

const faqs = [
  {
    question: "Which ERP system is best for my business?",
    answer: "The choice depends on your industry, company size, budget, and specific requirements. SAP S/4HANA is ideal for large enterprises, Oracle ERP Cloud for mid to large organizations, Microsoft Dynamics 365 for small to mid-sized businesses, and NetSuite for growing companies. We conduct a thorough assessment to recommend the best fit for your needs.",
  },
  {
    question: "How long does ERP implementation typically take?",
    answer: "Implementation timelines vary based on scope and complexity. Small implementations take 3-6 months, medium 6-12 months, and large enterprise deployments 12-24 months. We provide detailed project plans with realistic timelines during the planning phase.",
  },
  {
    question: "Can you migrate data from our legacy system?",
    answer: "Yes, we specialize in data migration from legacy systems, spreadsheets, and other ERPs. Our process includes data cleansing, mapping, transformation, validation, and quality assurance to ensure accurate migration.",
  },
  {
    question: "Do you provide ERP customization services?",
    answer: "Absolutely. We provide custom development for workflows, reports, dashboards, integrations, and extensions. We balance standard functionality with necessary customizations to meet your specific business needs while maintaining upgradability.",
  },
  {
    question: "What post-implementation support do you offer?",
    answer: "We provide comprehensive support including 24/7 help desk, system monitoring, performance optimization, user training, bug fixes, enhancements, and regular system updates. Our support packages are tailored to your specific needs.",
  },
];

export default function ERPServices() {
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
            src="/assets/Data-Governance.png"
            alt="ERP Services"
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
                Enterprise ERP Solutions
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl"
            >
              Transform your business operations with comprehensive ERP implementation, customization, and support services
            </motion.p>

            <div className="mb-32">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0066CC]/20 border border-[#0080FF]/30 rounded-full backdrop-blur-sm"
              >
                <Package className="h-5 w-5 text-cyan-400" />
                <span className="text-white font-medium">
                  Certified ERP Implementation Partners
                </span>
                <Award className="h-4 w-4 text-blue-400 fill-current" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Services */}
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
              ERP Services We Offer
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              End-to-end ERP solutions tailored to your business needs
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

          {/* ERP Platforms */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {erpSolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
                data-testid={`card-solution-${index}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    {solution.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{solution.title}</h3>
                    <p className="text-gray-400 text-sm">{solution.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-gradient-to-b from-light to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Implementation Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Structured methodology ensuring successful ERP deployment
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {implementationPhases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
                data-testid={`card-phase-${index}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">{phase.phase}</h3>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                        {phase.duration}
                      </span>
                    </div>
                    <p className="text-gray-400">{phase.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              ERP Implementation Benefits
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
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

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-b from-light to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose Our ERP Services
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

      {/* Industries */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Industries We Serve
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
                data-testid={`card-industry-${index}`}
              >
                <h3 className="text-lg font-bold text-white mb-2">{industry.name}</h3>
                <p className="text-gray-400 text-sm">{industry.description}</p>
              </motion.div>
            ))}
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
              Ready to Transform Your Business with ERP?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our ERP solutions can streamline your operations and drive growth
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-6 text-lg"
                data-testid="button-get-started"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
