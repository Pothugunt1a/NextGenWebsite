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
    icon: <Search className="h-8 w-8 text-white" />,
    title: "Threat Detection & Triage",
    description:
      "Behavioral ML + LLM summaries across XDR/NDR/Cloud/Identity, mapped to ATT&CK, reduce alert fatigue",
    backgroundImage: "/assets/AI-ProcessOptimization.png",
  },
  {
    icon: <Bot className="h-8 w-8 text-white" />,
    title: "Agentic Incident Response",
    description:
      "Playbooks isolate endpoints, roll back processes, revoke tokens, quarantine SaaS, and open IR tickets with auditable reasoning",
    backgroundImage: "/assets/GenerativeAI.png",
  },
  {
    icon: <Shield className="h-8 w-8 text-white" />,
    title: "AI-Safe Networking & Segmentation",
    description:
      "Continuous verification of east-west traffic, safeguards for model workloads, micro-segmentation in AI data centers",
    backgroundImage: "/assets/AI-Usecase.png",
  },
  {
    icon: <Gauge className="h-8 w-8 text-white" />,
    title: "Exposure Management",
    description:
      "Agentic prioritization ranks vulnerabilities by exploitability & business impact (emerging but fast-maturing)",
    backgroundImage: "/assets/AI-Training.png",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-white" />,
    title: "Governed GenAI Adoption",
    description:
      "NIST AI RMF lifecycle + OWASP LLM Top 10 controls for safe AI deployment",
    backgroundImage: "/assets/AI&Data.png",
  },
  {
    icon: <Activity className="h-8 w-8 text-white" />,
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

              <div className="mb-32">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6, type: "spring" }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0066CC]/20 border border-[#0080FF]/30 rounded-full backdrop-blur-sm"
                >
                  <CheckCircle className="h-5 w-5 text-cyan-400 fill-none" />
                  <span className="text-white font-medium">
                    AI-Augmented Zero-Trust Security & Networking
                  </span>
                  <Award className="h-4 w-4 text-blue-400 fill-current" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Standards We Anchor To */}
      <section className="py-20 bg-light relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6 text-white">
              Standards We Anchor To
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our security and networking solutions are built on industry-leading frameworks and standards
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {standards.map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-blue-500/50 hover:bg-gray-800/80 transition-all duration-500 group"
                data-testid={`card-standard-${index}`}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center mb-4 text-blue-400 group-hover:scale-110 transition-all duration-300">
                  {standard.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {standard.name}
                </h3>
                <p className="text-gray-400 text-sm">{standard.description}</p>
              </motion.div>
            ))}
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
              Core Capabilities
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              What we implement to secure and optimize your infrastructure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
                data-testid={`card-capability-${index}`}
              >
                <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 h-full hover:border-blue-500/50 hover:bg-gray-800/90 transition-all duration-500">
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

                  <p className="text-gray-400 leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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

      {/* FAQs Section */}
      <section className="py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">FAQs</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300">
                Common questions about AI-driven security and networking
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Side - Image */}
              <div className="lg:col-span-5">
                <div className="relative group">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src="/assets/FAQ's.png"
                      alt="AI Security and Networking"
                      className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        AI-Augmented Security
                      </h3>
                      <p className="text-gray-200 text-sm">
                        Transforming security operations through intelligent automation and Zero Trust architecture
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
                      data-testid={`faq-item-${index}`}
                    >
                      <button
                        className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-700/30 transition-colors"
                        onClick={() => toggleFaq(index)}
                        data-testid={`button-faq-toggle-${index}`}
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
                          <p className="text-gray-300 leading-relaxed">
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
