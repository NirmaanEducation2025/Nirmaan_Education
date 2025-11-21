import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";   // ⭐ ADDED X ICON
import logo from "@/assets/logo.jpg";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // ⭐ mobile menu state
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const resetHeroAnimation = () => {
    window.dispatchEvent(new CustomEvent("resetHeroWords"));
  };

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
        if (!element) return false;

        const rect = element.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });

      if (current) setActiveSection(current);
    };

    // Close dropdown if clicked outside
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    // ⭐ Close mobile menu on ANY outside click
    const closeMobileMenu = (event: MouseEvent) => {
      if (
        mobileMenuOpen &&
        !(event.target as HTMLElement).closest("#mobileMenuPanel")
      ) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("mousedown", closeMobileMenu);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("mousedown", closeMobileMenu);
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Programs", id: "programs" },
    { name: "AI", id: "ai-promise" },
    { name: "Our Promise", id: "highlights" },
    { name: "Impact", id: "impact" },
    { name: "Contact", id: "contact" },
  ];

  const dropdownOptions = [
    {
      label: "As School",
      action: () => {
        setDropdownOpen(false);
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      label: "As Educator",
      action: () => {
        setDropdownOpen(false);
        setMobileMenuOpen(false); // ⭐ close menu
        navigate("/educator");
      },
    },
    {
      label: "As Channel Partner",
      action: () => {
        setDropdownOpen(false);
        setMobileMenuOpen(false); // ⭐ close menu
        navigate("/partner");
      },
    },
  ];

  const handleNavClick = (e, id) => {
    e.preventDefault();

    if (id === "home") resetHeroAnimation();

    const element = document.getElementById(id);
    if (element)
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    else if (id === "home") window.scrollTo({ top: 0, behavior: "smooth" });

    setActiveSection(id);
    setMobileMenuOpen(false); // ⭐ close menu after clicking
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 font-poppins`}
      style={{
        background: isScrolled ? "rgba(255, 255, 255, 0.55)" : "transparent",
        backdropFilter: isScrolled ? "blur(16px)" : "none",
      }}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">

        {/* LOGO */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          className="flex items-center gap-2"
        >
          <img src={logo} alt="Nirmaan Logo" className="h-12 w-auto" />
        </a>

        {/* ==================== DESKTOP NAV ===================== */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/30 border border-white/40 rounded-full px-2 py-1 shadow-sm backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            const isAI = item.id === "ai-promise";

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`px-4 py-2 rounded-full font-semibold capitalize transition-all duration-300
                  ${
                    isAI
                      ? isActive
                        ? "bg-orange-500 text-white shadow"
                        : "text-orange-500 hover:text-orange-600"
                      : isActive
                      ? "bg-orange-500 text-white shadow"
                      : "text-gray-700 hover:text-orange-500"
                  }
                `}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* ==================== DESKTOP CONNECT ===================== */}
        <div className="hidden lg:block relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-700"
          >
            Connect <ChevronDown size={18} className={`${dropdownOpen ? "rotate-180" : ""}`} />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-52 rounded-xl shadow-lg border bg-white/95 backdrop-blur-md">
              {dropdownOptions.map((opt) => (
                <button
                  key={opt.label}
                  onClick={opt.action}
                  className="w-full text-left px-4 py-2 text-gray-700 hover:bg-orange-50"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ==================== MOBILE MENU BUTTON ===================== */}
        <button
          className="lg:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={26} />
        </button>
      </div>

      {/* ========================================================= */}
      {/* ⭐⭐⭐⭐⭐  MOBILE SLIDE-IN MENU (NEW)  ⭐⭐⭐⭐⭐ */}
      {/* ========================================================= */}
{/* ⭐ MOBILE MENU OVERLAY ⭐ */}
<div
  className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-50 lg:hidden transition-opacity duration-300
    ${mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
  onClick={() => setMobileMenuOpen(false)}
>
  {/* Slide-in Panel */}
  <div
    id="mobileMenuPanel"
    className={`absolute top-0 right-0 w-72 h-full bg-white shadow-xl p-6 flex flex-col gap-6
      transform transition-transform duration-300
      ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
    onClick={(e) => e.stopPropagation()}
  >
    {/* Close Button */}
    <button
      className="self-end text-gray-700"
      onClick={() => setMobileMenuOpen(false)}
    >
      ✕
    </button>

    {/* Navigation Items */}
    <nav className="flex flex-col gap-4 mt-4">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={(e) => {
            handleNavClick(e, item.id);
            setMobileMenuOpen(false);
          }}
          className="text-lg font-semibold text-gray-900 text-left hover:text-orange-500"
        >
          {item.name}
        </button>
      ))}
    </nav>

    {/* Connect Options */}
    <div className="border-t pt-4 mt-4">
      <h3 className="text-sm font-bold text-gray-600 mb-2">Connect</h3>

      {dropdownOptions.map((opt) => (
        <button
          key={opt.label}
          onClick={() => {
            opt.action();
            setMobileMenuOpen(false);
          }}
          className="w-full text-left py-2 text-gray-800 hover:text-orange-500"
        >
          {opt.label}
        </button>
      ))}
    </div>
  </div>
</div>

    </header>
  );
};

export default Header;
