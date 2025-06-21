import { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Brain,
  Code,
  Sparkles,
  ArrowRight,
  Cloud,
  Database,
  BarChart3,
  Shield,
  Smartphone,
  Globe,
  Settings,
  Package,
  GitBranch,
  Calendar,
  Video,
  FileText,
} from "lucide-react";
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
    setActiveMobileDropdown(activeMobileDropdown === linkId ? null : linkId);
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

          <div className="flex items-center gap-4">
            <nav className="hidden lg:flex items-center" ref={dropdownRef}>
              {navLinks.map((link) => (
                <div key={link.id} className="relative group mx-1">
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
                          <div className="container mx-auto relative flex max-w-none min-h-[320px]">
                            {/* Dynamic Image on the right with gradient overlay */}
                            <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20">
                              <div className="relative">
                                <img
                                  src={
                                    link.name === "IT Services"
                                      ? "./assets/IT-Services-dropdown.png"
                                      : "./assets/AI-dropdown.png"
                                  }
                                  alt={
                                    link.name === "IT Services"
                                      ? "IT Services Technology"
                                      : "AI Technology"
                                  }
                                  className="object-contain opacity-90"
                                  style={{ width: "28rem", height: "18rem" }}
                                />
                                {/* Gradient overlay on the image */}
                                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/20 to-black/60"></div>
                              </div>
                            </div>

                            {/* Content area with interactive hierarchical design - increased width */}
                            <div className="relative z-10 flex-1 p-6 pr-10 max-w-4xl">
                              {link.name === "IT Services" ? (
                                <div className="grid grid-cols-2 gap-3 max-w-5xl">
                                  {link.dropdownItems?.map((category, idx) => {
                                    const getCategoryIcon = (name: string) => {
                                      switch (name) {
                                        case "Cloud Services":
                                          return (
                                            <Cloud className="h-6 w-6 text-cyan-400" />
                                          );
                                        case "Data Science":
                                          return (
                                            <BarChart3 className="h-6 w-6 text-blue-400" />
                                          );
                                        case "Database":
                                          return (
                                            <Database className="h-6 w-6 text-green-400" />
                                          );
                                        case "BI and Big Data":
                                          return (
                                            <BarChart3 className="h-6 w-6 text-purple-400" />
                                          );
                                        case "Networking and Cyber Security":
                                          return (
                                            <Shield className="h-6 w-6 text-red-400" />
                                          );
                                        case "Mobile Development":
                                          return (
                                            <Smartphone className="h-6 w-6 text-pink-400" />
                                          );
                                        case "Web Development":
                                          return (
                                            <Globe className="h-6 w-6 text-indigo-400" />
                                          );
                                        case "Systems Integration":
                                          return (
                                            <Settings className="h-6 w-6 text-orange-400" />
                                          );
                                        case "ERP":
                                          return (
                                            <Package className="h-6 w-6 text-yellow-400" />
                                          );
                                        case "DevOps":
                                          return (
                                            <GitBranch className="h-6 w-6 text-teal-400" />
                                          );
                                        default:
                                          return (
                                            <Brain className="h-6 w-6 text-cyan-400" />
                                          );
                                      }
                                    };

                                    const isActive =
                                      activeDesktopSubmenu === category.name;

                                    return (
                                      <div key={idx} className="group">
                                        {/* Clickable Category Header */}
                                        <div
                                          className="relative cursor-pointer select-none"
                                          onClick={(e) =>
                                            toggleDesktopSubmenu(
                                              category.name,
                                              e,
                                            )
                                          }
                                        >
                                          <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-slate-900/95 to-slate-800/90 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-md shadow-lg hover:shadow-xl hover:shadow-cyan-400/10 hover:bg-gradient-to-r hover:from-slate-800/95 hover:to-slate-700/90">
                                            <div className="flex items-center gap-3">
                                              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 shadow-sm">
                                                {getCategoryIcon(category.name)}
                                              </div>
                                              <div>
                                                <h3 className="text-white font-semibold text-base group-hover:text-cyan-300 transition-colors whitespace-nowrap">
                                                  {category.name}
                                                </h3>
                                              </div>
                                            </div>
                                            <ChevronDown
                                              className={`h-4 w-4 text-slate-400 group-hover:text-cyan-400 transition-all duration-300 ${
                                                isActive ? "rotate-180" : ""
                                              }`}
                                            />
                                          </div>
                                        </div>

                                        {/* Expandable Category Items */}
                                        {isActive && (
                                          <div className="mt-4 ml-4 space-y-1 animate-in slide-in-from-top-3 fade-in-20 duration-300">
                                            {category.items.map(
                                              (item, itemIdx) => (
                                                <a
                                                  key={itemIdx}
                                                  href={item.href}
                                                  className="group/item flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-gradient-to-r hover:from-slate-800/50 hover:to-slate-700/50 border border-transparent hover:border-slate-600/40 hover:shadow-md"
                                                  onClick={(e) => {
                                                    e.preventDefault();
                                                    if (
                                                      item.href.startsWith("/")
                                                    ) {
                                                      setLocation(item.href);
                                                      handleLinkClick();
                                                    } else {
                                                      scrollToSection(
                                                        e,
                                                        item.href,
                                                      );
                                                    }
                                                  }}
                                                >
                                                  {/* Connection line */}
                                                  <div className="w-4 h-px bg-gradient-to-r from-slate-500/60 to-transparent group-hover/item:from-cyan-400/60"></div>

                                                  {/* Service name */}
                                                  <span className="text-slate-300 group-hover/item:text-white transition-colors duration-200 font-medium text-sm">
                                                    {item.name}
                                                  </span>
                                                </a>
                                              ),
                                            )}
                                          </div>
                                        )}
                                      </div>
                                    );
                                  })}
                                </div>
                              ) : (
                                <div className="space-y-3 w-full max-w-4xl">
                                  {link.dropdownItems?.map((category, idx) => {
                                    const getCategoryIcon = (name: string) => {
                                      switch (name) {
                                        case "AI Consulting":
                                          return (
                                            <Brain className="h-6 w-6 text-cyan-400" />
                                          );
                                        case "AI Software Development":
                                          return (
                                            <Code className="h-6 w-6 text-blue-400" />
                                          );
                                        case "Generative AI":
                                          return (
                                            <Sparkles className="h-6 w-6 text-purple-400" />
                                          );
                                        case "Events":
                                          return (
                                            <Calendar className="h-6 w-6 text-green-400" />
                                          );
                                        case "Videos":
                                          return (
                                            <Video className="h-6 w-6 text-red-400" />
                                          );
                                        case "Blog":
                                          return (
                                            <FileText className="h-6 w-6 text-blue-400" />
                                          );
                                        default:
                                          return (
                                            <Brain className="h-6 w-6 text-cyan-400" />
                                          );
                                      }
                                    };

                                    const isActive =
                                      activeDesktopSubmenu === category.name;

                                    return (
                                      <div key={idx} className="group">
                                        {/* Check if category has items or is directly clickable */}
                                        {category.items &&
                                        category.items.length > 0 ? (
                                          <>
                                            <div
                                              className="relative cursor-pointer select-none"
                                              onClick={(e) =>
                                                toggleDesktopSubmenu(
                                                  category.name,
                                                  e,
                                                )
                                              }
                                            >
                                              <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-slate-900/95 to-slate-800/90 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-md shadow-lg hover:shadow-xl hover:shadow-cyan-400/10 hover:bg-gradient-to-r hover:from-slate-800/95 hover:to-slate-700/90">
                                                <div className="flex items-center gap-3">
                                                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 shadow-sm">
                                                    {getCategoryIcon(
                                                      category.name,
                                                    )}
                                                  </div>
                                                  <div>
                                                    <h3 className="text-white font-semibold text-base group-hover:text-cyan-300 transition-colors whitespace-nowrap">
                                                      {category.name}
                                                    </h3>
                                                  </div>
                                                </div>
                                                <ChevronDown
                                                  className={`h-4 w-4 text-slate-400 group-hover:text-cyan-400 transition-all duration-300 ${
                                                    isActive ? "rotate-180" : ""
                                                  }`}
                                                />
                                              </div>
                                            </div>

                                            {isActive && (
                                              <div className="mt-4 ml-4 space-y-1 animate-in slide-in-from-top-3 fade-in-20 duration-300">
                                                {category.items.map(
                                                  (item, itemIdx) => (
                                                    <a
                                                      key={itemIdx}
                                                      href={item.href}
                                                      className="group/item flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-gradient-to-r hover:from-slate-800/50 hover:to-slate-700/50 border border-transparent hover:border-slate-600/40 hover:shadow-md"
                                                      onClick={(e) => {
                                                        e.preventDefault();
                                                        if (
                                                          item.href.startsWith(
                                                            "/",
                                                          )
                                                        ) {
                                                          setLocation(
                                                            item.href,
                                                          );
                                                          handleLinkClick();
                                                        } else {
                                                          scrollToSection(
                                                            e,
                                                            item.href,
                                                          );
                                                        }
                                                      }}
                                                    >
                                                      <div className="w-4 h-px bg-gradient-to-r from-slate-500/60 to-transparent group-hover/item:from-cyan-400/60"></div>
                                                      <span className="text-slate-300 group-hover/item:text-white transition-colors duration-200 font-medium text-sm">
                                                        {item.name}
                                                      </span>
                                                    </a>
                                                  ),
                                                )}
                                              </div>
                                            )}
                                          </>
                                        ) : (
                                          /* Direct clickable category without dropdown */
                                          <a
                                            href={category.href}
                                            className="block cursor-pointer select-none"
                                            onClick={(e) => {
                                              e.preventDefault();
                                              if (
                                                category.href &&
                                                category.href.startsWith("/")
                                              ) {
                                                setLocation(category.href);
                                                handleLinkClick();
                                              }
                                            }}
                                          >
                                            <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-slate-900/95 to-slate-800/90 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-md shadow-lg hover:shadow-xl hover:shadow-cyan-400/10 hover:bg-gradient-to-r hover:from-slate-800/95 hover:to-slate-700/90">
                                              <div className="flex items-center gap-3">
                                                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 shadow-sm">
                                                  {getCategoryIcon(
                                                    category.name,
                                                  )}
                                                </div>
                                                <div>
                                                  <h3 className="text-white font-semibold text-base group-hover:text-cyan-300 transition-colors whitespace-nowrap">
                                                    {category.name}
                                                  </h3>
                                                </div>
                                              </div>
                                            </div>
                                          </a>
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
                        } else if (link.href.startsWith("/")) {
                          setLocation(link.href);
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
            </nav>

            <div className="hidden lg:block">
              <Button
                variant="outline"
                size="sm"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-none hover:from-blue-600 hover:to-cyan-600"
                onClick={() => setLocation("/contact")}
              >
                Contact
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
                          className={`h-4 w-4 transition-transform ${activeMobileDropdown === link.id ? "rotate-180" : ""}`}
                        />
                      </button>
                      {activeMobileDropdown === link.id && (
                        <div className="ml-4 mt-2 space-y-2">
                          {link.dropdownItems?.map((category, idx) => (
                            <div key={idx}>
                              {/* Check if category has items or is directly clickable */}
                              {category.items && category.items.length > 0 ? (
                                <>
                                  <button
                                    className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-primary flex items-center justify-between"
                                    onClick={() =>
                                      toggleMobileSubmenu(category.name)
                                    }
                                  >
                                    {category.name}
                                    <ChevronDown
                                      className={`h-3 w-3 transition-transform ${activeMobileSubmenu === category.name ? "rotate-180" : ""}`}
                                    />
                                  </button>
                                  {activeMobileSubmenu === category.name && (
                                    <div className="ml-4 mt-2 space-y-1">
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
                                </>
                              ) : (
                                /* Direct clickable category without dropdown */
                                <a
                                  href={category.href}
                                  className="block px-3 py-2 text-sm text-gray-600 hover:text-primary"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    if (
                                      category.href &&
                                      category.href.startsWith("/")
                                    ) {
                                      setLocation(category.href);
                                      handleLinkClick();
                                    }
                                  }}
                                >
                                  {category.name}
                                </a>
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
                        } else if (link.href.startsWith("/")) {
                          setLocation(link.href);
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
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-none hover:from-blue-600 hover:to-cyan-600"
                  onClick={() => {
                    setLocation("/contact");
                    handleLinkClick();
                  }}
                >
                  Contact
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
