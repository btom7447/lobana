import Image from "next/image";
import Link from "next/link";

export default function WhySection() {
  const why = [
    {
      title: "Trust",
      description:
        "Built on integrity and transparent business practices",
      icon: "/icons/trust.png",
    },
    {
      title: "Innovation",
      description:
        "Cutting-edge solutions and forward-thinking strategies",
      icon: "/icons/innovation.png",
    },
    {
      title: "Global Reach",
      description:
        "International connections and worldwide opportunities",
      icon: "/icons/global-reach.png",
    },
    {
      title: "Sustainability",
      description:
        "Committed to environmentally responsible practices",
      icon: "/icons/sustainability.png",
    },
  ];

  return (
    <section className="bg-foreground p-5 lg:p-20">
      <h2
        data-aos="fade-down"
        data-aos-delay="100"
        className="text-gray-800 text-center text-3xl xl:text-5xl mb-5 lg:mb-10"
      >
        Why Choose Lobana
      </h2>

      <p
        className="text-gray-800 text-center text-lg lg:text-xl font-light mb-5"
        data-aos="fade-down"
        data-aos-delay="200"
      >
        Trusted expertise across multiple industries
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
