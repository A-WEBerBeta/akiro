import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

export default function Header() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Synchronisation des couleurs avec le footer
  const accentColors = ["#DE8F61", "#819179", "#A8B7C8"];
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % accentColors.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [accentColors.length]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    setIsScrolled(latest > 50);

    if (latest > previous && latest > 150) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  });

  const navItems = ["Services", "Réalisations", "Contact"];

  return (
    <motion.header
      animate={{
        y: isVisible ? 0 : -100,
        backgroundColor: isScrolled
          ? "rgba(249, 247, 242, 0.85)" // On utilise le beige de fond
          : "rgba(249, 247, 242, 0)",
      }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 z-100 w-full px-6 md:px-10 lg:px-16 xl:px-20 flex items-center transition-all duration-500 ${
        isScrolled ? "h-16 backdrop-blur-md border-b border-black/5" : "h-24"
      }`}
    >
      <div className="flex w-full items-center justify-between">
        {/* LOGO UNIFIÉ AVEC LE FOOTER */}
        <a href="#hero" className="group flex items-center gap-2">
          <span className="text-sm font-bold tracking-tighter text-neutral-900 flex items-center gap-1.5">
            AKIRO STUDIO
            <motion.div
              animate={{ backgroundColor: accentColors[colorIndex] }}
              transition={{ duration: 1.5 }}
              className="h-1.5 w-1.5 rounded-full"
            />
          </span>
        </a>

        {/* NAVIGATION AVEC EFFET SLIDE VERTICAL */}
        <nav className="flex gap-10">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="group relative h-4 overflow-hidden text-[10px] font-bold uppercase tracking-[0.3em]"
            >
              <motion.div className="flex flex-col transition-transform duration-500 ease-[0.22, 1, 0.36, 1] group-hover:-translate-y-1/2">
                <span className="h-4 flex items-center text-black/50">
                  {item}
                </span>
                <span className="h-4 flex items-center text-black">{item}</span>
              </motion.div>
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
