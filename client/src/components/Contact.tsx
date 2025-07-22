import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { apiRequest } from "../lib/queryClient";
import { contactInfo, socialLinks } from "../lib/constants";
import { useToast } from "../hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { CheckCircle } from "lucide-react";

// Contact form schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters long" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters long" }),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [attachedFile, setAttachedFile] = useState<File | null>(null);
  const { toast } = useToast();

  // Form hook
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // Handle form submission
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const submissionData = {
        ...data,
        attachmentName: attachedFile?.name || null,
        attachmentSize: attachedFile?.size || null,
      };
      await apiRequest("POST", "/api/contact", submissionData);
      setIsSuccess(true);
      setAttachedFile(null);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Something went wrong!",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get icon component for contact info items
  const getContactIconComponent = (iconName: string) => {
    const iconClass = `fas fa-${iconName} text-primary`;
    return <i className={iconClass}></i>;
  };

  // Get icon component for social links
  const getSocialIconComponent = (iconName: string) => {
    const iconClass = `fab fa-${iconName}`;
    return <i className={iconClass}></i>;
  };

  // Reset form to send another message
  const handleSendAnother = () => {
    setIsSuccess(false);
    setAttachedFile(null);
    form.reset();
  };

  return (
    <section id="contact" className="py-12 md:py-16 text-white rounded-3xl mx-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >

              <div className="w-full h-[300px] rounded-lg overflow-hidden mb-8">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3334.8876111668214!2d-97.18333688479374!3d33.36498808079461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c425c8900ab43%3A0x4a0e31bc1c7bfae0!2sBridgewater%20Dr%2C%20Argyle%2C%20TX%2076226!5e0!3m2!1sen!2sus!4v1629308012345!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.id} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        {getContactIconComponent(item.icon)}
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold mb-1 text-white">{item.title}</h4>
                      <p className="text-gray-300">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold mb-4 text-white">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((link) => (
                    <a 
                      key={link.id}
                      href={link.url} 
                      className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                      aria-label={`Follow us on ${link.name}`}
                    >
                      {getSocialIconComponent(link.icon)}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              {isSuccess ? (
                <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 shadow-lg h-full flex flex-col items-center justify-center text-center overflow-hidden">
                  {/* Background Image */}
                  <div className="absolute inset-0 rounded-xl overflow-hidden">
                    <img
                      src="./assets/Contact.gif"
                      alt="Contact Background"
                      className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900/60"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="text-green-400 h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">Message Sent Successfully!</h3>
                    <p className="text-gray-300 mb-6">
                      Thank you for contacting us. Our team will get back to you shortly.
                    </p>
                    <Button
                      onClick={handleSendAnother}
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold"
                    >
                      Send Another Message
                    </Button>
                  </div>
                </div>
              ) : (
                <Form {...form}>
                  <form id="contact-form" onSubmit={form.handleSubmit(onSubmit)} className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 shadow-lg overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0 rounded-xl overflow-hidden">
                      <img
                        src="./assets/Contact.gif"
                        alt="Contact Background"
                        className="w-full h-full object-cover opacity-20"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900/60"></div>
                    </div>
                    
                    {/* Form Content */}
                    <div className="relative z-10">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem className="mb-6">
                          <FormLabel className="text-white font-medium">Your Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="John Doe"
                              className="px-4 py-3 bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="mb-6">
                          <FormLabel className="text-white font-medium">Your Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="john@example.com"
                              type="email"
                              className="px-4 py-3 bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="mb-6">
                      <label className="text-white font-medium mb-2 block">Attachment (PDF/Word)</label>
                      <div className="relative">
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          className="hidden"
                          id="file-upload"
                          onChange={(e) => setAttachedFile(e.target.files?.[0] || null)}
                        />
                        <label
                          htmlFor="file-upload"
                          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-medium rounded-lg cursor-pointer transition-colors duration-200"
                        >
                          Choose File
                        </label>
                      </div>
                      {attachedFile && (
                        <div className="mt-3 p-3 bg-gray-700/30 border border-gray-600 rounded-lg">
                          <p className="text-sm text-gray-300">
                            <span className="font-medium text-white">Selected:</span> {attachedFile.name}
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            Size: {Math.round(attachedFile.size / 1024)} KB
                          </p>
                        </div>
                      )}
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem className="mb-6">
                          <FormLabel className="text-white font-medium">Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your project and requirements"
                              rows={4}
                              className="px-4 py-3 bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                    </div>
                  </form>
                </Form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
