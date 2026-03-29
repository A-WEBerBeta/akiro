import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export default function Reveal({
  children,
  className = "",
  direction = "up",
  distance = 80,
  blur = 10,
  scale = 0.96,
  start = "start 95%",
  end = "start 35%",
}) {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [start, end],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.25, 1], [0, 0.35, 1]);
  const filter = useTransform(
    scrollYProgress,
    [0, 1],
    [`blur(${blur}px)`, "blur(0px)"],
  );

  const xMap = {
    left: [-distance, 0],
    right: [distance, 0],
    up: [0, 0],
    down: [0, 0],
    scale: [0, 0],
    blur: [0, 0],
  };

  const yMap = {
    up: [distance, 0],
    down: [-distance, 0],
    left: [0, 0],
    right: [0, 0],
    scale: [0, 0],
    blur: [0, 0],
  };

  const scaleMap = {
    scale: [scale, 1],
    up: [1, 1],
    down: [1, 1],
    left: [1, 1],
    right: [1, 1],
    blur: [1, 1],
  };

  const x = useTransform(scrollYProgress, [0, 1], xMap[direction]);
  const y = useTransform(scrollYProgress, [0, 1], yMap[direction]);
  const transformScale = useTransform(
    scrollYProgress,
    [0, 1],
    scaleMap[direction],
  );

  if (prefersReducedMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        opacity,
        x,
        y,
        scale: transformScale,
        filter,
        willChange: "transform, opacity, filter",
      }}
    >
      {children}
    </motion.div>
  );
}
