import { Link, useLocation } from "wouter";
import { footerLinks, socialLinks, contactInfo } from "../lib/constants";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Get icon component for social links
  const getSocialIconComponent = (iconName: string) => {
    const iconClass = `fab fa-${iconName}`;
    return <i className={iconClass}></i>;
  };

  // Handle smooth scrolling for hash links
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <footer className="text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-block mb-6">
              <span className="text-3xl font-bold">
                <span className="text-white">RT</span>
                <span className="text-primary">NextGenAI</span>
              </span>
            </a>
            <p className="text-slate-400 mb-6 text-lg leading-relaxed">
              Empowering businesses with cutting-edge AI solutions, data-driven insights, and innovative technology consulting services.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Office Address</p>
                  <p className="text-slate-400 text-sm">Bridgewater Dr, Argyle, TX 76226</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <a href="tel:+14696660019" className="text-slate-400 text-sm hover:text-white transition-colors">
                    +1 (469) 666 0019
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Email</p>
                  <a href="mailto:info@rtnextgenai.com" className="text-slate-400 text-sm hover:text-white transition-colors">
                    info@rtnextgenai.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.id}
                  href={link.url} 
                  className="bg-slate-800 hover:bg-primary text-slate-400 hover:text-white transition-all duration-300 rounded-full p-3"
                  aria-label={`Follow us on ${link.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {getSocialIconComponent(link.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* AI Solutions */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">AI Solutions</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/ai-consulting" className="text-slate-400 hover:text-primary transition-colors flex items-center group">
                  AI Consulting
                  <ExternalLink className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/ai-chatbot-development" className="text-slate-400 hover:text-primary transition-colors flex items-center group">
                  AI Chatbot Development
                  <ExternalLink className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/generative-ai-development" className="text-slate-400 hover:text-primary transition-colors flex items-center group">
                  Generative AI Development
                  <ExternalLink className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/ai-components-development" className="text-slate-400 hover:text-primary transition-colors flex items-center group">
                  AI Components Development
                  <ExternalLink className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/intelligent-systems-development" className="text-slate-400 hover:text-primary transition-colors flex items-center group">
                  Intelligent Systems Development
                  <ExternalLink className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/ai-data-strategy" className="text-slate-400 hover:text-primary transition-colors flex items-center group">
                  AI Data Strategy
                  <ExternalLink className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#cloud-computing" className="text-slate-400 hover:text-primary transition-colors" onClick={(e) => scrollToSection(e, "#cloud-computing")}>
                  Cloud Computing
                </a>
              </li>
              <li>
                <a href="#data-analytics" className="text-slate-400 hover:text-primary transition-colors" onClick={(e) => scrollToSection(e, "#data-analytics")}>
                  Data Analytics
                </a>
              </li>
              <li>
                <a href="#machine-learning" className="text-slate-400 hover:text-primary transition-colors" onClick={(e) => scrollToSection(e, "#machine-learning")}>
                  Machine Learning
                </a>
              </li>
              <li>
                <a href="#api-integration" className="text-slate-400 hover:text-primary transition-colors" onClick={(e) => scrollToSection(e, "#api-integration")}>
                  API Integration
                </a>
              </li>
              <li>
                <a href="#devops" className="text-slate-400 hover:text-primary transition-colors" onClick={(e) => scrollToSection(e, "#devops")}>
                  DevOps Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-slate-400 hover:text-primary transition-colors flex items-center group">
                  About Us
                  <ExternalLink className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-slate-400 hover:text-primary transition-colors flex items-center group">
                  Careers
                  <ExternalLink className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <a href="#testimonials" className="text-slate-400 hover:text-primary transition-colors" onClick={(e) => scrollToSection(e, "#testimonials")}>
                  Testimonials
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-primary transition-colors flex items-center group">
                  Contact Us
                  <ExternalLink className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <a href="#privacy" className="text-slate-400 hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-8">
              <p className="text-slate-400 text-sm">
                &copy; {currentYear} RT NextGenAI. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#terms" className="text-slate-400 hover:text-primary transition-colors">
                  Terms of Service
                </a>
                <a href="#privacy" className="text-slate-400 hover:text-primary transition-colors">
                  Privacy Policy
                </a>
                <a href="#cookies" className="text-slate-400 hover:text-primary transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-slate-400 text-sm">
              <span>Built with</span>
              <span className="text-primary">❤️</span>
              <span>by RT NextGenAI Team</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}