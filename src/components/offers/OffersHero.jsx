import MotionReveal from "../MotionReveal";

export default function OffersHero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-32 md:px-10 lg:px-16 lg:pb-28 lg:pt-40 xl:px-20">
      <div className="pointer-events-none absolute left-0 top-8 z-0 w-full select-none text-center opacity-[0.045]">
        <span className="text-[28vw] font-black uppercase leading-none tracking-tighter text-neutral-950">
          OFFRES
        </span>
      </div>

      <div className="relative z-10 grid gap-16 lg:grid-cols-[1fr_520px] lg:items-end">
        <div>
          <MotionReveal direction="up" delay={0.1}>
            <p className="text-[11px] font-bold uppercase tracking-[0.5em] text-neutral-400">
              Akiro — Offres & tarifs
            </p>
          </MotionReveal>

          <MotionReveal direction="up" delay={0.2}>
            <h1 className="mt-10 max-w-6xl text-[clamp(3.5rem,8.8vw,9rem)] font-black uppercase leading-[0.78] tracking-[-0.075em]">
              Des offres claires
              <span className="block font-medium text-neutral-500">
                sans formule floue.
              </span>
            </h1>
          </MotionReveal>
        </div>

        <MotionReveal direction="up" delay={0.35}>
          <p className="max-w-130 border-l-2 border-neutral-900/10 pl-8 text-lg leading-relaxed text-neutral-600 md:text-xl">
            Sites vitrines, refontes et landing pages pour les artisans,
            indépendants et entreprises du Grand-Est.
          </p>
        </MotionReveal>
      </div>
    </section>
  );
}
