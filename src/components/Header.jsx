import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Header() {
  const { scrollY } = useScroll();
  const location = useLocation();
  const isOffersPage = location.pathname === "/offres";

  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

    setIsScrolled(latest > 50);

    if (!isOffersPage) {
      const isOnHero = latest < window.innerHeight * 0.85;

      if (isOnHero) {
        setIsVisible(false);
        return;
      }
    }

    setIsVisible(!(latest > previous && latest > 150));
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
      window.history.pushState(null, "", href);

      if (id === "hero") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const shouldShowHeader =
    menuOpen || isVisible || (isOffersPage && !isScrolled);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{
          y: shouldShowHeader ? 0 : -100,
          backgroundColor:
            isScrolled || isOffersPage || menuOpen
              ? "rgba(249, 247, 242, 0.88)"
              : "rgba(249, 247, 242, 0)",
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed left-0 top-0 z-100 flex w-full items-center px-6 transition-all duration-500 md:px-10 lg:px-16 xl:px-20 ${
          isScrolled || isOffersPage || menuOpen
            ? "h-16 border-b border-black/5 backdrop-blur-md"
            : "h-24"
        }`}
      >
        <div className="flex w-full items-center justify-between">
          <a
            href="/#hero"
            onClick={(e) => handleNavClick(e, "/#hero")}
            className="group flex items-center gap-2"
          >
            <div className="flex flex-col leading-none">
              <div className="flex items-center gap-2">
                <span className="text-[15px] font-black uppercase tracking-[0.16em] text-neutral-950">
                  AKIRO
                </span>
                <motion.span
                  animate={{ backgroundColor: accentColors[colorIndex] }}
                  transition={{ duration: 1.5 }}
                  className="h-1.5 w-1.5 rounded-full"
                />
              </div>
              <span className="mt-2 text-[9px] font-bold uppercase tracking-[0.48em] text-neutral-400">
                Studio web
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden gap-10 lg:flex">
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

          {/* Mobile burger */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="grid h-10 w-10 place-items-center rounded-full border border-black/10 text-neutral-950 lg:hidden"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-16 z-90 border-b border-black/5 bg-[#F9F7F2]/95 px-6 py-8 backdrop-blur-md md:px-10 lg:hidden"
          >
            <nav className="flex flex-col">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    handleNavClick(e, item.href);
                    setMenuOpen(false);
                  }}
                  className="group flex items-center justify-between border-b border-black/10 py-5 last:border-b-0"
                >
                  <span className="text-[11px] font-bold tracking-[0.35em] text-black/25">
                    0{index + 1}
                  </span>

                  <span className="text-[clamp(2rem,9vw,4rem)] font-black uppercase leading-[0.85] tracking-[-0.075em] text-neutral-950">
                    {item.label}
                  </span>
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
