import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { PROCESS_STEPS } from "@/lib/constants";
import { BlurText } from "@/components/BlurText";
import { useMobileMotion } from "@/lib/motion";

const technicalLabels = [
  "chegada na loja",
  "diagnóstico explicado",
  "serviço autorizado",
  "teste na entrega",
];

function DesktopProcessStep({
  step,
  index,
}: {
  step: (typeof PROCESS_STEPS)[number];
  index: number;
}) {
  const itemRef = useRef<HTMLElement>(null);
  const mobileMotion = useMobileMotion();
  const isMobile = mobileMotion.isMobile;
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start 78%", "center 42%"],
  });
  const nodeOpacity = useTransform(scrollYProgress, [0, 0.55, 1], [0.45, 0.85, 1]);
  const nodeScale = useTransform(scrollYProgress, [0, 1], [0.86, 1]);
  const contentY = useTransform(scrollYProgress, [0, 1], [22, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.45, 1], [0, 0.72, 1]);
  const scanX = useTransform(scrollYProgress, [0, 1], ["-42%", "102%"]);

  return (
    <motion.article
      ref={itemRef}
      style={isMobile ? undefined : { opacity: contentOpacity, y: contentY }}
      initial={isMobile ? false : { filter: "blur(9px)" }}
      whileInView={isMobile ? { opacity: 1, y: 0 } : { filter: "blur(0px)" }}
      viewport={mobileMotion.viewport(isMobile ? 0.12 : 0.25)}
      transition={{
        duration: isMobile ? 0.34 : 0.9,
        delay: isMobile ? 0 : index * 0.06,
        ease: mobileMotion.ease,
      }}
      className="group relative py-7 pl-14 md:py-16 md:pl-24"
    >
      <motion.div
        style={{ opacity: nodeOpacity, scale: nodeScale }}
        animate={
          isMobile
            ? undefined
            : {
                boxShadow: [
                  "0 0 20px rgba(45,255,20,.16)",
                  "0 0 38px rgba(45,255,20,.28)",
                  "0 0 20px rgba(45,255,20,.16)",
                ],
              }
        }
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-23px] top-12 z-20 grid h-[46px] w-[46px] place-items-center rounded-full border border-primary/35 bg-[radial-gradient(circle_at_50%_42%,rgba(45,255,20,.32),rgba(45,255,20,.12)_42%,rgba(3,6,4,.94)_74%)] text-sm font-semibold text-primary md:top-16"
      >
        <span className="absolute inset-1 rounded-full border border-white/10" />
        <span className="absolute h-[68px] w-[68px] rounded-full border border-primary/10 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
        <span className="relative">{step.n}</span>
      </motion.div>

      <div className="material-surface cinematic-panel relative overflow-hidden rounded-lg border-t border-primary/15 px-6 pb-6 pt-8 md:px-8">
        <motion.div
          style={isMobile ? undefined : { x: scanX }}
          className="pointer-events-none absolute top-0 h-px w-44 bg-gradient-to-r from-transparent via-primary/70 to-transparent"
        />

        <div className="mb-5 flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="micro-hud px-2.5 py-1.5">
            {technicalLabels[index]}
          </span>
          <span className="h-px w-10 bg-primary/20" />
          <span className="text-[0.68rem] uppercase tracking-[0.2em] text-foreground/30">
            etapa {step.n}
          </span>
        </div>

        <h3 className="max-w-[620px] text-3xl leading-tight tracking-normal text-foreground md:text-5xl">
          {step.title}
        </h3>

        <p className="mt-5 max-w-[620px] text-base leading-relaxed text-foreground/62">
          {step.body}
        </p>

        <div className="mt-9 flex max-w-[620px] items-center justify-between border-t border-primary/10 pt-4 text-[0.65rem] uppercase tracking-[0.18em] text-foreground/28">
          <span>orientação clara</span>
          <span className="hidden sm:inline">andre tech atendimento</span>
        </div>
      </div>
    </motion.article>
  );
}

function MobileProcessStep({
  step,
  index,
}: {
  step: (typeof PROCESS_STEPS)[number];
  index: number;
}) {
  return (
    <article className="group relative py-7 pl-14 md:py-16 md:pl-24">
      <div className="absolute left-[-23px] top-12 z-20 grid h-[46px] w-[46px] place-items-center rounded-full border border-primary/35 bg-[radial-gradient(circle_at_50%_42%,rgba(45,255,20,.32),rgba(45,255,20,.12)_42%,rgba(3,6,4,.94)_74%)] text-sm font-semibold text-primary md:top-16">
        <span className="absolute inset-1 rounded-full border border-white/10" />
        <span className="relative">{step.n}</span>
      </div>

      <div className="material-surface cinematic-panel relative overflow-hidden rounded-lg border-t border-primary/15 px-6 pb-6 pt-8 md:px-8">
        <div className="pointer-events-none absolute top-0 h-px w-44 bg-gradient-to-r from-transparent via-primary/70 to-transparent" />

        <div className="mb-5 flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="micro-hud px-2.5 py-1.5">
            {technicalLabels[index]}
          </span>
          <span className="h-px w-10 bg-primary/20" />
          <span className="text-[0.68rem] uppercase tracking-[0.2em] text-foreground/30">
            etapa {step.n}
          </span>
        </div>

        <h3 className="max-w-[620px] text-3xl leading-tight tracking-normal text-foreground md:text-5xl">
          {step.title}
        </h3>

        <p className="mt-5 max-w-[620px] text-base leading-relaxed text-foreground/62">
          {step.body}
        </p>

        <div className="mt-9 flex max-w-[620px] items-center justify-between border-t border-primary/10 pt-4 text-[0.65rem] uppercase tracking-[0.18em] text-foreground/28">
          <span>orientaÃ§Ã£o clara</span>
          <span className="hidden sm:inline">andre tech atendimento</span>
        </div>
      </div>
    </article>
  );
}

