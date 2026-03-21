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
      "!=",
      "==",
      "=",
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
      "Son iguales",
      "null es un número",
      "undefined es un objeto",
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
      "map()",
      "filter()",
      "forEach()",
      "find()"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "filter() retorna un nuevo array con todos los elementos que pasan la función de prueba."
  },
  {
    "q": 8,
    question: "¿Qué hace el método <code>push()</code> en un array?",
    options: [
      "Ordena el array",
      "Añade elementos al final",
      "Invierte el array",
      "Elimina el primer elemento"
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
      "string",
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
      "convert(str)",
      "str.toInt()",
      "parseFloat()"
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
      "x -> x*2",
      "function => x {}",
      "fn(x) => x*2"
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
      "Un error de tipo",
      "Eliminar variables no usadas",
      "Un método de array",
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
      "let no hace hoisting pero var sí hace todo",
      "var es más rápido",
      "No hay diferencia"
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
      "Un tipo de bucle",
      "Un operador ternario",
      "Un error fatal"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "Un closure es una función que retiene acceso a las variables del scope donde fue creada, incluso después de que ese scope haya terminado."
  },
  {
    "q": 24,
    question: "¿Qué hace el operador spread <code>...</code>?",
    options: [
      "Crea un objeto nuevo",
      "Expande iterables en elementos individuales",
      "Divide arrays",
      "Concatena strings"
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
      "6"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "map() aplica la función a cada elemento y retorna un nuevo array: [2,4,6]."
  },
  {
    "q": 26,
    question: "¿Qué es una Promesa (Promise) en JavaScript?",
    options: [
      "Una variable global",
      "Un tipo de bucle",
      "Un objeto que representa un valor futuro",
      "Una función sincrónica"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "Una Promise representa el resultado eventual (éxito o error) de una operación asíncrona."
  },
  {
    "q": 27,
    question: "¿Qué hace <code>Object.keys(obj)</code>?",
    options: [
      "Congela el objeto",
      "Retorna array con las claves enumerables propias del objeto",
      "Copia el objeto",
      "Borra todas las claves"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "Object.keys() retorna un array con los nombres de las propiedades propias y enumerables de un objeto."
  },
  {
    "q": 28,
    question: "¿Cuál es la diferencia entre <code>==</code> y <code>===</code>?",
    options: [
      "=== es más lento",
      "Son iguales",
      "== hace coerción de tipo; === no",
      "== compara objetos por referencia"
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
      "upper()",
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
      "Valida JSON",
      "Comprime JSON",
      "Parsea JSON"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "JSON.stringify() serializa un valor JavaScript a una cadena JSON."
  },
  {
    "q": 31,
    question: "¿Qué es el event loop en JavaScript?",
    options: [
      "Una función de timer",
      "Un tipo de bucle for",
      "El mecanismo que permite la ejecución asíncrona no bloqueante",
      "Un error de runtime"
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
      "'h','e','l','l','o'",
      "Error"
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
      "Reduce el tamaño del array a la mitad",
      "Retorna el elemento más pequeño",
      "Aplica una función acumuladora a los elementos",
      "Filtra el array"
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
      "require('mod')",
      "load('mod')",
      "include 'mod'"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "ES6 usa la sintaxis import/export para módulos estáticos."
  },
  {
    "q": 36,
    question: "¿Qué hace el operador nullish coalescing <code>??</code>?",
    options: [
      "Concatena strings",
      "Retorna el lado derecho si el izquierdo es null o undefined",
      "Niega una expresión",
      "Compara tipos"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "?? retorna el operando derecho sólo cuando el izquierdo es null o undefined (no para false o 0, a diferencia de ||)."
  },
  {
    "q": 37,
    question: "¿Qué es una IIFE en JavaScript?",
    options: [
      "Una función asíncrona",
      "Un error",
      "Una función que se invoca inmediatamente después de ser definida",
      "Un tipo de clase"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "IIFE (Immediately Invoked Function Expression) es una función que se ejecuta en el momento en que se define."
  },
  {
    "q": 38,
    question: "¿Qué método existe para hacer una copia superficial de un objeto?",
    options: [
      "obj.copy()",
      "Object.assign({}, obj)",
      "JSON.clone(obj)",
      "Object.deepCopy()"
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
      "Una cola de eventos",
      "El mecanismo de herencia basado en prototipos",
      "Un tipo de closure",
      "Un array de funciones"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "JavaScript usa herencia prototípica. Cada objeto tiene un [[Prototype]] que forma una cadena hasta null."
  },
  {
    "q": 42,
    question: "¿Qué hace <code>Object.freeze(obj)</code>?",
    options: [
      "Serializa el objeto",
      "Hace una copia del objeto",
      "Impide agregar, eliminar o modificar propiedades",
      "Optimiza el objeto"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "Object.freeze() hace un objeto inmutable: no se pueden añadir, eliminar ni cambiar sus propiedades."
  },
  {
    "q": 43,
    question: "¿Cuál es la diferencia entre <code>call()</code>, <code>apply()</code> y <code>bind()</code>?",
    options: [
      "bind es obsoleto",
      "Son lo mismo",
      "apply es más lento",
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
      "Un Map ordenado",
      "Un Map inmutable",
      "Un Map normal",
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
      "Crea un objeto global",
      "Crea un valor primitivo único e inmutable",
      "Crea un string especial",
      "Define una constante"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "Symbol() crea un valor único; dos Symbol() son siempre diferentes aunque tengan la misma descripción."
  },
  {
    "q": 46,
    question: "¿Qué es el temporal dead zone (TDZ)?",
    options: [
      "El tiempo entre dos promesas",
      "Una zona de memoria reservada",
      "El scope global de var",
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
      "Cancela promesas pendientes",
      "Ejecuta promesas secuencialmente",
      "Espera a que una promesa se resuelva"
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
      "Un tipo de herencia",
      "Un patrón donde suscriptores son notificados de cambios en un sujeto",
      "Un tipo de promesa",
      "Un algoritmo de ordenamiento"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "El patrón Observer permite que un objeto (sujeto) notifique automáticamente a múltiples objetos (observadores) sobre cambios."
  },
  {
    "q": 50,
    question: "¿Qué retorna <code>Object.create(null)</code>?",
    options: [
      "undefined",
      "null",
      "Un objeto sin prototipo",
      "Un objeto vacío con Object.prototype"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "Object.create(null) crea un objeto con [[Prototype]] = null, sin ningún método heredado."
  },
  {
    "q": 51,
    question: "¿Qué hace el generador (function*) en JavaScript?",
    options: [
      "Genera números aleatorios",
      "Crea clases dinámicamente",
      "Genera UUIDs",
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
      "Un tipo de herencia",
      "Una técnica de debugging",
      "Transformar una función de múltiples args en una secuencia de funciones de un arg",
      "Un método de array"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "Currying convierte f(a,b,c) en f(a)(b)(c). Útil para composición funcional y aplicación parcial."
  },
  {
    "q": 53,
    question: "¿Qué hace <code>async/await</code>?",
    options: [
      "Crea Workers",
      "Hace que código asíncrono se lea de forma síncrona sobre Promesas",
      "Ejecuta código en paralelo",
      "Hace código más rápido automáticamente"
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
      "forEach es más rápido",
      "No hay diferencia",
      "map modifica el original"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "forEach ejecuta efectos laterales sin retornar nada. map transforma elementos y retorna nuevo array."
  },
  {
    "q": 55,
    question: "¿Qué es el patrón Module en JavaScript?",
    options: [
      "Usar import/export solamente",
      "Un tipo de clase abstracta",
      "Un framework",
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
      "Clona el prototipo",
      "Hace una copia profunda del objeto",
      "Serializa a JSON",
      "Congela el objeto"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "structuredClone() (ES2022) crea una copia profunda del objeto usando el algoritmo de clonación estructurada."
  },
  {
    "q": 57,
    question: "¿Qué es el método <code>flat()</code> de Array?",
    options: [
      "Ordena el array",
      "Une dos arrays",
      "Filtra elementos falsy",
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
      "Una librería externa",
      "Un objeto que intercepta operaciones fundamentales sobre otro objeto",
      "Un patrón de diseño externo",
      "Un método de red"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "Proxy permite definir comportamiento personalizado para operaciones fundamentales: acceso a propiedades, asignación, llamadas, etc."
  },
  {
    "q": 59,
    question: "¿Qué hace <code>Promise.race()</code>?",
    options: [
      "Une promesas",
      "Retorna la más rápida exitosa",
      "Se resuelve/rechaza con la primera promesa que se complete",
      "Ejecuta todas las promesas"
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
      "Busca un elemento",
      "Filtra por posición",
      "Retorna el índice"
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
      "Un método de Map",
      "Eliminación de variables",
      "Gestión de memoria RAM"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "Memoization almacena los resultados de llamadas costosas y los retorna cuando se repiten los mismos inputs."
  },
  {
    "q": 62,
    question: "¿Cómo funciona el garbage collector en V8?",
    options: [
      "Usa conteo de referencias puro",
      "Se activa manualmente",
      "Usa algoritmos como Mark & Sweep para detectar objetos no referenciados",
      "Elimina todo cada minuto"
    ],
    correct: 2,
    difficulty: "B",
    explanation: "V8 usa principalmente generational GC con Mark & Sweep/Mark & Compact para objetos de generación mayor."
  },
  {
    "q": 63,
    question: "¿Qué es un AbortController en JavaScript?",
    options: [
      "Un gestor de errores",
      "Un scheduler de tareas",
      "Un objeto que permite cancelar fetch requests u otras operaciones asíncronas",
      "Un tipo de Promise"
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
      "Crea un mirror del DOM",
      "Espeja un objeto",
      "Serializa objetos"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "Reflect tiene métodos estáticos que corresponden a las trampas de Proxy, útil para implementar comportamientos por defecto."
  },
  {
    "q": 65,
    question: "¿Qué es el patrón de diseño 'Decorator' en JS?",
    options: [
      "Un tipo de comentario",
      "Un tipo de herencia",
      "Un método CSS",
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
      "Con mixin()",
      "Con Object.inherit()",
      "Usando prototype directamente"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "class Hijo extends Padre y super() en el constructor llama al constructor del padre."
  },
  {
    "q": 67,
    question: "¿Qué es un SharedArrayBuffer?",
    options: [
      "Un array inmutable",
      "Un buffer de audio",
      "Memoria que puede ser compartida entre el hilo principal y Web Workers",
      "Un buffer de red compartido"
    ],
    correct: 2,
    difficulty: "B",
    explanation: "SharedArrayBuffer permite compartir memoria entre el hilo principal y Workers para computación paralela."
  },
  {
    "q": 68,
    question: "¿Qué hace <code>queueMicrotask()</code>?",
    options: [
      "Programa una tarea macrotask",
      "Añade una función a la cola de microtasks para ejecutarla después del script actual",
      "Crea un Worker",
      "Retrasa una función 0ms"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "queueMicrotask() añade una microtask que se ejecuta antes del próximo ciclo del event loop, después del código síncrono actual."
  },
  {
    "q": 69,
    question: "¿Cuál es la diferencia entre microtasks y macrotasks?",
    options: [
      "Macrotasks son más rápidas",
      "Las microtasks son para Workers",
      "Son lo mismo",
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
      "Un tipo de generador",
      "Una librería de fechas",
      "Un timer avanzado",
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
      "No hay diferencia",
      "Los objetos son más eficientes siempre",
      "Map mantiene orden de inserción, acepta cualquier clave, no tiene propiedades heredadas del prototipo",
      "Map es inmutable"
    ],
    correct: 2,
    difficulty: "B",
    explanation: "Map garantiza orden de inserción, acepta claves de cualquier tipo, tiene mejor rendimiento en inserciones/eliminaciones frecuentes y size incorporado."
  },
  {
    "q": 72,
    question: "¿Qué es el concepto de 'debounce'?",
    options: [
      "Eliminar duplicados en arrays",
      "Retrasar la ejecución de una función hasta que pase un tiempo sin llamadas",
      "Un tipo de event listener",
      "Una técnica de compresión"
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
      "Espera una Promise",
      "Espera eventos del DOM",
      "Pausa la ejecución X ms"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "Atomics.wait() bloquea el hilo (disponible en Workers) esperando que una posición en SharedArrayBuffer sea notificada."
  },
  {
    "q": 74,
    question: "¿Qué es el 'optional catch binding' en ES2019?",
    options: [
      "Un tipo de try-catch async",
      "Omitir el parámetro del catch cuando no se necesita: catch {}",
      "Un error opcional",
      "Capturar errores opcionales"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "ES2019 permite omitir el parámetro en catch: try { ... } catch { ... } sin declarar la variable de error."
  },
  {
    "q": 75,
    question: "¿Cómo se implementa la composición funcional en JS?",
    options: [
      "Usando herencia de clases",
      "Con el patrón Factory",
      "Usando mixins",
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
      "Es un error de sintaxis",
      "Asigna si el valor izquierdo es falsy",
      "Siempre asigna",
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
      "Retorna las claves",
      "Retorna array de pares [clave, valor]",
      "Retorna los valores",
      "Crea una copia del objeto"
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
      "Un array de un elemento",
      "Una función que se llama una vez",
      "Un tipo de módulo"
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
      "Mide CPU usage",
      "Retorna la fecha actual",
      "Retorna el timestamp Unix"
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
      "Una versión especial de array",
      "Un tipo de for loop",
      "Los generadores únicamente"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "El protocolo iterable requiere Symbol.iterator que retorna un iterador con método next() que retorna {value, done}. for...of usa este protocolo."
  },
  {
    "q": 81,
    question: "¿Qué es el concepto de 'tail call optimization' (TCO) en JS?",
    options: [
      "Optimizar el último argumento de una función",
      "Reutilizar el stack frame cuando la llamada recursiva es la última operación",
      "Optimizar callbacks",
      "Un tipo de garbage collection"
    ],
    correct: 1,
    difficulty: "A",
    explanation: "TCO permite que llamadas recursivas en posición de cola reutilicen el stack frame actual, evitando stack overflow. ES6 especifica TCO pero solo Safari lo implementa completamente."
  },
  {
    "q": 82,
    question: "¿Cómo funciona el algoritmo de coerción de tipos en JavaScript?",
    options: [
      "Solo convierte entre number y string",
      "No hay algoritmo definido",
      "Cada motor lo implementa diferente",
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
      "Un scope especial",
      "Un entorno de ejecución con su propio conjunto de objetos built-in, globals y intrínsecos",
      "Un namespace de variables",
      "Un tipo de Worker"
    ],
    correct: 1,
    difficulty: "A",
    explanation: "Un realm es un conjunto de built-ins y global object. Un iframe tiene su propio realm, por eso [] instanceof Array puede ser false entre frames."
  },
  {
    "q": 84,
    question: "¿Qué hace <code>FinalizationRegistry</code>?",
    options: [
      "Registra errores fatales",
      "Permite ejecutar callbacks cuando objetos son garbage collected",
      "Libera memoria manual",
      "Monitorea el heap"
    ],
    correct: 1,
    difficulty: "A",
    explanation: "FinalizationRegistry permite registrar callbacks que se ejecutan después de que un objeto es recolectado por el GC."
  },
  {
    "q": 85,
    question: "¿Cuál es la diferencia entre <code>Promise.allSettled()</code> y <code>Promise.all()</code>?",
    options: [
      "all retorna más datos",
      "allSettled es más lento",
      "allSettled espera a todas sin importar si fallan; all rechaza con el primer error",
      "Son iguales"
    ],
    correct: 2,
    difficulty: "A",
    explanation: "Promise.allSettled() siempre resuelve con array de {status, value/reason} para todas. Promise.all() rechaza con el primer error."
  },
  {
    "q": 86,
    question: "¿Qué son los 'Private class fields' con # en ES2022?",
    options: [
      "Una forma de hacer campos opcionales",
      "Propiedades verdaderamente privadas de clases, inaccesibles fuera de la clase",
      "Un estilo de naming",
      "Son como WeakMap keys"
    ],
    correct: 1,
    difficulty: "A",
    explanation: "Los campos privados con # (#nombre) son encapsulación real a nivel de motor, no solo convención. Acceder a ellos fuera de la clase lanza un SyntaxError."
  },
  {
    "q": 87,
    question: "¿Qué es el 'Speculation Rules API'?",
    options: [
      "Una API de workers",
      "Una API de machine learning",
      "Un método de criptografía",
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
      "Extendiendo Promise",
      "Con generadores async",
      "Usando EventEmitter directamente"
    ],
    correct: 0,
    difficulty: "A",
    explanation: "Un Observable básico tiene subscribe(observer) donde observer = {next, error, complete}. RxJS implementa la especificación Observable."
  },
  {
    "q": 89,
    question: "¿Qué es el concepto de 'structural sharing' en inmutabilidad?",
    options: [
      "Copiar toda la estructura",
      "Un tipo de shallow copy",
      "Compartir objetos entre Workers",
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
      "Solo import() puede usar variables",
      "import() dinámico carga módulos bajo demanda retornando Promise; import estático es en tiempo de parsing",
      "import dinámico es más lento",
      "Son iguales"
    ],
    correct: 1,
    difficulty: "A",
    explanation: "import() dinámico permite lazy loading de módulos, code splitting, e imports condicionales. El import estático se analiza en compile time."
  },
  {
    "q": 91,
    question: "¿Qué es el 'Compartment' en la propuesta de TC39?",
    options: [
      "Una division de memoria",
      "Una partición del DOM",
      "Un mecanismo para crear realms aislados con módulos controlados, para sandboxing seguro",
      "Una forma de compartir Workers"
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
      "Es el mismo que ==",
      "Solo compara primitivos",
      "Usa === estrictamente"
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
      "Una clase CSS oculta",
      "Una clase privada de JS",
      "El prototipo oculto"
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
      "Optimización especulativa de memoria",
      "Optimización en tiempo de parsing",
      "Una forma de tree shaking"
    ],
    correct: 0,
    difficulty: "S",
    explanation: "JIT compilers especulan sobre tipos de variables. Si la suposición es correcta (monomorphic path), el código es muy rápido. Si falla, se produce deoptimización."
  },
  {
    "q": 95,
    question: "¿Qué es el 'Pattern Matching' en la propuesta TC39 (stage 2)?",
    options: [
      "Un tipo de proxy",
      "Coincidencia de regex",
      "Sintaxis match para desestructuración + prueba de patrones, más poderosa que switch",
      "Un método de string"
    ],
    correct: 2,
    difficulty: "S",
    explanation: "TC39 Pattern Matching propone sintaxis match(value) { when Pattern: expression } que combina desestructuración, guards y exhaustividad."
  },
  {
    "q": 96,
    question: "¿Qué son los 'Records and Tuples' en la propuesta TC39?",
    options: [
      "Tipos de datos de WebAssembly",
      "Tipos de datos importados de TypeScript",
      "Una propuesta rechazada",
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
      "Una directiva de módulo",
      "Un alias de const",
      "Declaración que ejecuta Symbol.dispose al salir del scope, para gestión determinista de recursos",
      "Una forma de import"
    ],
    correct: 2,
    difficulty: "S",
    explanation: "using x = resource ejecuta automáticamente x[Symbol.dispose]() al salir del bloque, similar a using en C# o with en Python."
  },
  {
    "q": 98,
    question: "¿Cómo funciona 'Inline Caches' (IC) en motores JS?",
    options: [
      "Un caché HTTP",
      "Un caché de localStorage",
      "Una optimización de closures",
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
      "Un tipo de import circular",
      "Una herramienta de bundling",
      "El grafo de módulos ES se construye estáticamente, se instancia y evalúa en un proceso de 3 fases (parse, link, evaluate)",
      "Un grafo de dependencias visual"
    ],
    correct: 2,
    difficulty: "S",
    explanation: "ES modules tienen 3 fases: 1) Construcción (parse y descarga), 2) Instantiation (enlaza exports/imports), 3) Evaluation (ejecuta código). Los imports circulares se manejan con live bindings."
  },
  {
    "q": 100,
    question: "¿Qué es el concepto de 'type-directed optimization' en motores JS modernos?",
    options: [
      "Solo para tipos primitivos",
      "TypeScript en el motor",
      "Optimizaciones del JIT basadas en tipos observados en runtime, incluyendo escape analysis, inlining e integer boxing",
      "Inferencia de tipos estática"
    ],
    correct: 2,
    difficulty: "S",
    explanation: "Los motores modernos observan tipos en runtime y aplican optimizaciones como: escape analysis (objetos en stack), integer boxing, function inlining, y representaciones internas especializadas (Smi, HeapNumber)."
  },
  {
    "q": 101,
    question: "¿Qué es <code>globalThis</code> en JavaScript?",
    options: [
      "self en workers",
      "global en Node.js",
      "El objeto global independientemente del entorno (browser, Node, Worker)",
      "window siempre"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "globalThis provee una forma estándar de acceder al objeto global en cualquier entorno JavaScript."
  },
  {
    "q": 102,
    question: "¿Qué retorna <code>[...'hello']</code>?",
    options: [
      "'hello'.split(' ')",
      "Error",
      "['hello']",
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
      "Animar árboles en CSS",
      "Un tipo de GC",
      "Un método de array"
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
      "Codifica URL",
      "Convierte a minúsculas",
      "Elimina HTML"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "String.raw es un tagged template que retorna el string crudo sin procesar escapes como \\n."
  },
  {
    "q": 106,
    question: "¿Qué es el método <code>findLast()</code> de Array (ES2023)?",
    options: [
      "No existe",
      "Retorna el último elemento",
      "Es igual a find()",
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
      "Igual a obj.hasOwnProperty",
      "Solo funciona con strings",
      "Verifica el prototipo"
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
      "Solo para números",
      "Ordena el array original",
      "Es igual a sort()"
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
      "El mensaje del error",
      "El stack trace del error",
      "Un tipo de error específico"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "new Error('mensaje', { cause: errorOriginal }) permite encadenar errores manteniendo el contexto del error original."
  },
  {
    "q": 110,
    question: "¿Qué hace el método <code>at()</code> con índice negativo?",
    options: [
      "Retorna 0",
      "Retorna undefined",
      "Cuenta desde el final: -1 es el último elemento",
      "Lanza error"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "arr.at(-1) retorna el último elemento, at(-2) el penúltimo, etc. Es equivalente a arr[arr.length-1]."
  },
  {
    "q": 111,
    question: "¿Qué es el patrón 'Pub/Sub' vs 'Observer'?",
    options: [
      "Son iguales",
      "Pub/Sub tiene canal intermediario; Observer el sujeto notifica directamente",
      "Observer es para eventos DOM",
      "Pub/Sub es para Workers"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "Observer: sujeto notifica directamente. Pub/Sub: publishers y subscribers no se conocen, van a través de un message broker."
  },
  {
    "q": 112,
    question: "¿Qué hace <code>String.prototype.replaceAll()</code> (ES2021)?",
    options: [
      "Solo funciona con strings exactos",
      "Reemplaza primera ocurrencia",
      "Reemplaza todas las ocurrencias sin necesitar regex con /g",
      "Es igual a replace con regex"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "replaceAll() reemplaza todas las coincidencias del string sin necesitar el flag /g en un regex."
  },
  {
    "q": 113,
    question: "¿Qué es <code>Promise.any()</code> (ES2021)?",
    options: [
      "Es igual a race()",
      "Se resuelve si todas pasan",
      "Cancela promesas",
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
      "Son alias de ternarios",
      "Son de TypeScript",
      "&&=, ||=, ??= que combinan operación lógica con asignación",
      "&&, ||, ??"
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
      "Congela las entradas",
      "Transforma array de pares [key, value] en objeto; inverso de Object.entries()",
      "Crea entries desde un objeto"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "Object.fromEntries(map/iterable) transforma una lista de pares key-value en un objeto. Inverso de Object.entries()."
  },
  {
    "q": 116,
    question: "¿Qué es WeakRef en JavaScript (ES2021)?",
    options: [
      "Un tipo de closure",
      "Una referencia débil a tipos primitivos",
      "Un alias de WeakMap",
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
      "Siempre",
      "Cuando el orden importa",
      "Set es siempre más lento",
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
      "Agrupa strings",
      "Une arrays anidados",
      "Ordena por categorías"
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
      "map() seguido de flat(1)",
      "Solo aplana",
      "Mapea en profundidad infinita"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "flatMap() es map() seguido de flat(1). Útil para mapeos que pueden retornar arrays."
  },
  {
    "q": 120,
    question: "¿Qué es el 'Abstract Equality Comparison' en la spec ECMAScript?",
    options: [
      "El algoritmo de ===",
      "El algoritmo de == que define reglas de coerción de tipos entre distintas combinaciones",
      "La comparación de NaN",
      "Un comparador de objetos"
    ],
    correct: 1,
    difficulty: "S",
    explanation: "La Abstract Equality Comparison define reglas específicas: null==undefined es true, string==number convierte string a número, object==primitive llama ToPrimitive, etc."
  },
  {
    "q": 121,
    question: "¿Qué es <code>eval()</code> y por qué evitarlo?",
    options: [
      "Es un alias de Function()",
      "Ejecuta código JS desde un string; evitar por seguridad (XSS), rendimiento y scope leak",
      "Evalúa expresiones matemáticas",
      "Solo ejecuta JSON"
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
      "Convierte this a string",
      "Convierte a string el resultado",
      "Llama a toString del retorno"
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
      "Son iguales",
      "Accessor es solo para arrays",
      "Data properties son más lentas"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "Data properties tienen value y writable. Accessor properties tienen get y/o set y no tienen value. Se definen con Object.defineProperty."
  },
  {
    "q": 124,
    question: "¿Cómo se hace un 'deep equal' en JavaScript nativo?",
    options: [
      "Con deepEqual()",
      "Con ===",
      "No hay built-in; se usa JSON.stringify (con limitaciones) o implementación recursiva",
      "Con Object.is()"
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
      "Usa la sintaxis with",
      "Filtra el array",
      "Une arrays"
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
      "for...of es más lento",
      "for...in solo funciona con arrays",
      "Son lo mismo"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "for...in: itera sobre todas las claves enumerables (incluyendo prototipo). for...of: itera sobre valores de iterables usando Symbol.iterator."
  },
  {
    "q": 127,
    question: "¿Qué hace <code>Number.isFinite()</code> vs <code>isFinite()</code> global?",
    options: [
      "Son iguales",
      "Number.isFinite no hace coerción; isFinite global convierte el argumento a número primero",
      "Number.isFinite es más lento",
      "isFinite es obsoleto"
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
      "Un módulo externo",
      "Una librería de fechas",
      "Un tipo de template"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "Intl provee: Intl.NumberFormat, Intl.DateTimeFormat, Intl.Collator, Intl.PluralRules para i18n sin librerías externas."
  },
  {
    "q": 129,
    question: "¿Qué hace <code>setTimeout(fn, 0)</code>?",
    options: [
      "Ejecuta fn inmediatamente",
      "Ejecuta fn en el siguiente ciclo del event loop (como macrotask)",
      "Ejecuta fn en un Worker",
      "Es lo mismo que queueMicrotask"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "setTimeout(fn, 0) no ejecuta inmediatamente: pone fn en la cola de macrotasks, ejecutándose después del código síncrono actual y las microtasks pendientes."
  },
  {
    "q": 130,
    question: "¿Qué es el 'tagged template literal'?",
    options: [
      "Un tipo especial de string",
      "Solo para HTML templates",
      "Un template con variables CSS",
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
      "Copia propiedades de otro array",
      "Crea una copia del array",
      "Rellena con ceros"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "copyWithin(target, start, end) copia elementos desde [start, end) a target dentro del mismo array, sin cambiar su longitud."
  },
  {
    "q": 132,
    question: "¿Qué es la 'event delegation'?",
    options: [
      "Un tipo de custom event",
      "Eliminar event listeners",
      "Delegar eventos a Web Workers",
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
      "Crea propiedades nuevas",
      "Bloquea el acceso",
      "Solo lee el valor"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "La trampa get(target, property, receiver) se ejecuta cuando se accede a cualquier propiedad del proxy, permitiendo valores calculados, validaciones, etc."
  },
  {
    "q": 134,
    question: "¿Qué es el 'module federation' en el contexto de bundlers?",
    options: [
      "Una forma de lazy loading",
      "Un import circular",
      "Un plugin de webpack",
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
      "Son exactamente iguales",
      "queueMicrotask es una macrotask",
      "queueMicrotask es más directo y no crea un objeto Promise intermedio",
      "Promise.resolve().then es más rápido"
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
      "Campos que no cambian",
      "Son privados automáticamente",
      "Son iguales a los campos de instancia"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "static campos son compartidos por todas las instancias (en realidad son de la clase). static #privado combina campo estático privado."
  },
  {
    "q": 137,
    question: "¿Qué hace <code>import.meta</code>?",
    options: [
      "Es una directiva de compilación",
      "Lista todos los imports",
      "Importa metadata del sistema",
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
      "Un error de suma",
      "Un error de red",
      "Un error de sintaxis de objetos",
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
      "Solo aplica a let",
      "No existe para const",
      "El período entre el inicio del bloque y la declaración donde acceder a const lanza ReferenceError",
      "const no tiene TDZ porque es constante"
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
      "Convierte Symbol a número",
      "Convierte string a Symbol",
      "Es el nombre del Symbol"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "obj[Symbol.toPrimitive](hint) es llamado durante la coerción de tipo. hint puede ser 'number', 'string' o 'default'."
  },
  {
    "q": 141,
    question: "¿Qué hace <code>Number.EPSILON</code>?",
    options: [
      "El número más pequeño representable",
      "Cero positivo",
      "La diferencia entre 1 y el número de punto flotante más pequeño mayor que 1",
      "Infinito positivo"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "Number.EPSILON ≈ 2.22e-16. Útil para comparar floats: Math.abs(a - b) < Number.EPSILON."
  },
  {
    "q": 142,
    question: "¿Qué es <code>self</code> en el contexto de un Web Worker?",
    options: [
      "El scope de la función",
      "El objeto window",
      "La referencia al Worker desde el main thread",
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
      "Ordena y agrupa",
      "Agrupa por prototipo",
      "Filtra y agrupa",
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
      "Un mapa del DOM",
      "Un tipo de import map",
      "Archivo que mapea código transpilado/minificado de vuelta al código fuente original",
      "El mapa de scope"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "Los source maps (.map files) permiten a DevTools mostrar el código fuente original cuando el código en producción está minificado o transpilado."
  },
  {
    "q": 145,
    question: "¿Qué son los 'import maps' en JavaScript?",
    options: [
      "Los mapas de source",
      "Un tipo de source map",
      "Una configuración de TypeScript",
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
      "Igual a Object.entries",
      "Retorna las claves del array",
      "Retorna un objeto con las entradas"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "entries() retorna un Array Iterator de pares [index, value], útil para for...of con índice."
  },
  {
    "q": 148,
    question: "¿Qué es el método <code>has()</code> en Set vs Array includes()?",
    options: [
      "has() hace coerción de tipos",
      "Set.has() es O(1); Array.includes() es O(n)",
      "includes() es más rápido siempre",
      "Son iguales"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "Set.has() usa una tabla hash, O(1). Array.includes() recorre linealmente, O(n). Para búsquedas frecuentes, Set es mucho más eficiente."
  },
  {
    "q": 149,
    question: "¿Qué es <code>document.createDocumentFragment()</code>?",
    options: [
      "Fragmenta el HTML",
      "Crea un nodo de documento ligero para hacer múltiples manipulaciones DOM sin reflows intermedios",
      "Crea un iframe",
      "Crea un shadow DOM"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "DocumentFragment es un nodo de documento virtual que no es parte del árbol DOM activo. Insertar múltiples nodos a través de él causa solo un reflow."
  },
  {
    "q": 150,
    question: "¿Qué es el concepto de 'trampolining' en JS?",
    options: [
      "Un patrón de observable",
      "Un tipo de currying",
      "Técnica para hacer recursión en cola sin stack overflow usando un bucle que llama funciones mientras retornen funciones",
      "Una técnica de animación"
    ],
    correct: 2,
    difficulty: "A",
    explanation: "Trampolining: una función retorna otra función (thunk) en lugar de llamarla directamente. Un bucle externo ejecuta los thunks, evitando stack overflow en recursión profunda."
  },
  {
    "q": 151,
    question: "¿Qué hace <code>localStorage.setItem()</code>?",
    options: [
      "Almacena en memoria RAM",
      "Guarda datos en cookies",
      "Almacena pares clave-valor en el almacenamiento local del navegador (persiste entre sesiones)",
      "Guarda en sessionStorage"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "localStorage.setItem(key, value) guarda datos que persisten entre sesiones del navegador. Solo almacena strings."
  },
  {
    "q": 152,
    question: "¿Qué es <code>requestAnimationFrame()</code>?",
    options: [
      "Hace una animación CSS",
      "Pausa las animaciones",
      "Programa un callback para ejecutarse antes del próximo repaint del navegador",
      "Es igual a setInterval(fn, 16)"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "requestAnimationFrame() sincroniza con el ciclo de renderizado del navegador (~60fps), ideal para animaciones fluidas y eficientes."
  },
  {
    "q": 153,
    question: "¿Qué hace el método <code>matchAll()</code> de String?",
    options: [
      "Verifica si el regex coincide",
      "Es igual a match()",
      "Busca la primera coincidencia",
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
      "Detecta colisiones entre elementos",
      "API para observar cuando un elemento entra/sale del viewport de forma eficiente sin scroll listeners",
      "Un tipo de Proxy",
      "Une dos observers"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "IntersectionObserver permite detectar cuándo un elemento entra o sale del viewport u otro elemento, ideal para lazy loading e infinite scroll."
  },
  {
    "q": 155,
    question: "¿Qué hace <code>crypto.randomUUID()</code>?",
    options: [
      "Encripta un string",
      "Genera un hash",
      "Genera un número aleatorio",
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
      "Un tipo de Proxy",
      "Un tipo de evento",
      "Detecta mutaciones de variables"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "MutationObserver observa cambios en el DOM: nodos añadidos/eliminados, cambios de atributos, cambios en texto. Reemplaza a los obsoletos Mutation Events."
  },
  {
    "q": 157,
    question: "¿Qué hace <code>navigator.sendBeacon()</code>?",
    options: [
      "Envía mensajes a Workers",
      "Envía datos al servidor mientras la página se cierra de forma fiable",
      "Hace una petición fetch",
      "Detecta la señal de red"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "sendBeacon() envía datos asíncronamente al servidor incluso cuando la página se está descargando, sin bloquear. Ideal para analytics."
  },
  {
    "q": 158,
    question: "¿Qué es el <code>Channel Messaging API</code>?",
    options: [
      "API de audio",
      "API para WebSockets",
      "API para comunicación bidireccional entre contextos JS usando MessageChannel y MessagePort",
      "Un tipo de BroadcastChannel"
    ],
    correct: 2,
    difficulty: "B",
    explanation: "MessageChannel crea dos MessagePorts conectados. Útil para comunicación estructurada entre Workers o iframes con canales dedicados."
  },
  {
    "q": 159,
    question: "¿Qué hace <code>Object.getOwnPropertyDescriptor()</code>?",
    options: [
      "Solo retorna el valor",
      "Verifica si la propiedad existe",
      "Lista las propiedades del prototipo",
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
      "Es igual al spread operator siempre",
      "Solo funciona con arrays",
      "No acepta funciones de mapeo"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "Array.from acepta iterables (strings, Sets, Maps, NodeLists) y objetos array-like ({length: n}), con función de mapeo opcional."
  },
  {
    "q": 161,
    question: "¿Qué hace <code>structuredClone</code> con funciones?",
    options: [
      "Las serializa como strings",
      "Las copia normalmente",
      "Las ignora",
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
      "Un comando de terminal",
      "Una función de CLI",
      "Un tipo de callback",
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
      "Lista los iteradores globales",
      "Itera sobre los Symbols de un objeto",
      "Crea un Symbol con nombre 'iterator'"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "[Symbol.iterator]() debe retornar un objeto con next(). Al implementarlo, el objeto es iterable con for...of, spread, destructuring."
  },
  {
    "q": 164,
    question: "¿Cuál es la diferencia entre <code>Object.seal()</code> y <code>Object.freeze()</code>?",
    options: [
      "seal es para arrays",
      "freeze permite añadir",
      "Son iguales",
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
      "Un tipo de event listener",
      "API para observar cambios en el tamaño de elementos DOM eficientemente",
      "Un tipo de MutationObserver",
      "Detecta resize de ventana"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "ResizeObserver observa cambios de tamaño de elementos DOM. Más eficiente que el evento resize de window para detectar cambios de tamaño de elementos individuales."
  },
  {
    "q": 166,
    question: "¿Qué hace <code>console.table()</code>?",
    options: [
      "Formatea JSON en tabla",
      "Crea una tabla HTML",
      "Crea una tabla en el DOM",
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
      "Las propiedades inexistentes lanzan Error",
      "Ambas retornan undefined al acceder, pero 'key' in obj es false para inexistente",
      "undefined se puede eliminar",
      "No hay diferencia"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "Acceder a propiedad inexistente retorna undefined. Pero hasOwnProperty('key') o 'key' in obj distingue entre valor undefined asignado y propiedad inexistente."
  },
  {
    "q": 168,
    question: "¿Qué hace <code>Array.prototype.fill()</code>?",
    options: [
      "Llena con ceros",
      "Rellena espacios vacíos",
      "Rellena todos los elementos (o un rango) con un valor estático, mutando el array",
      "Crea array de zeros"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "fill(value, start, end) rellena desde start hasta end-1 con value. Útil para inicializar arrays: new Array(5).fill(0)."
  },
  {
    "q": 169,
    question: "¿Qué es el método <code>reduceRight()</code>?",
    options: [
      "Solo para strings",
      "Igual a reduce pero recorre el array de derecha a izquierda",
      "reduce() de derecha a izquierda",
      "Reduce y reversa el array"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "reduceRight() aplica la función acumuladora de derecha a izquierda. Útil para composición funcional y ciertas estructuras de datos."
  },
  {
    "q": 170,
    question: "¿Qué hace <code>delete obj.prop</code>?",
    options: [
      "Lanza error",
      "Asigna undefined a la propiedad",
      "Solo funciona con arrays",
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
      "Un patrón de diseño formal",
      "Modificar el comportamiento de código existente (incluyendo built-ins) en tiempo de ejecución",
      "Un tipo de mock",
      "Un tipo de test de monkey testing"
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
      "Es igual a trim()",
      "Elimina saltos de línea solo",
      "Elimina caracteres específicos"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "trimStart() elimina espacios al inicio; trimEnd() al final. trim() elimina de ambos lados."
  },
  {
    "q": 173,
    question: "¿Qué es <code>Atomics.notify()</code>?",
    options: [
      "Emite un evento custom",
      "Envía notificaciones push",
      "Notifica al event loop",
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
      "Un shader de WebGL",
      "Un tipo de animación",
      "Un Worker para pintar canvas",
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
      "Bloquea el teclado",
      "Bloquea el scroll",
      "Previene salir de la página",
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
      "Solo se usan en CSS",
      "Un tipo de inline style",
      "Un framework CSS",
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
      "Recarga la página",
      "Redirige a otra URL",
      "Guarda el estado en localStorage"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "pushState(state, title, url) añade entrada al historial, cambia la URL visible sin recargar. Base de los routers de SPA."
  },
  {
    "q": 178,
    question: "¿Qué es <code>CSS.supports()</code> en JavaScript?",
    options: [
      "Verifica el tamaño del CSS",
      "Verifica si un archivo CSS existe",
      "Comprueba si el navegador soporta una propiedad/valor CSS desde JavaScript",
      "Carga CSS condicionalmente"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "CSS.supports('display', 'grid') o CSS.supports('(display: grid)') retorna boolean indicando soporte del navegador."
  },
  {
    "q": 179,
    question: "¿Qué es el 'Channel Broadcast API' vs 'MessageChannel'?",
    options: [
      "MessageChannel usa WebSockets",
      "Son iguales",
      "BroadcastChannel es más seguro",
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
      "Resalta código en DevTools",
      "Marca texto en el DOM",
      "Es igual a console.time()",
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
      "Verifica si una variable existe",
      "Solo funciona con arrays",
      "Es igual a hasOwnProperty"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "'prop' in obj retorna true si prop existe en obj o en su cadena de prototipos. Diferente a hasOwnProperty que solo verifica propiedades propias."
  },
  {
    "q": 182,
    question: "¿Qué hace <code>Array.prototype.some()</code>?",
    options: [
      "Retorna algún elemento",
      "Retorna true si AL MENOS UN elemento pasa la condición",
      "Retorna los elementos que pasan",
      "Igual a every()"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "some() retorna true si al menos un elemento cumple el predicado. Cortocircuita al encontrar el primero."
  },
  {
    "q": 183,
    question: "¿Qué hace <code>Array.prototype.every()</code>?",
    options: [
      "Es igual a forEach",
      "Retorna el array sin cambios",
      "Retorna true solo si TODOS los elementos pasan la condición",
      "Aplica función a todos los elementos"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "every() retorna true si todos los elementos cumplen el predicado. Cortocircuita al encontrar el primero que no cumple."
  },
  {
    "q": 184,
    question: "¿Qué es <code>Object.getPrototypeOf(obj)</code>?",
    options: [
      "Crea un nuevo prototipo",
      "Retorna el prototipo ([[Prototype]]) del objeto especificado",
      "Es igual a obj.__proto__",
      "Retorna el constructor"
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
      "Añade padding CSS",
      "Alinea texto a la derecha",
      "Elimina espacios del inicio"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "'5'.padStart(3, '0') → '005'. Útil para formatear números con ceros a la izquierda u otros caracteres."
  },
  {
    "q": 186,
    question: "¿Qué es el 'Web Animation API' (WAAPI)?",
    options: [
      "Un tipo de requestAnimationFrame",
      "Una librería CSS",
      "CSS Animations solo",
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
      "getElementById acepta selectores CSS",
      "querySelector solo funciona con clases",
      "querySelector acepta cualquier selector CSS y es más versátil; getElementById es más específico y ligeramente más rápido",
      "Son iguales"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "querySelector acepta selectores CSS completos. getElementById está optimizado para IDs. Para IDs frecuentes, getElementById puede ser ligeramente más rápido."
  },
  {
    "q": 188,
    question: "¿Qué es <code>URL.createObjectURL(blob)</code>?",
    options: [
      "Descarga un Blob",
      "Convierte Blob a string",
      "Crea una URL temporal del objeto URL del Blob para su uso en el navegador",
      "Crea una URL de red"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "createObjectURL() crea una URL de tipo blob: que referencia el Blob en memoria. Debe liberarse con URL.revokeObjectURL() cuando ya no se necesite."
  },
  {
    "q": 189,
    question: "¿Qué hace el método <code>Intl.NumberFormat.format()</code>?",
    options: [
      "Es igual a toLocaleString",
      "Solo formatea decimales",
      "Formatea números según locale: miles, moneda, porcentajes, unidades",
      "Solo funciona con enteros"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "new Intl.NumberFormat('es-ES', {style: 'currency', currency: 'EUR'}).format(1234.5) → '1.234,50 €'"
  },
  {
    "q": 190,
    question: "¿Qué es el 'Keyboard API' / KeyboardEvent en JavaScript?",
    options: [
      "Solo para formularios",
      "Eventos keydown, keyup, keypress con KeyboardEvent.key (valor), code (tecla física), modifiers",
      "Una librería externa",
      "Un API para teclados físicos"
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
      "Solo añade propiedades nuevas",
      "Es igual a la asignación normal",
      "Congela propiedades"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "Object.defineProperty() permite control granular sobre propiedades: hacerlas no-writable, no-enumerable, no-configurable, o añadir getters/setters."
  },
  {
    "q": 192,
    question: "¿Qué es el <code>Clipboard API</code>?",
    options: [
      "El evento paste",
      "API asíncrona para leer/escribir al portapapeles: navigator.clipboard.readText(), writeText()",
      "El evento cut/copy",
      "Una librería de clipboard"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "navigator.clipboard.writeText(text) y readText() son la API moderna y segura para el portapapeles, requieren HTTPS y permisos."
  },
  {
    "q": 193,
    question: "¿Qué diferencia hay entre <code>window.onload</code> y <code>DOMContentLoaded</code>?",
    options: [
      "DOMContentLoaded no está disponible en todos los navegadores",
      "Son iguales",
      "DOMContentLoaded se dispara cuando el HTML está parseado; onload espera a todos los recursos (imágenes, CSS)",
      "onload es más rápido siempre"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "DOMContentLoaded: DOM listo (sin esperar imágenes/CSS). load/window.onload: todos los recursos cargados. Preferir DOMContentLoaded para manipulación del DOM."
  },
  {
    "q": 194,
    question: "¿Qué es el <code>service worker</code> en JavaScript?",
    options: [
      "Un worker para servicios de sistema",
      "Un thread de computación",
      "Un script que corre en background e intercepta peticiones de red, habilitando PWA, offline, cache",
      "Un tipo de Web Worker normal"
    ],
    correct: 2,
    difficulty: "B",
    explanation: "Service Workers interceptan fetch events, cachean respuestas, y permiten funcionalidad offline. Son la base de las Progressive Web Apps (PWA)."
  },
  {
    "q": 195,
    question: "¿Qué hace <code>new Map(Object.entries(obj))</code>?",
    options: [
      "Crea un Set de las claves",
      "Crea un Map a partir de un objeto, con las mismas claves y valores",
      "Copia el objeto",
      "Convierte el objeto a JSON"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "Object.entries(obj) retorna [[key1,val1],...]. El constructor de Map acepta un iterable de pares [key, value], convirtiendo el objeto a Map."
  },
  {
    "q": 196,
    question: "¿Qué es el 'Shadow DOM'?",
    options: [
      "Un DOM oscuro para temas dark",
      "Un árbol DOM encapsulado dentro de un custom element, aislado del DOM principal",
      "El DOM antes de pintar",
      "Una copia del DOM"
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
      "Encuentra el elemento más cercano al viewport",
      "Igual a querySelector",
      "Encuentra el hijo más cercano"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "closest() recorre el elemento y sus ancestros hacia arriba hasta encontrar un elemento que coincida con el selector, o retorna null."
  },
  {
    "q": 198,
    question: "¿Qué es <code>navigator.geolocation.getCurrentPosition()</code>?",
    options: [
      "Retorna la zona horaria",
      "Retorna la IP del usuario",
      "Solicita la posición GPS del dispositivo de forma asíncrona",
      "Detecta el país del usuario"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "getCurrentPosition(success, error, options) solicita la posición geográfica del usuario, requiriendo su permiso. Retorna un objeto GeolocationPosition."
  },
  {
    "q": 199,
    question: "¿Qué es el operador <code>instanceof</code>?",
    options: [
      "Es igual a typeof",
      "Verifica si un objeto tiene en su cadena de prototipos el prototype de un constructor",
      "Verifica el tipo primitivo",
      "Solo funciona con clases ES6"
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
      "false (como ===)",
      "undefined",
      "Error"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "Object.is() implementa SameValue: NaN es igual a NaN (true), pero +0 no es igual a -0 (false). Diferente tanto de == como de ===."
  }
];
