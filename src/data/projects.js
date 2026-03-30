import plomberieScreen1 from "../assets/projects/plomberie/plomberie-1.png";
import plomberieScreen2 from "../assets/projects/plomberie/plomberie-2.png";
import plomberieHero from "../assets/projects/plomberie/plomberie-hero.png";
import plomberieScreen3 from "../assets/projects/plomberie/plomberie-mobile.png";
import plomberieScreen from "../assets/projects/plomberie/plomberie-screen.png";

import obsidianScreen1 from "../assets/projects/obsidian/obsidian-1.png";
import obsidianScreen2 from "../assets/projects/obsidian/obsidian-2.png";
import obsidianScreen3 from "../assets/projects/obsidian/obsidian-mobile.png";
import obsidianScreen from "../assets/projects/obsidian/obsidian-screen.png";
import obsidianHero from "../assets/projects/obsidian/test.png";

import mokaScreen1 from "../assets/projects/moka/moka-1.png";
import mokaScreen2 from "../assets/projects/moka/moka-2.png";
import mokaHero from "../assets/projects/moka/moka-hero.png";
import mokaScreen3 from "../assets/projects/moka/moka-mobile.png";
import mokaScreen from "../assets/projects/moka/moka-screen.png";

export const projects = [
  {
    id: "plomberie-luneville",
    index: "01",
    title: "Plomberie Lunéville",
    category: "Site vitrine",
    year: "2026",
    role: "Conception & développement",
    tagline: "Présenter une activité locale de manière claire et accessible.",
    taglineSub:
      "Un site pensé pour rendre les services, les informations utiles et la prise de contact immédiatement compréhensibles.",
    summary:
      "Conception d’un site vitrine pour une activité artisanale locale, avec un focus sur la lisibilité, la hiérarchie des contenus et l’accès rapide aux éléments essentiels.",
    process: [
      {
        title: "Objectif",
        text: "Créer une présence en ligne rassurante, directe et lisible, pensée pour des utilisateurs qui cherchent avant tout une information rapide et un contact simple.",
      },
      {
        title: "Structure",
        text: "La page a été construite autour d’une hiérarchie très claire : services, zone d’intervention, éléments de réassurance et accès immédiat à la prise de contact.",
      },
      {
        title: "Direction",
        text: "Le contraste entre bleu profond, accents orange et zones claires permet de rendre le site plus identifiable tout en gardant une lecture fluide.",
      },
    ],
    images: {
      screen: plomberieScreen,
      hero: plomberieHero,
      gallery: [plomberieScreen1, plomberieScreen2, plomberieScreen3],
    },
    palette: [
      { name: "Deep blue", hex: "#1E3A5F" },
      { name: "Bright blue", hex: "#4FA3D1" },
      { name: "Soft sand", hex: "#F5F2EE" },
      { name: "Accent orange", hex: "#ff5722" },
    ],
    typography: {
      primary: "Inter",
      secondary: "System UI",
      weights: ["Regular", "SemiBold", "Bold"],
    },
    homeColor: "#D88A5A",
  },

  {
    id: "obsidian-ink",
    index: "02",
    title: "Obsidian Ink",
    category: "Site vitrine",
    year: "2026",
    role: "Front-end development",
    tagline: "Créer une ambiance sans nuire à l’expérience.",
    taglineSub:
      "Un site pensé pour valoriser une identité forte tout en gardant un parcours utilisateur clair et rapide.",
    summary:
      "Réalisation d’un site vitrine avec une direction artistique marquée. Le travail s’est concentré sur l’équilibre entre esthétique et lisibilité, avec une navigation fluide et des animations discrètes.",
    process: [
      {
        title: "Objectif",
        text: "Créer une présence visuelle forte sans alourdir la lecture ni compliquer la navigation.",
      },
      {
        title: "Structure",
        text: "Organiser les contenus pour guider la découverte, mettre en valeur l’univers du studio et préserver un parcours fluide.",
      },
      {
        title: "Direction",
        text: "S’appuyer sur une palette sobre, une hiérarchie claire et des animations discrètes pour garder un rendu net et cohérent.",
      },
    ],
    images: {
      screen: obsidianScreen,
      hero: obsidianHero,
      gallery: [obsidianScreen1, obsidianScreen2, obsidianScreen3],
    },
    palette: [
      { name: "Black", hex: "#111111" },
      { name: "Off white", hex: "#F5F2EE" },
      { name: "Dust blue", hex: "#A8B7C8" },
      { name: "Muted beige", hex: "#D8D1C8" },
    ],
    typography: {
      primary: "Instrument Sans",
      secondary: "Georgia",
      weights: ["Regular", "Medium", "Bold"],
    },
    homeColor: "#A8B7C8",
  },

  {
    id: "moka-miel",
    index: "03",
    title: "Moka & Miel",
    category: "Site vitrine",
    year: "2026",
    role: "Intégration front-end",
    tagline: "Rendre l’information accessible immédiatement.",
    taglineSub:
      "Une vitrine pensée pour un usage rapide : consulter, comprendre, décider.",
    summary:
      "Conception et intégration d’un site vitrine orienté contenu, avec un focus sur la lisibilité et l’accès rapide aux informations essentielles.",
    process: [
      {
        title: "Objectif",
        text: "Mettre en avant les contenus essentiels sans surcharge, pour permettre une compréhension immédiate de l’offre.",
      },
      {
        title: "Structure",
        text: "La hiérarchie a été pensée autour des attentes principales : menu, boissons, informations utiles et navigation simple.",
      },
      {
        title: "Direction",
        text: "Une palette douce et chaleureuse accompagne une composition claire, avec une interface pensée pour rester accueillante et lisible.",
      },
    ],
    images: {
      screen: mokaScreen,
      hero: mokaHero,
      gallery: [mokaScreen1, mokaScreen2, mokaScreen3],
    },
    palette: [
      { name: "Coffee brown", hex: "#3D2B1F" },
      { name: "Warm cream", hex: "#F6EFE7" },
      { name: "Soft orange", hex: "#DE8F61" },
      { name: "Muted sand", hex: "#C7B7A3" },
    ],
    typography: {
      primary: "Playfair Display",
      secondary: "Inter",
      weights: ["Regular", "Medium", "Bold"],
    },
    homeColor: "#7E8F77",
  },
];