function ProcessTimelineDesktop() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 72%", "end 45%"],
  });
  const activeLineScale = useTransform(scrollYProgress, [0, 1], [0.02, 1]);

  return (
    <div ref={timelineRef} className="relative ml-auto max-w-[940px]">
      <div className="absolute bottom-8 left-0 top-8 z-0 w-px bg-[linear-gradient(180deg,transparent,rgba(45,255,20,.18)_12%,rgba(255,255,255,.09)_48%,rgba(45,255,20,.14)_86%,transparent)]" />
      <motion.div
        style={{ scaleY: activeLineScale, transformOrigin: "top" }}
        className="absolute bottom-8 left-0 top-8 z-10 w-px bg-[linear-gradient(180deg,transparent,rgba(45,255,20,.88)_10%,rgba(180,255,170,.7)_54%,rgba(45,255,20,.34)_100%)] shadow-[0_0_26px_rgba(45,255,20,.24)]"
      />
      <motion.div
        animate={{ opacity: [0.2, 0.42, 0.2] }}
        transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-[-14px] top-8 z-0 w-7 bg-[linear-gradient(90deg,transparent,rgba(45,255,20,.11),transparent)] blur-md"
      />

      {PROCESS_STEPS.map((step, i) => (
        <DesktopProcessStep key={step.n} step={step} index={i} />
      ))}
    </div>
  );
}

function ProcessTimelineMobile() {
  return (
    <div className="relative ml-auto max-w-[940px]">
      <div className="absolute bottom-8 left-0 top-8 z-0 w-px bg-[linear-gradient(180deg,transparent,rgba(45,255,20,.18)_12%,rgba(255,255,255,.09)_48%,rgba(45,255,20,.14)_86%,transparent)]" />
      <div className="absolute bottom-8 left-0 top-8 z-10 w-px origin-top scale-y-100 bg-[linear-gradient(180deg,transparent,rgba(45,255,20,.88)_10%,rgba(180,255,170,.7)_54%,rgba(45,255,20,.34)_100%)] shadow-[0_0_26px_rgba(45,255,20,.24)]" />

      {PROCESS_STEPS.map((step, i) => (
        <MobileProcessStep key={step.n} step={step} index={i} />
      ))}
    </div>
  );
}

export function Process() {
  const mobileMotion = useMobileMotion();

  return (
    <section id="processo" className="noise relative overflow-hidden py-40 md:py-52">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_72%_18%,rgba(45,255,20,.085),transparent_34%),radial-gradient(ellipse_at_15%_78%,rgba(255,255,255,.05),transparent_30%),linear-gradient(180deg,rgba(3,6,4,.96),rgba(6,16,9,.92)_48%,var(--bg))]" />
      <div className="absolute inset-0 tech-grid opacity-[0.14] [mask-image:radial-gradient(ellipse_at_58%_45%,black,transparent_70%)]" />
      <div className="absolute left-[-16rem] top-28 h-[34rem] w-[34rem] rounded-full bg-primary/[0.055] blur-[130px]" />
      <div className="absolute right-[-18rem] bottom-16 h-[38rem] w-[38rem] rounded-full bg-primary/[0.07] blur-[150px]" />
      <div className="absolute inset-0 opacity-[0.1] [background-image:radial-gradient(circle_at_18%_22%,rgba(45,255,20,.28)_0_1px,transparent_1.5px),radial-gradient(circle_at_74%_34%,rgba(255,255,255,.2)_0_1px,transparent_1.4px),radial-gradient(circle_at_88%_72%,rgba(45,255,20,.2)_0_1px,transparent_1.5px)] [background-size:220px_220px,310px_310px,260px_260px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="scene-depth" />
      <div className="scene-rail right-[var(--gutter)] top-28 h-px w-[28vw]" />

      <div className="relative z-10 mx-auto max-w-[var(--max)] px-[var(--gutter)]">
        <div className="mb-10 max-w-[760px] md:mb-20">
          <motion.div
            initial={mobileMotion.reveal(18)}
            whileInView={mobileMotion.visible()}
            viewport={mobileMotion.viewport(0.22)}
            transition={mobileMotion.transition(0, 0.72)}
            className="mb-5 flex items-center gap-3 text-sm uppercase tracking-[0.28em] text-primary/80"
          >
            <span className="h-px w-12 bg-primary/50" />
            Processo
          </motion.div>

          <BlurText
            text="Um processo técnico pensado para gerar confiança."
            className="font-display text-5xl leading-[0.96] tracking-normal sm:text-6xl lg:text-7xl"
          />

          <motion.p
            initial={mobileMotion.reveal(16)}
            whileInView={mobileMotion.visible()}
            viewport={mobileMotion.viewport(0.2)}
            transition={mobileMotion.transition(0.32, 0.78)}
            className="mt-7 max-w-[640px] text-lg leading-relaxed text-foreground/64"
          >
            Do primeiro contato até a entrega, cada etapa existe para o cliente
            entender o que está acontecendo e decidir com segurança.
          </motion.p>
        </div>

        {mobileMotion.isMobile ? <ProcessTimelineMobile /> : <ProcessTimelineDesktop />}
      </div>
    </section>
  );
}
