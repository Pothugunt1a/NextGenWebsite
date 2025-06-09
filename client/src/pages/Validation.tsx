import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  Cog,
  Monitor,
  FlaskConical,
  Binary,
  CheckCircle2,
  ArrowRight,
  Shield,
  Target,
  Users,
  Award,
  Clock,
  TrendingUp,
  Star,
  Zap,
  Globe,
  BookOpen,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const validationServices = [
  {
    id: 1,
    icon: <Cog className="h-12 w-12" />,
    title: "Equipment Validation",
    subtitle: "Engineering Excellence",
    description: "Comprehensive equipment validation services ensuring optimal performance, compliance, and reliability across all manufacturing systems.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "from-blue-500 to-cyan-500",
    features: [
      "Instrumentation Calibration",
      "Performance Qualification", 
      "Compliance Documentation",
      "Risk Assessment"
    ],
    metrics: { accuracy: "99.9%", time: "30% faster", compliance: "100%" }
  },
  {
    id: 2,
    icon: <FlaskConical className="h-12 w-12" />,
    title: "Cleaning Validation",
    subtitle: "Quality Assurance",
    description: "Risk-based cleaning validation protocols incorporating critical quality attributes and regulatory compliance standards.",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "from-green-500 to-emerald-500",
    features: [
      "Regulatory Guidelines",
      "Analytical Testing",
      "Sampling Protocols", 
      "Method Development"
    ],
    metrics: { accuracy: "99.8%", time: "25% faster", compliance: "100%" }
  },
  {
    id: 3,
    icon: <Monitor className="h-12 w-12" />,
    title: "Computer System Validation",
    subtitle: "Digital Compliance",
    description: "Complete lifecycle validation for computer systems including planning, testing, documentation, and continuous monitoring.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "from-purple-500 to-violet-500",
    features: [
      "System Lifecycle Management",
      "Regulatory Compliance",
      "Risk-Based Approach",
      "Documentation Control"
    ],
    metrics: { accuracy: "99.7%", time: "40% faster", compliance: "100%" }
  },
  {
    id: 4,
    icon: <Binary className="h-12 w-12" />,
    title: "Process Validation", 
    subtitle: "Manufacturing Excellence",
    description: "Systematic approach to process validation ensuring consistent product quality and regulatory compliance throughout manufacturing.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "from-orange-500 to-red-500",
    features: [
      "Risk Management",
      "Statistical Analysis",
      "Process Control",
      "Continuous Monitoring"
    ],
    metrics: { accuracy: "99.6%", time: "35% faster", compliance: "100%" }
  }
];

const stats = [
  {
    icon: <Shield className="h-8 w-8" />,
    title: "100%",
    subtitle: "Compliance Rate",
    description: "Regulatory adherence",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "99.8%",
    subtitle: "Accuracy",
    description: "Validation precision",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "50%",
    subtitle: "Time Reduction",
    description: "Faster implementation",
    color: "from-purple-500 to-violet-500"
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "200+",
    subtitle: "Projects Completed",
    description: "Successful validations",
    color: "from-orange-500 to-red-500"
  }
];

const whyChooseUs = [
  {
    icon: <Award className="h-10 w-10" />,
    title: "Industry Expertise",
    description: "Decades of experience in pharmaceutical and life science validation with deep regulatory knowledge.",
    color: "from-blue-500 to-cyan-500",
    badge: "15+ Years"
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: "Expert Team",
    description: "Certified validation professionals with extensive experience across multiple industries and regulations.",
    color: "from-green-500 to-emerald-500",
    badge: "50+ Experts"
  },
  {
    icon: <Shield className="h-10 w-10" />,
    title: "Regulatory Compliance",
    description: "Comprehensive understanding of FDA, EMA, and other global regulatory requirements and standards.",
    color: "from-purple-500 to-violet-500",
    badge: "100% Compliant"
  },
  {
    icon: <Target className="h-10 w-10" />,
    title: "Quality Focus",
    description: "Commitment to delivering high-quality validation services that exceed industry standards and expectations.",
    color: "from-orange-500 to-red-500",
    badge: "ISO Certified"
  }
];

