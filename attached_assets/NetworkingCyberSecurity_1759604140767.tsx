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
  Workflow,
  FileCheck,
  Globe,
  Boxes,
  GitBranch,
  Smartphone,
  Code,
  CreditCard,
} from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import {
  SiAmazon,
  SiGooglecloud,
  SiKubernetes,
  SiDocker,
  SiRedhat,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiApachespark,
  SiApachekafka,
  SiApacheairflow,
  SiDatabricks,
  SiPrometheus,
  SiGrafana,
  SiElasticsearch,
  SiDatadog,
  SiVault,
} from "react-icons/si";

interface FAQ {
  question: string;
  answer: string;
}

const coreCapabilities = [
  {
    icon: <Shield className="h-8 w-8 text-white" />,
    title: "🔒 Threat Detection & Triage",
    description:
      "Behavioral ML + LLM summaries across XDR/NDR/Cloud/Identity, mapped to MITRE ATT&CK, reduce alert fatigue. AI-powered correlation compresses triage from hours to minutes with auto-investigation.",
    backgroundImage: "/assets/AI-Training.png",
    features: [
      "AI-driven alert correlation",
      "MITRE ATT&CK mapping",
      "Automated incident investigation",
    ],
  },
  {
    icon: <Workflow className="h-8 w-8 text-white" />,
    title: "🤖 Agentic Incident Response",
    description:
      "Playbooks isolate endpoints, roll back processes, revoke tokens, quarantine SaaS, and open IR tickets with auditable reasoning. Automated response with human-in-the-loop governance.",
    backgroundImage: "/assets/Data-Governance.png",
    features: [
      "Automated playbook execution",
      "Endpoint isolation & rollback",
      "Human-in-the-loop governance",
    ],
  },
  {
    icon: <Network className="h-8 w-8 text-white" />,
    title: "🌐 AI-Safe Networking & Segmentation",
    description:
      "Continuous verification of east-west traffic, safeguards for model workloads, micro-segmentation in AI data centers. Zero Trust architecture with identity-centric access controls.",
    backgroundImage: "/assets/AI&Data.png",
    features: [
      "Zero Trust networking",
      "Micro-segmentation for AI workloads",
      "Identity-centric access controls",
    ],
  },
  {
    icon: <Target className="h-8 w-8 text-white" />,
    title: "🎯 Exposure Management",
    description:
      "Agentic prioritization ranks vulnerabilities by exploitability & business impact. Real-time risk scoring with automated remediation workflows and continuous posture management.",
    backgroundImage: "/assets/AI-ProcessOptimization.png",
    features: [
      "AI-powered vulnerability prioritization",
      "Real-time risk scoring",
      "Automated remediation workflows",
    ],
  },
  {
    icon: <Brain className="h-8 w-8 text-white" />,
    title: "🧠 Governed GenAI Adoption",
    description:
      "NIST AI RMF lifecycle + OWASP LLM Top 10 controls. Secure deployment of AI copilots with guardrails against prompt injection, model DoS, data poisoning, and excessive agency.",
    backgroundImage: "/assets/GenerativeAI.png",
    features: [
      "NIST AI RMF compliance",
      "OWASP LLM Top 10 controls",
      "Guardrails for GenAI models",
    ],
  },
];

const crossPracticeServices = [
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Web Development Security",
    description: "OWASP Top 10, ASVS 4.0.3/5.0, API Top 10, NIST SSDF tasks, WAF + RASP, secrets management.",
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Mobile Development Security",
    description: "OWASP Mobile Top 10 (2024), secure keystores, attestation, signing integrity, tamper detection.",
  },
  {
    icon: <GitBranch className="h-6 w-6" />,
    title: "DevOps & Supply-Chain Security",
    description: "NIST SSDF, SLSA provenance, SBOM, image signing, policy as code (OPA/Gatekeeper), GitOps.",
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: "AI & Data Security",
    description: "NIST AI RMF, OWASP LLM Top 10 (2025), prompt injection defense, data classification, PII/PHI masking.",
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Database Security",
    description: "TDE + KMS, column encryption, RLS/CLS, DB-Firewall, activity monitoring, backup immutability.",
  },
  {
    icon: <Cloud className="h-6 w-6" />,
    title: "Cloud Security",
    description: "Zero Trust (NIST SP 800-207), landing zones, SASE/SSE, threat detection with ATT&CK mapping.",
  },
];

