

const LEVELS = [
  {
    key: 'facil', label: 'Fácil', lower: 'fácil', color: 'var(--lv-easy)',
    sub: 'Formas e números',
    questions: [
      { img: 'macas.jpg', alt: '3 maçãs de um lado e 2 maçãs do outro',
        q: '3 maçãs + 2 maçãs. Quantas são?',
        options: ['4 maçãs', '5 maçãs', '6 maçãs'], correct: 1,
        ok: '🎉 Isso mesmo! 3 + 2 = 5 maçãs.',
        hint: '💡 Conte junto: 3 + 2 = 5 maçãs.' },

      { img: 'formas.jpg', frame: true, alt: 'Um quadrado, um triângulo e um círculo',
        q: 'Qual dessas formas tem 3 lados?',
        options: ['Quadrado', 'Triângulo', 'Círculo'], correct: 1,
        ok: '🎉 Isso mesmo! O triângulo tem 3 lados.',
        hint: '💡 Conte os lados: o triângulo é a forma com 3 lados.' },

      { img: 'formas.jpg', frame: true, alt: 'Um quadrado, um triângulo e um círculo',
        q: 'Qual forma parece uma bola: círculo, quadrado ou triângulo?',
        options: ['Triângulo', 'Quadrado', 'Círculo'], correct: 2,
        ok: '🎉 Muito bem! A bola tem forma de círculo.',
        hint: '💡 A bola é redonda, sem pontas: é um círculo.' },

      { img: 'estrelas.png', alt: 'Cinco estrelas douradas',
        q: 'Conte os desenhos de estrelas. Quantas estrelas há?',
        options: ['6 estrelas', '4 estrelas', '5 estrelas'], correct: 2,
        ok: '🎉 Isso mesmo! Há 5 estrelas.',
        hint: '💡 Conte uma por uma: 1, 2, 3, 4, 5. São 5 estrelas.' },

      { visual: 'numbers',
        q: 'Qual número vem depois do 7?',
        options: ['6', '8', '9'], correct: 1,
        ok: '🎉 Isso mesmo! Depois do 7 vem o 8.',
        hint: '💡 Conte: 6, 7, 8… Depois do 7 vem o 8.' },

      { img: 'carrinhos.jpg', alt: 'Dois grupos de carrinhos: um com 2 e outro com 6',
        q: 'Qual grupo tem MENOS: 2 carrinhos ou 6 carrinhos?',
        options: ['O grupo com 6 carrinhos', 'O grupo com 2 carrinhos'], correct: 1,
        ok: '🎉 Isso mesmo! 2 carrinhos é menos que 6.',
        hint: '💡 Conte os carrinhos: o grupo com 2 tem menos.' },

      { img: 'bolas.jpg', alt: 'Uma bola grande e uma bola pequena',
        q: 'Qual é o objeto MAIOR: uma bola grande ou uma bola pequena?',
        options: ['Bola pequena', 'Bola grande'], correct: 1,
        ok: '🎉 Isso mesmo! A bola grande é a maior.',
        hint: '💡 Olhe de novo: a bola grande é a maior.' },
    ],
  },

  {
    key: 'medio', label: 'Médio', lower: 'médio', color: 'var(--lv-mid)',
    sub: 'Letras, animais e cores',
    questions: [
      { img: 'letra-s.jpg', alt: 'Letra S grande com um sapo',
        q: 'Qual letra começa a palavra SAPO?',
        options: ['P', 'S', 'O'], correct: 1,
        ok: '🎉 Isso mesmo! SAPO começa com a letra S.',
        hint: '💡 Fale devagar: S-A-PO. SAPO começa com a letra S.' },

      { img: 'cachorro.jpg', alt: 'Um cachorro',
        q: "Qual animal faz 'au-au'?",
        options: ['Gato', 'Cachorro', 'Peixe'], correct: 1,
        ok: '🎉 Isso mesmo! O cachorro faz au-au.',
        hint: '💡 Quem faz au-au é o cachorro.' },

      { img: 'cartoes.jpg', alt: 'Cartões com BOLA, BONECA e SAPO',
        q: 'Qual palavra começa com o mesmo som de BOLA: BONECA ou SAPO?',
        options: ['SAPO', 'BONECA'], correct: 1,
        ok: '🎉 Isso mesmo! BOLA e BONECA começam com BO.',
        hint: '💡 BO-LA e BO-NE-CA começam com o mesmo som: BO.' },

      { img: 'casa.jpg', alt: 'Cartão com a palavra CASA e duas palmas',
        q: 'Quantas partes faladas tem a palavra CA-SA?',
        options: ['1 parte', '2 partes', '3 partes'], correct: 1,
        ok: '🎉 Isso mesmo! CA-SA tem 2 partes.',
        hint: '💡 Bata palmas: CA (palma) SA (palma). São 2 partes.' },

      { img: 'peixe-cachorro.jpg', alt: 'Um cachorrinho em cima de um peixe',
        q: 'Qual animal vive na água: peixe ou cachorro?',
        options: ['Cachorro', 'Peixe'], correct: 1,
        ok: '🎉 Isso mesmo! O peixe vive na água.',
        hint: '💡 O peixe é quem vive na água.' },

      { img: 'leao.jpg', alt: 'Um leão na savana ao pôr do sol',
        q: 'Onde podemos encontrar um leão: na savana ou no fundo do mar?',
        options: ['No fundo do mar', 'Na savana'], correct: 1,
        ok: '🎉 Isso mesmo! O leão vive na savana.',
        hint: '💡 O leão vive na savana, em terra firme.' },

      { img: 'banana.jpg', alt: 'Uma banana',
        q: 'Qual é a cor da banana madura: azul, amarela ou roxa?',
        options: ['Azul', 'Roxa', 'Amarela'], correct: 2,
        ok: '🎉 Isso mesmo! A banana madura é amarela.',
        hint: '💡 Olhe a banana: ela é amarela.' },

      { img: 'maca.jpg', alt: 'Uma maçã vermelha com uma folha verde',
        q: 'Qual objeto é vermelho: a maçã ou a folha?',
        options: ['A folha', 'A maçã'], correct: 1,
        ok: '🎉 Isso mesmo! A maçã é vermelha.',
        hint: '💡 A folha é verde. A maçã é a vermelha.' },
    ],
  },

  {
    key: 'dificil', label: 'Difícil', lower: 'difícil', color: 'var(--lv-hard)',
    sub: 'Observar e descobrir',
    questions: [
      { img: 'fila.jpg', alt: 'Uma fila de crianças',
        q: 'Qual criança está À FRENTE: a que está na frente da fila ou a que está atrás?',
        options: ['A que está atrás', 'A que está na frente da fila'], correct: 1,
        ok: '🎉 Isso mesmo! Quem está na frente da fila está à frente.',
        hint: '💡 À frente é quem vem primeiro na fila.' },

      { img: 'copos.jpg', alt: 'Dois copos, A e B, com níveis diferentes de água',
        q: 'Qual copo tem MAIS água: o copo cheio ou o copo quase vazio?',
        options: ['O copo quase vazio', 'O copo cheio'], correct: 1,
        ok: '🎉 Isso mesmo! O copo cheio tem mais água.',
        hint: '💡 Compare os níveis: o copo cheio tem mais água.' },

      { img: 'gato.jpg', alt: 'Um gato deitado sobre uma poltrona azul',
        q: 'O gato está EM CIMA ou EMBAIXO da cadeira?',
        options: ['Embaixo', 'Em cima'], correct: 1,
        ok: '🎉 Isso mesmo! O gato está em cima da cadeira.',
        hint: '💡 Olhe de novo: o gato está em cima da cadeira.' },

      { img: 'escondido.jpg', alt: 'Uma sala de brinquedos com um carrinho vermelho escondido atrás da cesta',
        q: 'Encontre o objeto que está escondido na imagem.',
        options: ['Um avião azul', 'Um carrinho vermelho', 'Um trem verde'], correct: 1,
        ok: '🎉 Achou! Era o carrinho vermelho.',
        hint: '💡 O carrinho vermelho estava escondido atrás da cesta de brinquedos.' },

      { img: 'gelo.jpg', alt: 'Um cubo de gelo inteiro e outro derretido',
        q: 'O que acontece com o gelo quando fica em um lugar quente?',
        options: ['Ele fica mais duro', 'Ele vira areia', 'Ele derrete'], correct: 2,
        ok: '🎉 Isso mesmo! O gelo derrete no calor.',
        hint: '💡 No calor, o gelo derrete e vira água.' },
    ],
  },
];

