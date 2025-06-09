import React from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
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
  Eye,
  Settings,
  Building2,
  Heart,
  Pill,
  Factory,
  Beaker,
} from "lucide-react";

const validationServices = [
  {
    id: "equipment",
    title: "Equipment Validation",
    subtitle: "Engineering Excellence",
    description: "Comprehensive equipment validation services ensuring optimal performance, compliance, and reliability across all manufacturing systems.",
    icon: <Cog className="h-12 w-12 text-white" />,
    color: "from-blue-500 to-cyan-500",
    overview: "Our Equipment Validation services ensure that your manufacturing equipment operates consistently within predetermined specifications and quality attributes. We provide comprehensive validation strategies that meet regulatory requirements while optimizing operational efficiency.",
    keyBenefits: [
      "FDA 21 CFR Part 11 and EU GMP Annex 11 compliance",
      "Comprehensive IQ/OQ/PQ documentation packages",
      "Risk-based validation approach per ICH Q9",
      "Reduced validation timelines by up to 40%",
      "Regulatory audit support and defense"
    ],
    process: [
      {
        step: 1,
        title: "Design Qualification (DQ)",
        description: "Documented verification that proposed design of facilities, systems, and equipment is suitable for intended purpose"
      },
      {
        step: 2,
        title: "Installation Qualification (IQ)", 
        description: "Documented verification that equipment is installed according to written and pre-approved specifications"
      },
      {
        step: 3,
        title: "Operational Qualification (OQ)",
        description: "Documented verification that installed equipment operates as intended throughout anticipated operating ranges"
      },
      {
        step: 4,
        title: "Performance Qualification (PQ)",
        description: "Documented verification that equipment consistently performs according to predetermined criteria and produces products meeting specifications"
      }
    ],
    industries: [
      { name: "Pharmaceutical Manufacturing", icon: <Pill className="h-6 w-6" /> },
      { name: "Biotechnology & Biosimilars", icon: <Beaker className="h-6 w-6" /> },
      { name: "Medical Device Manufacturing", icon: <Heart className="h-6 w-6" /> },
      { name: "Food & Beverage Production", icon: <Factory className="h-6 w-6" /> }
    ]
  },
  {
    id: "cleaning",
    title: "Cleaning Validation",
    subtitle: "Quality Assurance",
    description: "Risk-based cleaning validation protocols incorporating critical quality attributes and regulatory compliance standards.",
    icon: <FlaskConical className="h-12 w-12 text-blue-500" />,
    color: "from-green-500 to-emerald-500",
    overview: "Our Cleaning Validation services provide scientifically sound and regulatory compliant cleaning procedures for pharmaceutical and biotechnology manufacturing equipment. We develop risk-based cleaning validation protocols that ensure product quality and patient safety.",
    keyBenefits: [
      "MACO (Maximum Allowable Carryover) calculations",
      "Analytical method development and validation",
      "Cleaning agent residue testing protocols",
      "Cross-contamination risk assessments",
      "Regulatory compliance documentation"
    ],
    process: [
      {
        step: 1,
        title: "Risk Assessment",
        description: "Evaluation of products, equipment, and cleaning procedures to determine cleaning validation requirements"
      },
      {
        step: 2,
        title: "Acceptance Criteria",
        description: "Establishment of scientifically justified limits for active ingredients, cleaning agents, and microbial contamination"
      },
      {
        step: 3,
        title: "Analytical Methods",
        description: "Development and validation of analytical methods for detection and quantification of residues"
      },
      {
        step: 4,
        title: "Protocol Execution",
        description: "Execution of cleaning validation studies with comprehensive sampling and testing procedures"
      }
    ],
    industries: [
      { name: "Pharmaceutical APIs", icon: <Pill className="h-6 w-6" /> },
      { name: "Biopharmaceuticals", icon: <Beaker className="h-6 w-6" /> },
      { name: "Contract Manufacturing", icon: <Factory className="h-6 w-6" /> },
      { name: "Generic Drug Production", icon: <Heart className="h-6 w-6" /> }
    ]
  },
  {
    id: "computer",
    title: "Computer System Validation",
    subtitle: "Digital Compliance",
    description: "Complete lifecycle validation for computer systems including planning, testing, documentation, and continuous monitoring.",
    icon: <Monitor className="h-12 w-12 text-violet-300" />,
    color: "from-purple-500 to-violet-500",
    overview: "Our Computer System Validation (CSV) services ensure that computerized systems used in regulated environments consistently perform their intended functions and maintain data integrity throughout their lifecycle.",
    keyBenefits: [
      "GAMP 5 compliant validation approach",
      "21 CFR Part 11 electronic records compliance",
      "Data integrity and audit trail validation",
      "Risk-based validation strategies",
      "Ongoing compliance monitoring"
    ],
    process: [
      {
        step: 1,
        title: "System Assessment",
        description: "Evaluation of system complexity and risk categorization per GAMP 5 guidelines"
      },
      {
        step: 2,
        title: "Validation Planning",
        description: "Development of comprehensive validation master plan and protocols"
      },
      {
        step: 3,
        title: "Testing & Verification",
        description: "Execution of IQ/OQ/PQ testing with traceability matrix validation"
      },
      {
        step: 4,
        title: "Ongoing Compliance",
        description: "Change control, periodic review, and continuous compliance monitoring"
      }
    ],
    industries: [
      { name: "Manufacturing Execution Systems", icon: <Factory className="h-6 w-6" /> },
      { name: "Laboratory Information Systems", icon: <Beaker className="h-6 w-6" /> },
      { name: "Quality Management Systems", icon: <Shield className="h-6 w-6" /> },
      { name: "Enterprise Resource Planning", icon: <Building2 className="h-6 w-6" /> }
    ]
  },
  {
    id: "process",
    title: "Process Validation",
    subtitle: "Manufacturing Excellence", 
    description: "Systematic approach to process validation ensuring consistent product quality and regulatory compliance throughout manufacturing.",
    icon: <Binary className="h-12 w-12 text-orange-300" />,
    color: "from-orange-500 to-red-500",
    overview: "Our Process Validation services follow FDA guidance for process validation lifecycle approach, ensuring manufacturing processes consistently produce products meeting predetermined specifications and quality attributes.",
    keyBenefits: [
      "Stage 1-3 process validation lifecycle",
      "Statistical process control implementation",
      "Critical process parameter identification",
      "Process capability studies (Cpk/Ppk)",
      "Continuous process verification programs"
    ],
    process: [
      {
        step: 1,
        title: "Stage 1: Process Design",
        description: "Commercial manufacturing process is defined based on knowledge gained through development and scale-up activities"
      },
      {
        step: 2,
        title: "Stage 2: Process Qualification",
        description: "Process design is evaluated to determine if capable of reproducible commercial manufacturing"
      },
      {
        step: 3,
        title: "Stage 3: Continued Verification",
        description: "Ongoing assurance that process remains in validated state during commercial manufacturing"
      },
      {
        step: 4,
        title: "Statistical Analysis",
        description: "Statistical evaluation of process performance data to demonstrate process capability"
      }
    ],
    industries: [
      { name: "Solid Dosage Manufacturing", icon: <Pill className="h-6 w-6" /> },
      { name: "Sterile Manufacturing", icon: <Heart className="h-6 w-6" /> },
      { name: "Biologics Production", icon: <Beaker className="h-6 w-6" /> },
      { name: "Combination Products", icon: <Factory className="h-6 w-6" /> }
    ]
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
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: "Expert Team",
    description: "Certified validation professionals with extensive experience across multiple industries and regulations.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: <Shield className="h-10 w-10" />,
    title: "Regulatory Compliance",
    description: "Comprehensive understanding of FDA, EMA, and other global regulatory requirements and standards.",
    color: "from-purple-500 to-violet-500"
  },
  {
    icon: <Target className="h-10 w-10" />,
    title: "Quality Focus",
    description: "Commitment to delivering high-quality validation services that exceed industry standards and expectations.",
    color: "from-orange-500 to-red-500"
  }
];