const aiPlatforms = [
  {
    name: "Microsoft Copilot for Security",
    description: "GA Apr 1, 2024; integrated with Defender, Sentinel, Entra; consumption pricing",
    badge: "Enterprise Ready",
  },
  {
    name: "CrowdStrike Charlotte AI",
    description: "Agentic SOC (Fall 2025) with mission-ready agents for autonomous security operations",
    badge: "Agentic SOC",
  },
  {
    name: "SentinelOne Purple AI",
    description: "Agentic triage/investigation with Athena release; FedRAMP-High milestones",
    badge: "FedRAMP-High",
  },
  {
    name: "Palo Alto Precision AI",
    description: "AI Access Security, AI-SPM, AI Runtime Security for comprehensive AI protection",
    badge: "AI-Native",
  },
];

const whyChooseUsItems = [
  {
    icon: Shield,
    secondaryIcon: Brain,
    title: "AI-Augmented Security Operations",
    description:
      "Our AI-driven SecOps platform integrates Microsoft Copilot for Security, CrowdStrike Charlotte AI, and SentinelOne Purple AI to compress incident triage from hours to minutes. We leverage behavioral ML and LLM summarization across XDR/NDR/Cloud/Identity to reduce alert fatigue while maintaining comprehensive threat visibility.",
    badge: "AI-Powered SOC",
  },
  {
    icon: Network,
    secondaryIcon: Zap,
    title: "Zero Trust Architecture Excellence",
    description:
      "We implement NIST SP 800-207 Zero Trust principles with identity-centric access, continuous verification, and least privilege enforcement. Our solutions include micro-segmentation for AI data centers, distributed policy enforcement, and AI-scale network protection aligned to MITRE ATT&CK framework.",
    badge: "NIST-Certified",
  },
  {
    icon: ShieldCheck,
    secondaryIcon: Target,
    title: "Comprehensive Compliance & Governance",
    description:
      "Our program aligns to NIST CSF 2.0, CIS Controls v8.1, NIST AI RMF, and OWASP LLM Top 10 controls. We provide governance frameworks for AI adoption including NIST AI RMF (Govern/Map/Measure/Manage) with adversary-informed defense mapped to MITRE ATT&CK for real attacker TTPs.",
    badge: "Multi-Framework",
  },
  {
    icon: Activity,
    secondaryIcon: CheckCircle,
    title: "Proven Enterprise Track Record",
    description:
      "Successfully protected 500+ organizations with 99.9% threat detection rate and zero-day protection. Our team holds certifications including CISSP, CISM, CEH, OSCP, and cloud security specializations. We deliver 24/7 SOC services with typical incident response under 15 minutes.",
    badge: "Battle Tested",
  },
];

const industries = [
  {
    name: "Healthcare",
    description:
      "HIPAA-compliant security, patient data protection, and medical device security. We implement comprehensive security frameworks that protect sensitive healthcare data while enabling seamless patient care delivery through secure telemedicine platforms and protected electronic health records.",
    solutions: "Secure telemedicine, EHR protection, IoT medical devices",
    image: "/assets/Healthcare.png",
  },
  {
    name: "Finance",
    description:
      "PCI-DSS compliance, fraud detection, and secure transaction processing. Our advanced security solutions protect financial institutions with multi-layered defense systems, real-time threat monitoring, and AI-powered fraud detection to ensure secure banking operations and customer trust.",
    solutions: "Banking security, payment gateways, blockchain integration",
    image: "/assets/Finance.png",
  },
  {
    name: "Retail",
    description:
      "Point-of-sale security, customer data protection, supply chain security. We deliver comprehensive retail security solutions that protect customer transactions, secure e-commerce platforms, and safeguard inventory management systems against cyber threats and data breaches.",
    solutions: "E-commerce security, inventory systems, customer privacy",
    image: "/assets/Ecommerce.png",
  },
  {
    name: "Manufacturing",
    description:
      "Industrial IoT security, OT/IT convergence, production line protection. Our specialized manufacturing security solutions protect smart factories, secure SCADA systems, and ensure continuous production operations while defending against cyber threats to industrial control systems.",
    solutions: "Smart factory security, SCADA protection, supply chain",
    image: "/assets/Manufacturing.png",
  },
  {
    name: "Government",
    description:
      "Critical infrastructure protection, citizen data security, compliance. We provide government-grade security solutions that meet FedRAMP compliance standards, protect critical infrastructure, and ensure secure communications for public sector organizations.",
    solutions: "FedRAMP compliance, secure communications, cyber defense",
    image: "/assets/IT-Services.png",
  },
  {
    name: "Education",
    description:
      "Student data protection, campus network security, research data safety. Our education-focused security solutions protect student information, secure campus networks, and safeguard valuable research data while ensuring FERPA compliance and academic freedom.",
    solutions: "Learning platform security, FERPA compliance, research networks",
    image: "/assets/Education.png",
  },
];

