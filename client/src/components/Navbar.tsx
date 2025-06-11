import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Brain, Code, Sparkles, ArrowRight, Cloud, Database, BarChart3, Shield, Smartphone, Globe, Settings, Package, GitBranch, Calendar, Video, FileText } from "lucide-react";
import { navLinks } from "../lib/constants";
import { Button } from "./ui/button";
import { useLocation } from "wouter";

export default function Navbar({
  isDarkBackground,
}: {
  isDarkBackground?: boolean;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location, setLocation] = useLocation();
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<
    number | null
  >(null);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(
    null,
  );
  const [activeDesktopSubmenu, setActiveDesktopSubmenu] = useState<
    string | null
  >(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
        setActiveDesktopSubmenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close dropdowns when location changes
  useEffect(() => {
    setActiveDropdown(null);
    setActiveDesktopSubmenu(null);
    setActiveMobileDropdown(null);
    setActiveMobileSubmenu(null);
    setIsMenuOpen(false);
  }, [location]);

  const handleLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      setActiveMobileDropdown(null);
      setActiveMobileSubmenu(null);
    }
    // Close dropdowns on navigation
    setActiveDropdown(null);
    setActiveDesktopSubmenu(null);
  };

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();

    if (href.startsWith("#")) {
      const targetId = href.replace("#", "");
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
        window.history.pushState(null, "", href);
      }
    } else {
      setLocation(href);
    }

    handleLinkClick();
  };

  const toggleDropdown = (id: number, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveDropdown(activeDropdown === id ? null : id);
    setActiveDesktopSubmenu(null);
  };

  const toggleMobileDropdown = (id: number, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveMobileDropdown(activeMobileDropdown === id ? null : id);
  };

  const toggleMobileSubmenu = (name: string, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveMobileSubmenu(activeMobileSubmenu === name ? null : name);
  };

  const toggleDesktopSubmenu = (name: string, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveDesktopSubmenu(activeDesktopSubmenu === name ? null : name);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black shadow-md py-1" : "bg-transparent py-2"}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <img
                src="/assets/3dgifmaker34062.gif"
                alt="RT NextGenAI Logo"
                className="h-16 w-auto"
              />
            </a>
          </div>

          <nav className="hidden lg:flex items-center" ref={dropdownRef}>
            <div className="flex items-center flex-wrap justify-end">
              {navLinks.map((link) => (
                <div 
                  key={link.id} 
                  className="relative group mx-1"
                >
                  {link.hasDropdown ? (
                    <div className="relative">
                      <a
                        href={link.href}
                        className={`nav-link font-medium transition-colors px-2 py-2 text-sm inline-flex items-center ${
                          scrolled
                            ? "text-white hover:text-cyan-400"
                            : isDarkBackground
                              ? "text-white hover:text-gray-200"
                              : "text-black hover:text-primary"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          if (link.hasDropdown) {
                            toggleDropdown(link.id, e);
                          } else if (link.href.startsWith("/")) {
                            setLocation(link.href);
                          } else {
                            scrollToSection(e, link.href);
                          }
                        }}
                      >
                        {link.name}
                        <ChevronDown
                          className={`ml-1 h-3 w-3 transition-transform inline-block ${activeDropdown === link.id ? "rotate-180" : ""}`}
                        />
                      </a>

                      {activeDropdown === link.id && (
                        <div className="fixed left-0 right-0 mt-2 bg-black shadow-2xl z-50 overflow-hidden animate-in fade-in-10 slide-in-from-top-5">
                          <div className="container mx-auto relative flex max-w-none min-h-[400px]">
                            {/* AI Image on the right with gradient overlay */}
                            <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20">
                              <div className="relative">
                                <img
                                  src="/assets/AI-dropdown.png"
                                  alt="AI Technology"
                                  className="object-contain opacity-90"
                                style={{ width: '30rem', height: '20rem' }}
                                />
                                {/* Gradient overlay on the image */}
                                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/20 to-black/60"></div>
                              </div>
                            </div>

                            {/* Content area with interactive hierarchical design */}
                            <div className="relative z-10 flex-1 p-8 max-w-2xl">
                              <div className="space-y-6">
                                {link.dropdownItems?.map((category, idx) => {
                                  const getCategoryIcon = (name: string) => {
                                    switch (name) {
                                      case "AI Consulting":
                                        return <Brain className="h-6 w-6 text-cyan-400" />;
                                      case "AI Software Development":
                                        return <Code className="h-6 w-6 text-blue-400" />;
                                      case "Generative AI":
                                        return <Sparkles className="h-6 w-6 text-purple-400" />;
                                      case "Cloud Services":
                                        return <Cloud className="h-6 w-6 text-cyan-400" />;
                                      case "Data Science":
                                        return <BarChart3 className="h-6 w-6 text-blue-400" />;
                                      case "Database":
                                        return <Database className="h-6 w-6 text-green-400" />;
                                      case "BI and Big Data":
                                        return <BarChart3 className="h-6 w-6 text-purple-400" />;
                                      case "Networking and Cyber Security":
                                        return <Shield className="h-6 w-6 text-red-400" />;
                                      case "Mobile Development":
                                        return <Smartphone className="h-6 w-6 text-pink-400" />;
                                      case "Web Development":
                                        return <Globe className="h-6 w-6 text-indigo-400" />;
                                      case "Systems Integration":
                                        return <Settings className="h-6 w-6 text-orange-400" />;
                                      case "ERP":
                                        return <Package className="h-6 w-6 text-yellow-400" />;
                                      case "DevOps":
                                        return <GitBranch className="h-6 w-6 text-teal-400" />;
                                      case "Events":
                                        return <Calendar className="h-6 w-6 text-green-400" />;
                                      case "Videos":
                                        return <Video className="h-6 w-6 text-red-400" />;
                                      case "Blog":
                                        return <FileText className="h-6 w-6 text-blue-400" />;
                                      default:
                                        return <Brain className="h-6 w-6 text-cyan-400" />;
                                    }
                                  };

                                  const isActive = activeDesktopSubmenu === category.name;

                                  return (
                                    <div key={idx} className="group">
                                      {/* Clickable Category Header */}
                                      <div 
                                        className="relative cursor-pointer select-none"
                                        onClick={(e) => {
                                          if (category.name === "AI Consulting") {
                                            e.preventDefault();
                                            setLocation("/ai-consulting");
                                            handleLinkClick();
                                          } else {
                                            toggleDesktopSubmenu(category.name, e);
                                          }
                                        }}
                                      >
                                        <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-gray-900/80 to-gray-800/60 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 backdrop-blur-sm group-hover:shadow-lg group-hover:shadow-cyan-400/20">
                                          <div className="flex items-center gap-4">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/40">
                                              {getCategoryIcon(category.name)}
                                            </div>
                                            <div>
                                              <h3 className="text-white font-semibold text-lg group-hover:text-cyan-400 transition-colors">
                                                {category.name}
                                              </h3>
                                              <p className="text-gray-400 text-sm">
                                                {category.items.length} services available
                                              </p>
                                            </div>
                                          </div>
                                          <ChevronDown
                                            className={`h-5 w-5 text-cyan-400 transition-transform duration-300 ${
                                              isActive ? "rotate-180" : ""
                                            }`}
                                          />
                                        </div>
                                      </div>

                                      {/* Expandable Category Items */}
                                      {isActive && (
                                        <div className="mt-3 ml-6 space-y-2 animate-in slide-in-from-top-3 fade-in-20 duration-300">
                                          {category.items.map((item, itemIdx) => (
                                            <a
                                              key={itemIdx}
                                              href={item.href}
                                              className="group/item flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10 border border-transparent hover:border-cyan-400/30"
                                              onClick={(e) => {
                                                e.preventDefault();
                                                if (item.href.startsWith("/")) {
                                                  setLocation(item.href);
                                                  handleLinkClick();
                                                } else {
                                                  scrollToSection(e, item.href);
                                                }
                                              }}
                                            >
                                              {/* Connection line */}
                                              <div className="w-4 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
                                              
                                              {/* Service icon */}
                                              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 group-hover/item:scale-150 transition-transform duration-200"></div>
                                              
                                              <span className="text-gray-300 group-hover/item:text-white transition-colors duration-200 text-sm font-medium flex-1">
                                                {item.name}
                                              </span>
                                              
                                              <ArrowRight className="h-4 w-4 text-cyan-400 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all duration-200" />
                                            </a>
                                          ))}
                                        </div>
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute top-4 right-4 w-20 h-20 border border-cyan-400/20 rounded-full z-10"></div>
                            <div className="absolute bottom-4 left-4 w-12 h-12 border border-blue-400/20 rounded-full z-10"></div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={link.href}
                      className={`nav-link font-medium transition-colors px-2 py-2 text-sm ${scrolled ? "text-white hover:text-cyan-400" : isDarkBackground ? "text-white hover:text-gray-200" : "text-black hover:text-primary"}`}
                      onClick={(e) => {
                        e.preventDefault();
                        if (link.href === "#home") {
                          setLocation("/");
                        } else {
                          scrollToSection(e, link.href);
                        }
                      }}
                    >
                      {link.name}
                    </a>
                  )}
                </div>
              ))}
            </div>

            <Button
              onClick={() => setLocation("/contact")}
              className="rounded-full font-medium transition-colors text-sm px-4 py-1 h-8 ml-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white"
              size="sm"
            >
              Contact
            </Button>
          </nav>

          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className={scrolled ? "text-white" : "text-white"}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-[80vh] opacity-100 py-4 overflow-y-auto" : "max-h-0 opacity-0"} ${scrolled ? "bg-white" : "bg-transparent"}`}
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <div
                key={link.id}
                className="border-b border-gray-100 last:border-b-0"
              >
                {link.hasDropdown ? (
                  <div>
                    <a
                      href={link.href}
                      className={`flex justify-between items-center ${scrolled ? "text-gray-800 hover:text-primary" : "text-white hover:text-gray-200"} font-medium transition-colors py-3`}
                      onClick={(e) => {
                        e.preventDefault();
                        if (link.href.startsWith("/")) {
                          setLocation(link.href);
                          handleLinkClick();
                        } else {
                          toggleMobileDropdown(link.id, e);
                        }
                      }}
                    >
                      {link.name}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${activeMobileDropdown === link.id ? "rotate-180" : ""}`}
                      />
                    </a>

                    {activeMobileDropdown === link.id && (
                      <div className="pl-4 pb-2">
                        {link.dropdownItems?.map((category, idx) => (
                          <div key={idx} className="mb-3">
                            <a
                              href="#"
                              className="flex justify-between items-center font-medium text-primary py-2"
                              onClick={(e) =>
                                toggleMobileSubmenu(category.name, e)
                              }
                            >
                              {category.name}
                              <ChevronDown
                                className={`h-4 w-4 transition-transform ${activeMobileSubmenu === category.name ? "rotate-180" : ""}`}
                              />
                            </a>

                            {activeMobileSubmenu === category.name && (
                              <ul className="pl-4 space-y-2 mt-1">
                                {category.items.map((item, itemIdx) => (
                                  <li key={itemIdx}>
                                    <a
                                      href={item.href}
                                      className="block py-1 text-sm text-gray-700 hover:text-primary"
                                      onClick={(e) => {
                                        e.preventDefault();
                                        if (item.href.startsWith("/")) {
                                          setLocation(item.href);
                                        } else {
                                          scrollToSection(e, item.href);
                                        }
                                        handleLinkClick();
                                      }}
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
                    className={`block font-medium transition-colors py-3 ${scrolled ? "text-gray-800 hover:text-primary" : "text-white hover:text-gray-200"}`}
                    onClick={(e) => {
                      e.preventDefault();
                      if (link.href === "#home") {
                        setLocation("/");
                        handleLinkClick();
                      } else {
                        scrollToSection(e, link.href);
                      }
                    }}
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}
            <Button
              onClick={() => {
                setLocation("/contact");
                handleLinkClick();
              }}
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
