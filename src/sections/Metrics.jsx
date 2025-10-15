"use client";

import CountUp from "react-countup";
import { useEffect, useState, useRef } from "react";

const servicesSlide = [
  { title: "Client Satisfaction", value: 97, symbol: "%" },
  { title: "Properties Delivered", value: 250, symbol: "+" },
  { title: "Global Trade Reach", value: 10, symbol: "+" },
  { title: "Exports Shipped", value: 500, symbol: "+" },
];

export default function MetricsSection() {

  return (
    <section className="bg-foreground border-y border-gray-300 py-10 px-5 lg:p-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {servicesSlide.map((metric, index) => (
          <MetricItem key={index} metric={metric} index={index} />
        ))}
      </div>
    </section>
  );
}

function MetricItem({ metric, index }) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5, rootMargin: "-50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center"
      data-aos="fade-up"
      data-aos-delay={index * 200}
    >
      <span className="text-4xl lg:text-7xl text-black">
        {isInView ? (
          <CountUp
            end={metric.value}
            duration={2.5}
            separator=","
            delay={0.3}
          />
        ) : (
          "0"
        )}
        {metric.symbol}
      </span>
      <p className="text-sm lg:text-xl text-black font-light mt-2">
        {metric.title}
      </p>
    </div>
  );
}
