import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/Map"), {
  ssr: false, // ⛔ disables server-side rendering for Map
});

export default function FindUsSection() {
  return (
    <section className="bg-foreground p-5 lg:p-20">
      <h2
        data-aos="fade-down"
        data-aos-delay="100"
        className="text-gray-800 text-center text-3xl xl:text-5xl mb-5"
      >
        Find Us
      </h2>

      <p
        className="text-gray-800 text-center text-lg lg:text-xl font-light mb-5"
        data-aos="fade-down"
        data-aos-delay="200"
      >
        Our headquarters in Lagos, Nigeria
      </p>

      <Map />
    </section>
  );
}
