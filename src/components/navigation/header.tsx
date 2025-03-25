import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "../ui/theme-toggle";

interface HeaderProps {
  isScrolled: boolean; // Add isScrolled prop
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
    <header className={`fixed w-full transition ${isScrolled ? 'bg-gray-800' : 'bg-transparent'}`}>
      <nav>
        <ul>
          {navItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className={pathname === item.href ? 'active' : ''}>
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
