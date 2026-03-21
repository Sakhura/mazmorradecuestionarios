window.questions_javascript = [
  {
    "q": 1,
    question: "¿Qué valor retorna <code>typeof null</code> en JavaScript?",
    options: [
      "string",
      "undefined",
      "object",
      "null"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "typeof null retorna 'object' por un bug histórico en JS que se mantiene por compatibilidad."
  },
  {
    "q": 2,
    question: "¿Cuál es la forma correcta de declarar una variable en ES6 que no puede ser reasignada?",
    options: [
      "const x = 5",
      "static x = 5",
      "let x = 5",
      "var x = 5"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "const declara constantes que no pueden ser reasignadas (aunque sus propiedades sí pueden mutarse)."
  },
  {
    "q": 3,
    question: "¿Qué operador compara valor Y tipo en JavaScript?",
    options: [
      "!==",
      "=>",
      "!=",
      "==="
    ],
    correct: 3,
    difficulty: "E",
    explanation: "=== es igualdad estricta: compara tanto valor como tipo, sin coerción."
  },
  {
    "q": 4,
    question: "¿Cuál es la salida de <code>console.log(0.1 + 0.2 === 0.3)</code>?",
    options: [
      "Error",
      "false",
      "undefined",
      "true"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "false, debido a la representación de punto flotante IEEE 754. 0.1+0.2 = 0.30000000000000004."
  },
  {
    "q": 5,
    question: "¿Qué método elimina el último elemento de un array?",
    options: [
      "splice()",
      "pop()",
      "shift()",
      "unshift()"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "pop() elimina y retorna el último elemento del array."
  },
  {
    "q": 6,
    question: "¿Cuál es la diferencia entre <code>null</code> y <code>undefined</code>?",
    options: [
      "null y undefined son sinónimos intercambiables en el lenguaje",
      "null es de tipo number cuando se evalúa en contexto numérico",
      "undefined es un objeto con valor vacío según la especificación",
      "null es ausencia intencional; undefined es no asignado"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "null es asignado explícitamente para indicar ausencia; undefined es el valor por defecto cuando no se ha asignado nada."
  },
  {
    "q": 7,
    question: "¿Qué método de array crea un NUEVO array con los elementos que pasan una condición?",
    options: [
      "reduce()",
      "filter()",
      "find()",
      "some()"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "filter() retorna un nuevo array con todos los elementos que pasan la función de prueba."
  },
  {
    "q": 8,
    question: "¿Qué hace el método <code>push()</code> en un array?",
    options: [
      "Transforma cada elemento y retorna un nuevo array del mismo tamaño",
      "Añade elementos al final",
      "Elimina el primer elemento del array y retorna su valor",
      "Concatena dos arrays y retorna el array combinado resultante"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "push() añade uno o más elementos al FINAL del array y retorna la nueva longitud."
  },
  {
    "q": 9,
    question: "¿Cuál es la forma correcta de escribir un comentario de una línea en JavaScript?",
    options: [
      "# comentario",
      "<!-- comentario -->",
      "// comentario",
      "/* comentario */"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "// inicia un comentario de una línea en JavaScript."
  },
  {
    "q": 10,
    question: "¿Qué retorna <code>typeof undefined</code>?",
    options: [
      "object",
      "null",
      "number",
      "undefined"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "typeof undefined retorna la cadena 'undefined'."
  },
  {
    "q": 11,
    question: "¿Cómo se convierte una cadena a número entero en JavaScript?",
    options: [
      "Number.parseInt()",
      "Number.toInteger()",
      "str.toNumber()",
      "Number.from()"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "parseInt() o Number.parseInt() convierte una cadena a un entero."
  },
  {
    "q": 12,
    question: "¿Qué es NaN en JavaScript?",
    options: [
      "Not a Number",
      "None and Null",
      "Null And Nothing",
      "New Array Node"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "NaN (Not a Number) es el resultado de operaciones matemáticas inválidas, como 0/0 o parseInt('abc')."
  },
  {
    "q": 13,
    question: "¿Qué hace <code>Array.isArray([])</code>?",
    options: [
      "false",
      "Error",
      "null",
      "true"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "Array.isArray() retorna true si el argumento es un array."
  },
  {
    "q": 14,
    question: "¿Cuántos tipos primitivos tiene JavaScript (ES2020+)?",
    options: [
      "7",
      "8",
      "6",
      "5"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "JavaScript tiene 7 primitivos: string, number, bigint, boolean, undefined, symbol, null."
  },
  {
    "q": 15,
    question: "¿Qué método convierte un array a cadena separada por comas?",
    options: [
      "join()",
      "slice()",
      "toString()",
      "concat()"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "join() une los elementos de un array en una cadena. join() sin argumento usa coma por defecto."
  },
  {
    "q": 16,
    question: "¿Cuál es la sintaxis de una función flecha en ES6?",
    options: [
      "const fn = (x) => x*2",
      "(x) -> { return x*2 }",
      "function arrow(x) { x*2 }",
      "fn = function(x) => x*2"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "Arrow functions usan la sintaxis => y son más concisas que las funciones tradicionales."
  },
  {
    "q": 17,
    question: "¿Qué hace <code>console.log(typeof [])</code>?",
    options: [
      "object",
      "array",
      "undefined",
      "list"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "Los arrays son objetos en JS; typeof [] retorna 'object'."
  },
  {
    "q": 18,
    question: "¿Qué método busca un elemento en un array y retorna su índice (-1 si no existe)?",
    options: [
      "indexOf()",
      "find()",
      "includes()",
      "search()"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "indexOf() retorna el primer índice donde se encuentra el elemento, o -1 si no se encuentra."
  },
  {
    "q": 19,
    question: "¿Qué es el DOM en JavaScript?",
    options: [
      "Document Object Model",
      "Data Object Method",
      "Direct Object Mapper",
      "Dynamic Object Module"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "El DOM (Document Object Model) es la interfaz que permite a JS interactuar con el HTML del documento."
  },
  {
    "q": 20,
    question: "¿Qué operador se usa para el encadenamiento opcional en ES2020?",
    options: [
      "?.",
      "??",
      "?.?",
      "?:"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "El operador ?. (optional chaining) permite acceder a propiedades de un objeto que puede ser null/undefined sin lanzar error."
  },
  {
    "q": 21,
    question: "¿Qué es el 'hoisting' en JavaScript?",
    options: [
      "Convertir variables locales al scope global automáticamente en tiempo de ejecución",
      "Eliminar funciones duplicadas del contexto de ejecución durante la fase de compilación",
      "Ejecutar el cuerpo de una función antes de que sea declarada explícitamente en el código",
      "Mover declaraciones al inicio del scope antes de ejecución"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "Hoisting eleva las declaraciones de variables (var) y funciones al inicio de su scope de ejecución."
  },
  {
    "q": 22,
    question: "¿Cuál es la diferencia entre <code>var</code> y <code>let</code>?",
    options: [
      "var tiene scope de función; let tiene scope de bloque",
      "let crea variables globales mientras que var las limita al bloque actual de código",
      "var genera un error si se reasigna, mientras que let permite múltiples asignaciones",
      "let y var son idénticos en comportamiento en ES6 y versiones posteriores del estándar"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "var tiene function scope y se hoistea; let tiene block scope y no puede ser accedido antes de su declaración (TDZ)."
  },
  {
    "q": 23,
    question: "¿Qué es un closure en JavaScript?",
    options: [
      "Una función que recuerda su scope léxico exterior",
      "Una función que se ejecuta solo cuando se llama desde el scope global del documento",
      "Una función que hace una copia profunda de las variables de su entorno léxico externo",
      "Una función que no puede ser ejecutada fuera del módulo donde fue declarada originalmente"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "Un closure es una función que retiene acceso a las variables del scope donde fue creada, incluso después de que ese scope haya terminado."
  },
  {
    "q": 24,
    question: "¿Qué hace el operador spread <code>...</code>?",
    options: [
      "Crea una copia superficial de un objeto sin incluir sus métodos heredados del prototipo",
      "Expande iterables en elementos individuales",
      "Combina múltiples arrays en uno nuevo eliminando todos los elementos duplicados encontrados",
      "Convierte un iterable en un string donde los elementos están separados por comas"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "El spread operator expande arrays/objetos en sus elementos/propiedades individuales."
  },
  {
    "q": 25,
    question: "¿Qué retorna <code>[1,2,3].map(x => x * 2)</code>?",
    options: [
      "[2,4,6]",
      "[1,2,3]",
      "[3,6,9]",
      "[1,4,9]"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "map() aplica la función a cada elemento y retorna un nuevo array: [2,4,6]."
  },
  {
    "q": 26,
    question: "¿Qué es una Promesa (Promise) en JavaScript?",
    options: [
      "Una función especial que se auto-ejecuta en el momento en que es asignada a una variable",
      "Un mecanismo de control de flujo para pausar y reanudar la ejecución de código asíncrono",
      "Un objeto que representa un valor futuro",
      "Una función que retorna inmediatamente con el valor de una operación ya completada"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "Una Promise representa el resultado eventual (éxito o error) de una operación asíncrona."
  },
  {
    "q": 27,
    question: "¿Qué hace <code>Object.keys(obj)</code>?",
    options: [
      "Previene que se añadan nuevas propiedades al objeto congelándolo de forma superficial",
      "Retorna array con las claves enumerables propias del objeto",
      "Realiza una copia profunda del objeto incluyendo todas sus propiedades heredadas del prototipo",
      "Elimina todas las propiedades enumerables del objeto en una sola operación atómica"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "Object.keys() retorna un array con los nombres de las propiedades propias y enumerables de un objeto."
  },
  {
    "q": 28,
    question: "¿Cuál es la diferencia entre <code>==</code> y <code>===</code>?",
    options: [
      "=== realiza coerción implícita de tipos antes de comparar, igual que hace ==",
      "== siempre compara por referencia de memoria en lugar de hacerlo por valor primitivo",
      "== hace coerción de tipo; === no",
      "== compara la cadena de prototipos de los operandos en lugar de su valor actual"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "== (igualdad abstracta) realiza coerción de tipos antes de comparar. === (igualdad estricta) no."
  },
  {
    "q": 29,
    question: "¿Qué método de string convierte a mayúsculas?",
    options: [
      "uppercase()",
      "toUpper()",
      "convertToUpperCase()",
      "toUpperCase()"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "toUpperCase() convierte todos los caracteres de un string a mayúsculas."
  },
  {
    "q": 30,
    question: "¿Qué hace <code>JSON.stringify()</code>?",
    options: [
      "Convierte un valor JS a string JSON",
      "Parsea un string JSON y lo convierte en un valor JavaScript nativo utilizable",
      "Comprime un objeto JavaScript en formato binario eficiente para su almacenamiento",
      "Valida que un string cumple estrictamente con el esquema del estándar JSON oficial"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "JSON.stringify() serializa un valor JavaScript a una cadena JSON."
  },
  {
    "q": 31,
    question: "¿Qué es el event loop en JavaScript?",
    options: [
      "Una función nativa que retrasa la ejecución del código durante un número exacto de ms",
      "Un tipo especial de bucle que itera sobre las promesas pendientes en la cola de callbacks",
      "El mecanismo que permite la ejecución asíncrona no bloqueante",
      "Un error que ocurre cuando el stack de llamadas supera su límite máximo permitido"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "El event loop gestiona la cola de callbacks y permite a JS ser no bloqueante aunque sea single-threaded."
  },
  {
    "q": 32,
    question: "¿Qué retorna <code>'hello'.split('')</code>?",
    options: [
      "['h','e','l','l','o']",
      "['hello']",
      "{ 0:'h', 1:'e', 2:'l', 3:'l', 4:'o' }",
      "\"h\",\"e\",\"l\",\"l\",\"o\""
    ],
    correct: 0,
    difficulty: "D",
    explanation: "split('') divide el string en cada carácter, retornando un array de caracteres individuales."
  },
  {
    "q": 33,
    question: "¿Cómo se desestructura un array en ES6?",
    options: [
      "let {a,b} = arr",
      "let a,b = arr",
      "let (a,b) = arr",
      "let [a,b] = arr"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "La desestructuración de arrays usa corchetes: let [a,b] = [1,2]; asigna a=1 y b=2."
  },
  {
    "q": 34,
    question: "¿Qué hace <code>Array.prototype.reduce()</code>?",
    options: [
      "Filtra los elementos del array conservando solo los que sean menores al valor promedio",
      "Retorna un nuevo array con cada elemento transformado por la función callback dada",
      "Aplica una función acumuladora a los elementos",
      "Crea un nuevo array con solo los elementos ubicados en posiciones pares del original"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "reduce() ejecuta una función reductora sobre cada elemento del array, resultando en un único valor."
  },
  {
    "q": 35,
    question: "¿Cuál es la forma de importar un módulo en ES6?",
    options: [
      "import mod from 'mod'",
      "require('./mod') de la sintaxis CommonJS utilizada en entornos Node.js tradicionales",
      "module.load('mod') para importar módulos de forma explícita en entornos de servidor",
      "using mod = './mod' según la propuesta de gestión explícita de recursos de TC39"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "ES6 usa la sintaxis import/export para módulos estáticos."
  },
  {
    "q": 36,
    question: "¿Qué hace el operador nullish coalescing <code>??</code>?",
    options: [
      "Convierte el operando izquierdo a string si es de tipo number o boolean automáticamente",
      "Retorna el lado derecho si el izquierdo es null o undefined",
      "Niega el valor booleano del operando izquierdo y lo asigna directamente al resultado",
      "Compara los tipos de ambos operandos y retorna true si son del mismo tipo primitivo"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "?? retorna el operando derecho sólo cuando el izquierdo es null o undefined (no para false o 0, a diferencia de ||)."
  },
  {
    "q": 37,
    question: "¿Qué es una IIFE en JavaScript?",
    options: [
      "Una función declarada con async que retorna implícitamente una Promise resuelta",
      "Una función que lanza un error si no recibe todos sus parámetros requeridos al llamarla",
      "Una función que se invoca inmediatamente después de ser definida",
      "Una clase que se instancia automáticamente al ser importada en cualquier módulo ES6"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "IIFE (Immediately Invoked Function Expression) es una función que se ejecuta en el momento en que se define."
  },
  {
    "q": 38,
    question: "¿Qué método existe para hacer una copia superficial de un objeto?",
    options: [
      "obj.clone() para copiar todas las propiedades del objeto en un nuevo objeto vacío",
      "Object.assign({}, obj)",
      "JSON.deepCopy(obj) para clonar objetos incluyendo sus métodos y referencias anidadas",
      "Object.prototype.copy() para duplicar solo las propiedades propias del objeto fuente"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "Object.assign({}, obj) crea una copia superficial del objeto. También se puede usar {...obj}."
  },
  {
    "q": 39,
    question: "¿Qué imprime <code>console.log(1 + '2')</code>?",
    options: [
      "NaN",
      "'12'",
      "3",
      "12"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "Cuando se suma un número y un string, JS convierte el número a string y los concatena: '12'."
  },
  {
    "q": 40,
    question: "¿Cuál es el resultado de <code>Boolean('')</code>?",
    options: [
      "true",
      "false",
      "undefined",
      "null"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "El string vacío es un valor falsy en JavaScript; Boolean('') retorna false."
  },
  {
    "q": 41,
    question: "¿Qué es el Prototype Chain en JavaScript?",
    options: [
      "Una cola interna que gestiona el orden de ejecución de todos los callbacks registrados",
      "El mecanismo de herencia basado en prototipos",
      "Un patrón de diseño que encapsula estado compartido usando funciones anidadas cerradas",
      "Un array interno que almacena referencias a todas las funciones activas en el scope"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "JavaScript usa herencia prototípica. Cada objeto tiene un [[Prototype]] que forma una cadena hasta null."
  },
  {
    "q": 42,
    question: "¿Qué hace <code>Object.freeze(obj)</code>?",
    options: [
      "Serializa el objeto a formato JSON compacto para su almacenamiento en base de datos",
      "Crea una copia superficial del objeto con todas sus propiedades enumerables duplicadas",
      "Impide agregar, eliminar o modificar propiedades",
      "Mejora el rendimiento del objeto al precompilar el acceso optimizado a sus propiedades"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "Object.freeze() hace un objeto inmutable: no se pueden añadir, eliminar ni cambiar sus propiedades."
  },
  {
    "q": 43,
    question: "¿Cuál es la diferencia entre <code>call()</code>, <code>apply()</code> y <code>bind()</code>?",
    options: [
      "bind invoca la función inmediatamente fijando el contexto this con los args dados",
      "call y apply son idénticos porque ambos aceptan sus argumentos en formato de array",
      "apply recibe los argumentos como parámetros individuales separados por coma uno a uno",
      "call invoca inmediatamente con args separados; apply con array; bind retorna nueva función"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "call() y apply() invocan inmediatamente (apply acepta array de args); bind() retorna una nueva función con 'this' fijado."
  },
  {
    "q": 44,
    question: "¿Qué es un WeakMap en JavaScript?",
    options: [
      "Un Map que garantiza el orden de inserción de todos sus pares clave-valor almacenados",
      "Un Map cuyas entradas son de solo lectura y no pueden modificarse tras su creación",
      "Un Map estándar con los mismos métodos que Map pero con una sintaxis más simplificada",
      "Un Map donde las claves son referencias débiles a objetos"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "WeakMap tiene referencias débiles a sus claves (que deben ser objetos), permitiendo garbage collection si no hay otras referencias."
  },
  {
    "q": 45,
    question: "¿Qué hace <code>Symbol()</code> en JavaScript?",
    options: [
      "Crea un identificador de ámbito global accesible desde cualquier módulo del proyecto",
      "Crea un valor primitivo único e inmutable",
      "Crea un tipo de string con propiedades especiales de solo lectura y acceso protegido",
      "Define una constante cuyo valor se evalúa y fija durante la fase de compilación previa"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "Symbol() crea un valor único; dos Symbol() son siempre diferentes aunque tengan la misma descripción."
  },
  {
    "q": 46,
    question: "¿Qué es el temporal dead zone (TDZ)?",
    options: [
      "El intervalo de tiempo que transcurre entre la resolución y el rechazo de una Promise",
      "Una zona de memoria reservada específicamente para almacenar variables de scope de bloque",
      "El ámbito de scope global en el que var declara sus variables sin restricciones de bloque",
      "El período donde let/const existen pero no se pueden acceder antes de su declaración"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "El TDZ es la zona temporal donde let/const existen en el scope (por hoisting) pero lanzarán ReferenceError si se accede antes de su declaración."
  },
  {
    "q": 47,
    question: "¿Qué hace <code>Promise.all()</code>?",
    options: [
      "Espera a que TODAS las promesas se resuelvan; rechaza si alguna falla",
      "Cancela todas las promesas pendientes cuando alguna de ellas es rechazada con error",
      "Ejecuta las promesas en secuencia pasando el resultado de cada una a la siguiente promesa",
      "Espera únicamente a la primera promesa que se resuelva de forma exitosa y retorna su valor"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "Promise.all() retorna una promesa que se resuelve cuando TODAS se resuelven, o rechaza con el primer error."
  },
  {
    "q": 48,
    question: "¿Cómo se define un getter en una clase ES6?",
    options: [
      "function get name() {}",
      "getter name() {}",
      "get name() {}",
      "set name() {}"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "Se usa la palabra clave get seguida del nombre de la propiedad para definir un getter en una clase."
  },
  {
    "q": 49,
    question: "¿Qué es el patrón Observer / EventEmitter?",
    options: [
      "Un mecanismo de herencia que permite que una clase extienda simultáneamente múltiples padres",
      "Un patrón donde suscriptores son notificados de cambios en un sujeto",
      "Un tipo de Promise que permite suscribirse a los resultados futuros de una operación asíncrona",
      "Un algoritmo de búsqueda binaria que ordena objetos según criterios de comparación definidos"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "El patrón Observer permite que un objeto (sujeto) notifique automáticamente a múltiples objetos (observadores) sobre cambios."
  },
  {
    "q": 50,
    question: "¿Qué retorna <code>Object.create(null)</code>?",
    options: [
      "Un objeto congelado que no puede ser modificado ni extendido después de haber sido creado",
      "Un valor especial que representa la ausencia completa de cualquier referencia a objeto alguno",
      "Un objeto sin prototipo",
      "Un objeto que hereda todos los métodos y propiedades disponibles de Object.prototype"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "Object.create(null) crea un objeto con [[Prototype]] = null, sin ningún método heredado."
  },
  {
    "q": 51,
    question: "¿Qué hace el generador (function*) en JavaScript?",
    options: [
      "Crea secuencias de números pseudoaleatorios mediante un algoritmo con semilla configurable",
      "Instancia clases de forma dinámica en tiempo de ejecución según parámetros recibidos",
      "Genera identificadores únicos universales seguros para su uso en bases de datos distribuidas",
      "Crea funciones que pueden pausarse y reanudarse con yield"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "Los generadores son funciones que pueden pausarse (yield) y reanudarse, retornando un iterador."
  },
  {
    "q": 52,
    question: "¿Qué es el concepto de 'currying' en JavaScript?",
    options: [
      "Un mecanismo por el cual una clase hija adquiere los métodos definidos en su clase padre",
      "Una técnica para inspeccionar el estado interno de las variables durante la ejecución activa",
      "Transformar una función de múltiples args en una secuencia de funciones de un arg",
      "Un método del prototipo de Array que transforma la estructura de todos sus elementos"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "Currying convierte f(a,b,c) en f(a)(b)(c). Útil para composición funcional y aplicación parcial."
  },
  {
    "q": 53,
    question: "¿Qué hace <code>async/await</code>?",
    options: [
      "Crea hilos de ejecución paralela mediante la API de Web Workers del entorno del navegador",
      "Hace que código asíncrono se lea de forma síncrona sobre Promesas",
      "Distribuye la carga de trabajo entre múltiples núcleos del procesador físico disponibles",
      "Optimiza automáticamente el rendimiento del código eliminando operaciones redundantes"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "async/await es syntactic sugar sobre Promises que permite escribir código asíncrono con apariencia síncrona."
  },
  {
    "q": 54,
    question: "¿Cuál es la diferencia entre <code>forEach</code> y <code>map</code>?",
    options: [
      "forEach no retorna valor; map retorna nuevo array",
      "forEach itera de forma más eficiente al no necesitar crear el array de retorno intermedio",
      "No existe ninguna diferencia funcional relevante entre los dos métodos del prototipo Array",
      "map muta directamente el array original en lugar de crear uno nuevo con elementos transformados"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "forEach ejecuta efectos laterales sin retornar nada. map transforma elementos y retorna nuevo array."
  },
  {
    "q": 55,
    question: "¿Qué es el patrón Module en JavaScript?",
    options: [
      "Importar y exportar únicamente funciones puras sin efectos secundarios ni dependencias externas",
      "Crear una clase abstracta que sirve de interfaz base para distintas implementaciones concretas",
      "Un framework de JavaScript diseñado para organizar aplicaciones de gran escala eficientemente",
      "Encapsular código privado usando scope de función o módulos ES6"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "El patrón Module usa closures para crear scope privado, exponiendo solo una API pública."
  },
  {
    "q": 56,
    question: "¿Qué hace <code>structuredClone(obj)</code>?",
    options: [
      "Clona únicamente la cadena de prototipos del objeto sin copiar ninguna propiedad propia",
      "Hace una copia profunda del objeto",
      "Convierte el objeto a JSON y lo deserializa para obtener una nueva instancia independiente",
      "Congela el objeto y todas sus propiedades anidadas de forma recursiva y completamente profunda"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "structuredClone() (ES2022) crea una copia profunda del objeto usando el algoritmo de clonación estructurada."
  },
  {
    "q": 57,
    question: "¿Qué es el método <code>flat()</code> de Array?",
    options: [
      "Reorganiza los elementos del array en orden ascendente según su valor en Unicode",
      "Combina dos arrays en uno nuevo manteniendo el orden original de ambos arrays fuente",
      "Elimina del array todos los valores que sean falsy: false, 0, null, undefined o cadena vacía",
      "Aplana sub-arrays al nivel indicado"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "flat(depth) crea un nuevo array con sub-arrays aplanados hasta el nivel de profundidad especificado."
  },
  {
    "q": 58,
    question: "¿Qué es Proxy en JavaScript?",
    options: [
      "Una librería de terceros que extiende el prototipo de Object con nuevos métodos útiles",
      "Un objeto que intercepta operaciones fundamentales sobre otro objeto",
      "Un patrón de diseño estructural que actúa como intermediario entre dos objetos distintos",
      "Un método de la API Fetch que intercepta las respuestas antes de ser procesadas por el código"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "Proxy permite definir comportamiento personalizado para operaciones fundamentales: acceso a propiedades, asignación, llamadas, etc."
  },
  {
    "q": 59,
    question: "¿Qué hace <code>Promise.race()</code>?",
    options: [
      "Combina todas las promesas en una única promesa que resuelve un array con todos los resultados",
      "Retorna únicamente la promesa más rápida que se resuelva exitosamente ignorando los rechazos",
      "Se resuelve/rechaza con la primera promesa que se complete",
      "Ejecuta todas las promesas en secuencia y espera que todas terminen sin importar el resultado"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "Promise.race() retorna una promesa que adopta el estado de la primera promesa que se complete (resuelta o rechazada)."
  },
  {
    "q": 60,
    question: "¿Qué es el método <code>at()</code> en arrays/strings (ES2022)?",
    options: [
      "Accede al elemento por índice positivo o negativo",
      "Busca el elemento por valor y retorna un booleano indicando si fue encontrado en el array",
      "Filtra los elementos del array retornando solo los que están en posiciones pares o impares",
      "Retorna el índice numérico del elemento especificado o -1 si no se encuentra en el array"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "at() acepta índices negativos (-1 = último elemento), a diferencia de la notación [] que no permite negativos directamente."
  },
  {
    "q": 61,
    question: "¿Qué es el concepto de 'memoization' en JS?",
    options: [
      "Técnica de optimización que cachea resultados de funciones costosas",
      "Un método especial del prototipo Map para almacenar resultados en caché de forma interna",
      "Eliminación automática de variables que han salido del scope de ejecución activo actual",
      "Gestión manual de la asignación de memoria heap para objetos de larga duración en V8"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "Memoization almacena los resultados de llamadas costosas y los retorna cuando se repiten los mismos inputs."
  },
  {
    "q": 62,
    question: "¿Cómo funciona el garbage collector en V8?",
    options: [
      "Usa conteo de referencias incrementales para liberar objetos sin referencias circulares",
      "Se activa explícitamente llamando a gc() cuando la memoria supera un umbral configurado",
      "Usa algoritmos como Mark & Sweep para detectar objetos no referenciados",
      "Libera toda la memoria asignada en intervalos regulares configurables definidos por el motor"
    ],
    correct: 2,
    difficulty: "B",
    explanation: "V8 usa principalmente generational GC con Mark & Sweep/Mark & Compact para objetos de generación mayor."
  },
  {
    "q": 63,
    question: "¿Qué es un AbortController en JavaScript?",
    options: [
      "Un gestor centralizado que captura y registra todos los errores producidos en la aplicación",
      "Un planificador de tareas que ordena la ejecución de todas las operaciones asíncronas pendientes",
      "Un objeto que permite cancelar fetch requests u otras operaciones asíncronas",
      "Un tipo especial de Promise que incorpora un método cancel() para detener su ejecución"
    ],
    correct: 2,
    difficulty: "B",
    explanation: "AbortController junto con AbortSignal permite cancelar fetch requests, event listeners y otras operaciones asíncronas."
  },
  {
    "q": 64,
    question: "¿Qué hace <code>Reflect</code> en JavaScript?",
    options: [
      "Provee métodos para operaciones interceptables sobre objetos, similar a Proxy traps",
      "Crea una representación especular del árbol DOM para permitir su manipulación eficiente",
      "Devuelve una copia exacta de un objeto con todas sus propiedades profundamente duplicadas",
      "Convierte objetos complejos en representaciones serializables para persistencia o transmisión"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "Reflect tiene métodos estáticos que corresponden a las trampas de Proxy, útil para implementar comportamientos por defecto."
  },
  {
    "q": 65,
    question: "¿Qué es el patrón de diseño 'Decorator' en JS?",
    options: [
      "Una anotación de documentación que describe el tipo de retorno esperado de una función",
      "Un mecanismo de herencia que permite que las subclases sobreescriban métodos del padre",
      "Una propiedad CSS especial que se aplica dinámicamente mediante JavaScript al elemento",
      "Añadir comportamiento a objetos/funciones dinámicamente sin modificarlos"
    ],
    correct: 3,
    difficulty: "B",
    explanation: "El decorador añade responsabilidades a objetos dinámicamente. En JS moderno, los decoradores (stage 3) usan @ para clases/métodos."
  },
  {
    "q": 66,
    question: "¿Cómo se implementa la herencia en clases ES6?",
    options: [
      "Con la palabra clave extends y llamando super()",
      "Con mixin() para combinar los métodos de múltiples objetos en una sola clase compuesta",
      "Con Object.inherit(Padre) para establecer la relación jerárquica entre dos clases JS",
      "Asignando directamente al prototipo y sobreescribiendo manualmente el constructor de la clase"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "class Hijo extends Padre y super() en el constructor llama al constructor del padre."
  },
  {
    "q": 67,
    question: "¿Qué es un SharedArrayBuffer?",
    options: [
      "Un array de valores inmutables que no pueden ser modificados después de haber sido creado",
      "Un buffer de datos de audio que procesa la API Web Audio del entorno del navegador moderno",
      "Memoria que puede ser compartida entre el hilo principal y Web Workers",
      "Un área de memoria de red compartida entre pestañas del mismo origen en el navegador web"
    ],
    correct: 2,
    difficulty: "B",
    explanation: "SharedArrayBuffer permite compartir memoria entre el hilo principal y Workers para computación paralela."
  },
  {
    "q": 68,
    question: "¿Qué hace <code>queueMicrotask()</code>?",
    options: [
      "Programa una tarea en la cola de macrotasks para ejecutarse en el siguiente ciclo del loop",
      "Añade una función a la cola de microtasks para ejecutarla después del script actual",
      "Crea un nuevo hilo de ejecución paralela dedicado mediante la API de Web Workers del browser",
      "Retrasa la ejecución de la función por al menos 0 milisegundos usando la cola de macrotasks"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "queueMicrotask() añade una microtask que se ejecuta antes del próximo ciclo del event loop, después del código síncrono actual."
  },
  {
    "q": 69,
    question: "¿Cuál es la diferencia entre microtasks y macrotasks?",
    options: [
      "Las macrotasks tienen mayor prioridad y son procesadas antes que las microtasks siempre",
      "Las microtasks se usan exclusivamente para la comunicación con los Web Workers del documento",
      "Ambas colas tienen la misma prioridad y son procesadas en estricto orden de llegada FIFO",
      "Microtasks (Promises) tienen prioridad y se ejecutan antes de las macrotasks (setTimeout)"
    ],
    correct: 3,
    difficulty: "B",
    explanation: "Las microtasks (Promise callbacks, queueMicrotask) se procesan completamente antes de pasar a la siguiente macrotask (setTimeout, setInterval)."
  },
  {
    "q": 70,
    question: "¿Qué es el 'Temporal' en JavaScript (propuesta)?",
    options: [
      "Un tipo de función generadora especializada en iteración sobre secuencias temporales",
      "Una librería de terceros ampliamente adoptada para manejo de fechas en proyectos JavaScript",
      "Un mecanismo avanzado de temporización que extiende las capacidades de setInterval y setTimeout",
      "La nueva API nativa para fechas/tiempos, reemplazando Date"
    ],
    correct: 3,
    difficulty: "B",
    explanation: "Temporal es una propuesta TC39 (stage 3+) que provee una API moderna e inmutable para fechas y tiempos, reemplazando el problemático Date."
  },
  {
    "q": 71,
    question: "¿Qué diferencia hay entre <code>Map</code> y un objeto literal {}?",
    options: [
      "No hay ninguna diferencia práctica relevante entre Map y un objeto literal en JavaScript",
      "Los objetos literales son más eficientes que Map en todas las operaciones posibles siempre",
      "Map mantiene orden de inserción, acepta cualquier clave, no tiene propiedades heredadas del prototipo",
      "Map es una estructura de datos completamente inmutable que no permite modificar sus entradas"
    ],
    correct: 2,
    difficulty: "B",
    explanation: "Map garantiza orden de inserción, acepta claves de cualquier tipo, tiene mejor rendimiento en inserciones/eliminaciones frecuentes y size incorporado."
  },
  {
    "q": 72,
    question: "¿Qué es el concepto de 'debounce'?",
    options: [
      "Eliminar valores duplicados de un array manteniendo solo la primera ocurrencia de cada uno",
      "Retrasar la ejecución de una función hasta que pase un tiempo sin llamadas",
      "Un tipo especial de event listener que se registra exclusivamente en la fase de captura del DOM",
      "Una técnica de compresión de datos para reducir el tamaño de los payloads enviados al servidor"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "Debounce asegura que una función solo se ejecute después de que hayan pasado N ms sin llamarla de nuevo. Ideal para inputs de búsqueda."
  },
  {
    "q": 73,
    question: "¿Qué hace <code>Atomics.wait()</code>?",
    options: [
      "Bloquea el hilo hasta que una posición de SharedArrayBuffer cambie",
      "Espera a que una Promise sea resuelta o rechazada antes de continuar la ejecución del código",
      "Espera a que se dispare un evento específico del DOM sobre un elemento del árbol de nodos",
      "Pausa el hilo de ejecución principal durante un número exacto de milisegundos especificado"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "Atomics.wait() bloquea el hilo (disponible en Workers) esperando que una posición en SharedArrayBuffer sea notificada."
  },
  {
    "q": 74,
    question: "¿Qué es el 'optional catch binding' en ES2019?",
    options: [
      "Una forma especial de try-catch diseñada exclusivamente para manejar errores en código async",
      "Omitir el parámetro del catch cuando no se necesita: catch {}",
      "Una cláusula catch que solo captura errores de tipo TypeError o ReferenceError específicamente",
      "Capturar solo ciertos tipos de errores opcionales filtrándolos por la propiedad message del error"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "ES2019 permite omitir el parámetro en catch: try { ... } catch { ... } sin declarar la variable de error."
  },
  {
    "q": 75,
    question: "¿Cómo se implementa la composición funcional en JS?",
    options: [
      "Usando herencia de clases para extender funcionalidades de una clase base ya definida",
      "Con el patrón Factory para crear objetos que encapsulan una lógica de construcción compleja",
      "Usando mixins para combinar múltiples comportamientos en una sola clase compuesta nueva",
      "Combinando funciones donde la salida de una es la entrada de otra"
    ],
    correct: 3,
    difficulty: "B",
    explanation: "Composición: const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x). Pipe es la variante de izquierda a derecha."
  },
  {
    "q": 76,
    question: "¿Qué es el operador lógico de asignación <code>&&=</code>?",
    options: [
      "Es un error de sintaxis que el parser de JavaScript no puede reconocer ni procesar",
      "Asigna el valor derecho si el operando izquierdo evalúa a cualquier valor falsy conocido",
      "Siempre realiza la asignación del valor derecho independientemente del operando izquierdo",
      "Asigna si el valor izquierdo es truthy"
    ],
    correct: 3,
    difficulty: "B",
    explanation: "x &&= y es equivalente a: if (x) x = y. Asigna y a x solo si x es truthy."
  },
  {
    "q": 77,
    question: "¿Qué hace <code>Object.entries(obj)</code>?",
    options: [
      "Retorna únicamente las claves enumerables del objeto como un array de strings ordenado",
      "Retorna array de pares [clave, valor]",
      "Retorna solo los valores de las propiedades propias y enumerables como un array nuevo",
      "Crea una copia plana del objeto fusionando todas sus propiedades en un nuevo objeto vacío"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "Object.entries() retorna un array de arrays [key, value] de las propiedades propias enumerables del objeto."
  },
  {
    "q": 78,
    question: "¿Qué es el patrón 'Singleton' en JavaScript?",
    options: [
      "Una clase que solo permite una instancia",
      "Un array con un único elemento que contiene el estado centralizado de la aplicación",
      "Una función diseñada para ser llamada una única vez mediante un flag booleano interno",
      "Un módulo que exporta una única función o valor como interfaz pública simplificada"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "Singleton asegura que solo exista una instancia de una clase. En JS se implementa con módulos (que son singletons por naturaleza)."
  },
  {
    "q": 79,
    question: "¿Qué hace <code>performance.now()</code>?",
    options: [
      "Retorna un timestamp de alta resolución en milisegundos desde el inicio de la navegación",
      "Mide el porcentaje de uso de CPU del proceso actual en microsegundos desde su inicio",
      "Retorna la fecha y hora actuales en formato ISO 8601 incluyendo la zona horaria local",
      "Retorna el timestamp Unix en segundos enteros transcurridos desde el 1 de enero de 1970"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "performance.now() retorna un DOMHighResTimeStamp en milisegundos con resolución de microsegundos, útil para benchmarking."
  },
  {
    "q": 80,
    question: "¿Qué son los Iterators y el protocolo iterable en JS?",
    options: [
      "Objetos que implementan Symbol.iterator y retornan {value, done} vía next()",
      "Una versión especializada de Array con métodos adicionales para iteración avanzada de datos",
      "Una sintaxis especial del bucle for diseñada exclusivamente para iterar sobre colecciones",
      "Los generadores son los únicos objetos que implementan el protocolo de iteración en JS"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "El protocolo iterable requiere Symbol.iterator que retorna un iterador con método next() que retorna {value, done}. for...of usa este protocolo."
  },
  {
    "q": 81,
    question: "¿Qué es el concepto de 'tail call optimization' (TCO) en JS?",
    options: [
      "Optimizar el procesamiento del último argumento para evitar copias innecesarias en memoria",
      "Reutilizar el stack frame cuando la llamada recursiva es la última operación",
      "Transformar callbacks anidados en cadenas de promesas para mejorar la legibilidad del código",
      "Un tipo especializado de recolección de basura diseñado para funciones de vida muy corta"
    ],
    correct: 1,
    difficulty: "A",
    explanation: "TCO permite que llamadas recursivas en posición de cola reutilicen el stack frame actual, evitando stack overflow. ES6 especifica TCO pero solo Safari lo implementa completamente."
  },
  {
    "q": 82,
    question: "¿Cómo funciona el algoritmo de coerción de tipos en JavaScript?",
    options: [
      "Solo convierte entre los tipos number y string usando reglas implícitas del motor JS",
      "No existe ningún algoritmo definido y cada motor JS lo implementa de forma completamente arbitraria",
      "Cada motor de JavaScript define sus propias reglas de coerción de forma completamente independiente",
      "Usa ToPrimitive, ToNumber, ToString, ToBoolean según las operaciones abstractas del spec"
    ],
    correct: 3,
    difficulty: "A",
    explanation: "JS define operaciones abstractas (ToPrimitive, ToNumber, etc.) en la especificación ECMAScript que gobiernan la coerción."
  },
  {
    "q": 83,
    question: "¿Qué es el concepto de 'realm' en JavaScript?",
    options: [
      "Un scope especial creado por los módulos ES6 para aislar completamente sus variables internas",
      "Un entorno de ejecución con su propio conjunto de objetos built-in, globals y intrínsecos",
      "Un namespace de variables compartido entre todos los módulos cargados en la misma aplicación",
      "Un tipo especializado de Web Worker con acceso controlado y limitado al árbol DOM principal"
    ],
    correct: 1,
    difficulty: "A",
    explanation: "Un realm es un conjunto de built-ins y global object. Un iframe tiene su propio realm, por eso [] instanceof Array puede ser false entre frames."
  },
  {
    "q": 84,
    question: "¿Qué hace <code>FinalizationRegistry</code>?",
    options: [
      "Registra los errores fatales no capturados para ser procesados antes del cierre del proceso",
      "Permite ejecutar callbacks cuando objetos son garbage collected",
      "Libera explícitamente la memoria ocupada por un objeto marcándolo como disponible para GC",
      "Monitorea el uso del heap de memoria y emite eventos de alerta al superar umbrales definidos"
    ],
    correct: 1,
    difficulty: "A",
    explanation: "FinalizationRegistry permite registrar callbacks que se ejecutan después de que un objeto es recolectado por el GC."
  },
  {
    "q": 85,
    question: "¿Cuál es la diferencia entre <code>Promise.allSettled()</code> y <code>Promise.all()</code>?",
    options: [
      "all retorna más datos porque incluye el estado detallado de cada promesa individualmente",
      "allSettled es significativamente más lento porque procesa información adicional en cada promesa",
      "allSettled espera a todas sin importar si fallan; all rechaza con el primer error",
      "Son completamente equivalentes en comportamiento y solo difieren en el nombre del método"
    ],
    correct: 2,
    difficulty: "A",
    explanation: "Promise.allSettled() siempre resuelve con array de {status, value/reason} para todas. Promise.all() rechaza con el primer error."
  },
  {
    "q": 86,
    question: "¿Qué son los 'Private class fields' con # en ES2022?",
    options: [
      "Una forma de marcar propiedades como opcionales en el esquema de la clase definida",
      "Propiedades verdaderamente privadas de clases, inaccesibles fuera de la clase",
      "Una convención de nomenclatura para indicar propiedades que no deben modificarse externamente",
      "Son equivalentes a usar WeakMap como almacenamiento privado asociado a las instancias de la clase"
    ],
    correct: 1,
    difficulty: "A",
    explanation: "Los campos privados con # (#nombre) son encapsulación real a nivel de motor, no solo convención. Acceder a ellos fuera de la clase lanza un SyntaxError."
  },
  {
    "q": 87,
    question: "¿Qué es el 'Speculation Rules API'?",
    options: [
      "Una API de Web Workers para ejecutar tareas de cómputo especulativas en hilos paralelos",
      "Una interfaz de aprendizaje automático para predecir el comportamiento de navegación del usuario",
      "Un método de cifrado preventivo para proteger los datos sensibles del usuario en tránsito",
      "API para declarativamente precargar/prerenderizar páginas para mejorar navegación"
    ],
    correct: 3,
    difficulty: "A",
    explanation: "Speculation Rules API permite al navegador precargar o prerenderizar páginas de forma declarativa, mejorando drasticamente los tiempos de navegación."
  },
  {
    "q": 88,
    question: "¿Cómo se implementa un Observable desde cero en JavaScript?",
    options: [
      "Creando un objeto con subscribe(observer) que llama a next/error/complete",
      "Extendiendo la clase Promise para añadir los métodos subscribe, next y unsubscribe custom",
      "Con generadores async que emiten valores de forma continua usando yield dentro de un bucle",
      "Usando EventEmitter como clase base y adaptando su interfaz al estándar de Observable propuesto"
    ],
    correct: 0,
    difficulty: "A",
    explanation: "Un Observable básico tiene subscribe(observer) donde observer = {next, error, complete}. RxJS implementa la especificación Observable."
  },
  {
    "q": 89,
    question: "¿Qué es el concepto de 'structural sharing' en inmutabilidad?",
    options: [
      "Copiar completamente toda la estructura de datos de forma profunda para evitar mutaciones",
      "Crear una copia superficial de un objeto compartiendo referencias a todos los objetos anidados",
      "Compartir regiones de memoria entre Web Workers para evitar la serialización de los mensajes",
      "Reutilizar partes no cambiadas de estructuras de datos al crear nuevas versiones"
    ],
    correct: 3,
    difficulty: "A",
    explanation: "Structural sharing (ej: Immer, Immutable.js) reutiliza subárboles no modificados al crear nuevas versiones de estructuras, haciendo la inmutabilidad eficiente."
  },
  {
    "q": 90,
    question: "¿Qué diferencia hay entre <code>import()</code> dinámico y <code>import</code> estático?",
    options: [
      "Solo import() dinámico puede usar variables como especificador en el path del módulo",
      "import() dinámico carga módulos bajo demanda retornando Promise; import estático es en tiempo de parsing",
      "import() dinámico tiene menor rendimiento porque evalúa la expresión en cada invocación",
      "Son equivalentes en comportamiento pero con diferente sintaxis según el contexto de uso"
    ],
    correct: 1,
    difficulty: "A",
    explanation: "import() dinámico permite lazy loading de módulos, code splitting, e imports condicionales. El import estático se analiza en compile time."
  },
  {
    "q": 91,
    question: "¿Qué es el 'Compartment' en la propuesta de TC39?",
    options: [
      "Una división lógica de la memoria heap para aislar objetos pertenecientes a distintos orígenes",
      "Una partición del árbol DOM que encapsula completamente el estado de un componente web",
      "Un mecanismo para crear realms aislados con módulos controlados, para sandboxing seguro",
      "Una forma de compartir referencias entre Web Workers sin necesidad de serializar los mensajes"
    ],
    correct: 2,
    difficulty: "S",
    explanation: "TC39 Compartment Proposal permite crear realms aislados con módulos controlados, siendo la base para sandboxing seguro de código JS de terceros."
  },
  {
    "q": 92,
    question: "¿Qué hace el algoritmo SameValueZero que usa <code>Map</code> y <code>Set</code>?",
    options: [
      "Trata +0 y -0 como iguales (diferente a SameValue), pero NaN === NaN",
      "Es idéntico al algoritmo de igualdad abstracta == con todas sus reglas de coerción implícita",
      "Solo puede comparar tipos primitivos y lanza TypeError al intentar comparar objetos entre sí",
      "Usa estrictamente === sin ninguna diferencia en el tratamiento especial de NaN o los ceros"
    ],
    correct: 0,
    difficulty: "S",
    explanation: "SameValueZero: +0 === -0 (a diferencia de Object.is) pero NaN === NaN (a diferencia de ===). Usado en Map, Set, includes, findIndex."
  },
  {
    "q": 93,
    question: "¿Cómo funciona el 'hidden class' (shape) en V8?",
    options: [
      "Una representación interna de la estructura de objeto para optimizar acceso a propiedades",
      "Una clase CSS que el motor aplica internamente para optimizar el rendimiento del renderizado",
      "Una clase JavaScript declarada con # que no es accesible desde fuera del módulo donde vive",
      "El prototipo interno oculto que conecta los objetos JS con su cadena de herencia prototipal"
    ],
    correct: 0,
    difficulty: "S",
    explanation: "V8 crea hidden classes (shapes/maps internos) para objetos con la misma estructura, permitiendo acceso a propiedades en O(1). Cambiar el orden de asignación crea shapes diferentes, degradando rendimiento."
  },
  {
    "q": 94,
    question: "¿Qué es 'speculative optimization' en motores JS?",
    options: [
      "JIT compila código asumiendo ciertos tipos, y deoptimiza si la suposición falla",
      "Optimización especulativa del uso de memoria mediante compactación preventiva del heap V8",
      "Optimización aplicada en la fase de parsing del código antes de que comience su ejecución",
      "Una forma de eliminar código exportado pero no utilizado antes de distribuir en producción"
    ],
    correct: 0,
    difficulty: "S",
    explanation: "JIT compilers especulan sobre tipos de variables. Si la suposición es correcta (monomorphic path), el código es muy rápido. Si falla, se produce deoptimización."
  },
  {
    "q": 95,
    question: "¿Qué es el 'Pattern Matching' en la propuesta TC39 (stage 2)?",
    options: [
      "Un tipo de Proxy que intercepta operaciones de desestructuración en objetos profundamente anidados",
      "Una extensión de la sintaxis de regex para capturar patrones de texto más complejos y expresivos",
      "Sintaxis match para desestructuración + prueba de patrones, más poderosa que switch",
      "Un método estático de String para comparar cadenas según patrones de formato predefinidos"
    ],
    correct: 2,
    difficulty: "S",
    explanation: "TC39 Pattern Matching propone sintaxis match(value) { when Pattern: expression } que combina desestructuración, guards y exhaustividad."
  },
  {
    "q": 96,
    question: "¿Qué son los 'Records and Tuples' en la propuesta TC39?",
    options: [
      "Tipos de datos nativos de WebAssembly para interoperar eficientemente con JavaScript",
      "Tipos de datos importados desde TypeScript que amplían el sistema de tipos de JavaScript estándar",
      "Una propuesta que fue rechazada por TC39 debido a problemas de compatibilidad con objetos existentes",
      "Primitivos inmutables para objetos (#{ }) y arrays (#[ ]) con igualdad por valor"
    ],
    correct: 3,
    difficulty: "S",
    explanation: "Records (#{ key: value }) y Tuples (#[1,2,3]) son primitivos inmutables con comparación por valor. Son la versión primitiva de objetos y arrays."
  },
  {
    "q": 97,
    question: "¿Qué es el método <code>using</code> y 'Explicit Resource Management' (TC39 stage 3)?",
    options: [
      "Una directiva de módulo que controla la forma en que se resuelven las importaciones del archivo",
      "Un alias de const que aplica congelamiento automático al valor asignado en la declaración del bloque",
      "Declaración que ejecuta Symbol.dispose al salir del scope, para gestión determinista de recursos",
      "Una forma alternativa de import que carga módulos de forma sincrónica en el scope de función actual"
    ],
    correct: 2,
    difficulty: "S",
    explanation: "using x = resource ejecuta automáticamente x[Symbol.dispose]() al salir del bloque, similar a using en C# o with en Python."
  },
  {
    "q": 98,
    question: "¿Cómo funciona 'Inline Caches' (IC) en motores JS?",
    options: [
      "Un caché HTTP que almacena respuestas del servidor para reutilizarlas en peticiones posteriores",
      "Un caché de localStorage que persiste datos estructurados entre sesiones del navegador del usuario",
      "Una optimización de closures que almacena las variables capturadas del scope léxico en registros",
      "Un mecanismo JIT que cachea el resultado de lookups de propiedades para el mismo shape de objeto"
    ],
    correct: 3,
    difficulty: "S",
    explanation: "ICs monomorphic (mismo shape siempre) son los más rápidos. Polymorphic (pocos shapes) son más lentos. Megamorphic (muchos shapes) desactiva la optimización."
  },
  {
    "q": 99,
    question: "¿Qué es el 'module graph' y cómo lo procesa el motor JavaScript?",
    options: [
      "Un patrón de importación circular donde los módulos se referencian mutuamente sin resolver",
      "Una herramienta de bundling que analiza y optimiza automáticamente el grafo de dependencias",
      "El grafo de módulos ES se construye estáticamente, se instancia y evalúa en un proceso de 3 fases (parse, link, evaluate)",
      "Una representación visual de las dependencias de módulos generada por las herramientas de build"
    ],
    correct: 2,
    difficulty: "S",
    explanation: "ES modules tienen 3 fases: 1) Construcción (parse y descarga), 2) Instantiation (enlaza exports/imports), 3) Evaluation (ejecuta código). Los imports circulares se manejan con live bindings."
  },
  {
    "q": 100,
    question: "¿Qué es el concepto de 'type-directed optimization' en motores JS modernos?",
    options: [
      "Solo aplica a los tipos primitivos como number y string ignorando completamente los objetos",
      "Integración directa de TypeScript en el motor para verificar la corrección de tipos en ejecución",
      "Optimizaciones del JIT basadas en tipos observados en runtime, incluyendo escape analysis, inlining e integer boxing",
      "Inferencia de tipos estática que se aplica durante el análisis del código fuente antes de ejecutarlo"
    ],
    correct: 2,
    difficulty: "S",
    explanation: "Los motores modernos observan tipos en runtime y aplican optimizaciones como: escape analysis (objetos en stack), integer boxing, function inlining, y representaciones internas especializadas (Smi, HeapNumber)."
  },
  {
    "q": 101,
    question: "¿Qué es <code>globalThis</code> en JavaScript?",
    options: [
      "La propiedad self que referencia el scope global exclusivamente en contextos de Web Workers",
      "La variable global de Node.js que equivale a window en el entorno del servidor JavaScript",
      "El objeto global independientemente del entorno (browser, Node, Worker)",
      "La propiedad window que siempre apunta al objeto global en cualquier entorno de JavaScript"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "globalThis provee una forma estándar de acceder al objeto global en cualquier entorno JavaScript."
  },
  {
    "q": 102,
    question: "¿Qué retorna <code>[...'hello']</code>?",
    options: [
      "Produce el mismo resultado que invocar el método split() usando un espacio como separador",
      "Lanza un TypeError porque el operador spread no es compatible con valores de tipo string primitivo",
      "Genera un array con un único elemento que contiene el string completo sin ninguna división",
      "['h','e','l','l','o']"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "El spread operator sobre un string crea un array de caracteres Unicode."
  },
  {
    "q": 103,
    question: "¿Qué hace <code>Array.from({length: 3}, (_, i) => i)</code>?",
    options: [
      "[undefined,undefined,undefined]",
      "[0,1,2]",
      "[1,2,3]",
      "Error"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "Array.from con objeto array-like y función de mapeo genera [0,1,2]."
  },
  {
    "q": 104,
    question: "¿Qué es 'tree shaking'?",
    options: [
      "Eliminar código muerto (no usado) durante el bundling",
      "Animar los nodos del árbol de componentes en frameworks declarativos como React o Vue",
      "Un tipo de recolección de basura que elimina las ramas inactivas del árbol de prototipos",
      "Un método del prototipo Array que elimina elementos en posiciones específicas del array"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "Tree shaking analiza imports estáticos para eliminar exports no utilizados, reduciendo el bundle size."
  },
  {
    "q": 105,
    question: "¿Qué hace <code>String.raw</code>?",
    options: [
      "Template tag que retorna el string sin procesar secuencias de escape",
      "Codifica los caracteres especiales de una URL para que sea válida para transmisión HTTP",
      "Convierte todos los caracteres del string a su equivalente en minúsculas según Unicode",
      "Elimina las etiquetas HTML de un string y retorna únicamente el contenido de texto plano"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "String.raw es un tagged template que retorna el string crudo sin procesar escapes como \\n."
  },
  {
    "q": 106,
    question: "¿Qué es el método <code>findLast()</code> de Array (ES2023)?",
    options: [
      "No existe en el estándar ECMAScript y lanza ReferenceError al ser invocado en runtime",
      "Retorna el último elemento del array sin verificar ninguna condición de búsqueda previa",
      "Es idéntico a find() en comportamiento pero opera sobre arrays que están previamente ordenados",
      "Busca desde el final y retorna el primer elemento que cumple la condición"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "findLast() busca desde el final del array y retorna el primer elemento que cumple el predicado."
  },
  {
    "q": 107,
    question: "¿Qué es <code>Object.hasOwn(obj, key)</code> (ES2022)?",
    options: [
      "Verifica si obj tiene la propiedad propia key; es más seguro que hasOwnProperty",
      "Funciona exactamente igual que hasOwnProperty sin ninguna diferencia de comportamiento práctica",
      "Solo funciona correctamente con claves de tipo string y falla silenciosamente con Symbols",
      "Verifica si la propiedad existe en el prototipo del objeto en lugar de en el propio objeto"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "Object.hasOwn() es el reemplazo recomendado para hasOwnProperty, más seguro porque no puede ser sobreescrito."
  },
  {
    "q": 108,
    question: "¿Qué hace <code>Array.prototype.toSorted()</code> (ES2023)?",
    options: [
      "Retorna un nuevo array ordenado sin modificar el original",
      "Funciona únicamente con arrays de valores numéricos y falla con strings u objetos mixtos",
      "Ordena el array original directamente en su lugar y retorna la misma referencia del array",
      "Es idéntico al método sort() en todos sus aspectos de comportamiento y rendimiento interno"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "toSorted() es la versión inmutable de sort(), retorna nuevo array sin mutar el original (junto con toReversed, toSpliced, with)."
  },
  {
    "q": 109,
    question: "¿Qué es el 'Error cause' en ES2022?",
    options: [
      "La opción { cause } en el constructor de Error para encadenar errores",
      "La propiedad message del objeto Error que contiene la descripción textual del error producido",
      "La propiedad stack del objeto Error que contiene la traza completa de llamadas del error",
      "Un tipo específico de Error para clasificar errores según su origen en el módulo de la aplicación"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "new Error('mensaje', { cause: errorOriginal }) permite encadenar errores manteniendo el contexto del error original."
  },
  {
    "q": 110,
    question: "¿Qué hace el método <code>at()</code> con índice negativo?",
    options: [
      "Retorna el valor numérico 0 cuando el índice negativo supera la longitud total del array",
      "Retorna undefined si el valor absoluto del índice negativo supera la longitud del array",
      "Cuenta desde el final: -1 es el último elemento",
      "Lanza un RangeError cuando se proporciona un índice negativo que está fuera del rango"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "arr.at(-1) retorna el último elemento, at(-2) el penúltimo, etc. Es equivalente a arr[arr.length-1]."
  },
  {
    "q": 111,
    question: "¿Qué es el patrón 'Pub/Sub' vs 'Observer'?",
    options: [
      "Son equivalentes porque ambos patrones notifican directamente a sus suscriptores inscritos",
      "Pub/Sub tiene canal intermediario; Observer el sujeto notifica directamente",
      "Observer se usa exclusivamente para gestionar eventos del DOM en el contexto del navegador",
      "Pub/Sub se utiliza únicamente para comunicación entre Web Workers del mismo origen compartido"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "Observer: sujeto notifica directamente. Pub/Sub: publishers y subscribers no se conocen, van a través de un message broker."
  },
  {
    "q": 112,
    question: "¿Qué hace <code>String.prototype.replaceAll()</code> (ES2021)?",
    options: [
      "Solo funciona con strings literales exactos y lanza TypeError si recibe una expresión regular",
      "Reemplaza únicamente la primera ocurrencia del patrón de búsqueda en el string original dado",
      "Reemplaza todas las ocurrencias sin necesitar regex con /g",
      "Es idéntico a replace() cuando se le pasa una expresión regular con el flag global /g activo"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "replaceAll() reemplaza todas las coincidencias del string sin necesitar el flag /g en un regex."
  },
  {
    "q": 113,
    question: "¿Qué es <code>Promise.any()</code> (ES2021)?",
    options: [
      "Es idéntico a Promise.race() porque ambos métodos retornan la primera promesa que completa",
      "Se resuelve únicamente cuando todas las promesas del array se resuelven de forma exitosa",
      "Cancela todas las promesas que aún están pendientes cuando una de ellas es rechazada",
      "Se resuelve con la primera Promise exitosa; solo rechaza si todas fallan"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "Promise.any() retorna la primera promesa que se resuelve exitosamente. Solo rechaza (AggregateError) si TODAS fallan."
  },
  {
    "q": 114,
    question: "¿Qué son los 'logical assignment operators' de ES2021?",
    options: [
      "Son formas alternativas y más compactas de escribir operadores ternarios anidados en JS",
      "Son características exclusivas del lenguaje TypeScript que no existen en JavaScript estándar",
      "&&=, ||=, ??= que combinan operación lógica con asignación",
      "Son los operadores lógicos básicos && || ?? sin ningún tipo de capacidad de asignación"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "&&= (asigna si truthy), ||= (asigna si falsy), ??= (asigna si null/undefined). Son operadores compuestos."
  },
  {
    "q": 115,
    question: "¿Qué hace <code>Object.fromEntries()</code>?",
    options: [
      "Serializa un objeto",
      "Congela las entradas del objeto para hacerlo completamente inmutable de forma superficial",
      "Transforma array de pares [key, value] en objeto; inverso de Object.entries()",
      "Crea un array de entradas desde un objeto de la misma forma en que lo hace Object.entries()"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "Object.fromEntries(map/iterable) transforma una lista de pares key-value en un objeto. Inverso de Object.entries()."
  },
  {
    "q": 116,
    question: "¿Qué es WeakRef en JavaScript (ES2021)?",
    options: [
      "Un tipo de closure especializado que mantiene referencias débiles a sus variables capturadas",
      "Una referencia débil a tipos primitivos como number o string para optimizar el uso de memoria",
      "Un alias simplificado del método WeakMap.get() para acceder a los valores almacenados",
      "Una referencia a un objeto que no previene su garbage collection"
    ],
    correct: 3,
    difficulty: "B",
    explanation: "WeakRef mantiene una referencia débil a un objeto: no previene que sea recolectado por el GC. Se accede con deref()."
  },
  {
    "q": 117,
    question: "¿Cuándo usar un <code>Set</code> en lugar de un Array?",
    options: [
      "Set debe usarse en todos los casos porque tiene mejor rendimiento en cualquier operación",
      "Cuando el orden de los elementos es importante para la lógica de la aplicación desarrollada",
      "Set tiene siempre menor rendimiento que Array en todas las operaciones de búsqueda y acceso",
      "Cuando necesitas unicidad de valores y operaciones de conjunto O(1)"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "Set garantiza unicidad, tiene O(1) para has/add/delete, y permite operaciones de conjunto (intersección, diferencia) eficientemente."
  },
  {
    "q": 118,
    question: "¿Qué es el método <code>group()</code> / <code>Object.groupBy()</code> (ES2024)?",
    options: [
      "Agrupa elementos de un iterable según una clave retornada por la función",
      "Agrupa los strings de un array por su longitud en arrays separados identificados por clave",
      "Une todos los arrays anidados en un único array plano ordenado alfanuméricamente por clave",
      "Ordena los elementos del iterable en categorías usando la comparación del valor retornado por fn"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "Object.groupBy(iterable, fn) agrupa los elementos en un objeto usando la clave retornada por fn para cada elemento."
  },
  {
    "q": 119,
    question: "¿Qué hace el método <code>flatMap()</code>?",
    options: [
      "Aplana y mapea en una sola operación, equivalente a map().flat(1)",
      "map() seguido de flat(Infinity) para aplanar arrays anidados a cualquier nivel de profundidad",
      "Solo aplana el array un nivel sin aplicar ninguna transformación a los elementos contenidos",
      "Mapea los elementos aplicando la función callback a profundidad infinita en arrays anidados"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "flatMap() es map() seguido de flat(1). Útil para mapeos que pueden retornar arrays."
  },
  {
    "q": 120,
    question: "¿Qué es el 'Abstract Equality Comparison' en la spec ECMAScript?",
    options: [
      "El algoritmo que define la igualdad estricta === sin ningún tipo de coerción de tipos implícita",
      "El algoritmo de == que define reglas de coerción de tipos entre distintas combinaciones",
      "La comparación especial de NaN consigo mismo que siempre retorna false en todos los operadores",
      "Un comparador de objetos que verifica la igualdad por referencia en memoria en lugar de por valor"
    ],
    correct: 1,
    difficulty: "S",
    explanation: "La Abstract Equality Comparison define reglas específicas: null==undefined es true, string==number convierte string a número, object==primitive llama ToPrimitive, etc."
  },
  {
    "q": 121,
    question: "¿Qué es <code>eval()</code> y por qué evitarlo?",
    options: [
      "Es un alias directo de Function() que compila y ejecuta el código recibido como string JS",
      "Ejecuta código JS desde un string; evitar por seguridad (XSS), rendimiento y scope leak",
      "Evalúa únicamente expresiones matemáticas simples y retorna NaN para expresiones no numéricas",
      "Solo puede ejecutar código JSON válido y lanza SyntaxError para cualquier otro tipo de código"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "eval() ejecuta código JS de un string en el scope actual. Es un vector de XSS, impide optimizaciones JIT y puede modificar variables locales."
  },
  {
    "q": 122,
    question: "¿Qué hace <code>Function.prototype.toString()</code>?",
    options: [
      "Retorna el código fuente de la función como string",
      "Convierte el valor de this a string usando el método toString heredado del prototipo Object",
      "Convierte a string el valor que retorna la función al ser invocada sin ningún argumento",
      "Invoca el método toString sobre el valor de retorno de la función en el momento de ejecución"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "Function.prototype.toString() retorna el código fuente de la función incluyendo la firma. Útil para serialización y debugging."
  },
  {
    "q": 123,
    question: "¿Qué son los 'accessor properties' vs 'data properties'?",
    options: [
      "Accessor tiene get/set; data tiene value/writable",
      "Son equivalentes porque ambas almacenan simultáneamente el valor y las funciones get y set",
      "Las accessor properties solo pueden definirse en elementos de tipo Array en JavaScript nativo",
      "Las data properties tienen mayor sobrecarga de memoria que las accessor properties definidas"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "Data properties tienen value y writable. Accessor properties tienen get y/o set y no tienen value. Se definen con Object.defineProperty."
  },
  {
    "q": 124,
    question: "¿Cómo se hace un 'deep equal' en JavaScript nativo?",
    options: [
      "Con el método deepEqual() disponible en el prototipo de Object en todos los entornos JS",
      "Con el operador === que compara automáticamente los valores internos de los objetos dados",
      "No hay built-in; se usa JSON.stringify (con limitaciones) o implementación recursiva",
      "Con Object.is() que compara de forma recursiva todas las propiedades anidadas del objeto"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "JS no tiene deep equal nativo. JSON.stringify funciona para datos serializables pero falla con funciones, undefined, Symbol, ciclos."
  },
  {
    "q": 125,
    question: "¿Qué es el método <code>with()</code> en arrays (ES2023)?",
    options: [
      "Retorna nuevo array con un elemento reemplazado en el índice dado; versión inmutable de asignación por índice",
      "Usa la declaración with del lenguaje para modificar el scope del bloque temporalmente",
      "Filtra el array retornando solo los elementos que no se encuentran en el índice especificado",
      "Une el array con otro insertando sus elementos a partir del índice proporcionado como argumento"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "arr.with(index, value) retorna un nuevo array con el elemento en index reemplazado, sin mutar el original."
  },
  {
    "q": 126,
    question: "¿Qué diferencia hay entre <code>for...in</code> y <code>for...of</code>?",
    options: [
      "for...in itera claves (incluye prototipo); for...of itera valores de iterables",
      "for...of itera más lento porque necesita invocar Symbol.iterator en cada ciclo del bucle",
      "for...in solo funciona con arrays y produce resultados incorrectos al usarse con objetos literales",
      "Son completamente equivalentes y cualquiera puede sustituir al otro en cualquier situación"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "for...in: itera sobre todas las claves enumerables (incluyendo prototipo). for...of: itera sobre valores de iterables usando Symbol.iterator."
  },
  {
    "q": 127,
    question: "¿Qué hace <code>Number.isFinite()</code> vs <code>isFinite()</code> global?",
    options: [
      "Son completamente equivalentes y producen el mismo resultado para cualquier tipo de input",
      "Number.isFinite no hace coerción; isFinite global convierte el argumento a número primero",
      "Number.isFinite es más lento porque realiza comprobaciones adicionales de tipo en cada llamada",
      "isFinite global está completamente obsoleto y no debe usarse en código JavaScript moderno"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "isFinite('5') → true (convierte '5' a 5). Number.isFinite('5') → false (no hay coerción)."
  },
  {
    "q": 128,
    question: "¿Qué es el 'Intl' namespace en JavaScript?",
    options: [
      "API de internacionalización nativa para formateo de números, fechas, plurales y comparación de strings",
      "Un módulo externo de Node.js para el formateo de fechas y monedas en aplicaciones de servidor",
      "Una librería de terceros ampliamente usada para manejo y formateo de fechas en zonas horarias",
      "Un tipo de template literal especializado para generar cadenas de texto con formato localizado"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "Intl provee: Intl.NumberFormat, Intl.DateTimeFormat, Intl.Collator, Intl.PluralRules para i18n sin librerías externas."
  },
  {
    "q": 129,
    question: "¿Qué hace <code>setTimeout(fn, 0)</code>?",
    options: [
      "Ejecuta fn inmediatamente en el hilo principal sin añadirla a ninguna cola de tareas pendientes",
      "Ejecuta fn en el siguiente ciclo del event loop (como macrotask)",
      "Ejecuta fn en un Worker dedicado para evitar que el hilo principal del navegador sea bloqueado",
      "Es idéntico a queueMicrotask() en que ambos añaden la función a la cola de microtasks activa"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "setTimeout(fn, 0) no ejecuta inmediatamente: pone fn en la cola de macrotasks, ejecutándose después del código síncrono actual y las microtasks pendientes."
  },
  {
    "q": 130,
    question: "¿Qué es el 'tagged template literal'?",
    options: [
      "Un tipo especial de string que solo puede contener expresiones de tipo valor primitivo JS",
      "Una plantilla HTML utilizada exclusivamente para renderizar componentes del lado del servidor",
      "Una cadena de texto con variables CSS que son evaluadas por el motor de estilos del navegador",
      "Una función que procesa un template literal, recibiendo strings y valores separados"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "El tagged template: fn`texto ${expr}` llama a fn(strings, ...values) donde strings es array de partes estáticas."
  },
  {
    "q": 131,
    question: "¿Qué hace <code>Array.prototype.copyWithin()</code>?",
    options: [
      "Copia parte del array a otra posición dentro del mismo array, mutando el original",
      "Copia todas las propiedades enumerables de otro array al array sobre el que se invoca el método",
      "Crea y retorna una copia superficial del array original sin modificar el array fuente en absoluto",
      "Rellena todo el array con el valor numérico cero desde el índice inicial hasta el final del array"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "copyWithin(target, start, end) copia elementos desde [start, end) a target dentro del mismo array, sin cambiar su longitud."
  },
  {
    "q": 132,
    question: "¿Qué es la 'event delegation'?",
    options: [
      "Un tipo de evento personalizado que encapsula datos y se dispara usando dispatchEvent() del DOM",
      "Eliminar todos los event listeners asociados a un elemento del árbol del documento a la vez",
      "Delegar el procesamiento de eventos del DOM a un Web Worker para evitar bloqueos del hilo principal",
      "Añadir un listener al padre en lugar de a cada hijo, aprovechando la propagación de eventos"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "Event delegation: en lugar de poner listeners en cada hijo, pon uno en el padre y usa event.target para identificar el elemento origen."
  },
  {
    "q": 133,
    question: "¿Qué hace <code>Proxy</code> con la trampa <code>get</code>?",
    options: [
      "Intercepta el acceso a propiedades del objeto target, permitiendo personalizar la lectura",
      "Crea propiedades nuevas en el objeto target cuando estas no existen en el objeto original base",
      "Bloquea el acceso a todas las propiedades del objeto objetivo retornando siempre undefined",
      "Solo permite leer el valor de la propiedad sin capacidad de interceptar ni modificar nada"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "La trampa get(target, property, receiver) se ejecuta cuando se accede a cualquier propiedad del proxy, permitiendo valores calculados, validaciones, etc."
  },
  {
    "q": 134,
    question: "¿Qué es el 'module federation' en el contexto de bundlers?",
    options: [
      "Una forma de lazy loading que divide el bundle y carga módulos solo cuando son requeridos",
      "Un patrón de import circular donde dos módulos se referencian mutuamente sin causar error",
      "Un plugin de Webpack que optimiza el tamaño del bundle eliminando el código duplicado encontrado",
      "Compartir módulos en tiempo de ejecución entre aplicaciones independientes"
    ],
    correct: 3,
    difficulty: "A",
    explanation: "Module Federation (Webpack 5+) permite que aplicaciones independientes compartan módulos en runtime sin recompilar, habilitando micro-frontends."
  },
  {
    "q": 135,
    question: "¿Qué hace <code>queueMicrotask</code> vs <code>Promise.resolve().then</code>?",
    options: [
      "Son exactamente iguales en su implementación interna y no existe ninguna diferencia práctica",
      "queueMicrotask() añade tareas a la cola de macrotasks de la misma forma que setTimeout con 0",
      "queueMicrotask es más directo y no crea un objeto Promise intermedio",
      "Promise.resolve().then() es más rápido porque el motor V8 tiene una ruta optimizada específica"
    ],
    correct: 2,
    difficulty: "B",
    explanation: "Ambos encolan microtasks, pero queueMicrotask es más eficiente al no crear el objeto Promise overhead."
  },
  {
    "q": 136,
    question: "¿Qué son los 'static class fields' en ES2022?",
    options: [
      "Propiedades/métodos pertenecientes a la clase misma, no a instancias",
      "Campos cuyos valores no pueden cambiar después de ser inicializados en el constructor de la clase",
      "Son automáticamente privados y completamente inaccesibles desde fuera del ámbito de la clase",
      "Son idénticos a los campos de instancia porque son asignados individualmente en cada new invocado"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "static campos son compartidos por todas las instancias (en realidad son de la clase). static #privado combina campo estático privado."
  },
  {
    "q": 137,
    question: "¿Qué hace <code>import.meta</code>?",
    options: [
      "Es una directiva de compilación que controla el modo estricto activo del módulo en cuestión",
      "Lista en un array todos los módulos que han sido importados estáticamente desde el módulo actual",
      "Importa metadatos del sistema operativo como la versión del runtime o el entorno de ejecución",
      "Objeto con metadatos del módulo actual (url, env, etc.) específicos del entorno"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "import.meta.url da la URL del módulo actual. Los entornos pueden añadir propiedades adicionales (import.meta.env en Vite, etc.)."
  },
  {
    "q": 138,
    question: "¿Qué es el 'AggregateError'?",
    options: [
      "Un error aritmético que ocurre al sumar valores numéricos que exceden el límite de BigInt",
      "Un error de red que agrupa los fallos de múltiples peticiones fetch que se ejecutaron simultáneamente",
      "Un error de sintaxis que se produce al definir un objeto literal con propiedades con nombre duplicado",
      "Un error que encapsula múltiples errores; retornado por Promise.any() cuando todas fallan"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "AggregateError es un tipo de error que contiene un array errors con múltiples errores. Promise.any() lo lanza cuando todas las promesas rechazan."
  },
  {
    "q": 139,
    question: "¿Qué es la 'Temporal Dead Zone' para <code>const</code>?",
    options: [
      "El fenómeno donde const es elevado al inicio del scope con el valor undefined asignado por defecto",
      "No aplica ningún tipo de zona de acceso restringido porque const se inicializa siempre en el momento",
      "El período entre el inicio del bloque y la declaración donde acceder a const lanza ReferenceError",
      "const no tiene TDZ porque su valor es inmutable y por tanto puede accederse antes de la declaración"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "Tanto let como const tienen TDZ. Aunque const requiere inicialización en su declaración, sigue existiendo TDZ desde el inicio del bloque."
  },
  {
    "q": 140,
    question: "¿Qué hace <code>Symbol.toPrimitive</code>?",
    options: [
      "Permite personalizar cómo un objeto se convierte a primitivo (número, string o default)",
      "Convierte el Symbol al número primitivo que representa su posición en el registro global de Symbols",
      "Convierte un string primitivo en un Symbol usando el string recibido como descripción del símbolo",
      "Es la propiedad descriptiva de un Symbol que retorna su etiqueta de descripción como string"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "obj[Symbol.toPrimitive](hint) es llamado durante la coerción de tipo. hint puede ser 'number', 'string' o 'default'."
  },
  {
    "q": 141,
    question: "¿Qué hace <code>Number.EPSILON</code>?",
    options: [
      "El número positivo de punto flotante más pequeño representable que es mayor que cero en JS",
      "El valor numérico especial que representa el cero positivo en la representación IEEE 754 de JS",
      "La diferencia entre 1 y el número de punto flotante más pequeño mayor que 1",
      "El valor especial que representa el infinito positivo en la aritmética de punto flotante de JS"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "Number.EPSILON ≈ 2.22e-16. Útil para comparar floats: Math.abs(a - b) < Number.EPSILON."
  },
  {
    "q": 142,
    question: "¿Qué es <code>self</code> en el contexto de un Web Worker?",
    options: [
      "La variable que hace referencia al scope de la función donde se está ejecutando el código actual",
      "El objeto window del documento padre disponible para acceder desde dentro del contexto Worker",
      "La referencia al objeto Worker creada desde el hilo principal para enviarle mensajes y datos",
      "El objeto global del Worker (equivalente a window en el contexto del Worker)"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "En un Worker, self (o this en scope global) es el WorkerGlobalScope. No hay acceso a window ni DOM."
  },
  {
    "q": 143,
    question: "¿Qué hace el método <code>groupBy</code> de Iterator (propuesta TC39)?",
    options: [
      "Ordena primero los elementos del iterador y luego los agrupa por el valor de clave dado",
      "Agrupa los elementos del iterador según el tipo del prototipo al que pertenece cada elemento",
      "Filtra primero los elementos del iterador y luego los agrupa según el criterio de fn dado",
      "Agrupa elementos del iterador en un Map según la clave retornada por la función"
    ],
    correct: 3,
    difficulty: "A",
    explanation: "Iterator.prototype.groupBy() (stage 2+) agrupa elementos en un Map, siendo la versión lazy de Object.groupBy para iteradores."
  },
  {
    "q": 144,
    question: "¿Qué es el 'source map' en JavaScript?",
    options: [
      "Un mapa del árbol DOM que el navegador genera internamente para optimizar búsquedas de elementos",
      "Un tipo de mapa de imports que define cómo se resuelven los especificadores de módulos en bundle",
      "Archivo que mapea código transpilado/minificado de vuelta al código fuente original",
      "El mapa interno de scope que el motor JS usa para resolver variables en el scope léxico activo"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "Los source maps (.map files) permiten a DevTools mostrar el código fuente original cuando el código en producción está minificado o transpilado."
  },
  {
    "q": 145,
    question: "¿Qué son los 'import maps' en JavaScript?",
    options: [
      "Los archivos que mapean el código minificado al código fuente original para facilitar el debug",
      "Un tipo de source map específico para módulos ES6 con soporte de mapeo de exports individuales",
      "Una configuración del compilador de TypeScript para reasignar los paths de importación del proyecto",
      "JSON que define cómo resolver specifiers de módulos sin un bundler"
    ],
    correct: 3,
    difficulty: "B",
    explanation: "Import maps permiten controlar cómo el navegador resuelve imports: {\"imports\": {\"lodash\": \"/libs/lodash.js\"}} sin necesitar bundler."
  },
  {
    "q": 146,
    question: "¿Cuál es el resultado de <code>+[]</code>?",
    options: [
      "Error",
      "0",
      "NaN",
      "[]"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "+[] → ToNumber([]) → ToPrimitive([]) → [].toString() → '' → 0. Coerción en cascada."
  },
  {
    "q": 147,
    question: "¿Qué hace <code>Array.prototype.entries()</code>?",
    options: [
      "Retorna un iterador de pares [índice, valor]",
      "Es idéntico a Object.entries() y retorna exactamente el mismo tipo y estructura de datos",
      "Retorna un iterador que contiene solo las claves numéricas del array sin incluir los valores",
      "Retorna un objeto plano con propiedades numéricas que mapean el índice al valor del elemento"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "entries() retorna un Array Iterator de pares [index, value], útil para for...of con índice."
  },
  {
    "q": 148,
    question: "¿Qué es el método <code>has()</code> en Set vs Array includes()?",
    options: [
      "has() realiza coerción de tipos implícita antes de comparar, de forma similar al operador ==",
      "Set.has() es O(1); Array.includes() es O(n)",
      "Array.includes() es más rápido que Set.has() para arrays con menos de 100 elementos totales",
      "Son completamente equivalentes en rendimiento y se pueden usar indistintamente en todo contexto"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "Set.has() usa una tabla hash, O(1). Array.includes() recorre linealmente, O(n). Para búsquedas frecuentes, Set es mucho más eficiente."
  },
  {
    "q": 149,
    question: "¿Qué es <code>document.createDocumentFragment()</code>?",
    options: [
      "Divide el HTML del documento en fragmentos para que sean cargados de manera diferida",
      "Crea un nodo de documento ligero para hacer múltiples manipulaciones DOM sin reflows intermedios",
      "Crea un elemento iframe aislado del árbol del documento principal con su propio contexto DOM",
      "Crea un Shadow DOM con modo abierto para encapsular los estilos internos de un componente web"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "DocumentFragment es un nodo de documento virtual que no es parte del árbol DOM activo. Insertar múltiples nodos a través de él causa solo un reflow."
  },
  {
    "q": 150,
    question: "¿Qué es el concepto de 'trampolining' en JS?",
    options: [
      "Un patrón de diseño reactivo donde un observable emite valores a sus suscriptores activos",
      "Un tipo de currying que aplica parcialmente una función de recursión a sus argumentos dados",
      "Técnica para hacer recursión en cola sin stack overflow usando un bucle que llama funciones mientras retornen funciones",
      "Una técnica de animación de interfaz que aplica transformaciones de rebote en transiciones CSS"
    ],
    correct: 2,
    difficulty: "A",
    explanation: "Trampolining: una función retorna otra función (thunk) en lugar de llamarla directamente. Un bucle externo ejecuta los thunks, evitando stack overflow en recursión profunda."
  },
  {
    "q": 151,
    question: "¿Qué hace <code>localStorage.setItem()</code>?",
    options: [
      "Almacena los datos en la memoria RAM del navegador perdiéndose cuando se cierra la pestaña",
      "Guarda los datos en las cookies del dominio del sitio con una fecha de expiración indefinida",
      "Almacena pares clave-valor en el almacenamiento local del navegador (persiste entre sesiones)",
      "Guarda los datos en sessionStorage que solo persiste mientras la pestaña del navegador está abierta"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "localStorage.setItem(key, value) guarda datos que persisten entre sesiones del navegador. Solo almacena strings."
  },
  {
    "q": 152,
    question: "¿Qué es <code>requestAnimationFrame()</code>?",
    options: [
      "Dispara automáticamente una animación CSS al detectar que el elemento ha sido renderizado",
      "Pausa todas las animaciones activas del documento en el frame de renderizado actual del navegador",
      "Programa un callback para ejecutarse antes del próximo repaint del navegador",
      "Es idéntico a setInterval(fn, 16) porque ambos se ejecutan aproximadamente 60 veces por segundo"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "requestAnimationFrame() sincroniza con el ciclo de renderizado del navegador (~60fps), ideal para animaciones fluidas y eficientes."
  },
  {
    "q": 153,
    question: "¿Qué hace el método <code>matchAll()</code> de String?",
    options: [
      "Verifica si el patrón tiene al menos una coincidencia en el string y retorna true o false",
      "Es idéntico al método match() y retorna exactamente el mismo array de resultados que él",
      "Busca y retorna únicamente la primera coincidencia del patrón sin continuar buscando más",
      "Retorna iterador de todas las coincidencias incluyendo grupos de captura"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "matchAll() requiere flag /g y retorna un iterador de todos los matches, cada uno con grupos de captura completos."
  },
  {
    "q": 154,
    question: "¿Qué es el 'Intersection Observer API'?",
    options: [
      "Detecta colisiones físicas y superposiciones entre elementos del DOM para interacciones de juego",
      "API para observar cuando un elemento entra/sale del viewport de forma eficiente sin scroll listeners",
      "Un tipo de Proxy especializado que intercepta el acceso a propiedades de nodos del árbol DOM",
      "Une dos objetos observer en uno para observar múltiples elementos con una sola instancia compartida"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "IntersectionObserver permite detectar cuándo un elemento entra o sale del viewport u otro elemento, ideal para lazy loading e infinite scroll."
  },
  {
    "q": 155,
    question: "¿Qué hace <code>crypto.randomUUID()</code>?",
    options: [
      "Encripta un string usando el algoritmo AES-256 y retorna el resultado codificado en hexadecimal",
      "Genera un hash SHA-256 del string de entrada usando la API de criptografía nativa del navegador",
      "Genera un número de coma flotante pseudoaleatorio criptográficamente seguro entre 0 y 1",
      "Genera un UUID v4 criptográficamente seguro"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "crypto.randomUUID() (disponible en browsers modernos y Node 14.17+) genera un UUID v4 seguro sin librerías externas."
  },
  {
    "q": 156,
    question: "¿Qué es el 'Mutation Observer API'?",
    options: [
      "API para observar cambios en el árbol DOM (atributos, texto, nodos hijos)",
      "Un tipo de Proxy que intercepta y registra las operaciones de escritura sobre propiedades del DOM",
      "Un tipo de evento especial que se dispara cuando se modifica el valor de una variable global JS",
      "Detecta mutaciones en variables primitivas cada vez que son reasignadas en el código fuente"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "MutationObserver observa cambios en el DOM: nodos añadidos/eliminados, cambios de atributos, cambios en texto. Reemplaza a los obsoletos Mutation Events."
  },
  {
    "q": 157,
    question: "¿Qué hace <code>navigator.sendBeacon()</code>?",
    options: [
      "Envía mensajes síncronos entre el hilo principal y todos los Web Workers activos del documento",
      "Envía datos al servidor mientras la página se cierra de forma fiable",
      "Hace una petición HTTP fetch normal que puede ser cancelada mediante un AbortController externo",
      "Detecta la intensidad de la señal de red del dispositivo para adaptar la calidad del contenido servido"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "sendBeacon() envía datos asíncronamente al servidor incluso cuando la página se está descargando, sin bloquear. Ideal para analytics."
  },
  {
    "q": 158,
    question: "¿Qué es el <code>Channel Messaging API</code>?",
    options: [
      "Una API especializada en el procesamiento de señales de audio digital en múltiples canales",
      "Una API para establecer conexiones WebSocket bidireccionales persistentes con un servidor externo",
      "API para comunicación bidireccional entre contextos JS usando MessageChannel y MessagePort",
      "Un tipo de BroadcastChannel que limita y protege la comunicación exclusivamente a dos contextos"
    ],
    correct: 2,
    difficulty: "B",
    explanation: "MessageChannel crea dos MessagePorts conectados. Útil para comunicación estructurada entre Workers o iframes con canales dedicados."
  },
  {
    "q": 159,
    question: "¿Qué hace <code>Object.getOwnPropertyDescriptor()</code>?",
    options: [
      "Solo retorna el valor primitivo de la propiedad sin exponer ningún metadato adicional sobre ella",
      "Verifica si la propiedad existe en el objeto dado y retorna un valor booleano como resultado",
      "Lista únicamente las propiedades heredadas del prototipo con todos sus descriptores completos",
      "Retorna el descriptor de una propiedad propia: {value, writable, enumerable, configurable} o {get, set}"
    ],
    correct: 3,
    difficulty: "B",
    explanation: "getOwnPropertyDescriptor() retorna el descriptor completo de una propiedad, mostrando si es writable, enumerable y configurable."
  },
  {
    "q": 160,
    question: "¿Qué es el método <code>Array.from()</code> con un iterable?",
    options: [
      "Crea un array desde cualquier objeto iterable o array-like",
      "Es idéntico al spread operator en todos los casos y siempre puede usarse como su reemplazo",
      "Solo funciona correctamente con arrays nativos y no acepta otros tipos de objetos iterables",
      "No acepta una función de mapeo como segundo argumento y siempre crea arrays sin transformar"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "Array.from acepta iterables (strings, Sets, Maps, NodeLists) y objetos array-like ({length: n}), con función de mapeo opcional."
  },
  {
    "q": 161,
    question: "¿Qué hace <code>structuredClone</code> con funciones?",
    options: [
      "Las serializa como strings con el código fuente de la función para preservar su lógica completa",
      "Las copia como referencias al mismo objeto función sin duplicar ni clonar su contenido interno",
      "Las ignora silenciosamente y el resultado del clone no incluye las funciones del objeto fuente",
      "Lanza DataCloneError porque las funciones no son clonables"
    ],
    correct: 3,
    difficulty: "B",
    explanation: "structuredClone() no puede clonar funciones, Symbols, WeakMaps, ni referencias al DOM. Lanza DataCloneError para estos tipos."
  },
  {
    "q": 162,
    question: "¿Qué es el patrón 'Command' en JavaScript?",
    options: [
      "Un comando de terminal que ejecuta los scripts definidos en el archivo package.json del proyecto",
      "Una función especial de CLI que parsea y procesa los argumentos de la línea de comandos del proceso",
      "Un tipo de callback que se almacena en una cola para ejecutarse al completarse una operación async",
      "Encapsula una acción como objeto, permitiendo undo/redo, colas y logging de acciones"
    ],
    correct: 3,
    difficulty: "B",
    explanation: "Command pattern: encapsula solicitudes como objetos con execute() y opcionalmente undo(). Útil para implementar historial de acciones."
  },
  {
    "q": 163,
    question: "¿Qué hace <code>Symbol.iterator</code>?",
    options: [
      "Define el método que hace un objeto iterable para for...of y el spread operator",
      "Lista todos los iteradores registrados de forma global en el entorno de ejecución actual",
      "Itera sobre todos los Symbols que existen como propiedades propias del objeto especificado",
      "Crea un nuevo Symbol cuya descripción es literalmente la cadena de texto 'iterator'"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "[Symbol.iterator]() debe retornar un objeto con next(). Al implementarlo, el objeto es iterable con for...of, spread, destructuring."
  },
  {
    "q": 164,
    question: "¿Cuál es la diferencia entre <code>Object.seal()</code> y <code>Object.freeze()</code>?",
    options: [
      "seal es exclusivo para arrays y previene que se puedan añadir o eliminar elementos del array",
      "freeze permite seguir añadiendo propiedades nuevas pero impide modificar las que ya existen",
      "Son equivalentes en comportamiento y producen el mismo resultado sobre cualquier tipo de objeto",
      "seal impide añadir/eliminar pero permite modificar valores; freeze impide todo cambio"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "Object.seal(): no añadir/eliminar propiedades pero sí modificarlas. Object.freeze(): no añadir, eliminar ni modificar (inmutable superficial)."
  },
  {
    "q": 165,
    question: "¿Qué es el 'Resize Observer API'?",
    options: [
      "Un tipo de event listener que detecta el evento resize disparado sobre el elemento en cuestión",
      "API para observar cambios en el tamaño de elementos DOM eficientemente",
      "Un tipo de MutationObserver especializado en detectar y reportar los cambios de tamaño del DOM",
      "Detecta el evento resize del objeto window que se dispara al cambiar el tamaño de la ventana"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "ResizeObserver observa cambios de tamaño de elementos DOM. Más eficiente que el evento resize de window para detectar cambios de tamaño de elementos individuales."
  },
  {
    "q": 166,
    question: "¿Qué hace <code>console.table()</code>?",
    options: [
      "Formatea un objeto JSON con indentación legible y lo muestra como texto en la consola de salida",
      "Crea un elemento de tabla HTML en el DOM del documento actual con los datos proporcionados",
      "Crea una tabla HTML y la inserta automáticamente al final del body del documento activo",
      "Muestra datos de array/objeto en formato de tabla en DevTools"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "console.table() muestra arrays de objetos o arrays multidimensionales como tabla en la consola del navegador."
  },
  {
    "q": 167,
    question: "¿Qué es la diferencia entre <code>undefined</code> y una propiedad inexistente?",
    options: [
      "Las propiedades inexistentes lanzan un ReferenceError al ser accedidas en el objeto JS",
      "Ambas retornan undefined al acceder, pero 'key' in obj es false para inexistente",
      "undefined es un valor especial que puede ser eliminado directamente del objeto con delete",
      "No existe ninguna diferencia porque ambas producen exactamente el mismo resultado en JS"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "Acceder a propiedad inexistente retorna undefined. Pero hasOwnProperty('key') o 'key' in obj distingue entre valor undefined asignado y propiedad inexistente."
  },
  {
    "q": 168,
    question: "¿Qué hace <code>Array.prototype.fill()</code>?",
    options: [
      "Llena el array únicamente con el valor numérico cero sin aceptar ningún otro valor como argumento",
      "Rellena los huecos o slots vacíos de un array disperso con el valor undefined de forma automática",
      "Rellena todos los elementos (o un rango) con un valor estático, mutando el array",
      "Crea un array nuevo de la longitud indicada inicializado con ceros sin modificar el array original"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "fill(value, start, end) rellena desde start hasta end-1 con value. Útil para inicializar arrays: new Array(5).fill(0)."
  },
  {
    "q": 169,
    question: "¿Qué es el método <code>reduceRight()</code>?",
    options: [
      "Solo puede aplicarse a arrays de strings y lanza TypeError con otros tipos de elementos dados",
      "Igual a reduce pero recorre el array de derecha a izquierda",
      "Es equivalente a llamar a reduce() después de haber aplicado reverse() al array original fuente",
      "Reduce y reversa el array simultáneamente retornando el resultado acumulado en orden invertido"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "reduceRight() aplica la función acumuladora de derecha a izquierda. Útil para composición funcional y ciertas estructuras de datos."
  },
  {
    "q": 170,
    question: "¿Qué hace <code>delete obj.prop</code>?",
    options: [
      "Lanza un TypeError cuando se intenta eliminar una propiedad que no existe en el objeto dado",
      "Asigna el valor undefined a la propiedad sin eliminarla realmente del objeto de destino",
      "Solo funciona correctamente con arrays nativos y no puede usarse con objetos literales normales",
      "Elimina la propiedad propia del objeto (solo si es configurable)"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "delete elimina la propiedad propia del objeto si es configurable. No funciona con variables, ni con propiedades no configurables."
  },
  {
    "q": 171,
    question: "¿Qué es el concepto de 'monkeypatch' en JavaScript?",
    options: [
      "Un patrón de diseño formal reconocido en el catálogo Gang of Four de patrones orientados a objetos",
      "Modificar el comportamiento de código existente (incluyendo built-ins) en tiempo de ejecución",
      "Un tipo de mock que reemplaza temporalmente las implementaciones de funciones en entornos de test",
      "Un tipo de prueba de software donde se generan entradas aleatorias para detectar errores ocultos"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "Monkeypatching es modificar objetos/prototipos (incluyendo built-ins) en runtime. Poderoso pero peligroso por colisiones y mantenimiento."
  },
  {
    "q": 172,
    question: "¿Qué hace el método <code>trimStart()</code> / <code>trimEnd()</code> de String?",
    options: [
      "Elimina espacios en blanco del inicio o del final respectivamente",
      "Es idéntico a trim() porque los tres métodos eliminan todos los espacios de ambos lados del string",
      "Elimina únicamente los caracteres de salto de línea \\n y retorno de carro \\r del texto dado",
      "Elimina del inicio o final del string los caracteres específicos pasados como argumento al método"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "trimStart() elimina espacios al inicio; trimEnd() al final. trim() elimina de ambos lados."
  },
  {
    "q": 173,
    question: "¿Qué es <code>Atomics.notify()</code>?",
    options: [
      "Emite un evento personalizado del DOM que puede ser capturado con addEventListener() estándar",
      "Envía una notificación push al dispositivo del usuario a través de la Push API del navegador web",
      "Notifica al event loop principal para que procese las macrotasks pendientes en su cola actual",
      "Despierta hilos bloqueados en Atomics.wait() en una posición del SharedArrayBuffer"
    ],
    correct: 3,
    difficulty: "S",
    explanation: "Atomics.notify(typedArray, index, count) despierta hasta 'count' hilos bloqueados en Atomics.wait() en el índice dado del SharedArrayBuffer."
  },
  {
    "q": 174,
    question: "¿Qué es el 'Paint Worklet' de CSS Houdini?",
    options: [
      "Un shader escrito en GLSL que se ejecuta directamente en la GPU para efectos visuales WebGL",
      "Un tipo de animación CSS que puede ser controlado desde JavaScript mediante requestAnimationFrame",
      "Un Web Worker dedicado exclusivamente a operaciones de pintado en un canvas offscreen independiente",
      "Una API que permite escribir JS para controlar el rendering CSS de elementos"
    ],
    correct: 3,
    difficulty: "A",
    explanation: "CSS Houdini Paint Worklet (CSS.paintWorklet.addModule) permite pintar programáticamente backgrounds, borders, etc. usando una API tipo Canvas."
  },
  {
    "q": 175,
    question: "¿Qué hace <code>navigator.locks.request()</code>?",
    options: [
      "Bloquea el teclado virtual del dispositivo móvil para impedir que el usuario lo oculte manualmente",
      "Bloquea el desplazamiento vertical de la página impidiendo que el usuario pueda hacer scroll",
      "Previene que el usuario abandone la página mostrando un diálogo de confirmación de salida",
      "API Web Locks para coordinar acceso a recursos compartidos entre tabs/workers"
    ],
    correct: 3,
    difficulty: "A",
    explanation: "Web Locks API permite que tabs/workers coordinen acceso exclusivo o compartido a recursos, similar a mutex/semáforos."
  },
  {
    "q": 176,
    question: "¿Qué es el 'CSS Custom Properties API' (CSS Variables) en JS?",
    options: [
      "Solo pueden ser usadas en hojas de estilo CSS y son completamente inaccesibles desde JavaScript",
      "Un tipo de propiedad inline que se aplica directamente mediante el atributo style del elemento HTML",
      "Un framework de preprocesado CSS que permite usar variables en Sass o Less sin soporte nativo",
      "Permite leer/modificar variables CSS desde JS con element.style.setProperty('--var', value)"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "getComputedStyle(el).getPropertyValue('--var') lee variables CSS; el.style.setProperty('--var', value) las modifica dinámicamente."
  },
  {
    "q": 177,
    question: "¿Qué hace <code>window.history.pushState()</code>?",
    options: [
      "Añade una entrada al historial del navegador sin recargar la página",
      "Recarga completamente la página actual desde el servidor con los nuevos parámetros de URL dados",
      "Redirige al usuario a otra URL realizando una navegación completa con descarga del documento nuevo",
      "Guarda el estado completo de la aplicación en localStorage para poder restaurarlo en la próxima sesión"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "pushState(state, title, url) añade entrada al historial, cambia la URL visible sin recargar. Base de los routers de SPA."
  },
  {
    "q": 178,
    question: "¿Qué es <code>CSS.supports()</code> en JavaScript?",
    options: [
      "Verifica el número total de bytes del archivo CSS cargado para detectar recursos demasiado grandes",
      "Verifica si el archivo CSS indicado en la ruta existe en el servidor y está disponible para ser cargado",
      "Comprueba si el navegador soporta una propiedad/valor CSS desde JavaScript",
      "Carga condicionalmente un archivo CSS externo según las capacidades detectadas del navegador actual"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "CSS.supports('display', 'grid') o CSS.supports('(display: grid)') retorna boolean indicando soporte del navegador."
  },
  {
    "q": 179,
    question: "¿Qué es el 'Channel Broadcast API' vs 'MessageChannel'?",
    options: [
      "MessageChannel usa WebSockets internamente para comunicar contextos de distintos dominios web",
      "Son completamente equivalentes porque ambas APIs permiten comunicar cualquier número de contextos",
      "BroadcastChannel es más seguro porque cifra criptográficamente los mensajes antes de transmitirlos",
      "BroadcastChannel emite a TODOS los contextos del mismo origen; MessageChannel es point-to-point"
    ],
    correct: 3,
    difficulty: "B",
    explanation: "BroadcastChannel: broadcast a todos los tabs/workers del mismo origen. MessageChannel: comunicación privada entre dos endpoints específicos."
  },
  {
    "q": 180,
    question: "¿Qué hace <code>performance.mark()</code>?",
    options: [
      "Resalta visualmente una línea de código específica en el panel de fuentes de las DevTools del browser",
      "Marca el texto seleccionado en el DOM usando un elemento mark HTML para destacarlo visualmente",
      "Es idéntico a console.time() y crea el mismo tipo de entrada temporal en el registro de tiempos",
      "Crea una marca de tiempo nombrada en el Performance Timeline para medición"
    ],
    correct: 3,
    difficulty: "B",
    explanation: "performance.mark('name') crea una marca en el Performance Timeline que puede verse en DevTools y medirse con performance.measure()."
  },
  {
    "q": 181,
    question: "¿Qué es el operador <code>in</code> en JavaScript?",
    options: [
      "Verifica si una propiedad (o índice) existe en un objeto o su cadena de prototipos",
      "Verifica si una variable con ese nombre existe en el scope léxico activo de la ejecución actual",
      "Solo funciona correctamente con arrays numéricos para verificar si un índice está dentro del rango",
      "Es idéntico a hasOwnProperty() y no tiene en cuenta la cadena de prototipos del objeto dado"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "'prop' in obj retorna true si prop existe en obj o en su cadena de prototipos. Diferente a hasOwnProperty que solo verifica propiedades propias."
  },
  {
    "q": 182,
    question: "¿Qué hace <code>Array.prototype.some()</code>?",
    options: [
      "Retorna el primer elemento que satisface la función de prueba en lugar de un valor booleano",
      "Retorna true si AL MENOS UN elemento pasa la condición",
      "Retorna un nuevo array con todos los elementos que superan la función de prueba proporcionada",
      "Es funcionalmente idéntico a every() pero con cortocircuito al encontrar el primer valor true"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "some() retorna true si al menos un elemento cumple el predicado. Cortocircuita al encontrar el primero."
  },
  {
    "q": 183,
    question: "¿Qué hace <code>Array.prototype.every()</code>?",
    options: [
      "Es funcionalmente idéntico a forEach() aplicando la función callback a todos los elementos del array",
      "Retorna el array original sin ningún cambio si todos sus elementos son valores truthy en JS",
      "Retorna true solo si TODOS los elementos pasan la condición",
      "Aplica la función a cada elemento del array y retorna un nuevo array con los resultados obtenidos"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "every() retorna true si todos los elementos cumplen el predicado. Cortocircuita al encontrar el primero que no cumple."
  },
  {
    "q": 184,
    question: "¿Qué es <code>Object.getPrototypeOf(obj)</code>?",
    options: [
      "Crea un nuevo objeto vacío cuyo prototipo es el objeto especificado como argumento del método",
      "Retorna el prototipo ([[Prototype]]) del objeto especificado",
      "Es equivalente a acceder a __proto__ del objeto pero ambas formas se comportan de manera idéntica",
      "Retorna la función constructora que fue usada para crear la instancia del objeto especificado"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "Object.getPrototypeOf(obj) es el método estándar para acceder al [[Prototype]] de un objeto, preferible sobre __proto__."
  },
  {
    "q": 185,
    question: "¿Qué hace el método <code>padStart()</code> en strings?",
    options: [
      "Rellena el inicio del string con caracteres hasta alcanzar la longitud indicada",
      "Añade propiedades de espaciado al elemento HTML usando directamente el atributo style del nodo",
      "Alinea el texto a la derecha del campo añadiendo espacios al inicio del string como relleno visual",
      "Elimina todos los espacios en blanco del inicio del string hasta encontrar el primer carácter"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "'5'.padStart(3, '0') → '005'. Útil para formatear números con ceros a la izquierda u otros caracteres."
  },
  {
    "q": 186,
    question: "¿Qué es el 'Web Animation API' (WAAPI)?",
    options: [
      "Un tipo especializado de requestAnimationFrame que acepta un array de keyframes y opciones JS",
      "Una librería de animaciones CSS que puede ser iniciada y detenida mediante métodos de JavaScript",
      "Las animaciones CSS tradicionales definidas exclusivamente con @keyframes y la propiedad animation",
      "API nativa para controlar animaciones programáticamente: play, pause, reverse, speed"
    ],
    correct: 3,
    difficulty: "B",
    explanation: "WAAPI: element.animate(keyframes, options) retorna un objeto Animation con play(), pause(), cancel(), reverse() y eventos."
  },
  {
    "q": 187,
    question: "¿Qué hace <code>document.querySelector()</code> vs <code>getElementById()</code>?",
    options: [
      "getElementById acepta selectores CSS completos como cadenas de texto para buscar elementos DOM",
      "querySelector solo puede seleccionar elementos por nombre de clase y no admite selectores complejos",
      "querySelector acepta cualquier selector CSS y es más versátil; getElementById es más específico y ligeramente más rápido",
      "Son completamente equivalentes en todos sus aspectos y se pueden intercambiar sin ningún efecto"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "querySelector acepta selectores CSS completos. getElementById está optimizado para IDs. Para IDs frecuentes, getElementById puede ser ligeramente más rápido."
  },
  {
    "q": 188,
    question: "¿Qué es <code>URL.createObjectURL(blob)</code>?",
    options: [
      "Descarga directamente el contenido binario del Blob al sistema de archivos local del usuario",
      "Convierte el contenido binario del Blob a un string de texto decodificado en la codificación UTF-8",
      "Crea una URL temporal del objeto URL del Blob para su uso en el navegador",
      "Crea una URL HTTP que apunta al recurso en el servidor remoto desde donde se originó el Blob"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "createObjectURL() crea una URL de tipo blob: que referencia el Blob en memoria. Debe liberarse con URL.revokeObjectURL() cuando ya no se necesite."
  },
  {
    "q": 189,
    question: "¿Qué hace el método <code>Intl.NumberFormat.format()</code>?",
    options: [
      "Es idéntico a toLocaleString() en todos sus aspectos y siempre retorna exactamente el mismo resultado",
      "Solo puede formatear números que tienen parte decimal y no admite enteros ni porcentajes como input",
      "Formatea números según locale: miles, moneda, porcentajes, unidades",
      "Solo funciona correctamente con números enteros y lanza TypeError cuando recibe valores decimales"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "new Intl.NumberFormat('es-ES', {style: 'currency', currency: 'EUR'}).format(1234.5) → '1.234,50 €'"
  },
  {
    "q": 190,
    question: "¿Qué es el 'Keyboard API' / KeyboardEvent en JavaScript?",
    options: [
      "Solo puede utilizarse dentro de elementos de formulario como input, textarea o select del DOM",
      "Eventos keydown, keyup, keypress con KeyboardEvent.key (valor), code (tecla física), modifiers",
      "Una librería externa de gestión de atajos de teclado para aplicaciones web de alta complejidad",
      "Una API especial diseñada exclusivamente para comunicarse con teclados físicos via Bluetooth"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "KeyboardEvent.key retorna el valor de la tecla ('a', 'Enter'). .code retorna la tecla física ('KeyA', 'Enter'). .key es preferido para lógica de input."
  },
  {
    "q": 191,
    question: "¿Qué hace <code>Object.defineProperty()</code>?",
    options: [
      "Define/modifica propiedades con control total: value, writable, enumerable, configurable, get, set",
      "Solo puede añadir propiedades nuevas al objeto y lanza TypeError si la propiedad ya existe",
      "Es idéntico a la asignación con el operador = y no ofrece ninguna funcionalidad adicional al código",
      "Congela automáticamente la propiedad haciéndola non-writable y non-configurable de forma siempre"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "Object.defineProperty() permite control granular sobre propiedades: hacerlas no-writable, no-enumerable, no-configurable, o añadir getters/setters."
  },
  {
    "q": 192,
    question: "¿Qué es el <code>Clipboard API</code>?",
    options: [
      "El evento paste del DOM que se dispara cuando el usuario pega contenido en un elemento editable",
      "API asíncrona para leer/escribir al portapapeles: navigator.clipboard.readText(), writeText()",
      "El evento cut/copy",
      "Una librería de JavaScript para la gestión avanzada del portapapeles con soporte cross-browser"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "navigator.clipboard.writeText(text) y readText() son la API moderna y segura para el portapapeles, requieren HTTPS y permisos."
  },
  {
    "q": 193,
    question: "¿Qué diferencia hay entre <code>window.onload</code> y <code>DOMContentLoaded</code>?",
    options: [
      "DOMContentLoaded no está disponible en versiones antiguas de Internet Explorer y requiere polyfill",
      "Son completamente equivalentes y siempre se disparan exactamente al mismo tiempo en todos los browsers",
      "DOMContentLoaded se dispara cuando el HTML está parseado; onload espera a todos los recursos (imágenes, CSS)",
      "onload siempre se dispara antes que DOMContentLoaded porque procesa el HTML con mayor prioridad"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "DOMContentLoaded: DOM listo (sin esperar imágenes/CSS). load/window.onload: todos los recursos cargados. Preferir DOMContentLoaded para manipulación del DOM."
  },
  {
    "q": 194,
    question: "¿Qué es el <code>service worker</code> en JavaScript?",
    options: [
      "Un worker especializado para tareas del sistema operativo como acceso al sistema de archivos local",
      "Un hilo dedicado a operaciones de cómputo intensivo que puede bloquear el hilo principal brevemente",
      "Un script que corre en background e intercepta peticiones de red, habilitando PWA, offline, cache",
      "Un tipo de Web Worker convencional que solo se diferencia en su nombre y registro en el navegador"
    ],
    correct: 2,
    difficulty: "B",
    explanation: "Service Workers interceptan fetch events, cachean respuestas, y permiten funcionalidad offline. Son la base de las Progressive Web Apps (PWA)."
  },
  {
    "q": 195,
    question: "¿Qué hace <code>new Map(Object.entries(obj))</code>?",
    options: [
      "Crea un Set con las claves únicas del objeto descartando completamente los valores asociados a ellas",
      "Crea un Map a partir de un objeto, con las mismas claves y valores",
      "Copia todas las propiedades del objeto en un nuevo objeto vacío usando Object.assign internamente",
      "Convierte el objeto en un string JSON compacto que puede ser enviado en el cuerpo de una petición"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "Object.entries(obj) retorna [[key1,val1],...]. El constructor de Map acepta un iterable de pares [key, value], convirtiendo el objeto a Map."
  },
  {
    "q": 196,
    question: "¿Qué es el 'Shadow DOM'?",
    options: [
      "Un modo visual oscuro del árbol DOM que se activa cuando el sistema operativo usa el tema dark",
      "Un árbol DOM encapsulado dentro de un custom element, aislado del DOM principal",
      "La representación interna del DOM antes de ser procesado y pintado por el motor de renderizado",
      "Una copia sincronizada del DOM principal que se actualiza automáticamente con el árbol DOM real"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "Shadow DOM encapsula el árbol de elementos y estilos dentro de un Web Component, previniendo colisiones de estilos y estructura con el documento principal."
  },
  {
    "q": 197,
    question: "¿Qué hace <code>element.closest(selector)</code>?",
    options: [
      "Recorre hacia arriba el DOM buscando el ancestro más cercano que coincide con el selector",
      "Encuentra el elemento cuya posición geométrica es la más próxima al centro visible del viewport",
      "Es idéntico a querySelector() porque busca el primer elemento que coincide con el selector CSS dado",
      "Encuentra el hijo directo más inmediato que coincide con el selector CSS especificado como argumento"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "closest() recorre el elemento y sus ancestros hacia arriba hasta encontrar un elemento que coincida con el selector, o retorna null."
  },
  {
    "q": 198,
    question: "¿Qué es <code>navigator.geolocation.getCurrentPosition()</code>?",
    options: [
      "Retorna la zona horaria del sistema del dispositivo en formato estándar IANA como string",
      "Retorna la dirección IP pública del usuario a través de la API de geolocalización del navegador web",
      "Solicita la posición GPS del dispositivo de forma asíncrona",
      "Detecta el país del usuario basándose en su dirección IP a través de un servicio de geolocalización"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "getCurrentPosition(success, error, options) solicita la posición geográfica del usuario, requiriendo su permiso. Retorna un objeto GeolocationPosition."
  },
  {
    "q": 199,
    question: "¿Qué es el operador <code>instanceof</code>?",
    options: [
      "Es idéntico a typeof porque ambos operadores retornan el tipo del operando como un string descriptivo",
      "Verifica si un objeto tiene en su cadena de prototipos el prototype de un constructor",
      "Verifica el tipo primitivo del valor dado sin consultar la cadena de prototipos del objeto en absoluto",
      "Solo funciona correctamente con instancias creadas mediante clases ES6 que tienen un constructor"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "obj instanceof Constructor busca Constructor.prototype en la cadena de prototipos de obj. Puede fallar entre realms distintos."
  },
  {
    "q": 200,
    question: "¿Qué hace <code>Object.is(NaN, NaN)</code>?",
    options: [
      "true (SameValue: NaN es igual a NaN, +0 no es igual a -0)",
      "false (como ===, porque NaN no es igual a nada según la aritmética estándar de IEEE)",
      "undefined (cuando se evalúa NaN con Object.is en modo no estricto del motor JavaScript)",
      "TypeError porque Object.is no puede comparar valores de tipo NaN con ningún otro valor dado"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "Object.is() implementa SameValue: NaN es igual a NaN (true), pero +0 no es igual a -0 (false). Diferente tanto de == como de ===."
  }
];
