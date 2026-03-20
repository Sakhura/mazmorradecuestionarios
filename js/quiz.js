/* ============================================
   CODEHUNTER ACADEMY — QUIZ.JS
   Quiz engine: random selection, scoring, timer, ranks
   ============================================ */

const QUIZ_SIZE = 50;

const RANK_TABLE = [
  { min: 100, rank: 'NAT', label: 'Hunter Nacional',         css: 'rank-nat',
    msg: '¡PERFECCIÓN ABSOLUTA! Has alcanzado el nivel de Hunter Nacional. Eres una leyenda del código.' },
  { min: 90,  rank: 'S',   label: 'Hunter S-Rank',           css: 'rank-s',
    msg: '¡EXCEPCIONAL! Has alcanzado el S-Rank. Eres un cazador de élite. Pocos llegan a este nivel.' },
  { min: 76,  rank: 'A',   label: 'Hunter A-Rank',           css: 'rank-a',
    msg: '¡MUY BIEN! Rango A obtenido. Eres un cazador avanzado con conocimiento sólido.' },
  { min: 61,  rank: 'B',   label: 'Hunter B-Rank',           css: 'rank-b',
    msg: 'Buen trabajo. Rango B obtenido. Sigues creciendo como cazador. ¡Un poco más y subirás de rango!' },
  { min: 46,  rank: 'C',   label: 'Hunter C-Rank',           css: 'rank-c',
    msg: 'Rango C. Tienes una base intermedia. Estudia más y vuelve a intentarlo para subir.' },
  { min: 31,  rank: 'D',   label: 'Hunter D-Rank',           css: 'rank-d',
    msg: 'Rango D. Sigues siendo un cazador en entrenamiento. El conocimiento se forja con práctica.' },
  { min: 0,   rank: 'E',   label: 'Hunter E-Rank',           css: 'rank-e',
    msg: 'Rango E. Todo gran cazador comenzó aquí. No te rindas — el poder viene con el estudio.' },
];

const LANG_META = {
  javascript: { name: 'JavaScript',   icon: '🟡' },
  typescript: { name: 'TypeScript',   icon: '🔷' },
  python:     { name: 'Python',       icon: '🐍' },
  php:        { name: 'PHP',          icon: '🐘' },
  ruby:       { name: 'Ruby',         icon: '💎' },
  go:         { name: 'Go',           icon: '🔵' },
  java:       { name: 'Java',         icon: '☕' },
  r:          { name: 'R',            icon: '📊' },
  sql:        { name: 'SQL',          icon: '🗄' },
  julia:      { name: 'Julia',        icon: '🔴' },
  matlab:     { name: 'MATLAB',       icon: '🟠' },
  scala:      { name: 'Scala',        icon: '🔴' },
  c:          { name: 'C',            icon: '⚙' },
  cpp:        { name: 'C++',          icon: '⚡' },
  csharp:     { name: 'C#',           icon: '🟣' },
  rust:       { name: 'Rust',         icon: '🦀' },
  zig:        { name: 'Zig',          icon: '⚡' },
  lua:        { name: 'Lua',          icon: '🌙' },
  kotlin:     { name: 'Kotlin',       icon: '🎯' },
  swift:      { name: 'Swift',        icon: '🍎' },
  dart:       { name: 'Dart/Flutter', icon: '💙' },
  objc:       { name: 'Objective-C',  icon: '🔲' },
  haskell:    { name: 'Haskell',      icon: 'λ'  },
  elixir:     { name: 'Elixir',       icon: '💜' },
  erlang:     { name: 'Erlang',       icon: '📡' },
  perl:       { name: 'Perl',         icon: '🐪' },
  assembly:   { name: 'Assembly',     icon: '🔩' },
  fortran:    { name: 'Fortran',      icon: '📐' },
  cobol:      { name: 'COBOL',        icon: '🏦' },
  vbnet:      { name: 'VB.NET',       icon: '🪟' },
  bash:       { name: 'Bash/Shell',   icon: '🖥' },
};

// ── State ──
let langId      = '';
let questions   = [];
let session     = [];
let currentIdx  = 0;
let correct     = 0;
let wrong       = 0;
let answered    = false;
let timerSec    = 0;
let timerHandle = null;

// Per-difficulty tracking: { E: {total,correct}, D: {...}, ... }
let diffStats   = {};
// Wrong answer queue for topic recommendations (max 10)
let wrongItems  = [];

// ── Helpers ──
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function fmtTime(s) {
  const m = String(Math.floor(s / 60)).padStart(2, '0');
  const sec = String(s % 60).padStart(2, '0');
  return `${m}:${sec}`;
}

function getRankInfo(correctCount) {
  const pct = (correctCount / QUIZ_SIZE) * 100;
  return RANK_TABLE.find(r => pct >= r.min) || RANK_TABLE[RANK_TABLE.length - 1];
}