/* ============================ estado ============================ */
const player = { nome: '', escola: '', idade: '' };
const st = { level: 0, idx: 0, score: 0, answered: false };

const $ = (id) => document.getElementById(id);

function show(id) {
  document.querySelectorAll('.screen').forEach((s) => s.classList.toggle('active', s.id === id));
  window.scrollTo(0, 0);
}

/* ============================ início ============================ */
$('start-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const fields = [$('f-nome'), $('f-escola'), $('f-idade')];
  let first = null;
  fields.forEach((f) => {
    const bad = !f.value.trim();
    f.classList.toggle('invalid', bad);
    if (bad && !first) first = f;
  });
  if (first) { first.focus(); return; }
  player.nome = $('f-nome').value.trim();
  player.escola = $('f-escola').value.trim();
  player.idade = $('f-idade').value.trim();
  renderLevels();
  show('screen-levels');
});
['f-nome', 'f-escola', 'f-idade'].forEach((id) =>
  $(id).addEventListener('input', (e) => e.target.classList.remove('invalid')));

/* ============================ níveis ============================ */
function renderLevels() {
  const list = $('levels-list');
  list.innerHTML = '';
  LEVELS.forEach((lv, i) => {
    const n = lv.questions.length;
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'level';
    b.innerHTML =
      `<span class="level-badge" style="background:${lv.color}">${i + 1}</span>` +
      `<span><span class="level-name">Nível ${lv.label}</span><br>` +
      `<span class="level-desc">${lv.sub} • ${n} perguntas</span></span>`;
    b.addEventListener('click', () => startLevel(i));
    list.appendChild(b);
  });
}

