import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const defaultColors = ["#DE8F61", "#819179", "#A8B7C8"];

export default function AkiroCTA({
  href = "#contact",
  label = "Lancer mon projet",
  colors = defaultColors,
  colorIndex,
  autoColor = false,
  variant = "dark",
  className = "",
}) {
  const [internalIndex, setInternalIndex] = useState(0);

  useEffect(() => {
    if (!autoColor) return;

    const interval = setInterval(() => {
      setInternalIndex((prev) => (prev + 1) % colors.length);
    }, 1400);

    return () => clearInterval(interval);
  }, [autoColor, colors.length]);

  const currentColor = colors[colorIndex ?? internalIndex];

  const isLight = variant === "light";

  return (
    <motion.a
      href={href}
      className={`group flex w-fit h-15 items-center gap-4 rounded-full px-6 py-3.5 transition-shadow duration-500 ${
        isLight
          ? "bg-white text-neutral-950 hover:shadow-[0_18px_35px_rgba(255,255,255,0.05)]"
          : "bg-[#141414] text-white hover:shadow-lg"
      } ${className}`}
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.span
        className="text-[10px] font-black uppercase tracking-[0.35em]"
        initial={false}
        whileHover={{ x: 2 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        {label}
      </motion.span>

      <motion.span
        animate={{ backgroundColor: currentColor }}
        className="grid h-8 w-8 place-items-center rounded-full text-black"
        transition={{ duration: 0.8 }}
        whileHover={{ x: 4, scale: 1.05 }}
      >
        <ArrowRight
          size={16}
          strokeWidth={2.5}
          className="transition-transform duration-300 group-hover:translate-x-0.5"
        />
      </motion.span>
    </motion.a>
  );
}
