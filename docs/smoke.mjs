import { chromium } from 'playwright';

const file = 'file:///home/user/CorreiaCOR/docs/index.html';
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
page.setDefaultTimeout(6000);
page.setDefaultNavigationTimeout(15000);
await page.route('https://fonts.googleapis.com/**', r => r.abort());
await page.route('https://fonts.gstatic.com/**', r => r.abort());
const errors = [];
page.on('pageerror', e => errors.push('pageerror: ' + e.message));
page.on('console', m => { if (m.type() === 'error') errors.push('console: ' + m.text()); });

const fail = [];
const check = async (label, fn) => {
  try { await fn(); console.log('  ok  ' + label); }
  catch (e) { fail.push(label + ' → ' + e.message); console.log(' FAIL ' + label + ' → ' + e.message); }
};

await page.goto(file, { waitUntil: 'domcontentloaded' });
await page.waitForTimeout(500);

await check('início carrega', async () => {
  const h = await page.locator('h1').first().innerText();
  if (!/comunicação visual/i.test(h)) throw new Error('h1 inesperado: ' + h);
});

for (const [hash, needle] of [
  ['#/quem-somos', 'trinta anos'],
  ['#/servicos', 'ampla gama'],
  ['#/portfolio', 'saiu daqui'],
  ['#/contacto', 'nossos serviços'],
  ['#/brindes', 'ações promocionais'],
]) {
  await check('rota ' + hash, async () => {
    await page.goto(file + hash, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(350);
    const h = await page.locator('h1').first().innerText();
    if (!h.toLowerCase().includes(needle.toLowerCase())) throw new Error('h1: ' + h);
  });
}

await check('catálogo mostra 13 produtos', async () => {
  await page.goto(file + '#/brindes', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(350);
  const n = await page.locator('#grid .prodcard').count();
  if (n !== 13) throw new Error('encontrados ' + n);
});

await check('filtro por categoria', async () => {
  await page.click('[data-cat="textil"]');
  await page.waitForTimeout(200);
  const n = await page.locator('#grid .prodcard').count();
  if (n !== 5) throw new Error('têxtil deu ' + n);
});

await check('procura por texto', async () => {
  await page.click('[data-cat="todos"]');
  await page.fill('#search', 'bordado');
  await page.waitForTimeout(250);
  const n = await page.locator('#grid .prodcard').count();
  if (n < 1) throw new Error('sem resultados');
});

await check('procura sem resultados mostra saída', async () => {
  await page.fill('#search', 'zzzzz');
  await page.waitForTimeout(250);
  const txt = await page.locator('#grid').innerText();
  if (!/Nada encontrado/.test(txt)) throw new Error('sem estado vazio');
  await page.click('[data-act="clear-filters"]');
  await page.waitForTimeout(300);
});

await check('produto abre e configura', async () => {
  await page.goto(file + '#/brindes/t-shirt-algodao', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(400);
  const before = await page.locator('#cfgsum').innerText();
  await page.click('[data-techsel="bordado"]');
  await page.waitForTimeout(200);
  const after = await page.locator('#cfgsum').innerText();
  if (before === after) throw new Error('preço não mudou com a técnica');
  await page.click('[data-color="azul"]');
  await page.click('[data-area="2"]');
  await page.click('[data-tier="4"]');
  await page.waitForTimeout(250);
  const nome = await page.locator('#colorname').innerText();
  if (nome !== 'Azul-marinho') throw new Error('cor: ' + nome);
});

await check('juntar ao pedido conta no cabeçalho', async () => {
  await page.click('[data-act="add"]');
  await page.waitForTimeout(400);
  const b = await page.locator('header .badge').innerText();
  if (b !== '1') throw new Error('contador: ' + b);
});

await check('pedido lista a linha', async () => {
  await page.goto(file + '#/pedido', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(400);
  const t = await page.locator('main').innerText();
  if (!/T-shirt em algodão/.test(t)) throw new Error('linha em falta');
  if (!/Azul-marinho/.test(t)) throw new Error('cor em falta');
});

await check('quantidade sobe e desce', async () => {
  const antes = await page.locator('main').innerText();
  await page.click('[data-inc="0"]');
  await page.waitForTimeout(300);
  const depois = await page.locator('main').innerText();
  if (antes === depois) throw new Error('quantidade não mudou');
});

await check('formulário recusa campos vazios', async () => {
  await page.click('[data-act="submit-pedido"]');
  await page.waitForTimeout(400);
  const errs = await page.locator('#form-pedido .err:not([hidden])').count();
  if (errs < 3) throw new Error('só ' + errs + ' erros mostrados');
});

await check('formulário aceita e confirma', async () => {
  await page.fill('#form-pedido [name="nome"]', 'Filipe Correia');
  await page.fill('#form-pedido [name="email"]', 'filipe@exemplo.pt');
  await page.fill('#form-pedido [name="telefone"]', '912345678');
  await page.check('#form-pedido [name="rgpd"]');
  await page.click('[data-act="submit-pedido"]');
  await page.waitForTimeout(500);
  const h = await page.locator('h1').first().innerText();
  if (!/Pedido registado/.test(h)) throw new Error('h1: ' + h);
  const badge = await page.locator('header .badge').count();
  if (badge !== 0) throw new Error('carrinho não esvaziou');
});

await check('telemóvel a 390 px sem scroll horizontal', async () => {
  const m = await browser.newPage({ viewport: { width: 390, height: 844 } });
  m.setDefaultTimeout(6000);
  m.setDefaultNavigationTimeout(15000);
  await m.route('https://fonts.googleapis.com/**', r => r.abort());
  await m.route('https://fonts.gstatic.com/**', r => r.abort());
  for (const r of ['#/', '#/brindes', '#/brindes/caneca-ceramica', '#/quem-somos', '#/contacto']) {
    await m.goto(file + r, { waitUntil: 'domcontentloaded' });
    await m.waitForTimeout(400);
    const over = await m.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    if (over > 1) throw new Error(r + ' transborda ' + over + 'px');
  }
  const burger = await m.locator('.burger').isVisible();
  if (!burger) throw new Error('menu móvel não aparece');
  await m.click('[data-act="menu"]');
  await m.waitForTimeout(250);
  if (!(await m.locator('#drawer').isVisible())) throw new Error('gaveta não abre');
  await m.close();
});

await browser.close();
console.log('\nerros de consola: ' + (errors.length ? '\n  ' + errors.join('\n  ') : 'nenhum'));
console.log(fail.length ? '\n' + fail.length + ' TESTE(S) A FALHAR' : '\nTodos os testes passaram.');
process.exit(fail.length || errors.length ? 1 : 0);
