import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { navLinks } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<number | null>(null);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      setActiveMobileDropdown(null);
      setActiveMobileSubmenu(null);
    }
  };

  // Handle smooth scrolling
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Account for fixed header
        behavior: "smooth",
      });
      
      // Update URL without page reload
      window.history.pushState(null, "", href);
      
      // Close mobile menu
      handleLinkClick();
    }
  };

  // Toggle dropdown for desktop navigation
  const toggleDropdown = (id: number, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  // Toggle dropdown for mobile navigation
  const toggleMobileDropdown = (id: number, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveMobileDropdown(activeMobileDropdown === id ? null : id);
  };

  // Toggle submenu for mobile navigation
  const toggleMobileSubmenu = (name: string, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveMobileSubmenu(activeMobileSubmenu === name ? null : name);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 bg-white shadow-md z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <span className="text-3xl font-bold">
                <span className="text-primary">RT</span>
                <span className="text-dark">NextGenAI</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4" ref={dropdownRef}>
            {navLinks.map((link) => (
              <div key={link.id} className="relative group">
                {link.hasDropdown ? (
                  <div className="relative">
                    <a
                      href={link.href}
                      className="nav-link flex items-center text-dark-light hover:text-primary font-medium transition-colors px-2 py-2"
                      onClick={(e) => toggleDropdown(link.id, e)}
                    >
                      {link.name}
                      <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === link.id ? 'rotate-180' : ''}`} />
                    </a>
                    
                    {/* Multi-level Dropdown */}
                    {activeDropdown === link.id && (
                      <div className="absolute left-0 mt-2 w-72 bg-white rounded-lg shadow-xl z-50 py-3 animate-in fade-in-10 slide-in-from-top-5">
                        {link.dropdownItems?.map((category, idx) => (
                          <div key={idx} className="py-2 px-4">
                            <div className="font-semibold text-primary mb-2">{category.name}</div>
                            <ul className="space-y-1">
                              {category.items.map((item, itemIdx) => (
                                <li key={itemIdx}>
                                  <a 
                                    href={item.href} 
                                    className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary rounded-md transition-all"
                                    onClick={(e) => scrollToSection(e, item.href)}
                                  >
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={link.href}
                    className="nav-link text-dark-light hover:text-primary font-medium transition-colors px-2 py-2"
                    onClick={(e) => scrollToSection(e, link.href)}
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}
            <Button 
              onClick={(e) => scrollToSection(e as any, "#contact")}
              className="bg-primary hover:bg-primary-dark text-white rounded-full font-medium transition-colors ml-2"
            >
              Contact Us
            </Button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="lg:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[80vh] opacity-100 py-4 overflow-y-auto' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <div key={link.id} className="border-b border-gray-100 last:border-b-0">
                {link.hasDropdown ? (
                  <div>
                    <a
                      href={link.href}
                      className="flex justify-between items-center text-dark-light hover:text-primary font-medium transition-colors py-3"
                      onClick={(e) => toggleMobileDropdown(link.id, e)}
                    >
                      {link.name}
                      <ChevronDown className={`h-4 w-4 transition-transform ${activeMobileDropdown === link.id ? 'rotate-180' : ''}`} />
                    </a>
                    
                    {/* Mobile dropdown content */}
                    {activeMobileDropdown === link.id && (
                      <div className="pl-4 pb-2">
                        {link.dropdownItems?.map((category, idx) => (
                          <div key={idx} className="mb-3">
                            <a
                              href="#"
                              className="flex justify-between items-center font-medium text-primary py-2"
                              onClick={(e) => toggleMobileSubmenu(category.name, e)}
                            >
                              {category.name}
                              <ChevronDown className={`h-4 w-4 transition-transform ${activeMobileSubmenu === category.name ? 'rotate-180' : ''}`} />
                            </a>
                            
                            {activeMobileSubmenu === category.name && (
                              <ul className="pl-4 space-y-2 mt-1">
                                {category.items.map((item, itemIdx) => (
                                  <li key={itemIdx}>
                                    <a 
                                      href={item.href} 
                                      className="block py-1 text-sm text-gray-700 hover:text-primary"
                                      onClick={(e) => scrollToSection(e, item.href)}
                                    >
                                      {item.name}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={link.href}
                    className="block text-dark-light hover:text-primary font-medium transition-colors py-3"
                    onClick={(e) => scrollToSection(e, link.href)}
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}
            <Button 
              onClick={(e) => scrollToSection(e as any, "#contact")}
              className="bg-primary hover:bg-primary-dark text-white rounded-full font-medium transition-colors w-full mt-2"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
