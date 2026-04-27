import { useEffect } from "react";
import { useParams } from "react-router-dom";
import MokaProjectPage from "../components/MokaProjectPage";
import ObsidianProjectPage from "../components/ObsidianProjectPage";
import PlomberieProjectPage from "../components/PlomberieProjectPage";
import { projects } from "../data/projects";

export default function ProjectPage() {
  const { id } = useParams();
  const currentIndex = projects.findIndex((item) => item.id === id);
  const project = projects[currentIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

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

  const sharedProps = {
    project,
    previousProject,
    nextProject,
  };

  if (project.id === "plomberie-luneville") {
    return <PlomberieProjectPage {...sharedProps} />;
  }

  if (project.id === "obsidian-ink") {
    return <ObsidianProjectPage {...sharedProps} />;
  }

  if (project.id === "moka-miel") {
    return <MokaProjectPage {...sharedProps} />;
  }

  return (
    <main className="min-h-screen bg-[#F3F0EC] px-6 py-24 text-[#161616] md:px-10 lg:px-16 xl:px-20">
      <p>Page projet à construire pour {project.title}.</p>
    </main>
  );
}
