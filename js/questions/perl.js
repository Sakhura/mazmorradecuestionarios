window.questions_perl = [
  {
    question: "¿Para qué destaca Perl?",
    options: [
      "Procesamiento de texto, expresiones regulares, scripting de sistema; 'Swiss Army chainsaw' de la programación",
      "Desarrollo de aplicaciones de escritorio multiplataforma con interfaz gráfica nativa en cada sistema operativo",
      "Computación científica de alto rendimiento con soporte nativo para matrices y álgebra lineal optimizada",
      "Desarrollo web frontend con compilación a WebAssembly para ejecutar Perl directamente en el navegador"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "Perl es famoso por su excelente manejo de texto y regex. Fue dominante en CGI web de los 90s y administración de sistemas. 'There's more than one way to do it' es su filosofía."
  },
  {
    question: "¿Cómo se declara una variable escalar en Perl?",
    options: [
      "var $x = 5 usando la palabra clave var para declaración en el scope léxico del bloque actual",
      "scalar x = 5 con la palabra clave scalar que indica que la variable contiene un único valor atómico",
      "let $x = 5 con la declaración léxica let equivalente a my pero con scope de módulo en lugar de bloque",
      "my $x = 5 (escalar con my para lexical scope) — el símbolo $ indica que es un valor escalar"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "Los escalares en Perl llevan $: $nombre, $edad. my indica scope léxico. our para variables de package. local para variables dinámicas. $x puede ser número, string o referencia."
  },
  {
    question: "¿Qué hace print en Perl?",
    options: [
      "Imprime texto en la consola y retorna el número de caracteres escritos como en la función printf de C",
      "Imprime texto: print 'Hola mundo\\n'; o con interpolación: print \"Hola $nombre\\n\" en comillas dobles",
      "Formatea e imprime texto con especificadores de formato como %s, %d igual que la función sprintf de Python",
      "Escribe en el archivo de log estándar del proceso Perl con timestamp automático y nivel de severidad INFO"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "Las cadenas dobles \"...\" interpolan variables y secuencias de escape. Las simples '...' no interpolan. say() es como print pero añade newline automáticamente."
  },
  {
    question: "¿Qué son las expresiones regulares en Perl?",
    options: [
      "Una librería externa de terceros que Perl carga opcionalmente para el procesamiento de patrones de texto",
      "Estructuras de control especiales que solo funcionan dentro del contexto de operaciones sobre archivos de texto",
      "Primitivas del lenguaje: $str =~ /patrón/; $str =~ s/viejo/nuevo/g; split /,/, $str — sintaxis nativa del lenguaje",
      "Un tipo de dato especial similar al tipo Regex de Python que Perl hereda del estándar POSIX del sistema operativo"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "Perl es el lenguaje que popularizó la sintaxis de regex que usan casi todos los demás lenguajes modernos. /patrón/flags, s/viejo/nuevo/flags, m/patrón/g en contexto lista."
  },
  {
    question: "¿Qué hace chomp en Perl?",
    options: [
      "Trunca un string al número máximo de caracteres definido en la variable $CHOMP_MAX del programa Perl",
      "Elimina todos los espacios en blanco del inicio y final de un string, equivalente a trim en otros lenguajes",
      "Elimina el newline final de un string: chomp($line) después de leer una línea con readline o el operador <>",
      "Divide un string por los caracteres de salto de línea y retorna los fragmentos como array para procesamiento"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "while (my $line = <FILE>) { chomp($line); } — quita el \\n del final de cada línea leída. chop() elimina el último carácter sea cual sea. chomp devuelve el número de caracteres eliminados."
  },
  {
    question: "¿Qué son los arrays en Perl?",
    options: [
      "Colecciones de pares clave-valor denotadas con % que permiten acceso por nombre de forma eficiente en O(1)",
      "Estructuras de datos inmutables denotadas con @ que una vez creadas no pueden modificarse durante la ejecución",
      "Listas de referencias a escalares denotadas con @ donde cada elemento apunta a la dirección del valor original",
      "@array = (1,2,3): listas de escalares; $array[0] para acceder; push, pop, shift, unshift, splice para manipular"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "@nums = (1..10). push @nums, 11. my @sorted = sort @nums. wantarray() detecta contexto lista vs escalar. La sigla cambia según contexto: @arr es lista, $arr[0] es escalar."
  },
  {
    question: "¿Qué son los hashes en Perl?",
    options: [
      "Arrays asociativos denotados con # que mapean índices numéricos a valores con acceso O(log n) ordenado",
      "Pares clave-valor: %hash = (clave => valor); $hash{clave} para acceder; keys %hash para listar todas las claves",
      "Tablas de símbolos globales del intérprete Perl que mapean nombres de variables a sus referencias en memoria",
      "Listas doblemente enlazadas de pares que el recolector de basura de Perl gestiona con conteo de referencias"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "%persona = (nombre => 'Ana', edad => 30). $persona{nombre}. exists $persona{key}. delete $persona{key}. each %hash itera. La flecha => es igual a la coma pero más legible."
  },
  {
    question: "¿Qué es el contexto escalar vs lista en Perl?",
    options: [
      "En contexto escalar los strings retornan su longitud en bytes; en lista retornan los caracteres individualmente",
      "En contexto escalar las funciones retornan el primer elemento; en lista retornan todos los elementos disponibles",
      "En contexto escalar, los arrays retornan su tamaño; en lista, sus elementos: my $n = @arr (size) vs my @copy = @arr",
      "El contexto solo afecta a las funciones built-in; las funciones definidas por el usuario ignoran el contexto de llamada"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "scalar(@arr) retorna tamaño. if (@arr) — truthy si no vacío. El contexto es fundamental en Perl: la misma expresión puede retornar resultados muy distintos según dónde se usa."
  },
  {
    question: "¿Qué son las referencias en Perl?",
    options: [
      "Alias de variables que permiten acceso por nombre alternativo sin crear una copia del valor en memoria",
      "Variables globales del paquete main:: que pueden referenciarse desde cualquier módulo sin importación explícita",
      "Punteros a otras variables: \\@arr crea referencia; $ref->[0] para dereferenciar array; $ref->{key} para hash",
      "Declaraciones forward de funciones que el intérprete usa para resolver llamadas antes de la definición completa"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "my $aref = \\@array. $aref->[0]. my $href = \\%hash. $href->{key}. my $sref = \\$scalar. $$sref. Las referencias son la base para estructuras de datos complejas y closures en Perl."
  },
  {
    question: "¿Qué hacen use strict y use warnings en Perl?",
    options: [
      "use strict importa el módulo Strict que añade tipado gradual; use warnings activa el modo de depuración verbose",
      "use strict activa el modo de compatibilidad con Perl 5 clásico; use warnings lo hace compatible con Perl 6/Raku",
      "use strict convierte todos los errores en excepciones fatales; use warnings los convierte en mensajes informativos",
      "use strict obliga a declarar variables con my/our; use warnings activa advertencias; best practice en Perl moderno"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "sin strict, las variables no declaradas son globales (peligroso). use warnings detecta uniinitialized values, deprecated features y otros problemas comunes en tiempo de ejecución."
  },
  {
    question: "¿Qué es CPAN?",
    options: [
      "Certified Perl Application Network: un sistema de distribución de aplicaciones Perl para entornos empresariales",
      "Common Perl Archive Node: un servidor espejo distribuido que acelera la descarga de módulos Perl en regiones remotas",
      "Comprehensive Perl Archive Network: el repositorio central de módulos Perl; uno de los más grandes repositorios del mundo",
      "Core Perl API Namespace: el espacio de nombres de las funciones built-in que Perl proporciona sin módulos adicionales"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "CPAN tiene más de 200,000 módulos. cpan install Nombre o cpanm (cpanminus) para instalar. metacpan.org es la interfaz web. DBI, Moose, Dancer, Catalyst son módulos muy populares."
  },
  {
    question: "¿Qué hace el operador =~ en Perl?",
    options: [
      "Vincula un string a una regex: $str =~ /patron/ para match; =~ s/a/b/ para sustitución; !~ para negación",
      "Compara dos strings ignorando mayúsculas/minúsculas, retornando 1 si son iguales o '' si son diferentes",
      "Asigna el resultado de una expresión regular a una variable y retorna el número de coincidencias encontradas",
      "Concatena un string con el resultado de evaluar una regex, uniendo el texto original con el patrón compilado"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "'hello' =~ /ell/ — true. $str =~ s/foo/bar/gi — sustituye todas (g) case-insensitive (i). while ($str =~ /(\w+)/g) — itera todas las coincidencias del patrón en el string."
  },
  {
    question: "¿Qué son los filehandles en Perl?",
    options: [
      "Punteros especiales que Perl usa internamente para gestionar la memoria de las cadenas de texto muy largas",
      "Identificadores de módulo que permiten acceder a las funciones de un archivo de biblioteca sin importación",
      "Variables para operaciones de archivo: open(my $fh, '<', 'file.txt') or die $!; while (<$fh>) para leer líneas",
      "Referencias a procesos del sistema operativo que Perl crea automáticamente para los comandos ejecutados con system()"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "open(my $fh, '<', 'in.txt') or die; while (my $line = <$fh>) { chomp $line; }. Modos: '<' lectura, '>' escritura, '>>' append, '|-' pipe a programa. STDIN, STDOUT, STDERR son filehandles especiales."
  },
  {
    question: "¿Qué es Moose en Perl?",
    options: [
      "Un framework web de Perl inspirado en Rails que añade convenciones MVC y generación automática de CRUD",
      "Una extensión del intérprete Perl que optimiza la ejecución de código orientado a objetos mediante JIT compilation",
      "Sistema de OOP moderno para Perl 5: clases, atributos con tipos, herencia, roles (mixins), métodos generados",
      "Un sistema de macros higiénicas para Perl 5 que añade metaprogramación en tiempo de compilación al lenguaje"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "Moose añade OOP completo sobre el sistema básico de Perl. has 'name' => (is => 'ro', isa => 'Str', required => 1). extends 'BaseClass'. with 'RoleName'. Moo es la versión ligera."
  },
  {
    question: "¿Qué es Perl 6 / Raku?",
    options: [
      "La versión 6.0 de Perl lanzada en 2010 con compatibilidad total hacia atrás con todos los módulos de Perl 5",
      "Un dialecto de Perl optimizado para sistemas embebidos con una sintaxis simplificada y sin módulos CPAN",
      "Un lenguaje completamente nuevo y diferente; renombrado a Raku en 2019 para evitar confusión con Perl 5",
      "El modo estricto avanzado de Perl 5 activado con use 6.0 que deshabilita las características más oscuras del lenguaje"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "Raku (antes Perl 6) es un rediseño completo: gramáticas, tipos graduales, concurrencia con Supply/Channel, roles, múltiple dispatch. Incompatible con Perl 5 pero comparten filosofía."
  },
  {
    question: "¿Qué son los tied variables en Perl?",
    options: [
      "Variables cuyo comportamiento (STORE, FETCH, etc.) puede personalizarse ligándolas a una clase con tie()",
      "Variables compartidas entre threads que Perl protege automáticamente con locks para evitar condiciones de carrera",
      "Referencias circulares entre variables que el recolector de basura de Perl resuelve mediante conteo de referencias débiles",
      "Variables de entorno del sistema operativo que Perl expone mediante el hash %ENV con acceso tipado y validado"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "Tie permite hacer que variables Perl actúen de forma especial: DBM files como hashes, contadores automáticos como escalares, arrays circulares. tie my $var, 'MiClase', @args."
  }
];
