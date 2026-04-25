import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import akiroLogo from "../assets/akiro-white-transparent.png";

export default function Footer({ setModalMode }) {
  const currentYear = new Date().getFullYear();
  const accentColors = ["#DE8F61", "#819179", "#A8B7C8"];
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % accentColors.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [accentColors.length]);

  return (
    <footer className="w-full bg-[#F9F7F2] px-6 pt-24 pb-12 md:px-10 lg:px-16 xl:px-28 overflow-hidden relative min-h-150 flex flex-col justify-between">
      {/* 1. LIGNE HAUTE TRONQUÉE (pour le bouton TOP) */}
      <div className="mr-24 md:mr-32 h-px bg-black/10 relative z-20" />

      {/* 2. LE GROS AKIRO EN DESSOUS (On laisse un peu d'espace en haut/bas) */}
      <div className="absolute inset-x-0 top-[48%] -translate-y-1/2 select-none pointer-events-none text-center z-0 px-4">
        <h2 className="text-[28vw] font-black leading-none tracking-[-0.08em] text-neutral-950 opacity-[0.03]">
          AKIRO
        </h2>
      </div>

      {/* 3. GRILLE D'INFOS POSÉE PAR-DESSUS */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 relative z-10 mt-12">
        {/* AKIRO STUDIO */}
        <div className="md:col-span-4">
          <div className="group cursor-default">
            <img
              src={akiroLogo}
              alt="Akiro logo"
              className="h-10 w-10 opacity-80"
            />
            <span className="text-xl font-bold tracking-tighter text-neutral-900 flex items-center gap-2">
              AKIRO STUDIO
              <motion.div
                animate={{ backgroundColor: accentColors[colorIndex] }}
                transition={{ duration: 1.5 }}
                className="h-2 w-2 rounded-full"
              />
            </span>
            <p className="mt-6 text-[11px] uppercase tracking-[0.2em] text-black/60 font-bold leading-relaxed max-w-[28ch]">
              Sites web premium & identités digitales à Verdun.
            </p>
          </div>
        </div>

        {/* MENU AVEC EFFET SLIDE VERTICAL (Celui du Header) */}
        <div className="md:col-span-3">
          <p className="text-[10px] uppercase tracking-[0.4em] text-black/40 mb-8 font-black">
            Menu
          </p>
          <ul className="space-y-4 font-bold text-[11px] uppercase tracking-[0.3em]">
            {["Services", "Réalisations", "Contact"].map((item) => (
              <li key={item} className="overflow-hidden h-5">
                <a
                  href={`#${item.toLowerCase()}`}
                  className="group relative block h-full"
                >
                  <motion.div
                    whileHover={{ y: -20 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full"
                  >
                    <span className="flex h-5 items-center text-black/50">
                      {item}
                    </span>
                    <span className="flex h-5 items-center text-black">
                      {item}
                    </span>
                  </motion.div>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT & LEGAL */}
        <div className="md:col-span-3">
          <p className="text-[10px] uppercase tracking-[0.4em] text-black/40 mb-8 font-black">
            Contact
          </p>
          <div className="space-y-8">
            <a
              href="mailto:akiro.studio.contact@gmail.com"
              className="text-sm font-medium text-neutral-900 border-b-2 border-black/10 pb-1 hover:border-black transition-all block w-fit relative z-30"
            >
              akiro.studio.contact@gmail.com
            </a>
            <div className="flex gap-6 ">
              <button
                onClick={() => setModalMode("mentions")}
                className="text-[10px] uppercase tracking-widest text-black/60 font-bold cursor-pointer hover:text-black transition-colors"
              >
                Mentions
              </button>
              <button
                onClick={() => setModalMode("privacy")}
                className="text-[10px] uppercase tracking-widest text-black/60 font-bold cursor-pointer hover:text-black transition-colors"
              >
                Confidentialité
              </button>
            </div>
          </div>
        </div>

        {/* LOCALISATION */}
        <div className="md:col-span-2 md:text-right">
          <p className="text-[10px] uppercase tracking-[0.4em] text-black/40 mb-8 font-black">
            Localisation
          </p>
          <p className="text-[11px] uppercase tracking-[0.2em] text-black/60 font-bold leading-loose">
            Grand-Est
            <br />
            Meuse // 55
          </p>
        </div>
      </div>

      {/* 4. LIGNE BAS TRONQUÉE (POUR LE BOUTON TOP) */}
      <div className="mr-24 md:mr-32 pt-8 border-t border-black/10 relative z-20">
        <p className="text-[10px] text-black/60 uppercase tracking-[0.3em]">
          © {currentYear} — Akiro Studio — Tous droits réservés
        </p>
      </div>
    </footer>
  );
}
