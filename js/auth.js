/* ============================================
   CODEHUNTER ACADEMY — AUTH.JS
   Google Sign-In via Firebase + Firestore sync
   ============================================ */

let _auth        = null;
let _db          = null;
let _currentUser = null;
let _firebaseReady = false;

// ── Initialize Firebase ──
function initFirebase() {
  if (!window.FIREBASE_ENABLED) return;
  if (!window.FIREBASE_CONFIG || window.FIREBASE_CONFIG.apiKey === 'YOUR_API_KEY') return;
  if (_firebaseReady) return;

  try {
    if (!firebase.apps.length) {
      firebase.initializeApp(window.FIREBASE_CONFIG);
    }
    _auth = firebase.auth();
    _db   = firebase.firestore();
    _firebaseReady = true;

    _auth.onAuthStateChanged(user => {
      _currentUser = user;
      updateAuthUI(user);
      if (user) loadCloudProgress(user);
    });
  } catch(e) {
    console.warn('Firebase init error:', e.message);
  }
}

// ── Sign In / Out ──
function signInWithGoogle() {
  if (!_firebaseReady || !_auth) {
    showFirebaseSetupModal();
    return;
  }
  const provider = new firebase.auth.GoogleAuthProvider();
  _auth.signInWithPopup(provider).catch(e => {
    console.error('Sign-in error:', e);
    if (e.code === 'auth/popup-blocked') {
      alert('El popup fue bloqueado por el navegador. Permite popups para este sitio.');
    }
  });
}

function signOutUser() {
  if (!_auth) return;
  _auth.signOut();
}

function getCurrentUser() {
  return _currentUser;
}

// ── Cloud Progress Sync ──
async function loadCloudProgress(user) {
  if (!_db) return;
  try {
    const docSnap = await _db.collection('progress').doc(user.uid).get();
    if (docSnap.exists) {
      const cloud = docSnap.data();
      const local = JSON.parse(localStorage.getItem('ch_progress') || '{}');
      // Merge: keep highest score per language
      const merged = { ...local };
      Object.entries(cloud).forEach(([lang, entry]) => {
        if (!merged[lang] || (entry.bestCorrect || 0) > (merged[lang].bestCorrect || 0)) {
          merged[lang] = entry;
        }
      });
      localStorage.setItem('ch_progress', JSON.stringify(merged));
      if (typeof renderCards   === 'function') renderCards();
      if (typeof updateNavbar  === 'function') updateNavbar();
    }
  } catch(e) { console.warn('Cloud load error:', e); }
}

async function saveCloudProgress(langId, entry) {
  if (!_db || !_currentUser) return;
  try {
    const update = {};
    update[langId] = entry;
    await _db.collection('progress').doc(_currentUser.uid).set(update, { merge: true });
  } catch(e) { console.warn('Cloud save error:', e); }
}

// ── UI Update ──
function updateAuthUI(user) {
  const btnSignIn  = document.getElementById('btn-signin');
  const btnSignOut = document.getElementById('btn-signout');
  const userInfo   = document.getElementById('user-info');
  if (!btnSignIn) return;

  if (user) {
    btnSignIn.style.display  = 'none';
    btnSignOut.style.display = 'inline-flex';
    if (userInfo) {
      userInfo.style.display = 'inline-flex';
      const avatar = userInfo.querySelector('.user-avatar');
      const name   = userInfo.querySelector('.user-name');
      if (avatar) avatar.src = user.photoURL || '';
      if (name)   name.textContent = user.displayName ? user.displayName.split(' ')[0] : 'Hunter';
    }
  } else {
    btnSignIn.style.display  = 'inline-flex';
    btnSignOut.style.display = 'none';
    if (userInfo) userInfo.style.display = 'none';
  }
}

// ── Show/hide auth modal ──
function showAuthInfo() {
  const modal = document.getElementById('auth-modal');
  if (modal) {
    modal.classList.toggle('show');
    document.addEventListener('click', function closeOnOutside(e) {
      if (!modal.contains(e.target) && !document.getElementById('btn-signin').contains(e.target)) {
        modal.classList.remove('show');
        document.removeEventListener('click', closeOnOutside);
      }
    }, true);
  }
}

// ── Firebase Setup Info Modal ──
function showFirebaseSetupModal() {
  // Remove existing modal if any
  const existing = document.getElementById('firebase-setup-modal');
  if (existing) { existing.remove(); return; }

  const modal = document.createElement('div');
  modal.id = 'firebase-setup-modal';
  modal.innerHTML = `
    <div class="fsm-backdrop" onclick="document.getElementById('firebase-setup-modal').remove()"></div>
    <div class="fsm-box">
      <div class="fsm-icon">🔥</div>
      <h2 class="fsm-title">Configurar Firebase</h2>
      <p class="fsm-desc">Para guardar tu progreso en la nube necesitas conectar Firebase.</p>
      <ol class="fsm-steps">
        <li>Ve a <a href="https://console.firebase.google.com" target="_blank">console.firebase.google.com</a></li>
        <li>Crea un proyecto → activa <strong>Authentication → Google</strong></li>
        <li>Crea <strong>Firestore Database</strong> (modo producción)</li>
        <li>Ve a <em>Configuración del proyecto → Tu app web</em> y copia la config</li>
        <li>Pega los valores en <code>js/firebase-config.js</code> y cambia <code>FIREBASE_ENABLED = true</code></li>
      </ol>
      <div class="fsm-note">💾 Mientras tanto, tu progreso se guarda localmente en este navegador.</div>
      <button class="fsm-close" onclick="document.getElementById('firebase-setup-modal').remove()">Entendido</button>
    </div>
  `;
  document.body.appendChild(modal);
}

document.addEventListener('DOMContentLoaded', initFirebase);
