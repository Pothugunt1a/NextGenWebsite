
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  Tablet,
  Code,
  Zap,
  Globe,
  Users,
  Star,
  Clock,
  Target,
  TrendingUp,
  Award,
  Layers,
  Brain,
  CheckCircle,
  ArrowRight,
  Monitor,
  Cpu,
  Database,
  Shield,
  Settings,
} from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

const stats = [
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "500+",
    subtitle: "Apps Deployed",
    description: "Successful launches",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "4.8★",
    subtitle: "App Store Rating",
    description: "Average rating",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "30%",
    subtitle: "Faster Development",
    description: "Cross-platform approach",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "200%",
    subtitle: "User Engagement",
    description: "Average increase",
    color: "from-orange-500 to-red-500",
  },
];

const whyChooseUsItems = [
  {
    icon: <Award className="h-10 w-10" />,
    title: "Expert Mobile Development Team",
    description:
      "Our developers are certified in iOS, Android, and cross-platform technologies with expertise in React Native, Flutter, Swift, and Kotlin for cutting-edge mobile solutions.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Layers className="h-10 w-10" />,
    title: "Full-Cycle Development",
    description:
      "From concept and design to development, testing, deployment, and maintenance. We handle every aspect of mobile app development with precision and care.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <Brain className="h-10 w-10" />,
    title: "AI-Enhanced Mobile Apps",
    description:
      "Integrate machine learning, computer vision, and AI capabilities into your mobile apps for personalized user experiences and intelligent features.",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: <TrendingUp className="h-10 w-10" />,
    title: "Performance & Security",
    description:
      "Optimized apps with robust security measures, fast performance, and seamless user experiences across all devices and platforms.",
    color: "from-orange-500 to-red-500",
  },
];

const faqs: FAQ[] = [
  {
    question: "What mobile platforms do you develop for?",
    answer:
      "We develop for iOS, Android, and cross-platform solutions using React Native and Flutter. Our team has expertise in native development with Swift/Objective-C for iOS and Java/Kotlin for Android, as well as hybrid solutions.",
  },
  {
    question: "How long does mobile app development take?",
    answer:
      "Development time varies based on complexity. Simple apps take 2-3 months, medium complexity apps take 4-6 months, and complex enterprise apps can take 6-12 months. We provide detailed timelines during our planning phase.",
  },
  {
    question: "Do you provide app store submission and approval support?",
    answer:
      "Yes, we handle the entire app store submission process for both Apple App Store and Google Play Store, including compliance with guidelines, metadata optimization, and approval support.",
  },
  {
    question: "Can you integrate AI and machine learning into mobile apps?",
    answer:
      "Absolutely! We specialize in integrating AI features like computer vision, natural language processing, recommendation engines, and predictive analytics into mobile applications for enhanced user experiences.",
  },
  {
    question: "Do you provide ongoing maintenance and updates?",
    answer:
      "Yes, we offer comprehensive maintenance packages including bug fixes, OS updates compatibility, feature enhancements, security updates, and performance optimization to keep your app current and secure.",
  },
];

const mobileOfferings = [
  {
    icon: Smartphone,
    title: "iOS Development",
    description:
      "Native iOS applications built with Swift and Objective-C, optimized for iPhone and iPad with seamless App Store integration and iOS-specific features.",
    features: [
      "Native Swift/Objective-C development",
      "iOS-specific UI/UX design",
      "App Store optimization",
      "iOS ecosystem integration",
    ],
    backgroundImage: "/assets/AI-ApplicationDevelopment.gif",
  },
  {
    icon: Code,
    title: "Android Development",
    description:
      "High-performance Android applications using Java and Kotlin, designed for diverse Android devices with Google Play Store optimization.",
    features: [
      "Kotlin and Java development",
      "Material Design implementation",
      "Google Play Store optimization",
      "Android ecosystem integration",
    ],
    backgroundImage: "/assets/AI-Components.gif",
  },
  {
    icon: Globe,
    title: "Cross-Platform Development",
    description:
      "Efficient cross-platform solutions using React Native and Flutter, delivering native performance with shared codebase for faster time-to-market.",
    features: [
      "React Native and Flutter expertise",
      "Shared codebase efficiency",
      "Native performance optimization",
      "Faster deployment cycles",
    ],
    backgroundImage: "/assets/GenerativeAI.gif",
  },
  {
    icon: Tablet,
    title: "Progressive Web Apps",
    description:
      "Modern web applications that work like native mobile apps, with offline capabilities, push notifications, and responsive design.",
    features: [
      "Responsive web design",
      "Offline functionality",
      "Push notifications",
      "App-like user experience",
    ],
    backgroundImage: "/assets/AI-chatbot.gif",
  },
  {
    icon: Brain,
    title: "AI-Powered Mobile Apps",
    description:
      "Intelligent mobile applications with machine learning capabilities, computer vision, natural language processing, and predictive analytics.",
    features: [
      "Machine learning integration",
      "Computer vision features",
      "Natural language processing",
      "Predictive analytics",
    ],
    backgroundImage: "/assets/AI-ML.png",
  },
  {
    icon: Settings,
    title: "App Maintenance & Support",
    description:
      "Comprehensive maintenance services including updates, bug fixes, performance optimization, and feature enhancements for existing mobile applications.",
    features: [
      "Regular updates and patches",
      "Performance optimization",
      "Security enhancements",
      "Feature additions",
    ],
    backgroundImage: "/assets/cloud 5_1752856047806.gif",
  },
];

