import React from "react";
import { motion } from "framer-motion";

const CharacterBackground: React.FC = () => {
  return (
    <>
      <div className="fixed inset-0 z-0 overflow-hidden">
        <img
          src="/images/bg-classroom.jpg"
          alt=""
          className="w-full h-full object-cover"
          style={{ filter: "blur(3px) brightness(1.05) saturate(1.1)" }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-overlay"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,245,248,0.78) 0%, rgba(247,214,224,0.55) 50%, rgba(168,200,240,0.28) 100%)",
          }}
        />
      </div>

      <div
        className="fixed bottom-0 left-0 right-0 h-32 z-[2] pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(255,245,248,0.6) 0%, transparent 100%)",
        }}
      />

      <div
        className="fixed left-0 bottom-0 z-[1] pointer-events-none select-none hidden xl:block"
        style={{ width: "clamp(240px, 20vw, 380px)" }}
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }}
        >
          <img
            src="/characters/masachika.png"
            alt="Masachika Kuze"
            className="w-full h-auto"
            style={{
              maxHeight: "85vh",
              objectFit: "contain",
              objectPosition: "bottom",
              filter: "drop-shadow(0 10px 30px rgba(168, 200, 240, 0.4)) drop-shadow(0 4px 10px rgba(100, 100, 180, 0.2))",
            }}
            draggable={false}
          />
        </motion.div>
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-8 rounded-full"
          style={{
            background: "radial-gradient(ellipse, rgba(168,200,240,0.35) 0%, transparent 70%)",
          }}
        />
      </div>

      <div
        className="fixed right-0 bottom-0 z-[1] pointer-events-none select-none hidden xl:block"
        style={{ width: "clamp(240px, 20vw, 380px)", opacity: 0.85 }}
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, ease: "easeInOut", delay: 1.5, repeat: Infinity, repeatType: "loop" }}
        >
          <img
            src="/characters/alya.png"
            alt="Alisa Mikhailovna Kujou"
            className="w-full h-auto"
            style={{
              maxHeight: "85vh",
              objectFit: "contain",
              objectPosition: "bottom",
              filter: "drop-shadow(0 10px 30px rgba(244, 167, 192, 0.45)) drop-shadow(0 4px 10px rgba(200, 100, 140, 0.2))",
            }}
            draggable={false}
          />
        </motion.div>
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-8 rounded-full"
          style={{
            background: "radial-gradient(ellipse, rgba(244,167,192,0.4) 0%, transparent 70%)",
          }}
        />
      </div>
    </>
  );
};

export default CharacterBackground;
