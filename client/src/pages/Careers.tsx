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
    color: "from-blue-500 to-cyan-500",
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

export default function Careers() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-light text-white"
    >
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/90 to-cyan-900/90"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-40 right-32 w-48 h-48 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full blur-3xl opacity-30 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse delay-500"></div>
        </div>
        
        <div className="relative flex items-center justify-center h-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 rounded-full backdrop-blur-xl mb-8"
              >
                <Briefcase className="h-5 w-5 text-cyan-400" />
                <span className="text-white font-medium">Join Our Elite Team</span>
                <Star className="h-5 w-5 text-blue-400 fill-current" />
              </motion.div>

              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent leading-tight"
              >
                RT NextGen AI
                <br />
                <span className="text-5xl md:text-7xl">IS HIRING!</span>
              </motion.h1>

              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto"
              >
                Step into a world of <span className="text-cyan-400 font-semibold">innovation</span>, continuous <span className="text-blue-400 font-semibold">learning</span>, and boundless <span className="text-cyan-500 font-semibold">growth</span>—where equal opportunity is more than a promise; it's our foundation.
              </motion.p>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              >
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-10 py-6 text-lg font-bold shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 border-0"
                  onClick={() => window.location.href = "mailto:careers@rtnextgenai.com"}
                >
                  <Mail className="mr-3 h-6 w-6" />
                  Apply Now
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Button>
                <div className="text-sm text-gray-400">
                  careers@rtnextgenai.com
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800/80 to-blue-800/80"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500"></div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto text-center"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-8 text-white">
              Your <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Potential</span> Meets <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">Possibility</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              At RT NextGen AI, we are dedicated to attracting, retaining, and inspiring a diverse, talented, and creative workforce. We value individuals who are eager to learn and grow with us. Our teams work in an entrepreneurial, client-focused environment, engaging with cutting-edge technologies to develop enterprise solutions that shape the future.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Values Section */}
      <div className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 to-blue-900/70"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-10 w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-2xl opacity-30"></div>
          <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full blur-2xl opacity-30"></div>
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
              Our <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Core Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We believe in creating an environment where innovation thrives and every team member can reach their full potential.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group"
              >
                <div className="h-full bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${value.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Culture Section */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-slate-900/80"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full blur-3xl opacity-25"></div>
          <div className="absolute bottom-20 left-20 w-56 h-56 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full blur-3xl opacity-25"></div>
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-5xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
              Specialized <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">AI Technology</span> Groups
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 leading-relaxed">
              RT NextGen AI is home to several specialized AI technology groups that collaborate closely to deliver impactful, forward-thinking solutions. If you are confident in your experience and skills, and passionate about making meaningful contributions, we invite you to explore a future with us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.3, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group"
              >
                <div className="h-full bg-gradient-to-br from-slate-800/60 to-blue-900/60 backdrop-blur-xl border border-emerald-500/20 rounded-3xl p-8 hover:border-cyan-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20">
                  <div className="flex items-center mb-6">
                    <div className="p-4 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-2xl border border-emerald-400/30 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-emerald-400 group-hover:text-cyan-300 transition-colors">
                        {benefit.icon}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-emerald-300 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Section */}
      <div className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-blue-900/80 to-cyan-900/80"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/20 via-blue-400/20 to-cyan-500/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-5xl mx-auto"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-8 text-white">
              Ready to <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">Join Our Team?</span>
            </h2>
            
            <div className="w-40 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 mx-auto mb-12"></div>
            
            <div className="bg-gradient-to-br from-slate-800/40 to-blue-900/40 backdrop-blur-2xl border border-cyan-500/20 rounded-3xl p-12 mb-12">
              <p className="text-2xl mb-8 text-gray-200">
                Send your CV/Resume to:
              </p>
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-8">
                careers@rtnextgenai.com
              </div>
              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-10">
                Even if there's no immediate opening, we'll keep your resume on file and reach out when an opportunity that matches your skill set becomes available.
              </p>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-12 py-8 text-xl font-bold shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 border-0 rounded-2xl"
                  onClick={() => window.location.href = "mailto:careers@rtnextgenai.com"}
                >
                  <Mail className="mr-4 h-7 w-7" />
                  Send Your Application
                  <ArrowRight className="ml-4 h-7 w-7 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-full backdrop-blur-xl"
            >
              <Star className="h-6 w-6 text-cyan-400 fill-current" />
              <span className="text-xl font-medium text-white">Join RT NextGen AI—where your potential meets possibility</span>
              <Star className="h-6 w-6 text-blue-400 fill-current" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}