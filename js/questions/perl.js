window.questions_perl = [
  {
    question: "¿Para qué destaca Perl?",
    options: [
      "Procesamiento de texto, expresiones regulares, scripting de sistema; 'Swiss Army chainsaw' de la programación",
      "Computación científica",
      "Desarrollo de videojuegos",
      "Desarrollo de apps web modernas"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "Perl es famoso por su excelente manejo de texto y regex. Fue dominante en web (CGI), bioinformática y administración de sistemas."
  },
  {
    question: "¿Cómo se declara una variable escalar?",
    options: [
      "int x = 5",
      "$x = 5 solo",
      "var x = 5",
      "my $x = 5 (escalar con my para lexical scope)"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "Los escalares en Perl llevan $: $nombre, $edad. my indica scope léxico. Los arrays llevan @, los hashes llevan %. use strict obliga a my."
  },
  {
    question: "¿Qué hace <code>print</code> en Perl?",
    options: [
      "Solo con formato printf",
      "Imprime texto: print 'Hola mundo\\n'; o con interpolación: print \"Hola $nombre\\n\"",
      "Imprime solo números",
      "Imprime sin newline siempre"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "Las cadenas dobles \"...\" interpolan variables. Las simples '...' no. say es igual que print pero añade newline automáticamente."
  },
  {
    question: "¿Qué son las expresiones regulares en Perl?",
    options: [
      "Solo para validación",
      "Una librería externa",
      "Son iguales que en Python",
      "Primitiva del lenguaje: $str =~ /patrón/; $str =~ s/viejo/nuevo/g; split /,/, $str"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "Perl es el lenguaje que popularizó la sintaxis de regex que usan casi todos los lenguajes modernos. $_ =~ /^\\d+$/ verifica si es número."
  },
  {
    question: "¿Qué es <code>chomp</code>?",
    options: [
      "Corta el string a mitad",
      "Elimina el newline final de un string: chomp($line) después de readline",
      "Divide un string",
      "Elimina espacios en blanco"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "while (my $line = <FILE>) { chomp($line); } — quita el \\n del final de cada línea leída. chop elimina cualquier último carácter."
  },
  {
    question: "¿Qué son los arrays en Perl?",
    options: [
      "Son igual que hashes",
      "Arrays de solo un tipo",
      "Solo números",
      "@array = (1,2,3): listas de escalares; $array[0] para acceder; push, pop, shift, unshift, splice para manipular"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "@nums = (1..10). push @nums, 11. my @sorted = sort @nums. wantarray() detecta si se llama en contexto de lista o escalar."
  },
  {
    question: "¿Qué son los hashes en Perl?",
    options: [
      "Arrays asociativos de otros lenguajes",
      "Pares clave-valor: %hash = (clave => valor); $hash{clave} para acceder; keys %hash para listar claves",
      "Funciones criptográficas",
      "Solo para datos únicos"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "%persona = (nombre => 'Ana', edad => 30). $persona{nombre}. exists $persona{tel}. delete $persona{edad}."
  },
  {
    question: "¿Qué es el contexto escalar vs lista?",
    options: [
      "Solo estilo diferente",
      "Solo afecta strings",
      "En contexto escalar, los arrays retornan su tamaño; en lista, sus elementos: my $n = @arr (size) vs my @copy = @arr",
      "Es un bug conocido"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "scalar(@arr) retorna tamaño. if (@arr) — truthy si no vacío. El contexto de la operación determina el comportamiento."
  },
  {
    question: "¿Qué son las referencias en Perl?",
    options: [
      "Solo para arrays",
      "Un tipo especial de escalar",
      "Punteros a otras variables: \\@arr crea referencia; $ref->[0] para dereferenciar array; $ref->{key} para hash",
      "Variables globales"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "my $aref = \\@array. $aref->[0]. my $href = \\%hash. $href->{key}. my $sref = \\$scalar. $${sref}. Permiten estructuras de datos complejas."
  },
  {
    question: "¿Qué hace <code>use strict; use warnings;</code>?",
    options: [
      "Deshabilitan features peligrosas",
      "Importa módulos",
      "Son opcionales siempre",
      "use strict obliga a declarar variables con my/our; use warnings activa advertencias; best practice en Perl moderno"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "sin strict, las variables no declaradas son globales (peligroso). use strict; obliga a my. use warnings detecta usos sospechosos. Siempre usar ambas."
  },
  {
    question: "¿Qué es CPAN?",
    options: [
      "Una herramienta de Perl",
      "Un framework web",
      "Comprehensive Perl Archive Network: el repositorio central de módulos Perl; uno de los más grandes repositorios de librerías del mundo",
      "Un lenguaje derivado de Perl"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "CPAN tiene más de 200,000 módulos. cpan install Nombre o cpanm (cpanminus) para instalar. CPAN fue uno de los primeros gestores de paquetes de lenguajes."
  },
  {
    question: "¿Qué hace el operador <code>=~</code>?",
    options: [
      "Vincula un string a una regex: $str =~ /patron/ para match; =~ s/a/b/ para sustitución; !~ para negación",
      "Comparación flexible",
      "Una asignación condicional",
      "Asignación"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "'hello' =~ /ell/ — true. $str =~ s/foo/bar/gi — sustituye todas (g) case-insensitive (i). split /,/, $csv — divide por coma."
  },
  {
    question: "¿Qué son los filehandles?",
    options: [
      "Una librería de IO",
      "Handles de error",
      "Variables para operaciones de archivo: open(my $fh, '<', 'file.txt') o die $!; while (<$fh>)",
      "Tipos de archivos"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "open(my $fh, '<', 'in.txt') or die; while (my $line = <$fh>) { chomp $line; }. close($fh). <> lee de ARGV o STDIN."
  },
  {
    question: "¿Qué es Moose en Perl?",
    options: [
      "Un animal",
      "Un framework web",
      "Sistema de OOP moderno para Perl 5: clases, atributos con tipos, herencia, roles (mixins), métodos generados",
      "Solo para tipos de datos"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "Moose añade OOP completo sobre el sistema básico de Perl. has 'name' => (is => 'rw', isa => 'Str'). extends 'Animal'. with 'Printable' (roles)."
  },
  {
    question: "¿Qué es Perl 6 / Raku?",
    options: [
      "Una versión mejorada",
      "Una actualización de Perl 5",
      "Un lenguaje completamente nuevo y diferente; renombrado a Raku en 2019 para evitar confusión con Perl 5",
      "El sucesor directo de Perl"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "Raku (antes Perl 6) es un rediseño completo: gramáticas, tipos graduales, concurrencia con Promises/Channels, OOP mejorado. Perl 5 y Raku son lenguajes hermanos, no el mismo."
  },
  {
    question: "¿Qué son los tied variables en Perl?",
    options: [
      "Variables cuyo comportamiento (STORE, FETCH, etc.) puede ser personalizado ligándolas a una clase: tie my $var, 'MiClase'",
      "Un tipo de referencia",
      "Variables fijas",
      "Variables constantes"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "Tie permite hacer que variables Perl actúen de forma especial: DBM files como hashes, buffers circulares como arrays, variables que leen de una fuente externa."
  }
];
