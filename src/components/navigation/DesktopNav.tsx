"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { ThemeToggle } from "../ui/theme-toggle";
import { Home, Info, Mic, Calendar, Users, Heart, Phone, Image } from "lucide-react";
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

const DesktopNav: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className='hidden lg:flex items-center space-x-2'>
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <Button
            key={item.name}
            variant={pathname === item.href ? "default" : "ghost"}
            asChild
            className={`
              px-3 py-2 
              ${pathname === item.href 
                ? "bg-red-600 text-white hover:bg-red-700" 
                : "text-gray-700 hover:bg-red-50 hover:text-red-800"}
            `}
          >
            <Link
              href={item.href}
              className="flex items-center space-x-2"
              aria-current={pathname === item.href ? "page" : undefined}
            >
              <Icon 
                className={`h-4 w-4 ${
                  pathname === item.href ? "text-white" : "text-gray-600"
                }`} 
              />
              <span>{item.name}</span>
            </Link>
          </Button>
        );
      })}
      
      {/* Theme Toggle with Slight Styling */}
      <div className="ml-2">
        {/* <ThemeToggle /> */}
      </div>
    </nav>
  );
};

export default DesktopNav;