import ContactCards from "@/components/ContactCards";
import ContactForm from "@/components/ContactForm";

export default function ContactSection() {
    return (
      <section className="bg-foreground px-5 lg:px-20 py-20 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
        <ContactForm />
        <ContactCards />
      </section>
    );
}