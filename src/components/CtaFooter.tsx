import { motion } from "motion/react";
import { ArrowUpRight, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMobileMotion } from "@/lib/motion";
import {
  BRAND_NAME,
  FOOTER_LINKS,
  NAV_ITEMS,
  STORE_ADDRESS,
  STORE_CITY,
  STORE_DISTRICT,
  WHATSAPP_URL,
} from "@/lib/constants";

const contactSignals = [
  "Diagnóstico explicado antes do reparo",
  "Atendimento presencial na Avenida Brasil",
  "WhatsApp direto com a equipe",
  "Produtos, acessórios e suporte local",
];

export function CtaFooter() {
  const mobileMotion = useMobileMotion();

  return (
    <section id="contato" className="noise relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_74%_22%,rgba(45,255,20,.07),transparent_32%),radial-gradient(ellipse_at_18%_80%,rgba(255,255,255,.035),transparent_26%),linear-gradient(180deg,var(--bg),rgba(6,16,9,.95)_52%,var(--bg))]" />
      <div className="absolute inset-0 tech-grid opacity-[0.09] [mask-image:radial-gradient(ellipse_at_58%_44%,black,transparent_74%)]" />
      <div className="absolute right-[-18rem] top-[-8rem] h-[34rem] w-[34rem] rounded-full bg-primary/[0.055] blur-[150px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/14 to-transparent" />
      <div className="scene-depth" />

      <div className="relative z-10 mx-auto max-w-[var(--max)] px-[var(--gutter)] py-28 md:py-36">
        <div className="grid items-end gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">
          <motion.div
            initial={mobileMotion.reveal(26, 8)}
            whileInView={mobileMotion.visible(true)}
            viewport={mobileMotion.viewport(0.2)}
            transition={mobileMotion.transition(0, 0.9)}
            className="max-w-[690px]"
          >
            <div className="mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.28em] text-primary/75">
              <span className="h-px w-12 bg-primary/45" />
              Contato
            </div>

            <h2 className="font-display text-5xl leading-[0.96] tracking-normal text-foreground sm:text-6xl lg:text-7xl">
              Diagnóstico claro. Atendimento direto.
            </h2>

            <p className="mt-7 max-w-[560px] text-base leading-relaxed text-foreground/62 md:text-lg">
              Uma operação técnica pensada para confiança: orientação humana,
              leitura do dispositivo e contato simples com a equipe da loja.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {["LIVE SUPPORT", "MEDIANEIRA / PR", "WHATSAPP FIRST"].map(
                (item) => (
                  <span
                    key={item}
                    className="technical-label rounded-full border border-primary/10 px-3 py-2"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </motion.div>

          <motion.div
            initial={mobileMotion.reveal(28, 10)}
            whileInView={mobileMotion.visible(true)}
            viewport={mobileMotion.viewport(0.18)}
            transition={mobileMotion.transition(0.12, 0.9)}
            className="material-surface cinematic-panel relative overflow-hidden rounded-lg border-y border-primary/14 px-7 py-8 md:px-9 md:py-10"
          >
            <div className="absolute inset-0 bg-[linear-gradient(112deg,rgba(255,255,255,.04),transparent_46%,rgba(45,255,20,.035))]" />
            <div className="absolute left-0 top-0 h-24 w-px bg-primary/36" />
            <div className="absolute right-0 bottom-0 h-24 w-px bg-primary/22" />
            <div className="absolute bottom-[-2rem] right-[-2rem] font-display text-[8rem] leading-none text-white/[0.035]">
              AT
            </div>

            <div className="relative z-10">
              <div className="flex flex-col gap-7 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.24em] text-primary/65">
                    próximo passo / WhatsApp
                  </div>
                  <h3 className="mt-4 text-3xl leading-tight tracking-normal text-foreground md:text-4xl">
                    Fale com a André Tech.
                  </h3>
                </div>

                <Button variant="hero" asChild className="w-full gap-2 sm:w-fit">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                </Button>
              </div>

              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                {contactSignals.map((signal) => (
                  <div
                    key={signal}
                    className="border-t border-primary/10 pt-4 text-sm leading-relaxed text-foreground/56"
                  >
                    {signal}
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-4 border-t border-primary/10 pt-5 text-sm text-foreground/45 sm:flex-row sm:items-center sm:justify-between">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary/65" />
                  {STORE_ADDRESS} · {STORE_DISTRICT} · {STORE_CITY}
                </span>
                <a
                  href="/#servicos"
                  className="inline-flex w-fit items-center gap-2 uppercase tracking-[0.18em] text-primary/70 transition-colors hover:text-primary"
                >
                  Ver serviços
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <footer className="relative z-10 border-t border-primary/10">
        <div className="mx-auto flex max-w-[var(--max)] flex-col gap-8 px-[var(--gutter)] py-8 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="font-display text-2xl tracking-normal">
              {BRAND_NAME}
            </div>

            <p className="mt-2 text-sm text-foreground/45">
              Assistência técnica especializada em Medianeira.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-foreground/50">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}

            {FOOTER_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </section>
  );
}
