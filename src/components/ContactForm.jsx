"use client";

import { useState } from "react";
import { MoonLoader } from "react-spinners";
import { toast } from "react-toastify";
import CustomSelect from "./CustomSelect";

const subjects = [
  "Real Estate",
  "Trade & Commerce",
  "Agriculture",
  "Investment",
  "Restaurant & Hotel"
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1️⃣ Send to your backend route
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      // 2️⃣ Send to Formspree (replace with your unique form ID)
      await fetch("https://formspree.io/f/mpwyeewz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Message sent!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error(data.message || "⚠️ Something went wrong");
      }
    } catch (err) {
      console.error("❌ Error:", err);
      toast.error("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="xl:col-span-2 p-5 lg:p-10 rounded-3xl grid grid-cols-1 xl:grid-cols-2 gap-5 bg-white border border-gray-300 w-full"
    >
      {/* Name */}
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="p-5 rounded-2xl border border-gray-300 bg-white text-black text-lg font-light placeholder:text-black focus:outline-none focus:ring-1 focus:ring-secondary"
      />

      {/* Phone */}
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        className="p-5 rounded-2xl border border-gray-300 bg-white text-black text-lg font-light placeholder:text-black focus:outline-none focus:ring-1 focus:ring-secondary"
      />

      {/* Email */}
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        required
        className="p-5 rounded-2xl border border-gray-300 bg-white text-black text-lg font-light placeholder:text-black focus:outline-none focus:ring-1 focus:ring-secondary"
      />

      {/* Subject */}
      <div className="">
        <CustomSelect
          label="Subject"
          options={subjects}
          value={formData.subject}
          onChange={handleChange}
          name="subject"
        />
      </div>

      {/* Message */}
      <textarea
        name="message"
        placeholder="Message ..."
        value={formData.message}
        onChange={handleChange}
        required
        rows={5}
        className="col-span-1 xl:col-span-2 p-5 rounded-2xl border border-gray-300 bg-white text-black text-lg font-light placeholder:text-black focus:outline-none focus:ring-1 focus:ring-secondary"
      />

      {/* Submit Button */}
      <div className="mt-10 col-span-1 xl:col-span-2 flex items-center justify-center">
        <button
          type="submit"
          disabled={loading}
          className="flex items-center justify-center bg-highlight px-10 py-2 rounded-xl hover:bg-yellow-300 text-black font-medium text-lg transition-colors duration-300"
        >
          {loading ? <MoonLoader size={20} color="#000" /> : "Submit"}
        </button>
      </div>
    </form>
  );
}
