import { motion } from "framer-motion";
import { Award, Rocket, Handshake } from "lucide-react";

export default function About() {
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
      icon: <Award className="text-primary text-xl" />,
      title: "Industry Expertise",
      description:
        "With over 15 years of combined experience in AI implementation across diverse industries.",
    },
    {
      id: 2,
      icon: <Rocket className="text-primary text-xl" />,
      title: "Innovation Focus",
      description:
        "Constantly exploring emerging technologies to deliver cutting-edge solutions.",
    },
    {
      id: 3,
      icon: <Handshake className="text-primary text-xl" />,
      title: "Client Partnership",
      description:
        "We work closely with your team to ensure solutions align with your business goals.",
    },
  ];

  return (
    <section id="about" className="py-16 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={variants}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About RT NextGenAI
          </h2>
          <p className="text-lg text-gray-300">
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
              className="text-2xl font-bold mb-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={variants}
            >
              Our Mission
            </motion.h3>
            <motion.p
              className="text-slate-600 mb-6"
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
                    <h4 className="text-xl font-semibold mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-slate-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
