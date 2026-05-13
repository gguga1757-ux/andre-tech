import { motion } from "motion/react";
import { Camera, Cpu, Store } from "lucide-react";
import { STORE_ADDRESS, STORE_CITY } from "@/lib/constants";

const mediaScenes = [
  {
    icon: Store,
    code: "STORE / 01",
    title: "Fachada, balcão e atendimento",
    detail: "Fotografia própria da loja com contraste refinado, grão suave e luz ambiente.",
    className: "md:col-span-7",
  },
  {
    icon: Cpu,
    code: "BENCH / 02",
    title: "Bancada técnica e hardware",
    detail: "Close-ups de reparo, ferramentas, placas e dispositivos em análise técnica.",
    className: "md:col-span-5 md:mt-16",
  },
  {
    icon: Camera,
    code: "PRODUCT / 03",
    title: "Produtos, acessórios e entrega",
    detail: "Imagens de vitrine, aparelhos finalizados e orientação no pós-atendimento.",
    className: "md:col-span-6 md:col-start-4",
  },
];

export function LabMedia() {
  return (
    <section className="noise relative overflow-hidden py-28 md:py-40">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_68%_22%,rgba(45,255,20,.075),transparent_34%),radial-gradient(ellipse_at_16%_72%,rgba(255,229,196,.035),transparent_28%),linear-gradient(180deg,var(--bg),rgba(8,14,10,.96)_48%,var(--bg))]" />
      <div className="absolute inset-0 calibration-grid opacity-[0.2]" />
      <div className="scene-depth" />
      <div className="scene-rail left-[var(--gutter)] top-16 h-px w-[32vw]" />
      <div className="scene-rail bottom-20 right-[var(--gutter)] h-px w-[28vw]" />

      <div className="relative z-10 mx-auto max-w-[var(--max)] px-[var(--gutter)]">
        <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[620px]"
          >
            <div className="mb-5 flex items-center gap-3 text-sm uppercase tracking-[0.28em] text-primary/78">
              <span className="h-px w-12 bg-primary/45" />
              Mídia real
            </div>

            <h2 className="font-display text-5xl leading-[0.98] tracking-normal text-foreground sm:text-6xl lg:text-7xl">
              Imagens da loja com acabamento profissional.
            </h2>

            <p className="mt-7 max-w-[560px] text-base leading-relaxed text-foreground/62 md:text-lg">
              A presença visual da André Tech mostra a loja de verdade:
              fotografia própria, luz suave e leitura de marca física.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {["REAL STORE MEDIA", "HARDWARE CLOSE-UP", "LOCAL OPERATION"].map(
                (item) => (
                  <span key={item} className="micro-hud px-3 py-2">
                    {item}
                  </span>
                )
              )}
            </div>

            <div className="mt-10 border-t border-primary/12 pt-5 text-sm leading-relaxed text-foreground/44">
              {STORE_ADDRESS} · {STORE_CITY}
            </div>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-12 md:gap-8">
            {mediaScenes.map((scene, index) => {
              const Icon = scene.icon;

              return (
                <motion.article
                  key={scene.code}
                  initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.28 }}
                  transition={{
                    duration: 0.88,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`media-treatment min-h-[330px] px-6 py-6 ${scene.className}`}
                >
                  <div className="relative z-10 flex h-full min-h-[280px] flex-col justify-between">
                    <div className="flex items-start justify-between gap-5">
                      <div className="micro-hud px-3 py-2">{scene.code}</div>
                      <Icon className="h-5 w-5 text-primary/72" />
                    </div>

                    <div>
                      <h3 className="max-w-[460px] text-3xl leading-tight tracking-normal text-foreground md:text-4xl">
                        {scene.title}
                      </h3>
                      <p className="mt-4 max-w-[430px] text-sm leading-relaxed text-foreground/58 md:text-base">
                        {scene.detail}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
