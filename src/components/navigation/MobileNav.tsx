"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Info, Mic, Calendar, Users, Heart, Phone, Image } from "lucide-react";

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
        <motion.nav
          id={id}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className='fixed inset-x-0 top-16 z-40 md:hidden bg-white shadow-lg'
          aria-label='Mobile navigation'
        >
          <div className='container mx-auto px-4 py-6'>
            <div className='grid grid-cols-2 gap-4'>
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`
                      flex items-center justify-center 
                      px-4 py-3 space-x-2 
                      text-sm font-medium 
                      rounded-lg 
                      transition-all duration-200 
                      hover:scale-105 
                      ${
                        pathname === item.href
                          ? "bg-red-100 text-red-900 font-bold"
                          : "text-gray-700 hover:bg-red-50 hover:text-red-800"
                      }
                    `}
                    aria-current={pathname === item.href ? "page" : undefined}
                    onClick={onClose} // Close the menu on link click
                  >
                    <Icon 
                      className={`w-5 h-5 ${
                        pathname === item.href ? "text-red-900" : "text-gray-600"
                      }`} 
                    />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;