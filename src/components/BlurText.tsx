import { motion, useInView } from "motion/react";
import { useRef, ElementType } from "react";

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

  const inView = useInView(ref, {
    once: true,
    amount: 0.3,
  });

  const words = text.split(" ");

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {words.map((word: string, i: number) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-bottom mr-[0.24em]"
        >
          <motion.span
            className="inline-block"
            style={{ willChange: "transform, opacity, filter" }}
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
