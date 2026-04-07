import { motion } from "framer-motion";
import { useState } from "react";
import MotionReveal from "./MotionReveal";

export default function Contact() {
  const [focused, setFocused] = useState(null);

  // Configuration DA
  const darkBg = "#141414";
  const accentColor = "#819179"; // Vert sauge du Hero

  return (
    <section
      id="contact"
      className="w-full px-6 py-32 md:px-10 lg:px-16 xl:px-20 transition-colors duration-1000"
      style={{ backgroundColor: darkBg }}
    >
      <div className="grid gap-20 lg:grid-cols-12 text-white">
        {/* COLONNE GAUCHE */}
        <div className="lg:col-span-4">
          <MotionReveal direction="left" delay={0.1}>
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">
              Contact
            </p>
          </MotionReveal>

          <MotionReveal direction="left" delay={0.2}>
            <h2 className="mt-8 max-w-[12ch] text-[clamp(3rem,4vw,5rem)] font-light leading-[0.95] tracking-[-0.04em] text-white">
              Parlons de votre prochain chapitre.
            </h2>
          </MotionReveal>

          <MotionReveal direction="left" delay={0.3}>
            <div className="mt-20 space-y-10">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/30">
                  Localisation
                </p>
                <p className="mt-2 text-base text-white/80 font-light">
                  Verdun & Grand Est
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/30">
                  Disponibilité
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <p className="text-base text-white/80 font-light">
                    Réponse sous 24/48h
                  </p>
                </div>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/30">
                  Réseaux
                </p>
                <div className="mt-3 flex gap-6 text-sm font-medium">
                  <a
                    href="#"
                    className="text-white/60 hover:text-white transition-colors underline-offset-8 hover:underline decoration-white/20"
                  >
                    Instagram
                  </a>
                  <a
                    href="#"
                    className="text-white/60 hover:text-white transition-colors underline-offset-8 hover:underline decoration-white/20"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </MotionReveal>
        </div>

        {/* COLONNE DROITE - FORMULAIRE */}
        <div className="lg:col-span-8">
          <MotionReveal direction="up" delay={0.2}>
            <form
              className="flex flex-col gap-16"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid gap-16 md:grid-cols-2">
                <DarkInputField
                  label="Comment vous appelez-vous ?"
                  placeholder="Jean Dupont"
                  id="name"
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  isFocused={focused === "name"}
                />
                <DarkInputField
                  label="Votre structure"
                  placeholder="Nom de l'entreprise"
                  id="company"
                  onFocus={() => setFocused("company")}
                  onBlur={() => setFocused(null)}
                  isFocused={focused === "company"}
                />
              </div>

              <DarkInputField
                label="Où vous répondre ?"
                placeholder="votre@email.com"
                id="email"
                type="email"
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
                isFocused={focused === "email"}
              />

              {/* Champ Message */}
              <div className="relative border-b border-white/10 pb-6 transition-colors duration-500">
                <label className="block text-[11px] uppercase tracking-widest text-white/40 font-semibold">
                  Votre projet en quelques mots
                </label>
                <textarea
                  rows={4}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  placeholder="Parlez-moi de vos besoins, de vos délais..."
                  className="mt-6 w-full resize-none bg-transparent text-xl text-white outline-none placeholder:text-white/10 md:text-2xl"
                />
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: focused === "message" ? 1 : 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -bottom-px left-0 h-[1.5px] w-full origin-left bg-white/40"
                />
              </div>

              {/* CTA */}
              <div className="mt-8 flex justify-start">
                <motion.button
                  whileHover="hover"
                  initial="rest"
                  className="group relative flex items-center justify-center overflow-hidden rounded-full border border-white/20 px-12 py-6 transition-colors duration-500 hover:border-transparent"
                >
                  <motion.div
                    variants={{
                      rest: { y: "105%" },
                      hover: { y: 0 },
                    }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 z-0"
                    style={{ backgroundColor: accentColor }}
                  />

                  <span className="relative z-10 text-[12px] font-bold uppercase tracking-[0.2em] text-white transition-colors duration-500">
                    Lancer la discussion
                  </span>

                  <motion.div
                    variants={{
                      rest: { scale: 1, x: 10 },
                      hover: { scale: 1.5, x: 20 },
                    }}
                    className="relative z-10 ml-4 h-1.5 w-1.5 rounded-full bg-white"
                  />
                </motion.button>
              </div>
            </form>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}

// Composant Interne pour les Inputs (Focus affiné)
function DarkInputField({
  label,
  placeholder,
  id,
  type = "text",
  onFocus,
  onBlur,
  isFocused,
}) {
  return (
    // On change le border-b : il devient transparent au focus pour ne pas s'ajouter à la ligne animée
    <div
      className={`relative border-b pb-6 transition-all duration-500 ${isFocused ? "border-transparent" : "border-white/10"}`}
    >
      <label
        htmlFor={id}
        className="block text-[11px] uppercase tracking-widest text-white/40 font-semibold"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={placeholder}
        className="mt-6 w-full bg-transparent text-xl text-white outline-none placeholder:text-white/10 md:text-2xl transition-all"
      />
      {/* Ligne d'animation : on descend à 1px pour une finesse chirurgicale */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isFocused ? 1 : 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -bottom-px left-0 h-px w-full origin-left bg-white/60"
      />
    </div>
  );
}
