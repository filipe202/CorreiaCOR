/**
 * Portfolio.
 *
 * Está vazio de propósito: correiacor.pt não publica nenhum trabalho, e não
 * vale a pena inventar clientes. A página de portfolio mostra o esqueleto e
 * pede ao cliente o que falta.
 *
 * Para cada trabalho real são precisos: uma ou duas fotografias, o nome do
 * cliente (com autorização para o usar), o ano, e uma ou duas frases sobre o
 * que era preciso e o que foi feito.
 */
export type CaseStudy = {
  slug: string;
  client: string;
  title: string;
  year: number;
  summary: string;
  /** Slug de um serviço em services.ts. */
  family: string;
  images: string[];
};

export const caseStudies: CaseStudy[] = [];

export function getCase(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
