"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Menu, X, Church } from "lucide-react";
import { Button } from "../../components/ui/button";
import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { ThemeProvider } from "../../components/ui/theme-provider";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      setScrolled(window.scrollY > 10);
      return () => window.removeEventListener("scroll", handleScroll);
    }
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
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.body.style.overflow = "unset";
    };
  }, [isMobileNavOpen]);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 
        transition-all duration-300 ease-in-out
        ${scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-red-100 py-2"
          : "bg-white py-4"
        }
      `}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo with subtle animation */}
        <div className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105">
          <Church className="w-8 h-8 text-red-700" />
          <Logo />
        </div>

        {/* Theme Provider */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        />

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          <DesktopNav />
        </div>

        {/* Mobile Navigation Toggle */}
        <Button
          id="mobile-nav-toggle"
          variant="ghost"
          size="icon"
          className={`
            lg:hidden text-black hover:text-red-700 focus:ring-2 
            focus:ring-red-500 focus:ring-offset-2 rounded-full
            transition-colors duration-200
          `}
          onClick={handleMobileNavToggle}
          aria-label={isMobileNavOpen ? "Close Navigation" : "Open Navigation"}
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

      {/* Mobile Navigation */}
      <MobileNav
        id="mobile-nav"
        isOpen={isMobileNavOpen}
        onClose={handleMobileNavToggle}
      />
    </header>
  );
};

export default Header;