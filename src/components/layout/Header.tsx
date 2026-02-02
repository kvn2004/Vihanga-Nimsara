import React, { useState, useEffect, useCallback } from "react";
import { Container } from "../ui/Container";
import { cn } from "../../lib/utils";
import { Menu, X, Code2 } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "home", id: "nav-home" },
  { label: "About", href: "about", id: "nav-about" },
  { label: "Skills", href: "skills", id: "nav-skills" },
  { label: "Projects", href: "projects", id: "nav-projects" },
  { label: "Contact", href: "contact", id: "nav-contact" },
] as const;

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Memoized scroll handler to prevent recreation on every render
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledScroll);
  }, [handleScroll]);

  // Memoized navigation handler
  const handleNavClick = useCallback((targetId: string) => {
    const element = document.getElementById(targetId);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMobileMenuOpen(false);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMobileMenuOpen]);

  return (
    <header
      role="banner"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-3"
          : "bg-transparent py-5",
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className="flex items-center gap-2 group"
            aria-label="Vihanga Nimsara - Home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("home");
            }}
          >
            <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
              <Code2 className="w-6 h-6 text-primary" aria-hidden="true" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight">
              Vihanga Nimsara<span className="text-primary">.dev</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Main navigation"
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.href)}
                className="text-sm font-medium text-muted hover:text-primary transition-colors relative group"
                aria-label={`Navigate to ${item.label} section`}
              >
                <span className="text-primary/50 mr-0.5" aria-hidden="true">
                  #
                </span>
                {item.label}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"
                  aria-hidden="true"
                />
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-muted hover:text-primary"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X size={24} aria-hidden="true" />
            ) : (
              <Menu size={24} aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden absolute top-full left-0 right-0 bg-surface border-b border-white/10 p-4 shadow-2xl"
          role="dialog"
          aria-label="Mobile navigation"
        >
          <nav className="flex flex-col space-y-4">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.href)}
                className="block text-base font-medium text-muted hover:text-primary px-4 py-2 hover:bg-white/5 rounded-lg text-left transition-colors"
                aria-label={`Navigate to ${item.label} section`}
              >
                <span className="text-primary/50 mr-2" aria-hidden="true">
                  #
                </span>
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
