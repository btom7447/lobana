"use client";

import { useState } from "react";
import { MoonLoader } from "react-spinners";
import { toast } from "react-toastify";
import CustomSelect from "./CustomSelect";

const interests = [
  "Real Estate",
  "Trade & Commerce",
  "Agriculture",
  "Investment",
  "Restaurant & Hotel"
];

export default function PartnerForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1️⃣ Send to MongoDB
      const res = await fetch("/api/partner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const mongoData = await res.json();

      // 2️⃣ Send to Formspree (manual POST)
      const formspreeRes = await fetch("https://formspree.io/f/mgvnbbvw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const formspreeData = await formspreeRes.json();

      // ✅ Check both submissions
      if (res.ok && formspreeRes.ok) {
        toast.success("Partnership request submitted!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          interest: "",
          message: "",
        });
      } else if (!formspreeRes.ok) {
        toast.warn("Saved to database, but failed to notify Formspree.");
      } else {
        toast.error(mongoData.message || "⚠️ Something went wrong");
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
      className="p-5 lg:p-10 rounded-3xl grid grid-cols-1 xl:grid-cols-2 gap-5 bg-white border border-gray-300 w-full max-w-6xl mx-auto my-10"
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="p-5 rounded-2xl border border-gray-300 bg-white text-black text-lg font-light placeholder:text-black focus:outline-none focus:ring-1 focus:ring-secondary"
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        className="p-5 rounded-2xl border border-gray-300 bg-white text-black text-lg font-light placeholder:text-black focus:outline-none focus:ring-1 focus:ring-secondary"
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        required
        className="p-5 rounded-2xl border border-gray-300 bg-white text-black text-lg font-light placeholder:text-black focus:outline-none focus:ring-1 focus:ring-secondary"
      />

      <div>
        <CustomSelect
          label="Select Area of Interest"
          options={interests}
          value={formData.interest}
          onChange={handleChange}
          name="interest"
        />
      </div>

      <textarea
        name="message"
        placeholder="Tell us about your partnership interest, company background, and how we can work together..."
        value={formData.message}
        onChange={handleChange}
        required
        rows={5}
        className="col-span-1 xl:col-span-2 p-5 rounded-2xl border border-gray-300 bg-white text-black text-lg font-light placeholder:text-black focus:outline-none focus:ring-1 focus:ring-secondary"
      />

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
