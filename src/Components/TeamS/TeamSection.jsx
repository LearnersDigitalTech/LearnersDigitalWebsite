"use client";

import { useState, useEffect, useRef } from "react";
import { FaBullseye, FaLightbulb, FaGlobe, FaLinkedinIn, FaTwitter } from "react-icons/fa";

// --- Animation Helper Hook ---
const useIntersectionObserver = (options = {}) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!elementRef.current || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      options
    );

    observer.observe(elementRef.current);
    return () => observer.disconnect();
    // options intentionally not in deps to avoid re-creating observer frequently
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return [elementRef, isVisible];
};

// --- Animated Section Component ---
const FadeIn = ({ children, delay = 0, direction = "up", className = "" }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const getTransformClass = () => {
    switch (direction) {
      case "up":
        return "translate-y-10";
      case "down":
        return "-translate-y-10";
      case "left":
        return "translate-x-10";
      case "right":
        return "-translate-x-10";
      default:
        return "translate-y-10";
    }
  };

  const hiddenClasses = `opacity-0 ${getTransformClass()}`;
  const visibleClasses = "opacity-100 translate-y-0 translate-x-0";

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${isVisible ? visibleClasses : hiddenClasses} ${className}`}
      style={{ transitionDelay: `${delay}ms`, transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
    >
      {children}
    </div>
  );
};

// --- Team Card Component (Isolated for Hover Stability) ---
const TeamCard = ({ member }) => {
  return (
    <div className="relative h-[320px] w-[260px] flex-shrink-0 overflow-hidden rounded-2xl cursor-pointer shadow-lg group mx-4">
      {/* Image */}
      <img
        src={member.img}
        alt={member.name}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

      {/* Content Reveal */}
      <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <h4 className="text-xl font-bold text-white mb-1">{member.name}</h4>
        <p className="text-[#0f8ddf] font-medium text-sm mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 transform translate-y-4 group-hover:translate-y-0">
          {member.role}
        </p>

        {/* Social Icons */}
        <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
          {/* LinkedIn – clickable if URL exists */}
          {member.linkedin ? (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} LinkedIn profile`}
              className="p-2 bg-white/10 rounded-full hover:bg-[#0f8ddf] transition-colors text-white text-sm inline-flex items-center justify-center"
            >
              <FaLinkedinIn />
            </a>
          ) : (
            <div className="p-2 bg-white/10 rounded-full hover:bg-[#0f8ddf] transition-colors text-white text-sm">
              <FaLinkedinIn />
            </div>
          )}

          {/* Twitter unchanged */}
          <div className="p-2 bg-white/10 rounded-full hover:bg-[#0f8ddf] transition-colors text-white text-sm">
            <FaTwitter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function AboutSection() {
  // Team Data
  const teamMembers = [
    {
      name: "Murali Mohan Konareddy",
      role: "Founder",
      img: "/Team/img1.png",
      linkedin: "https://www.linkedin.com/in/murali-konareddy-58670728/",
    },
    {
      name: "Sujay Joseph Devadatta",
      role: "Lead Mentor",
      img: "/Team/Sujay.png",
      linkedin: "https://www.linkedin.com/in/sujaydevadatta2660",
    },
    {
      name: "Rishab Verma",
      role: "Trainer",
      img: "/Team/img2.jpg",
      linkedin: "https://www.linkedin.com/in/rishabh-verma1996",
    },
    {
      name: "Krati Shrivastava",
      role: "Trainer",
      img: "/Team/img3.jpg",
      linkedin: "https://www.linkedin.com/in/krati-shrivastava",
    },
    {
      name: "Ravi K R",
      role: "Trainer",
      img: "/Team/img4.jpg",
      // no LinkedIn – icon stays non-clickable
    },
    {
      name: "Sanjeeva S Rao",
      role: "Trainer",
      img: "/Team/Sanjeeva.jpeg",
      linkedin: "https://www.linkedin.com/in/sanjeeva-rao64",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-slate-50" style={{ fontFamily: "'Roboto', sans-serif" }}>
      {/* --- HERO SECTION --- */}
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#0f172a]">
        {/* Animated Background */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0f8ddf] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#e63950] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob animation-delay-2000" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <FadeIn direction="down">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Shaping the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f8ddf] to-[#60a5fa]">Future</span>{" "}
              of Talent
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Bridging the gap between academia and industry with world-class education and research leadership.
            </p>
          </FadeIn>
        </div>

        {/* Curved Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            className="relative block w-[calc(100%+1.3px)] h-[60px]"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-slate-50"
            />
          </svg>
        </div>
      </div>

      {/* --- rest of your component unchanged (story, mission, what we do, achievements, team scroller, styles) --- */}
      {/* ... keep everything else exactly as you already have it ... */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-32">
              {/* --- STORY & FOUNDER --- */}
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <FadeIn direction="right">
                  <div className="relative">
                    <div className="absolute -left-4 -top-4 w-24 h-24 bg-blue-50 rounded-full -z-10"></div>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8">Our <span className="text-[#0f8ddf]">Story</span></h2>
                    <div className="space-y-6 text-lg text-slate-600 leading-relaxed text-justify">
                      <p>
                        Learners Digital was founded by <span className="text-[#0f8ddf] font-semibold">Murali Konareddy</span>, an <span className="text-[#0f8ddf] font-semibold">IIT Kanpur alumnus</span> and former senior professional at <span className="text-[#0f8ddf] font-semibold">Infosys</span>, together with a team of experienced colleagues from the company. The founding team brought a unique blend of delivery expertise and <span className="text-[#0f8ddf] font-semibold">education & research leadership</span>, enabling Learners Digital to bridge academia and industry.
                      </p>
                      <p>
                        Murali played a pivotal role in establishing the <span className="text-[#0f8ddf] font-semibold">Infosys China Education Center</span> in partnership with the Chinese Government — an achievement that earned him recognition as an <span className="text-[#0f8ddf] font-semibold">Honorary Citizen of China</span>.
                      </p>
                    </div>
                  </div>
                </FadeIn>
      
                <FadeIn direction="left" delay={200}>
                  <div className="bg-white p-8 rounded-3xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] border border-slate-100 relative overflow-hidden group hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.12)] transition-all duration-500">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Today's Impact</h3>
                    <p className="text-lg text-slate-600 leading-relaxed text-justify mb-6">
                      Today, <span className="text-[#0f8ddf] font-semibold">Learners Digital collaborates with corporates and academic institutions</span> to bridge the industry–academia gap. In the past three years alone, we have recruited and trained over <span className="text-[#0f8ddf] font-semibold">3,000 engineers</span> for our clients.
                    </p>
                    <blockquote className="border-l-4 border-[#0f8ddf] pl-4 italic text-slate-700">
                      "Our mission is simple yet powerful: to nurture independent learners, strengthen fundamentals, and empower individuals to grow into leaders who shape the future."
                    </blockquote>
                  </div>
                </FadeIn>
              </div>
      
              {/* --- MISSION & VISION (New Compact Design) --- */}
              <div className="max-w-5xl mx-auto !mt-16">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Vision */}
                  <FadeIn delay={0} className="h-full">
                    <div className="group h-full bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/20 hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 flex flex-col items-start">
                      <div className="mb-4 p-3 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 group-hover:from-[#1588d8] group-hover:to-[#1588d8] transition-colors duration-300">
                        <FaBullseye className="text-[#1588d8] text-2xl group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">Vision</h3>
                      <p className="text-base text-slate-600 leading-relaxed">
                        To build a globally trusted ecosystem where every learner can connect with opportunity and develop world-class skills.
                      </p>
                    </div>
                  </FadeIn>
      
                  {/* Mission */}
                  <FadeIn delay={100} className="h-full">
                    <div className="group h-full bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/20 hover:shadow-sky-500/10 hover:-translate-y-1 transition-all duration-300 flex flex-col items-start">
                      <div className="mb-4 p-3 rounded-xl bg-gradient-to-br from-sky-50 to-sky-100 group-hover:from-[#10a7ec] group-hover:to-[#10a7ec] transition-colors duration-300">
                        <FaLightbulb className="text-[#10a7ec] text-2xl group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">Mission</h3>
                      <p className="text-base text-slate-600 leading-relaxed">
                        To empower individuals through validated learning, practical experience, and industry mentorship.
                      </p>
                    </div>
                  </FadeIn>
                </div>
              </div>
      
              {/* --- WHAT WE DO --- */}
              <FadeIn className="!mt-16">
                <div className="relative bg-[#0f172a] rounded-[2.5rem] p-8 md:p-16 overflow-hidden text-white">
                  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0f8ddf] rounded-full mix-blend-overlay filter blur-[100px] opacity-20 animate-pulse"></div>
                  <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#e63950] rounded-full mix-blend-overlay filter blur-[100px] opacity-20 animate-pulse animation-delay-1000"></div>
      
                  <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-4">
                      <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                        <FaGlobe className="text-[#0f8ddf]" />
                        <span className="text-sm font-medium">Global Impact</span>
                      </div>
                      <h3 className="text-4xl font-bold mb-6">What We Do</h3>
                      <div className="h-1 w-20 bg-[#0f8ddf] rounded-full"></div>
                    </div>
                    <div className="lg:col-span-8 space-y-6 text-lg text-slate-300 leading-relaxed text-justify">
                      <p>
                        We specialize in acquiring, training, and deploying future-ready IT talent through a completely structured, industry-validated learning and workforce development model. Our purpose is to ensure that every learner becomes employable and every organization gains dependable, project-ready professionals who can contribute from the very first day.
                      </p>
                      <p>
                        Today, the technology ecosystem is evolving faster than ever yet companies continue to struggle to find skilled talent, and students continue to graduate without industry-ready skills. We exist to bridge this critical gap by empowering learners with practical, modern, and job-oriented technical skills.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
      
              {/* --- ACHIEVEMENTS --- */}
              <div className="!mt-16">
                <FadeIn>
                  <div className="text-center mb-16">
                    <span className="text-5xl mb-4 block">🏆</span>
                    <h3 className="text-4xl font-bold text-slate-900 mb-6">Achievements & Contributions</h3>
                    <p className="max-w-3xl mx-auto text-lg text-slate-600">
                      Our achievements are not just numbers they represent lives changed, companies empowered, and careers built.
                    </p>
                  </div>
                </FadeIn>
      
                <div className="grid md:grid-cols-2 gap-6">
                  {achievements.map((item, i) => (
                    <FadeIn key={i} delay={i * 100}>
                      <div className={`bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border-l-4 ${item.color} h-full group`}>
                        <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0f8ddf] transition-colors">{item.title}</h4>
                        <p className="text-slate-600">{item.desc}</p>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
      
              {/* --- OUR TEAM (Integrated) --- */}
              <div className="!mt-16">
                <FadeIn>
                  <div className="text-center mb-16">
                    <h3 className="text-4xl font-bold text-slate-900 mb-4">
                      Meet Our <span className="text-[#0f8ddf]">Team</span>
                    </h3>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                      Vision-driven leaders and passionate educators shaping the future of talent.
                    </p>
                  </div>
                </FadeIn>
      
                {/* Infinite Scroll Container (FIXED) */}
                <div className="relative w-full overflow-hidden" style={{ WebkitMaskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)" }}>
                  <div className="flex flex-nowrap w-max animate-scroll hover:[animation-play-state:paused] py-8">
                    {/* First set */}
                    {teamMembers.map((member, idx) => (
                      <TeamCard key={`set1-${member.name}-${idx}`} member={member} />
                    ))}
                    {/* Duplicate set for infinite loop */}
                    {teamMembers.map((member, idx) => (
                      <TeamCard key={`set2-${member.name}-${idx}`} member={member} />
                    ))}
                  </div>
                </div>
      
                <div className="flex justify-center mt-16">
                  <button className="px-10 py-4 rounded-full font-bold text-white text-lg shadow-lg shadow-blue-500/30 bg-gradient-to-r from-[#0f8ddf] to-[#0077c8] hover:scale-105 hover:shadow-blue-500/50 transition-all duration-300">
                    Join Our Team
                  </button>
                </div>
              </div>
            </div>
    </section>
  );
}