// ── Progress ──
function loadProgress() {
  try { return JSON.parse(localStorage.getItem('ch_progress') || '{}'); }
  catch { return {}; }
}

function saveProgress(lId, correctCount, xp) {
  const p = loadProgress();
  const prev = p[lId] || {};
  p[lId] = {
    bestCorrect: Math.max(correctCount, prev.bestCorrect || 0),
    bestTotal:   QUIZ_SIZE,
    xp:          Math.max(xp, prev.xp || 0),
    lastPlayed:  Date.now(),
  };
  localStorage.setItem('ch_progress', JSON.stringify(p));
}

function updateNavbar() {
  const p = loadProgress();
  const totalXp = Object.values(p).reduce((s, e) => s + (e.xp || 0), 0);
  const rankEl = document.getElementById('nav-rank');
  const xpEl   = document.getElementById('nav-score');
  if (xpEl) xpEl.textContent = `XP: ${totalXp}`;
}

// ── Timer ──
function startTimer() {
  timerSec = 0;
  clearInterval(timerHandle);
  timerHandle = setInterval(() => {
    timerSec++;
    const el = document.getElementById('stat-time');
    if (el) el.textContent = fmtTime(timerSec);
  }, 1000);
}

function stopTimer() { clearInterval(timerHandle); }

