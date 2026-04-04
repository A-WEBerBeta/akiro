import { Link } from "react-router-dom";
import { getContrastColor, getPillBg } from "../utils/colorUtils";
import MotionReveal from "./MotionReveal";

function PlomberieDesignBlock({ project }) {
  return (
    <div className="space-y-6">
      {/* bloc typo */}
      <MotionReveal direction="right">
        <div className="overflow-hidden rounded-4xl">
          <div className="bg-[#F1E0D0] px-8 py-7 text-[#30363E]">
            <div className="grid items-center gap-6 lg:grid-cols-[1.3fr_1fr_1fr]">
              <div className="text-[clamp(3rem,6vw,5.5rem)] font-semibold leading-none tracking-[-0.05em]">
                {project.designMark}
              </div>

              <div className="flex items-center justify-center text-[clamp(2rem,4vw,3.2rem)] leading-none">
                {project.markLeft || "◐"}
              </div>

              <div className="flex items-center justify-center text-[clamp(2rem,4vw,3.2rem)] leading-none">
                {project.markRight || "◑"}
              </div>
            </div>
          </div>

          <div className="bg-[#30363E] px-8 py-8 text-white">
            <h3 className="text-[clamp(3rem,5vw,4.8rem)] leading-none tracking-[-0.04em]">
              {project.typography.primary}
            </h3>

            <p className="mt-5 text-[clamp(1.5rem,2.3vw,2.3rem)] leading-tight text-white/90">
              abcdefghijklmnopqrstuvwxyz
              <br />
              0123456789
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.typography.weights.map((weight) => (
                <span
                  key={weight}
                  className="rounded-full bg-white/12 px-4 py-2 text-sm text-white/90"
                >
                  {weight}
                </span>
              ))}
            </div>
          </div>
        </div>
      </MotionReveal>

      {/* palette */}
      <div className="grid gap-6 md:grid-cols-2">
        {project.palette.slice(0, 4).map((color, index) => {
          const textColor = getContrastColor(color.hex);

          return (
            <MotionReveal
              key={color.hex}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index * 0.05}
            >
              <div
                className="rounded-4xl p-8"
                style={{ backgroundColor: color.hex, color: textColor }}
              >
                <div
                  className="h-12 w-24 rounded-2xl border"
                  style={{ borderColor: `${textColor}33` }}
                />

                <div className="mt-6 flex items-center gap-4">
                  <p className="text-lg font-medium">{color.name}</p>

                  <span
                    className="rounded-full px-3 py-1 text-2xl"
                    style={{
                      backgroundColor: getPillBg(color.hex),
                      color: textColor,
                    }}
                  >
                    {color.hex}
                  </span>
                </div>
              </div>
            </MotionReveal>
          );
        })}
      </div>
    </div>
  );
}

export default function PlomberieProjectPage({ project }) {
  return (
    <main className="min-h-screen bg-[#F3F0EC] text-[#161616]">
      {/* top */}
      <section className="px-6 pb-14 pt-8 md:px-10 lg:px-16">
        <Link
          to="/"
          className="inline-flex items-center gap-4 text-[12px] uppercase tracking-[0.18em] text-black/60 transition-all hover:opacity-100 hover:gap-6"
        >
          Retour
          <span className="h-px w-8 bg-black/30" />
        </Link>

        <MotionReveal direction="left">
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
        </MotionReveal>
      </section>

      {/* hero full width */}
      <MotionReveal direction="right">
        <section className="w-full">
          <img
            src={project.images.hero}
            alt={project.title}
            className="block h-auto w-full object-cover object-top"
          />
        </section>
      </MotionReveal>

      {/* intro éditoriale */}
      <section className="px-6 py-24 md:px-10 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <MotionReveal direction="left">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-black/45">
                Contexte
              </p>

              <p className="mt-6 text-[clamp(2rem,3.4vw,4rem)] leading-[0.98] tracking-[-0.04em] text-black/85">
                {project.taglineSub}
              </p>
            </div>
          </MotionReveal>

          <MotionReveal direction="right" delay={0.08}>
            <div className="lg:pt-10">
              <p className="max-w-xl text-base leading-8 text-black/65">
                {project.summary}
              </p>
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* full screenshot + texte */}
      <section className="px-6 py-24 md:px-10 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] items-start">
          {/* gauche : full screen sans animation pour éviter de casser le placement */}
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
            <PlomberieDesignBlock project={project} />
          </div>

          {/* droite bas : intention */}
          <div className="self-start -mb-50 max-w-[80%]">
            <MotionReveal direction="right" delay={0.08}>
              <div className="rounded-4xl bg-[#EFE7DF] p-14">
                <p className="text-[11px] uppercase tracking-[0.2em] text-black/45">
                  Intention
                </p>

                <p className="mt-6 text-[clamp(1.5rem,2vw,2.3rem)] leading-[1.08] tracking-[-0.03em] text-black/80">
                  Un site pensé pour rassurer immédiatement, clarifier l’offre
                  et rendre la prise de contact aussi simple que directe.
                </p>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* process section */}
      <section className="bg-[#EFE7DF] px-6 py-24 md:px-10 lg:px-16">
        <div className="flex justify-around gap-10">
          {project.process.map((item, index) => {
            const directions = ["left", "up", "right"];
            const direction = directions[index % directions.length];

            return (
              <MotionReveal
                key={item.title}
                direction={direction}
                delay={index * 0.06}
              >
                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-black/45">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="text-[clamp(1.6rem,2vw,2.2rem)] leading-[1.05] tracking-[-0.03rem]">
                    {item.title}
                  </h3>

                  <p className="max-w-sm text-base leading-7 text-black/65">
                    {item.text}
                  </p>
                </div>
              </MotionReveal>
            );
          })}
        </div>
      </section>

      {/* contact + mobile section */}
      <section className="mt-24 px-6 pb-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-400">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center">
            {/* CONTACT */}
            <MotionReveal direction="left">
              <div className="overflow-hidden rounded-4xl bg-[#E9DED2] shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
                <img
                  src={project.images.contact}
                  alt={`${project.title} - contact`}
                  className="block h-auto w-full object-cover object-top"
                />
              </div>
            </MotionReveal>

            {/* MOBILE */}
            <MotionReveal direction="right" delay={0.08}>
              <div className="flex justify-center">
                <div className="w-90 max-w-full rounded-[3rem] bg-[#111111] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.2)]">
                  <div className="overflow-hidden rounded-[2.5rem] bg-black">
                    <img
                      src={project.images.mobile}
                      alt={`${project.title} - mobile`}
                      className="block h-auto w-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* bottom nav */}
      <MotionReveal direction="soft">
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
      </MotionReveal>
    </main>
  );
}
