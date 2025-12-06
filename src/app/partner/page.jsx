"use client";

import { useState } from "react";

export default function PartnerForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    region: "",
    message: "",
  });

  const regions = ["Corporate", "University", "Other"];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <>
      {/* Embedded styles */}
      <style>{`
        :root {
          --form-bg: #0b1d3a;
          --primary-blue: #306EFF;
          --highlight-blue: #14A4F3;
        }
      `}</style>

      <div
        className="min-h-screen flex items-center justify-center px-4"
        style={{ backgroundColor: "#e3e8f1ff" }}
      >
        <div
          className="w-full max-w-3xl rounded-xl p-8 text-white shadow-2xl border transition-all"
          style={{
            background: "var(--form-bg)",
            borderColor: "#1e3a5a",
          }}
        >
          <h2 className="text-xl font-semibold flex items-center gap-2 mb-3">
            🤝 Partner With Us
          </h2>

          <p className="text-gray-300 text-sm mb-6">
            We collaborate with universities, corporates, and training partners to build future-ready talent.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Full Name */}
            <div>
              <label className="block text-sm mb-1">Your Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full bg-[#0d274d] border border-[#22456b] rounded-lg px-4 py-2 text-white focus:border-[var(--highlight-blue)] outline-none transition"
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
              />
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-[#0d274d] border border-[#22456b] rounded-lg px-4 py-2 text-white focus:border-[var(--highlight-blue)] outline-none transition"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Phone</label>
                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full bg-[#0d274d] border border-[#22456b] rounded-lg px-4 py-2 text-white focus:border-[var(--highlight-blue)] outline-none transition"
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Organization + Dropdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Organization Name</label>
                <input
                  type="text"
                  placeholder="Your organization name"
                  className="w-full bg-[#0d274d] border border-[#22456b] rounded-lg px-4 py-2 text-white focus:border-[var(--highlight-blue)] outline-none transition"
                  onChange={(e) =>
                    setFormData({ ...formData, organization: e.target.value })
                  }
                />
              </div>

              <div>
  <style>{`
    select option {
      background: white;
      color: black;
    }
  `}</style>

  <label className="block text-sm mb-1">I am from</label>

  <select
    className="w-full border border-gray-400 rounded-lg px-4 py-2 cursor-pointer text-white outline-none transition focus:border-[var(--highlight-blue)]"
    style={{
      backgroundColor: "#0b1d3a", // Closed dropdown background matches form
    }}
    onChange={(e) => setFormData({ ...formData, region: e.target.value })}
  >
    <option value="" className="text-black">Select</option>
    {regions.map((item, index) => (
      <option key={index} value={item} className="text-black">
        {item}
      </option>
    ))}
  </select>
</div>


            </div>

            {/* Message */}
            <div>
              <label className="block text-sm mb-1">Describe Your Requirements</label>
              <textarea
                placeholder="Tell us how we can work together..."
                rows="4"
                className="w-full bg-[#0d274d] border border-[#22456b] rounded-lg px-4 py-2 text-white focus:border-[var(--highlight-blue)] outline-none transition resize-none"
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[var(--primary-blue)] hover:bg-[#2458d3] text-white py-3 rounded-lg font-semibold transition"
            >
              Send Request
            </button>
          </form>
        </div>
      </div>
    </>
  );
}