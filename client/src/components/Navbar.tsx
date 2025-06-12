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

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();

    if (href.startsWith("#")) {
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }

    handleLinkClick();
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
    setActiveMobileDropdown(null);
    setActiveMobileSubmenu(null);
    setActiveDesktopSubmenu(null);
  };

  const toggleDropdown = (linkId: number, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveDropdown(activeDropdown === linkId ? null : linkId);
    setActiveDesktopSubmenu(null);
  };

  const toggleMobileDropdown = (linkId: number) => {
    setActiveMobileDropdown(
      activeMobileDropdown === linkId ? null : linkId,
    );
    setActiveMobileSubmenu(null);
  };

  const toggleMobileSubmenu = (submenuName: string) => {
    setActiveMobileSubmenu(
      activeMobileSubmenu === submenuName ? null : submenuName,
    );
  };

  const toggleDesktopSubmenu = (submenuName: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveDesktopSubmenu(
      activeDesktopSubmenu === submenuName ? null : submenuName,
    );
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
                          <div className="container mx-auto relative flex max-w-none min-h-[280px]">
                            {/* Dynamic Image on the right with gradient overlay */}
                            <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20">
                              <div className="relative">
                                <img
                                  src={link.name === "IT Services" ? "/assets/IT-Services-dropdown.png" : "/assets/AI-dropdown.png"}
                                  alt={link.name === "IT Services" ? "IT Services Technology" : "AI Technology"}
                                  className="object-contain opacity-90"
                                  style={{ width: '30rem', height: '20rem' }}
                                />
                                {/* Gradient overlay on the image */}
                                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/20 to-black/60"></div>
                              </div>
                            </div>

                            {/* Content area with interactive hierarchical design */}
                            <div className="relative z-10 flex-1 p-6 max-w-2xl">
                              {link.name === "IT Services" ? (
                                <div className="grid grid-cols-2 gap-3">
                                  {link.dropdownItems?.map((category, idx) => {
                                    const getCategoryIcon = (name: string) => {
                                      switch (name) {
                                        case "Cloud Services":
                                          return <Cloud className="h-4 w-4 text-cyan-400" />;
                                        case "Data Science":
                                          return <BarChart3 className="h-4 w-4 text-blue-400" />;
                                        case "Database":
                                          return <Database className="h-4 w-4 text-green-400" />;
                                        case "BI and Big Data":
                                          return <BarChart3 className="h-4 w-4 text-purple-400" />;
                                        case "Networking and Cyber Security":
                                          return <Shield className="h-4 w-4 text-red-400" />;
                                        case "Mobile Development":
                                          return <Smartphone className="h-4 w-4 text-pink-400" />;
                                        case "Web Development":
                                          return <Globe className="h-4 w-4 text-indigo-400" />;
                                        case "Systems Integration":
                                          return <Settings className="h-4 w-4 text-orange-400" />;
                                        case "ERP":
                                          return <Package className="h-4 w-4 text-yellow-400" />;
                                        case "DevOps":
                                          return <GitBranch className="h-4 w-4 text-teal-400" />;
                                        default:
                                          return <Brain className="h-4 w-4 text-cyan-400" />;
                                      }
                                    };

                                    const isActive = activeDesktopSubmenu === category.name;

                                    return (
                                      <div key={idx} className="group">
                                        {/* Clickable Category Header */}
                                        <div 
                                          className="relative cursor-pointer select-none"
                                          onClick={(e) => toggleDesktopSubmenu(category.name, e)}
                                        >
                                          <div className="flex items-center justify-between p-2 rounded-xl bg-gradient-to-r from-gray-900/80 to-gray-800/60 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 backdrop-blur-sm group-hover:shadow-lg group-hover:shadow-cyan-400/20">
                                            <div className="flex items-center gap-2">
                                              <div className="flex items-center justify-center w-6 h-6 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/40">
                                                {getCategoryIcon(category.name)}
                                              </div>
                                              <div>
                                                <h3 className="text-white font-semibold text-xs group-hover:text-cyan-400 transition-colors whitespace-nowrap overflow-hidden text-ellipsis">
                                                  {category.name}
                                                </h3>
                                              </div>
                                            </div>
                                            <ChevronDown
                                              className={`h-3 w-3 text-cyan-400 transition-transform duration-300 flex-shrink-0 ${
                                                isActive ? "rotate-180" : ""
                                              }`}
                                            />
                                          </div>
                                        </div>

                                        {/* Expandable Category Items */}
                                        {isActive && (
                                          <div className="mt-1 ml-3 space-y-1 animate-in slide-in-from-top-3 fade-in-20 duration-300">
                                            {category.items.map((item, itemIdx) => (
                                              <a
                                                key={itemIdx}
                                                href={item.href}
                                                className="group/item flex items-center gap-2 p-1 rounded-lg transition-all duration-200 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10 border border-transparent hover:border-cyan-400/30"
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
                                                <div className="w-2 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
                                                
                                                {/* Service icon */}
                                                <div className="w-1 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 group-hover/item:scale-150 transition-transform duration-200"></div>
                                                
                                                {/* Service name */}
                                                <span className="text-gray-300 group-hover/item:text-white transition-colors duration-200 font-medium text-xs">
                                                  {item.name}
                                                </span>
                                              </a>
                                            ))}
                                          </div>
                                        )}
                                      </div>
                                    );
                                  })}
                                </div>
                              ) : (
                                <div className="space-y-4">
                                  {link.dropdownItems?.map((category, idx) => {
                                    const getCategoryIcon = (name: string) => {
                                      switch (name) {
                                        case "AI Consulting":
                                          return <Brain className="h-6 w-6 text-cyan-400" />;
                                        case "AI Software Development":
                                          return <Code className="h-6 w-6 text-blue-400" />;
                                        case "Generative AI":
                                          return <Sparkles className="h-6 w-6 text-purple-400" />;
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
                                              </div>
                                            </div>
                                            {category.name !== "AI Consulting" && (
                                              <ChevronDown
                                                className={`h-5 w-5 text-cyan-400 transition-transform duration-300 ${
                                                  isActive ? "rotate-180" : ""
                                                }`}
                                              />
                                            )}
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
                                                
                                                {/* Service name */}
                                                <span className="text-gray-300 group-hover/item:text-white transition-colors duration-200 font-medium">
                                                  {item.name}
                                                </span>
                                              </a>
                                            ))}
                                          </div>
                                        )}
                                      </div>
                                    );
                                  })}
                                </div>
                              )}
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
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden lg:block">
              <Button
                variant="outline"
                size="sm"
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
                onClick={() => setLocation("/contact")}
              >
                Get Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className={`${scrolled || isDarkBackground ? "text-white" : "text-black"} transition-colors`}
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2 pt-4">
              {navLinks.map((link) => (
                <div key={link.id}>
                  {link.hasDropdown ? (
                    <div>
                      <button
                        className="w-full text-left px-3 py-2 text-gray-700 hover:text-primary flex items-center justify-between"
                        onClick={() => toggleMobileDropdown(link.id)}
                      >
                        {link.name}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            activeMobileDropdown === link.id ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {activeMobileDropdown === link.id && (
                        <div className="ml-4 space-y-2 mt-2">
                          {link.dropdownItems?.map((category, idx) => (
                            <div key={idx}>
                              <button
                                className="w-full text-left px-3 py-2 text-gray-600 hover:text-primary flex items-center justify-between"
                                onClick={() => toggleMobileSubmenu(category.name)}
                              >
                                {category.name}
                                <ChevronDown
                                  className={`h-3 w-3 transition-transform ${
                                    activeMobileSubmenu === category.name
                                      ? "rotate-180"
                                      : ""
                                  }`}
                                />
                              </button>
                              {activeMobileSubmenu === category.name && (
                                <div className="ml-4 space-y-1 mt-1">
                                  {category.items.map((item, itemIdx) => (
                                    <a
                                      key={itemIdx}
                                      href={item.href}
                                      className="block px-3 py-2 text-sm text-gray-500 hover:text-primary"
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
                                      {item.name}
                                    </a>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={link.href}
                      className="block px-3 py-2 text-gray-700 hover:text-primary"
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
              <div className="pt-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
                  onClick={() => {
                    setLocation("/contact");
                    handleLinkClick();
                  }}
                >
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}