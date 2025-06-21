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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
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
    description:
      "Comprehensive equipment validation services ensuring optimal performance, compliance, and reliability across all manufacturing systems.",
    icon: <Cog className="h-12 w-12 text-white" />,
    color: "from-blue-500 to-cyan-500",
    backgroundImage: "/assets/equipment-validation.png",
    overview:
      "RT NextGen AI Validation Engineers manages, inspects, calibrates, tests and modifies the instrumentation, equipment, mechanics and procedures used to manufacture various products. They ensure all systems are running correctly and efficiently to produce high-quality products. They also investigate the causes of equipment failures and anomalies and decide if the equipment needs to be repaired or replaced. RT NextGen AI in-house staff of highly skilled professionals consults with you to determine your optimal strategy and immediate solutions. Our team also helps you with any resources for on-site tasks.",
    keyBenefits: [],
    process: [
      "Monitoring and testing equipment",
      "Analyzing and documenting test results",
      "Preparing compliance reports",
      "Directing validation activities",
      "Resolving testing problems",
      "Making adjustments or improvements to equipment and processes",
      "Creating databases to track validation activities",
      "Interpreting customer requirements",
      "Developing validation schedules",
      "Conducting training and overseeing the work of validation technicians",
      "Maintaining instrumentation and equipment",
      "Keeping up to date on industry standards and regulations",
    ],
    industries: [
      {
        name: "Pharmaceutical Manufacturing",
        icon: <Pill className="h-6 w-6" />,
      },
      {
        name: "Biotechnology & Biosimilars",
        icon: <Beaker className="h-6 w-6" />,
      },
      {
        name: "Medical Device Manufacturing",
        icon: <Heart className="h-6 w-6" />,
      },
      {
        name: "Food & Beverage Production",
        icon: <Factory className="h-6 w-6" />,
      },
    ],
  },
  {
    id: "cleaning",
    title: "Cleaning Validation",
    subtitle: "Quality Assurance",
    description:
      "Risk-based cleaning validation protocols incorporating critical quality attributes and regulatory compliance standards.",
    icon: <FlaskConical className="h-12 w-12 text-white" />,
    color: "from-blue-500 to-cyan-500",
    backgroundImage: "/assets/cleaning-validation.png",
    overview:
      "A risk-basedapproach is followed for establishing an effective cleaning validation, including the development of policies, master plans and the appropriate content for each study to be performed incorporating critical quality attributes and critical process parameters and process control.",
    keyBenefits: [],
    process: [
      "Cleaning Validation Regulatory Guidelines",
      "Cleaning Validation Methodology",
      "Analytical Development",
      "Visual Examination – Sampling, Swab Sampling, Rinse Sampling",
      "Analytical Testing and Reporting",
      "Cleaning Validation Sampling and Testing",
      "Worst Case Product Selection Matrix",
      "Qualification and Validation",
    ],
    industries: [
      { name: "Pharmaceutical APIs", icon: <Pill className="h-6 w-6" /> },
      { name: "Biopharmaceuticals", icon: <Beaker className="h-6 w-6" /> },
      { name: "Contract Manufacturing", icon: <Factory className="h-6 w-6" /> },
      { name: "Generic Drug Production", icon: <Heart className="h-6 w-6" /> },
    ],
  },
  {
    id: "computer",
    title: "Computer System Validation",
    subtitle: "Digital Compliance",
    description:
      "Complete lifecycle validation for computer systems including planning, testing, documentation, and continuous monitoring.",
    icon: <Monitor className="h-12 w-12 text-white" />,
    color: "from-blue-500 to-cyan-500",
    backgroundImage: "/assets/computer-system-validation.png",
    overview:
      "Computer Systems Validation is not a one-time event. Validation should be considered as part of the complete life cycle of a computer system. This cycle includes the stages of planning, specification, programming, testing commissioning, documentation, operation, monitoring and modifying. Our computer system validation consultants have extensive experience in providing leadership to companies seeking to meet regulatory expectations. our experienced CSV team can provide expert project planning and oversight that includes:",
    keyBenefits: [],
    process: [
      "Validation Program, Procedure, and Template Development",
      "Retrospective Evaluation of Legacy Systems",
      "Continuous reassessment and re-validation",
      "Automated or semi-automated processes, controlled by a DCS (distributed control system), PLC (programmable logic controller), or similar computer system Validation Certification Package Development",
    ],
    industries: [
      {
        name: "Manufacturing Execution Systems",
        icon: <Factory className="h-6 w-6" />,
      },
      {
        name: "Laboratory Information Systems",
        icon: <Beaker className="h-6 w-6" />,
      },
      {
        name: "Quality Management Systems",
        icon: <Shield className="h-6 w-6" />,
      },
      {
        name: "Enterprise Resource Planning",
        icon: <Building2 className="h-6 w-6" />,
      },
    ],
  },
  {
    id: "process",
    title: "Process Validation",
    subtitle: "Manufacturing Excellence",
    description:
      "Systematic approach to process validation ensuring consistent product quality and regulatory compliance throughout manufacturing.",
    icon: <Binary className="h-12 w-12 text-white" />,
    color: "from-blue-500 to-cyan-500",
    backgroundImage: "/assets/process-validation.png",
    overview:
      "Having years of experience, our highly experienced team understands the concerns companies face in this highly regulated environment. The first step in process validation in manufacturing is to identify the risks and critical control points of the process. Which aspects of the process will impact product quality i.e. GMP risk, if they fail, or if they fall outside the control parameters?",
    keyBenefits: [],
    process: [
      "Quality Systems Regulation and Standards for medical devices and process validation",
      "Design Control and Risk Management",
      "Process validation prerequisites including validated test methods",
      "Statistics and quality metrics calculations",
      "Verification versus Validation",
      "Process development / Engineering studies and Design Controls",
      "Design of Experiments (DOE)",
      "Validating manual processes",
      "Establishing methods for cleaning, facilities, utilities, and sterilization",
      "Validation Process Failure Mode and Effects Analysis (PFMEA)",
      "Process Monitoring and Control",
      "Revalidation",
      "Documentation for process validation",
    ],
    industries: [
      {
        name: "Solid Dosage Manufacturing",
        icon: <Pill className="h-6 w-6" />,
      },
      { name: "Sterile Manufacturing", icon: <Heart className="h-6 w-6" /> },
      { name: "Biologics Production", icon: <Beaker className="h-6 w-6" /> },
      { name: "Combination Products", icon: <Factory className="h-6 w-6" /> },
    ],
  },
];

