import { AnimatePresence, motion } from "framer-motion";

export default function LegalModal({ isOpen, mode, onClose }) {
  if (!isOpen) return null;

  const content = {
    mentions: {
      title: "Mentions légales",
      sections: [
        {
          label: "Éditeur",
          val: `Akiro Studio
Entreprise individuelle
Basée à Verdun, Grand Est
Contact : akiro.studio.contact@gmail.com`,
        },
        {
          label: "Hébergement",
          val: `Vercel Inc.
440 N Barranca Ave #4133
Covina, CA 91723
États-Unis`,
        },
        {
          label: "Activité",
          val: `Conception de sites internet vitrines, identités visuelles et expériences web sur mesure.`,
        },
      ],
    },

    privacy: {
      title: "Confidentialité",
      sections: [
        {
          label: "Données collectées",
          val: `Les informations transmises via le formulaire de contact (nom, email, message) sont utilisées uniquement pour répondre à votre demande.`,
        },
        {
          label: "Conservation",
          val: `Les données sont conservées uniquement pendant la durée nécessaire aux échanges commerciaux ou à la gestion du projet.`,
        },
        {
          label: "Cookies",
          val: `Aucun cookie publicitaire ni traceur tiers n’est utilisé sur ce site.`,
        },
        {
          label: "Vos droits",
          val: `Vous pouvez demander la modification ou la suppression de vos données à tout moment par email :
akiro.studio.contact@gmail.com`,
        },
      ],
    },
  };

  const data = content[mode];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[999] flex items-center justify-center bg-white/60 p-4 backdrop-blur-xl"
      >
        <motion.div
          initial={{ y: 30, scale: 0.98, opacity: 0 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          exit={{ y: 20, scale: 0.98, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl rounded-[2.5rem] border border-neutral-200 bg-white p-8 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] md:p-14"
        >
          {/* HEADER */}
          <div className="mb-14 flex items-start justify-between gap-8">
            <div>
              <span className="mb-3 block text-[11px] font-black uppercase tracking-[0.45em] text-neutral-400">
                Akiro Studio
              </span>

              <h2 className="text-3xl font-black uppercase tracking-tighter text-neutral-950 italic md:text-4xl">
                {data.title}
              </h2>
            </div>

            <button
              onClick={onClose}
              className="group flex flex-col items-end gap-2 text-right opacity-35 transition-all hover:opacity-100"
            >
              <span className="text-[10px] font-bold uppercase tracking-widest">
                Fermer
              </span>

              <div className="h-0.5 w-8 bg-black transition-all group-hover:w-12" />
            </button>
          </div>

          {/* CONTENT */}
          <div className="flex flex-col gap-10">
            {data.sections.map((section, index) => (
              <div
                key={index}
                className="grid grid-cols-12 gap-6 border-t border-neutral-100 pt-8"
              >
                <div className="col-span-12 md:col-span-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400">
                    {section.label}
                  </span>
                </div>

                <div className="col-span-12 md:col-span-8">
                  <p className="whitespace-pre-line text-sm font-medium leading-relaxed text-neutral-800 md:text-base">
                    {section.val}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* FOOTER */}
          <div className="mt-14 flex items-center justify-between border-t border-dashed border-neutral-200 pt-8 text-neutral-300">
            <span className="text-[9px] font-bold uppercase tracking-[0.4em]">
              Akiro Studio © 2026
            </span>

            <span className="text-[9px] font-bold uppercase tracking-[0.4em]">
              Verdun // France
            </span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
