import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Reveal from "../components/Reveal";
import { projects } from "../data/projects";
import ScrollTopBtn from "./ScrollTopBtn";

function ProjectIntro({ project }) {
  return (
    <section className="grid gap-12 lg:grid-cols-12">
      <div className="lg:col-span-4">
        <p className="text-[11px] uppercase tracking-[0.2em] text-black/45">
          Contexte
        </p>
      </div>

      <div className="space-y-6 lg:col-span-8">
        <p className="max-w-3xl text-[clamp(1.6rem,2.6vw,2.8rem)] leading-[1.05] tracking-[-0.03em]">
          {project.taglineSub}
        </p>

        <p className="max-w-2xl text-base leading-7 text-black/65">
          {project.summary}
        </p>
      </div>
    </section>
  );
}

function ProjectDesignSystem({ project }) {
  return (
    <section className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-12">
        {/* visuel gauche */}
        <div className="overflow-hidden rounded-4xl bg-[#DCEAF3] lg:col-span-5">
          <img
            src={project.images.gallery[0]}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        {/* TYPO */}
        <div className="flex flex-col justify-between rounded-4xl bg-[#30363E] p-10 text-white lg:col-span-7">
          <div>
            <h3 className="text-[clamp(2.5rem,4vw,4rem)] leading-none tracking-tight">
              {project.typography.primary}
            </h3>

            <p className="mt-6 text-[1.6rem] leading-relaxed text-white/80">
              abcdefghijklmnopqrstuvwxyz
              <br />
              0123456789
            </p>
          </div>

          <div className="mt-8 flex gap-3">
            {project.typography.weights.map((w) => (
              <span
                key={w}
                className="rounded-full bg-white/10 px-4 py-2 text-sm"
              >
                {w}
              </span>
            ))}
          </div>
        </div>

        {/* PALETTE GRID */}
        <div className="grid gap-6 sm:grid-cols-2 lg:col-span-8">
          {project.palette.slice(0, 4).map((color) => (
            <div
              key={color.hex}
              className="rounded-4xl p-6"
              style={{ backgroundColor: color.hex }}
            >
              <div className="h-14 w-24 rounded-xl border border-black/20" />

              <p className="mt-4 text-sm font-medium text-black/80">
                {color.name}
              </p>
              <p className="text-xs text-black/60">{color.hex}</p>
            </div>
          ))}
        </div>

        {/* GROS BLOC COULEUR (comme ta ref) */}
        <div
          className="flex flex-col justify-between rounded-4xl p-8 text-white lg:col-span-4"
          style={{ backgroundColor: project.palette[4]?.hex || "#30363E" }}
        >
          <div className="h-32 rounded-xl border border-white/30" />

          <div className="mt-6">
            <p className="text-sm opacity-80">
              {project.palette[4]?.name || "Primary"}
            </p>
            <p className="text-xs opacity-60">{project.palette[4]?.hex}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectProcess({ items }) {
  return (
    <section className="grid gap-10 lg:grid-cols-3">
      {items.map((item) => (
        <div key={item.title} className="space-y-4">
          <p className="text-[11px] uppercase tracking-[0.2em] text-black/45">
            {item.title}
          </p>
          <p className="text-base leading-7 text-black/70">{item.text}</p>
        </div>
      ))}
    </section>
  );
}

function ProjectGallery({ images }) {
  return (
    <section className="space-y-6">
      <div className="overflow-hidden rounded-4xl bg-[#F3ECE4]">
        <img
          src={images[1]}
          alt=""
          className="w-full object-cover object-top"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex items-end rounded-4xl bg-[#EFE7DF] p-10">
          <p className="max-w-md text-[clamp(1.5rem,2vw,2.2rem)] leading-[1.1] tracking-[-0.03em] text-black/75">
            Une mise en page pensée pour garder une lecture claire, tout en
            donnant une vraie présence visuelle au projet.
          </p>
        </div>

        <div className="flex items-center justify-center rounded-4xl bg-[#F3ECE4] p-10">
          <div className="relative w-85 max-w-full rounded-[2.8rem] bg-[#111111] p-3 shadow-[0_24px_60px_rgba(0,0,0,0.18)]">
            <div className="overflow-hidden rounded-[2.3rem] bg-black">
              <img
                src={images[2]}
                alt=""
                className="block h-auto w-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectNavigation({ previousProject, nextProject }) {
  return (
    <section className="border-t border-black/10 pt-10">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          {previousProject ? (
            <Link
              to={`/projet/${previousProject.id}`}
              className="group block rounded-4xl bg-[#E9DED2] p-8 transition-transform duration-500 hover:-translate-y-1"
            >
              <p className="text-[11px] uppercase tracking-[0.2em] text-black/45">
                Projet précédent
              </p>
              <h3 className="mt-4 text-3xl leading-none tracking-tight">
                {previousProject.title}
              </h3>
            </Link>
          ) : (
            <div />
          )}
        </div>

        <div>
          {nextProject ? (
            <Link
              to={`/projet/${nextProject.id}`}
              className="group block rounded-4xl bg-[#E9DED2] p-8 text-right transition-transform duration-500 hover:-translate-y-1"
            >
              <p className="text-[11px] uppercase tracking-[0.2em] text-black/45">
                Projet suivant
              </p>
              <h3 className="mt-4 text-3xl leading-none tracking-tight">
                {nextProject.title}
              </h3>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </section>
  );
}

export default function ProjectPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const currentIndex = projects.findIndex((project) => project.id === id);
  const project = projects[currentIndex];

  if (!project) {
    return (
      <main className="min-h-screen bg-[#F3F0EC] px-6 py-24 text-[#161616] md:px-10 lg:px-16 xl:px-20">
        <p>Projet introuvable.</p>
      </main>
    );
  }

  const previousProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <main className="min-h-screen bg-[#F3F0EC] text-[#161616]">
      <div className="px-6 pt-8 md:px-10 lg:px-16 xl:px-20">
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.18em] text-black/70 transition-opacity hover:opacity-100"
        >
          Retour
          <span className="h-px w-10 bg-black/30" />
        </button>
      </div>

      <section className="px-6 pb-16 pt-12 md:px-10 lg:px-16 xl:px-20">
        <Reveal
          direction="up"
          distance={50}
          blur={4}
          start="start 95%"
          end="start 65%"
        >
          <p className="text-[11px] uppercase tracking-[0.2em] text-black/50">
            {project.index} — {project.category}
          </p>

          <h1 className="mt-6 max-w-[12ch] text-[clamp(4rem,8vw,8rem)] leading-[0.9] tracking-[-0.05em]">
            {project.title}
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-7 text-black/60">
            {project.tagline}
          </p>
        </Reveal>
      </section>

      <Reveal
        direction="up"
        distance={60}
        blur={4}
        start="start 95%"
        end="start 65%"
      >
        <section className="w-full">
          <div className="h-[50vh] md:h-[60vh] lg:h-[80vh] w-full overflow-hidden bg-[#E9DED2]">
            <img
              src={project.images.hero}
              alt={project.title}
              className="h-full w-full object-cover object-top"
            />
          </div>
        </section>
      </Reveal>

      <div className="space-y-32 px-6 py-24 md:px-10 lg:px-16 xl:px-20">
        <Reveal
          direction="up"
          distance={50}
          blur={4}
          start="start 95%"
          end="start 65%"
        >
          <ProjectIntro project={project} />
        </Reveal>

        <Reveal
          direction="up"
          distance={50}
          blur={4}
          start="start 95%"
          end="start 65%"
        >
          <ProjectDesignSystem project={project} />
        </Reveal>

        <Reveal
          direction="up"
          distance={50}
          blur={4}
          start="start 95%"
          end="start 65%"
        >
          <ProjectProcess items={project.process} />
        </Reveal>

        <Reveal
          direction="up"
          distance={50}
          blur={4}
          start="start 95%"
          end="start 65%"
        >
          <ProjectGallery images={project.images.gallery} />
        </Reveal>

        <ProjectNavigation
          previousProject={previousProject}
          nextProject={nextProject}
        />
      </div>

      <div className="-mt-4 px-6 pb-8 md:px-10 lg:px-16 xl:px-20">
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.18em] text-black/70 transition-opacity hover:opacity-100"
        >
          Retour
          <span className="h-px w-10 bg-black/30" />
        </button>
      </div>

      <ScrollTopBtn />
    </main>
  );
}
