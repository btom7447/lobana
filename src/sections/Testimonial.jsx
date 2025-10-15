"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "Lobana made the process of buying my property smooth and stress-free. I couldn’t have asked for a better experience.",
    name: "Michael Brown",
    title: "CEO, BrightFuture Inc.",
    image: "/images/client1.png",
    rating: 5,
  },
  {
    id: 2,
    text: "Partnering with Lobana has been one of the best business decisions I’ve made. Their expertise in import and distribution is unmatched",
    name: "Sofia Williams",
    title: "Operations Head, GreenGrid",
    image: "/images/client1.png",
    rating: 4,
  },
  {
    id: 3,
    text: "Lobana’s approach to modern farming is inspiring. They are not just service providers, but true partners in growth.",
    name: "James Anderson",
    title: "Project Manager, EcoWorld",
    image: "/images/client1.png",
    rating: 5,
  },
  {
    id: 4,
    text: "The consultation and implementation process was smooth from start to finish. Great experience!",
    name: "Lisa Johnson",
    title: "Director, EnergyConnect",
    image: "/images/client1.png",
    rating: 4,
  },
];

export default function TestimonialSection() {
  return (
    <section className="bg-foreground py-20 px-5 lg:px-20">
      <h2
        data-aos="fade-down"
        data-aos-delay="100"
        className="text-gray-800 text-center text-3xl xl:text-5xl mb-5 lg:mb-10"
      >
        Testimonial
      </h2>

      <p
        className="text-gray-800 text-center text-lg lg:text-xl font-light mb-20"
        data-aos="fade-down"
        data-aos-delay="200"
      >
        What our clients say
      </p>

      <Splide
        options={{
          type: "loop",
          perPage: 3,
          perMove: 1,
          gap: "2rem",
          autoplay: true,
          breakpoints: {
            1024: { perPage: 2 },
            640: { perPage: 1 },
          },
          pagination: false,
          arrows: false,
        }}
      >
        {testimonials.map((item, index) => (
          <SplideSlide key={item.id}>
            <div
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="border border-gray-300 rounded-2xl p-10 flex flex-col justify-between h-full bg-white"
            >
              {/* Top Row: Quote Icon & Rating */}
              <div className="flex items-center justify-between mb-4">
                <Image
                  src="/icons/quote.png" 
                  alt="Quote Icon"
                  width={32}
                  height={32}
                />
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      strokeWidth={1.5}
                      className={`${
                        i < item.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-800 my-5 leading-relaxed">
                {item.text}
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 mt-auto">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{item.name}</h4>
                  <p className="text-gray-500 text-sm">{item.title}</p>
                </div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
}
