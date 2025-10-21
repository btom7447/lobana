"use client";
import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { CheckCheckIcon } from "lucide-react";

export default function CollaborationSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const collaborations = [
    {
      title: "Real Estate",
      icon: "/icons/real-estate.png",
      description:
        "Partner with us in property development, construction projects, and real estate investments across emerging markets.",
      benefits: [
        "Joint ventures",
        "Shared expertise",
        "Risk mitigation",
        "Market expansion",
      ],
    },
    {
      title: "Trade & Commerce",
      icon: "/icons/trade-commerce.png",
      description:
        "Collaborate on import/export operations, distribution networks, and international trade opportunities.",
      benefits: [
        "Global reach",
        "Logistics expertise",
        "Market access",
        "Trade facilitation",
      ],
    },
    {
      title: "Agriculture",
      icon: "/icons/agriculture.png",
      description:
        "Join us in sustainable agriculture projects, farming operations, and food security initiatives.",
      benefits: [
        "Sustainable practice",
        "Technology sharing",
        "Market development",
        "Food security",
      ],
    },
    {
      title: "Investment",
      icon: "/icons/investment.png",
      description:
        "Explore joint investment opportunities in properties, securities, and emerging market ventures.",
      benefits: [
        "Portfolio diversification",
        "Shared returns",
        "Risk management",
        "Expert analysis",
      ],
    },
  ];

  return (
    <section className="py-20 px-5 lg:px-20 bg-foreground">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2
          data-aos="fade-down"
          data-aos-delay="100"
          className="text-gray-800 text-3xl xl:text-5xl  text-center mb-5 lg:mb-10"
        >
          Collaboration Areas
        </h2>
        <p
          className="text-gray-600 text-base lg:text-lg"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          Explore partnership opportunities across our core business areas
        </p>
      </div>

      {/* Collaboration Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
        {collaborations.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 rounded-2xl p-10 hover:shadow-sm transition"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            {/* Icon + Title */}
            <div className="flex items-center gap-3 mb-3">
              <Image
                src={item.icon}
                alt={item.title}
                width={32}
                height={32}
                className="object-contain"
              />
              <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-5">
                {item.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-left text-lg lg:text-xl mb-5">{item.description}</p>

            {/* Partnership Benefits */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-5">
                Partnership Benefits:
              </h4>
              <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-2 text-sm text-gray-700">
                {item.benefits.map((benefit, i) => (
                  <li
                        key={i}
                        className="flex items-center gap-5 text-lg lg:text-xl"
                      >
                        <span className="text-secondary">
                          <CheckCheckIcon size={20} strokeWidth={1} />
                        </span>
                        {benefit}
                      </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
