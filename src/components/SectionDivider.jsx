import { motion } from "framer-motion";
import MotionReveal from "./MotionReveal";

export default function SectionDivider({ title, quote }) {
  return (
    <section className="w-full px-6 py-16 sm:py-20 lg:py-32 md:px-10 lg:px-16 xl:px-20">
      <div className="flex flex-col items-center">
        {/* Une ligne verticale fine qui guide l'oeil vers le bas */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: 80 }}
          viewport={{ once: true }}
          className="w-px bg-black/20 mb-12"
        />

        <div className="text-center max-w-2xl">
          <MotionReveal direction="up">
            <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.3] tracking-[-0.04em] text-neutral-400 font-medium pr-2">
              {title}
            </h2>
          </MotionReveal>

          {quote && (
            <MotionReveal direction="up" delay={0.4}>
              <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.4em] text-black/40 italic">
                // {quote}
              </p>
            </MotionReveal>
          )}
        </div>
      </div>
    </section>
  );
}
