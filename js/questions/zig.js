window.questions_zig = [
  {
    question: "¿Qué es Zig?",
    options: [
      "Un lenguaje de scripting de alto nivel para automatización de sistemas que compila a scripts de shell optimizados",
      "Un lenguaje funcional puro similar a Haskell pero con sintaxis imperativa y compilación a WebAssembly nativa",
      "Lenguaje de sistemas moderno sin null ocultos ni undefined behavior silencioso; alternativa a C con mejor manejo de errores y comptime",
      "Un superconjunto de C++ que añade programación genérica mejorada y un sistema de tipos más expresivo que templates"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "Zig fue creado por Andrew Kelley. Busca ser una alternativa moderna a C: sin preprocessor, sin macros ocultas, control total sobre el comportamiento del programa y la memoria."
  },
  {
    question: "¿Qué hace comptime en Zig?",
    options: [
      "Compila el programa con optimizaciones agresivas equivalentes a -O3 de GCC para máximo rendimiento en producción",
      "Permite ejecutar código en tiempo de compilación: tipos genéricos, constantes calculadas, validaciones; más poderoso que templates de C++",
      "Activa el modo de compilación cruzada que genera binarios para múltiples arquitecturas de destino simultáneamente",
      "Precalcula y cachea los resultados de las funciones puras para evitar recomputación en llamadas subsiguientes"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "fn add(comptime T: type, a: T, b: T) T. comptime permite generics sin metaprogramación oscura. Los valores comptime se evalúan en compilación y pueden ser cualquier expresión Zig."
  },
  {
    question: "¿Cómo maneja Zig los errores?",
    options: [
      "Error unions: !T es el tipo 'error o T'; try propaga errores; catch los maneja; errores son valores, no excepciones",
      "Con excepciones tipadas similares a Java: throw ErrorType y catch(ErrorType e) {} para capturar errores esperados",
      "Con códigos de retorno enteros como C: 0 significa éxito, cualquier valor negativo indica un código de error",
      "Mediante panic automático que termina el proceso con un mensaje descriptivo cuando ocurre cualquier error en runtime"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "fn openFile(path: []const u8) !std.fs.File. try propaga el error al caller. catch |err| maneja el error específico. Los error sets son tipos explícitos y exhaustivos en Zig."
  },
  {
    question: "¿Qué es la optional type en Zig?",
    options: [
      "Un tipo de dato especial para configuraciones opcionales del compilador que pueden omitirse en builds de producción",
      "?T: puede ser T o null; if (opt) |val| para acceder al valor; orelse para valor por defecto si es null",
      "Un tipo nullable similar a los Optional de Java que usa el patrón isPresent()/get() para acceso seguro",
      "Una anotación de tipo que indica que el parámetro de una función puede omitirse al ser llamada sin argumento"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "var x: ?i32 = null. x = 42. if (x) |value| { ... } else { ... }. val orelse 0 retorna 0 si val es null. Zig hace explícito cuándo un valor puede ser null, eliminando null pointer dereferences."
  },
  {
    question: "¿Qué es el allocator pattern en Zig?",
    options: [
      "Un pool de memoria preasignado que Zig usa automáticamente para todas las allocaciones del programa en producción",
      "El allocator global del sistema operativo que Zig usa por defecto cuando no se especifica ninguno explícitamente",
      "Un patrón de caché de objetos que reutiliza la memoria previamente liberada para evitar llamadas costosas al SO",
      "No hay allocator global; las funciones que necesitan memoria reciben un Allocator como parámetro; facilita testing"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "fn processData(allocator: std.mem.Allocator, data: []u8) ![]u8. std.testing.allocator detecta memory leaks en tests. std.heap.page_allocator, GeneralPurposeAllocator, ArenaAllocator según el caso."
  },
  {
    question: "¿Qué es defer en Zig?",
    options: [
      "Una declaración que pospone la evaluación de una expresión hasta que sus dependencias estén disponibles en memoria",
      "Ejecuta código al salir del scope actual: defer file.close() — garantiza cleanup incluso si hay errores en el camino",
      "Una directiva que marca una función como de ejecución diferida, compilándola solo cuando es llamada por primera vez",
      "Un tipo de promesa asíncrona que ejecuta código en background cuando el event loop del runtime Zig está disponible"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "const f = try std.fs.cwd().openFile('x.txt', .{}); defer f.close(); // se ejecuta al salir del scope. errdefer ejecuta solo si hay error. Elimina la necesidad de goto cleanup de C."
  },
  {
    question: "¿Qué hace @import en Zig?",
    options: [
      "Descarga e instala un paquete externo desde el repositorio oficial de paquetes de Zig automáticamente",
      "Importa módulos: const std = @import('std'); const testing = @import('std').testing — importación en tiempo de compilación",
      "Carga dinámicamente una biblioteca compartida .so o .dll en tiempo de ejecución mediante dlopen del sistema",
      "Incluye código fuente de otro archivo Zig mediante copia textual, similar al #include del preprocesador de C"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "const std = @import('std'); const ArrayList = std.ArrayList. @import a diferentes archivos es la forma de organizar el código en módulos. Los archivos .zig son módulos implícitamente."
  },
  {
    question: "¿Qué es @cImport en Zig?",
    options: [
      "Una función integrada que convierte código Zig en interfaces compatibles con ABI C para exportar a librerías",
      "Un compilador de expresiones C que traduce fragmentos de código C embebido directamente en el fuente Zig",
      "Un sistema de macros que adapta automáticamente las diferencias de convenciones entre C y Zig en el runtime",
      "Importa headers de C directamente: const c = @cImport(@cInclude('stdio.h')); c.printf('Hola\\n');"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "Zig puede importar y llamar código C directamente. @cImport convierte los headers C a tipos Zig en tiempo de compilación. Permite usar cualquier librería C sin escribir bindings manuales."
  },
  {
    question: "¿Qué son los packed structs en Zig?",
    options: [
      "Structs con campos comprimidos usando algoritmos LZ77 para reducir su tamaño en memoria y en serialización",
      "Structs donde el compilador reordena los campos automáticamente para minimizar el padding y desperdiciar menos RAM",
      "Structs con campos alineados a límites de caché de CPU para maximizar la eficiencia del acceso a memoria compartida",
      "packed struct garantiza representación en memoria exacta sin padding; esencial para protocolos de red, hardware, bitfields"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "const Header = packed struct { version: u4, type: u4, length: u16 }. The size is exactly 3 bytes. Sin packed, el compilador puede añadir padding. Útil para interop con C y hardware."
  },
  {
    question: "¿Qué es el build system de Zig?",
    options: [
      "Un archivo Makefile generado automáticamente por el compilador que coordina la compilación de los módulos del proyecto",
      "Un sistema de CMake integrado que Zig usa internamente para gestionar las dependencias del proyecto entre plataformas",
      "Un archivo de configuración JSON llamado zig.json que lista las dependencias y los targets del proyecto a compilar",
      "build.zig es código Zig que configura el build: exe, tests, libraries; compilado y ejecutado por zig build"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "build.zig: const exe = b.addExecutable(.{.name = 'app', .root_source_file = .{.path = 'main.zig'}}). zig build ejecuta build.zig. El build system es scriptable con el lenguaje Zig completo."
  },
  {
    question: "¿Qué es la cross-compilation en Zig?",
    options: [
      "La capacidad de Zig para compilar proyectos que mezclan código Zig y C++ en el mismo binario ejecutable",
      "Un sistema de plugins que permite al compilador de Zig generar código para arquitecturas no soportadas oficialmente",
      "Una característica que requiere instalar LLVM y las toolchains del target para cada plataforma de destino separadamente",
      "Zig puede cross-compilar para cualquier target sin toolchains extras: zig build-exe main.zig -target aarch64-linux"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "zig build-exe -target x86_64-windows-gnu, -target aarch64-macos, -target wasm32-wasi. Zig incluye libc de musl para cada target. Sin necesidad de instalar compiladores cruzados externos."
  },
  {
    question: "¿Qué es zig cc?",
    options: [
      "Una herramienta de análisis estático de código C integrada en Zig para detectar undefined behavior sin compilar",
      "zig cc puede usarse como reemplazo drop-in de gcc/clang con soporte de cross-compilation integrado: zig cc -target x86_64-linux",
      "Un modo especial de compilación que genera código C desde fuentes Zig para distribución en proyectos legacy",
      "El compilador oficial de C creado por los autores de Zig que sigue el estándar C11 con extensiones propias"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "CC=zig cc ./configure && make permite compilar proyectos C/C++ con las capacidades de cross-compilation de Zig. Es clang bajo el capó pero con soporte automático para múltiples targets."
  },
  {
    question: "¿Cuál es la filosofía de diseño de Zig vs Rust?",
    options: [
      "Zig es un lenguaje de scripting de alto nivel; Rust es un lenguaje de sistemas; ambos compilan a LLVM IR",
      "Zig usa garbage collection incremental para simplicidad; Rust usa ownership con borrow checker para safety completa",
      "Zig: simplicidad y control total sin borrow checker; el programador gestiona memoria. Rust: safety garantizada por compilador",
      "No hay diferencias filosóficas; ambos lenguajes son alternativas directamente equivalentes para programación de sistemas"
    ],
    correct: 2,
    difficulty: "B",
    explanation: "Zig elige no tener borrow checker: más control pero más responsabilidad del programador. Rust garantiza memory safety en compilación con overhead de aprendizaje. Ambos se complementan."
  }
];
