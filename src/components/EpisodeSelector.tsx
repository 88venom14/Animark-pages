import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export interface Episode {
  id: number;
  title: string;
  video_url?: string;
  video_type?: string;
  poster_url?: string;
  anime_title?: string;
}

interface EpisodeSelectorProps {
  episodes: Episode[];
  currentEpisode: number;
  onSelectEpisode: (id: number) => void;
}

const EpisodeCard: React.FC<{
  episode: Episode;
  isActive: boolean;
  onClick: () => void;
  index: number;
}> = ({ episode, isActive, onClick, index }) => {
  return (
    <motion.div
      className="episode-card flex-shrink-0 rounded-2xl overflow-hidden glass"
      style={{
        width: "140px",
        border: isActive
          ? "2px solid var(--color-primary)"
          : "1.5px solid rgba(244,167,192,0.25)",
        background: "var(--color-card)",
      }}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      whileHover={{ scale: 1.04, y: -3 }}
      whileTap={{ scale: 0.97 }}
      role="button"
      aria-label={`Episode ${episode.id}: ${episode.title}`}
      aria-pressed={isActive}
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onClick(); }}
    >
      <div
        className="relative w-full overflow-hidden rounded-2xl"
        style={{
          height: "100px",
          background: isActive
            ? "linear-gradient(135deg, rgba(244,167,192,0.25), rgba(168,200,240,0.25))"
            : "linear-gradient(135deg, rgba(247,214,224,0.1), rgba(232,201,126,0.08))",
          borderBottom: isActive
            ? "none"
            : "1px solid rgba(244,167,192,0.15)",
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-0.5">
          <span
            className="font-display text-3xl font-bold"
            style={{
              fontFamily: "var(--font-display)",
              color: isActive ? "var(--color-primary)" : "var(--color-text)",
              opacity: isActive ? 1 : 0.6,
              textShadow: isActive ? "0 2px 8px rgba(244,167,192,0.4)" : "none",
            }}
          >
            {String(episode.id).padStart(2, "0")}
          </span>
          <span
            className="text-[9px] font-semibold tracking-widest uppercase"
            style={{
              fontFamily: "var(--font-body)",
              color: isActive ? "var(--color-primary)" : "rgba(61,43,61,0.35)",
            }}
          >
            EPISODE
          </span>
        </div>
      </div>

      <div className="p-2.5">
        <p
          className="text-xs font-semibold leading-snug"
          style={{
            fontFamily: "var(--font-body)",
            color: isActive ? "var(--color-primary)" : "var(--color-text)",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            minHeight: "2.4em",
          }}
        >
          {episode.title}
        </p>
        {isActive && (
          <div className="flex items-center gap-1 mt-1.5">
            <CheckCircle2 size={10} style={{ color: "var(--color-primary)" }} />
            <span
              className="text-[9px] font-semibold"
              style={{ color: "var(--color-primary)", fontFamily: "var(--font-body)" }}
            >
              Now Playing
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const EpisodeSelector: React.FC<EpisodeSelectorProps> = ({
  episodes,
  currentEpisode,
  onSelectEpisode,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      const activeEl = scrollRef.current.querySelector('[aria-pressed="true"]') as HTMLElement;
      if (activeEl) {
        activeEl.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    }
  }, [currentEpisode]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="w-full px-2"
      style={{ maxWidth: "min(860px, 90vw)", margin: "0 auto" }}
    >
      <div className="flex items-center gap-3 mb-4 px-1">
        <h2
          className="font-display text-xl font-semibold"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
        >
          Episodes
        </h2>
        <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, rgba(244,167,192,0.5), transparent)" }} />
        <span
          className="text-sm font-medium font-russian whitespace-nowrap"
          style={{ fontFamily: "var(--font-russian)", color: "rgba(61,43,61,0.45)" }}
        >
          «Сезон 1»
        </span>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto pb-3 no-scrollbar group"
        style={{ paddingLeft: "2px", paddingRight: "2px" }}
      >
        {episodes.map((ep, index) => (
          <EpisodeCard
            key={ep.id}
            episode={ep}
            isActive={ep.id === currentEpisode}
            onClick={() => onSelectEpisode(ep.id)}
            index={index}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default EpisodeSelector;
