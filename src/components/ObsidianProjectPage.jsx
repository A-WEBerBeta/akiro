import { Link } from "react-router-dom";
import MotionReveal from "./MotionReveal";

function getContrastColor(hex) {
  const cleanHex = hex.replace("#", "");
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);

  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.62 ? "#161616" : "#F8F6F2";
}

function getPillBg(hex) {
  return getContrastColor(hex) === "#161616"
    ? "rgba(22,22,22,0.08)"
    : "rgba(248,246,242,0.14)";
}

function ObsidianDesignBlock({ project }) {
  return (
    <div className="space-y-6">
      <MotionReveal direction="right">
        <div className="overflow-hidden rounded-4xl border border-white/10">
          <div className="bg-[#D8D1C8] px-8 py-7 text-[#111111]">
            <div className="grid items-center gap-6 lg:grid-cols-[1.3fr_1fr_1fr]">
              <div className="text-[clamp(3rem,6vw,5.5rem)] font-semibold leading-none tracking-[-0.05em]">
                obsidian
              </div>

              <div className="flex items-center justify-center text-[clamp(2rem,4vw,3rem)]">
                ◐
              </div>

              <div className="flex items-center justify-center text-[clamp(2rem,4vw,3rem)]">
                ◑
              </div>
            </div>
          </div>

          <div className="bg-[#111111] px-8 py-8 text-white">
            <h3 className="text-[clamp(3rem,5vw,4.6rem)] leading-none tracking-[-0.04em]">
              {project.typography.primary}
            </h3>

            <p className="mt-5 text-[clamp(1.4rem,2.2vw,2.1rem)] leading-tight text-white/90">
              abcdefghijklmnopqrstuvwxyz
              <br />
              0123456789
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.typography.weights.map((weight) => (
                <span
                  key={weight}
                  className="rounded-full bg-white/10 px-4 py-2 text-sm text-white/90"
                >
                  {weight}
                </span>
              ))}
            </div>
          </div>
        </div>
      </MotionReveal>

      <div className="grid gap-6 md:grid-cols-2">
        {project.palette.map((color, index) => {
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
                  <p className="text-xl font-medium">{color.name}</p>
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

export default function ObsidianProjectPage({ project }) {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="px-6 pb-14 pt-8 md:px-10 lg:px-16">
        <Link
          to="/"
          className="inline-flex items-center gap-4 text-[12px] uppercase tracking-[0.18em] text-white/60 transition-opacity hover:opacity-100"
        >
          Retour
          <span className="h-px w-8 bg-white/30" />
        </Link>

        <MotionReveal direction="left">
          <div className="mt-12 max-w-5xl">
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/45">
              {project.index} — {project.category}
            </p>

            <h1 className="mt-5 max-w-[10ch] text-[clamp(4rem,8vw,8rem)] leading-[0.9] tracking-[-0.05em]">
              {project.title}
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-7 text-white/60">
              {project.tagline}
            </p>
          </div>
        </MotionReveal>
      </section>

      <MotionReveal direction="right">
        <section className="w-full">
          <img
            src={project.images.hero}
            alt={project.title}
            className="block h-auto w-full object-cover object-top"
          />
        </section>
      </MotionReveal>

      <section className="px-6 py-24 md:px-10 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <MotionReveal direction="left">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">
                Contexte
              </p>

              <p className="mt-6 max-w-[14ch] text-[clamp(2rem,3.4vw,4rem)] leading-[0.98] tracking-[-0.04em] text-white/90">
                {project.taglineSub}
              </p>
            </div>
          </MotionReveal>

          <MotionReveal direction="right" delay={0.08}>
            <div className="lg:pt-10">
              <p className="max-w-xl text-base leading-8 text-white/60">
                {project.summary}
              </p>
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="px-6 pb-28 md:px-10 lg:px-16">
        <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr] items-start">
          <MotionReveal direction="left">
            <div className="lg:row-span-2">
              <div className="h-full overflow-hidden rounded-4xl border border-white/10 bg-[#0E0E0E] shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                <img
                  src={project.images.full}
                  alt={`${project.title} - vue complète`}
                  className="block h-full w-full object-cover object-top scale-[1.02] transition-transform duration-700 hover:scale-[1.04]"
                />
              </div>
            </div>
          </MotionReveal>

          <div>
            <ObsidianDesignBlock project={project} />
          </div>

          <MotionReveal direction="up" delay={0.12}>
            <div className="max-w-xl self-start rounded-4xl border border-white/10 bg-[#111111] p-10 backdrop-blur-sm">
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">
                Intention
              </p>

              <p className="mt-6 text-[clamp(1.5rem,2vw,2.3rem)] leading-[1.08] tracking-[-0.03em] text-white/85">
                Une interface sombre, nette et maîtrisée, pensée pour laisser
                l’univers visuel s’exprimer sans ralentir la lecture.
              </p>
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="bg-[#0B0B0B] px-6 py-28 md:px-10 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-3 items-stretch">
          {project.process.map((item, index) => {
            const directions = ["left", "up", "right"];
            const direction = directions[index % directions.length];

            return (
              <MotionReveal
                key={item.title}
                direction={direction}
                delay={index * 0.08}
              >
                <div className="flex h-full flex-col rounded-4xl border border-white/10 bg-white/3 p-8">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-white/45">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="mt-5 text-[clamp(1.6rem,2vw,2.2rem)] leading-[1.05] tracking-[-0.03em] text-white/90">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-base leading-7 text-white/60 grow">
                    {item.text}
                  </p>
                </div>
              </MotionReveal>
            );
          })}
        </div>
      </section>

      <section className="px-6 py-28 md:px-10 lg:px-16">
        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] items-start">
          <MotionReveal direction="left">
            <div className="overflow-hidden rounded-4xl border border-white/10 bg-[#0E0E0E]">
              <img
                src={project.images.detailOne}
                alt={`${project.title} - détail 1`}
                className="block w-full object-cover object-top"
              />
            </div>
          </MotionReveal>

          <MotionReveal direction="right" delay={0.06}>
            <div className="overflow-hidden rounded-4xl border border-white/10 bg-[#0E0E0E]">
              <img
                src={project.images.detailTwo}
                alt={`${project.title} - détail 2`}
                className="block w-full object-cover object-top"
              />
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-300">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <MotionReveal direction="left">
              <div className="rounded-4xl border border-white/10 bg-[#111111] p-10">
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">
                  Mobile
                </p>

                <p className="mt-6 max-w-lg text-[clamp(1.5rem,2vw,2.2rem)] leading-[1.08] tracking-[-0.03em] text-white/85">
                  Une adaptation mobile pensée pour garder la même tension
                  visuelle, tout en simplifiant la lecture et l’accès rapide aux
                  informations clés.
                </p>
              </div>
            </MotionReveal>

            <MotionReveal direction="right" delay={0.08}>
              <div className="flex justify-center">
                <div className="w-95 max-w-full rounded-[3rem] bg-[#111111] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
                  <div className="overflow-hidden rounded-[2.5rem] bg-black">
                    <img
                      src={project.images.mobile}
                      alt={`${project.title} - version mobile`}
                      className="block h-auto w-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      <MotionReveal direction="soft">
        <section className="px-6 pb-20 md:px-10 lg:px-16">
          <div className="flex items-center justify-between border-t border-white/10 pt-10">
            <Link
              to="/"
              className="inline-flex items-center gap-4 text-[12px] uppercase tracking-[0.18em] text-white/65 transition-all hover:gap-6"
            >
              Retour à l’accueil
              <span className="h-px w-10 bg-white/35 transition-all" />
            </Link>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex cursor-pointer items-center gap-3 text-[12px] uppercase tracking-[0.18em] text-white/65"
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
