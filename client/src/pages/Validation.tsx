import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
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
} from "lucide-react";

const validationServices = [
  {
    id: 1,
    icon: <Cog className="h-16 w-16 text-blue-400" />,
    title: "Equipment Validation",
    subtitle: "Engineering Excellence",
    description: "Comprehensive equipment validation services ensuring optimal performance, compliance, and reliability across all manufacturing systems.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "Instrumentation Calibration",
      "Performance Qualification",
      "Compliance Documentation",
      "Risk Assessment"
    ]
  },
  {
    id: 2,
    icon: <FlaskConical className="h-16 w-16 text-green-400" />,
    title: "Cleaning Validation",
    subtitle: "Quality Assurance",
    description: "Risk-based cleaning validation protocols incorporating critical quality attributes and regulatory compliance standards.",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "Regulatory Guidelines",
      "Analytical Testing",
      "Sampling Protocols",
      "Method Development"
    ]
  },
  {
    id: 3,
    icon: <Monitor className="h-16 w-16 text-purple-400" />,
    title: "Computer System Validation",
    subtitle: "Digital Compliance",
    description: "Complete lifecycle validation for computer systems including planning, testing, documentation, and continuous monitoring.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "System Lifecycle Management",
      "Regulatory Compliance",
      "Risk-Based Approach",
      "Documentation Control"
    ]
  },
  {
    id: 4,
    icon: <Binary className="h-16 w-16 text-orange-400" />,
    title: "Process Validation",
    subtitle: "Manufacturing Excellence",
    description: "Systematic approach to process validation ensuring consistent product quality and regulatory compliance throughout manufacturing.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "Risk Management",
      "Statistical Analysis",
      "Process Control",
      "Continuous Monitoring"
    ]
  }
];

const stats = [
  {
    icon: <Shield className="h-8 w-8 text-blue-400" />,
    title: "100%",
    subtitle: "Compliance Rate",
    description: "Regulatory adherence"
  },
  {
    icon: <Target className="h-8 w-8 text-green-400" />,
    title: "99.8%",
    subtitle: "Accuracy",
    description: "Validation precision"
  },
  {
    icon: <Clock className="h-8 w-8 text-purple-400" />,
    title: "50%",
    subtitle: "Time Reduction",
    description: "Faster implementation"
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-orange-400" />,
    title: "200+",
    subtitle: "Projects Completed",
    description: "Successful validations"
  }
];

const whyChooseUs = [
  {
    icon: <Award className="h-12 w-12 text-blue-400" />,
    title: "Industry Expertise",
    description: "Decades of experience in pharmaceutical and life science validation with deep regulatory knowledge."
  },
  {
    icon: <Users className="h-12 w-12 text-green-400" />,
    title: "Expert Team",
    description: "Certified validation professionals with extensive experience across multiple industries and regulations."
  },
  {
    icon: <Shield className="h-12 w-12 text-purple-400" />,
    title: "Regulatory Compliance",
    description: "Comprehensive understanding of FDA, EMA, and other global regulatory requirements and standards."
  },
  {
    icon: <Target className="h-12 w-12 text-orange-400" />,
    title: "Quality Focus",
    description: "Commitment to delivering high-quality validation services that exceed industry standards and expectations."
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
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Validation Services"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-purple-900/40" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Validation Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Ensuring Quality, Compliance & Operational Excellence in Life Sciences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="absolute bottom-20 left-0 right-0">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20"
                >
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.title}</div>
                  <div className="text-sm font-semibold text-gray-300 mb-1">{stat.subtitle}</div>
                  <div className="text-xs text-gray-400">{stat.description}</div>
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
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {validationServices.map((service, index) => (
              <motion.div key={service.id} variants={itemVariants}>
                <Card className="group overflow-hidden border-0 bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm hover:from-slate-700/50 hover:to-slate-800/50 transition-all duration-500 hover:scale-[1.02]">
                  <CardContent className="p-0 relative h-96">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                      {/* Top Section */}
                      <div>
                        <div className="flex items-center justify-between mb-6">
                          <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm">
                            {service.icon}
                          </div>
                          <span className="px-3 py-1 text-sm font-medium bg-blue-500/20 text-blue-300 rounded-full border border-blue-400/30">
                            {service.subtitle}
                          </span>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                          {service.title}
                        </h3>
                        
                        <p className="text-gray-300 leading-relaxed mb-6">
                          {service.description}
                        </p>
                      </div>

                      {/* Bottom Section */}
                      <div>
                        {/* Features */}
                        <div className="grid grid-cols-2 gap-2 mb-6">
                          {service.features.map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 text-sm text-gray-300"
                            >
                              <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* CTA Button */}
                        <Button
                          variant="ghost"
                          className="w-full text-white border border-white/30 hover:bg-white/10 hover:border-white/50 transition-all duration-300 group/btn"
                        >
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </div>
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
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-xl bg-white/10">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {item.description}
                </p>
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
