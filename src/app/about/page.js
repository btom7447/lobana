"use client";

import AOS from "aos";
import "aos/dist/aos.css";

import BreadCrumbSection from "@/sections/BreadCrumb";
import OurStory from "@/sections/OurStory";
import { useEffect } from "react";
import MissionVissionColSection from "@/sections/MissionVissionCol";
import OurValuesSection from "@/sections/OurValues";
import JourneySection from "@/sections/Journey";
import GetInTouch from "@/sections/GetInTouch";

export default function AboutPage() {
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
          title="About Lobana"
          subtext="Building sustainable value across industries since 2024"
        />
        <OurStory />
        <MissionVissionColSection />
        <OurValuesSection />
        <JourneySection />
        <GetInTouch />
      </>
    );
}