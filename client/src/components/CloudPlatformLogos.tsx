
import { motion } from "framer-motion";

interface CloudPlatform {
  name: string;
  logo: string;
  color: string;
  description: string;
}

const cloudPlatforms: CloudPlatform[] = [
  {
    name: "Amazon Web Services",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    color: "from-orange-400 to-orange-600",
    description: "Leading cloud computing platform"
  },
  {
    name: "Microsoft Azure",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg",
    color: "from-blue-400 to-blue-600",
    description: "Microsoft's cloud computing service"
  },
  {
    name: "Google Cloud Platform",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
    color: "from-green-400 to-blue-500",
    description: "Google's suite of cloud computing services"
  },
  {
    name: "Databricks",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/63/Databricks_Logo.png",
    color: "from-red-400 to-red-600",
    description: "Unified analytics platform for big data and ML"
  },
  {
    name: "Snowflake",
    logo: "https://logos-world.net/wp-content/uploads/2022/11/Snowflake-Logo.png",
    color: "from-cyan-400 to-blue-500",
    description: "Cloud-based data warehouse platform"
  }
];

interface CloudPlatformLogosProps {
  title?: string;
  subtitle?: string;
  variant?: "grid" | "carousel" | "inline";
  showDescriptions?: boolean;
  className?: string;
}

export default function CloudPlatformLogos({
  title = "Cloud Platform Partners",
  subtitle = "We work with leading cloud platforms to deliver scalable solutions",
  variant = "grid",
  showDescriptions = true,
  className = ""
}: CloudPlatformLogosProps) {

  if (variant === "carousel") {
    return (
      <section className={`py-12 overflow-hidden relative ${className}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {title && (
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
              {subtitle && <p className="text-gray-300 max-w-2xl mx-auto">{subtitle}</p>}
            </div>
          )}
          
          <div className="relative flex overflow-x-hidden">
            <div className="animate-marquee whitespace-nowrap flex items-center">
              {cloudPlatforms.map((platform, index) => (
                <div key={index} className="flex items-center justify-center mx-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                    <img
                      src={platform.logo}
                      alt={platform.name}
                      className="h-12 w-auto object-contain filter brightness-0 invert"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center">
              {cloudPlatforms.map((platform, index) => (
                <div key={index} className="flex items-center justify-center mx-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                    <img
                      src={platform.logo}
                      alt={platform.name}
                      className="h-12 w-auto object-contain filter brightness-0 invert"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (variant === "inline") {
    return (
      <div className={`flex flex-wrap items-center justify-center gap-6 ${className}`}>
        {cloudPlatforms.map((platform, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg p-2 flex items-center justify-center">
              <img
                src={platform.logo}
                alt={platform.name}
                className="w-full h-full object-contain filter brightness-0 invert"
              />
            </div>
            <span className="text-white font-medium text-sm">{platform.name}</span>
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <section className={`py-16 text-white ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">{title}</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            {subtitle && <p className="text-xl text-gray-300 max-w-3xl mx-auto">{subtitle}</p>}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {cloudPlatforms.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 h-full hover:border-blue-500/50 hover:bg-gray-800/80 transition-all duration-500 text-center group-hover:scale-105">
                <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${platform.color} rounded-2xl p-1`}>
                  <div className="w-full h-full bg-white rounded-xl flex items-center justify-center p-3">
                    <img
                      src={platform.logo}
                      alt={platform.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {platform.name}
                </h3>
                
                {showDescriptions && (
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {platform.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
