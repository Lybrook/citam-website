import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "components/ui/theme-toggle";


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
    <nav className="hidden md:flex items-center space-x-4">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
            pathname === item.href
              ? "text-primary font-bold"
              : "text-foreground/80 hover:text-primary"
          }`}
          aria-current={pathname === item.href ? "page" : undefined}
        >
          {item.name}
        </Link>
      ))}
      <ThemeToggle />
    </nav>
  );
};

export default DesktopNav;
