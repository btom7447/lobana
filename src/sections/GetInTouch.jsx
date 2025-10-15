import Link from "next/link";

export default function GetInTouch() {
    return (
      <section className="px-5 lg:px-20 py-20 bg-blue-300 flex flex-col items-center justify-center">
        <h2
          data-aos="fade-down"
          data-aos-delay="100"
          className="text-gray-800 text-center text-3xl xl:text-5xl mb-5"
        >
          Let's build the future together
        </h2>

        <p
          className="text-gray-800 text-center text-lg lg:text-xl font-light mb-15"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          Partner with LOBANA today and unlock new opportunities for growth
        </p>
        <Link
          className="block w-fit bg-black text-white px-10 py-3 rounded-xl hover:bg-secondary transition"
          href={"/contact"}
        >
          Get In Touch
        </Link>
      </section>
    );
}