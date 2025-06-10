import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "../lib/constants";
import { useLocation } from "wouter";

export default function Navbar({
  isDarkBackground,
}: {
  isDarkBackground?: boolean;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [, setLocation] = useLocation();

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

  const handleLinkClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    setLocation(href);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-1" : "bg-transparent py-2"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a
              href="/"
              className="flex items-center"
              onClick={(e) => handleLinkClick("/", e)}
            >
              <img
                src="/assets/3dgifmaker34062.gif"
                alt="RT NextGenAI Logo"
                className="h-16 w-auto"
              />
            </a>
          </div>

          <nav className="hidden lg:flex items-center">
            <div className="flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className={`nav-link font-medium transition-colors px-3 py-2 text-sm rounded-md hover:bg-white/10 ${
                    scrolled
                      ? "text-black hover:text-primary"
                      : isDarkBackground
                        ? "text-white hover:text-gray-200"
                        : "text-black hover:text-primary"
                  }`}
                  onClick={(e) => handleLinkClick(link.href, e)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </nav>

          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-md ${
                scrolled
                  ? "text-black hover:bg-gray-100"
                  : isDarkBackground
                    ? "text-white hover:bg-white/10"
                    : "text-black hover:bg-gray-100"
              }`}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                    scrolled
                      ? "text-black hover:bg-gray-100"
                      : isDarkBackground
                        ? "text-white hover:bg-white/10"
                        : "text-black hover:bg-gray-100"
                  }`}
                  onClick={(e) => handleLinkClick(link.href, e)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}