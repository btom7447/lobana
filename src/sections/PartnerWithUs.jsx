import PartnerForm from "@/components/PartnerForm";

export default function PartnerWithUsSection() {
    return (
        <section className="bg-foreground px-5 lg:px-20 py-20">
            <h2
                data-aos="fade-down"
                data-aos-delay="100"
                className="text-gray-800 text-3xl xl:text-5xl text-center mb-5 lg:mb-10"
            >
                Partner With Us
            </h2>
            <p
                className="text-gray-600 text-base lg:text-lg text-center"
                data-aos="fade-down"
                data-aos-delay="100"
            >
                Ready to explore partnership opportunities? Get in touch with our team
            </p>
            <PartnerForm />
        </section>
    );
}