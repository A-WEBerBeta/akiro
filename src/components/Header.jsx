import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

export default function Header() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const accentColors = ["#DE8F61", "#819179", "#A8B7C8"];
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % accentColors.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [accentColors.length]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    const isOnHero = latest < window.innerHeight * 0.85;

    setIsScrolled(latest > 50);

    if (isOnHero) {
      setIsVisible(false);
      return;
    }

    if (latest > previous && latest > 150) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  });

  const navItems = ["Services", "Réalisations", "Contact"];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{
        y: isVisible ? 0 : -100,
        backgroundColor: isScrolled
          ? "rgba(249, 247, 242, 0.85)"
          : "rgba(249, 247, 242, 0)",
      }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 z-100 flex w-full items-center px-6 transition-all duration-500 md:px-10 lg:px-16 xl:px-20 ${
        isScrolled ? "h-16 border-b border-black/5 backdrop-blur-md" : "h-24"
      }`}
    >
      <div className="flex w-full items-center justify-between">
        <a href="#hero" className="group flex items-center gap-2">
          <span className="flex items-center gap-1.5 text-sm font-bold tracking-tighter text-neutral-900">
            AKIRO STUDIO
            <motion.div
              animate={{ backgroundColor: accentColors[colorIndex] }}
              transition={{ duration: 1.5 }}
              className="h-1.5 w-1.5 rounded-full"
            />
          </span>
        </a>

        <nav className="flex gap-10">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="group relative h-4 overflow-hidden text-[10px] font-bold uppercase tracking-[0.3em]"
            >
              <motion.div className="flex flex-col transition-transform duration-500 ease-[0.22,1,0.36,1] group-hover:-translate-y-1/2">
                <span className="flex h-4 items-center text-black/50">
                  {item}
                </span>
                <span className="flex h-4 items-center text-black">{item}</span>
              </motion.div>
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
