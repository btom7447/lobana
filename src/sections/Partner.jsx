import Image from "next/image";

export default function PartnerSection() {
    return (
      <section className="bg-foreground px-5 lg:px-20 py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="relative w-full h-80 lg:h-120"
        >
          <Image
            src="/images/partner-poster.png"
            alt="a plant sappling"
            fill
            className="object-cover rounded-3xl"
          />
        </div>
        <div>
          <p
            className="text-black text-lg lg:text-xl font-light mb-5"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            At LOBANA, we believe that the best opportunities arise from
            strategic partnerships. Whether you're an investor looking for
            promising ventures, a business seeking expansion opportunities, or
            an organization with complementary expertise, we're committed to
            creating mutually beneficial relationships.
          </p>
          <p
            className="text-black text-lg lg:text-xl font-light mb-5"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            Our partnership approach is built on transparency, shared values,
            and a commitment to sustainable growth. We work with partners who
            share our vision of building value while enhancing communities.
          </p>
        </div>
      </section>
    );
}