import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import FollowCursor from "./FollowCursor";
import MotionReveal from "./MotionReveal";

const services = [
  {
    number: "01",
    title: "Site vitrine",
    text: "Un site clair, rapide et crédible pour présenter votre activité et générer les bons contacts.",
    tag: "Présence",
    color: "#A8B7C8",
  },
  {
    number: "02",
    title: "Refonte",
    text: "Un site repensé pour moderniser votre image, clarifier votre message et améliorer l’expérience utilisateur.",
    tag: "Évolution",
    color: "#DE8F61",
  },
  {
    number: "03",
    title: "Identité visuelle",
    text: "Une direction graphique cohérente pour rendre votre marque plus reconnaissable en ligne.",
    tag: "Cohérence",
    color: "#819179",
  },
  {
    number: "04",
    title: "Landing page",
    text: "Une page ciblée pour mettre en avant une offre, une campagne ou un service et favoriser l’action.",
    tag: "Conversion",
    color: "#D9A6B0",
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(null);
  const [isInside, setIsInside] = useState(false);

  return (
    <section
      id="services"
      onMouseEnter={() => setIsInside(true)}
      onMouseLeave={() => {
        setIsInside(false);
        setActiveService(null);
      }}
      className="relative flex min-h-0 w-full items-center overflow-hidden bg-white px-6 py-24 md:px-10 md:py-28 lg:min-h-screen lg:px-16 lg:py-20 xl:px-20"
    >
      <AnimatePresence>
        {isInside && <FollowCursor service={activeService} />}
      </AnimatePresence>

      <div className="relative z-10 grid w-full gap-16 lg:grid-cols-12 lg:gap-20">
        {/* LEFT */}
        <div className="lg:sticky lg:top-32 lg:col-span-4 lg:h-fit lg:cursor-none">
          <MotionReveal direction="left" delay={0.1}>
            <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-black/45">
              Services
            </p>
          </MotionReveal>

          <MotionReveal direction="left" delay={0.2}>
            <h2 className="mt-7 max-w-[12ch] text-[clamp(3rem,4.4vw,5.4rem)] leading-[0.9] tracking-[-0.065em] text-neutral-950">
              Des bases solides pour votre présence web.
            </h2>
          </MotionReveal>

          <MotionReveal direction="left" delay={0.3}>
            <p className="mt-7 max-w-sm text-base leading-7 text-neutral-500 md:text-lg">
              Des services pensés pour rendre votre image plus claire, votre
              site plus utile et votre activité plus visible.
            </p>
          </MotionReveal>
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-8 lg:cursor-none">
          <div className="border-t border-black/10">
            {services.map((service) => {
              const isActive = activeService?.number === service.number;

              return (
                <div
                  key={service.number}
                  onMouseEnter={() => setActiveService(service)}
                  onMouseLeave={() => setActiveService(null)}
                  className="group relative border-b border-black/10 py-9 md:py-10 lg:py-10 xl:py-11"
                >
                  {/* ACCENT LINE */}
                  <motion.div
                    initial={false}
                    animate={{
                      scaleX: isActive ? 1 : 0,
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.85,
                      ease: [0.19, 1, 0.22, 1],
                    }}
                    className="absolute bottom-0 left-0 h-[2px] w-full origin-left"
                    style={{ backgroundColor: service.color }}
                  />

                  <div className="relative z-10 grid gap-6 md:grid-cols-[80px_1fr_150px] md:items-start">
                    {/* NUMBER */}
                    <div className="flex items-center gap-4 md:block md:pt-2">
                      <motion.span
                        animate={{
                          color: isActive ? service.color : "rgba(0,0,0,0.22)",
                        }}
                        transition={{ duration: 0.35 }}
                        className="text-[11px] font-bold tracking-[0.25em]"
                      >
                        {service.number}
                      </motion.span>

                      <motion.div
                        animate={{
                          width: isActive ? 42 : 16,
                          backgroundColor: isActive
                            ? service.color
                            : "rgba(0,0,0,0.14)",
                        }}
                        transition={{
                          duration: 0.55,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="h-px md:mt-6"
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="min-w-0">
                      {/* TITLE TEXT REVEAL */}
                      <div className="relative inline-block max-w-full overflow-visible pb-[0.16em] pr-[0.08em]">
                        <h3 className="text-[clamp(2.4rem,4.6vw,5.2rem)] font-medium leading-[1.14] tracking-[-0.075em] text-neutral-400">
                          {service.title}
                        </h3>

                        <motion.h3
                          aria-hidden="true"
                          initial={false}
                          animate={{
                            clipPath: isActive
                              ? "inset(-8% -8% -14% 0%)"
                              : "inset(-8% 108% -14% 0%)",
                          }}
                          transition={{
                            duration: 1.15,
                            ease: [0.19, 1, 0.22, 1],
                          }}
                          className="absolute left-0 top-0 text-[clamp(2.4rem,4.6vw,5.2rem)] font-medium leading-[1.14] tracking-[-0.075em] text-neutral-950"
                        >
                          {service.title}
                        </motion.h3>
                      </div>

                      <motion.p
                        animate={{
                          opacity: isActive ? 1 : 0.55,
                        }}
                        transition={{
                          duration: 0.55,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="mt-4 max-w-2xl text-base leading-7 text-neutral-500 md:text-lg"
                      >
                        {service.text}
                      </motion.p>
                    </div>

                    {/* TAG */}
                    <div className="hidden justify-end pt-4 md:flex">
                      <motion.span
                        animate={{
                          opacity: isActive ? 1 : 0.22,
                          color: isActive ? service.color : "rgba(0,0,0,0.35)",
                        }}
                        transition={{ duration: 0.35 }}
                        className="whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.35em]"
                      >
                        // {service.tag}
                      </motion.span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
