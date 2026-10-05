# Despachante Teixeira — Site institucional

Projeto do site do **Despachante Teixeira**, despachante de documentação veicular em **Fazenda Rio Grande/PR** (Região Metropolitana de Curitiba).

> **Antes de escrever qualquer texto, página, componente visual ou copy, leia [rules.md](rules.md).** Ele define o que a marca significa, como ela fala e como ela se apresenta. Nada no site deve contradizê-lo.

**Domínio:** `despachanteteixeira.com.br`

## Documentação

| Arquivo | Conteúdo |
|---|---|
| [rules.md](rules.md) | Regras da marca: essência, tom de voz, identidade visual, faça/não faça |
| [docs/servicos.md](docs/servicos.md) | Catálogo de serviços (base: tabela de taxas do Detran-PR) agrupado na linguagem do cliente |
| [docs/concorrentes.md](docs/concorrentes.md) | Análise do Despachante São José e do Despachante Skora, com diferenciais e boas práticas |

## Status

Primeira versão do one page construída (05/10/2026). Lighthouse no mobile e no desktop: 99–100 nas quatro categorias, ~150 KB transferidos. Conteúdos que dependem de confirmação do cliente estão listados em "Pendente de confirmação".

## Comandos

```bash
# Neste ambiente (VS Code em Flatpak) o Node vem do Linuxbrew:
export PATH=/home/linuxbrew/.linuxbrew/bin:$PATH

npm install
npm run dev        # servidor local com hot reload
npm run build      # gera dist/ (site estático final)
npm run preview    # serve o dist/ localmente
node scripts/gerar-icones.mjs   # regenera favicon, apple-touch-icon e og-image a partir do logo
```

## Onde editar

- **Textos e listas** (serviços, diferenciais, passos, lojistas, FAQ): `src/data/content.ts`
- **Contato, endereço, redes, horário**: `src/data/site.ts`. O horário (`hours`) está `null` e só aparece no site quando for preenchido.
- **Cores e fontes**: `@theme` em `src/styles/global.css`
- **Ícones**: `src/data/icons.ts` (ícones de linha próprios e marcas do Simple Icons, CC0)
- **Seções**: um componente por seção em `src/components/`, montados em `src/pages/index.astro`

## Stack e diretrizes técnicas

**Formato:** site **one page**, moderno e leve.

**Stack:** [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com), ambos na versão estável mais recente, com saída **100% estática**.

Por que essa escolha: o Astro gera HTML puro (zero JS por padrão) mas mantém componentes, otimização de imagens e SEO. Next.js foi descartado porque o runtime do React é desnecessário para um one page. HTML puro foi descartado porque teríamos repetição manual e nenhum pipeline de imagens.

**Estrutura**
```
src/
  pages/index.astro        # a one page, só monta as seções
  layouts/Layout.astro     # <head>: SEO, Open Graph, JSON-LD LocalBusiness, preload de fontes
  components/              # Header, Hero, Diferenciais, Servicos, ComoFunciona, Lojistas, Faq, Contato, Footer, WhatsAppFab
  data/                    # site.ts (dados do cliente), content.ts (textos), icons.ts
  assets/                  # logo e fontes (processados pelo build)
  styles/global.css        # tokens da marca via @theme do Tailwind + animações
public/                    # favicon, apple-touch-icon, og-image, robots.txt
scripts/gerar-icones.mjs   # gera os ícones de public/ a partir do logo
```

**Seções da página, em ordem:** Header fixo, Hero, Diferenciais (4), Serviços (8 cards), Como funciona (4 passos), Lojistas, Dúvidas (FAQ com JSON-LD `FAQPage`), Contato, Rodapé e botão flutuante do WhatsApp.

**Fora por enquanto, até termos material real** (não inventar): depoimentos/avaliações do Google, números de prova (clientes atendidos etc.), fotos da fachada e da equipe, horário de atendimento.

**Regras para manter leve**
- **Zero JS por padrão.** Interatividade só com HTML nativo (`<details>` para FAQ, `<dialog>`, âncoras com `scroll-behavior: smooth`). Script pequeno inline apenas se inevitável (ex.: menu mobile). **Sem frameworks de UI** (React/Vue) e **sem bibliotecas de animação** (GSAP etc.).
- **Animações só em CSS** (transições, `@starting-style`, scroll-driven animations com fallback) e sempre respeitando `prefers-reduced-motion`.
- **Fontes self-hosted** em `src/assets/fonts/`: Playfair Display (títulos, normal + itálico) e Inter (texto), versões variáveis, só o subconjunto latino, `font-display: swap` e preload no `<head>`. Licença SIL OFL.
- **CSS embutido no HTML** (`build.inlineStylesheets: 'always'`), para não haver requisição bloqueando a renderização.
- **Imagens** via `<Image>`/`<Picture>` do Astro (AVIF/WebP, `width`/`height` definidos, `loading="lazy"` abaixo da dobra).
- **Sem embeds pesados.** Mapa do Google como imagem estática com link "Como chegar", nunca iframe no carregamento. Instagram como link, não widget.
- **Orçamento:** Lighthouse ≥ 95 em todas as categorias no mobile, página inicial < 300 KB transferidos.

