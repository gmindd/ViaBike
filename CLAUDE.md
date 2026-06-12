# ViaBike — Website "A Volta"

## O que é este projeto

Website de página única (com espaço para crescer) para a **ViaBike**, loja de venda, reparação e aluguer de bicicletas em Darque, Viana do Castelo. Loja real: Rua das Flores 177, 4935-125 · +351 258 333 174 · vianabike@hotmail.com · agente Focus, Cervélo, Pinarello. Clientela mista: ciclistas locais do Alto Minho + cicloturistas estrangeiros (Caminho Português de Santiago, EuroVelo 1, Ecovia do Litoral Norte). Hoje só têm Facebook — este site é a primeira presença web própria.

**Toda a UI e copy em português europeu (PT-PT).** Nunca usar brasileirismos. Tom: direto, com personalidade de ciclista, sem corporativês.

## Conceito criativo — NÃO diluir

O site é um percurso de bicicleta. O scroll é pedalar:

1. **Rota SVG em fundo fixo** que se desenha com o progresso da página (stroke-dashoffset, pathLength=1000), com um ponto-ciclista laranja que viaja ao longo do traçado (`getPointAtLength`).
2. **Régua de telemetria fixa** (esquerda no desktop, barra inferior no mobile): odómetro 0.0→58.0 km mapeado ao progresso + velocímetro derivado da velocidade real do scroll.
3. **Secções = marcos quilométricos**: KM 0 Hero · KM 12 Bicicletas · KM 27 Oficina (banda escura diagonal) · KM 43 Aluguer · KM 58 Rotas · META Contacto.
4. Efeitos secundários: prato pedaleiro a rodar com scroll no hero, colinas em parallax a 2 velocidades, linhas de velocidade quando |velocidade| > limiar, fita de marcas com skew proporcional à aceleração, cartões com tilt 3D no hover, reveals via IntersectionObserver.

A assinatura é a rota + telemetria. Tudo o resto mantém-se disciplinado à volta disso.

## Design system

Cores (CSS custom properties, manter os nomes):
- `--cor-papel: #F2F3EF` (granito claro — fundo base)
- `--cor-papel-2: #E7E9E3`
- `--cor-tinta: #14171A` (asfalto — texto e banda escura)
- `--cor-sinal: #FF4517` (laranja sinalética de prova — acento único)
- `--cor-rio: #1E5A6E` (azul Lima — secundário frio)
- `--cor-cromado: #C6CBCF`

Tipografia (via `next/font/google`):
- Display: **Barlow Condensed** itálico 700/800, uppercase, line-height ~0.92
- Corpo: **Barlow** 400/500
- Dados/telemetria/eyebrows: **IBM Plex Mono** 400/600, letter-spacing largo

Detalhes de identidade: sombras duras offset (`box-shadow: 4px 4px 0`), skewX(-3deg) nos hovers de botões, clip-path diagonal de 3.5vw na secção escura, marcos "KM XX" como eyebrows com traço laranja.

## Protótipo de referência

Os ficheiros do protótipo validado estão na raiz do repo em `/prototipo`:
- `prototipo/index.html` — estrutura e copy final aprovada (usar o copy tal e qual)
- `prototipo/style.css` — todos os tokens, componentes e media queries
- `prototipo/script.js` — motor de animação completo, comentado em PT

O protótipo é a fonte de verdade visual. A migração deve ficar pixel-equivalente antes de qualquer melhoria.

## Stack e arquitetura alvo

- **Next.js 14+ (App Router) + Tailwind CSS**, deploy em Vercel.
- Tokens de cor/tipografia como CSS variables no `globals.css`, expostas ao Tailwind via `theme.extend` — não converter os hex em classes arbitrárias espalhadas.
- **Não adicionar GSAP/Framer Motion.** O motor de scroll do protótipo é um único `requestAnimationFrame` com lerp — portar para um hook cliente `useMotorDeScroll()` que alimenta rota, telemetria, parallax, prato e fita via refs. É leve e suficiente.
- Componentes sugeridos (client components apenas onde há interação): `FundoRota`, `Telemetria`, `Topo`, `Hero`, `FitaMarcas`, `GrelhaBicicletas` + `CartaBici` (tilt), `Oficina`, `Aluguer`, `RotasDaCasa`, `Rodape`.
- Reveals: hook `useRevelar()` com IntersectionObserver, ou CSS `animation-timeline` com fallback.
- Respeitar `prefers-reduced-motion` exatamente como no protótipo (motor desligado, reveals instantâneos).
- Página única em `/`, mas estruturar para futuro: `/aluguer` e `/oficina` podem virar rotas próprias.

## SEO (importante — é o argumento de venda ao cliente)

- Metadata PT-PT completa + Open Graph.
- JSON-LD `LocalBusiness`/`BikeStore` com morada, geo (41.6812, -8.8072), horário (Seg–Sex 9:00–12:30/14:00–19:00, Sáb 9:00–13:00), telefone.
- Nota EN no bloco de aluguer mantém-se (capta pesquisas "bike rental Camino Português").
- `lang="pt"` no html.

## Pendências conhecidas

- **Fotos reais da loja/bicicletas em falta** — os cartões e painéis estão desenhados para as receber (`next/image`, assets em `/public`). Até lá, manter os SVGs ilustrativos.
- Preços de aluguer por confirmar com o cliente — manter "sob consulta" onde está.
- Email profissional (geral@viabike.pt?) a propor ao cliente; por agora usar o hotmail real.
- Formulário de contacto/reserva: fase 2 (Resend, padrão já usado no SlotBook).

## Regras de qualidade

- Mobile-first; testar a telemetria em viewport estreito (passa a barra inferior de 52px, body ganha padding-bottom).
- Apenas `transform`/`opacity` em animações; `will-change` onde já está no protótipo.
- Lighthouse 95+ em Performance e Accessibility antes de considerar fechado.
- Foco de teclado visível em links e botões.
