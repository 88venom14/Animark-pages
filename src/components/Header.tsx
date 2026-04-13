import React from "react";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  return (
    <motion.header
      className="glass-nav sticky top-0 z-50 w-full"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <div className="flex-1 text-center">
          <div className="flex items-center justify-center gap-3">
            <motion.div
              animate={{ rotate: [0, 10, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg width="36" height="36" viewBox="0 0 28 28" fill="none">
                <path
                  d="M14 3 C17 1, 25 6, 25 14 C25 22, 17 27, 14 25 C11 27, 3 22, 3 14 C3 6, 11 1, 14 3 Z"
                  fill="#F4A7C0"
                />
                <path
                  d="M14 3 C14 12, 14 18, 14 25"
                  stroke="rgba(255,255,255,0.5)"
                  strokeWidth="1.2"
                  fill="none"
                />
                <circle cx="14" cy="14" r="2.5" fill="white" opacity="0.6" />
              </svg>
            </motion.div>

            <h1
              className="font-display text-4xl md:text-5xl font-bold tracking-wide"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-text)",
                letterSpacing: "0.04em",
                textShadow: "0 2px 12px rgba(244,167,192,0.3)",
              }}
            >
              Ani
              <span style={{ color: "var(--color-primary)" }}>Mark</span>
            </h1>

            <motion.div
              animate={{ rotate: [0, -10, 8, 0] }}
              transition={{ duration: 4, delay: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg width="36" height="36" viewBox="0 0 28 28" fill="none">
                <path
                  d="M14 3 C17 1, 25 6, 25 14 C25 22, 17 27, 14 25 C11 27, 3 22, 3 14 C3 6, 11 1, 14 3 Z"
                  fill="#A8C8F0"
                />
                <path
                  d="M14 3 C14 12, 14 18, 14 25"
                  stroke="rgba(255,255,255,0.5)"
                  strokeWidth="1.2"
                  fill="none"
                />
                <circle cx="14" cy="14" r="2.5" fill="white" opacity="0.6" />
              </svg>
            </motion.div>
          </div>

          <p
            className="text-base md:text-lg italic mt-1 font-body font-medium"
            style={{ color: "rgba(61,43,61,0.6)", fontFamily: "var(--font-body)" }}
          >
            Alya Sometimes Hides Her Feelings in Russian
          </p>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
