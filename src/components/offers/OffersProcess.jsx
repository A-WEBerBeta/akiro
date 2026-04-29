import { steps } from "../../data/offers";

const accents = ["#819179", "#DE8F61", "#A8B7C8", "#819179"];

export default function OffersProcess() {
  return (
    <section className="bg-[#141414] px-6 py-24 text-white md:px-10 lg:px-16 lg:py-32 xl:px-20">
      <div className="mb-20 grid gap-12 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <p className="text-[11px] font-bold uppercase tracking-[0.45em] text-white/35">
            Process
          </p>

          <h2 className="mt-6 max-w-4xl text-[clamp(3rem,5vw,6rem)] font-light leading-[0.9] tracking-[-0.06em] text-white">
            Un cadre simple,
            <span className="block text-white/35">
              du premier échange à la mise en ligne.
            </span>
          </h2>
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Texte d'accompagnement */}
        <div className="mb-14 max-w-md border-l border-white/10 pl-8 text-base leading-7 text-white/45 lg:absolute lg:right-0 lg:top-10 lg:mb-0">
          Vous savez toujours où en est le projet et quelle est la prochaine
          étape.
        </div>

        {/* Ligne centrale desktop */}
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/10 lg:block" />

        {/* Ligne mobile */}
        <div className="absolute left-3 top-0 h-full w-px bg-white/10 lg:hidden" />

        <div className="space-y-14 lg:space-y-8">
          {steps.map(([number, title, text], index) => {
            const isLeft = index % 2 === 0;
            const accent = accents[index % accents.length];

            return (
              <div
                key={number}
                className="relative grid gap-8 pl-10 lg:grid-cols-2 lg:pl-0"
              >
                {/* Dot mobile */}
                <div
                  className="absolute left-3 top-7 h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-white/20 lg:hidden"
                  style={{ backgroundColor: accent }}
                />

                {/* Dot desktop */}
                <div
                  className="absolute left-1/2 top-10 hidden h-3 w-3 -translate-x-1/2 rounded-full border border-white/20 lg:block"
                  style={{ backgroundColor: accent }}
                />

                <article
                  className={`group relative max-w-xl border border-white/10 bg-white/[0.018] p-8 transition-colors duration-500 hover:bg-white/4 ${
                    isLeft
                      ? "lg:mr-16 lg:justify-self-end"
                      : "lg:col-start-2 lg:ml-16"
                  }`}
                >
                  <div
                    className="absolute left-0 top-0 h-full w-0.75 opacity-60 transition-all duration-500 group-hover:w-1.75 group-hover:opacity-100"
                    style={{ backgroundColor: accent }}
                  />

                  <span className="pointer-events-none absolute right-5 top-4 select-none text-[5.5rem] font-black leading-none tracking-[-0.08em] text-white/[0.035] transition-opacity duration-500 group-hover:text-white/6">
                    {number}
                  </span>

                  <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30">
                    Étape {number}
                  </p>

                  <h3 className="mt-8 max-w-[11ch] text-[clamp(1.7rem,2.5vw,3rem)] font-black uppercase leading-[0.86] tracking-[-0.065em] text-white">
                    {title}
                  </h3>

                  <p className="mt-6 max-w-md text-sm leading-6 text-white/45 md:text-base md:leading-7">
                    {text}
                  </p>
                </article>

                <div className="hidden lg:block" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
