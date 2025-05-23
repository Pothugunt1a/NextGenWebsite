import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Cog, Monitor, FlaskConical, Binary, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const validationServices = [
  {
    icon: <Cog className="h-12 w-12 text-primary" />,
    title: "Equipment Validation Engineering",
    description:
      "RT NextGen AI Validation Engineers manages, inspects, calibrates, tests and modifies the instrumentation, equipment, mechanics and procedures used to manufacture various products. They ensure all systems are running correctly and efficiently to produce high-quality products. They also investigate the causes of equipment failures and anomalies and decide if the equipment needs to be repaired or replaced. RT NextGen AI in-house staff of highly skilled professionals consults with you to determine your optimal strategy and immediate solutions. Our team also helps you with any resources for on-site tasks.",
    tasks: [
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
  },
  {
    icon: <FlaskConical className="h-12 w-12 text-primary" />,
    title: "Cleaning Validation Engineering",
    description:
      "A risk-based approach is followed for establishing an effective cleaning validation, including the development of policies, master plans and the appropriate content for each study to be performed incorporating critical quality attributes and critical process parameters and process control.",
    services: [
      "Cleaning Validation Regulatory Guidelines",
      "Cleaning Validation Methodology",
      "Analytical Development",
      "Visual Examination – Sampling, Swab Sampling, Rinse Sampling",
      "Analytical Testing and Reporting",
      "Cleaning Validation Sampling and Testing",
      "Worst Case Product Selection Matrix",
      "Qualification and Validation",
    ],
  },
  {
    icon: <Monitor className="h-12 w-12 text-primary" />,
    title: "Computer System Validation",
    description:
      "Computer Systems Validation is not a one-time event. Validation should be considered as part of the complete life cycle of a computer system. This cycle includes the stages of planning, specification, programming, testing commissioning, documentation, operation, monitoring and modifying. Our computer system validation consultants have extensive experience in providing leadership to companies seeking to meet regulatory expectations. our experienced CSV team can provide expert project planning and oversight that includes:",
    services: [
      "Validation Program, Procedure, and Template Development",
      "Retrospective Evaluation of Legacy Systems",
      "Continuous reassessment and re-validation",
      "Automated or semi-automated processes, controlled by a DCS (distributed control system), PLC (programmable logic controller), or similar computer system Validation Certification Package Development",
    ],
  },
  {
    icon: <Binary className="h-12 w-12 text-primary" />,
    title: "Process Validation",
    description:
      "Having years of experience, our highly experienced team understands the concerns companies face in this highly regulated environment. The first step in process validation in manufacturing is to identify the risks and critical control points of the process. Which aspects of the process will impact product quality i.e. GMP risk, if they fail, or if they fall outside the control parameters?",
    services: [
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
  },
];

const benefits = [
  "Compliance with regulatory requirements",
  "Reduced risk of product failures",
  "Improved process efficiency",
  "Enhanced product quality",
  "Cost optimization",
  "Faster time to market",
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
                Ensuring quality, compliance, and efficiency in regulated
                environments
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
            Comprehensive validation solutions tailored to meet the unique needs
            of your organization
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
                      <h3 className="text-2xl font-bold mb-4">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        {service.description}
                      </p>

                      {service.tasks && (
                        <div className="mt-4">
                          <h4 className="font-semibold mb-4 text-lg">
                            Key Tasks:
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                            {service.tasks.map((task, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-2 text-sm"
                              >
                                <CheckCircle2 className="h-4 w-4 text-primary" />
                                <span>{task}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {service.services && (
                        <div className="mt-4">
                          <h4 className="font-semibold mb-4 text-lg">
                            Our Services:
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {service.services.map((item, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-2 text-sm"
                              >
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
            <h2 className="text-3xl font-bold mb-4">
              Benefits of Our Validation Services
            </h2>
            <p className="text-muted-foreground">
              Experience the advantages of partnering with RT NextGen AI
            </p>
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
