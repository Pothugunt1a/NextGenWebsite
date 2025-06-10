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

export default function Careers() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-light"
    >
      {/* Hero Section */}
      <div className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/validation-banner.png"
            alt="Careers at RT NextGen AI"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl text-white"
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 rounded-full backdrop-blur-sm mb-6">
                <Briefcase className="h-4 w-4 text-white" />
                <span className="text-white">Join Our Team</span>
                <Star className="h-4 w-4 text-white fill-current" />
              </div>

              <h1 className="text-5xl font-bold mb-6">
                RT NextGen AI Hiring!
              </h1>
              <p className="text-xl text-white/90">
                Step into a world of innovation, continuous learning, and boundless growth—where equal opportunity is more than a promise; it's our foundation.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">
            Your Potential Meets Possibility
          </h2>
          <p className="text-lg text-slate-600 mb-12 leading-relaxed">
            At RT NextGen AI, we are dedicated to attracting, retaining, and inspiring a diverse, talented, and creative workforce. We value individuals who are eager to learn and grow with us. Our teams work in an entrepreneurial, client-focused environment, engaging with cutting-edge technologies to develop enterprise solutions that shape the future.
          </p>
        </motion.div>
      </div>

      {/* Values Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
            Our Values
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We believe in creating an environment where innovation thrives and every team member can reach their full potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="h-full bg-white hover:shadow-lg transition-shadow duration-300 rounded-2xl p-6 border">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${value.color} mb-4`}>
                  <div className="text-white">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">
                  {value.title}
                </h3>
                <p className="text-slate-600">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Team Culture Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
            Specialized AI Technology Groups
          </h2>
          <p className="text-lg text-slate-600">
            RT NextGen AI is home to several specialized AI technology groups that collaborate closely to deliver impactful, forward-thinking solutions. If you are confident in your experience and skills, and passionate about making meaningful contributions, we invite you to explore a future with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="h-full bg-white hover:shadow-lg transition-shadow duration-300 rounded-2xl p-6 border">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <div className="text-primary">
                      {benefit.icon}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">
                  {benefit.title}
                </h3>
                <p className="text-slate-600">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Application Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
            Ready to Join Our Team?
          </h2>
          <p className="text-xl mb-8 text-slate-600">
            Send your CV/Resume to: <span className="font-semibold text-primary">careers@rtnextgenai.com</span>
          </p>
          <p className="text-lg mb-8 text-slate-600">
            Even if there's no immediate opening, we'll keep your resume on file and reach out when an opportunity that matches your skill set becomes available.
          </p>

          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group mb-8"
            onClick={() => window.location.href = "mailto:careers@rtnextgenai.com"}
          >
            <Mail className="mr-2 h-5 w-5" />
            Send Your Application
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <div className="mt-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 border border-primary/20 rounded-full">
              <Star className="h-5 w-5 text-primary fill-current" />
              <span className="text-lg font-medium text-slate-900">Join RT NextGen AI—where your potential meets possibility</span>
              <Star className="h-5 w-5 text-primary fill-current" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}