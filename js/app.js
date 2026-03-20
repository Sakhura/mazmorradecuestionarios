/* ============================================
   CODEHUNTER ACADEMY — APP.JS
   Landing page logic: render cards, particles, progress
   ============================================ */

const LANGUAGES = [
  // ── Web & Cloud ──
  { id:'javascript', name:'JavaScript', icon:'🟡', category:'web',
    desc:'El lenguaje del navegador y Node.js' },
  { id:'typescript', name:'TypeScript', icon:'🔷', category:'web',
    desc:'JavaScript con tipado estático' },
  { id:'python',     name:'Python',     icon:'🐍', category:'web',
    desc:'Versátil: web, IA, scripts' },
  { id:'php',        name:'PHP',        icon:'🐘', category:'web',
    desc:'El lenguaje del backend web' },
  { id:'ruby',       name:'Ruby',       icon:'💎', category:'web',
    desc:'Elegancia y Rails' },
  { id:'go',         name:'Go',         icon:'🔵', category:'web',
    desc:'Concurrencia y rendimiento' },
  { id:'java',       name:'Java',       icon:'☕', category:'web',
    desc:'Plataforma empresarial' },

  // ── Data & AI ──
  { id:'python',     name:'Python (IA)', icon:'🤖', category:'data',
    desc:'NumPy, Pandas, TensorFlow' },
  { id:'r',          name:'R',           icon:'📊', category:'data',
    desc:'Estadística y visualización' },
  { id:'sql',        name:'SQL',         icon:'🗄', category:'data',
    desc:'Lenguaje de consulta de bases de datos' },
  { id:'julia',      name:'Julia',       icon:'🔴', category:'data',
    desc:'Computación científica de alto rendimiento' },
  { id:'matlab',     name:'MATLAB',      icon:'🟠', category:'data',
    desc:'Matrices y cálculo numérico' },
  { id:'scala',      name:'Scala',       icon:'🔴', category:'data',
    desc:'JVM + funcional + Spark' },

  // ── Systems & Games ──
  { id:'c',      name:'C',      icon:'⚙', category:'systems',
    desc:'El lenguaje de los sistemas operativos' },
  { id:'cpp',    name:'C++',    icon:'⚡', category:'systems',
    desc:'Rendimiento máximo y OOP' },
  { id:'csharp', name:'C#',     icon:'🟣', category:'systems',
    desc:'.NET, Unity y videojuegos' },
  { id:'rust',   name:'Rust',   icon:'🦀', category:'systems',
    desc:'Seguridad de memoria sin GC' },
  { id:'zig',    name:'Zig',    icon:'⚡', category:'systems',
    desc:'Alternativa moderna a C' },
  { id:'lua',    name:'Lua',    icon:'🌙', category:'systems',
    desc:'Scripting en videojuegos' },

  // ── Mobile ──
  { id:'kotlin',  name:'Kotlin',      icon:'🎯', category:'mobile',
    desc:'Android moderno' },
  { id:'swift',   name:'Swift',       icon:'🍎', category:'mobile',
    desc:'iOS y macOS' },
  { id:'dart',    name:'Dart/Flutter',icon:'💙', category:'mobile',
    desc:'UI multiplataforma' },
  { id:'objc',    name:'Objective-C', icon:'🔲', category:'mobile',
    desc:'El predecesor de Swift' },

  // ── Other ──
  { id:'haskell',  name:'Haskell',     icon:'λ',  category:'other',
    desc:'Puramente funcional' },
  { id:'elixir',   name:'Elixir',      icon:'💜', category:'other',
    desc:'Concurrencia en la BEAM VM' },
  { id:'erlang',   name:'Erlang',      icon:'📡', category:'other',
    desc:'Sistemas distribuidos tolerantes a fallos' },
  { id:'perl',     name:'Perl',        icon:'🐪', category:'other',
    desc:'Scripting y procesamiento de texto' },
  { id:'assembly', name:'Assembly',    icon:'🔩', category:'other',
    desc:'Bajo nivel — lenguaje ensamblador' },
  { id:'fortran',  name:'Fortran',     icon:'📐', category:'other',
    desc:'Cálculo científico clásico' },
  { id:'cobol',    name:'COBOL',       icon:'🏦', category:'other',
    desc:'Sistemas bancarios legacy' },
  { id:'vbnet',    name:'VB.NET',      icon:'🪟', category:'other',
    desc:'Plataforma Windows .NET' },
  { id:'bash',     name:'Bash/Shell',  icon:'🖥', category:'other',
    desc:'Administración de sistemas Unix' },
];

const CATEGORY_GRIDS = {
  web:     'grid-web',
  data:    'grid-data',
  systems: 'grid-systems',
  mobile:  'grid-mobile',
  other:   'grid-other',
};

