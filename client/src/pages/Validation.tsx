
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Cog, Monitor, FlaskConical, Binary } from "lucide-react";

const validationServices = [
  {
    icon: <Cog className="h-12 w-12 text-primary" />,
    title: "Equipment Validation Engineering",
    description: "RT NextGen AI Consulting Validation Engineers manages, inspects, calibrates, tests and modifies the instrumentation, equipment, mechanics and procedures used to manufacture various products. Our in-house staff of highly skilled professionals consults with you to determine your optimal strategy and immediate solutions.",
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
    description: "A risk-based approach is followed for establishing an effective cleaning validation, including the development of policies, master plans and appropriate content for each study.",
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
    description: "Computer Systems Validation is not a one-time event. Validation should be considered as part of the complete life cycle of a computer system, including planning, specification, programming, testing, commissioning, documentation, operation, monitoring and modifying.",
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
    description: "With years of experience, our highly experienced team understands the concerns companies face in this highly regulated environment. We help identify risks and critical control points that impact product quality.",
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

export default function Validation() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-light"
    >
      <div className="relative h-[400px] overflow-hidden">
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
              <h1 className="text-5xl font-bold mb-6">Validation Services</h1>
              <p className="text-xl text-white/90">
                Comprehensive validation solutions ensuring quality, compliance, and efficiency in regulated environments
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-8">
          {validationServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-slate-600 mb-6">{service.description}</p>
                  
                  {service.tasks && (
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Key Tasks:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {service.tasks.map((task, idx) => (
                          <li key={idx} className="flex items-center text-slate-600">
                            <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {service.services && (
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Our Services:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {service.services.map((item, idx) => (
                          <li key={idx} className="flex items-center text-slate-600">
                            <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
