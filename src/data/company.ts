/**
 * Dados da empresa usados em todo o site.
 *
 * ⚠️ Os contactos abaixo estão por confirmar: o site antigo (correiacor.pt)
 * tinha ainda os valores de exemplo do template ("contato@exemplo.pt",
 * "+351 123 456 789"). Substituir pelos reais antes de publicar.
 */
export const company = {
  name: "CorreiaCOR",
  legalName: "CorreiaCOR — Comunicação Visual",
  tagline: "Damos cor às suas ideias",
  shortPitch:
    "Impressão digital e offset, têxtil personalizado, brindes e comunicação visual. Da ideia ao produto acabado, feito em Portugal.",
  ceo: "Amilcar Correia",
  founded: 2004,
  url: "https://www.correiacor.pt",

  // TODO(cliente): confirmar contactos reais
  email: "geral@correiacor.pt",
  quotesEmail: "orcamentos@correiacor.pt",
  phone: "+351 000 000 000",
  phoneHref: "+351000000000",
  whatsapp: "+351000000000",
  address: {
    street: "Rua a confirmar, n.º 00",
    postalCode: "0000-000",
    city: "Localidade",
    country: "Portugal",
  },
  vat: "PT000000000",
  hours: [
    { days: "Segunda a sexta", time: "09:00 – 18:00" },
    { days: "Sábado", time: "Sob marcação" },
    { days: "Domingo e feriados", time: "Encerrado" },
  ],
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
} as const;

export const stats = [
  { value: "20+", label: "anos a imprimir" },
  { value: "3 500+", label: "projetos entregues" },
  { value: "48h", label: "resposta a orçamentos" },
  { value: "100%", label: "produção nacional" },
];
