import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { useLocation } from "wouter";
import {
  Beaker,
  FlaskConical,
  Stethoscope,
  ScrollText,
  Shield,
  ArrowRight,
  CheckCircle,
  Target,
  TrendingUp,
  Users,
  Clock,
  Award,
} from "lucide-react";

const services = [
  {
    icon: <Stethoscope className="h-8 w-8" />,
    title: "Clinical Operations",
    description:
      "Develop solutions that increase efficiencies, productivity, and quality in your clinical trial from study start-up through completion.",
    features: ["Study Start-up", "Patient Recruitment", "Site Operations", "Project Delivery"]
  },
  {
    icon: <FlaskConical className="h-8 w-8" />,
    title: "Biometrics",
    description:
      "Leverage our life science knowledge for guidance on biometric solutions, including clinical data management and SAS programming.",
    features: ["Clinical Data Management", "SAS Programming", "Data Quality", "Trial Solutions"]
  },
  {
    icon: <Beaker className="h-8 w-8" />,
    title: "Pharmacovigilance / Drug Safety",
    description:
      "Partner with us for consultation that streamlines your end-to-end drug safety surveillance activities for investigational and post-market products.",
    features: ["Safety Surveillance", "Risk Assessment", "Compliance", "Post-Market Monitoring"]
  },
  {
    icon: <ScrollText className="h-8 w-8" />,
    title: "Regulatory Affairs",
    description:
      "Engage our consultative approach to quickly identify solutions that reduce costs, accelerate approval timelines and improve your processes.",
    features: ["FDA Approval", "Regulatory Strategy", "Submission Management", "Compliance"]
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Quality and Compliance",
    description:
      "Create a long-term plan that ensures the production of quality products while meeting compliance requirements.",
    features: ["Quality Assurance", "Regulatory Compliance", "Process Improvement", "Risk Management"]
  },
];

const benefits = [
  {
    icon: <Target className="h-6 w-6" />,
    title: "Accelerated Timelines",
    description: "Reduce time-to-market with streamlined processes"
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Enhanced Efficiency",
    description: "Optimize operations with cutting-edge technology"
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Expert Guidance",
    description: "Access specialized life science professionals"
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Compliance Assurance",
    description: "Meet regulatory standards with confidence"
  }
];

export default function LifeScience() {
  const [, setLocation] = useLocation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-900"
    >
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/Lifescience_banner.jpg"
            alt="Life Science Digital Solutions"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>

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
                  Life Science
                </span>
                <br />
                <span className="text-white">SOLUTIONS</span>
              </motion.h1>

              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-xl md:text-2xl text-white mb-8 leading-relaxed max-w-3xl"
              >
                Advancing healthcare through innovative technology solutions for
                pharmaceutical, biotech, and healthcare organizations
              </motion.p>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-6 justify-start items-center"
              >
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-10 py-6 text-lg font-bold shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 border-0"
                  onClick={() => setLocation("/contact")}
                >
                  Get Started
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Button>
                <div className="text-xl font-semibold text-white bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  info@rtnextgenai.com
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Our Services
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive life science solutions designed to accelerate your research and development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group"
              >
                <Card className="h-full bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm text-gray-400">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-gray-800/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Why Choose Us
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Transform Your Life Science Operations?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Partner with us to accelerate your research, ensure compliance, and bring life-changing treatments to market faster.
            </p>
            <Button
              onClick={() => setLocation("/contact")}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}