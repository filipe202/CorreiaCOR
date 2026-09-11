/**
 * Produtos e serviços, tal como estão descritos em correiacor.pt
 * (página "Os nossos serviços", servida em /discografia/ por herança do
 * template original). Não acrescentar serviços sem confirmar com o cliente.
 */
export type Service = {
  slug: string;
  name: string;
  description: string;
  /** Cor da roda do logótipo usada como acento desta família. */
  accent: string;
};

export const services: Service[] = [
  {
    slug: "cartazes",
    name: "Cartazes",
    description:
      "Impressão de cartazes de diversos tamanhos e formatos, ideais para divulgação de eventos, promoções e campanhas publicitárias.",
    accent: "#ed1c24",
  },
  {
    slug: "mupis-outdoors",
    name: "Mupis e outdoors",
    description:
      "Soluções visuais de alta resistência, perfeitas para grande alcance em espaços públicos e privados.",
    accent: "#f26522",
  },
  {
    slug: "lonas-telas",
    name: "Lonas e telas",
    description:
      "Impressão em materiais duráveis para publicidade em ambientes internos e externos.",
    accent: "#f7941e",
  },
  {
    slug: "expositores",
    name: "Expositores, PVC e alveolar",
    description:
      "Estruturas de exibição robustas e versáteis, ideais para feiras, eventos e pontos de venda.",
    accent: "#fdb913",
  },
  {
    slug: "brochuras-catalogos",
    name: "Brochuras, catálogos, folhetos e livros",
    description:
      "Impressão de materiais de alta qualidade, que valorizam a sua comunicação institucional e comercial.",
    accent: "#00a651",
  },
  {
    slug: "estacionario",
    name: "Estacionário de empresa e de eventos",
    description:
      "Cartões de visita, papel timbrado, crachás e outros materiais personalizados para a sua identidade visual.",
    accent: "#00aeef",
  },
  {
    slug: "etiquetas-rotulos",
    name: "Etiquetas e rótulos",
    description:
      "Soluções para embalagens, produtos e marcas, com acabamento profissional.",
    accent: "#662d91",
  },
  {
    slug: "brindes-textil",
    name: "Brindes publicitários e têxtil",
    description:
      "Uma variedade de itens personalizáveis para ações promocionais e fortalecimento da sua marca.",
    accent: "#ec008c",
  },
];

/**
 * Compromissos que o site atual assume, no texto institucional da página
 * inicial. São afirmações da empresa, não promessas nossas — por isso não
 * acrescentar prazos ou garantias que o cliente não tenha escrito.
 */
export const commitments = [
  {
    title: "Cada projeto, uma obra única",
    text: "Cada trabalho é tratado como uma obra única e exclusiva, e não como mais uma encomenda a sair da máquina.",
    accent: "#ed1c24",
  },
  {
    title: "Prazos que se cumprem",
    text: "Rapidez na execução sem abrir mão da perfeição, assegurando entregas dentro dos prazos estabelecidos.",
    accent: "#f7941e",
  },
  {
    title: "Aconselhamento especializado",
    text: "O acompanhamento personalizado segue o cliente desde o início até à conclusão de cada trabalho.",
    accent: "#00a651",
  },
  {
    title: "Materiais selecionados",
    text: "Rigorosos controlos de qualidade e materiais escolhidos para garantir desempenho superior e durabilidade.",
    accent: "#2e3192",
  },
];