const industryData = [
  {
    id: "healthcare",
    name: "Healthcare",
    image: "/assets/Healthcare.png",
    content:
      "HIPAA-compliant mobile health applications with telemedicine capabilities, patient portals, appointment scheduling, and health monitoring features. Our solutions improve patient engagement and healthcare delivery.",
  },
  {
    id: "fintech",
    name: "Fintech",
    image: "/assets/Finance.png",
    content:
      "Secure financial mobile applications with advanced encryption, biometric authentication, payment processing, and regulatory compliance for banking, payments, and financial services.",
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    image: "/assets/Ecommerce.png",
    content:
      "Feature-rich shopping applications with product catalogs, secure payment gateways, order tracking, personalized recommendations, and seamless checkout experiences.",
  },
  {
    id: "education",
    name: "Education",
    image: "/assets/Education.png",
    content:
      "Interactive learning applications with multimedia content, progress tracking, gamification, offline learning capabilities, and social learning features for enhanced educational experiences.",
  },
  {
    id: "logistics",
    name: "Logistics",
    image: "/assets/Logistics&SupplyChain.png",
    content:
      "Fleet management and logistics applications with real-time tracking, route optimization, delivery management, and supply chain visibility for improved operational efficiency.",
  },
  {
    id: "entertainment",
    name: "Entertainment",
    image: "/assets/Media.png",
    content:
      "Engaging entertainment applications with streaming capabilities, social features, content management, user-generated content, and immersive multimedia experiences.",
  },
];

