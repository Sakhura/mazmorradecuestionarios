window.questions_objc = [
  {
    question: "¿Qué es Objective-C?",
    options: [
      "Superconjunto de C con mensajería de objetos inspirada en Smalltalk; fue el lenguaje principal de macOS e iOS hasta Swift",
      "Un lenguaje de scripting dinámico de Apple que interpreta archivos .m en tiempo de ejecución sin compilación previa",
      "Una versión orientada a objetos de C++ desarrollada por Microsoft para el desarrollo de aplicaciones macOS nativas",
      "Un transpilador que convierte código C estándar a código Swift para facilitar la migración de proyectos legacy"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "Objetivo-C = C + mensajería de Smalltalk. Creado en los 80s, fue la base de NeXTSTEP, macOS y iOS. Swift lo está reemplazando gradualmente pero hay millones de líneas de ObjC activas."
  },
  {
    question: "¿Cómo se envía un mensaje a un objeto en Objective-C?",
    options: [
      "objeto.mensaje() usando la sintaxis de punto similar a Java y C++, con paréntesis para los argumentos del método",
      "objeto->mensaje(argumento) con el operador flecha heredado de C para acceso a través de puntero a struct",
      "[objeto mensaje] o [objeto mensaje:argumento] usando la sintaxis de corchetes de mensajería de Smalltalk",
      "objeto::mensaje(argumento) con el operador de resolución de ámbito heredado de C++ para llamadas a métodos"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "[self viewDidLoad] llama método sin args. [array addObject:item] con argumento. [dict setObject:val forKey:key] con múltiples argumentos. El envío de mensajes es dinámico en runtime."
  },
  {
    question: "¿Cómo se declara un método en Objective-C?",
    options: [
      "func nombreMetodo(param: Tipo) -> TipoRetorno con la sintaxis de Swift que Objective-C heredó en versiones recientes",
      "void nombreMetodo(Tipo param) {} con la sintaxis C estándar que Objective-C usa para métodos de instancia simples",
      "-(TipoRetorno)nombreMetodo:(Tipo)param con - para instancia, + para clase: -(void)setNombre:(NSString*)nombre",
      "method(TipoRetorno) nombreMetodo:(Tipo)param con la palabra clave method para diferenciarlos de funciones C"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "- indica método de instancia. + indica método de clase (como static). -(NSString*)descripcion retorna NSString. La declaración va en @interface y la implementación en @implementation."
  },
  {
    question: "¿Qué es NSString en Objective-C?",
    options: [
      "La clase de Apple para strings inmutables; creados con @'texto'; clase hermana NSMutableString para mutables",
      "Una función de la librería estándar C que Objective-C usa internamente para la gestión de cadenas de texto",
      "Un tipo primitivo de Objective-C para strings de bytes que no soporta caracteres Unicode multibyte",
      "Una clase de Swift totalmente compatible con Objective-C para el manejo de cadenas Unicode en aplicaciones iOS"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "NSString *nombre = @'Hola'. NSMutableString *ms = [NSMutableString string]. [s length] longitud. [s stringByAppendingString:@' mundo']. stringWithFormat: para interpolación."
  },
  {
    question: "¿Qué es ARC (Automatic Reference Counting) en Objective-C?",
    options: [
      "Un recolector de basura con ciclos de escaneo periódicos similar al GC de Java que se ejecuta en background",
      "Gestión automática de memoria que el compilador inserta: retain/release automáticos en tiempo de compilación",
      "Un pool de objetos reutilizables que ARC mantiene en caché para evitar allocaciones frecuentes del heap de iOS",
      "Un sistema de gestión de memoria manual donde el programador llama a retain y release explícitamente en el código"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "ARC (LLVM): el compilador inserta llamadas a retain/release/autorelease en tiempo de compilación. No es un GC runtime; es análisis estático de vida de objetos. Sin pausa del GC."
  },
  {
    question: "¿Qué hace @property en Objective-C?",
    options: [
      "Marca una variable de instancia como pública, permitiendo su acceso directo desde código externo a la clase",
      "Declara una constante de clase que no puede modificarse después de la inicialización del objeto en el constructor",
      "Declara una propiedad con getter y setter automáticos: @property (nonatomic, strong) NSString *nombre",
      "Registra una propiedad en el sistema KVO de Cocoa para que los observadores reciban notificaciones automáticas"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "@property (nonatomic, strong) NSString *name; genera -(NSString*)name y -(void)setName:(NSString*)name automáticamente con @synthesize o automáticamente en Xcode moderno."
  },
  {
    question: "¿Qué es un Protocol en Objective-C?",
    options: [
      "Un protocolo de red TCP/IP que Objective-C usa para comunicación entre objetos en aplicaciones distribuidas",
      "Equivalente a interface de Java: declara métodos que una clase puede (@optional) o debe (@required) implementar",
      "Un tipo de clase abstracta que define la implementación base de un conjunto de métodos reutilizables por herencia",
      "Un mecanismo de serialización que define cómo los objetos se convierten a formato binario para transmisión en red"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "@protocol Drawable; @required -(void)draw; @optional -(void)drawWithColor:(UIColor*)c; @end. Una clase que implementa el protocolo: @interface Circle <Drawable>."
  },
  {
    question: "¿Qué es una Categoría en Objective-C?",
    options: [
      "Añade métodos a una clase existente sin subclasificarla ni modificarla: @interface NSString (MyCategory)",
      "Un tipo de agrupación de clases relacionadas que funciona como namespace para organizar el código en módulos",
      "Una herramienta de documentación que categoriza los métodos de una clase por función en la documentación de Xcode",
      "Un mecanismo de herencia múltiple que permite que una clase adopte comportamientos de varias clases base"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "Las categorías permiten extender clases de Cocoa sin herencia. Similar a los extension methods de C# o las extension functions de Kotlin. No pueden añadir variables de instancia."
  },
  {
    question: "¿Qué es un bloque (Block) en Objective-C?",
    options: [
      "Un bloque de código delimitado por llaves {} que define el scope léxico de las variables locales del método",
      "Una región de memoria contigua alineada al tamaño de página del sistema para almacenamiento de objetos grandes",
      "Closures de Objective-C: ^{ código } o ^(tipo arg){ código }; capturan el entorno; base de APIs como dispatch_async",
      "Un tipo de función de orden superior similar a los functors de C++ que se pasan como argumentos a métodos Cocoa"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "void (^myBlock)(int) = ^(int x) { NSLog(@'%d', x); }; myBlock(5). [array enumerateObjectsUsingBlock:^(id obj, NSUInteger i, BOOL *stop) {...}]. Los blocks copian las variables capturadas."
  },
  {
    question: "¿Qué es Grand Central Dispatch (GCD)?",
    options: [
      "Un framework de Apple para gestión de eventos del UI: GCD encola las actualizaciones de la interfaz de usuario",
      "Un sistema de distribución de actualizaciones de Xcode y macOS que gestiona descargas en segundo plano",
      "Framework de Apple para multithreading: dispatch_async(queue, block) ejecuta trabajo en background de forma segura",
      "Un compilador JIT de Apple que Grand Dispatch optimiza las llamadas a Objective-C más frecuentes en runtime"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{ // background }); dispatch_async(dispatch_get_main_queue(), ^{ // actualizar UI })."
  },
  {
    question: "¿Qué diferencia hay entre weak y strong en ARC?",
    options: [
      "strong: genera código más rápido porque el compilador omite las verificaciones de retención del objeto referenciado",
      "weak y strong son sinónimos en ARC moderno; la diferencia solo existe en el sistema manual de retain/release",
      "strong y weak son atributos de acceso de propiedades, equivalentes a public y private respectivamente en ObjC",
      "strong: incrementa retain count; weak: no incrementa, se pone nil si el objeto es liberado; evita retain cycles"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "@property (nonatomic, weak) id<Delegate> delegate — delegates son weak para evitar retain cycles. Los block captures de self usan __weak typeof(self) weakSelf = self para evitar ciclos."
  },
  {
    question: "¿Qué es un retain cycle en Objective-C?",
    options: [
      "El ciclo de vida normal de un objeto ARC que pasa por retain al crearse y release al liberarse del scope",
      "Dos objetos se referencian mutuamente con strong references, ninguno llega a retain count 0, causando memory leak",
      "Un bucle de eventos donde el mismo objeto se retiene varias veces en el autorelease pool antes de liberarse",
      "Una técnica de optimización donde ARC reutiliza objetos liberados previamente sin volver a allocar memoria nueva"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "ObjectA (strong→) ObjectB (strong→) ObjectA: nunca se liberan. Con bloques: self retiene el bloque y el bloque retiene self. Solución: usar __weak typeof(self) weakSelf = self."
  },
  {
    question: "¿Qué es el runtime de Objective-C?",
    options: [
      "El intérprete de bytecode de Apple que ejecuta código Objective-C sin compilación a código nativo en iOS",
      "Un framework de Apple que proporciona las clases base NSObject, NSString y NSArray para todas las aplicaciones",
      "El compilador de Xcode que traduce código Objective-C a Swift durante el proceso de build automáticamente",
      "El runtime dinámico que implementa la mensajería: objc_msgSend; permite swizzling, introspection y binding dinámico"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "objc_msgSend(obj, sel_registerName('method')) es la función C que implementa el envío de mensajes. El runtime mantiene tablas de métodos que pueden modificarse en tiempo de ejecución."
  },
  {
    question: "¿Qué es el method swizzling en Objective-C?",
    options: [
      "Una técnica de optimización del compilador que reordena los métodos en la tabla de dispatch para mejorar la caché",
      "Un patrón de diseño para intercambiar implementaciones de métodos en tiempo de diseño sin modificar el código fuente",
      "Intercambiar la implementación de dos métodos en runtime usando el Objective-C runtime; base de testing y monitoreo",
      "Una característica del compilador de Xcode que fusiona métodos duplicados en subclases para reducir el tamaño del binario"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "method_exchangeImplementations(method1, method2) intercambia implementaciones. Usado en frameworks como Firebase, AspectObjC. Permite añadir logging o analytics sin modificar el código original."
  },
  {
    question: "¿Qué es @autoreleasepool?",
    options: [
      "Un pool de objetos reutilizables que ARC mantiene preasignados para evitar allocaciones frecuentes en loops",
      "Un mecanismo de ARC que agrupa múltiples retains y los ejecuta en batch para mejorar el rendimiento del heap",
      "Pool que recoge objetos autorelease y los libera cuando el pool se drena; importante en loops con muchos objetos temporales",
      "Un gestor de ciclo de vida que libera automáticamente los objetos al final de cada método del Objective-C runtime"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "@autoreleasepool { for (int i=0; i<1000000; i++) { NSString *s = [NSString stringWithFormat:@'%d', i]; } } drena el pool cada iteración evitando acumulación de memoria."
  },
  {
    question: "¿Qué es KVO (Key-Value Observing)?",
    options: [
      "Un sistema de criptografía de Apple basado en pares clave-valor para almacenar datos sensibles en el Keychain",
      "Permite observar cambios en propiedades de objetos: [obj addObserver:self forKeyPath:@'nombre' options:... context:nil]",
      "Un patrón de codificación que serializa objetos Objective-C a diccionarios NSDictionary para almacenamiento en plist",
      "Una API de consulta de datos similar a SQL que Apple usa internamente para la base de datos Core Data de iOS"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "KVO usa el runtime de Objective-C para notificar automáticamente cuando una propiedad cambia. observeValueForKeyPath:ofObject:change:context: recibe la notificación. Muy usado en Cocoa Bindings."
  },
  {
    question: "¿Cuál es la diferencia entre nil, NULL, Nil y NSNull en Objective-C?",
    options: [
      "Son todos equivalentes en Objective-C moderno; el compilador los trata de forma idéntica en todos los contextos",
      "nil: puntero a objeto ObjC nulo; NULL: puntero C nulo; Nil: puntero a clase nulo; NSNull: objeto singleton en colecciones",
      "nil y NULL son para punteros; Nil es para valores booleanos; NSNull es un número entero con valor cero en ObjC",
      "Solo nil es válido en Objective-C moderno; NULL, Nil y NSNull son tipos obsoletos de versiones anteriores de Cocoa"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "[nil message]: seguro, no hace nada (retorna 0/nil). NULL para punteros C (char*, void*). Nil para variables de tipo Class. NSNull en arrays/dicts donde nil no es válido como valor."
  }
];
