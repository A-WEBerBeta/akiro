import { motion } from "framer-motion";
import { useState } from "react";
import { offers, tabs } from "../../data/offers";

export default function OffersTabs({ activeTab, onTabClick }) {
  const [hoveredTab, setHoveredTab] = useState(null);

  return (
    <section className="px-6 md:px-10 lg:px-16 xl:px-20">
      <motion.div
        initial={{ opacity: 0, y: 28, clipPath: "inset(0 0 100% 0)" }}
        animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
        transition={{
          duration: 0.9,
          delay: 0.25,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="grid overflow-hidden border border-neutral-950/10 bg-white/35 lg:grid-cols-3"
      >
        {tabs.map((tab, index) => {
          const active = activeTab === tab.key;

          return (
            <motion.button
              key={tab.key}
              onClick={() => onTabClick(tab.key)}
              onMouseEnter={() => setHoveredTab(tab.key)}
              onMouseLeave={() => setHoveredTab(null)}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.75,
                delay: 0.18 + index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative min-h-42.5 cursor-pointer border-b border-neutral-950/10 p-7 text-left transition-colors duration-500 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0 ${
                active ? "bg-(--akiro-dark) text-white" : "hover:bg-white/60"
              }`}
            >
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[11px] font-bold tracking-[0.4em] ${
                      active ? "text-white/45" : "text-neutral-400"
                    }`}
                  >
                    {tab.number}
                  </span>

                  <span
                    className={`text-[9px] font-black uppercase tracking-[0.35em] ${
                      active ? "text-white/45" : "text-neutral-300"
                    }`}
                  >
                    {active ? "Sélectionné" : "Voir"}
                  </span>
                </div>

                <motion.span
                  initial={false}
                  animate={{
                    x: hoveredTab === tab.key ? 6 : 0,
                    backgroundPosition:
                      !active && hoveredTab === tab.key ? "0% 50%" : "100% 50%",
                  }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className={`block text-[clamp(2.4rem,4.8vw,5.4rem)] font-black uppercase leading-[0.82] tracking-[-0.075em] ${
                    active ? "text-white" : "bg-clip-text text-transparent"
                  }`}
                  style={
                    active
                      ? undefined
                      : {
                          backgroundImage:
                            "linear-gradient(90deg, #0a0a0a 0%, #0a0a0a 50%, #d4d4d4 50%, #d4d4d4 100%)",
                          backgroundSize: "200% 100%",
                        }
                  }
                >
                  {tab.label}
                </motion.span>
              </div>

              <motion.div
                initial={false}
                animate={{
                  scaleX: active || hoveredTab === tab.key ? 1 : 0.18,
                  opacity: active || hoveredTab === tab.key ? 1 : 0.45,
                }}
                transition={{ duration: 0.65, ease: [0.19, 1, 0.22, 1] }}
                className="pointer-events-none absolute bottom-0 left-0 h-0.75 w-full origin-left"
                style={{ backgroundColor: offers[tab.key].accent }}
              />
            </motion.button>
          );
        })}
      </motion.div>
    </section>
  );
}
