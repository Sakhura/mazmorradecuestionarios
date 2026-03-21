window.questions_typescript = [
  {
    question: "¿Qué es TypeScript y cuál es su relación con JavaScript?",
    options: [
      "Un framework de testing y linting para proyectos JavaScript modernos",
      "Un superconjunto tipado de JavaScript que compila a JS estándar, añadiendo tipos estáticos opcionales",
      "Un lenguaje completamente distinto que reemplaza a JavaScript en los navegadores modernos",
      "Una librería de tipos que se ejecuta en paralelo con JavaScript para hacer validaciones en runtime"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "TypeScript es un superconjunto de JavaScript desarrollado por Microsoft. Todo JS válido es TS válido. El compilador tsc transpila a JS eliminando las anotaciones de tipo."
  },
  {
    question: "¿Cuál es la diferencia principal entre <code>interface</code> y <code>type</code> en TypeScript?",
    options: [
      "Los type alias solo se usan para tipos primitivos como string o number, mientras que interface es para objetos y clases",
      "Las interfaces son procesadas en tiempo de ejecución por el motor V8, mientras que type es puramente de compilación",
      "Las interfaces pueden extenderse y fusionarse mediante declaration merging; los type alias no admiten fusión pero soportan uniones e intersecciones complejas",
      "No existe diferencia funcional; TypeScript los trata de forma completamente idéntica en todos los contextos"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "Las interfaces admiten declaration merging (dos declaraciones se fusionan). Los type alias son más flexibles para uniones, intersecciones y mapped types."
  },
  {
    question: "¿Qué hace el operador <code>keyof</code> en TypeScript?",
    options: [
      "Extrae los valores de un objeto en tiempo de ejecución y los retorna como array de strings",
      "Verifica si una propiedad existe en un objeto usando reflexión del prototype chain",
      "Convierte las claves de un objeto a tipo string removiendo los tipos symbol del resultado",
      "Retorna un tipo unión literal con todas las claves públicas de un tipo o interfaz"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "keyof T produce un tipo unión de strings/symbols con los nombres de propiedades de T. Ej: keyof {a: number, b: string} = 'a' | 'b'."
  },
  {
    question: "¿Qué es un tipo <code>Readonly&lt;T&gt;</code> en TypeScript?",
    options: [
      "Un mapped type que convierte todas las propiedades de T en readonly, impidiendo reasignación tras la creación",
      "Un decorador de clase que previene modificaciones al prototipo del objeto en tiempo de ejecución",
      "Un tipo especial del compilador que congela el objeto usando Object.freeze de forma automática",
      "Una utilidad que marca propiedades como constantes solo en contextos de módulo ESM estricto"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "Readonly<T> es un mapped type incorporado: type Readonly<T> = { readonly [K in keyof T]: T[K] }. Impide reasignación de propiedades en tiempo de compilación."
  },
  {
    question: "¿Qué son los tipos condicionales en TypeScript?",
    options: [
      "Tipos que se resuelven en tiempo de ejecución basándose en el valor de variables booleanas",
      "Tipos que evalúan una condición en tiempo de compilación con la forma <code>T extends U ? X : Y</code>",
      "Estructuras de control de flujo dentro de definiciones de tipo que usan la sintaxis if/else",
      "Validaciones de tipo que el compilador ejecuta solo con el flag strictConditionalTypes activado"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "type IsString<T> = T extends string ? 'sí' : 'no'. El compilador evalúa la condición en tiempo de compilación y distribuye sobre tipos unión."
  },
  {
    question: "¿Para qué sirve la palabra clave <code>infer</code> en tipos condicionales?",
    options: [
      "Para forzar la inferencia de tipos genéricos cuando el compilador no puede resolverlos automáticamente",
      "Para indicarle al compilador que infiera el tipo de una expresión sin necesidad de anotación explícita",
      "Para declarar una variable de tipo dentro de la cláusula condicional y capturar parte del tipo evaluado",
      "Para extraer metadatos de tipo en tiempo de ejecución usando las APIs de reflexión de TypeScript"
    ],
    correct: 2,
    difficulty: "A",
    explanation: "infer introduce una variable de tipo en la rama 'true'. Ej: type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never."
  },
  {
    question: "¿Qué es el tipo <code>never</code> en TypeScript?",
    options: [
      "Un tipo alias para undefined que se usa cuando una variable nunca es inicializada antes de usarse",
      "El tipo de retorno implícito de funciones vacías que el compilador asigna cuando no hay return statement",
      "El tipo fondo (bottom type) que representa valores que nunca ocurren; toda función que lanza error retorna never",
      "Un tipo especial solo válido en type guards que marca el código como inalcanzable en ese bloque"
    ],
    correct: 2,
    difficulty: "B",
    explanation: "never es el subtipo de todos los tipos. Aparece en funciones que siempre lanzan error, bucles infinitos y ramas exhaustivas de switch/if."
  },
  {
    question: "¿Qué hace <code>Pick&lt;T, K&gt;</code>?",
    options: [
      "Construye un tipo seleccionando solo las propiedades K de T, descartando todas las demás",
      "Filtra un array de objetos T retornando solo los elementos que coinciden con las claves K",
      "Extrae los valores asociados a las claves K de un objeto T en tiempo de ejecución del programa",
      "Fusiona dos interfaces seleccionando las propiedades con mayor prioridad definidas en K"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "Pick<User, 'id' | 'name'> crea un nuevo tipo con solo esas dos propiedades. Es el inverso de Omit<T, K>."
  },
  {
    question: "¿Qué hace <code>Omit&lt;T, K&gt;</code>?",
    options: [
      "Elimina las propiedades K de un objeto en tiempo de ejecución retornando el objeto modificado",
      "Excluye los tipos listados en K de una unión de tipos, equivalente a Exclude aplicado sobre uniones",
      "Construye un tipo con todas las propiedades de T excepto las especificadas en K",
      "Marca como opcionales las propiedades K de T sin eliminarlas del tipo resultante generado"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "Omit<User, 'password'> crea un tipo User sin la propiedad password. Internamente usa Pick<T, Exclude<keyof T, K>>."
  },
  {
    question: "¿Qué es un <code>type guard</code> en TypeScript?",
    options: [
      "Una función decoradora que valida los tipos de los parámetros en runtime lanzando TypeError si no coinciden",
      "Un atributo del compilador que previene operaciones inseguras sobre tipos any o unknown globalmente",
      "Una expresión que al ser evaluada reduce el tipo de una variable a uno más específico en el bloque correspondiente",
      "Un tipo de assertion que permite convertir cualquier tipo a otro sin verificación en tiempo de compilación"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "Los type guards incluyen typeof, instanceof, in, igualdad discriminada y funciones con retorno 'x is T'. Refinan el tipo en el scope del bloque."
  },
  {
    question: "¿Qué es una <code>discriminated union</code>?",
    options: [
      "Una unión de tipos donde el compilador selecciona automáticamente el tipo correcto según el contexto de asignación",
      "Un patrón donde tipos unión comparten una propiedad literal común que permite hacer exhaustive checking",
      "Un tipo especial de unión restringido a interfaces que comparten exactamente las mismas propiedades opcionales",
      "Una unión de tipos primitivos discriminados por typeof que solo funciona con string, number y boolean"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "Ej: type Shape = {kind:'circle', r:number} | {kind:'rect', w:number, h:number}. La propiedad 'kind' es el discriminante que habilita type narrowing exhaustivo."
  },
  {
    question: "¿Para qué se usan los <code>decoradores</code> en TypeScript?",
    options: [
      "Para añadir metadatos o modificar el comportamiento de clases, métodos, propiedades y parámetros en runtime",
      "Para documentar el código generando automáticamente JSDoc desde los tipos definidos en las interfaces",
      "Para extender clases sin usar herencia, aplicando mixins mediante la sintaxis @ del lenguaje directamente",
      "Para marcar funciones como puras e inmutables, permitiendo al compilador optimizar su ejecución"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "Los decoradores (@Injectable, @Component, etc.) son funciones que reciben el target como argumento y pueden modificarlo. Usados extensamente en Angular y NestJS."
  },
  {
    question: "¿Qué es el tipo <code>unknown</code> y en qué se diferencia de <code>any</code>?",
    options: [
      "unknown requiere verificación de tipo antes de operar sobre él; any desactiva el type checking completamente",
      "unknown es un alias de any con un nombre más descriptivo, sin diferencia funcional en el compilador",
      "unknown solo acepta valores null y undefined, mientras que any acepta cualquier valor del lenguaje",
      "unknown restringe las operaciones a métodos del prototype Object, any permite acceso sin restricciones"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "unknown es el top type seguro: debes usar type guard o assertion antes de acceder a propiedades. any desactiva todas las verificaciones y es anti-pattern."
  },
  {
    question: "¿Qué hace el operador <code>as const</code>?",
    options: [
      "Aplica Object.freeze al valor en runtime además de cambiar el tipo inferido a Readonly en compilación",
      "Declara que una expresión es una constante del módulo, habilitando optimizaciones de inlining en el compilador",
      "Convierte el tipo de una expresión a const, impidiendo que el valor sea reasignado en tiempo de ejecución",
      "Congela la inferencia de tipo al literal más específico posible, haciendo todas las propiedades readonly y sus valores literales"
    ],
    correct: 3,
    difficulty: "B",
    explanation: "const config = {env: 'prod'} as const infiere {readonly env: 'prod'} en lugar de {env: string}. Solo actúa en compilación, no llama Object.freeze."
  },
  {
    question: "¿Qué son los <code>mapped types</code> en TypeScript?",
    options: [
      "Tipos creados iterando sobre las claves de otro tipo con la sintaxis <code>[K in keyof T]: ...</code> para transformar cada propiedad",
      "Funciones de transformación que mapean arrays de tipos en tiempo de ejecución usando métodos funcionales",
      "Tipos utilitarios importados desde el módulo typescript/mapped que transforman colecciones de interfaces",
      "Estructuras que relacionan tipos usando tablas de hash internas del compilador para optimizar lookups"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "type Optional<T> = { [K in keyof T]?: T[K] } crea un tipo donde todas las propiedades son opcionales. Son la base de Partial, Required, Readonly, Record."
  },
  {
    question: "¿Qué es <code>Record&lt;K, V&gt;</code>?",
    options: [
      "Una clase de la librería estándar que implementa un mapa clave-valor con tipado fuerte en tiempo de ejecución",
      "Un mapped type que construye un tipo objeto con claves de tipo K y valores de tipo V",
      "Un tipo que registra el historial de cambios de un objeto para propósitos de auditoría y debugging",
      "Una interfaz genérica para serializar objetos TypeScript a formato JSON con validación de esquema"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "Record<string, number> equivale a {[key: string]: number}. Record<'a'|'b', boolean> crea {a: boolean, b: boolean}. Es más semántico que el index signature."
  },
  {
    question: "¿Qué hace <code>Partial&lt;T&gt;</code>?",
    options: [
      "Convierte todas las propiedades de T en opcionales (añade ? a cada una), útil para tipos de actualización parcial",
      "Selecciona un subconjunto aleatorio de las propiedades de T determinado por el contexto de uso del tipo",
      "Crea una copia de T donde la mitad de las propiedades son requeridas y la otra mitad son opcionales",
      "Remueve todas las propiedades opcionales de T dejando solo las propiedades estrictamente requeridas"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "Partial<User> hace que id, name, email, etc., sean todos opcionales. Implementado como { [K in keyof T]?: T[K] }. Ideal para objetos de actualización (PATCH)."
  },
  {
    question: "¿Qué hace <code>Required&lt;T&gt;</code>?",
    options: [
      "Agrega anotaciones de validación a todas las propiedades de T para su uso con class-validator en runtime",
      "Elimina el modificador opcional de todas las propiedades de T, haciéndolas todas obligatorias",
      "Valida en tiempo de ejecución que todas las propiedades de un objeto estén presentes y no sean undefined",
      "Convierte las propiedades opcionales de T en requeridas solo en el contexto de constructores de clase"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "Required<Partial<T>> recupera el tipo original T con todas las propiedades obligatorias. Implementado como { [K in keyof T]-?: T[K] } (el - remueve ?)."
  },
  {
    question: "¿Qué es <code>ReturnType&lt;T&gt;</code>?",
    options: [
      "Un tipo condicional que extrae el tipo de retorno de un tipo función mediante el operador infer",
      "Una función de reflexión que inspecciona el valor de retorno de una función en tiempo de ejecución",
      "Un decorador de método que valida que el tipo retornado coincida con la anotación de tipo declarada",
      "Un tipo que registra todos los posibles tipos de retorno de una función sobrecargada en una unión"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "ReturnType<typeof fn> extrae el tipo de retorno de fn. Implementado con infer: T extends (...args: any[]) => infer R ? R : never."
  },
  {
    question: "¿Qué es <code>Parameters&lt;T&gt;</code>?",
    options: [
      "Una función que devuelve los nombres de los parámetros de cualquier función mediante reflexión en runtime",
      "Un decorador de parámetros que registra los tipos de los argumentos en los metadatos de la clase",
      "Un tipo que valida que los parámetros de una función sean compatibles con los de otra función base",
      "Un tipo que extrae los parámetros de un tipo función como una tupla usando infer en un tipo condicional"
    ],
    correct: 3,
    difficulty: "B",
    explanation: "Parameters<typeof fn> da la tupla de tipos de parámetros. Si fn = (a: string, b: number) => void, Parameters<typeof fn> = [string, number]."
  },
  {
    question: "¿Qué es <code>Exclude&lt;T, U&gt;</code>?",
    options: [
      "Construye un tipo excluyendo de la unión T todos los miembros que son asignables a U",
      "Elimina las propiedades de tipo U de un objeto T, equivalente a Omit pero para tipos de valor",
      "Filtra un array en tiempo de ejecución removiendo los elementos cuyo tipo sea asignable a U",
      "Crea una nueva unión de T añadiendo los tipos de U como tipos opcionales extra al resultado"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "Exclude<'a'|'b'|'c', 'a'|'b'> = 'c'. Actúa sobre tipos unión distribuyendo el condicional T extends U ? never : T."
  },
  {
    question: "¿Qué es <code>Extract&lt;T, U&gt;</code>?",
    options: [
      "Copia las propiedades de tipo U desde un objeto fuente T hacia un nuevo objeto de destino tipado",
      "Construye un tipo extrayendo de la unión T solo los miembros que son asignables a U",
      "Captura los valores de tipo U dentro de un array T y los retorna como una nueva tupla tipada",
      "Selecciona de una unión T los miembros cuya longitud de string sea igual a la de U"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "Extract<'a'|'b'|'c', 'a'|'b'> = 'a'|'b'. Es el complemento de Exclude. Implementado como T extends U ? T : never."
  },
  {
    question: "¿Qué es <code>NonNullable&lt;T&gt;</code>?",
    options: [
      "Convierte todas las propiedades de T en no-nulas añadiendo el operador ! de forma automática",
      "Excluye null y undefined de T, retornando el tipo sin valores nulos posibles",
      "Lanza un error en compilación si cualquier valor del tipo T puede ser null en algún path",
      "Reemplaza null por el valor por defecto del tipo base, como 0 para number o '' para string"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "NonNullable<string | null | undefined> = string. Equivale a Exclude<T, null | undefined>. Muy útil en contextos donde se garantiza que el valor existe."
  },
  {
    question: "¿Qué activa el <code>strict mode</code> de TypeScript?",
    options: [
      "Un modo de ejecución que añade verificaciones en runtime para asegurar que los tipos coincidan con valores reales",
      "Una configuración de eslint que aplica las reglas más restrictivas de tipado al código TypeScript del proyecto",
      "Un conjunto de flags: strictNullChecks, noImplicitAny, strictFunctionTypes, strictPropertyInitialization y otros",
      "Un modo del compilador que deshabilita las características experimentales y las propuestas de TC39 en stage 1-2"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "strict:true en tsconfig.json activa un grupo de checks. strictNullChecks es el más importante: null y undefined dejan de ser asignables a cualquier tipo."
  },
  {
    question: "¿Qué es el <code>type narrowing</code>?",
    options: [
      "Una optimización del compilador que reduce la memoria usada por los tipos en archivos de declaración .d.ts",
      "El proceso por el cual el compilador reduce el tipo de una variable a uno más específico en un bloque condicional",
      "Un análisis estático que estrecha el conjunto de llamadas posibles en funciones con sobrecarga de tipos",
      "Un proceso automático que convierte tipos unión amplios a tipos intersección más restrictivos al compilar"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "Después de if (typeof x === 'string'), el compilador sabe que x es string en ese bloque. Funciona con typeof, instanceof, in, igualdad y type predicates."
  },
  {
    question: "¿Qué son los <code>template literal types</code>?",
    options: [
      "Cadenas de texto interpoladas en tiempo de ejecución que TypeScript usa para generar mensajes de error descriptivos",
      "Tipos construidos usando la sintaxis de template strings para crear tipos string compuestos a partir de otros tipos",
      "Un sistema de plantillas para generar código TypeScript automáticamente desde tipos definidos en interfaces",
      "Tipos que representan strings con formato validados por expresiones regulares en tiempo de compilación"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "type EventName<T extends string> = `on${Capitalize<T>}` genera tipos como 'onClick', 'onChange'. Permiten manipulación de tipos string en compilación."
  },
  {
    question: "¿Qué es <code>strictNullChecks</code>?",
    options: [
      "Un flag que hace que null y undefined dejen de ser asignables a todos los tipos, forzando manejo explícito",
      "Una opción que lanza excepciones en tiempo de ejecución cuando se accede a un valor nulo o undefined",
      "Una regla que obliga a declarar explícitamente el tipo null en todas las variables que puedan serlo",
      "Un modo del compilador que convierte todos los null a undefined para unificar el manejo de valores ausentes"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "Sin strictNullChecks, null y undefined son subtipos de todos los tipos. Con él activado, string no incluye null; debes usar string | null explícitamente."
  },
  {
    question: "¿Qué hace el operador <code>?.</code> (optional chaining)?",
    options: [
      "Declara propiedades opcionales en interfaces TypeScript indicando que pueden no estar presentes en el objeto",
      "Encadena llamadas asíncronas de forma similar a Promise.then() pero con sintaxis de propiedades directas",
      "Accede a propiedades en cadena retornando undefined si algún intermediario es null o undefined en lugar de lanzar error",
      "Verifica que un objeto cumpla un tipo antes de acceder a su propiedad, equivalente a un type guard implícito"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "user?.address?.city retorna undefined si user o address son null/undefined. En compilación, el tipo resultante incluye undefined automáticamente."
  },
  {
    question: "¿Qué hace el operador <code>??</code> (nullish coalescing)?",
    options: [
      "Retorna el operando derecho solo si el izquierdo es null o undefined, a diferencia de || que también actúa con falsy",
      "Combina dos tipos en una unión que excluye null y undefined de ambos operandos del resultado generado",
      "Realiza una doble negación de tipo para convertir T | null | undefined a NonNullable<T> en compilación",
      "Verifica que dos expresiones sean del mismo tipo y lanza error de compilación si difieren en su definición"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "0 || 'default' = 'default' (0 es falsy). 0 ?? 'default' = 0 (0 no es null ni undefined). Importante cuando 0, '' o false son valores válidos."
  },
  {
    question: "¿Qué son las <code>overload signatures</code> en TypeScript?",
    options: [
      "Múltiples firmas de función que definen combinaciones válidas de parámetros/retorno, seguidas de una implementación compatible",
      "Funciones que sobreescriben métodos de clases padre usando la palabra clave override introducida en TS 4.3",
      "Declaraciones que permiten definir la misma función con diferentes implementaciones en módulos distintos",
      "Tipos de intersección que combinan múltiples firmas de función en un único tipo callable con comportamiento unificado"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "function pad(n: number): string; function pad(s: string, len: number): string; function pad(...) { /* impl */ }. Las firmas públicas no tienen cuerpo."
  },
  {
    question: "¿Qué diferencia hay entre <code>const enum</code> y <code>enum</code> regular?",
    options: [
      "const enum crea un objeto frozen en tiempo de ejecución que no puede ser modificado, mientras enum es mutable",
      "const enum solo acepta valores string como miembros, mientras enum acepta tanto números como strings",
      "const enum es una característica experimental que requiere el flag isolatedModules desactivado en tsconfig",
      "const enum es inlineado por el compilador sustituyendo los usos por literales, sin generar objeto en el JS de salida"
    ],
    correct: 3,
    difficulty: "A",
    explanation: "const enum Dir { Up = 0 }; el uso Dir.Up se reemplaza por 0 en el JS generado. No hay objeto JS. No funciona con isolatedModules ni con bundlers que no usan tsc."
  },
  {
    question: "¿Para qué sirven los archivos <code>.d.ts</code>?",
    options: [
      "Son archivos de declaración de tipos que describen la forma de módulos JavaScript sin incluir implementación",
      "Son archivos de definición de dependencias que npm usa para resolver conflictos de versiones entre paquetes",
      "Son archivos de diagnóstico que el compilador genera automáticamente para reportar errores del proyecto",
      "Son archivos de caché que almacenan los tipos inferidos para acelerar compilaciones incrementales del proyecto"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "Los archivos .d.ts (como los de @types/node) solo contienen declaraciones de tipos. El compilador los usa para conocer los tipos de código JS sin recompilar todo."
  },
  {
    question: "¿Qué es el <code>structural typing</code> de TypeScript?",
    options: [
      "Un sistema de tipos donde la herencia nominal determina la compatibilidad, igual que en Java o C# estrictos",
      "La capacidad del compilador de inferir la estructura de un tipo complejo desde sus usos en el código fuente",
      "Compatibilidad de tipos basada en la forma del objeto: si tiene las propiedades requeridas, es compatible",
      "Un modo de verificación estricto que solo admite tipos definidos explícitamente con interface o type alias"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "Si necesitas tipo {name: string} y pasas {name: 'Ana', age: 30}, TypeScript lo acepta porque tiene la propiedad requerida. Es duck typing estático."
  },
  {
    question: "¿Qué es un <code>index signature</code>?",
    options: [
      "Una declaración que permite acceso dinámico a propiedades de un objeto con claves de tipo específico",
      "Un índice numérico que TypeScript asigna a cada propiedad de una interfaz para optimizar búsquedas",
      "Una firma especial de función que describe cómo acceder a los elementos de un array usando corchetes",
      "Un decorador de clase que crea un índice de búsqueda sobre las propiedades marcadas como @Indexed"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "interface Dict { [key: string]: number } permite dict['cualquierClave']. Limita que todas las propiedades nombradas sean del mismo tipo de valor."
  },
  {
    question: "¿Qué es <code>excess property checking</code>?",
    options: [
      "Un análisis de rendimiento que detecta cuando un tipo tiene demasiadas propiedades y afecta la compilación",
      "Una regla de linting que previene que los objetos tengan más propiedades de las estrictamente necesarias",
      "Una verificación de compatibilidad estructural que compara el número total de propiedades entre tipos",
      "Una verificación que TypeScript aplica al asignar literales de objeto directamente, rechazando propiedades extra no declaradas"
    ],
    correct: 3,
    difficulty: "B",
    explanation: "const x: {a: number} = {a: 1, b: 2} da error porque b no está en el tipo. Pero const y = {a:1, b:2}; const x: {a:number} = y NO da error (no es literal directo)."
  },
  {
    question: "¿Qué hace <code>import type</code>?",
    options: [
      "Importa un módulo lazy de forma síncrona para evitar su carga en el bundle inicial de la aplicación",
      "Crea una importación de tipo que puede usarse tanto como valor como como tipo en el código TypeScript",
      "Importa solo el tipo sin generar ningún import en el JavaScript compilado, garantizando que es type-only",
      "Fuerza al bundler a tratar la importación como un módulo externo que no debe incluirse en el bundle"
    ],
    correct: 2,
    difficulty: "B",
    explanation: "import type { User } from './types' no genera código JS. Útil con isolatedModules y para comunicar la intención de importación. En TS 3.8+."
  },
  {
    question: "¿Qué es <code>satisfies</code> en TypeScript 4.9+?",
    options: [
      "Una palabra clave que reemplaza a implements para verificar que una clase cumple con una interfaz",
      "Un modificador de propiedad que requiere que el valor pase una función de validación antes de ser asignado",
      "Un operador que valida que una expresión satisface un tipo sin ampliar ni cambiar el tipo inferido de la expresión",
      "Un tipo condicional que verifica si T cumple las restricciones de U retornando true o false como tipo literal"
    ],
    correct: 2,
    difficulty: "A",
    explanation: "const config = {port: 3000} satisfies Config. Valida que config cumple Config pero preserva el tipo literal {port: 3000}, no lo amplía a Config."
  },
  {
    question: "¿Qué es un <code>ambient declaration</code> con <code>declare</code>?",
    options: [
      "Una declaración de variable global compartida automáticamente entre todos los archivos del proyecto TypeScript",
      "Una declaración que informa al compilador sobre tipos y valores que existen en runtime pero no en el código TS",
      "Un bloque donde TypeScript relaja las reglas de tipado para interoperar con módulos JavaScript externos",
      "Una anotación de importación que carga tipos desde DefinitelyTyped sin instalar el paquete @types correspondiente"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "declare const __DEV__: boolean; le dice al compilador que __DEV__ existe aunque no esté definido en TS. Los archivos .d.ts son archivos de declaraciones ambientes."
  },
  {
    question: "¿Qué es el operador <code>!</code> (non-null assertion)?",
    options: [
      "Le dice al compilador que el valor no es null ni undefined, removiendo esos tipos de la unión sin verificación en runtime",
      "Niega el valor booleano de una expresión TypeScript para invertir condiciones de tipo en el compilador",
      "Genera código de validación en el output JavaScript que lanza un error si el valor es null en ejecución",
      "Convierte el tipo de una expresión a NonNullable<T> aplicando una transformación de tipo segura"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "element!.innerHTML accede sin verificar. Si element es realmente null en runtime, explota igual. Es una promesa al compilador, no protección real."
  },
  {
    question: "¿Qué es una <code>branded type</code> (tipo marcado)?",
    options: [
      "Un tipo especial que el compilador marca internamente como verificado para evitar re-validaciones redundantes",
      "Una clase abstracta que actúa como base para un grupo de tipos relacionados, marcando su jerarquía de herencia",
      "Una unión discriminada donde el discriminante es siempre un string literal que identifica la variante del tipo",
      "Un patrón para crear tipos nominales usando una propiedad simbólica ficticia que diferencia tipos estructuralmente iguales"
    ],
    correct: 3,
    difficulty: "A",
    explanation: "type UserId = string & {readonly __brand: 'UserId'}. Dos branded types con diferente brand son incompatibles aunque ambos sean string internamente."
  },
  {
    question: "¿Qué es <code>control flow analysis</code> en TypeScript?",
    options: [
      "Un análisis que el compilador realiza para rastrear qué tipos son posibles en cada punto del flujo de ejecución",
      "Una herramienta de profiling que analiza la complejidad ciclomática del código para detectar cuellos de botella",
      "Un sistema que verifica que todos los caminos de una función retornen el tipo declarado correctamente",
      "Un análisis de dependencias que determina el orden correcto de compilación de los módulos del proyecto"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "Si tienes if (x !== null) { /* aquí x no es null */ }, el compilador lo sabe por CFA. Permite type narrowing automático sin type guards explícitos."
  },
  {
    question: "¿Qué son las <code>tuplas</code> (tuple types) en TypeScript?",
    options: [
      "Estructuras de datos inmutables similares a los records de Haskell, implementadas con Object.freeze",
      "Tipos especiales de arrays que solo aceptan tipos primitivos en orden estrictamente ascendente",
      "Colecciones heterogéneas similares a los structs de C, con acceso a propiedades por nombre descriptivo",
      "Arrays de longitud fija donde cada posición tiene un tipo específico diferente al de las otras posiciones"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "type Point = [number, number] define un array de exactamente 2 numbers. Las tuplas pueden ser readonly, tener elementos opcionales y rest elements."
  },
  {
    question: "¿Qué es <code>Awaited&lt;T&gt;</code> en TypeScript 4.5+?",
    options: [
      "Convierte una función síncrona de tipo T en su equivalente asíncrono que retorna Promise<T>",
      "Registra el resultado de un await en el tipo del scope actual para mejorar la inferencia del compilador",
      "Desenvuelve recursivamente tipos Promise anidados para obtener el tipo del valor resuelto final",
      "Pausa la evaluación del tipo T hasta que todas las promesas del contexto estén completamente resueltas"
    ],
    correct: 2,
    difficulty: "A",
    explanation: "Awaited<Promise<Promise<string>>> = string. Recursivamente desenvuelve Promises. Antes de 4.5, ReturnType de funciones async daba Promise<T>."
  },
  {
    question: "¿Qué es <code>isolatedModules</code> en tsconfig?",
    options: [
      "Garantiza que cada archivo puede transpilarse de forma independiente, prohibiendo features que requieren análisis cross-file",
      "Crea módulos TypeScript aislados del scope global, previniendo colisiones de nombres entre archivos",
      "Compila cada módulo en un worker independiente para aprovechar el paralelismo de la CPU en proyectos grandes",
      "Genera archivos .js separados para cada módulo sin agruparlos, optimizando la carga inicial en el navegador"
    ],
    correct: 0,
    difficulty: "A",
    explanation: "Requerido por Babel, esbuild y otros transpiladores que procesan archivo por archivo. Prohíbe const enum globales, re-exports de tipos sin 'type' y namespace merging."
  },
  {
    question: "¿Qué hace <code>skipLibCheck</code> en tsconfig?",
    options: [
      "Omite la verificación de tipos en todos los archivos .d.ts, acelerando la compilación a costa de no detectar conflictos",
      "Salta la instalación de las dependencias @types al compilar, usando solo tipos definidos en el proyecto propio",
      "Deshabilita verificaciones de compatibilidad entre la versión de TypeScript y las librerías instaladas",
      "Excluye los archivos de node_modules del análisis de tipos para reducir el uso de memoria del compilador"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "skipLibCheck:true es común con múltiples versiones de @types conflictivas. Acelera la compilación pero puede ocultar errores reales en definiciones de tipos."
  },
  {
    question: "¿Para qué sirve el tipo polimórfico <code>this</code> en clases?",
    options: [
      "Para acceder al tipo del objeto global window o globalThis en contextos de módulo TypeScript estricto",
      "Para declarar el primer parámetro explícito de una función como el contexto de ejecución de tipo específico",
      "Para prevenir que subclases sobreescriban métodos que retornan instancias de la clase padre",
      "Para que el tipo de retorno de un método sea el tipo de la clase concreta que lo llama, habilitando method chaining fluido"
    ],
    correct: 3,
    difficulty: "A",
    explanation: "class Builder { add(): this { return this; } }. En subclases, this se refiere a la subclase. Habilita method chaining sin perder el tipo concreto."
  },
  {
    question: "¿Qué es el <code>project references</code> feature de TypeScript?",
    options: [
      "Una forma de estructurar proyectos TypeScript grandes en subproyectos con compilación incremental y dependencias explícitas",
      "Un sistema de referencias cruzadas que el IDE usa para mostrar todos los usos de un símbolo en el proyecto",
      "Una característica que permite importar tipos desde proyectos externos sin instalar sus archivos de declaración",
      "Un modo de compilación que analiza referencias en comentarios JSDoc para generar tipos automáticamente"
    ],
    correct: 0,
    difficulty: "A",
    explanation: "tsconfig.json con references: [{path: '../shared'}] permite compilar proyectos separados con sus propios tsconfig, caché de compilación y boundaries de módulo."
  },
  {
    question: "¿Qué es un <code>module augmentation</code> en TypeScript?",
    options: [
      "La técnica de añadir declaraciones a un módulo externo usando declare module para extender sus tipos existentes",
      "Un proceso que fusiona módulos pequeños en uno grande para mejorar el rendimiento de compilación del proyecto",
      "Una forma de dividir un módulo TypeScript en múltiples archivos que se combinan automáticamente al compilar",
      "La capacidad de importar módulos dinámicamente con import() y enriquecer sus tipos en tiempo de ejecución"
    ],
    correct: 0,
    difficulty: "A",
    explanation: "declare module 'express' { interface Request { user?: User; } } añade la propiedad user al tipo Request de Express sin modificar la librería."
  },
  {
    question: "¿Qué es la <code>varianza</code> de tipos en TypeScript?",
    options: [
      "Una medida de cuánto varía el rendimiento del compilador según la complejidad de las anotaciones de tipo",
      "La propiedad de los tipos genéricos que determina cuántos parámetros de tipo pueden recibir simultáneamente",
      "La dirección en que los tipos se pueden sustituir: covariante (subtipos), contravariante (supertipos) o invariante",
      "El grado de compatibilidad estructural entre dos tipos determinado por el número de propiedades compartidas"
    ],
    correct: 2,
    difficulty: "A",
    explanation: "Array<Dog> es covariante respecto a Array<Animal>. Los parámetros de función son contravariantes (strictFunctionTypes). Covariante = puedes usar subtipo. Contravariante = puedes usar supertipo."
  },
  {
    question: "¿Qué es <code>ConstructorParameters&lt;T&gt;</code>?",
    options: [
      "Retorna el número de parámetros que acepta el constructor de T en tiempo de ejecución mediante reflexión",
      "Crea una nueva clase con los mismos parámetros de constructor que T pero sin propiedades heredadas de la base",
      "Extrae los tipos de parámetros del constructor de una clase T como una tupla tipada",
      "Valida que los argumentos pasados a new T() coincidan con los tipos declarados en el constructor de la clase"
    ],
    correct: 2,
    difficulty: "A",
    explanation: "ConstructorParameters<typeof Date> = [string | number | Date | ...]. Análogo a Parameters pero para constructores (new (...args: any[]) => any)."
  },
  {
    question: "¿Qué es <code>InstanceType&lt;T&gt;</code>?",
    options: [
      "Extrae el tipo de instancia que produce una función constructora T cuando se llama con new",
      "Retorna el tipo de la clase base de T, equivalente a acceder a T.prototype en tiempo de ejecución",
      "Crea un tipo que representa todas las instancias posibles de T incluyendo subclases derivadas",
      "Obtiene el tipo del constructor de T, el inverso de typeof usado en expresiones de clase"
    ],
    correct: 0,
    difficulty: "A",
    explanation: "InstanceType<typeof MyClass> = MyClass. Útil cuando tienes la referencia a la clase (el constructor) y necesitas el tipo de sus instancias."
  }
];