const standards = [
  { name: "NIST CSF 2.0", description: "Cybersecurity Framework 2.0 with Govern function", icon: <ShieldCheck /> },
  { name: "NIST SP 800-207", description: "Zero Trust Architecture guidelines", icon: <Lock /> },
  { name: "NIST AI RMF", description: "AI Risk Management Framework 1.0", icon: <Brain /> },
  { name: "MITRE ATT&CK", description: "Adversary tactics & techniques knowledge base", icon: <Target /> },
  { name: "OWASP Top 10", description: "Web, API, Mobile, & LLM security risks", icon: <AlertTriangle /> },
  { name: "CIS Controls v8.1", description: "Prioritized cybersecurity safeguards", icon: <CheckCircle /> },
  { name: "NIST SSDF", description: "Secure Software Development Framework", icon: <FileCheck /> },
  { name: "PCI DSS v4.0", description: "Payment Card Industry Data Security Standard", icon: <CreditCard /> },
];

const implementationRoadmap = [
  {
    phase: "Phase 1",
    title: "Baseline & Governance",
    description: "Stand up AI RMF roles/artifacts; classify data; inventory model/agent usage; set LLM guardrails.",
    icon: <FileCheck className="h-6 w-6" />,
  },
  {
    phase: "Phase 2",
    title: "Zero Trust Foundations",
    description: "Identity-centric access; device health; least-privilege segmentation; continuous policy checks.",
    icon: <ShieldCheck className="h-6 w-6" />,
  },
  {
    phase: "Phase 3",
    title: "Telemetry Unification",
    description: "Normalize XDR/NDR/cloud/identity/email/DNS into SIEM/XDR mapped to ATT&CK.",
    icon: <Activity className="h-6 w-6" />,
  },
  {
    phase: "Phase 4",
    title: "Agentic Use Cases",
    description: "Start with enrichment & triage summaries; graduate to auto-isolation/revoke with human-in-the-loop.",
    icon: <Brain className="h-6 w-6" />,
  },
  {
    phase: "Phase 5",
    title: "AI-Native DC & SASE",
    description: "Micro-segmentation + distributed enforcement for AI/ML clusters and east-west traffic.",
    icon: <Network className="h-6 w-6" />,
  },
];

