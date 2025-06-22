import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import {
  Search,
  Target,
  Lightbulb,
  BarChart3,
  Users,
  Zap,
  CheckCircle2,
  ArrowRight,
  Brain,
  TrendingUp,
} from "lucide-react";

const usecaseSteps = [
  {
    icon: <Search className="h-8 w-8" />,
    title: "Discovery Workshop",
    description: "Identify potential AI opportunities across your business processes and operations.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Use Case Prioritization",
    description: "Evaluate and rank AI opportunities based on impact, feasibility, and ROI potential.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <BarChart3 className="h-8 w-8" />,
    title: "Impact Assessment",
    description: "Analyze potential business value and technical requirements for each identified use case.",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: "Implementation Roadmap",
    description: "Create a strategic plan for implementing AI solutions with clear timelines and milestones.",
    color: "from-orange-500 to-red-500",
  },
];

const benefits = [
  {
    title: "Strategic Alignment",
    description: "Ensure AI initiatives align with business objectives and deliver measurable value.",
    icon: <Target className="h-6 w-6" />,
  },
  {
    title: "Risk Mitigation",
    description: "Identify potential challenges and risks before implementation begins.",
    icon: <CheckCircle2 className="h-6 w-6" />,
  },
  {
    title: "Resource Optimization",
    description: "Optimize budget allocation and resource planning for maximum ROI.",
    icon: <TrendingUp className="h-6 w-6" />,
  },
  {
    title: "Innovation Culture",
    description: "Foster an AI-driven culture and mindset across your organization.",
    icon: <Brain className="h-6 w-6" />,
  },
];

export default function AIUsecase() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-white"
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black"></div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-400 bg-clip-text text-transparent">
              AI Usecase Discovery & Identification
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed max-w-4xl mx-auto"
          >
            Uncover hidden AI opportunities and transform your business with strategic use case identification
          </motion.p>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0 px-8 py-6 text-lg">
              Start Discovery Process
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-6 text-lg">
              Learn More
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-900 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Our Discovery Process
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A systematic approach to identifying and prioritizing AI use cases for maximum business impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {usecaseSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="h-full bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 hover:border-blue-400/40 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10 text-center">
                  <div className="flex justify-center mb-6">
                    <div className={`p-4 bg-gradient-to-br ${step.color} rounded-xl border border-blue-400/30 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">
                        {step.icon}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-black relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Why Choose Our Discovery Service
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-6 bg-gradient-to-br from-slate-800/40 to-slate-900/40 rounded-xl border border-cyan-500/20 hover:border-blue-400/40 transition-all duration-300"
              >
                <div className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg border border-blue-400/30 flex-shrink-0">
                  <div className="text-blue-400">
                    {benefit.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Discover Your AI Potential?
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Let's identify the AI use cases that will transform your business and drive sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0 px-8 py-6 text-lg">
                Schedule Discovery Workshop
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-6 text-lg">
                Download Use Case Guide
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}