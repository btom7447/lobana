"use client";
import { useState, useEffect } from "react";
import NavMenu from "./NavMenu";
import Image from "next/image";
import Link from "next/link";
import { MenuIcon, X } from "lucide-react";
import NavLinks from "./NavLinks";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [showFixedHeader, setShowFixedHeader] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);
      setShowFixedHeader(scrollY > 150);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const renderHeader = (isFixed = false) => (
    <header
      className={`${isFixed ? "fixed z-50 shadow-md" : "absolute z-40"} 
        top-0 left-0 w-full flex items-center justify-between 
        px-5 lg:px-10 py-0 border-b transition-all duration-300
        ${isFixed ? "bg-white border-gray-200" : scrolled ? "bg-white border-gray-200" : "bg-transparent border-white"}
      `}
    >
      {/* Logo */}
      <Link href="/">
        <Image
          src={isFixed || scrolled ? "/images/lobana-logo-black.png" : "/images/lobana-logo-white.png"}
          alt="Lobana Logo"
          width={100}
          height={40}
          className="w-24 h-auto object-contain"
        />
      </Link>

      {/* Desktop Nav */}
      <div className={`hidden lg:block ${isFixed || scrolled ? "text-black" : "text-white"}`}>
        <NavLinks />
      </div>

      {/* Mobile Menu Toggle (only one visible at any given time) */}
      {!isMenuOpen && (
        <button
          onClick={toggleMenu}
          className={`block lg:hidden rounded-xl p-3 border transition-colors ${
            isFixed || scrolled ? "border-black text-black" : "border-white text-white"
          }`}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={20} strokeWidth={1} /> : <MenuIcon size={20} strokeWidth={1} />}
        </button>
      )}
    </header>
  );

  return (
    <>
      {/* Absolute header (shown before scroll) */}
      {!showFixedHeader && renderHeader(false)}

      {/* Fixed header (slides in after scroll) */}
      <div
        className={`transition-transform duration-500 ${
          showFixedHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {renderHeader(true)}
      </div>

      {/* Nav Menu */}
      <NavMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
    </>
  );
}
