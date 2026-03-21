window.questions_php = [
  {
    question: "¿Cómo se imprime texto en PHP?",
    options: [
      "print('texto');",
      "printf('texto');",
      "echo 'texto';",
      "console.log('texto');"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "echo es la forma más común y eficiente de imprimir en PHP. print también funciona pero retorna 1."
  },
  {
    question: "¿Cómo se declara una variable en PHP?",
    options: [
      "$nombre",
      "var nombre = valor",
      "nombre = valor",
      "let nombre = valor"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "Todas las variables en PHP empiezan con $ seguido del nombre. Son case-sensitive: $nombre ≠ $Nombre."
  },
  {
    question: "¿Qué es PHP principalmente?",
    options: [
      "Un lenguaje de scripting del lado del cliente para interfaces web",
      "Un lenguaje compilado de propósito general para aplicaciones de escritorio",
      "Lenguaje de scripting del lado del servidor, embebido en HTML; base de WordPress, Laravel, Symfony",
      "Un lenguaje compilado a bytecode que corre en una máquina virtual propia"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "PHP: Hypertext Preprocessor. Corre en el servidor (Apache, Nginx). Enormemente popular para web: ~77% de todos los sitios web con server-side language."
  },
  {
    question: "¿Cuál es la diferencia entre <code>==</code> y <code>===</code> en PHP?",
    options: [
      "Ambos operadores son idénticos y producen el mismo resultado siempre",
      "== compara únicamente referencias de objeto sin conversión de tipos",
      "== compara valor con coerción de tipo; === compara valor Y tipo (sin coerción)",
      "=== es más lento porque realiza conversiones adicionales internamente"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "'1' == 1 es true (coerción). '1' === 1 es false (tipos diferentes). Usar === para evitar comparaciones inesperadas."
  },
  {
    question: "¿Qué hace <code>isset()</code>?",
    options: [
      "Crea una variable con valor nulo si no existía previamente en el scope",
      "Elimina permanentemente una variable del scope liberando su memoria asociada",
      "Verifica si el valor de la variable es un número entero válido no vacío",
      "Retorna true si la variable existe y no es null"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "isset($var) retorna true si $var está definida y no es null. Diferente de empty() que también verifica '' y 0."
  },
  {
    question: "¿Qué hace <code>array_push()</code>?",
    options: [
      "Ordena el array manteniendo las claves asociativas originales",
      "Añade uno o más elementos al final del array",
      "Fusiona dos arrays en uno preservando las claves duplicadas",
      "Elimina el último elemento del array y lo retorna"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "array_push($arr, $val) es equivalente a $arr[] = $val. La segunda forma es más eficiente."
  },
  {
    question: "¿Qué es un array asociativo en PHP?",
    options: [
      "Un tipo de objeto con propiedades definidas dinámicamente en tiempo de ejecución",
      "Un array de objetos instanciados con claves numéricas consecutivas",
      "Un array ordenado numéricamente con acceso exclusivo por posición entera",
      "Array con claves de string: $arr = ['nombre' => 'Ana', 'edad' => 30]"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "Los arrays en PHP pueden usar claves de string o entero. Internamente todos son mapas ordenados (hashtables)."
  },
  {
    question: "¿Qué función hace un bucle sobre un array en PHP?",
    options: [
      "loop($arr as $key => $val)",
      "each($arr as $key => $val)",
      "for($arr as $key => $val)",
      "foreach($arr as $key => $val)"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "foreach($array as $value) o foreach($array as $key => $value) itera sobre cualquier array o iterable."
  },
  {
    question: "¿Qué es <code>include</code> vs <code>require</code>?",
    options: [
      "Ambas instrucciones son idénticas y se pueden usar indistintamente en cualquier contexto",
      "require lanza fatal error si no encuentra el archivo; include genera warning pero continúa",
      "include detiene completamente la ejecución si el archivo no se encuentra en el path",
      "require está obsoleto y fue reemplazado por include en versiones modernas de PHP"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "require y require_once deben usarse para dependencias críticas. include para opcionales. _once previene inclusión duplicada."
  },
  {
    question: "¿Cómo se define una función en PHP?",
    options: [
      "def miFuncion($param) { }",
      "func miFuncion($param) { }",
      "fn miFuncion($param) { }",
      "function miFuncion($param) { }"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "function nombre($parametros) { ... return $valor; }. PHP tiene tipado de retorno opcional: function f(): string { }"
  },
  {
    question: "¿Qué es PDO en PHP?",
    options: [
      "Un tipo de array especializado para almacenar y paginar resultados de consultas SQL",
      "PHP Data Objects: interfaz de abstracción de base de datos con prepared statements para prevenir SQL injection",
      "Una librería gráfica para generar reportes y gráficas desde datos tabulares en PHP",
      "Un framework de PHP para construir APIs REST con enrutamiento y validación automática"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "PDO soporta múltiples bases de datos. Siempre usar prepared statements: $stmt = $pdo->prepare('SELECT * FROM users WHERE id = ?'); $stmt->execute([$id]);"
  },
  {
    question: "¿Qué hace <code>array_map()</code>?",
    options: [
      "Combina múltiples arrays usando las claves comunes como punto de unión entre ellos",
      "Filtra los elementos del array descartando los que no cumplen el criterio dado",
      "Aplica una función a cada elemento del array y retorna nuevo array con los resultados",
      "Crea un índice de coordenadas a partir de un array de puntos con clave geográfica"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "$doubled = array_map(fn($x) => $x * 2, $numbers). El callback se aplica a cada elemento."
  },
  {
    question: "¿Qué es Composer en PHP?",
    options: [
      "Un tipo de namespace para organizar y autocargar clases en proyectos grandes de PHP",
      "Un framework PHP de alto rendimiento diseñado para aplicaciones empresariales críticas",
      "Gestor de dependencias de PHP: composer.json define dependencias, composer install las instala",
      "Una herramienta de edición y procesamiento multimedia para proyectos con PHP y FFmpeg"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "Composer es el gestor de paquetes de PHP. Packagist.org es el repositorio central. Genera autoloading automático."
  },
  {
    question: "¿Qué es el namespace en PHP?",
    options: [
      "Encapsula clases, funciones y constantes bajo un nombre para evitar conflictos: namespace App\\Controllers;",
      "Un tipo de array asociativo que agrupa variables globales relacionadas bajo un mismo prefijo",
      "Una variable superglobal especial que almacena el nombre del script PHP en ejecución",
      "Equivalente exacto a los paquetes de Java con la misma sintaxis de declaración e importación"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "namespace App\\Services; Permite tener clases con el mismo nombre en diferentes namespaces. use App\\Services\\UserService;"
  },
  {
    question: "¿Qué es el autoloading con PSR-4?",
    options: [
      "Cargar automáticamente arrays de configuración desde archivos externos en el arranque",
      "Cargar imágenes y recursos multimedia de forma diferida bajo demanda del navegador",
      "Convención que mapea namespaces a rutas de archivos; con composer, las clases se cargan automáticamente",
      "Una característica exclusiva del framework Laravel sin equivalente estándar en PHP puro"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "PSR-4: App\\Models\\User → src/Models/User.php. spl_autoload_register o composer's autoloader lo implementan."
  },
  {
    question: "¿Qué hace el operador null coalescing <code>??</code>?",
    options: [
      "Es el operador Elvis ?: que retorna el operando izquierdo si es evaluado como truthy",
      "Compara si dos variables apuntan exactamente al mismo tipo de datos en memoria",
      "Es un operador ternario abreviado equivalente a una estructura if-else en una línea",
      "Retorna el primer operando si no es null, o el segundo: $name = $_GET['name'] ?? 'default'"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "PHP 7+: $val = $a ?? $b ?? $c retorna el primero que no sea null. ??= asigna si la variable es null."
  },
  {
    question: "¿Qué son los Traits en PHP?",
    options: [
      "Anotaciones de tipo usadas por analizadores estáticos para verificación de propiedades",
      "Un tipo de mixin de herencia múltiple implementado mediante clases abstractas internas",
      "Mecanismo de reutilización de código horizontal en PHP: trait Loggable { public function log() {...} }; class User { use Loggable; }",
      "Interfaces con implementación por defecto equivalentes a los métodos default de Java 8"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "Traits resuelven limitaciones de herencia simple. Una clase puede usar múltiples traits. Los conflictos se resuelven con insteadof y as."
  },
  {
    question: "¿Qué es una arrow function en PHP 7.4+?",
    options: [
      "fn($x) => $x * 2: arrow functions con captura implícita del scope externo",
      "Funciones de flecha restringidas al uso dentro de array_map y funciones similares de array",
      "Una función de flecha que aplica transformaciones CSS a los elementos generados por PHP",
      "Funciones completamente idénticas a las arrow functions de JavaScript en todos sus comportamientos"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "fn($x, $y) => $x + $y + $outer. A diferencia de closures, las arrow functions capturan automáticamente variables del scope exterior sin use()."
  },
  {
    question: "¿Qué son los tipos de datos en PHP 8?",
    options: [
      "Solo tipos primitivos: int, float, string y bool sin soporte para tipos compuestos o union",
      "PHP carece completamente de sistema de tipos y todo es dinámico sin posibilidad de anotaciones",
      "Únicamente string e int son verificados en tiempo de ejecución como tipos reales en PHP 8",
      "PHP 8 añadió: union types (int|string), named arguments, match expression, nullsafe operator (?->), fibers"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "PHP 8: int, float, string, bool, null, array, object, callable, iterable. Union: function f(int|string $x). mixed, never (PHP 8.1)."
  },
  {
    question: "¿Qué hace <code>array_filter()</code>?",
    options: [
      "Ordena los elementos del array según el criterio comparativo definido en el callback",
      "Filtra elementos del array usando una función callback; retorna array con elementos donde callback retorna true",
      "Elimina todos los elementos duplicados del array conservando únicamente los valores únicos",
      "Valida que cada elemento del array cumpla estrictamente con un tipo de dato específico"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "$positivos = array_filter($numbers, fn($n) => $n > 0). Sin callback, elimina valores falsy (null, false, '', 0)."
  },
  {
    question: "¿Qué es la inyección de dependencias en PHP?",
    options: [
      "Técnica de inyectar datos SQL directamente en las consultas sin usar prepared statements",
      "Patrón donde las dependencias se pasan al objeto en lugar de ser creadas internamente; facilita testing y desacoplamiento",
      "Patrón aplicable únicamente en frameworks que incluyen un contenedor de servicios integrado",
      "Una vulnerabilidad de seguridad crítica que permite la ejecución de código SQL arbitrario"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "class UserService { public function __construct(private UserRepository $repo) {} }. Los frameworks como Laravel/Symfony tienen DI containers automáticos."
  },
  {
    question: "¿Qué es el ORM Eloquent de Laravel?",
    options: [
      "ORM limitado solo a MySQL e incompatible con motores PostgreSQL, SQLite o MariaDB",
      "Active Record ORM de Laravel: cada tabla tiene un Model; User::find(1), $user->posts()->get()",
      "Lenguaje de consulta propio de Laravel que sustituye SQL completamente en las aplicaciones",
      "Base de datos NoSQL embebida directamente en el core del framework Laravel moderno"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "Eloquent: User::where('active', true)->orderBy('name')->get(). Relaciones: hasOne, hasMany, belongsTo, belongsToMany."
  },
  {
    question: "¿Qué son los Generators en PHP?",
    options: [
      "Funciones que usan yield para retornar valores de forma lazy, sin crear array completo en memoria",
      "Herramientas de scaffolding que generan clases de modelo automáticamente desde el esquema",
      "Construcciones exclusivamente aplicables dentro de bucles for y foreach para optimizar memoria",
      "Equivalentes directos a las coroutines de Python con la misma semántica de async/await"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "function readLines($file) { $f = fopen($file, 'r'); while($line = fgets($f)) { yield $line; } }. Ideal para datasets grandes."
  },
  {
    question: "¿Qué es JIT en PHP 8?",
    options: [
      "Just-In-Time Compilation: mejora de rendimiento compilando partes del código a código nativo, especialmente para CPU-bound tasks",
      "Una optimización específica de OPcache aplicada exclusivamente a consultas de base de datos",
      "Un sistema de caché de instancias de objetos que los reutiliza entre peticiones HTTP sucesivas",
      "Sistema de reporte de errores diferido que agrupa excepciones al final de la petición HTTP"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "PHP 8 JIT: OPcache JIT compila bytecode a código de máquina. Beneficio mayor para computación matemática que para web apps típicas (ya dominadas por IO)."
  },
  {
    question: "¿Qué son los atributos (attributes) en PHP 8?",
    options: [
      "Propiedades tipadas de objetos con validación automática en cada asignación de valor",
      "Metadatos para clases, métodos, propiedades: #[Route('/home')]; reemplazan anotaciones de docblock",
      "Un tipo de decorador de propiedades equivalente a los decoradores Python usando sintaxis @",
      "Anotaciones utilizables exclusivamente para definir rutas de enrutamiento en frameworks MVC"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "#[Attribute] class Route { public function __construct(public string $path) {} }. #[Route('/home')] class HomeController {}. Legibles con Reflection."
  },
  {
    question: "¿Qué es el typed properties en PHP 7.4+?",
    options: [
      "Propiedades de clase con tipo declarado: public string $name; el tipo se verifica en asignación",
      "Variables del scope global con tipo verificado en tiempo de compilación antes de ejecución",
      "Característica limitada únicamente a parámetros de función y no a propiedades de clase",
      "Un mecanismo de cast automático que convierte silenciosamente los valores al tipo declarado"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "class User { public int $id; public string $name; public ?Email $email; }. El tipo se verifica cuando se asigna, no en la declaración."
  },
  {
    question: "¿Qué es Fiber en PHP 8.1?",
    options: [
      "Un tipo de thread nativo con memoria compartida para ejecutar operaciones realmente en paralelo",
      "Primitiva de concurrencia cooperativa: coroutine que puede pausarse y reanudarse; base para async en PHP sin extensiones",
      "Un tipo de array circular de alta performance optimizado para procesamiento masivo de datos",
      "Construcción aplicable exclusivamente para operaciones de lectura y escritura de archivos en disco"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "$fiber = new Fiber(function(): void { Fiber::suspend('first'); Fiber::suspend('second'); }); $fiber->start(); $fiber->resume(); Base de async frameworks como ReactPHP."
  },
  {
    question: "¿Qué son los Enums en PHP 8.1?",
    options: [
      "Únicamente constantes de tipo entero agrupadas bajo un nombre de clase sin métodos propios",
      "Enumeraciones de primera clase con casos que pueden tener valores y métodos: enum Status: string { case Active = 'active'; }",
      "Constantes agrupadas equivalentes en todo a las constantes de clase estáticas tradicionales",
      "Un tipo de clase abstracta sellada que impide cualquier forma de instanciación directa"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "enum Status: string { case Active = 'active'; case Inactive = 'inactive'; }. Pure enums (sin tipo) y backed enums (con int o string)."
  },
  {
    question: "¿Cómo funciona OPcache en PHP?",
    options: [
      "Almacena el bytecode compilado de PHP en memoria compartida; evita parsear y compilar los archivos en cada request",
      "Caché de instancias de objetos serializados que reutiliza los mismos objetos entre peticiones",
      "Sistema de caché de sesiones de usuario almacenado en memoria compartida del servidor web",
      "Caché de resultados de consultas SQL que evita reejecutar sentencias idénticas en la misma petición"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "OPcache: opcache.enable=1. El bytecode se compila una vez y se reutiliza. JIT de PHP 8 se construye sobre OPcache."
  },
  {
    question: "¿Qué es First-class callable syntax en PHP 8.1?",
    options: [
      "Un tipo de arrow function con acceso implícito al scope léxico de la clase contenedora",
      "Sintaxis restringida exclusivamente a métodos estáticos públicos accesibles desde cualquier clase",
      "Una convención de callable heredada directamente del estándar PSR-12 de estilo de código",
      "strlen(...) crea un Closure desde cualquier callable; reemplaza Closure::fromCallable()"
    ],
    correct: 3,
    difficulty: "B",
    explanation: "$fn = strlen(...); array_map(strtolower(...), $array). Sintaxis limpia para pasar callables sin wrapping en closures."
  }
];
