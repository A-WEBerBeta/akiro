import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ObsidianProjectPage from "../../components/ObsidianProjectPage";
import PlomberieProjectPage from "../../components/PlomberieProjectPage";
import { projects } from "../../data/projects";

export default function ProjectPage() {
  const { id } = useParams();
  const project = projects.find((item) => item.id === id);

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

  if (project.id === "plomberie-luneville") {
    return <PlomberieProjectPage project={project} />;
  }

  if (project.id === "obsidian-ink") {
    return <ObsidianProjectPage project={project} />;
  }

  return (
    <main className="min-h-screen bg-[#F3F0EC] px-6 py-24 text-[#161616] md:px-10 lg:px-16 xl:px-20">
      <p>Page projet à construire pour {project.title}.</p>
    </main>
  );
}