const techStack = [
  {
    category: "Cloud Providers",
    icon: <Cloud className="h-6 w-6" />,
    technologies: [
      { name: "Amazon Web Services", shortName: "AWS", icon: <SiAmazon className="h-8 w-8" />, color: "#FF9900" },
      { name: "Microsoft Azure", shortName: "Azure", icon: <Cloud className="h-8 w-8" />, color: "#0078D4" },
      { name: "Google Cloud Platform", shortName: "GCP", icon: <SiGooglecloud className="h-8 w-8" />, color: "#4285F4" },
      { name: "IBM Cloud", shortName: "IBM", icon: <Cloud className="h-8 w-8" />, color: "#1261FE" },
    ],
  },
  {
    category: "Container Orchestration",
    icon: <Server className="h-6 w-6" />,
    technologies: [
      { name: "Kubernetes", shortName: "K8s", icon: <SiKubernetes className="h-8 w-8" />, color: "#326CE5" },
      { name: "Docker", shortName: "Docker", icon: <SiDocker className="h-8 w-8" />, color: "#2496ED" },
      { name: "OpenShift", shortName: "OpenShift", icon: <SiRedhat className="h-8 w-8" />, color: "#EE0000" },
      { name: "Amazon EKS", shortName: "EKS", icon: <SiAmazon className="h-8 w-8" />, color: "#FF9900" },
    ],
  },
  {
    category: "AI/ML Frameworks",
    icon: <Brain className="h-6 w-6" />,
    technologies: [
      { name: "TensorFlow", shortName: "TensorFlow", icon: <SiTensorflow className="h-8 w-8" />, color: "#FF6F00" },
      { name: "PyTorch", shortName: "PyTorch", icon: <SiPytorch className="h-8 w-8" />, color: "#EE4C2C" },
      { name: "Scikit-learn", shortName: "Scikit", icon: <SiScikitlearn className="h-8 w-8" />, color: "#F7931E" },
      { name: "MLflow", shortName: "MLflow", icon: <Brain className="h-8 w-8" />, color: "#0194E2" },
    ],
  },
  {
    category: "Data Processing",
    icon: <Database className="h-6 w-6" />,
    technologies: [
      { name: "Apache Spark", shortName: "Spark", icon: <SiApachespark className="h-8 w-8" />, color: "#E25A1C" },
      { name: "Apache Kafka", shortName: "Kafka", icon: <SiApachekafka className="h-8 w-8" />, color: "#231F20" },
      { name: "Apache Airflow", shortName: "Airflow", icon: <SiApacheairflow className="h-8 w-8" />, color: "#017CEE" },
      { name: "Databricks", shortName: "Databricks", icon: <SiDatabricks className="h-8 w-8" />, color: "#FF3621" },
    ],
  },
  {
    category: "Monitoring & Analytics",
    icon: <Activity className="h-6 w-6" />,
    technologies: [
      { name: "Prometheus", shortName: "Prometheus", icon: <SiPrometheus className="h-8 w-8" />, color: "#E6522C" },
      { name: "Grafana", shortName: "Grafana", icon: <SiGrafana className="h-8 w-8" />, color: "#F46800" },
      { name: "ELK Stack", shortName: "ELK", icon: <SiElasticsearch className="h-8 w-8" />, color: "#005571" },
      { name: "DataDog", shortName: "DataDog", icon: <SiDatadog className="h-8 w-8" />, color: "#632CA6" },
    ],
  },
  {
    category: "Security & Compliance",
    icon: <ShieldCheck className="h-6 w-6" />,
    technologies: [
      { name: "HashiCorp Vault", shortName: "Vault", icon: <SiVault className="h-8 w-8" />, color: "#FFD814" },
      { name: "AWS IAM", shortName: "IAM", icon: <Key className="h-8 w-8" />, color: "#FF9900" },
      { name: "Azure AD", shortName: "Azure AD", icon: <Users className="h-8 w-8" />, color: "#0078D4" },
      { name: "SIEM", shortName: "SIEM", icon: <Eye className="h-8 w-8" />, color: "#0080FF" },
    ],
  },
];

