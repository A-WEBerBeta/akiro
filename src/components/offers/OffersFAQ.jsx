import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import MotionReveal from "../MotionReveal";

const faqs = [
  {
    question: "La mise en ligne est-elle incluse ?",
    answer:
      "Oui. Une fois le site validé, la mise en ligne est incluse : publication, connexion technique et vérifications finales.",
  },
  {
    question: "Hébergement et nom de domaine, comment ça fonctionne ?",
    answer:
      "Akiro vous accompagne dans le choix, la création et la configuration technique. Les accès restent à votre nom afin que vous restiez pleinement propriétaire de votre site.",
  },
  {
    question: "Combien de temps dure un projet ?",
    answer:
      "Cela dépend de la formule, du nombre de pages et de la rapidité des retours. En général, il faut compter entre 2 et 6 semaines.",
  },
  {
    question: "Puis-je payer en plusieurs fois ?",
    answer:
      "Oui, un paiement en plusieurs fois peut être proposé selon le projet. Les modalités sont précisées dans le devis.",
  },
  {
    question: "Puis-je demander des modifications ?",
    answer:
      "Oui. Des ajustements sont prévus pendant la phase de conception. Les demandes importantes après validation peuvent faire l’objet d’un complément.",
  },
  {
    question: "Que faut-il fournir pour démarrer ?",
    answer:
      "Logo si vous en avez un, textes, photos, informations sur votre activité, exemples de sites que vous aimez et objectifs principaux.",
  },
  {
    question: "Le site sera-t-il modifiable ?",
    answer:
      "Oui, selon la solution retenue. L’objectif est de livrer un site propre, durable et adapté à votre niveau d’autonomie.",
  },
  {
    question: "Travaillez-vous uniquement à Verdun ?",
    answer:
      "Non. Akiro Studio est basé à Verdun, mais accompagne des artisans, indépendants et entreprises dans tout le Grand-Est et à distance.",
  },
];

export default function OffersFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 md:px-10 lg:px-16 lg:py-32 xl:px-20">
      <div className="relative z-10 grid gap-16 lg:grid-cols-12">
        {/* LEFT */}
        <div className="relative lg:col-span-4">
          <div className="pointer-events-none absolute -left-4 -top-15 select-none text-[22vw] font-black uppercase leading-none tracking-[-0.08em] text-neutral-950/[0.035] lg:-left-14 lg:-top-20">
            FAQ
          </div>

          <div className="relative z-10 lg:sticky lg:top-28">
            <MotionReveal direction="left">
              <p className="text-[11px] font-bold uppercase tracking-[0.45em] text-neutral-400">
                Questions fréquentes
              </p>
            </MotionReveal>

            <MotionReveal direction="left" delay={0.08}>
              <h2 className="mt-6 max-w-[9ch] text-[clamp(3rem,5vw,5.8rem)] font-black uppercase leading-[0.82] tracking-[-0.075em] text-neutral-950">
                Avant de commencer.
              </h2>
            </MotionReveal>

            <MotionReveal direction="left" delay={0.14}>
              <p className="mt-8 max-w-sm text-base leading-7 text-neutral-500">
                Les réponses utiles avant de lancer un projet, sans jargon ni
                mauvaise surprise.
              </p>
            </MotionReveal>
          </div>
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-8">
          <div className="grid gap-4 md:grid-cols-2">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <article
                  key={faq.question}
                  className={`relative overflow-hidden border transition-colors duration-500 ${
                    isOpen
                      ? "border-neutral-950/10 bg-[#F7F4EE]"
                      : "border-neutral-950/10 bg-white hover:bg-neutral-50"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full cursor-pointer items-start justify-between gap-6 p-6 text-left md:p-7"
                  >
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-300">
                        0{index + 1}
                      </span>

                      <h3 className="mt-6 text-[clamp(1.1rem,1.25vw,1.55rem)] font-medium leading-[1.08] tracking-[-0.045em] text-neutral-950">
                        {faq.question}
                      </h3>
                    </div>

                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-colors duration-300 ${
                        isOpen
                          ? "border-neutral-950 bg-neutral-950 text-white"
                          : "border-neutral-950/10 text-neutral-950"
                      }`}
                    >
                      <Plus size={16} strokeWidth={2.4} />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.42,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-7 md:px-7">
                          <div className="mb-6 h-px w-full bg-neutral-950/10" />
                          <p className="text-base leading-7 text-neutral-500">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
