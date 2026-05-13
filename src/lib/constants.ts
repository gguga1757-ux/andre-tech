export const BRAND_NAME = "André Tech";
export const BRAND_TAGLINE = "Sua assistência técnica em Medianeira";

export const LOGO_PATH = "/logo.svg";

export const CTA_LABEL = "Chamar no WhatsApp";

export const WHATSAPP_PHONE = "554599309296";
export const WHATSAPP_NUMBER = WHATSAPP_PHONE;
export const WHATSAPP_MESSAGE =
  "Olá, vim pelo site da André Tech e gostaria de atendimento.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;
export const CTA_HREF = WHATSAPP_URL;
export const INSTAGRAM_URL = "https://www.instagram.com/andretech_md/";
export const STORE_ADDRESS = "Avenida Brasil, 4202";
export const STORE_DISTRICT = "Parque Independência";
export const STORE_CITY = "Medianeira, PR";

export const FRAMES_PATH = "/frames";
export const FRAME_COUNT = Number("240");
export const FRAME_EXT = "webp" as "jpg" | "webp";

export const NAV_ITEMS = [
  { label: "Serviços", href: "/#servicos" },
  { label: "Processo", href: "/#processo" },
  { label: "Diferenciais", href: "/#diferenciais" },
  { label: "Produtos", href: "/produtos" },
  { label: "Contato", href: "/#contato" },
];

export const HERO_HEADLINE =
  "Assistência técnica para celulares, notebooks e eletrônicos.";

export const HERO_SUB =
  "Diagnóstico claro, atendimento presencial e suporte direto pelo WhatsApp para resolver seus dispositivos com segurança em Medianeira.";

export const HERO_CTA_PRIMARY = "Chamar no WhatsApp";
export const HERO_CTA_SECONDARY = "Conhecer serviços";

export const PARTNERS = [
  "Celulares",
  "Notebooks",
  "Tablets",
  "Caixinhas de som",
  "Computadores",
  "Acessórios",
  "Produtos",
  "Loja física",
];

export const SERVICES = [
  {
    title: "Reparo de celulares",
    body: "Avaliação técnica, orientação clara e reparo cuidadoso para devolver segurança e fluidez ao aparelho.",
    icon: "Smartphone",
  },
  {
    title: "Tela, bateria e desempenho",
    body: "Substituição e manutenção com acabamento limpo, teste final e explicação antes de qualquer decisão.",
    icon: "BatteryCharging",
  },
  {
    title: "Notebooks e tablets",
    body: "Suporte para os dispositivos de trabalho, estudo e rotina digital, com leitura técnica e atendimento próximo.",
    icon: "Laptop",
  },
  {
    title: "Diagnóstico técnico",
    body: "Antes do orçamento, a equipe entende sintomas, histórico e sinais do aparelho para indicar o caminho certo.",
    icon: "ScanLine",
  },
  {
    title: "Aparelhos e acessórios",
    body: "Venda de produtos e acessórios selecionados para quem quer tecnologia moderna sem perder suporte local.",
    icon: "ShoppingBag",
  },
  {
    title: "Som e rotina conectada",
    body: "Caixinhas de som e itens úteis para completar o dia a dia com praticidade, boa escolha e orientação.",
    icon: "Speaker",
  },
];

export const PROCESS_STEPS = [
  {
    n: "01",
    title: "Chegada e conversa",
    body: "O atendimento começa entendendo o problema, o uso do aparelho e o que o cliente precisa resolver primeiro.",
  },
  {
    n: "02",
    title: "Leitura técnica",
    body: "A equipe avalia sinais, testa funções e explica o diagnóstico antes de indicar reparo, troca ou produto.",
  },
  {
    n: "03",
    title: "Execução com cuidado",
    body: "O serviço é conduzido com foco em acabamento, segurança e recuperação da experiência de uso.",
  },
  {
    n: "04",
    title: "Teste e entrega",
    body: "Antes da entrega, o aparelho passa por conferência funcional e o cliente recebe orientação clara.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Atendimento direto, rápido e muito claro. Explicaram o problema do aparelho antes de qualquer serviço.",
    author: "Cliente André Tech",
  },
  {
    quote:
      "O reparo ficou excelente e o aparelho voltou com aparência e funcionamento muito melhores.",
    author: "Cliente André Tech",
  },
  {
    quote:
      "Gostei da confiança no diagnóstico e da forma profissional como conduziram o atendimento.",
    author: "Cliente André Tech",
  },
  {
    quote:
      "Atendimento organizado, visual moderno e solução rápida para resolver o que eu precisava.",
    author: "Cliente André Tech",
  },
];

export const FOOTER_LINKS = [
  {
    label: "Instagram",
    href: INSTAGRAM_URL,
    external: true,
  },
];
