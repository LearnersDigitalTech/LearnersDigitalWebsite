"use client";
import { useEffect, useRef, useState } from "react";

export default function HeroStats() {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const stats = [
    { label: "Trained and Placed", value: 4000, suffix: "+" },
    { label: "Hiring Partners", value: 7, suffix: "+" },
    { label: "University Partners", value: 20, suffix: "+" },
  ];

  useEffect(() => {
    if (!sectionRef.current || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            startCounting();
            setHasAnimated(true);
            observer.unobserve(sectionRef.current);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [hasAnimated]);

  const startCounting = () => {
    if (!sectionRef.current) return;

    const elements = sectionRef.current.querySelectorAll(".count-number");

    elements.forEach((el) => {
      const target = parseInt(el.getAttribute("data-target") || "0", 10);
      const duration = 1500;
      const interval = 20;
      const steps = Math.max(1, Math.floor(duration / interval));
      const increment = Math.max(1, Math.ceil(target / steps));

      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        el.textContent = current.toString();
      }, interval);
    });
  };

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#0E1525] py-20 px-6 flex justify-center"
    >
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Side: Heading & Subheading */}
        <div className="max-w-lg text-center lg:text-left">
          <h2 className="text-4xl font-extrabold text-[#0ea5e9] mb-4">
            Our Impact
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Empowering careers and transforming industries through world-class training and placement programs.
          </p>
        </div>

        {/* Right Side: Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full lg:w-auto">
          {stats.map((item) => (
            <div
              key={item.label}
              className="bg-[#121A29] rounded-xl p-6 text-center border border-white/10 hover:border-[#0ea5e9]/50 transition-colors duration-300"
            >
              <div className="flex items-baseline justify-center gap-1 mb-3">
                <span
                  className="count-number text-5xl font-extrabold text-[#5285f2]"
                  data-target={item.value}
                >
                  0
                </span>
                <span className="text-3xl font-extrabold text-[#5285f2]">
                  {item.suffix}
                </span>
              </div>

              <p className="text-lg font-semibold text-white mb-4">
                {item.label}
              </p>

              <div className="h-1 w-16 bg-[#AED57A] rounded-full mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}