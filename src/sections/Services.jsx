import Image from "next/image";
import Link from "next/link";

export default function ServiceSection() {
const services = [
    {
        title: "Real Estate",
        description: "Sales, construction, and property management services tailored to meet modern needs.",
        icon: "/icons/real-estate.png",
    },
    {
        title: "Trade & Commerce",
        description:
        "Import/export and distribution of goods and materials with global reach.",
        icon: "/icons/trade-commerce.png",
    },
    {
        title: "Agriculture",
        description: "Modern farming solutions, crop production, and agricultural supply chain management.",
        icon: "/icons/agriculture.png",
    },
    {
        title: "Investments",
        description: "Strategic investments in properties and securities for long-term growth.",
        icon: "/icons/investments.png",
    },
];

  return (
    <section className="bg-foreground p-5 lg:p-20">
      <h2
        data-aos="fade-down"
        data-aos-delay="100"
        className="text-gray-800 text-center text-3xl xl:text-5xl mb-5 lg:mb-10"
      >
        Services
      </h2>

      <p
        className="text-gray-800 text-center text-lg lg:text-xl font-light mb-5"
        data-aos="fade-down"
        data-aos-delay="200"
      >
        Comprehensive solutions across multiple industries
      </p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 my-10">
        {services.map((service, index) => (
          <div
            key={service.title}
            data-aos="fade-up"
            data-aos-delay={300 + index * 150}
            className="bg-white border border-gray-300 rounded-2xl hover:shadow-sm transition p-10 text-center flex flex-col items-center justify-center"
          >
            <Image
              src={service.icon}
              alt={`${service.title} icon`}
              width={50}
              height={50}
              className="object-cover w-15 h-auto mb-5"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm lg:text-base">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* View Services Button */}
        <Link
          href="/services"
          className="block mx-auto w-fit bg-secondary text-black px-10 py-5 rounded-3xl hover:bg-yellow-500 transition"
        >
          View Services
        </Link>
    </section>
  );
}
