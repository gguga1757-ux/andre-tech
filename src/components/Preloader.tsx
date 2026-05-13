import { motion, useReducedMotion } from "motion/react";
import { BRAND_NAME, LOGO_PATH } from "@/lib/constants";

export function Preloader() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-[#020806] px-6 text-foreground"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        filter: "blur(10px)",
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
      }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      role="status"
      aria-live="polite"
      aria-label="Inicializando sistema"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_34%,rgba(45,255,20,0.105),transparent_36%),radial-gradient(ellipse_at_16%_18%,rgba(255,255,255,0.035),transparent_28%),linear-gradient(180deg,#020806_0%,#030604_55%,#010302_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-35 mix-blend-soft-light [background-image:linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px)] [background-size:100%_4px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl sm:h-64 sm:w-64" />

      <motion.div
        className="relative flex w-full max-w-[17rem] flex-col items-center"
        initial={{ y: 14, scale: 0.98, opacity: 0, filter: "blur(8px)" }}
        animate={{ y: 0, scale: 1, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="relative grid h-24 w-24 place-items-center rounded-full border border-primary/15 bg-white/[0.025] shadow-[0_0_46px_rgba(45,255,20,0.12),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl sm:h-28 sm:w-28"
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  scale: [1, 1.025, 1],
                  boxShadow: [
                    "0 0 36px rgba(45,255,20,0.10), inset 0 1px 0 rgba(255,255,255,0.12)",
                    "0 0 54px rgba(45,255,20,0.18), inset 0 1px 0 rgba(255,255,255,0.12)",
                    "0 0 36px rgba(45,255,20,0.10), inset 0 1px 0 rgba(255,255,255,0.12)",
                  ],
                }
          }
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(45,255,20,0.12),transparent_68%)]" />
          <img
            src={LOGO_PATH}
            alt={BRAND_NAME}
            className="relative h-14 w-14 sm:h-16 sm:w-16"
          />
        </motion.div>

        <motion.p
          className="mt-7 text-center font-body text-[0.68rem] font-medium uppercase leading-none tracking-[0.18em] text-foreground/58"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          Inicializando sistema...
        </motion.p>

        <div className="mt-5 h-px w-full max-w-[13rem] overflow-hidden bg-white/10">
          <motion.div
            className="h-full origin-left bg-[linear-gradient(90deg,transparent,rgba(45,255,20,0.86),rgba(237,255,235,0.72),transparent)]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 1.8, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
