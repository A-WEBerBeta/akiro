import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { forwardRef } from "react";

const accentColors = ["#819179", "#DE8F61", "#A8B7C8"];

const OffersPlans = forwardRef(function OffersPlans(
  { activeTab, current },
  ref,
) {
  return (
    <section
      ref={ref}
      className="px-6 py-20 md:px-10 lg:px-16 lg:py-28 xl:px-20 -mb-20"
    >
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* Header section */}
        <div className="mb-10 flex flex-col gap-4 border-b border-neutral-950/10 pb-8 md:flex-row md:items-center md:justify-between">
          <p className="text-[11px] font-bold uppercase tracking-[0.45em] text-neutral-400">
            {current.number} — Formules disponibles
          </p>

          <p className="max-w-xl text-base leading-relaxed text-neutral-500 md:text-right">
            {current.baseline}
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid border-y border-neutral-950/10 lg:grid-cols-3">
          {current.plans.map((plan, index) => {
            const isFeatured = plan.featured;
            const accentColor = accentColors[index];

            return (
              <article
                key={plan.name}
                className={`group relative flex min-h-150 flex-col overflow-hidden border-b border-neutral-950/10 p-8 transition-colors duration-500 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0 xl:p-10 ${
                  isFeatured
                    ? "bg-(--akiro-dark) text-white"
                    : "bg-white/40 hover:bg-white/75"
                }`}
              >
                {/* Accent bar */}
                <div className="absolute left-0 top-0 h-full w-3.5 overflow-hidden">
                  <div
                    className="h-full w-full origin-left scale-x-[0.28] transition-transform duration-700 ease-[0.19,1,0.22,1] group-hover:scale-x-100"
                    style={{
                      backgroundColor: accentColor,
                    }}
                  />
                </div>

                {/* Ghost number */}
                <span
                  className={`pointer-events-none absolute right-2 top-0 select-none text-[7rem] font-black leading-none tracking-[-0.08em] transition-opacity duration-500 ${
                    isFeatured
                      ? "text-white/4.5 group-hover:text-white/[0.07]"
                      : "text-neutral-950/[0.035] group-hover:text-neutral-950/6"
                  }`}
                >
                  0{index + 1}
                </span>

                {/* Top row */}
                <div className="relative z-10 mb-14 flex min-h-16 items-start justify-between gap-8">
                  <span
                    className={`pt-1 text-[10px] font-bold uppercase tracking-[0.4em] ${
                      isFeatured ? "text-white/35" : "text-neutral-400"
                    }`}
                  >
                    Niveau 0{index + 1}
                  </span>

                  <div className="flex h-8 items-start">
                    {isFeatured && (
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/[0.035] px-4 py-2 text-[9px] font-black uppercase tracking-[0.32em] text-white/72">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#DE8F61]" />
                        Choix recommandé
                      </span>
                    )}
                  </div>
                </div>

                {/* Title + text */}
                <div className="relative z-10 transition-transform duration-500 ease-[0.22,1,0.36,1] group-hover:translate-x-1">
                  <h3 className="text-[clamp(3rem,4.8vw,5.8rem)] font-black uppercase leading-[0.78] tracking-[-0.08em]">
                    {plan.name}
                  </h3>

                  <p
                    className={`mt-8 max-w-sm text-base leading-7 ${
                      isFeatured ? "text-white/58" : "text-neutral-500"
                    }`}
                  >
                    {plan.text}
                  </p>
                </div>

                {/* Features */}
                <div className="relative z-10 mt-12 space-y-4">
                  {plan.items.map((item) => (
                    <div
                      key={item}
                      className="flex gap-3 transition-transform duration-500 ease-[0.22,1,0.36,1] group-hover:translate-x-1"
                    >
                      <Check
                        size={15}
                        strokeWidth={2.4}
                        className="mt-1 shrink-0"
                        style={{
                          color: accentColor,
                        }}
                      />

                      <span
                        className={`text-sm leading-6 ${
                          isFeatured ? "text-white/68" : "text-neutral-600"
                        }`}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom / price */}
                <div className="relative z-10 mt-auto pt-16">
                  <div
                    className={`mb-8 h-px w-full transition-colors duration-500 ${
                      isFeatured ? "bg-white/10" : "bg-neutral-950/10"
                    }`}
                  />

                  <p
                    className={`text-[10px] font-bold uppercase tracking-[0.35em] ${
                      isFeatured ? "text-white/35" : "text-neutral-400"
                    }`}
                  >
                    {plan.price === "Sur devis" ? "Tarif" : "À partir de"}
                  </p>

                  <div className="mt-4 flex items-end justify-between gap-6">
                    <p className="text-[clamp(3rem,4.4vw,5.4rem)] font-light leading-none tracking-[-0.08em]">
                      {plan.price}
                    </p>

                    <a
                      href="/#contact"
                      aria-label={`Demander un devis pour ${plan.name}`}
                      className={`group/btn grid h-12 w-12 shrink-0 place-items-center rounded-full transition-all duration-500 group-hover:scale-110 ${
                        isFeatured
                          ? "bg-white text-neutral-950"
                          : "bg-neutral-950 text-white"
                      }`}
                    >
                      <ArrowRight
                        size={18}
                        strokeWidth={2.5}
                        className="transition-transform duration-300 group-hover/btn:translate-x-0.5"
                      />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
});

export default OffersPlans;
