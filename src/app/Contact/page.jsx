"use client";
import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    location: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section
      className="w-full min-h-screen px-6 md:px-20 py-20"
      style={{ background: "#e3e8f1ff", fontFamily: "'Roboto', sans-serif" }}
    >
      {/* TITLE */}
      <h1 className="text-4xl md:text-5xl font-bold text-center">
        <span className="text-[#0f8ddf]">Contact</span>{" "}
        <span className="text-[#e63950]">Us</span>
      </h1>

      <p className="text-[#4b5563] mt-4 text-lg text-center max-w-2xl mx-auto leading-normal">
        We’d love to collaborate with your organization, university, or campus.
        Fill the form and our team will connect with you shortly.
      </p>

      {/* GRID */}
      <div className="grid lg:grid-cols-2 gap-12 mt-16">
        
        {/* LEFT SIDE FORM */}
        <div className="space-y-8">

          {/* Contact Details */}
          <div className="bg-white border border-[#cdd6e5] p-6 rounded-2xl shadow-md">
            <p className="mb-3 text-[#1e1f24]">
              <span className="font-semibold text-[#0f8ddf]">Email:</span>{" "}
              connect@learnersdigital.com
            </p>
            <p className="text-[#1e1f24]">
              <span className="font-semibold text-[#0f8ddf]">Phone:</span>{" "}
              +91 99169 33202
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white border border-[#cdd6e5] p-8 rounded-2xl shadow-md">
            <div className="space-y-6">

              {/* Name */}
              <div>
                <label className="text-[#4b5563] block mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-[#f6f8fc] text-[#1e1f24] px-4 py-3 rounded-xl border border-[#cdd6e5] focus:outline-none focus:border-[#0f8ddf]"
                />
              </div>

              {/* Email + Dropdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                <div>
                  <label className="text-[#4b5563] block mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-[#f6f8fc] text-[#1e1f24] px-4 py-3 rounded-xl border border-[#cdd6e5] focus:outline-none focus:border-[#0f8ddf]"
                  />
                </div>

                <div>
                  <label className="text-[#4b5563] block mb-2">I am from</label>
                  <select
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    className="w-full bg-[#f6f8fc] text-[#1e1f24] px-4 py-3 rounded-xl border border-[#cdd6e5] focus:outline-none focus:border-[#0f8ddf]"
                  >
                    <option value="">Select</option>
                    <option>University</option>
                    <option>Corporate</option>
                    <option>Training Inquiry</option>
                    <option>Student</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="text-[#4b5563] block mb-2">
                  Describe Your Requirements
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="How can we help?"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-[#f6f8fc] text-[#1e1f24] px-4 py-3 rounded-xl border border-[#cdd6e5] focus:outline-none focus:border-[#0f8ddf]"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                className="w-full py-4 rounded-xl font-semibold text-lg text-white transition-all duration-300 hover:scale-[1.05] shadow-lg"
                style={{
                  background: "linear-gradient(90deg, #0f8ddf, #0077c8)",
                }}
              >
                Send Message
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">

          {/* Map Card */}
          <div className="bg-white border border-[#cdd6e5] p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-[#0f8ddf]">Our Location</h3>
            <p className="text-[#4b5563] mt-3">
              Learners Digital, Nesara Tech-park,278, near Kidds Ice Creams, Hebbal Industrial Area, Mysuru, Karnataka 571130
            </p>

            <iframe
  className="rounded-xl w-full h-64 mt-4"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3897.500570368373!2d76.5940544!3d12.349365800000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7be1a10aed1b%3A0x4b490c8db9dbf577!2z4LKo4LOH4LK44LKwIOCypOCyvuCyguCypOCzjeCysOCyv-CylSDgsongsqbgs43gsq_gsr7gsqjgsrXgsqg!5e0!3m2!1sen!2sin!4v1764229071880!5m2!1sen!2sin"
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>


          </div>

          {/* Appreciation */}
          <div className="bg-white border border-[#cdd6e5] p-6 rounded-2xl shadow-md">
            <h3 className="text-lg font-semibold text-[#0f8ddf]">
              We appreciate your interest!
            </h3>
            <p className="text-[#4b5563] mt-3 leading-relaxed">
              Our team looks forward to connecting and building meaningful collaborations with you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
