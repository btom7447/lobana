import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="p-5 lg:p-20 relative flex items-center justify-center h-screen text-center text-white"
      style={{
        backgroundImage: "url('/images/hero-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl">
        <h1
          className="text-4xl md:text-6xl font-bold mb-6"
          data-aos="fade-down"
        >
          Building Dreams, <br /> One Property at a Time
        </h1>
        <p
          className="text-lg md:text-xl mb-8 text-gray-200"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          Your trusted partner in Real Estate, Trade, Agriculture and Global
          Investments
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center">
          <Link
            href={"/consultation"}
            className="block border border-white px-10 py-5 rounded-3xl hover:bg-white hover:text-black transition"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Book a Consultation
          </Link>
          <Link
            href={"/services"}
            className="block bg-secondary text-black px-10 py-5 rounded-3xl hover:bg-yellow-500 transition"
            data-aos="fade-up"
            data-aos-delay="40"
          >
            Explore our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
