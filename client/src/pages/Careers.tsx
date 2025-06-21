import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { useLocation } from "wouter";
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
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Growth",
    description: "Continuous learning and professional development",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Impact",
    description: "Creating solutions that shape the future",
    color: "from-blue-500 to-cyan-500",
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
  const [, setLocation] = useLocation();

  const redirectToContact = () => {
    setLocation("/contact");
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
            src="/assets/Careers-banner.png"
            alt="Careers at RT NextGen AI"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40"></div>

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
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
                style={{ fontWeight: 700 }}
              >
                <span className="bg-gradient-to-r from-white via-blue-100 to-[#0080FF] bg-clip-text text-transparent">
                  RT NextGen AI
                </span>
                <br />
                <span className="text-white">IS HIRING!</span>
              </motion.h1>

              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-xl md:text-2xl text-white mb-8 leading-relaxed max-w-3xl"
              >
                Step into a world of innovation, continuous learning, and
                boundless growth—where equal opportunity is more than a promise;
                it's our foundation.
              </motion.p>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-6 justify-start items-center"
              >
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-10 py-6 text-lg font-bold shadow-2xl shadow-blue-500/25 hover:shadow-cyan-500/40 transition-all duration-300 border-0"
                  onClick={redirectToContact}
                >
                  <Mail className="mr-3 h-6 w-6" />
                  Apply Now
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Button>
                <div className="text-xl font-semibold text-white bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  careers@rtnextgenai.com
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="relative py-16 overflow-hidden">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold mb-8 text-white">
                Your Potential Meets Possibility
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mb-8"></div>
              <p
                className="text-xl text-gray-300 mb-12"
                style={{ lineHeight: "1.75rem" }}
              >
                At RT NextGen AI, we are dedicated to attracting, retaining, and
                inspiring a diverse, talented, and creative workforce. We value
                individuals who are eager to learn and grow with us. Our teams
                work in an entrepreneurial, client-focused environment, engaging
                with cutting-edge technologies to develop enterprise solutions
                that shape the future.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="/assets/Career1.png"
                  alt="Team collaboration and innovation"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-500/20"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-2xl opacity-60"></div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="relative py-16">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-10 w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-2xl opacity-30"></div>
          <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full blur-2xl opacity-30"></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <h2 className="text-5xl font-bold mb-6 text-white">
                Our Core Values
              </h2>
              <p
                className="text-xl text-gray-300"
                style={{ lineHeight: "1.75rem" }}
              >
                We believe in creating an environment where innovation thrives
                and every team member can reach their full potential.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="/assets/Career2.png"
                  alt="Innovation and technology workspace"
                  className="w-full h-[350px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20"></div>
              </div>
            </motion.div>
          </div>

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
                <div className="h-full bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 text-center">
                  <div className="flex justify-center mb-6">
                    <div
                      className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${value.color} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div className="text-white">{value.icon}</div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
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
      <div className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full blur-3xl opacity-25"></div>
          <div className="absolute bottom-20 left-20 w-56 h-56 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full blur-3xl opacity-25"></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="/assets/Career3.png"
                  alt="AI technology and development teams"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20"></div>
              </div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full blur-2xl opacity-60"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center lg:text-left order-1 lg:order-2"
            >
              <h2 className="text-5xl font-bold mb-6 text-white">
                Specialized AI Technology Groups
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 lg:mx-0 mx-auto mb-8"></div>
              <p
                className="text-xl text-gray-300"
                style={{ lineHeight: "1.75rem" }}
              >
                RT NextGen AI is home to several specialized AI technology
                groups that collaborate closely to deliver impactful,
                forward-thinking solutions. If you are confident in your
                experience and skills, and passionate about making meaningful
                contributions, we invite you to explore a future with us.
              </p>
            </motion.div>
          </div>

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
                    <div className="p-4 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl border border-blue-400/30 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-blue-400 group-hover:text-cyan-300 transition-colors">
                        {benefit.icon}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-blue-400 transition-all">
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

      {/* Current Openings Section */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 text-white">
              Current Openings
            </h2>
            <div className="w-40 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              style={{ lineHeight: "1.75rem" }}
            >
              Join our dynamic team and shape the future of AI-driven validation
              solutions
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0">
                <img
                  src="/assets/current-openings.jpg"
                  alt="Current Openings Background"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/80"></div>
              </div>
              <div className="relative p-6">
                <div className="space-y-4">
                  <div
                    className="grid grid-cols-3 gap-4 py-4 border-b-2 mb-6"
                    style={{ borderColor: "hsl(var(--primary))" }}
                  >
                    <span className="text-white font-bold text-lg text-left">
                      Job Title
                    </span>
                    <span className="text-white font-bold text-lg text-left">
                      Experience & Location
                    </span>
                    <span className="text-white font-bold text-lg text-center">
                      Apply
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-4 items-center py-3 border-b border-white/10">
                    <span className="text-white font-medium text-left">
                      AI Cloud Engineer
                    </span>
                    <span className="text-white text-left">
                      5 Years • Dallas, TX
                    </span>
                    <div className="text-center">
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white"
                        onClick={redirectToContact}
                      >
                        Apply
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 items-center py-3 border-b border-white/10">
                    <span className="text-white font-medium text-left">
                      AI Support Engineer
                    </span>
                    <span className="text-white text-left">
                      7 Years • Dallas, TX
                    </span>
                    <div className="text-center">
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white"
                        onClick={redirectToContact}
                      >
                        Apply
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 items-center py-3 border-b border-white/10">
                    <span className="text-white font-medium text-left">
                      AI DevOps Cloud Engineer
                    </span>
                    <span className="text-white text-left">
                      7 Years • Dallas, TX
                    </span>
                    <div className="text-center">
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white"
                        onClick={redirectToContact}
                      >
                        Apply
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 items-center py-3 border-b border-white/10">
                    <span className="text-white font-medium text-left">
                      AI Technical Project Manager, Service Delivery & AI
                    </span>
                    <span className="text-white text-left">
                      7 Years • Dallas, TX
                    </span>
                    <div className="text-center">
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white"
                        onClick={redirectToContact}
                      >
                        Apply
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 items-center py-3 border-b border-white/10">
                    <span className="text-white font-medium text-left">
                      (AI) Project Leader
                    </span>
                    <span className="text-white text-left">
                      10 Years • Dallas, TX
                    </span>
                    <div className="text-center">
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white"
                        onClick={redirectToContact}
                      >
                        Apply
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 items-center py-3 border-b border-white/10">
                    <span className="text-white font-medium text-left">
                      Associate Validation Engineer
                    </span>
                    <span className="text-white text-left">
                      5 Years • Pharma
                    </span>
                    <div className="text-center">
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white"
                        onClick={redirectToContact}
                      >
                        Apply
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 items-center py-3 border-b border-white/10">
                    <span className="text-white font-medium text-left">
                      Quality Engineer
                    </span>
                    <span className="text-white text-left">
                      5 Years • Pharma
                    </span>
                    <div className="text-center">
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white"
                        onClick={redirectToContact}
                      >
                        Apply
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 items-center py-3 border-b border-white/10">
                    <span className="text-white font-medium text-left">
                      Quality Specialist
                    </span>
                    <span className="text-white text-left">
                      5 Years • Pharma
                    </span>
                    <div className="text-center">
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white"
                        onClick={redirectToContact}
                      >
                        Apply
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 items-center py-3 border-b border-white/10">
                    <span className="text-white font-medium text-left">
                      Manufacturing Quality Engineer
                    </span>
                    <span className="text-white text-left">
                      5 Years • Pharma
                    </span>
                    <div className="text-center">
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white"
                        onClick={redirectToContact}
                      >
                        Apply
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 items-center py-3 border-b border-white/10">
                    <span className="text-white font-medium text-left">
                      Supply Quality Engineer
                    </span>
                    <span className="text-white text-left">
                      5 Years • Pharma
                    </span>
                    <div className="text-center">
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white"
                        onClick={redirectToContact}
                      >
                        Apply
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 items-center py-3">
                    <span className="text-white font-medium text-left">
                      Process Engineer
                    </span>
                    <span className="text-white text-left">
                      5 Years • Pharma & Chemical
                    </span>
                    <div className="text-center">
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white"
                        onClick={redirectToContact}
                      >
                        Apply
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Section */}
      <div id="application-section" className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/20 via-blue-400/20 to-cyan-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold mb-8 text-white">
                Ready to Join Our Team?
              </h2>

              <div className="w-40 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-12"></div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-5xl mx-auto"
          >
            <div className="relative bg-gradient-to-br from-slate-800/40 to-blue-900/40 backdrop-blur-2xl border border-cyan-500/20 rounded-3xl p-12 mb-12 overflow-hidden">
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <img
                  src="/assets/Career4.png"
                  alt="Professional application background"
                  className="w-full h-full object-cover opacity-60 brightness-125"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 to-blue-900/60"></div>
              </div>

              <div className="relative z-10">
                <p className="text-2xl mb-8 text-gray-200">
                  Send your CV/Resume to:
                </p>
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-8">
                  careers@rtnextgenai.com
                </div>
                <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-10">
                  Even if there's no immediate opening, we'll keep your resume
                  on file and reach out when an opportunity that matches your
                  skill set becomes available.
                </p>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="group bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-12 py-8 text-xl font-bold shadow-2xl shadow-blue-500/25 hover:shadow-cyan-500/40 transition-all duration-300 border-0 rounded-2xl"
                    onClick={redirectToContact}
                  >
                    <Mail className="mr-4 h-7 w-7" />
                    Send Your Resume
                    <ArrowRight className="ml-4 h-7 w-7 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-full backdrop-blur-xl"
            >
              <Star className="h-6 w-6 text-cyan-400 fill-current" />
              <span className="text-xl font-medium text-white">
                Join RT NextGen AI—where your potential meets possibility
              </span>
              <Star className="h-6 w-6 text-blue-400 fill-current" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
