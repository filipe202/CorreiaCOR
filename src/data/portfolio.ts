/**
 * Casos de estudo do portfolio.
 *
 * ⚠️ Conteúdo de demonstração, escrito a partir do tipo de trabalho descrito
 * no site antigo. Substituir por projetos reais (e pedir autorização aos
 * clientes para usar o nome) antes de publicar.
 *
 * `palette` alimenta a capa gráfica gerada em src/components/CaseCover.tsx,
 * por isso o caso funciona mesmo antes de haver fotografias.
 */
export type CaseStudy = {
  slug: string;
  client: string;
  title: string;
  sector: string;
  year: number;
  summary: string;
  challenge: string;
  solution: string;
  result: string;
  deliverables: string[];
  services: string[];
  palette: [string, string, string];
  featured?: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "adega-vale-fundo",
    client: "Adega Vale Fundo",
    title: "Uma gama de vinhos do rótulo à caixa de oferta",
    sector: "Vinhos",
    year: 2025,
    summary:
      "Rótulos em papel texturado com relevo a seco, caixas de oferta e material de prova para uma gama de seis vinhos.",
    challenge:
      "A adega lançava seis referências ao mesmo tempo e precisava que se lessem como uma família, sem que os vinhos de topo perdessem distinção nos lineares.",
    solution:
      "Definimos um sistema de rótulos com estrutura comum e um código de cor por casta, impressos em papel texturado com relevo a seco e um toque de dourado a quente nas reservas. A caixa de oferta e o material de prova seguiram o mesmo sistema.",
    result:
      "Uma gama reconhecível à distância na prateleira, com custo por rótulo controlado graças à impressão das seis referências na mesma folha.",
    deliverables: [
      "Rótulos e contrarrótulos das 6 referências",
      "Caixa de oferta de 3 garrafas",
      "Cartazes e mesa de prova para feiras",
      "Aventais e copos personalizados",
    ],
    services: ["Impressão offset", "Design gráfico", "Brindes personalizados"],
    palette: ["#6d1f2c", "#c8a145", "#1e1a17"],
    featured: true,
  },
  {
    slug: "grupo-atlantico-fardamento",
    client: "Grupo Atlântico",
    title: "Fardamento para 180 colaboradores em 9 delegações",
    sector: "Construção",
    year: 2025,
    summary:
      "Fardamento completo com bordado, coletes certificados e separação por delegação e por pessoa.",
    challenge:
      "Nove delegações, três funções diferentes e tamanhos individuais — tudo a ter de chegar pronto a vestir no mesmo dia, sem o departamento de recursos humanos passar semanas a separar caixas.",
    solution:
      "Montámos um formulário de recolha de tamanhos por colaborador, produzimos as peças com bordado no peito e serigrafia refletora nas costas, e enviámos caixas rotuladas por delegação com sacos individuais nominais.",
    result:
      "Entrega única, zero trocas na primeira semana e um ficheiro de tamanhos que serve as reposições dos anos seguintes.",
    deliverables: [
      "Polos, sweats e calças de trabalho",
      "Coletes EN ISO 20471 personalizados",
      "Bonés bordados",
      "Embalamento individual nominal",
    ],
    services: ["Têxtil personalizado", "Comunicação visual & sinalética"],
    palette: ["#f47b20", "#1f3a68", "#12161d"],
    featured: true,
  },
  {
    slug: "techsummit-congresso",
    client: "TechSummit",
    title: "Congresso de 1 200 participantes, do crachá ao stand",
    sector: "Eventos",
    year: 2024,
    summary:
      "Crachás com dados variáveis, sinalética completa do recinto e kit de participante entregue em 11 dias.",
    challenge:
      "A lista final de inscritos só fechou onze dias antes do evento, e cada participante precisava de crachá nominal com o nível de acesso correto.",
    solution:
      "Preparámos o layout com antecedência e deixámos a impressão de dados variáveis para o fim: 1 200 crachás únicos, com nome, empresa, cor de acesso e QR code, impressos e separados por ordem alfabética em dois dias.",
    result:
      "Fila de credenciação a andar sem paragens e sinalética instalada na véspera, com o recinto pronto antes do ensaio geral.",
    deliverables: [
      "1 200 crachás com dados variáveis e QR",
      "Lanyards personalizados",
      "Sinalética de recinto e roll-ups",
      "Kit de participante: caderno, caneta e garrafa",
    ],
    services: [
      "Impressão digital",
      "Brindes personalizados",
      "Comunicação visual & sinalética",
    ],
    palette: ["#00aeef", "#7c5cff", "#0d1117"],
    featured: true,
  },
  {
    slug: "padaria-forno-velho",
    client: "Padaria Forno Velho",
    title: "Rebranding de uma padaria com 60 anos",
    sector: "Alimentar",
    year: 2024,
    summary:
      "Novo logótipo, montra, embalagem e fardamento para uma casa que não queria perder a memória do que era.",
    challenge:
      "A terceira geração assumia o negócio e queria modernizar a imagem sem afastar os clientes de sempre, que reconheciam a loja pela tabuleta antiga.",
    solution:
      "Recuperámos a letra da tabuleta original como base do novo logótipo, redesenhada para funcionar em digital. A partir daí saiu a montra em vinil, os sacos de papel, as caixas de bolo e os aventais.",
    result:
      "Uma imagem nova que os clientes antigos continuaram a reconhecer, e um sistema que a loja aplica sozinha em cada novo produto.",
    deliverables: [
      "Logótipo e manual de normas",
      "Decoração de montra e tabuleta exterior",
      "Sacos de papel e caixas personalizadas",
      "Aventais e t-shirts da equipa",
    ],
    services: ["Design gráfico", "Comunicação visual & sinalética", "Impressão digital"],
    palette: ["#c2263c", "#e4dcc9", "#3d2b1f"],
  },
  {
    slug: "clinica-norte-sinaletica",
    client: "Clínica Norte",
    title: "Sinalética de uma clínica em quatro pisos",
    sector: "Saúde",
    year: 2024,
    summary:
      "Sistema de orientação com código de cor por piso, em acrílico e vinil, instalado sem interromper as consultas.",
    challenge:
      "Os doentes perdiam-se entre pisos e especialidades, e o edifício não podia fechar para a instalação.",
    solution:
      "Desenhámos um sistema de orientação com um código de cor por piso e placas em acrílico com troca de nome sem substituir o suporte. A instalação foi feita ao fim do dia, piso a piso, durante duas semanas.",
    result:
      "Redução visível dos pedidos de indicação na receção e placas de gabinete que a clínica troca em minutos quando muda um médico.",
    deliverables: [
      "Diretórios de piso e placas de gabinete",
      "Vinis de porta e sinalética de segurança",
      "Pictogramas e numeração de salas",
      "Manual de aplicação para futuras alterações",
    ],
    services: ["Comunicação visual & sinalética", "Design gráfico"],
    palette: ["#2f7d55", "#00aeef", "#f7f9fb"],
  },
  {
    slug: "frota-logitrans",
    client: "LogiTrans",
    title: "Decoração de uma frota de 24 viaturas",
    sector: "Logística",
    year: 2023,
    summary:
      "Wrapping parcial em dois modelos de viatura, aplicado sem parar a operação mais de um dia por carro.",
    challenge:
      "Frota com dois modelos diferentes, disponibilidade de um dia por viatura e a exigência de remoção sem danos no fim do contrato de leasing.",
    solution:
      "Fizemos simulação prévia sobre a silhueta de cada modelo, cortámos o vinil de fundição à medida antes da chegada de cada carro e aplicámos por turnos, com duas viaturas por dia.",
    result:
      "Frota completa em 12 dias úteis, com garantia de 7 anos do fabricante do vinil e remoção limpa garantida.",
    deliverables: [
      "Simulação 3D por modelo de viatura",
      "Wrapping parcial de 24 viaturas",
      "Numeração individual de frota",
      "Kit de retoque para a oficina",
    ],
    services: ["Decoração de viaturas", "Design gráfico"],
    palette: ["#2b58c4", "#ffd200", "#12161d"],
  },
];

export function getCase(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
