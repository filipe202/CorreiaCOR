/**
 * Dados da empresa, retirados de correiacor.pt.
 *
 * A página de contacto vive em /contacto/, e as de empresa e serviços em
 * /a-banda/ e /discografia/ — sobras dos nomes do template original.
 */
export const company = {
  name: "CorreiaCOR",
  legalName: "CorreiaCOR — Comunicação Visual",
  tagline: "A solução completa em comunicação visual",
  shortPitch:
    "Impressão digital e offset, têxtil, brindes, publicidade e marketing. Especializados em grande e pequeno formatos.",
  ceo: "Amilcar Correia",
  /** Anos de experiência de Amilcar Correia no setor gráfico. */
  ceoYearsInTrade: 30,
  /** Anos à frente da CorreiaCOR. */
  yearsLeading: 20,
  url: "https://www.correiacor.pt",

  email: "correiacor@correiacor.pt",
  phone: "+351 966 822 656",
  phoneHref: "+351966822656",
  phoneNote: "Chamada para rede móvel nacional",
  address: {
    street: "Rua Sousa Loureiro, n.º 9 — loja 7",
    postalCode: "1500-586",
    city: "Lisboa",
    country: "Portugal",
  },
  hours: [
    { days: "Segunda a sexta", time: "9h30 – 18h30" },
    { days: "Sábado e domingo", time: "Encerrado" },
  ],
} as const;

export const stats = [
  { value: "30+", label: "anos no setor gráfico" },
  { value: "20+", label: "anos de CorreiaCOR" },
  { value: "8", label: "famílias de produtos" },
];
