"use client";

import { useEffect } from "react";
import { MdMenuBook, MdWorkspacePremium, MdAccountBalance } from "react-icons/md";
import { FaPeopleCarryBox } from "react-icons/fa6";

export default function UniversitySection() {
  useEffect(() => {
    // Reveal-on-scroll animation using IntersectionObserver
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // const partners = [
  //   "/Univer/IITM.svg",
  //   "/Univer/NIE.png",
  //   "/Univer/VVCE.png",
  //   "/Univer/Malnad.png",
  //   "/Univer/ATME.png",
  //   "/Univer/MIT.png",
  //   "/Univer/KIT.png",
  // duplicates for smooth scroll
  //   "/Univer/IITM.svg",
  //   "/Univer/NIE.png",
  //   "/Univer/VVCE.png",
  //   "/Univer/Malnad.png",
  //   "/Univer/ATME.png",
  //   "/Univer/MIT.png",
  //   "/Univer/KIT.png",
  // ];

  return (
    <div
      className="relative w-full overflow-hidden bg-slate-50 font-['Roboto',sans-serif] text-slate-900 selection:bg-indigo-100 selection:text-indigo-900 group/section"
    >
      {/* 
        BACKGROUND LAYERS 
        - Clean, professional background without cursor tracking
      */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-100 opacity-90"></div>

        {/* Animated Blobs - Retained for subtle ambiance */}
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-100/40 rounded-full mix-blend-multiply filter blur-[100px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-indigo-100/40 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[700px] h-[700px] bg-purple-100/40 rounded-full mix-blend-multiply filter blur-[120px] animate-blob animation-delay-4000"></div>

        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-20">

        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-16 mb-12 md:mb-16 reveal transition-transform duration-100 ease-out will-change-transform">

          {/* Abstract Tech Logo */}
          <div className="relative group/logo flex-shrink-0 pt-2">
            <div className="absolute inset-0 bg-indigo-500/20 rounded-full blur-xl opacity-0 group-hover/logo:opacity-100 transition-opacity duration-500"></div>
            <div className="relative w-20 h-20 md:w-24 md:h-24 bg-white/80 backdrop-blur-xl rounded-2xl border border-white/60 shadow-lg flex items-center justify-center transform transition-all duration-700 group-hover/logo:rotate-3 group-hover/logo:scale-105">
              <MdAccountBalance className="text-4xl md:text-5xl text-indigo-600 group-hover/logo:scale-110 transition-transform duration-500" />
            </div>
          </div>

          <div className="max-w-3xl flex-grow">
            {/* Refined Heading */}
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-indigo-500"></span>
              <h2 className="text-sm md:text-base font-bold tracking-widest text-slate-500 uppercase">
                For Universities
              </h2>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700">
                Build Job-Ready Graduates
              </span>
            </h1>

            {/* Glassmorphic Description Block */}
            <div className="relative group/desc">
              {/* Floating Particles */}
              <div className="absolute -top-4 -right-4 w-2 h-2 bg-blue-400 rounded-full animate-float-slow opacity-60"></div>
              <div className="absolute -bottom-2 -left-2 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-float-delayed opacity-60"></div>

              <div className="relative bg-white/60 backdrop-blur-md border border-white/50 p-6 md:p-8 rounded-2xl shadow-sm overflow-hidden transition-all duration-500 group-hover/desc:shadow-md group-hover/desc:bg-white/70">
                {/* Tech Grid Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.03] group-hover/desc:opacity-[0.06] transition-opacity duration-500"></div>

                {/* Gradient Mesh */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                <p className="relative z-10 text-lg text-slate-600 leading-relaxed font-light">
                  We co-design skill-focused electives, run technical workshops, and assist with placements to
                  make students job-ready. Our programs bridge academic learning with industry needs,
                  ensuring students gain practical, employable skills.
                </p>

                {/* Animated Divider Line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-blue-400 to-indigo-400 group-hover/desc:w-full transition-all duration-1000 ease-out"></div>
              </div>
            </div>
          </div>
        </div>

        {/* CARDS SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">

          {/* CARD 1: Electives (Blue/Cyan Theme) */}
          <div className="reveal group relative h-full cursor-default">
            {/* Hover Glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-[2rem] opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500"></div>

            <div className="relative h-full bg-white/70 backdrop-blur-md rounded-[1.8rem] border border-white/80 p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)] flex flex-col overflow-hidden">
              <div className="w-14 h-14 mb-6 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-500 shadow-sm">
                <MdMenuBook className="text-2xl text-blue-600 group-hover:text-white transition-colors duration-500 group-hover:animate-pulse-slow" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-blue-700 transition-colors">Electives</h3>
              <ul className="space-y-4 flex-grow relative z-10">
                {["Credit-based electives co-created with industry experts", "Students gain job-relevant skills using real-world tools", "Assessments mirror real industry tasks & problem-solving"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 group-hover:text-slate-700 transition-colors">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                    <span className="leading-relaxed text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CARD 2: Internships (Orange/Amber Theme) */}
          <div className="reveal group relative h-full delay-[100ms] cursor-default">
            <div className="absolute -inset-0.5 bg-gradient-to-br from-orange-400 to-amber-300 rounded-[2rem] opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500"></div>

            <div className="relative h-full bg-white/70 backdrop-blur-md rounded-[1.8rem] border border-white/80 p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(249,115,22,0.15)] flex flex-col overflow-hidden">
              <div className="w-14 h-14 mb-6 rounded-2xl bg-orange-50 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-500 shadow-sm">
                <FaPeopleCarryBox className="text-2xl text-orange-600 group-hover:text-white transition-colors duration-500 group-hover:animate-spin-slow" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-orange-700 transition-colors">Internships</h3>
              <ul className="space-y-4 flex-grow relative z-10">
                {["Internships with real projects, sprints & mentorship", "Students build strong portfolios showcasing work experience", "Workflows & engineering practices mirror industry environments"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 group-hover:text-slate-700 transition-colors">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0"></span>
                    <span className="leading-relaxed text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CARD 3: Placement Support (Emerald/Green Theme) */}
          <div className="reveal group relative h-full delay-[200ms] cursor-default">
            <div className="absolute -inset-0.5 bg-gradient-to-br from-emerald-400 to-green-300 rounded-[2rem] opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500"></div>

            <div className="relative h-full bg-white/70 backdrop-blur-md rounded-[1.8rem] border border-white/80 p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(16,185,129,0.15)] flex flex-col overflow-hidden">
              <div className="w-14 h-14 mb-6 rounded-2xl bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-500 transition-colors duration-500 shadow-sm">
                <MdWorkspacePremium className="text-2xl text-emerald-600 group-hover:text-white transition-colors duration-500 group-hover:animate-bounce-subtle" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-emerald-700 transition-colors">Placement Support</h3>
              <ul className="space-y-4 flex-grow relative z-10">
                {["Hands-on, job-focused placement training programs", "Uses real industry projects, tools & workflows", "Bootcamps simulate real work to build confidence faster"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 group-hover:text-slate-700 transition-colors">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
                    <span className="leading-relaxed text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* PARTNERS SECTION */}
        {/* <div className="mt-8 md:mt-12 reveal relative py-12 -mx-6 md:-mx-12 lg:-mx-20 px-6 md:px-12 lg:px-20 bg-slate-100/30"> */}
        {/* Distinct Background */}
        {/* <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-30 z-0"></div> */}

        {/* <div className="relative z-10">
            <div className="text-center mb-10 group/heading">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight inline-block relative cursor-default">
                Our Partners
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 group-hover/heading:w-full transition-all duration-700 ease-out"></span>
              </h2>
              <p className="text-slate-500 mt-4 text-lg font-light tracking-wide">Some of the universities we collaborate with to drive skill-based education.</p>
            </div> */}

        {/* <div className="relative w-full overflow-hidden py-6"> */}
        {/* Gradient Masks */}
        {/* <div className="absolute top-0 left-0 h-full w-24 md:w-40 bg-gradient-to-r from-slate-50 via-slate-50/90 to-transparent z-20 pointer-events-none"></div>
              <div className="absolute top-0 right-0 h-full w-24 md:w-40 bg-gradient-to-l from-slate-50 via-slate-50/90 to-transparent z-20 pointer-events-none"></div>

              <div className="partnersScroll flex">
                <div className="partnersRow flex gap-8 md:gap-12 items-center animate-marquee hover:[animation-play-state:paused] px-4">
                  {partners.map((src, idx) => (
                    <div
                      key={idx}
                      className="group/card relative flex-shrink-0 w-40 h-24 md:w-48 md:h-28 bg-white/40 backdrop-blur-sm border border-white/60 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex items-center justify-center cursor-pointer"
                    > */}


        {/* Hover Glow */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>

                      <img
                        src={src}
                        alt={partner-${idx}}
                        className="h-12 md:h-16 w-auto object-contain filter grayscale opacity-50 transition-all duration-500 group-hover/card:filter-none group-hover/card:opacity-100 group-hover/card:scale-110 relative z-10"
                      /> */}
        {/* </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* CTA SECTION */}
        <div className="mt-8 md:mt-12 reveal">
          <div className="relative rounded-[2.5rem] overflow-hidden p-8 md:p-12 text-center md:text-left group/cta">
            {/* CTA Background - Clean */}
            <div className="absolute inset-0 bg-white/60 backdrop-blur-xl border border-white/60 shadow-2xl"></div>
            <div
              className="absolute inset-0 bg-gradient-to-r from-indigo-50/80 to-purple-50/80 mix-blend-multiply transition-opacity duration-500"
            ></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="max-w-2xl">
                <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Ready to Collaborate?</h3>
                <p className="text-lg text-slate-600 font-light">Let’s build the future of talent together. Reach out to us today!</p>
              </div>

              <a href="/partner" className="group relative inline-flex items-center gap-3 bg-slate-900 text-white rounded-full px-10 py-4 text-lg font-medium shadow-xl hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10">Partner With Us</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        /* --- ANIMATIONS --- */
        
        /* Reveal on Scroll */
        .reveal {
          opacity: 0;
          transform: translateY(40px) scale(0.98);
          filter: blur(10px);
          transition: opacity 1.2s cubic-bezier(0.2, 0.8, 0.2, 1), 
                      transform 1.2s cubic-bezier(0.2, 0.8, 0.2, 1),
                      filter 1.2s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .reveal.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
          filter: blur(0);
        }

        /* Marquee */
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 50s linear infinite;
          width: max-content;
        }

        /* Blobs */
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 10s infinite;
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }

        /* Icon Animations */
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(0.95); }
        }
        .animate-pulse-slow { animation: pulse-slow 3s infinite ease-in-out; }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }

        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-subtle { animation: bounce-subtle 2s infinite ease-in-out; }

        /* Floating Particles */
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(10px, -10px); }
        }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }

        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-8px, 8px); }
        }
        .animate-float-delayed { animation: float-delayed 7s ease-in-out infinite 1s; }

        @keyframes ping-slow {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        .animate-ping-slow { animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite; }
      `}</style>
    </div>
  );
}