import Link from "next/link";
import Image from "next/image";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-black pt-10 lg:pt-20">
      <div className="px-5 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 items-start">
        {/* Company Section */}
        <div className="xl:col-span-1">
          <h6 className="text-2xl font-light text-secondary mb-5">
            Quick Links
          </h6>
          <ul className="space-y-5">
            <li className="text-white font-light text-lg lg:text-xl hover:text-secondary">
              <Link href="/">Home</Link>
            </li>
            <li className="text-white font-light text-lg lg:text-xl hover:text-secondary">
              <Link href="/about">About Us</Link>
            </li>
            <li className="text-white font-light text-lg lg:text-xl hover:text-secondary">
              <Link href="/services">Services</Link>
            </li>
            <li className="text-white font-light text-lg lg:text-xl hover:text-secondary">
              <Link href="/partners">Partners</Link>
            </li>
            <li className="text-white font-light text-lg lg:text-xl hover:text-secondary">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Resources Section */}
        <div className="xl:col-span-1">
          <h6 className="text-2xl font-light text-secondary mb-5">
            Our Services
          </h6>
          <ul className="space-y-5">
            <li className="text-white font-light text-lg lg:text-xl hover:text-secondary">
              <Link href="/services">Real Estate</Link>
            </li>
            <li className="text-white font-light text-lg lg:text-xl hover:text-secondary">
              <Link href="/services">Trade & Commerce</Link>
            </li>
            <li className="text-white font-light text-lg lg:text-xl hover:text-secondary">
              <Link href="/services">Agriculture</Link>
            </li>
            <li className="text-white font-light text-lg lg:text-xl hover:text-secondary">
              <Link href="/services">Global Investments</Link>
            </li>
            <li className="text-white font-light text-lg lg:text-xl hover:text-secondary">
              <Link href="/services">Restaurant & Hotel</Link>
            </li>
          </ul>
        </div>

        {/* Legal Section */}
        <div className="xl:col-span-1">
          <h6 className="text-2xl font-light text-secondary mb-5">Legal</h6>
          <ul className="space-y-5">
            <li className="text-white font-light text-lg lg:text-xl hover:text-secondary">
              <Link href="#">Terms of use</Link>
            </li>
            <li className="text-white font-light text-lg lg:text-xl hover:text-secondary">
              <Link href="#">Privacy policy</Link>
            </li>
            <li className="text-white font-light text-lg lg:text-xl hover:text-secondary">
              <Link href="#">Disclaimer</Link>
            </li>
            <li className="text-white font-light text-lg lg:text-xl hover:text-secondary">
              <Link href="#">Cookie policy</Link>
            </li>
            <li className="text-white font-light text-lg lg:text-xl hover:text-secondary">
              <Link href="#">Regulatory compliance</Link>
            </li>
          </ul>
        </div>

        <NewsletterForm />
      </div>
      <div className="px-5 lg:px-20 mt-20 w-full flex flex-col xl:flex-row items-center justify-center xl:justify-between">
        <p className="text-white text-sm lg:text-lg font-light">
          &copy; {currentYear} Lobana International Ltd. All rights reserved.
        </p>
        <a
          href="https://kmini-tech.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary text-sm lg:text-lg font-light"
        >
          By Kmini Technologies
        </a>
      </div>
      <div className="w-full pt-20 relative overflow-hidden ">
        <Image
          src="/images/footer-poster.png"
          alt="footer poster"
          width={500}
          height={30}
          className="h-15 lg:h-30 w-full object-cover"
        />
      </div>
    </footer>
  );
}
