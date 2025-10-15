"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Partners", href: "/partners" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-8 text-xl ">
      {links.map(({ name, href }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={name}
            href={href}
            className={`transition-colors ${
              isActive
                ? "text-secondary font-medium"
                : "hover:text-secondary"
            }`}
          >
            {name}
          </Link>
        );
      })}

      <Link
        href="/contact"
        className="bg-secondary text-black text-md px-5 py-2 rounded-xl hover:bg-yellow-300 transition"
      >
        Get in Touch
      </Link>
    </nav>
  );
}
