import { motion } from "framer-motion";

export default function HeroBlueprint() {
  return (
    <div className="relative hidden lg:flex w-[58vw] min-h-[620px] items-center justify-center">
      {/* WRAPPER GLOBAL */}
      <div className="relative w-[760px] h-[560px]">
        {/* LIGNES ARCHI EXTÉRIEURES */}
        <div className="absolute -top-8 left-0 w-full h-px bg-neutral-900/20" />
        <div className="absolute -bottom-8 left-6 w-[86%] h-px bg-neutral-900/20" />
        <div className="absolute -left-8 top-4 h-[86%] w-px bg-neutral-900/20" />
        <div className="absolute -right-6 top-10 h-[72%] w-px bg-neutral-900/20" />

        {/* PETITES CROIX DE MESURE */}
        {[
          "top-[-38px] left-[-4px]",
          "top-[-38px] right-[40px]",
          "bottom-[-42px] left-[30px]",
          "bottom-[-42px] right-[120px]",
        ].map((pos) => (
          <div key={pos} className={`absolute ${pos} h-3 w-3`}>
            <span className="absolute left-1/2 top-0 h-full w-px bg-neutral-900/30" />
            <span className="absolute top-1/2 left-0 w-full h-px bg-neutral-900/30" />
          </div>
        ))}

        {/* ANNOTATION HAUT */}
        <div className="absolute -top-24 right-6 text-right">
          <p className="font-serif italic text-sm leading-tight text-neutral-500">
            Design épuré <br /> et fonctionnel
          </p>
          <div className="absolute -left-12 top-9 h-10 w-10 rounded-full border-l border-neutral-400 rotate-45" />
        </div>

        {/* ANNOTATION GAUCHE */}
        <div className="absolute left-[-96px] top-[210px] text-right">
          <p className="font-serif italic text-sm leading-tight text-neutral-500">
            Structure <br /> lisible <br /> et logique
          </p>
          <div className="absolute -right-9 top-5 h-px w-7 bg-neutral-400" />
        </div>

        {/* ANNOTATION DROITE */}
        <div className="absolute right-[-116px] top-[125px]">
          <p className="font-serif italic text-sm leading-tight text-neutral-500">
            Image <br /> forte et <br /> impactante
          </p>
          <div className="mt-5 h-16 w-px bg-neutral-900/20" />
        </div>

        {/* DESKTOP FRAME */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute left-4 top-6 h-[470px] w-[650px] rounded-[18px] border border-neutral-900/35 bg-[#f7f3ed]/70 shadow-[0_40px_80px_rgba(0,0,0,0.04)] backdrop-blur-sm"
        >
          {/* TOP BAR */}
          <div className="flex h-16 items-center justify-between border-b border-neutral-900/10 px-8">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B37A56]" />
              <span className="h-1.5 w-1.5 rounded-full bg-neutral-400" />
              <span className="h-1.5 w-1.5 rounded-full bg-neutral-300" />
            </div>

            <div className="flex gap-8 text-[9px] font-bold uppercase tracking-[0.22em] text-neutral-700">
              <span>Accueil</span>
              <span>Services</span>
              <span>Réalisations</span>
              <span>Contact</span>
            </div>
          </div>

          {/* CONTENT */}
          <div className="grid h-[300px] grid-cols-[1fr_1.12fr] border-b border-neutral-900/10">
            {/* LEFT COPY */}
            <div className="relative flex flex-col justify-center px-10">
              <div className="mb-6 h-px w-8 bg-[#B37A56]" />

              <h3 className="font-serif text-[34px] leading-[0.95] tracking-[-0.04em] text-neutral-950">
                Des solutions <br />
                sur-mesure pour <br />
                faire grandir <br />
                votre <span className="text-[#B37A56]">activité.</span>
              </h3>

              <p className="mt-6 max-w-[220px] text-[11px] leading-relaxed text-neutral-500">
                Accompagnement de proximité, outils simples, résultats durables.
              </p>

              <button className="mt-6 flex w-fit items-center gap-8 border border-neutral-900/20 px-5 py-3 text-[9px] font-bold uppercase tracking-[0.18em] text-neutral-800">
                Découvrir les services
                <span>→</span>
              </button>

              {/* lignes de construction */}
              <div className="absolute right-0 top-0 h-full w-px border-l border-dashed border-neutral-900/15" />
              <div className="absolute bottom-14 left-0 h-px w-full border-t border-dashed border-neutral-900/15" />
            </div>

            {/* IMAGE PLACEHOLDER */}
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,#ddd7cd,#b9aa99)]" />

              {/* fausse image archi */}
              <div className="absolute inset-0">
                <div className="absolute right-0 top-0 h-full w-[58%] bg-neutral-800/20" />
                <div className="absolute left-14 top-8 h-48 w-40 bg-neutral-100/60" />
                <div className="absolute left-28 top-20 h-48 w-16 bg-[#6f4a31]" />
                <div className="absolute bottom-0 left-0 h-24 w-full bg-neutral-100/40" />
                <div className="absolute bottom-10 left-10 h-10 w-44 border-t border-neutral-100/70" />
              </div>
            </div>
          </div>

          {/* BOTTOM CARDS */}
          <div className="grid h-[104px] grid-cols-3">
            {[
              [
                "01",
                "Conseil",
                "Analyse et stratégie adaptées à vos objectifs.",
              ],
              [
                "02",
                "Design",
                "Interfaces modernes et alignées à votre image.",
              ],
              [
                "03",
                "Développement",
                "Sites rapides, sécurisés et bien référencés.",
              ],
            ].map(([num, title, text]) => (
              <div
                key={num}
                className="border-r border-neutral-900/10 px-8 py-5 last:border-r-0"
              >
                <p className="mb-2 text-xs font-medium text-neutral-950">
                  {num}
                </p>
                <p className="font-serif text-base text-neutral-950">{title}</p>
                <p className="mt-2 max-w-[150px] text-[10px] leading-relaxed text-neutral-500">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* MOBILE FRAME */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="absolute right-0 top-[255px] h-[300px] w-[148px] rounded-[32px] border border-neutral-900/35 bg-[#f7f3ed] p-3 shadow-[0_30px_70px_rgba(0,0,0,0.08)]"
        >
          <div className="h-full rounded-[24px] border border-neutral-900/10 px-4 py-5">
            <div className="mb-8 flex items-center justify-between">
              <span className="text-[7px] font-bold uppercase tracking-[0.18em]">
                Votre marque
              </span>
              <span className="text-sm">≡</span>
            </div>

            <h4 className="font-serif text-[20px] leading-[0.95] tracking-[-0.04em]">
              Des solutions <br />
              sur-mesure pour <br />
              faire grandir <br />
              votre <span className="text-[#B37A56]">activité.</span>
            </h4>

            <div className="mt-4 h-px w-5 bg-[#B37A56]" />

            <button className="mt-5 flex w-full items-center justify-between border border-neutral-900/20 px-3 py-2 text-[6px] font-bold uppercase tracking-[0.12em]">
              Services <span>→</span>
            </button>

            <div className="mt-6 h-20 border border-neutral-900/15 bg-neutral-200/40" />
          </div>
        </motion.div>

        {/* ANNOTATION MOBILE */}
        <div className="absolute right-[-105px] bottom-3">
          <p className="font-serif italic text-sm leading-tight text-neutral-500">
            Parcours <br /> fluide et <br /> efficace
          </p>
        </div>

        {/* MESURE BAS */}
        <div className="absolute bottom-[-64px] left-[260px] text-[12px] italic tracking-widest text-neutral-500">
          1280 px
        </div>
      </div>
    </div>
  );
}
