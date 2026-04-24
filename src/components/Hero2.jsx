import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import MotionReveal from "./MotionReveal";

export default function Hero2() {
  const accentColors = ["#DE8F61", "#819179", "#A8B7C8"];
  const [colorIndex, setColorIndex] = useState(0);
  const { scrollY } = useScroll();
  const yAkiro = useTransform(scrollY, [0, 500], [0, 400]);
  const opacityAkiro = useTransform(scrollY, [0, 900], [0.04, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % accentColors.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [accentColors.length]);

  return (
    <section className="relative flex min-h-auto lg:min-h-screen w-full flex-col overflow-hidden px-6 pb-10 md:px-10 lg:px-16 xl:px-20">
      {/* 1. LOGO DE FOND */}
      <motion.div
        style={{ y: yAkiro, opacity: opacityAkiro }}
        className="absolute top-0 left-0 z-0 w-full pointer-events-none select-none text-center"
      >
        <h2 className="text-[28vw] font-black leading-none tracking-tighter text-neutral-950">
          AKIRO
        </h2>
      </motion.div>

      {/* 2. ZONE GRAPHIQUE */}
      <div className="absolute top-1/2 right-0 z-10 -translate-y-1/2 pointer-events-none hidden lg:block">
        <div className="relative h-300 w-300 -translate-x-12 flex items-center justify-center">
          {/* AXES INFINIS */}
          <div className="absolute h-300 w-px bg-black/6 z-0" />
          <div className="absolute w-300 h-px bg-black/6 z-0" />

          {/* CERCLES */}
          <div className="absolute h-150 w-150 border-2 border-black/10 rounded-full" />
          <div className="absolute h-237.5 w-237.5 border-[1.5px] border-dashed border-black/16 rounded-full" />
          <div className="absolute h-350 w-350 border border-black/6 rounded-full" />

          {/* POINT BLANC TOURNANT SUR CERCLE */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute h-237.5 w-237.5"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white border border-black rounded-full shadow-sm" />
          </motion.div>

          {/* --- LE CENTRE : LE VISEUR ÉLARGI AVEC LABEL --- */}
          <div className="absolute z-50 flex items-center justify-center">
            {/* Croix de précision élargie */}
            <div className="absolute h-26 w-px bg-neutral-950/40 rounded-full" />
            <div className="absolute w-26 h-px bg-neutral-950/40 rounded-full" />

            {/* Label technique à droite de la croix (rappel de Structure // 01) */}
            <div className="absolute left-8 mt-8 flex items-center gap-3 whitespace-nowrap">
              <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-neutral-400">
                Core // Identity
              </span>
              <div className="h-px w-8 bg-black/40" />
            </div>
          </div>

          {/* POINTS SUR LES AXES - AMPLITUDE MAXIMUM (350px) */}
          <motion.div
            animate={{ y: [-350, 350, -350] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute h-4 w-4 bg-neutral-700 rounded-full flex items-center justify-center z-40 shadow-xl"
          >
            <motion.div
              animate={{ backgroundColor: accentColors[colorIndex] }}
              className="h-2 w-2 rounded-full"
            />
          </motion.div>

          <motion.div
            animate={{ x: [-350, 350, -350] }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute h-4 w-4 bg-neutral-700 rounded-full flex items-center justify-center z-40 shadow-xl"
          >
            <motion.div
              animate={{ backgroundColor: accentColors[colorIndex] }}
              className="h-2 w-2 rounded-full"
            />
          </motion.div>

          {/* STRUCTURE 01 */}
          <div className="absolute bottom-15 left-80 flex items-center gap-4 opacity-30">
            <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-black">
              Structure // 01
            </span>
            <div className="h-px w-12 bg-black" />
          </div>
        </div>
      </div>

      {/* 3. TEXTES & CONTENU */}
      <div className="relative z-20 flex flex-col justify-start lg:flex-1 lg:justify-end pt-32 lg:pt-0 pb-6 lg:pb-10">
        <div className="max-w-5xl flex flex-col">
          <MotionReveal direction="up" delay={0.1}>
            <p className="text-[11px] mb-16 uppercase tracking-[0.5em] text-neutral-400 ">
              Akiro — Création de sites web
            </p>
          </MotionReveal>
          <MotionReveal direction="up" delay={0.2}>
            <h1 className="text-[clamp(3.5rem,8.5vw,9rem)] leading-[0.8] tracking-[-0.07em] text-neutral-950 uppercase">
              <span className="block font-black">Bâtir votre</span>
              <span className="block font-black">univers web</span>
              <span className="block font-medium text-neutral-500">
                sur mesure
              </span>
              <span className="block font-light text-neutral-400 tracking-[-0.05em]">
                Verdun // 55
              </span>
            </h1>
          </MotionReveal>
          <MotionReveal direction="up" delay={0.4}>
            <div className="mt-14 border-l-2 border-neutral-900/10 pl-10 relative z-30">
              <p className="max-w-5xl text-lg leading-relaxed text-neutral-600">
                Création de <strong>sites internet vitrines performants</strong>{" "}
                pour les acteurs locaux, artisans et entreprises du Grand-Est.
              </p>
            </div>
          </MotionReveal>

          {/* LE BLOC RÉSEAUX */}
          <MotionReveal direction="up" delay={0.6}>
            <div className="mt-10 flex items-center gap-8 border-t border-neutral-100 pt-8">
              {["Instagram", "LinkedIn", "GitHub"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-400 hover:text-neutral-950 transition-colors"
                >
                  {link}
                </a>
              ))}
              <div className="h-px w-12 bg-neutral-200 hidden md:block" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-300 hidden md:block">
                Disponible // 2026
              </span>
            </div>
          </MotionReveal>
        </div>
      </div>
      {/* CTA NOIR - FIXÉ */}
      <motion.a
        href="#contact"
        className="absolute bottom-54 right-48 z-50 bg-neutral-900/90 backdrop-blur-sm p-6 rounded-2xl shadow-2xl flex items-center gap-6 border border-white/10 pointer-events-auto cursor-pointer group"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex flex-col gap-1 pr-2">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">
            Lancer mon projet
          </span>
          {/* Barre qui s'anime au hover pour confirmer l'interaction */}
          <div className="h-px bg-white/40" />
        </div>
        <motion.div
          animate={{ backgroundColor: accentColors[colorIndex] }}
          className="h-8 w-8 rounded-full shadow-lg transition-colors duration-1000 flex items-center justify-center"
        >
          {/* Optionnel : une micro flèche qui apparaît au hover */}
          <svg
            className="w-4 h-4 text-black opacity-0 group-hover:opacity-100 transition-opacity"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </motion.div>
      </motion.a>
    </section>
  );
}
