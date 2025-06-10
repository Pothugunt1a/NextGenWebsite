import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  Mail,
  Users,
  Lightbulb,
  Target,
  Globe,
  ArrowRight,
  Briefcase,
  Heart,
  Star,
  Building2,
  Zap,
  TrendingUp,
} from "lucide-react";

export default function Careers() {
  const values = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge AI technologies",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Diversity",
      description: "Building an inclusive and talented workforce",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Growth",
      description: "Continuous learning and professional development",
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Impact",
      description: "Creating solutions that shape the future",
      color: "from-orange-500 to-red-500",
    },
  ];

  const benefits = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Career Development",
      description: "Opportunities for advancement and skill building",
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "Collaborative Environment",
      description: "Work with specialized AI technology groups",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Cutting-Edge Technology",
      description: "Engage with the latest AI and enterprise solutions",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Work-Life Balance",
      description: "Supportive environment focused on well-being",
    },
  ];

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 rounded-full backdrop-blur-sm mb-6"
            >
              <Briefcase className="h-4 w-4 text-white" />
              <span className="text-white">Join Our Team</span>
              <Star className="h-4 w-4 text-white fill-current" />
            </motion.div>

            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-[#0080FF] bg-clip-text text-transparent"
            >
              RT NextGen AI Hiring!
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed"
            >
              Step into a world of innovation, continuous learning, and boundless growth—where equal opportunity is more than a promise; it's our foundation.
            </motion.p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex justify-center"
            >
              <Button
                size="lg"
                className="group bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
                onClick={() => window.location.href = "mailto:careers@rtnextgenai.com"}
              >
                <Mail className="mr-2 h-5 w-5" />
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
                Your Potential Meets Possibility
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
                At RT NextGen AI, we are dedicated to attracting, retaining, and inspiring a diverse, talented, and creative workforce. We value individuals who are eager to learn and grow with us. Our teams work in an entrepreneurial, client-focused environment, engaging with cutting-edge technologies to develop enterprise solutions that shape the future.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Our Values
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                We believe in creating an environment where innovation thrives and every team member can reach their full potential.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <CardContent className="p-6 text-center">
                      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${value.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <div className="text-white">
                          {value.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Culture Section */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Specialized AI Technology Groups
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                RT NextGen AI is home to several specialized AI technology groups that collaborate closely to deliver impactful, forward-thinking solutions. If you are confident in your experience and skills, and passionate about making meaningful contributions, we invite you to explore a future with us.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 p-6 bg-white dark:bg-slate-700 rounded-xl shadow-lg">
                    <div className="flex-shrink-0 p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg">
                      <div className="text-white">
                        {benefit.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Application Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-[#0080FF] bg-clip-text text-transparent">
                Ready to Join Our Team?
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Send your CV/Resume to: <span className="font-semibold text-white">careers@rtnextgenai.com</span>
              </p>
              <p className="text-lg mb-8 text-blue-200">
                Even if there's no immediate opening, we'll keep your resume on file and reach out when an opportunity that matches your skill set becomes available.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group"
                onClick={() => window.location.href = "mailto:careers@rtnextgenai.com"}
              >
                <Mail className="mr-2 h-5 w-5" />
                Send Your Application
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-12">
              <Badge variant="outline" className="border-white/20 text-white text-base px-6 py-3 bg-white/10 backdrop-blur-sm">
                Join RT NextGen AI—where your potential meets possibility
              </Badge>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}