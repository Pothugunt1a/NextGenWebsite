import React from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import {
  Brain,
  Target,
  Users,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Shield,
  Lightbulb,
  Settings,
  Zap,
  Star,
  Globe,
  BookOpen,
  Sparkles,
  ArrowUpRight,
  Eye,
  Building2,
  FlaskConical,
  Cog,
  Monitor,
  Binary,
  Award,
  Clock,
  Factory,
  Beaker,
  Heart,
  Pill,
} from "lucide-react";

const aiComponents = [
  {
    title: "The Proof of Concept (PoC)",
    description:
      "Through the development of a Proof of Concept (PoC), Prototype, or Pilot project, we assist your organization in implementing innovative data-driven solutions designed to transform and enhance your business operations.",
    details:
      "Proof-of-Concept (PoC) projects typically span from a few days to several weeks, with the primary objective of validating a business concept—often still in development—or testing a key assumption. This type of feasibility assessment is conducted on a limited scale, frequently using a small data sample, to demonstrate the viability of the proposed solution.",
    duration: "Several days to several weeks",
    icon: <Lightbulb className="h-8 w-8" />,
    color: "from-blue-500 to-cyan-500",
    services: [
      "Business idea validation",
      "Small-scale data analysis",
      "Feasibility assessment",
      "Risk evaluation",
    ],
  },
  {
    title: "The Working Prototype",
    description:
      "Following the completion of a Proof of Concept (PoC), the development of a functional prototype is typically the next logical step. Prototypes enable the refinement of initial concepts or hypotheses and help address any uncertainties regarding the system’s functionality, design, and user experience.",
    details:
      "Moreover, this stage enables progression toward a more advanced version that incorporates additional data samples or sources, thereby enhancing the system’s functionality. Developing a prototype is a meticulous process that typically spans from several weeks to up to three months.",
    duration: "Several weeks to three months",
    icon: <Settings className="h-8 w-8" />,
    color: "from-blue-500 to-cyan-500",
    services: [
      "Functional prototype development",
      "Enhanced data integration",
      "User interface design",
      "Performance optimization",
    ],
  },
  {
    title: "The Pilot",
    description:
      "At the pilot stage, the solution is considered both feasible and viable; however, the focus shifts to evaluating its performance and effectiveness under real-world conditions.",
    details:
      "By developing a pilot, we deliver a functional system that demonstrates how your data-driven service operates in a production environment, albeit with a limited user base. This stage empowers you to begin making informed decisions based on data-driven insights, while still allowing for minor adjustments and refinements as needed.",
    duration: "30 days to several months",
    icon: <Target className="h-8 w-8" />,
    color: "from-blue-500 to-cyan-500",
    services: [
      "Limited production deployment",
      "Real-world testing",
      "User feedback collection",
      "Performance monitoring",
    ],
  },
  {
    title: "The Running Data-Driven System",
    description:
      "Operational data-driven systems—such as analytical software—are fully scaled software solutions designed to operate seamlessly while continuously generating valuable insights.",
    details:
      "Such a system can operate either online or on-demand and may be hosted in the cloud or deployed on-premises. The development of analytical software typically requires several months to complete.",
    duration: "Couple of months",
    icon: <Monitor className="h-8 w-8" />,
    color: "from-blue-500 to-cyan-500",
    services: [
      "Full-scale deployment",
      "Cloud or on-premises hosting",
      "Automated insights generation",
      "Continuous optimization",
    ],
  },
];

const researchBenefits = [
  "Identify and evaluate alternative solutions applicable to your specific challenge",
  "Address a previously unexplored problem with a novel and tailored solution",
  "Conduct thorough validation of existing methodologies and, where appropriate, develop proprietary solutions to gain a competitive edge",
  "Disseminate insights or methodologies related to your problem-solving approach with the broader community",
  "Explore innovative approaches to effectively address your current challenges and anticipate future needs",
  "Maintain a strong presence within the research community to attract top talent and foster strategic partnerships.",
];

