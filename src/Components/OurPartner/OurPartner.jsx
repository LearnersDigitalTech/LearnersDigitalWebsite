"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

export default function OurPartner() {
  const scrollRef = useRef(null);
  const revealRef = useRef(null);

  // Logos arrays
  // const universityLogos = [
  //   "/Univer/IITM.svg",
  //   "/Univer/NIE.png",
  //   "/Univer/VVCE.png",
  //   "/Univer/Malnad.png",
  //   "/Univer/ATME.png",
  //   "/Univer/MIT.png",
  //   "/Univer/KIT.png",
  // ];

  const companyPartners = [
    "/partners/abacus-logo.png",
    "/partners/iquartic2.png",
    "/partners/infosys-logo.jpg",
    "/partners/newwave.png",
    "/partners/NexTurn.png",
    "/partners/1Onyx.png",
  ];

  /* ----------------------------
      REVEAL ON SCROLL
  ----------------------------- */
  useEffect(() => {
    const el = revealRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  /* ----------------------------
      AUTO SCROLL FOR UNIVERSITIES
      (COMMENTED OUT)
  ----------------------------- */
  /*
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let rafId;
    let speed = 0.25;
    let accum = 0;

    const step = () => {
      if (!container) return;
      accum += speed;
      if (accum >= 1) {
        container.scrollLeft += 1;
        accum = 0;
      }
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }
      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, []);
  */

  // Duplicate arrays
  // const uniDups = [...universityLogos, ...universityLogos];  // COMMENTED
  const partnersDups = [...companyPartners, ...companyPartners];

  return (
    <section ref={revealRef} className="reveal">
      <div className="bg-[#F7FAFC] rounded-xl p-6 md:p-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-center mx-auto max-w-3xl">
            <h3 className="text-lg md:text-4xl font-semibold text-[#0D1B2A]">
              Our Partners
            </h3>
            <p className="mt-2 text-sm md:text-base text-[#6C7A92]">
              Some of the companies we collaborate with to drive
              skill-based education and industry partnerships.
            </p>
          </div>
        </div>

        {/* ----------------------------------
            ❌ UNIVERSITIES SECTION COMMENTED
        ----------------------------------- */}

        {/*
        <div className="mt-6">
          <div className="relative rounded-lg overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-12 md:w-16 bg-gradient-to-r from-[#F7FAFC] to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-12 md:w-16 bg-gradient-to-l from-[#F7FAFC] to-transparent z-10" />

            <div
              ref={scrollRef}
              className="flex gap-4 items-center overflow-hidden px-3 md:px-4"
              aria-hidden="false"
              role="group"
              aria-label="University partners carousel"
            >
              {uniDups.map((src, idx) => (
                <div
                  key={`uni-${idx}`}
                  className="min-w-[110px] md:min-w-[170px] h-[60px] md:h-[110px] bg-white border border-[#E3EAEF] rounded-xl flex items-center justify-center p-3 shadow-md hover:-translate-y-1.5 cursor-pointer"
                >
                  <Image
                    src={src}
                    alt={`university-${idx}`}
                    width={160}
                    height={64}
                    className="object-contain max-h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        */}

        {/* ----------------------------------
            CORPORATE PARTNERS (ACTIVE)
        ----------------------------------- */}
        <div className="mt-8">
          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-12 md:w-16 bg-gradient-to-r from-[#F7FAFC] to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-12 md:w-16 bg-gradient-to-l from-[#F7FAFC] to-transparent z-10" />

            <div className="partnersTrack">
              <div className="partnersRow flex items-center gap-6">
                {partnersDups.map((src, idx) => (
                  <div
                    key={`partner-${idx}`}
                    className="partnerCard min-w-[140px] md:min-w-[220px] h-[60px] md:h-[110px] bg-white rounded-xl border border-[#dde3ee] shadow-[0_4px_14px_rgba(0,0,0,0.08)] flex items-center justify-center p-3 transition-all duration-200 hover:-translate-y-1.5"
                  >
                    <Image
                      src={src}
                      alt={`partner-${idx}`}
                      width={180}
                      height={70}
                      className="object-contain max-h-full"
                      style={{ width: "auto", height: "auto", filter: "grayscale(15%)", opacity: 0.95 }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .reveal { opacity: 1; transform: none; }
        .reveal.animate {
          animation: revealIn .72s cubic-bezier(.2,.9,.2,1) both;
        }
        @keyframes revealIn {
          from { opacity: 0; transform: translateY(18px) scale(0.985); }
          to   { opacity: 1; transform: none; }
        }

        .partnersTrack { width: 100%; overflow: hidden; }

        .partnersRow {
          display: flex;
          gap: 1.5rem;
          width: max-content;
          animation: slidePartners 28s linear infinite;
        }

        @keyframes slidePartners {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @media (max-width: 768px) {
          .partnersRow { gap: 1rem; animation-duration: 22s; }
        }
      `}</style>
    </section>
  );
}
