export type Service = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  bullets: string[];
  icon:
    | "printer"
    | "offset"
    | "shirt"
    | "gift"
    | "signage"
    | "vehicle"
    | "design";
};

export const services: Service[] = [
  {
    slug: "impressao-digital",
    name: "Impressão digital",
    tagline: "Grande e pequeno formato",
    description:
      "Do cartão de visita ao painel de seis metros. A impressão digital permite tiragens curtas sem custo de arranque e entregas em prazos que a offset não consegue acompanhar.",
    bullets: [
      "Grande formato até 3,20 m de largura",
      "Lonas, vinis, rígidos, papel de parede e têxtil",
      "Tiragens a partir de 1 exemplar",
      "Dados variáveis e numeração automática",
    ],
    icon: "printer",
  },
  {
    slug: "impressao-offset",
    name: "Impressão offset",
    tagline: "Tiragens grandes, custo por unidade baixo",
    description:
      "Quando o volume justifica, a offset entrega a melhor relação entre qualidade de cor e preço unitário. Catálogos, revistas, embalagens e campanhas de grande tiragem.",
    bullets: [
      "Quadricromia e cores Pantone diretas",
      "Acabamentos: verniz UV, laminação, relevo, corte especial",
      "Provas de cor calibradas antes da tiragem",
      "Gestão integral de papel e logística",
    ],
    icon: "offset",
  },
  {
    slug: "textil-personalizado",
    name: "Têxtil personalizado",
    tagline: "Fardamento, equipas e merchandising",
    description:
      "Vestimos empresas, clubes e eventos. Escolhemos consigo a peça, a técnica e o acabamento certos para o uso que lhe vai dar — e para o orçamento que tem.",
    bullets: [
      "Serigrafia, bordado, DTF e vinil térmico",
      "Fardamento completo com tamanhos por colaborador",
      "Etiquetas de marca própria cosidas na peça",
      "Reposições rápidas a partir do mesmo ficheiro",
    ],
    icon: "shirt",
  },
  {
    slug: "brindes-personalizados",
    name: "Brindes personalizados",
    tagline: "Mais de mil referências disponíveis",
    description:
      "Escolha no nosso marketplace, configure cor, quantidade e técnica de personalização, e receba o orçamento com prova digital antes de produzir.",
    bullets: [
      "Catálogo online com configuração e pedido direto",
      "Prova digital gratuita antes da produção",
      "Brindes com foco em sustentabilidade",
      "Fabrico à medida quando o catálogo não chega",
    ],
    icon: "gift",
  },
  {
    slug: "comunicacao-visual",
    name: "Comunicação visual & sinalética",
    tagline: "O seu espaço a comunicar por si",
    description:
      "Montras, fachadas, sinalética interior e stands de feira. Projetamos, produzimos e instalamos — com licenciamento tratado quando é preciso.",
    bullets: [
      "Letras 3D, painéis luminosos e toldos",
      "Decoração de montras e vidros em vinil",
      "Sinalética interior e de segurança",
      "Stands de feira chave-na-mão",
    ],
    icon: "signage",
  },
  {
    slug: "decoracao-viaturas",
    name: "Decoração de viaturas",
    tagline: "A frota como meio publicitário",
    description:
      "Do lettering discreto ao envolvimento total da viatura. Usamos vinis de fundição com garantia do fabricante e aplicação certificada, removíveis sem danificar a pintura.",
    bullets: [
      "Wrapping total ou parcial",
      "Vinis de fundição com 5 a 7 anos de garantia",
      "Simulação prévia sobre o modelo da viatura",
      "Aplicação em frota, no local ou nas nossas instalações",
    ],
    icon: "vehicle",
  },
  {
    slug: "design-grafico",
    name: "Design gráfico",
    tagline: "Antes de imprimir, é preciso desenhar",
    description:
      "Se ainda não tem arte final, fazemos nós. Logótipo, manual de normas, layout de campanha ou simples adaptação de ficheiros para produção.",
    bullets: [
      "Criação e redesenho de logótipo",
      "Manual de identidade e normas de aplicação",
      "Vetorização de logótipos antigos",
      "Preparação de ficheiros para produção",
    ],
    icon: "design",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Briefing",
    text: "Diz-nos o que precisa — nem que seja só uma ideia vaga e uma data. Respondemos em 48 horas úteis.",
  },
  {
    number: "02",
    title: "Orçamento e prova",
    text: "Enviamos preço por escalões de quantidade e uma prova digital com o seu logótipo aplicado no produto.",
  },
  {
    number: "03",
    title: "Produção",
    text: "Só produzimos depois da sua aprovação escrita da prova. Acompanhamos cada lote em fábrica.",
  },
  {
    number: "04",
    title: "Entrega",
    text: "Entregamos em todo o país. Se precisar, separamos por lojas, delegações ou por colaborador.",
  },
];
