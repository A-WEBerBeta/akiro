import mokaImg from "../assets/projects/moka.png";
import obsidianImg from "../assets/projects/obsidian.png";
import plomberieImg from "../assets/projects/plomberie.png";

export const projects = [
  {
    id: "plomberie-luneville",
    index: "01",
    title: "Plomberie Lunéville",
    category: "Site vitrine",
    color: "#DE8F61",
    year: "2026",
    role: "Conception & développement",
    tagline: "Présenter une activité locale de manière claire et accessible.",
    taglineSub:
      "Un site pensé pour un artisan local, avec un accès immédiat aux informations essentielles et à la prise de contact.",
    summary:
      "Conception d’un site vitrine pour une activité artisanale locale. L’objectif était de rendre l’information immédiatement accessible, avec une structure simple, une hiérarchie claire et une expérience optimisée pour le mobile.",
    image: plomberieImg,
    palette: ["#1E3A5F", "#F5F2EE", "#4FA3D1", "#DCE6EF"],
    typography: {
      primary: "Inter",
      secondary: "System UI",
    },
  },
  {
    id: "obsidian-ink",
    index: "02",
    title: "Obsidian Ink",
    category: "Site vitrine",
    color: "#A8B7C8",
    year: "2026",
    role: "Front-end development",
    tagline: "Créer une ambiance sans nuire à l’expérience.",
    taglineSub:
      "Un site pensé pour valoriser une identité forte tout en gardant un parcours utilisateur clair et rapide.",
    summary:
      "Réalisation d’un site vitrine avec une direction artistique marquée. Le travail s’est concentré sur l’équilibre entre esthétique et lisibilité, avec une navigation fluide et des animations discrètes.",
    image: obsidianImg,
    palette: ["#111111", "#F5F2EE", "#A8B7C8", "#D8D1C8"],
    typography: {
      primary: "Instrument Sans",
      secondary: "Georgia",
    },
  },
  {
    id: "moka-miel",
    index: "03",
    title: "Moka & Miel",
    category: "Site vitrine",
    color: "#819179",
    year: "2026",
    role: "Intégration front-end",
    tagline: "Rendre l’information accessible immédiatement.",
    taglineSub:
      "Une vitrine pensée pour un usage rapide : consulter, comprendre, décider.",
    summary:
      "Conception et intégration d’un site vitrine orienté contenu, avec un focus sur la lisibilité et l’accès rapide aux informations essentielles.",
    image: mokaImg,
    palette: ["#3D2B1F", "#F6EFE7", "#DE8F61", "#C7B7A3"],
    typography: {
      primary: "Playfair Display",
      secondary: "Inter",
    },
  },
];
