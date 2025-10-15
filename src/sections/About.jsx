"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {

  return (
    <section className="py-10 px-5 lg:p-20 bg-foreground grid grid-cols-1 xl:grid-cols-2 items-center gap-10 lg:gap-20">
      <div className="">
        <h2
          data-aos="fade-right"
          data-aos-delay="100"
          className="text-gray-800 text-3xl xl:text-5xl text-left mb-5 lg:mb-10"
        >
          About Lobana <br /> International Ltd
        </h2>
        <p
          className="text-black text-lg lg:text-xl font-light mb-5"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          Lobana International Ltd is a diversified company based in Nigeria
          with operations across real estate, trade, agriculture, and
          investments.
        </p>
        <p
          className="text-black text-lg lg:text-xl font-light"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          Our mission is to provide sustainable, innovative, and value-driven
          solutions for individuals, businesses, and communities.
        </p>
        <Link
          data-aos="fade-right"
          data-aos-delay="300"
          href={"/about"}
          className="block w-fit mt-5 border border-secondary text-secondary px-10 py-3 rounded-xl hover:bg-secondary hover:text-black transition"
        >
          Learn More
        </Link>
      </div>
      <div
        data-aos="zoom-in"
        data-aos-delay="200"
        className="relative w-full h-80 lg:h-120"
      >
        <Image
          src="/images/about-section-poster.png"
          alt="a picture of board meeting at Lobana"
          fill
          className="object-cover rounded-3xl"
        />
      </div>
    </section>
  );
}
