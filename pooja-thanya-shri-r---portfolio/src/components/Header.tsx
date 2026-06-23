import { useState, useEffect } from "react";
import { Menu, X, ArrowUp, Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "../data";

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.querySelector(id);
    if (element) {
      const offset = 80; // height of header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      id="portfolio-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/80 backdrop-blur-md border-b border-white/5 py-4 shadow-lg shadow-purple-950/10"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo/Name */}
        <button
          onClick={() => scrollToSection("#home")}
          className="flex items-center gap-2 group text-left"
          id="nav-logo"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-purple-500 to-cyan-500 flex items-center justify-center text-white font-display font-bold shadow-lg shadow-purple-500/30 group-hover:scale-105 transition-transform duration-300">
            P
          </div>
          <div>
            <h1 className="text-white font-display font-semibold text-base tracking-tight leading-none group-hover:text-purple-400 transition-colors">
              {PERSONAL_INFO.name}
            </h1>
            <span className="text-[10px] text-gray-400 font-mono tracking-wider uppercase">
              AI & Data Science Student
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/5 border border-white/5 px-2 py-1.5 rounded-full backdrop-blur-sm">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium font-sans transition-all duration-300 relative ${
                  isActive
                    ? "text-white bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30"
                    : "text-gray-400 hover:text-white hover:bg-white/5 border border-transparent"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Call to action */}
        <div className="hidden lg:block">
          <button
            onClick={() => scrollToSection("#contact")}
            className="flex items-center gap-1.5 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white text-xs font-semibold px-5 py-2.5 rounded-full shadow-lg shadow-purple-600/20 active:scale-95 transition-all duration-200"
            id="nav-cta"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Connect Now
          </button>
        </div>

        {/* Mobile menu triggers */}
        <div className="flex items-center lg:hidden gap-3">
          <button
            onClick={() => scrollToSection("#contact")}
            className="bg-white/5 border border-white/10 hover:bg-white/10 text-white text-[11px] font-medium px-3.5 py-1.5 rounded-full active:scale-95 transition-all"
          >
            Connect
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg bg-white/5 border border-white/5 text-gray-300 hover:text-white hover:bg-white/15 active:scale-95 transition-all duration-200"
            id="mobile-menu-btn"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-[72px] z-40 bg-slate-950/95 backdrop-blur-lg lg:hidden border-t border-white/5">
          <div className="flex flex-col p-6 space-y-3">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`w-full text-left py-3 px-5 rounded-xl font-display text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-white bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/20"
                      : "text-gray-400 hover:text-white hover:bg-white/5 border border-transparent"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
