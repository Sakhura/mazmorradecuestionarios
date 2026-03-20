<div align="center">

# ⚔ CodeHunter Academy
### Portal Educativo de Cuestionarios sobre Lenguajes de Programación

![Solo Leveling Theme](https://img.shields.io/badge/Tema-Solo%20Leveling-7b2fff?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0xMiAyTDIgN2wxMCA1IDEwLTV6Ii8+PC9zdmc+)
![Languages](https://img.shields.io/badge/Lenguajes-31-gold?style=for-the-badge)
![Questions](https://img.shields.io/badge/Preguntas-1768%2B-22c55e?style=for-the-badge)
![Made with Claude Code](https://img.shields.io/badge/Hecho%20con-Claude%20Code-a855f7?style=for-the-badge&logo=anthropic)

</div>

---

## 📜 Aviso Educativo

> **Este proyecto fue creado íntegramente con fines educativos.**
>
> Todo el contenido —preguntas, retos y materiales— está diseñado para fortalecer el conocimiento en lenguajes de programación. Los rangos, títulos y sistema de gamificación son parte de una experiencia de aprendizaje inspirada en la novela gráfica *Solo Leveling*.
>
> **Ningún cazador nace siendo S-Rank. El conocimiento es tu poder. 🗡**

---

## 🤖 Créditos de Creación — Claude Code

Este portal fue diseñado, arquitectado y programado **íntegramente por [Claude Code](https://claude.ai/code)**, el agente de codificación autónomo de Anthropic, bajo la dirección de **Sabina Romero**.

Claude Code se encargó de:

| Tarea | Descripción |
|-------|-------------|
| 🏗 **Arquitectura** | Diseño del sistema de archivos, flujo de datos entre páginas y estrategia de almacenamiento local |
| 🎨 **Diseño UI/UX** | Tema visual completo estilo *Solo Leveling* con CSS custom properties, animaciones y efectos de partículas |
| ⚙️ **Motor de Quiz** | Engine completo con shuffle Fisher-Yates, temporizador, feedback por color y pantalla de resultados |
| 📊 **Sistema de Rangos** | Tabla de progresión E → D → C → B → A → S → NAT con XP acumulado |
| 🗃 **Banco de Preguntas** | Redacción de **1,768+ preguntas en español** distribuidas en 31 lenguajes, con explicaciones y niveles de dificultad |
| 🔐 **Autenticación** | Integración con Google Sign-In via Firebase Auth + sincronización de progreso en Firestore |
| 📈 **Análisis de Rendimiento** | Sistema post-quiz que muestra breakdown por dificultad y temas específicos a reforzar |
| 💾 **Persistencia** | LocalStorage para progreso offline + Firestore para sincronización en la nube |

> *"Este proyecto demuestra que Claude Code puede concebir, diseñar e implementar una aplicación web completa —desde la arquitectura hasta el último pixel— de forma autónoma."*

---

## 🗺 Descripción del Proyecto

**CodeHunter Academy** es un portal web estático de cuestionarios educativos con una estética gamificada inspirada en *Solo Leveling*. Los estudiantes avanzan de rango respondiendo preguntas sobre 31 lenguajes de programación.

### ¿Cómo funciona?

1. **Elige una Mazmorra** — cada lenguaje de programación es una mazmorra
2. **Responde 50 preguntas** — seleccionadas aleatoriamente de un banco de hasta 200
3. **Obtén tu Rango** — basado en el porcentaje de respuestas correctas
4. **Analiza tu rendimiento** — ve exactamente en qué dificultades y temas mejorar
5. **Sube de nivel** — domina todos los lenguajes para alcanzar el S-Rank

### Sistema de Rangos

| Rango | Aciertos | Color |
|-------|----------|-------|
| **E-Rank** | 0 – 30% | ⬜ Gris |
| **D-Rank** | 31 – 45% | 🟢 Verde |
| **C-Rank** | 46 – 60% | 🔵 Azul |
| **B-Rank** | 61 – 75% | 🟣 Púrpura |
| **A-Rank** | 76 – 89% | 🟡 Dorado |
| **S-Rank** | 90 – 99% | 🔴 Rojo |
| **NAT** | 100% | 🩵 Cian |

---

## 🌐 Lenguajes Disponibles (31)

### 🌐 Desarrollo Web & Cloud
`JavaScript` · `TypeScript` · `Python` · `PHP` · `Ruby` · `Go` · `Java`

### 🤖 Datos, Ciencia e IA
`Python (IA)` · `R` · `SQL` · `Julia` · `MATLAB` · `Scala`

### ⚙️ Sistemas & Videojuegos
`C` · `C++` · `C#` · `Rust` · `Zig` · `Lua`

### 📱 Desarrollo Móvil
`Kotlin` · `Swift` · `Dart` · `Objective-C`

### 🧩 Otros Lenguajes
`Haskell` · `Elixir` · `Erlang` · `Perl` · `Assembly` · `Fortran` · `COBOL` · `VB.NET` · `Bash`

---

## 🏗 Estructura del Proyecto

```
CodeHunter-Academy/
│
├── index.html              # Landing page — selección de mazmorras
├── quiz.html               # Interfaz del cuestionario
│
├── css/
│   └── style.css           # Tema Solo Leveling completo (800+ líneas)
│
├── js/
│   ├── app.js              # Lógica principal, renderizado de tarjetas, XP global
│   ├── quiz.js             # Motor del quiz: preguntas, timer, resultados, análisis
│   ├── auth.js             # Google Sign-In + sincronización Firebase
│   ├── firebase-config.js  # Configuración Firebase (editar para activar)
│   │
│   └── questions/          # 31 bancos de preguntas
│       ├── javascript.js   # 200 preguntas
│       ├── python.js       # 90 preguntas
│       ├── java.js         # 196 preguntas
│       ├── typescript.js   # 163 preguntas
│       ├── sql.js          # 159 preguntas
│       ├── rust.js         # 200 preguntas
│       └── ...             # 25 archivos más
│
└── README.md
```

---

## 🚀 Instalación y Uso

### Uso inmediato (sin backend)

El portal es completamente estático. Basta con abrir `index.html` en un navegador o servir los archivos con cualquier servidor HTTP:

```bash
# Con Node.js
npx serve .

# Con Python
python -m http.server 3000

# Con VS Code
# Instala la extensión "Live Server" y abre index.html
```

### Habilitar Google Sign-In (opcional)

Para activar el login con Google y la sincronización en la nube:

1. Crea un proyecto en [Firebase Console](https://console.firebase.google.com)
2. Activa **Authentication → Google**
3. Activa **Firestore Database**
4. Copia la configuración del proyecto en `js/firebase-config.js`
5. Cambia `FIREBASE_ENABLED = true`

**Reglas de Firestore recomendadas:**
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /progress/{userId} {
      allow read, write: if request.auth != null
                         && request.auth.uid == userId;
    }
  }
}
```

---

## 🛠 Tecnologías Utilizadas

| Tecnología | Uso |
|------------|-----|
| **HTML5** | Estructura semántica de ambas páginas |
| **CSS3** | Animaciones, gradientes, variables CSS, Grid & Flexbox |
| **JavaScript (Vanilla)** | Motor de quiz, LocalStorage, DOM, shuffling |
| **Google Fonts** | Orbitron · Rajdhani · Inter |
| **Firebase Auth** | Autenticación con Google (opcional) |
| **Cloud Firestore** | Persistencia de progreso en la nube (opcional) |

> Sin frameworks. Sin build tools. Sin dependencias npm. 100% estático.

---

## ✨ Características

- 🎮 **Gamificación completa** — Sistema de rangos, XP y progresión
- 🌙 **Tema oscuro Solo Leveling** — Paleta púrpura/dorada, efectos de partículas
- 🔀 **Preguntas aleatorias** — Shuffle Fisher-Yates, cada sesión es única
- 📊 **Análisis post-quiz** — Breakdown por dificultad (E→S) y lista de temas a reforzar
- 💾 **Progreso persistente** — LocalStorage offline + Firestore en la nube
- 🔐 **Login con Google** — Sincronización de avances entre dispositivos
- 📱 **Responsive** — Adaptado para móvil, tablet y escritorio
- 🚫 **Sin servidor requerido** — Abre el HTML directamente

---

## 👩‍💻 Autoría

<div align="center">

**Dirigido por**

### Sabina Romero

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/sabinaromero)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/sabinaromero)

---

**Desarrollado íntegramente por**

### 🤖 Claude Code — Anthropic

*Agente de codificación autónomo de última generación*

[![Claude Code](https://img.shields.io/badge/Claude%20Code-Anthropic-a855f7?style=for-the-badge)](https://claude.ai/code)

</div>

---

<div align="center">

*"Este portal fue concebido, diseñado y construido de principio a fin por Claude Code — desde la arquitectura del sistema hasta la última pregunta del banco. 1,768+ preguntas en español, 31 lenguajes, un tema visual completo y lógica de autenticación, todo generado de forma autónoma."*

**⚔ CodeHunter Academy · Proyecto Educativo · 2025 ⚔**

</div>
