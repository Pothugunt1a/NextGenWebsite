import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  Brain,
  Cpu,
  Database,
  Zap,
  Target,
  Users,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Star,
  Bot,
  Network,
  BarChart3,
} from "lucide-react";

const aiSolutions = [
  {
    icon: <Brain className="h-12 w-12" />,
    title: "Machine Learning Models",
    description: "Advanced ML algorithms for predictive analytics and automation",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Bot className="h-12 w-12" />,
    title: "AI Automation",
    description: "Intelligent process automation for enhanced efficiency",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Database className="h-12 w-12" />,
    title: "Data Intelligence",
    description: "Smart data processing and insights generation",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Network className="h-12 w-12" />,
    title: "Neural Networks",
    description: "Deep learning solutions for complex problem solving",
    color: "from-blue-500 to-cyan-500",
  },
];

const benefits = [
  "Accelerated drug discovery processes",
  "Enhanced regulatory compliance",
  "Improved operational efficiency",
  "Real-time decision making",
  "Predictive risk assessment",
  "Automated quality control",
];

export default function AI() {
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
            src="/assets/ai-brain-banner.png"
            alt="AI Solutions"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="max-w-4xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              >
                <span className="bg-gradient-to-r from-white via-blue-100 to-[#0080FF] bg-clip-text text-transparent">
                  AI-Powered
                </span>
                <br />
                <span className="text-white">Solutions</span>
              </motion.h1>

              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl"
              >
                Transforming life sciences with cutting-edge artificial intelligence
                and machine learning technologies
              </motion.p>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0066CC]/20 border border-[#0080FF]/30 rounded-full backdrop-blur-sm mb-8"
              >
                <Sparkles className="h-5 w-5 text-cyan-400" />
                <span className="text-white font-medium">
                  Next-Generation AI Technology
                </span>
                <Star className="h-4 w-4 text-blue-400 fill-current" />
              </motion.div>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-8 py-6 text-lg font-semibold shadow-2xl shadow-blue-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
                >
                  <Cpu className="mr-2 h-5 w-5" />
                  Explore AI Solutions
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* AI Solutions Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold mb-6 text-white">
              Our AI Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" style={{ lineHeight: '1.75rem' }}>
              Leverage advanced artificial intelligence to revolutionize your
              life sciences operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiSolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group h-full"
              >
                <Card className="h-full bg-white/5 border border-white/10 backdrop-blur-xl hover:border-blue-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
                  <CardContent className="p-8 text-center h-full flex flex-col justify-between">
                    <div>
                      <div className="flex justify-center mb-6">
                        <div
                          className={`p-4 rounded-2xl bg-gradient-to-br ${solution.color} group-hover:scale-110 transition-transform duration-300`}
                        >
                          <div className="text-white">{solution.icon}</div>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-white">
                        {solution.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed" style={{ lineHeight: '1.75rem' }}>
                        {solution.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl font-bold mb-8 text-white">
                AI-Driven Benefits
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mb-8"></div>
              <p className="text-xl text-gray-300 mb-8" style={{ lineHeight: '1.75rem' }}>
                Our AI solutions deliver measurable improvements across your
                entire life sciences operation
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-6 w-6 text-white bg-primary rounded-full p-1 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="AI Technology"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center p-16 rounded-3xl bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl border border-white/20 shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 px-6 py-3 mb-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-full backdrop-blur-sm"
            >
              <Brain className="h-5 w-5 text-cyan-400" />
              <span className="text-white font-medium">
                Ready to Transform with AI
              </span>
              <Star className="h-4 w-4 text-blue-400 fill-current" />
            </motion.div>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-white via-blue-100 to-[#0080FF] bg-clip-text text-transparent">
                Partner with
              </span>
              <br />
              <span className="text-white">RT NextGenAI</span>
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Discover how our AI solutions can accelerate your innovation
              and drive breakthrough results in life sciences
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
                Get AI Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}