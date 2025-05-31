import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { navLinks } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function Navbar({
  isDarkBackground,
}: {
  isDarkBackground?: boolean;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [, setLocation] = useLocation();
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<
    number | null
  >(null);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(
    null,
  );
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
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      setActiveMobileDropdown(null);
      setActiveMobileSubmenu(null);
    }
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
  };

  const toggleMobileDropdown = (id: number, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveMobileDropdown(activeMobileDropdown === id ? null : id);
  };

  const toggleMobileSubmenu = (name: string, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveMobileSubmenu(activeMobileSubmenu === name ? null : name);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-1" : "bg-transparent py-2"}`}
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
              {navLinks.slice(0, 3).map((link) => (
                <div key={link.id} className="relative group mx-1">
                  {link.hasDropdown ? (
                    <div className="relative">
                      <a
                        href={link.href}
                        className={`nav-link font-medium transition-colors px-2 py-2 text-sm inline-flex items-center ${
                          scrolled
                            ? "text-black hover:text-primary"
                            : isDarkBackground
                              ? "text-white hover:text-gray-200"
                              : "text-black hover:text-primary"
                        }`}
                        onClick={(e) => toggleDropdown(link.id, e)}
                      >
                        {link.name}
                        <ChevronDown
                          className={`ml-1 h-3 w-3 transition-transform inline-block ${activeDropdown === link.id ? "rotate-180" : ""}`}
                        />
                      </a>

                      {activeDropdown === link.id && (
                        <div className="fixed left-0 right-0 mt-2 bg-black shadow-2xl z-50 overflow-hidden animate-in fade-in-10 slide-in-from-top-5">
                          <div className="container mx-auto relative flex max-w-none min-h-[400px]">
                            {/* Background image for entire container */}
                            <div
                              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                              style={{
                                backgroundImage:
                                  "url(/assets/ai-brain-dropdown.png)",
                                filter: 'brightness(1.2) contrast(1.2)', // Highlight the image
                                height: "100%",
                                width: "100%",
                              }}
                            ></div>

                            {/* Dark overlay for readability */}
                            <div className="absolute inset-0 bg-black/90"></div>

                            {/* Content area with border */}
                            <div className="relative z-10 flex-1 p-8 border-l-4 border-cyan-400">
                              <div className="space-y-8">
                                {link.dropdownItems?.map((category, idx) => (
                                  <div key={idx} className="space-y-4">
                                    <div className="font-bold text-white text-xl mb-4 tracking-wide border-b border-cyan-400/30 pb-2">
                                      {category.name}
                                    </div>
                                    <ul className="space-y-3">
                                      {category.items.map((item, itemIdx) => (
                                        <li key={itemIdx}>
                                          <a
                                            href={item.href}
                                            className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm leading-relaxed hover:translate-x-1 transform transition-transform"
                                            onClick={(e) => {
                                              e.preventDefault();
                                              if (
                                                item.name === "Life Science"
                                              ) {
                                                setLocation("/life-science");
                                              } else if (
                                                item.name === "Validation"
                                              ) {
                                                setLocation("/validation");
                                              } else {
                                                scrollToSection(e, item.href);
                                              }
                                            }}
                                          >
                                            • {item.name}
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
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
                      className={`nav-link font-medium transition-colors px-2 py-2 text-sm ${scrolled ? "text-black hover:text-primary" : isDarkBackground ? "text-white hover:text-gray-200" : "text-black hover:text-primary"}`}
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

            <div className="flex items-center flex-wrap justify-end ml-2">
              {navLinks.slice(3, 9).map((link) => (
                <div key={link.id} className="relative group mx-1">
                  <a
                    href={link.href}
                    className={`nav-link font-medium transition-colors px-2 py-2 text-sm ${
                      scrolled
                        ? "text-black hover:text-primary"
                        : isDarkBackground
                          ? "text-white hover:text-gray-200"
                          : "text-black hover:text-primary"
                    }`}
                    onClick={(e) => scrollToSection(e, link.href)}
                  >
                    {link.name}
                  </a>
                </div>
              ))}

              <Button
                onClick={() => setLocation("/contact")}
                className="rounded-full font-medium transition-colors text-sm px-4 py-1 h-8 ml-2 bg-primary hover:bg-primary-dark text-white"
                size="sm"
              >
                Contact
              </Button>
            </div>
          </nav>

          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className={scrolled ? "text-gray-800" : "text-white"}
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
                      onClick={(e) => toggleMobileDropdown(link.id, e)}
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
                                        if (item.name === "Life Science") {
                                          setLocation("/life-science");
                                        } else if (
                                          item.name === "Validation" ||
                                          item.href === "/validation"
                                        ) {
                                          setLocation("/validation");
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