**SEO local (obrigatório)**
- `title`/`description` com "Despachante em Fazenda Rio Grande".
- Dados estruturados JSON-LD `LocalBusiness` com endereço, telefone, horário e geo.
- Open Graph com imagem da marca, `sitemap.xml` e `robots.txt`.

**Conversão**
- Todo CTA leva ao WhatsApp `554137978070` com **mensagem pré-preenchida por origem** (ex.: `Olá! Vim pelo site e quero saber sobre transferência.`).
- Botão flutuante de WhatsApp no mobile.

**Deploy:** build estático (`dist/`). Hospedagem a definir: Cloudflare Pages ou o servidor da Kingdom Tech via Cloudflare Tunnel, como o sistema em `../Despachante`.

## Dados oficiais do cliente

| Campo | Valor |
|---|---|
| Nome fantasia | Despachante Teixeira |
| Site | despachanteteixeira.com.br |
| Razão social | Teixeira Administradora de Serviços LTDA |
| CNPJ | 43.610.174/0001-89 |
| Endereço | Av. das Araucárias, 264 — Eucaliptos, Fazenda Rio Grande/PR — CEP 83820-071 |
| Telefone / WhatsApp principal | (41) 3797-8070 — `https://wa.me/554137978070` |
| E-mail (cadastro CNPJ) | teixeiradespachantefrg@gmail.com |
| Instagram | [@despachanteteixeira](https://www.instagram.com/despachanteteixeira/) (~380 seguidores) |
| Facebook | [Despachante Teixeira](https://www.facebook.com/p/Despachante-Teixeira-100077034463156/) (~215 seguidores) |
| Linktree | [linktr.ee/despachanteteixeira](https://linktr.ee/despachanteteixeira) |
| Google | Perfil no Google Meu Negócio + Maps (coordenadas -25.6445, -49.3098) |

**Pendente de confirmação com o cliente:** horário de atendimento, nome do(s) responsável(is) e se aparecem no site, outros números de celular vistos em posts, nota/avaliações no Google, logo em vetor (SVG/AI), fotos reais da fachada e da equipe, lista definitiva de serviços e preços (se forem exibidos).

## Serviços

Despachante veicular com escopo completo de serviços do Detran-PR. O site mostra **só a vitrine de 8 serviços** definida em [docs/servicos.md](docs/servicos.md#vitrine-do-site-o-que-fica-visível); o resto do catálogo é atendido via WhatsApp.

Vitrine: transferência · licenciamento e CRLV-e · IPVA, multas e débitos em até 18x · primeiro emplacamento · 2ª via de documentos · veículo de outro estado · financiamento (gravame) · regularização e alterações. Seções à parte: **lojistas** e os diferenciais (**a domicílio**, **18x**).

## Concorrência

Referências: Despachante São José (São José dos Pinhais) e **Despachante Skora** (Curitiba). A Skora é o padrão de qualidade a superar e tem **paleta quase igual à nossa** (azul-marinho + amarelo). Detalhes e diferenciais em [docs/concorrentes.md](docs/concorrentes.md).

## Público

1. **Pessoa física** com carro/moto — quer resolver documento sem fila, sem perder dia de trabalho e sem medo de errar.
2. **Lojistas e revendas de veículos** da região — precisam de volume, agilidade e um parceiro confiável para não travar vendas.

## Origem das informações

Levantamento feito em 05/10/2026 a partir do Instagram, Facebook, Linktree, cadastros públicos do CNPJ, tabela de taxas do Detran-PR e sites dos concorrentes. Os canais têm pouco conteúdo textual, então tom de voz e identidade foram inferidos de bio, legendas e logo — validar com o cliente.

## Convenções do projeto

- Todo conteúdo do site é em **português do Brasil**.
- Contato principal sempre via **WhatsApp** — é o canal que o cliente usa em todos os posts.
- Informação legal/regulatória (Detran-PR, IPVA, prazos) só entra no site se confirmada em fonte oficial e com data; regras mudam todo ano.
