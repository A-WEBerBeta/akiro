import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import MotionReveal from "./MotionReveal";

export default function Projects() {
  return (
    <section
      id="réalisations"
      className="w-full overflow-hidden bg-white py-24 md:py-32 lg:py-40"
    >
      {/* HEADER */}
      <div className="mb-20 flex flex-col justify-between gap-10 px-6 md:mb-28 md:px-10 lg:mb-32 lg:flex-row lg:items-end lg:px-24">
        <MotionReveal direction="left">
          <div className="relative">
            <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.6em] text-black/20">
              Portfolio // Vol. 01
            </span>

            <h2 className="text-[clamp(3rem,9vw,7rem)] font-medium leading-[0.82] tracking-tight text-neutral-950">
              Concepts <br />
              <span className="font-light italic text-neutral-400">
                Matérialisés.
              </span>
            </h2>
          </div>
        </MotionReveal>

        <MotionReveal direction="right">
          <p className="max-w-[32ch] border-l border-black/5 pl-6 text-base font-light italic leading-relaxed text-black/40 md:text-lg lg:mb-30 lg:pl-8">
            Intersections entre design rigoureux et technologies web modernes.
          </p>
        </MotionReveal>
      </div>

      {/* LISTE */}
      <div className="flex flex-col gap-28 md:gap-36 lg:gap-[35vh]">
        {projects.slice(0, 3).map((project, index) => (
          <div
            key={project.id}
            className="relative flex w-full flex-col items-center"
          >
            {/* FILIGRANE */}
            <div
              className={`pointer-events-none absolute -top-14 z-0 w-full select-none md:-top-28 lg:-top-64 ${
                index % 2 === 0 ? "left-6 md:left-10" : "right-0 text-right"
              }`}
            >
              <span className="block text-[24vw] font-black uppercase leading-none tracking-tighter text-black/[0.035] md:text-[22vw] lg:text-[26vw] lg:text-black/5">
                {project.title.split(" ")[0]}
              </span>
            </div>

            <div className="relative z-10 w-full px-6 md:px-10 lg:px-24">
              <div
                className={`relative flex flex-col ${
                  index % 2 !== 0 ? "lg:items-start" : "lg:items-end"
                }`}
              >
                {/* SCREEN */}
                <div className="group relative w-full lg:w-[48%]">
                  <Link to={`/projet/${project.id}`} className="relative block">
                    <div className="relative aspect-16/10 rounded-2xl border border-black/3 bg-[#F8F8F8] p-1.5 shadow-[0_28px_80px_-30px_rgba(0,0,0,0.18)] transition-all duration-700 group-hover:shadow-[0_60px_120px_-20px_rgba(0,0,0,0.2)] md:rounded-[1.75rem] lg:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.12)]">
                      <div className="h-full w-full overflow-hidden rounded-2xl bg-white md:rounded-[1.35rem]">
                        <img
                          src={project.images.screen}
                          alt={project.title}
                          className="h-full w-full object-cover object-top transition-transform duration-[3s] group-hover:scale-105"
                        />
                      </div>
                    </div>
                  </Link>

                  {/* BLOC TEXTE DESKTOP */}
                  <div
                    className={`absolute -bottom-24 z-20 hidden w-[95%] lg:block ${
                      index % 2 !== 0 ? "-right-[90%]" : "-left-[90%]"
                    }`}
                  >
                    <MotionReveal direction="up">
                      <div className="rounded-[3.5rem] border border-neutral-100 bg-white p-16 shadow-[0_50px_120px_rgba(0,0,0,0.07)] md:p-20">
                        <div className="mb-12 flex items-center gap-8">
                          <span className="text-xl font-black opacity-10">
                            {project.index}
                          </span>
                          <div className="h-px w-24 bg-black/5" />
                          <span className="text-[12px] font-bold uppercase tracking-[0.6em] text-black/30 italic">
                            // {project.category}
                          </span>
                        </div>

                        <div className="flex flex-col justify-between gap-10 2xl:flex-row 2xl:items-end">
                          <div className="flex-1">
                            <h3 className="mb-8 text-[clamp(3rem,6vw,7rem)] font-medium leading-[0.75] tracking-[-0.07em] text-neutral-900">
                              {project.title}
                            </h3>

                            <p className="max-w-2xl text-2xl font-light italic leading-relaxed text-black/40">
                              {project.tagline}
                            </p>
                          </div>

                          <Link
                            to={`/projet/${project.id}`}
                            className="group/btn flex w-fit shrink-0 items-center gap-6 rounded-full border border-black/5 px-8 py-5 transition-all duration-500 hover:bg-black hover:text-white 2xl:gap-8 2xl:px-10 2xl:py-6"
                          >
                            <span className="text-[11px] font-black uppercase tracking-[0.35em] 2xl:text-[13px] 2xl:tracking-[0.4em]">
                              Explorer
                            </span>
                            <div className="h-px w-10 bg-current transition-all duration-500 group-hover/btn:w-16 2xl:w-12 2xl:group-hover/btn:w-20" />
                          </Link>
                        </div>
                      </div>
                    </MotionReveal>
                  </div>

                  {/* BLOC TEXTE MOBILE / TABLETTE */}
                  <MotionReveal direction="up">
                    <div className="mt-6 rounded-4xl border border-neutral-100 bg-white p-7 shadow-[0_30px_80px_rgba(0,0,0,0.06)] md:mt-8 md:rounded-[2.5rem] md:p-10 lg:hidden">
                      <div className="mb-8 flex items-center gap-5">
                        <span className="text-sm font-black opacity-15">
                          {project.index}
                        </span>
                        <div className="h-px w-12 bg-black/10" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.45em] text-black/30 italic">
                          // {project.category}
                        </span>
                      </div>

                      <h3 className="mb-5 text-[clamp(2.6rem,11vw,5rem)] font-medium leading-[0.82] tracking-[-0.07em] text-neutral-900">
                        {project.title}
                      </h3>

                      <p className="max-w-xl text-base font-light italic leading-relaxed text-black/45 md:text-xl">
                        {project.tagline}
                      </p>

                      <Link
                        to={`/projet/${project.id}`}
                        className="mt-8 flex w-fit items-center gap-6 rounded-full border border-black/5 px-7 py-4 transition-all duration-500 hover:bg-black hover:text-white"
                      >
                        <span className="text-[11px] font-black uppercase tracking-[0.35em]">
                          Explorer
                        </span>
                        <div className="h-px w-10 bg-current" />
                      </Link>
                    </div>
                  </MotionReveal>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
