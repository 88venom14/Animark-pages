import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Film } from "lucide-react";
import type { Episode } from "./EpisodeSelector";

interface VideoPlayerProps {
  episode: Episode;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ episode }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    setVideoLoaded(false);
    setVideoError(false);
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [episode.id]);

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
    setVideoError(false);
  };

  const handleVideoError = () => {
    setVideoError(true);
    setVideoLoaded(false);
  };

  const getVideoSource = () => {
    if (episode.video_url && episode.video_url.trim() !== "") {
      return episode.video_url;
    }
    return `/episodes/episode-${episode.id}.mp4`;
  };

  const getPosterSource = () => {
    if (episode.poster_url && episode.poster_url.trim() !== "") {
      if (episode.poster_url.match(/\.(jpg|jpeg|png|webp|gif)/i)) {
        return episode.poster_url;
      }
    }
    return `/episodes/thumbnails/ep${episode.id}.jpg`;
  };

  const videoUrl = getVideoSource();
  const posterUrl = getPosterSource();
  const isIframe = episode.video_type === "iframe";
  const showPlaceholder = !isIframe && (!videoLoaded || videoError);

  const getIframeSrc = (url: string) => {
    if (url.includes("vkvideo.ru/video-")) {
      const match = url.match(/video(-?\d+)_(\d+)/);
      if (match) {
        return `https://vk.com/video_ext.php?oid=${match[1]}&id=${match[2]}&hd=2`;
      }
    }
    return url;
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="w-full px-2"
      style={{ maxWidth: "min(860px, 90vw)", margin: "0 auto" }}
      id="player"
    >
      <motion.div
        key={`bar-${episode.id}`}
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.35 }}
        className="flex items-center gap-2 mb-3 px-1"
      >
        <div className="pulse-dot w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: "var(--color-primary)" }} />
        <span
          className="text-sm font-semibold"
          style={{ color: "var(--color-primary)", fontFamily: "var(--font-body)" }}
        >
          EP {String(episode.id).padStart(2, "0")}
        </span>
        <span
          className="text-sm"
          style={{ color: "rgba(61,43,61,0.5)", fontFamily: "var(--font-body)" }}
        >
          ·
        </span>
        <span
          className="text-sm font-medium truncate"
          style={{ color: "var(--color-text)", fontFamily: "var(--font-body)" }}
        >
          {episode.title}
        </span>
      </motion.div>

      <div
        className="glass player-shadow w-full overflow-hidden"
        style={{
          borderRadius: "20px",
          border: "1.5px solid var(--color-primary)",
        }}
      >
        <div className="relative w-full" style={{ aspectRatio: "16/9", background: "#1a0f1a" }}>
          {isIframe && videoUrl ? (
            <iframe
              key={episode.id}
              src={getIframeSrc(videoUrl)}
              className="w-full h-full"
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
              allowFullScreen
              frameBorder="0"
              title={episode.title}
            />
          ) : (
            <>
              <video
                key={episode.id}
                ref={videoRef}
                className="w-full h-full"
                controls
                preload="metadata"
                poster={posterUrl}
                style={{ display: showPlaceholder ? "none" : "block" }}
                onLoadedData={handleVideoLoaded}
                onError={handleVideoError}
              >
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {showPlaceholder && (
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, rgba(26,15,26,0.92) 0%, rgba(40,20,50,0.95) 100%)",
                    zIndex: 1,
                  }}
                >
                  <div className="absolute inset-0 opacity-10 flex flex-wrap gap-8 p-8 overflow-hidden">
                    {Array.from({ length: 24 }).map((_, i) => (
                      <span key={i} className="text-2xl" style={{ color: "var(--color-primary)" }}>🌸</span>
                    ))}
                  </div>

                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10 flex flex-col items-center gap-4"
                  >
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center"
                      style={{
                        background: "radial-gradient(circle, rgba(244,167,192,0.2), rgba(244,167,192,0.05))",
                        border: "2px solid rgba(244,167,192,0.3)",
                        boxShadow: "0 0 30px rgba(244,167,192,0.2)",
                      }}
                    >
                      <Film size={38} style={{ color: "var(--color-primary)", opacity: 0.8 }} />
                    </div>

                    <div className="text-center">
                      <p
                        className="font-display text-lg font-semibold mb-1"
                        style={{ fontFamily: "var(--font-display)", color: "var(--color-accent)" }}
                      >
                        Episode {episode.id}
                      </p>
                      <p
                        className="text-sm mb-3"
                        style={{ color: "rgba(247,214,224,0.7)", fontFamily: "var(--font-body)" }}
                      >
                        {episode.title}
                      </p>
                      {videoError ? (
                        <p className="text-xs" style={{ color: "rgba(247,214,224,0.55)", fontFamily: "var(--font-body)" }}>
                          Video unavailable or failed to load
                        </p>
                      ) : (
                        <p className="text-xs" style={{ color: "rgba(247,214,224,0.45)", fontFamily: "var(--font-body)" }}>
                          Loading video...
                        </p>
                      )}
                    </div>

                    <p
                      className="font-russian text-xl mt-2"
                      style={{ fontFamily: "var(--font-russian)", color: "rgba(244,167,192,0.6)" }}
                    >
                      «Смотри со мной»
                    </p>
                  </motion.div>

                  <div
                    className="absolute bottom-0 left-0 right-0 h-1"
                    style={{ background: "linear-gradient(to right, var(--color-primary), var(--color-secondary))" }}
                  />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default VideoPlayer;
