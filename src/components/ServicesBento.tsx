import { motion } from "motion/react";
import { BlurText } from "@/components/BlurText";
import { SERVICES, STORE_ADDRESS, STORE_CITY } from "@/lib/constants";
import { useMobileMotion } from "@/lib/motion";

const DEVICE_IMAGE = "/device-cutout.png";

const localNotes = [
  { value: "loja", label: "atendimento presencial" },
  { value: "zap", label: "suporte direto" },
  { value: "MD", label: STORE_CITY },
];

const serviceScenes = [
  {
    n: "02",
    eyebrow: "celulares",
    service: SERVICES[0],
    className: "md:col-span-5 md:mt-8",
  },
  {
    n: "03",
    eyebrow: "tela, bateria e uso",
    service: SERVICES[1],
    className: "md:col-span-6 md:col-start-7",
  },
  {
    n: "04",
    eyebrow: "trabalho e estudo",
    service: SERVICES[2],
    className: "md:col-span-7 md:-mt-4",
  },
  {
    n: "05",
    eyebrow: "produtos e acessórios",
    service: SERVICES[4],
    className: "md:col-span-4 md:col-start-9 md:-mt-20",
  },
  {
    n: "06",
    eyebrow: "som e rotina",
    service: SERVICES[5],
    className: "md:col-span-5 md:col-start-4 md:mt-2",
  },
];