export default function Validation() {
  const [selectedService, setSelectedService] = React.useState(validationServices[0]);

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

      {/* Equipment Validation Service Section */}
      <section className="py-24 bg-slate-900/20">
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

          {/* Main Service Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <Card className="overflow-hidden border-0 bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm">
              <CardContent className="p-0">
                {/* Header Section */}
                <div className="relative p-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-6">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${selectedService.color} shadow-lg`}>
                        {selectedService.icon}
                      </div>
                      <div>
                        <Badge variant="secondary" className="mb-3 bg-blue-500/20 text-blue-300 border-blue-400/30">
                          {selectedService.subtitle}
                        </Badge>
                        <h3 className="text-3xl font-bold text-white mb-2">
                          {selectedService.title}
                        </h3>
                        <p className="text-gray-300 max-w-2xl">
                          {selectedService.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4">
                      <Select
                        value={selectedService.id}
                        onValueChange={(value) => {
                          const service = validationServices.find(s => s.id === value);
                          if (service) setSelectedService(service);
                        }}
                      >
                        <SelectTrigger className="w-64 bg-slate-800/50 border-slate-600 text-white">
                          <SelectValue placeholder="Select validation service" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-800 border-slate-600">
                          {validationServices.map((service) => (
                            <SelectItem key={service.id} value={service.id} className="text-white focus:bg-slate-700">
                              {service.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  {/* Features checklist */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {selectedService.keyBenefits.slice(0, 4).map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle2 className="h-4 w-4 text-green-400" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tabbed Content */}
                <div className="p-8">
                  <Tabs defaultValue="overview" className="w-full">
                    <TabsList className="grid w-full grid-cols-4 bg-slate-800/50 border border-slate-700">
                      <TabsTrigger value="overview" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                        <Eye className="h-4 w-4 mr-2" />
                        Overview
                      </TabsTrigger>
                      <TabsTrigger value="process" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                        <Settings className="h-4 w-4 mr-2" />
                        Our Process
                      </TabsTrigger>
                      <TabsTrigger value="benefits" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                        <Shield className="h-4 w-4 mr-2" />
                        Key Benefits
                      </TabsTrigger>
                      <TabsTrigger value="industries" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                        <Building2 className="h-4 w-4 mr-2" />
                        Industries Served
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="overview" className="mt-8">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-2xl font-bold text-white mb-6">Overview</h4>
                          <Card className="bg-slate-800/30 border-slate-700">
                            <CardContent className="p-6">
                              <p className="text-gray-300 leading-relaxed">
                                {selectedService.overview}
                              </p>
                            </CardContent>
                          </Card>
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold text-white mb-6">Performance Metrics</h4>
                          <div className="grid grid-cols-2 gap-4">
                            <Card className="bg-slate-800/30 border-slate-700">
                              <CardContent className="p-4 text-center">
                                <div className="text-2xl font-bold text-blue-400 mb-1">99.9%</div>
                                <div className="text-sm text-gray-400">Accuracy Rate</div>
                              </CardContent>
                            </Card>
                            <Card className="bg-slate-800/30 border-slate-700">
                              <CardContent className="p-4 text-center">
                                <div className="text-2xl font-bold text-green-400 mb-1">30%</div>
                                <div className="text-sm text-gray-400">Time Reduction</div>
                              </CardContent>
                            </Card>
                            <Card className="bg-slate-800/30 border-slate-700">
                              <CardContent className="p-4 text-center">
                                <div className="text-2xl font-bold text-purple-400 mb-1">100%</div>
                                <div className="text-sm text-gray-400">Compliance</div>
                              </CardContent>
                            </Card>
                            <Card className="bg-slate-800/30 border-slate-700">
                              <CardContent className="p-4 text-center">
                                <div className="text-2xl font-bold text-orange-400 mb-1">200+</div>
                                <div className="text-sm text-gray-400">Projects</div>
                              </CardContent>
                            </Card>
                          </div>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="process" className="mt-8">
                      <h4 className="text-2xl font-bold text-white mb-6">Our Process</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {selectedService.process.map((step, index) => (
                          <Card key={index} className="bg-slate-800/30 border-slate-700">
                            <CardContent className="p-6">
                              <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                                  {step.step}
                                </div>
                                <h5 className="text-lg font-semibold text-white">{step.title}</h5>
                              </div>
                              <p className="text-gray-300">{step.description}</p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </TabsContent>

                    <TabsContent value="benefits" className="mt-8">
                      <h4 className="text-2xl font-bold text-white mb-6">Key Benefits</h4>
                      <div className="space-y-4">
                        {selectedService.keyBenefits.map((benefit, index) => (
                          <Card key={index} className="bg-slate-800/30 border-slate-700">
                            <CardContent className="p-6">
                              <div className="flex items-center gap-4">
                                <CheckCircle2 className="h-6 w-6 text-green-400 flex-shrink-0" />
                                <p className="text-gray-300">{benefit}</p>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </TabsContent>

                    <TabsContent value="industries" className="mt-8">
                      <h4 className="text-2xl font-bold text-white mb-6">Industries Served</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {selectedService.industries.map((industry, index) => (
                          <Card key={index} className="bg-slate-800/30 border-slate-700 hover:bg-slate-800/50 transition-colors">
                            <CardContent className="p-6">
                              <div className="flex items-center gap-4">
                                <div className="p-3 rounded-xl bg-blue-600/20">
                                  <div className="text-blue-400">
                                    {industry.icon}
                                  </div>
                                </div>
                                <h5 className="text-lg font-semibold text-white">{industry.name}</h5>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </CardContent>
            </Card>
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
                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                      <div className="text-white">
                        {item.icon}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-4 text-white group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-300 group-hover:text-gray-200 leading-relaxed transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10" />
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center p-16 rounded-3xl bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl border border-white/20 shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Top Badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 px-6 py-3 mb-8 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-400/30 rounded-full backdrop-blur-sm"
            >
              <Globe className="h-5 w-5 text-green-400" />
              <span className="text-green-300 font-medium">Trusted Globally by Industry Leaders</span>
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
            </motion.div>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Transform Your
              </span>
              <br />
              <span className="text-white">Validation Process</span>
            </motion.h2>
            
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Join hundreds of life science companies who trust RT NextGenAI for their validation needs. 
              Our experts are ready to accelerate your compliance journey with cutting-edge solutions.
            </motion.p>

            {/* Benefits Grid */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            >
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <CheckCircle2 className="h-6 w-6 text-green-400" />
                <span className="text-white font-semibold">Free Consultation</span>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <CheckCircle2 className="h-6 w-6 text-green-400" />
                <span className="text-white font-semibold">24/7 Expert Support</span>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <CheckCircle2 className="h-6 w-6 text-green-400" />
                <span className="text-white font-semibold">Guaranteed Results</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Button size="lg" className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-10 py-6 text-lg font-semibold shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300">
                <Users className="mr-2 h-5 w-5" />
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="group border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 px-10 py-6 text-lg font-semibold backdrop-blur-sm">
                <BookOpen className="mr-2 h-5 w-5" />
                Download Resources
                <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-12 pt-8 border-t border-white/10"
            >
              <p className="text-sm text-gray-400 mb-4">Trusted by industry leaders worldwide</p>
              <div className="flex items-center justify-center gap-8 opacity-60">
                <Badge variant="outline" className="border-white/20 text-white">FDA Compliant</Badge>
                <Badge variant="outline" className="border-white/20 text-white">EMA Certified</Badge>
                <Badge variant="outline" className="border-white/20 text-white">ISO 9001</Badge>
                <Badge variant="outline" className="border-white/20 text-white">GMP Ready</Badge>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
