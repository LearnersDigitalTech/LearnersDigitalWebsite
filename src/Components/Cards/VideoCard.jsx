"use client";
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

// Helper function to extract YouTube video ID from URL
const getYouTubeVideoId = (url) => {
  if (!url) return null;
  const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

// Helper function to get YouTube thumbnail URL
const getYouTubeThumbnail = (url) => {
  const videoId = getYouTubeVideoId(url);
  return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null;
};

const VideoCard = forwardRef(function VideoCard(
  { src, poster, title = "", subtitle = "", index = 0, isActive = false, youtubeUrl = "" },
  ref
) {
  const internalRef = useRef(null);

  const getVideoEl = () => (ref && ref.current ? ref.current : internalRef.current);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Track play/pause/mute state
  useEffect(() => {
    const v = getVideoEl();
    if (!v) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => setIsPlaying(false);
    const onVolume = () => setIsMuted(v.muted);

    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);
    v.addEventListener("ended", onEnded);
    v.addEventListener("volumechange", onVolume);

    setIsPlaying(!v.paused && !v.ended);
    setIsMuted(v.muted);

    return () => {
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
      v.removeEventListener("ended", onEnded);
      v.removeEventListener("volumechange", onVolume);
    };
  }, [src]);

  const togglePlay = useCallback(() => {
    const v = getVideoEl();
    if (!v) return;

    if (v.paused || v.ended) v.play().catch(() => { });
    else v.pause();
  }, []);

  const toggleMute = useCallback(() => {
    const v = getVideoEl();
    if (!v) return;

    v.muted = !v.muted;
    if (!v.paused) v.play().catch(() => { }); // keep playing if toggled while playing
  }, []);

  // Fullscreen handler (robust with fallbacks)
  const openFullscreen = useCallback(
    (e) => {
      // stop click from bubbling to the video (which toggles play)
      if (e && e.stopPropagation) e.stopPropagation();

      const v = getVideoEl();
      if (!v) return;

      // Try video element first
      const request =
        v.requestFullscreen ||
        v.webkitRequestFullscreen ||
        v.mozRequestFullScreen ||
        v.msRequestFullscreen;

      if (request) {
        try {
          // Optional: unmute when entering fullscreen (comment out if undesired)
          // v.muted = false;

          request.call(v);
          return;
        } catch (err) {
          // fall through to parent fallback
        }
      }

      // Fallback: try parent container (some browsers prefer container)
      const parent = v.parentElement || v;
      const parentRequest =
        parent.requestFullscreen ||
        parent.webkitRequestFullscreen ||
        parent.mozRequestFullScreen ||
        parent.msRequestFullscreen;

      if (parentRequest) {
        try {
          // parent may contain controls/overlay
          parentRequest.call(parent);
        } catch (err) {
          // last resort: open source in new tab
          window.open(src, "_blank");
        }
      } else {
        // last resort: open source in new tab
        window.open(src, "_blank");
      }
    },
    [src, ref]
  );

  return (
    <div
      className={
        "rounded-xl shadow-md transition-all flex flex-col gap-3 w-full " +
        (isActive ? "scale-100" : "scale-95 opacity-90")
      }
    >
      {/* TITLE + SUBTITLE ABOVE VIDEO - Clickable to YouTube */}
      {youtubeUrl ? (
        <a
          href={youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-1 hover:opacity-80 transition-opacity"
        >
          <div className="text-lg font-semibold text-black flex items-center gap-2">
            {title}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#FF0000" title="Watch on YouTube">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </div>
          {subtitle && (
            <div className="text-sm text-gray-600 mt-1 leading-snug">{subtitle}</div>
          )}
        </a>
      ) : (
        <div className="px-1">
          <div className="text-lg font-semibold text-black">{title}</div>
          {subtitle && (
            <div className="text-sm text-gray-600 mt-1 leading-snug">{subtitle}</div>
          )}
        </div>
      )}

      {/* VIDEO - Click to open on YouTube */}
      {youtubeUrl ? (
        <a
          href={youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-full rounded-xl overflow-hidden block group cursor-pointer"
        >
          {/* Video/Poster Image */}
          <div className="relative w-full h-[200px] bg-gray-200">
            {poster && (
              <img
                src={poster}
                alt={title}
                className="w-full h-full object-cover"
              />
            )}

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-all">
              <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>

            {/* ACTIVE BADGE */}
            <div className="absolute top-3 left-3 bg-white/90 text-xs px-2 py-0.5 rounded-md">
              {isActive ? "Active" : ``}
            </div>

            {/* YouTube Badge */}
            <div className="absolute bottom-3 right-3 bg-red-600 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              <span>Watch on YouTube</span>
            </div>
          </div>
        </a>
      ) : (
        <div className="relative w-full rounded-xl overflow-hidden">
          <video
            ref={(el) => {
              internalRef.current = el;
              if (ref && typeof ref === "object") ref.current = el;
            }}
            src={src}
            poster={poster}
            playsInline
            preload="metadata"
            muted={isMuted}
            className="w-full h-[200px] object-cover bg-gray-200 cursor-pointer"
            onClick={togglePlay}
          />

          {/* PLAY/PAUSE Overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <button
              onClick={(e) => {
                e.stopPropagation();
                togglePlay();
              }}
              className="pointer-events-auto w-[120px] h-[70px] rounded-md flex items-center justify-center"
              style={{ cursor: "pointer" }}
            >
              {isPlaying ? (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
                  <rect x="6" y="5" width="4" height="14" rx="1" />
                  <rect x="14" y="5" width="4" height="14" rx="1" />
                </svg>
              ) : (
                <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
                  <path d="M5 3v18l15-9L5 3z" />
                </svg>
              )}
            </button>
          </div>

          {/* ACTIVE BADGE */}
          <div className="absolute top-3 left-3 bg-white/90 text-xs px-2 py-0.5 rounded-md">
            {isActive ? "Active" : ``}
          </div>

          {/* MUTE BUTTON */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleMute();
            }}
            className="absolute right-3 bottom-3 bg-white/80 rounded-full p-1.5"
          >
            {isMuted ? "🔈" : "🔊"}
          </button>
        </div>
      )}
    </div>
  );
});

export default VideoCard;
