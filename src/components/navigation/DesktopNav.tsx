"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// ✅ No ThemeToggle here — it lives in Header.tsx, not duplicated
import { cn } from "@/lib/utils";

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

const DesktopNav: React.FC = () => {
  const pathname = usePathname();

  return (
    // ✅ Removed "hidden lg:flex" — Header already handles this
    <nav className="flex items-center space-x-1" aria-label="Main navigation">
      {navItems.map((item) => {
        // ✅ startsWith handles nested routes like /about/team
        const isActive =
          item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href);

        return (
          <Link
            key={item.name}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              // ✅ Base styles — no variant fighting, full control
              "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              isActive
                // ✅ Design tokens — adapts to dark mode automatically
                ? "bg-primary text-primary-foreground"
                : "text-foreground hover:bg-accent hover:text-accent-foreground"
            )}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default DesktopNav;
