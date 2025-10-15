import Image from "next/image";

export default function OurStory() {
    return (
      <section className="bg-foreground px-5 lg:px-20 py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="relative w-full h-80 lg:h-120"
        >
          <Image
            src="/images/story-poster.png"
            alt="a plant sappling"
            fill
            className="object-cover rounded-3xl"
          />
        </div>
        <div>
          <h2
            data-aos="fade-down"
            data-aos-delay="100"
            className="text-gray-800 text-3xl xl:text-5xl text-left mb-5 lg:mb-10"
          >
            Our Story
          </h2>
          <p
            className="text-black text-lg lg:text-xl font-light mb-5"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            LOBANA was founded on May 31, 2024, with a bold vision to create
            lasting value across multiple industries. Our name represents our
            commitment to building bridges between opportunities and
            communities, fostering growth that benefits everyone involved.
          </p>
          <p
            className="text-black text-lg lg:text-xl font-light mb-5"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            From our headquarters in Nigeria, we've quickly established
            ourselves as a trusted partner in real estate development,
            international trade, sustainable agriculture, and strategic
            investments. Our diverse portfolio allows us to adapt to market
            changes while maintaining steady growth.
          </p>
          <p
            className="text-black text-lg lg:text-xl font-light mb-5"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            Today, LOBANA continues to expand its reach, building partnerships
            across continents and creating opportunities that enhance
            communities while delivering exceptional returns for our
            stakeholders.
          </p>
        </div>
      </section>
    );
}