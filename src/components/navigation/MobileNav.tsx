"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Sermons", href: "/sermons" },
  { name: "Events", href: "/events" },
  { name: "Ministries", href: "/ministries" },
  { name: "Give", href: "/give" },
  { name: "Contact", href: "/contact" },
  { name: "Gallery", href: "/gallery" },
];

const MobileNav: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const pathname = usePathname();

  if (!isOpen) return null;

  return (
    <nav
      className='md:hidden bg-background border-t'
      aria-label='Mobile navigation'
    >
      <div className='container py-4 flex flex-col space-y-2'>
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`px-4 py-3 text-sm font-medium rounded-md transition-colors ${
              pathname === item.href
                ? "bg-primary/10 text-primary font-bold"
                : "text-foreground/80 hover:bg-primary/5 hover:text-primary"
            }`}
            aria-current={pathname === item.href ? "page" : undefined}
            onClick={onClose} // Close the menu on link click
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default MobileNav;
