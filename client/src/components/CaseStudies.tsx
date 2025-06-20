import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

// Case studies data
const caseStudies = [
  {
    id: 1,
    title: "AI-Powered Demand Forecasting",
    industry: "Retail",
    description: "Implemented a machine learning solution that improved inventory forecasting accuracy by 37%, reducing stockouts and overstock situations.",
    imageUrl: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    tags: ["Machine Learning", "Predictive Analytics", "Inventory Management"]
  },
  {
    id: 2,
    title: "NLP-Based Customer Support Automation",
    industry: "Financial Services",
    description: "Developed an intelligent chatbot that handles 65% of routine customer inquiries, reducing response time from hours to seconds.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    tags: ["Natural Language Processing", "Chatbots", "Customer Service"]
  },
  {
    id: 3,
    title: "Computer Vision for Quality Control",
    industry: "Manufacturing",
    description: "Created a vision-based defect detection system that increased quality assurance efficiency by 45% while reducing false negatives by 76%.",
    imageUrl: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    tags: ["Computer Vision", "Quality Assurance", "Process Automation"]
  }
];

export default function CaseStudies() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="case-studies" className="py-16 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Case Studies</h2>
          <p className="text-lg text-gray-300">
            Real-world AI solutions we've implemented to solve complex business challenges
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {caseStudies.map((study) => (
            <motion.div key={study.id} variants={itemVariants}>
              <Card className="h-full overflow-hidden bg-white/5 backdrop-blur-xl border border-white/20 hover:border-white/30 hover:bg-white/10 transition-all duration-300 shadow-2xl shadow-black/20">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={study.imageUrl} 
                    alt={study.title} 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/15 text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/30 backdrop-blur-md">
                    {study.industry}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{study.title}</h3>
                  <p className="text-gray-300 mb-4">
                    {study.description}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {study.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-full border border-white/30 backdrop-blur-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a 
                    href="#" 
                    className="text-white font-medium inline-flex items-center hover:text-gray-300 transition-colors"
                  >
                    View case study <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <div className="inline-block p-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
            <Button 
              variant="outline"
              className="bg-slate-900 backdrop-blur-md border-0 text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white transition-all duration-300 shadow-lg shadow-black/20 rounded-md"
            >
              View All Case Studies
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}