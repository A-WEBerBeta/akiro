import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Header() {
  const { scrollY } = useScroll();
  const location = useLocation();

  const isOffersPage = location.pathname === "/offres";

  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(isOffersPage);

  const accentColors = ["#DE8F61", "#819179", "#A8B7C8"];
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % accentColors.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isOffersPage, accentColors.length]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    setIsScrolled(latest > 50);

    if (!isOffersPage) {
      const isOnHero = latest < window.innerHeight * 0.85;

      if (isOnHero) {
        setIsVisible(false);
        return;
      }
    }

    if (latest > previous && latest > 150) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  });

  const navItems = [
    { label: "Accueil", href: "/#hero" },
    { label: "Services", href: "/#services" },
    { label: "Réalisations", href: "/#realisations" },
    { label: "Offres", href: "/offres" },
    { label: "Contact", href: "/#contact" },
  ];

  const handleNavClick = (e, href) => {
    if (!href.startsWith("/#")) return;

    const id = href.replace("/#", "");

    if (location.pathname === "/") {
      e.preventDefault();

      // Met à jour l’URL
      window.history.pushState(null, "", href);

      // Cas spécial Accueil / Hero
      if (id === "hero") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        return;
      }

      // Scroll vers la section
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <motion.header
      initial={{ y: isOffersPage ? 0 : -100 }}
      animate={{
        y: isVisible ? 0 : -100,
        backgroundColor:
          isScrolled || isOffersPage
            ? "rgba(249, 247, 242, 0.85)"
            : "rgba(249, 247, 242, 0)",
      }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 z-100 flex w-full items-center px-6 transition-all duration-500 md:px-10 lg:px-16 xl:px-20 ${
        isScrolled || isOffersPage
          ? "h-16 border-b border-black/5 backdrop-blur-md"
          : "h-24"
      }`}
    >
      <div className="flex w-full items-center justify-between">
        <a href="/#hero" className="group flex items-center gap-2">
          <div className="flex flex-col leading-none">
            <div className="flex items-center gap-2">
              <span className="text-[15px] font-black uppercase tracking-[0.16em] text-neutral-950">
                AKIRO
              </span>
              <motion.span
                animate={{ backgroundColor: accentColors[colorIndex] }}
                className="h-1.5 w-1.5 rounded-full"
              />
            </div>
            <span className="mt-2 text-[9px] font-bold uppercase tracking-[0.48em] text-neutral-400">
              Studio web
            </span>
          </div>
        </a>

        <nav className="flex gap-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="group relative h-4 overflow-hidden text-[10px] font-bold uppercase tracking-[0.3em]"
            >
              <motion.div className="flex flex-col transition-transform duration-500 ease-[0.22,1,0.36,1] group-hover:-translate-y-1/2">
                <span className="flex h-4 items-center text-black/50">
                  {item.label}
                </span>
                <span className="flex h-4 items-center text-black">
                  {item.label}
                </span>
              </motion.div>
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
