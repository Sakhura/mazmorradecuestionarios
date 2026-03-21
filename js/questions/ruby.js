window.questions_ruby = [
  {
    question: "¿Cuál es el lema de Ruby?",
    options: [
      "'Diseñado para la felicidad del programador': sintaxis muy legible y expresiva",
      "'La seguridad por encima de todo': validación estricta en tiempo de compilación",
      "'Write once, run anywhere': bytecode portable entre plataformas distintas",
      "'El rendimiento primero': optimizaciones automáticas en tiempo de ejecución"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "Matz (Yukihiro Matsumoto) diseñó Ruby para maximizar la felicidad del programador, con una sintaxis muy natural y expresiva."
  },
  {
    question: "¿Cómo se imprime en Ruby?",
    options: [
      "puts 'texto'",
      "echo 'texto'",
      "console.log('texto')",
      "print_line('texto')"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "puts imprime con salto de línea. print imprime sin salto de línea. p imprime la representación de debug y retorna el valor."
  },
  {
    question: "¿Cómo se define un método en Ruby?",
    options: [
      "func nombre(param)",
      "method nombre(param)",
      "function nombre(param)",
      "def nombre(param); end"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "def y end delimitan métodos. No se necesitan llaves ni tipos. El último valor evaluado es el retorno implícito."
  },
  {
    question: "¿Qué es un bloque en Ruby?",
    options: [
      "Un tipo de clase anónima que hereda de BasicObject automáticamente",
      "Un módulo inline que se incluye temporalmente en el scope actual",
      "Una función con nombre que se define dentro de otra función existente",
      "Código entre do...end o { } que se pasa a un método: [1,2,3].each { |x| puts x }"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "Los bloques son closures que se pasan a métodos. Con do...end (multilínea) o { } (una línea). Se llaman con yield."
  },
  {
    question: "¿Qué es un símbolo en Ruby?",
    options: [
      "Un tipo de número inmutable representado con dos puntos al inicio",
      ":nombre — identificador inmutable e internable; más eficiente que strings para claves de hash y como identifiers",
      "Una constante global que comienza con dos puntos y mayúscula",
      "Un operador especial de acceso a métodos privados de cualquier objeto"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "{:nombre => 'Ana'} o {'nombre': 'Ana'}. Symbols son singletons: :nombre.object_id siempre igual. Muy usados en Rails como claves de hash."
  },
  {
    question: "¿Qué es el retorno implícito en Ruby?",
    options: [
      "Un comportamiento erróneo que se debe evitar usando return explícito",
      "Se debe usar return siempre para que el código sea legible y explícito",
      "La última expresión evaluada en un método se retorna automáticamente sin necesidad de return",
      "Retornar nil cuando el método no tiene ninguna sentencia de retorno"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "def double(x); x * 2; end. No se necesita 'return x * 2'. Permite código más conciso."
  },
  {
    question: "¿Cómo se crean objetos en Ruby?",
    options: [
      "MiClase.create(args)",
      "create MiClase(args)",
      "MiClase.new(args)",
      "new Object(MiClase)"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "Ruby.new llama al método initialize. Persona.new('Ana', 30) crea una instancia llamando initialize('Ana', 30)."
  },
  {
    question: "¿Qué es el método <code>initialize</code>?",
    options: [
      "Un método de módulo que configura el namespace al cargarse el archivo",
      "El constructor de la clase, llamado cuando se usa .new()",
      "Un método especial que inicia el programa principal de la aplicación",
      "Un método opcional que solo se define cuando se necesita estado inicial"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "class Persona; def initialize(nombre); @nombre = nombre; end; end. Las variables de instancia comienzan con @."
  },
  {
    question: "¿Qué son las variables de instancia en Ruby?",
    options: [
      "Variables de módulo compartidas entre todas las clases que lo incluyen",
      "Variables locales con scope limitado al bloque donde se definen",
      "Variables inmutables declaradas con freeze al momento de asignación",
      "@variable: pertenece a una instancia de clase; @@ es de clase; $ es global"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "@nombre pertenece a cada instancia. @@count pertenece a la clase. $global es global (evitar). Sin prefijo: variable local."
  },
  {
    question: "¿Qué hace el método <code>attr_accessor</code>?",
    options: [
      "Accede a atributos de la base de datos usando Active Record automáticamente",
      "Genera automáticamente getter y setter para la variable de instancia: attr_accessor :nombre",
      "Define un atributo de clase compartido entre todas las instancias del objeto",
      "Solo genera métodos getter de lectura sin permitir escritura del atributo"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "attr_accessor :nombre genera def nombre; @nombre; end y def nombre=(v); @nombre=v; end. attr_reader solo getter; attr_writer solo setter."
  },
  {
    question: "¿Qué son los módulos en Ruby?",
    options: [
      "Mixins y namespaces: pueden incluirse en clases con include o extend; no instanciables",
      "Archivos de código Ruby que se importan con require automáticamente",
      "Un tipo de gema que se publica en RubyGems para distribución pública",
      "Son equivalentes a las clases pero con instanciación restringida por convención"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "module Greetable; def greet; 'Hola'; end; end; class User; include Greetable; end. include añade como métodos de instancia; extend como métodos de clase."
  },
  {
    question: "¿Qué es yield en Ruby?",
    options: [
      "Cede el control al bloque pasado al método: def run; yield if block_given?; end",
      "Un generador lazy equivalente al yield de Python con la misma semántica",
      "Retorna un valor inmediatamente terminando la ejecución del método",
      "Pausa el método hasta que una condición externa se cumpla y reanuda"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "def apply(x); yield(x); end; apply(5) { |n| n * 2 }. yield pasa control al bloque. block_given? verifica si se pasó bloque."
  },
  {
    question: "¿Qué es un Proc vs Lambda en Ruby?",
    options: [
      "Proc: trata return como return del método contenedor; Lambda: su propio return; Lambda verifica aridad",
      "Lambda es más lento que Proc porque crea un scope adicional innecesario",
      "Proc es una sintaxis obsoleta reemplazada completamente por Lambda en Ruby 2",
      "Son completamente idénticos en comportamiento y semántica de ejecución"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "lambda { |x| x * 2 } o ->(x) { x * 2 }. Lambda verifica número de argumentos y return es local. proc { } no verifica aridad y return sale del método."
  },
  {
    question: "¿Qué es duck typing en Ruby?",
    options: [
      "Un sistema de tipos estático verificado en tiempo de compilación por el intérprete",
      "Si un objeto tiene los métodos necesarios, puede usarse; el tipo no importa, solo el comportamiento ('si grazna como pato...')",
      "Un tipo de herencia implícita basada en la estructura de los métodos definidos",
      "Un protocolo formal de verificación de interfaces para objetos Ruby"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "Ruby no verifica tipos en tiempo de compilación. Si el objeto responde a los métodos requeridos (respond_to?), funciona."
  },
  {
    question: "¿Qué es el mixin en Ruby?",
    options: [
      "Un tipo de herencia múltiple que crea una nueva clase combinando dos existentes",
      "Solo aplicable a clases abstractas que no pueden instanciarse directamente",
      "Una técnica para combinar dos clases en una sola clase compuesta resultante",
      "Incluir un módulo en una clase para añadir sus métodos; alternativa a herencia múltiple"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "include Comparable en una clase solo requiere definir <=>; el módulo provee <, >, >=, <=, between?. Enumerable con each provee map, select, reduce, etc."
  },
  {
    question: "¿Qué hace <code>map</code> en Ruby?",
    options: [
      "Aplica un bloque a cada elemento y retorna nuevo array: [1,2,3].map { |x| x * 2 }",
      "Es equivalente a each pero retorna siempre el array original sin cambios",
      "Itera sobre el array ejecutando el bloque sin retornar ningún valor",
      "Crea un mapa geográfico a partir de coordenadas en un array de puntos"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "[1,2,3].map { |x| x ** 2 } → [1,4,9]. También alias: collect. each itera sin retornar nuevo array."
  },
  {
    question: "¿Qué es method_missing en Ruby?",
    options: [
      "Método llamado cuando se invoca un método inexistente; permite DSLs dinámicos y proxies",
      "Es un error fatal que detiene la ejecución del programa inmediatamente",
      "Solo disponible en Rails y no en Ruby puro para uso general",
      "Un error de método que se lanza automáticamente y no puede interceptarse"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "def method_missing(name, *args); if name =~ /^find_by_/; ...; else; super; end; end. La base de muchos métodos mágicos de Rails."
  },
  {
    question: "¿Qué son las gemas (gems) en Ruby?",
    options: [
      "Objetos del lenguaje que representan valores especiales inmutables del runtime",
      "Librerías y plugins empaquetados; gem install nombre; Bundler gestiona dependencias con Gemfile",
      "Un tipo de módulo con funcionalidad de seguridad incorporada para producción",
      "Archivos de configuración con formato especial para proyectos Ruby on Rails"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "gem install rails. Gemfile con bundler: gem 'rails', '~> 7.0'. bundle install instala todas las dependencias."
  },
  {
    question: "¿Qué es Rails y el patrón MVC?",
    options: [
      "Solo aplicable para crear APIs REST sin soporte para vistas HTML completas",
      "Un framework web para Python que sigue el patrón MVC con convenciones",
      "Un tipo de ORM que mapea objetos Ruby a tablas de bases de datos relacionales",
      "Framework web de Ruby: Model (ActiveRecord), View (ERB/Haml), Controller — convención sobre configuración"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "Rails sigue MVC y convenciones fuertes (CoC). rails generate scaffold User name:string genera modelo, migraciones, vistas y controlador completos."
  },
  {
    question: "¿Qué es open classes en Ruby?",
    options: [
      "Cualquier clase (incluyendo built-ins) puede reabrirse y modificarse en cualquier momento: class String; def palindrome?; self == reverse; end; end",
      "Solo las clases propias pueden reabrirse; las clases del core son inmutables",
      "Clases que no tienen constructor initialize y se instancian vacías siempre",
      "Un tipo de herencia abierta que permite crear subclases en tiempo de ejecución"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "class Integer; def factorial; (1..self).reduce(1, :*); end; end. 5.factorial → 120. Poderoso pero usar con cuidado (monkey patching)."
  },
  {
    question: "¿Qué es comparable con <=> (spaceship operator)?",
    options: [
      "Solo funciona con números enteros y no con objetos personalizados de clase",
      "Un operador exclusivo de PHP adaptado en Ruby con diferente semántica",
      "Retorna -1, 0 o 1; al definirlo e incluir Comparable, la clase obtiene <, >, >=, <=, between?, sort funciona",
      "Solo aplicable a la comparación de strings y no a otros tipos de datos"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "class Box; include Comparable; attr_accessor :volume; def <=>(other); volume <=> other.volume; end; end. Ahora Box puede ordenarse."
  },
  {
    question: "¿Qué es Rack en Ruby?",
    options: [
      "Una librería de arrays de alta performance para procesamiento de datos masivos",
      "Interface estándar entre servidores web y aplicaciones Ruby: una app Rack es un callable que recibe env y retorna [status, headers, body]",
      "Un tipo de middleware de base de datos para conexiones persistentes en Ruby",
      "Un framework de pruebas unitarias alternativo a RSpec para aplicaciones Rails"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "Rack es la base de Rails, Sinatra, etc. app = ->(env) { [200, {'Content-Type' => 'text/html'}, ['Hello']] }. Rack::Builder para componer middleware."
  },
  {
    question: "¿Qué son los Fibers en Ruby?",
    options: [
      "Coroutines ligeras: pueden suspenderse con Fiber.yield y reanudarse con resume; base de IO async en Ruby 3",
      "Un tipo de Proc con capacidad de pausa pero con diferente sintaxis de creación",
      "Son equivalentes a los threads del sistema operativo con memoria compartida",
      "Un tipo de Proc mejorado con soporte para múltiples valores de retorno"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "f = Fiber.new { Fiber.yield 1; Fiber.yield 2; 3 }; f.resume → 1; f.resume → 2; f.resume → 3. Ruby 3 usa Fibers para el Fiber Scheduler."
  },
  {
    question: "¿Qué es el Ractors en Ruby 3?",
    options: [
      "Son Fibers mejorados con soporte para ejecución asíncrona de bloques",
      "Un tipo de actor que comparte estado mutable entre threads de forma segura",
      "Parallel execution units sin compartir objetos mutables; elimina el GVL para paralelismo real en Ruby",
      "Un tipo de Thread con gestión automática de sincronización y locks integrados"
    ],
    correct: 2,
    difficulty: "B",
    explanation: "Ractor.new { ... }.take. Ractors no comparten objetos mutables por defecto, evitando el GVL (GIL de Ruby). Permite verdadero paralelismo."
  },
  {
    question: "¿Qué hace <code>freeze</code> en Ruby?",
    options: [
      "Pausa la ejecución de un Fiber hasta que se llame resume nuevamente",
      "Serializa un objeto a formato binario para almacenamiento persistente",
      "Hace un objeto inmutable: str.freeze. Los literales de string en Ruby 3 son frozen por defecto con magic comment",
      "Congela la ejecución del thread actual por un tiempo determinado en ms"
    ],
    correct: 2,
    difficulty: "B",
    explanation: "# frozen_string_literal: true en el archivo hace que todos los strings literales sean inmutables, mejorando rendimiento y compartición de memoria."
  }
];
