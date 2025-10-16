"use client";

import AOS from "aos";
import "aos/dist/aos.css";

import BreadCrumbSection from "@/sections/BreadCrumb";
import { useEffect } from "react";
import ContactSection from "@/sections/Contact";
import FindUsSection from "@/sections/FindUs";

export default function ContactPage() {
    useEffect(() => {
      // Initialize AOS if not already initialized
      if (typeof window !== "undefined" && !window.AOS) {
        AOS.init({
          duration: 800,
          easing: "ease-out",
          once: true,
          offset: 100,  
        });
      }
    }, []);

    return (
      <>
        <BreadCrumbSection
          title="Contact Us"
          subtext="Get in touch with our team to discuss opportunities, partnerships, or any questions you may have"
        />
        <ContactSection />
        <FindUsSection />
      </>
    );
}