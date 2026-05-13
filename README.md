# André Tech Landing

Experiência cinematográfica premium para a André Tech, estruturada como um laboratório técnico de tecnologia em Medianeira.

## Instalação

```bash
npm install
```

## Rodar localmente

```bash
npm run dev
```

No PowerShell, se a política de execução bloquear `npm`, use:

```bash
npm.cmd run dev
```

## Hero Temporário Sem Frames

O hero está temporariamente usando uma imagem estática premium em:

```txt
public/device.webp
```

Ela é renderizada diretamente no `Hero.tsx`, com motion cinematográfico, parallax sutil, scan line leve, glow verde e camadas de profundidade. Neste modo, o site não depende de:

- sequência de frames
- canvas scrub
- vídeo
- FFmpeg
- extração de frames

Para trocar a imagem, substitua `public/device.webp` mantendo o mesmo nome.

## Ajustes Principais

As constantes editáveis ficam em `src/lib/constants.ts`.

- `WHATSAPP_URL` controla todos os botões de WhatsApp.
- `FOOTER_LINKS` contém o link do Instagram.
- `SERVICES`, `PROCESS_STEPS`, `TESTIMONIALS` e `FAQ_ITEMS` controlam o conteúdo das seções.
- O logo fica em `public/logo.svg`.

## Produção

O projeto é estático e compatível com Vercel. Como o hero agora usa uma imagem única em vez de frame sequence, a publicação fica mais simples e leve. Para melhor resultado visual, mantenha `public/device.webp` otimizado e abaixo de 1.5MB sempre que possível.
