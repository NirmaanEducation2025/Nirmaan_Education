import React, { useState, useEffect, useRef } from "react";
import { Menu, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.jpg";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = [
        "home",
        "about",
        "programs",
        "ai-promise",
        "highlights",
        "impact",
        "contact",
      ];

      const current = sections.find((id) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Programs", id: "programs" },
    { name: "AI", id: "ai-promise" },
    { name: "Our Promise", id: "highlights" },
    { name: "Impact", id: "impact" },
    { name: "Contact", id: "contact" },
  ];

  // ✅ Updated dropdown actions
  const dropdownOptions = [
    {
      label: "As School",
      action: () => {
        setDropdownOpen(false);
        const section = document.getElementById("contact");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      },
    },
    {
      label: "As Educator",
      action: () => {
        setDropdownOpen(false);
        navigate("/educator");
      },
    },
    {
      label: "As Channel Partner",
      action: () => {
        setDropdownOpen(false);
        navigate("/partner");
      },
    },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setActiveSection(id);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 font-poppins`}
      style={{
        background: isScrolled ? "rgba(255, 255, 255, 0.55)" : "transparent",
        backdropFilter: isScrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: isScrolled ? "blur(16px)" : "none",
        boxShadow: isScrolled ? "0 4px 10px rgba(0, 0, 0, 0.05)" : "none",
      }}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          className="flex items-center gap-2"
        >
          <img src={logo} alt="Nirmaan Logo" className="h-12 w-auto" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/30 border border-white/40 rounded-full px-2 py-1 shadow-sm backdrop-blur-md">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`px-4 py-2 rounded-full font-semibold capitalize transition-all duration-300
                ${
                  item.name === "AI"
                    ? "text-orange-500 hover:text-orange-600"
                    : activeSection === item.id
                    ? "bg-orange-500 text-white shadow"
                    : "text-gray-700 hover:text-orange-500"
                }
              `}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Connect Button */}
        <div className="hidden lg:block relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-700 transition-colors shadow-md"
          >
            Connect
            <ChevronDown
              size={18}
              className={`transition-transform duration-300 ${
                dropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {dropdownOpen && (
            <div
              className="absolute right-0 mt-2 w-52 rounded-xl shadow-lg border border-gray-200 origin-top-right transition-all duration-200 ease-out"
              style={{
                background: "rgba(255,255,255,0.95)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
              }}
            >
              {dropdownOptions.map((opt) => (
                <button
                  key={opt.label}
                  onClick={opt.action}
                  className="w-full text-left px-4 py-2 text-gray-700 hover:bg-orange-50 font-medium"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        <button className="lg:hidden text-gray-700">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;
