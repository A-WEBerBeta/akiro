import { motion } from "framer-motion";
import { useState } from "react";
import MotionReveal from "./MotionReveal";

export default function Contact() {
  const [focused, setFocused] = useState(null);

  const darkBg = "#141414";
  const accentColor = "#819179";

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name") || "";
    const company = formData.get("company") || "";
    const email = formData.get("email") || "";
    const message = formData.get("message") || "";

    const subject = encodeURIComponent(
      `Demande de projet — ${name || "Nouveau contact"}`,
    );

    const body = encodeURIComponent(
      `Nom : ${name}
Structure : ${company}
Email : ${email}

Projet :
${message}`,
    );

    window.location.href = `mailto:akiro.studio.contact@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="w-full px-6 py-32 md:px-10 lg:px-16 xl:px-20 transition-colors duration-1000"
      style={{ backgroundColor: darkBg }}
    >
      <div className="grid gap-20 text-white lg:grid-cols-12">
        {/* LEFT */}
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
                <p className="mt-2 text-base font-light text-white/80">
                  Verdun — Grand-Est
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/30">
                  Disponibilité
                </p>
                <p className="mt-2 text-base font-light text-white/80">
                  Réponse sous 24 / 48h
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/30">
                  Réseaux
                </p>

                <div className="mt-3 flex gap-6 text-sm font-medium">
                  <a
                    href="#"
                    className="text-white/60 transition-colors hover:text-white underline-offset-8 hover:underline decoration-white/20"
                  >
                    Instagram
                  </a>

                  <a
                    href="#"
                    className="text-white/60 transition-colors hover:text-white underline-offset-8 hover:underline decoration-white/20"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </MotionReveal>
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-8">
          <MotionReveal direction="up" delay={0.2}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-16">
              <div className="grid gap-16 md:grid-cols-2">
                <DarkInputField
                  id="name"
                  name="name"
                  label="Comment vous appelez-vous ?"
                  placeholder="Jean Dupont"
                  autoComplete="name"
                  required
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  isFocused={focused === "name"}
                />

                <DarkInputField
                  id="company"
                  name="company"
                  label="Votre structure"
                  placeholder="Nom de l'entreprise"
                  autoComplete="organization"
                  onFocus={() => setFocused("company")}
                  onBlur={() => setFocused(null)}
                  isFocused={focused === "company"}
                />
              </div>

              <DarkInputField
                id="email"
                name="email"
                type="email"
                label="Où vous répondre ?"
                placeholder="votre@email.com"
                autoComplete="email"
                required
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
                isFocused={focused === "email"}
              />

              {/* MESSAGE */}
              <div className="relative border-b border-white/10 pb-6 transition-colors duration-500">
                <label className="block text-[11px] font-semibold uppercase tracking-widest text-white/40">
                  Votre projet en quelques mots
                </label>

                <textarea
                  name="message"
                  required
                  rows={4}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  placeholder="Parlez-moi de vos besoins, de vos délais..."
                  className="mt-6 w-full resize-none bg-transparent text-xl text-white outline-none placeholder:text-white/10 md:text-2xl"
                />

                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: focused === "message" ? 1 : 0 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute -bottom-px left-0 h-[1.5px] w-full origin-left bg-white/40"
                />
              </div>

              {/* CTA */}
              <div className="mt-8 flex justify-start">
                <motion.button
                  type="submit"
                  whileHover="hover"
                  initial="rest"
                  className="group relative flex cursor-pointer items-center justify-center overflow-hidden rounded-full border border-white/20 px-12 py-6 transition-colors duration-500 hover:border-transparent"
                >
                  <motion.div
                    variants={{
                      rest: { y: "105%" },
                      hover: { y: 0 },
                    }}
                    transition={{
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute inset-0 z-0"
                    style={{ backgroundColor: accentColor }}
                  />

                  <span className="relative z-10 text-[12px] font-bold uppercase tracking-[0.2em] text-white">
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

function DarkInputField({
  label,
  placeholder,
  id,
  name,
  type = "text",
  onFocus,
  onBlur,
  isFocused,
  required = false,
  autoComplete = "off",
}) {
  return (
    <div
      className={`relative border-b pb-6 transition-all duration-500 ${
        isFocused ? "border-transparent" : "border-white/10"
      }`}
    >
      <label
        htmlFor={id}
        className="block text-[11px] font-semibold uppercase tracking-widest text-white/40"
      >
        {label}
      </label>

      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={placeholder}
        className="mt-6 w-full bg-transparent text-xl text-white outline-none placeholder:text-white/10 transition-all md:text-2xl"
      />

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isFocused ? 1 : 0 }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute -bottom-px left-0 h-px w-full origin-left bg-white/60"
      />
    </div>
  );
}
