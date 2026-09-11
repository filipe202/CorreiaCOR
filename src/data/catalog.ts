/**
 * Catálogo do marketplace.
 *
 * Para adicionar um produto basta acrescentar um objeto a `products`.
 * O campo `shape` escolhe a ilustração vetorial usada na pré-visualização
 * (ver src/components/ProductVisual.tsx) — não é preciso ter fotografia.
 */

export type Technique =
  | "Serigrafia"
  | "Bordado"
  | "DTF"
  | "Sublimação"
  | "Gravação laser"
  | "Tampografia"
  | "Vinil térmico"
  | "Impressão UV";

export type ProductShape =
  | "tshirt"
  | "polo"
  | "hoodie"
  | "cap"
  | "apron"
  | "mug"
  | "bottle"
  | "thermos"
  | "totebag"
  | "backpack"
  | "pen"
  | "notebook"
  | "folder"
  | "lanyard"
  | "usb"
  | "powerbank"
  | "mousepad"
  | "umbrella"
  | "keyring"
  | "towel"
  | "vest"
  | "badge";

export type ColorOption = { name: string; hex: string };

export type Product = {
  slug: string;
  name: string;
  category: string;
  shape: ProductShape;
  summary: string;
  description: string;
  /** Preço indicativo por unidade, no escalão de entrada. Em euros. */
  fromPrice: number;
  /** Quantidade mínima de encomenda. */
  minQuantity: number;
  /** Escalões sugeridos no configurador. */
  quantitySteps: number[];
  colors: ColorOption[];
  techniques: Technique[];
  materials: string;
  printAreas: string[];
  leadTime: string;
  tags?: string[];
  bestseller?: boolean;
  eco?: boolean;
};

export type Category = {
  slug: string;
  name: string;
  blurb: string;
};

export const categories: Category[] = [
  {
    slug: "textil",
    name: "Têxtil & Vestuário",
    blurb: "Fardamento, merchandising e equipas com a sua marca vestida.",
  },
  {
    slug: "bebida",
    name: "Garrafas & Canecas",
    blurb: "O brinde que fica na secretária todos os dias.",
  },
  {
    slug: "sacos",
    name: "Sacos & Mochilas",
    blurb: "Publicidade que anda na rua por si.",
  },
  {
    slug: "escrita",
    name: "Escrita & Papelaria",
    blurb: "Clássicos de baixo custo e alta rotação.",
  },
  {
    slug: "tecnologia",
    name: "Tecnologia",
    blurb: "Brindes com utilidade diária e percepção de valor alta.",
  },
  {
    slug: "eventos",
    name: "Eventos & Feiras",
    blurb: "Tudo o que precisa para um stand ou congresso.",
  },
];

const INK = "#12161d";
const WHITE = "#f4f5f7";
const NAVY = "#1f3a68";
const RED = "#c2263c";
const GREEN = "#2f7d55";
const ROYAL = "#2b58c4";
const GREY = "#8e97a3";
const BEIGE = "#d8cbb4";
const ORANGE = "#e2622a";
const BOTTLEGREEN = "#123f33";
const SILVER = "#c9ced6";

const basicColors: ColorOption[] = [
  { name: "Branco", hex: WHITE },
  { name: "Preto", hex: INK },
  { name: "Azul-marinho", hex: NAVY },
  { name: "Vermelho", hex: RED },
  { name: "Verde", hex: GREEN },
  { name: "Cinza mesclado", hex: GREY },
];

