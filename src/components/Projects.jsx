import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section
      id="realisations"
      className="w-full px-6 py-24 md:px-10 lg:px-16 xl:px-20"
    >
      <div className="grid gap-16 lg:grid-cols-12">
        <Reveal
          className="lg:col-span-4"
          direction="left"
          distance={60}
          blur={6}
        >
          <p className="text-[11px] uppercase tracking-[0.2em] text-black/55">
            Réalisations
          </p>

          <h2 className="mt-6 max-w-[9ch] text-[clamp(3rem,4vw,5rem)] leading-[0.9] tracking-[-0.04em]">
            Des projets pensés pour être clairs et efficaces.
          </h2>

          <p className="mt-6 max-w-sm text-base leading-7 text-black/60">
            Une sélection de réalisations conçues pour présenter une activité
            avec justesse, lisibilité et cohérence.
          </p>
        </Reveal>

        <div className="lg:col-span-8 space-y-14">
          {projects.map((project) => (
            <Reveal
              key={project.id}
              direction="up"
              distance={60}
              blur={4}
              start="start 95%"
              end="start 60%"
            >
              <Link
                to={`/projet/${project.id}`}
                className="group cursor-pointer transition-transform duration-500 ease-out hover:-translate-y-1"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-black/55">
                    {project.index}
                  </span>

                  <span className="text-[11px] uppercase tracking-[0.2em] text-black/45">
                    {project.category}
                  </span>
                </div>

                <div className="overflow-hidden rounded-[2.5rem] bg-[#E9DED2]">
                  <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
                    {/* VISUAL */}
                    <div className="relative min-h-105 overflow-hidden bg-[#EFE7DF] p-8 md:p-10">
                      {/* bloc couleur principal */}
                      <div
                        className="absolute right-0 top-0 h-2/3 w-2/3 transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:translate-x-2 group-hover:-translate-y-2"
                        style={{ backgroundColor: project.color }}
                      />

                      {/* bloc secondaire */}
                      <div className="absolute bottom-0 left-0 h-1/2 w-1/2 bg-white/50 transition-all duration-700 ease-out group-hover:-translate-x-2 group-hover:translate-y-2" />

                      {/* faux navigateur avec vrai screen dedans */}
                      <div className="absolute left-1/2 top-1/2 h-[85%] w-[65%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl border border-black/5 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.10)] transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:-rotate-1">
                        {/* top bar navigateur */}
                        <div className="flex h-8 items-center gap-1.5 border-b border-black/5 px-5 py-4">
                          <span className="h-3 w-3 rounded-full bg-black/10" />
                          <span className="h-3 w-3 rounded-full bg-black/10" />
                          <span className="h-3 w-3 rounded-full bg-black/10" />
                        </div>

                        {/* screenshot */}
                        <div className="relative h-[calc(100%-45px)] w-full overflow-hidden bg-[#F5F2EE]">
                          <img
                            src={project.images.screen}
                            alt={project.title}
                            className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                          />

                          <div className="absolute inset-0 bg-white/10 transition-all duration-500 group-hover:bg-white/0" />
                        </div>
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="flex flex-col justify-between p-8 md:p-10">
                      <div>
                        <h3 className="text-[clamp(2.2rem,3vw,4rem)] leading-[0.95] tracking-[-0.04em] transition-transform duration-500 ease-out group-hover:translate-x-1 ">
                          {project.title}
                        </h3>

                        <p className="mt-4 max-w-md text-base leading-7 text-black/60">
                          {project.tagline}
                        </p>
                      </div>

                      <div className="mt-10">
                        <span className="inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.18em] text-black/80 transition-all group-hover:gap-5">
                          Voir le projet
                          <span className="h-px w-10 bg-black/40 transition-all group-hover:w-14" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
