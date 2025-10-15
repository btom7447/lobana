"use client"

import AOS from "aos";
import "aos/dist/aos.css";

import AboutSection from "@/sections/About";
import HeroSection from "@/sections/Hero";
import { useEffect } from "react";
import MetricsSection from "@/sections/Metrics";
import ServiceSection from "@/sections/Services";
import MissionVisionSection from "@/sections/MissionVision";
import WhySection from "@/sections/Why";
import TestimonialSection from "@/sections/Testimonial";

export default function HomePage() {
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
      <HeroSection />
      <AboutSection />
      <MetricsSection />
      <ServiceSection />
      <MissionVisionSection />
      <WhySection />
      <TestimonialSection />
    </>
  )
}