export const products: Product[] = [
  {
    slug: "t-shirt-algodao-180g",
    name: "T-shirt algodão 180 g",
    category: "textil",
    shape: "tshirt",
    summary: "O cavalo de batalha do merchandising. Algodão penteado, corte unissexo.",
    description:
      "T-shirt em 100% algodão penteado de 180 g/m², com gola em costura dupla e ombro a ombro reforçado. Corte unissexo do XS ao 3XL, com modelação feminina disponível. É a base ideal para campanhas, eventos, equipas desportivas e fardamento de verão.",
    fromPrice: 4.9,
    minQuantity: 10,
    quantitySteps: [10, 25, 50, 100, 250, 500],
    colors: basicColors,
    techniques: ["Serigrafia", "DTF", "Vinil térmico", "Bordado"],
    materials: "100% algodão penteado, 180 g/m²",
    printAreas: ["Peito esquerdo", "Frente centrada", "Costas", "Manga"],
    leadTime: "5 a 8 dias úteis",
    tags: ["Unissexo", "XS–3XL"],
    bestseller: true,
  },
  {
    slug: "t-shirt-organica",
    name: "T-shirt algodão orgânico",
    category: "textil",
    shape: "tshirt",
    summary: "Certificada GOTS, para marcas que comunicam sustentabilidade.",
    description:
      "T-shirt em algodão orgânico certificado GOTS, 175 g/m², com tingimento de baixo impacto. Toque mais macio que o algodão convencional e excelente resultado em serigrafia com tintas à base de água.",
    fromPrice: 7.4,
    minQuantity: 25,
    quantitySteps: [25, 50, 100, 250, 500],
    colors: [
      { name: "Branco natural", hex: "#efece4" },
      { name: "Preto", hex: INK },
      { name: "Verde-sálvia", hex: "#8fa58c" },
      { name: "Areia", hex: BEIGE },
      { name: "Azul-marinho", hex: NAVY },
    ],
    techniques: ["Serigrafia", "Bordado", "DTF"],
    materials: "100% algodão orgânico GOTS, 175 g/m²",
    printAreas: ["Peito esquerdo", "Frente centrada", "Costas"],
    leadTime: "7 a 10 dias úteis",
    tags: ["GOTS"],
    eco: true,
  },
  {
    slug: "polo-pique",
    name: "Polo piqué 210 g",
    category: "textil",
    shape: "polo",
    summary: "Fardamento com ar cuidado, para balcão, obra ou feira.",
    description:
      "Polo em piqué de 210 g/m², com punhos canelados, três botões tonais e reforço lateral. Resiste bem a lavagens industriais, o que a torna a escolha habitual para fardamento diário.",
    fromPrice: 11.5,
    minQuantity: 10,
    quantitySteps: [10, 25, 50, 100, 250],
    colors: basicColors,
    techniques: ["Bordado", "Serigrafia", "Vinil térmico"],
    materials: "65% poliéster / 35% algodão, 210 g/m²",
    printAreas: ["Peito esquerdo", "Costas", "Manga"],
    leadTime: "7 a 10 dias úteis",
    bestseller: true,
  },
  {
    slug: "sweat-capuz",
    name: "Sweatshirt com capuz 280 g",
    category: "textil",
    shape: "hoodie",
    summary: "O favorito das equipas e do merchandising de marca.",
    description:
      "Sweatshirt com capuz forrado, bolso canguru e interior escovado, 280 g/m². Excelente suporte para bordado de grande dimensão e para serigrafia a várias cores.",
    fromPrice: 19.9,
    minQuantity: 10,
    quantitySteps: [10, 25, 50, 100, 250],
    colors: basicColors,
    techniques: ["Bordado", "Serigrafia", "DTF"],
    materials: "80% algodão / 20% poliéster, 280 g/m²",
    printAreas: ["Peito", "Costas", "Manga", "Capuz"],
    leadTime: "7 a 12 dias úteis",
  },
  {
    slug: "colete-alta-visibilidade",
    name: "Colete alta visibilidade",
    category: "textil",
    shape: "vest",
    summary: "Norma EN ISO 20471, com a sua marca bem visível.",
    description:
      "Colete refletor certificado EN ISO 20471 classe 2, com fecho de correr e duas faixas refletoras horizontais. Personalização em serigrafia ou vinil refletor, no peito e nas costas.",
    fromPrice: 5.2,
    minQuantity: 25,
    quantitySteps: [25, 50, 100, 250, 500],
    colors: [
      { name: "Amarelo fluorescente", hex: "#e8ea3c" },
      { name: "Laranja fluorescente", hex: "#f47b20" },
    ],
    techniques: ["Serigrafia", "Vinil térmico"],
    materials: "100% poliéster tricot, faixas refletoras",
    printAreas: ["Peito", "Costas"],
    leadTime: "5 a 8 dias úteis",
    tags: ["EPI", "EN ISO 20471"],
  },
  {
    slug: "bone-6-paineis",
    name: "Boné 6 painéis",
    category: "textil",
    shape: "cap",
    summary: "Bordado frontal incluído. Ajuste metálico ou velcro.",
    description:
      "Boné clássico de 6 painéis em sarja de algodão, com pala pré-curvada, ilhoses bordados e fecho ajustável. O bordado frontal é o acabamento mais procurado.",
    fromPrice: 5.8,
    minQuantity: 25,
    quantitySteps: [25, 50, 100, 250, 500],
    colors: basicColors,
    techniques: ["Bordado", "Serigrafia"],
    materials: "100% algodão sarja",
    printAreas: ["Frente", "Lateral", "Traseira"],
    leadTime: "10 a 15 dias úteis",
  },
  {
    slug: "avental-cozinha",
    name: "Avental com bolso",
    category: "textil",
    shape: "apron",
    summary: "Restauração, provas de vinho, showcooking e eventos.",
    description:
      "Avental em sarja de algodão com bolso duplo frontal, fita ajustável ao pescoço e cintas longas. Tecido robusto, preparado para lavagem frequente a alta temperatura.",
    fromPrice: 8.9,
    minQuantity: 10,
    quantitySteps: [10, 25, 50, 100, 250],
    colors: [
      { name: "Preto", hex: INK },
      { name: "Azul-marinho", hex: NAVY },
      { name: "Bordô", hex: "#6d1f2c" },
      { name: "Areia", hex: BEIGE },
    ],
    techniques: ["Bordado", "Serigrafia", "DTF"],
    materials: "Sarja 65/35, 240 g/m²",
    printAreas: ["Peito", "Bolso"],
    leadTime: "7 a 10 dias úteis",
  },
  {
    slug: "toalha-praia",
    name: "Toalha de praia sublimada",
    category: "textil",
    shape: "towel",
    summary: "Impressão total a cores, sem limite de cores no desenho.",
    description:
      "Toalha em microfibra com impressão por sublimação em toda a superfície: fotografias, degradés e padrões saem sem custo adicional por cor. Verso em algodão absorvente.",
    fromPrice: 12.4,
    minQuantity: 25,
    quantitySteps: [25, 50, 100, 250],
    colors: [{ name: "Impressão total", hex: "#e8eaf0" }],
    techniques: ["Sublimação"],
    materials: "Microfibra / algodão, 300 g/m²",
    printAreas: ["Superfície total"],
    leadTime: "10 a 15 dias úteis",
  },

  {
    slug: "caneca-ceramica",
    name: "Caneca cerâmica 330 ml",
    category: "bebida",
    shape: "mug",
    summary: "O brinde mais duradouro por euro investido.",
    description:
      "Caneca em cerâmica branca de 330 ml, apta para máquina de lavar e micro-ondas. Impressão por sublimação a toda a volta ou tampografia para logótipos a uma ou duas cores.",
    fromPrice: 3.4,
    minQuantity: 25,
    quantitySteps: [25, 50, 100, 250, 500, 1000],
    colors: [
      { name: "Branco", hex: WHITE },
      { name: "Interior preto", hex: INK },
      { name: "Interior vermelho", hex: RED },
      { name: "Interior azul", hex: ROYAL },
    ],
    techniques: ["Sublimação", "Tampografia"],
    materials: "Cerâmica AAA",
    printAreas: ["Lateral direita", "Lateral esquerda", "Volta completa"],
    leadTime: "5 a 8 dias úteis",
    bestseller: true,
  },
  {
    slug: "garrafa-inox-500",
    name: "Garrafa inox 500 ml",
    category: "bebida",
    shape: "bottle",
    summary: "Parede dupla, 12 h quente / 24 h frio. Gravação a laser.",
    description:
      "Garrafa térmica em aço inoxidável 18/8 com isolamento a vácuo de parede dupla, tampa estanque e acabamento mate. A gravação a laser deixa a marca permanente, sem desgaste com o uso.",
    fromPrice: 14.9,
    minQuantity: 25,
    quantitySteps: [25, 50, 100, 250, 500],
    colors: [
      { name: "Preto mate", hex: "#1b1e24" },
      { name: "Inox escovado", hex: SILVER },
      { name: "Verde-garrafa", hex: BOTTLEGREEN },
      { name: "Azul-marinho", hex: NAVY },
      { name: "Branco mate", hex: WHITE },
    ],
    techniques: ["Gravação laser", "Impressão UV"],
    materials: "Aço inox 18/8, isolamento a vácuo",
    printAreas: ["Corpo frontal", "Volta completa"],
    leadTime: "10 a 15 dias úteis",
    bestseller: true,
    eco: true,
  },
  {
    slug: "copo-termico-cafe",
    name: "Copo térmico de café 350 ml",
    category: "bebida",
    shape: "thermos",
    summary: "Substitui o copo descartável. Tampa deslizante anti-derrame.",
    description:
      "Copo térmico reutilizável em inox com interior cerâmico, tampa deslizante e base antiderrapante. Uma alternativa concreta ao descartável para empresas com metas ambientais.",
    fromPrice: 11.2,
    minQuantity: 25,
    quantitySteps: [25, 50, 100, 250],
    colors: [
      { name: "Preto mate", hex: "#1b1e24" },
      { name: "Areia", hex: BEIGE },
      { name: "Verde-sálvia", hex: "#8fa58c" },
      { name: "Inox", hex: SILVER },
    ],
    techniques: ["Gravação laser", "Impressão UV"],
    materials: "Inox com interior cerâmico",
    printAreas: ["Corpo frontal"],
    leadTime: "10 a 15 dias úteis",
    eco: true,
  },

  {
    slug: "saco-algodao-cru",
    name: "Saco de algodão cru",
    category: "sacos",
    shape: "totebag",
    summary: "Publicidade que anda na rua. Desde 1,90 € à centena.",
    description:
      "Tote bag em algodão cru de 140 g/m² com asas longas ao ombro. É o brinde com melhor relação entre custo, impacto visual e tempo de vida — anda na rua durante anos.",
    fromPrice: 1.9,
    minQuantity: 50,
    quantitySteps: [50, 100, 250, 500, 1000],
    colors: [
      { name: "Cru", hex: "#e4dcc9" },
      { name: "Preto", hex: INK },
      { name: "Azul-marinho", hex: NAVY },
      { name: "Vermelho", hex: RED },
    ],
    techniques: ["Serigrafia", "DTF"],
    materials: "100% algodão, 140 g/m²",
    printAreas: ["Frente", "Verso"],
    leadTime: "7 a 10 dias úteis",
    bestseller: true,
    eco: true,
  },
  {
    slug: "mochila-cordoes",
    name: "Mochila de cordões",
    category: "sacos",
    shape: "backpack",
    summary: "Ginásios, escolas, provas desportivas e campos de férias.",
    description:
      "Saco-mochila com cordões reforçados nos cantos, em poliéster 210D resistente à água. Leve, empilhável e barato de enviar — ideal para distribuição em massa.",
    fromPrice: 2.4,
    minQuantity: 50,
    quantitySteps: [50, 100, 250, 500, 1000],
    colors: basicColors,
    techniques: ["Serigrafia", "Impressão UV"],
    materials: "Poliéster 210D",
    printAreas: ["Frente"],
    leadTime: "7 a 12 dias úteis",
  },

  {
    slug: "caneta-esferografica",
    name: "Caneta esferográfica clássica",
    category: "escrita",
    shape: "pen",
    summary: "A partir de 0,29 €. Entregas rápidas em stock nacional.",
    description:
      "Esferográfica em ABS com clip metálico e tinta azul de escrita suave. Impressão a uma ou duas cores por tampografia no corpo. Disponível em stock para prazos curtos.",
    fromPrice: 0.29,
    minQuantity: 100,
    quantitySteps: [100, 250, 500, 1000, 2500, 5000],
    colors: [
      { name: "Branco", hex: WHITE },
      { name: "Preto", hex: INK },
      { name: "Azul", hex: ROYAL },
      { name: "Vermelho", hex: RED },
      { name: "Verde", hex: GREEN },
      { name: "Laranja", hex: ORANGE },
    ],
    techniques: ["Tampografia", "Impressão UV"],
    materials: "ABS com clip metálico",
    printAreas: ["Corpo", "Clip"],
    leadTime: "5 a 8 dias úteis",
    bestseller: true,
  },
  {
    slug: "caderno-a5-capa-dura",
    name: "Caderno A5 capa dura",
    category: "escrita",
    shape: "notebook",
    summary: "Elástico, marcador de fita e bolso interior.",
    description:
      "Caderno A5 com capa dura em PU, 80 folhas pautadas de 80 g, elástico de fecho, marcador de fita e bolso interior expansível. A gravação a laser na capa dá-lhe um acabamento discreto e permanente.",
    fromPrice: 4.6,
    minQuantity: 50,
    quantitySteps: [50, 100, 250, 500],
    colors: [
      { name: "Preto", hex: INK },
      { name: "Azul-marinho", hex: NAVY },
      { name: "Bordô", hex: "#6d1f2c" },
      { name: "Cinza", hex: GREY },
    ],
    techniques: ["Gravação laser", "Impressão UV", "Serigrafia"],
    materials: "Capa PU, miolo 80 g/m²",
    printAreas: ["Capa frontal", "Contracapa"],
    leadTime: "10 a 15 dias úteis",
  },
  {
    slug: "pasta-congresso",
    name: "Pasta de congresso A4",
    category: "escrita",
    shape: "folder",
    summary: "Bloco, caneta e cartões arrumados. Pronta para o dia do evento.",
    description:
      "Pasta A4 com fecho magnético, porta-bloco, argola para caneta e bolsos para cartões e documentos. Pode ser entregue já com bloco e caneta personalizados a condizer.",
    fromPrice: 6.8,
    minQuantity: 50,
    quantitySteps: [50, 100, 250, 500],
    colors: [
      { name: "Preto", hex: INK },
      { name: "Azul-marinho", hex: NAVY },
      { name: "Cinza", hex: GREY },
    ],
    techniques: ["Gravação laser", "Serigrafia", "Impressão UV"],
    materials: "PU sobre cartão rígido",
    printAreas: ["Capa frontal"],
    leadTime: "10 a 15 dias úteis",
  },

  {
    slug: "pen-usb-32gb",
    name: "Pen USB 32 GB",
    category: "tecnologia",
    shape: "usb",
    summary: "Pré-carregamento de ficheiros incluído, se precisar.",
    description:
      "Pen USB 3.0 de 32 GB em alumínio anodizado com corpo giratório. Podemos pré-carregar catálogos, apresentações ou vídeos antes do envio, e bloquear a pasta contra apagamento.",
    fromPrice: 5.4,
    minQuantity: 50,
    quantitySteps: [50, 100, 250, 500],
    colors: [
      { name: "Prateado", hex: SILVER },
      { name: "Preto", hex: INK },
      { name: "Azul", hex: ROYAL },
    ],
    techniques: ["Gravação laser", "Tampografia"],
    materials: "Alumínio anodizado, USB 3.0",
    printAreas: ["Corpo frontal", "Corpo traseiro"],
    leadTime: "12 a 18 dias úteis",
  },
  {
    slug: "powerbank-10000",
    name: "Powerbank 10 000 mAh",
    category: "tecnologia",
    shape: "powerbank",
    summary: "Brinde de topo para clientes e prémios internos.",
    description:
      "Bateria externa de 10 000 mAh com saída USB-C PD de 20 W, entrada USB-C e indicador de carga. Acabamento em alumínio, com gravação a laser que revela o alumínio por baixo.",
    fromPrice: 16.9,
    minQuantity: 25,
    quantitySteps: [25, 50, 100, 250],
    colors: [
      { name: "Preto", hex: INK },
      { name: "Prateado", hex: SILVER },
      { name: "Azul-marinho", hex: NAVY },
    ],
    techniques: ["Gravação laser", "Impressão UV"],
    materials: "Alumínio, células de lítio",
    printAreas: ["Face superior"],
    leadTime: "12 a 18 dias úteis",
  },
  {
    slug: "tapete-rato",
    name: "Tapete de rato personalizado",
    category: "tecnologia",
    shape: "mousepad",
    summary: "Impressão total a cores, base antiderrapante.",
    description:
      "Tapete de rato com superfície em tecido de microfibra e base em borracha natural antiderrapante. Impressão a cores em toda a área, com corte à medida se quiser um formato próprio.",
    fromPrice: 3.2,
    minQuantity: 50,
    quantitySteps: [50, 100, 250, 500],
    colors: [{ name: "Impressão total", hex: "#e8eaf0" }],
    techniques: ["Sublimação", "Impressão UV"],
    materials: "Microfibra sobre borracha natural",
    printAreas: ["Superfície total"],
    leadTime: "8 a 12 dias úteis",
  },

  {
    slug: "fita-porta-cartoes",
    name: "Fita porta-cartões (lanyard)",
    category: "eventos",
    shape: "lanyard",
    summary: "Com mosquetão e fecho de segurança. Entrega em 10 dias.",
    description:
      "Lanyard de 20 mm em poliéster com impressão do logótipo repetida ao longo da fita, mosquetão metálico e fecho de segurança destacável. Pode seguir já montado com os porta-cartões.",
    fromPrice: 0.95,
    minQuantity: 100,
    quantitySteps: [100, 250, 500, 1000, 2500],
    colors: [
      { name: "Azul-marinho", hex: NAVY },
      { name: "Preto", hex: INK },
      { name: "Vermelho", hex: RED },
      { name: "Branco", hex: WHITE },
      { name: "Cor personalizada", hex: "#7c5cff" },
    ],
    techniques: ["Serigrafia", "Sublimação"],
    materials: "Poliéster 20 mm",
    printAreas: ["Fita (repetido)"],
    leadTime: "10 a 15 dias úteis",
  },
  {
    slug: "cracha-evento",
    name: "Crachá de evento",
    category: "eventos",
    shape: "badge",
    summary: "Impressão variável: cada crachá com o nome do participante.",
    description:
      "Crachá em PVC ou cartão reciclado com impressão a cores. Fazemos dados variáveis a partir da sua lista de inscritos: nome, empresa, tipo de acesso e código QR únicos por participante.",
    fromPrice: 0.75,
    minQuantity: 100,
    quantitySteps: [100, 250, 500, 1000],
    colors: [{ name: "Impressão total", hex: "#e8eaf0" }],
    techniques: ["Impressão UV", "Sublimação"],
    materials: "PVC 0,76 mm ou cartão reciclado 350 g",
    printAreas: ["Frente", "Verso"],
    leadTime: "5 a 10 dias úteis",
    tags: ["Dados variáveis", "QR code"],
  },
  {
    slug: "chapeu-de-chuva-tempestade",
    name: "Chapéu de chuva antitempestade",
    category: "eventos",
    shape: "umbrella",
    summary: "Estrutura em fibra de vidro. Painéis a cores à escolha.",
    description:
      "Chapéu de chuva de 130 cm com varetas em fibra de vidro que dobram sem partir com rajadas, pega em madeira e abertura automática. Os painéis podem alternar cores da marca.",
    fromPrice: 9.8,
    minQuantity: 50,
    quantitySteps: [50, 100, 250, 500],
    colors: [
      { name: "Preto", hex: INK },
      { name: "Azul-marinho", hex: NAVY },
      { name: "Vermelho", hex: RED },
      { name: "Painéis alternados", hex: "#3aa0d9" },
    ],
    techniques: ["Serigrafia", "Sublimação"],
    materials: "Poliéster pongee 190T, fibra de vidro",
    printAreas: ["Painel", "Todos os painéis"],
    leadTime: "12 a 18 dias úteis",
  },
  {
    slug: "porta-chaves-metal",
    name: "Porta-chaves metálico",
    category: "eventos",
    shape: "keyring",
    summary: "Fabricado à medida da forma do seu logótipo.",
    description:
      "Porta-chaves em zamak com acabamento niquelado, dourado ou envelhecido. Produzido com molde à medida do contorno do seu logótipo e opção de esmalte a cores.",
    fromPrice: 1.6,
    minQuantity: 100,
    quantitySteps: [100, 250, 500, 1000],
    colors: [
      { name: "Níquel", hex: SILVER },
      { name: "Dourado", hex: "#c8a145" },
      { name: "Preto mate", hex: "#1b1e24" },
    ],
    techniques: ["Gravação laser", "Tampografia"],
    materials: "Zamak com acabamento galvânico",
    printAreas: ["Frente", "Verso"],
    leadTime: "15 a 25 dias úteis",
    tags: ["Forma à medida"],
  },
];

export const techniqueNotes: Record<Technique, string> = {
  Serigrafia:
    "Tinta aplicada através de uma tela, cor a cor. Imbatível em grandes quantidades e em têxtil de algodão.",
  Bordado:
    "Fio cosido na peça. Acabamento mais nobre e praticamente eterno, ideal em fardamento e bonés.",
  DTF: "Transfer digital a cores. Sem limite de cores nem custo por cor, perfeito para quantidades pequenas.",
  Sublimação:
    "A tinta passa a gás e entra no material. Impressão total a cores que não se sente ao toque.",
  "Gravação laser":
    "O laser remove a camada superficial e revela o material por baixo. Marca permanente em metal, madeira e couro.",
  Tampografia:
    "Transferência por tampão de silicone. A técnica certa para superfícies pequenas e irregulares, como canetas.",
  "Vinil térmico":
    "Vinil recortado e aplicado a calor. Excelente para números, nomes e peças unitárias.",
  "Impressão UV":
    "Tinta curada por luz ultravioleta diretamente sobre o objeto. Cores vivas em superfícies rígidas.",
};

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function productsByCategory(slug: string) {
  return products.filter((p) => p.category === slug);
}
