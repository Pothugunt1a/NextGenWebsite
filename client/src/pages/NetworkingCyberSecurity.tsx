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
  Brain,
  Target,
  Cpu,
  Workflow,
  Search,
  Bot,
  Gauge,
  Clock,
} from "lucide-react";
import { Button } from "../components/ui/button";

const standards = [
  {
    name: "NIST CSF 2.0",
    description: "Cybersecurity Framework for risk management",
    icon: <Shield className="h-6 w-6" />,
  },
  {
    name: "NIST SP 800-207",
    description: "Zero Trust Architecture guidelines",
    icon: <Lock className="h-6 w-6" />,
  },
  {
    name: "NIST AI RMF",
    description: "AI Risk Management Framework",
    icon: <Brain className="h-6 w-6" />,
  },
  {
    name: "MITRE ATT&CK",
    description: "Adversary tactics and techniques knowledge base",
    icon: <Target className="h-6 w-6" />,
  },
  {
    name: "OWASP Top 10",
    description: "Web application security risks (including LLM Apps)",
    icon: <AlertTriangle className="h-6 w-6" />,
  },
  {
    name: "CIS Controls v8.1",
    description: "Critical security controls",
    icon: <ShieldCheck className="h-6 w-6" />,
  },
  {
    name: "PCI DSS v4.0",
    description: "Payment card industry data security standard",
    icon: <Key className="h-6 w-6" />,
  },
  {
    name: "SLSA",
    description: "Supply chain levels for software artifacts",
    icon: <Workflow className="h-6 w-6" />,
  },
];

const aiDrivenSecurity = [
  {
    title: "AI for Security (SecOps/XDR/SIEM/SOAR)",
    description:
      "LLMs and behavioral ML summarize alerts, generate investigations, and automate responses with playbooks & agents",
    platforms: [
      "Microsoft Copilot for Security (GA Apr 1, 2024)",
      "CrowdStrike Charlotte AI & Agentic SOC (2025)",
      "SentinelOne Purple AI (agentic triage/investigation)",
      "Palo Alto Precision AI",
      "Google Sec-Gemini (experimental)",
    ],
    icon: <Brain className="h-8 w-8 text-white" />,
    backgroundImage: "/assets/AI-Training.png",
  },
  {
    title: "AI for Networking (AIOps/NDR/SASE/SSE)",
    description:
      "ML baselines traffic, detects anomalies, recommends policies, and enforces micro-segmentation in AI-scale data centers (e.g., Cisco Hypershield)",
    platforms: [
      "Network anomaly detection",
      "Automated policy recommendations",
      "Micro-segmentation enforcement",
      "AI-scale data center protection",
    ],
    icon: <Network className="h-8 w-8 text-white" />,
    backgroundImage: "/assets/Data-Governance.png",
  },
  {
    title: "Zero Trust Control Fabric",
    description:
      "Identity-first access, continuous verification, least privilege, and data-centric policy across users, devices, apps, and networks",
    platforms: [
      "Identity-first access control",
      "Continuous verification",
      "Least privilege enforcement",
      "Data-centric policies",
    ],
    icon: <Lock className="h-8 w-8 text-white" />,
    backgroundImage: "/assets/AI&Data.png",
  },
];

const coreCapabilities = [
  {
    icon: Search,
    title: "Threat Detection & Triage",
    description:
      "Behavioral ML + LLM summaries across XDR/NDR/Cloud/Identity, mapped to ATT&CK, reduce alert fatigue",
    backgroundImage: "/assets/AI-ProcessOptimization.png",
  },
  {
    icon: Bot,
    title: "Agentic Incident Response",
    description:
      "Playbooks isolate endpoints, roll back processes, revoke tokens, quarantine SaaS, and open IR tickets with auditable reasoning",
    backgroundImage: "/assets/GenerativeAI.png",
  },
  {
    icon: Shield,
    title: "AI-Safe Networking & Segmentation",
    description:
      "Continuous verification of east-west traffic, safeguards for model workloads, micro-segmentation in AI data centers",
    backgroundImage: "/assets/AI-Usecase.png",
  },
  {
    icon: Gauge,
    title: "Exposure Management",
    description:
      "Agentic prioritization ranks vulnerabilities by exploitability & business impact (emerging but fast-maturing)",
    backgroundImage: "/assets/AI-Training.png",
  },
  {
    icon: ShieldCheck,
    title: "Governed GenAI Adoption",
    description:
      "NIST AI RMF lifecycle + OWASP LLM Top 10 controls for safe AI deployment",
    backgroundImage: "/assets/AI&Data.png",
  },
  {
    icon: Activity,
    title: "Adversary-Informed Defense",
    description:
      "Map detections & responses to MITRE ATT&CK so AI output aligns to real attacker TTPs",
    backgroundImage: "/assets/Data-Governance.png",
  },
];

