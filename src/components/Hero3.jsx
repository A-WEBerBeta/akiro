import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import MotionReveal from "./MotionReveal";

export default function Hero2() {
  const accentColors = ["#DE8F61", "#819179", "#A8B7C8"];
  const [colorIndex, setColorIndex] = useState(0);
  const [activePanel, setActivePanel] = useState(null);

  const { scrollY } = useScroll();
  const yAkiro = useTransform(scrollY, [0, 500], [0, 400]);
  const opacityAkiro = useTransform(scrollY, [0, 900], [0.04, 0]);

  const panels = [
    {
      id: "services",
      number: "01",
      title: "Services",
      short: "Sites web",
      href: "#services",
      base: "bg-[rgba(238,230,220,0.56)] backdrop-blur-[2px] text-neutral-950",
      accent: "#DE8F61",
      text: "Sites vitrines sur-mesure, design clair, performance et accompagnement.",
      cta: "Découvrir",
    },
    {
      id: "realisations",
      number: "02",
      title: "Réalisations",
      short: "Projets",
      href: "#realisations",
      base: "bg-[rgba(226,216,204,0.74)] backdrop-blur-[2px] text-neutral-950",
      accent: "#819179",
      text: "Des projets pensés pour montrer votre activité sous son meilleur angle.",
      cta: "Explorer",
    },
    {
      id: "contact",
      number: "03",
      title: "Contact",
      short: "Discuter",
      href: "#contact",
      base: "bg-neutral-950 text-white",
      accent: "#A8B7C8",
      text: "Une idée, un besoin, une refonte ? Parlons simplement de votre projet.",
      cta: "Écrire",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % accentColors.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [accentColors.length]);

  return (
    <section className="relative flex min-h-0 w-full flex-col overflow-hidden px-6 pb-10 md:px-10 lg:min-h-screen lg:px-16 xl:px-20">
      {/* BRAND HERO */}
      <div className="absolute left-6 top-7 z-50 flex items-center gap-2 md:left-10 lg:left-16 xl:left-20">
        <span className="text-[14px] font-black uppercase tracking-[-0.06em] text-neutral-950">
          AKIRO STUDIO
        </span>
        <motion.span
          animate={{ backgroundColor: accentColors[colorIndex] }}
          className="h-1.5 w-1.5 rounded-full"
        />
      </div>

      {/* LOGO FOND */}
      <motion.div
        style={{ y: yAkiro, opacity: opacityAkiro }}
        className="pointer-events-none absolute left-0 top-4 z-0 w-full select-none text-left md:top-0"
      >
        <h2 className="text-[24vw] font-black leading-none tracking-tight text-neutral-950 md:text-[28vw]">
          AKIRO
        </h2>
      </motion.div>

      {/* PANNEAUX DESKTOP */}
      <div className="pointer-events-auto absolute inset-y-0 right-0 z-40 hidden w-[40vw] lg:flex">
        {panels.map((panel, index) => {
          const isActive = activePanel === panel.id;
          const hasActive = activePanel !== null;

          return (
            <motion.a
              key={panel.id}
              href={panel.href}
              onHoverStart={() => setActivePanel(panel.id)}
              onHoverEnd={() => setActivePanel(null)}
              initial={{ y: -220, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                flex: isActive ? 1.72 : hasActive ? 0.74 : 1,
                backgroundColor: isActive ? panel.accent : undefined,
              }}
              transition={{
                y: {
                  duration: 1.15,
                  delay: 0.35 + index * 0.22,
                  ease: [0.16, 1, 0.3, 1],
                },
                opacity: {
                  duration: 0.75,
                  delay: 0.35 + index * 0.22,
                },
                flex: {
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                },
                backgroundColor: {
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                },
              }}
              className={`relative h-full overflow-hidden border-l border-black/10 px-8 py-20 ${panel.base}`}
            >
              <div className="absolute left-8 top-24">
                <span className="text-[12px] font-medium tracking-[0.25em]">
                  {panel.number}
                </span>

                <motion.div
                  animate={{ width: isActive ? 64 : 32 }}
                  transition={{
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="mt-4 h-px bg-current opacity-60"
                />
              </div>

              <motion.div
                initial={false}
                animate={{
                  opacity: isActive ? 0 : 1,
                  y: isActive ? 28 : 0,
                  scale: isActive ? 0.96 : 1,
                }}
                transition={{
                  duration: isActive ? 0.18 : 0.32,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <span
                  className="text-2xl font-black uppercase tracking-[0.25em]"
                  style={{
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                  }}
                >
                  {panel.title}
                </span>
              </motion.div>

              <motion.div
                initial={false}
                animate={{
                  opacity: isActive ? 0 : 0.45,
                  y: isActive ? 12 : 0,
                }}
                transition={{
                  duration: 0.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute bottom-24 left-8"
              >
                <div className="mb-4 h-px w-10 bg-current opacity-50" />
                <span className="text-[10px] font-bold uppercase tracking-[0.35em]">
                  {panel.short}
                </span>
              </motion.div>

              <motion.div
                initial={false}
                animate={{
                  opacity: isActive ? 1 : 0,
                  y: isActive ? 0 : 18,
                  clipPath: isActive
                    ? "inset(0% 0% 0% 0%)"
                    : "inset(0% 0% 18% 0%)",
                }}
                transition={{
                  opacity: {
                    duration: isActive ? 0.28 : 0.1,
                    delay: isActive ? 0.12 : 0,
                  },
                  y: {
                    duration: isActive ? 0.35 : 0.14,
                    delay: isActive ? 0.12 : 0,
                    ease: [0.22, 1, 0.36, 1],
                  },
                  clipPath: {
                    duration: 0.45,
                    delay: isActive ? 0.08 : 0,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }}
                className="absolute inset-y-0 left-8 z-10 flex w-[360px] flex-col justify-center"
              >
                <p className="mb-8 text-[12px] font-bold uppercase tracking-[0.45em] opacity-80">
                  {panel.number} —
                </p>

                <h3 className="text-5xl font-black uppercase tracking-[-0.06em]">
                  {panel.title}
                </h3>

                <div className="my-7 h-px w-20 bg-current opacity-60" />

                <p className="w-[320px] text-base leading-relaxed opacity-85">
                  {panel.text}
                </p>

                <div className="mt-10 inline-flex w-fit items-center gap-5">
                  <span className="text-[12px] font-black uppercase leading-none tracking-[0.35em]">
                    {panel.cta}
                  </span>
                  <span className="flex h-5 items-center text-xl leading-none translate-y-[-1px]">
                    →
                  </span>
                </div>
              </motion.div>
            </motion.a>
          );
        })}
      </div>

      {/* CONTENU */}
      <div className="relative z-20 flex flex-col justify-start pb-0 pt-36 md:pt-40 lg:flex-1 lg:justify-end lg:pb-10 lg:pt-0">
        <div className="flex w-full max-w-none flex-col lg:max-w-[calc(60vw-6rem)] xl:max-w-[calc(60vw-8rem)]">
          <MotionReveal direction="up" delay={0.1}>
            <p className="mb-12 text-[10px] uppercase tracking-[0.55em] text-neutral-400 md:mb-16 md:text-[11px]">
              Akiro — Création de sites web
            </p>
          </MotionReveal>

          <MotionReveal direction="up" delay={0.2}>
            <h1 className="text-[clamp(3.2rem,13vw,7rem)] uppercase leading-[0.8] tracking-[-0.07em] text-neutral-950 md:text-[clamp(4.5rem,10vw,9rem)] lg:text-[clamp(3.5rem,8.5vw,9rem)]">
              <span className="block font-black">Bâtir votre</span>
              <span className="block font-black">univers web</span>
              <span className="block font-medium text-neutral-500">
                sur mesure
              </span>
              <span className="block font-light tracking-[-0.05em] text-neutral-400">
                Verdun // 55
              </span>
            </h1>
          </MotionReveal>

          <MotionReveal direction="up" delay={0.4}>
            <div className="relative z-30 mt-12 border-l-2 border-neutral-900/10 pl-8 md:mt-14 md:pl-10">
              <p className="max-w-[36rem] text-base leading-relaxed text-neutral-600 md:text-lg lg:max-w-[calc(60vw-10rem)]">
                Création de <strong>sites internet vitrines performants</strong>{" "}
                pour les acteurs locaux, artisans et entreprises du Grand-Est.
              </p>
            </div>
          </MotionReveal>

          {/* BARRE MOBILE FULL WIDTH */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-12 -mx-6 overflow-hidden md:-mx-10 lg:hidden"
          >
            <div className="grid grid-cols-3">
              {panels.map((panel) => (
                <a
                  key={panel.id}
                  href={panel.href}
                  className="flex min-h-[92px] flex-col justify-between border-r border-neutral-950/10 bg-[rgba(238,230,220,0.72)] px-4 py-4 text-neutral-950 last:border-r-0"
                >
                  <div>
                    <p
                      className="text-[10px] font-bold tracking-[0.35em]"
                      style={{ color: panel.accent }}
                    >
                      {panel.number}
                    </p>

                    <div
                      className="mt-3 h-px w-8 opacity-70"
                      style={{ backgroundColor: panel.accent }}
                    />
                  </div>

                  <p className="text-[10px] font-black uppercase tracking-[0.12em] sm:text-[11px] sm:tracking-[0.18em]">
                    {panel.title}
                  </p>
                </a>
              ))}
            </div>
          </motion.div>

          {/* CTA + RÉSEAUX */}
          <MotionReveal direction="up" delay={0.6}>
            <div className="mt-8 flex flex-col gap-8 border-t border-neutral-100 pt-8 md:mt-10 lg:flex-row lg:flex-wrap lg:items-center lg:gap-x-8 lg:gap-y-6">
              <motion.a
                href="#contact"
                className="group flex w-full cursor-pointer items-center justify-between gap-5 rounded-2xl border border-white/10 bg-neutral-900/90 px-5 py-3.5 shadow-xl backdrop-blur-sm sm:w-fit lg:order-3 lg:ml-auto"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">
                  Lancer mon projet
                </span>

                <motion.div
                  animate={{ backgroundColor: accentColors[colorIndex] }}
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full shadow-lg transition-colors duration-1000"
                >
                  <svg
                    className="block h-3.5 w-3.5 text-black opacity-0 transition-opacity group-hover:opacity-100"
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

              <div className="flex flex-wrap items-center gap-8 lg:order-1">
                {["Instagram", "LinkedIn", "GitHub"].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-400 transition-colors hover:text-neutral-950"
                  >
                    {link}
                  </a>
                ))}
              </div>

              <div className="hidden h-px w-12 bg-neutral-200 md:block lg:order-2" />

              <span className="hidden text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-300 md:block lg:order-2">
                Disponible // 2026
              </span>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
