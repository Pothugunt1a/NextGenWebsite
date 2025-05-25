
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Cog, Monitor, FlaskConical, Binary, CheckCircle2, ArrowRight, Info, ChevronDown } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ScrollArea } from "@/components/ui/scroll-area";

const validationServices = [
  {
    icon: <Cog className="h-12 w-12 text-primary" />,
    title: "Equipment Validation Engineering",
    description: "RT NextGen AI Validation Engineers manages, inspects, calibrates, tests and modifies the instrumentation, equipment, mechanics and procedures used to manufacture various products.",
    sections: [
      {
        title: "Core Services",
        items: [
          "Equipment Calibration",
          "Performance Testing",
          "Mechanical Inspection",
          "Validation Documentation"
        ]
      },
      {
        title: "Key Activities",
        items: [
          "Monitoring and testing equipment",
          "Analyzing and documenting test results",
          "Preparing compliance reports",
          "Directing validation activities"
        ]
      },
      {
        title: "Quality Assurance",
        items: [
          "Resolving testing problems",
          "Making adjustments or improvements",
          "Creating databases to track validation",
          "Maintaining instrumentation"
        ]
      }
    ]
  },
  {
    icon: <FlaskConical className="h-12 w-12 text-primary" />,
    title: "Cleaning Validation Engineering",
    description: "A risk-based approach is followed for establishing an effective cleaning validation, including the development of policies, master plans and appropriate content for each study.",
    sections: [
      {
        title: "Methodology",
        items: [
          "Cleaning Validation Guidelines",
          "Validation Methodology",
          "Analytical Development",
          "Visual Examination"
        ]
      },
      {
        title: "Testing & Analysis",
        items: [
          "Analytical Testing & Reporting",
          "Validation Sampling",
          "Product Selection Matrix",
          "System Qualification"
        ]
      }
    ]
  },
  {
    icon: <Monitor className="h-12 w-12 text-primary" />,
    title: "Computer System Validation",
    description: "Computer Systems Validation is a complete life cycle process including planning, specification, programming, testing, commissioning, documentation, operation, monitoring and modifying.",
    sections: [
      {
        title: "System Development",
        items: [
          "Validation Program Development",
          "Legacy Systems Evaluation",
          "Continuous Reassessment",
          "Automated Process Control"
        ]
      },
      {
        title: "Testing & Documentation",
        items: [
          "Validation Documentation",
          "System Integration Testing",
          "Performance Qualification",
          "Risk Assessment"
        ]
      }
    ]
  },
  {
    icon: <Binary className="h-12 w-12 text-primary" />,
    title: "Process Validation",
    description: "Our experienced team understands the concerns companies face in this highly regulated environment. We identify risks and critical control points that impact product quality.",
    sections: [
      {
        title: "Quality Management",
        items: [
          "Quality Systems & Standards",
          "Design Control & Risk Management",
          "Process Prerequisites",
          "Quality Metrics Analysis"
        ]
      },
      {
        title: "Process Development",
        items: [
          "Process Development",
          "Design of Experiments",
          "Manual Process Validation",
          "Process FMEA"
        ]
      },
      {
        title: "Infrastructure",
        items: [
          "Facilities & Utilities",
          "Process Monitoring",
          "Documentation Management",
          "Verification vs Validation"
        ]
      }
    ]
  }
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
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/90">
          <img
            src="/assets/contact-banner.png"
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
              <p className="text-xl text-white/90 mb-8">
                Comprehensive validation solutions ensuring quality, compliance, and operational excellence
              </p>
              <Button size="lg" variant="secondary">
                Schedule Consultation <ArrowRight className="ml-2" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Validation Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert validation services tailored to meet your specific requirements
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

                    <Accordion type="single" collapsible className="w-full">
                      {service.sections.map((section, idx) => (
                        <AccordionItem value={`section-${idx}`} key={idx}>
                          <AccordionTrigger className="text-lg font-semibold">
                            {section.title}
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                              {section.items.map((item, itemIdx) => (
                                <div key={itemIdx} className="flex items-start gap-3 p-2">
                                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                                  <span className="text-gray-700">{item}</span>
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="bg-primary/5 rounded-3xl p-12 mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Validation Services?</h2>
            <p className="text-muted-foreground">
              Experience comprehensive validation solutions backed by industry expertise
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Industry Compliance",
                description: "Ensure adherence to latest regulatory standards",
              },
              {
                title: "Expert Team",
                description: "Experienced validation professionals at your service",
              },
              {
                title: "Comprehensive Solutions",
                description: "End-to-end validation services under one roof",
              },
              {
                title: "Advanced Technology",
                description: "Cutting-edge tools and methodologies",
              },
              {
                title: "Quality Assurance",
                description: "Rigorous testing and documentation processes",
              },
              {
                title: "Timely Delivery",
                description: "Efficient project management and execution",
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col gap-3 p-6 bg-white rounded-xl shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{benefit.title}</h3>
                </div>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
