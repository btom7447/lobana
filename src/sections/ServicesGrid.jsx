"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function ServicesGridSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const services = [
    {
      id: 1,
      title: "Real Estate Solutions",
      icon: "/icons/real-estate.png",
      image: "/images/real-estate-poster.png",
      description:
        "Lobana’s real estate arm focuses on residential, commercial, and industrial property development. We handle sales, property construction, renovation, and facility management with a commitment to quality and sustainability. Whether it’s modern housing, luxury apartments, or business complexes, we create properties that redefine comfort and reliability.",
      image: "/images/real-estate-poster.png",
      tags: ["Development", "Sales", "Management"],
    },
    {
      id: 2,
      title: "Trade & Commerce",
      icon: "/icons/trade-commerce.png",
      image: "/images/trade-commerce-poster.png",
      description:
        "Our trade and commerce division manages import, export, and the distribution of essential goods and raw materials. By leveraging trusted partnerships and global supply networks, we streamline logistics, ensure timely delivery, and connect local businesses to international opportunities. We bridge markets to drive commerce and economic growth.",
      image: "/images/trade-commerce-poster.png",
      tags: ["Import", "Export", "Distribution"],
    },
    {
      id: 3,
      title: "Agriculture",
      icon: "/icons/agriculture.png",
      image: "/images/agriculture-poster.png",
      description:
        "We are deeply invested in agriculture through crop farming, poultry production, fisheries, and livestock management. With a focus on innovation and sustainability, Lobana leverages modern agricultural techniques to enhance food production, improve supply chains, and contribute to national food security while empowering rural communities.",
      image: "/images/agriculture-poster.png",
      tags: ["Farming", "Fishery", "Livestock"],
    },
    {
      id: 4,
      title: "Investments",
      icon: "/icons/investments.png",
      image: "/images/investments-poster.png",
      description:
        "Lobana’s investment portfolio spans real estate, securities, and high-value ventures. We analyze market trends, identify opportunities, and deploy strategic capital to achieve sustainable financial returns. Our investment strategies are built on risk management, growth potential, and creating long-term value for stakeholders.",
      image: "/images/investments-poster.png",
      tags: ["Strategy", "Growth", "Security"],
    },
  ];

  return (
    <section className="py-20 px-5 lg:px-20 bg-foreground">

      <div className="space-y-20 overflow-x-hidden">
        {services.map((service, index) => {
          const isEven = index % 2 !== 0;
          return (
            <div
              key={service.id}
              className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-20 ${
                isEven ? "lg:flex-row-reverse" : ""
              }`}
              data-aos={isEven ? "fade-left" : "fade-right"}
              data-aos-delay={index * 150}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="h-80 lg:h-120 rounded-2xl shadow-md w-full object-cover"
                />
              </div>

              {/* Caption */}
              <div className="w-full lg:w-1/2 space-y-5 mb-10">
                <div className="flex items-center gap-5">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={50}
                    height={50}
                  />
                  <h3 className="text-2xl lg:text-4xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-700 text-lg leading-relaxed mb-10">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 mt-4">
                  {service.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-5 py-2 border border-gray-300 text-black text-lg rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
