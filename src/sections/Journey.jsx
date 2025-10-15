"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function JourneySection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const milestones = [
    {
      date: "May 31, 2024",
      title: "Company Founded",
      description:
        "Lobanna was established with a vision to create value across multiple industries.",
      side: "left",
    },
    {
      date: "June 2024",
      title: "Strategic Planning",
      description:
        "Developed comprehensive business strategies for real estate, trade, and agriculture.",
      side: "right",
    },
    {
      date: "August 2024",
      title: "First Partnership",
      description:
        "Established key partnerships in real estate and international trade.",
      side: "left",
    },
    {
      date: "May 31, 2025",
      title: "Company Growth",
      description:
        "Lobanna expanded operations regionally, building lasting partnerships and increasing impact.",
      side: "right",
    },
  ];

  return (
    <section className="py-20 px-5 lg:px-20 bg-white text-gray-800 relative">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2
          data-aos="fade-down"
          data-aos-delay="100"
          className="text-gray-800 text-center text-3xl xl:text-5xl mb-5"
        >
          Our Journey
        </h2>

        <p
          className="text-gray-800 text-center text-lg lg:text-xl font-light mb-5"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          Key milestones in LOBANA's growth story
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-secondary"></div>

        {/* Milestones */}
        <div className="space-y-16">
          {milestones.map((item, index) => {
            const isLeft = item.side === "left";
            return (
              <div
                key={index}
                className={`relative flex items-center w-full ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
                data-aos={isLeft ? "fade-right" : "fade-left"}
                data-aos-delay={index * 150}
              >
                {/* Card */}
                <div
                  className={`w-full lg:w-1/2 z-20 ${
                    isLeft ? "pr-10 text-right" : "pl-10 text-left"
                  }`}
                >
                  <div className="bg-white border border-gray-300 rounded-3xl p-5 relative">
                    {/* Date tag */}
                    <p className="text-sm bg-highlight text-black inline-block px-3 py-2 rounded-xl mb-5">
                      {item.date}
                    </p>
                    <h4 className="text-lg font-semibold mb-2 text-gray-900">
                      {item.title}
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {item.description}
                    </p>

                  </div>
                </div>

                {/* Dot on the central line */}
                <div className="absolute left-1/2 transform -translate-x-1/2  rounded-full border-1 border-secondary z-10">
                  <div className="bg-secondary w-4 h-4 rounded-full m-1"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
