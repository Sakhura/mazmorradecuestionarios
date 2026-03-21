window.questions_objc = [
  {
    question: "¿Qué es Objective-C?",
    options: [
      "Superconjunto de C con mensajería de objetos inspirada en Smalltalk; fue el lenguaje principal de macOS e iOS hasta Swift",
      "Una extensión de C",
      "Solo para macOS legacy",
      "Un dialecto de C++"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "Objetivo-C = C + mensajería de Smalltalk. Creado en los 80s, fue la base de NeXTSTEP y luego de macOS/iOS. Apple introdujo Swift en 2014."
  },
  {
    question: "¿Cómo se envía un mensaje a un objeto?",
    options: [
      "obj->metodo()",
      "obj.metodo()",
      "[objeto mensaje] o [objeto mensaje:argumento]",
      "objeto.metodo{}"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "[self viewDidLoad] llama método sin args. [array addObject:item] con argumento. La sintaxis de corchetes es característica de Objective-C."
  },
  {
    question: "¿Qué es un método en Objective-C?",
    options: [
      "Un bloque de código",
      "Una función estática",
      "-(TipoRetorno)nombreMetodo:(Tipo)param con - para instancia, + para clase: -(void)setNombre:(NSString*)nombre",
      "Una función normal"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "- indica método de instancia. + indica método de clase (como static). Las firmas con múltiples parámetros: -(void)setX:(int)x y:(int)y."
  },
  {
    question: "¿Qué es NSString?",
    options: [
      "La clase de Apple para strings inmutables; creados con @'texto'; clase hermana NSMutableString para strings mutables",
      "Un tipo primitivo",
      "Un array de chars",
      "Un string normal de C"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "NSString *nombre = @'Hola'. NSMutableString *ms = [NSMutableString stringWithString:@'base']. La N en NS viene de NeXTSTEP."
  },
  {
    question: "¿Qué es ARC (Automatic Reference Counting)?",
    options: [
      "Un tipo de garbage collector",
      "Gestión automática de memoria que el compilador inserta: retain/release automáticos en tiempo de compilación",
      "Manual memory management",
      "Solo para iOS 8+"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "ARC (LLVM): el compilador inserta llamadas a retain/release/autorelease. Antes de ARC los desarrolladores las hacían manualmente. No es GC: es determinista."
  },
  {
    question: "¿Qué hace <code>@property</code>?",
    options: [
      "Un tipo de variable global",
      "Una propiedad CSS",
      "Declara una propiedad con getter y setter automáticos: @property (nonatomic, strong) NSString *nombre",
      "Solo para UIKit"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "@property (nonatomic, strong) NSString *name; genera -(NSString*)name y -(void)setName:(NSString*)n. @synthesize genera la implementación (automático en LLVM)."
  },
  {
    question: "¿Qué es un Protocol en Objective-C?",
    options: [
      "Un tipo de herencia",
      "Equivalente a interface de Java: declara métodos que una clase puede (@optional) o debe (@required) implementar",
      "Un protocolo de red",
      "Un tipo de categoría"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "@protocol Drawable; @required -(void)draw; @optional -(void)drawWithColor:(UIColor*)c; @end. class Square: NSObject <Drawable>"
  },
  {
    question: "¿Qué es una Categoría?",
    options: [
      "Añade métodos a una clase existente sin subclasificar ni modificarla: @interface NSString (MyCategory) -(BOOL)isPalindrome; @end",
      "Un módulo de Objective-C",
      "Un tipo de clase",
      "Solo para NSObject"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "Las categorías permiten extender clases de Cocoa sin herencia. Similar a extension functions de Kotlin o open classes de Ruby."
  },
  {
    question: "¿Qué es un bloque (Block) en Objective-C?",
    options: [
      "Un bloque de código Obj-C",
      "Solo para GCD",
      "Closures de Objective-C: ^{ código } o ^(tipo arg){ código }; capturan el entorno; base de APIs como dispatch_async",
      "Un tipo de método"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "void (^myBlock)(int) = ^(int x) { NSLog(@'%d', x); }; myBlock(5). [array sortedArrayUsingComparator:^(id a, id b) { return [a compare:b]; }]"
  },
  {
    question: "¿Qué es Grand Central Dispatch (GCD)?",
    options: [
      "Un tipo de operación batch",
      "Un protocolo de red",
      "Framework de Apple para multithreading: dispatch_async(queue, block) ejecuta trabajo en background",
      "Un tipo de herencia"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{ result = doWork(); dispatch_async(dispatch_get_main_queue(), ^{ updateUI(result); }); });"
  },
  {
    question: "¿Qué es weak vs strong en ARC?",
    options: [
      "strong es obsoleto",
      "Son iguales",
      "strong: incrementa retain count; weak: no incrementa, se pone nil si el objeto es liberado; evita retain cycles",
      "weak es más rápido"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "@property (nonatomic, weak) id<Delegate> delegate — delegates son weak para evitar retain cycles. Parent→Child: strong. Child→Parent: weak."
  },
  {
    question: "¿Qué es un retain cycle?",
    options: [
      "Un error de compilación",
      "Dos objetos se referencian mutuamente con strong references, ninguno llega a retain count 0, memory leak permanente",
      "Solo con blocks",
      "Un tipo de loop"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "ObjectA (strong→) ObjectB (strong→) ObjectA: nunca se liberan. Con blocks: __weak typeof(self) weakSelf = self; antes de capturar self en un bloque almacenado."
  },
  {
    question: "¿Qué es el runtime de Objective-C?",
    options: [
      "Una librería de Apple",
      "El compilador Obj-C",
      "Solo para iOS",
      "El runtime dinámico que implementa la mensajería: objc_msgSend; permite swizzling, introspection, y binding dinámico de mensajes"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "objc_msgSend(obj, sel_registerName('method')) es la función C que implementa el envío de mensajes. Permite method swizzling en runtime."
  },
  {
    question: "¿Qué es el method swizzling?",
    options: [
      "Un tipo de herencia runtime",
      "Solo para debug builds",
      "Intercambiar la implementación de dos métodos en runtime usando el Objective-C runtime; base de muchas librerías de testing y monitoreo",
      "Una feature del compilador"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "method_exchangeImplementations(method1, method2) intercambia implementaciones. Usado en Aspect-Oriented Programming, testing, y APM tools."
  },
  {
    question: "¿Qué es @autoreleasepool?",
    options: [
      "Es automático siempre",
      "Solo en código no-ARC",
      "Pool que recoge objetos autorelease y los libera cuando el pool se drena; importante en loops con muchos objetos temporales",
      "Una optimización automática"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "@autoreleasepool { for (int i=0; i<1000000; i++) { NSString *s = [NSString stringWithFormat:@'%d', i]; } } libera la memoria del pool al salir."
  },
  {
    question: "¿Qué es KVO (Key-Value Observing)?",
    options: [
      "Un tipo de notification",
      "Permite observar cambios en propiedades de objetos: [obj addObserver:self forKeyPath:@'nombre' options:... context:nil]",
      "Solo para UIKit",
      "Un tipo de delegate"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "KVO usa el runtime de Objective-C para notificar automáticamente cuando una propiedad cambia. Base de muchos bindings de datos en apps macOS/iOS."
  },
  {
    question: "¿Cuál es la diferencia entre nil, NULL, Nil y NSNull?",
    options: [
      "NULL es obsoleto",
      "nil: puntero a objeto ObjC nulo; NULL: puntero C nulo; Nil: puntero a clase nulo; NSNull: objeto singleton para representar null en colecciones",
      "Son todos iguales",
      "Solo estilo diferente"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "[nil message]: seguro, no hace nada (retorna 0/nil). NULL para punteros C. Nil para Class variables. NSNull en NSArray/NSDictionary donde nil no puede ser elemento."
  }
];
