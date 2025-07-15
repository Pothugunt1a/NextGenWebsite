import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Award, Rocket, Handshake } from "lucide-react";

export default function AboutPage() {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  
  const bannerImages = [
    "/assets/ai-brain-banner.png",
    "/assets/About-Banner.png", 
    "/assets/validation-banner.png"
  ];

  // Auto-rotate banner images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBannerIndex((prev) => (prev + 1) % bannerImages.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(timer);
  }, [bannerImages.length]);
  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3 + custom * 0.2,
        duration: 0.5,
      },
    }),
  };

  const features = [
    {
      id: 1,
      icon: (
        <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500">
          <Award className="text-xl text-white" />
        </div>
      ),
      title: "Industry Expertise",
      description:
        "With over 15 years of combined experience in AI implementation across diverse industries.",
    },
    {
      id: 2,
      icon: (
        <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500">
          <Rocket className="text-xl text-white" />
        </div>
      ),
      title: "Innovation Focus",
      description:
        "Constantly exploring emerging technologies to deliver cutting-edge solutions.",
    },
    {
      id: 3,
      icon: (
        <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500">
          <Handshake className="text-xl text-white" />
        </div>
      ),
      title: "Client Partnership",
      description:
        "We work closely with your team to ensure solutions align with your business goals.",
    },
  ];

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
        {/* Carousel Background Images */}
        <div className="absolute inset-0">
          {bannerImages.map((image, index) => (
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: index === currentBannerIndex ? 1 : 0,
                scale: index === currentBannerIndex ? 1 : 1.1 
              }}
              transition={{ 
                duration: 1.5,
                ease: "easeInOut"
              }}
            >
              <img
                src={image}
                alt={`About RT NextGen AI - Banner ${index + 1}`}
                className="w-full h-full object-cover object-center"
              />
              {/* Enhanced gradient overlay for all banners */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40"></div>
            </motion.div>
          ))}
        </div>
        
        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex space-x-2">
            {bannerImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentBannerIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentBannerIndex
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
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
                About RT NextGen AI
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-300 mb-12 max-w-3xl leading-relaxed"
            >
              Discover our mission, vision, and the passionate team behind cutting-edge AI solutions that transform businesses worldwide.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-light relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 border border-blue-500 rotate-45"></div>
          <div className="absolute top-32 right-20 w-24 h-24 border border-cyan-500 rotate-12"></div>
          <div className="absolute bottom-20 left-32 w-40 h-40 border border-blue-400 rotate-45"></div>
          <div className="absolute bottom-32 right-40 w-28 h-28 border border-cyan-400 rotate-12"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={variants}
          >
            <h2 className="text-5xl font-bold mb-6 text-white">
              About RT NextGenAI
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              At RT NextGen AI, we deliver a full spectrum of cutting-edge IT services 
              designed to power your success. From AI-driven solutions to digital 
              transformation strategies, we harness next-generation technologies to help 
              businesses thrive in an ever-evolving digital landscape. Our mission is to 
              innovate, automate, and elevate—so you can lead with confidence and agility.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
                alt="RT NextGenAI team collaborating"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </motion.div>
            <div>
              <motion.h3
                className="text-2xl font-bold mb-4 text-white"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={variants}
              >
                Our Mission
              </motion.h3>
              <motion.p
                className="text-gray-300 mb-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={variants}
              >
                To democratize access to cutting-edge AI technologies, empowering
                businesses of all sizes to make data-driven decisions and achieve
                operational excellence.
              </motion.p>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.id}
                    className="flex items-start"
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={featureVariants}
                  >
                    <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                    <div className="ml-4">
                      <h4 className="text-xl font-semibold mb-2 text-white">
                        {feature.title}
                      </h4>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}