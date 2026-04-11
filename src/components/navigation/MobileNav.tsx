"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, Home, Info, Mic, Calendar, Users, Heart, Phone, Image } from "lucide-react";
// ✅ No ThemeToggle — already in Header.tsx, would render twice here
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Info },
  { name: "Sermons", href: "/sermons", icon: Mic },
  { name: "Events", href: "/events", icon: Calendar },
  { name: "Ministries", href: "/ministries", icon: Users },
  { name: "Give", href: "/give", icon: Heart },
  { name: "Contact", href: "/contact", icon: Phone },
  { name: "Gallery", href: "/gallery", icon: Image },
];

const MobileNav: React.FC<{
  id?: string;
  isOpen: boolean;
  onClose: () => void;
}> = ({ id = "mobile-nav", isOpen, onClose }) => {
  const pathname = usePathname();

  return (
    // ✅ AnimatePresence directly in return — no pointless wrapper div
    <AnimatePresence>
      {isOpen && (
        <>
          {/* ✅ Overlay and panel are siblings — no fragile stopPropagation needed */}
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/50"
            onClick={onClose}
            aria-hidden="true" // ✅ overlay is decorative, not interactive for screen readers
          />

          {/* ✅ Side drawer from right — standard mobile nav pattern, doesn't fight the header */}
          <motion.nav
            key="panel"
            id={id}
            role="dialog"           // ✅ screen readers treat this as a modal
            aria-modal="true"       // ✅ traps virtual cursor inside
            aria-label="Mobile navigation"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-background shadow-xl"
          >
            <div className="flex flex-col h-full px-4 py-6">

              {/* Header row */}
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-lg font-semibold text-foreground">Menu</h2>
                <button
                  onClick={onClose}
                  aria-label="Close menu"
                  className="p-2 rounded-md text-foreground hover:bg-accent
                    focus-visible:outline-none focus-visible:ring-2
                    focus-visible:ring-ring focus-visible:ring-offset-2
                    transition-colors duration-200"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Nav links */}
              <div className="flex flex-col space-y-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  // ✅ startsWith for nested route matching
                  const isActive =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      onClick={onClose}
                      className={cn(
                        // ✅ Plain Link — no Button/variant specificity fight
                        "flex items-center space-x-3 px-3 py-3 rounded-md text-sm font-medium",
                        "transition-colors duration-200",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                        isActive
                          ? "bg-primary text-primary-foreground"           // ✅ design token
                          : "text-foreground hover:bg-accent hover:text-accent-foreground"
                      )}
                    >
                      <Icon className="h-5 w-5 flex-shrink-0" /> {/* ✅ icon color inherits from text — no hardcoding */}
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </div>

              {/* ✅ Push Give CTA to bottom for visual hierarchy */}
              <div className="mt-auto pt-6 border-t border-border">
                <Link
                  href="/give"
                  onClick={onClose}
                  className="flex items-center justify-center w-full px-4 py-3
                    bg-primary text-primary-foreground rounded-md text-sm font-medium
                    hover:bg-primary/90 transition-colors duration-200"
                >
                  <Heart className="h-4 w-4 mr-2" />
                  Give Online
                </Link>
              </div>

            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