const faqs: FAQ[] = [
  {
    question: "What is AI-Augmented Security and how does it work?",
    answer:
      "AI-Augmented Security uses Large Language Models (LLMs) and behavioral ML to automatically summarize alerts, generate investigations, and automate responses with playbooks & agents. Platforms like Microsoft Copilot for Security, CrowdStrike Charlotte AI, and SentinelOne Purple AI compress incident triage from hours to minutes by auto-correlating telemetry across endpoints, identities, cloud, and network.",
  },
  {
    question: "How do you ensure AI security solutions are safe and compliant?",
    answer:
      "We pair AI adoption with NIST AI RMF governance (Govern/Map/Measure/Manage), adversary-informed defense using MITRE ATT&CK, and GenAI-specific controls from OWASP Top 10 for LLM Apps (2025). This includes defenses against prompt injection, model DoS, data poisoning, supply chain risks, and excessive agency. We also enforce strict data classification, least-privilege access, and DLP to prevent AI copilots from surfacing sensitive content.",
  },
  {
    question: "What is Zero Trust Architecture and why is it important?",
    answer:
      "Zero Trust (NIST SP 800-207) is an identity-centric security model with continuous verification, least privilege, and data-centric policy across users, devices, apps, and networks. It's the control fabric for modern hybrid networks. We implement identity-first access, continuous policy checks, micro-segmentation, and distributed enforcement - especially critical for protecting AI workloads and preventing lateral movement in breaches.",
  },
  {
    question: "How quickly can your AI-powered SOC respond to threats?",
    answer:
      "Our AI-augmented SOC achieves typical incident response times of under 15 minutes for critical threats. Agentic systems automatically correlate alerts, map to MITRE ATT&CK TTPs, decide next actions based on policy + risk scoring, and execute responses (isolate, revoke, block, notify) with full explainability and audit logs. This compresses what traditionally took hours into minutes while maintaining human oversight.",
  },
  {
    question: "What standards and frameworks do you align to?",
    answer:
      "We align our program to NIST CSF 2.0 and CIS Controls v8.1, enforce Zero Trust (NIST SP 800-207), and map detections to MITRE ATT&CK. For AI, we apply NIST AI RMF and OWASP LLM Top 10 controls. Our SDLC follows NIST SSDF and SLSA for supply-chain integrity, with ASVS-based verification and PCI DSS v4.0 where required. We also support ISO 27001:2022 and FedRAMP compliance paths.",
  },
  {
    question: "How do you protect against GenAI-specific threats?",
    answer:
      "We implement OWASP LLM Top 10 (2025) controls addressing prompt injection, model DoS, data poisoning, supply chain vulnerabilities, excessive agency, and system prompt leakage. Our approach includes prompt filtering, output validation, retrieval guardrails, classification/labeling of sensitive data, field/row-level authorization, PII/PHI masking, and comprehensive logging with red-team operations. We also enforce tight tenant & permission models to prevent copilot oversharing.",
  },
];

