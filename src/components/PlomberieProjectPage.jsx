import { Link } from "react-router-dom";
import ProjectDesignSystem from "./ProjectDesignSystem";

export default function PlomberieProjectPage({ project }) {
  return (
    <main className="min-h-screen bg-[#F3F0EC] text-[#161616]">
      {/* top */}
      <section className="px-6 pb-14 pt-8 md:px-10 lg:px-16">
        <Link
          to="/"
          className="inline-flex items-center gap-4 text-[12px] uppercase tracking-[0.18em] text-black/60 transition-all  hover:opacity-100 hover:gap-6"
        >
          Retour
          <span className="h-px w-8 bg-black/30" />
        </Link>

        <div className="mt-12 max-w-5xl">
          <p className="text-[11px] uppercase tracking-[0.2em] text-black/45">
            {project.index} — {project.category}
          </p>

          <h1 className="mt-5 max-w-[10ch] text-[clamp(4rem,8vw,8rem)] leading-[0.9] tracking-[-0.05em]">
            {project.title}
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-7 text-black/60">
            {project.tagline}
          </p>
        </div>
      </section>

      {/* hero full width */}
      <section className="w-full">
        <img
          src={project.images.hero}
          alt={project.title}
          className="block h-auto w-full object-cover object-top"
        />
      </section>

      {/* intro éditoriale */}
      <section className="px-6 py-24 md:px-10 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-black/45">
              Contexte
            </p>

            <p className="mt-6 text-[clamp(2rem,3.4vw,4rem)] leading-[0.98] tracking-[-0.04em] text-black/85">
              {project.taglineSub}
            </p>
          </div>

          <div className="lg:pt-10">
            <p className="max-w-xl text-base leading-8 text-black/65">
              {project.summary}
            </p>
          </div>
        </div>
      </section>

      {/* full screenshot + texte */}
      <section className="px-6 py-24 md:px-10 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] items-start">
          {/* gauche : full screen sur toute la hauteur */}
          <div className="lg:row-span-2">
            <div className="h-full overflow-hidden rounded-4xl bg-[#E9DED2] shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              <img
                src={project.images.full}
                alt={`${project.title} - vue complète`}
                className="block h-full w-full object-cover object-top"
              />
            </div>
          </div>

          {/* droite haut : typo + palette */}
          <div className="mt-100">
            <ProjectDesignSystem project={project} />
          </div>

          {/* droite bas : intention */}
          <div className="rounded-4xl bg-[#EFE7DF] p-14 self-start -mb-50 max-w-[80%]">
            <p className="text-[11px] uppercase tracking-[0.2em] text-black/45">
              Intention
            </p>

            <p className="mt-6 text-[clamp(1.5rem,2vw,2.3rem)] leading-[1.08] tracking-[-0.03em] text-black/80">
              Un site pensé pour rassurer immédiatement, clarifier l’offre et
              rendre la prise de contact aussi simple que directe.
            </p>
          </div>
        </div>
      </section>

      {/* process section */}
      <section className="px-6 py-24 md:px-10 lg:px-16 bg-[#EFE7DF]">
        <div className="flex justify-around gap-10">
          {project.process.map((item, index) => (
            <div key={item.title} className="space-y-4">
              <p className="text-xs uppercase tracking-[0.2em] text-black/45 ">
                {String(index + 1).padStart(2, "0")}
              </p>

              <h3 className="text-[clamp(1.6rem,2vw,2.2rem)] leading-[1.05] tracking-[-0.03rem]">
                {item.title}
              </h3>

              <p className="max-w-sm text-base leading-7 text-black/65">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* contact + mobile section */}
      <section className="mt-24 px-6 pb-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-400">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center">
            {/* CONTACT */}
            <div className="overflow-hidden rounded-4xl bg-[#E9DED2] shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
              <img
                src={project.images.contact}
                alt={`${project.images.title} - contact`}
                className="block w-full h-auto object-cover object-top"
              />
            </div>

            {/* MOBILE */}
            <div className="flex justify-center">
              <div className="w-90 max-w-full rounded-[3rem] bg-[#111111] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.2)]">
                <div className="overflow-hidden rounded-[2.5rem] bg-black">
                  <img
                    src={project.images.mobile}
                    alt={`${project.images.title} - mobile`}
                    className="block w-full h-auto object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* bottom nav */}
      <section className="px-6 pb-20 md:px-10 lg:px-16">
        <div className="flex items-center justify-between border-t border-black/10 pt-10">
          <Link
            to="/"
            className="inline-flex items-center gap-4 text-xs uppercase tracking-[0.18em] text-black/65 transition-all hover:gap-6"
          >
            Retour à l’accueil
            <span className="h-px w-10 bg-black/35 transition-all" />
          </Link>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex cursor-pointer items-center gap-3 text-xs uppercase tracking-[0.18em] text-black/65 transition-all hover:translate-y-1"
          >
            Haut
            <span className="text-base">↑</span>
          </button>
        </div>
      </section>
    </main>
  );
}
