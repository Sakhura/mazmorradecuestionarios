window.questions_typescript = [
  {
    question: "¿Qué es TypeScript y cuál es su relación con JavaScript?",
    options: [
      "Un framework de JavaScript",
      "TypeScript es un superset de JavaScript que añade tipado estático opcional; se compila (transpila) a JavaScript",
      "Un linter de JavaScript",
      "Un lenguaje completamente diferente"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "Todo código JS válido es TS válido. TypeScript añade tipos, interfaces, enums, etc. El compilador tsc genera JS puro que cualquier runtime puede ejecutar."
  },
  {
    question: "¿Cómo se declara una variable con tipo explícito en TypeScript?",
    options: [
      "let x: number = 5",
      "int x = 5",
      "var x: int = 5",
      "let x = number(5)"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "La sintaxis de tipos en TypeScript es nombre: Tipo. El tipo number cubre enteros y flotantes (como en JS)."
  },
  {
    question: "¿Qué es la inferencia de tipos en TypeScript?",
    options: [
      "Declarar tipos manualmente",
      "Un error de compilación",
      "Una característica de JavaScript",
      "TypeScript deduce automáticamente el tipo de una variable desde su inicializador sin necesidad de anotación explícita"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "let x = 42 → TypeScript infiere que x es number. let msg = 'hola' → string. La inferencia funciona en la mayoría de casos y reduce la verbosidad."
  },
  {
    question: "¿Cuáles son los tipos primitivos básicos de TypeScript?",
    options: [
      "int, float, char, bool",
      "only string y number",
      "var, let, const",
      "number, string, boolean, null, undefined, symbol, bigint"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "TypeScript mapea los primitivos de JS: number (todos los números), string, boolean, null, undefined, symbol (ES6) y bigint (ES2020)."
  },
  {
    question: "¿Qué es el tipo <code>any</code> en TypeScript?",
    options: [
      "El tipo por defecto",
      "Desactiva la verificación de tipos; la variable puede ser de cualquier tipo",
      "El tipo de los arrays",
      "Un tipo genérico"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "any es el escape hatch del sistema de tipos. Úsalo con moderación; prefiere unknown para valores realmente desconocidos, que es más seguro."
  },
  {
    question: "¿Qué diferencia hay entre <code>interface</code> y <code>type</code> en TypeScript?",
    options: [
      "type es más moderno",
      "interface es extensible (declaration merging); type puede representar cualquier tipo incluyendo unions y primitivos",
      "interface no puede tener métodos",
      "Son completamente iguales"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "interface: puede extenderse después de declarada (declaration merging). type: más flexible, puede ser union, intersección, literal. Para objetos ambos funcionan."
  },
  {
    question: "¿Cómo se define una interfaz en TypeScript?",
    options: [
      "struct I { }",
      "type I = {};",
      "class I { }",
      "interface I { prop: string; }"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "interface Persona { nombre: string; edad: number; } Las interfaces definen la forma de los objetos. Las propiedades son obligatorias a menos que se marquen con ?."
  },
  {
    question: "¿Qué hace el operador <code>?</code> en una propiedad de interfaz?",
    options: [
      "La hace readonly",
      "La hace de tipo any",
      "La hace nullable",
      "La hace opcional: la propiedad puede estar presente o ausente"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "interface Config { timeout?: number } significa que timeout es opcional. Acceder a ella sin verificar puede dar undefined."
  },
  {
    question: "¿Qué es un enum en TypeScript?",
    options: [
      "Una interfaz especial",
      "Un tipo de array",
      "Un tipo que define un conjunto de constantes nombradas, numéricas por defecto o de string",
      "Una lista de strings"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "enum Color { Rojo, Verde, Azul } asigna 0, 1, 2. enum Direction { Up='UP', Down='DOWN' } para enums de string. Compilan a objetos JS."
  },
  {
    question: "¿Qué es el tipo <code>void</code> en TypeScript?",
    options: [
      "Similar a null",
      "Un tipo de undefined",
      "El tipo de funciones async",
      "El tipo de retorno de funciones que no retornan un valor significativo"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "function log(msg: string): void { console.log(msg); } void indica que la función no retorna nada útil. A diferencia de undefined, void no debe asignarse a variables."
  },
  {
    question: "¿Cómo se escribe un tipo de array en TypeScript?",
    options: [
      "[number]",
      "number[] o Array<number>",
      "Array(number)",
      "array: number"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "Ambas formas son equivalentes: number[] y Array<number>. La primera es más concisa y común. Para arrays de tipos compuestos: (string | number)[]."
  },
  {
    question: "¿Qué es una unión de tipos (union type) en TypeScript?",
    options: [
      "La unión de dos interfaces",
      "Un tipo genérico",
      "Un tipo que combina todos los campos",
      "Un tipo que puede ser uno de varios tipos: string | number"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "function id(x: string | number) {} acepta string o number. TypeScript estrecha el tipo dentro de if(typeof x === 'string') para acceder a métodos específicos."
  },
  {
    question: "¿Qué es la intersección de tipos en TypeScript?",
    options: [
      "Un tipo genérico",
      "Una unión especial",
      "Un tipo que combina todos los campos de múltiples tipos: A & B",
      "La suma de dos tipos"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "type AB = A & B crea un tipo que tiene todas las propiedades de A y de B. Útil para mixins. Si A y B tienen propiedades con el mismo nombre y tipos incompatibles, el resultado es never."
  },
  {
    question: "¿Qué hace el modificador <code>readonly</code>?",
    options: [
      "La hace de tipo const",
      "Hace la propiedad opcional",
      "Hace la propiedad privada",
      "Impide que la propiedad sea reasignada tras la inicialización"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "interface Punto { readonly x: number; readonly y: number; } Intentar p.x = 5 después de crear el objeto da error de TypeScript. Similar a Object.freeze pero solo en tiempo de compilación."
  },
  {
    question: "¿Qué son los generics en TypeScript?",
    options: [
      "Son sinónimo de Object",
      "Una forma de any tipado",
      "Un tipo de any especial",
      "Permiten crear componentes que funcionan con múltiples tipos, manteniendo la información de tipo"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "function identity<T>(arg: T): T { return arg; } T es un parámetro de tipo. Al llamar identity<string>('hola') o identity('hola') (inferido), T se liga a string."
  },
  {
    question: "¿Cómo se declara una función con tipos en TypeScript?",
    options: [
      "def f(x: number): string {}",
      "function f(x) {}",
      "function f(x: number): string { return '' + x; }",
      "func f(x: number) string {}"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "TypeScript añade tipos a parámetros y tipo de retorno. Si se omite el tipo de retorno, TypeScript lo infiere. El tipo de retorno ayuda a documentar y verificar contratos."
  },
  {
    question: "¿Qué es <code>never</code> en TypeScript?",
    options: [
      "El tipo de valores que nunca ocurren: funciones que siempre lanzan error o loops infinitos",
      "Un tipo especial de void",
      "El tipo de null",
      "Es igual a undefined"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "function error(msg: string): never { throw new Error(msg); } never es el tipo bottom: ningún valor puede ser de tipo never. Útil para exhaustiveness checking."
  },
  {
    question: "¿Qué es <code>unknown</code> y cómo difiere de <code>any</code>?",
    options: [
      "any es obsoleto",
      "unknown es seguro: debes verificar el tipo antes de operar; any desactiva toda verificación",
      "Son sinónimos",
      "unknown es más rápido"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "Con unknown: typeof x === 'string' antes de x.toUpperCase(). Con any: x.cualquierCosa() sin error. Prefiere unknown para inputs externos (JSON.parse, API responses)."
  },
  {
    question: "¿Cómo se usa el operador <code>as</code> en TypeScript?",
    options: [
      "Para convertir tipos de forma segura",
      "Para crear alias de tipos",
      "Es igual a <Tipo>valor",
      "Es un type assertion: le dice al compilador que trates el valor como ese tipo, sin verificación en runtime"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "const input = document.getElementById('id') as HTMLInputElement. Úsalo cuando sabes más que TypeScript. Nunca uses as any a menos que sea absolutamente necesario."
  },
  {
    question: "¿Qué es el archivo <code>tsconfig.json</code>?",
    options: [
      "La configuración de npm",
      "La configuración de ESLint",
      "Un archivo de tipos",
      "El archivo de configuración del compilador TypeScript: opciones de compilación, archivos incluidos/excluidos, strict mode"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "tsconfig.json define: target (ES5/ES6...), module, strict, outDir, rootDir, etc. strict: true activa todas las verificaciones estrictas y es altamente recomendado."
  },
  {
    question: "¿Qué hace la opción <code>strict: true</code> en tsconfig?",
    options: [
      "Requiere tipos en todo",
      "Activa un conjunto de comprobaciones estrictas: strictNullChecks, noImplicitAny, strictFunctionTypes, etc.",
      "Es solo para producción",
      "Hace el código más lento"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "strict: true activa: strictNullChecks (null/undefined son tipos separados), noImplicitAny (error si TypeScript infiere any), strictBindCallApply, y más."
  },
  {
    question: "¿Qué es <code>strictNullChecks</code>?",
    options: [
      "Cuando está activo, null y undefined no son asignables a otros tipos; deben manejarse explícitamente",
      "Es redundante con strict",
      "Prohíbe usar null",
      "Solo afecta a interfaces"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "Con strictNullChecks, let x: string = null es error. Se debe usar string | null. Esto elimina la clase entera de bugs de 'cannot read property of null'."
  },
  {
    question: "¿Qué es el operador <code>?.</code> (optional chaining)?",
    options: [
      "Permite acceder a propiedades de forma segura: retorna undefined si el objeto es null/undefined en lugar de lanzar error",
      "Es igual a &&",
      "Es el operador ternario",
      "Es un tipo de cast"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "user?.address?.city retorna undefined si user o address es null/undefined. Equivale a user && user.address && user.address.city pero más conciso."
  },
  {
    question: "¿Qué hace el operador <code>??</code> (nullish coalescing)?",
    options: [
      "Retorna el lado derecho solo si el izquierdo es null o undefined (no falsy)",
      "Comprueba igualdad estricta",
      "Es igual a ||",
      "Es un operador de tipos"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "valor ?? 'default': retorna 'default' solo si valor es null/undefined. Con ||, '' y 0 también dispararían el fallback. ?? es más preciso."
  },
  {
    question: "¿Cómo se tipan las funciones callback en TypeScript?",
    options: [
      "callback: any",
      "function: (e, d) => void",
      "type Callback = (error: Error | null, data: string) => void",
      "function callback()"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "Las funciones son ciudadanos de primera clase en TypeScript. Se pueden tipar inline, con type alias o con interface. El tipo de retorno void indica que el resultado se ignora."
  },
  {
    question: "¿Qué son los Utility Types en TypeScript?",
    options: [
      "Tipos genéricos predefinidos que transforman tipos existentes: Partial, Required, Readonly, Pick, Omit, Record, etc.",
      "Tipos de utilidades del sistema",
      "Son solo para librerías",
      "Son tipos de node_modules"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "Partial<T> hace todas las propiedades opcionales. Required<T> las hace obligatorias. Readonly<T> las hace inmutables. Pick<T, 'a'|'b'> selecciona campos. Omit<T, 'a'> los excluye."
  },
  {
    question: "¿Qué hace <code>Partial<T></code>?",
    options: [
      "Crea un tipo con la mitad de propiedades",
      "Hace T de solo lectura",
      "Hace T parcialmente genérico",
      "Crea un tipo donde todas las propiedades de T son opcionales"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "Partial<User> transforma { name: string; age: number } en { name?: string; age?: number }. Útil para funciones de actualización (update patches)."
  },
  {
    question: "¿Qué hace <code>Required<T></code>?",
    options: [
      "Es lo mismo que T",
      "Hace que todas las propiedades opcionales de T sean obligatorias",
      "Agrega validación en runtime",
      "Agrega propiedades requeridas"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "Required<Partial<User>> revierte el efecto de Partial. Útil cuando necesitas garantizar que un objeto completamente inicializado."
  },
  {
    question: "¿Qué es una declaración de módulo (<code>declare module</code>)?",
    options: [
      "Añade o extiende la información de tipos para módulos existentes; usado en archivos .d.ts",
      "Un tipo de namespace",
      "Importar un módulo",
      "Exportar un módulo"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "declare module 'mi-libreria' { export function hola(): string; } En archivos .d.ts provee tipos para JS puro. DefinitelyTyped (@types/node, @types/react) es la colección comunitaria."
  },
  {
    question: "¿Qué es un archivo <code>.d.ts</code>?",
    options: [
      "Un archivo de tests",
      "Un archivo de configuración",
      "Un archivo de declaraciones de tipos puro: solo tipos, sin implementación; permite tipar código JavaScript existente",
      "Un archivo de datos"
    ],
    correct: 2,
    difficulty: "E",
    explanation: ".d.ts: declaration file. tsc --declaration genera uno automáticamente de los .ts. Los @types/* son colecciones de .d.ts para librerías JS populares."
  },
  {
    question: "¿Qué hace <code>typeof</code> en TypeScript (nivel de tipos)?",
    options: [
      "Es solo el typeof de JavaScript",
      "En el contexto de tipos, typeof captura el tipo de una variable o función: type T = typeof miVariable",
      "Es un type guard",
      "Es solo para primitivos"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "const config = { host: 'localhost', port: 3000 }; type Config = typeof config; infiere { host: string; port: number }. Útil para derivar tipos de valores."
  },
  {
    question: "¿Qué es <code>keyof</code> en TypeScript?",
    options: [
      "Un operador de tipo que extrae las claves de un tipo como una unión de strings literales",
      "Un tipo genérico",
      "Las claves de un objeto en runtime",
      "Es igual a Object.keys()"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "type Keys = keyof { nombre: string; edad: number } → 'nombre' | 'edad'. Útil para funciones type-safe: function get<T, K extends keyof T>(obj: T, key: K): T[K]"
  },
  {
    question: "¿Qué son los tipos literales en TypeScript?",
    options: [
      "Tipos primitivos",
      "Tipos de enums",
      "Tipos que representan valores exactos: 'hola' (string literal), 42 (number literal), true (boolean literal)",
      "Tipos de strings"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "type Direction = 'norte' | 'sur' | 'este' | 'oeste'. Solo esos 4 strings son válidos. Más preciso que string. El compilador detecta valores no válidos."
  },
  {
    question: "¿Qué hace el modificador <code>private</code> en TypeScript vs JavaScript?",
    options: [
      "Son iguales",
      "TypeScript private es más seguro",
      "private de TypeScript es solo de compilación (no en runtime); # (ECMAScript private fields) es privacidad real en runtime",
      "No hay diferencia"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "class A { private x = 1; } → en el JS generado, x es accesible. class A { #x = 1; } → realmente privado en runtime. TypeScript 4.3+ soporta ambos."
  },
  {
    question: "¿Qué son los type guards en TypeScript?",
    options: [
      "Son decoradores especiales",
      "Guardias de seguridad",
      "Expresiones que en runtime comprueban el tipo de un valor y en compilación estrechan el tipo dentro del bloque",
      "Son iguales a instanceof"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "typeof x === 'string', instanceof Clase, y predicados de tipo (x is T) son type guards. TypeScript estrecha el tipo automáticamente dentro del bloque verdadero."
  },
  {
    question: "¿Qué es la declaración de tipo <code>as const</code>?",
    options: [
      "Un type assertion a const",
      "Hace que TypeScript infiera tipos literales en lugar de tipos generales y marque todo como readonly",
      "Solo funciona con arrays",
      "Es igual a readonly"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "const config = { mode: 'prod', port: 3000 } as const → { readonly mode: 'prod'; readonly port: 3000 }. Sin as const: { mode: string; port: number }."
  },
  {
    question: "¿Qué hace <code>Record<K, V></code>?",
    options: [
      "Crea un tipo de objeto con claves de tipo K y valores de tipo V",
      "Graba un valor",
      "Es igual a Map",
      "Crea un array asociativo"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "Record<string, number> = { [key: string]: number }. Record<'a'|'b', boolean> = { a: boolean; b: boolean }. Útil para objetos de lookup."
  },
  {
    question: "¿Cómo se define un tipo de función en TypeScript?",
    options: [
      "type Fn = (x: number) => string",
      "(x: number): string",
      "function(x): string",
      "function: () => void"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "type Predicado = (x: number) => boolean. En interfaces: metodo(x: number): string. Las dos formas son equivalentes pero type alias es más componible."
  },
  {
    question: "¿Qué es el non-null assertion operator <code>!</code>?",
    options: [
      "Le dice al compilador que estás seguro de que el valor no es null ni undefined, eliminando esa posibilidad del tipo",
      "Negación lógica",
      "Es igual a !!",
      "Convierte a boolean"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "document.getElementById('id')!.value: el ! asegura que el resultado no es null. Es una promesa al compilador; si mientes causará errores en runtime."
  },
  {
    question: "¿Qué hace <code>Pick<T, K></code>?",
    options: [
      "Es igual a Partial",
      "Filtra propiedades opcionales",
      "Crea un tipo con solo las propiedades K seleccionadas de T",
      "Escoge el primer elemento"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "Pick<User, 'nombre' | 'email'> retorna { nombre: string; email: string }. Útil para crear DTOs o vistas parciales de tipos complejos."
  },
  {
    question: "¿Qué hace <code>Omit<T, K></code>?",
    options: [
      "Es igual a Partial",
      "Es lo contrario de Required",
      "Omite el tipo T",
      "Crea un tipo excluyendo las propiedades K de T"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "Omit<User, 'password'> crea un tipo User sin el campo password. Útil para tipos de respuesta de API que no deben exponer ciertos campos."
  },
  {
    question: "¿Qué son los mapped types en TypeScript?",
    options: [
      "Tipos que transforman cada propiedad de otro tipo mediante una iteración: { [K in keyof T]: ... }",
      "Son iguales a generics",
      "Un tipo de Record especial",
      "Tipos de Maps"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "type Optional<T> = { [K in keyof T]?: T[K] } es como Partial. type Readonly<T> = { readonly [K in keyof T]: T[K] }. Permiten transformar tipos de forma sistemática."
  },
  {
    question: "¿Qué son los tipos condicionales en TypeScript?",
    options: [
      "Tipos que se resuelven según una condición: T extends U ? X : Y",
      "Una forma de generics avanzados",
      "if/else en tipos",
      "Son iguales a unions"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "type IsString<T> = T extends string ? true : false. IsString<'hola'> → true. IsString<42> → false. La base de muchos Utility Types como NonNullable<T>."
  },
  {
    question: "¿Qué hace <code>NonNullable<T></code>?",
    options: [
      "Convierte a string",
      "Hace T obligatorio",
      "Elimina null y undefined de T: NonNullable<string | null | undefined> → string",
      "Igual a Required"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "NonNullable<T> = T extends null | undefined ? never : T. Úsalo para asegurarte de que un tipo no incluye null/undefined después de un filtro."
  },
  {
    question: "¿Qué son los Template Literal Types?",
    options: [
      "Son iguales a string",
      "Template strings en runtime",
      "Tipos que se construyen combinando tipos string literal como si fueran template strings: `${Tipo1}-${Tipo2}`",
      "Un tipo de concatenación"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "type EventName = `on${Capitalize<string>}`. type Routes = `/api/${'users'|'posts'}` → '/api/users' | '/api/posts'. Útil para APIs tipo-safe."
  },
  {
    question: "¿Qué es la inferencia en tipos condicionales con <code>infer</code>?",
    options: [
      "Es igual a typeof",
      "Un tipo de casting",
      "Infiere el tipo de una variable",
      "Permite extraer partes de un tipo dentro de una cláusula extends: type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "ReturnType<() => string> → string. PromiseType<Promise<number>> = Promise<number> extends Promise<infer T> ? T : never → number. infer introduce una variable de tipo local."
  },
  {
    question: "¿Qué hace <code>ReturnType<T></code>?",
    options: [
      "El tipo de retorno del genérico",
      "Un tipo de Promise",
      "Extrae el tipo de retorno de un tipo de función",
      "Es igual a typeof"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "type R = ReturnType<() => string> → string. type R2 = ReturnType<typeof miFunc> infiere el retorno de una función existente. Útil para tipar variables que guardan el resultado."
  },
  {
    question: "¿Qué hace <code>Parameters<T></code>?",
    options: [
      "Es igual a Arguments",
      "Los parámetros en runtime",
      "Extrae los tipos de parámetros de una función como tupla: Parameters<(a: string, b: number) => void> → [string, number]",
      "Los parámetros de un genérico"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "Útil para crear wrappers que deben aceptar los mismos parámetros que otra función. Combinado con ReturnType permite proxies completamente tipados."
  },
  {
    question: "¿Qué son las tuplas en TypeScript?",
    options: [
      "Un tipo de array especial",
      "Son iguales a arrays",
      "Un tipo genérico",
      "Arrays con longitud y tipos fijos en cada posición: [string, number, boolean]"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "type Par = [string, number]. const p: Par = ['hola', 42]. p[0] es string, p[1] es number. TypeScript 4+ permite elementos rest y opcionales en tuplas."
  },
  {
    question: "¿Qué son los decoradores en TypeScript?",
    options: [
      "Decoraciones de código",
      "Funciones especiales que modifican clases, métodos, propiedades o parámetros usando la sintaxis @decorador",
      "Son anotaciones Java traducidas",
      "Son macros de compilación"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "@Component class MiClase {} Los decoradores son una propuesta de ECMAScript. TypeScript los implementa con experimentalDecorators: true. Usados extensamente en Angular y NestJS."
  },
  {
    question: "¿Qué es un decorator factory?",
    options: [
      "Un tipo de decorador para clases",
      "Una función que retorna un decorador, permitiendo pasarle parámetros: @Retry(3)",
      "Son iguales a decoradores simples",
      "Una fábrica de decoradores"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "function Retry(times: number) { return function(target, key, descriptor) { ... }; } @Retry(3) llama primero a Retry(3) para obtener el decorador, luego lo aplica."
  },
  {
    question: "¿Qué hace <code>ConstructorParameters<T></code>?",
    options: [
      "Extrae los tipos de parámetros del constructor de una clase como tupla",
      "Es igual a Parameters",
      "Un tipo de interfaz",
      "Los parámetros del constructor en runtime"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "type CP = ConstructorParameters<typeof MiClase>. Útil para crear factories genéricas: function create<T>(Cls: new(...args: any[]) => T, ...args: ConstructorParameters<typeof Cls>): T."
  },
  {
    question: "¿Qué es <code>InstanceType<T></code>?",
    options: [
      "Extrae el tipo de instancia de un tipo constructor: InstanceType<typeof MiClase> → MiClase",
      "Es igual a typeof",
      "Un tipo de interfaz",
      "El tipo de instancia en runtime"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "type I = InstanceType<typeof Array> → Array<any>. Permite trabajar con tipos de clase de forma genérica cuando se reciben como parámetro el constructor."
  },
  {
    question: "¿Cómo se hacen los type guards personalizados (user-defined)?",
    options: [
      "Función que retorna x is Tipo: function isString(x: unknown): x is string { return typeof x === 'string'; }",
      "Con typeof",
      "Con as Tipo",
      "Con instanceof siempre"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "Dentro del if(isString(x)), TypeScript sabe que x es string. Los type guards permiten trabajar con unknown de forma type-safe. Essential pattern para parsear datos externos."
  },
  {
    question: "¿Qué es el narrowing en TypeScript?",
    options: [
      "Eliminar tipos innecesarios",
      "Hacer tipos más genéricos",
      "El proceso por el que TypeScript estrecha un tipo unión a un tipo más específico dentro de un bloque condicional",
      "Reducir el tamaño del bundle"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "Si x: string | number y dentro de if(typeof x === 'string') TypeScript sabe que x es string. Soporta typeof, instanceof, in, discriminated unions, truthiness, etc."
  },
  {
    question: "¿Qué son los discriminated unions (tagged unions)?",
    options: [
      "Un patrón donde cada miembro de una union tiene un campo literal común que permite discriminar: { kind: 'circle', radius } | { kind: 'square', side }",
      "Unions con discriminador",
      "Son un tipo de enum",
      "Son unions normales"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "switch(shape.kind) { case 'circle': return Math.PI * shape.radius**2; case 'square': return shape.side**2; } TypeScript estrecha el tipo en cada case automáticamente."
  },
  {
    question: "¿Qué es el exhaustiveness checking en TypeScript?",
    options: [
      "Asegurarse de que todos los casos de una union/enum se manejan; usando never para detectar casos faltantes en compilación",
      "Verificar todos los imports",
      "Verificar que no hay any",
      "Un tipo de linting"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "function assert(x: never): never { throw new Error(); } Al final de un switch sobre discriminated union, llamar assert(shape) garantiza que si se añade un nuevo tipo, el compilador avisa."
  },
  {
    question: "¿Qué hace el operador <code>in</code> como type guard?",
    options: [
      "Verifica si un elemento está en un array",
      "Es igual a hasOwnProperty",
      "Solo funciona con objetos",
      "Verifica si una propiedad existe en un objeto y estrecha el tipo: if('nombre' in x) TypeScript sabe que x tiene nombre"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "function print(x: { nombre: string } | { id: number }) { if ('nombre' in x) { console.log(x.nombre); } else { console.log(x.id); } }"
  },
  {
    question: "¿Qué es el declaration merging en TypeScript?",
    options: [
      "Un tipo de herencia",
      "Es un error de compilación",
      "Combinar archivos .ts",
      "TypeScript fusiona múltiples declaraciones con el mismo nombre (interface, namespace, function+namespace)"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "interface A { x: number } interface A { y: string } → A tiene x e y. Muy útil para extender tipos de librerías de terceros. Las clases no soportan declaration merging."
  },
  {
    question: "¿Cómo se extienden los tipos de módulos externos (module augmentation)?",
    options: [
      "Modificando node_modules",
      "Con any casting",
      "No es posible",
      "Usando declare module 'nombre-modulo' { interface ExistingInterface { newProp: string } } en un archivo .d.ts"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "Ejemplo: extender Express.Request con propiedades personalizadas. declare global { namespace Express { interface Request { user: User; } } } Muy usado en frameworks con DI."
  },
  {
    question: "¿Qué es el tipo <code>Extract<T, U></code>?",
    options: [
      "Extrae de T los tipos que son asignables a U: Extract<'a'|'b'|'c', 'a'|'c'> → 'a'|'c'",
      "Es igual a Pick",
      "Extrae un valor de un array",
      "Un tipo de filtro para arrays"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "Extract<T, U> = T extends U ? T : never. Lo contrario es Exclude<T, U>. Útil para filtrar tipos union y trabajar con subconjuntos de tipos."
  },
  {
    question: "¿Qué es el tipo <code>Exclude<T, U></code>?",
    options: [
      "Es igual a Omit",
      "Excluye propiedades de un objeto",
      "Excluye de una unión",
      "Elimina de T los tipos que son asignables a U: Exclude<string|number|boolean, boolean> → string|number"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "Exclude<T, U> = T extends U ? never : T. Complemento de Extract. NonNullable<T> = Exclude<T, null | undefined>."
  },
  {
    question: "¿Cómo funciona el type widening en TypeScript?",
    options: [
      "Solo con const",
      "Hacer tipos más específicos",
      "Es un error",
      "TypeScript amplía tipos literales a sus tipos base cuando no hay anotación explícita: let x = 'hola' → string (no 'hola')"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "const x = 'hola' → 'hola' (literal, no widenable). let x = 'hola' → string (widening). Para prevenir widening con let: let x: 'hola' = 'hola' o usar as const."
  },
  {
    question: "¿Qué son los branded types (nominal typing) en TypeScript?",
    options: [
      "Tipos con marcas HTML",
      "Una técnica para simular tipado nominal: crear tipos que son estructuralmente distintos aunque tengan la misma estructura, usando intersecciones con marcas únicas",
      "Un tipo de clase",
      "Son igual a enums"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "type UserId = string & { readonly _brand: 'UserId' }. Evita mezclar un UserId con un ProductId aunque ambos sean strings. Requiere una función de conversión."
  },
  {
    question: "¿Qué hace <code>Capitalize<S></code> y los tipos de string manipulation?",
    options: [
      "Capitaliza strings en runtime",
      "Utility types de TypeScript 4.1+ que transforman tipos string literal: Capitalize, Uncapitalize, Uppercase, Lowercase",
      "Son macros de compilación",
      "Solo funciona con template literals"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "type E = Capitalize<'hola'> → 'Hola'. type K = Uppercase<'abc'> → 'ABC'. Útil para generar nombres de eventos, getters/setters, etc. en tipos derivados."
  },
  {
    question: "¿Qué es el principio de sustitución de Liskov aplicado a TypeScript?",
    options: [
      "En TypeScript, los tipos de los parámetros de funciones son contravariantes y los tipos de retorno covariantes, garantizando compatibilidad segura de tipos de función",
      "Herencia de clases",
      "Una restricción de generics",
      "Es igual a extends"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "Covarianza en retorno: (string → Animal) es subtipo de (string → Dog) si Dog ⊆ Animal. Contravarianza en parámetros: (Animal → R) es subtipo de (Dog → R). TS con strictFunctionTypes lo verifica."
  },
  {
    question: "¿Qué es el <code>satisfies</code> operator de TypeScript 4.9+?",
    options: [
      "Verifica si un tipo satisface una interfaz",
      "Es igual a as",
      "Permite verificar que un valor cumple un tipo sin perder el tipo más específico: const cfg = { ... } satisfies Config",
      "Un tipo de assert"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "const palette = { red: [255,0,0], blue: '#0000ff' } satisfies Record<string, string|number[]>. TypeScript verifica la forma pero mantiene los tipos exactos (red es number[], no string|number[])."
  },
  {
    question: "¿Qué son los ambient declarations?",
    options: [
      "Declaraciones que describen tipos de código existente sin implementarlos: declare const $: Function; declare module 'módulo'; declare namespace",
      "Son comentarios especiales",
      "Son iguales a .d.ts",
      "Declaraciones de ambiente OS"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "Ambient declarations (declare ...) describen el shape de código JS externo para TypeScript. Sin ellas, TS no sabría sobre variables globales o módulos JS sin tipos."
  },
  {
    question: "¿Qué diferencia hay entre <code>interface extends</code> y la intersección <code>&</code>?",
    options: [
      "& es para clases",
      "Son equivalentes siempre",
      "extends es más moderno",
      "extends hereda y verifica compatibilidad (error si conflicto de propiedades); & combina sin verificar (propiedades conflictivas resultan en never)"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "interface A extends B, C {} verifica que no hay conflictos. type D = B & C no verifica: si B.x es string y C.x es number, D.x sería never (imposible)."
  },
  {
    question: "¿Qué son los Recursive Types en TypeScript?",
    options: [
      "Son un error circular",
      "Tipos que se referencian a sí mismos para representar estructuras recursivas como árboles o JSON",
      "Bucles en tipos",
      "Solo con interfaces"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "type JSON = string | number | boolean | null | JSON[] | { [key: string]: JSON }. type TreeNode<T> = { value: T; children: TreeNode<T>[] }. Soportados desde TypeScript 3.7."
  },
  {
    question: "¿Qué hace <code>Awaited<T></code> de TypeScript 4.5+?",
    options: [
      "Espera una promesa",
      "Es igual a ReturnType",
      "Un tipo de async/await",
      "Extrae el tipo resuelto de una Promise anidada: Awaited<Promise<Promise<string>>> → string"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "Awaited<T> desenvuelve recursivamente Promises. Útil para tipar el resultado de funciones async y operaciones de Promise.all con tipos heterogéneos."
  },
  {
    question: "¿Cómo se tipan los módulos de ECMAScript en TypeScript?",
    options: [
      "Con declare module siempre",
      "Con namespaces",
      "Con export/import estándar de ES6; cada archivo es un módulo si tiene import/export; esModuleInterop para compatibilidad con CommonJS",
      "Solo con require()"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "ES modules en TS: import { algo } from './modulo'; export function f() {}. Configurar module: 'esm' en tsconfig. esModuleInterop: true permite import defaultExport from 'commonjs-module'."
  },
  {
    question: "¿Qué son los Abstract Classes en TypeScript y cuándo usarlos?",
    options: [
      "Se usan para todo",
      "Clases que no pueden instanciarse directamente, con métodos abstractos que las subclases deben implementar; útiles para compartir código base",
      "Son igual a clases normales",
      "Son igual a interfaces"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "abstract class Animal { abstract sonido(): string; moverse() { console.log('moviéndose'); } } La subclase implementa sonido(). Úsalas cuando hay código compartido entre subclases."
  },
  {
    question: "¿Qué es la variance en TypeScript Generics?",
    options: [
      "La relación entre la asignabilidad de tipos genéricos cuando los parámetros de tipo se relacionan: covariante (mismo sentido), contravariante (sentido opuesto), invariante (ambos)",
      "Un tipo de inferencia",
      "Solo en arrays",
      "Varianza de velocidad"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "Array<string> es subtipo de Array<string|number> (covariante en lectura). TypeScript 4.7 añade marcadores explícitos: out T (covariante), in T (contravariante)."
  },
  {
    question: "¿Qué hace <code>NoInfer<T></code> en TypeScript 5.4+?",
    options: [
      "Previene la inferencia",
      "Un tipo de never especial",
      "Es igual a unknown",
      "Indica a TypeScript que no use ese tipo como sitio de inferencia, obligando a inferir T desde otros parámetros"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "function setDefault<T>(arr: T[], def: NoInfer<T>): T[]. TypeScript no intenta inferir T desde def, solo desde arr. Evita que un valor default inesperado cambie la inferencia del tipo."
  },
  {
    question: "¿Qué es el <code>using</code> keyword de TypeScript 5.2 (Explicit Resource Management)?",
    options: [
      "Un tipo de try/finally",
      "Es igual a import",
      "Permite declarar recursos que se disponen automáticamente al salir del scope, implementando Symbol.dispose",
      "Es igual a const"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "{ using resource = getResource(); // resource.dispose() se llama automáticamente } Implementa la propuesta TC39 de Explicit Resource Management. Equivale a try/finally."
  },
  {
    question: "¿Qué es el <code>const</code> type parameter en TypeScript 5.0+?",
    options: [
      "Hace el genérico constante",
      "Es igual a as const",
      "Permite que TypeScript infiera tipos literales (no widened) cuando se usa const T: function f<const T>(x: T): T; f(['a','b']) → ['a','b'], no string[]",
      "Solo para arrays"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "Sin const T, f(['a','b']) infería string[]. Con const T infiere readonly ['a', 'b']. Evita la necesidad de as const en los call-sites."
  },
  {
    question: "¿Qué son los index signatures en TypeScript?",
    options: [
      "Solo para maps",
      "Permiten definir el tipo de propiedades de clave desconocida: { [key: string]: number } significa objeto con strings como claves y numbers como valores",
      "Son iguales a Record",
      "Índices de arrays"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "interface StringMap { [key: string]: string; } Limitación: todas las propiedades con nombre también deben ser string. TypeScript 4.1+ soporta pattern template literal keys."
  },
  {
    question: "¿Cómo implementar un tipo genérico con restricciones (<code>extends</code>)?",
    options: [
      "function f<T extends object>(x: T): keyof T[] restringe T a ser un objeto; T extends { length: number } requiere que T tenga length",
      "Usando any",
      "No es posible",
      "Con interface siempre"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "T extends K garantiza que T tiene al menos las propiedades de K. Permite acceder a propiedades de K dentro de la función. Combina con keyof para APIs tipo-safe."
  },
  {
    question: "¿Qué es el Higher-Kinded Types workaround en TypeScript?",
    options: [
      "Tipos de orden superior de TypeScript",
      "TypeScript no soporta HKT nativamente; se simulan con codificación de tipo-clase (type-class encoding) usando interfaces con parámetros de tipo arbitrarios (fp-ts approach)",
      "Son generics normales",
      "Una característica de TypeScript 5"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "fp-ts usa HKT<F, A> con un URI para simular HKT. Permite abstracciones como Functor<F> que funciona para Array, Option, Task, etc. sin repetir código."
  },
  {
    question: "¿Cómo funciona la covarianza/contravarianza con strictFunctionTypes?",
    options: [
      "Solo la covarianza",
      "Con strictFunctionTypes: los parámetros de funciones son contravariantes y los retornos covariantes. Permite detectar errores de asignabilidad de funciones",
      "No cambia nada",
      "Hace todos los tipos invariantes"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "(Dog→void) no es asignable a (Animal→void) con strictFunctionTypes: si pasas un Animal donde esperabas Dog, el código de Dog falla. Sin strict, TS lo permitía."
  },
  {
    question: "¿Qué son los type predicates y cómo crearlos para objetos complejos?",
    options: [
      "function isConfig(x: unknown): x is AppConfig { return typeof x === 'object' && x !== null && 'host' in x && typeof x.host === 'string'; }",
      "Con as Type",
      "Con instanceof siempre",
      "Type guards simples"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "Los predicados de tipo son el mecanismo estándar para narrowing de unknown. En producción, usa Zod o io-ts para validación y parsing con tipos generados automáticamente."
  },
  {
    question: "¿Qué es el patrón Builder con tipos en TypeScript?",
    options: [
      "No aplica en TS",
      "El patrón Builder normal",
      "Usando any",
      "Implementar un Builder que garantice en compilación que todos los campos obligatorios son proporcionados antes de build(), usando tipos acumulativos"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "class Builder<T extends Partial<Config>> { set<K extends keyof Config>(k: K, v: Config[K]): Builder<T & Pick<Config,K>> } El tipo de build() solo existe cuando T extends Config completo."
  },
  {
    question: "¿Cómo tipar una función variádica correctamente?",
    options: [
      "Con overloads siempre",
      "Con arguments",
      "function f<T extends unknown[]>(...args: T): T usa rest parameters con tipos genéricos para mantener los tipos individuales de cada argumento",
      "Con any[]"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "type Append<T extends unknown[], U> = [...T, U]. Con Variadic Tuple Types (TS 4.0): function concat<A extends unknown[], B extends unknown[]>(a: A, b: B): [...A, ...B]."
  },
  {
    question: "¿Qué son las Variadic Tuple Types de TypeScript 4.0?",
    options: [
      "Son iguales a arrays",
      "Permite spreads de tipos genéricos en tuplas: type Concat<A extends unknown[], B extends unknown[]> = [...A, ...B]. Hace posible tipar funciones como concat correctamente",
      "Un tipo de rest parameters",
      "Tuplas de tamaño variable"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "type Reverse<T extends unknown[]> = T extends [infer First, ...infer Rest] ? [...Reverse<Rest>, First] : []. Abre nuevas posibilidades para tipos de función de orden superior."
  },
  {
    question: "¿Cómo se implementa un ORM básico tipo-safe con TypeScript?",
    options: [
      "Usando generics, keyof, y tipos condicionales para garantizar que los campos de las queries corresponden a los campos del modelo",
      "No es posible",
      "Con string literales",
      "Con any siempre"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "type Query<T> = { where?: Partial<T>; select?: (keyof T)[]; orderBy?: keyof T }. function find<T>(model: T, query: Query<T>): T[]. Prisma ORM genera tipos así automáticamente."
  },
  {
    question: "¿Qué es el patrón de función overloads en TypeScript?",
    options: [
      "Es igual a union types",
      "Solo para constructores",
      "Funciones con mismo nombre",
      "Declarar múltiples firmas de función para diferentes combinaciones de parámetros/retornos, con una implementación única que maneja todos los casos"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "function parse(x: string): number; function parse(x: number): string; function parse(x: any): any { ... } Los overloads proveen firmas específicas; la implementación debe ser compatible con todas."
  },
  {
    question: "¿Qué es el patrón Fluent Interface con tipos acumulativos?",
    options: [
      "Con any[]",
      "Usar tipos genéricos acumulativos para rastrear el estado del builder: cada método retorna un tipo más específico que incluye la nueva propiedad añadida",
      "No aplica en TS",
      "Un tipo de Builder"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "Técnica avanzada: type QueryBuilder<T, Selected extends keyof T = never> { select<K extends keyof T>(k: K[]): QueryBuilder<T, Selected | K> }. Garantiza que build() solo existe con campos seleccionados."
  },
  {
    question: "¿Cómo se tipan los módulos con efectos secundarios (side effects)?",
    options: [
      "Con any",
      "Con void",
      "declare module 'mi-polyfill' { } sin exports declara un módulo con solo side effects. Para importar: import 'mi-polyfill';",
      "Con namespace"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "Los polyfills típicamente son solo side effects. TypeScript necesita al menos un declare module vacío para no dar error. Alternativa: ///<reference types='...' /> en global.d.ts."
  },
  {
    question: "¿Cómo implementar el patrón State Machine tipo-safe?",
    options: [
      "Con strings",
      "Con any",
      "Usando discriminated unions para estados y tipos condicionales para transiciones válidas: type Transition<S, E> = S extends ... ? ...",
      "Con enums simples"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "type Machine = { [S in State]: { [E in Event]?: State } }. XState v5 usa TypeScript para verificar que las transiciones son válidas en compilación."
  },
  {
    question: "¿Qué es el patrón de tipos opaque (opaque types) en TypeScript?",
    options: [
      "Simular tipos opacos para prevenir uso incorrecto de valores semánticamente distintos pero estructuralmente iguales, como UserId vs OrderId (ambos strings)",
      "Son igual a branded types",
      "Tipos opacos de rendimiento",
      "Solo con clases"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "type Opaque<T, Tag> = T & { readonly __tag: Tag }; type UserId = Opaque<string, 'UserId'>; type OrderId = Opaque<string, 'OrderId'>; function castUserId(s: string): UserId { return s as UserId; }"
  },
  {
    question: "¿Cómo se genera un SDK tipo-safe desde una especificación OpenAPI?",
    options: [
      "Solo con any",
      "Usando herramientas como openapi-typescript, swagger-typescript-api o OpenAPI Generator para generar tipos e interfaces TypeScript desde el YAML/JSON de la spec",
      "Manualmente",
      "No es posible"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "openapi-typescript genera un archivo de tipos. Con openapi-fetch se obtiene un cliente HTTP completamente tipado donde los parámetros, body y respuestas son type-checked."
  },
  {
    question: "¿Qué son los tipos de plantilla de literales avanzados?",
    options: [
      "Son iguales a template literals",
      "Combinar Template Literal Types con Mapped Types e infer para transformar tipos de objeto: AddPrefix<T, 'on'> convierte {click: ()=>void} a {onClick: ()=>void}",
      "Solo con strings simples",
      "Template strings complejos"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "type Getters<T> = { [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K] }. Las key remapping con as en mapped types (TS 4.1) permiten transformar los nombres de las claves."
  },
  {
    question: "¿Cómo funciona el narrowing con discriminated unions en switch exhaustivo?",
    options: [
      "Solo con if/else",
      "No es posible",
      "Solo con instanceof",
      "switch(shape.kind) TypeScript estrecha el tipo en cada case; en default con assertNever(shape) garantiza exhaustividad en compilación si se añade un nuevo tipo"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "function assertNever(x: never): never { throw new Error('Unexpected: ' + x) } Colocarla en el default del switch: si el type guard no cubre todos los casos, TypeScript da error en compilación."
  },
  {
    question: "¿Qué es el type-level programming en TypeScript?",
    options: [
      "Programar tipos complejos",
      "Solo para librerías",
      "Usar el sistema de tipos de TypeScript como un lenguaje de programación: tipos condicionales, inferencia, recursión para computar tipos en compilación",
      "Son generics avanzados"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "TypeScript types son Turing-completo. Se pueden implementar: If, And, Or, Not, aritmética (con tuplas), mapas, etc. solo con tipos. Útil en librerías de bajo nivel (tRPC, Prisma)."
  },
  {
    question: "¿Qué es tRPC y cómo usa TypeScript end-to-end?",
    options: [
      "Solo para Next.js",
      "Es igual a GraphQL",
      "Un framework que permite compartir tipos entre servidor y cliente sin código de generación: el cliente infiere automáticamente los tipos del servidor",
      "Un tipo de REST API"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "tRPC: definir router en server con procedimientos tipados; el cliente usa los mismos tipos via TypeScript inference. No schemas, no codegen. Type safety end-to-end en TypeScript monorepos."
  },
  {
    question: "¿Cómo tipar un HOC (Higher-Order Component) en React con TypeScript?",
    options: [
      "Con any props",
      "function withAuth<P>(Component: React.ComponentType<P>): React.FC<P & AuthProps> El HOC preserva los props del componente original y añade los del HOC",
      "Con ReactNode",
      "Con JSX.Element siempre"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "El tipo genérico P captura los props originales. El resultado requiere P (del componente) más AuthProps (del HOC). El usuario del HOC provee P, y el HOC provee AuthProps internamente."
  },
  {
    question: "¿Qué es el tipo <code>Prettify<T></code> y por qué es útil?",
    options: [
      "Solo visual",
      "Formatea código",
      "Es un utility type oficial",
      "type Prettify<T> = { [K in keyof T]: T[K] } & {}. Hace que TypeScript muestre el tipo expandido en tooltips en lugar de intersecciones complejas"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "Intersecciones como A & B & C muestran la intersección en tooltips, no las propiedades. Prettify<A & B & C> fuerza a TypeScript a mostrar el objeto con todas sus propiedades expandidas."
  },
  {
    question: "¿Cómo implementar un validador de runtime con tipos TypeScript (type narrowing)?",
    options: [
      "Usar Zod, io-ts o Valibot: definen schemas que validan en runtime y generan los tipos TypeScript automáticamente desde el schema",
      "Con instanceof",
      "Con type assertions",
      "Con any"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "Zod: const UserSchema = z.object({ name: z.string(), age: z.number() }); type User = z.infer<typeof UserSchema>. El tipo se deriva del schema, garantizando consistencia entre validación y tipo."
  },
  {
    question: "¿Qué son los mapped type modifiers <code>+</code> y <code>-</code>?",
    options: [
      "Son operadores de tipos",
      "Solo para readonly",
      "Suma de tipos",
      "Permiten añadir (+readonly, +?) o quitar (-readonly, -?) modificadores en mapped types: { -readonly [K in keyof T]-?: T[K] } hace todo mutable y requerido"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "Required<T> = { [K in keyof T]-?: T[K] } quita el ?: de todas las propiedades. Mutable<T> = { -readonly [K in keyof T]: T[K] } quita readonly. Los + son implícitos."
  },
  {
    question: "¿Cómo se crean tipos recursivos complejos como un tipo JSON válido?",
    options: [
      "Con any",
      "type JSONValue = string | number | boolean | null | JSONValue[] | { [key: string]: JSONValue } Recursión directa soportada desde TypeScript 3.7",
      "No es posible",
      "Con unknown"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "TypeScript 3.7 eliminó la limitación de recursión directa en tipos de objetos. Antes había que usar interfaces para la recursión. Ahora ambos soportan recursión directa."
  },
  {
    question: "¿Qué es el patrón de tipos para una API de evento tipada?",
    options: [
      "Con string callbacks",
      "type EventMap = { 'click': MouseEvent; 'keydown': KeyboardEvent }; on<K extends keyof EventMap>(event: K, handler: (e: EventMap[K]) => void): void garantiza handlers tipados",
      "Con union de functions",
      "Usar any"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "El patrón permite: emitter.on('click', e => e.clientX) con e correctamente tipado como MouseEvent. TypeScript infiere el tipo del evento desde el nombre del evento."
  },
  {
    question: "¿Cómo funcionan los decoradores de clase en TypeScript para metaprogramación?",
    options: [
      "Un decorator de clase recibe el constructor y puede retornar una nueva clase que lo extiende o modifica, accesible via Reflect.metadata en runtime",
      "Son solo anotaciones",
      "No modifican el código",
      "Solo modifican la clase visualmente"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "@Serializable class User {} El decorador puede agregar métodos toJSON/fromJSON automáticamente. Con emitDecoratorMetadata y Reflect.metadata se puede acceder al tipo de los parámetros del constructor."
  },
  {
    question: "¿Qué hace el tipo <code>DeepPartial<T></code>?",
    options: [
      "Es un tipo oficial de TS",
      "Hace todas las propiedades de T y sus propiedades anidadas opcionales de forma recursiva",
      "Partial con profundidad 2",
      "Es igual a Partial"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "type DeepPartial<T> = { [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K] }. Útil para actualizaciones parciales de objetos anidados. No es un tipo oficial pero es ampliamente usado."
  },
  {
    question: "¿Cómo se tipan los Promise y async/await correctamente?",
    options: [
      "Solo con then()",
      "Con any",
      "Con callbacks",
      "async function fetchUser(id: number): Promise<User> { const r = await fetch(...); return r.json() as User; } El tipo de retorno de async es siempre Promise<T>"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "await devuelve el tipo T de Promise<T>. El tipo de retorno de async debe ser Promise<T> explícito o inferido. Usar try/catch o .catch() para manejar errores (tipo any o unknown)."
  },
  {
    question: "¿Qué es el tipo <code>Flatten<T></code>?",
    options: [
      "Un tipo de tuple",
      "Es igual a flat()",
      "type Flatten<T> = T extends Array<infer U> ? U : T. Si T es un array retorna el tipo del elemento; si no, retorna T",
      "Aplanar un array"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "Flatten<string[]> → string. Flatten<number> → number. Útil para funciones que trabajan con valores o arrays de valores indistintamente. Usa infer para extraer el tipo del elemento."
  },
  {
    question: "¿Cómo funciona el type checking de TypeScript con librerías JavaScript sin tipos?",
    options: [
      "Da error siempre",
      "No funciona",
      "Requiere reescribir en TS",
      "TypeScript acepta el módulo como any; con checkJs o @ts-check en .js puede inferir tipos. Lo ideal es instalar @types/libreria o crear un .d.ts personalizado"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "Sin tipos: TypeScript trata el import como any (skipLibCheck). Con @types: tipos mantenidos por la comunidad. Sin @types: crear declarations.d.ts con las partes que usas."
  },
  {
    question: "¿Cómo se tipan los eventos de DOM en TypeScript?",
    options: [
      "document.addEventListener('click', (e: MouseEvent) => e.clientX) TypeScript tiene tipos específicos para cada evento: MouseEvent, KeyboardEvent, InputEvent, etc.",
      "Con event: unknown",
      "Con any event",
      "Con Event genérico"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "TypeScript incluye lib.dom.d.ts con tipos para toda la API del DOM. La sobreescritura de addEventListener infiere el tipo correcto del evento según el nombre del evento string."
  },
  {
    question: "¿Qué es la coerción de tipos vs conversión en TypeScript?",
    options: [
      "TypeScript no coacciona tipos en runtime; as es solo una aserción de compilación. Las conversiones reales (Number(), String(), parseInt()) ocurren en JavaScript en runtime",
      "Son lo mismo",
      "as convierte en runtime",
      "TypeScript tiene su propia conversión"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "value as number solo le dice a TypeScript que trate value como number; no hace nada en runtime. Si value es en realidad un string, el código JS fallará o dará resultados inesperados."
  },
  {
    question: "¿Cómo se define un tipo de tupla con elementos rest?",
    options: [
      "type Tuple = [string, ...number[], boolean]. Los rest elements en tuplas (TS 4.2+) permiten un número variable de elementos de un tipo en el medio o al final",
      "No es posible",
      "type T = [...any[]]",
      "Solo al final"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "type Args = [string, ...number[]]: comienza con string, seguido de cualquier número de numbers. function first<T extends unknown[]>([f, ...rest]: T): T[0] usa tuple destructuring."
  },
  {
    question: "¿Qué es el patrón de tipo funcional (Maybe/Option) en TypeScript?",
    options: [
      "Es igual a undefined",
      "Es Optional de Java",
      "Optional chaining",
      "Implementar un tipo que representa un valor que puede o no estar presente, con operaciones map/flatMap/getOrElse, tipo-safe sin null directamente"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "type Maybe<T> = { readonly value: T; map<U>(f: (x:T)=>U): Maybe<U>; getOrElse(def: T): T }. fp-ts provee Option con todas las operaciones funcionales. Más seguro que null/undefined."
  },
  {
    question: "¿Cómo se implementa el patrón Result/Either en TypeScript?",
    options: [
      "Con boolean",
      "type Result<T, E> = { ok: true; value: T } | { ok: false; error: E }. Permite manejar errores como valores tipo-safe sin excepciones",
      "Con try/catch",
      "Con Promise"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "function divide(a: number, b: number): Result<number, 'division-by-zero'> { if(b === 0) return { ok: false, error: 'division-by-zero' }; return { ok: true, value: a/b }; }"
  },
  {
    question: "¿Qué es el namespace en TypeScript y cuándo usarlo?",
    options: [
      "Siempre mejor que módulos",
      "Agrupa código relacionado bajo un nombre para evitar colisiones de nombres en el scope global; principalmente útil en scripts sin módulos o para agrupar tipos relacionados",
      "Similar a módulos de Node",
      "Son módulos modernos"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "namespace Utils { export function format() {} } → Utils.format(). En código modular con import/export, los namespaces son innecesarios y los módulos ES son la forma recomendada."
  },
  {
    question: "¿Cómo implementar un type-safe router con TypeScript?",
    options: [
      "Con any",
      "Con Map",
      "Con string siempre",
      "Usar Template Literal Types para definir rutas: type Route = '/users' | '/users/:id'; inferir parámetros con pattern matching de tipos para extraer :id como Params"
    ],
    correct: 3,
    difficulty: "B",
    explanation: "type ExtractParams<Route extends string> = Route extends `${string}:${infer Param}/${infer Rest}` ? { [K in Param | keyof ExtractParams<`/${Rest}`>]: string } : ... Esto es la base de frameworks como Hono."
  },
  {
    question: "¿Qué es el tipo <code>Awaited</code> recursivo y su importancia?",
    options: [
      "Es solo para async",
      "Awaited<T> desenvuelve recursivamente: Awaited<Promise<Promise<string>>> → string. Critico para tipar Promise.all con tuplas heterogéneas",
      "No es recursivo",
      "Es igual a Promise<T>"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "Promise.all([p1, p2]) donde p1: Promise<A> y p2: Promise<B> retorna Promise<[A,B]> gracias a Awaited y Variadic Tuple Types. TypeScript 4.5 introdujo Awaited como tipo oficial."
  },
  {
    question: "¿Cómo se implementa inferencia de tipo de base de datos (ORM type generation)?",
    options: [
      "Con any",
      "No es posible",
      "Con strings siempre",
      "Definir un Schema en TypeScript con tipos literales, luego usar mapped types y conditional types para inferir los tipos de las tablas, columnas, relaciones y queries"
    ],
    correct: 3,
    difficulty: "B",
    explanation: "Prisma: el schema.prisma genera tipos TS. Drizzle: define el schema en TS y los tipos se infieren directamente. type InferModel<T extends Table> = { [K in keyof T['columns']]: T['columns'][K]['type'] }"
  },
  {
    question: "¿Qué es el <code>infer</code> en tipos condicionales anidados?",
    options: [
      "Inferencia básica",
      "Solo al nivel superior",
      "Es igual a ReturnType",
      "Permite extraer partes de tipos complejos: type UnpackPromise<T> = T extends Promise<infer U> ? U extends Promise<infer V> ? V : U : T para desenvolver Promises anidadas"
    ],
    correct: 3,
    difficulty: "B",
    explanation: "infer introduce una variable de tipo local en el extends clause. Se puede usar varias veces: T extends [infer A, infer B, ...infer Rest] extrae cabeza, segundo y resto de una tupla."
  },
  {
    question: "¿Cómo tipar un sistema de permisos con TypeScript?",
    options: [
      "Con strings y any",
      "Usando literal types y conditional types: type HasPermission<User, Permission extends string> = User['permissions'] extends Array<Permission> ? true : false. Verificado en compilación",
      "Con arrays de strings",
      "Con enums simples"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "type RestrictedRoute<P extends Permission> = P extends UserPermissions ? Component : never. El tipo del componente cambia según los permisos del usuario, dando acceso solo a rutas permitidas."
  },
  {
    question: "¿Qué es el patrón de tipos para una DSL (Domain Specific Language) en TypeScript?",
    options: [
      "Con strings literales",
      "Una librería especial",
      "Con cualquier tipo",
      "Usar el sistema de tipos para construir una DSL tipo-safe: las operaciones solo son válidas en ciertos estados/contextos, verificado en compilación"
    ],
    correct: 3,
    difficulty: "B",
    explanation: "QueryBuilder<NoWhere> → .where(...): QueryBuilder<WithWhere> → .build() solo disponible en QueryBuilder<WithWhere>. El tipo rastrea el estado de la query y previene builds incompletos."
  },
  {
    question: "¿Cómo se implementa un sistema de eventos completamente tipado?",
    options: [
      "Con union types simples",
      "type EventMap = {...}; class TypedEmitter<T extends EventMap> { on<K extends keyof T>(event: K, handler: (data: T[K]) => void): this; emit<K extends keyof T>(event: K, data: T[K]): boolean }",
      "Con any callbacks",
      "Con Map<string, any>"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "Cada evento tiene su tipo de datos exacto. TypeScript verifica que el handler reciba el tipo correcto para ese evento y que emit envíe el tipo correcto. Patrón usado en Socket.io v4."
  },
  {
    question: "¿Cómo funciona la inferencia de tipos en Promise.all con tuplas?",
    options: [
      "TypeScript 3.9+ infiere correctamente el tipo de Promise.all([p1, p2, p3]) como Promise<[A, B, C]> usando Variadic Tuple Types cuando se pasa una tupla literal",
      "Retorna any[]",
      "Requiere type assertion",
      "Retorna Promise<unknown[]>"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "const [a, b] = await Promise.all([fetchUser(), fetchOrders()]) infiere a: User y b: Order[]. Esto requiere que los argumentos sean una tupla, no un array (usa 'as const' si necesario)."
  },
  {
    question: "¿Qué son los Accessor decorators de TypeScript 4.9?",
    options: [
      "Decorators para auto-accessors (nuevo en TS 4.9): campos de clase con accessor keyword que generan get/set automáticos, decorables de forma más simple que los de propiedad",
      "Solo para clases abstractas",
      "Son deprecados",
      "Decoradores de getters/setters existentes"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "class C { @decorator accessor x = 0; } genera get x() y set x() internamente. El decorador recibe y puede transformar el descriptor del accessor. Alineado con la propuesta de decoradores de ECMAScript."
  },
  {
    question: "¿Cómo implementar un sistema de i18n completamente tipo-safe?",
    options: [
      "Con any",
      "Con strings",
      "Con enum de strings",
      "Definir las traducciones como const y usar typeof + nested keyof para crear un tipo de claves de traducción; la función t() acepta solo claves válidas con interpolaciones tipadas"
    ],
    correct: 3,
    difficulty: "B",
    explanation: "const translations = { home: { title: 'Inicio' } } as const; type TKey = 'home.title' | ... (flattenando el objeto). t('home.title') type-checked; t('home.typo') es error de compilación."
  },
  {
    question: "¿Qué son los tipos de función overloaded genéricos?",
    options: [
      "No existen en TS",
      "Overloads donde cada firma tiene su propio parámetro de tipo: function f<T extends string>(x: T): T; function f<T extends number>(x: T): string; con la implementación manejando ambos",
      "Son igual a union types",
      "Funciones con generics normales"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "Los overloads permiten expresar relaciones entre tipos de entrada y salida que los union types no pueden capturar. Ej: la función retorna un tipo que depende del tipo exacto del input."
  },
  {
    question: "¿Cómo funciona el análisis de flujo de control (control flow analysis) avanzado?",
    options: [
      "Solo con type guards",
      "TypeScript analiza el flujo: si(x !== null) entonces en el bloque x es non-null. Funciona con assignments: let x: string|null; x = 'a'; aquí x es string",
      "No existe en TS",
      "Solo con typeof"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "CFA de TypeScript rastrea asignaciones, condiciones, returns y throws. Desde TS 4.4: análisis de aliases (const hasValue = x != null; if(hasValue) ...) estrecha correctamente."
  },
  {
    question: "¿Qué es el patrón de proxy de tipo en TypeScript?",
    options: [
      "Solo para API responses",
      "Un Proxy de JS tipado",
      "Crear un tipo que intercepta accesos a propiedades transformando el tipo: type Proxy<T> = { [K in keyof T]: T[K] extends string ? UpperCase : T[K] }",
      "Es igual a mapped types"
    ],
    correct: 2,
    difficulty: "B",
    explanation: "Combinado con Proxy de JS y los tipos correspondientes, se pueden crear objetos observables, lazy-loading, caché transparente, todo con type safety. Vue 3 reactive() usa este patrón."
  },
  {
    question: "¿Cómo implementar un tipo de validación de estado de formulario con TypeScript?",
    options: [
      "Con strings de error",
      "Con booleanos",
      "Con any",
      "Rastrear en el tipo qué campos han sido tocados, validados y cuáles tienen errores: FormState<T, Touched extends keyof T, Errors extends Partial<Record<keyof T, string>>>"
    ],
    correct: 3,
    difficulty: "B",
    explanation: "El tipo del estado del formulario evoluciona a medida que el usuario interactúa. submit() solo es accesible cuando Errors es {} (sin errores) y Touched extends keyof T (todos tocados)."
  },
  {
    question: "¿Qué es el patrón de tipo para parsear strings en compilación?",
    options: [
      "Template Literal Types con infer pueden parsear formatos de string en compilación: type ParseCSV<S extends string> = S extends `${infer Row}\\n${infer Rest}` ? [ParseRow<Row>, ...ParseCSV<Rest>] : []",
      "No es posible",
      "Con regex de tipos",
      "Solo en runtime"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "TypeScript puede parsear formatos como rutas URL, SQL básico, CSV, etc. puramente a nivel de tipos. Esto es la base de routing type-safe en frameworks como Hono y tRPC."
  },
  {
    question: "¿Cómo se usa TypeScript con Web Workers para comunicación tipo-safe?",
    options: [
      "Con strings JSON",
      "Definir un tipo de mensajes compartido (MessageMap), crear wrappers tipados para postMessage/onmessage que verifiquen el tipo del mensaje según su discriminante",
      "No es compatible",
      "Con postMessage<any>"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "type WorkerMessage = { type: 'compute'; data: number } | { type: 'result'; value: number }. Wrapper: function send<T extends WorkerMessage>(w: Worker, msg: T): void. El worker verifica con switch."
  },
  {
    question: "¿Cómo crear un tipo de validación de esquemas de base de datos en compilación?",
    options: [
      "Definir el esquema como tipos literales const y usar tipos condicionales para verificar que las queries son válidas: las columnas existen, los tipos de filtros son correctos",
      "Solo en runtime",
      "Con any",
      "No es posible"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "Drizzle ORM hace exactamente esto: el esquema se define en TypeScript y todas las queries se verifican en compilación. type ValidColumn<T extends Table, C extends string> = C extends keyof T['columns'] ? C : never."
  },
  {
    question: "¿Qué son los tipos de acceso indexado en TypeScript?",
    options: [
      "Son lo mismo que keyof",
      "Solo para objetos",
      "T[K] donde K extends keyof T: accede al tipo de una propiedad específica. User['name'] → string. T[number] en arrays da el tipo de elemento",
      "Acceder a índices de arrays"
    ],
    correct: 2,
    difficulty: "B",
    explanation: "type Element<T extends readonly unknown[]> = T[number]. (typeof arr)[0] da el tipo del primer elemento. Anidado: User['address']['city'] da el tipo de city dentro de address."
  },
  {
    question: "¿Cómo implementar un sistema de tipos para SQL en TypeScript?",
    options: [
      "Con strings",
      "Con any siempre",
      "Usando Template Literal Types para parsear SQL: type ParseSelect<S extends string> = S extends `SELECT ${infer Cols} FROM ${infer Table}` ? { cols: ParseCols<Cols>; table: Table } : never",
      "No es práctico"
    ],
    correct: 2,
    difficulty: "B",
    explanation: "Esto es lo que hace kysely: una query builder donde el tipo del resultado se infiere de la query TypeScript. El schema de la base de datos se define como tipos y las queries se verifican contra él."
  },
  {
    question: "¿Qué es el análisis de tipos distributivos en condicionales?",
    options: [
      "Un tipo de mapped type",
      "Cuando T es un tipo union y se usa T extends U ? X : Y, el condicional se distribuye sobre cada miembro de la union: (A|B) extends U → (A extends U ? X : Y) | (B extends U ? X : Y)",
      "Solo con generics",
      "Los tipos se distribuyen solos"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "type NonNullable<T> = T extends null|undefined ? never : T. Con T = string|null: (string extends null|undefined ? never : string) | (null extends null|undefined ? never : null) → string."
  },
  {
    question: "¿Cómo se previenen las regresiones de tipos en TypeScript?",
    options: [
      "Usando dtslint, tsd, o @ts-expect-error para escribir tests de tipos que verifican que ciertos tipos son correctos o causan errores esperados en CI",
      "No es posible",
      "Con strict:true",
      "Con tests unitarios"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "// @ts-expect-error garantiza que la línea siguiente causa un error de tipo; si no lo hace, tsd/dtslint falla. Útil para verificar que type guards, overloads y generics se comportan correctamente."
  },
  {
    question: "¿Cómo implementar el tipo de HKT (Higher-Kinded Types) en TypeScript sin soporte nativo?",
    options: [
      "Con generics simples",
      "Con any",
      "Usando interface URI-based encoding: interface URItoKind<A> { 'Option': Option<A>; 'Array': Array<A> }; type Kind<F extends URIS, A> = URItoKind<A>[F]. fp-ts usa este patrón",
      "No es posible"
    ],
    correct: 2,
    difficulty: "A",
    explanation: "URIS = keyof URItoKind<any>. type Functor<F extends URIS> = { map<A,B>(fa: Kind<F,A>, f: (a:A)=>B): Kind<F,B> }. Permite abstraer sobre el tipo contenedor (F) que es sí mismo un tipo paramétrico."
  },
  {
    question: "¿Qué son los Inductive Types en TypeScript y cómo representar listas tipadas?",
    options: [
      "Representar estructuras de datos algebraicas en el sistema de tipos: type List<T> = { isEmpty: true } | { isEmpty: false; head: T; tail: List<T> }. Con tipos condicionales recursivos",
      "Tipos inductivos matemáticos",
      "Con interfaces circulares",
      "Solo con arrays"
    ],
    correct: 0,
    difficulty: "A",
    explanation: "type Length<T extends List<any>, Acc extends any[] = []> = T['isEmpty'] extends true ? Acc['length'] : Length<T['tail'], [...Acc, any]>. Computar la longitud de una List tipada en compilación."
  },
  {
    question: "¿Cómo implementar aritmética en el sistema de tipos de TypeScript?",
    options: [
      "Con Template Literals",
      "No es posible",
      "Con Symbols",
      "Usar tuplas como representación de números: type Add<A extends number, B extends number> = [...Tuple<A>, ...Tuple<B>]['length']. Funciona para números pequeños"
    ],
    correct: 3,
    difficulty: "A",
    explanation: "type Tuple<N extends number, Acc extends any[] = []> = Acc['length'] extends N ? Acc : Tuple<N, [...Acc, any]>. type Add<A extends number, B extends number> = [...Tuple<A>, ...Tuple<B>]['length']."
  },
  {
    question: "¿Qué son los tipos de rango (Range types) y cómo implementarlos?",
    options: [
      "Tipos de arrays con rango",
      "No son posibles",
      "Con Template Literals",
      "type Range<F extends number, T extends number> usando recursión de tipos para generar uniones de literales numéricos: Range<1,5> → 1|2|3|4|5"
    ],
    correct: 3,
    difficulty: "A",
    explanation: "type Range<F extends number, T extends number, Acc extends number[] = [], Count extends number = F> = Count extends T ? Acc[number] | Count : Range<F, T, [...Acc, Count], Succ<Count>>. Succ<N> incrementa N."
  },
  {
    question: "¿Cómo funciona el sistema de tipos de TypeScript para APIs de REST tipo-safe end-to-end?",
    options: [
      "Con Swagger",
      "Definir rutas y schemas con Zod/TypeBox; usar inferencia de tipos en el router (Hono, tRPC) para que el cliente tenga exactamente los tipos del servidor sin generación de código",
      "Con any",
      "Con GraphQL siempre"
    ],
    correct: 1,
    difficulty: "A",
    explanation: "Hono: const app = new Hono(); app.get('/users/:id', handler). El cliente Hono infiere el tipo de los params, query, body y respuesta. type safe sin codegen. Funciona con Cloudflare Workers."
  },
  {
    question: "¿Qué es el patrón de tipos para una librería de componentes UI completamente tipada?",
    options: [
      "Variantes mediante tipos literales (variant: 'primary'|'secondary'), composición de props (PolymorphicComponent<As extends ElementType>), forwarded refs tipados",
      "Con Props genérico",
      "Con any props",
      "Con React.FC<any>"
    ],
    correct: 0,
    difficulty: "A",
    explanation: "type PolymorphicProps<As extends ElementType, Props> = Props & Omit<ComponentPropsWithRef<As>, keyof Props> & { as?: As }. Permite <Button as='a' href='...'> con tipos correctos para anchor."
  },
  {
    question: "¿Cómo se diseña un type-safe command pattern con TypeScript?",
    options: [
      "type CommandMap = { 'create-user': { email: string }; 'delete-user': { id: number } }; function dispatch<T extends keyof CommandMap>(cmd: T, payload: CommandMap[T]): void garantiza payloads correctos",
      "Con any",
      "Con union types simples",
      "Con strings"
    ],
    correct: 0,
    difficulty: "A",
    explanation: "El patrón permite: dispatch('create-user', { email: 'a@b.com' }) ✓; dispatch('delete-user', { email: 'a' }) ✗ (id requerido). Extensible: agregar al tipo agrega soporte automáticamente."
  },
  {
    question: "¿Cómo implementar un tipo que convierte tipos a sus formas serializables?",
    options: [
      "Con JSON.stringify tipos",
      "No es posible",
      "Con any",
      "type Serializable<T> = T extends Date ? string : T extends Map<infer K, infer V> ? Record<Serializable<K>&string, Serializable<V>> : T extends object ? {[K in keyof T]: Serializable<T[K]>} : T"
    ],
    correct: 3,
    difficulty: "A",
    explanation: "Este tipo transforma un objeto con Dates, Maps, Sets a su representación JSON. Útil para tipar funciones de serialización que garantizan que el resultado es serializable a JSON."
  },
  {
    question: "¿Qué es el patrón de tipo para actualizaciones profundas (deep merge)?",
    options: [
      "Object.assign con tipos",
      "type DeepMerge<A, B> = { [K in keyof A | keyof B]: K extends keyof B ? K extends keyof A ? A[K] extends object ? DeepMerge<A[K], B[K]> : B[K] : B[K] : K extends keyof A ? A[K] : never }",
      "Con Partial siempre",
      "Con spread de tipos"
    ],
    correct: 1,
    difficulty: "A",
    explanation: "DeepMerge<A, B> unifica recursivamente los tipos. Si ambos tienen la misma clave con tipos objeto, se mezclan. Si solo uno la tiene, se toma ese. Usado en configuraciones con defaults."
  },
  {
    question: "¿Cómo se implementa el tipo para un parser combinador (parser combinators)?",
    options: [
      "Con any string",
      "type Parser<T> = (input: string) => { value: T; rest: string } | null. Combinadores: map, chain, choice, many. Todo tipado, el resultado del parser se refleja en T",
      "Con RegExp siempre",
      "Con strings de regex"
    ],
    correct: 1,
    difficulty: "A",
    explanation: "type Chain<A, B> = A extends Parser<infer TA> ? (fn: (a: TA) => Parser<B>) => Parser<B> : never. Los combinadores mantienen los tipos a través de las composiciones. Parsec en TypeScript."
  },
  {
    question: "¿Cómo se implementa un sistema de tipos para protocol buffers en TypeScript?",
    options: [
      "Definir mensajes protobuf como tipos TypeScript, generar codificadores/decodificadores tipados con protoc-gen-ts o buf.build; el resultado es completamente type-safe",
      "Con strings JSON",
      "Con any",
      "No es posible en TS"
    ],
    correct: 0,
    difficulty: "A",
    explanation: "protoc-gen-ts genera: type UserMessage = { id: number; name: string }; function encodeUser(msg: UserMessage): Uint8Array. El tipo garantiza que solo se envían mensajes válidos."
  },
  {
    question: "¿Cómo implementar un tipo de builder con validación en etapas?",
    options: [
      "Con booleanos en runtime",
      "Usar phantom types: class Builder<State extends BuilderState> { ... } donde State es un tipo literal que rastrea qué etapas se han completado; build() solo existe cuando State = 'complete'",
      "Con any",
      "Con interfaces separadas"
    ],
    correct: 1,
    difficulty: "A",
    explanation: "type BuilderState = 'empty' | 'withName' | 'withAge' | 'complete'. setName(): Builder<'withName'>. build() solo existe en Builder<'complete'>. El compilador previene builds incompletos."
  },
  {
    question: "¿Qué es el tipo de función de punto fijo (fixed-point types)?",
    options: [
      "Función que retorna lo mismo",
      "Solo en fp-ts",
      "Es un tipo de recursión",
      "type Fix<F> = F extends (x: Fix<F>) => infer R ? R : never. Permite definir tipos recursivos a través de la aplicación del tipo-lambda F a sí mismo. Base teórica de Y-combinator de tipos"
    ],
    correct: 3,
    difficulty: "A",
    explanation: "type List<A> = Fix<(self: List<A>) => { head: A; tail: self } | null>. Fix permite expresar estructuras recursivas en términos de funciones de tipo. Base de la teoría de categorías aplicada a tipos."
  },
  {
    question: "¿Cómo se implementa el tipo para GraphQL schema-first development?",
    options: [
      "Con any",
      "Con strings",
      "Generar tipos TypeScript desde el schema GraphQL con graphql-codegen, crear tipos para las queries y mutaciones que verifican exactamente qué campos se seleccionan",
      "Con interfaces manuales"
    ],
    correct: 2,
    difficulty: "A",
    explanation: "graphql-codegen: del schema GraphQL genera los tipos de resolvers, input types, response types. El tipo del resultado de una query exactamente refleja los campos seleccionados (no el tipo completo)."
  },
  {
    question: "¿Cómo diseñar un sistema de tipos para WebAssembly interop?",
    options: [
      "Con buffers de bytes",
      "Definir interfaces TypeScript que mapean los tipos de WASM: i32→number, i64→bigint, f32/f64→number. Crear wrappers tipados para la memoria WASM. WebAssembly.Instance tipado",
      "Con any",
      "No tiene tipos posibles"
    ],
    correct: 1,
    difficulty: "A",
    explanation: "@types/webassembly-api existe pero es mínimo. Para interop serio: wasm-bindgen (Rust) genera TypeScript bindings automáticamente. Para C/C++: Emscripten con tipos manuales o wasm-pack."
  },
  {
    question: "¿Qué es el patrón de tipos para un sistema de validación composable?",
    options: [
      "Con any",
      "Con instanceof",
      "Con Zod directamente",
      "type Validator<T> = (x: unknown) => Result<T, ValidationError>. Combinadores: and<T,U>(a: Validator<T>, b: Validator<U>): Validator<T&U>; or<T,U>(...): Validator<T|U>"
    ],
    correct: 3,
    difficulty: "A",
    explanation: "El tipo del validador compuesto refleja exactamente el tipo del valor validado. and combina validadores: el resultado es la intersección de tipos. Base de librerías como Zod, Yup, Valibot."
  },
  {
    question: "¿Cómo implementar un sistema de tipos Turing-completo en TypeScript?",
    options: [
      "Solo para tipos simples",
      "No es posible",
      "El sistema de tipos de TypeScript es Turing-completo via tipos condicionales recursivos: se puede implementar cualquier cómputo como Fibonacci, máquinas de Turing, etc. a nivel de tipos",
      "Con generics básicos"
    ],
    correct: 2,
    difficulty: "S",
    explanation: "type Fib<N extends number> = N extends 0|1 ? N : Add<Fib<Pred<N>>, Fib<Pred<Pred<N>>>>. TypeScript tiene un límite de profundidad de recursión (~1000). Instantiation depth exceeded es el error de límite."
  },
  {
    question: "¿Qué es el problema de la completitud de tipos en librerías TypeScript?",
    options: [
      "No existe este problema",
      "Es un bug de TS",
      "El trade-off entre completitud (todos los usos válidos son aceptados) y solidez (ningún uso inválido es aceptado); TypeScript sacrifica algo de solidez por usabilidad (bivariant method parameters)",
      "Que todos los tipos compilen"
    ],
    correct: 2,
    difficulty: "S",
    explanation: "TypeScript no es sound: bivariant method parameters, la ausencia de verificación de runtime para type assertions, type erasure. Esto es intencional: TS prioriza la usabilidad sobre la corrección matemática total."
  },
  {
    question: "¿Cómo se diseña un tipo para un motor de templates tipo-safe?",
    options: [
      "Con RegExp",
      "Parsear el template string en compilación usando Template Literal Types: type ExtractVars<T extends string> = T extends `${string}{{${infer Var}}}${infer Rest}` ? Var | ExtractVars<Rest> : never",
      "Con eval",
      "Con strings y any"
    ],
    correct: 1,
    difficulty: "S",
    explanation: "type TemplateVars = ExtractVars<'Hola {{nombre}}, tienes {{edad}} años'> → 'nombre' | 'edad'. function render(t: T, vars: Record<ExtractVars<T>, string>): string garantiza todas las variables."
  },
  {
    question: "¿Qué es el tipo de datos algebraico (ADT) y cómo modelarlo perfectamente en TypeScript?",
    options: [
      "Solo con clases",
      "Con enums siempre",
      "Sum types (discriminated unions): A | B. Product types: { a: A; b: B } (tuplas, objetos). Juntos forman ADTs que permiten modelar dominio con precisión. TypeScript es el único lenguaje mainstream con ADTs nativos en types",
      "Un tipo de álgebra relacional"
    ],
    correct: 2,
    difficulty: "S",
    explanation: "type Tree<A> = { tag: 'leaf'; value: A } | { tag: 'node'; left: Tree<A>; right: Tree<A> }. Pattern matching: switch(tree.tag) exhaustivo. Más seguro que herencia de clases para variantes de tipo."
  },
  {
    question: "¿Cómo funciona el sistema de módulos TypeScript con module resolution personalizada?",
    options: [
      "Implementar un custom module resolver con plugins de TypeScript (TypeScript Language Service plugins), o configurar paths + baseUrl, o usar bundler-specific resolution (Vite, webpack)",
      "Solo con paths en tsconfig",
      "No es personalizable",
      "Solo con node_modules"
    ],
    correct: 0,
    difficulty: "S",
    explanation: "tsconfig paths: { '@/*': ['./src/*'] }. Con bundlers: configurar el resolver. Para monorepos: project references + composite. TypeScript 5.0: resolution-mode para imports condicionados al entorno."
  },
  {
    question: "¿Qué son los Language Service Plugins de TypeScript y para qué sirven?",
    options: [
      "Extensiones que modifican el TypeScript Language Service: autocompletado, diagnósticos, refactorings personalizados. Permiten que el editor 'entienda' DSLs o convenciones del proyecto",
      "Son plugins de webpack",
      "Solo para linting",
      "Plugins de IDE"
    ],
    correct: 0,
    difficulty: "S",
    explanation: "Ejemplo: un plugin que añade autocompletado para nombres de CSS classes (CSS Modules), o que valida queries SQL en template literals. TypeScript-eslint usa LSP para reglas personalizadas."
  },
  {
    question: "¿Cómo implementar un compilador de tipos que transforme un esquema JSON a tipos TypeScript en compilación?",
    options: [
      "Con any",
      "Con codegen externo",
      "Solo en runtime",
      "No es posible en compilación estricta, pero con Template Literal Types complejos se puede parsear y transformar schemas simples; para schemas reales, codegen (quicktype, json-schema-to-ts) es la solución práctica"
    ],
    correct: 3,
    difficulty: "S",
    explanation: "json-schema-to-ts: FromSchema<typeof schema> infiere el tipo TypeScript desde el JSON Schema en tiempo de compilación. Usa conditional types e infer para parsear el schema JSON."
  },
  {
    question: "¿Qué es el tipo de unificación (unification) y cómo TypeScript lo implementa?",
    options: [
      "Es la inferencia normal",
      "Un tipo de generics",
      "El algoritmo que resuelve variables de tipo inferidas: cuando TypeScript ve T y string, unifica T=string. El algoritmo de inferencia de TS resuelve sistemas de ecuaciones de tipo",
      "Unir tipos union"
    ],
    correct: 2,
    difficulty: "S",
    explanation: "La inferencia de TypeScript es un algoritmo de unificación con heurísticas. Falla cuando hay ambigüedad o el tipo es demasiado complejo. entender la unificación permite escribir tipos que infieren correctamente."
  },
  {
    question: "¿Cómo diseñar tipos para un sistema de compilación incremental tipo-safe?",
    options: [
      "No es posible",
      "Con any",
      "Solo con webpack",
      "TypeScript Project References: composite: true, declarationMap: true permite builds incrementales con verificación de tipos entre proyectos. tsBuildInfoFile para caché. Monorepos: Turborepo con TS"
    ],
    correct: 3,
    difficulty: "S",
    explanation: "Project references: tsconfig.json con references: [{path: '../core'}]. tsc --build compila solo lo que cambió. Los tipos de 'core' son accesibles en 'app' con verificación completa."
  },
  {
    question: "¿Qué son los type-level unit tests y cómo se implementan en producción?",
    options: [
      "Usando tsd, @ts-expect-error, o type-fest's expectType<Expected>(value: actual) para verificar en CI que los tipos son correctamente inferidos y que los errores de tipo ocurren donde se esperan",
      "Con cualquier test runner",
      "Con jest solamente",
      "No existen"
    ],
    correct: 0,
    difficulty: "S",
    explanation: "tsd: expectType<string>(result); expectError(f(wrongArg)). Se ejecuta con npx tsd como parte de CI. Previene regresiones de tipos en librerías. type-challenges en GitHub tiene miles de ejercicios."
  },
  {
    question: "¿Cómo funciona el sistema de tipos de TypeScript para discriminar tipos en tiempo de compilación con predicados complejos?",
    options: [
      "Solo con typeof",
      "Con typeof básico",
      "Con any",
      "Combinar: assertion functions (asserts x is T), type predicates, control flow analysis, y discriminated unions para crear sistemas de validación donde el compilador verifica exhaustividad"
    ],
    correct: 3,
    difficulty: "S",
    explanation: "function assertUser(x: unknown): asserts x is User { if(!isUser(x)) throw Error() } Después de la llamada, TypeScript sabe que x es User sin crear una variable nueva. Requiere noImplicitReturns."
  },
  {
    question: "¿Qué son las dependencias de tipos en TypeScript y cómo afectan el rendimiento del compilador?",
    options: [
      "No afectan el rendimiento",
      "Solo en archivos grandes",
      "Importar tipos solo",
      "Los tipos complejos (HKT, ADTs profundos, Template Literals complejos) aumentan el tiempo de compilación exponencialmente; profiling con --generateTrace y análisis con @typescript-analyze-trace"
    ],
    correct: 3,
    difficulty: "S",
    explanation: "--generateTrace output.json + @typescript-analyze-trace muestra qué tipos son más costosos. Tipos condicionales distributivos con uniones grandes son especialmente costosos. Simplificar o memoizar."
  },
  {
    question: "¿Cómo implementar un tipo que simule el comportamiento de módulos con scope cerrado?",
    options: [
      "Usar el patrón de módulo de TypeScript combinado con symbols únicos: type Module<T> = { readonly [K in keyof T]: T[K] } & { readonly [MODULE_BRAND]: unique symbol }",
      "Con clases privadas",
      "Con modules de ES",
      "Con namespaces"
    ],
    correct: 0,
    difficulty: "S",
    explanation: "unique symbol crea un tipo nominal único: const sym: unique symbol = Symbol(). Dos declaraciones de unique symbol son siempre tipos distintos. Permite crear tipos verdaderamente distintos estructuralmente."
  }
];
