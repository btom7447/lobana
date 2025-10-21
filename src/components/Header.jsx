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

  return (
    <>
      {/* Original Header (over hero) */}
      <header
        className={`absolute top-0 left-0 z-40 w-full flex items-center justify-between px-5 lg:px-10 py-0 border-b transition-all duration-300 ${
          scrolled
            ? "bg-white border-gray-200 text-blue-950"
            : "bg-transparent border-white text-white"
        }`}
      >
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/lobana-logo-white.png"
            alt="Lobana Logo"
            width={100}
            height={40}
            className="w-24 h-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:block text-white">
          <NavLinks />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOriginalOpen(!isOriginalOpen)}
          className={`block lg:hidden rounded-xl p-3 border transition-colors ${
            scrolled ? "border-black text-black" : "border-white text-white"
          }`}
          aria-label="Toggle Menu"
        >
          {isOriginalOpen ? (
            <X size={20} strokeWidth={1} />
          ) : (
            <MenuIcon size={20} strokeWidth={1} />
          )}
        </button>

        {/* Mobile Nav Menu */}
        <NavMenu isOpen={isOriginalOpen} setIsOpen={setIsOriginalOpen} />
      </header>

      {/* Fixed Header */}
      <header
        className={`fixed top-0 left-0 z-50 w-screen flex items-center justify-between px-5 lg:px-10 py-0 border-b border-gray-200 bg-white shadow-md transition-transform duration-500 ${
          showFixedHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/lobana-logo-black.png"
            alt="Lobana Logo"
            width={100}
            height={40}
            className="w-24 h-auto object-contain"
          />
        </Link>
        {/* Desktop Nav */}
        <div className="hidden lg:block text-black">
          <NavLinks />
        </div>
        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`block lg:hidden rounded-xl p-3 border transition-colors ${
            scrolled ? "border-black text-black" : "border-white text-white"
          }`}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <X size={20} strokeWidth={1} />
          ) : (
            <MenuIcon size={20} strokeWidth={1} />
          )}
        </button>
        {/* Mobile Nav Menu */}
        <NavMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />{" "}
      </header>
    </>
  );
}
