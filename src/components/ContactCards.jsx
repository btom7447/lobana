"use client";

import Image from "next/image";
import Link from "next/link";

export default function ContactCards() {
  const contacts = [
    {
      title: "Location",
      value: "Toronto Ontario Canada",
      link: "https://goo.gl/maps/example",
      icon: "/icons/location.png",
    },
    {
      title: "Email",
      value: "lobanaintltd@gmail.com",
      link: "mailto:lobanaintltd@gmail.com",
      icon: "/icons/email.png",
    },
    {
      title: "Phone",
      value: "+1(437)869-3035",
      link: "tel:+14378693035",
      icon: "/icons/email.png",
    },
  ];

  return (
    <div className="flex flex-col gap-10">
      {contacts.map((contact, index) => (
        <div
          key={index}
          data-aos="fade-left"
          data-aos-delay={300 + index * 150}
          className="bg-white border border-gray-300 rounded-3xl transition-all duration-300 p-6 text-left flex flex-col items-start"
        >
          {/* Icon */}
          <div className="bg-secondary w-fit p-3 rounded-full mb-4">
            <Image
              src={contact.icon}
              alt={`${contact.title} icon`}
              width={20}
              height={20}
              className="object-contain"
            />
          </div>

          {/* Title */}
          <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-2">
            {contact.title}
          </h3>

          {/* Link or Text */}
          {contact.link ? (
            <Link
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-secondary lg:text-lg font-light transition-colors"
            >
              {contact.value}
            </Link>
          ) : (
            <p className="text-gray-600 text-base lg:text-lg font-light">
              {contact.value}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
