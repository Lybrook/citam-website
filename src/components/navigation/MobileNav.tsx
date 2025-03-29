"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, Home, Info, Mic, Calendar, Users, Heart, Phone, Image } from "lucide-react";
import { Button } from "../../components/ui/button";

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
  onClose: () => void 
}> = ({ 
  id = "mobile-nav", 
  isOpen, 
  onClose 
}) => {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-black/50"
          onClick={onClose}
        >
          <motion.nav
            id={id}
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg"
            aria-label="Mobile navigation"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-black">Menu</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6 text-black" />
                </Button>
              </div>
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  return (
                    <Button
                      key={item.name}
                      variant={isActive ? "default" : "ghost"}
                      asChild
                      className={`
                        w-full justify-start px-4 py-3 rounded-md transition-all duration-200
                        ${isActive
                          ? "bg-red-600 text-white hover:bg-red-700"
                          : "text-black hover:bg-red-100 hover:text-red-900"}
                      `}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center space-x-3"
                        aria-current={isActive ? "page" : undefined}
                        onClick={onClose}
                      >
                        <Icon
                          className={`h-5 w-5 ${
                            isActive ? "text-white" : "text-black"
                          }`}
                        />
                        <span>{item.name}</span>
                      </Link>
                    </Button>
                  );
                })}
              </div>
            </div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;