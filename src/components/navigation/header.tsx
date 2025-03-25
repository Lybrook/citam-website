"use client"

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "../ui/theme-toggle";

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const pathname = usePathname();
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Ministries", href: "/ministries" },
    { name: "Gallery", href: "/gallery" },
  ];

  return (
    <header
      className={`fixed w-full transition duration-300 ${
        isScrolled ? "bg-gray-800" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto p-4 flex justify-between">
        <ul className="flex items-center">
          {navItems.map((item) => (
            <li key={item.name} className="mr-6">
              <Link
                href={item.href}
                className={`text-lg ${
                  pathname === item.href ? "text-blue-500" : "text-gray-200"
                } hover:text-blue-500 transition duration-300`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Header;