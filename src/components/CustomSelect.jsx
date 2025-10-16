"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function CustomSelect({
  label,
  options,
  value,
  onChange,
  name,
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative col-span-1">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-5 rounded-2xl border border-gray-300 bg-white text-black text-lg font-light focus:outline-none focus:ring-1 focus:ring-yellow-500"
      >
        {value || label}
        <ChevronDown
          className={`ml-2 h-5 w-5 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <ul className="absolute z-10 w-full mt-2 rounded-2xl border border-gray-300 bg-white shadow-lg max-h-60 overflow-y-auto">
          {options.map((option, idx) => (
            <li
              key={idx}
              onClick={() => {
                onChange({ target: { name, value: option } });
                setOpen(false);
              }}
              className={`p-4 lg:p-6 cursor-pointer hover:bg-gray-100 text-gray-500 text-lg md:text-xl ${
                value === option ? "bg-gray-200 font-medium" : ""
              }`}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
