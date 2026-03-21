window.questions_dart = [
  {
    question: "¿Qué es Dart y para qué se usa principalmente?",
    options: [
      "Un lenguaje de scripts interpretado para automatizar tareas del sistema operativo",
      "Un lenguaje de programación de sistemas con gestión manual de memoria como C o Rust",
      "Un lenguaje diseñado exclusivamente para aplicaciones web del lado del cliente",
      "Lenguaje de Google, tipado estático, compilable a JS/ARM/x64; base de Flutter para desarrollo multiplataforma"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "Dart es el lenguaje de Flutter. Puede compilar a JavaScript (web), ARM (móvil/desktop nativo), o ejecutarse en la DartVM."
  },
  {
    question: "¿Qué es Flutter?",
    options: [
      "Un framework web de Dart que compila a HTML y CSS para el navegador exclusivamente",
      "Un framework de JavaScript mantenido por Google para construir aplicaciones multiplataforma",
      "SDK de UI multiplataforma de Google que usa Dart; compila nativamente a iOS, Android, Web, Desktop desde un código base",
      "Un tipo de SDK de Dart que solo añade componentes de interfaz de usuario para Android"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "Flutter usa su propio motor de renderizado (Skia/Impeller) con widgets propios, sin usar componentes nativos del OS. Hot reload para desarrollo."
  },
  {
    question: "¿Cómo se declara una variable en Dart?",
    options: [
      "$x = 5 usando la sintaxis de interpolación de strings para asignar valores a variables",
      "El modificador final es obligatorio en todas las declaraciones de variables en Dart",
      "var x = 5; o int x = 5;",
      "let x = 5 usando la misma sintaxis que JavaScript moderno con ES6"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "var con inferencia o tipo explícito. final para valores que no se reasignan. const para constantes en tiempo de compilación."
  },
  {
    question: "¿Qué diferencia hay entre <code>final</code> y <code>const</code>?",
    options: [
      "final: valor asignado en runtime, no reasignable; const: constante de tiempo de compilación, deeply immutable",
      "Son equivalentes en todos los aspectos y el compilador los trata de la misma manera",
      "La única diferencia es que const genera código más rápido en el compilador de Dart",
      "final solo puede usarse con tipos primitivos como int y double, no con objetos complejos"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "final DateTime now = DateTime.now() (runtime). const pi = 3.14159 (compile-time). const List<int> = const [1,2,3] es deeply immutable."
  },
  {
    question: "¿Qué son los Widgets en Flutter?",
    options: [
      "Solo los componentes visuales que el usuario puede ver en la pantalla de la aplicación",
      "Los equivalentes a los componentes de React con el mismo ciclo de vida y mecanismo de estado",
      "Bloques de construcción de UI en Flutter; todo es un Widget: texto, botones, layouts, animaciones, gestos",
      "Componentes web estándar que Flutter usa para renderizar la interfaz en aplicaciones web"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "En Flutter 'everything is a widget'. StatelessWidget: UI inmutable. StatefulWidget: UI con estado mutable."
  },
  {
    question: "¿Qué es un StatefulWidget vs StatelessWidget?",
    options: [
      "StatelessWidget: UI sin estado local (rebuild); StatefulWidget: tiene State que puede cambiar y triggear rebuild",
      "StatefulWidget produce aplicaciones más rápidas porque evita reconstruir el widget completo",
      "Son intercambiables y se puede usar cualquiera de los dos para cualquier tipo de componente",
      "StatelessWidget está en desuso y se recomienda usar siempre StatefulWidget en Flutter moderno"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "StatelessWidget: inmutable, el padre lo controla. StatefulWidget tiene createState() que retorna un State object donde se llama setState() para actualizar UI."
  },
  {
    question: "¿Qué hace <code>setState()</code> en Flutter?",
    options: [
      "Solo puede llamarse desde el hilo principal y lanza una excepción si se invoca desde otro hilo",
      "Reinicia la aplicación al estado inicial eliminando todo el estado acumulado durante la sesión",
      "Establece el estado global del dispositivo afectando a todas las aplicaciones en ejecución",
      "Notifica al framework que el estado cambió y debe redibujar el widget: setState(() { counter++; })"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "setState() marca el State como dirty y llama build() para reconstruir el árbol de widgets afectado."
  },
  {
    question: "¿Qué es el null safety en Dart?",
    options: [
      "Una convención de nombres que indica qué variables pueden ser nulas con un sufijo especial",
      "El equivalente al tipo Optional de Java que envuelve valores que podrían estar ausentes",
      "Una característica que puede activarse o desactivarse en cada archivo Dart de forma independiente",
      "Sistema de tipos que distingue nullable (T?) y non-nullable (T); el compilador previene null dereference en tiempo de compilación"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "Dart 2.12+ tiene sound null safety. String es non-nullable. String? es nullable. El operador ! fuerza non-null. late para inicialización diferida."
  },
  {
    question: "¿Qué es <code>late</code> en Dart?",
    options: [
      "Una palabra clave que retrasa el inicio del programa hasta que todos los recursos estén disponibles",
      "Una anotación exclusiva de variables final que deben inicializarse en el constructor de la clase",
      "Un tipo de Future que representa una operación cuyo resultado llegará en el futuro cercano",
      "Declara variable non-nullable que se inicializará antes de su primer uso; también para inicialización lazy"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "late String nombre; nombre = 'Ana'; // antes de usar. late final x = compute(); // lazy: compute() solo se llama cuando se accede a x."
  },
  {
    question: "¿Qué es async/await en Dart?",
    options: [
      "Un tipo de coroutine que divide el código en fibras de ejecución cooperativa gestionadas por la VM",
      "Manejo de código asíncrono de forma síncrona: Future<T> + async/await; base de las operaciones async en Flutter",
      "Una característica exclusiva para operaciones de lectura y escritura de archivos en el sistema",
      "Una sintaxis idéntica a JavaScript sin ninguna diferencia semántica ni de comportamiento"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "Future<String> fetch() async { final resp = await http.get(url); return resp.body; }. await puede usarse en funciones async."
  },
  {
    question: "¿Qué es un Future<T> en Dart?",
    options: [
      "Un tipo reservado para representar errores que ocurrirán en operaciones futuras del programa",
      "Un tipo de promesa que se resuelve inmediatamente de forma síncrona con el valor calculado",
      "Representa un valor que estará disponible en el futuro; similar a Promise de JavaScript",
      "Una variante especializada de Stream que solo puede emitir un único valor o un error"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "Future<int> computar() async { await Future.delayed(Duration(seconds:1)); return 42; }. then(), catchError(), whenComplete() para encadenar."
  },
  {
    question: "¿Qué es un Stream en Dart?",
    options: [
      "Una API para reproducir y controlar streams de video en aplicaciones Flutter multimedia",
      "Un tipo de Future que puede completarse varias veces con valores distintos de forma síncrona",
      "Un mecanismo exclusivo para comunicación en tiempo real a través de conexiones WebSocket",
      "Secuencia de valores asíncronos (como AsyncIterator); puede ser single-subscription o broadcast"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "Stream.fromIterable([1,2,3]).map((x) => x*2). await for (var val in stream) { }. StreamController para crear streams propios."
  },
  {
    question: "¿Qué es el widget tree en Flutter?",
    options: [
      "La jerarquía de widgets que componen la UI; Flutter reconstruye eficientemente solo las partes que cambian",
      "El árbol de widgets que solo incluye componentes de layout y no widgets de contenido",
      "La estructura de directorios del proyecto Flutter organizada según las convenciones recomendadas",
      "El árbol de archivos que Dart genera internamente para representar la interfaz de usuario"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "Flutter tiene 3 trees: Widget tree (inmutable), Element tree (persistent), RenderObject tree (layout/paint). El rebuild es eficiente gracias a esta separación."
  },
  {
    question: "¿Qué hace <code>BuildContext</code>?",
    options: [
      "El contexto que representa el estado del sistema operativo durante la construcción del widget",
      "Una referencia al tema visual actual de la aplicación para aplicar colores y tipografías",
      "Un objeto que representa el estado interno del widget y permite llamar a setState en él",
      "Handle al lugar en el widget tree; permite acceder a ancestros (Theme, MediaQuery) y navegar"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "Theme.of(context), Navigator.of(context), MediaQuery.of(context). El context debe usarse sincronamente durante el build."
  },
  {
    question: "¿Qué es Provider en Flutter?",
    options: [
      "Una biblioteca para realizar peticiones HTTP y gestionar las respuestas de APIs externas",
      "Solución de gestión de estado que expone objetos a descendientes del árbol de widgets sin prop drilling",
      "Un proveedor de servicios de internet que gestiona la conectividad de la aplicación Flutter",
      "Un tipo de InheritedWidget que solo puede usarse con objetos que implementan ChangeNotifier"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "ChangeNotifierProvider(create: (_) => Counter(), child: MyApp()). Consumer<Counter>(builder: (ctx, counter, _) => Text('${counter.value}')). Bajo nivel es InheritedWidget."
  },
  {
    question: "¿Qué es Riverpod?",
    options: [
      "Un framework web de Dart para construir aplicaciones del lado del servidor con alta concurrencia",
      "Una librería de animaciones para Flutter que simplifica transiciones complejas de interfaz de usuario",
      "Una variante del patrón BLoC que usa streams para separar la lógica de negocio de la UI",
      "Solución de estado y DI para Flutter/Dart; mejora sobre Provider: compile-safe, testable, sin dependencia de context"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "@riverpod counterValue(ref) => 0. ref.watch(counterProvider) en widgets. Providers son globales y lazy; no necesitan BuildContext para acceder."
  },
  {
    question: "¿Qué es el patrón BLoC en Flutter?",
    options: [
      "Business Logic Component: separa UI de lógica de negocio usando streams; eventos → BLoC → estados",
      "Un framework completo de Dart para construir aplicaciones empresariales con arquitectura en capas",
      "Un tipo de servicio singleton que gestiona la persistencia de datos en la base de datos local",
      "Un patrón de acceso a datos que abstrae las operaciones de lectura y escritura en el repositorio"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "BLoC: UI emite Events, BLoC los transforma en States usando Streams. flutter_bloc provee BlocBuilder, BlocListener, BlocProvider."
  },
  {
    question: "¿Qué hace <code>Navigator.push()</code>?",
    options: [
      "Muestra un diálogo modal encima de la pantalla actual sin añadirlo al historial de navegación",
      "Navega a una nueva pantalla añadiéndola al stack de navegación: Navigator.push(context, MaterialPageRoute(builder: (_) => NewPage()))",
      "Actualiza la URL del navegador web cuando Flutter se compila para aplicaciones web",
      "Muestra un BottomSheet sobre el contenido actual de la pantalla sin cambiar la ruta activa"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "Navigator.push() añade al stack. pop() vuelve. pushReplacement() reemplaza. pushNamedAndRemoveUntil() para flujos de login."
  },
  {
    question: "¿Qué es Flutter Web y sus limitaciones?",
    options: [
      "Una versión de Flutter limitada a aplicaciones de intranet corporativa sin acceso a internet",
      "Flutter puede compilar a web (HTML/Canvas/WebAssembly renderers) pero SEO, bundle size y fonts son consideraciones",
      "Una versión idéntica a Flutter móvil que produce las mismas métricas de rendimiento sin diferencias",
      "Una plataforma que aún no existe oficialmente y está en desarrollo experimental por Google"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "Flutter Web: CanvasKit renderer (mejor fidelidad, más pesado) o HTML renderer (más liviano, menos fidelidad). SEO limitado sin SSR. WASM renderer en progreso."
  },
  {
    question: "¿Qué es Isolate en Dart?",
    options: [
      "Unidad de ejecución concurrente con su propia memoria; no comparte estado con otros isolates; comunica por mensajes",
      "El modo aislado de ejecución que activa Dart cuando detecta un error para evitar propagación",
      "Un tipo de thread del sistema operativo con acceso al GIL que limita la ejecución paralela",
      "Una función asíncrona especial que se ejecuta en segundo plano sin bloquear el event loop"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "Isolate.spawn(function, message). Los Isolates no comparten heap: no hay data races. Flutter usa Isolates para código CPU-intensive (compute())."
  },
  {
    question: "¿Qué hace <code>compute()</code> en Flutter?",
    options: [
      "Evalúa expresiones matemáticas complejas con precisión arbitraria de manera asíncrona",
      "Realiza operaciones de parsing de JSON directamente en el hilo principal sin bloqueos",
      "Una función genérica de la biblioteca estándar para realizar cálculos numéricos vectorizados",
      "Ejecuta una función en un Isolate separado: compute(parseJson, jsonString) — para trabajo CPU-intensive que no bloquee el UI thread"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "compute(fn, arg) es una abstracción sobre Isolate.spawn para casos simples: un argumento, un resultado. Ideal para JSON parsing pesado, crypto, etc."
  },
  {
    question: "¿Qué es el generative constructor vs factory constructor?",
    options: [
      "El factory constructor siempre es más lento porque añade una capa de indirección innecesaria",
      "Son equivalentes en comportamiento y Dart elige cuál invocar según el contexto de la llamada",
      "Generative: crea instancias de la clase; factory: puede retornar instancias existentes, subtipos, o de caché: factory Point(x,y) => _cache[key] ?? Point._(x,y)",
      "El factory constructor solo puede usarse para implementar el patrón singleton en una clase"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "factory constructor no necesita crear una nueva instancia siempre. Útil para singletons, caché de instancias, o retornar subtipos basados en parámetros."
  },
  {
    question: "¿Qué es sound null safety en Dart?",
    options: [
      "Garantía end-to-end de null safety: el compilador puede confiar en que variables non-nullable nunca son null; elimina null checks innecesarios",
      "El equivalente al tipo nullable de C# que añade un wrapper opcional alrededor de los valores",
      "Un sistema de null safety que reproduce alertas de audio cuando detecta posibles errores de tipo",
      "Una mejora superficial de las reglas del linter que sugiere evitar el uso de valores nulos"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "Sound null safety: el compilador puede realizar optimizaciones asumiendo que non-nullable variables nunca son null. Mejora rendimiento y elimina null checks defensivos."
  },
  {
    question: "¿Qué es la compilación AOT en Flutter?",
    options: [
      "Asynchronous Operations Toolkit: conjunto de herramientas para manejar operaciones asíncronas en Dart",
      "Ahead Of Time: Flutter compila Dart a código nativo ARM antes de ejecutar; rendimiento nativo sin JIT en producción",
      "Una herramienta de debugging que analiza el rendimiento de la aplicación en tiempo de ejecución",
      "Una fase de compilación que solo se activa durante las builds de release y no en desarrollo"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "Flutter release: AOT compilation a código nativo. JIT en debug para hot reload. AOT produce código más rápido pero sin hot reload. AOT also permite tree shaking y code shrinking."
  },
  {
    question: "¿Qué es Impeller en Flutter?",
    options: [
      "Nuevo motor de renderizado de Flutter que pre-compila shaders, eliminando jank de compilación de shaders en runtime",
      "Una biblioteca de audio para Flutter que gestiona la reproducción de sonido en aplicaciones multimedia",
      "Un sistema de animaciones interpoladas que mejora la fluidez de las transiciones de pantalla",
      "Un motor de renderizado exclusivo de iOS que usa Metal y no está disponible en Android"
    ],
    correct: 0,
    difficulty: "A",
    explanation: "Impeller reemplaza Skia+GLSL shaders con Metal (iOS) y Vulkan (Android). Pre-compila shaders, eliminando los stutters de compilación de shaders que afectaban a Skia."
  }
];
