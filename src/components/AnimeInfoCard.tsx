import React from "react";
import { motion } from "framer-motion";
import { Star, Calendar, Tv2, Heart } from "lucide-react";
import { ANIME_INFO } from "../utils/animeData";

const AnimeInfoCard: React.FC = () => {
  const posterImage = ANIME_INFO.posterUrl;

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.6 }}
      className="w-full px-2"
      style={{ maxWidth: "min(860px, 90vw)", margin: "0 auto" }}
    >
      <div
        className="glass rounded-3xl overflow-hidden player-shadow"
        style={{ border: "1.5px solid rgba(244,167,192,0.25)", padding: "9px" }}
      >
        <div
          className="h-1.5 w-full"
          style={{
            background: "linear-gradient(to right, var(--color-primary), var(--color-secondary), var(--color-gold))",
          }}
        />

        <div className="p-8 md:p-10">
          <div className="mb-6">
            <div className="flex flex-col md:flex-row gap-8">
              {posterImage && (
                <div className="flex-shrink-0 mx-auto md:mx-0">
                  <div
                    className="rounded-2xl overflow-hidden shadow-lg"
                    style={{
                      width: "180px",
                      height: "250px",
                      border: "2px solid rgba(244,167,192,0.3)",
                      boxShadow: "0 8px 32px rgba(244,167,192,0.2)",
                    }}
                  >
                    <img
                      src={posterImage}
                      alt="Anime Poster"
                      className="w-full h-full object-cover"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                    />
                  </div>
                </div>
              )}

              <div className="flex-1 min-w-0 flex flex-col justify-between">
                <div>
                  <h2
                    className="font-display text-xl md:text-2xl font-bold leading-tight mb-2"
                    style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
                  >
                    {ANIME_INFO.title}
                  </h2>
                  <p
                    className="text-sm md:text-base font-medium"
                    style={{ color: "rgba(61,43,61,0.55)", fontFamily: "var(--font-body)" }}
                  >
                    {ANIME_INFO.titleJapanese}
                  </p>
                  <p
                    className="font-russian text-base md:text-lg mt-2"
                    style={{ fontFamily: "var(--font-russian)", color: "rgba(61,43,61,0.5)" }}
                  >
                    «{ANIME_INFO.titleRussian}»
                  </p>
                </div>

                <div className="flex items-center gap-2 mt-4 md:mt-0">
                  <Star
                    size={20}
                    fill="var(--color-gold)"
                    style={{ color: "var(--color-gold)" }}
                  />
                  <span
                    className="font-display text-2xl font-bold"
                    style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
                  >
                    {ANIME_INFO.rating}
                  </span>
                  <span
                    className="text-sm"
                    style={{ color: "rgba(61,43,61,0.45)", fontFamily: "var(--font-body)" }}
                  >
                    /10
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2.5 mb-6">
            {ANIME_INFO.genres.map((genre) => (
              <motion.span
                key={genre}
                className="genre-badge px-4 py-1.5"
                whileHover={{ scale: 1.05 }}
              >
                {genre}
              </motion.span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="md:col-span-2">
              <p
                className="text-sm md:text-base leading-relaxed"
                style={{ color: "rgba(61,43,61,0.75)", fontFamily: "var(--font-body)" }}
              >
                {ANIME_INFO.description}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div
                className="rounded-2xl p-4"
                style={{
                  background: "rgba(244,167,192,0.08)",
                  border: "1px solid rgba(244,167,192,0.2)",
                }}
              >
                <InfoRow
                  icon={<Tv2 size={14} style={{ color: "var(--color-primary)" }} />}
                  label="Studio"
                  value={ANIME_INFO.studio}
                />
                <InfoRow
                  icon={<Calendar size={14} style={{ color: "var(--color-secondary)" }} />}
                  label="Year"
                  value={String(ANIME_INFO.year)}
                />
                <InfoRow
                  icon={<Heart size={14} fill="var(--color-primary)" style={{ color: "var(--color-primary)" }} />}
                  label="Episodes"
                  value={String(ANIME_INFO.episodes)}
                  last
                />
              </div>
            </div>
          </div>

          <div
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-6"
            style={{ borderTop: "1px dashed rgba(244,167,192,0.3)" }}
          >
            <motion.div
              animate={{ rotate: [-2, 2, -2] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block"
            >
              <p
                className="font-russian text-xl md:text-2xl"
                style={{
                  fontFamily: "var(--font-russian)",
                  color: "var(--color-primary)",
                  textShadow: "0 2px 8px rgba(244,167,192,0.3)",
                }}
              >
                «Ты мне нравишься»
              </p>
              <p
                className="text-xs font-medium mt-1"
                style={{ color: "rgba(61,43,61,0.4)", fontFamily: "var(--font-body)" }}
              >
                "I like you" — Alya's whisper
              </p>
            </motion.div>

            <div className="flex flex-wrap gap-3">
              {[
                { phrase: "«Я люблю тебя»", trans: "I love you" },
                { phrase: "«Милый дурак»", trans: "Sweet fool" },
              ].map(({ phrase, trans }) => (
                <div
                  key={phrase}
                  className="text-center px-4 py-2 rounded-xl"
                  style={{
                    background: "rgba(168,200,240,0.12)",
                    border: "1px dashed rgba(168,200,240,0.4)",
                  }}
                >
                  <p
                    className="font-russian text-sm md:text-base"
                    style={{ fontFamily: "var(--font-russian)", color: "var(--color-text)" }}
                  >
                    {phrase}
                  </p>
                  <p
                    className="text-[10px] md:text-xs mt-0.5"
                    style={{ color: "rgba(61,43,61,0.4)", fontFamily: "var(--font-body)" }}
                  >
                    {trans}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

const InfoRow: React.FC<{
  icon: React.ReactNode;
  label: string;
  value: string;
  last?: boolean;
}> = ({ icon, label, value, last }) => (
  <div
    className={`flex items-center justify-between gap-2 py-2.5 ${!last ? "border-b" : ""}`}
    style={{ borderColor: "rgba(244,167,192,0.15)" }}
  >
    <div className="flex items-center gap-2">
      {icon}
      <span
        className="text-sm font-medium"
        style={{ color: "rgba(61,43,61,0.5)", fontFamily: "var(--font-body)" }}
      >
        {label}
      </span>
    </div>
    <span
      className="text-sm font-bold"
      style={{ color: "var(--color-text)", fontFamily: "var(--font-body)" }}
    >
      {value}
    </span>
  </div>
);

export default AnimeInfoCard;
