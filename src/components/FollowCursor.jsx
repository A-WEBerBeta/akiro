import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect } from "react";

export default function FollowCursor({ service }) {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 190, mass: 0.55 };
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

  const color = service?.color || "#DE8F61";

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-999 hidden lg:block"
      style={{ x, y }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* AXES FULL SCREEN */}
      <div className="absolute left-[-100vw] right-[-100vw] top-0 h-px bg-black/8" />
      <div className="absolute bottom-[-100vh] top-[-100vh] left-0 w-px bg-black/8" />

      {/* POINT CENTRAL */}
      <motion.div
        className="absolute -left-1 -top-1 h-2 w-2 rounded-full shadow-sm"
        animate={{ backgroundColor: color }}
        transition={{ duration: 0.25 }}
      />

      {/* PETIT REPÈRE */}
      <motion.div
        className="absolute left-4 top-4 h-px bg-black/25"
        animate={{ width: service ? 38 : 22 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* CARD */}
      <motion.div
        initial={{ x: 12, y: 12, opacity: 0, scale: 0.96 }}
        animate={{ x: 18, y: 18, opacity: 1, scale: 1 }}
        exit={{ x: 12, y: 12, opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-4 top-4 min-w-47.5 border border-black/10 bg-white/60 px-4 py-3 shadow-[0_18px_45px_rgba(0,0,0,0.08)] backdrop-blur-md"
      >
        <div className="mb-3 flex items-center justify-between gap-6">
          <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-black/35">
            {service?.number || "AKIRO"}
          </span>

          <motion.span
            animate={{ backgroundColor: color }}
            className="h-1.5 w-1.5 rounded-full"
          />
        </div>

        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-950">
          {service?.title || "Services"}
        </p>

        <div className="mt-3 flex items-center gap-2">
          <span className="text-[9px] font-bold uppercase tracking-[0.28em] text-black/45">
            {service ? "Voir l’offre" : "Explorer"}
          </span>

          <ArrowUpRight size={13} strokeWidth={2.4} className="text-black/45" />
        </div>
      </motion.div>
    </motion.div>
  );
}
