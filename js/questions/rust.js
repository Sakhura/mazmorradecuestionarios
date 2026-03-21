window.questions_rust = [
  {
    question: "¿Qué característica única tiene Rust para la gestión de memoria?",
    options: [
      "Gestión manual con malloc/free igual que en C, sin protecciones del compilador",
      "Garbage collector que detiene el programa periódicamente para liberar memoria",
      "Sistema de ownership: cada valor tiene un único dueño; memoria liberada automáticamente al salir del scope, sin GC",
      "Reference counting automático aplicado a todos los tipos sin excepción"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "El ownership system de Rust garantiza memory safety en tiempo de compilación sin GC: no dangling pointers, no double frees, no data races."
  },
  {
    question: "¿Qué es el borrowing en Rust?",
    options: [
      "Transferir la propiedad de un valor a otra variable permanentemente",
      "Prestar una referencia (&T o &mut T) sin transferir ownership; el compilador verifica que las referencias sean válidas",
      "Un puntero raw sin restricciones que apunta a datos en el heap",
      "Duplicar el valor en memoria para que dos variables lo posean simultáneamente"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "&T es referencia inmutable (múltiples permitidas). &mut T es referencia mutable (solo una a la vez). El borrow checker garantiza que no haya referencias inválidas."
  },
  {
    question: "¿Qué es un lifetime en Rust?",
    options: [
      "La duración total en milisegundos que un programa tarda en ejecutarse",
      "El bloque léxico donde se declara una variable, equivalente al scope en otros lenguajes",
      "Anotación que indica cuánto tiempo vive una referencia; el compilador lo infiere en la mayoría de casos",
      "Un contador interno que el runtime usa para liberar referencias circulares"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "Lifetimes ('a) garantizan que referencias no outliven los datos que referencian. fn longest<'a>(x: &'a str, y: &'a str) -> &'a str."
  },
  {
    question: "¿Qué es <code>Option<T></code> en Rust?",
    options: [
      "Un parámetro de función que puede omitirse al llamarla sin causar error",
      "Enum con variantes Some(T) y None; reemplaza null de forma type-safe",
      "Un tipo de configuración de Cargo para dependencias opcionales del proyecto",
      "Un puntero que puede apuntar a datos válidos o a una dirección nula"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "Option<T>: Some(valor) o None. Se usa match o if let Some(v) = opt para acceder. unwrap() panics si None."
  },
  {
    question: "¿Qué es <code>Result<T, E></code>?",
    options: [
      "Enum con Ok(T) y Err(E); manejo de errores type-safe sin excepciones",
      "El valor numérico que retorna una operación matemática al completarse",
      "Un tipo de Future que resuelve a un valor cuando la operación asíncrona finaliza",
      "Un contenedor exclusivo para manejar errores de operaciones de entrada/salida"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "Result<T, E>: Ok(valor) o Err(error). El operador ? propaga errores: let v = f()?; equivale a match con return Err."
  },
  {
    question: "¿Qué hace el operador <code>?</code> en Rust?",
    options: [
      "Propaga errores: si Result es Err, retorna el Err de la función actual; si es Ok, extrae el valor",
      "Desenvuelve un Option nullable igual que el operador ?. en Swift o Kotlin",
      "Evalúa una expresión ternaria retornando uno de dos valores según condición",
      "Accede a un campo de forma segura retornando None si el objeto es nulo"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "let content = fs::read_to_string('file.txt')?; — si hay error, retorna automáticamente el Err. Simplifica manejo de errores encadenados."
  },
  {
    question: "¿Qué es <code>Vec<T></code> en Rust?",
    options: [
      "Un array de tamaño fijo almacenado en el stack con capacidad definida en compilación",
      "Una vista de solo lectura sobre una secuencia contigua de elementos en memoria",
      "Una estructura matemática que representa un vector geométrico con operaciones de álgebra",
      "Array dinámico en heap, equivalente a vector de C++ o ArrayList de Java"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "Vec<T>: tamaño dinámico, almacenado en heap. let mut v = Vec::new(); v.push(1); v[0]. Slice: &[T]."
  },
  {
    question: "¿Qué es el trait en Rust?",
    options: [
      "Interfaz que define comportamiento compartido; similar a interfaces de Java/Go pero más poderoso",
      "Una clase base abstracta de la que otros tipos heredan sus campos y métodos",
      "Una anotación especial que el compilador usa internamente para optimizar código genérico",
      "Un tipo compuesto que combina campos de datos con implementaciones de métodos concretos"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "trait Animal { fn sound(&self) -> &str; }. impl Animal for Dog { fn sound(&self) -> &str { 'woof' } }. Los traits son la base de la abstracción en Rust."
  },
  {
    question: "¿Qué es el <code>match</code> en Rust?",
    options: [
      "Pattern matching exhaustivo que descompone valores; el compilador garantiza que todos los casos son cubiertos",
      "Una expresión condicional equivalente a if/else if encadenado sin verificación de exhaustividad",
      "Una función de búsqueda que localiza la primera ocurrencia de un patrón en una colección",
      "Un switch mejorado que evalúa igualdad de valores enteros igual que en C o Java"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "match expr { Pattern1 => expr1, Pattern2 => expr2, _ => default }. Exhaustivo: el compilador error si falta algún caso."
  },
  {
    question: "¿Qué significa <code>mut</code> en Rust?",
    options: [
      "Hace la variable o referencia mutable; por defecto todo es inmutable en Rust",
      "Aplica a primitivos únicamente; los tipos compuestos son siempre mutables por defecto",
      "Indica que el valor almacenado en esa variable es un puntero con acceso de escritura",
      "Declara que la variable pertenece al módulo actual y puede exportarse a otros módulos"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "let x = 5 es inmutable. let mut x = 5 permite x = 6. La inmutabilidad por defecto previene bugs y facilita razonamiento sobre el código."
  },
  {
    question: "¿Qué es Cargo en Rust?",
    options: [
      "Un compilador alternativo a rustc con optimizaciones adicionales para producción",
      "Un tipo de variable especial que gestiona la vida útil de recursos del sistema",
      "Una categoría de paquete que contiene solo bibliotecas sin binarios ejecutables",
      "El gestor de paquetes y sistema de build de Rust: cargo build, test, run, add, publish"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "Cargo gestiona dependencias (Cargo.toml), compila proyectos, ejecuta tests, y publica a crates.io. Es la herramienta central del ecosistema Rust."
  },
  {
    question: "¿Qué es un <code>String</code> vs <code>&str</code>?",
    options: [
      "String es siempre inmutable y no puede crecer una vez que se ha inicializado",
      "String es owned, heap-allocated, mutable; &str es borrowed string slice, puede ser en stack/heap/static",
      "&str tiene peor rendimiento porque siempre requiere una copia al pasarse a funciones",
      "Ambos tipos son intercambiables y el compilador elige cuál usar según el contexto"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "String: propietario del dato, puede crecer. &str: referencia a datos de string (en &String, en código compilado, etc.). Preferir &str en parámetros."
  },
  {
    question: "¿Qué hace <code>clone()</code> en Rust?",
    options: [
      "Crea un alias del valor original para que dos variables apunten a los mismos datos",
      "Funciona igual que Copy: transfiere silenciosamente bits a otra variable en el stack",
      "Solo aplica a tipos primitivos; los tipos compuestos deben usar métodos de copia propios",
      "Hace una copia profunda del valor; necesario cuando no se puede usar referencia y el tipo no implementa Copy"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "clone() duplica el valor incluyendo heap data. Los tipos con Copy (primitivos) se copian automáticamente. Clone es explícito y potencialmente costoso."
  },
  {
    question: "¿Qué es el trait <code>Copy</code>?",
    options: [
      "Los tipos que implementan Copy se copian automáticamente en asignaciones en lugar de moverse: primitivos, referencias",
      "Un trait para duplicar archivos del sistema y transferirlos entre directorios del proyecto",
      "Funciona igual que Clone pero su implementación la genera siempre el programador manualmente",
      "Aplica solo a tipos simples que el programador decide copiar de forma explícita con una llamada"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "Tipos Copy: i32, f64, bool, char, &T, tuples de Copy. let a = 5; let b = a; — a y b son independientes. Sin Copy, a se movería a b."
  },
  {
    question: "¿Qué es la 'move semantics' en Rust?",
    options: [
      "Un tipo de casting que convierte un tipo en otro moviendo los bytes en memoria",
      "Mover los datos de una región de memoria a otra dirección dentro del heap",
      "Mover archivos del sistema de un directorio a otro usando la API estándar de Rust",
      "Por defecto, asignar/pasar tipos no-Copy transfiere ownership; el original ya no puede usarse"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "let s1 = String::from('hello'); let s2 = s1; — s1 ya no es válido. s1 se movió a s2. Evita double-free sin GC overhead."
  },
  {
    question: "¿Qué hace <code>println!()</code> con <code>{:?}</code>?",
    options: [
      "Usa el trait Debug para imprimir representación de desarrollo del valor; {:?} es debug, {:#?} es pretty-print",
      "Imprime el valor solo cuando el binario se compila en modo debug y no en release",
      "Produce la misma salida que {} pero añade comillas alrededor de los valores de tipo String",
      "Solo aplica a valores numéricos y muestra su representación hexadecimal con prefijo 0x"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "{} usa Display trait (para usuarios). {:?} usa Debug trait (para desarrolladores). Se deriva automáticamente con #[derive(Debug)]."
  },
  {
    question: "¿Qué es <code>#[derive]</code>?",
    options: [
      "Una anotación exclusiva de structs que hereda campos de otro struct existente",
      "Macro de atributo que implementa automáticamente traits: #[derive(Debug, Clone, PartialEq)]",
      "Un mecanismo de herencia entre tipos para reutilizar implementaciones de métodos",
      "Una directiva que le indica al enlazador qué símbolos exportar al compilar una biblioteca"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "#[derive(Debug, Clone, PartialEq, Eq, Hash, PartialOrd, Ord, Default)] genera implementaciones automáticas para los traits listados."
  },
  {
    question: "¿Qué es un <code>struct</code> en Rust?",
    options: [
      "Un tipo que solo puede contener campos de tipos primitivos como enteros y booleanos",
      "Un contenedor de datos que no puede tener métodos propios ni implementar comportamiento",
      "Tipo compuesto de campos nombrados; puede tener métodos con impl, y traits",
      "Una clase con herencia simple que extiende otro struct padre heredando sus campos"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "struct Point { x: f64, y: f64 }. impl Point { fn distance(&self, other: &Point) -> f64 { ... } }"
  },
  {
    question: "¿Qué es un <code>enum</code> en Rust?",
    options: [
      "Un conjunto de constantes numéricas enteras sin datos asociados, igual que en C",
      "Una mejora de los enums de C que solo permite variantes con tipos enteros predefinidos",
      "Tipo sum: puede ser cualquiera de sus variantes, cada una pudiendo tener datos diferentes",
      "Un array de valores del mismo tipo indexados por nombres simbólicos constantes"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "enum Shape { Circle(f64), Rectangle(f64, f64), Triangle(f64, f64, f64) }. Las variantes pueden llevar datos de cualquier tipo."
  },
  {
    question: "¿Cómo se maneja la concurrencia básica en Rust?",
    options: [
      "Threads: std::thread::spawn; channels: mpsc::channel(); el ownership system previene data races en tiempo de compilación",
      "Solo se puede usar async/await; los threads del OS están deshabilitados por el borrow checker",
      "A través de green threads gestionados por un runtime incluido en la biblioteca estándar",
      "Con un Global Interpreter Lock similar al de Python que serializa el acceso a datos compartidos"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "Rust garantiza thread safety a través del sistema de tipos: Send (se puede mover entre threads) y Sync (se puede compartir como referencia entre threads)."
  },
  {
    question: "¿Qué son los lifetimes en structs?",
    options: [
      "El periodo de vida de la instancia del struct contado en ciclos del procesador",
      "Anotaciones calculadas siempre de forma automática por el compilador sin excepción",
      "Cuando un struct contiene referencias, necesita anotaciones de lifetime: struct Foo<'a> { x: &'a str } — indica que la referencia no outlive el struct",
      "Solo aplican a structs que contienen Vec<T> u otros tipos heap-allocated en sus campos"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "struct Important<'a> { announcement: &'a str } — el lifetime 'a garantiza que el str referenced vive al menos tanto como el struct."
  },
  {
    question: "¿Qué es trait object (<code>dyn Trait</code>)?",
    options: [
      "Una característica exclusiva de Box<T> que permite almacenar tipos dinámicamente",
      "Pointer a un valor que implementa el trait, con dispatch dinámico (vtable); Box<dyn Animal> puede almacenar cualquier Animal",
      "Es equivalente a impl Trait pero con despacho estático en lugar de dinámico",
      "Una instancia concreta de un trait que ha sido inicializado con un valor por defecto"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "Box<dyn Draw>: despacho dinámico (runtime). impl Draw: despacho estático (monomorphization compile-time). dyn es más flexible, impl es más eficiente."
  },
  {
    question: "¿Qué es monomorphization?",
    options: [
      "Una anotación que indica que un trait solo puede ser implementado por un único tipo",
      "Un proceso del garbage collector que compacta instancias del mismo tipo en memoria",
      "El compilador genera versiones concretas de funciones genéricas para cada tipo concreto usado; no hay runtime overhead",
      "Un tipo de polimorfismo dinámico donde el tipo se resuelve mediante vtables en runtime"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "fn max<T: PartialOrd>(a: T, b: T) — el compilador genera max_i32, max_f64, etc. Zero-cost abstractions: rendimiento igual que código no genérico."
  },
  {
    question: "¿Qué es el patrón RAII en Rust?",
    options: [
      "Un tipo de borrow que permite compartir recursos entre múltiples propietarios simultáneos",
      "Un patrón exclusivo de operaciones de entrada/salida para cerrar handles automáticamente",
      "Resource Acquisition Is Initialization — recursos adquiridos en el constructor, liberados en el destructor (Drop trait)",
      "Un error de manejo de memoria que ocurre cuando un recurso se libera antes de tiempo"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "RAII: cuando un valor sale de scope, se llama su drop() automáticamente. std::fs::File se cierra automáticamente. MutexGuard libera el lock. Sin necesidad de finally."
  },
  {
    question: "¿Qué hace el trait <code>Drop</code>?",
    options: [
      "Método fn drop(&mut self) llamado automáticamente cuando el valor sale de scope; implementa RAII cleanup",
      "Solo aplica a Box<T> y tipos que alojan datos en el heap, ignorado en tipos del stack",
      "Detiene la ejecución del programa y libera todos los recursos del proceso inmediatamente",
      "Es equivalente a llamar free() manualmente sobre el puntero interno del valor liberado"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "impl Drop for MyStruct { fn drop(&mut self) { println!('Dropping!'); } }. No se puede llamar manualmente; usar std::mem::drop()."
  },
  {
    question: "¿Qué es <code>Box<T></code>?",
    options: [
      "Un tipo de almacenamiento de datos genérico que funciona como contenedor de cualquier colección",
      "Una referencia con lifetime extendido que puede sobrevivir al scope donde fue creada",
      "Un tipo exclusivo para almacenar trait objects y no puede usarse con tipos de tamaño conocido",
      "Smart pointer que aloja T en el heap; tiene ownership único; útil para tipos de tamaño desconocido en compile-time"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "Box<T> es el smart pointer más simple: ownership único, allocated en heap, se libera cuando sale de scope. Necesario para recursive types y trait objects."
  },
  {
    question: "¿Qué es <code>Rc<T></code>?",
    options: [
      "Un tipo de puntero raw sin conteo de referencias ni restricciones del borrow checker",
      "Un puntero inteligente con ownership único que optimiza la memoria para tipos pequeños",
      "Reference Counter — permite múltiples propietarios en un único thread mediante conteo de referencias",
      "Un wrapper alrededor de Box<T> que añade capacidad de clonación profunda automática"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "Rc<T>: reference-counted ownership, solo para single-thread. Rc::clone incrementa el contador. Cuando el contador llega a 0, el valor se libera. Para multi-thread: Arc<T>."
  },
  {
    question: "¿Qué es <code>RefCell<T></code>?",
    options: [
      "Solo aplica a tipos primitivos que no implementan el trait Copy en Rust estable",
      "Un tipo de Mutex que permite acceso concurrente seguro desde múltiples threads simultáneos",
      "Un tipo de celda de referencia que permite almacenar referencias con lifetimes distintos",
      "Permite mutabilidad interior: borrowing rules verificadas en runtime en lugar de compile-time; panic si se viola"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "RefCell<T>: .borrow() → Ref<T>, .borrow_mut() → RefMut<T>. Panics en runtime si violas las reglas (> 1 mutable borrow activo). Útil con Rc<RefCell<T>>."
  },
  {
    question: "¿Qué es <code>Arc<T></code>?",
    options: [
      "Un tipo de canal para enviar mensajes entre threads usando paso de mensajes asíncrono",
      "Un smart pointer con ownership único que añade verificaciones de alineación de memoria",
      "Un puntero exclusivo para tipos primitivos atómicos como AtomicU32 o AtomicBool",
      "Atomic Reference Counted — como Rc pero thread-safe, puede compartirse entre threads"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "Arc<T> usa atomic operations para el conteo de referencias, haciéndolo seguro entre threads. Ligero overhead vs Rc. Combinar con Mutex: Arc<Mutex<T>>."
  },
  {
    question: "¿Qué es el interior mutability pattern?",
    options: [
      "Mutar datos a través de referencias inmutables usando código unsafe sin ninguna garantía",
      "Un patrón exclusivo de Cell<T> que solo permite modificar tipos que implementan Copy",
      "Una violación intencional del borrow checker que el compilador permite en casos especiales",
      "Obtener mutabilidad dentro de un valor inmutablemente-borrado; mediante Cell<T>, RefCell<T>, Mutex<T> que usan unsafe internamente con garantías"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "A veces se necesita mutar un campo mientras se tiene &self (no &mut self). Interior mutability (Cell, RefCell, Mutex, AtomicXxx) provee esto de forma segura."
  },
  {
    question: "¿Qué son los closures en Rust?",
    options: [
      "Funciones anónimas que no pueden capturar variables del entorno circundante",
      "Funciones anónimas que capturan su entorno; implementan Fn, FnMut, o FnOnce según cómo capturan variables",
      "Bloques de código exclusivos para pasarse como argumentos a los adaptadores de iteradores",
      "Son exactamente equivalentes a funciones nombradas sin ninguna diferencia semántica"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "let add = |x| x + 5; captura por referencia. move |x| x + y mueve y al closure. Fn: &self; FnMut: &mut self; FnOnce: self (consume capturado)."
  },
  {
    question: "¿Qué son los iteradores en Rust?",
    options: [
      "Variables que almacenan índices enteros para acceder a elementos de arrays por posición",
      "Objetos lazy que implementan Iterator con fn next() -> Option<Self::Item>; encadenables con map, filter, collect",
      "Un tipo de referencia especial que solo puede usarse con Vec<T> y arrays del stack",
      "Bucles for mejorados que iteran sobre colecciones con sintaxis más compacta que el for clásico"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "vec.iter().filter(|x| **x > 0).map(|x| x * 2).collect::<Vec<_>>(). Zero-cost: el compilador optimiza los iteradores encadenados a código eficiente."
  },
  {
    question: "¿Qué es el turbofish <code>::<T></code>?",
    options: [
      "Una sintaxis de macros procedurales para expandir código genérico en tiempo de compilación",
      "Una anotación de lifetime explícito que se añade cuando el compilador no puede inferirlo",
      "Una sintaxis de error que ocurre cuando se usan tipos genéricos en contextos no permitidos",
      "Especificación explícita de tipos genéricos cuando el compilador no puede inferirlos: collect::<Vec<i32>>()"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "'turbofish' ::<T> especifica el tipo genérico explícitamente: let v = (0..5).collect::<Vec<_>>(); Llamado así por su parecido a ::<>."
  },
  {
    question: "¿Qué es <code>impl Trait</code> en posición de retorno?",
    options: [
      "Retornar algún tipo que implementa el trait sin nombrarlo; monomorphization en compile-time: fn make_adder(x:i32)->impl Fn(i32)->i32",
      "Retornar un valor de un tipo que implementa cierta interfaz usando despacho virtual",
      "Retornar un trait object con vtable equivalente a Box<dyn Trait> pero con menos overhead",
      "Un modificador que restringe el uso de la función solo a closures que implementan el trait"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "fn make_adder(x: i32) -> impl Fn(i32) -> i32 { move |y| x + y }. El compilador infiere el tipo concreto. Más eficiente que Box<dyn Fn>."
  },
  {
    question: "¿Qué son los macros en Rust?",
    options: [
      "Alias de funciones de la biblioteca estándar utilizados exclusivamente para imprimir texto",
      "Funciones especiales del compilador que solo pueden invocarse durante la fase de enlazado",
      "Funciones regulares con nombre especial que el preprocesador expande antes de compilar",
      "Metaprogramación en tiempo de compilación: declarativos (macro_rules!) y procedurales (derive, attribute, function-like)"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "macro_rules! mi_macro { ($x:expr) => { $x * 2 } }. Proc macros: #[derive], #[async_trait], etc. Macros pueden generar código arbitrario."
  },
  {
    question: "¿Qué es <code>unsafe</code> en Rust?",
    options: [
      "Bloque que permite raw pointers, llamar funciones unsafe, implementar unsafe traits; el programador garantiza memory safety",
      "Una anotación exclusiva para llamar funciones de bibliotecas externas escritas en C o C++",
      "Un modo especial que desactiva todas las verificaciones del compilador en el archivo completo",
      "Una categoría de código que el compilador prohíbe en proyectos destinados a producción"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "unsafe { } permite: dereferenciar raw pointers, llamar funciones unsafe/C, acceder a static mut, implementar unsafe traits. El objetivo es delimitar qué código requiere revisión manual."
  },
  {
    question: "¿Cómo funciona async/await en Rust?",
    options: [
      "Ejecuta el código de forma síncrona bloqueando el thread actual hasta que termine",
      "Funciona exactamente igual que las Promises de JavaScript con el mismo modelo de ejecución",
      "Basado en Futures: async fn retorna un Future; await lo ejecuta; necesita un runtime (tokio, async-std) que ejecute el executor",
      "No tiene soporte para código asíncrono; se debe usar threads del OS para concurrencia"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "async fn fetch() -> Result<String> { let resp = reqwest::get(url).await?; resp.text().await }. Los Futures son lazy; solo se ejecutan cuando un runtime los polls."
  },
  {
    question: "¿Qué es un <code>Future</code> en Rust?",
    options: [
      "Una promesa de valor futuro que se ejecuta inmediatamente al crearse, como en JavaScript",
      "Un tipo de thread ligero gestionado por el runtime que ejecuta código asíncrono concurrentemente",
      "Un contenedor exclusivo para operaciones de entrada/salida que no bloqueen el thread principal",
      "Trait con fn poll(self: Pin<&mut Self>, cx: &mut Context<'_>) -> Poll<Self::Output>; representa cómputo asíncrono lazy"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "Los Futures de Rust son state machines generadas por el compilador para async fn. Son zero-cost: sin heap allocation por defecto (a diferencia de Promises de JS)."
  },
  {
    question: "¿Qué es <code>Pin<T></code>?",
    options: [
      "Una referencia inmutable que no puede coexistir con referencias mutables al mismo valor",
      "Un tipo de slice que apunta a una región fija de memoria del stack sin posibilidad de mover",
      "Un puntero que fija su dirección pero permite mover el dato referenciado libremente",
      "Garantiza que un valor no se moverá en memoria; necesario para auto-referential structs (como los Futures generados para async)"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "Pin<Box<Future>> garantiza que el Future no se mueve después de ser pinned. Necesario porque los Futures pueden tener referencias internas a sí mismos."
  },
  {
    question: "¿Qué es el trait <code>Send</code> y <code>Sync</code>?",
    options: [
      "Send: tipo puede moverse entre threads. Sync: referencias al tipo pueden compartirse entre threads. Auto-traits derivados por el compilador",
      "Traits que deben implementarse para usar canales mpsc entre productores y consumidores",
      "Traits declarados como obsoletos en Rust moderno; reemplazados por el modelo async/await",
      "Traits para enviar y recibir datos por red usando el stack TCP/IP de la biblioteca estándar"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "!Send tipos: Rc<T>, raw pointers. !Sync tipos: Cell<T>, RefCell<T>. Arc<Mutex<T>> es Send+Sync. El compilador garantiza thread safety via estos traits."
  },
  {
    question: "¿Qué es zero-cost abstraction en Rust?",
    options: [
      "Que las abstracciones no aumentan el tiempo de compilación del proyecto en ninguna medida",
      "Las abstracciones de alto nivel (iteradores, traits, generics) compilan a código tan eficiente como el equivalente low-level manual",
      "Que el uso de abstracciones no requiere escribir código adicional para instanciarlas",
      "Que las abstracciones de alto nivel solo reducen el uso de memoria, sin afectar la velocidad"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "Iteradores encadenados, closures, generics: el compilador los optimiza a código equivalente en ensamblador al código C manual. No hay overhead de runtime por abstracciones."
  },
  {
    question: "¿Qué son los phantom data y tipos fantasma?",
    options: [
      "PhantomData<T> añade varianza de tipo sin ocupar espacio; útil para indicar ownership o tipo genérico sin datos concretos",
      "Tipos especiales usados exclusivamente durante el debugging para inspeccionar valores en memoria",
      "Tipos que solo existen dentro de bloques unsafe y no son visibles en código seguro",
      "Variables sin datos concretos que se eliminan por completo durante la compilación del proyecto"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "struct Wrapper<T> { ptr: *mut u8, _marker: PhantomData<T> }. PhantomData ocupa 0 bytes pero indica al compilador la relación con T para ownership y variance."
  },
  {
    question: "¿Qué es <code>Cow<'a, B></code>?",
    options: [
      "Un tipo de reference counter inmutable para datos compartidos entre múltiples propietarios",
      "Clone On Write — puede ser borrowed (&B) o owned (B::Owned); clona solo si se necesita mutabilidad",
      "Un smart pointer exclusivo para strings que optimiza la representación en memoria",
      "Una referencia inteligente que realiza una copia del dato al crearse para garantizar la propiedad"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "Cow<str>: puede ser &str (sin costo) o String (cuando se muta). fn process<'a>(s: Cow<'a, str>) acepta tanto &str como String eficientemente."
  },
  {
    question: "¿Qué hace el trait <code>From</code> e <code>Into</code>?",
    options: [
      "Son para realizar conversiones inseguras de tipos sin verificación del compilador en runtime",
      "Solo aplican a conversiones que involucran tipos de cadena de texto como String y &str",
      "From y Into son conversiones infallibles entre tipos: impl From<i32> for MyType; Into es automático con From",
      "Solo permiten convertir entre tipos primitivos como enteros y flotantes del mismo tamaño"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "impl From<&str> for String. String::from('hello'). 'hello'.to_string(). TryFrom/TryInto para conversiones fallibles que retornan Result."
  },
  {
    question: "¿Qué son los new type pattern en Rust?",
    options: [
      "Un tipo de alias que crea un nombre alternativo para un tipo existente sin restricciones adicionales",
      "struct Meters(f64) — wraps un tipo existente para crear distinción semántica de tipos en tiempo de compilación",
      "Una macro especial que genera tipos a partir de descripciones en tiempo de compilación automáticamente",
      "Tipos primitivos adicionales que Rust incorpora para cubrir casos que i32 o f64 no manejan"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "struct Meters(f64); struct Kilograms(f64); previene mezclar valores incompatibles. El compilador garantiza que no pases Meters donde se espera Kilograms."
  },
  {
    question: "¿Qué es el lifetime elision?",
    options: [
      "La eliminación de anotaciones de lifetime durante la optimización que realiza el compilador",
      "Reglas que permiten al compilador inferir lifetimes en firmas de funciones comunes sin necesidad de anotación explícita",
      "Un mecanismo que aplica exclusivamente a métodos de structs y no a funciones libres",
      "Un error que ocurre cuando se omiten anotaciones de lifetime en firmas que las requieren"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "Reglas de elision: 1) cada parámetro de referencia obtiene su propio lifetime. 2) si hay un input lifetime, se asigna a todos los outputs. 3) si hay &self, su lifetime va al output."
  },
  {
    question: "¿Cómo funciona el borrow checker y sus algoritmos?",
    options: [
      "Revisa el código línea a línea en busca de violaciones de ownership de forma puramente sintáctica",
      "NLL (Non-Lexical Lifetimes): análisis de flujo de datos que determina el scope preciso de borrows, no solo el scope léxico",
      "Solo verifica las referencias mutables; las referencias inmutables no requieren análisis adicional",
      "Realiza un análisis simple de scope léxico que asigna lifetimes a bloques delimitados por llaves"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "Antes: lifetimes duraban el scope léxico completo. NLL (Rust 2018): lifetimes duran hasta el último uso. Polonius (futuro) usa Datalog para análisis más preciso."
  },
  {
    question: "¿Qué es <code>unsafe impl Send/Sync</code>?",
    options: [
      "Una construcción que genera un error de compilación al usarse fuera de bloques unsafe",
      "Una forma de deshabilitar los checks del borrow checker para el tipo y todos sus usos",
      "Una anotación obligatoria para todos los tipos que se pasan a través de canales entre threads",
      "Declaración manual de que un tipo es thread-safe cuando el compilador no puede inferirlo; requiere que el programador garantice la seguridad"
    ],
    correct: 3,
    difficulty: "B",
    explanation: "Para tipos con raw pointers u otros !Send/!Sync internos que son realmente seguros para compartir: unsafe impl Send for MyType {}. El programador asume la responsabilidad."
  },
  {
    question: "¿Qué es la especialización de traits (specialization)?",
    options: [
      "Un mecanismo de override de métodos de traits en tipos derivados sin anotaciones adicionales",
      "Feature nightly: permite implementaciones de traits más específicas que sobreescriben implementaciones genéricas; en progreso de estabilización",
      "Una optimización que solo está disponible en la biblioteca estándar para sus tipos internos",
      "Traits que solo pueden implementarse para un único tipo concreto y no para tipos genéricos"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "Specialization (unstable): impl<T: Display> ToString for T {...} puede ser sobrescrita por impl ToString for String {...} para implementación especializada más eficiente."
  },
  {
    question: "¿Qué son los procedural macros?",
    options: [
      "Macros definidos dentro de módulos regulares usando la sintaxis estándar de macro_rules!",
      "Equivalentes a macro_rules! pero con una sintaxis diferente para mayor legibilidad del código",
      "Una forma limitada de macros que solo puede usarse en posición de atributo derive en structs",
      "Macros que operan sobre el token stream del código: derive macros (#[derive(Serialize)]), attribute macros (#[route('/')]]), function-like (sql!())"
    ],
    correct: 3,
    difficulty: "B",
    explanation: "Proc macros reciben TokenStream y retornan TokenStream. Deben estar en su propio crate con proc-macro = true. serde, tokio y muchos frameworks los usan extensivamente."
  },
  {
    question: "¿Qué es WASM y Rust?",
    options: [
      "Web Assembly — Rust compila excelentemente a WASM por su control bajo nivel sin GC, habilitando código de alto rendimiento en browsers",
      "Rust compilado a WASM tiene un rendimiento inferior al de JavaScript para operaciones DOM",
      "Requiere instalar un runtime especial en el navegador para poder ejecutar el código Rust compilado",
      "Solo puede usarse en entornos Node.js en el servidor, no en navegadores web directamente"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "wasm-pack compila Rust a WebAssembly. wasm-bindgen genera bindings JS↔Rust. Casos de uso: computación intensiva (imagemagick.wasm, ffmpeg.wasm), juegos, criptografía."
  },
  {
    question: "¿Cómo funciona la optimización de code en Rust con LLVM?",
    options: [
      "LLVM es exclusivo de C y C++ y Rust usa su propio backend de optimización independiente",
      "Rust no usa LLVM; tiene su propio compilador nativo sin dependencias externas de infraestructura",
      "rustc genera MIR (Mid-level IR) → LLVM IR → LLVM optimizations (inlining, vectorization, LICM) → machine code",
      "Rust tiene su propio backend de generación de código que no depende de ninguna infraestructura externa"
    ],
    correct: 2,
    difficulty: "A",
    explanation: "rustc: AST → HIR (type checking) → MIR (borrow checking, optimizations) → LLVM IR → LLVM backend. -C opt-level=3 activa todas las optimizaciones LLVM."
  },
  {
    question: "¿Qué es MIR (Mid-level Intermediate Representation) en Rust?",
    options: [
      "El árbol de sintaxis abstracto generado por el parser antes del análisis semántico del código",
      "Una representación intermedia de macros usada para expandirlas antes del type checking",
      "Un formato de bytecode portable que puede distribuirse y ejecutarse sin necesidad de recompilar",
      "Representación simplificada del código después del type checking y borrow checking; usada para optimizaciones y generación de LLVM IR"
    ],
    correct: 3,
    difficulty: "A",
    explanation: "MIR: control flow graph de statements básicos. El borrow checker opera sobre MIR (NLL). Las optimizaciones de rustc (const evaluation, inlining básico) también usan MIR."
  },
  {
    question: "¿Qué son los const generics?",
    options: [
      "Un mecanismo para definir constantes globales dentro de la declaración de tipos genéricos",
      "Parámetros genéricos de valor const: fn array_zip<T, const N: usize>(a: [T;N], b: [T;N]) — tipos parametrizados por valores",
      "Nombres simbólicos constantes que se usan dentro de implementaciones de tipos genéricos",
      "Una feature inestable que solo está disponible en nightly y no puede usarse en producción"
    ],
    correct: 1,
    difficulty: "A",
    explanation: "struct Matrix<const ROWS: usize, const COLS: usize> { data: [[f64; COLS]; ROWS] }. Permite expresar invariantes de tamaño en el sistema de tipos."
  },
  {
    question: "¿Qué es Polonius y cómo mejora el borrow checker?",
    options: [
      "Reformulación del borrow checker usando Datalog, más precisa que NLL; permite más código correcto que NLL rechaza erróneamente",
      "Un tipo de análisis de flujo de control que detecta variables no inicializadas en el código",
      "Un compilador experimental alternativo a rustc con mayor velocidad de compilación",
      "Una mejora de rendimiento del borrow checker que reduce los tiempos de compilación en proyectos grandes"
    ],
    correct: 0,
    difficulty: "A",
    explanation: "Polonius (activo con -Zpolonius) usa relaciones Datalog para analizar borrows. Permite patrones como: fn get_or_insert(&mut self, k: K) -> &mut V — actualmente rechazados por NLL."
  },
  {
    question: "¿Cómo funciona el ownership system en términos de teoría de tipos?",
    options: [
      "Rust implementa tipos de recursos lineales (linear types) donde cada valor se usa exactamente una vez; extends con borrows para uso temporal sin transferencia",
      "El sistema de ownership solo verifica la validez de punteros raw sin base en teoría de tipos formal",
      "Es un sofisticado garbage collector basado en grafos de alcanzabilidad que corre en compile-time",
      "Es únicamente una verificación sintáctica de llaves y scopes sin fundamento en teoría formal"
    ],
    correct: 0,
    difficulty: "S",
    explanation: "Ownership = linear types. &T = shared reference (afín). &mut T = exclusive reference (lineal durante su vida). El sistema garantiza memory safety a través de la teoría de tipos, no de GC."
  },
  {
    question: "¿Qué es el async fn desugaring en Rust?",
    options: [
      "Una transformación exclusiva de métodos de traits que no aplica a funciones libres del módulo",
      "Una expansión de macros que el compilador aplica antes de realizar el type checking del código",
      "async fn foo() -> T desugares a fn foo() -> impl Future<Output=T>; el cuerpo se convierte en una state machine enum con cada await siendo un estado",
      "Una simplificación sintáctica que convierte async fn en callbacks anidados equivalentes a continuations"
    ],
    correct: 2,
    difficulty: "S",
    explanation: "El compilador transforma async fn en un enum con variantes para cada estado (entre awaits). En cada poll, avanza al siguiente estado. Zero heap allocation para el state machine."
  },
  {
    question: "¿Qué es el concept de varianza en los lifetimes de Rust?",
    options: [
      "Un tipo especial de trait que indica cómo se relacionan los lifetimes entre parámetros de una función",
      "Covarianza: 'a: 'b → &'a T es subtipo de &'b T. Contravarianza: fn pointers. Invarianza: &mut T (porque permite escritura)",
      "Un concepto puramente teórico sin aplicación práctica en el código Rust cotidiano",
      "Una propiedad que no existe en Rust porque el sistema de tipos no tiene relaciones de subtipado"
    ],
    correct: 1,
    difficulty: "S",
    explanation: "La varianza determina cómo se relacionan los subtipos cuando cambian los lifetime parameters. &mut T es invariante para prevenir code que podría violar memory safety."
  },
  {
    question: "¿Qué es Stacked Borrows (modelo de memoria de Rust)?",
    options: [
      "Modelo formal de Ralf Jung para verificar que unsafe code en Rust respeta el aliasing model; define las reglas para raw pointers y referencias",
      "Un modelo de gestión de memoria exclusivo para código unsafe que apila punteros en el heap",
      "Una representación interna del compilador de los borrows activos organizada como una pila de scopes",
      "Un tipo de smart pointer que apila múltiples referencias en una estructura para compartir datos"
    ],
    correct: 0,
    difficulty: "S",
    explanation: "Stacked Borrows define semantics para unsafe Rust: cada acceso a memoria debe ser justificado por el 'tag' en el top del stack de borrows. Miri (interpreter) puede detectar violaciones."
  },
  {
    question: "¿Qué es Miri y su rol en el ecosistema Rust?",
    options: [
      "Una herramienta de análisis estático que sugiere mejoras de estilo y detecta código duplicado",
      "Un motor de fuzzing que genera inputs aleatorios para encontrar panics en código seguro",
      "Un formateador de código que aplica las convenciones de estilo del proyecto automáticamente",
      "Intérprete del MIR de Rust que detecta UB: acceso out-of-bounds, use-after-free, violaciones de Stacked Borrows, data races en unsafe code"
    ],
    correct: 3,
    difficulty: "S",
    explanation: "cargo miri run detecta Undefined Behavior que el compilador no puede atrapar. Esencial para verificar código unsafe. Usa Stacked Borrows model para verificar aliasing."
  }
];
