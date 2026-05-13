import { motion } from "motion/react";
import { BlurText } from "@/components/BlurText";

const trustProtocols = [
  {
    code: "P-01",
    label: "leitura técnica",
    title: "Nenhuma intervenção começa sem leitura técnica.",
    body:
      "Antes de qualquer decisão, o dispositivo passa por uma análise dos sintomas, histórico de uso e possíveis causas do problema.",
  },
  {
    code: "P-02",
    label: "diagnóstico claro",
    title: "Diagnóstico transparente antes de qualquer reparo.",
    body:
      "O cliente entende o caminho recomendado, os limites do serviço e o que faz sentido executar antes de aprovar a intervenção.",
  },
  {
    code: "P-03",
    label: "presença real",
    title: "Uma operação física para quem prefere proximidade.",
    body:
      "Atendimento presencial em Medianeira, com contato humano e suporte direto para acompanhar o aparelho de perto.",
  },
  {
    code: "P-04",
    label: "decisão assistida",
    title: "Explicação clara antes de qualquer escolha.",
    body:
      "A comunicação evita ruído técnico desnecessário e transforma o diagnóstico em orientação prática para o cliente.",
  },
  {
    code: "P-05",
    label: "curadoria",
    title: "Tecnologia além do reparo.",
    body:
      "Acessórios, aparelhos e soluções são selecionados para complementar a rotina digital com coerência e cuidado.",
  },
];

export function Faq() {
  const featured = trustProtocols[0];
  const supporting = trustProtocols.slice(1);

  return (
    <section className="noise relative overflow-hidden py-36 md:py-52">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_76%_26%,rgba(45,255,20,.085),transparent_34%),radial-gradient(ellipse_at_18%_72%,rgba(255,255,255,.045),transparent_28%),linear-gradient(180deg,var(--bg),rgba(6,16,9,.95)_46%,var(--bg))]" />
      <div className="absolute inset-0 tech-grid opacity-[0.11] [mask-image:radial-gradient(ellipse_at_58%_44%,black,transparent_72%)]" />
      <div className="absolute right-[-16rem] top-20 h-[34rem] w-[34rem] rounded-full bg-primary/[0.06] blur-[140px]" />
      <div className="absolute left-[-14rem] bottom-0 h-[28rem] w-[28rem] rounded-full bg-white/[0.03] blur-[130px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/16 to-transparent" />
      <div className="scene-depth" />
      <div className="scene-rail right-[var(--gutter)] top-24 h-px w-[30vw]" />

      <div className="relative z-10 mx-auto max-w-[var(--max)] px-[var(--gutter)]">
        <div className="grid gap-16 lg:grid-cols-[0.84fr_1.16fr] lg:gap-24">
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
              className="mb-5 flex items-center gap-3 text-sm uppercase tracking-[0.28em] text-primary/80"
            >
              <span className="h-px w-12 bg-primary/50" />
              Protocolo
            </motion.div>

            <BlurText
              text="Clareza antes da solução."
              className="font-display max-w-[720px] text-5xl leading-[0.94] tracking-normal sm:text-6xl lg:text-7xl"
            />

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.32, duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 max-w-[560px] text-lg leading-relaxed text-foreground/62"
            >
              A experiência André Tech começa antes do reparo: leitura técnica,
              transparência, presença real e orientação humana em cada decisão.
            </motion.p>

            <div className="mt-12 max-w-[520px] border-y border-primary/12 py-5">
              <div className="grid grid-cols-3 gap-4 text-[0.65rem] uppercase leading-relaxed tracking-[0.18em] text-foreground/32">
                <span>leitura</span>
                <span>orientação</span>
                <span>entrega</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-8 top-8 hidden h-[86%] w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent lg:block" />
            <div className="absolute right-0 top-6 hidden text-right text-[0.62rem] uppercase leading-loose tracking-[0.2em] text-foreground/24 md:block">
              confiança
              <br />
              atendimento real
              <br />
              suporte humano
            </div>

            <motion.article
              initial={{ opacity: 0, y: 32, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
              className="material-surface cinematic-panel relative overflow-hidden rounded-lg border-y border-primary/14 px-7 py-12 md:px-10 md:py-16"
            >
              <div className="absolute inset-0 bg-[linear-gradient(112deg,rgba(255,255,255,.045),transparent_44%,rgba(45,255,20,.035))]" />
              <div className="absolute left-0 top-0 h-28 w-px bg-primary/40" />
              <div className="absolute right-0 bottom-0 h-28 w-px bg-primary/24" />
              <div className="absolute right-[8%] top-[18%] h-44 w-44 rounded-full border border-primary/10" />
              <div className="absolute -right-8 bottom-[-2rem] font-display text-[9rem] leading-none text-white/[0.035] md:text-[13rem]">
                01
              </div>

              <div className="relative z-10 max-w-[760px]">
                <div className="mb-9 flex flex-wrap items-center gap-4">
                  <span className="text-xs uppercase tracking-[0.24em] text-primary/68">
                    {featured.code}
                  </span>
                  <span className="h-px w-12 bg-primary/24" />
                  <span className="text-xs uppercase tracking-[0.22em] text-foreground/32">
                    {featured.label}
                  </span>
                </div>

                <h3 className="max-w-[720px] text-4xl leading-[1.02] tracking-normal text-foreground md:text-6xl">
                  {featured.title}
                </h3>

                <p className="mt-8 max-w-[620px] text-base leading-relaxed text-foreground/60 md:text-lg">
                  {featured.body}
                </p>
              </div>
            </motion.article>

            <div className="mt-10 grid gap-y-8 md:grid-cols-2 md:gap-x-12 md:gap-y-14">
              {supporting.map((item, i) => (
                <motion.article
                  key={item.code}
                  initial={{ opacity: 0, y: 26, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    delay: 0.1 + i * 0.08,
                    duration: 0.82,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={
                    i === 1
                      ? "relative border-t border-primary/12 pt-7 md:mt-20"
                      : "relative border-t border-primary/12 pt-7"
                  }
                >
                  <div className="absolute left-0 top-0 h-px w-24 bg-primary/42" />
                  <div className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-primary/58">
                    <span>{item.code}</span>
                    <span className="h-px w-8 bg-primary/20" />
                    <span className="text-foreground/30">{item.label}</span>
                  </div>

                  <h3 className="text-2xl leading-tight tracking-normal text-foreground md:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-[520px] text-sm leading-relaxed text-foreground/54 md:text-base">
                    {item.body}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
