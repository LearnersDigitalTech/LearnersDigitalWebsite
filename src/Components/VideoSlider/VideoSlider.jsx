"use client";
import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import VideoCard from "../Cards/VideoCard";

export default function VideoSlider({ videos = [] }) {
  const GAP = 24; // px gap between cards
  const containerRef = useRef(null);
  const autoplayTimerRef = useRef(null);

  const [visible, setVisible] = useState(3);
  const [cardW, setCardW] = useState(360);
  const [startIdx, setStartIdx] = useState(0);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);

  // center index
  const centerIdx = Math.min(startIdx + Math.floor(visible / 2), Math.max(0, videos.length - 1));

  // refs for video elements
  const videoRefs = useRef([]);
  videoRefs.current = videos.map((_, i) => videoRefs.current[i] ?? React.createRef());

  // responsive visible setting
  useEffect(() => {
    const updateVisible = () => {
      const w = typeof window !== "undefined" ? window.innerWidth : 1200;
      if (w >= 1024) setVisible(3);
      else if (w >= 640) setVisible(2);
      else setVisible(1);
    };
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  // compute sizes and clamp startIdx; use floor to avoid subpixel overlap
  useLayoutEffect(() => {
    const compute = () => {
      const el = containerRef.current;
      if (!el) return;
      const viewport = el.clientWidth;
      const totalGap = GAP * (visible - 1);
      // floor to avoid fractional widths which cause overlap on some devices
      const w = Math.max(160, Math.floor((viewport - totalGap) / visible));
      setCardW(w);

      // clamp start index so last visible window fits exactly
      setStartIdx((s) => Math.min(s, Math.max(0, Math.max(0, videos.length - visible))));
    };

    compute();
    const ro = new ResizeObserver(compute);
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener("resize", compute);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", compute);
    };
  }, [visible, videos.length]);

  // helper: play only center video
  const playCenterOnly = (center) => {
    videoRefs.current.forEach((r, i) => {
      const v = r?.current;
      if (!v) return;
      try {
        if (i === center) {
          v.muted = true;
          v.playsInline = true;
          v.play().catch(() => { });
        } else {
          v.pause();
        }
      } catch (e) { }
    });
  };

  // autoplay initial center
  useEffect(() => {
    setStartIdx((s) => Math.min(s, Math.max(0, videos.length - visible)));
    const t = setTimeout(() => playCenterOnly(centerIdx), 200);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videos.length, visible]);

  useEffect(() => {
    playCenterOnly(centerIdx);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startIdx]);

  // manual play handler recenters
  useEffect(() => {
    const handlers = [];
    videoRefs.current.forEach((r, i) => {
      const v = r?.current;
      if (!v) return;
      const onPlay = () => {
        videoRefs.current.forEach((other, j) => {
          const ov = other?.current;
          if (ov && j !== i) ov.pause();
        });

        let newStart = i - Math.floor(visible / 2);
        newStart = Math.max(0, Math.min(newStart, Math.max(0, videos.length - visible)));
        setStartIdx(newStart);
      };
      v.addEventListener("play", onPlay);
      handlers.push(() => v.removeEventListener("play", onPlay));
    });
    return () => handlers.forEach((fn) => fn());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videos.length, visible]);

  // autoplay functionality
  useEffect(() => {
    if (!autoplayEnabled || videos.length === 0) return;

    // Clear existing timer
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
    }

    // Set up autoplay timer - advance every 5 seconds
    autoplayTimerRef.current = setInterval(() => {
      setStartIdx((current) => {
        const maxStart = Math.max(0, videos.length - visible);
        // Loop back to start when reaching the end
        return current >= maxStart ? 0 : current + 1;
      });
    }, 5000);

    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [autoplayEnabled, videos.length, visible]);

  // navigation - circular/infinite loop
  const maxStart = Math.max(0, videos.length - visible);
  const prev = () => {
    setAutoplayEnabled(false); // Disable autoplay on manual interaction
    setStartIdx((s) => s === 0 ? maxStart : s - 1); // Loop to end when at start
  };
  const next = () => {
    setAutoplayEnabled(false); // Disable autoplay on manual interaction
    setStartIdx((s) => s >= maxStart ? 0 : s + 1); // Loop to start when at end
  };

  // compute widths & translate with clamp & rounding to avoid subpixel issues
  const viewportWidth = containerRef.current ? containerRef.current.clientWidth : 0;
  const trackWidth = videos.length * cardW + Math.max(0, videos.length - 1) * GAP;
  // desired translate to place startIdx at left of viewport (we keep track left aligned)
  const desiredTranslate = -Math.round(startIdx * (cardW + GAP));
  // clamp so track never moves beyond the right edge (no part of last card outside)
  const minTranslate = Math.min(0, viewportWidth - trackWidth); // negative when track is wider than viewport
  const translateX = Math.max(minTranslate, Math.min(0, desiredTranslate));

  return (
    <section className="w-full py-8">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="mb-6">
          <h3 className="text-4xl font-Roboto-semibold text-[#0ea5e9] text-center">Work in Actions</h3>
          <p
            className="mt-2 mb-6 mx-auto"
            style={{ maxWidth: 720, textAlign: "center", color: "rgba(34,34,34,0.75)" }}
          >
            Explore our work in action through quick demo videos, showcasing the features, workflows,
            and user experience in real-time.
          </p>
        </div>

        <div className="relative">
          {/* left control */}
          <button
            onClick={prev}
            disabled={startIdx === 0}
            aria-label="Previous"
            className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all disabled:opacity-40 hover:scale-110"
            style={{ border: "2px solid rgba(14,165,233,0.3)", zIndex: 20 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M15 6L9 12L15 18" stroke="#0ea5e9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* right control */}
          <button
            onClick={next}
            disabled={startIdx >= maxStart}
            aria-label="Next"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all disabled:opacity-40 hover:scale-110"
            style={{ border: "2px solid rgba(14,165,233,0.3)", zIndex: 20 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M9 6L15 12L9 18" stroke="#0ea5e9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div
            ref={containerRef}
            className="overflow-hidden mx-auto relative"
            style={{ width: "100%", boxSizing: "border-box", padding: 0 }}
          >

            {/* track container (explicit width, no horizontal padding) */}
            <div
              className="flex items-stretch"
              style={{
                gap: GAP,
                width: trackWidth,
                transform: `translateX(${translateX}px)`,
                transition: "transform 360ms cubic-bezier(.22,.9,.33,1)",
                padding: "8px 0",
                boxSizing: "content-box",
              }}
            >
              {videos.map((v, i) => (
                <div key={v.id ?? i} style={{ width: cardW, flex: `0 0 ${cardW}px` }}>
                  <VideoCard
                    ref={videoRefs.current[i]}
                    src={v.src}
                    poster={v.poster}
                    title={v.title}
                    subtitle={v.subtitle}
                    youtubeUrl={v.youtubeUrl}
                    index={i}
                    isActive={i === centerIdx}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