const platforms = [
  {
    name: "Microsoft Copilot for Security",
    status: "GA Apr 1, 2024",
    details: "Integrated with Defender, Sentinel, Entra; consumption pricing",
    icon: <Cpu className="h-6 w-6" />,
  },
  {
    name: "CrowdStrike Charlotte AI",
    status: "Agentic SOC - Fall 2025",
    details: "Mission-ready agents for automated security operations",
    icon: <Bot className="h-6 w-6" />,
  },
  {
    name: "SentinelOne Purple AI",
    status: "Available",
    details: "Agentic triage/investigation; Athena release; FedRAMP-High milestones",
    icon: <Brain className="h-6 w-6" />,
  },
  {
    name: "Palo Alto Precision AI",
    status: "Available",
    details: "AI Access Security, AI-SPM, AI Runtime Security",
    icon: <Shield className="h-6 w-6" />,
  },
];

const benefits = [
  {
    icon: <Target className="h-6 w-6" />,
    title: "AI-Augmented Defense",
    description: "Compress triage from hours to minutes with intelligent automation",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Expert Implementation",
    description: "Industry-certified security professionals (CISSP, CISM, CEH)",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "24/7 Monitoring",
    description: "Round-the-clock threat detection and incident response",
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Standards Compliance",
    description: "Full adherence to NIST, MITRE, OWASP, and CIS frameworks",
  },
];

const faqs = [
  {
    question: "What is AI-driven security and how does it differ from traditional security?",
    answer:
      "AI-driven security uses large language models (LLMs) and machine learning to automatically summarize alerts, correlate threats across multiple systems, and execute responses through intelligent agents. Unlike traditional security that requires manual triage, AI-driven solutions compress incident response times from hours to minutes by automating investigation workflows and mapping threats to MITRE ATT&CK tactics.",
  },
  {
    question: "How do you ensure AI security tools are safe and don't introduce new risks?",
    answer:
      "We implement the NIST AI Risk Management Framework (RMF) with four core functions: Govern, Map, Measure, and Manage. We also apply OWASP Top 10 for LLM Apps controls to address prompt injection, model DoS, data poisoning, supply chain risks, and excessive agency. All AI outputs are mapped to adversary-informed defense frameworks like MITRE ATT&CK for validation.",
  },
  {
    question: "What platforms do you work with for AI-augmented security?",
    answer:
      "We implement and integrate leading AI security platforms including Microsoft Copilot for Security, CrowdStrike Charlotte AI (Agentic SOC), SentinelOne Purple AI, Palo Alto Precision AI, and Google Sec-Gemini. Each platform is selected based on your specific environment, compliance requirements, and security maturity level.",
  },
  {
    question: "How does Zero Trust work with AI-driven security?",
    answer:
      "Zero Trust provides the control fabric for AI-augmented security through identity-first access, continuous verification, least privilege, and data-centric policies. AI enhances Zero Trust by automatically baselining normal behavior, detecting anomalies, enforcing micro-segmentation, and continuously verifying trust across users, devices, apps, and networks.",
  },
  {
    question: "Can you help with compliance frameworks like NIST, PCI-DSS, and HIPAA?",
    answer:
      "Yes, we specialize in implementing security controls that align with NIST CSF 2.0, PCI DSS v4.0, HIPAA, GDPR, CIS Controls v8.1, and other regulatory frameworks. Our AI-driven security solutions include automated compliance monitoring, audit trail generation, and continuous control validation mapped to your specific requirements.",
  },
  {
    question: "What is the Agentic SOC and when will it be available?",
    answer:
      "The Agentic SOC is CrowdStrike's next-generation security operations center powered by Charlotte AI, scheduled for Fall 2025. It features mission-ready agents that autonomously investigate threats, execute response playbooks, and provide explainable AI outputs. We're preparing early adoption strategies for customers who want to be among the first to leverage agentic security operations.",
  },
];

