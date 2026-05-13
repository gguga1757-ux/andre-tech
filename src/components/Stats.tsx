import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  STORE_ADDRESS,
  STORE_CITY,
  STORE_DISTRICT,
  WHATSAPP_URL,
} from "@/lib/constants";

const credibilitySignals = [
  {
    label: "loja física",
    title: "Atendimento presencial em Medianeira",
    detail: "Um lugar real para chegar, conversar, deixar o aparelho e acompanhar a solução.",
  },
  {
    label: "leitura técnica",
    title: "Diagnóstico antes de qualquer decisão",
    detail: "A equipe explica o que foi encontrado e orienta o caminho antes do reparo.",
  },
  {
    label: "rotina conectada",
    title: "Produtos e acessórios com orientação",
    detail: "Venda de aparelhos, acessórios e itens úteis com suporte de quem atende todo dia.",
  },
];

const systemLabels = [
  "whatsapp direto",
  "balcão técnico",
  "suporte humano",
  "produtos reais",
];

export function Stats() {
  return (
    <section className="noise relative overflow-hidden py-28 md:py-40">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_72%_28%,rgba(45,255,20,.09),transparent_34%),radial-gradient(ellipse_at_18%_70%,rgba(255,255,255,.04),transparent_28%),linear-gradient(180deg,var(--bg),rgba(6,16,9,.96)_48%,var(--bg))]" />
      <div className="absolute inset-0 tech-grid opacity-[0.1] [mask-image:radial-gradient(ellipse_at_58%_45%,black,transparent_72%)]" />
      <div className="absolute left-[-18rem] top-16 h-[34rem] w-[34rem] rounded-full bg-primary/[0.055] blur-[140px]" />
      <div className="absolute right-[-14rem] bottom-0 h-[28rem] w-[28rem] rounded-full bg-white/[0.03] blur-[130px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/18 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/12 to-transparent" />
      <div className="scene-depth" />

      <div className="relative z-10 mx-auto max-w-[var(--max)] px-[var(--gutter)]">
        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">
          <div className="max-w-[720px]">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
              className="mb-5 flex items-center gap-3 text-sm uppercase tracking-[0.28em] text-primary/80"
            >
              <span className="h-px w-12 bg-primary/50" />
              Presença local
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl leading-[0.96] tracking-normal text-foreground sm:text-6xl lg:text-7xl"
            >
              Uma assistência técnica com balcão, conversa e suporte direto.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: 0.22, duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 max-w-[620px] text-base leading-relaxed text-foreground/64 md:text-lg"
            >
              A André Tech combina atendimento humano, diagnóstico técnico e
              curadoria de tecnologia para quem prefere resolver com alguém de
              perto, em uma operação organizada e fácil de acessar.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: 0.34, duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10"
            >
              <Button variant="heroGlass" asChild className="w-full sm:w-auto">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" />
                  Falar pelo WhatsApp
                </a>
              </Button>
            </motion.div>

            <div className="mt-12 grid max-w-[620px] gap-4 sm:grid-cols-[0.7fr_0.3fr]">
              <div className="photo-slot min-h-[220px] rounded-lg">
                <div className="absolute left-5 top-5 z-10">
                  <div className="technical-label">STORE FRONT / BENCH</div>
                  <p className="mt-4 max-w-[320px] text-xl leading-tight text-foreground/76">
                    Fachada, atendimento ou bancada técnica em detalhe.
                  </p>
                </div>
              </div>
              <div className="material-surface cinematic-panel rounded-lg px-4 py-5">
                <div className="technical-label">LOCAL</div>
                <div className="mt-8 font-display text-4xl leading-none text-primary/85">
                  MD
                </div>
                <p className="mt-4 text-xs uppercase leading-relaxed tracking-[0.16em] text-foreground/38">
                  operação física em Medianeira
                </p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 34, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="material-surface cinematic-panel relative min-h-[520px] overflow-hidden rounded-lg border-y border-primary/14 px-8 py-10 md:px-10 md:py-12"
          >
            <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,.04),transparent_42%,rgba(45,255,20,.035))]" />
            <div className="absolute left-0 top-0 h-28 w-px bg-primary/38" />
            <div className="absolute right-0 bottom-0 h-28 w-px bg-primary/22" />
            <div className="absolute left-[14%] top-[16%] h-56 w-56 rounded-full border border-primary/10" />
            <div className="absolute inset-x-10 top-1/2 h-px bg-gradient-to-r from-transparent via-primary/18 to-transparent" />
            <div className="absolute bottom-[-2rem] right-[-4rem] font-display text-[7rem] leading-none tracking-normal text-white/[0.035] sm:text-[10rem]">
              MD
            </div>

            <div className="relative z-10 flex min-h-[440px] flex-col justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.24em] text-primary/70">
                  {STORE_ADDRESS} / {STORE_DISTRICT}
                </div>
                <div className="mt-5 max-w-[520px] font-display text-5xl leading-[0.96] tracking-normal text-foreground md:text-6xl">
                  {STORE_CITY}
                </div>
                <p className="mt-6 max-w-[430px] text-base leading-relaxed text-foreground/58">
                  Atendimento presencial para celulares, notebooks, tablets,
                  caixinhas de som, produtos e acessórios.
                </p>
              </div>

              <div className="space-y-7">
                {credibilitySignals.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                      delay: 0.18 + i * 0.08,
                      duration: 0.72,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative border-t border-primary/12 pt-5"
                  >
                    <div className="absolute left-0 top-0 h-px w-24 bg-primary/46" />
                    <div className="mb-2 text-[0.66rem] uppercase tracking-[0.22em] text-primary/58">
                      {item.label}
                    </div>
                    <h3 className="text-2xl leading-tight tracking-normal text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-[520px] text-sm leading-relaxed text-foreground/50">
                      {item.detail}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-8 right-8 hidden text-right text-[0.62rem] uppercase leading-loose tracking-[0.2em] text-foreground/26 md:block">
              {systemLabels.map((label) => (
                <div key={label}>{label}</div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
