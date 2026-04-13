import React, { useState, useRef, useCallback, useEffect } from "react";
import { motion } from "framer-motion";

import Header from "./components/Header";
import VideoPlayer from "./components/VideoPlayer";
import EpisodeSelector from "./components/EpisodeSelector";
import AnimeInfoCard from "./components/AnimeInfoCard";
import SakuraPetals from "./components/SakuraPetals";
import CharacterBackground from "./components/CharacterBackground";
import { fetchEpisodes } from "./utils/googleSheets";
import type { Episode } from "./components/EpisodeSelector";

const FloatingPhrase: React.FC<{
  phrase: string;
  translation: string;
  style?: React.CSSProperties;
  delay?: number;
}> = ({ phrase, translation, style, delay = 0 }) => (
  <motion.div
    className="absolute hidden xl:block pointer-events-none select-none"
    style={style}
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.6, rotate: [-2, 2, -2] }}
    transition={{
      opacity: { delay: delay + 1, duration: 0.8 },
      rotate: { delay, duration: 4, repeat: Infinity, ease: "easeInOut" },
    }}
  >
    <p
      className="font-russian"
      style={{
        fontFamily: "var(--font-russian)",
        color: "rgba(61,43,61,0.25)",
        fontSize: "1.6rem",
        lineHeight: 1.2,
      }}
    >
      {phrase}
    </p>
    <p
      className="text-center text-[10px] font-medium"
      style={{ color: "rgba(61,43,61,0.18)", fontFamily: "var(--font-body)" }}
    >
      {translation}
    </p>
  </motion.div>
);

const App: React.FC = () => {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [currentEpisode, setCurrentEpisode] = useState<number>(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadEpisodes = async () => {
      try {
        setLoading(true);
        const data = await fetchEpisodes();
        setEpisodes(data);
        if (data.length > 0) {
          setCurrentEpisode(data[0].id);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load episodes");
        console.error("Error fetching episodes:", err);
      } finally {
        setLoading(false);
      }
    };

    loadEpisodes();
  }, []);

  const handleSelectEpisode = useCallback((id: number) => {
    setCurrentEpisode(id);
    setTimeout(() => {
      if (playerRef.current) {
        playerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 50);
  }, []);

  const currentEpisodeData = episodes.length > 0
    ? episodes.find((ep) => ep.id === currentEpisode) ?? episodes[0]
    : null;

  return (
    <div
      className="relative min-h-screen"
      style={{ background: "var(--color-bg)", fontFamily: "var(--font-body)" }}
    >
      <CharacterBackground />

      <SakuraPetals />

      <FloatingPhrase
        phrase="«Не смотри на меня так»"
        translation="Don't look at me like that"
        style={{ top: "28%", left: "3%", transform: "rotate(-8deg)" }}
        delay={0.5}
      />
      <FloatingPhrase
        phrase="«Смотри со мной»"
        translation="Watch with me"
        style={{ top: "55%", right: "3%", transform: "rotate(6deg)" }}
        delay={1}
      />
      <FloatingPhrase
        phrase="«Я люблю тебя»"
        translation="I love you"
        style={{ top: "72%", left: "3%", transform: "rotate(-5deg)" }}
        delay={1.5}
      />

      <div
        className="fixed inset-0 z-[3] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(255,235,245,0.5) 100%)",
        }}
      />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        {loading && (
          <main className="flex-1 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <div
                  className="w-16 h-16 rounded-full border-4 border-t-[var(--color-primary)] border-r-transparent border-b-transparent border-l-transparent animate-spin"
                />
              </div>
              <p
                className="font-russian text-xl"
                style={{ fontFamily: "var(--font-russian)", color: "var(--color-text)" }}
              >
                «Загрузка...»
              </p>
              <p
                className="text-sm mt-2"
                style={{ color: "rgba(61,43,61,0.5)", fontFamily: "var(--font-body)" }}
              >
                Loading episodes...
              </p>
            </motion.div>
          </main>
        )}

        {error && !loading && (
          <main className="flex-1 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass rounded-3xl p-8 mx-4"
              style={{ maxWidth: "min(500px, 90vw)", border: "1.5px solid rgba(244,167,192,0.25)" }}
            >
              <p
                className="font-display text-lg font-bold mb-2"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
              >
                Ошибка загрузки
              </p>
              <p
                className="text-sm mb-4"
                style={{ color: "rgba(61,43,61,0.6)", fontFamily: "var(--font-body)" }}
              >
                {error}
              </p>
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-2 rounded-full text-sm font-semibold text-white"
                style={{ background: "var(--color-primary)" }}
              >
                Попробовать снова
              </button>
            </motion.div>
          </main>
        )}

        {!loading && !error && !currentEpisodeData && (
          <main className="flex-1 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass rounded-3xl p-8 mx-4"
              style={{ maxWidth: "min(500px, 90vw)", border: "1.5px solid rgba(244,167,192,0.25)" }}
            >
              <p
                className="font-display text-lg font-bold mb-2"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
              >
                «Нет серий»
              </p>
              <p
                className="text-sm"
                style={{ color: "rgba(61,43,61,0.6)", fontFamily: "var(--font-body)" }}
              >
                No episodes found in the spreadsheet. Please add data to your Google Sheet.
              </p>
            </motion.div>
          </main>
        )}

        {!loading && !error && currentEpisodeData && (
          <main className="flex-1 flex flex-col items-center px-4 xl:px-48 py-6 gap-6">
          <div ref={playerRef} className="w-full flex flex-col items-center">
            <VideoPlayer episode={currentEpisodeData} />
          </div>

          <div className="w-full flex flex-col items-center">
            <EpisodeSelector
              episodes={episodes}
              currentEpisode={currentEpisode}
              onSelectEpisode={handleSelectEpisode}
            />
          </div>

          <div className="w-full flex flex-col items-center pb-8">
            <AnimeInfoCard />
          </div>

          <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="w-full text-center pb-8 px-4"
          >
            <div className="flex flex-col items-center gap-2">
              <p
                className="font-russian text-xl"
                style={{ fontFamily: "var(--font-russian)", color: "rgba(61,43,61,0.4)" }}
              >
                «Милый дурак» · «Ты мне нравишься»
              </p>
              <p
                className="text-sm"
                style={{ color: "rgba(61,43,61,0.35)", fontFamily: "var(--font-body)" }}
              >
                Made with 🌸 for fans of Alya — AniMark © 2024
              </p>
            </div>
          </motion.footer>
        </main>
        )}
      </div>
    </div>
  );
};

export default App;
