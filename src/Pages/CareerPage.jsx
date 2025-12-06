"use client";
import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const roles = ["Developer", "Trainer", "Internship", "Marketing", "HR"];
const experiences = ["Fresher", "0-1 Year", "1-3 Years", "3-5 Years", "5+ Years"];
const techStacks = [
  "Java",
  "Python",
  "JavaScript / React",
  "Node.js",
  "Full Stack (MERN)",
  "UI/UX Design",
  "DevOps / AWS",
  "Digital Marketing",
  "Resource Management",
  "Data Analysis / Power BI",
  "Machine Learning / AI",
  "Software Testing / QA",
  "Cyber Security",
];

export default function JoinOurTeamForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    experience: "",
    techStack: "",
    linkedin: "",
    message: "",
    resume: null,
  });

  const updateField = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    updateField(name, files ? files[0] : value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application Submitted Successfully!");
  };

  // Reusable Dropdown
  const Dropdown = ({ label, value, setValue, items }) => (
  <div className="w-full">
    <label className="block text-gray-300 mb-1">{label}</label>

    <Listbox value={value} onChange={setValue}>
      <div className="relative">
        <Listbox.Button className="w-full bg-[#13233F] text-white border border-[#253652] rounded-lg px-4 py-3 text-left cursor-pointer focus:ring-2 focus:ring-blue-500 flex items-center justify-between">
          <span className="truncate opacity-90">
            {value || `Select ${label.replace(" *", "")}`}
          </span>
          <ChevronDownIcon className="w-5 h-5 opacity-80" />
        </Listbox.Button>

        <Listbox.Options className="absolute mt-2 w-full bg-white rounded-lg shadow-xl z-50 max-h-60 overflow-y-auto touch-action-manipulation overscroll-contain">
          {items.map((item) => (
            <Listbox.Option key={item} value={item}>
              {({ active }) => (
                <div
                  className={`px-4 py-2 cursor-pointer ${
                    active ? "bg-gray-200" : "bg-white"
                  }`}
                >
                  {item}
                </div>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  </div>
);


  return (
    <div className="min-h-screen bg-[#E6ECF5] px-4 py-10 overflow-y-auto">
      <div className="w-full max-w-2xl mx-auto bg-[#0C1B33] rounded-2xl shadow-xl p-6 sm:p-10 font-roboto">

        {/* Header */}
        <h2 className="text-2xl font-semibold text-center text-white mb-2">
          Join Our Team
        </h2>
        <p className="text-gray-400 text-center mb-8 text-sm">
          Fill the form below — our HR team will connect if shortlisted.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Text Field */}
          {[
            { label: "Full Name *", name: "name", type: "text", placeholder: "Enter your full name" },
            { label: "Email *", name: "email", type: "email", placeholder: "example@email.com" },
            { label: "Phone Number *", name: "phone", type: "tel", placeholder: "Enter your phone number" },
          ].map((field) => (
            <div key={field.name}>
              <label className="text-gray-300">{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                required
                onChange={handleChange}
                className="w-full bg-[#13233F] border border-[#253652] text-white rounded-lg px-4 py-3 mt-1 focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
              />
            </div>
          ))}

          {/* Dropdowns */}
          <Dropdown label="Role Applying For *" value={formData.role} setValue={(v) => updateField("role", v)} items={roles} />
          <Dropdown label="Experience Level *" value={formData.experience} setValue={(v) => updateField("experience", v)} items={experiences} />
          <Dropdown label="Primary Skill / Tech Stack *" value={formData.techStack} setValue={(v) => updateField("techStack", v)} items={techStacks} />

          {/* LinkedIn */}
          <div>
            <label className="text-gray-300">LinkedIn / Portfolio (Optional)</label>
            <input
              type="url"
              name="linkedin"
              placeholder="https://linkedin.com/in/username"
              onChange={handleChange}
              className="w-full bg-[#13233F] border border-[#253652] text-white rounded-lg px-4 py-3 mt-1 placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="text-gray-300">Why do you want to join?</label>
            <textarea
              rows={4}
              name="message"
              placeholder="Tell us briefly..."
              onChange={handleChange}
              className="w-full bg-[#13233F] border border-[#253652] text-white rounded-lg px-4 py-3 mt-1 resize-none placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Resume */}
          <div>
            <label className="text-gray-300">Upload Resume (PDF) *</label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              required
              onChange={(e) => updateField("resume", e.target.files[0])}
              className="w-full bg-[#13233F] text-white border border-[#253652] rounded-lg px-4 py-3 mt-1 cursor-pointer file:bg-blue-600 file:text-white file:border-0 file:px-4 file:py-2 file:rounded-lg"
            />
          </div>

          {/* Submit */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg text-white font-semibold text-lg transition">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}