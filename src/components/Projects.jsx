import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import MotionReveal from "./MotionReveal";

export default function Projects() {
  return (
    <section
      id="réalisations"
      className="w-full py-40 bg-white overflow-hidden"
    >
      {/* --- HEADER : Wording Archive --- */}
      <div className="px-6 md:px-10 lg:px-24 mb-32 flex flex-col md:flex-row md:items-end justify-between gap-12">
        <MotionReveal direction="left">
          <div className="relative">
            <span className="text-[10px] uppercase tracking-[0.6em] text-black/20 font-bold block mb-4">
              Portfolio // Vol. 01
            </span>
            <h2 className="text-[clamp(2.5rem,6vw,7rem)] font-medium leading-[0.8] tracking-tight text-neutral-950">
              Concepts <br />
              <span className="italic font-light text-neutral-400">
                Matérialisés.
              </span>
            </h2>
          </div>
        </MotionReveal>

        <MotionReveal direction="right">
          <p className="max-w-[30ch] mb-30 text-lg font-light text-black/40 leading-relaxed italic border-l border-black/5 pl-8">
            Intersections entre design rigoureux et technologies web modernes.
          </p>
        </MotionReveal>
      </div>

      {/* --- LISTE (On ne touche à rien d'autre, tes réglages sont conservés) --- */}
      <div className="flex flex-col gap-[35vh]">
        {projects.slice(0, 3).map((project, index) => (
          <div
            key={project.id}
            className="relative w-full flex flex-col items-center"
          >
            {/* FILIGRANE */}
            <div
              className={`absolute -top-64 w-full pointer-events-none select-none z-0 
              ${index % 2 === 0 ? "left-10" : "right-0 text-right"}`}
            >
              <span className="text-[26vw] font-black leading-none text-black/5 uppercase tracking-tighter block">
                {project.title.split(" ")[0]}
              </span>
            </div>

            <div className="relative z-10 w-full px-6 md:px-10 lg:px-24">
              <div
                className={`relative flex flex-col ${index % 2 !== 0 ? "lg:items-start" : "lg:items-end"}`}
              >
                {/* SCREEN (Ton 48% nickel) */}
                <div className="w-full lg:w-[48%] group relative">
                  <Link to={`/projet/${project.id}`} className="block relative">
                    <div className="relative aspect-16/10 bg-[#F8F8F8] p-1.5 rounded-2xl border border-black/3 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.12)] transition-all duration-700 group-hover:shadow-[0_60px_120px_-20px_rgba(0,0,0,0.2)]">
                      <div className="h-full w-full overflow-hidden rounded-[1.2rem] bg-white">
                        <img
                          src={project.images.screen}
                          alt={project.title}
                          className="h-full w-full object-cover object-top transition-transform duration-[3s] group-hover:scale-105"
                        />
                      </div>
                    </div>
                  </Link>

                  {/* BLOC TEXTE (Tes réglages validés) */}
                  <div
                    className={`absolute -bottom-24 z-20 hidden lg:block w-[95%] 
                    ${index % 2 !== 0 ? "-right-[90%]" : "-left-[90%]"}`}
                  >
                    <MotionReveal direction="up">
                      <div className="p-16 md:p-20 bg-white border border-neutral-100 shadow-[0_50px_120px_rgba(0,0,0,0.07)] rounded-[3.5rem]">
                        <div className="flex items-center gap-8 mb-12">
                          <span className="text-xl font-black opacity-10">
                            {project.index}
                          </span>
                          <div className="h-px w-24 bg-black/5" />
                          <span className="text-[12px] uppercase tracking-[0.6em] text-black/30 font-bold italic">
                            // {project.category}
                          </span>
                        </div>

                        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
                          <div className="flex-1">
                            <h3 className="text-[clamp(3rem,6vw,7rem)] font-medium leading-[0.75] tracking-[-0.07em] text-neutral-900 mb-8">
                              {project.title}
                            </h3>
                            <p className="text-2xl font-light text-black/40 leading-relaxed italic max-w-2xl">
                              {project.tagline}
                            </p>
                          </div>

                          <Link
                            to={`/projet/${project.id}`}
                            className="group/btn flex items-center gap-8 py-6 px-10 border border-black/5 rounded-full hover:bg-black hover:text-white transition-all duration-500 shrink-0"
                          >
                            <span className="text-[13px] font-black uppercase tracking-[0.4em]">
                              Explorer
                            </span>
                            <div className="h-px w-12 bg-current group-hover/btn:w-20 transition-all duration-500" />
                          </Link>
                        </div>
                      </div>
                    </MotionReveal>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
