import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > 800 ? setIsVisible(true) : setIsVisible(false);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-12 right-6 md:right-10 z-100 group flex flex-col items-center gap-4 mix-blend-difference"
        >
          {/* Texte : Reste en blanc, s'inverse */}
          <span className="text-[9px] text-white uppercase tracking-[0.4em] font-black [writing-mode:vertical-lr] rotate-180 transition-transform duration-500 group-hover:-translate-y-2">
            Top
          </span>

          {/* Ligne */}
          <div className="relative w-px h-12 bg-white/20 overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-white origin-top"
              whileHover={{ scaleY: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          {/* L'ICÔNE ENCADRÉE : La nouveauté */}
          {/* On crée un carré de 1px en blanc, mix-blend fait le reste */}
          <div className="relative p-3 border border-white/20 transition-all duration-500 group-hover:bg-white group-hover:border-white">
            {/* On remonte un peu le strokeWidth pour qu'il soit plus présent */}
            <ArrowUp
              size={16}
              strokeWidth={1.5}
              className="text-white transition-all duration-500 group-hover:text-black"
            />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
