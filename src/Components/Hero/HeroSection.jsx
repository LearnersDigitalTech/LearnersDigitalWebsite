"use client";

import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

function MainHeroSection() {
  const images = [
    "/Hero/meet.jpg",
    "/Hero/Abacus.png",
    "/Hero/Onyx1.jpg",
  ];

  const taglines = [
    "Acquire, Train &\nDeploy\nFuture-Ready IT Talent",
    "Empower, Educate & Elevate\nFuture-Ready IT Professionals",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  // IMAGE CAROUSEL
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((p) => (p + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  // TYPEWRITER
  useEffect(() => {
    const currentTagline = taglines[taglineIndex] ?? "";
    let timer;

    if (isTyping) {
      if (charIndex < currentTagline.length) {
        timer = setTimeout(() => {
          setDisplayedText((prev) => prev + currentTagline[charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 45);
      } else {
        timer = setTimeout(() => setIsTyping(false), 1500);
      }
    } else {
      // pause briefly before switching to next tagline
      timer = setTimeout(() => {
        setTaglineIndex((p) => (p + 1) % taglines.length);
        setDisplayedText("");
        setCharIndex(0);
        setIsTyping(true);
      }, 300);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isTyping, taglineIndex, taglines]);

  const renderDisplayedText = (t) => {
    const lines = t.split("\n");
    return lines.map((line, i) => (
      <React.Fragment key={i}>
        {(taglineIndex === 0 && i === 2) || (taglineIndex === 1 && i === 1) ? (
          <span className="text-[#0ea5e9]">{line}</span>
        ) : (
          line
        )}
        {i < lines.length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <section className="flex justify-center items-center min-h-[85vh] bg-[#e3e8f1ff] px-4 sm:px-6 md:px-10 lg:px-20 xl:px-28 overflow-hidden py-10 md:py-14">
      <div className="w-full max-w-[1500px] grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* LEFT  */}
        <div className="max-w-3xl flex flex-col items-start">
          <div className="inline-block bg-white px-4 py-1.5 rounded-full shadow-sm mb-5 text-[11px] sm:text-[12px] font-extrabold text-[#0ea5e9] uppercase tracking-wider border border-[#e0fef2ff]">
            An initiative of Learners
          </div>

          <div className="min-h-[160px] sm:min-h-[200px] md:min-h-[250px] lg:min-h-[280px] mb-6">
            <h1 className="text-[1.9rem] sm:text-[2.4rem] md:text-[3rem] lg:text-[3.6rem] xl:text-[4rem] font-extrabold leading-[1.15] text-[#0f172a] whitespace-pre-wrap break-words grid">
              {/* Ghost text to reserve space */}
              {taglines.map((tagline, idx) => (
                <div key={idx} className="col-start-1 row-start-1 invisible select-none" aria-hidden="true">
                  {tagline.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < tagline.split("\n").length - 1 && <br />}
                    </React.Fragment>
                  ))}
                  <span>|</span>
                </div>
              ))}

              {/* Actual visible typewriter text */}
              <div className="col-start-1 row-start-1">
                {renderDisplayedText(displayedText)}
                <span className="animate-pulse text-[#0284c7]">|</span>
              </div>
            </h1>
          </div>

          <p className="text-[0.95rem] sm:text-[1rem] md:text-[1.1rem] text-[#475569] leading-relaxed mb-8 max-w-[95%]">
            We bridge the gap between academics and industry by preparing students
            for the workplace and helping companies hire trained professionals!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
            <Link href="/Corporate" className="inline-flex items-center justify-center gap-3 bg-[#0f172a] text-white px-7 sm:px-8 py-3 sm:py-4 rounded-[14px] text-[16px] sm:text-[18px] font-semibold shadow-md transition hover:scale-105">
              
              <span>For Corporates</span>
            </Link>

            <Link href="/University" className="inline-flex items-center justify-center gap-3 bg-[#0f172a] text-white px-7 sm:px-8 py-3 sm:py-4 rounded-[14px] text-[16px] sm:text-[18px] font-semibold shadow-md transition hover:scale-105">
             
              <span>For Universities</span>
            </Link>
          </div>
        </div>

        {/* RIGHT: IMAGES */}
        <div className="relative w-full h-[260px] sm:h-[350px] md:h-[420px] lg:h-[500px] xl:h-[560px] rounded-[20px] overflow-hidden shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] bg-white">
          {images.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`}
            >
              <Image src={src} alt={`Hero ${index + 1}`} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority={index === 0} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const HeroSection = dynamic(() => Promise.resolve(MainHeroSection), { ssr: false });
export default HeroSection;
