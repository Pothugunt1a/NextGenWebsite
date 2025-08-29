
import { useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  PieChart,
  TrendingUp,
  Monitor,
  Smartphone,
  Zap,
  CheckCircle,
  Award,
  Target,
  Brain,
  ArrowRight,
  Eye,
  Users,
  Settings,
} from "lucide-react";
import { Button } from "../components/ui/button";

const biTools = [
  {
    category: "Enterprise BI Platforms",
    tools: ["Power BI", "Tableau", "Qlik Sense", "Looker"],
    icon: <BarChart3 className="h-8 w-8 text-white" />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    category: "Real-Time Analytics",
    tools: ["Apache Druid", "ClickHouse", "Apache Superset", "Grafana"],
    icon: <Zap className="h-8 w-8 text-white" />,
    color: "from-orange-500 to-red-500",
  },
  {
    category: "Embedded BI Solutions",
    tools: ["Custom Web Apps", "Mobile Applications", "API-Driven Dashboards", "White-Label Solutions"],
    icon: <Monitor className="h-8 w-8 text-white" />,
    color: "from-purple-500 to-violet-500",
  },
];

const capabilities = [
  {
    icon: <Eye className="h-8 w-8 text-white" />,
    title: "KPI-Driven Executive Dashboards",
    description: "Create comprehensive executive dashboards that provide real-time visibility into key performance indicators and business metrics.",
  },
  {
    icon: <Users className="h-8 w-8 text-white" />,
    title: "Self-Service Analytics",
    description: "Empower business teams with intuitive self-service analytics tools that enable data exploration without technical expertise.",
  },
  {
    icon: <Settings className="h-8 w-8 text-white" />,
    title: "Enterprise Integration",
    description: "Seamlessly integrate with ERP, CRM, IoT, and cloud platforms for unified business intelligence across all systems.",
  },
  {
    icon: <Smartphone className="h-8 w-8 text-white" />,
    title: "Mobile-Ready BI",
    description: "Develop mobile-responsive BI dashboards that provide access to critical business insights anywhere, anytime.",
  },
];

const useCases = [
  {
    title: "Sales & Marketing Performance",
    description: "Comprehensive dashboards tracking sales pipeline, marketing ROI, customer acquisition costs, and revenue forecasting.",
    industry: "All Industries",
    metrics: ["Revenue Growth", "Lead Conversion", "Customer LTV"],
  },
  {
    title: "Healthcare Analytics & Compliance",
    description: "Patient care dashboards with compliance monitoring, operational efficiency metrics, and clinical outcome tracking.",
    industry: "Healthcare",
    metrics: ["Patient Outcomes", "Compliance Rates", "Resource Utilization"],
  },
  {
    title: "Financial Reporting & Analysis",
    description: "Advanced financial reporting with drill-down analytics, budget variance analysis, and predictive financial modeling.",
    industry: "Finance",
    metrics: ["P&L Analysis", "Budget Variance", "Cash Flow Forecasting"],
  },
];

export default function BusinessIntelligenceVisualization() {
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
            alt="Business Intelligence Visualization"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70"></div>
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
            >
              <span className="bg-gradient-to-r from-white via-blue-100 to-[#0080FF] bg-clip-text text-transparent">
                Business Intelligence & Visualization
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-4xl"
            >
              Empower decision-makers with real-time dashboards, interactive reporting, and predictive insights that drive business growth.
            </motion.p>

            <div className="mb-32">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0066CC]/20 border border-[#0080FF]/30 rounded-full backdrop-blur-sm"
              >
                <CheckCircle className="h-5 w-5 text-cyan-400" />
                <span className="text-white font-medium">
                  Data-Driven Decision Making Excellence
                </span>
                <Award className="h-4 w-4 text-blue-400 fill-current" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BI Technologies Section */}
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
              Our BI Technology Stack
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leading business intelligence and visualization technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {biTools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 h-full hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 text-center">
                  <div className="flex justify-center mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${tool.color}`}>
                      {tool.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-6 text-white group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {tool.category}
                  </h3>

                  <div className="flex flex-wrap justify-center gap-2">
                    {tool.tools.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-xs text-blue-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                BI Capabilities
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                      {capability.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {capability.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {capability.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-light relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Real-World Applications
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6"
                >
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-violet-500/20 border border-purple-400/30 rounded-full text-xs text-purple-200">
                      {useCase.industry}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">
                    {useCase.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {useCase.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {useCase.metrics.map((metric, metricIndex) => (
                      <span
                        key={metricIndex}
                        className="px-2 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-xs text-blue-200"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10" />
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
                Ready to Visualize Your
              </span>
              <br />
              <span className="text-white">Business Data?</span>
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Transform your data into powerful insights with interactive dashboards and advanced analytics
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
                <BarChart3 className="mr-2 h-5 w-5" />
                Start Your BI Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