// ── Progress store (localStorage) ──
function getProgress() {
  try { return JSON.parse(localStorage.getItem('ch_progress') || '{}'); }
  catch { return {}; }
}

function getRankForScore(correct, total) {
  const pct = (correct / total) * 100;
  if (pct === 100)    return { rank: 'NAT', label: 'Hunter Nacional',  css: 'rank-nat' };
  if (pct >= 90)      return { rank: 'S',   label: 'Hunter S-Rank',    css: 'rank-s'   };
  if (pct >= 76)      return { rank: 'A',   label: 'Hunter A-Rank',    css: 'rank-a'   };
  if (pct >= 61)      return { rank: 'B',   label: 'Hunter B-Rank',    css: 'rank-b'   };
  if (pct >= 46)      return { rank: 'C',   label: 'Hunter C-Rank',    css: 'rank-c'   };
  if (pct >= 31)      return { rank: 'D',   label: 'Hunter D-Rank',    css: 'rank-d'   };
  return               { rank: 'E',   label: 'Hunter E-Rank',    css: 'rank-e'   };
}

function getTotalXP() {
  const p = getProgress();
  return Object.values(p).reduce((sum, e) => sum + (e.xp || 0), 0);
}

function getOverallRank() {
  const xp = getTotalXP();
  if (xp >= 5000) return { rank: 'S', css: 'rank-s' };
  if (xp >= 3000) return { rank: 'A', css: 'rank-a' };
  if (xp >= 1500) return { rank: 'B', css: 'rank-b' };
  if (xp >= 600)  return { rank: 'C', css: 'rank-c' };
  if (xp >= 200)  return { rank: 'D', css: 'rank-d' };
  return { rank: 'E', css: 'rank-e' };
}

// ── Render cards ──
function renderCards() {
  const progress = getProgress();
  // Deduplicate by id (python appears twice in LANGUAGES)
  const seen = new Set();
  const unique = LANGUAGES.filter(l => {
    const key = l.category + ':' + l.id;
    if (seen.has(key)) return false;
    seen.add(key); return true;
  });

  unique.forEach(lang => {
    const grid = document.getElementById(CATEGORY_GRIDS[lang.category]);
    if (!grid) return;

    const entry  = progress[lang.id] || {};
    const bestCorrect = entry.bestCorrect || 0;
    const bestTotal   = entry.bestTotal   || 50;
    const hasPlayed   = entry.bestCorrect !== undefined;

    let rankHtml = '';
    if (hasPlayed) {
      const r = getRankForScore(bestCorrect, bestTotal);
      rankHtml = `<span class="lang-best-rank ${r.css}">${r.rank}</span>`;
    } else {
      rankHtml = `<span class="lang-best-rank rank-none">Pendiente</span>`;
    }

    // Question count (from window variable if loaded)
    const varName = 'questions_' + lang.id;
    const qBank = window[varName] || [];
    const qCount = qBank.length;

    const card = document.createElement('div');
    card.className = 'lang-card';
    card.innerHTML = `
      <div class="card-glow"></div>
      <div class="lang-icon-wrap">${lang.icon}</div>
      <span class="lang-name">${lang.name}</span>
      <span class="lang-q-count">${qCount > 0 ? qCount + ' preguntas' : 'Banco disponible'}</span>
      ${rankHtml}
    `;
    card.addEventListener('click', () => startQuiz(lang.id));
    grid.appendChild(card);
  });
}

function startQuiz(langId) {
  window.location.href = `quiz.html?lang=${langId}`;
}

// ── Update navbar ──
function updateNavbar() {
  const xp = getTotalXP();
  const r  = getOverallRank();
  const rankEl = document.getElementById('nav-rank');
  const xpEl   = document.getElementById('nav-score');
  if (rankEl) {
    rankEl.textContent = `Hunter: ${r.rank}-Rank`;
    rankEl.className = `hunter-rank-badge ${r.css}`;
  }
  if (xpEl) xpEl.textContent = `XP: ${xp}`;
}

// ── Particles ──
function initParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  const count = window.innerWidth < 768 ? 30 : 60;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 3 + 1;
    p.style.cssText = `
      width: ${size}px; height: ${size}px;
      left: ${Math.random() * 100}%;
      animation-duration: ${Math.random() * 15 + 10}s;
      animation-delay: ${Math.random() * 10}s;
      --drift: ${(Math.random() - 0.5) * 100}px;
      opacity: ${Math.random() * 0.6 + 0.2};
      background: ${Math.random() > 0.7 ? '#fbbf24' : '#a855f7'};
    `;
    container.appendChild(p);
  }
}

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  renderCards();
  updateNavbar();
});
