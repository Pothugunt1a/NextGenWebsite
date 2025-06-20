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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Components Development
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              End-to-end products and design solutions based on artificial intelligence modules, machine learning, and data science
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3"
            >
              Start Your AI Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              AI Superior's Value Proposition
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our value proposition is about effective success and risk management for our clients in AI projects. 
              With our established AI Project Life Cycle Framework, we ensure the effective implementation of these two criteria.
            </p>
          </motion.div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
                  <CardContent className="p-0">
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center mx-auto mb-4 text-white`}
                    >
                      {stat.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      {stat.title}
                    </h3>
                    <p className="text-lg font-semibold text-gray-700 mb-1">
                      {stat.subtitle}
                    </p>
                    <p className="text-gray-600">{stat.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="components" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-12 h-14">
              <TabsTrigger value="components" className="text-lg font-semibold">
                AI Components
              </TabsTrigger>
              <TabsTrigger value="research" className="text-lg font-semibold">
                AI Research and Projects
              </TabsTrigger>
            </TabsList>

            <TabsContent value="components" className="space-y-8">
              {/* Challenge Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Face your challenges!
                </h2>
                <div className="max-w-4xl mx-auto space-y-4">
                  <p className="text-xl text-gray-600">
                    Do you want to introduce a new data-driven service that turns your data into business insights while optimizing your company processes?
                  </p>
                  <p className="text-xl text-gray-600">
                    Probably, you want to ensure this new framework meets all expectations, along with clear-cut performance.
                  </p>
                  <p className="text-xl font-semibold text-blue-600">
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
                    <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white">
                      <CardContent className="p-8">
                        <div className="flex items-start gap-4 mb-4">
                          <div
                            className={`w-16 h-16 rounded-full bg-gradient-to-r ${component.color} flex items-center justify-center text-white flex-shrink-0`}
                          >
                            {component.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                              {component.title}
                            </h3>
                            <Badge variant="secondary" className="mb-4">
                              {component.duration}
                            </Badge>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                          {component.description}
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
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
                className="text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  The Proof of Concept is the main part of our Value Proposition
                </h3>
                <p className="text-gray-700 max-w-3xl mx-auto">
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
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  AI Research and Projects
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto">
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
                className="bg-white rounded-2xl p-8 shadow-lg mb-12"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white flex-shrink-0">
                    <BookOpen className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Scientific Research Excellence
                    </h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      As a team of data scientists and machine learning experts, we continuously conduct scientific research 
                      to answer some of the most challenging questions that arise in the community. We publish our results, 
                      attend conferences and participate in workshops.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
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
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
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
                      <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">{benefit}</p>
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