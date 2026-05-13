import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowDownRight, MapPin, MessageCircle, Store, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlurText } from "@/components/BlurText";
import { useMediaQuery } from "@/lib/useMediaQuery";
import {
  BRAND_TAGLINE,
  HERO_HEADLINE,
  HERO_SUB,
  HERO_CTA_PRIMARY,
  HERO_CTA_SECONDARY,
  STORE_ADDRESS,
  STORE_CITY,
  WHATSAPP_URL,
} from "@/lib/constants";

const DEVICE_IMAGE = "/device-cutout.png";

const localSignals = [
  {
    icon: MapPin,
    label: STORE_ADDRESS,
    detail: STORE_CITY,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp direto",
    detail: "atendimento com a equipe",
  },
  {
    icon: Wrench,
    label: "Celulares, notebooks e tablets",
    detail: "diagnóstico e reparo",
  },
];

function PremiumDevice() {
  const shouldReduceMotion = useReducedMotion();
  const isMobile = useMediaQuery("(max-width: 767px)");
  const disableDecorativeMotion = shouldReduceMotion || isMobile;
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 0.35], [0, 22]);
  const y = useTransform(scrollYProgress, [0, 0.35], [14, -34]);
  const rotate = useTransform(scrollYProgress, [0, 0.35], [-5, -1.5]);
  const scale = useTransform(scrollYProgress, [0, 0.35], [0.9, 0.86]);
  const deviceMotion = disableDecorativeMotion
    ? { x: 0, y: 0, rotate: -4, scale: 0.84 }
    : { x, y, rotate, scale };

  return (
    <div
      className="pointer-events-none absolute top-[49%] right-[-52%] z-[2] flex w-[118vw] -translate-y-1/2 items-center justify-center opacity-[0.24] sm:right-[-22%] sm:w-[92vw] sm:opacity-[0.42] md:right-[-6%] md:w-[52vw] md:opacity-100"
      aria-hidden="true"
    >
      <motion.div
        style={deviceMotion}
        className="relative flex h-full w-full items-center justify-center"
      >
        <motion.div
          animate={
            disableDecorativeMotion
              ? undefined
              : { opacity: [0.18, 0.32, 0.18], scale: [0.96, 1.05, 0.96] }
          }
          transition={{ duration: 8.2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute hidden h-[44rem] w-[54rem] translate-x-10 translate-y-8 rounded-[45%] bg-[radial-gradient(ellipse,rgba(45,255,20,.105),rgba(148,255,135,.035)_46%,transparent_72%)] blur-[150px] md:block"
        />
        <div className="absolute hidden h-[32rem] w-[40rem] translate-x-8 translate-y-7 rounded-full bg-[radial-gradient(ellipse,rgba(45,255,20,.07),transparent_68%)] blur-[60px] md:block" />
        <motion.div
          animate={
            disableDecorativeMotion
              ? undefined
              : { rotate: [0, 3, 0], opacity: [0.16, 0.28, 0.16] }
          }
          transition={{ duration: 11.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute hidden h-[36rem] w-[36rem] rounded-[42%] border border-primary/[0.055] bg-[conic-gradient(from_180deg,transparent,rgba(45,255,20,.06),transparent,rgba(255,255,255,.035),transparent)] blur-[0.2px] md:block"
        />
        <motion.div
          animate={
            disableDecorativeMotion
              ? undefined
              : { opacity: [0.14, 0.24, 0.14], scaleX: [0.94, 1.07, 0.94] }
          }
          transition={{ duration: 8.8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[12%] hidden h-16 w-[20rem] rounded-full bg-[radial-gradient(ellipse,rgba(0,0,0,.74),rgba(45,255,20,.07)_48%,transparent_74%)] blur-[38px] md:block"
        />

        <motion.div
          animate={
            disableDecorativeMotion
              ? undefined
              : {
                  y: [0, -12, 0],
                  rotateZ: [-1.6, 0.5, -1.6],
                  rotateX: [0, 0.8, 0],
                  rotateY: [0, -1.1, 0],
                }
          }
          transition={{
            duration: 9.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative isolate [transform-style:preserve-3d] will-change-transform"
        >
          <div className="calibration-grid absolute -inset-[30%] z-0 hidden opacity-[0.18] md:block" />
          <div className="absolute -inset-[18%] z-0 hidden rounded-[42%] border border-primary/[0.055] [transform:rotate(-8deg)] md:block" />
          <div className="absolute -inset-[9%] z-0 hidden rounded-[40%] border border-white/[0.035] [transform:rotate(11deg)] md:block" />
          <motion.div
            animate={
              disableDecorativeMotion
                ? undefined
                : { opacity: [0.18, 0.32, 0.18], scale: [0.98, 1.05, 0.98] }
            }
            transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-[22%] z-0 hidden rounded-full bg-[radial-gradient(ellipse_at_center,rgba(45,255,20,.115),rgba(45,255,20,.04)_44%,transparent_72%)] blur-[72px] md:block"
          />
          <img
            src={DEVICE_IMAGE}
            alt=""
            className="absolute inset-0 z-[1] hidden h-full w-full object-contain opacity-[0.44] mix-blend-screen [filter:brightness(0)_saturate(100%)_invert(77%)_sepia(95%)_saturate(1470%)_hue-rotate(54deg)_blur(9px)] md:block"
            draggable={false}
          />
          <img
            src={DEVICE_IMAGE}
            alt=""
            className="absolute inset-0 z-[11] hidden h-full w-full object-contain opacity-[0.28] mix-blend-screen [clip-path:polygon(58%_0,100%_0,100%_100%,72%_100%)] [filter:brightness(1.75)_contrast(1.08)_saturate(1.1)] md:block"
            draggable={false}
          />
          <img
            src={DEVICE_IMAGE}
            alt=""
            className="absolute inset-0 z-[11] hidden h-full w-full object-contain opacity-[0.16] mix-blend-screen [clip-path:polygon(0_0,18%_0,11%_100%,0_100%)] [filter:brightness(1.45)_contrast(1.05)_saturate(1.05)] md:block"
            draggable={false}
          />

          <img
            src={DEVICE_IMAGE}
            alt=""
            className="relative z-10 max-h-[46svh] w-auto max-w-[min(330px,78vw)] object-contain md:max-h-[58vh] md:max-w-[min(380px,60vw)]"
            style={{
              filter:
                "drop-shadow(0 30px 82px rgba(0, 0, 0, 0.78)) drop-shadow(0 0 20px rgba(45, 255, 20, 0.15)) drop-shadow(-4px 0 12px rgba(45, 255, 20, 0.06))",
            }}
            draggable={false}
          />

          <div
            className="pointer-events-none absolute z-[12] overflow-hidden opacity-[0.38] mix-blend-screen"
            style={{
              inset: "4% 5.5% 4.5% 4%",
              clipPath: "polygon(10% 3%, 87% 0%, 82% 97%, 8% 94%)",
            }}
          >
            <div className="absolute left-[-36%] top-[18%] h-[15%] w-[132%] -rotate-[22deg] bg-[linear-gradient(100deg,transparent_0%,transparent_28%,rgba(255,255,255,.085)_48%,rgba(45,255,20,.04)_58%,transparent_78%)] blur-[1px]" />
          </div>

          <motion.div
            animate={
              disableDecorativeMotion
                ? undefined
                : { 
                    y: ["-110%", "116%"], 
                    opacity: [0, 0.3, 0],
                    scale: [0.98, 1.02, 0.98]
                  }
            }
            transition={{
              duration: 7.8,
              repeat: Infinity,
              repeatDelay: 2.4,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute z-[13] overflow-hidden mix-blend-screen animate-organic-float"
            style={{
              inset: "4% 5.5% 4.5% 4%",
              clipPath: "polygon(10% 3%, 87% 0%, 82% 97%, 8% 94%)",
            }}
          >
            <div className="h-24 w-full bg-[linear-gradient(180deg,transparent,rgba(255,255,255,.12),rgba(45,255,20,.08),rgba(45,255,20,.04),transparent)] blur-[8px] animate-breathing" />
          </motion.div>

          <div className="material-surface absolute -right-24 top-16 hidden rounded-lg px-4 py-3 text-right md:block">
            <div className="micro-hud justify-end px-2 py-1">LIVE SUPPORT</div>
            <div className="mt-2 text-[0.66rem] uppercase tracking-[0.18em] text-foreground/38">
              MEDIANEIRA / PR
            </div>
          </div>

          <div className="material-surface absolute -left-24 bottom-20 hidden rounded-lg px-4 py-3 md:block">
            <div className="micro-hud px-2 py-1">LOCAL OPERATION</div>
            <div className="mt-2 text-[0.66rem] uppercase tracking-[0.18em] text-foreground/38">
              DIAGNOSE FIRST
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden noise md:min-h-[92vh]">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_68%_42%,rgba(45,255,20,.16),transparent_30%),radial-gradient(circle_at_88%_12%,rgba(255,255,255,.07),transparent_26%),radial-gradient(circle_at_25%_75%,rgba(45,255,20,.08),transparent_35%),linear-gradient(135deg,var(--bg),var(--bg-2)_54%,var(--bg-3))]" />
      <div className="absolute inset-0 z-[1] tech-grid opacity-20" />
      <div className="absolute inset-0 z-[1] calibration-grid opacity-[0.12]" />
      <div className="scene-depth z-[2]" />
      <div className="scene-rail left-[var(--gutter)] top-28 z-[2] h-px w-[34vw]" />
      <div className="scene-rail bottom-36 right-[var(--gutter)] z-[2] h-px w-[28vw]" />
      <div className="absolute inset-x-[var(--gutter)] top-32 z-[1] hidden h-px bg-gradient-to-r from-primary/24 via-white/8 to-transparent md:block" />
      <div className="absolute bottom-28 left-[var(--gutter)] z-[1] hidden text-[0.62rem] uppercase leading-loose tracking-[0.22em] text-foreground/24 lg:block">
        SIGNAL ACTIVE
        <br />
        LOCAL OPERATION
        <br />
        LIVE SUPPORT
      </div>
      <PremiumDevice />

      {/* Atmospheric depth layers */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        <div className="absolute top-[15%] left-[8%] w-2 h-2 bg-primary/20 rounded-full animate-ambient-flicker" />
        <div className="absolute top-[42%] right-[12%] w-1.5 h-1.5 bg-white/15 rounded-full animate-ambient-flicker" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-[28%] left-[15%] w-1 h-1 bg-primary/25 rounded-full animate-ambient-flicker" style={{ animationDelay: '4s' }} />
        <div className="absolute top-[68%] right-[8%] w-2.5 h-2.5 bg-primary/12 rounded-full animate-ambient-flicker" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-[45%] right-[25%] w-1 h-1 bg-white/18 rounded-full animate-ambient-flicker" style={{ animationDelay: '3.5s' }} />
      </div>

      <div className="absolute inset-0 z-[3] bg-[linear-gradient(90deg,rgba(3,6,4,.94)_0%,rgba(3,6,4,.72)_43%,rgba(3,6,4,.26)_72%,rgba(3,6,4,.8)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 z-[4] h-[36vh] bg-gradient-to-t from-background via-background/70 to-transparent" />

      <div className="relative z-10 flex min-h-[100svh] items-center md:min-h-[92vh]">
        <div className="mx-auto w-full max-w-[var(--max)] px-[var(--gutter)] pb-12 pt-24 sm:pb-16 sm:pt-32 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-[790px]"
          >
            <div className="mb-6 inline-flex items-center gap-2 liquid-glass rounded-full px-4 py-2 text-sm text-foreground/76">
              <Store className="h-4 w-4 text-primary" />
              {BRAND_TAGLINE}
            </div>

            <BlurText
              text={HERO_HEADLINE}
              as="h1"
              className="font-display max-w-[850px] text-4xl leading-[1.02] tracking-normal sm:text-6xl sm:leading-[0.98] md:text-7xl lg:text-8xl xl:text-[6.35rem]"
            />

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.85,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-7 max-w-[650px] text-base leading-relaxed text-foreground/72 md:text-lg"
            >
              {HERO_SUB}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.58,
                duration: 0.85,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-9 flex flex-wrap gap-3 sm:gap-4"
            >
              <Button variant="hero" asChild className="w-full sm:w-auto">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" />
                  {HERO_CTA_PRIMARY}
                </a>
              </Button>

              <Button variant="heroGlass" asChild className="w-full sm:w-auto">
                <a href="#servicos">
                  <ArrowDownRight className="h-4 w-4" />
                  {HERO_CTA_SECONDARY}
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.74,
                duration: 0.82,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-8 grid max-w-[760px] gap-3 sm:mt-11 sm:grid-cols-3"
            >
              {localSignals.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="material-surface rounded-lg px-4 py-3.5"
                  >
                    <div className="flex items-start gap-3">
                      <Icon className="mt-0.5 h-4 w-4 text-primary" />
                      <div>
                        <div className="text-sm font-medium leading-snug text-foreground/88">
                          {item.label}
                        </div>
                        <div className="mt-1 text-xs uppercase tracking-[0.14em] text-foreground/42">
                          {item.detail}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
