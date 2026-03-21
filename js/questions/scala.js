window.questions_scala = [
  {
    question: "¿Qué es Scala?",
    options: [
      "Un lenguaje de scripts de propósito general sin tipado estático que corre en la JVM",
      "Lenguaje que combina OOP y programación funcional en la JVM; usado en Big Data con Apache Spark",
      "Un framework de Java para programación funcional sin un lenguaje propio independiente",
      "Un lenguaje exclusivo para análisis de datos que no puede usarse en aplicaciones de producción"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "Scala (Scalable Language) corre en la JVM, interoperable con Java. Fuerte sistema de tipos, inmutabilidad por defecto, y paradigma multi."
  },
  {
    question: "¿Cómo se declara una variable inmutable en Scala?",
    options: [
      "final x = 5 usando la misma palabra clave que Java para declarar constantes inmutables",
      "const x = 5 siguiendo la convención de lenguajes funcionales modernos como Kotlin",
      "let x = 5 adoptando la sintaxis de Swift y Rust para variables de solo lectura",
      "val x = 5"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "val es inmutable (equivalente a final en Java). var es mutable. Preferir val siempre que sea posible."
  },
  {
    question: "¿Qué es una case class?",
    options: [
      "Un tipo de enum que agrupa constantes relacionadas con un identificador de caso común",
      "Una clase de dominio que representa casos de uso de la aplicación en arquitectura hexagonal",
      "Una clase abstracta de la que otras clases deben heredar para implementar su comportamiento",
      "Clase de datos con equals, hashCode, toString, copy y pattern matching automáticos: case class Point(x: Int, y: Int)"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "case class User(name: String, age: Int). val u = User('Ana', 30). u.copy(age=31). Inmutable por defecto, perfecta para datos."
  },
  {
    question: "¿Qué es el pattern matching en Scala?",
    options: [
      "Una característica exclusiva de case classes que no puede usarse con tipos de datos ordinarios",
      "expr match { case Pattern => result } — más poderoso que switch: tipos, guards, destructuring, extractores",
      "Una versión mejorada de switch que solo evalúa igualdad de valores enteros sin destructuring",
      "Una función de búsqueda de expresiones regulares integrada en la biblioteca estándar de Scala"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "x match { case 0 => 'zero'; case n if n > 0 => 'positive'; case _ => 'negative' }. El compilador verifica exhaustividad en sealed."
  },
  {
    question: "¿Qué es Option en Scala?",
    options: [
      "Un tipo de Future que representa un valor que puede llegar en el futuro de forma asíncrona",
      "Tipo sum: Some(value) o None; alternativa segura a null",
      "Una colección especializada que puede estar vacía o contener múltiples elementos opcionales",
      "Un import que puede omitirse del archivo fuente sin afectar a la compilación del programa"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "Option[String]: Some('hola') o None. Usar en lugar de null. map, flatMap, getOrElse, foreach sobre Option. match { case Some(v) => ...; case None => ... }"
  },
  {
    question: "¿Qué es una función de orden superior?",
    options: [
      "Una función con mayor prioridad de evaluación que se ejecuta antes que las funciones ordinarias",
      "Una función de clase estática que opera sobre datos sin necesitar una instancia del objeto",
      "Función que toma funciones como parámetros o retorna funciones: List(1,2,3).map(x => x * 2)",
      "Una función recursiva que se llama a sí misma con argumentos acumulados como segundo parámetro"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "def apply(f: Int => Int, x: Int): Int = f(x). apply(x => x + 1, 5) = 6. Las funciones son ciudadanos de primera clase en Scala."
  },
  {
    question: "¿Qué es un trait en Scala?",
    options: [
      "Como interfaces pero pueden tener implementación; soporte de mixin múltiple: class Dog extends Animal with Serializable",
      "Una característica especial del compilador de Scala para optimizar la generación de bytecode JVM",
      "Interfaces puramente abstractas sin implementación por defecto, idénticas a las de Java 7",
      "Un tipo especial de clase que solo puede instanciarse una vez en toda la aplicación como singleton"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "trait Flyable { def fly(): String = 'flying' }. class Bird extends Animal with Flyable. Los traits pueden tener estado y comportamiento concreto."
  },
  {
    question: "¿Qué es la inferencia de tipos en Scala?",
    options: [
      "El compilador infiere tipos desde el contexto sin necesidad de anotaciones explícitas en muchos casos",
      "Un proceso manual de verificación de tipos que el programador realiza con herramientas externas",
      "Una característica limitada a variables locales que no aplica a parámetros de funciones o métodos",
      "El equivalente al tipado dinámico de JavaScript donde el tipo se asigna en tiempo de ejecución"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "val x = 42 // Int. val s = 'hola' // String. val f = (x: Int) => x * 2 // Int => Int. Anotaciones explícitas en APIs públicas son buena práctica."
  },
  {
    question: "¿Qué es Apache Spark y su relación con Scala?",
    options: [
      "Un servidor web de alto rendimiento para aplicaciones Scala con capacidad de escalado automático",
      "Framework de procesamiento de big data distribuido; Scala es el lenguaje nativo de Spark y tiene la API más completa",
      "Un tipo de base de datos distribuida diseñada específicamente para consultas con Scala nativo",
      "Un framework exclusivo de Python para análisis de datos que no tiene soporte oficial de Scala"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "Spark fue escrito en Scala. val df = spark.read.csv('data.csv'); df.filter($'edad' > 18).groupBy('ciudad').count(). DataFrame API y Spark SQL."
  },
  {
    question: "¿Qué son los implicits en Scala (2) / given/using (Scala 3)?",
    options: [
      "Son equivalentes a val pero con visibilidad reducida al ámbito del bloque donde se declaran",
      "Variables del sistema operativo que Scala inyecta automáticamente en cada función compilada",
      "Un mecanismo de herencia implícita que Scala usa para resolver métodos en la jerarquía de tipos",
      "Mecanismo para pasar parámetros automáticamente o extensiones de tipos; Scala 3 los renombró a given/using"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "Scala 2: implicit def, implicit val. Scala 3: given Ordering[User] = ... y def sort(using Ordering[User]). Base de typeclasses y extensiones."
  },
  {
    question: "¿Qué es la programación funcional pura en Scala con cats/ZIO?",
    options: [
      "cats provee typeclasses funcionales (Functor, Monad, etc.); ZIO es una librería de efectos para IO puro y concurrencia",
      "Dos frameworks web de Scala para construir APIs REST con tipado fuerte y efectos controlados",
      "Librerías especializadas exclusivamente para transformar y filtrar colecciones de datos en Spark",
      "Una librería de computación científica llamada así por el animal felino por razones históricas"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "cats: IO monad, traverse, Validated. ZIO: ZIO[R, E, A] — environment, error, output. Permite razonar sobre efectos secundarios de forma type-safe."
  },
  {
    question: "¿Qué son los for comprehensions?",
    options: [
      "Bucles for con sintaxis mejorada que iteran sobre colecciones con mayor legibilidad visual",
      "Una forma de generar código Scala automáticamente a partir de plantillas definidas por el usuario",
      "Sintaxis para encadenar flatMap/map/filter sobre monadas: for { x <- opt; y <- lista if y > 0 } yield x + y",
      "Un mecanismo exclusivo de listas que no puede usarse con Option, Future u otras estructuras"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "for { user <- getUser(id); post <- getPost(user.id) } yield post.title — syntactic sugar sobre flatMap/map que funciona con Option, Future, List, Either, etc."
  },
  {
    question: "¿Qué son los type classes en Scala?",
    options: [
      "Las interfaces estándar de Java que Scala usa directamente sin adaptación para interoperabilidad",
      "Un sistema de clasificación de tipos primitivos de la JVM en categorías según su tamaño en bytes",
      "Patrón que añade comportamiento a tipos sin modificarlos: trait Show[A] { def show(a: A): String }; implicitly disponible vía implicits/givens",
      "Clases que contienen solo tipos como miembros sin métodos de instancia ni datos de estado"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "Type classes: Show, Eq, Ord, Functor. Permiten polimorfismo ad-hoc sin herencia. cats y ZIO usan type classes extensivamente."
  },
  {
    question: "¿Qué es Future en Scala?",
    options: [
      "El equivalente a Promise de JavaScript con el mismo modelo de ejecución y API idéntica",
      "Cómputo asíncrono no bloqueante; necesita ExecutionContext; puede componerse con map, flatMap, recover",
      "Un contenedor para valores asíncronos que solo puede representar éxito sin manejo de errores tipados",
      "Un tipo exclusivo para operaciones de entrada/salida que no puede usarse con operaciones de cómputo"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "Future { httpCall() }.map(parse).recover { case e: IOException => defaultValue }. El ExecutionContext define el thread pool."
  },
  {
    question: "¿Qué es sealed en Scala?",
    options: [
      "Equivalente a final en Java: la clase no puede ser extendida por ninguna otra clase del proyecto",
      "Solo puede extenderse en el mismo archivo; permite al compilador verificar exhaustividad del pattern matching",
      "Una clase cuyo estado interno no puede modificarse después de ser creada, haciéndola inmutable",
      "Hace que la clase no pueda ser instanciada directamente y deba usarse como tipo abstracto"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "sealed trait Animal. case class Dog extends Animal. case class Cat extends Animal. match sobre Animal: el compilador avisa si falta algún caso."
  },
  {
    question: "¿Qué es tail recursion optimization en Scala?",
    options: [
      "Una forma de bucle que itera sobre los últimos elementos de una lista de forma más eficiente",
      "Una optimización del último argumento de una función para reducir el uso de memoria del stack",
      "Una optimización que la JVM aplica automáticamente a todas las funciones recursivas sin excepción",
      "@tailrec: el compilador verifica y optimiza recursión de cola a iteración, previniendo stack overflow"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "@tailrec def factorial(n: Int, acc: Int = 1): Int = if (n <= 1) acc else factorial(n-1, n*acc). El compilador la convierte en un loop."
  },
  {
    question: "¿Qué son los companion objects en Scala?",
    options: [
      "Object con el mismo nombre que una clase en el mismo archivo; puede acceder a privados; contiene factory methods y constantes",
      "Objetos de Java que se importan automáticamente en todos los archivos Scala del proyecto",
      "Un tipo de trait que acompaña a una clase para añadirle métodos de extensión sin herencia",
      "Instancias globales de una clase que se crean automáticamente al importar el módulo correspondiente"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "class User(val name: String); object User { def apply(name: String) = new User(name) }. User('Ana') llama al apply del companion."
  },
  {
    question: "¿Qué es Scala 3 vs Scala 2?",
    options: [
      "Solo se introducen cambios superficiales de sintaxis sin modificar la semántica del lenguaje",
      "Scala 3 (Dotty): nueva sintaxis opcional más limpia, enums, given/using, intersection/union types, metaprogramación mejorada, mejor mensajes de error",
      "Scala 3 sacrifica rendimiento de ejecución a cambio de una compilación significativamente más rápida",
      "Son completamente incompatibles y no pueden usarse bibliotecas de Scala 2 en proyectos Scala 3"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "Scala 3 mejora: enums (reales), given/using (implicits limpios), extension methods, union/intersection types, opaque types, match types."
  },
  {
    question: "¿Qué son los opaque types en Scala 3?",
    options: [
      "Tipos cuya definición interna no puede inspeccionarse fuera del módulo pero siguen siendo dinámicos",
      "Son equivalentes a las value classes de Scala 2 con exactamente el mismo comportamiento y limitaciones",
      "opaque type Meter = Double: en el módulo es Double, fuera es Meter — sin overhead en runtime pero type-safe en compilación",
      "Un tipo de alias que crea un nombre alternativo para un tipo existente con las mismas capacidades"
    ],
    correct: 2,
    difficulty: "B",
    explanation: "opaque type Celsius = Double. En el companion: conversiones definidas. Fuera: solo Celsius, no Double. Zero-cost abstraction real."
  },
  {
    question: "¿Qué es el Akka framework?",
    options: [
      "Una base de datos distribuida diseñada para aplicaciones Scala con consistencia eventual garantizada",
      "Actor model toolkit para concurrencia y sistemas distribuidos: actores que se comunican por mensajes asíncronos, sin estado compartido",
      "Un framework web de Scala que compite con Play Framework para construir APIs REST en la JVM",
      "Una extensión de Apache Spark diseñada exclusivamente para el procesamiento de datos en tiempo real"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "actorRef ! Message envía mensaje. def receive = { case Greeting => sender() ! 'Hola' }. Akka HTTP, Akka Streams. Pekko es el fork open-source post-Lightbend."
  },
  {
    question: "¿Qué son los macros en Scala 3?",
    options: [
      "Macros de preprocesador que realizan sustitución textual como los de C antes de compilar",
      "Metaprogramación en tiempo de compilación: inline def y quotes/splices (${ } y '{ }) para generar código type-safe",
      "Son equivalentes a los def macros de Scala 2 con la misma API y las mismas limitaciones de uso",
      "Un tipo de anotación que el compilador procesa para generar implementaciones de métodos comunes"
    ],
    correct: 1,
    difficulty: "A",
    explanation: "inline def log(msg: String): Unit = ${ logImpl('msg) }. Scala 3 macros son más seguros y expresivos que los Scala 2 def macros basados en reflection."
  }
];
