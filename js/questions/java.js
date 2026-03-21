window.questions_java = [
  {
    question: "¿Cuál es el tipo de dato correcto para almacenar un número entero en Java?",
    options: [
      "integer",
      "whole",
      "int",
      "num"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "int es el tipo primitivo para enteros en Java (32 bits). Integer es su clase envolvente."
  },
  {
    question: "¿Cómo se declara una constante en Java?",
    options: [
      "final int X = 5;",
      "const int X = 5;",
      "constant int X = 5;",
      "static int X = 5;"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "final hace que una variable no pueda reasignarse. Por convención las constantes se nombran en MAYÚSCULAS."
  },
  {
    question: "¿Qué hace el método <code>System.out.println()</code>?",
    options: [
      "Imprime en consola sin salto de línea",
      "Lee entrada del usuario",
      "Lanza una excepción",
      "Imprime en consola con salto de línea"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "println() imprime el texto y agrega un salto de línea al final. print() imprime sin salto de línea."
  },
  {
    question: "¿Cuál es la forma correcta de crear un objeto en Java?",
    options: [
      "new Clase()",
      "make Clase()",
      "Clase.new()",
      "create Clase()"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "El operador new instancia una clase e invoca su constructor. Ej: MyClass obj = new MyClass();"
  },
  {
    question: "¿Qué es la JVM?",
    options: [
      "Un compilador de Java",
      "Java Virtual Machine: ejecuta el bytecode Java en cualquier plataforma",
      "Una librería estándar de Java",
      "Un editor de código Java"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "La JVM (Java Virtual Machine) es la razón por la que Java es 'write once, run anywhere'. Interpreta el bytecode generado por javac."
  },
  {
    question: "¿Qué tipo de dato se usa para almacenar un carácter en Java?",
    options: [
      "letter",
      "String",
      "character",
      "char"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "char almacena un solo carácter Unicode (16 bits). Se escribe entre comillas simples: char c = 'A';"
  },
  {
    question: "¿Cuál es el modificador de acceso más restrictivo en Java?",
    options: [
      "public",
      "private",
      "default",
      "protected"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "private restringe el acceso al interior de la misma clase. Es la base del encapsulamiento."
  },
  {
    question: "¿Qué palabra clave se usa para heredar una clase en Java?",
    options: [
      "extends",
      "inherits",
      "super",
      "implements"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "extends se usa para herencia de clases. implements se usa para implementar interfaces."
  },
  {
    question: "¿Cuántas clases padre puede heredar una clase en Java?",
    options: [
      "Solo 1",
      "Depende de la JVM",
      "2",
      "Ilimitadas"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "Java solo admite herencia simple: una clase solo puede extender una clase. Pero puede implementar múltiples interfaces."
  },
  {
    question: "¿Qué es un constructor en Java?",
    options: [
      "Un método que retorna un objeto",
      "Un método especial sin tipo de retorno que inicializa un objeto",
      "Una función estática",
      "Un tipo de variable"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "El constructor tiene el mismo nombre que la clase y no declara tipo de retorno. Se llama automáticamente con new."
  },
  {
    question: "¿Qué es el tipo <code>boolean</code> en Java?",
    options: [
      "Un char especial",
      "Un byte especial",
      "Un tipo que solo acepta true o false",
      "Un entero 0 o 1"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "boolean solo puede ser true o false. A diferencia de C/C++, no acepta enteros como sustituto."
  },
  {
    question: "¿Qué hace la palabra clave <code>static</code> en un método?",
    options: [
      "Lo hace abstracto",
      "El método pertenece a la clase, no a instancias",
      "Lo hace privado",
      "Lo hace inmutable"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "Los métodos static se llaman en la clase directamente: Clase.metodo(). No requieren instancia y no pueden acceder a this."
  },
  {
    question: "¿Cómo se crea un arreglo de enteros en Java?",
    options: [
      "int arr = [5];",
      "array int arr = 5;",
      "int[] arr = new int[5];",
      "int arr[] = new int(5);"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "int[] arr = new int[5] crea un arreglo de 5 enteros inicializados en 0. También es válido: int arr[] = new int[5]."
  },
  {
    question: "¿Qué es una interfaz en Java?",
    options: [
      "Una clase con todos los métodos implementados",
      "Un tipo de constructor",
      "Una variable global",
      "Un contrato que define métodos abstractos que las clases deben implementar"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "Las interfaces definen un contrato. Desde Java 8 pueden tener métodos default e static con implementación."
  },
  {
    question: "¿Qué hace <code>String.length()</code>?",
    options: [
      "Retorna el tamaño en bytes",
      "Retorna el último carácter",
      "Retorna el número de caracteres del String",
      "Retorna true si está vacío"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "length() retorna el número de caracteres del String. A diferencia de arrays, String usa length() con paréntesis."
  },
  {
    question: "¿Qué paquete de Java se importa automáticamente sin necesidad de import?",
    options: [
      "java.util",
      "java.net",
      "java.lang",
      "java.io"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "java.lang (que incluye String, System, Math, Object, etc.) se importa automáticamente en todo programa Java."
  },
  {
    question: "¿Cuál es el valor por defecto de un int no inicializado en una clase?",
    options: [
      "null",
      "-1",
      "undefined",
      "0"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "Los campos numéricos (int, long, double, etc.) se inicializan en 0. boolean en false, referencias en null."
  },
  {
    question: "¿Cómo se convierte un String a entero en Java?",
    options: [
      "(int) str",
      "String.toInt(str)",
      "Integer.parseInt(str)",
      "int.parse(str)"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "Integer.parseInt(str) convierte un String a int primitivo. Integer.valueOf(str) retorna un Integer."
  },
  {
    question: "¿Qué hace el operador <code>instanceof</code>?",
    options: [
      "Verifica si un objeto es instancia de una clase o interfaz",
      "Cuenta instancias",
      "Destruye una instancia",
      "Crea una nueva instancia"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "obj instanceof Clase retorna true si obj es de ese tipo o una subclase. Útil antes de castings."
  },
  {
    question: "¿Qué es el método <code>main</code> en Java?",
    options: [
      "Un método obligatorio en toda clase",
      "Un método especial de la JVM para tests",
      "El punto de entrada de la aplicación",
      "El primer método definido en la clase"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "public static void main(String[] args) es el punto de entrada que la JVM busca para iniciar la aplicación."
  },
  {
    question: "¿Qué hace <code>Math.abs(-5)</code>?",
    options: [
      "Retorna 0",
      "Retorna 5",
      "Retorna -5",
      "Retorna error"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "Math.abs() retorna el valor absoluto. Math.abs(-5) = 5. Math.abs(5) = 5."
  },
  {
    question: "¿Cuál es la diferencia entre <code>==</code> y <code>.equals()</code> para Strings?",
    options: [
      "== compara contenido",
      "Son equivalentes",
      "== compara referencias; equals() compara contenido",
      "equals() es más lento"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "== compara si dos variables apuntan al mismo objeto en memoria. equals() compara el contenido del String carácter por carácter."
  },
  {
    question: "¿Qué es el garbage collector en Java?",
    options: [
      "Un proceso automático que libera memoria de objetos sin referencias",
      "Un tipo de logger",
      "Una excepción especial",
      "Un limpiador de código"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "El GC libera automáticamente la memoria de objetos inalcanzables. Java no requiere free() manual como C."
  },
  {
    question: "¿Qué tipo primitivo usa Java para decimales de doble precisión?",
    options: [
      "float",
      "decimal",
      "real",
      "double"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "double es de 64 bits (doble precisión). float es de 32 bits. Para dinero se usa BigDecimal por su precisión exacta."
  },
  {
    question: "¿Cómo se define un método abstracto?",
    options: [
      "abstract void metodo() {}",
      "abstract void metodo();",
      "void metodo() abstract;",
      "void abstract metodo();"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "Los métodos abstractos no tienen cuerpo (sin llaves). La clase que los declara debe ser también abstracta."
  },
  {
    question: "¿Qué es un enum en Java?",
    options: [
      "Un tipo de arreglo",
      "Un tipo numérico",
      "Un tipo especial que define un conjunto fijo de constantes con nombre",
      "Una interfaz especial"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "enum define constantes nombradas: enum Dia { LUNES, MARTES, ... }. Son type-safe y más potentes que constantes int."
  },
  {
    question: "¿Qué hace <code>ArrayList.add(elemento)</code>?",
    options: [
      "Reemplaza el primero",
      "Ordena e inserta",
      "Agrega al inicio",
      "Agrega al final"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "add(e) agrega el elemento al final del ArrayList. add(index, e) inserta en la posición dada."
  },
  {
    question: "¿Qué palabra clave lanza explícitamente una excepción?",
    options: [
      "error",
      "throw",
      "exception",
      "raise"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "throw new MiExcepcion() lanza una excepción. throws en la firma del método indica qué excepciones puede propagar."
  },
  {
    question: "¿Qué significa que Java sea 'fuertemente tipado'?",
    options: [
      "Los tipos son obligatorios en todos los casos",
      "Java es lento",
      "Cada variable tiene un tipo fijo que se verifica en compilación",
      "Los tipos no pueden cambiar en tiempo de ejecución"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "Java verifica los tipos en tiempo de compilación. No puedes asignar un String a un int sin conversión explícita."
  },
  {
    question: "¿Cuál es el tamaño de un <code>int</code> en Java?",
    options: [
      "Depende de la plataforma",
      "64 bits",
      "16 bits",
      "32 bits"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "int siempre ocupa 32 bits en Java, independientemente de la plataforma (a diferencia de C). Rango: -2^31 a 2^31-1."
  },
  {
    question: "¿Qué hace <code>String.substring(1, 4)</code> sobre \"Hello\"?",
    options: [
      "\"Hell\"",
      "\"Hell\"",
      "\"ell\"",
      "\"ello\""
    ],
    correct: 2,
    difficulty: "E",
    explanation: "substring(inicio, fin) es exclusivo en fin. \"Hello\".substring(1,4) = \"ell\" (índices 1, 2, 3)."
  },
  {
    question: "¿Qué clase se usa para leer entrada del usuario desde consola?",
    options: [
      "Scanner",
      "InputReader",
      "System.in",
      "BufferedReader directamente"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "Scanner sc = new Scanner(System.in); sc.nextLine() lee una línea. Es la forma más común para entrada en consola."
  },
  {
    question: "¿Cuál de estas opciones es un comentario multilínea válido en Java?",
    options: [
      "// comentario multilínea",
      "/* comentario */",
      "-- comentario",
      "# comentario"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "/* */ es el comentario multilínea en Java. // es de una línea. /** */ es el Javadoc para documentación."
  },
  {
    question: "¿Qué hace <code>Integer.MAX_VALUE</code>?",
    options: [
      "Retorna Long.MAX_VALUE",
      "Retorna 2^31 - 1 (2147483647)",
      "Retorna el mayor double",
      "Retorna infinito"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "Integer.MAX_VALUE = 2^31 - 1 = 2147483647. Útil para inicializar mínimos en algoritmos de búsqueda."
  },
  {
    question: "¿Qué es el método <code>toString()</code>?",
    options: [
      "Solo funciona con números",
      "Convierte a String cualquier tipo",
      "Un método de conversión de tipos primitivos",
      "Un método de Object que toda clase puede sobreescribir para representarse como String"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "toString() viene de Object. Por defecto retorna ClassName@hashCode. Sobreescribirlo es una buena práctica."
  },
  {
    question: "¿Cómo se itera sobre un arreglo en Java con un for-each?",
    options: [
      "foreach (int i : arreglo) {}",
      "for (int i = arreglo) {}",
      "for each (int i in arreglo) {}",
      "for (int i : arreglo) {}"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "for (Tipo var : coleccion) {} es el for-each de Java. Recorre todos los elementos sin gestionar el índice."
  },
  {
    question: "¿Qué clase de Java representa una cadena de texto inmutable?",
    options: [
      "StringBuilder",
      "String",
      "Text",
      "StringBuffer"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "String es inmutable: cada operación crea un nuevo objeto. StringBuffer/StringBuilder son mutables y más eficientes para muchas concatenaciones."
  },
  {
    question: "¿Qué es el polimorfismo en Java?",
    options: [
      "Un tipo de interfaz",
      "Un tipo de herencia",
      "La capacidad de una referencia de tipo padre de apuntar a objetos de subclases",
      "Tener muchas clases"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "Polimorfismo permite tratar objetos de subclases como si fueran de la clase base. La JVM llama al método correcto en tiempo de ejecución."
  },
  {
    question: "¿Qué hace <code>Math.random()</code>?",
    options: [
      "Lanza una excepción",
      "Retorna un double aleatorio entre 0.0 (inclusivo) y 1.0 (exclusivo)",
      "Retorna un boolean aleatorio",
      "Retorna un int aleatorio"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "Math.random() retorna [0.0, 1.0). Para un rango específico: (int)(Math.random() * max)."
  },
  {
    question: "¿Qué palabra clave previene la herencia de una clase?",
    options: [
      "final",
      "private",
      "sealed",
      "abstract"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "final class MiClase evita que otras clases hereden de ella. Ejemplo: String es final en Java."
  },
  {
    question: "¿Qué pasa al dividir un entero entre cero en Java?",
    options: [
      "El programa continúa",
      "Retorna 0",
      "Retorna NaN",
      "Lanza ArithmeticException"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "int/0 lanza ArithmeticException: / by zero. double/0.0 retorna Infinity o NaN (flotantes no lanzan excepción)."
  },
  {
    question: "¿Cuál es la diferencia entre <code>ArrayList</code> y <code>LinkedList</code>?",
    options: [
      "ArrayList no permite duplicados",
      "LinkedList tiene acceso más rápido",
      "Son idénticos",
      "ArrayList usa arreglo dinámico (acceso O(1)); LinkedList usa nodos enlazados (inserción/borrado O(1) en extremos)"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "ArrayList es mejor para acceso aleatorio. LinkedList es mejor para insertar/borrar frecuentemente al inicio/fin."
  },
  {
    question: "¿Qué es el autoboxing en Java?",
    options: [
      "Una optimización del JIT",
      "Un tipo de cast",
      "Conversión automática entre tipos primitivos y sus clases envolventes",
      "Un tipo de constructor"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "Autoboxing: int → Integer automáticamente. Unboxing: Integer → int automáticamente. Cuidado con NullPointerException al hacer unboxing de null."
  },
  {
    question: "¿Qué diferencia hay entre <code>HashMap</code> y <code>TreeMap</code>?",
    options: [
      "Son iguales",
      "HashMap mantiene orden de inserción",
      "HashMap usa hashing (O(1)); TreeMap mantiene claves ordenadas (O(log n))",
      "TreeMap es más rápido"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "HashMap es más rápido para operaciones básicas. TreeMap mantiene las claves en orden natural o por Comparator."
  },
  {
    question: "¿Qué es un método <code>default</code> en una interfaz de Java 8+?",
    options: [
      "Un método sin modificador de acceso",
      "Un método que retorna null",
      "Un método abstracto",
      "Un método con implementación en la interfaz que las clases pueden sobreescribir opcionalmente"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "Los métodos default permiten agregar implementaciones a interfaces existentes sin romper las clases que las implementan."
  },
  {
    question: "¿Qué hace la anotación <code>@Override</code>?",
    options: [
      "Indica al compilador que el método sobreescribe uno del padre, detectando errores",
      "Impide la herencia",
      "Hace el método final",
      "Obliga a sobreescribir el método"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "@Override es una anotación de compilación. Si no hay método padre que coincida, el compilador lanza error. Es buena práctica siempre usarla."
  },
  {
    question: "¿Qué es el patrón Singleton?",
    options: [
      "Un patrón de herencia",
      "Un tipo de interfaz",
      "Una clase con muchas instancias",
      "Un patrón que garantiza que una clase tenga solo una instancia global"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "Singleton: constructor privado + instancia estática + método getInstance(). Cuidado con thread-safety y tests unitarios."
  },
  {
    question: "¿Qué es la diferencia entre <code>throw</code> y <code>throws</code>?",
    options: [
      "throws lanza excepciones",
      "Son sinónimos",
      "throw lanza una excepción; throws declara que el método puede propagar excepciones checked",
      "throw declara excepciones"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "throw new Ex() actúa. throws en la firma del método informa al compilador de posibles excepciones checked."
  },
  {
    question: "¿Qué son las excepciones checked vs unchecked?",
    options: [
      "Checked: deben manejarse en compilación (extends Exception); Unchecked: no (extends RuntimeException)",
      "Checked son solo advertencias",
      "Unchecked son más graves",
      "Son iguales"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "Checked: IOException, SQLException deben declararse con throws o capturarse. Unchecked: NullPointerException, ArrayIndexOutOfBoundsException no requieren manejo obligatorio."
  },
  {
    question: "¿Qué hace <code>Collections.sort(lista)</code>?",
    options: [
      "Lanza excepción si la lista tiene null",
      "Retorna una nueva lista ordenada",
      "Siempre ordena de mayor a menor",
      "Ordena la lista in-place usando el orden natural de los elementos"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "Collections.sort() ordena in-place. Los elementos deben implementar Comparable o se pasa un Comparator. Java 8+: lista.sort(null)."
  },
  {
    question: "¿Qué es el bloque <code>finally</code> en Java?",
    options: [
      "Se ejecuta siempre, haya o no excepción, tras try/catch",
      "Reemplaza a catch",
      "Es obligatorio en todo try",
      "Se ejecuta solo si hay excepción"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "finally se ejecuta siempre: útil para cerrar recursos. Con try-with-resources (Java 7+) es menos necesario."
  },
  {
    question: "¿Cuál es la diferencia entre <code>String</code>, <code>StringBuilder</code> y <code>StringBuffer</code>?",
    options: [
      "StringBuilder es inmutable",
      "String es inmutable; StringBuilder es mutable no-sincronizado; StringBuffer es mutable sincronizado (thread-safe)",
      "StringBuffer es el más rápido",
      "Son iguales"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "Para concatenaciones en bucle usar StringBuilder. StringBuffer en contextos multi-hilo. String para valores que no cambian."
  },
  {
    question: "¿Qué es la interfaz <code>Comparable</code>?",
    options: [
      "Define equals() y hashCode()",
      "Permite que un objeto se compare consigo mismo implementando compareTo()",
      "Es una clase abstracta",
      "Permite comparar dos objetos externos"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "Comparable<T> requiere implementar compareTo(T o). Retorna negativo, 0, o positivo. Usado por Collections.sort() y TreeMap."
  },
  {
    question: "¿Qué hace <code>HashMap.getOrDefault(key, def)</code>?",
    options: [
      "Retorna null si no existe",
      "Inserta def si no existe",
      "Lanza NoSuchElementException",
      "Retorna el valor si existe, o def si la clave no está en el mapa"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "getOrDefault evita NullPointerException. Similar a get() pero más seguro. Java 8+."
  },
  {
    question: "¿Qué es la encapsulación en POO?",
    options: [
      "Heredar de múltiples clases",
      "Usar interfaces siempre",
      "Ocultar el estado interno de un objeto exponiendo solo métodos públicos para acceder y modificarlo",
      "Esconder el código del programador"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "Encapsulación: campos private, acceso via getters/setters. Protege el estado interno y permite validar cambios."
  },
  {
    question: "¿Qué hace el operador <code>?:</code> en Java?",
    options: [
      "Es el operador ternario: condición ? valorSiTrue : valorSiFalse",
      "Es el operador Elvis",
      "Divide de forma segura",
      "Verifica null"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "condicion ? a : b evalúa la condición y retorna a o b. Es una expresión (no instrucción) equivalente a if-else."
  },
  {
    question: "¿Qué es un varargs en Java?",
    options: [
      "Permite que un método acepte número variable de argumentos del mismo tipo con ...",
      "Una lista de argumentos de tipo variable",
      "Un generics especial",
      "Un tipo de arreglo dinámico"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "void metodo(String... args) acepta cero o más Strings. Internamente es un arreglo. Debe ser el último parámetro."
  },
  {
    question: "¿Qué es la sobreescritura (override) vs sobrecarga (overload)?",
    options: [
      "Override: redefinir método de superclase con misma firma; Overload: mismo nombre, diferente firma en misma clase",
      "Son lo mismo",
      "Overload es herencia",
      "Override es polimorfismo estático"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "Override: polimorfismo en tiempo de ejecución. Overload: resolución en tiempo de compilación. Dos conceptos distintos fundamentales."
  },
  {
    question: "¿Qué es un Iterator en Java?",
    options: [
      "Un tipo de bucle for",
      "Una lista especial",
      "Un objeto que permite recorrer una colección elemento por elemento con hasNext()/next()",
      "Un tipo de Stream"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "Iterator<T> provee hasNext() y next(). Permite eliminar elementos durante la iteración con remove(), seguro vs ConcurrentModificationException."
  },
  {
    question: "¿Qué hace <code>String.format(\"%d - %s\", 1, \"hola\")</code>?",
    options: [
      "Imprime en consola",
      "Formatea solo números",
      "Retorna \"1 - hola\" como String formateado",
      "Lanza IllegalArgumentException"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "String.format() funciona como printf en C. %d para enteros, %s para strings, %f para flotantes, %.2f para 2 decimales."
  },
  {
    question: "¿Cuándo se usa <code>interface</code> vs <code>abstract class</code>?",
    options: [
      "Son intercambiables",
      "Interface: contrato puro, múltiple implementación; Abstract class: compartir estado/comportamiento, herencia simple",
      "Interface no puede tener métodos desde Java 8",
      "Abstract class es más moderna"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "Usa interface para definir capacidades (Serializable, Runnable). Usa abstract class cuando clases comparten código base. Regla: favorece interfaces."
  },
  {
    question: "¿Qué es el método <code>hashCode()</code> y su relación con <code>equals()</code>?",
    options: [
      "Son obligatorios en toda clase",
      "Son independientes",
      "hashCode() es obsoleto",
      "Si equals() retorna true, hashCode() debe ser igual; la misma JVM los usa para HashMap/HashSet"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "Contrato: a.equals(b) → a.hashCode() == b.hashCode(). Siempre sobreescribe ambos. Los IDE/Lombok pueden generarlos."
  },
  {
    question: "¿Qué es la inmutabilidad y por qué es útil?",
    options: [
      "Que la clase es final",
      "Que un objeto no se puede instanciar",
      "Que el estado de un objeto no cambia después de su creación; thread-safe por naturaleza",
      "Que usa final en todos los campos"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "Objetos inmutables (String, Integer) son thread-safe sin sincronización. Para crear una clase inmutable: campos final, sin setters, clase final."
  },
  {
    question: "¿Qué hace <code>Arrays.asList(1, 2, 3)</code>?",
    options: [
      "Retorna un Set",
      "Retorna una Lista de tamaño fijo (no se puede agregar/quitar, pero sí modificar elementos)",
      "Lanza excepción",
      "Retorna un ArrayList modificable"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "Arrays.asList() retorna una lista respaldada por el arreglo. No soporta add/remove (UnsupportedOperationException). Usa new ArrayList<>(Arrays.asList(...)) para lista mutable."
  },
  {
    question: "¿Qué es el patrón Factory Method?",
    options: [
      "Un tipo de Builder",
      "Un constructor con parámetros",
      "Un método/clase que crea objetos sin exponer la lógica de creación al cliente",
      "Un Singleton con parámetros"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "Factory oculta el 'new'. Permite cambiar la implementación sin cambiar el código cliente. Ej: Connection.getConnection()."
  },
  {
    question: "¿Qué hace <code>try-with-resources</code> en Java?",
    options: [
      "Evita excepciones",
      "Cierra automáticamente recursos que implementen AutoCloseable al salir del bloque",
      "Es un tipo de finally",
      "Solo funciona con archivos"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "try (FileReader fr = new FileReader(f)) {} cierra fr automáticamente aunque haya excepción. Equivale a finally con close()."
  },
  {
    question: "¿Cuál es la diferencia entre <code>List.of()</code> y <code>new ArrayList<>()</code>?",
    options: [
      "Son iguales",
      "List.of() acepta null",
      "List.of() retorna una lista inmutable; new ArrayList<>() es mutable",
      "ArrayList es más lento"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "List.of() (Java 9+) es inmutable: no acepta null, no permite add/remove/set. Útil para listas de solo lectura."
  },
  {
    question: "¿Qué es la cohesión y el acoplamiento en diseño de software?",
    options: [
      "Acoplamiento es polimorfismo",
      "Alta cohesión: clase con responsabilidad única; bajo acoplamiento: poca dependencia entre clases",
      "Cohesión es herencia",
      "Son sinónimos"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "Alta cohesión + bajo acoplamiento = buen diseño. Cada clase hace una sola cosa bien y depende poco de otras."
  },
  {
    question: "¿Qué tipo de excepción lanza <code>Integer.parseInt(\"abc\")</code>?",
    options: [
      "ParseException",
      "NumberFormatException",
      "IllegalArgumentException",
      "ClassCastException"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "NumberFormatException (subclase de IllegalArgumentException) se lanza cuando el String no representa un número válido."
  },
  {
    question: "¿Qué hace el método <code>Optional.orElse()</code>?",
    options: [
      "Convierte Optional a Stream",
      "Retorna el valor si presente, o el valor por defecto si Optional está vacío",
      "Filtra el valor",
      "Lanza excepción si está vacío"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "Optional.orElse(default) evita NullPointerException. orElseGet(supplier) es más eficiente cuando el default es costoso de computar."
  },
  {
    question: "¿Qué es la anotación <code>@FunctionalInterface</code>?",
    options: [
      "Hace la interfaz más rápida",
      "Es una interfaz de colecciones",
      "Hace la interfaz serializable",
      "Indica que la interfaz tiene exactamente un método abstracto, permitiendo lambdas"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "@FunctionalInterface garantiza que la interfaz tenga exactamente un método abstracto. Permite usar lambdas donde se espera esa interfaz."
  },
  {
    question: "¿Cuál es la diferencia entre <code>Set</code> y <code>List</code>?",
    options: [
      "List es más rápido",
      "Set permite null siempre",
      "Son iguales",
      "Set no permite duplicados ni garantiza orden (HashSet); List permite duplicados y mantiene orden de inserción"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "HashSet es O(1) para contains. ArrayList tiene acceso O(1) por índice. Usa Set cuando la unicidad importa."
  },
  {
    question: "¿Qué hace <code>Collections.unmodifiableList(lista)</code>?",
    options: [
      "Retorna una vista inmutable de la lista; modificar la original afecta la vista",
      "Serializa la lista",
      "Crea una copia inmutable",
      "Lanza excepción"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "unmodifiableList() es una vista: operaciones de escritura lanzan UnsupportedOperationException. La lista original sigue siendo mutable."
  },
  {
    question: "¿Qué significa 'paso por valor' en Java?",
    options: [
      "Java pasa por referencia",
      "Solo los primitivos son por valor",
      "Java pasa por puntero",
      "Java siempre pasa copias: de primitivos pasa el valor; de objetos pasa la copia de la referencia"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "Java es siempre pass-by-value. Para objetos, se pasa la copia de la referencia (el 'puntero'), no el objeto en sí. Modificar el objeto dentro de un método afecta al original; reasignar la referencia no."
  },
  {
    question: "¿Qué hace la anotación <code>@Deprecated</code>?",
    options: [
      "Hace el método privado",
      "Borra el método",
      "Marca el método/clase como obsoleto, generando advertencia al compilar",
      "Optimiza el método"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "@Deprecated advierte a los usuarios que el elemento existe pero podría eliminarse en versiones futuras. Usar @since y @see en el Javadoc para más contexto."
  },
  {
    question: "¿Qué es un class cast y cuándo ocurre ClassCastException?",
    options: [
      "Al compilar",
      "Cuando se intenta convertir un objeto a un tipo incompatible en tiempo de ejecución",
      "Siempre al hacer cast",
      "Con tipos primitivos"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "Object obj = \"hola\"; Integer i = (Integer) obj; → ClassCastException. Usar instanceof antes de castear. Java 16+ tiene pattern matching: if (obj instanceof Integer i)."
  },
  {
    question: "¿Qué diferencia hay entre <code>==</code> con Integer 127 vs 128?",
    options: [
      "Siempre false",
      "Java cachea Integer de -128 a 127: == puede ser true para 127 pero false para 128 (distintas referencias)",
      "Siempre true",
      "Depende de la JVM"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "Integer caching: Integer.valueOf(127) == Integer.valueOf(127) es true (mismo objeto cacheado). Con 128 se crean objetos distintos. Siempre usa equals() para comparar Integer."
  },
  {
    question: "¿Qué es el patrón Builder en Java?",
    options: [
      "Una subclase especial",
      "Un tipo de Singleton",
      "Es igual a Factory",
      "Permite construir objetos complejos paso a paso, evitando constructores con muchos parámetros"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "Builder: Persona p = new Persona.Builder().nombre(\"Ana\").edad(30).build(). Mejora legibilidad y valida en build(). Lombok: @Builder genera automáticamente."
  },
  {
    question: "¿Qué hace <code>String.join(\", \", \"a\", \"b\", \"c\")</code>?",
    options: [
      "Retorna \"a, b, c\"",
      "Lanza excepción",
      "Retorna [\"a\",\"b\",\"c\"]",
      "Retorna \"abc\""
    ],
    correct: 0,
    difficulty: "D",
    explanation: "String.join(delimitador, elementos) une los elementos con el delimitador. También acepta Iterable. Java 8+."
  },
  {
    question: "¿Qué es la herencia de implementación vs herencia de interfaz?",
    options: [
      "implements es más rápido",
      "Son lo mismo",
      "Implementación: extends hereda código; interfaz: implements hereda contrato",
      "extends es más moderno"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "extends hereda estado y comportamiento (puede ser problemático). implements hereda solo el contrato, más flexible. Principio: 'favorecer composición sobre herencia'."
  },
  {
    question: "¿Qué hace <code>Map.entry()</code> o <code>Map.Entry</code>?",
    options: [
      "Map.Entry es una interfaz anidada que representa un par clave-valor de un mapa",
      "Es sinónimo de HashMap",
      "Crea un mapa inmutable",
      "Es un tipo de mapa especial"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "Map.Entry<K,V> tiene getKey() y getValue(). Se obtiene iterando map.entrySet(). Útil para iterar mapa con clave y valor simultáneamente."
  },
  {
    question: "¿Qué son los Streams de Java 8 y cuál es su ventaja?",
    options: [
      "Una API para procesar colecciones de forma funcional, lazy y potencialmente paralela",
      "Flujos de entrada/salida",
      "Una forma de escribir bucles",
      "Un tipo de Iterator"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "Stream<T> permite operaciones funcionales: filter, map, reduce, collect. Son lazy (solo procesan lo necesario) y pueden paralelizarse con parallelStream()."
  },
  {
    question: "¿Cuál es la diferencia entre <code>map()</code> y <code>flatMap()</code> en Streams?",
    options: [
      "Son iguales",
      "map() transforma 1→1; flatMap() aplana Streams anidados (Stream<Stream<T>> → Stream<T>)",
      "map() aplana resultados",
      "flatMap() es más lento"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "flatMap(f) aplica f y aplana el resultado. Ej: lista de listas de palabras → Stream de todas las palabras. map() dejaría Stream<List<String>>."
  },
  {
    question: "¿Qué hace <code>Collectors.groupingBy()</code>?",
    options: [
      "Cuenta elementos",
      "Ordena una colección",
      "Filtra por grupos",
      "Agrupa elementos de un Stream en un Map<K, List<V>> por una función clasificadora"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "stream.collect(Collectors.groupingBy(Persona::getDepartamento)) retorna Map<String, List<Persona>>. Equivalente a GROUP BY en SQL."
  },
  {
    question: "¿Qué son los Generics en Java y para qué sirven?",
    options: [
      "Son tipos especiales de arrays",
      "Son un tipo de cast",
      "Son sinónimo de Object",
      "Permiten crear clases/métodos que funcionan con cualquier tipo, garantizando type-safety en compilación"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "List<String> garantiza que solo se inserten Strings, evitando ClassCastException. Sin generics tendríamos List de Object con cast manual."
  },
  {
    question: "¿Qué es el wildcard <code>? extends T</code> vs <code>? super T</code>?",
    options: [
      "Son sinónimos",
      "? extends T: lee T o subtipos (covariance); ? super T: escribe T o supertipos (contravariance)",
      "Son deprecated",
      "Solo se usan en arrays"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "PECS: Producer Extends, Consumer Super. List<? extends Number> para leer; List<? super Integer> para escribir. Regla de Liskov en generics."
  },
  {
    question: "¿Qué es la erasure de tipos en Java?",
    options: [
      "Los tipos genéricos se eliminan en tiempo de ejecución; en bytecode List<String> y List<Integer> son lo mismo",
      "Un bug de Java",
      "Borrar código",
      "Un tipo de optimización"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "Type erasure: en runtime, List<String> es solo List. Esto permite compatibilidad con código pre-Java 5 pero limita reflexión con generics."
  },
  {
    question: "¿Qué es la interfaz <code>Runnable</code> vs <code>Callable</code>?",
    options: [
      "Runnable.run() no retorna ni lanza checked; Callable.call() retorna un valor y puede lanzar excepciones",
      "Son iguales",
      "Runnable es más moderno",
      "Callable es obsoleto"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "Runnable: void run(). Callable<V>: V call() throws Exception. Callable es útil con Future para obtener resultados de tareas asíncronas."
  },
  {
    question: "¿Qué es <code>synchronized</code> en Java?",
    options: [
      "Hace el código más rápido",
      "Es un tipo de lock manual",
      "Garantiza que solo un hilo ejecuta el bloque/método a la vez usando el monitor del objeto",
      "Sincroniza archivos"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "synchronized(lock) { ... } adquiere el monitor. synchronized en método usa this. Garantiza visibilidad y exclusión mutua pero puede causar deadlock."
  },
  {
    question: "¿Qué es <code>volatile</code> en Java?",
    options: [
      "Es sinónimo de synchronized",
      "Garantiza que las lecturas/escrituras de la variable sean visibles a todos los hilos (sin cache de CPU)",
      "Una variable que cambia sola",
      "Hace la variable final"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "volatile garantiza visibilidad pero NO atomicidad. Para operaciones compuestas (check-then-act) usar AtomicInteger o synchronized."
  },
  {
    question: "¿Qué es un deadlock y cómo evitarlo?",
    options: [
      "Cuando dos o más hilos se bloquean mutuamente esperando recursos que el otro tiene",
      "Un bug del SO",
      "Un tipo de excepción",
      "Un error de compilación"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "Deadlock: A espera lock de B; B espera lock de A. Evitar: ordenar los locks consistentemente, usar tryLock() con timeout, minimizar secciones sincronizadas."
  },
  {
    question: "¿Qué hace <code>ExecutorService</code>?",
    options: [
      "Ejecuta código nativo",
      "Es un Singleton",
      "Un pool de hilos reutilizables para ejecutar tareas de forma asíncrona",
      "Un tipo de Timer"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "ExecutorService permite gestionar un pool de hilos: submit(task), shutdown(), awaitTermination(). Más eficiente que crear hilos nuevos para cada tarea."
  },
  {
    question: "¿Qué es <code>CompletableFuture</code> en Java 8+?",
    options: [
      "Un Future que completa solo",
      "Un tipo de Optional",
      "Una API para programación asíncrona con encadenamiento funcional: thenApply, thenCompose, exceptionally",
      "Es un tipo de thread"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "CompletableFuture.supplyAsync(() -> result).thenApply(x -> x*2).thenAccept(System.out::println) es completamente asíncrono y componible."
  },
  {
    question: "¿Qué es la reflexión (Reflection) en Java?",
    options: [
      "Una técnica de caché",
      "La capacidad de inspeccionar y modificar clases, métodos y campos en tiempo de ejecución via java.lang.reflect",
      "Un tipo de anotación",
      "Mirrors en código"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "Reflection permite: Class.forName(), getDeclaredMethods(), setAccessible(true). Útil en frameworks (Spring, Hibernate). Tiene costo de rendimiento."
  },
  {
    question: "¿Qué son las anotaciones en Java y cómo funcionan?",
    options: [
      "Son macros de Java",
      "Son interfaces especiales",
      "Metadatos que se adjuntan a código; pueden procesarse en compilación (@Override) o en runtime (Spring @Autowired)",
      "Comentarios especiales"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "Anotaciones: metadatos. Con @Retention(RUNTIME) son accesibles via Reflection. Spring usa reflexión para procesar @Autowired, @Component, etc."
  },
  {
    question: "¿Qué diferencia hay entre <code>ConcurrentHashMap</code> y <code>synchronized HashMap</code>?",
    options: [
      "ConcurrentHashMap no es thread-safe",
      "Son iguales",
      "ConcurrentHashMap segmenta el mapa (mejor concurrencia); synchronizedMap bloquea todo el mapa para cada operación",
      "synchronizedMap es más moderno"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "ConcurrentHashMap usa lock-striping (Java 7) o CAS (Java 8): mayor throughput bajo contención. synchronizedMap es un cuello de botella con muchos hilos."
  },
  {
    question: "¿Qué es el patrón Observer?",
    options: [
      "Un patrón donde los observers se registran en un subject para recibir notificaciones de cambios",
      "Es lo mismo que Factory",
      "Un tipo de Iterator",
      "Un tipo de Singleton"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "Observer es la base del patrón event-listener en Java. Subject mantiene lista de Observer y llama update() en todos al cambiar. Ej: EventBus, PropertyChangeListener."
  },
  {
    question: "¿Qué es el principio SOLID?",
    options: [
      "Un algoritmo de Java",
      "Una especificación de Java",
      "5 principios de diseño OOP: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion",
      "Un framework de testing"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "SOLID ayuda a crear código mantenible. S: una responsabilidad. O: abierto a extensión, cerrado a modificación. L: subclases sustituibles. I: interfaces pequeñas. D: depender de abstracciones."
  },
  {
    question: "¿Qué hace <code>Stream.reduce()</code>?",
    options: [
      "Convierte a lista",
      "Combina elementos del Stream en un único resultado usando una función acumuladora",
      "Reduce el tamaño del Stream",
      "Filtra elementos"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "stream.reduce(0, Integer::sum) suma todos los elementos. reduce(identity, accumulator) o reduce(accumulator) retorna Optional."
  },
  {
    question: "¿Qué es el patrón Strategy?",
    options: [
      "Es igual a Template Method",
      "Un patrón que define una familia de algoritmos intercambiables encapsulados en clases separadas",
      "Un tipo de Builder",
      "Una estrategia de negocio"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "Strategy: Sorter sorter = new BubbleSort(); sorter.sort(lista). Cambia el algoritmo sin cambiar el cliente. Ej: Comparator en Collections.sort()."
  },
  {
    question: "¿Cómo funciona el garbage collector G1 en Java?",
    options: [
      "Solo funciona en servidores",
      "Es un GC de generación única",
      "Es el GC por defecto siempre",
      "G1 divide el heap en regiones, recolecta primero las más llenas de basura, equilibrando throughput y pausas"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "G1 (Garbage-First, default desde Java 9): heap en regiones jóvenes/viejas. Predice pausas GC. Para baja latencia usar ZGC (Java 15+) o Shenandoah."
  },
  {
    question: "¿Qué es la anotación <code>@SuppressWarnings</code>?",
    options: [
      "Mejora el rendimiento",
      "Borra advertencias del código",
      "Indica al compilador que suprima ciertas advertencias para el elemento anotado",
      "Es una buena práctica"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "@SuppressWarnings(\"unchecked\") suprime advertencias de cast. Úsalo con cuidado: es mejor corregir la causa raíz que suprimir la advertencia."
  },
  {
    question: "¿Qué son los Records en Java 16+?",
    options: [
      "Clases inmutables de datos con constructor, getters, equals, hashCode y toString generados automáticamente",
      "Una forma de grabar audio",
      "Una alternativa a interfaces",
      "Un tipo de enum"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "record Point(int x, int y) {} genera automáticamente: constructor canónico, getters x() y(), equals(), hashCode(), toString(). Ideal para DTOs."
  },
  {
    question: "¿Qué es el <code>var</code> de Java 10?",
    options: [
      "Permite cambiar el tipo",
      "Inferencia de tipo local: el compilador infiere el tipo de la variable desde el inicializador",
      "Es como JavaScript var",
      "Una variable de tipo var"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "var list = new ArrayList<String>() es equivalente a ArrayList<String> list. Solo en contextos locales. El tipo se fija en compilación (no es dinámico)."
  },
  {
    question: "¿Qué es el patrón Decorator?",
    options: [
      "Un tipo de herencia",
      "Envuelve un objeto para añadir comportamiento adicional sin modificar la clase original",
      "Agregar comentarios",
      "Es igual a Proxy"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "Decorator: BufferedReader(new FileReader(f)) añade buffering sin modificar FileReader. Sigue el Open/Closed Principle. Base de java.io."
  },
  {
    question: "¿Qué hace <code>Optional.map()</code>?",
    options: [
      "Convierte a Stream",
      "Mapea el Optional a Map",
      "Filtra el Optional",
      "Aplica una función al valor si está presente, retornando Optional con el resultado o empty si ausente"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "Optional.of(\"hola\").map(String::length) retorna Optional<Integer> con 4. Si el Optional era empty, retorna empty sin llamar la función."
  },
  {
    question: "¿Qué es la interfaz <code>Predicate</code> en Java 8?",
    options: [
      "Un tipo de Comparator",
      "Un tipo de condición SQL",
      "Un validador de tipos",
      "Una interfaz funcional T → boolean; usada en Stream.filter()"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "Predicate<T> tiene test(T t) → boolean. Predicate.and(), or(), negate() para composición. Ejemplo: filter(s -> s.startsWith(\"A\"))."
  },
  {
    question: "¿Qué es el método de referencia (<code>::</code>) en Java 8?",
    options: [
      "Un operador de punteros",
      "Un operador de división",
      "Un tipo de cast",
      "Una forma concisa de crear lambdas que llaman a métodos existentes: Clase::metodo"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "System.out::println es equivalente a x -> System.out.println(x). Tipos: estático (Clase::metodo), instancia (obj::metodo), constructor (Clase::new)."
  },
  {
    question: "¿Qué es el patrón Command?",
    options: [
      "Es igual a Strategy",
      "Encapsula una solicitud como objeto, permitiendo parametrizar clientes, hacer cola y deshacer operaciones",
      "Un tipo de Factory",
      "Una instrucción del sistema"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "Command: Button.setOnClick(new SaveCommand()). Desacopla quien invoca de quien ejecuta. Permite undo/redo. Muy usado en interfaces de usuario."
  },
  {
    question: "¿Qué es una clase interna (<code>inner class</code>) en Java?",
    options: [
      "Una clase abstracta",
      "Una clase definida dentro de otra; accede a miembros de la clase externa",
      "Una clase heredada",
      "Una clase final"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "Tipos: inner class (accede a todo), static nested (no accede a instancia), anónima (implementación in-place), local (dentro de método). Mucho uso en GUIs y Callbacks."
  },
  {
    question: "¿Qué diferencia hay entre <code>Iterable</code> e <code>Iterator</code>?",
    options: [
      "Iterable puede proveer un Iterator (for-each); Iterator mantiene el estado de la iteración actual",
      "Iterator es la clase base",
      "Iterable solo funciona con listas",
      "Son sinónimos"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "Iterable<T> tiene iterator() → Iterator<T>. El for-each llama iterator(). Iterator tiene hasNext(), next(), remove(). Separa el objeto coleccionable del cursor de iteración."
  },
  {
    question: "¿Qué hace <code>Collectors.toMap()</code>?",
    options: [
      "Agrupa por clave",
      "Crea un mapa sincronizado",
      "Colecta elementos de un Stream en un Map usando funciones para clave y valor",
      "Convierte a TreeMap siempre"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "stream.collect(Collectors.toMap(Persona::getId, Persona::getNombre)). Si hay claves duplicadas lanza IllegalStateException; usar mergeFunction como tercer argumento."
  },
  {
    question: "¿Qué son las sealed classes de Java 17?",
    options: [
      "Son igual a final",
      "Una nueva forma de Singleton",
      "Clases encriptadas",
      "Clases que restringen qué clases pueden extenderlas o implementarlas con permits"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "sealed class Shape permits Circle, Rectangle {} limita las subclases permitidas. Permite al compilador verificar exhaustividad en pattern matching."
  },
  {
    question: "¿Qué es la inyección de dependencias (DI)?",
    options: [
      "Proveer las dependencias de una clase desde el exterior (constructor/setter) en lugar de crearlas internamente",
      "Un tipo de Factory",
      "Inyectar código",
      "Es igual a herencia"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "DI desacopla las clases: en lugar de new Servicio() dentro de la clase, recibe el servicio en el constructor. Facilita testing con mocks. Spring IoC lo implementa."
  },
  {
    question: "¿Qué es el principio de inversión de dependencias (DIP)?",
    options: [
      "Hacer todo estático",
      "Usar Singleton",
      "Los módulos de alto nivel no deben depender de módulos de bajo nivel; ambos deben depender de abstracciones (interfaces)",
      "Invertir herencia"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "Depender de interfaces, no de implementaciones concretas. Ej: usar List<T>, no ArrayList<T>. Permite cambiar implementaciones sin afectar el código cliente."
  },
  {
    question: "¿Qué es la anotación <code>@Retention</code>?",
    options: [
      "Retiene objetos en memoria",
      "Indica hasta dónde persiste una anotación: SOURCE, CLASS o RUNTIME",
      "Es un tipo de @Override",
      "Hace la anotación obligatoria"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "@Retention(RetentionPolicy.RUNTIME) permite leer la anotación via Reflection en runtime. CLASS: en bytecode pero no en runtime. SOURCE: solo en compilación."
  },
  {
    question: "¿Qué hace <code>Stream.distinct()</code>?",
    options: [
      "Filtra nulls",
      "Ordena el Stream",
      "Elimina duplicados del Stream usando equals()",
      "Convierte a Set"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "distinct() usa equals() y hashCode(). El orden de los elementos no duplicados se mantiene para streams secuenciales. Puede ser costoso para streams paralelos."
  },
  {
    question: "¿Qué es el patrón Proxy?",
    options: [
      "Es igual a Decorator",
      "Un servidor proxy",
      "Un tipo de Adapter",
      "Un objeto que actúa como representante de otro, controlando el acceso o añadiendo comportamiento"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "Proxy: controla acceso (lazy loading, cache, seguridad). Java Dynamic Proxy y CGLIB crean proxies en runtime. Spring AOP usa proxies para @Transactional, @Cacheable."
  },
  {
    question: "¿Qué hace <code>String.chars()</code>?",
    options: [
      "Retorna un IntStream con los valores Unicode de cada carácter",
      "Retorna List<Character>",
      "Retorna un arreglo de chars",
      "Cuenta los caracteres"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "\"abc\".chars() retorna IntStream de valores ASCII/Unicode. Para Stream<Character>: \"abc\".chars().mapToObj(c -> (char) c)."
  },
  {
    question: "¿Qué es la covarianza de tipos de retorno?",
    options: [
      "Requiere cast explícito",
      "Un método sobreescrito puede retornar un tipo más específico que el declarado en la clase padre",
      "Es solo para generics",
      "Un error de compilación"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "Si padre declara Animal getAnimal(), hijo puede sobreescribir con Dog getDog() (Dog extends Animal). Permite APIs más expresivas sin cast en el cliente."
  },
  {
    question: "¿Qué hace el bloque de inicialización estático en Java?",
    options: [
      "Inicializa campos de instancia",
      "Solo se ejecuta en el primer new",
      "Es un constructor estático",
      "Un bloque static { } que se ejecuta una sola vez cuando la clase se carga, para inicializar campos estáticos"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "static { ... } se ejecuta al cargar la clase. Útil para inicializar colecciones estáticas o realizar configuración única."
  },
  {
    question: "¿Cómo funciona el Java Memory Model (JMM)?",
    options: [
      "Es el modelo de GC",
      "Define el tamaño del heap",
      "Define los tamaños de tipos primitivos",
      "Define reglas de visibilidad de memoria entre hilos: happens-before garantiza que las escrituras de un hilo sean visibles a otros"
    ],
    correct: 3,
    difficulty: "B",
    explanation: "JMM: synchronized y volatile establecen relaciones happens-before. Sin ellas, el compilador/CPU puede reordenar instrucciones causando bugs sutiles en código multihilo."
  },
  {
    question: "¿Qué es el patrón Double-Checked Locking y por qué requiere volatile?",
    options: [
      "volatile no es necesario",
      "Es obsoleto en Java",
      "Un Singleton thread-safe que verifica la nulidad dos veces; volatile es necesario para evitar que la JVM vea un objeto parcialmente construido",
      "Es un anti-patrón siempre"
    ],
    correct: 2,
    difficulty: "B",
    explanation: "Sin volatile, el JIT puede reordenar: otra hebra ve instance != null pero el objeto no está completamente construido. volatile previene reordenamiento de instrucciones."
  },
  {
    question: "¿Qué es el fork/join framework de Java?",
    options: [
      "Solo funciona en servidores",
      "Un framework para paralelizar tareas divisibles recursivamente, usando work-stealing para maximizar uso de CPU",
      "Es un tipo de ExecutorService simple",
      "Divide archivos"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "ForkJoinPool divide tareas (fork) y espera resultados (join). Work-stealing: hilos inactivos roban tareas de otros. Base de parallelStream() en Java 8."
  },
  {
    question: "¿Qué son las variables <code>ThreadLocal</code>?",
    options: [
      "Solo se usan en servidores",
      "Variables que tienen una copia independiente por hilo, sin necesidad de sincronización",
      "Variables compartidas entre hilos",
      "Son obsoletas"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "ThreadLocal<DateFormat> df = new ThreadLocal<>() permite que cada hilo tenga su propio DateFormat. Evita sincronización pero cuidado con fugas de memoria en pools de hilos."
  },
  {
    question: "¿Qué es la programación reactiva y cómo se relaciona con Java?",
    options: [
      "Una librería de Java",
      "Un paradigma de programación asíncrona y no-bloqueante basado en flujos de datos; Java lo soporta con RxJava, Project Reactor y Reactive Streams API",
      "Es igual a CompletableFuture",
      "Solo en frameworks web"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "Reactive Streams (java.util.concurrent.Flow desde Java 9): Publisher, Subscriber, Subscription, Processor. Spring WebFlux y Project Reactor lo implementan para alta concurrencia."
  },
  {
    question: "¿Qué son los <code>Locks</code> explícitos (java.util.concurrent.locks)?",
    options: [
      "Alternativas más flexibles a synchronized: ReentrantLock, ReadWriteLock, StampedLock, con tryLock(), lockInterruptibly() y timeouts",
      "Reemplazo del GC",
      "No son thread-safe",
      "Son más lentos que synchronized"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "ReentrantLock: tryLock(timeout), lockInterruptibly(). ReadWriteLock: múltiples lectores, un escritor. StampedLock: optimistic reading. Siempre en try/finally con unlock()."
  },
  {
    question: "¿Cómo funciona el class loader de Java?",
    options: [
      "Es parte del GC",
      "Carga clases en la JVM en 3 fases: carga, enlace (verificación, preparación, resolución) y en una jerarquía: Bootstrap, Extension, Application",
      "Carga archivos de texto",
      "Solo carga clases del classpath"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "Delegation model: busca en padre antes de cargar. Bootstrap (core Java), Platform (módulos), Application (classpath). OSGi y módulos JPMS permiten class loaders personalizados."
  },
  {
    question: "¿Qué es el Just-In-Time (JIT) compiler?",
    options: [
      "La JVM compila bytecode a código nativo en runtime para los hotspots (código frecuentemente ejecutado), mejorando el rendimiento",
      "Es el javac",
      "Un compilador AOT",
      "Un compilador de Java a C"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "JIT compila métodos calientes (C1/C2 en HotSpot). GraalVM añade un JIT más agresivo. Java 21+ con Project Leyden mejora el startup con AOT compilation."
  },
  {
    question: "¿Qué es el Java Platform Module System (JPMS / Java 9)?",
    options: [
      "Un sistema de paquetes npm",
      "Permite declarar módulos con dependencias explícitas (module-info.java) para encapsulamiento fuerte y classpath reemplazado por module path",
      "Es solo para librerías",
      "Reemplaza Maven"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "module com.myapp { requires java.sql; exports com.myapp.api; } permite encapsulamiento a nivel de paquete sin reflection sin permiso explícito."
  },
  {
    question: "¿Qué son las Virtual Threads de Java 21 (Project Loom)?",
    options: [
      "Reemplazan CompletableFuture",
      "Hilos ligeros gestionados por la JVM (no del OS) que permiten millones de hilos concurrentes sin el overhead de threads del OS",
      "Son iguales a Goroutines",
      "Hilos más rápidos de OS"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "Virtual threads: Thread.ofVirtual().start(task). La JVM los multiplexa sobre threads del OS. Un blocking I/O no bloquea el OS thread. Revoluciona el modelo thread-per-request."
  },
  {
    question: "¿Qué es el pattern matching en switch de Java 21?",
    options: [
      "Requiere import especial",
      "Regex en switch",
      "Es solo con enums",
      "Permite usar tipos en los cases de switch con deconstrucción: switch(obj) { case Integer i -> ... ; case String s -> ... }"
    ],
    correct: 3,
    difficulty: "B",
    explanation: "Pattern matching switch con sealed classes permite al compilador verificar exhaustividad. Elimina instanceof chains. Java 21 lo hace estable."
  },
  {
    question: "¿Qué es el String Concatenation en Java y cómo lo optimiza el JIT?",
    options: [
      "Es siempre lento",
      "Usa siempre StringBuilder",
      "Java 9+ usa invokedynamic para concatenación de Strings, generando código más eficiente que StringBuilder manual en muchos casos",
      "Usa arrays internamente"
    ],
    correct: 2,
    difficulty: "B",
    explanation: "Java 9+ StringConcatFactory via invokedynamic puede ser más eficiente que StringBuilder. Solo en bucles con muchas concatenaciones StringBuilder manual sigue siendo mejor."
  },
  {
    question: "¿Qué es el patrón Adapter y cómo se diferencia de Facade?",
    options: [
      "Son iguales",
      "Adapter es más moderno",
      "Adapter: hace compatible una interfaz con otra. Facade: simplifica un subsistema complejo detrás de una interfaz unificada",
      "Facade es un Adapter especial"
    ],
    correct: 2,
    difficulty: "B",
    explanation: "Adapter: Arrays.asList() adapta un array a List. Facade: una API REST que unifica múltiples servicios internos. Adapter es sobre compatibilidad; Facade sobre simplicidad."
  },
  {
    question: "¿Cómo implementar un comparador personalizado correctamente?",
    options: [
      "Con instanceof",
      "Implementando Comparator<T>.compare(a,b) retornando negativo/0/positivo; o con Comparator.comparing().thenComparing()",
      "Sobreescribiendo equals()",
      "Sobreescribiendo toString()"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "Comparator.comparing(Persona::getApellido).thenComparing(Persona::getNombre).reversed() crea comparadores compuestos fluidos. Cuidado con overflow en comparación de enteros (usa Integer.compare)."
  },
  {
    question: "¿Qué es el problema de la herencia de diamante y cómo Java lo resuelve en interfaces?",
    options: [
      "Java no permite esto",
      "Cuando una clase hereda métodos default con el mismo nombre de dos interfaces; Java obliga a la clase a sobreescribir el método en conflicto",
      "Un bug de Java",
      "Se resuelve automáticamente"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "class C implements A, B { void metodo() { A.super.metodo(); } } La clase debe resolver explícitamente el conflicto. Con clases no hay problema porque Java solo permite herencia simple."
  },
  {
    question: "¿Qué es la API de <code>StampedLock</code> y su ventaja sobre ReadWriteLock?",
    options: [
      "StampedLock añade el modo optimista: tryOptimisticRead() intenta leer sin lock; si el stamp es válido al final, evita el lock completamente",
      "Es más simple",
      "Es igual a ReentrantLock",
      "No es reentrant"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "Optimistic read: long stamp = lock.tryOptimisticRead(); // read data; if (!lock.validate(stamp)) { stamp = lock.readLock(); ... lock.unlockRead(stamp); } Mejor rendimiento bajo baja contención."
  },
  {
    question: "¿Qué son los Phaser, CyclicBarrier y CountDownLatch?",
    options: [
      "Son obsoletos con virtual threads",
      "Herramientas de sincronización de hilos: CountDownLatch (esperar N eventos), CyclicBarrier (punto de reunión reutilizable), Phaser (barrera con fases)",
      "Son tipos de queues",
      "Tipos de locks"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "CountDownLatch: esperar que N tareas inicialicen. CyclicBarrier: N hilos se sincronizan en punto de reunión, reutilizable. Phaser: el más flexible, permite unirse/desunirse dinámicamente."
  },
  {
    question: "¿Qué es la clase <code>WeakReference</code> y sus variantes?",
    options: [
      "Son solo para primitivos",
      "Referencias que permiten al GC recolectar el objeto si solo existen referencias débiles; útiles para caches",
      "Son obsoletas",
      "Una referencia lenta"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "WeakReference: GC puede recolectar. SoftReference: GC recolecta solo cuando hay presión de memoria (caches). PhantomReference: post-finalización. WeakHashMap usa WeakReferences para claves."
  },
  {
    question: "¿Qué es el bytecode de Java y cómo inspeccionarlo?",
    options: [
      "Es el mismo que el código máquina",
      "Solo lo usa el GC",
      "El código fuente compilado en binario para el OS",
      "El código intermedio que ejecuta la JVM, independiente de la plataforma; inspeccionado con javap -c/-verbose"
    ],
    correct: 3,
    difficulty: "B",
    explanation: "javap -c MiClase muestra el bytecode. Útil para entender cómo el JIT ve el código. Herramientas: ASM, ByteBuddy para manipulación de bytecode en runtime."
  },
  {
    question: "¿Qué es el patrón Repository y su rol en DDD?",
    options: [
      "Una abstracción sobre la capa de persistencia que expone una colección de objetos de dominio; desacopla el dominio de la BD",
      "Un tipo de Facade",
      "Una base de datos",
      "Es igual a DAO"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "Repository simula una colección en memoria. Spring Data JPA genera implementaciones automáticamente. Permite cambiar de DB sin tocar el dominio."
  },
  {
    question: "¿Cómo funciona el mecanismo de excepciones checked en el contexto de lambdas?",
    options: [
      "Las interfaces funcionales estándar (Function, Consumer) no declaran checked exceptions; deben envolverse o usar interfaces personalizadas",
      "Checked exceptions son unchecked en lambdas",
      "Las lambdas soportan checked exceptions",
      "No hay problema"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "Problema: Function<T,R> no declara throws IOException. Solución: @FunctionalInterface ThrowingFunction<T,R> que declara throws, luego wrappear en unchecked. Vavr/resilience4j tienen helpers."
  },
  {
    question: "¿Qué es el patrón Circuit Breaker en Java?",
    options: [
      "Un patrón de resiliencia que detecta fallos y abre el circuito (falla rápido) para proteger el sistema de cascada de errores",
      "Un disyuntor de circuitos",
      "Es igual a retry",
      "Un tipo de proxy"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "States: CLOSED (normal), OPEN (failfast), HALF_OPEN (testing). Resilience4j implementa este patrón. Evita que un servicio caído derribe toda la aplicación."
  },
  {
    question: "¿Cómo funciona <code>java.util.concurrent.atomic</code>?",
    options: [
      "Son igual a ThreadLocal",
      "Son variables volatile simples",
      "Son variables sincronizadas con synchronized",
      "Operaciones atómicas usando CAS (Compare-And-Swap) a nivel de CPU; sin locks, más eficientes que synchronized para operaciones simples"
    ],
    correct: 3,
    difficulty: "B",
    explanation: "AtomicInteger.incrementAndGet() usa CAS: si el valor actual es el esperado, actualiza atómicamente. Sin locks, mejor rendimiento bajo alta contención."
  },
  {
    question: "¿Qué son los eventos de Spring ApplicationContext?",
    options: [
      "Son logs especiales",
      "Son obsoletos",
      "Eventos de la GUI",
      "El contenedor Spring publica eventos (ContextRefreshedEvent) y permite publicar/escuchar eventos personalizados con @EventListener"
    ],
    correct: 3,
    difficulty: "B",
    explanation: "@EventListener void handle(UserCreatedEvent e) {} ApplicationEventPublisher.publishEvent(new UserCreatedEvent(this, user)). Desacopla componentes. @TransactionalEventListener para eventos post-transacción."
  },
  {
    question: "¿Qué es el GraalVM native image?",
    options: [
      "Es solo para microservicios",
      "Un formato de imagen de Java",
      "Compila Java AOT (ahead-of-time) a un ejecutable nativo con startup instantáneo y menor consumo de memoria, sacrificando peak performance",
      "Un tipo de JVM"
    ],
    correct: 2,
    difficulty: "B",
    explanation: "native-image elimina la JVM del runtime. Limitaciones: reflexión/proxies requieren configuración. Quarkus y Micronaut están optimizados para native. Spring Boot 3+ lo soporta."
  },
  {
    question: "¿Qué son los Structured Concurrency en Java (Preview)?",
    options: [
      "Es igual a virtual threads",
      "Una API para gestionar grupos de tareas concurrentes como una unidad: si una falla, cancela las demás; simplifica el manejo de errores",
      "Es solo experimental",
      "Concurrencia con estructuras de datos"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "try (var scope = new StructuredTaskScope.ShutdownOnFailure()) { var a = scope.fork(task1); var b = scope.fork(task2); scope.join().throwIfFailed(); }"
  },
  {
    question: "¿Qué es el AOT compilation en Java y cuándo usarlo?",
    options: [
      "Ahead-of-Time: compila bytecode a nativo antes del runtime. Reduce startup y warmup. Útil en serverless, CLI tools. GraalVM native image es el ejemplo principal",
      "Solo en Android",
      "Es igual a JIT",
      "Es JIT en modo avanzado"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "AOT trade-off: startup rápido vs peak performance menor (sin profiling dinámico del JIT). Spring AOT genera código en tiempo de build para acelerar el contexto Spring."
  },
  {
    question: "¿Qué es el scoped values en Java (JEP 446)?",
    options: [
      "Una alternativa más eficiente y segura a ThreadLocal para compartir datos inmutables en un scope definido, especialmente con virtual threads",
      "Igual a ThreadLocal",
      "Solo para HTTP contexts",
      "Son variables globales"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "ScopedValue<User> CURRENT_USER = ScopedValue.newInstance(); ScopedValue.where(CURRENT_USER, user).run(task). Más eficiente que ThreadLocal con virtual threads."
  },
  {
    question: "¿Cómo implementar un executor personalizado para Virtual Threads con monitoring?",
    options: [
      "Solo con frameworks",
      "Usando synchronized",
      "Extendiendo AbstractExecutorService o usando Executors.newVirtualThreadPerTaskExecutor() y añadiendo métricas con JFR/Micrometer",
      "No es posible"
    ],
    correct: 2,
    difficulty: "A",
    explanation: "Executors.newVirtualThreadPerTaskExecutor() crea un virtual thread por tarea. Para monitoring: Thread.Builder con name factory + JFR events + métricas de contadores."
  },
  {
    question: "¿Qué es el problema de 'false sharing' en programación concurrente Java?",
    options: [
      "Un tipo de race condition",
      "Compartir referencias incorrectamente",
      "Cuando dos hilos acceden a diferentes variables que caen en la misma línea de caché de CPU, causando invalidaciones innecesarias",
      "Un bug del GC"
    ],
    correct: 2,
    difficulty: "A",
    explanation: "Solución: @Contended (sun.misc) o padding manual con campos dummy. El JVM flag -XX:-RestrictContended habilita @Contended fuera de bootstrap classes."
  },
  {
    question: "¿Cómo funciona el ZGC (Z Garbage Collector) a nivel técnico?",
    options: [
      "No soporta compactación",
      "Es solo para heaps pequeños",
      "Es igual a G1",
      "ZGC usa colored pointers y load barriers para recolocar objetos de forma concurrente con la aplicación, logrando pausas sub-millisecond"
    ],
    correct: 3,
    difficulty: "A",
    explanation: "ZGC: concurrent compaction, colored pointers (metadata en bits del puntero), multi-mapping de memoria. Desde Java 21 es generacional. Pausas <1ms independientes del heap size."
  },
  {
    question: "¿Qué es el Epsilon GC y para qué se usa?",
    options: [
      "Solo en testing",
      "Un GC ultra-rápido",
      "Es el GC por defecto",
      "Un GC de no-operación que no recolecta basura; útil para benchmarking, aplicaciones de corta vida o donde el GC overhead importa más que la memoria"
    ],
    correct: 3,
    difficulty: "A",
    explanation: "-XX:+UseEpsilonGC: no recolecta. La JVM termina cuando se agota el heap. Permite medir el overhead real del GC comparando con él."
  },
  {
    question: "¿Cómo funciona el mecanismo de invokeDynamic en la JVM?",
    options: [
      "Es una optimización de JIT",
      "Invoca métodos dinámicos de forma lenta",
      "Un opcode de la JVM que difiere la resolución del método hasta el primer call, usando MethodHandles; base de lambdas, string concatenation y Groovy/Kotlin",
      "Es solo para reflexión"
    ],
    correct: 2,
    difficulty: "A",
    explanation: "invokedynamic: bootstrap method se ejecuta una vez y retorna CallSite con MethodHandle. Las lambdas en Java usan LambdaMetafactory como bootstrap method, evitando clases anónimas explícitas."
  },
  {
    question: "¿Qué es la API MethodHandles y cómo se compara con Reflection?",
    options: [
      "Es igual a reflection",
      "MethodHandles: acceso a métodos/campos como objetos funcionales, verificados en acceso (no en llamada), más rápidos que Reflection tras JIT",
      "Solo funciona con generics",
      "Es más lento que Reflection"
    ],
    correct: 1,
    difficulty: "A",
    explanation: "MethodHandles.lookup().findVirtual(Clase.class, \"metodo\", type).invoke(obj, args). Más rápido que Method.invoke(). Con VarHandles (Java 9): acceso atómico a campos."
  },
  {
    question: "¿Cómo funciona el compilador Graal como JIT dentro de HotSpot?",
    options: [
      "No funciona en producción",
      "Es solo para native image",
      "Reemplaza todo HotSpot",
      "JVMCI (JVM Compiler Interface) permite que un compilador JIT escrito en Java (Graal) reemplace el C2 de HotSpot, con mejor inlining y escape analysis"
    ],
    correct: 3,
    difficulty: "A",
    explanation: "-XX:+UseJVMCICompiler activa Graal JIT. Mejor optimización de lambdas y streams. La misma base que GraalVM native image. GraalVM Community y Enterprise difieren en optimizaciones."
  },
  {
    question: "¿Qué es el Project Panama y qué problema resuelve?",
    options: [
      "Reemplaza Unsafe",
      "Es un framework web",
      "Project Panama (Java 22+) reemplaza JNI con la Foreign Function & Memory API: llamada a código nativo y acceso a memoria off-heap de forma segura y eficiente",
      "Una librería de networking"
    ],
    correct: 2,
    difficulty: "A",
    explanation: "MemorySegment, MemoryLayout, Linker: accede a bibliotecas C sin JNI. 10-50x más rápido que JNI para algunos casos. jextract genera bindings automáticamente desde headers C."
  },
  {
    question: "¿Qué es el escape analysis y cómo impacta al rendimiento?",
    options: [
      "El JIT analiza si un objeto 'escapa' del scope: si no escapa, puede asignarlo en stack (no heap), eliminando GC pressure y sincronización innecesaria",
      "Solo funciona con primitivos",
      "Un análisis de seguridad",
      "Es una técnica de debugging"
    ],
    correct: 0,
    difficulty: "A",
    explanation: "Escape analysis habilita: stack allocation, lock elision (synchronize en objeto local es no-op), scalar replacement (descomponer objeto en variables primitivas). -XX:+DoEscapeAnalysis (default)."
  },
  {
    question: "¿Cómo funciona el CMS (Concurrent Mark-Sweep) y por qué fue deprecado?",
    options: [
      "Es el más rápido",
      "Es el GC actual",
      "Solo en Java 8",
      "CMS hace la mayor parte de la marca concurrentemente, pero sufre fragmentación (no compacta) y pausas impredecibles bajo alta carga; G1/ZGC lo reemplazan"
    ],
    correct: 3,
    difficulty: "A",
    explanation: "CMS deprecado en Java 9, eliminado en Java 14. Sus sucesor G1 compacta el heap y tiene tiempos de pausa predecibles. Para ultra-baja latencia: ZGC."
  },
  {
    question: "¿Qué son las VarHandles en Java 9+?",
    options: [
      "Solo para campos estáticos",
      "Manejadores de variables globales",
      "Acceso de bajo nivel a variables con semántica de memoria configurable (plain, volatile, acquire/release, opaque); reemplaza Unsafe para acceso atómico",
      "Son igual a AtomicInteger"
    ],
    correct: 2,
    difficulty: "A",
    explanation: "VarHandle fh = MethodHandles.lookup().findVarHandle(Clase.class, \"campo\", int.class); fh.compareAndSet(obj, expected, newVal). Más seguro que Unsafe, tan eficiente."
  },
  {
    question: "¿Qué es el mecanismo de lock biasing y su depreciación?",
    options: [
      "Es un tipo de deadlock",
      "Optimización que asume que un lock será adquirido siempre por el mismo hilo, eliminando el costo de sync; deprecada en Java 15 por mayor costo de revocación",
      "Solo en Java 6",
      "Un tipo de lock optimista"
    ],
    correct: 1,
    difficulty: "A",
    explanation: "Biased locking: reduce overhead en código single-threaded con sincronización. Con modern hardware y JVM, el costo de revocación supera el beneficio. Deprecada en Java 15, eliminada en Java 21."
  },
  {
    question: "¿Cómo diseñar un sistema de caché thread-safe eficiente en Java?",
    options: [
      "Usar synchronized siempre",
      "ConcurrentHashMap con computeIfAbsent() + size limit + eviction policy (LRU via LinkedHashMap o Caffeine library) + métricas de hit/miss",
      "Usar WeakHashMap siempre",
      "Singleton con volatile"
    ],
    correct: 1,
    difficulty: "A",
    explanation: "Caffeine (successor de Guava) ofrece W-TinyLFU policy con mejor hit rate. computeIfAbsent en ConcurrentHashMap es atómico. Para cache distribuida: Redis con Lettuce."
  },
  {
    question: "¿Qué son las continuations en el contexto de Project Loom?",
    options: [
      "Una abstracción de bajo nivel que representa un cómputo suspendible/resumible; base de los virtual threads",
      "Son coroutines de Java",
      "Un tipo de bucle",
      "Son iguales a futures"
    ],
    correct: 0,
    difficulty: "A",
    explanation: "Continuation es el mecanismo interno de virtual threads. Cuando un virtual thread hace I/O bloqueante, se suspende su continuation y el OS thread queda libre para otros virtual threads."
  },
  {
    question: "¿Qué es el problema de la pirámide de callbacks y cómo CompletableFuture lo soluciona?",
    options: [
      "Solo es problema en JavaScript",
      "Synchronized lo resuelve",
      "El callback hell: callbacks anidados difíciles de mantener; CompletableFuture permite encadenar operaciones asíncronas de forma lineal con thenApply/thenCompose",
      "No existe en Java"
    ],
    correct: 2,
    difficulty: "A",
    explanation: "CF.supplyAsync(A).thenApply(B).thenCompose(C).exceptionally(err).thenAccept(result). Evita anidamiento. thenCompose para CF que retorna CF (flatMap async)."
  },
  {
    question: "¿Cómo funciona la serialización en Java y sus problemas de seguridad?",
    options: [
      "Solo funciona con primitivos",
      "Serialización es solo JSON",
      "Java serialización nativa (ObjectOutputStream) serializa el grafo de objetos a binario; permite deserialización de código arbitrario si no se valida, un vector de ataque crítico",
      "Es segura por diseño"
    ],
    correct: 2,
    difficulty: "A",
    explanation: "CVE históricos por deserialización de gadget chains. Alternativas: JSON (Jackson), Protobuf, Avro. Si se usa: filtros ObjectInputFilter (Java 9+), validar SerialVersionUID."
  },
  {
    question: "¿Qué es el patrón Saga en microservicios Java?",
    options: [
      "Una historia en el código",
      "Es igual a transacciones",
      "Un tipo de Singleton",
      "Gestiona transacciones distribuidas mediante una secuencia de transacciones locales con compensaciones en caso de fallo, sin 2PC"
    ],
    correct: 3,
    difficulty: "A",
    explanation: "Saga orchestration: servicio central coordina. Choreography: cada servicio reacciona a eventos. Axon Framework implementa sagas. Compensaciones deben ser idempotentes."
  },
  {
    question: "¿Cómo optimizar el rendimiento de queries con Spring Data JPA?",
    options: [
      "Usar EAGER siempre",
      "Más índices siempre",
      "Usar SQL nativo siempre",
      "Usar LAZY loading, @BatchSize para collections, @EntityGraph para fetching selectivo, proyecciones (interfaces/DTOs), caché de segundo nivel (EhCache/Caffeine)"
    ],
    correct: 3,
    difficulty: "A",
    explanation: "N+1 problem: usar @EntityGraph o JPQL JOIN FETCH. Proyecciones: solo seleccionar campos necesarios. @QueryHints para read-only. Hibernate Statistics para debugging."
  },
  {
    question: "¿Qué es el mecanismo de auto-scaling en aplicaciones Java en contenedores?",
    options: [
      "Aumentar RAM manual",
      "Configurar correctamente: -XX:MaxRAMPercentage=75 (en lugar de -Xmx fijo), preferir G1/ZGC, health endpoints (/actuator/health), métricas para HPA de Kubernetes",
      "Solo es para servidores grandes",
      "No aplica con Java"
    ],
    correct: 1,
    difficulty: "A",
    explanation: "Java en containers: -XX:+UseContainerSupport (default en Java 10+), MaxRAMPercentage, JVM flags para GC. Micrometer → Prometheus → Grafana para métricas. Spring Boot Actuator provee endpoints."
  },
  {
    question: "¿Qué son los Java Agents y para qué se usan?",
    options: [
      "Librerías que se adjuntan a la JVM via -javaagent, permitiendo instrumentar bytecode en carga (premain) o en runtime (agentmain); base de APM, profilers, mocking",
      "Agentes de IA",
      "Son plugins de Maven",
      "Solo en testing"
    ],
    correct: 0,
    difficulty: "A",
    explanation: "Byte Buddy, ASM para instrumentación. APM (New Relic, Datadog) usan agents. Mockito usa agents para mockear clases finales. javaagent implementa ClassFileTransformer."
  },
  {
    question: "¿Qué es el principio de diseño CQRS?",
    options: [
      "Es igual a Repository",
      "Command Query Responsibility Segregation: separar las operaciones de lectura (Query) de escritura (Command) en modelos distintos para optimizar cada uno independientemente",
      "Command Query Response System",
      "Un tipo de MVC"
    ],
    correct: 1,
    difficulty: "A",
    explanation: "CQRS: comandos modifican estado (sin retorno), queries retornan datos (sin efectos). Permite escalar lecturas/escrituras independientemente. Combinado con Event Sourcing en sistemas complejos."
  },
  {
    question: "¿Cómo implementar Event Sourcing con Java?",
    options: [
      "Es igual a CQRS",
      "Una base de datos especial",
      "Guardar logs de errores",
      "Almacenar el estado de un sistema como secuencia de eventos inmutables en lugar de estado actual; el estado se reconstruye reproduciendo eventos"
    ],
    correct: 3,
    difficulty: "A",
    explanation: "EventStore almacena: List<Event>. Para reconstituir: events.stream().reduce(initialState, (state, event) -> event.apply(state)). Axon Framework facilita la implementación en Java."
  },
  {
    question: "¿Qué es el patrón Hexagonal Architecture (Ports & Adapters)?",
    options: [
      "Un tipo de microservicio",
      "El dominio central se comunica con el exterior solo via puertos (interfaces); adaptadores conectan puertos a tecnologías concretas (REST, DB, MQ)",
      "Es igual a MVC",
      "Una arquitectura de base de datos"
    ],
    correct: 1,
    difficulty: "A",
    explanation: "Dominio no conoce Spring/JPA/REST. Puerto: OrderRepository (interfaz). Adaptador: JpaOrderRepository implements OrderRepository. Permite cambiar infraestructura sin tocar dominio."
  },
  {
    question: "¿Cómo funciona el mecanismo de AOP (Aspect-Oriented Programming) en Spring?",
    options: [
      "Solo funciona con interfaces",
      "Una extensión de herencia",
      "Es igual a reflexión",
      "Spring crea proxies (JDK dynamic proxy o CGLIB) que interceptan llamadas a métodos; advice se ejecuta antes/después/alrededor según pointcuts"
    ],
    correct: 3,
    difficulty: "A",
    explanation: "@Aspect @Around(\"@annotation(Transactional)\") intercepta. Limitación: self-invocation no pasa por el proxy. Solución: inyectar el bean en sí mismo o usar AspectJ weaving."
  },
  {
    question: "¿Qué es el Domain-Driven Design (DDD) y sus tácticas en Java?",
    options: [
      "Es igual a POO",
      "DDD: modelar el software según el dominio del negocio. Tácticas: Entities, Value Objects, Aggregates, Repositories, Domain Services, Domain Events",
      "Solo para grandes sistemas",
      "Un tipo de base de datos"
    ],
    correct: 1,
    difficulty: "A",
    explanation: "Entity: identidad mutable. Value Object: inmutable por valor (Money, Address). Aggregate: consistencia transaccional (Order + OrderItems). Boundary: solo el root se accede desde fuera."
  },
  {
    question: "¿Cómo funcionan las transacciones distribuidas en Java sin 2PC?",
    options: [
      "Usando @Transactional distribuido",
      "2PC siempre funciona",
      "Usando Saga pattern, compensating transactions, Eventual Consistency via events; 2PC es frágil y no escala en microservicios",
      "No son posibles"
    ],
    correct: 2,
    difficulty: "A",
    explanation: "ACID local + eventual consistency entre servicios. Outbox pattern: guardar evento en la misma BD que la entidad (misma transacción), luego publicar asíncronamente. Garantiza at-least-once delivery."
  },
  {
    question: "¿Qué es la API de Foreign Memory (Project Panama) y cómo reemplaza Unsafe?",
    options: [
      "Es igual a ByteBuffer",
      "Solo para gráficos",
      "Una librería de networking",
      "MemorySegment provee acceso seguro a memoria off-heap con scope controlado (Arena), evitando memory leaks y null-pointer dereferences de Unsafe"
    ],
    correct: 3,
    difficulty: "A",
    explanation: "try (Arena arena = Arena.ofConfined()) { MemorySegment seg = arena.allocate(100); seg.set(ValueLayout.JAVA_INT, 0, 42); } La memoria se libera automáticamente al cerrar el Arena."
  },
  {
    question: "¿Cómo diseñar un sistema de rate limiting distribuido en Java con Redis?",
    options: [
      "Solo con bases de datos",
      "Usar synchronized global",
      "Algoritmo Token Bucket o Sliding Window implementado con scripts Lua en Redis (atómicos), usando Redisson o Lettuce, con fallback local (Bucket4j) ante fallos de Redis",
      "Usar semáforos Java"
    ],
    correct: 2,
    difficulty: "S",
    explanation: "Lua script en Redis es atómico (single-threaded Redis). Bucket4j: implementación local de Token Bucket. Para distribución: Redisson RateLimiter usa Redis. Considerar: network latency, Redis failover."
  },
  {
    question: "¿Cómo implementar un observability stack completo para una aplicación Java?",
    options: [
      "Tríade: Logs (SLF4J+Logback → ELK/Loki), Métricas (Micrometer → Prometheus → Grafana), Trazas distribuidas (OpenTelemetry → Jaeger/Zipkin); correlación via trace-id en MDC",
      "Solo con APM de pago",
      "Solo en Kubernetes",
      "Solo logs"
    ],
    correct: 0,
    difficulty: "S",
    explanation: "OpenTelemetry Java Agent: instrumentación auto sin código. MDC.put(\"traceId\", span.traceId()) correlaciona logs con trazas. Alertas en Grafana sobre métricas de Prometheus. Sampling para control de volumen."
  },
  {
    question: "¿Cómo funciona el mecanismo interno de HashMap en Java 8+ cuando hay muchas colisiones?",
    options: [
      "No hay diferencia de Java 7 a 8",
      "Usa LinkedList siempre",
      "En Java 8+, cuando un bucket supera 8 entradas y el mapa tiene ≥64 buckets, la lista enlazada se convierte a un árbol rojo-negro (TreeMap) O(log n) para evitar DoS",
      "Usa arrays paralelos"
    ],
    correct: 2,
    difficulty: "S",
    explanation: "TREEIFY_THRESHOLD=8. La vulnerabilidad de hash collision DoS (todos los keys al mismo bucket, O(n)) es la motivación. En Java 7 era posible causar O(n) seleccionando keys con mismo hashCode."
  },
  {
    question: "¿Cómo diseñar un framework de reintentos con backoff exponencial y jitter en Java?",
    options: [
      "Usar while(true)",
      "Implementar RetryPolicy con: maxAttempts, backoff exponencial (baseDelay * 2^attempt), jitter aleatorio para evitar thundering herd, circuit breaker integrado, métricas",
      "Usar Thread.sleep fijo",
      "Solo con librerías externas"
    ],
    correct: 1,
    difficulty: "S",
    explanation: "delay = min(maxDelay, baseDelay * 2^attempt + random.nextInt(jitterMs)). Resilience4j Retry + CircuitBreaker. Thundering herd: sin jitter, todos reintentan simultáneamente tras una falla."
  },
  {
    question: "¿Qué son los Coroutines en Kotlin vs Virtual Threads en Java y cuándo preferir cada uno?",
    options: [
      "Coroutines: modelo cooperativo con suspensión en puntos explícitos (suspend), integrado en el lenguaje, mejor soporte para structured concurrency; VT: transparente, sin cambios de API",
      "Virtual threads son superiores siempre",
      "Coroutines son obsoletas",
      "Son equivalentes en todo"
    ],
    correct: 0,
    difficulty: "S",
    explanation: "VT: ideal para migrar código bloqueante existente sin cambios de API. Coroutines: mejor composición, cancellation estructurada, Flow para reactive. Kotlin en JVM puede usar VT como dispatcher."
  },
  {
    question: "¿Cómo implementar un sistema de lock distribuido con semántica correcta en Java?",
    options: [
      "Usando ZooKeeper siempre es correcto",
      "Usar synchronized en todos los nodos",
      "Usar base de datos como lock",
      "Redlock algorithm (Redisson): adquirir locks en N Redis independientes (mayoría); con TTL para evitar deadlocks; considerar drift de reloj y limitaciones del algoritmo"
    ],
    correct: 3,
    difficulty: "S",
    explanation: "Redlock: controversia Lamport/Kleppmann. Para alta corrección: ZooKeeper (Curator recipes), etcd o bases de datos con CAS. TTL + fencing token previene acciones post-lock-expiry."
  },
  {
    question: "¿Cómo funciona la compilación ahead-of-time de Spring Boot 3+ con AOT?",
    options: [
      "Compila el bytecode a nativo directamente",
      "No requiere GraalVM",
      "Spring AOT procesa el contexto de aplicación en build-time: genera código fuente para configuración de beans (evitando reflexión), compatible con GraalVM native image con mínima configuración",
      "Es solo una optimización menor"
    ],
    correct: 2,
    difficulty: "S",
    explanation: "spring-boot:process-aot genera: BeanDefinitionRegistrar, ApplicationContextInitializer, reflect-config.json, resource-config.json. Luego native-image los usa. Reduce 80% de la config reflectiva manual."
  },
  {
    question: "¿Cómo diseñar una arquitectura de microservicios con Java para alta disponibilidad?",
    options: [
      "Service mesh (Istio): retry, circuit breaking, mTLS a nivel de red. Sidecar pattern. Kubernetes: HPA, PDB, readiness/liveness probes. Bulkhead pattern: ThreadPool isolation por servicio downstream",
      "Usando EJB clusters",
      "Solo con load balancer",
      "Muchos servicios con synchronized"
    ],
    correct: 0,
    difficulty: "S",
    explanation: "Bulkhead: ThreadPoolBulkhead por servicio externo (Resilience4j). HPA con métricas custom (requests/s). PDB: mínimo N-1 pods disponibles durante updates. ISTIO circuit breaker vs Resilience4j: ambos, capas distintas."
  },
  {
    question: "¿Cómo optimizar el GC pause time a menos de 10ms en una aplicación Java de baja latencia?",
    options: [
      "ZGC o Shenandoah (concurrent GC). Reducir allocation rate: object pooling, value types (Project Valhalla preview), off-heap storage (Chronicle Map). Evitar finalizers. Tune region sizes",
      "Usar más RAM",
      "Usar Epsilon GC",
      "Usar más hilos"
    ],
    correct: 0,
    difficulty: "S",
    explanation: "Allocation rate es el principal driver de GC pressure. Profiling con async-profiler (allocation profiling). Off-heap: Chronicle Map, Ignite. Value types (Valhalla): elimina boxing overhead. -Xlog:gc* para diagnóstico."
  },
  {
    question: "¿Qué es Project Valhalla y cómo cambiará el modelo de tipos de Java?",
    options: [
      "Un nuevo framework web",
      "Es solo renombrar primitivos",
      "Reemplaza generics",
      "Valhalla introduce Value Classes (tipos por valor sin identidad de objeto) y Primitive Classes, eliminando el overhead de boxing de tipos primitivos en generics"
    ],
    correct: 3,
    difficulty: "S",
    explanation: "Value types: int/Integer unificados. List<int> sin boxing. Mejora dramática en performance de colecciones y matrices. Primitive classes: sin identity, flatten en arrays. Previsto para Java LTS futuro."
  },
  {
    question: "¿Cómo implementar un sistema de caché distribuida con coherencia eventual en Java?",
    options: [
      "Redis con synchronized",
      "Solo con EhCache local",
      "Usar Hazelcast Near Cache o Apache Ignite con invalidación via eventos, implementando el patrón Write-Behind para actualizaciones asíncronas y Read-Through para cacheo transparente",
      "Usar ConcurrentHashMap distribuido"
    ],
    correct: 2,
    difficulty: "S",
    explanation: "Near Cache: caché local + caché distribuida. Invalidación por eventos o TTL. Write-Behind: acumula escrituras y las aplica en lotes a la BD. Considerar: split-brain, network partitions, cache stampede."
  },
  {
    question: "¿Cómo funciona el compilador de expresiones regulares de Java internamente?",
    options: [
      "Java compila regex a un NFA/DFA híbrido; Pattern.compile() es costoso (cachearlo), casos como (a+)+ tienen complejidad exponencial (ReDoS vulnerability)",
      "Usa backtracking puro siempre",
      "Es el más rápido disponible",
      "Usa la librería C del OS"
    ],
    correct: 0,
    difficulty: "S",
    explanation: "ReDoS (Regular Expression DoS): (a+)+ con input 'aaaaab' → tiempo exponencial. Solución: usar possessive quantifiers a++ o atomic groups (?>a+). Librerías RE2J (Google) garantizan O(n)."
  },
  {
    question: "¿Cómo diseñar un sistema de deserialización segura en Java?",
    options: [
      "Solo con @Serializable",
      "Confiar en el tipo del stream",
      "Implementar ObjectInputFilter (whitelist de clases permitidas), usar serialización alternativa (JSON+Jackson con polimorfismo explícito, Protobuf), nunca deserializar input no confiable sin validación",
      "Usar sealed classes"
    ],
    correct: 2,
    difficulty: "S",
    explanation: "CVE-2015-4852 y similares: gadget chains en classpath (Apache Commons Collections). Solución definitiva: no usar serialización nativa de Java. Si es necesario: ObjectInputFilter strict whitelist."
  },
  {
    question: "¿Qué es el mecanismo de intrinsics en HotSpot JVM?",
    options: [
      "Métodos nativos de C",
      "Métodos donde el JIT reemplaza la llamada Java con instrucciones de CPU optimizadas directamente; ej: Arrays.copyOf, String.equals, Math.sqrt usan instrucciones SIMD/especiales",
      "Son métodos deprecated",
      "Solo para criptografía"
    ],
    correct: 1,
    difficulty: "S",
    explanation: "HotSpot tiene ~200 intrinsics. Math.sqrt() → instrucción FSQRT. Arrays.fill() → instrucción SIMD. Detectar intrinsics con -XX:+PrintIntrinsics. Impacto: 10-100x para operaciones críticas."
  },
  {
    question: "¿Cómo implementar un sistema de transacciones distribuidas con el patrón Outbox?",
    options: [
      "Guardar el evento en una tabla Outbox en la misma transacción de BD. Un proceso separado (Debezium CDC) lee la tabla y publica en el message broker. Garantiza at-least-once delivery",
      "Usando @Transactional distribuido",
      "Usando 2PC siempre",
      "Con synchronized en todos los servicios"
    ],
    correct: 0,
    difficulty: "S",
    explanation: "Outbox: INSERT evento + UPDATE entidad en misma TX local. Debezium lee el WAL de la BD (PostgreSQL logical replication, MySQL binlog) y publica en Kafka. Idempotent consumers con deduplication key."
  },
  {
    question: "¿Cómo optimizar una aplicación Java para reducir el tiempo de arranque en entornos serverless?",
    options: [
      "Usar menos frameworks",
      "GraalVM native image (startup <50ms). Si JVM: CDS/AppCDS (Class Data Sharing), tiered compilation desactivada (-XX:TieredStopAtLevel=1), Spring AOT, lazy bean initialization, snapshot (CRaC - Checkpoint/Restore in Userspace)",
      "Usar Java 8",
      "Aumentar el heap"
    ],
    correct: 1,
    difficulty: "S",
    explanation: "CRaC (JEP draft): snapshot la JVM tras warmup, restore instantáneo (ms). Azul Zulu y OpenJDK tienen implementaciones. Alternativa: SnapStart en AWS Lambda. GraalVM para startup <100ms."
  },
  {
    question: "¿Qué son los Gatherers en Java 22 (JEP 461)?",
    options: [
      "Son iguales a Collectors",
      "Una API para crear operaciones de pipeline de Stream intermedias personalizadas (como un Collector pero para operaciones intermedias, no terminales)",
      "Colectores de GC",
      "Una nueva API de concurrencia"
    ],
    correct: 1,
    difficulty: "S",
    explanation: "Stream.gather(Gatherer) permite operaciones con estado como: sliding window, batching, deduplication con contexto. Llena el gap entre Collector (terminal) y operaciones lazy del Stream."
  },
  {
    question: "¿Cómo funciona el compilador JIT C2 de HotSpot para optimizar código?",
    options: [
      "Solo optimiza bucles",
      "Solo compila a bytecode",
      "Es igual a Graal JIT",
      "C2 aplica: inlining agresivo, escape analysis, scalar replacement, eliminación de código muerto, loop unrolling, SIMD vectorización, devirtualización especulativa con deoptimización si falla"
    ],
    correct: 3,
    difficulty: "S",
    explanation: "Devirtualización especulativa: asume tipo concreto para vtable, si falla (tipo cambia) deoptimiza y recompila. Tiered compilation: intérprete → C1 (rápido) → C2 (agresivo). JFR para profiling sin overhead."
  },
  {
    question: "¿Qué es el modelo actor y cómo implementarlo en Java?",
    options: [
      "Un tipo de Singleton",
      "Es igual a CompletableFuture",
      "Un modelo de concurrencia donde actores son entidades con mailbox: procesan mensajes secuencialmente sin estado compartido. Akka (Scala/Java) es la implementación más conocida",
      "Un tipo de thread pool"
    ],
    correct: 2,
    difficulty: "S",
    explanation: "Actor: immutable messages + mailbox + behavior. Akka Typed: ActorSystem, Behaviors.receive(). Ventaja: sin locks, fault tolerance con supervisión. Problema: no hay garantía de ordering entre actores distintos."
  },
  {
    question: "¿Cómo implementar un generador de código bytecode en runtime con ASM?",
    options: [
      "Solo con reflexión",
      "Solo con Lombok",
      "No es posible",
      "Con ASM ClassWriter generar bytecode directamente: visitar clase, métodos, instrucciones; definirla con ClassLoader.defineClass(); usado por frameworks para generar proxies y adaptadores en runtime"
    ],
    correct: 3,
    difficulty: "S",
    explanation: "ClassWriter cw = new ClassWriter(COMPUTE_FRAMES); cw.visit(V17, ACC_PUBLIC, \"MyClass\", null, \"java/lang/Object\", null); ... byte[] bytes = cw.toByteArray(). Byte Buddy es una alternativa de alto nivel sobre ASM."
  }
];