export default function MobileDevelopment() {
  const [selectedIndustryData, setSelectedIndustryData] = useState(
    industryData[0],
  );

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
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-light text-white"
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/AI-ApplicationDevelopment.gif"
            alt="Mobile Development"
            className="w-full h-full object-cover object-center"
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
              <span className="bg-gradient-to-r from-white via-blue-100 to-[#007ACC] bg-clip-text text-transparent">
                Mobile Development Solutions
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl"
            >
              Transform your ideas into powerful mobile applications. We deliver
              native iOS, Android, and cross-platform solutions that engage
              users and drive business growth.
            </motion.p>

            <div className="mb-32">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#007ACC]/20 border border-[#007ACC]/30 rounded-full backdrop-blur-sm"
              >
                <CheckCircle className="h-5 w-5 text-cyan-400 fill-none" />
                <span className="text-white font-medium">
                  Expert Mobile Development Team
                </span>
                <Award className="h-4 w-4 text-blue-400 fill-current" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
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

      {/* Mobile Development Services */}
      <div className="py-20 bg-light relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6 text-white">
              Our Mobile Development Services
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive mobile development solutions for iOS, Android, and
              cross-platform applications
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="max-w-8xl mx-auto relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {mobileOfferings.slice(0, 2).map((offering, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="group cursor-pointer h-full"
                >
                  <div className="flex items-center gap-6 p-6 bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-blue-500/50 hover:bg-gray-800/80 transition-all duration-500 group-hover:translate-x-2 h-full">
                    <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                      <img
                        src={offering.backgroundImage}
                        alt={offering.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/90"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <offering.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {offering.title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {offering.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Central Image Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, type: "spring" }}
                className="relative group"
              >
                <div className="relative min-h-96 w-full bg-gradient-to-br from-blue-600 to-cyan-600 rounded-[3rem] overflow-hidden shadow-2xl group-hover:shadow-blue-500/30 transition-all duration-700">
                  <div className="relative w-full">
                    <img
                      src="/assets/AI-ApplicationDevelopment.gif"
                      alt="Mobile Development"
                      className="w-full h-auto object-contain group-hover:scale-105 transition-all duration-700"
                    />
                  </div>

                  <div className="absolute top-8 right-8 flex flex-col gap-4">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                      <Smartphone className="h-8 w-8 text-white" />
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                      M
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="mb-4">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                        <span className="text-blue-200 text-sm font-medium">
                          Mobile Innovation Hub
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-3 leading-tight">
                        Next-Generation Mobile Apps
                      </h3>
                      <p className="text-blue-100 leading-relaxed mb-6">
                        Cutting-edge mobile applications that deliver exceptional
                        user experiences across all platforms and devices.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="flex flex-col gap-6">
                {mobileOfferings.slice(2, 4).map((offering, index) => (
                  <motion.div
                    key={index + 2}
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="group cursor-pointer h-full"
                  >
                    <div className="flex items-center gap-6 p-6 bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-blue-500/50 hover:bg-gray-800/80 transition-all duration-500 group-hover:translate-x-2 h-full">
                      <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                        <img
                          src={offering.backgroundImage}
                          alt={offering.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/90"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <offering.icon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                            {String(index + 3).padStart(2, "0")}
                          </div>
                        </div>
                        <h4 className="text-lg font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                          {offering.title}
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {offering.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mobileOfferings.slice(4).map((offering, index) => (
                <motion.div
                  key={index + 4}
                  initial={{ opacity: 0, x: index === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="group cursor-pointer h-full"
                >
                  <div className="flex items-center gap-6 p-6 bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-blue-500/50 hover:bg-gray-800/80 transition-all duration-500 group-hover:translate-x-2 h-full">
                    <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                      <img
                        src={offering.backgroundImage}
                        alt={offering.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/90"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <offering.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          {String(index + 5).padStart(2, "0")}
                        </div>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {offering.title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {offering.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Industries Section */}
      <section className="py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Industries We Serve
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-4">
                <div className="grid grid-cols-1 gap-4">
                  {industryData.map((industry) => (
                    <Button
                      key={industry.id}
                      variant={
                        selectedIndustryData.id === industry.id
                          ? "default"
                          : "outline"
                      }
                      className={`text-center justify-center p-4 h-auto min-h-[60px] transition-all duration-300 ${
                        selectedIndustryData.id === industry.id
                          ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-none shadow-lg"
                          : "bg-slate-800/50 border-slate-600 text-white hover:bg-slate-700/70 hover:border-blue-400/40 hover:text-white"
                      }`}
                      onClick={() => {
                        setSelectedIndustryData(industry);
                      }}
                    >
                      <span className="font-semibold text-sm leading-tight text-center whitespace-normal">
                        {industry.name}
                      </span>
                    </Button>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-8">
                <motion.div
                  key={selectedIndustryData.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-cyan-400/20 rounded-xl overflow-hidden"
                >
                  <div className="relative h-64 overflow-hidden group cursor-pointer">
                    <img
                      src={selectedIndustryData.image}
                      alt={selectedIndustryData.name}
                      className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent group-hover:from-gray-900/60 transition-all duration-300"></div>
                    <div className="absolute bottom-4 left-6">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {selectedIndustryData.name}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {selectedIndustryData.content}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
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
              Why Choose NextGenAI for Mobile Development?
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert mobile development with cutting-edge technologies and
              proven methodologies for exceptional user experiences.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {whyChooseUsItems.map((item, index) => (
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

      {/* FAQ Section */}
      <section className="py-16 text-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300">
                Common questions about our mobile development services.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5">
                <div className="relative">
                  <img
                    src="/assets/AI-ApplicationDevelopment.gif"
                    alt="Mobile Development"
                    className="w-full h-[500px] object-cover rounded-2xl"
                  />
                </div>
              </div>

              <div className="lg:col-span-7">
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl border border-gray-700 overflow-hidden backdrop-blur-sm"
                    >
                      <AccordionTrigger className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-700/30 transition-colors">
                        <h3 className="text-lg font-semibold text-white pr-4">
                          {faq.question}
                        </h3>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-6">
                        <p className="text-gray-400 leading-relaxed">
                          {faq.answer}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10" />
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"
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
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 px-6 py-3 mb-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-full backdrop-blur-sm"
            >
              <Globe className="h-5 w-5 text-cyan-400" />
              <span className="text-white font-medium">
                Leading Mobile Development Partner
              </span>
              <Award className="h-4 w-4 text-blue-400 fill-current" />
            </motion.div>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-white via-blue-100 to-[#007ACC] bg-clip-text text-transparent">
                Ready to Build Your
              </span>
              <br />
              <span className="text-white">Mobile Application?</span>
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Transform your ideas into powerful mobile experiences. Let's
              create innovative applications that engage users and drive
              business success.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            >
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <CheckCircle className="h-6 w-6 text-white bg-primary rounded-full p-1" />
                <span className="text-white font-semibold">
                  Free App Consultation
                </span>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <CheckCircle className="h-6 w-6 text-white bg-primary rounded-full p-1" />
                <span className="text-white font-semibold">
                  Cross-Platform Expertise
                </span>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <CheckCircle className="h-6 w-6 text-white bg-primary rounded-full p-1" />
                <span className="text-white font-semibold">24/7 Support</span>
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
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