function startLevel(i) {
  st.level = i; st.idx = 0; st.score = 0;
  renderQuestion();
  show('screen-question');
}

/* ============================ pergunta ============================ */
function renderQuestion() {
  const lv = LEVELS[st.level];
  const qs = lv.questions;
  const q = qs[st.idx];
  st.answered = false;

  $('q-title').textContent = `Nível ${lv.lower} - ${st.idx + 1} de ${qs.length}`;
  $('btn-next').classList.remove('show');

  // barra de progresso
  const prog = $('progress');
  prog.innerHTML = '';
  prog.classList.toggle('many', qs.length > 3);
  const avail = Math.min(window.innerWidth, 560) - 48;
  const w = qs.length <= 3 ? 84 : Math.max(16, Math.min(60, Math.floor((avail - (qs.length - 1) * 10) / qs.length)));
  qs.forEach((_, i) => {
    const p = document.createElement('span');
    p.className = 'pill' + (i <= st.idx ? ' on' : '');
    p.style.width = w + 'px';
    prog.appendChild(p);
  });

  // imagem / visual
  const vis = $('q-visual');
  vis.innerHTML = '';
  if (q.visual === 'numbers') {
    vis.innerHTML = '<div class="frame numbers"><span>5</span><span>6</span><span>7</span><span class="mystery">?</span></div>';
  } else {
    const img = document.createElement('img');
    img.className = 'q-img';
    img.src = 'img/' + q.img;
    img.alt = q.alt || '';
    if (q.frame) {
      const f = document.createElement('div');
      f.className = 'frame';
      f.appendChild(img);
      vis.appendChild(f);
    } else {
      vis.appendChild(img);
    }
  }

  $('q-text').textContent = q.q;

  // opções
  const box = $('q-options');
  box.innerHTML = '';
  q.options.forEach((txt, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'opt';
    b.dataset.i = i;
    b.innerHTML = `<span class="opt-letter">${'ABC'[i]}</span><span class="opt-text"></span>`;
    b.querySelector('.opt-text').textContent = txt;
    b.addEventListener('click', () => answer(i));
    box.appendChild(b);
  });

  const fb = $('q-feedback');
  fb.className = 'feedback';
  fb.textContent = '';
}

