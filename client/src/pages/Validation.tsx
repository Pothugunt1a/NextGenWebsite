
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Cog, Monitor, FlaskConical, Binary, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const validationServices = [
  {
    icon: <Cog className="h-12 w-12 text-primary" />,
    title: "Equipment Validation Engineering",
    description: "RT NextGen AI Consulting Validation Engineers manages, inspects, calibrates, tests and modifies instrumentation and equipment.",
    tasks: [
      "Monitoring and testing equipment",
      "Analyzing and documenting test results",
      "Preparing compliance reports",
      "Directing validation activities",
      "Resolving testing problems",
      "Making adjustments or improvements",
      "Creating validation databases",
      "Interpreting customer requirements",
      "Developing validation schedules",
      "Conducting training",
      "Maintaining instrumentation",
      "Following industry standards"
    ]
  },
  {
    icon: <FlaskConical className="h-12 w-12 text-primary" />,
    title: "Cleaning Validation Engineering",
    description: "A risk-based approach for establishing effective cleaning validation, including policies and master plans.",
    services: [
      "Cleaning Validation Regulatory Guidelines",
      "Cleaning Validation Methodology",
      "Analytical Development",
      "Visual Examination & Sampling",
      "Analytical Testing and Reporting",
      "Worst Case Product Selection Matrix",
      "Qualification and Validation"
    ]
  },
  {
    icon: <Monitor className="h-12 w-12 text-primary" />,
    title: "Computer System Validation",
    description: "Comprehensive validation throughout the complete life cycle of computer systems.",
    services: [
      "Validation Program Development",
      "Retrospective Evaluation",
      "Continuous reassessment",
      "Automated processes validation",
      "Validation Certification"
    ]
  },
  {
    icon: <Binary className="h-12 w-12 text-primary" />,
    title: "Process Validation",
    description: "Expert guidance in identifying risks and critical control points that impact product quality.",
    services: [
      "Quality Systems Regulation",
      "Design Control and Risk Management",
      "Process validation prerequisites",
      "Statistics and quality metrics",
      "Design of Experiments (DOE)",
      "Process Monitoring and Control",
      "Documentation for process validation"
    ]
  }
];

const benefits = [
  "Compliance with regulatory requirements",
  "Reduced risk of product failures",
  "Improved process efficiency",
  "Enhanced product quality",
  "Cost optimization",
  "Faster time to market"
];

export default function Validation() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-background"
    >
      <div className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/90">
          <img 
            src="https://images.unsplash.com/photo-1576670159805-381a0aa9dc25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80"
            alt="Validation Services Banner"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl text-white"
            >
              <h1 className="text-6xl font-bold mb-6">Validation Services</h1>
              <p className="text-2xl text-white/90 mb-8">
                Ensuring quality, compliance, and efficiency in regulated environments
              </p>
              <Button size="lg" variant="secondary">
                Contact Us Today
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Validation Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive validation solutions tailored to meet the unique needs of your organization
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mb-16">
          {validationServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-shrink-0">
                      <div className="p-4 bg-primary/10 rounded-2xl">
                        {service.icon}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                      <p className="text-muted-foreground mb-6">{service.description}</p>
                      
                      {service.tasks && (
                        <div className="mt-4">
                          <h4 className="font-semibold mb-4 text-lg">Key Tasks:</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                            {service.tasks.map((task, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm">
                                <CheckCircle2 className="h-4 w-4 text-primary" />
                                <span>{task}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {service.services && (
                        <div className="mt-4">
                          <h4 className="font-semibold mb-4 text-lg">Our Services:</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {service.services.map((item, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm">
                                <CheckCircle2 className="h-4 w-4 text-primary" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="bg-primary/5 rounded-3xl p-12 mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Benefits of Our Validation Services</h2>
            <p className="text-muted-foreground">Experience the advantages of partnering with RT NextGen AI</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 p-4 bg-background rounded-lg shadow-sm"
              >
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
