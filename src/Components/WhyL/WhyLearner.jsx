"use client";

import React from "react";

export default function HeroWhyUs() {
  const whyUs = [
    {
      title: "Strong Industry Partnerships",
      desc: "Connecting learners with top companies through real industry collaborations.",
      icon: "🛡",
      bg: "bg-[#DCEBFF]",
      color: "text-[#0284C7]",
    },
    {
      title: "Job-Ready, Application-Focused Training",
      desc: "Curriculum designed around real workforce needs for day-one readiness.",
      icon: "🚀",
      bg: "bg-[#E5FBE5]",
      color: "text-[#4B7A26]",
    },
    {
      title: "Real Internships & Corporate Exposure",
      desc: "Hands-on internships and projects with actual companies.",
      icon: "💼",
      bg: "bg-[#EFE1FF]",
      color: "text-[#7C3AED]",
    },
    {
      title: "Expert Mentors & Corporate Trainers",
      desc: "Learn directly from experienced IT professionals and industry experts.",
      icon: "📘",
      bg: "bg-[#FFEFD6]",
      color: "text-[#D97706]",
    },
    {
      title: "Proven Placement Support",
      desc: "End-to-end placement assistance and hiring connect programs.",
      icon: "👥",
      bg: "bg-[#FBE4EC]",
      color: "text-[#DB2777]",
    },
    {
      title: "Seamless Hiring & Onboarding",
      desc: "Efficient talent pipelines for corporates hiring fresh IT talent.",
      icon: "⚡",
      bg: "bg-[#DFFFF6]",
      color: "text-[#0EA5E9]",
    },
  ];

  return (
    <>
      {/* WHY-US SECTION */}
      <section className="w-full py-12 px-4 sm:px-6 bg-[#e3e8f1ff] flex justify-center">
        <div className="w-full max-w-7xl">
          <div className="text-center mb-10 px-2">
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#0ea5e9]">
              Why Choose Learners Digital
            </h2>
            <p className="text-gray-600 mt-2 text-base sm:text-lg max-w-2xl mx-auto">
              We bridge the gap between education and employment with proven expertise.
            </p>
          </div>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl shadow p-4 border border-gray-200 hover:shadow-md transition"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 ${item.bg} ${item.color} rounded-lg flex items-center justify-center text-lg`}
                  >
                    {item.icon}
                  </div>

                  <h3 className="text-sm sm:text-base font-semibold text-[#0E1525] leading-tight">
                    {item.title}
                  </h3>
                </div>

                <p className="text-gray-600 text-xs sm:text-sm mt-3 leading-snug">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY + METHODOLOGY SECTION */}
      <section className="w-full px-4 sm:px-6 bg-[#e3e8f1ff] flex justify-center">
        <div className="w-full max-w-7xl bg-[#0E1525] py-8 sm:py-10 px-4 sm:px-6 rounded-2xl">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            {/* LEFT COLUMN */}
            <div className="flex-1 w-full">
              <h2 className="text-white text-xl sm:text-2xl font-extrabold mb-4">
                Our Philosophy
              </h2>

              <div className="bg-[#111A2E] border border-[#1f2b42] rounded-2xl p-4">
                <p className="text-gray-300 text-sm sm:text-base italic leading-relaxed">
                  "Give a Man a Fish, You Feed Him for a Day. Teach a Man To Fish,
                  You Feed Him for a Lifetime."
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="w-full lg:w-[52%]">
              <h2 className="text-white text-xl sm:text-2xl font-extrabold mb-4 text-center">
                Our Learning Methodology
              </h2>

              {/* Responsive 3 Cards */}
              <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                <div className="w-full md:w-56 bg-[#111A2E] border border-[#1f2b42] rounded-2xl p-4 text-center">
                  <h3 className="text-white text-base font-bold leading-tight">
                    Study
                    <br />Technology
                  </h3>
                  <p className="text-gray-400 text-sm mt-2">Igniting Independent Learning</p>
                  <div className="h-1 w-14 bg-[#AED57A] mx-auto mt-2 rounded-full"></div>
                </div>

                <div className="w-full md:w-56 bg-[#111A2E] border border-[#1f2b42] rounded-2xl p-4 text-center">
                  <h3 className="text-white text-base font-bold leading-tight">5W1H</h3>
                  <p className="text-gray-400 text-sm mt-2 leading-snug">
                    Simplifying concepts
                    <br />through powerful questions
                  </p>
                  <div className="h-1 w-14 bg-[#AED57A] mx-auto mt-2 rounded-full"></div>
                </div>

                <div className="w-full md:w-56 bg-[#111A2E] border border-[#1f2b42] rounded-2xl p-4 text-center">
                  <h3 className="text-white text-base font-bold leading-tight">
                    Mind
                    <br />Mapping
                  </h3>
                  <p className="text-gray-400 text-sm mt-2 leading-snug">
                    Organize knowledge the way your brain thinks
                  </p>
                  <div className="h-1 w-14 bg-[#AED57A] mx-auto mt-2 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
