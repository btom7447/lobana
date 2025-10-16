"use client";

import AOS from "aos";
import "aos/dist/aos.css";

import BreadCrumbSection from "@/sections/BreadCrumb";
import { useEffect } from "react";
import PartnerSection from "@/sections/Partner";
import CollaborationSection from "@/sections/Collaboration";
import WhyPartnerSection from "@/sections/WhyPartner";
import PartnerWithUsSection from "@/sections/PartnerWithUs";

export default function PartnerPage() {
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
          title="Let's Grow Together "
          subtext="LOBANA collatorates with businesses and investors across industries to create mutual value and drive sustainable growth"
        />
        <PartnerSection />
        <CollaborationSection />
        <WhyPartnerSection />
        <PartnerWithUsSection />
      </>
    );
}