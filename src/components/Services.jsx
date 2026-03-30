import { motion } from "framer-motion";
import Reveal from "./Reveal";

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
    color: "#C97C8A",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="w-full px-6 py-24 md:px-10 lg:px-16 xl:px-20"
    >
      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="text-[11px] uppercase tracking-[0.2em] text-black/55">
            Services
          </p>

          <Reveal direction="left" distance={90} blur={8}>
            <h2 className="mt-6 max-w-[11ch] text-[clamp(3rem,4vw,5rem)] leading-[0.9] tracking-[-0.04em]">
              Une offre claire, pensée pour le web.
            </h2>
          </Reveal>

          <p className="mt-6 max-w-sm text-base leading-7 text-black/60">
            Des services structurés pour créer une présence en ligne lisible,
            cohérente et vraiment professionnelle.
          </p>
        </div>

        <div className="lg:col-span-8">
          <div className="border-t border-black/15">
            {services.map((service, index) => (
              <Reveal
                key={service.number}
                direction="up"
                distance={70 + index * 8}
                blur={8}
                className=""
                start="start 96%"
                end="start 60%"
              >
                <motion.div
                  key={service.number}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  className="group relative overflow-hidden border-b border-black/15"
                >
                  <motion.div
                    variants={{
                      rest: { opacity: 0, x: "-100%" },
                      hover: { opacity: 0.16, x: 0 },
                    }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute top-0 bottom-0 left-22 right-0"
                    style={{ backgroundColor: service.color }}
                  />

                  <div className="relative grid gap-4 py-8 md:grid-cols-[88px_1fr_auto] md:items-start">
                    <div className="flex items-start gap-3 pt-2">
                      <motion.span
                        variants={{
                          rest: { y: 0, opacity: 0.55 },
                          hover: { y: -4, opacity: 1 },
                        }}
                        transition={{
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="text-[11px] font-medium uppercase tracking-[0.2em] text-black/75"
                      >
                        {service.number}
                      </motion.span>

                      <motion.div
                        variants={{
                          rest: { scaleY: 0, opacity: 0 },
                          hover: { scaleY: 1, opacity: 1 },
                        }}
                        transition={{
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="mt-0 h-16 w-0.5 origin-top rounded-full"
                        style={{ backgroundColor: service.color }}
                      />
                    </div>

                    <div>
                      <motion.h3
                        variants={{
                          rest: { x: 0 },
                          hover: { x: 18 },
                        }}
                        transition={{
                          duration: 0.45,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="text-[clamp(2.8rem,4vw,5.5rem)] leading-[0.95] tracking-[-0.03em]"
                      >
                        {service.title}
                      </motion.h3>

                      <motion.p
                        variants={{
                          rest: { x: 0, opacity: 0.6 },
                          hover: { x: 18, opacity: 0.95 },
                        }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="mt-3 max-w-xl text-base leading-7 text-black/60"
                      >
                        {service.text}
                      </motion.p>
                    </div>

                    <motion.div
                      variants={{
                        rest: { x: 12, opacity: 0 },
                        hover: { x: 0, opacity: 1 },
                      }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="hidden self-center md:block"
                    >
                      <span
                        className="inline-flex rounded-full px-4 py-2 mr-4 text-[11px] uppercase tracking-[0.18em] text-black/80"
                        style={{ backgroundColor: `${service.color}22` }}
                      >
                        {service.tag}
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
