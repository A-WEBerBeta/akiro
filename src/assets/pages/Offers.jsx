import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useRef, useState } from "react";
import MotionReveal from "../../components/MotionReveal";

const offers = {
  vitrine: {
    number: "01",
    label: "Site vitrine",
    baseline: "Créer une présence web claire, crédible et professionnelle.",
    plans: [
      {
        name: "Essentiel",
        price: "890€",
        text: "Pour lancer une présence web simple, propre et rassurante.",
        items: [
          "1 à 3 pages essentielles",
          "Design responsive",
          "Formulaire de contact",
          "SEO local optimisé",
          "Structure claire et efficace",
        ],
      },
      {
        name: "Signature",
        price: "1290€",
        featured: true,
        text: "Pour une vitrine plus complète, pensée pour rassurer et convertir.",
        items: [
          "4 à 6 pages structurées",
          "Design premium sur mesure",
          "Animations fluides et discrètes",
          "Parcours orienté conversion",
          "SEO local renforcé",
          "Structure de contenu guidée",
        ],
      },
      {
        name: "Premium",
        price: "Sur devis",
        text: "Pour un site plus ambitieux, avec une image forte et un accompagnement poussé.",
        items: [
          "Architecture sur mesure",
          "Image de marque renforcée",
          "Textes guidés conversion",
          "SEO avancé",
          "Point stratégique après lancement",
          "Priorité planning projet",
        ],
      },
    ],
  },

  refonte: {
    number: "02",
    label: "Refonte",
    baseline: "Moderniser l’existant pour gagner en crédibilité et efficacité.",
    plans: [
      {
        name: "Essentiel",
        price: "690€",
        text: "Pour remettre un site vieillissant au propre.",
        items: [
          "Audit rapide de l’existant",
          "Refonte visuelle ciblée",
          "Responsive mobile",
          "Lisibilité renforcée",
          "Base modernisée et claire",
        ],
      },
      {
        name: "Signature",
        price: "990€",
        featured: true,
        text: "Pour transformer un ancien site en vitrine actuelle et rassurante.",
        items: [
          "Audit UX & image",
          "Nouvelle direction graphique",
          "Structure repensée",
          "Navigation plus fluide",
          "SEO local renforcé",
          "Stabilisation post-lancement",
        ],
      },
      {
        name: "Premium",
        price: "Sur devis",
        text: "Pour repositionner votre image avec une refonte complète.",
        items: [
          "Refonte globale sur mesure",
          "Contenus retravaillés",
          "Image de marque renforcée",
          "SEO avancé",
          "Point stratégique après lancement",
          "Priorité planning projet",
        ],
      },
    ],
  },

  landing: {
    number: "03",
    label: "Landing page",
    baseline: "Une page ciblée pour présenter, convaincre et convertir.",
    plans: [
      {
        name: "Essentiel",
        price: "590€",
        text: "Pour présenter une offre clairement sur une page efficace.",
        items: [
          "Page unique structurée",
          "Responsive mobile",
          "Call-to-action visible",
          "Design propre et rapide",
          "Message clair et direct",
        ],
      },
      {
        name: "Signature",
        price: "790€",
        featured: true,
        text: "Pour convaincre davantage et générer plus de demandes.",
        items: [
          "Storytelling structuré",
          "Design premium",
          "Sections orientées conversion",
          "Animations subtiles",
          "Optimisation mobile",
          "Structure de contenu guidée",
        ],
      },
      {
        name: "Premium",
        price: "Sur devis",
        text: "Pour une campagne stratégique à fort impact.",
        items: [
          "Direction marketing dédiée",
          "Textes guidés conversion",
          "Parcours utilisateur poussé",
          "Variantes possibles",
          "Point d’optimisation après lancement",
          "Priorité planning projet",
        ],
      },
    ],
  },
};

const tabs = [
  { key: "vitrine", label: "Site vitrine", number: "01" },
  { key: "refonte", label: "Refonte", number: "02" },
  { key: "landing", label: "Landing page", number: "03" },
];