const stats = [
  {
    icon: <Target className="h-8 w-8" />,
    title: "95%",
    subtitle: "Success Rate",
    description: "AI Project delivery",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: "200+",
    subtitle: "AI Components",
    description: "Successfully developed",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "80%",
    subtitle: "Time Reduction",
    description: "In development cycles",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: <Star className="h-8 w-8" />,
    title: "50+",
    subtitle: "Research Papers",
    description: "Published annually",
    color: "from-orange-500 to-red-500",
  },
];

export default function AIComponentsDevelopment() {
  return (
    <div className="min-h-screen bg-light text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/assets/AI-Components-banner.png"
            alt="AI Components Development"
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/assets/ai-components-banner.png";
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
                AI Components Development
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-4xl"
            >
              End-to-end products and design solutions based on artificial
              intelligence modules, machine learning, and data science
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
                  AI Components Excellence
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
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
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

      {/* AI Components Development Section */}
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
              Development of Artificial Intelligence components
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
              className="space-y-6"
            >
              <img
                src="/assets/AI-Components.gif"
                alt="AI Components Development"
                className="w-full h-80 lg:h-96 object-cover rounded-lg"
              />
              
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
                Our comprehensive products and design solutions are built upon
                advanced artificial intelligence, machine learning, and data
                science technologies. We develop fully compliant systems
                tailored to your specific requirements, while maintaining the
                adaptability necessary for future advancements.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                AI Superior delivers value through a strategic focus on both
                success and risk management in AI initiatives. Guided by our
                proven AI Project Life Cycle Framework, we ensure the efficient
                and effective execution of these critical dimensions. The
                framework encompasses multiple stages, as illustrated in the
                accompanying diagram.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Project Life Cycle Framework Section */}
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
              AI Project Life Cycle Framework
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
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
                Our AI Project Life Cycle Framework provides a systematic approach to AI development that ensures successful project delivery from conception to deployment. This proven methodology minimizes risks while maximizing the value and impact of your AI initiatives.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                The framework encompasses four distinct phases: Proof of Concept (PoC), Working Prototype, Pilot Implementation, and Full Production System. Each phase builds upon the previous one, allowing for iterative refinement and validation of your AI solution.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                This structured approach enables organizations to make informed decisions at each stage, ensuring that resources are allocated efficiently and that the final solution meets all business requirements and performance expectations.
              </p>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h4 className="text-xl font-bold text-white mb-4">
                  Framework Benefits
                </h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    Risk mitigation through phased approach
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    Continuous validation and feedback loops
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    Scalable development methodology
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    Clear milestone-based progress tracking
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <img
                src="/assets/AI-Lifecycle.png"
                alt="AI Project Life Cycle Framework"
                className="w-full h-auto object-contain max-w-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="components" className="w-full">
            {/* Custom Tab Design with Vertical Line */}
            <div className="flex flex-col items-center mb-16">
              <TabsList className="bg-transparent p-0 h-auto flex items-center gap-8 border-0 mb-8">
                <TabsTrigger
                  value="components"
                  className="relative bg-white/10 text-white border border-white/20 rounded-lg px-8 py-4 text-lg font-medium hover:bg-white/20 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white data-[state=active]:border-transparent data-[state=active]:shadow-sm backdrop-blur-sm"
                >
                  AI Components
                  {/* Vertical line with dot for AI Components */}
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                    <div className="w-px h-8 bg-gradient-to-b from-blue-500 to-cyan-500"></div>
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                  </div>
                </TabsTrigger>
                <TabsTrigger
                  value="research"
                  className="relative bg-white/10 text-white border border-white/20 rounded-lg px-8 py-4 text-lg font-medium hover:bg-white/20 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white data-[state=active]:border-transparent data-[state=active]:shadow-sm backdrop-blur-sm"
                >
                  AI Research and Projects
                  {/* Vertical line with dot for AI Research and Projects */}
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                    <div className="w-px h-8 bg-gradient-to-b from-blue-500 to-cyan-500"></div>
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                  </div>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="components" className="space-y-8">
              {/* Challenge Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Face your challenges!
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
                <div className="max-w-4xl mx-auto space-y-4">
                  <p className="text-xl text-gray-300">
                    Are you looking to launch a new data-driven service that
                    transforms your data into actionable business insights while
                    streamlining your organizational processes?
                  </p>
                  <p className="text-xl text-gray-300">
                    It is likely that you also aim to ensure this new framework
                    not only meets all defined expectations but also delivers
                    consistently measurable performance.
                  </p>
                  <p className="text-xl font-semibold text-cyan-400">
                    We will manage your success and risk properly!
                  </p>
                </div>
              </motion.div>

              {/* AI Components Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {aiComponents.map((component, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-8 hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 group cursor-pointer h-full">
                      <div className="mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                          <div className="text-white">{component.icon}</div>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                          {component.title}
                        </h3>
                        <Badge
                          variant="outline"
                          className="mb-6 border-cyan-500/50 text-cyan-400 bg-cyan-500/10"
                        >
                          {component.duration}
                        </Badge>
                        <p className="text-gray-300 mb-6">
                          {component.description}
                        </p>
                        <p className="text-gray-300 mb-6">
                          {component.details}
                        </p>
                      </div>
                      <ul className="space-y-2 text-gray-300">
                        {component.services.map((service, serviceIndex) => (
                          <li key={serviceIndex} className="flex items-center">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Value Proposition Note */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  The Proof of Concept is the main part of our Value Proposition
                </h3>
                <p className="text-gray-300 max-w-3xl mx-auto">
                  Our systematic approach ensures that every project phase
                  builds upon the previous one, minimizing risks and maximizing
                  success rates for your AI initiatives.
                </p>
              </motion.div>
            </TabsContent>

            <TabsContent value="research" className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  AI Research and Projects
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                  Machine Learning research is crucial for going forward with AI
                  development and you are often required to answer research
                  questions. While they might be theoretical or practical, they
                  still need to be addressed scientifically.
                </p>
              </motion.div>

              {/* Research Description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-8 hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 group mb-12"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    Scientific Research Excellence
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    As a dedicated team of data scientists and machine learning
                    specialists, we actively engage in scientific research to
                    address some of the most complex and pressing questions
                    within the field. We regularly publish our findings,
                    participate in industry conferences, and contribute to
                    professional workshops.
                  </p>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Our team can support your research initiatives by either
                    assisting with specific activities or managing the entire
                    research process end-to-end. We possess extensive experience
                    in authoring publications for scientific journals,
                    conferences, and workshops, addressing a wide range of
                    challenges in machine learning and artificial intelligence.
                    In collaboration with esteemed partners from leading
                    universities and research institutions, we are committed to
                    delivering high-quality, impactful research.
                  </p>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    Scientific paper writing and publication
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    Conference participation and workshops
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    University and research center partnerships
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    Machine learning problem solving
                  </li>
                </ul>
              </motion.div>

              {/* Research Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-8 text-center">
                  Why AI Scientific Research Activities?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {researchBenefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="h-6 w-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-300">{benefit}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
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
              <Globe className="h-5 w-5 text-cyan-400" />
              <span className="text-white font-medium">
                Trusted Globally by Industry Leaders
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
                Transform Your
              </span>
              <br />
              <span className="text-white">Business with AI</span>
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Join hundreds of companies who trust RT NextGenAI for their AI components and research needs. Our experts are ready to accelerate your innovation journey with cutting-edge solutions.
            </motion.p>

            {/* Benefits Grid */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            >
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <CheckCircle2 className="h-6 w-6 text-white bg-primary rounded-full p-1" />
                <span className="text-white font-semibold">
                  Free Consultation
                </span>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <CheckCircle2 className="h-6 w-6 text-white bg-primary rounded-full p-1" />
                <span className="text-white font-semibold">
                  24/7 Expert Support
                </span>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <CheckCircle2 className="h-6 w-6 text-white bg-primary rounded-full p-1" />
                <span className="text-white font-semibold">
                  Guaranteed Results
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
                <Users className="mr-2 h-5 w-5" />
                Contact Our Experts
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
