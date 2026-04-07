import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import MotionReveal from "./MotionReveal";

export default function Hero() {
  const accentColors = ["#A8B7C8", "#819179", "#DE8F61"];
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % accentColors.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [accentColors.length]);

  return (
    <section className="relative flex min-h-screen w-full flex-col overflow-hidden px-6 pb-16 md:px-10 md:pb-24 lg:px-16 xl:px-20">
      {/* 1. SPACER HEADER 
          Ce bloc pousse le contenu vers le bas pour compenser le header en 'fixed'.
          Ajuster h-[100px] selon la hauteur réelle du menu. */}
      <div className="h-25 w-full shrink-0 md:h-32.5" />

      {/* 2. LE LOGO GÉANT EN FOND (Calé à gauche) */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 0.04, x: 0 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="absolute top-0 left-0 z-0 w-full pointer-events-none select-none text-left"
      >
        <h2 className="text-[28vw] font-black leading-none tracking-tighter text-neutral-950">
          AKIRO
        </h2>
      </motion.div>

      {/* 3. GRILLE DE CONTENU PRINCIPAL
          'flex-1' occupe tout l'espace restant, 'items-end' pose les éléments en bas. */}
      <div className="relative z-10 grid flex-1 grid-cols-1 items-end gap-10 lg:grid-cols-12">
        {/* COLONNE TEXTE */}
        <div className="lg:col-span-8 lg:pl-4 lg:pb-12">
          <MotionReveal direction="soft" delay={0.1}>
            <p className="mb-12 text-sm uppercase tracking-[0.2em] text-neutral-500">
              AKIRO — création de sites web
            </p>
          </MotionReveal>

          <MotionReveal direction="up" delay={0.2}>
            <h1 className="max-w-[14ch] text-[clamp(4.5rem,11vw,10rem)] leading-[0.92] tracking-[-0.06em] text-neutral-950">
              Des sites clairs pour présenter votre activité simplement.
            </h1>
          </MotionReveal>

          <MotionReveal direction="up" delay={0.4}>
            <p className="mt-10 max-w-2xl text-base leading-7 text-neutral-600 md:text-lg">
              Conception de sites vitrines pour les indépendants, artisans et
              entreprises à Verdun.
              <br />
              Des interfaces lisibles, fiables et adaptées à chaque activité.
            </p>
          </MotionReveal>
        </div>

        {/* COLONNE VISUEL / CARTE */}
        <div className="lg:col-span-4 flex justify-end lg:pb-12">
          <MotionReveal direction="right" delay={0.3} className="w-full">
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-[2.5rem] bg-[#EFE7DF]">
              {/* Carré fixe rose */}
              <div className="absolute right-0 top-0 h-2/3 w-2/3 bg-[#D9A6B0]" />

              {/* Carré animé (Accent Colors) */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={accentColors[colorIndex]}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 0.85, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute bottom-0 left-0 h-1/2 w-1/2"
                  style={{ backgroundColor: accentColors[colorIndex] }}
                />
              </AnimatePresence>

              {/* Mockup Card */}
              <MotionReveal
                direction="soft"
                delay={0.6}
                className="absolute left-1/2 top-1/2 h-[48%] w-[56%] -translate-x-1/2 -translate-y-1/2"
              >
                <div className="h-full w-full -rotate-3 scale-[1.03] rounded-3xl border border-black/5 bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
                  <div className="mb-10 flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-black/15" />
                    <span className="h-3 w-3 rounded-full bg-black/15" />
                    <span className="h-3 w-3 rounded-full bg-black/15" />
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 w-20 rounded-full bg-black/20" />
                    <div className="h-4 w-full rounded-full bg-black/20" />
                    <div className="h-4 w-4/5 rounded-full bg-black/20" />
                  </div>
                  <div className="mt-8 h-32 rounded-2xl bg-[#E8DED4]" />
                  <div className="mt-8 flex items-center justify-between">
                    <div className="h-3 w-16 rounded-full bg-black/20" />
                    <div className="h-8 w-24 rounded-full bg-[#C97C8A]" />
                  </div>
                </div>
              </MotionReveal>

              {/* Branding interne Card */}
              <div className="absolute top-6 left-6 flex items-center gap-3">
                <div className="h-px w-12 bg-black/40" />
                <span className="text-sm uppercase tracking-[0.3em] text-black/40">
                  AKIRO
                </span>
              </div>

              {/* Liens RS internes Card */}
              <div className="absolute bottom-6 left-6 flex items-center gap-4 text-[12px] uppercase tracking-[0.18em] text-black/80">
                <a
                  href="#"
                  className="opacity-70 transition-opacity hover:opacity-100"
                >
                  Instagram
                </a>
                <span className="h-px w-8 bg-black/50" />
                <a
                  href="#"
                  className="opacity-70 transition-opacity hover:opacity-100"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
