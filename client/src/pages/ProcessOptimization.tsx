import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import {
  Target,
  Settings,
  Users,
  ArrowRight,
  CheckCircle2,
  Brain,
  Cog,
  BarChart3,
  Lightbulb,
  Star,
  Sparkles,
  Rocket,
  Shield,
  Database,
} from "lucide-react";

// Import white external SVG icons
import accelerateProcessesIcon from "../assets/accelerate-processes.svg";
import optimizePerformanceIcon from "../assets/optimize-performance.svg";
import identifyProspectsIcon from "../assets/identify-prospects.svg";
import customSolutionsIcon from "../assets/custom-solutions.svg";

const benefits = [
  {
    icon: <img src={accelerateProcessesIcon} alt="Accelerate Processes" className="h-8 w-8" />,
    title: "Accelerate Business Processes",
    description:
      "Speed up operations with intelligent automation and AI-powered workflows.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <img src={optimizePerformanceIcon} alt="Optimize Performance" className="h-8 w-8" />,
    title: "Optimize Performance",
    description:
      "Unlock new potential through data-driven process optimization strategies.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <img src={identifyProspectsIcon} alt="Identify Prospects" className="h-8 w-8" />,
    title: "Identify Unique Prospects",
    description:
      "Discover unique opportunities that AI integration presents for your business.",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: <img src={customSolutionsIcon} alt="Custom Solutions" className="h-8 w-8" />,
    title: "Custom Solutions",
    description:
      "Tailored AI solutions designed specifically for your business processes.",
    color: "from-orange-500 to-red-500",
  },
];

const stats = [
  {
    icon: <Target className="h-8 w-8" />,
    title: "95%",
    subtitle: "Process Efficiency",
    description: "Average improvement",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Rocket className="h-8 w-8" />,
    title: "300+",
    subtitle: "Optimized Processes",
    description: "Successfully automated",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: "80%",
    subtitle: "Cost Reduction",
    description: "Average savings",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: <Star className="h-8 w-8" />,
    title: "24/7",
    subtitle: "Automated Operations",
    description: "Continuous processing",
    color: "from-orange-500 to-red-500",
  },
];

export default function ProcessOptimization() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-white"
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/assets/Process-Optimization-banner.png"
            alt="Process Optimization with AI"
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/assets/process-optimization-banner.png";
            }}
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
                Process Optimization with AI
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-4xl"
            >
              Transform your business operations with intelligent AI-driven
              process optimization solutions
            </motion.p>

            {/* Badge */}
            <div className="mb-32">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0066CC]/20 border border-[#0080FF]/30 rounded-full backdrop-blur-sm"
              >
                <Sparkles className="h-5 w-5 text-cyan-400" />
                <span className="text-white font-medium">
                  AI-Powered Business Excellence
                </span>
                <Star className="h-4 w-4 text-blue-400 fill-current" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="absolute bottom-8 left-0 right-0">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center md:justify-start">
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl w-full"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group relative"
                  >
                    <div className="relative p-4 md:p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden text-center">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                      />

                      <div className="relative z-10">
                        <div className="flex justify-center mb-3 md:mb-4">
                          <div
                            className={`inline-flex p-2 md:p-3 rounded-xl bg-gradient-to-br ${stat.color}`}
                          >
                            <div className="text-white">{stat.icon}</div>
                          </div>
                        </div>
                        <div className="text-2xl md:text-3xl font-bold mb-1 md:mb-2 text-white">
                          {stat.title}
                        </div>
                        <div className="text-xs md:text-sm font-semibold text-gray-300 mb-1">
                          {stat.subtitle}
                        </div>
                        <div className="text-xs text-gray-400">
                          {stat.description}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 bg-light relative">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40"></div>
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Transforming Business Operations
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl"
            >
              <img
                src="/assets/Process-Optimization.png"
                alt="Process Optimization"
                className="w-full h-80 lg:h-96 object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/assets/process-optimization.png";
                }}
              />
              {/* Gradient overlay for seamless blending */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-transparent to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-l from-slate-900/60 via-transparent to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-transparent to-transparent"></div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                Effective business administration is critical, as even the most
                innovative ideas can falter without proper execution. In some
                cases, organizations struggle to adopt new concepts or lack the
                necessary expertise to implement them successfully.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                RTNextGenAI provides a range of AI-driven solutions designed to
                help businesses streamline and enhance their operations. While
                the potential of AI is vast, success depends not merely on swift
                implementation but on a strategic approach. It is essential to
                understand how to integrate AI effectively to drive sustainable
                business growth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Can Do Section */}
      <section className="py-16 bg-light relative">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40"></div>
          <div className="absolute top-1/4 left-10 w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-2xl opacity-30"></div>
          <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full blur-2xl opacity-30"></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              RTNextGenAI Can Work With Your Business To:
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {benefits.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group"
              >
                <div className="h-full bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">{item.icon}</div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Comprehensive Solutions Section */}
      <section className="py-16 bg-light relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40"></div>
          <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full blur-3xl opacity-25"></div>
          <div className="absolute bottom-20 left-20 w-56 h-56 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full blur-3xl opacity-25"></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our Comprehensive Solutions
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Streamline your operations, drive intelligent automation, and
              enhance your business capabilities through AI-powered process
              optimization. By strategically integrating AI technologies, you
              can unlock new opportunities, improve operational efficiency, and
              uncover unique advantages that fuel sustainable growth and
              innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                Harnessing AI to optimize your business processes can unlock
                substantial global opportunities, and it is imperative to be
                strategically positioned to fully capitalize on these
                advancements.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                RTNextGenAI offers a comprehensive suite of capabilities,
                combining highly skilled AI software development expertise with
                proven methodologies and advanced tools. This enables our team
                to effectively guide your organization through its digital
                transformation journey.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                We assist businesses in designing and implementing innovative
                processes that drive greater operational efficiency. Many
                organizations trust us to lead their AI-driven business process
                optimization initiatives.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our team delivers tailored AI solutions, modernizes existing
                systems, and strengthens overall business capabilities. Whether
                your goal is to deploy a chatbot to enhance customer engagement
                or to derive actionable insights from complex datasets, AI
                Superior is equipped to elevate your business operations.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                We deliver end-to-end solutions tailored to your organization’s
                unique processes and objectives, ensuring seamless integration
                and maximum value. By leveraging data specific to your
                enterprise, we help you implement these solutions with precision
                and efficiency.
              </p>
            </motion.div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl"
            >
              <img
                src="/assets/Process-optimization.png"
                alt="Process Optimization Solutions"
                className="w-full h-80 lg:h-96 object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/assets/process-optimization.png";
                }}
              />
              {/* Gradient overlay for seamless blending */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-slate-900/80"></div>
              <div className="absolute inset-0 bg-gradient-to-l from-slate-900/60 via-transparent to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-transparent to-transparent"></div>
            </motion.div>
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
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 px-6 py-3 mb-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-full backdrop-blur-sm"
            >
              <Sparkles className="h-5 w-5 text-cyan-400" />
              <span className="text-white font-medium">
                Ready to Transform Your Processes?
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
                Optimize Your
              </span>
              <br />
              <span className="text-white">Business Today</span>
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Join the companies revolutionizing their operations with
              AI-powered process optimization. Start your transformation journey
              today.
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
                <Settings className="mr-2 h-5 w-5" />
                Get Started with Process Optimization
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
