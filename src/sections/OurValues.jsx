import Image from "next/image";
import Link from "next/link";

export default function OurValuesSection() {
  const values = [
    {
      title: "Integrity",
      description:
        "We conduct business with honesty, transparency, and ethical practices in every transaction and relationship.",
      icon: "/icons/integrity.png",
    },
    {
      title: "Growth",
      description:
        "We are committed to continuous improvement and sustainable growth for our clients, partners, and communities.",
      icon: "/icons/growth.png",
    },
    {
      title: "Innovation",
      description:
        "We embrace new technologies and creative solutions to deliver exceptional value and stay ahead of market trends.",
      icon: "/icons/innovation.png",
    },
    {
      title: "Sustainability",
      description:
        "We prioritize environmentally responsible practices and long-term thinking in all our business decisions.",
      icon: "/icons/sustainability.png",
    },
  ];

  return (
    <section className="bg-foreground p-5 lg:p-20">
      <h2
        data-aos="fade-down"
        data-aos-delay="100"
        className="text-gray-800 text-center text-3xl xl:text-5xl mb-5"
      >
        Our Values
      </h2>

      <p
        className="text-gray-800 text-center text-lg lg:text-xl font-light mb-5"
        data-aos="fade-down"
        data-aos-delay="200"
      >
        Trusted expertise across multiple industries
      </p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto my-10">
        {values.map((service, index) => (
          <div
            key={service.title}
            data-aos="fade-up"
            data-aos-delay={300 + index * 150}
            className="bg-white border border-gray-300 rounded-2xl hover:shadow-sm transition p-10 text-center flex flex-col items-center justify-center"
          >
            <div className="w-full flex items-center justify-start gap-5 mb-5">
              <Image
                src={service.icon}
                alt={`${service.title} icon`}
                width={50}
                height={50}
                className="object-cover w-15 h-auto mb-5"
              />
              <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
            </div>
            <p className="text-gray-600 text-left text-lg lg:text-xl">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