export function ServicesBento() {
  const diagnostic = SERVICES[3];
  const mobileMotion = useMobileMotion();

  return (
    <section id="servicos" className="relative overflow-hidden py-28 md:py-40">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_18%,rgba(45,255,20,.09),transparent_34%),radial-gradient(ellipse_at_18%_62%,rgba(255,255,255,.05),transparent_28%),linear-gradient(180deg,rgba(3,6,4,.94),var(--bg)_42%,rgba(3,6,4,.98))]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
      <div className="absolute inset-0 tech-grid opacity-[0.14] [mask-image:radial-gradient(ellipse_at_65%_40%,black,transparent_72%)]" />
      <div className="scene-depth" />
      <div className="scene-rail left-[var(--gutter)] top-24 h-px w-[30vw]" />
      <div className="absolute right-[-18rem] top-24 h-[38rem] w-[38rem] rounded-full bg-primary/[0.075] blur-[150px]" />

      <div className="relative mx-auto max-w-[var(--max)] px-[var(--gutter)]">
        <div className="grid gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:items-start xl:gap-24">
          <div className="lg:sticky lg:top-28">
            <motion.div
              initial={mobileMotion.reveal(20)}
              whileInView={mobileMotion.visible()}
              viewport={mobileMotion.viewport(0.22)}
              transition={mobileMotion.transition(0, 0.75)}
              className="mb-7 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-primary/80"
            >
              <span className="h-px w-12 bg-primary/50" />
              Serviços / loja técnica
            </motion.div>

            <BlurText
              text="Tecnologia do dia a dia, tratada com cuidado."
              as="h2"
              className="font-display max-w-[700px] text-5xl leading-[0.96] tracking-normal text-foreground sm:text-6xl lg:text-7xl"
            />

            <motion.p
              initial={mobileMotion.reveal(18)}
              whileInView={mobileMotion.visible()}
              viewport={mobileMotion.viewport(0.2)}
              transition={mobileMotion.transition(0.32, 0.8)}
              className="mt-8 max-w-[560px] text-base leading-relaxed text-foreground/64 md:text-lg"
            >
              A André Tech recebe problemas reais: tela quebrada, bateria
              cansada, notebook lento, caixa de som falhando e acessórios que
              precisam fazer sentido na rotina.
            </motion.p>

            <div className="mt-12 grid max-w-[520px] grid-cols-3 border-y border-primary/15">
              {localNotes.map((note) => (
                <div
                  key={note.label}
                  className="min-h-24 border-r border-primary/10 py-5 pr-5 last:border-r-0"
                >
                  <div className="font-display text-3xl leading-none text-primary/90 md:text-4xl">
                    {note.value}
                  </div>
                  <div className="mt-3 max-w-28 text-xs uppercase leading-relaxed tracking-[0.16em] text-foreground/44">
                    {note.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 max-w-[520px] border-t border-primary/10 pt-4 text-sm text-foreground/46">
              {STORE_ADDRESS} · atendimento presencial e orientação pelo
              WhatsApp.
            </div>

            <div className="photo-slot mt-10 hidden max-w-[520px] rounded-lg lg:block">
              <div className="absolute left-5 top-5 z-10">
                <div className="technical-label">REAL STORE MEDIA</div>
                <div className="mt-4 max-w-[280px] text-2xl leading-tight text-foreground/78">
                  Bancada, vitrine e atendimento com presença real de loja.
                </div>
              </div>
              <div className="absolute bottom-5 right-5 z-10 text-right text-[0.62rem] uppercase leading-loose tracking-[0.18em] text-foreground/32">
                loja física
                <br />
                produtos reais
                <br />
                equipe André Tech
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-10 top-12 hidden h-[88%] w-px bg-gradient-to-b from-transparent via-primary/18 to-transparent lg:block" />
            <div className="absolute -left-[3.2rem] top-[18%] hidden h-2 w-2 rounded-full bg-primary shadow-[0_0_24px_rgba(45,255,20,.52)] lg:block" />

            <motion.article
              initial={mobileMotion.reveal(28, 10)}
              whileInView={mobileMotion.visible(true)}
              viewport={mobileMotion.viewport(0.16)}
              transition={mobileMotion.transition(0, 0.9)}
              className="material-surface cinematic-panel relative mb-12 min-h-[480px] overflow-hidden rounded-lg border-y border-primary/15 px-8 py-10 md:mb-20 md:px-10 md:py-12"
            >
              <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(255,255,255,.04),transparent_36%,rgba(45,255,20,.04)_100%)]" />
              <div className="absolute left-0 top-0 h-24 w-px bg-primary/42" />
              <div className="absolute right-0 bottom-0 h-24 w-px bg-primary/28" />
              <div className="absolute inset-x-10 top-1/2 h-px bg-gradient-to-r from-transparent via-primary/18 to-transparent" />
              <div className="absolute right-[18%] top-[18%] hidden h-40 w-40 rounded-full border border-primary/16 md:block" />
              <img
                src={DEVICE_IMAGE}
                alt=""
                className="absolute bottom-[-24%] right-[-46%] h-[520px] max-h-none w-auto opacity-[0.22] mix-blend-screen [filter:drop-shadow(0_44px_110px_rgba(0,0,0,.8))_drop-shadow(0_0_32px_rgba(45,255,20,.12))] md:bottom-[-28%] md:right-[-18%] md:h-[620px] md:opacity-30"
                draggable={false}
              />

              <div className="relative z-10 flex min-h-[390px] max-w-[470px] flex-col justify-end">
                <div className="mb-8 text-xs uppercase tracking-[0.24em] text-primary/75">
                  01 / primeiro atendimento
                </div>
                <div className="mb-5 flex flex-wrap gap-2">
                  {["SYSTEM READY", "SIGNAL ACTIVE"].map((item) => (
                    <span key={item} className="micro-hud px-2.5 py-1.5">
                      {item}
                    </span>
                  ))}
                </div>
                <h3 className="font-display text-5xl leading-[0.95] tracking-normal text-foreground md:text-6xl">
                  {diagnostic.title}
                </h3>
                <p className="mt-6 max-w-[430px] text-base leading-relaxed text-foreground/64">
                  {diagnostic.body}
                </p>
              </div>

              <div className="absolute bottom-8 right-8 hidden w-56 text-right text-[0.65rem] uppercase leading-loose tracking-[0.2em] text-foreground/34 md:block">
                recebe
                <br />
                orienta
                <br />
                resolve
              </div>
            </motion.article>

            <div className="grid grid-cols-1 gap-y-10 md:grid-cols-12 md:gap-x-8 md:gap-y-14">
              {serviceScenes.map((item, i) => (
                <motion.article
                  key={item.service.title}
                  initial={mobileMotion.reveal(26, 8)}
                  whileInView={mobileMotion.visible(true)}
                  viewport={mobileMotion.viewport(0.18)}
                  transition={mobileMotion.transition(i * 0.06, 0.82)}
                  className={`group relative border-t border-primary/15 pt-8 ${item.className}`}
                >
                  <div className="absolute left-0 top-0 h-px w-24 bg-primary/50 transition-all duration-500 group-hover:w-36" />
                  <div className="absolute right-0 top-3 font-display text-7xl leading-none text-white/[0.035] md:text-8xl">
                    {item.n}
                  </div>

                  <div className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-primary/68">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary/80 shadow-[0_0_16px_rgba(45,255,20,.5)]" />
                    {item.eyebrow}
                  </div>

                  <div className="mb-4 text-[0.62rem] uppercase tracking-[0.18em] text-foreground/28">
                    TECHNICAL FLOW / ANDRÉ TECH
                  </div>

                  <h3 className="max-w-[360px] text-3xl leading-tight tracking-normal text-foreground md:text-4xl">
                    {item.service.title}
                  </h3>

                  <p className="mt-5 max-w-[440px] text-sm leading-relaxed text-foreground/60 md:text-base">
                    {item.service.body}
                  </p>

                  <div className="mt-8 h-px w-[72%] bg-gradient-to-r from-primary/28 via-white/10 to-transparent" />
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
