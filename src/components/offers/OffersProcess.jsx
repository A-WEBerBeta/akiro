import { steps } from "../../data/offers";

export default function OffersProcess() {
  return (
    <section className="bg-[#141414] px-6 py-24 text-white md:px-10 lg:px-16 lg:py-28 xl:px-20">
      <div className="mb-16 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-[11px] font-bold uppercase tracking-[0.45em] text-white/35">
            Process
          </p>

          <h2 className="mt-6 max-w-xl text-[clamp(3rem,5vw,6rem)] font-light leading-[0.88] tracking-[-0.065em]">
            Un cadre clair, du premier échange à la mise en ligne.
          </h2>
        </div>

        <p className="max-w-xl text-lg leading-relaxed text-white/45 lg:col-span-5 lg:col-start-8">
          Vous savez ce qui est inclus, comment le projet avance et quelles sont
          les prochaines étapes.
        </p>
      </div>

      <div className="grid border-t border-white/10 lg:grid-cols-4">
        {steps.map(([number, title, text]) => (
          <div
            key={number}
            className="border-b border-white/10 py-10 lg:border-b-0 lg:border-r lg:px-8 last:border-r-0"
          >
            <span className="text-6xl font-black tracking-[-0.07em] text-white/10">
              {number}
            </span>

            <h3 className="mt-10 text-[13px] font-black uppercase tracking-[0.35em]">
              {title}
            </h3>

            <p className="mt-5 max-w-xs text-sm leading-6 text-white/45">
              {text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
