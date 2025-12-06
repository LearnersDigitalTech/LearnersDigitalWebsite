"use client";

import { useRef, useState } from "react";

// Helper function to extract YouTube video ID from URL
const getYouTubeVideoId = (url) => {
  const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

// Helper function to get YouTube thumbnail URL
const getYouTubeThumbnail = (url) => {
  const videoId = getYouTubeVideoId(url);
  return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null;
};

export default function Testimonials() {
  const containerRef = useRef(null);
  const [isAnyPlaying, setIsAnyPlaying] = useState(false);

  const testimonials = [
    {
      id: 1,
      text: "Amazing learning experience with practical exposure.",
      youtubeUrl: "https://www.youtube.com/watch?v=YOUR_TESTIMONIAL_F"
    },
    {
      id: 2,
      text: "Supportive trainers and great mentorship.",
      youtubeUrl: "https://youtu.be/zwLfDoIiBoA"
    },
    {
      id: 3,
      text: "Helpful for placement and interview preparation.",
      youtubeUrl: "https://youtu.be/Rpg69Qh1Ci4"
    },
    {
      id: 4,
      text: "Gained knowledge beyond the classroom.",
      youtubeUrl: "https://youtu.be/PZ7Ced93Vi0"
    },
    {
      id: 5,
      text: "Transformed my career prospects positively.",
      youtubeUrl: "https://youtu.be/qlUtU1v22I4"
    },
    {
      id: 6,
      text: "Boosted my skills and job readiness effectively.",
      youtubeUrl: "https://youtu.be/rRpPh3Anwig"
    },
  ];

  // Double the array for infinite scrolling effect
  const scrollingList = [...testimonials, ...testimonials];

  return (
    <div className="bg-[#e9f6f3ff] py-10 px-4 overflow-hidden">
      <h2 className="text-center text-3xl font-bold text-[#0C1B33]">
        Testimonials
      </h2>

      <p className="text-center max-w-3xl mx-auto text-gray-700 mt-2 mb-8 text-base sm:text-lg">
        Hear directly from our learners about their experience and success
        journeys with our training.
      </p>

      <div className="relative w-full overflow-hidden">
        <div
          ref={containerRef}
          className="flex gap-4 md:gap-6 scroll-animation group touch-pan-x"
        >
          {scrollingList.map((testimonial, index) => {
            const realIndex = index % testimonials.length;
            return (
              <a
                key={`${testimonial.id}-${index}`}
                href={testimonial.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="testimonial-card backdrop-blur-xl bg-white/50 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl cursor-pointer hover:scale-[1.05] min-w-[75%] sm:min-w-[45%] md:min-w-[320px] p-4 block"
              >
                <div className="relative w-full h-52 sm:h-56 rounded-xl overflow-hidden border border-gray-200 shadow-md group">
                  {/* YouTube Auto-Generated Thumbnail */}
                  <img
                    src={getYouTubeThumbnail(testimonial.youtubeUrl)}
                    alt={testimonial.text}
                    className="w-full h-full object-cover"
                  />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all">
                    <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* YouTube Badge */}
                  <div className="absolute bottom-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                    <span>YouTube</span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mt-3 text-center px-2">
                  {testimonial.text}
                </p>
              </a>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes scrollMobile {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes scrollDesktop {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .scroll-animation {
          animation: scrollDesktop 23s linear infinite;
        }

        @media (max-width: 768px) {
          .scroll-animation {
            animation: scrollMobile 25s linear infinite;
          }
        }

        /* Pause the animation while hovered */
        .scroll-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
