"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
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
    // Check for window to ensure client-side only
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      
      // Initial scroll state check
      setScrolled(window.scrollY > 10);

      // Cleanup function
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [handleScroll]);

  const handleMobileNavToggle = () => {
    setIsMobileNavOpen(prev => !prev);
  };

  // Close mobile nav when clicking outside or on a nav item
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const mobileNavElement = document.getElementById('mobile-nav');
      const toggleButton = document.getElementById('mobile-nav-toggle');

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
      document.addEventListener('mousedown', handleOutsideClick);
      document.body.style.overflow = 'hidden'; // Prevent scrolling when mobile nav is open
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileNavOpen]);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 
        transition-all duration-300 
        ${scrolled 
          ? "bg-white/95 backdrop-blur shadow-md py-2" 
          : "bg-transparent py-4"
        }
      `}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Logo />
        <ThemeProvider
                  attribute="class"
                  defaultTheme="system"
                  enableSystem
                  disableTransitionOnChange
                ></ThemeProvider>
        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <DesktopNav />
        </div>
        
        {/* Mobile Navigation Toggle */}
        <Button 
          id="mobile-nav-toggle"
          variant="ghost" 
          size="icon" 
          className="lg:hidden"
          onClick={handleMobileNavToggle}
          aria-label={isMobileNavOpen ? "Close Navigation" : "Open Navigation"}
        >
          {isMobileNavOpen ? <X /> : <Menu />}
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