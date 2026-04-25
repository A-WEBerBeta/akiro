import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import FollowCursor from "./FollowCursor";
import MotionReveal from "./MotionReveal";

const services = [
  {
    number: "01",
    title: "Site vitrine",
    text: "Une présence claire, professionnelle et adaptée à votre activité.",
    tag: "Présence",
    color: "#A8B7C8",
  },
  {
    number: "02",
    title: "Refonte",
    text: "Un site repensé pour améliorer l’image, la lisibilité et l’efficacité.",
    tag: "Évolution",
    color: "#DE8F61",
  },
  {
    number: "03",
    title: "Identité visuelle",
    text: "Une base cohérente pour harmoniser votre présence en ligne.",
    tag: "Cohérence",
    color: "#819179",
  },
  {
    number: "04",
    title: "Landing page",
    text: "Une page pensée pour présenter une offre ou un service avec clarté.",
    tag: "Conversion",
    color: "#D9A6B0",
  },
];

export default function Services1() {
  const [activeService, setActiveService] = useState(null);

  return (
    <section
      id="services"
      className="relative w-full px-6 py-24 md:px-10 lg:px-16 xl:px-20 overflow-x-clip select-none bg-white"
    >
      {/* CURSEUR PERSONNALISÉ */}
      <AnimatePresence>
        {activeService && <FollowCursor service={activeService} />}
      </AnimatePresence>

      <div className="relative z-10 grid gap-16 lg:grid-cols-12">
        {/* --- BLOC GAUCHE --- */}
        <div className="lg:col-span-4 lg:sticky lg:top-32 lg:h-fit">
          <MotionReveal direction="left" delay={0.1}>
            <p className="text-[11px] uppercase tracking-[0.2em] text-black/55 font-bold">
              Services
            </p>
          </MotionReveal>
          <MotionReveal direction="left" delay={0.2}>
            <h2 className="mt-6 max-w-[11ch] text-[clamp(3rem,4vw,5rem)] leading-[0.9] tracking-[-0.04em] text-neutral-950">
              Une offre claire, pensée pour le web.
            </h2>
          </MotionReveal>
          <MotionReveal direction="left" delay={0.3}>
            <p className="mt-6 max-w-sm text-base leading-7 text-black/60 font-light">
              Des services structurés pour créer une présence en ligne lisible,
              cohérente et vraiment professionnelle.
            </p>
          </MotionReveal>
        </div>

        {/* --- BLOC DROITE --- */}
        <div className="lg:col-span-8">
          <div className="border-t border-black/10">
            {services.map((service) => (
              <div
                key={service.number}
                onMouseEnter={() => setActiveService(service)}
                onMouseLeave={() => setActiveService(null)}
                // ON CACHE LE CURSEUR ICI
                className="group relative border-b border-black/10 py-12 lg:py-16 cursor-none"
              >
                <div className="relative z-20 grid grid-cols-[50px_1fr] md:grid-cols-[80px_1fr_150px] items-start">
                  {/* 1. INDEX */}
                  <div className="flex flex-col gap-6 pt-4">
                    <span className="text-[11px] font-bold opacity-20">
                      {service.number}
                    </span>
                    <motion.div
                      animate={{
                        scale: activeService?.number === service.number ? 1 : 0,
                      }}
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: service.color }}
                    />
                  </div>

                  {/* 2. TITRE (LE RÉSULTAT PROPRE) */}
                  <div className="flex flex-col items-start min-w-0">
                    <div className="relative h-[1.3em] overflow-hidden text-[clamp(2rem,4vw,4rem)] font-medium leading-[1.3] tracking-[-0.05em] text-neutral-400">
                      <span className="flex flex-col transition-transform duration-500 ease-[0.22,1,0.36,1] group-hover:-translate-y-1/2">
                        <span className="h-[1.3em] flex items-center whitespace-nowrap pr-4">
                          {service.title}
                        </span>
                        <span className="h-[1.3em] flex items-center text-black whitespace-nowrap pr-4">
                          {service.title}
                        </span>
                      </span>
                    </div>

                    <p className="mt-8 max-w-xl text-lg font-light text-neutral-500 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                      {service.text}
                    </p>
                  </div>

                  {/* 3. TAGS */}
                  <div className="hidden md:flex justify-end pt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40 italic whitespace-nowrap">
                      // {service.tag}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
