import { motion } from "framer-motion";
import { solutions } from "../lib/constants";
import { ArrowRight, Check } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export default function Solutions() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const getIconComponent = (iconName: string) => {
    const iconClass = `fas fa-${iconName} text-primary text-2xl`;
    return <i className={iconClass}></i>;
  };

  const getEmojiIcon = (solutionId: number) => {
    const emojiMap: { [key: number]: string } = {
      1: "🤖", // Intelligent Automation
      2: "📊", // Predictive Analytics
      3: "💬", // Conversational AI
      4: "👁️", // Computer Vision
      5: "📈", // Business Intelligence
      6: "🛡️", // AI Security Solutions
    };
    return emojiMap[solutionId] || "🔧";
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="solutions" className="py-16 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our AI Solutions</h2>
          <p className="text-lg text-slate-600">
            Comprehensive AI-powered solutions designed to address specific business challenges 
            and create measurable impact.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {solutions.map((solution) => (
            <motion.div key={solution.id} variants={cardVariants}>
              <Card className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow primary-shadow h-full p-1">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    {getIconComponent(solution.icon)}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{getEmojiIcon(solution.id)} {solution.title}</h3>
                  <p className="text-slate-600 mb-4">
                    {solution.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Check className="text-primary mr-2 h-4 w-4" />
                        <span className="text-sm text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="#contact" 
                    className="text-primary font-medium inline-flex items-center hover:text-primary-dark transition-colors"
                    onClick={scrollToContact}
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
