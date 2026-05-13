import { motion } from "motion/react";
import { BlurText } from "@/components/BlurText";
import { useMobileMotion } from "@/lib/motion";

const operatingSequence = [
  "receber",
  "ler sinais",
  "explicar",
  "executar",
  "validar",
];

export function Pourquoi() {
  const mobileMotion = useMobileMotion();

  return (
    <section id="diferenciais" className="noise relative overflow-hidden py-32 md:py-44">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_18%,rgba(45,255,20,.07),transparent_32%),radial-gradient(ellipse_at_12%_76%,rgba(255,255,255,.035),transparent_28%),linear-gradient(180deg,var(--bg),rgba(6,16,9,.94)_48%,var(--bg))]" />
      <div className="absolute inset-0 tech-grid opacity-[0.095] [mask-image:radial-gradient(ellipse_at_62%_40%,black,transparent_74%)]" />
      <div className="absolute right-[-18rem] top-10 h-[34rem] w-[34rem] rounded-full bg-primary/[0.045] blur-[150px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/14 to-transparent" />
      <div className="scene-depth" />

      <div className="relative z-10 mx-auto max-w-[var(--max)] px-[var(--gutter)]">
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:items-end lg:gap-24">
          <motion.div
            initial={mobileMotion.reveal(22, 8)}
            whileInView={mobileMotion.visible(true)}
            viewport={mobileMotion.viewport(0.2)}
            transition={mobileMotion.transition(0, 0.82)}
            className="max-w-[600px]"
          >
            <div className="mb-5 flex items-center gap-3 text-sm uppercase tracking-[0.28em] text-primary/75">
              <span className="h-px w-12 bg-primary/45" />
              Diferenciais
            </div>

            <BlurText
              text="Nenhuma intervenção começa sem leitura técnica."
              className="font-display text-4xl leading-[1] tracking-normal sm:text-5xl lg:text-6xl"
            />

            <p className="mt-7 max-w-[520px] text-base leading-relaxed text-foreground/58 md:text-lg">
              Antes da peça, vem a escuta. Antes da solução, vem a explicação.
              A operação existe para tornar o reparo mais claro, próximo e
              confiável para quem prefere falar com gente de verdade.
            </p>
          </motion.div>

          <motion.article
            initial={mobileMotion.reveal(28, 10)}
            whileInView={mobileMotion.visible(true)}
            viewport={mobileMotion.viewport(0.18)}
            transition={mobileMotion.transition(0.08, 0.92)}
            className="material-surface cinematic-panel relative overflow-hidden rounded-lg border-y border-primary/14 px-7 py-9 md:px-9 md:py-11"
          >
            <div className="absolute inset-0 bg-[linear-gradient(112deg,rgba(255,255,255,.035),transparent_46%,rgba(45,255,20,.03))]" />
            <div className="absolute left-0 top-0 h-24 w-px bg-primary/34" />
            <div className="absolute right-0 bottom-0 h-24 w-px bg-primary/18" />
            <div className="absolute bottom-[-2rem] right-[-1rem] font-display text-[8rem] leading-none text-white/[0.028] md:text-[11rem]">
              LOJA
            </div>

            <div className="relative z-10 grid gap-8 md:grid-cols-[0.36fr_0.64fr] md:items-end">
              <div>
                <div className="micro-hud px-3 py-2">protocolo central</div>
                <div className="mt-5 max-w-48 border-t border-primary/18 pt-4 text-[0.68rem] uppercase leading-loose tracking-[0.18em] text-foreground/34">
                  leitura
                  <br />
                  orientação
                  <br />
                  decisão
                </div>
              </div>

              <div>
                <h3 className="max-w-[650px] text-3xl leading-[1.04] tracking-normal text-foreground md:text-5xl">
                  Diagnóstico antes de substituição.
                </h3>
                <p className="mt-6 max-w-[620px] text-base leading-relaxed text-foreground/60">
                  O aparelho não entra em uma linha automática. Ele passa por
                  uma leitura técnica para entender se a troca é necessária, se
                  existe risco e qual caminho faz sentido para o cliente.
                </p>
              </div>
            </div>
          </motion.article>
        </div>

        <div className="mt-20 grid gap-y-14 md:grid-cols-12 md:gap-x-8 lg:mt-24">
          <motion.div
            initial={mobileMotion.reveal(26, 8)}
            whileInView={mobileMotion.visible(true)}
            viewport={mobileMotion.viewport(0.2)}
            transition={mobileMotion.transition(0, 0.82)}
            className="relative border-t border-primary/12 pt-7 md:col-span-5"
          >
            <div className="absolute left-0 top-0 h-px w-28 bg-primary/40" />
            <div className="mb-6 text-xs uppercase tracking-[0.22em] text-primary/58">
              princípio institucional
            </div>
            <p className="text-3xl leading-[1.12] tracking-normal text-foreground md:text-5xl">
              Explicação clara antes de qualquer decisão.
            </p>
          </motion.div>

          <motion.div
            initial={mobileMotion.reveal(22, 8)}
            whileInView={mobileMotion.visible(true)}
            viewport={mobileMotion.viewport(0.2)}
            transition={mobileMotion.transition(0.08, 0.82)}
            className="relative border-t border-primary/12 pt-7 md:col-span-3 md:col-start-7 md:mt-20"
          >
            <div className="absolute left-0 top-0 h-px w-20 bg-primary/36" />
            <div className="text-[0.66rem] uppercase tracking-[0.22em] text-primary/56">
              bloco técnico
            </div>
            <div className="mt-6 space-y-3">
              {operatingSequence.map((item, i) => (
                <div
                  key={item}
                  className="flex items-center justify-between border-t border-primary/8 pt-3 text-sm text-foreground/52"
                >
                  <span>{item}</span>
                  <span className="font-display text-lg text-primary/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={mobileMotion.reveal(22, 8)}
            whileInView={mobileMotion.visible(true)}
            viewport={mobileMotion.viewport(0.2)}
            transition={mobileMotion.transition(0.16, 0.82)}
            className="relative border-y border-primary/12 py-8 md:col-span-4 md:col-start-9"
          >
            <div className="absolute left-0 top-0 h-20 w-px bg-primary/28" />
            <div className="absolute right-0 bottom-0 h-20 w-px bg-primary/16" />
            <div className="mb-6 text-xs uppercase tracking-[0.22em] text-primary/58">
              micro operação
            </div>
            <h3 className="text-3xl leading-tight tracking-normal text-foreground">
              Uma operação local construída em confiança.
            </h3>
            <p className="mt-5 max-w-[420px] text-sm leading-relaxed text-foreground/52 md:text-base">
              Atendimento humano em Medianeira, comunicação direta e presença
              física para quem prefere acompanhar o serviço de perto.
            </p>
            <div className="mt-8 flex items-center justify-between border-t border-primary/10 pt-4 text-[0.64rem] uppercase tracking-[0.18em] text-foreground/30">
              <span>Medianeira</span>
              <span>contato real</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
