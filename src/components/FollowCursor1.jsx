import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function FollowCursor1({ service }) {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { damping: 28, stiffness: 180, mass: 0.6 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-50"
      style={{ x, y }}
      // Petit effet de pression au clic
      whileTap={{ scale: 0.98 }}
    >
      {/* 1. LES AXES (8% d'opacité) */}
      <div className="absolute left-[-100vw] right-[-100vw] h-px bg-black/8" />
      <div className="absolute top-[-100vh] bottom-[-100vh] w-px bg-black/8" />

      {/* 2. LE POINT CENTRAL + CERCLE DE FOCUS */}
      <div className="absolute -left-1 -top-1 flex items-center justify-center">
        <motion.div
          className="h-2 w-2 rounded-full shadow-sm z-10"
          style={{ backgroundColor: service?.color || "#000" }}
        />
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute h-6 w-6 rounded-full border border-black/20"
        />
      </div>

      {/* 3. LES CERCLES DU HERO (ADN) */}
      <div className="absolute -left-12 -top-12 h-24 w-24 rounded-full border border-black/5" />
      <div className="absolute -left-24 -top-24 h-48 w-48 rounded-full border border-dashed border-black/5" />

      {/* 4. L'INVITATION (TEXTE DYNAMIQUE) */}
      <div className="absolute left-10 top-10 flex flex-col items-start whitespace-nowrap">
        <motion.div
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex flex-col gap-1"
        >
          <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-black/30">
            {service?.title}
          </span>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-neutral-900">
              Explorer
            </span>
            <span className="text-[12px] font-light text-black/40">—</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