export default function Offers() {
  const [activeTab, setActiveTab] = useState("vitrine");
  const [hoveredTab, setHoveredTab] = useState(null);
  const current = offers[activeTab];
  const packsRef = useRef(null);

  const handleTabClick = (key) => {
    setActiveTab(key);

    setTimeout(() => {
      packsRef.current?.scrollIntoView(
        {
          behavior: "smooth",
          block: "start",
        },
        80,
      );
    });
  };

  return (
    <main className="min-h-screen bg-(--background) text-neutral-950">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-20 pt-32 md:px-10 lg:px-16 lg:pb-28 lg:pt-40 xl:px-20">
        <div className="pointer-events-none absolute left-0 top-8 z-0 w-full select-none text-center opacity-[0.045]">
          <span className="text-[28vw] font-black uppercase leading-none tracking-tighter text-neutral-950">
            OFFRES
          </span>
        </div>

        <div className="relative z-10 grid gap-16 lg:grid-cols-[1fr_520px] lg:items-end">
          <div>
            <MotionReveal direction="up" delay={0.1}>
              <p className="text-[11px] font-bold uppercase tracking-[0.5em] text-neutral-400">
                Akiro — Offres & tarifs
              </p>
            </MotionReveal>

            <MotionReveal direction="up" delay={0.2}>
              <h1 className="mt-10 max-w-6xl text-[clamp(3.5rem,8.8vw,9rem)] font-black uppercase leading-[0.78] tracking-[-0.075em]">
                Des offres claires
                <span className="block font-medium text-neutral-500">
                  sans formule floue.
                </span>
              </h1>
            </MotionReveal>
          </div>

          <MotionReveal direction="up" delay={0.35}>
            <p className="max-w-130 border-l-2 border-neutral-900/10 pl-8 text-lg leading-relaxed text-neutral-600 md:text-xl">
              Sites vitrines, refontes et landing pages pour les artisans,
              indépendants et entreprises du Grand-Est.
            </p>
          </MotionReveal>
        </div>
      </section>

      {/* BARRE OFFRES */}
      <section className="px-6 md:px-10 lg:px-16 xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 28, clipPath: "inset(0 0 100% 0)" }}
          animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
          transition={{
            duration: 0.9,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid overflow-hidden border border-neutral-950/10 bg-white/35 lg:grid-cols-3"
        >
          {tabs.map((tab, index) => {
            const active = activeTab === tab.key;

            return (
              <motion.button
                key={tab.key}
                onClick={() => handleTabClick(tab.key)}
                onMouseEnter={() => setHoveredTab(tab.key)}
                onMouseLeave={() => setHoveredTab(null)}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.75,
                  delay: 0.18 + index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`group relative min-h-42.5 cursor-pointer border-b border-neutral-950/10 p-7 text-left transition-colors duration-500 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0 ${
                  active ? "bg-(--akiro-dark) text-white" : "hover:bg-white/60"
                }`}
              >
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[11px] font-bold tracking-[0.4em] ${
                        active ? "text-white/45" : "text-neutral-400"
                      }`}
                    >
                      {tab.number}
                    </span>

                    <span
                      className={`text-[9px] font-black uppercase tracking-[0.35em] ${
                        active ? "text-white/45" : "text-neutral-300"
                      }`}
                    >
                      {active ? "Sélectionné" : "Voir"}
                    </span>
                  </div>

                  {active ? (
                    <motion.span
                      animate={{ x: hoveredTab === tab.key ? 6 : 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="block text-[clamp(2.4rem,4.8vw,5.4rem)] font-black uppercase leading-[0.82] tracking-[-0.075em] text-white"
                    >
                      {tab.label}
                    </motion.span>
                  ) : (
                    <motion.span
                      initial={false}
                      animate={{
                        backgroundPosition:
                          hoveredTab === tab.key ? "0% 50%" : "100% 50%",
                        x: hoveredTab === tab.key ? 6 : 0,
                      }}
                      transition={{
                        backgroundPosition: {
                          duration: 0.9,
                          ease: [0.19, 1, 0.22, 1],
                        },
                        x: {
                          duration: 0.5,
                          ease: [0.22, 1, 0.36, 1],
                        },
                      }}
                      className="block bg-clip-text text-[clamp(2.4rem,4.8vw,5.4rem)] font-black uppercase leading-[0.82] tracking-[-0.075em] text-transparent"
                      style={{
                        backgroundImage:
                          "linear-gradient(90deg, #0a0a0a 0%, #0a0a0a 50%, #d4d4d4 50%, #d4d4d4 100%)",
                        backgroundSize: "200% 100%",
                      }}
                    >
                      {tab.label}
                    </motion.span>
                  )}
                </div>

                <motion.div
                  initial={false}
                  animate={{
                    scaleX: active || hoveredTab === tab.key ? 1 : 0.18,
                    opacity: active || hoveredTab === tab.key ? 1 : 0.45,
                  }}
                  transition={{ duration: 0.65, ease: [0.19, 1, 0.22, 1] }}
                  className="pointer-events-none absolute bottom-0 left-0 h-0.75 w-full origin-left"
                  style={{ backgroundColor: offers[tab.key].accent }}
                />
              </motion.button>
            );
          })}
        </motion.div>
      </section>

      {/* OFFRE ACTIVE */}
      <section
        ref={packsRef}
        className="px-6 py-20 md:px-10 lg:px-16 lg:py-28 xl:px-20"
      >
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-10 flex flex-col gap-4 border-b border-neutral-950/10 pb-8 md:flex-row md:items-center md:justify-between">
            <p className="text-[11px] font-bold uppercase tracking-[0.45em] text-neutral-400">
              {current.number} — Formules disponibles
            </p>

            <p className="max-w-xl text-base leading-relaxed text-neutral-500 md:text-right">
              {current.baseline}
            </p>
          </div>

          {/* FICHES NIVEAUX */}
          <div className="grid border-y border-neutral-950/10 lg:grid-cols-3">
            {current.plans.map((plan, index) => {
              const isFeatured = plan.featured;

              const accentColor =
                index === 0
                  ? "#819179" // vert
                  : index === 1
                    ? "#DE8F61" // orange
                    : "#A8B7C8"; // bleu

              return (
                <article
                  key={plan.name}
                  className={`group relative flex min-h-150 flex-col overflow-hidden border-b border-neutral-950/10 p-8 last:border-b-0 transition-colors duration-500 lg:border-b-0 lg:border-r lg:last:border-r-0 xl:p-10 ${
                    isFeatured
                      ? "bg-(--akiro-dark) text-white"
                      : "bg-white/40 hover:bg-white/75"
                  }`}
                >
                  {/* Accent vertical fixe par position */}
                  <div className="absolute left-0 top-0 h-full w-3.5 overflow-hidden">
                    <div
                      className="h-full w-full origin-left scale-x-[0.28] transition-transform duration-700 ease-[0.19,1,0.22,1] group-hover:scale-x-100"
                      style={{ backgroundColor: accentColor }}
                    />
                  </div>

                  {/* Numéro fantôme */}
                  <span
                    className={`pointer-events-none absolute right-2 top-0 select-none text-[7rem] font-black leading-none tracking-[-0.08em] transition-opacity duration-500 ${
                      isFeatured
                        ? "text-white/4.5 group-hover:text-white/[0.07]"
                        : "text-neutral-950/[0.035] group-hover:text-neutral-950/6"
                    }`}
                  >
                    0{index + 1}
                  </span>

                  {/* Header */}
                  <div className="relative z-10 mb-14 flex min-h-16 items-start justify-between gap-8">
                    <span
                      className={`pt-1 text-[10px] font-bold uppercase tracking-[0.4em] ${
                        isFeatured ? "text-white/35" : "text-neutral-400"
                      }`}
                    >
                      Niveau 0{index + 1}
                    </span>

                    <div className="h-8 flex items-start">
                      {isFeatured && (
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/[0.035] px-4 py-2 text-[9px] font-black uppercase tracking-[0.32em] text-white/72">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#DE8F61]" />
                          Choix recommandé
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Titre */}
                  <div className="relative z-10 transition-transform duration-500 ease-[0.22,1,0.36,1] group-hover:translate-x-1">
                    <h3 className="text-[clamp(3rem,4.8vw,5.8rem)] font-black uppercase leading-[0.78] tracking-[-0.08em]">
                      {plan.name}
                    </h3>

                    <p
                      className={`mt-8 max-w-sm text-base leading-7 ${
                        isFeatured ? "text-white/58" : "text-neutral-500"
                      }`}
                    >
                      {plan.text}
                    </p>
                  </div>

                  {/* Liste */}
                  <div className="relative z-10 mt-12 space-y-4">
                    {plan.items.map((item) => (
                      <div
                        key={item}
                        className="flex gap-3 transition-transform duration-500 ease-[0.22,1,0.36,1] group-hover:translate-x-1"
                      >
                        <Check
                          size={15}
                          strokeWidth={2.4}
                          className="mt-1 shrink-0"
                          style={{
                            color: accentColor,
                          }}
                        />

                        <span
                          className={`text-sm leading-6 ${
                            isFeatured ? "text-white/68" : "text-neutral-600"
                          }`}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Prix */}
                  <div className="relative z-10 mt-auto pt-16">
                    <div
                      className={`mb-8 h-px w-full transition-colors duration-500 ${
                        isFeatured ? "bg-white/10" : "bg-neutral-950/10"
                      }`}
                    />

                    <p
                      className={`text-[10px] font-bold uppercase tracking-[0.35em] ${
                        isFeatured ? "text-white/35" : "text-neutral-400"
                      }`}
                    >
                      {plan.price === "Sur devis" ? "Tarif" : "À partir de"}
                    </p>

                    <div className="mt-4 flex items-end justify-between gap-6">
                      <p className="text-[clamp(3rem,4.4vw,5.4rem)] font-light leading-none tracking-[-0.08em]">
                        {plan.price}
                      </p>

                      <a
                        href="/#contact"
                        className={`group/btn grid h-12 w-12 shrink-0 place-items-center rounded-full transition-all duration-500 group-hover:scale-110 ${
                          isFeatured
                            ? "bg-white text-neutral-950"
                            : "bg-neutral-950 text-white"
                        }`}
                        aria-label={`Demander un devis pour ${plan.name}`}
                      >
                        <ArrowRight
                          size={18}
                          strokeWidth={2.5}
                          className="transition-transform duration-300 group-hover/btn:translate-x-0.5"
                        />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#141414] px-6 py-24 text-white md:px-10 lg:px-16 lg:py-28 xl:px-20">
        <div className="mb-16 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-[11px] font-bold uppercase tracking-[0.45em] text-white/35">
              Process
            </p>

            <h2 className="mt-6 max-w-xl text-[clamp(3rem,5vw,6rem)] font-light leading-[0.88] tracking-[-0.065em]">
              Un cadre clair, du premier échange à la mise en ligne.
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-relaxed text-white/45 lg:col-span-5 lg:col-start-8">
            Vous savez ce qui est inclus, comment le projet avance et quelles
            sont les prochaines étapes.
          </p>
        </div>

        <div className="grid border-t border-white/10 lg:grid-cols-4">
          {[
            [
              "01",
              "Échange",
              "On clarifie votre besoin, vos objectifs et vos priorités.",
            ],
            [
              "02",
              "Cadrage",
              "Vous recevez une proposition claire : périmètre, budget, délais.",
            ],
            [
              "03",
              "Création",
              "Design, développement et ajustements avancent ensemble.",
            ],
            [
              "04",
              "Mise en ligne",
              "Votre site est préparé, optimisé et publié proprement.",
            ],
          ].map(([number, title, text]) => (
            <div
              key={number}
              className="border-b border-white/10 py-10 lg:border-b-0 lg:border-r lg:px-8 last:border-r-0"
            >
              <span className="text-6xl font-black tracking-[-0.07em] text-white/10">
                {number}
              </span>

              <h3 className="mt-10 text-[13px] font-black uppercase tracking-[0.35em]">
                {title}
              </h3>

              <p className="mt-5 max-w-xs text-sm leading-6 text-white/45">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