// ── Render question ──
function renderQuestion() {
  const q = session[currentIdx];
  const total = session.length;

  // Meta
  document.getElementById('q-number').textContent    = `PREGUNTA #${currentIdx + 1}`;
  const diffEl = document.getElementById('q-difficulty');
  diffEl.textContent  = `${q.difficulty || 'E'}-RANK`;
  diffEl.className    = `q-difficulty diff-${q.difficulty || 'E'}`;

  // Text
  document.getElementById('question-text').innerHTML = q.question;

  // Progress
  const pct = Math.round((currentIdx / total) * 100);
  document.getElementById('prog-text').textContent = `Pregunta ${currentIdx + 1} de ${total}`;
  document.getElementById('prog-pct').textContent  = `${pct}%`;
  document.getElementById('progress-bar').style.width = `${pct}%`;

  // Options
  const list = document.getElementById('options-list');
  list.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];
  q.options.forEach((opt, i) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <button class="option-btn" onclick="selectAnswer(${i})" id="opt-${i}">
        <span class="option-letter">${letters[i]}</span>
        <span>${opt}</span>
      </button>
    `;
    list.appendChild(li);
  });

  // Hide explanation & next
  const expBox = document.getElementById('explanation-box');
  expBox.classList.remove('show');
  const nextBtn = document.getElementById('btn-next');
  nextBtn.classList.remove('show');
  if (currentIdx + 1 >= total) nextBtn.textContent = 'Ver Resultados →';
  else nextBtn.textContent = 'Siguiente Pregunta →';

  answered = false;

  // Reset card animation
  const card = document.getElementById('question-card');
  card.style.animation = 'none';
  void card.offsetWidth;
  card.style.animation = '';
}

// ── Select answer ──
function selectAnswer(chosenIdx) {
  if (answered) return;
  answered = true;

  const q = session[currentIdx];
  const diff = q.difficulty || 'E';

  // Init diff bucket
  if (!diffStats[diff]) diffStats[diff] = { total: 0, correct: 0 };
  diffStats[diff].total++;

  // Disable all buttons
  const buttons = document.querySelectorAll('.option-btn');
  buttons.forEach(b => b.disabled = true);

  // Mark correct / wrong
  buttons[q.correct].classList.add('correct-answer');
  if (chosenIdx !== q.correct) {
    buttons[chosenIdx].classList.add('wrong-answer');
    wrong++;
    document.getElementById('stat-wrong').textContent = `✗ ${wrong}`;
    // Record for improvement analysis (max 8 items)
    if (wrongItems.length < 8) {
      wrongItems.push({ diff, text: q.question });
    }
  } else {
    correct++;
    diffStats[diff].correct++;
    document.getElementById('stat-correct').textContent = `✓ ${correct}`;
  }

  // Explanation
  if (q.explanation) {
    document.getElementById('explanation-text').textContent = q.explanation;
    document.getElementById('explanation-box').classList.add('show');
  }

  // Show next button
  document.getElementById('btn-next').classList.add('show');
}

// ── Next question ──
function nextQuestion() {
  currentIdx++;
  if (currentIdx >= session.length) {
    showResults();
  } else {
    renderQuestion();
  }
}

// ── Show results ──
function showResults() {
  stopTimer();

  // Hide quiz card & next
  document.getElementById('question-card').style.display = 'none';
  document.getElementById('btn-next').style.display = 'none';
  document.querySelector('.quiz-progress-wrap').style.display = 'none';

  const rankInfo = getRankInfo(correct);
  const pct      = Math.round((correct / QUIZ_SIZE) * 100);
  const xp       = correct * 20 + (pct >= 90 ? 500 : pct >= 76 ? 200 : 0);

  // Save locally
  const entry = { bestCorrect: correct, bestTotal: QUIZ_SIZE, xp, lastPlayed: Date.now() };
  saveProgress(langId, correct, xp);
  updateNavbar();

  // Save to cloud if logged in
  if (typeof saveCloudProgress === 'function') {
    saveCloudProgress(langId, entry);
  }

  // Render results
  const badge = document.getElementById('results-rank-badge');
  badge.textContent = rankInfo.rank;
  badge.className   = `results-rank-badge ${rankInfo.css}`;

  document.getElementById('results-rank-title').textContent = rankInfo.label;
  document.getElementById('res-score').textContent  = `${correct}/${QUIZ_SIZE}`;
  document.getElementById('res-pct').textContent    = `${pct}%`;
  document.getElementById('res-wrong').textContent  = wrong;
  document.getElementById('res-time').textContent   = fmtTime(timerSec);
  document.getElementById('results-msg').textContent = rankInfo.msg;

  // Update final progress bar
  document.getElementById('prog-text').textContent = `Quiz completado`;
  document.getElementById('prog-pct').textContent  = `${pct}%`;
  document.getElementById('progress-bar').style.width = `${pct}%`;

  // Render improvement analysis
  renderImprovementAnalysis();

  // Show
  const screen = document.getElementById('results-screen');
  screen.classList.add('show');
}

// ── Improvement Analysis ──
function renderImprovementAnalysis() {
  const DIFF_ORDER = ['E', 'D', 'C', 'B', 'A', 'S'];
  const breakdownEl = document.getElementById('diff-breakdown');
  const topicsEl    = document.getElementById('topics-list');
  const topicsSection = document.getElementById('topics-section');
  if (!breakdownEl) return;

  // Difficulty breakdown bars
  breakdownEl.innerHTML = '';
  DIFF_ORDER.forEach(d => {
    const stat = diffStats[d];
    if (!stat || stat.total === 0) return;
    const pct = Math.round((stat.correct / stat.total) * 100);
    const row = document.createElement('div');
    row.className = `diff-row diff-${d}`;
    row.innerHTML = `
      <span class="diff-label">${d}-RANK</span>
      <div class="diff-bar-track">
        <div class="diff-bar-fill" style="width:${pct}%"></div>
      </div>
      <span class="diff-pct">${stat.correct}/${stat.total}</span>
    `;
    breakdownEl.appendChild(row);
  });

  // Topics to improve
  if (!topicsEl) return;
  if (wrongItems.length === 0) {
    topicsSection.innerHTML = `<div class="all-correct-msg">🏆 ¡Perfecto! No tienes temas pendientes en este quiz.</div>`;
    return;
  }

  topicsEl.innerHTML = '';
  wrongItems.forEach(item => {
    // Strip HTML tags from question text and truncate
    const clean = item.text.replace(/<[^>]+>/g, '').trim();
    const short = clean.length > 90 ? clean.slice(0, 90) + '…' : clean;
    const div = document.createElement('div');
    div.className = 'topic-item';
    div.innerHTML = `
      <span class="topic-diff-badge topic-diff-${item.diff}">${item.diff}</span>
      <span>${short}</span>
    `;
    topicsEl.appendChild(div);
  });
}

// ── Retry ──
function retryQuiz() {
  diffStats  = {};
  wrongItems = [];
  window.location.reload();
}

// ── Particles (same as app.js) ──
function initParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  const count = 40;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 3 + 1;
    p.style.cssText = `
      width:${size}px; height:${size}px;
      left:${Math.random()*100}%;
      animation-duration:${Math.random()*15+10}s;
      animation-delay:${Math.random()*10}s;
      --drift:${(Math.random()-0.5)*100}px;
      background:${Math.random()>0.7?'#fbbf24':'#a855f7'};
    `;
    container.appendChild(p);
  }
}

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  updateNavbar();

  // Get lang from URL
  const params = new URLSearchParams(window.location.search);
  langId = params.get('lang') || 'javascript';

  // Set header meta
  const meta = LANG_META[langId] || { name: langId, icon: '💻' };
  document.getElementById('quiz-lang-icon').textContent = meta.icon;
  document.getElementById('quiz-lang-name').textContent = meta.name;
  document.title = `${meta.name} Quiz — CodeHunter Academy`;

  // Load questions from global variable
  const varName = 'questions_' + langId;
  const bank = window[varName] || [];

  setTimeout(() => {
    document.getElementById('loading-screen').style.display = 'none';

    if (bank.length === 0) {
      document.getElementById('question-text').innerHTML =
        `⚠ No se encontró el banco de preguntas para <strong>${meta.name}</strong>.<br>
         Vuelve al inicio y selecciona otra mazmorra.`;
      return;
    }

    // Shuffle and pick QUIZ_SIZE
    questions = bank;
    session = shuffle(questions).slice(0, Math.min(QUIZ_SIZE, questions.length));

    startTimer();
    renderQuestion();
  }, 800);
});
