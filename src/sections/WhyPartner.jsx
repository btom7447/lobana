import Image from "next/image";
import Link from "next/link";

export default function WhyPartnerSection() {
  const why = [
    {
      title: "Trusted Partnership",
      description:
        "Build long-term relationships based on mutua trust and shared success",
      icon: "/icons/trust-partnership.png",
    },
    {
      title: "Expert Collaboration",
      description:
        "Access to our team of industry experts and specialized knowledge",
      icon: "/icons/expert-collaboration.png",
    },
    {
      title: "Global Network",
      description:
        "Leverage our international connections and market presence",
      icon: "/icons/global-reach.png",
    },
    {
      title: "Proven Success",
      description:
        "Track record of successful partnerships and profitable ventures",
      icon: "/icons/proven-success.png",
    },
  ];

  return (
    <section className="bg-white border-y border-gray-300 p-5 lg:p-20">
      <h2
        data-aos="fade-down"
        data-aos-delay="100"
        className="text-gray-800 text-center text-3xl xl:text-5xl mb-5 lg:mb-10"
      >
        Why Partner With Lobana
      </h2>

      <p
        className="text-gray-800 text-center text-lg lg:text-xl font-light mb-5"
        data-aos="fade-down"
        data-aos-delay="200"
      >
        Advantages of working with our experienced team
      </p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 my-10">
        {why.map((why, index) => (
          <div
            key={why.title}
            data-aos="fade-up"
            data-aos-delay={300 + index * 150}
            className="transition p-10 text-center flex flex-col items-center justify-center"
          >
            <Image
              src={why.icon}
              alt={`${why.title} icon`}
              width={50}
              height={50}
              className="object-cover w-10 h-auto mb-5"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {why.title}
            </h3>
            <p className="text-gray-600 text-sm lg:text-base">
              {why.description}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}
