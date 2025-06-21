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
    description: "By creating a Proof of Concept (PoC), a Prototype, or a Pilot project, we will help your company establish new data-driven solutions that will transform your business operations.",
    details: "Proof-of-concept (PoC) projects generally last from several days to several weeks, with the primary goal of validating a business idea (sometimes incomplete) or an assumption. Such feasibility study is performed at a relatively small scale often by utilizing a small data sample, proving that the solution is viable.",
    duration: "Several days to several weeks",
    icon: <Lightbulb className="h-8 w-8" />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "The Working Prototype",
    description: "Typically, building a working prototype is the next step after executing a PoC. Prototypes allow you to refine your initial idea or hypothesis and resolve uncertainties about how it operates, looks and feels.",
    details: "Additionally, this allows you to go forward with a version that requires more data samples or so-called sources to enrich functionality. Creating a prototype is tedious work! It can usually go from several weeks to three months.",
    duration: "Several weeks to three months",
    icon: <Settings className="h-8 w-8" />,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "The Pilot",
    description: "In a pilot stage, you believe the solution is realistic and acceptable, but you want to understand how it works in reality.",
    details: "By building a pilot, we create a running system that allows you to evidence how your data-driven service works in production, though with a limited audience. It already brings you the power to take action based on data's insight. At this point, you can still make minor modifications.",
    duration: "30 days to several months",
    icon: <Target className="h-8 w-8" />,
    color: "from-purple-500 to-violet-500",
  },
  {
    title: "The Running Data-Driven System",
    description: "Running data-driven systems (analytical software) are the software products that seamlessly run and generate insights on the full scale.",
    details: "Such a system might be running online or by demand and be stored on the cloud or on-premises. It usually takes a couple of months to create analytical software.",
    duration: "Couple of months",
    icon: <Monitor className="h-8 w-8" />,
    color: "from-orange-500 to-red-500",
  },
];

const researchBenefits = [
  "Understand what are the alternative solutions to your problem",
  "Solve a problem that was never addressed before",
  "Perform extensive validation of existing approaches and possibly develop your own to obtain a competitive advantage",
  "Share knowledge or the way you approach the problem with the community",
  "Discover new ways of addressing your current or future problems",
  "Stay on top of your research community to attract talent and partnerships",
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
            src="./assets/AI-Components-banner.png"
            alt="AI Components Development"
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "./assets/ai-components-banner.png";
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
              End-to-end products and design solutions based on artificial intelligence modules, machine learning, and data science
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
            >
              <img
                src="./assets/AI-Components.gif"
                alt="AI Components Development"
                className="w-full h-80 lg:h-96 object-cover"
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
                Our end-to-end products and design solutions are based on artificial intelligence modules, machine learning, and data science. Our team will build you a fully compliant solution with your requirements in mind while ensuring flexibility for future evolution.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                AI Superior's Value Proposition is about effective success and risk management for our clients in AI Projects. With our established AI Project Life Cycle Framework, we ensure the effective implementation of these two criteria. The framework has several stages presented in the following graphic.
              </p>
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
              
              {/* Additional vertical line with dot for visual separation */}
              <div className="flex flex-col items-center mt-16">
                <div className="w-px h-16 bg-gradient-to-b from-blue-500 to-cyan-500"></div>
                <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
              </div>
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
                    Do you want to introduce a new data-driven service that turns your data into business insights while optimizing your company processes?
                  </p>
                  <p className="text-xl text-gray-300">
                    Probably, you want to ensure this new framework meets all expectations, along with clear-cut performance.
                  </p>
                  <p className="text-xl font-semibold text-cyan-400">
                    We will manage your success and risk properly!
                  </p>
                </div>
              </motion.div>

              {/* AI Components Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {aiComponents.map((component, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full hover:shadow-xl transition-all duration-300 border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 group">
                      <CardContent className="p-8 relative">
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${component.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-lg`}
                        />
                        <div className="flex items-start gap-4 mb-4 relative z-10">
                          <div
                            className={`w-16 h-16 rounded-full bg-gradient-to-r ${component.color} flex items-center justify-center text-white flex-shrink-0`}
                          >
                            {component.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-white mb-2">
                              {component.title}
                            </h3>
                            <Badge variant="outline" className="mb-4 border-cyan-500/50 text-cyan-400 bg-cyan-500/10">
                              {component.duration}
                            </Badge>
                          </div>
                        </div>
                        <p className="text-gray-300 mb-4 leading-relaxed relative z-10">
                          {component.description}
                        </p>
                        <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                          {component.details}
                        </p>
                      </CardContent>
                    </Card>
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
                  Our systematic approach ensures that every project phase builds upon the previous one, 
                  minimizing risks and maximizing success rates for your AI initiatives.
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
                  Machine Learning research is crucial for going forward with AI development and you are often required to answer research questions. 
                  While they might be theoretical or practical, they still need to be addressed scientifically.
                </p>
              </motion.div>

              {/* Research Description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 mb-12"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white flex-shrink-0">
                    <BookOpen className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Scientific Research Excellence
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      As a team of data scientists and machine learning experts, we continuously conduct scientific research 
                      to answer some of the most challenging questions that arise in the community. We publish our results, 
                      attend conferences and participate in workshops.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      Our team will help you perform research activities or take over the entire coordination and research itself. 
                      We have solid experience writing papers for scientific journals, conferences and workshops, approaching 
                      many types of machine learning and AI problems. We work closely with our partners from leading universities 
                      and research centers to continually provide quality and valuable research.
                    </p>
                  </div>
                </div>
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Let's discuss how our AI components and research expertise can drive your next breakthrough innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                Contact Our Experts
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}