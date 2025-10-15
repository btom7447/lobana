"use client";

import AOS from "aos";
import "aos/dist/aos.css";

import BreadCrumbSection from "@/sections/BreadCrumb";
import { useEffect } from "react";
import GetInTouch from "@/sections/GetInTouch";
import ServicesGridSection from "@/sections/ServicesGrid";
import WhySection from "@/sections/Why";
import TestimonialSection from "@/sections/Testimonial";

export default function ServicesPage() {
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
          title="Our Services"
          subtext="Comprehensive solutions across real estate, trade, agriculture and investments"
        />
        <ServicesGridSection />
        <WhySection />
        <TestimonialSection />
        <GetInTouch />
      </>
    );
}