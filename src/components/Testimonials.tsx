import { motion } from "motion/react";
import { TESTIMONIALS } from "@/lib/constants";
import { BlurText } from "@/components/BlurText";

const selectedQuotes = [TESTIMONIALS[0], TESTIMONIALS[2], TESTIMONIALS[3]];

export function Testimonials() {
  const [featured, ...supporting] = selectedQuotes;

  return (
    <section className="noise relative overflow-hidden py-36 md:py-52">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_24%_28%,rgba(45,255,20,.08),transparent_34%),radial-gradient(ellipse_at_78%_72%,rgba(255,255,255,.045),transparent_28%),linear-gradient(180deg,var(--bg),rgba(6,16,9,.94)_48%,var(--bg))]" />
      <div className="absolute inset-0 tech-grid opacity-[0.1] [mask-image:radial-gradient(ellipse_at_52%_44%,black,transparent_72%)]" />
      <div className="absolute left-[-18rem] top-24 h-[34rem] w-[34rem] rounded-full bg-primary/[0.055] blur-[140px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/16 to-transparent" />
      <div className="scene-depth" />

      <div className="relative z-10 mx-auto max-w-[var(--max)] px-[var(--gutter)]">
        <div className="grid gap-16 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24">
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
              className="mb-5 flex items-center gap-3 text-sm uppercase tracking-[0.28em] text-primary/80"
            >
              <span className="h-px w-12 bg-primary/50" />
              Confiança
            </motion.div>

            <BlurText
              text="Quando o reparo também transmite calma."
              className="font-display max-w-[720px] text-5xl leading-[0.96] tracking-normal sm:text-6xl lg:text-7xl"
            />

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: 0.32, duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 max-w-[560px] text-lg leading-relaxed text-foreground/62"
            >
              Poucas palavras, mas o sinal certo: clareza no atendimento,
              diagnóstico compreensível e cuidado visível na entrega.
            </motion.p>
          </div>

          <div className="relative">
            <div className="absolute -left-8 top-8 hidden h-[82%] w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent lg:block" />
            <div className="absolute right-0 top-6 hidden text-right text-[0.62rem] uppercase leading-loose tracking-[0.2em] text-foreground/24 md:block">
              vozes reais
              <br />
              atendimento claro
              <br />
              suporte humano
            </div>

            <motion.article
              initial={{ opacity: 0, y: 32, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
              className="material-surface cinematic-panel relative overflow-hidden rounded-lg border-y border-primary/14 px-7 py-12 md:px-10 md:py-16"
            >
              <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(255,255,255,.045),transparent_46%,rgba(45,255,20,.035))]" />
              <div className="absolute left-0 top-0 h-28 w-px bg-primary/42" />
              <div className="absolute right-0 bottom-0 h-28 w-px bg-primary/24" />
              <div className="absolute -right-10 top-12 font-display text-[12rem] leading-none text-white/[0.035] md:text-[16rem]">
                “
              </div>

              <div className="relative z-10 max-w-[760px]">
                <div className="mb-9 text-xs uppercase tracking-[0.24em] text-primary/68">
                  depoimento curado / 01
                </div>

                <p className="text-3xl leading-[1.15] tracking-normal text-foreground md:text-5xl">
                  “{featured.quote}”
                </p>

                <div className="mt-10 flex items-center gap-4">
                  <span className="h-px w-12 bg-primary/45" />
                  <span className="text-sm uppercase tracking-[0.22em] text-primary/72">
                    {featured.author}
                  </span>
                </div>
              </div>
            </motion.article>

            <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-12">
              {supporting.map((item, i) => (
                <motion.article
                  key={item.quote}
                  initial={{ opacity: 0, y: 26, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{
                    delay: 0.12 + i * 0.1,
                    duration: 0.82,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={i === 1 ? "relative border-t border-primary/12 pt-8 md:mt-24" : "relative border-t border-primary/12 pt-8"}
                >
                  <div className="absolute left-0 top-0 h-px w-24 bg-primary/42" />
                  <div className="mb-6 text-xs uppercase tracking-[0.22em] text-primary/58">
                    depoimento 0{i + 2}
                  </div>
                  <p className="text-xl leading-relaxed tracking-normal text-foreground/80 md:text-2xl">
                    “{item.quote}”
                  </p>
                  <div className="mt-8 text-xs uppercase tracking-[0.22em] text-foreground/38">
                    {item.author}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
