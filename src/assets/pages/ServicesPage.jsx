import { motion } from "framer-motion";
import { OFFRES } from "../../data/offres";

export default function ServicesPage() {
  return (
    <main>
      <section className="min-h-screen bg-[#F9F9F7] text-neutral-950">
        {/* 1. En-tête */}
        <div className="px-6 pt-24 pb-12 lg:px-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs font-bold uppercase tracking-[0.4em] text-neutral-500"
          >
            Akiro Studio // Solutions 2026
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[12vw] lg:text-[10vw] font-black uppercase leading-none tracking-tighter"
          >
            Offres.
          </motion.h1>
        </div>

        {/* 2. Grille dynamique */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-black/10">
          {OFFRES.map((service) => (
            <motion.div>
              <div>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
