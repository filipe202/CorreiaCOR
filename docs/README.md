# Site da CorreiaCOR

A pasta chama-se `docs/` porque é a única, além da raiz, que o GitHub Pages
aceita servir. Assim o site publica-se sem mover nada: em Settings → Pages,
escolher "Deploy from a branch", este ramo, e a pasta `/docs`.

`index.html` é o site inteiro num ficheiro: navegação, catálogo de brindes,
configurador, pedido de orçamento e formulários. Não precisa de servidor nem de
build — abre-se no browser e aloja-se em qualquer lado, bastando copiar o
ficheiro.

## Onde estão as coisas

Dentro do `index.html`, por ordem:

1. **Estilos** — cores, tipografia e componentes. As cores de marca estão nas
   variáveis CSS no topo.
2. **Dados** — `CO` (contactos), `WHEEL` (as doze cores do logótipo),
   `SERVICES`, `COMMITMENTS`, `SHAPES`, `AREAS_BY_SHAPE`, `TECHNIQUES`,
   `PALETTE`, `PRODUCTS`.
3. **Utilitários** — desenho da marca e dos produtos, estado do pedido.
4. **Moldura** — cabeçalho, rodapé, menu móvel.
5. **Páginas** — uma função por página.
6. **Encaminhamento** — por `#hash`, e os eventos de clique.

## O que é real e o que é exemplo

Textos institucionais, serviços, morada, telefone, email e horário vêm de
correiacor.pt. O catálogo de brindes e os preços são inventados para demonstrar
a encomenda: o aviso amarelo no topo do site diz isso a quem visita.

O portfolio está desenhado mas vazio, à espera de trabalhos reais.

## Testes

    npm run test:site

Abre o site num Chromium e percorre as rotas, os filtros, a procura, o
configurador, o carrinho, a validação do formulário e o comportamento a 390 px.
