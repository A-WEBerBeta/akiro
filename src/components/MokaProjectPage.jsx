import { Link } from "react-router-dom";
import { getContrastColor, getPillBg } from "../utils/colorUtils";
import MotionReveal from "./MotionReveal";

function MokaDesignBlock({ project }) {
  return (
    <div className="space-y-6">
      <MotionReveal direction="right">
        <div className="overflow-hidden rounded-4xl border border-[#D9CEC3]">
          <div className="bg-[#E8DDD1] px-8 py-7 text-[#3D2B1F]">
            <div className="grid items-center gap-6 lg:grid-cols-[1.3fr_1fr_1fr]">
              <div
                className="text-[clamp(2.8rem,5vw,5rem)] font-semibold leading-none tracking-[-0.04em]"
                style={{ fontFamily: project.typography.primary }}
              >
                moka
              </div>

              <div className="flex items-center justify-center text-[clamp(2rem,4vw,3rem)]">
                ☕
              </div>

              <div className="flex items-center justify-center text-[clamp(2rem,4vw,3rem)]">
                ✿
              </div>
            </div>
          </div>

          <div className="bg-[#F6EFE7] px-8 py-8 text-[#3D2B1F]">
            <h3
              className="text-[clamp(3rem,5vw,4.6rem)] leading-none tracking-[-0.04em]"
              style={{ fontFamily: project.typography.primary }}
            >
              {project.typography.primary}
            </h3>

            <p className="mt-5 text-[clamp(1.2rem,2vw,1.9rem)] leading-tight text-[#3D2B1F]/85">
              abcdefghijklmnopqrstuvwxyz
              <br />
              0123456789
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.typography.weights.map((weight) => (
                <span
                  key={weight}
                  className="rounded-full bg-[#3D2B1F]/8 px-4 py-2 text-sm text-[#3D2B1F]/85"
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

export default function MokaProjectPage({
  project,
  previousProject,
  nextProject,
}) {
  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#3D2B1F]">
      <section className="px-6 pb-14 pt-8 md:px-10 lg:px-16">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <Link
            to="/"
            className="inline-flex items-center gap-4 text-[12px] uppercase tracking-[0.18em] text-black/60 transition-all hover:opacity-100 hover:gap-6"
          >
            Retour
            <span className="h-px w-8 bg-black/30" />
          </Link>

          <div className="flex items-center gap-6 text-[12px] uppercase tracking-[0.18em] text-black/60">
            {previousProject ? (
              <Link
                to={`/projet/${previousProject.id}`}
                className="inline-flex items-center gap-3 transition-all hover:gap-5"
              >
                <span>Précédent</span>
                <span className="h-px w-8 bg-black/30" />
              </Link>
            ) : (
              <span className="opacity-30">Précédent</span>
            )}

            {nextProject ? (
              <Link
                to={`/projet/${nextProject.id}`}
                className="inline-flex items-center gap-3 transition-all hover:gap-5"
              >
                <span className="h-px w-8 bg-black/30" />
                <span>Suivant</span>
              </Link>
            ) : (
              <span className="opacity-30">Suivant</span>
            )}
          </div>
        </div>

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
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#3D2B1F]/40">
                Contexte
              </p>

              <p
                className="mt-6 max-w-[14ch] text-[clamp(2rem,3.4vw,4rem)] leading-[0.98] tracking-[-0.04em] text-[#3D2B1F]/90"
                style={{ fontFamily: project.typography.primary }}
              >
                {project.taglineSub}
              </p>
            </div>
          </MotionReveal>

          <MotionReveal direction="right" delay={0.08}>
            <div className="lg:pt-10">
              <p className="max-w-xl text-base leading-8 text-[#3D2B1F]/65">
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
              <div className="h-full overflow-hidden rounded-4xl border border-[#E1D8CF] bg-[#F1EAE2] shadow-[0_20px_60px_rgba(61,43,31,0.12)]">
                <img
                  src={project.images.full}
                  alt={`${project.title} - vue complète`}
                  className="block h-full w-full object-cover object-top scale-[1.01] transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
            </div>
          </MotionReveal>

          <div>
            <MokaDesignBlock project={project} />
          </div>

          <MotionReveal direction="up" delay={0.12}>
            <div className="max-w-xl self-start rounded-4xl border border-[#E1D8CF] bg-[#F6EFE7] p-10">
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#3D2B1F]/40">
                Intention
              </p>

              <p
                className="mt-6 text-[clamp(1.5rem,2vw,2.3rem)] leading-[1.08] tracking-[-0.03em] text-[#3D2B1F]/85"
                style={{ fontFamily: project.typography.primary }}
              >
                Une interface plus douce, plus chaleureuse, pensée pour rendre
                l’offre immédiatement lisible tout en installant une ambiance
                accueillante.
              </p>
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="bg-[#F3EEE8] px-6 py-28 md:px-10 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-3 items-stretch">
          {project.process.map((item, index) => {
            const directions = ["left", "up", "right"];
            const direction = directions[index % directions.length];

            return (
              <MotionReveal
                key={item.title}
                direction={direction}
                delay={index * 0.06}
              >
                <div className="flex h-full flex-col rounded-4xl border border-[#E1D8CF] bg-[#F8F5F0] p-8">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#3D2B1F]/45">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3
                    className="mt-5 text-[clamp(1.6rem,2vw,2.2rem)] leading-[1.05] tracking-[-0.03em] text-[#3D2B1F]/90"
                    style={{ fontFamily: project.typography.primary }}
                  >
                    {item.title}
                  </h3>

                  <p className="mt-4 grow text-base leading-7 text-[#3D2B1F]/65">
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
            <div className="overflow-hidden rounded-4xl border border-[#E1D8CF] bg-[#F1EAE2]">
              <img
                src={project.images.detailOne}
                alt={`${project.title} - détail 1`}
                className="block w-full object-cover object-top"
              />
            </div>
          </MotionReveal>

          <MotionReveal direction="right" delay={0.06}>
            <div className="overflow-hidden rounded-4xl border border-[#E1D8CF] bg-[#F1EAE2]">
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
              <div className="rounded-4xl border border-[#E1D8CF] bg-[#F6EFE7] p-10">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#3D2B1F]/40">
                  Mobile
                </p>

                <p
                  className="mt-6 max-w-lg text-[clamp(1.5rem,2vw,2.2rem)] leading-[1.08] tracking-[-0.03em] text-[#3D2B1F]/85"
                  style={{ fontFamily: project.typography.primary }}
                >
                  Une version mobile pensée pour conserver le confort de lecture
                  et l’accès rapide aux informations clés, sans perdre la
                  chaleur visuelle du projet.
                </p>
              </div>
            </MotionReveal>

            <MotionReveal direction="right" delay={0.08}>
              <div className="flex justify-center">
                <div className="w-95 max-w-full rounded-[3rem] bg-[#E8DDD1] p-3 shadow-[0_30px_80px_rgba(61,43,31,0.16)]">
                  <div className="overflow-hidden rounded-[2.5rem] bg-[#F8F5F0]">
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
          <div className="grid gap-6 border-t border-black/10 pt-10 md:grid-cols-3 md:items-center">
            <div>
              {previousProject ? (
                <Link
                  to={`/projet/${previousProject.id}`}
                  className="inline-flex items-center gap-4 text-xs uppercase tracking-[0.18em] text-black/65 transition-all hover:gap-6"
                >
                  <span className="h-px w-10 bg-black/35 transition-all" />
                  {previousProject.title}
                </Link>
              ) : (
                <span className="text-xs uppercase tracking-[0.18em] text-black/30">
                  —
                </span>
              )}
            </div>

            <div className="flex justify-center">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="inline-flex cursor-pointer items-center gap-3 text-xs uppercase tracking-[0.18em] text-black/65 transition-all hover:translate-y-1"
              >
                Haut
                <span className="text-base">↑</span>
              </button>
            </div>

            <div className="md:text-right">
              {nextProject ? (
                <Link
                  to={`/projet/${nextProject.id}`}
                  className="inline-flex items-center gap-4 text-xs uppercase tracking-[0.18em] text-black/65 transition-all hover:gap-6"
                >
                  {nextProject.title}
                  <span className="h-px w-10 bg-black/35 transition-all" />
                </Link>
              ) : (
                <span className="text-xs uppercase tracking-[0.18em] text-black/30">
                  —
                </span>
              )}
            </div>
          </div>
        </section>
      </MotionReveal>
    </main>
  );
}
