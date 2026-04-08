import { AnimatePresence, motion } from "framer-motion";

export default function LegalModal({ isOpen, mode, onClose }) {
  if (!isOpen) return null;

  const content = {
    mentions: {
      title: "Mentions Légales",
      sections: [
        {
          label: "Éditeur",
          val: "Akiro Studio\nResponsable : Aurélie Weber\nLocalisation : Verdun, France\nContact : akiro.studio.contact@gmail.com",
        },
        {
          label: "Hébergement",
          val: "Vercel Inc.\n440 N Barranca Ave #4133\nCovina, CA 91723",
        },
        {
          label: "Fiscalité",
          val: "TVA non applicable, art. 293 B du CGI.",
        },
      ],
    },
    privacy: {
      title: "Confidentialité",
      sections: [
        {
          label: "Données",
          val: "Les informations recueillies via le formulaire de contact sont strictement utilisées pour la relation commerciale entre vous et Akiro Studio.",
        },
        {
          label: "Conservation",
          val: "Vos données sont conservées uniquement pendant la durée nécessaire au traitement de votre demande.",
        },
        {
          label: "Cookies",
          val: "Ce site respecte votre vie privée : aucun cookie de suivi ou traceur tiers n'est utilisé.",
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
        className="fixed inset-0 z-999 flex items-center justify-center p-4 bg-white/60 backdrop-blur-xl cursor-crosshair"
      >
        <motion.div
          initial={{ y: 30, scale: 0.98, opacity: 0 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          exit={{ y: 20, scale: 0.98, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl bg-white border border-neutral-200 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] rounded-[2.5rem] p-10 md:p-14 cursor-default"
        >
          {/* Header */}
          <div className="flex justify-between items-start mb-16">
            <div>
              <span className="text-[11px] font-black uppercase tracking-[0.5em] text-neutral-400 block mb-3">
                Legal // {mode}
              </span>
              <h2 className="text-4xl font-black uppercase tracking-tighter text-neutral-950 italic">
                {data.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="group flex flex-col items-end gap-2 opacity-30 hover:opacity-100 transition-all text-right"
            >
              <span className="text-[10px] font-bold uppercase tracking-widest">
                Fermer
              </span>
              <div className="h-0.5 w-8 bg-black group-hover:w-12 transition-all" />
            </button>
          </div>

          {/* Sections de contenu */}
          <div className="flex flex-col gap-10">
            {data.sections.map((s, i) => (
              <div
                key={i}
                className="grid grid-cols-12 gap-6 border-t border-neutral-100 pt-8"
              >
                <div className="col-span-12 md:col-span-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400">
                    {s.label}
                  </span>
                </div>
                <div className="col-span-12 md:col-span-8">
                  <p className="text-sm md:text-base font-medium text-neutral-800 leading-relaxed whitespace-pre-line">
                    {s.val}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Modal épuré */}
          <div className="mt-16 pt-8 flex justify-between items-center border-t border-dashed border-neutral-200 text-neutral-300">
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
