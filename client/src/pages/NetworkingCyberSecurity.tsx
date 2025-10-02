import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ChevronDown,
  ChevronUp,
  Shield,
  Network,
  Lock,
  Eye,
  Server,
  Cloud,
  AlertTriangle,
  CheckCircle,
  Wifi,
  Database,
  FileText,
  Users,
  Zap,
  Award,
  ArrowRight,
  ShieldCheck,
  Bug,
  Key,
  Activity,
} from "lucide-react";
import { Button } from "../components/ui/button";

const capabilities = [
  {
    icon: <Network className="h-8 w-8 text-white" />,
    title: "Network Infrastructure",
    description: "Design, implementation, and optimization of robust network architectures including LAN/WAN, SD-WAN, and hybrid cloud networks.",
    link: "/it-services/networking/network-infrastructure",
    technologies: ["Cisco", "Juniper", "SD-WAN", "Network Automation"],
    backgroundImage: "/assets/Data-Governance.png",
  },
  {
    icon: <Shield className="h-8 w-8 text-white" />,
    title: "Cybersecurity Solutions",
    description: "Comprehensive security solutions including firewalls, intrusion detection, threat intelligence, and zero-trust architecture.",
    link: "/it-services/networking/cybersecurity-solutions",
    technologies: ["SIEM", "IDS/IPS", "Zero Trust", "Threat Intelligence"],
    backgroundImage: "/assets/AI-Training.png",
  },
  {
    icon: <FileText className="h-8 w-8 text-white" />,
    title: "Security Audits & Compliance",
    description: "Thorough security assessments, penetration testing, vulnerability scanning, and compliance audits for regulatory requirements.",
    link: "/it-services/networking/security-audits",
    technologies: ["Penetration Testing", "GDPR", "HIPAA", "ISO 27001"],
    backgroundImage: "/assets/AI&Data.png",
  },
];

const securityServices = [
  {
    icon: <Lock className="h-6 w-6" />,
    title: "Endpoint Security",
    description: "Advanced endpoint protection, EDR solutions, and device management to secure all organizational devices.",
  },
  {
    icon: <Eye className="h-6 w-6" />,
    title: "Security Monitoring",
    description: "24/7 security operations center (SOC) services with real-time threat monitoring and incident response.",
  },
  {
    icon: <Key className="h-6 w-6" />,
    title: "Identity & Access Management",
    description: "IAM solutions including MFA, SSO, privileged access management, and identity governance.",
  },
  {
    icon: <Cloud className="h-6 w-6" />,
    title: "Cloud Security",
    description: "Secure cloud architectures, CSPM, CWPP, and multi-cloud security posture management.",
  },
  {
    icon: <Bug className="h-6 w-6" />,
    title: "Vulnerability Management",
    description: "Continuous vulnerability assessment, patch management, and security hardening services.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Compliance Management",
    description: "Regulatory compliance frameworks for GDPR, HIPAA, PCI-DSS, SOC 2, and ISO 27001.",
  },
];

const whyChooseUsItems = [
  {
    icon: Shield,
    title: "Certified Security Experts",
    description: "Our team holds certifications including CISSP, CISM, CEH, OSCP, and cloud security specializations.",
    badge: "Industry certified",
  },
  {
    icon: Activity,
    title: "24/7 Threat Monitoring",
    description: "Round-the-clock security monitoring with advanced threat detection and rapid incident response capabilities.",
    badge: "Always protected",
  },
  {
    icon: CheckCircle,
    title: "Compliance Ready",
    description: "Expertise in regulatory compliance across healthcare, finance, and enterprise sectors worldwide.",
    badge: "Regulatory expertise",
  },
  {
    icon: Zap,
    title: "Proven Track Record",
    description: "Successfully protected 500+ organizations with 99.9% threat detection rate and zero-day protection.",
    badge: "Battle tested",
  },
];

const threatLandscape = [
  {
    threat: "Ransomware Attacks",
    stat: "68%",
    description: "increase in ransomware attacks targeting enterprises",
    icon: <AlertTriangle className="h-8 w-8" />,
  },
  {
    threat: "Data Breaches",
    stat: "$4.45M",
    description: "average cost of a data breach in 2023",
    icon: <Database className="h-8 w-8" />,
  },
  {
    threat: "Phishing",
    stat: "91%",
    description: "of cyberattacks begin with a phishing email",
    icon: <Eye className="h-8 w-8" />,
  },
  {
    threat: "Cloud Vulnerabilities",
    stat: "80%",
    description: "of organizations experienced a cloud security incident",
    icon: <Cloud className="h-8 w-8" />,
  },
];

