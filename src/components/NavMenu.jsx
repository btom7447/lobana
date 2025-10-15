"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Partners", href: "/partners" },
];

export default function NavMenu({ isOpen, setIsOpen }) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-blue-950 text-white flex flex-col items-center justify-center space-y-8"
        >
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-8 right-6 text-white hover:text-highlight transition"
            aria-label="Close Menu"
          >
            <X size={30} strokeWidth={1.5} />
          </button>

          {/* Navigation Links */}
          <nav className="flex flex-col items-center gap-10 text-lg">
            {links.map(({ name, href }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={name}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`transition-colors ${
                    isActive
                      ? "text-highlight font-medium"
                      : "hover:text-highlight"
                  }`}
                >
                  {name}
                </Link>
              );
            })}

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-highlight text-black px-5 py-3 rounded-xl hover:bg-yellow-300 transition"
            >
              Get in Touch
            </Link>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
