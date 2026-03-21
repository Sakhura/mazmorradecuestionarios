window.questions_swift = [
  {
    question: "¿Qué es Swift?",
    options: [
      "Un lenguaje web de Apple diseñado específicamente para construir aplicaciones en el navegador",
      "Lenguaje compilado, type-safe, moderno creado por Apple para iOS, macOS, watchOS, tvOS; sucesor de Objective-C",
      "Un lenguaje exclusivo de macOS que no puede compilarse para plataformas móviles de Apple",
      "Un lenguaje de scripts interpretado de Apple para automatizar tareas en el sistema operativo"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "Swift fue anunciado en 2014. Es rápido, seguro, y tiene sintaxis moderna. Compila a código nativo con LLVM."
  },
  {
    question: "¿Qué son los Optionals en Swift?",
    options: [
      "El equivalente directo a null de Java: una referencia que puede apuntar a un objeto o estar vacía",
      "Tipo que puede contener un valor o nil: String? puede ser String o nil; el compilador obliga a manejar ambos casos",
      "Parámetros de función que pueden omitirse al llamarla, tomando un valor por defecto predefinido",
      "Un tipo de colección que puede estar vacía o contener elementos de cualquier tipo sin restricción"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "var name: String? = nil. Acceso seguro: name?.count. Forced: name! (crash si nil). if let n = name { ... }. guard let n = name else { return }."
  },
  {
    question: "¿Qué hace <code>guard let</code>?",
    options: [
      "Verifica que un valor sea del tipo esperado y hace un cast condicional si es posible",
      "Protege una sección crítica del código garantizando acceso exclusivo en entornos concurrentes",
      "Funciona igual que if let pero con la condición negada, sin diferencia en el scope del valor",
      "Desenvuelve un optional y si es nil, ejecuta el else y sale del scope; el valor queda disponible después del guard"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "guard let user = session.user else { return }; // user disponible aquí. Mantiene el happy path sin anidamiento excesivo."
  },
  {
    question: "¿Qué son los value types vs reference types en Swift?",
    options: [
      "Ambos tipos tienen el mismo comportamiento en memoria y son intercambiables en Swift moderno",
      "Los structs no pueden tener métodos; solo almacenan datos sin comportamiento asociado",
      "Structs/Enums son value types (copiados al asignar); Classes son reference types (compartidos por referencia)",
      "Las clases son siempre más rápidas que los structs independientemente del contexto de uso"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "Swift prefiere structs (value types): seguro para concurrencia, sin efectos secundarios inesperados. Classes cuando se necesita herencia o identidad compartida."
  },
  {
    question: "¿Qué hace <code>let</code> vs <code>var</code>?",
    options: [
      "var siempre crea una referencia al objeto en lugar de almacenar el valor directamente",
      "let es constante (inmutable); var es variable (mutable)",
      "let solo puede usarse con tipos primitivos como Int, Double y Bool en Swift",
      "Son equivalentes en comportamiento y el compilador los trata de la misma manera internamente"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "let x = 5 no puede cambiar. var y = 5 puede. Preferir let siempre que sea posible. Con structs, let hace todos los campos inmutables."
  },
  {
    question: "¿Qué son los protocolos en Swift?",
    options: [
      "Reglas de comunicación entre dispositivos implementadas como tipos en la biblioteca estándar",
      "Define un blueprint de métodos, propiedades que una clase/struct/enum debe implementar; como interfaces en otros lenguajes pero más poderosos",
      "Tipos de datos especiales para definir contratos de comunicación en aplicaciones de red",
      "Clases abstractas que no pueden instanciarse directamente y deben ser extendidas para usarse"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "protocol Drawable { func draw() }. Las extensiones de protocolo pueden proveer implementaciones por defecto. Protocol-oriented programming es el paradigma central de Swift."
  },
  {
    question: "¿Qué es <code>enum</code> con associated values?",
    options: [
      "Un enum donde todas las variantes deben ser del mismo tipo primitivo como Int o String",
      "Un enum con constantes enteras cuyo valor numérico se especifica manualmente para cada caso",
      "Enum cuyas variantes pueden llevar datos: enum Result<T> { case success(T); case failure(Error) }",
      "El equivalente directo a los enums de Java con sus mismas características y limitaciones"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "enum Shape { case circle(radius: Double); case rectangle(width: Double, height: Double) }. switch shape { case .circle(let r): ... }"
  },
  {
    question: "¿Qué son las closures en Swift?",
    options: [
      "Un mecanismo exclusivo para definir callbacks en operaciones asíncronas de networking",
      "Bloques equivalentes a los de Objective-C con la misma sintaxis y semántica de captura",
      "Funciones anónimas que capturan su contexto: { params -> ReturnType in body }",
      "Bloques de código que encierran un conjunto de sentencias sin capturar el entorno exterior"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "let double = { (x: Int) -> Int in x * 2 }. Trailing closure: array.sorted { $0 > $1 }. Las closures capturan referencias por defecto."
  },
  {
    question: "¿Qué es la gestión de memoria en Swift (ARC)?",
    options: [
      "Gestión manual con retain/release que el programador debe llamar explícitamente en cada caso",
      "Garbage Collector que detiene la ejecución periódicamente para liberar objetos sin referencias",
      "Automatic Reference Counting: el compilador inserta retains/releases automáticamente; no hay stop-the-world GC",
      "Solo aplica a instancias de clases definidas por el usuario y no a tipos de la biblioteca estándar"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "ARC rastrea referencias a objetos. Al llegar a 0 referencias, se libera automáticamente. Ciclos de retención se rompen con weak/unowned."
  },
  {
    question: "¿Qué hace <code>weak var</code>?",
    options: [
      "Referencia débil que no incrementa el conteo de referencias; se convierte en nil automáticamente cuando el objeto es liberado",
      "Funciona igual que unowned pero puede almacenar cualquier tipo incluyendo value types",
      "Una referencia fuerte opcional que incrementa el conteo de ARC pero puede contener nil",
      "Una variable con acceso de solo lectura que no puede modificarse después de ser inicializada"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "weak var delegate: MyDelegate? — debe ser Optional. Cuando el objeto al que apunta es liberado, la referencia se pone a nil automáticamente."
  },
  {
    question: "¿Qué son las generics en Swift?",
    options: [
      "Tipos de datos predefinidos por el sistema operativo que están disponibles en toda aplicación",
      "Son equivalentes a los de Java con el mismo mecanismo de type erasure en tiempo de ejecución",
      "func swap<T>(_ a: inout T, _ b: inout T) — código que funciona con cualquier tipo que satisfaga constraints",
      "Un mecanismo exclusivo para colecciones de la biblioteca estándar como Array y Dictionary"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "func max<T: Comparable>(_ a: T, _ b: T) -> T. El compilador genera código específico para cada tipo usado (similar a templates de C++)."
  },
  {
    question: "¿Qué son las property wrappers?",
    options: [
      "Anotaciones decorativas sin comportamiento que solo documentan el propósito de una propiedad",
      "Tipos especiales que envuelven variables para añadir comportamiento visual en el inspector de Xcode",
      "@propertyWrapper permite encapsular lógica de get/set: @Published, @State, @Binding en SwiftUI",
      "Un tipo de computed property que calcula su valor a partir de otras propiedades del mismo objeto"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "@Published var name = '' genera objectWillChange publisher. @State var count = 0 en SwiftUI maneja estado local. Se pueden crear custom con @propertyWrapper."
  },
  {
    question: "¿Qué es <code>inout</code> en Swift?",
    options: [
      "Funciona de forma idéntica al operador & de C para acceder a la dirección de memoria de una variable",
      "Parámetro que se pasa por referencia, permitiendo que la función modifique el valor original: func increment(_ x: inout Int) { x += 1 }",
      "Un modificador de tipo para operaciones de entrada y salida de archivos y streams de datos",
      "Una anotación exclusiva de parámetros de tipo Array que permite modificar sus elementos internos"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "var x = 5; increment(&x); // x ahora es 6. Los parámetros inout son copy-in copy-out por defecto."
  },
  {
    question: "¿Qué es el protocol extension?",
    options: [
      "Un mecanismo de herencia que permite que un protocolo extienda a otro protocolo existente",
      "Proveer implementaciones por defecto a un protocolo; permite 'múltiple herencia de comportamiento'",
      "Una forma de añadir requisitos de métodos abstractos adicionales a un protocolo ya publicado",
      "Extender un protocolo con métodos adicionales abstractos que todos los tipos conformantes deben implementar"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "extension Collection { func isNotEmpty: Bool { return !isEmpty } }. Toda colección gana isNotEmpty. Esto es protocol-oriented programming."
  },
  {
    question: "¿Qué es <code>@escaping</code> en closures?",
    options: [
      "Una anotación que marca que el closure puede lanzar errores que deben manejarse con try/catch",
      "Un tipo especial de capture list que copia los valores del entorno en lugar de capturarlos por referencia",
      "Una variante de async que indica que el closure se ejecuta en un thread de fondo inmediatamente",
      "El closure puede ejecutarse después de que la función retorne (e.g., en callbacks async); sin @escaping, el closure debe ejecutarse durante la llamada"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "func async(completion: @escaping () -> Void). Sin @escaping, el compilador puede optimizar y no retener el closure. @escaping retiene referencias."
  },
  {
    question: "¿Qué es Result type en Swift?",
    options: [
      "Funciona igual que Optional pero con un mensaje de error cuando el valor está ausente",
      "enum Result<Success, Failure: Error> con .success(value) y .failure(error); manejo de errores type-safe",
      "Un tipo de Optional especializado exclusivamente para funciones asíncronas y operaciones await",
      "El valor de retorno genérico de cualquier operación que pueda producir un resultado o fallar"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "func divide(_ a: Int, by b: Int) -> Result<Int, DivisionError>. switch result { case .success(let v): ... case .failure(let e): ... }"
  },
  {
    question: "¿Qué es <code>async/await</code> en Swift?",
    options: [
      "Un mecanismo exclusivo para operaciones de red que no puede usarse en código de UI",
      "Un equivalente directo a DispatchQueue.async que solo cambia la sintaxis superficialmente",
      "Swift 5.5+: async func y await para concurrencia estructurada sin callbacks; más legible y menos propenso a errores",
      "Una característica limitada a iOS 15 y versiones posteriores sin retrocompatibilidad posible"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "func fetchData() async throws -> Data. let data = try await fetchData(). El compilador genera el estado de máquina, similar a coroutines."
  },
  {
    question: "¿Qué son los Actors en Swift?",
    options: [
      "Un tipo especial de protocolo que garantiza que sus conformantes implementen métodos thread-safe",
      "Tipo que protege su estado de acceso concurrente: solo una tarea puede ejecutar código del actor a la vez; await para llamadas externas",
      "Un tipo de clase especializada para construir componentes de interfaz de usuario en SwiftUI",
      "Una característica disponible únicamente en aplicaciones iOS y no en macOS ni otras plataformas"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "actor BankAccount { var balance = 0; func deposit(amount: Int) { balance += amount } }. Acceso externo: await account.deposit(100). Elimina data races."
  },
  {
    question: "¿Qué es SwiftUI y su relación con Swift?",
    options: [
      "Un framework UI exclusivo de macOS que no tiene soporte para aplicaciones iOS ni watchOS",
      "Una librería de estilos visuales para aplicaciones web desarrollada por Apple en 2019",
      "Framework declarativo de UI usando property wrappers, structs y el compilador Swift; @State, @Binding, @ObservedObject",
      "Un framework de interfaz de usuario completamente independiente del lenguaje Swift en su diseño"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "SwiftUI usa las features del lenguaje Swift para UI declarativa: property wrappers (@State), result builders (@ViewBuilder), Combine para reactividad."
  },
  {
    question: "¿Qué son los result builders?",
    options: [
      "Un mecanismo exclusivo de SwiftUI que no puede usarse fuera de ese framework específico",
      "Un tipo de macro que genera código de interfaz de usuario a partir de descripciones declarativas",
      "Permiten DSLs declarativos: @ViewBuilder en SwiftUI, @resultBuilder para construir arrays/values de forma declarativa",
      "Constructores especiales del tipo Result para crear valores de éxito y fallo más fácilmente"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "@resultBuilder struct ArrayBuilder. @ArrayBuilder func build() -> [Int] { 1; 2; 3 } genera [1,2,3]. Base de SwiftUI ViewBuilder."
  },
  {
    question: "¿Qué es el Swift Package Manager?",
    options: [
      "Una herramienta que reemplaza directamente a CocoaPods manteniendo total compatibilidad con sus archivos",
      "Una utilidad del sistema operativo para organizar archivos y recursos de las aplicaciones instaladas",
      "Una herramienta de gestión de dependencias exclusiva de proyectos macOS sin soporte para iOS",
      "Sistema oficial de gestión de dependencias para Swift: Package.swift define el proyecto y sus dependencias"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "Swift Package Manager es el gestor oficial. CocoaPods y Carthage son alternativas populares. SPM está integrado en Xcode."
  },
  {
    question: "¿Cómo funciona ARC con ciclos de retención?",
    options: [
      "ARC detecta y rompe automáticamente los ciclos de retención usando un algoritmo de rastreo",
      "ARC ejecuta un garbage collector periódicamente solo para detectar y resolver ciclos entre objetos",
      "Los ciclos de retención no pueden ocurrir cuando se usa ARC ya que el compilador los previene",
      "Los ciclos ocurren cuando dos objetos se referencian mutuamente; se rompen con weak (Optional) o unowned (no-Optional) references"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "class A { weak var b: B? }. sin weak, A→B y B→A mantienen ambos vivos. Capture lists en closures: [weak self] para evitar ciclos closure-object."
  },
  {
    question: "¿Qué es el concurrency model de Swift con structured concurrency?",
    options: [
      "Un modelo basado únicamente en async/await sin soporte para ejecución paralela simultánea",
      "Task, async let y TaskGroup para concurrencia estructurada: las subtareas tienen lifetime acotado al scope padre; automáticamente canceladas si el padre cancela",
      "Un sistema equivalente a Grand Central Dispatch con una sintaxis más moderna y limpia",
      "Un modelo de threads manuales donde el programador gestiona explícitamente la creación y destrucción"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "async let img1 = fetchImage(1); async let img2 = fetchImage(2); let (i1, i2) = await (img1, img2). Las tasks se ejecutan concurrentemente y se esperan juntas."
  },
  {
    question: "¿Qué es el module system y acceso en Swift?",
    options: [
      "Solo existen dos niveles de acceso: public para código externo y private para código interno",
      "Niveles: open (herencia desde otro módulo), public, internal (default, mismo módulo), fileprivate, private. @testable import para tests",
      "El sistema de módulos de Swift es idéntico al de Java con los mismos modificadores de acceso",
      "Solo existe el modificador import para controlar qué código es accesible desde otros módulos"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "internal es el default: accesible en el módulo (target). open: subclaseable externamente. fileprivate: solo en el mismo archivo. private: solo en el mismo scope."
  },
  {
    question: "¿Qué es el compilador Swift y LLVM?",
    options: [
      "El compilador Swift es equivalente a clang y comparte la misma arquitectura y pipeline interno",
      "El compilador de Swift solo genera código binario para aplicaciones iOS y no para otras plataformas",
      "swiftc usa LLVM como backend: Swift → SIL (Swift Intermediate Language) → LLVM IR → machine code; SIL es clave para type checking y optimizaciones",
      "Solo genera código ejecutable para arquitecturas de procesadores diseñados por Apple como M1 y M2"
    ],
    correct: 2,
    difficulty: "A",
    explanation: "SIL (Swift Intermediate Language) provee representación de alto nivel donde ocurren el garantized SIL (type-checked) y canonical SIL (optimized). Luego LLVM IR para código máquina."
  },
  {
    question: "¿Qué es el Swift type system con opaque types?",
    options: [
      "Son equivalentes a los genéricos con constraints y se compilan de la misma manera que ellos",
      "Tipos cuyo nombre interno no puede usarse fuera del módulo que los define pero siguen siendo dinámicos",
      "Un alias para el tipo Any que acepta cualquier valor sin restricciones en tiempo de compilación",
      "some Protocol: el retorno es un tipo específico que el compilador conoce pero el caller no; más eficiente que any Protocol (existential)"
    ],
    correct: 3,
    difficulty: "A",
    explanation: "func makeShape() -> some Shape — el compilador sabe el tipo concreto (estático), diferente cada vez pero concreto. any Shape es existential (vtable, heap). some = opaque, any = existential."
  },
  {
    question: "¿Qué es the Swift Concurrency model con GlobalActor?",
    options: [
      "Un mecanismo exclusivo para garantizar que el código de interfaz de usuario se ejecute en el hilo correcto",
      "@MainActor garantiza que el código corra en el main thread; @globalActor permite crear actores globales propios para serialización de acceso",
      "Una abstracción sobre DispatchQueue.main que añade soporte para async/await en el hilo principal",
      "Un actor singleton creado automáticamente por el sistema para coordinar acceso a recursos globales"
    ],
    correct: 1,
    difficulty: "S",
    explanation: "@MainActor: todas las funciones marcadas corren en el main thread. Cualquier @globalActor crea un actor singleton global. Basis de la safe concurrency model de Swift."
  },
  {
    question: "¿Qué son los Macros en Swift 5.9?",
    options: [
      "Macros de expresión (#stringify, attached macros) y freestanding macros; generan código en tiempo de compilación verificable",
      "Macros de preprocesador idénticos a los de C que se expanden textualmente antes de compilar",
      "Un mecanismo exclusivo para implementar el atributo derive en structs y clases de Swift",
      "Son equivalentes a los macros de C con las mismas capacidades y los mismos riesgos de seguridad"
    ],
    correct: 0,
    difficulty: "S",
    explanation: "Swift macros son type-checked y sandboxed. @AddAsync adjunta implementaciones async. #stringify(expr) genera el string del código. Más seguros que los macros de C/Rust macro_rules."
  }
];
