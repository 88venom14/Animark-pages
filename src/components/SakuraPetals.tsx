import React, { useMemo } from "react";

interface PetalConfig {
  id: number;
  left: string;
  animationDuration: string;
  swayDuration: string;
  animationDelay: string;
  size: string;
  opacity: number;
  color: string;
  rotation: string;
}

const PETAL_COLORS = [
  "#F4A7C0",
  "#F7D6E0",
  "#FCC8DB",
  "#FAB8CF",
  "#ffffff",
  "#F9C5D5",
];

const PetalSVG: React.FC<{ color: string; size: number }> = ({ color, size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 2 C12 0, 18 4, 18 10 C18 16, 12 20, 10 18 C8 20, 2 16, 2 10 C2 4, 8 0, 10 2 Z"
      fill={color}
      opacity="0.85"
    />
    <path
      d="M10 2 C10 8, 10 12, 10 18"
      stroke="rgba(255,255,255,0.4)"
      strokeWidth="0.8"
      fill="none"
    />
  </svg>
);

const SakuraPetals: React.FC = () => {
  const petals = useMemo<PetalConfig[]>(() => {
    return Array.from({ length: 28 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDuration: `${7 + Math.random() * 9}s`,
      swayDuration: `${3 + Math.random() * 3}s`,
      animationDelay: `${-(Math.random() * 12)}s`,
      size: `${10 + Math.floor(Math.random() * 12)}px`,
      opacity: 0.45 + Math.random() * 0.35,
      color: PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)],
      rotation: `${Math.random() * 360}deg`,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {petals.map((petal) => {
        const size = parseInt(petal.size);
        return (
          <div
            key={petal.id}
            className="sakura-petal absolute"
            style={{
              left: petal.left,
              width: petal.size,
              height: petal.size,
              opacity: petal.opacity,
              animationDuration: `${petal.animationDuration}, ${petal.swayDuration}`,
              animationDelay: `${petal.animationDelay}, ${petal.animationDelay}`,
              transform: `rotate(${petal.rotation})`,
            }}
          >
            <PetalSVG color={petal.color} size={size} />
          </div>
        );
      })}
    </div>
  );
};

export default SakuraPetals;
