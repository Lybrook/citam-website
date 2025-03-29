"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "../ui/theme-toggle";
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
    <nav className="hidden lg:flex items-center space-x-4">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;
        return (
          <Button
            key={item.name}
            variant={isActive ? "default" : "ghost"}
            asChild
            className={`
              px-4 py-2 rounded-md transition-all duration-200
              ${isActive
                ? "bg-red-600 text-white hover:bg-red-700"
                : "text-black hover:bg-red-100 hover:text-red-900"}
              focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2
            `}
          >
            <Link
              href={item.href}
              className="flex items-center space-x-2"
              aria-current={isActive ? "page" : undefined}
            >
              <Icon
                className={`h-4 w-4 ${
                  isActive ? "text-white" : "text-black"
                }`}
              />
              <span>{item.name}</span>
            </Link>
          </Button>
        );
      })}
      
      {/* Theme Toggle */}
      <div className="ml-4">
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default DesktopNav;