export default function NetworkingCyberSecurity() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState(0);

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

        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />

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

      {/* Standards We Anchor To - Auto-scrolling Carousel */}
      <section className="py-20 bg-slate-900 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              Standards We Anchor To
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300">
              Industry-leading compliance and security frameworks
            </p>
          </motion.div>

          {/* Auto-scrolling Carousel */}
          <div className="relative">
            <div className="flex overflow-hidden">
              <div className="flex animate-scroll gap-6">
                {[...standards, ...standards].map((standard, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-72 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 group"
                  >
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {standard.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {standard.name}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {standard.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Platforms Section */}
      <section className="py-16 bg-light text-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              AI-Powered{" "}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Security Platforms
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leading-edge AI platforms we leverage for autonomous security operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {aiPlatforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 h-full hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20"
                  data-testid={`card-platform-${index}`}
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-bl-2xl"></div>

                  <div className="mb-4">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium border border-blue-500/30">
                      {platform.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {platform.name}
                  </h3>

                  <p className="text-gray-300 leading-relaxed text-lg">
                    {platform.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities - Matching AI Consulting 2x2 Grid Layout */}
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
              Our Core Network Security Capabilities
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive security solutions designed to protect your modern enterprise infrastructure
            </p>
          </motion.div>

          {/* 2x2 Grid Layout with Central Image */}
          <div className="max-w-8xl mx-auto relative">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

              {/* Top Row - First two capabilities */}
              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {coreCapabilities.slice(0, 2).map((capability, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index === 0 ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="group cursor-pointer h-full"
                  >
                    <div className="flex items-center gap-6 p-6 bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-blue-500/50 hover:bg-gray-800/80 transition-all duration-500 group-hover:translate-x-2 h-full">
                      <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                        {capability.icon}
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
                        <p className="text-gray-400 text-sm leading-relaxed mb-3">
                          {capability.description}
                        </p>
                        <div className="space-y-1">
                          {capability.features.slice(0, 2).map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle className="h-3 w-3 text-cyan-400 mt-1 flex-shrink-0" />
                              <span className="text-xs text-gray-500">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Second Row - Central Image with third capability */}
              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Central Image */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, type: "spring" }}
                  className="relative group"
                >
                  <div className="relative min-h-96 w-full bg-gradient-to-br from-blue-600 to-cyan-600 rounded-[3rem] overflow-hidden shadow-2xl group-hover:shadow-blue-500/30 transition-all duration-700">
                    <div className="relative w-full">
                      <img
                        src="/assets/Networking-Cybersecurity.gif"
                        alt="Network Security Capabilities"
                        className="w-full h-auto object-contain group-hover:scale-105 transition-all duration-700"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/assets/AI-Capabilities.gif";
                        }}
                      />
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute top-8 right-8 flex flex-col gap-4">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                        <Shield className="h-8 w-8 text-white" />
                      </div>
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                        AI
                      </div>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="mb-4">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                          <span className="text-blue-200 text-sm font-medium">
                            Security Innovation Hub
                          </span>
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-3 leading-tight">
                          Network Security Capabilities
                        </h3>
                        <p className="text-blue-100 leading-relaxed mb-6">
                          Advanced network security solutions powered by AI-driven threat detection and zero-trust architecture.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Third capability */}
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="group cursor-pointer h-full"
                >
                  <div className="flex items-center gap-6 p-6 bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-blue-500/50 hover:bg-gray-800/80 transition-all duration-500 group-hover:translate-x-2 h-full">
                    <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                      {coreCapabilities[2].icon}
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
                      <p className="text-gray-400 text-sm leading-relaxed mb-3">
                        {coreCapabilities[2].description}
                      </p>
                      <div className="space-y-1">
                        {coreCapabilities[2].features.slice(0, 2).map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle className="h-3 w-3 text-cyan-400 mt-1 flex-shrink-0" />
                            <span className="text-xs text-gray-500">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Third Row - Remaining capabilities */}
              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
                {coreCapabilities.slice(3, 5).map((capability, index) => (
                  <motion.div
                    key={index + 3}
                    initial={{ opacity: 0, x: index === 0 ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="group cursor-pointer h-full"
                  >
                    <div className="flex items-center gap-6 p-6 bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-blue-500/50 hover:bg-gray-800/80 transition-all duration-500 group-hover:translate-x-2 h-full">
                      <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                        {capability.icon}
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                            {String(index + 4).padStart(2, '0')}
                          </div>
                        </div>
                        <h4 className="text-lg font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                          {capability.title}
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed mb-3">
                          {capability.description}
                        </p>
                        <div className="space-y-1">
                          {capability.features.slice(0, 2).map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle className="h-3 w-3 text-cyan-400 mt-1 flex-shrink-0" />
                              <span className="text-xs text-gray-500">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none">
              <svg className="w-full h-full opacity-10">
                <defs>
                  <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="50%" stopColor="#06B6D4" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </linearGradient>
                </defs>
                <path d="M0,200 Q300,100 600,200 T1200,200" stroke="url(#flowGradient)" strokeWidth="3" fill="none" strokeDasharray="10,5" opacity="0.6">
                  <animate attributeName="stroke-dashoffset" values="0;15" dur="2s" repeatCount="indefinite" />
                </path>
              </svg>

              <div className="absolute top-20 left-1/4 w-3 h-3 bg-blue-400 rounded-full opacity-60 animate-bounce"></div>
              <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-cyan-300 rounded-full opacity-50 animate-bounce delay-2000"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Work With Us Section */}
      <section className="py-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 to-cyan-500/10"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full border border-cyan-400/20 mb-6">
                <Award className="h-4 w-4 text-cyan-400" />
                <span className="text-cyan-300 text-sm font-medium">
                  Why Choose RTNextGenAI
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Why work with{" "}
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  RTNextGenAI
                </span>{" "}
                for Security & Networking
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Partner with security experts who combine cutting-edge AI technology with proven Zero Trust architecture
              </p>
            </motion.div>

            <div className="relative max-w-6xl mx-auto">
              <Carousel
                className="w-full"
                opts={{
                  align: "start",
                  loop: true,
                }}
                plugins={[
                  Autoplay({
                    delay: 5000,
                    stopOnInteraction: true,
                    stopOnMouseEnter: true,
                  }),
                ]}
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  <CarouselItem className="pl-2 md:pl-4">
                    <div className="p-6">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {whyChooseUsItems.slice(0, 2).map((item, index) => {
                          const IconComponent = item.icon;
                          const SecondaryIconComponent = item.secondaryIcon;

                          return (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: index * 0.1 }}
                              whileHover={{ y: -10, scale: 1.05 }}
                              viewport={{ once: true }}
                              className="group"
                            >
                              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 h-full hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
                                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-bl-2xl"></div>

                                <div className="flex items-start gap-6 mb-6">
                                  <div className="relative">
                                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center border border-cyan-400/30 group-hover:border-cyan-400/50 transition-colors">
                                      <IconComponent className="h-10 w-10 text-white" />
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                                      <SecondaryIconComponent className="h-4 w-4 text-white" />
                                    </div>
                                  </div>

                                  <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                                      {item.title}
                                    </h3>
                                    <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mb-4"></div>
                                  </div>
                                </div>

                                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                                  {item.description}
                                </p>

                                <div className="flex items-center gap-2 text-cyan-400">
                                  <CheckCircle className="h-4 w-4" />
                                  <span className="text-sm font-medium">
                                    {item.badge}
                                  </span>
                                </div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  </CarouselItem>

                  <CarouselItem className="pl-2 md:pl-4">
                    <div className="p-6">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {whyChooseUsItems.slice(2, 4).map((item, index) => {
                          const IconComponent = item.icon;
                          const SecondaryIconComponent = item.secondaryIcon;

                          return (
                            <motion.div
                              key={index + 2}
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: index * 0.1 }}
                              whileHover={{ y: -10, scale: 1.05 }}
                              viewport={{ once: true }}
                              className="group"
                            >
                              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 h-full hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
                                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-bl-2xl"></div>

                                <div className="flex items-start gap-6 mb-6">
                                  <div className="relative">
                                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center border border-cyan-400/30 group-hover:border-cyan-400/50 transition-colors">
                                      <IconComponent className="h-10 w-10 text-white" />
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                                      <SecondaryIconComponent className="h-4 w-4 text-white" />
                                    </div>
                                  </div>

                                  <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                                      {item.title}
                                    </h3>
                                    <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mb-4"></div>
                                  </div>
                                </div>

                                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                                  {item.description}
                                </p>

                                <div className="flex items-center gap-2 text-cyan-400">
                                  <CheckCircle className="h-4 w-4" />
                                  <span className="text-sm font-medium">
                                    {item.badge}
                                  </span>
                                </div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex -left-12 bg-cyan-500/20 border-cyan-400/30 hover:bg-cyan-500/30 text-white" />
                <CarouselNext className="hidden md:flex -right-12 bg-cyan-500/20 border-cyan-400/30 hover:bg-cyan-500/30 text-white" />
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Practice Security Section */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Cross-Practice Security Solutions
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive security across all technology domains
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {crossPracticeServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
                data-testid={`card-cross-practice-${index}`}
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

      {/* Tech Stack & Partners Section */}
      <section className="py-20 bg-gradient-to-b from-light to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full border border-cyan-400/20 mb-6">
              <Boxes className="h-4 w-4 text-cyan-400" />
              <span className="text-cyan-300 text-sm font-medium">
                Technology Partnerships
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Tech Stack &{" "}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Partners
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with top-tier providers and cutting-edge technologies to deliver world-class solutions
            </p>
          </motion.div>

          <div className="space-y-12 max-w-7xl mx-auto">
            {techStack.map((stack, stackIndex) => (
              <motion.div
                key={stackIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: stackIndex * 0.1 }}
              >
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                      {stack.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{stack.category}</h3>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stack.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: techIndex * 0.05 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="group"
                        data-testid={`tech-card-${stack.category.toLowerCase().replace(/\s+/g, '-')}-${techIndex}`}
                      >
                        <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-gray-700 rounded-2xl p-6 h-full hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
                          <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-bl-2xl"></div>

                          <div className="flex flex-col items-center text-center space-y-4">
                            <div
                              className="transition-all duration-300 group-hover:scale-110"
                              style={{ color: tech.color }}
                            >
                              {tech.icon}
                            </div>
                            <div>
                              <h4 className="font-bold text-white text-sm mb-1 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                                {tech.shortName}
                              </h4>
                              <p className="text-gray-400 text-xs leading-tight">
                                {tech.name}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Use Cases - Interactive Layout matching AI Consulting */}
      <section className="py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                How we implement network security across multiple industries
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Navigation */}
              <div className="lg:col-span-4">
                <div className="grid grid-cols-1 gap-4">
                  {industries.map((industry, index) => (
                    <Button
                      key={index}
                      variant={
                        selectedIndustry === index ? "default" : "outline"
                      }
                      className={`text-center justify-center p-4 h-auto min-h-[60px] transition-all duration-300 ${
                        selectedIndustry === index
                          ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-none shadow-lg"
                          : "bg-slate-800/50 border-slate-600 text-white hover:bg-slate-700/70 hover:border-blue-400/40 hover:text-white"
                      }`}
                      onClick={() => setSelectedIndustry(index)}
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
                  key={selectedIndustry}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-cyan-400/20 rounded-xl overflow-hidden"
                >
                  {/* Industry Image */}
                  <div className="relative h-64 overflow-hidden group cursor-pointer">
                    <img
                      src={industries[selectedIndustry].image}
                      alt={industries[selectedIndustry].name}
                      className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/assets/IT-Services.png";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent group-hover:from-gray-900/60 transition-all duration-300"></div>
                    <div className="absolute bottom-4 left-6">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {industries[selectedIndustry].name}
                      </h3>
                    </div>
                  </div>

                  {/* Industry Content */}
                  <div className="p-6">
                    <p className="text-gray-300 leading-relaxed text-lg mb-4">
                      {industries[selectedIndustry].description}
                    </p>
                    <div className="flex items-center gap-2 text-cyan-400">
                      <CheckCircle className="h-5 w-5" />
                      <span className="text-sm font-medium">
                        {industries[selectedIndustry].solutions}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Roadmap Section */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Implementation Roadmap
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven 5-phase approach to AI-augmented security transformation
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {implementationRoadmap.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative mb-8 last:mb-0"
              >
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
                      {phase.icon}
                    </div>
                  </div>
                  <div className="flex-grow bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium">
                        {phase.phase}
                      </span>
                      <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                    </div>
                    <p className="text-gray-400 leading-relaxed">{phase.description}</p>
                  </div>
                </div>
                {index < implementationRoadmap.length - 1 && (
                  <div className="ml-8 h-8 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-500"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section - Matching AI Consulting UI */}
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
                      src="/assets/Networking-Cybersecurity-banner.png"
                      alt="Network Security and Protection"
                      className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/assets/FAQ's.png";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        AI-Powered Security Solutions
                      </h3>
                      <p className="text-gray-200 text-sm">
                        Protecting your infrastructure with intelligent threat
                        detection and zero-trust architecture
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
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="px-6 pb-6"
                        >
                          <p className="text-gray-400 leading-relaxed">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section - Matching Life Science UI */}
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
                AI-Powered Network Security
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
                Secure Your Infrastructure
              </span>
              <br />
              <span className="text-white">with AI-Powered Protection</span>
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Partner with us to build resilient, future-proof networks that
              protect your business while enabling growth and innovation through
              advanced AI-driven security solutions.
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
                  24/7 Protection
                </span>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <CheckCircle className="h-6 w-6 text-white bg-primary rounded-full p-1" />
                <span className="text-white font-semibold">
                  AI-Driven Defense
                </span>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <CheckCircle className="h-6 w-6 text-white bg-primary rounded-full p-1" />
                <span className="text-white font-semibold">
                  Zero-Trust Security
                </span>
              </div>
            </motion.div>

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
                <Shield className="mr-2 h-5 w-5" />
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}