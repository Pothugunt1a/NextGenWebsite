import { Link, useLocation } from "wouter";
import { footerLinks, socialLinks } from "../lib/constants";

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
    <footer className="text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <a href="#" className="inline-block mb-6">
              <span className="text-2xl font-bold">
                <span className="text-white">RT</span>
                <span className="text-primary">NextGenAI</span>
              </span>
            </a>
            <p className="text-slate-400 mb-6">
              Transforming businesses through cutting-edge artificial intelligence solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.id}
                  href={link.url} 
                  className="text-slate-400 hover:text-white transition-colors"
                  aria-label={`Follow us on ${link.name}`}
                >
                  {getSocialIconComponent(link.icon)}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link, idx) => (
                <li key={idx}>
                  {link.name === "Contact" ? (
                      <Link 
                        to="/contact"
                        className="text-slate-400 hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a 
                        href={link.href} 
                        className="text-slate-400 hover:text-white transition-colors"
                        onClick={(e) => scrollToSection(e, link.href)}
                      >
                        {link.name}
                      </a>
                    )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, idx) => (
                <li key={idx}>
                  {link.name === "Contact" ? (
                    <Link 
                      to="/contact"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a 
                      href={link.href} 
                      className="text-slate-400 hover:text-white transition-colors"
                      onClick={(e) => scrollToSection(e, link.href)}
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.href} 
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 text-center">
          <p className="text-slate-400">
            &copy; {currentYear} RT NextGenAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}