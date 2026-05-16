import { motion } from "motion/react";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlurText } from "@/components/BlurText";
import { WHATSAPP_URL } from "@/lib/constants";
import { Link } from "react-router-dom";
import { useMobileMotion } from "@/lib/motion";

const DEVICE_IMAGE = "/device-cutout.png";

const productLayers = [
  {
    n: "01",
    title: "Smartphones",
    body: "Aparelhos selecionados para quem busca tecnologia, desempenho e confiança na compra.",
  },
  {
    n: "02",
    title: "Acessórios essenciais",
    body: "Proteção, energia e acabamento para manter o dispositivo pronto para a rotina.",
  },
  {
    n: "03",
    title: "Áudio e periféricos",
    body: "Som, praticidade e conexões escolhidas para completar o ecossistema.",
  },
];

function ProductEcosystem() {
  const mobileMotion = useMobileMotion();

  return (
    <motion.div
      initial={mobileMotion.reveal(34, 12)}
      whileInView={mobileMotion.visible(true)}
      viewport={mobileMotion.viewport(0.16)}
      transition={mobileMotion.transition(0, 1)}
      className="relative hidden min-h-[200px] overflow-hidden md:block md:min-h-[440px] md:overflow-visible lg:min-h-[660px]"
      aria-hidden="true"
    >
      <div className="absolute inset-x-[8%] bottom-[5%] h-28 rounded-full bg-[radial-gradient(ellipse,rgba(0,0,0,.78),rgba(45,255,20,.08)_48%,transparent_74%)] blur-[34px]" />
      <div className="absolute left-[10%] top-[10%] h-[30rem] w-[30rem] rounded-full bg-primary/[0.075] blur-[130px]" />
      <div className="absolute right-[-10%] top-[18%] h-[24rem] w-[24rem] rounded-full bg-white/[0.035] blur-[110px]" />

      <motion.div
        animate={
          mobileMotion.fastPath
            ? undefined
            : { opacity: [0.18, 0.36, 0.18], scaleX: [0.96, 1.04, 0.96] }
        }
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[12%] right-[4%] top-[44%] h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent"
      />
      <div className="absolute left-[20%] top-[16%] h-1.5 w-1.5 rounded-full bg-primary/50 shadow-[0_0_18px_rgba(45,255,20,.48)]" />
      <div className="absolute right-[16%] top-[28%] h-1 w-1 rounded-full bg-white/35" />
      <div className="absolute left-[34%] bottom-[22%] h-1 w-1 rounded-full bg-primary/45" />

      <motion.div
        animate={
          mobileMotion.fastPath
            ? undefined
            : { y: [0, -10, 0], rotate: [-6, -4, -6] }
        }
        transition={{ duration: 8.6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[3%] top-[12%] h-44 w-52 opacity-80 hidden md:block md:left-[4%] md:top-[14%]"
      >
        <div className="absolute left-1/2 top-3 h-32 w-40 -translate-x-1/2 rounded-t-full border-[10px] border-b-0 border-white/10 shadow-[0_0_45px_rgba(45,255,20,.08)]" />
        <div className="absolute bottom-5 left-5 h-20 w-14 rounded-[28px] border border-primary/18 bg-[linear-gradient(145deg,rgba(255,255,255,.12),rgba(255,255,255,.025))] shadow-[inset_0_1px_0_rgba(255,255,255,.18),0_24px_70px_rgba(0,0,0,.45)]" />
        <div className="absolute bottom-3 right-5 h-24 w-16 rounded-[30px] border border-primary/22 bg-[linear-gradient(145deg,rgba(45,255,20,.12),rgba(255,255,255,.03))] shadow-[inset_0_1px_0_rgba(255,255,255,.14),0_26px_80px_rgba(0,0,0,.5)]" />
      </motion.div>

      <motion.div
        animate={
          mobileMotion.fastPath
            ? undefined
            : { y: [0, 12, 0], rotate: [8, 11, 8] }
        }
        transition={{ duration: 9.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[2%] top-[16%] h-44 w-32 opacity-[0.88] hidden md:block md:right-[8%] md:top-[12%]"
      >
        <div className="absolute left-1/2 top-0 h-12 w-12 -translate-x-1/2 rounded-full border border-primary/18 bg-white/[0.035] blur-[1px]" />
        <div className="absolute left-1/2 top-8 h-28 w-10 -translate-x-1/2 rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,.08),rgba(255,255,255,.02))]" />
        <div className="absolute left-1/2 top-14 grid h-20 w-20 -translate-x-1/2 place-items-center rounded-[24px] border border-primary/24 bg-[radial-gradient(circle_at_45%_36%,rgba(45,255,20,.15),rgba(3,6,4,.88)_62%)] shadow-[0_24px_80px_rgba(0,0,0,.56),0_0_34px_rgba(45,255,20,.1)]">
          <span className="h-8 w-8 rounded-full border border-primary/22" />
        </div>
      </motion.div>

      <motion.div
        animate={
          mobileMotion.fastPath
            ? undefined
            : { y: [0, -18, 0], rotateZ: [-4, -2, -4], rotateY: [0, -4, 0] }
        }
        transition={{ duration: 9.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 z-20 hidden w-[min(280px,70vw)] -translate-x-1/2 -translate-y-1/2 md:block md:bottom-[-2%] md:top-auto md:left-1/2 md:right-auto md:w-[min(300px,52vw)] md:-translate-x-1/2 md:-translate-y-0 lg:w-[420px]"
      >
        <img
          src={DEVICE_IMAGE}
          alt=""
          className="relative z-10 w-full object-contain opacity-90 md:max-h-[600px] md:w-auto [filter:drop-shadow(0_48px_120px_rgba(0,0,0,.82))_drop-shadow(0_0_32px_rgba(45,255,20,.15))]"
          draggable={false}
        />
        <div className="absolute inset-[5%] z-20 overflow-hidden opacity-30 mix-blend-screen [clip-path:polygon(9%_2%,88%_0,82%_96%,8%_94%)]">
          <div className="absolute left-[-38%] top-[18%] h-[13%] w-[132%] -rotate-[24deg] bg-[linear-gradient(100deg,transparent_0%,transparent_30%,rgba(255,255,255,.1)_49%,rgba(45,255,20,.045)_59%,transparent_80%)] blur-[1px]" />
        </div>
      </motion.div>

      <motion.div
        animate={
          mobileMotion.fastPath
            ? undefined
            : { y: [0, 8, 0], opacity: [0.38, 0.62, 0.38] }
        }
        transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[25%] left-[14%] h-24 w-24 rounded-full border border-primary/16 bg-[radial-gradient(circle,rgba(45,255,20,.13),transparent_64%)] blur-[0.2px]"
      />
      <div className="absolute bottom-[18%] right-[9%] h-16 w-16 rounded-full border border-white/10 bg-white/[0.025]" />
      <div className="absolute bottom-[13%] right-[18%] h-px w-32 rotate-[-18deg] bg-gradient-to-r from-transparent via-primary/28 to-transparent" />
    </motion.div>
  );
}

export function Products() {
  const mobileMotion = useMobileMotion();

  return (
    <section id="produtos" className="relative overflow-hidden py-40 md:py-52">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_25%,rgba(45,255,20,.09),transparent_34%),radial-gradient(ellipse_at_18%_68%,rgba(255,255,255,.045),transparent_28%),linear-gradient(180deg,var(--bg),rgba(6,16,9,.94)_48%,var(--bg))]" />
      <div className="absolute inset-0 tech-grid opacity-[0.12] [mask-image:radial-gradient(ellipse_at_70%_42%,black,transparent_72%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/18 to-transparent" />
      <div className="scene-depth" />
      <div className="scene-rail left-[var(--gutter)] bottom-28 h-px w-[26vw]" />

      <div className="relative mx-auto max-w-[var(--max)] px-[var(--gutter)]">
        <div className="grid items-center gap-8 md:grid-cols-[1fr_0.72fr] md:gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
          <div className="relative z-10 max-w-[760px]">
            <motion.div
              initial={mobileMotion.reveal(18)}
              whileInView={mobileMotion.visible()}
              viewport={mobileMotion.viewport(0.22)}
              transition={mobileMotion.transition(0, 0.72)}
              className="mb-5 flex items-center gap-3 text-sm uppercase tracking-[0.28em] text-primary/80"
            >
              <span className="h-px w-12 bg-primary/50" />
              Produtos
            </motion.div>

            <BlurText
              text="Produtos selecionados para uma rotina mais conectada."
              className="font-display text-5xl leading-[0.96] tracking-normal sm:text-6xl lg:text-7xl"
            />

            <motion.p
              initial={mobileMotion.reveal(16)}
              whileInView={mobileMotion.visible()}
              viewport={mobileMotion.viewport(0.2)}
              transition={mobileMotion.transition(0.32, 0.78)}
              className="mt-7 max-w-[620px] text-lg leading-relaxed text-foreground/64"
            >
              Aparelhos, acessórios e tecnologia escolhidos na loja para quem
              valoriza praticidade, estilo e suporte depois da compra.
            </motion.p>

            <div className="mt-12 max-w-[650px] border-y border-primary/12">
              {productLayers.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={mobileMotion.reveal(18)}
                  whileInView={mobileMotion.visible()}
                  viewport={mobileMotion.viewport(0.2)}
                  transition={mobileMotion.transition(0.42 + i * 0.08, 0.72)}
                  className="grid gap-4 border-b border-primary/10 py-6 last:border-b-0 sm:grid-cols-[72px_1fr]"
                >
                  <div className="font-display text-4xl leading-none text-primary/70">
                    {item.n}
                  </div>
                  <div>
                    <h3 className="text-2xl leading-tight tracking-normal text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-[480px] text-sm leading-relaxed text-foreground/56 md:text-base">
                      {item.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button variant="heroGlass" className="w-full sm:w-fit" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" />
                  Consultar disponibilidade
                </a>
              </Button>
              <Button variant="outline" className="w-full sm:w-fit" asChild>
                <Link to="/produtos">
                  Explorar catálogo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="mt-10 grid max-w-[640px] gap-4 sm:grid-cols-2">
              <div className="photo-slot min-h-[190px] rounded-lg">
                <div className="absolute left-5 top-5 z-10">
                  <div className="technical-label">PRODUCT MEDIA</div>
                  <p className="mt-4 max-w-[260px] text-xl leading-tight text-foreground/76">
                    Vitrine, acessórios e aparelhos em contexto real.
                  </p>
                </div>
              </div>
              <div className="material-surface cinematic-panel rounded-lg px-5 py-5">
                <div className="technical-label">CURADORIA</div>
                <p className="mt-8 text-2xl leading-tight text-foreground/78">
                  Compra com orientação, suporte e presença local.
                </p>
              </div>
            </div>
          </div>

          <ProductEcosystem />
        </div>
      </div>
    </section>
  );
}
