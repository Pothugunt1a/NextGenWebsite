import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Beaker,
  FlaskConical,
  Stethoscope,
  ScrollText,
  Shield,
} from "lucide-react";

const services = [
  {
    icon: <Stethoscope className="h-12 w-12 text-primary" />,
    title: "Clinical Operations",
    description:
      "Develop solutions that increase efficiencies, productivity, and quality in your clinical trial from study start-up through completion. By strategizing for the level of support you need, we create clinical operations solutions to facilitate all aspects of your clinical trial — including management of staff and training, budgets and contracts, patient recruitment and retention, and site operations — to drive on-time project delivery.",
  },
  {
    icon: <FlaskConical className="h-12 w-12 text-primary" />,
    title: "Biometrics",
    description:
      "Leverage our life science knowledge for guidance on biometric solutions, including clinical data management and SAS programming, throughout the clinical drug development process. We identify solutions for every stage of your trial, minimizing your timeline risks and improving data quality via world-class clinical data management.",
  },
  {
    icon: <Beaker className="h-12 w-12 text-primary" />,
    title: "Pharmacovigilance / Drug Safety",
    description:
      "If your organization is in the pharmaceutical, biotech, consumer health, animal health or medical device space, partner with us for consultation that streamlines your end-to-end drug safety surveillance activities for investigational and post-market products.",
  },
  {
    icon: <ScrollText className="h-12 w-12 text-primary" />,
    title: "Regulatory Affairs",
    description:
      "Engage our consultative approach to quickly identify solutions that reduce costs, accelerate approval timelines and improve your processes. Ranging from preapproval to post-approval, and from intellectual property to FDA approval, we strategized cost-effective, high-quality regulatory affairs solutions.",
  },
  {
    icon: <Shield className="h-12 w-12 text-primary" />,
    title: "Quality and Compliance",
    description:
      "Create a long-term plan that ensures the production of quality products while meeting compliance requirements. Specializing in corrective and preventive action, we develop solutions that address your quality and regulatory compliance processes.",
  },
];

export default function LifeScience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-light"
    >
      <div className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/Lifescience_banner.jpg"
            alt="Life Science Digital Solutions"
            className="w-full h-full object-cover object-center"
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
              <h1 className="text-5xl font-bold mb-6">
                Life Science Solutions
              </h1>
              <p className="text-xl text-white/90">
                Advancing healthcare through innovative technology solutions for
                pharmaceutical, biotech, and healthcare organizations
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
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
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-slate-600">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}