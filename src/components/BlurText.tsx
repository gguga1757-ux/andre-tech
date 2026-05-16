import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef, ElementType } from "react";
import { useMediaQuery } from "@/lib/useMediaQuery";

type Props = {
  text: string;
  className?: string;
  delay?: number;
  startDelay?: number;
  as?: ElementType;
};

export function BlurText({
  text,
  className = "",
  delay = 0.07,
  startDelay = 0,
  as: Tag = "h2",
}: Props) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);
  const isMobile = useMediaQuery("(max-width: 767px)");
  const shouldReduceMotion = useReducedMotion();
  const simplifiedMotion = isMobile || shouldReduceMotion;

  const inView = useInView(ref, {
    once: true,
    amount: isMobile ? 0.01 : 0.3,
    margin: isMobile ? "0px 0px 34% 0px" : "0px",
  });

  const words = text.split(" ");

  if (simplifiedMotion) {
    return (
      <Tag ref={ref} className={className} aria-label={text}>
        {text}
      </Tag>
    );
  }

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {words.map((word: string, i: number) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-bottom mr-[0.24em]"
        >
          <motion.span
            className="inline-block"
            style={{
              willChange: "transform, opacity, filter",
            }}
            initial={{
              opacity: 0,
              y: 24,
              filter: "blur(10px)",
            }}
            animate={
              inView
                ? {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }
                : {}
            }
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
              delay: startDelay + i * delay,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
