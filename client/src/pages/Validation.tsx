import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Cog,
  Monitor,
  FlaskConical,
  Binary,
  CheckCircle2,
  ArrowRight,
  Info,
} from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ScrollArea } from "@/components/ui/scroll-area";

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
  {
    title: "Regulatory Compliance",
    description: "Ensure adherence to industry standards and regulations",
    icon: <CheckCircle2 className="h-6 w-6" />,
  },
  {
    title: "Risk Reduction",
    description: "Minimize product failures and operational risks",
    icon: <CheckCircle2 className="h-6 w-6" />,
  },
  {
    title: "Process Efficiency",
    description: "Optimize workflows and improve productivity",
    icon: <CheckCircle2 className="h-6 w-6" />,
  },
  {
    title: "Quality Assurance",
    description: "Maintain consistent product quality standards",
    icon: <CheckCircle2 className="h-6 w-6" />,
  },
  {
    title: "Cost Optimization",
    description: "Reduce operational costs and minimize waste",
    icon: <CheckCircle2 className="h-6 w-6" />,
  },
  {
    title: "Market Readiness",
    description: "Accelerate time-to-market for new products",
    icon: <CheckCircle2 className="h-6 w-6" />,
  },
];

export default function Validation() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-background"
    >
      <div className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/validation.jpg" // Ensure you have the correct image path
            alt="Validation Services Banner"
            className="w-full h-full object-cover" // Keep this to fully cover the banner area
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
              <p className="text-xl text-white/90 mb-8">
                Ensuring quality, compliance, and operational excellence
              </p>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => {
                  window.location.href = "/contact"; // Ensure this path aligns with your routing setup
                  window.scrollTo(0, 0);
                }}
              >
                Contact Us
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Validation Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert validation services tailored to meet your specific
            requirements
          </p>
        </div>

        <Tabs defaultValue="equipment" className="mb-16">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
            <TabsTrigger value="equipment">Equipment</TabsTrigger>
            <TabsTrigger value="cleaning">Cleaning</TabsTrigger>
            <TabsTrigger value="computer">Computer Systems</TabsTrigger>
            <TabsTrigger value="process">Process</TabsTrigger>
          </TabsList>

          {validationServices.map((service, index) => (
            <TabsContent
              key={index}
              value={["equipment", "cleaning", "computer", "process"][index]}
              className="mt-0"
            >
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className="p-4 bg-primary/10 rounded-2xl">
                      {service.icon}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <Alert className="mb-6">
                      <Info className="h-4 w-4" />
                      <AlertDescription>{service.description}</AlertDescription>
                    </Alert>

                    <ScrollArea className="h-[300px] rounded-md border p-4">
                      {service.tasks && (
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold mb-4">
                            Key Tasks
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {service.tasks.map((task, idx) => (
                              <div
                                key={idx}
                                className="flex items-start gap-2 text-sm"
                              >
                                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />{" "}
                                {/* Maintain icon size */}
                                <span className="block">{task}</span>{" "}
                                {/* Display text fully */}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {service.services && (
                        <div>
                          <h4 className="text-lg font-semibold mb-4">
                            Our Services
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {service.services.map((item, idx) => (
                              <div
                                key={idx}
                                className="flex items-start gap-2 text-sm"
                              >
                                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />{" "}
                                {/* Maintain icon size */}
                                <span className="block">{item}</span>{" "}
                                {/* Display text fully */}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </ScrollArea>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="bg-primary/5 rounded-3xl p-12 mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Benefits</h2>
            <p className="text-muted-foreground">
              Experience the advantages of our comprehensive validation services
            </p>
          </div>
          <ScrollArea className="h-[400px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col gap-3 p-6 bg-background rounded-xl shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {benefit.icon}
                    </div>
                    <h3 className="font-semibold text-lg">{benefit.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </motion.div>
  );
}