export default function Validation() {
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
        {/* Background with parallax effect */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/50 to-purple-900/50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,107,107,0.2),transparent)] animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="inline-flex items-center gap-2 px-6 py-3 mb-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/30 rounded-full backdrop-blur-sm"
            >
              <Sparkles className="h-5 w-5 text-blue-400" />
              <span className="text-blue-300 font-medium">Industry-Leading Validation Excellence</span>
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
            </motion.div>

            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-6xl md:text-8xl font-bold mb-8 leading-tight"
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Validation
              </span>
              <br />
              <span className="text-white">Excellence</span>
            </motion.h1>
            
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto"
            >
              Transforming life sciences through precision validation, regulatory excellence, and cutting-edge compliance solutions
            </motion.p>
            
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            >
              <Button size="lg" className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-10 py-6 text-lg font-semibold shadow-2xl shadow-blue-500/25">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="group border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 px-10 py-6 text-lg font-semibold backdrop-blur-sm">
                <BookOpen className="mr-2 h-5 w-5" />
                Case Studies
                <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="absolute bottom-16 left-0 right-0">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
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
                  <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    <div className="relative z-10">
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} mb-4`}>
                        <div className="text-white">
                          {stat.icon}
                        </div>
                      </div>
                      <div className="text-3xl font-bold mb-2 text-white">{stat.title}</div>
                      <div className="text-sm font-semibold text-gray-300 mb-1">{stat.subtitle}</div>
                      <div className="text-xs text-gray-400">{stat.description}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Validation Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive validation services tailored to meet regulatory requirements and industry standards
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {validationServices.map((service, index) => (
              <motion.div key={service.id} variants={itemVariants}>
                <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm hover:from-slate-700/40 hover:to-slate-800/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                  <CardContent className="p-0 relative">
                    {/* Gradient Background */}
                    <div className="absolute inset-0">
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 p-8">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.color} shadow-lg`}>
                          <div className="text-white">
                            {service.icon}
                          </div>
                        </div>
                        <Badge variant="secondary" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                          {service.subtitle}
                        </Badge>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-300 leading-relaxed mb-8 text-base">
                        {service.description}
                      </p>

                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-4 mb-8">
                        <div className="text-center p-3 rounded-xl bg-white/5 backdrop-blur-sm">
                          <div className="text-lg font-bold text-white">{service.metrics.accuracy}</div>
                          <div className="text-xs text-gray-400">Accuracy</div>
                        </div>
                        <div className="text-center p-3 rounded-xl bg-white/5 backdrop-blur-sm">
                          <div className="text-lg font-bold text-white">{service.metrics.time}</div>
                          <div className="text-xs text-gray-400">Time Saved</div>
                        </div>
                        <div className="text-center p-3 rounded-xl bg-white/5 backdrop-blur-sm">
                          <div className="text-lg font-bold text-white">{service.metrics.compliance}</div>
                          <div className="text-xs text-gray-400">Compliance</div>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="space-y-3 mb-8">
                        {service.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-3 text-sm text-gray-300 group-hover:text-white transition-colors"
                          >
                            <div className={`p-1 rounded-full bg-gradient-to-r ${service.color}`}>
                              <CheckCircle2 className="h-3 w-3 text-white" />
                            </div>
                            <span className="font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <Button
                        className={`w-full group/btn bg-gradient-to-r ${service.color} hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 text-white font-semibold`}
                      >
                        <Zap className="mr-2 h-4 w-4" />
                        Explore Solution
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose RT NextGenAI</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Partner with industry leaders in validation services
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <div className="relative text-center p-8 rounded-2xl bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 overflow-hidden">
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    {/* Badge */}
                    <div className="absolute -top-2 -right-2">
                      <Badge variant="secondary" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 text-xs font-bold">
                        {item.badge}
                      </Badge>
                    </div>

                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                      <div className={`relative p-5 rounded-2xl bg-gradient-to-br ${item.color} shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                        <div className="text-white">
                          {item.icon}
                        </div>
                        {/* Glow effect */}
                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300`} />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-4 text-white group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-300 group-hover:text-gray-200 leading-relaxed transition-colors duration-300">
                      {item.description}
                    </p>

                    {/* Hover indicator */}
                    <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center justify-center gap-2 text-sm text-blue-400">
                        <span>Learn More</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center p-16 rounded-3xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-white/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact our validation experts to discuss your specific requirements and how we can help ensure your compliance and quality goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg">
                Download Brochure
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