// Industry data for the interactive section
const industryData = [
  {
    id: "financial",
    name: "Financial Services",
    image: "/assets/Finance.png",
    content:
      "Financial institutions face constant cyber threats targeting sensitive customer data and transaction systems. Our solutions include advanced threat detection, DDoS protection, secure payment gateways, real-time fraud monitoring, and compliance with PCI DSS and banking regulations. We implement multi-layered security architectures with encrypted data transmission and secure API gateways.",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    image: "/assets/Healthcare.png",
    content:
      "Healthcare organizations require robust security to protect patient data and ensure HIPAA compliance. Our solutions include secure medical IoT device management, encrypted patient data storage, access control systems, secure telemedicine platforms, and comprehensive audit logging. We ensure healthcare systems remain operational while maintaining the highest security standards.",
  },
  {
    id: "retail",
    name: "Retail & E-commerce",
    image: "/assets/Ecommerce&Retail.png",
    content:
      "Retail businesses need secure networks to protect customer payment information and maintain business continuity. We provide point-of-sale security, secure payment processing, DDoS protection for e-commerce platforms, inventory management system security, and multi-location network management with centralized monitoring and control.",
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    image: "/assets/Manufacturing&Automation.png",
    content:
      "Manufacturing facilities require industrial IoT security, operational technology (OT) network protection, and secure supply chain connectivity. Our solutions include network segmentation for production systems, secure remote monitoring, protection against industrial espionage, and ensuring operational continuity with minimal downtime through redundant network architectures.",
  },
  {
    id: "government",
    name: "Government",
    image: "/assets/Government&PublicSector.png",
    content:
      "Government agencies need the highest levels of security to protect sensitive information and critical infrastructure. We provide FISMA-compliant solutions, classified information protection, secure inter-agency communication networks, citizen data protection, and defense against nation-state cyber threats with advanced threat intelligence and monitoring.",
  },
  {
    id: "education",
    name: "Education",
    image: "/assets/Education.png",
    content:
      "Educational institutions require secure networks for students, faculty, and research data. Our solutions include campus-wide secure Wi-Fi, student data protection under FERPA, research network security, protection against ransomware targeting educational systems, and secure online learning platforms with scalable infrastructure to support remote education.",
  },
];

