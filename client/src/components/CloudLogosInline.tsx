
import { motion } from "framer-motion";

const cloudLogos = [
  {
    name: "AWS",
    icon: "☁️",
    color: "from-orange-500 to-yellow-500"
  },
  {
    name: "Microsoft Azure", 
    icon: "🔷",
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Google Cloud",
    icon: "🌐", 
    color: "from-green-500 to-blue-500"
  },
  {
    name: "Databricks",
    icon: "🔥",
    color: "from-red-500 to-orange-500"
  },
  {
    name: "Snowflake",
    icon: "❄️",
    color: "from-cyan-500 to-blue-500"
  }
];

interface CloudLogosInlineProps {
  className?: string;
  title?: string;
}

export default function CloudLogosInline({ className = "", title }: CloudLogosInlineProps) {
  return (
    <div className={`text-center ${className}`}>
      {title && <h3 className="text-xl font-semibold text-white mb-6">{title}</h3>}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
        {cloudLogos.map((platform, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className={`bg-gradient-to-br ${platform.color} p-1 rounded-2xl group hover:scale-105 transition-transform duration-300`}
          >
            <div className="bg-gray-900 p-6 rounded-xl">
              <div className="text-3xl mb-3">{platform.icon}</div>
              <p className="text-white font-semibold text-sm">{platform.name}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
