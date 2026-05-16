import { useReducedMotion } from "motion/react";
import { useMediaQuery } from "@/lib/useMediaQuery";

export const SMOOTH_EASE = [0.22, 1, 0.36, 1] as [
  number,
  number,
  number,
  number,
];

export function useMobileMotion() {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const shouldReduceMotion = useReducedMotion();
  const fastPath = isMobile || shouldReduceMotion;

  const viewport = (amount = 0.2) => ({
    once: true,
    amount: fastPath ? 0.01 : amount,
    margin: isMobile ? "0px 0px 38% 0px" : "0px 0px 8% 0px",
  });

  const reveal = (y = 22, blur = 0) => {
    if (fastPath) {
      return blur > 0
        ? { opacity: 1, y: 0, filter: "blur(0px)" }
        : { opacity: 1, y: 0 };
    }

    return blur > 0
      ? { opacity: 0, y, filter: `blur(${blur}px)` }
      : { opacity: 0, y };
  };

  const visible = (blur = false) =>
    blur ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 1, y: 0 };

  const transition = (delay = 0, duration = 0.78) => ({
    delay: fastPath ? 0 : delay,
    duration: fastPath ? 0.01 : duration,
    ease: SMOOTH_EASE,
  });

  return {
    isMobile,
    shouldReduceMotion: Boolean(shouldReduceMotion),
    fastPath,
    viewport,
    reveal,
    visible,
    transition,
    ease: SMOOTH_EASE,
  };
}
