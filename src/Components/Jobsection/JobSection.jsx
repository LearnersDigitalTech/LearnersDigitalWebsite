"use client";
import React, { useState } from "react";

export default function JobsSection() {
  const [query, setQuery] = useState("");

  const jobs = [
    { id: 1, title: "Frontend Developer", location: "Bangalore", exp: "2 - 4 Yrs", color: "bg-blue-100", accent: "text-blue-600" },
    { id: 2, title: "Data Analyst", location: "Mumbai", exp: "1 - 3 Yrs", color: "bg-purple-100", accent: "text-purple-600" },
    { id: 3, title: "Cloud Engineer", location: "Remote", exp: "3+ Yrs", color: "bg-yellow-100", accent: "text-yellow-600" },
  ];

  const internships = [
    { id: "it", label: "IT & Dev" },
    { id: "marketing", label: "Marketing" },
    { id: "data", label: "Data" },
    { id: "hr", label: "HR" },
  ];

  const filtered = jobs.filter((j) =>
    (j.title + " " + j.location + " " + j.exp).toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    /* Note: no isolate / z-index set here so overlays can sit on top */
    <section className="w-full bg-[#edeff4ff] py-14 px-6 flex justify-center">
      <div className="w-full max-w-7xl">
        <div className="text-center mb-10 animate-fade-in">
          <h1 className="text-4xl font-semibold text-[#0ea5e9]">
            Explore Careers & Internships
          </h1>
          <p className="text-slate-600 mt-3 text-lg max-w-2xl mx-auto">
            Find opportunities that match your aspirations — whether you're a student, fresher, or experienced professional.
          </p>
        </div>
        <div className="grid gap-6 md:gap-10 grid-cols-1 md:[grid-template-columns:1fr_360px]">

          <div className="relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-start justify-between mb-4 gap-4">
              <div>
                <h3 id="latest-jobs" className="text-slate-900 text-lg font-bold">Latest Jobs</h3>
                <p className="text-sm text-slate-500">Find your next career move</p>
              </div>
              <div className="self-center">
                <a href="/jobs" className="text-blue-600 text-sm font-medium hover:underline">View All Jobs</a>
              </div>
            </div>

            <div className="mt-3 mb-5">
              <label htmlFor="job-search" className="sr-only">Search jobs</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400 pointer-events-none" aria-hidden="true">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <input
                  id="job-search"
                  type="search"
                  aria-label="Search jobs"
                  placeholder="Search by role, skill or location..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 rounded-lg bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-200 transition-shadow"
                />
              </div>
            </div>

            <div className="space-y-3">
              {filtered.length === 0 && (
                <div className="p-4 text-center text-sm text-slate-500 border border-dashed border-gray-100 rounded-lg">
                  No jobs match your search
                </div>
              )}

              {filtered.map((j) => (
                <div
                  key={j.id}
                  className="flex items-center justify-between gap-4 p-3 rounded-lg border border-gray-100 bg-white hover:shadow-lg transition transform hover:-translate-y-1"
                  role="listitem"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center font-semibold ${j.color}`}>
                      <svg className={`w-5 h-5 ${j.accent}`} viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M5 12h14M12 5v14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>

                    <div className="min-w-0">
                      <div className="truncate text-sm font-semibold text-slate-900">{j.title}</div>
                      <div className="text-xs text-slate-400 mt-1">{j.location} • {j.exp}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 flex-shrink-0">
                    <a
                      href={`/Careers`}
                      className="inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium border border-blue-100 text-blue-600 bg-white hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-200 transition"
                      aria-label={`Apply for ${j.title}`}
                    >
                      Apply
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="relative rounded-2xl p-6 bg-gradient-to-b from-green-50 to-green-100 border border-green-50 shadow-sm mt-2 md:mt-0">
            <div>
              <h4 className="text-xs font-semibold text-green-600 mb-1">FOR STUDENTS</h4>
              <h3 id="internships" className="text-lg font-semibold text-slate-900 mb-2">Internships</h3>
              <p className="text-sm text-slate-500">Get real experience with real projects.</p>

              <div className="grid grid-cols-2 gap-3 mt-4">
                {internships.map((it) => (
                  <a
                    key={it.id}
                    href={`/internships#${it.id}`}
                    className="flex items-center gap-3 bg-white p-3 rounded-md border border-gray-100 text-green-800 text-sm hover:shadow-md transform hover:-translate-y-1 transition"
                  >
                    <span className="inline-flex w-7 h-7 items-center justify-center rounded bg-green-50 text-green-600">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" /></svg>
                    </span>
                    <span className="font-medium truncate">{it.label}</span>
                  </a>
                ))}
              </div>

              <a
                href="/Careers"
                className="mt-4 inline-block w-full text-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg shadow-md transform hover:-translate-y-1 transition"
              >
                Apply for Internship
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
