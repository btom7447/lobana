"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useRef } from "react";
import { CheckCheckIcon, ChevronLeft, ChevronRight } from "lucide-react";

export default function MissionVisionSection() {
  const splideRef = useRef(null);

  const slides = [
    {
      title: "Our Mission",
      image: "/images/mission-poster.png",
      description:
        "To create sustainable value and opportunities across real estate, trade, agriculture, hospitality and investments while enhancing the communities we serve through innovation, integrity, and excellence.",
      list: [
        "Top-quality real estate service",
        "Seamless trade and commerce",
        "Strategic investments",
        "Professionalism & transparency practice",
        "Premium restaurant and hotel experiences",
      ],
    },
    {
      title: "Our Vision",
      image: "/images/vision-poster.png",
      description:
        "To be a leading global company recognized for building lasting value, fostering growth, and creating positive impact in every community and industry we touch.",
      list: [
        "Benchmark for excellence in all areas",
        "Empower communities and stakeholders",
        "Expanding regionally and internationally",
        "Building long-term partnerships",
      ],
    },
  ];

  return (
    <section className="relative bg-foreground border-t border-gray-300 py-20 pb-30">
      <div className="w-full px-5 lg:px-20">
        <Splide
          ref={splideRef}
          options={{
            type: "fade",
            rewind: true,
            arrows: false,
            pagination: false,
            autoplay: true,
            interval: 7000,
            speed: 800,
          }}
        >
          {slides.map((slide, index) => (
            <SplideSlide key={index}>
              <div className="grid md:grid-cols-2 gap-10 lg:gap-20 items-center">
                {/* Image */}
                <div
                  data-aos="fade-right"
                  data-aos-delay="100"
                  className="w-full h-[200px] lg:h-[300px] rounded-2xl overflow-hidden"
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text Content */}
                <div
                  data-aos="fade-left"
                  data-aos-delay="200"
                  className=" h-full flex flex-col items-start justify-start"
                >
                  <h2 className="text-gray-800 text-left text-3xl xl:text-5xl mb-5 lg:mb-10">
                    {slide.title}
                  </h2>
                  <p className="text-gray-800 text-left text-lg lg:text-xl font-light mb-5 lg:mb-10">
                    {slide.description}
                  </p>
                  <ul className="list-disc text-gray-800 space-y-5">
                    {slide.list.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-5 text-lg lg:text-xl"
                      >
                        <span className="text-secondary">
                          <CheckCheckIcon size={20} strokeWidth={1} />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>

        {/* Custom Navigation Buttons */}
        <div className="flex gap-10 absolute bottom-5 left-5 lg:left-20 z-10">
          <button
            onClick={() => splideRef.current?.go("<")}
            className="bg-transparent border border-black text-black p-3 rounded-full hover:bg-secondary hover:text-black transition"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => splideRef.current?.go(">")}
            className="bg-transparent border border-black text-black p-3 rounded-full hover:bg-secondary hover:text-black transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