const stats = [
  {
    icon: <Shield className="h-8 w-8" />,
    title: "100%",
    subtitle: "Compliance Rate",
    description: "Regulatory adherence",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "99.8%",
    subtitle: "Accuracy",
    description: "Validation precision",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "50%",
    subtitle: "Time Reduction",
    description: "Faster implementation",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "200+",
    subtitle: "Projects Completed",
    description: "Successful validations",
    color: "from-orange-500 to-red-500",
  },
];

const whyChooseUs = [
  {
    icon: <Award className="h-10 w-10" />,
    title: "Industry Expertise",
    description:
      "Decades of experience in pharmaceutical and life science validation with deep regulatory knowledge.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: "Expert Team",
    description:
      "Certified validation professionals with extensive experience across multiple industries and regulations.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <Shield className="h-10 w-10" />,
    title: "Regulatory Compliance",
    description:
      "Comprehensive understanding of FDA, EMA, and other global regulatory requirements and standards.",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: <Target className="h-10 w-10" />,
    title: "Quality Focus",
    description:
      "Commitment to delivering high-quality validation services that exceed industry standards and expectations.",
    color: "from-orange-500 to-red-500",
  },
];

export default function Validation() {
  const [selectedService, setSelectedService] = React.useState(
    validationServices[0],
  );
  const [showDetails, setShowDetails] = React.useState(false);

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
        {/* Background for validation page */}
        <div className="absolute inset-0">
          <img
            src="/assets/Validation-banner.png"
            alt="Validation Services"
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/assets/validation-banner.png";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
              style={{ fontWeight: 700 }}
            >
              <span className="bg-gradient-to-r from-white via-blue-100 to-[#0080FF] bg-clip-text text-transparent">
                Validation Excellence
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl"
            >
              Transforming life sciences through precision validation,
              regulatory excellence, and cutting-edge compliance solutions
            </motion.p>

            {/* Badge below description */}
            <div className="mb-32">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0066CC]/20 border border-[#0080FF]/30 rounded-full backdrop-blur-sm"
              >
                <Sparkles className="h-5 w-5 text-cyan-400" />
                <span className="text-white font-medium">
                  Industry-Leading Validation Excellence
                </span>
                <Star className="h-4 w-4 text-blue-400 fill-current" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="absolute bottom-8 left-0 right-0">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center md:justify-start">
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl w-full"
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
                    <div className="relative p-4 md:p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden text-center">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                      />

                      <div className="relative z-10">
                        <div className="flex justify-center mb-3 md:mb-4">
                          <div
                            className={`inline-flex p-2 md:p-3 rounded-xl bg-gradient-to-br ${stat.color}`}
                          >
                            <div className="text-white">{stat.icon}</div>
                          </div>
                        </div>
                        <div className="text-2xl md:text-3xl font-bold mb-1 md:mb-2 text-white">
                          {stat.title}
                        </div>
                        <div className="text-xs md:text-sm font-semibold text-gray-300 mb-1">
                          {stat.subtitle}
                        </div>
                        <div className="text-xs text-gray-400">
                          {stat.description}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Validation Service Section */}
      <section className="py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Validation Solutions
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive validation services tailored to meet regulatory
              requirements and industry standards
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
            <Card className="overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl">
              <CardContent className="p-0">
                {/* Background Image */}
                <div className="relative h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden">
                  <img
                    src={selectedService.backgroundImage}
                    alt={selectedService.title}
                    className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-500"
                  />
                </div>

                {/* Header Section */}
                <div className="relative p-8 bg-white/5">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-6">
                    {/* Left Column - Service Info */}
                    <div className="lg:col-span-2">
                      <div className="flex items-start gap-6">
                        <div
                          className={`p-4 rounded-2xl bg-gradient-to-br ${selectedService.color} shadow-lg flex-shrink-0`}
                        >
                          {selectedService.icon}
                        </div>
                        <div className="flex-1">
                          <Badge
                            variant="secondary"
                            className="mb-3 bg-gray-800 text-white border-white/20"
                          >
                            {selectedService.subtitle}
                          </Badge>
                          <h3 className="text-3xl font-bold text-white mb-4">
                            {selectedService.title}
                          </h3>
                          <p className="text-gray-300 mb-6 leading-relaxed">
                            {selectedService.description}
                          </p>
                          <Button
                            className="bg-blue-600 hover:bg-blue-700"
                            onClick={() => setShowDetails(!showDetails)}
                          >
                            {showDetails ? "Hide Details" : "Learn More"}
                            <ArrowRight
                              className={`ml-2 h-4 w-4 transition-transform ${showDetails ? "rotate-90" : ""}`}
                            />
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Service Selection */}
                    <div className="lg:col-span-1">
                      <div className="grid grid-cols-1 gap-4">
                        {validationServices.map((service) => (
                          <Button
                            key={service.id}
                            variant={
                              selectedService.id === service.id
                                ? "default"
                                : "outline"
                            }
                            className={`text-center justify-center p-4 h-auto min-h-[60px] transition-all duration-300 ${
                              selectedService.id === service.id
                                ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-none shadow-lg"
                                : "bg-slate-800/50 border-slate-600 text-white hover:bg-slate-700/70 hover:border-blue-400/40 hover:text-white"
                            }`}
                            onClick={() => {
                              setSelectedService(service);
                            }}
                          >
                            <span className="font-semibold text-sm leading-tight text-center whitespace-normal">
                              {service.title}
                            </span>
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tabbed Content - Only shown when Learn More is clicked */}
                {showDetails && (
                  <motion.div
                    className="p-8"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Tabs defaultValue="overview" className="w-full">
                      <TabsList className="grid w-full grid-cols-2 bg-slate-800/50 border border-slate-700">
                        <TabsTrigger
                          value="overview"
                          className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          Overview
                        </TabsTrigger>
                        <TabsTrigger
                          value="process"
                          className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                        >
                          <Settings className="h-4 w-4 mr-2" />
                          Key Tasks
                        </TabsTrigger>
                      </TabsList>

                      <TabsContent value="overview" className="mt-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          <div>
                            <h4 className="text-2xl font-bold text-white mb-6">
                              Overview
                            </h4>
                            <Card className="bg-white/5 border border-white/10 backdrop-blur-sm">
                              <CardContent className="p-6">
                                <p className="text-gray-300 leading-relaxed">
                                  {selectedService.overview}
                                </p>
                              </CardContent>
                            </Card>
                          </div>
                          <div>
                            <h4 className="text-2xl font-bold text-white mb-6">
                              Performance Metrics
                            </h4>
                            <div className="grid grid-cols-2 gap-4">
                              <Card className="bg-white/5 border border-white/10 backdrop-blur-sm">
                                <CardContent className="p-4 text-center">
                                  <div className="text-2xl font-bold text-white mb-1">
                                    99.9%
                                  </div>
                                  <div className="text-sm text-gray-300">
                                    Accuracy Rate
                                  </div>
                                </CardContent>
                              </Card>
                              <Card className="bg-white/5 border border-white/10 backdrop-blur-sm">
                                <CardContent className="p-4 text-center">
                                  <div className="text-2xl font-bold text-white mb-1">
                                    30%
                                  </div>
                                  <div className="text-sm text-gray-300">
                                    Time Reduction
                                  </div>
                                </CardContent>
                              </Card>
                              <Card className="bg-white/5 border border-white/10 backdrop-blur-sm">
                                <CardContent className="p-4 text-center">
                                  <div className="text-2xl font-bold text-white mb-1">
                                    100%
                                  </div>
                                  <div className="text-sm text-gray-300">
                                    Compliance
                                  </div>
                                </CardContent>
                              </Card>
                              <Card className="bg-white/5 border border-white/10 backdrop-blur-sm">
                                <CardContent className="p-4 text-center">
                                  <div className="text-2xl font-bold text-white mb-1">
                                    200+
                                  </div>
                                  <div className="text-sm text-gray-300">
                                    Projects
                                  </div>
                                </CardContent>
                              </Card>
                            </div>
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="process" className="mt-8">
                        <h4 className="text-2xl font-bold text-white mb-6">
                          Key Tasks
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {selectedService.process.map((task, index) => (
                            <Card
                              key={index}
                              className="bg-white/5 border border-white/10 backdrop-blur-sm"
                            >
                              <CardContent className="p-6">
                                {typeof task === "string" ? (
                                  <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center font-bold text-white text-sm flex-shrink-0">
                                      {index + 1}
                                    </div>
                                    <p className="text-gray-300 leading-relaxed">
                                      {task}
                                    </p>
                                  </div>
                                ) : (
                                  <>
                                    <div className="flex items-center gap-4 mb-4">
                                      <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold">
                                        {(task as any).step}
                                      </div>
                                      <h5 className="text-lg font-semibold text-white">
                                        {(task as any).title}
                                      </h5>
                                    </div>
                                    <p className="text-gray-300">
                                      {(task as any).description}
                                    </p>
                                  </>
                                )}
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </TabsContent>
                    </Tabs>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose RT NextGenAI
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
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
                whileHover={{ y: -10, scale: 1.05 }}
                className="group"
              >
                <div className="h-full bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">{item.icon}</div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-16 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10" />
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
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
              className="inline-flex items-center gap-2 px-6 py-3 mb-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-full backdrop-blur-sm"
            >
              <Globe className="h-5 w-5 text-cyan-400" />
              <span className="text-white font-medium">
                Trusted Globally by Industry Leaders
              </span>
              <Star className="h-4 w-4 text-blue-400 fill-current" />
            </motion.div>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-white via-blue-100 to-[#0080FF] bg-clip-text text-transparent">
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
              Join hundreds of life science companies who trust RT NextGenAI for
              their validation needs. Our experts are ready to accelerate your
              compliance journey with cutting-edge solutions.
            </motion.p>

            {/* Benefits Grid */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            >
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <CheckCircle2 className="h-6 w-6 text-white bg-primary rounded-full p-1" />
                <span className="text-white font-semibold">
                  Free Consultation
                </span>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <CheckCircle2 className="h-6 w-6 text-white bg-primary rounded-full p-1" />
                <span className="text-white font-semibold">
                  24/7 Expert Support
                </span>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <CheckCircle2 className="h-6 w-6 text-white bg-primary rounded-full p-1" />
                <span className="text-white font-semibold">
                  Guaranteed Results
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex justify-center"
            >
              <Button
                size="lg"
                className="group bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-10 py-6 text-lg font-semibold shadow-2xl shadow-blue-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
              >
                <Users className="mr-2 h-5 w-5" />
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