function answer(i) {
  if (st.answered) return;
  st.answered = true;
  const q = LEVELS[st.level].questions[st.idx];
  const hit = i === q.correct;
  if (hit) st.score++;

  document.querySelectorAll('.opt').forEach((o) => o.classList.add('locked'));
  document.querySelector(`.opt[data-i="${i}"]`).classList.add(hit ? 'correct' : 'wrong');

  const fb = $('q-feedback');
  fb.textContent = hit ? q.ok : q.hint;
  fb.classList.add('show');
  $('btn-next').classList.add('show');
  $('btn-next').focus({ preventScroll: true });
  fb.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
}

function next() {
  if (!st.answered) return;
  const qs = LEVELS[st.level].questions;
  if (st.idx + 1 < qs.length) { st.idx++; renderQuestion(); window.scrollTo(0, 0); }
  else showResult();
}
$('btn-next').addEventListener('click', next);

// teclado: A/B/C ou 1/2/3 respondem, Enter/seta avançam
document.addEventListener('keydown', (e) => {
  if (!$('screen-question').classList.contains('active')) return;
  const k = e.key.toLowerCase();
  const map = { a: 0, b: 1, c: 2, 1: 0, 2: 1, 3: 2 };
  if (k in map && map[k] < document.querySelectorAll('.opt').length) answer(map[k]);
  else if ((k === 'enter' || k === 'arrowright') && st.answered) { e.preventDefault(); next(); }
});

/* ============================ resultado ============================ */
function starSVG(size, on) {
  const R = size / 2, r = R * 0.5, cx = R, cy = R * 1.06;
  const pts = [];
  for (let k = 0; k < 10; k++) {
    const ang = -Math.PI / 2 + (k * Math.PI) / 5;
    const rad = k % 2 === 0 ? R - 3 : r;
    pts.push((cx + rad * Math.cos(ang)).toFixed(1) + ',' + (cy + rad * Math.sin(ang)).toFixed(1));
  }
  return `<svg class="${on ? '' : 'off'}" width="${size}" height="${size * 1.06}" viewBox="0 0 ${size} ${size * 1.06}">` +
         `<polygon class="star-fill" points="${pts.join(' ')}"/></svg>`;
}

function showResult() {
  const lv = LEVELS[st.level];
  const n = lv.questions.length;
  const last = st.level === LEVELS.length - 1;
  const all = st.score === n;
  const half = st.score >= Math.ceil(n / 2);
  const stars = all ? 3 : half ? 2 : st.score > 0 ? 1 : 0;

  $('stars').innerHTML = [100, 124, 100].map((s, i) => starSVG(s, i < stars)).join('');

  if (all) {
    $('r-title').textContent = 'Muito Bem!';
    $('r-msg').textContent = last ? 'Acertou tudo! Você chegou ao topo da montanha!'
                                  : 'Acertou tudo! Que tal tentar o próximo nível?';
  } else if (half) {
    $('r-title').textContent = 'Bom trabalho!';
    $('r-msg').textContent = 'Você está indo bem! Jogue de novo para ganhar as 3 estrelas.';
  } else {
    $('r-title').textContent = 'Continue tentando!';
    $('r-msg').textContent = 'Vamos jogar de novo? Você vai conseguir!';
  }

  $('r-score').textContent = `${st.score} / ${n}`;
  $('r-info').textContent = last
    ? `Nível ${lv.label} concluído • você chegou ao topo!`
    : `Nível ${lv.label} concluído • próximo: Nível ${LEVELS[st.level + 1].label}`;

  $('btn-next-level').hidden = last;
  show('screen-result');
}

$('btn-next-level').addEventListener('click', () => startLevel(st.level + 1));
$('btn-again').addEventListener('click', () => startLevel(st.level));
$('btn-home').addEventListener('click', () => show('screen-start'));