const industries = [
  {
    name: "Financial Services",
    description: "Bank-grade security, fraud prevention, secure payment systems, and regulatory compliance.",
  },
  {
    name: "Healthcare",
    description: "HIPAA compliance, patient data protection, medical device security, and healthcare system integration.",
  },
  {
    name: "Government",
    description: "Classified network security, compliance with government standards, and critical infrastructure protection.",
  },
  {
    name: "Retail & E-commerce",
    description: "PCI-DSS compliance, secure payment processing, customer data protection, and fraud detection.",
  },
  {
    name: "Manufacturing",
    description: "OT security, industrial control systems protection, supply chain security, and IP protection.",
  },
  {
    name: "Technology",
    description: "SaaS security, DevSecOps, API security, and protection of intellectual property.",
  },
];

const faqs = [
  {
    question: "What cybersecurity services do you provide?",
    answer: "We offer comprehensive cybersecurity services including network security, endpoint protection, security monitoring (SOC), penetration testing, vulnerability assessments, incident response, security awareness training, and compliance management for regulations like GDPR, HIPAA, and PCI-DSS.",
  },
  {
    question: "How quickly can you respond to a security incident?",
    answer: "Our SOC team provides 24/7 monitoring with typical incident response times of under 15 minutes for critical threats. We have dedicated incident response teams ready to contain, investigate, and remediate security incidents immediately.",
  },
  {
    question: "Do you provide managed security services?",
    answer: "Yes, we offer fully managed security services including SOC as a Service, managed firewall, managed SIEM, vulnerability management, and compliance monitoring. Our managed services provide enterprise-grade security without the need for in-house security teams.",
  },
  {
    question: "How do you ensure network reliability and uptime?",
    answer: "We design redundant network architectures with failover capabilities, implement proactive monitoring, and provide 24/7 network operations support. Our solutions typically achieve 99.99% uptime with comprehensive disaster recovery plans.",
  },
  {
    question: "Can you help with compliance certifications?",
    answer: "Absolutely. We have extensive experience helping organizations achieve and maintain compliance with standards including ISO 27001, SOC 2, PCI-DSS, HIPAA, GDPR, and NIST frameworks. We provide gap assessments, remediation support, and ongoing compliance monitoring.",
  },
];

export default function NetworkingCyberSecurity() {
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
            src="/assets/AI-Training.png"
            alt="Networking & Cyber Security"
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
                Networking & Cyber Security
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl"
            >
              Secure your digital infrastructure with enterprise-grade networking and comprehensive cybersecurity solutions
            </motion.p>

            <div className="mb-32">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0066CC]/20 border border-[#0080FF]/30 rounded-full backdrop-blur-sm"
              >
                <Shield className="h-5 w-5 text-cyan-400" />
                <span className="text-white font-medium">
                  Enterprise Network & Security Excellence
                </span>
                <Award className="h-4 w-4 text-blue-400 fill-current" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Capabilities */}
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
              Core Security & Networking Services
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions to protect and optimize your digital infrastructure
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

          {/* Additional Security Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {securityServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
                data-testid={`card-service-${index}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-400 text-sm">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Landscape */}
      <section className="py-20 bg-gradient-to-b from-light to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Today's Threat Landscape
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Understanding the critical security challenges facing organizations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {threatLandscape.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-red-900/20 to-orange-900/20 backdrop-blur-sm border border-red-500/30 rounded-xl p-6 text-center"
                data-testid={`card-threat-${index}`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-full mb-4 text-red-400">
                  {item.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{item.stat}</div>
                <h3 className="text-lg font-semibold text-red-400 mb-2">{item.threat}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
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
              Why Choose Our Security Services
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
      <section className="py-20 bg-gradient-to-b from-light to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Industries We Protect
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
      <section className="py-20 bg-light">
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
              Secure Your Infrastructure Today
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can protect your organization with enterprise-grade security
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-6 text-lg"
                data-testid="button-get-started"
              >
                Schedule Security Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
