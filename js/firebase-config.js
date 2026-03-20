/* ============================================
   FIREBASE CONFIG — CodeHunter Academy
   ============================================
   Para habilitar el login con Google:
   1. Ve a https://console.firebase.google.com
   2. Crea un proyecto nuevo
   3. En Authentication → Sign-in method → activa Google
   4. En Firestore Database → crea base de datos (modo producción)
   5. En Reglas de Firestore pega esto:
      rules_version = '2';
      service cloud.firestore {
        match /databases/{database}/documents {
          match /progress/{userId} {
            allow read, write: if request.auth != null && request.auth.uid == userId;
          }
        }
      }
   6. En Configuración del proyecto → Tu aplicación web → copia la config aquí
   ============================================ */

window.FIREBASE_CONFIG = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT.firebaseapp.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID"
};

// Cambia a true después de configurar los valores de arriba
window.FIREBASE_ENABLED = false;
