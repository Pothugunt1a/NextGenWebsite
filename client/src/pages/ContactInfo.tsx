import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Users,
  Sparkles,
  Star,
  ArrowRight,
  Headphones,
  Shield,
  Target,
} from "lucide-react";
import Contact from "../components/Contact";

const contactFeatures = [
  {
    icon: <Headphones className="h-8 w-8" />,
    title: "Expert Support",
    description: "Direct access to our experienced IT staff",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Detailed Analysis",
    description: "Comprehensive assessment of your AI implementation plan",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Custom Solutions",
    description: "Tailored AI solutions for your organization's needs",
    color: "from-blue-500 to-cyan-500",
  },
];

export default function ContactInfo() {
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
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900"></div>
          <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-3xl opacity-15"></div>
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center gap-2 px-6 py-3 mb-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-full backdrop-blur-sm"
            >
              <Sparkles className="h-5 w-5 text-cyan-400" />
              <span className="text-cyan-300 font-medium">
                AI Solutions & Expert Support
              </span>
              <Star className="h-4 w-4 text-blue-400 fill-current" />
            </motion.div>

            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-white via-blue-100 to-[#0080FF] bg-clip-text text-transparent">
                Get Expert
              </span>
              <br />
              <span className="text-white">AI Guidance</span>
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-4xl mx-auto"
              style={{ lineHeight: '1.75rem' }}
            >
              For Further Information And To Learn More About Our AI Solutions Along With How We Can Support Your Organisation In Harnessing The Full Potential Of AI Make Contact With Our Experienced IT Staff.
            </motion.p>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto"
              style={{ lineHeight: '1.75rem' }}
            >
              We're available for 8 hours a day! Contact us to request a detailed analysis and assessment of your plan.
            </motion.p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mb-12"
            >
              <div className="text-2xl font-bold text-cyan-400 mb-4">
                REACH OUT NOW!
              </div>
              <div className="text-4xl font-bold text-white mb-8">
                +1 (469) 666-0019
              </div>
              <Button
                size="lg"
                className="group bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-10 py-6 text-lg font-semibold shadow-2xl shadow-blue-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
                onClick={() => window.location.href = 'tel:+14696660019'}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
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
              Why Choose Our Support
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" style={{ lineHeight: '1.75rem' }}>
              Our experienced team provides comprehensive AI solutions and dedicated support
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group"
              >
                <Card className="h-full bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/20 hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
                  <CardContent className="p-8 text-center">
                    <div className="flex justify-center mb-6">
                      <div
                        className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} group-hover:scale-110 transition-transform duration-300`}
                      >
                        <div className="text-white">{feature.icon}</div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white transition-all">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed" style={{ lineHeight: '1.75rem' }}>
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
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
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" style={{ lineHeight: '1.75rem' }}>
              Ready to transform your organization with AI? Contact us today for a detailed consultation
            </p>
          </motion.div>
          <Contact />
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <Card className="bg-white/5 border border-white/10 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <Phone className="h-8 w-8 text-cyan-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                    <p className="text-gray-300">+1 (469) 666-0019</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-center"
              >
                <Card className="bg-white/5 border border-white/10 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <Mail className="h-8 w-8 text-blue-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                    <p className="text-gray-300">contact@rtnextgenai.com</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-center"
              >
                <Card className="bg-white/5 border border-white/10 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <Clock className="h-8 w-8 text-cyan-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Hours</h3>
                    <p className="text-gray-300">8 Hours Daily</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
