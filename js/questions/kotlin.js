window.questions_kotlin = [
  {
    question: "¿Qué es Kotlin?",
    options: [
      "Una librería de Android que facilita el desarrollo de interfaces de usuario nativas",
      "Un framework de Java para construir aplicaciones web del lado del servidor con Spring",
      "Lenguaje moderno de JVM, interoperable 100% con Java, oficial para Android; tipado estático con null safety",
      "Un lenguaje de scripting interpretado para automatizar tareas en entornos de desarrollo"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "Kotlin fue creado por JetBrains y es el lenguaje oficial para Android. Compila a JVM bytecode, JavaScript o código nativo."
  },
  {
    question: "¿Qué hace <code>val</code> vs <code>var</code> en Kotlin?",
    options: [
      "val es inmutable (solo asignación); var es mutable (puede reasignarse)",
      "var es exclusivamente para tipos de referencia como objetos y colecciones en Kotlin",
      "val solo puede usarse con tipos primitivos como Int, Float y Boolean en Kotlin",
      "Ambas palabras clave tienen el mismo comportamiento y son intercambiables en cualquier contexto"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "val x = 5 es como final en Java. var y = 5 puede cambiarse. Preferir val siempre que sea posible."
  },
  {
    question: "¿Qué es null safety en Kotlin?",
    options: [
      "El sistema de tipos distingue entre tipos nullable (T?) y no-nullable (T); el compilador previene NullPointerException",
      "Una restricción que solo aplica a tipos primitivos como Int y Boolean sin afectar a objetos",
      "Una convención de nomenclatura donde las variables que pueden ser null deben llevar prefijo null",
      "Una característica opcional que Kotlin hereda de Java sin ninguna verificación adicional en compilación"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "String no puede ser null. String? puede. Para acceder: s?.length (safe call), s!! (force unwrap, riesgo de NPE), s ?: 'default' (Elvis operator)."
  },
  {
    question: "¿Qué hace el operador <code>?.</code> (safe call)?",
    options: [
      "Es el operador Elvis que retorna un valor por defecto cuando el objeto es null o vacío",
      "Verifica si el tipo del objeto en tiempo de ejecución coincide con el tipo esperado en la firma",
      "Actúa como operador ternario evaluando una condición y devolviendo uno de dos valores posibles",
      "Llama al método solo si el objeto no es null; retorna null si el objeto es null"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "user?.address?.city retorna null si user o address son null, sin NullPointerException."
  },
  {
    question: "¿Qué es el operador Elvis <code>?:</code>?",
    options: [
      "Retorna el lado izquierdo si no es null, o el derecho si es null: name ?: 'Unknown'",
      "Lanza una excepción personalizada cuando la expresión de la izquierda resulta ser null",
      "Es equivalente al operador safe call ?. pero se aplica sobre el resultado de una función",
      "Un operador ternario que evalúa una condición booleana en lugar de comprobar nullabilidad"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "val length = str?.length ?: 0 retorna la longitud o 0 si str es null. Equivale a: if (str != null) str.length else 0"
  },
  {
    question: "¿Qué son las data classes?",
    options: [
      "Clases especiales que mapean directamente a tablas de base de datos con anotaciones JPA",
      "Clases cuyos valores no pueden modificarse después de la creación, similares a records de Java",
      "Clases diseñadas exclusivamente para transferir datos entre capas sin lógica de negocio",
      "Clases que generan automáticamente equals, hashCode, toString, copy, component functions para sus propiedades del constructor"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "data class User(val name: String, val age: Int). copy(name='Bob') crea copia con campo modificado. Destructuring: val (n, a) = user."
  },
  {
    question: "¿Qué son las extension functions?",
    options: [
      "Un mecanismo de mezcla de comportamiento similar a los mixins que requiere herencia múltiple",
      "Una forma de herencia implícita que propaga automáticamente métodos entre clases relacionadas",
      "Funciones que solo pueden añadirse a clases del mismo módulo o paquete del proyecto actual",
      "Añaden métodos a clases existentes sin modificarlas ni heredar: fun String.isPalindrome(): Boolean { ... }"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "Extension functions añaden funcionalidad a cualquier clase, incluyendo las de bibliotecas externas o clases finales. Son resueltas estáticamente."
  },
  {
    question: "¿Qué son las coroutines en Kotlin?",
    options: [
      "Funciones que pueden suspenderse y reanudarse; permiten código asíncrono con apariencia síncrona; muy eficientes vs threads",
      "Threads del sistema operativo gestionados por la JVM con prioridades configurables en Kotlin",
      "Una implementación de async/await idéntica a la de JavaScript con la misma semántica de ejecución",
      "Una característica exclusiva del SDK de Android que no puede usarse en proyectos JVM estándar"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "launch { val data = fetch().await(); display(data) }. Las coroutines son gestionadas por el runtime de Kotlin, no el OS."
  },
  {
    question: "¿Qué es un <code>object</code> en Kotlin?",
    options: [
      "Una instancia ordinaria de clase que se crea con el constructor predeterminado sin parámetros",
      "El equivalente exacto a los miembros static de Java con idéntica semántica de inicialización",
      "Declara singleton, anonymous objects, o companion objects; una única instancia creada automáticamente",
      "Un tipo especial de clase abstracta que no puede ser instanciada directamente en Kotlin"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "object Singleton { ... } crea un singleton. companion object { } reemplaza static de Java. object : Interface { ... } es anonymous object."
  },
  {
    question: "¿Qué hace <code>when</code> en Kotlin?",
    options: [
      "Evalúa únicamente comparaciones de igualdad simple sin soporte para rangos ni tipos en casos",
      "Es un alias exacto de switch de Java con la misma sintaxis y comportamiento en todos los casos",
      "Expresión de pattern matching más poderosa que switch: puede usarse como expresión, con rangos, tipos, y sin break",
      "Es una forma alternativa del bucle for que itera mientras una condición sea verdadera en Kotlin"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "when(x) { is String -> ... in 1..10 -> ... else -> ... }. También: when { x > 0 -> ... x < 0 -> ... }"
  },
  {
    question: "¿Qué son las sealed classes?",
    options: [
      "Clases que solo pueden contener propiedades de tipo enum sin lógica adicional en su cuerpo",
      "Clases abstractas que no pueden tener implementaciones concretas de ningún método declarado",
      "Clases que impiden toda forma de herencia y no pueden ser extendidas por ninguna subclase",
      "Jerarquía de clases cerrada: todas las subclases deben estar en el mismo archivo; permite when exhaustivo sin else"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "sealed class Result { data class Success(val data: String): Result(); data class Error(val msg: String): Result() }. when es exhaustivo."
  },
  {
    question: "¿Qué es destructuring en Kotlin?",
    options: [
      "Extraer componentes de objetos con operadores componentN(): val (name, age) = person",
      "Una forma especial de herencia que descompone una clase en sus partes constituyentes separadas",
      "Un proceso para desempaquetar objetos serializados que fueron comprimidos en formato binario",
      "Una característica exclusiva de listas que permite acceder a los primeros elementos directamente"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "Las data classes generan component1(), component2(), etc. También funciona con Map.Entry, Pair, Triple y any class with componentN functions."
  },
  {
    question: "¿Qué son los lambdas y higher-order functions en Kotlin?",
    options: [
      "Funciones que reciben o retornan otras funciones: fun List<T>.filter(predicate: (T) -> Boolean): List<T>",
      "Una característica exclusiva para operar sobre colecciones sin posibilidad de uso general",
      "Idénticos a los lambdas de Java 8 sin ninguna diferencia de sintaxis ni capacidades adicionales",
      "Funciones anónimas que solo pueden capturar variables del scope global del módulo actual"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "list.filter { it > 0 }.map { it * 2 }. 'it' es el parámetro implícito cuando hay un solo parámetro."
  },
  {
    question: "¿Qué es <code>let</code>, <code>run</code>, <code>apply</code>, <code>also</code>, <code>with</code>?",
    options: [
      "Scope functions que ejecutan un bloque en el contexto de un objeto; difieren en cómo acceden al objeto y qué retornan",
      "Métodos de las clases de colección estándar para transformar y filtrar elementos en cadena",
      "Operadores reservados exclusivamente para el manejo de valores nullable en expresiones condicionales",
      "Palabras reservadas del lenguaje que controlan el flujo de ejecución en bloques condicionales"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "apply: retorna el objeto (config builder). let: retorna el resultado del bloque (null check). run: retorna resultado, usa this. also: retorna el objeto, usa it. with: no es extension function."
  },
  {
    question: "¿Qué son las inline functions?",
    options: [
      "El compilador reemplaza la llamada con el cuerpo de la función; elimina overhead de lambdas (object allocation, virtual call)",
      "Son idénticas a las funciones inline de Java con la misma semántica y restricciones de uso",
      "Funciones de una sola línea que el compilador optimiza automáticamente sin declaración especial",
      "Funciones que solo pueden contener código puro sin efectos secundarios ni estado mutable"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "inline fun measure(block: () -> Unit) { ... }. El compilador inlinea el cuerpo Y el lambda. reified permite usar T::class en funciones inline."
  },
  {
    question: "¿Qué es <code>reified</code>?",
    options: [
      "Una anotación que habilita la reflexión de tipos en clases normales sin funciones inline",
      "Una característica del compilador de Java que Kotlin hereda para manejar la borrado de tipos",
      "Con funciones inline, reified T permite usar T::class en el cuerpo en lugar de class: Class<T> como parámetro",
      "Un calificador de tipo genérico reutilizable que elimina la necesidad de type erasure en runtime"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "inline fun <reified T> List<Any>.filterIsInstance(): List<T>. Gracias a inline+reified, T no se borra en runtime (sin type erasure)."
  },
  {
    question: "¿Qué es el type system de Kotlin con <code>Nothing</code>?",
    options: [
      "Un tipo especial que es equivalente al tipo null en el sistema de tipos de Kotlin",
      "El equivalente en Kotlin al tipo void de Java para funciones que no retornan ningún valor",
      "Un tipo que representa la ausencia total de valor diferente a null para colecciones vacías",
      "Nothing es el tipo que no tiene valores; retornado por funciones que nunca terminan o siempre lanzan excepción; subtipo de todo tipo"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "fun fail(msg: String): Nothing { throw Exception(msg) }. Nothing es el bottom type. val x: String = y ?: fail('null!') — el compilador sabe que fail() no retorna."
  },
  {
    question: "¿Qué son los Flows en Kotlin?",
    options: [
      "Son Channels que permiten comunicación bidireccional sincrónica entre coroutines activas",
      "Cold streams asíncronas: emiten valores de forma lazy, cancellable, con backpressure; alternativa reactiva a RxJava",
      "Una característica exclusiva del SDK de Android para manejar datos del ciclo de vida de UI",
      "Coroutines mejoradas que incluyen soporte para transformaciones funcionales integradas en el runtime"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "flow { emit(1); emit(2) }.filter { it > 0 }.collect { println(it) }. Cold: la emisión comienza al coleccionar. StateFlow/SharedFlow son hot."
  },
  {
    question: "¿Qué es <code>suspend fun</code>?",
    options: [
      "El equivalente de la palabra clave async de JavaScript con la misma semántica de promesas",
      "Una función que detiene completamente la ejecución del programa hasta recibir una señal externa",
      "Función que puede suspenderse sin bloquear el thread; solo puede llamarse desde coroutines o otras suspend functions",
      "Una función que se pausa de forma permanente hasta que una condición externa la reanuda explícitamente"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "suspend fun fetchData(): String { delay(1000); return data }. Bajo el capó, el compilador convierte suspend fun en state machine con Continuation."
  },
  {
    question: "¿Qué son los Kotlin Multiplatform (KMP)?",
    options: [
      "Una característica que solo permite compartir lógica de negocio sin acceso a APIs de plataforma",
      "Permite compartir código Kotlin entre plataformas (JVM, JS, Native iOS/Android/Desktop) usando módulos comunes",
      "Es idéntico a Kotlin Native con soporte exclusivo para la compilación a código máquina nativo",
      "Una herramienta únicamente para compartir interfaces de usuario entre aplicaciones móviles"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "expect/actual: la declaración common (expect) tiene implementaciones específicas por plataforma (actual). Compartir lógica de negocio, networking, etc."
  },
  {
    question: "¿Qué es el context receiver (Kotlin 1.6+)?",
    options: [
      "El objeto Context de Android que se pasa implícitamente a las funciones de la actividad",
      "Permite que una función requiera múltiples receivers en su contexto: context(Logger, Database) fun process()",
      "Un tipo especial de receptor exclusivo para el contexto de aplicación en proyectos Android",
      "Un tipo de scope function que combina el comportamiento de apply y let en una sola llamada"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "Context receivers permiten access a múltiples scopes sin herencia: context(Scope1, Scope2) fun f() puede usar this de ambos scopes."
  },
  {
    question: "¿Cómo funciona el bytecode de Kotlin en la JVM?",
    options: [
      "Kotlin compila a bytecode JVM; algunas features como lambdas/extension functions generan clases adicionales; interop seamless con Java",
      "El bytecode generado por Kotlin es más lento que el de Java por las capas de abstracción extra",
      "Kotlin requiere un runtime especial instalado en la JVM para ejecutar las características del lenguaje",
      "El bytecode de Kotlin es idéntico byte a byte al de Java sin ninguna diferencia estructural"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "kotlinc genera .class files. Extension functions se compilan como static methods. Las coroutines generan state machines. Inline classes evitan boxing en muchos casos."
  },
  {
    question: "¿Qué son las value classes / inline classes?",
    options: [
      "Clases que solo pueden envolver tipos primitivos como Int sin soporte para tipos de referencia",
      "Clases de datos reducidas que comparten la implementación de equals y hashCode con data classes",
      "Clases con todos los campos marcados como val que no pueden modificarse tras su construcción inicial",
      "@JvmInline value class Wrapper(val value: Int): en runtime se usa el tipo interno sin boxing en la mayoría de casos"
    ],
    correct: 3,
    difficulty: "B",
    explanation: "@JvmInline value class Password(val value: String). El compilador usa String directamente cuando es posible, añadiendo type safety sin runtime overhead."
  },
  {
    question: "¿Qué es el compiler plugin system de Kotlin?",
    options: [
      "Un sistema de plugins del IDE IntelliJ que mejora el autocompletado y el resaltado de sintaxis",
      "Procesadores de anotaciones que se ejecutan en tiempo de compilación generando código auxiliar",
      "Permite extender el compilador: kotlinx.serialization, Compose, Parcelize usan plugins para generar código en tiempo de compilación",
      "Un sistema de plugins exclusivo para proyectos Android que no puede usarse en proyectos JVM"
    ],
    correct: 2,
    difficulty: "A",
    explanation: "Kotlin compiler plugins hooks: generation phase, IR phase. kotlinx.serialization genera código de serialización. Compose transforma composable functions a llamadas de UI."
  },
  {
    question: "¿Qué es Jetpack Compose y su relación con Kotlin?",
    options: [
      "Un tipo de coroutine especializada para ejecutar operaciones de renderizado en el hilo principal",
      "Una herramienta exclusiva de Kotlin Multiplatform para compartir interfaces entre iOS y Android",
      "Framework de UI declarativo para Android basado en composable functions y el Kotlin compiler plugin",
      "Una librería de animaciones que simplifica las transiciones entre pantallas en aplicaciones Android"
    ],
    correct: 2,
    difficulty: "A",
    explanation: "@Composable fun Greeting(name: String) { Text('Hello $name') }. El compiler plugin transforma las funciones para rastrear recomposición y optimizar rerenders."
  },
  {
    question: "¿Cómo funciona el IR backend del compilador Kotlin?",
    options: [
      "Un backend exclusivo para Kotlin Native que convierte código a binarios para sistemas embebidos",
      "Un formato de bytecode especializado que solo puede ejecutarse en la versión más reciente de la JVM",
      "Backend basado en Intermediate Representation que genera código para JVM, JS y Native; permite optimizaciones cross-platform uniformes",
      "Un backend intermedio diseñado únicamente para facilitar la depuración de código en producción"
    ],
    correct: 2,
    difficulty: "S",
    explanation: "El IR backend (K2 compiler) reemplaza los backends anteriores con un IR unificado. Permite aplicar optimizaciones una vez y compartir código de análisis semántico entre targets."
  },
  {
    question: "¿Qué es K2 compiler (Kotlin 2.0)?",
    options: [
      "Una actualización menor de versión que no introduce cambios significativos en el compilador existente",
      "Un compilador alternativo más lento pero con mejor compatibilidad con las versiones antiguas de Java",
      "Reescritura del compilador frontend con nuevo analizador semántico; 2x+ más rápido, mejor análisis de flujo, base para nuevas features",
      "Una versión diferente del compilador que solo puede usarse en proyectos de Kotlin Multiplatform"
    ],
    correct: 2,
    difficulty: "S",
    explanation: "K2: nuevo análisis semántico basado en FIR (Frontend Intermediate Representation). Análisis de flujo mejorado para null safety y smart casts. Base de futures features como context receivers."
  }
];
