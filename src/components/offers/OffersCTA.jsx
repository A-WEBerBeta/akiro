import AkiroCTA from "../AkiroCTA";
import MotionReveal from "../MotionReveal";

export default function OffersCTA() {
  return (
    <section className="bg-[#141414] px-6 py-24 text-white md:px-10 lg:px-16 lg:py-32 xl:px-20">
      <div className="border-y border-white/10 py-20 lg:py-28">
        <div className="mx-auto max-w-6xl text-center">
          <MotionReveal direction="up">
            <p className="text-[11px] font-bold uppercase tracking-[0.45em] text-white/35">
              Parlons concret
            </p>
          </MotionReveal>

          <MotionReveal direction="up" delay={0.08}>
            <h2 className="mx-auto mt-8 max-w-5xl text-[clamp(3rem,7vw,7.5rem)] font-black uppercase leading-[0.86] tracking-[-0.075em] text-white">
              Lancer un projet
              <span className="block font-medium text-white/35">
                qui compte.
              </span>
            </h2>
          </MotionReveal>

          <MotionReveal direction="up" delay={0.14}>
            <p className="mx-auto mt-10 max-w-2xl text-base leading-7 text-white/45 md:text-lg md:leading-8">
              Parlons de votre activité, de vos objectifs et de la meilleure
              formule pour avancer proprement.
            </p>
          </MotionReveal>

          <MotionReveal direction="up" delay={0.2}>
            <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <AkiroCTA
                href="/#contact"
                label="Demander un devis"
                variant="light"
                autoColor
              />

              <a
                href="/#realisations"
                className="group inline-flex h-15 items-center gap-5 rounded-full border border-white/10 px-6 py-3.5 text-white/70 transition-colors duration-300 hover:border-white/20 hover:text-white"
              >
                <span className="text-[10px] font-black uppercase tracking-[0.35em]">
                  Voir les réalisations
                </span>
              </a>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
