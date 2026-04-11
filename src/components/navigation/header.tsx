"use client";
import React, { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react"; // ✅ Removed unused Church import
import { Button } from "../../components/ui/button";
import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import ThemeToggle from "../theme-toggle"; // ✅ Moved here from layout.tsx

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  // ✅ Removed typeof window check — unnecessary in "use client" components
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true }); // ✅ passive improves scroll performance
    handleScroll(); // set initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleMobileNavToggle = () => {
    setIsMobileNavOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const mobileNavElement = document.getElementById("mobile-nav");
      const toggleButton = document.getElementById("mobile-nav-toggle");
      if (
        isMobileNavOpen &&
        mobileNavElement &&
        toggleButton &&
        !mobileNavElement.contains(event.target as Node) &&
        !toggleButton.contains(event.target as Node)
      ) {
        setIsMobileNavOpen(false);
      }
    };

    if (isMobileNavOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto"; // ✅ "auto" not "unset"
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.body.style.overflow = "auto"; // ✅ consistent cleanup
    };
  }, [isMobileNavOpen]);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300 ease-in-out
        ${scrolled
          // ✅ bg-background respects dark mode. border uses CSS variable.
          ? "bg-background/95 backdrop-blur-md shadow-md border-b border-border py-2"
          : "bg-background py-4"
        }
      `}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">

        {/* Logo — opacity transition instead of scale to avoid layout shift */}
        <div className="flex items-center space-x-2 transition-opacity duration-200 hover:opacity-80">
          <Logo />
        </div>

        {/* Desktop Navigation + Theme Toggle */}
        <div className="hidden lg:flex items-center space-x-6">
          <DesktopNav />
          <ThemeToggle /> {/* ✅ Lives here, not floating in layout.tsx */}
        </div>

        {/* Mobile: Theme Toggle + Hamburger */}
        <div className="flex lg:hidden items-center space-x-2">
          <ThemeToggle /> {/* ✅ Also accessible on mobile */}
          <Button
            id="mobile-nav-toggle"
            variant="ghost"
            size="icon"
            className="text-foreground hover:text-primary focus-visible:ring-2
              focus-visible:ring-ring focus-visible:ring-offset-2 rounded-full
              transition-colors duration-200"
            onClick={handleMobileNavToggle}
            aria-label={isMobileNavOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isMobileNavOpen}
            aria-controls="mobile-nav"
          >
            {isMobileNavOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>
      </div>

      <MobileNav
        id="mobile-nav"
        isOpen={isMobileNavOpen}
        onClose={handleMobileNavToggle}
      />
    </header>
  );
};

export default Header;