export default function NetworkingCyberSecurity() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState(industryData[0]);

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
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/AI-Training.png"
            alt="Networking, Cybersecurity & Modern Engineering"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40"></div>

        <div className="relative flex items-center h-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-left">
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
                  Networking, Cybersecurity & Modern Engineering
                </span>
              </motion.h1>

              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl"
              >
                Modern networks are hybrid, identity-centric, and relentlessly targeted. AI—especially agentic systems and generative AI—now augments SecOps, NetOps, and ITOps to compress triage from hours to minutes, auto-correlate telemetry across endpoints, identities, cloud and network, and enforce Zero Trust at scale.
              </motion.p>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0066CC]/20 border border-[#0080FF]/30 rounded-full backdrop-blur-sm mb-32"
              >
                <CheckCircle className="h-5 w-5 text-cyan-400 fill-none" />
                <span className="text-white font-medium">
                  AI-Augmented Zero-Trust Security & Networking
                </span>
                <Award className="h-4 w-4 text-blue-400 fill-current" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Secure Infrastructure Section - Life Science Style CTA */}
      <section className="py-16 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10" />
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"
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
                AI-Powered Cybersecurity Solutions
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
                Secure Your Infrastructure with
              </span>
              <br />
              <span className="text-white">AI-Powered Protection</span>
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Partner with us to transform your network infrastructure and
              cybersecurity posture with cutting-edge technology and expert
              guidance
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
                  24/7 Threat Monitoring
                </span>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <CheckCircle className="h-6 w-6 text-white bg-primary rounded-full p-1" />
                <span className="text-white font-semibold">
                  Zero Trust Architecture
                </span>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <CheckCircle className="h-6 w-6 text-white bg-primary rounded-full p-1" />
                <span className="text-white font-semibold">
                  Compliance Assured
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex justify-center"
            >
              <Link to="/contact">
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-10 py-6 text-lg font-semibold shadow-2xl shadow-blue-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
                >
                  <Users className="mr-2 h-5 w-5" />
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Standards We Anchor To - Auto-scrolling Carousel */}
      <section className="py-16 bg-light text-white relative overflow-hidden">
        {/* Background gradient effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Standards We Anchor To
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We align our solutions with industry-leading security standards and
              compliance frameworks
            </p>
          </div>

          {/* Auto-scrolling container */}
          <div className="relative">
            {/* Gradient overlays for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-light to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-light to-transparent z-10 pointer-events-none"></div>

            {/* Scrolling wrapper */}
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-8"
                animate={{
                  x: [0, -2000],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                  },
                }}
              >
                {/* First set of standards */}
                {standards.map((standard, index) => (
                  <div
                    key={`first-${index}`}
                    className="flex-shrink-0 w-80 group"
                  >
                    <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-cyan-400/40 transition-all duration-300 h-full shadow-lg hover:shadow-cyan-500/20">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Shield className="h-6 w-6 text-cyan-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                            {standard.name}
                          </h3>
                        </div>
                      </div>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {standard.description}
                      </p>
                    </div>
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {standards.map((standard, index) => (
                  <div
                    key={`second-${index}`}
                    className="flex-shrink-0 w-80 group"
                  >
                    <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-cyan-400/40 transition-all duration-300 h-full shadow-lg hover:shadow-cyan-500/20">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Shield className="h-6 w-6 text-cyan-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                            {standard.name}
                          </h3>
                        </div>
                      </div>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {standard.description}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* What AI-Driven Security Means */}
      <section className="py-20 bg-gradient-to-b from-light to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6 text-white">
              What AI-Driven Security & Networking Means
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Safe adoption pairs AI with NIST AI RMF governance, adversary-informed defense (MITRE ATT&CK), and GenAI-specific controls
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aiDrivenSecurity.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
                data-testid={`card-ai-security-${index}`}
              >
                <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 h-full hover:border-cyan-500/50 hover:bg-gray-800/90 transition-all duration-500 group-hover:scale-105">
                  <div className="relative w-16 h-16 mb-6 rounded-xl overflow-hidden">
                    <img
                      src={item.backgroundImage}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="space-y-2">
                    {item.platforms.map((platform, pIndex) => (
                      <div
                        key={pIndex}
                        className="flex items-start gap-2 text-sm text-gray-400"
                      >
                        <CheckCircle className="h-4 w-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{platform}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities - AI Consulting Life Science Style */}
      <div className="py-20 bg-light relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 border border-blue-500 rotate-45"></div>
          <div className="absolute top-32 right-20 w-24 h-24 border border-cyan-500 rotate-12"></div>
          <div className="absolute bottom-20 left-32 w-40 h-40 border border-blue-400 rotate-45"></div>
          <div className="absolute bottom-32 right-40 w-28 h-28 border border-cyan-400 rotate-12"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6 text-white">
              Core Capabilities
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive security and network engineering solutions
            </p>
          </motion.div>

          {/* 2x2 Grid Layout with Central Image */}
          <div className="max-w-8xl mx-auto relative">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

              {/* Top Row - First 2 capabilities */}
              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {coreCapabilities.slice(0, 2).map((capability, index) => {
                  const IconComponent = capability.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index === 0 ? -100 : 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className="group cursor-pointer h-full"
                    >
                      <div className="flex items-center gap-6 p-6 bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-blue-500/50 hover:bg-gray-800/80 transition-all duration-500 group-hover:translate-x-2 h-full">
                        <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                          <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                            <IconComponent className="h-12 w-12 text-cyan-400" />
                          </div>
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                              {String(index + 1).padStart(2, '0')}
                            </div>
                          </div>
                          <h4 className="text-lg font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                            {capability.title}
                          </h4>
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {capability.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Second Row - Central Image with 3rd capability */}
              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Central Image */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, type: "spring" }}
                  className="relative group"
                >
                  <div className="relative h-96 w-full bg-gradient-to-br from-blue-600 to-cyan-600 rounded-[3rem] overflow-hidden shadow-2xl group-hover:shadow-blue-500/30 transition-all duration-700">
                    <div className="absolute inset-0">
                      <img
                        src="/assets/NetworkingSecurity.png"
                        alt="Network Security Solutions"
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/assets/AI&Data.png";
                        }}
                      />
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute top-8 right-8 flex flex-col gap-4">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                        <Shield className="h-8 w-8 text-white" />
                      </div>
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                        Sec
                      </div>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="mb-4">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                          <span className="text-blue-200 text-sm font-medium">
                            Security Hub
                          </span>
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-3 leading-tight">
                          Network Security Excellence
                        </h3>
                        <p className="text-blue-100 leading-relaxed mb-6">
                          Comprehensive cybersecurity and network engineering solutions for modern enterprises.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* 3rd capability */}
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="group cursor-pointer h-full"
                >
                  <div className="flex items-center gap-6 p-6 bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-blue-500/50 hover:bg-gray-800/80 transition-all duration-500 group-hover:translate-x-2 h-full">
                    <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                      <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <Shield className="h-12 w-12 text-cyan-400" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          03
                        </div>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {coreCapabilities[2].title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {coreCapabilities[2].description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Third Row - Last 3 capabilities */}
              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
                {coreCapabilities.slice(3, 6).map((capability, index) => {
                  const IconComponent = capability.icon;
                  return (
                    <motion.div
                      key={index + 3}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className="group cursor-pointer h-full"
                    >
                      <div className="flex flex-col items-center gap-4 p-6 bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-blue-500/50 hover:bg-gray-800/80 transition-all duration-500 group-hover:translate-y-2 h-full">
                        <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                          <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                            <IconComponent className="h-10 w-10 text-cyan-400" />
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center gap-3 mb-2">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                              {String(index + 4).padStart(2, '0')}
                            </div>
                          </div>
                          <h4 className="text-lg font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                            {capability.title}
                          </h4>
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {capability.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none">
              <svg className="w-full h-full opacity-10">
                <defs>
                  <linearGradient
                    id="flowGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="50%" stopColor="#06B6D4" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,200 Q300,100 600,200 T1200,200"
                  stroke="url(#flowGradient)"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="10,5"
                  opacity="0.6"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    values="0;15"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Current Landscape: Platforms */}
      <section className="py-20 bg-gradient-to-b from-light to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 text-white">
              Current Landscape: Platforms & Capabilities
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leading AI-augmented security platforms we implement and integrate
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-500"
                data-testid={`card-platform-${index}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    {platform.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {platform.name}
                    </h3>
                    <div className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium mb-3">
                      {platform.status}
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {platform.details}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 text-white">
              Why Choose Us
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center group"
                data-testid={`card-benefit-${index}`}
              >
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-400 group-hover:scale-110 transition-all duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section - AI Consulting Style */}
      <section className="py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300">
                Common questions about our networking and cybersecurity services
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Side - Security Image */}
              <div className="lg:col-span-5">
                <div className="relative group">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src="/assets/NetworkingSecurity.png"
                      alt="Network Security and Cybersecurity Solutions"
                      className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/assets/AI&Data.png";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Enterprise Network Security
                      </h3>
                      <p className="text-gray-200 text-sm">
                        Protecting your digital infrastructure with advanced threat detection and AI-powered defense
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

      {/* Industry Use Cases - AI Consulting Style Interactive */}
      <section className="py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Industry Use Cases
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300">
                Tailored networking and cybersecurity solutions across industries
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Navigation */}
              <div className="lg:col-span-4">
                <div className="grid grid-cols-1 gap-4">
                  {industryData.map((industry) => (
                    <Button
                      key={industry.id}
                      variant={
                        selectedIndustry.id === industry.id
                          ? "default"
                          : "outline"
                      }
                      className={`text-center justify-center p-4 h-auto min-h-[60px] transition-all duration-300 ${
                        selectedIndustry.id === industry.id
                          ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-none shadow-lg"
                          : "bg-slate-800/50 border-slate-600 text-white hover:bg-slate-700/70 hover:border-blue-400/40 hover:text-white"
                      }`}
                      onClick={() => {
                        setSelectedIndustry(industry);
                      }}
                    >
                      <span className="font-semibold text-sm leading-tight text-center whitespace-normal">
                        {industry.name}
                      </span>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Right Content Display */}
              <div className="lg:col-span-8">
                <motion.div
                  key={selectedIndustry.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-cyan-400/20 rounded-xl overflow-hidden"
                >
                  {/* Industry Image */}
                  <div className="relative h-64 overflow-hidden group cursor-pointer">
                    <img
                      src={selectedIndustry.image}
                      alt={selectedIndustry.name}
                      className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/assets/NetworkingSecurity.png";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent group-hover:from-gray-900/60 transition-all duration-300"></div>
                    <div className="absolute bottom-4 left-6">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {selectedIndustry.name}
                      </h3>
                    </div>
                  </div>

                  {/* Industry Content */}
                  <div className="p-6">
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {selectedIndustry.content}
                    </p>
                  </div>
                </motion.div>
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
                AI-Augmented Security Experts
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
                Ready to Secure Your
              </span>
              <br />
              <span className="text-white">Infrastructure with AI?</span>
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Let's discuss how our AI-augmented security and networking solutions can protect your organization while accelerating your digital transformation
            </motion.p>

            {/* Benefits Grid */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            >
              {[
                "Zero Trust Architecture",
                "NIST AI RMF Compliant",
                "24/7 Agentic SOC",
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm"
                >
                  <CheckCircle className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-white font-medium">{benefit}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-12 py-6 text-lg rounded-full shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 group"
                  data-testid="button-get-started"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}