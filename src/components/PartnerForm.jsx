"use client";

import { useState } from "react";
import { MoonLoader } from "react-spinners";
import { toast } from "react-toastify";
import CustomSelect from "./CustomSelect";

const interests = [
  "Renewable Energy Projects",
  "Funding & Investment",
  "Smart Grid Solutions",
  "Pilot Programs",
  "Other",
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
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const res = await fetch("/api/partner", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         toast.success("Partnership request submitted!");
//         setFormData({
//           organization: "",
//           email: "",
//           phone: "",
//           orgType: "",
//           interest: "",
//           message: "",
//           agree: false,
//           otherOrgType: "",
//         });
//       } else {
//         toast.error(data.message || "⚠️ Something went wrong");
//       }
//     } catch (err) {
//       console.error("❌ Error:", err);
//       toast.error("Server error. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

  return (
    <form
      //   onSubmit={handleSubmit}
      className="p-5 lg:p-10 rounded-3xl grid grid-cols-1 xl:grid-cols-2 gap-5 bg-white border border-gray-300 w-full max-w-6xl mx-auto my-10"
    >
      {/* Organization Name */}
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="p-5 rounded-2xl border border-gray-300 bg-white text-black text-lg font-light placeholder:text-black focus:outline-none focus:ring-1 focus:ring-secondary"
      />

      {/* Phone (optional) */}
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

      {/* Area of Interest (custom select) */}
      <div className="">
        <CustomSelect
          label="Select Area of Interest"
          options={interests}
          value={formData.interest}
          onChange={handleChange}
          name="interest"
        />
      </div>

      {/* Message */}
      <textarea
        name="message"
        placeholder="Tell us about your partnership interest, company background, and how we can work together..."
        value={formData.message}
        onChange={handleChange}
        required
        rows={5}
        className="col-span-1 xl:col-span-2 p-5 rounded-2xl border border-gray-300 bg-white text-black text-lg font-light placeholder:text-black focus:outline-none focus:ring-1 focus:ring-yellow-500"
      />

      {/* Submit */}
      <div className="mt-10 col-span-1 xl:col-span-2 flex items-center justify-center">
        <button
          type="submit"
          disabled={loading}
          className="flex items-center justify-center bg-highlight px-10 py-2 rounded-xl hover:bg-yellow-300 text-black font-medium text-lg transition-colors duration-300"
        >
          {loading ? <MoonLoader size={20} color="#fff" /> : "Submit"}
        </button>
      </div>
    </form>
  );
}
