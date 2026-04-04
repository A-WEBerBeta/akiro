import { motion } from "framer-motion";

const variantsMap = {
  left: {
    hidden: { opacity: 0, x: -90, y: 0, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
    },
  },
  right: {
    hidden: { opacity: 0, x: 90, y: 0, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
    },
  },
  up: {
    hidden: { opacity: 0, x: 0, y: 80, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.05, ease: [0.22, 1, 0.36, 1] },
    },
  },
  soft: {
    hidden: { opacity: 0, y: 36, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
    },
  },
};

export default function MotionReveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
}) {
  const base = variantsMap[direction] || variantsMap.up;

  const variants = {
    hidden: base.hidden,
    visible: {
      ...base.visible,
      transition: {
        ...base.visible.transition,
        delay,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.45 }}
    >
      {children}
    </motion.div>
  );
}
