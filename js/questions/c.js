window.questions_c = [
  {
    question: "¿Cuál es la función de entrada/salida estándar para imprimir en C?",
    options: [
      "printf()",
      "print()",
      "putstr()",
      "outf()"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "printf() es la función principal de salida formateada en C, definida en <stdio.h>. Usa especificadores de formato como %d, %s, %f."
  },
  {
    question: "¿Cómo se declara una variable entera en C?",
    options: [
      "int x = 5;",
      "num x = 5;",
      "var x = 5;",
      "long x = 5;"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "int es el tipo entero básico en C. La declaración debe preceder al uso de la variable en C89/C90 (no en C99+)."
  },
  {
    question: "¿Qué hace el operador <code>*</code> cuando se aplica a un puntero?",
    options: [
      "Obtiene la dirección base del segmento de memoria donde reside el puntero",
      "Convierte el puntero a un entero con el valor de su dirección de memoria",
      "Desreferencia el puntero: accede al valor almacenado en la dirección de memoria apuntada",
      "Incrementa el puntero según el tamaño del tipo al que apunta en aritmética de punteros"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "*ptr desreferencia ptr: si ptr apunta a x, *ptr es x. No confundir con int *p donde * declara p como puntero."
  },
  {
    question: "¿Qué hace el operador <code>&</code> aplicado a una variable?",
    options: [
      "Realiza la operación AND bit a bit entre los bits de los dos operandos enteros",
      "Declara una referencia de tipo compatible que actúa como alias mutable de la variable",
      "Aplica la máscara de bits del operando derecho sobre el valor del operando izquierdo",
      "Retorna la dirección de memoria de la variable"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "&x retorna la dirección de memoria de x. Se usa para inicializar punteros: int *p = &x; o para pasar por referencia a funciones."
  },
  {
    question: "¿Cómo se declara un puntero a entero en C?",
    options: [
      "ptr int p;",
      "int& p;",
      "int^ p;",
      "int *p;"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "int *p declara p como puntero a int. El * puede estar pegado al tipo (int* p) o a la variable (int *p). La segunda forma evita confusión con int* a, b (donde solo a es puntero)."
  },
  {
    question: "¿Qué incluye la cabecera <code>#include <stdlib.h></code>?",
    options: [
      "Exclusivamente funciones matemáticas como sin, cos, sqrt y las constantes M_PI",
      "Funciones de entrada/salida formateada como printf, scanf, fopen y sus variantes",
      "Funciones de manipulación de cadenas: strcpy, strlen, strcat y comparación de strings",
      "Funciones de utilidad general: malloc, free, exit, atoi, qsort, rand, entre otras"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "stdlib.h (Standard Library) incluye: gestión de memoria dinámica, conversiones, aleatoriedad, búsqueda, ordenamiento, control de procesos."
  },
  {
    question: "¿Qué hace <code>malloc(n)</code>?",
    options: [
      "Reserva n bytes de memoria dinámica en el heap y retorna un void* (o NULL si falla)",
      "Asigna n bytes en el stack del proceso e inicializa cada byte al valor cero automáticamente",
      "Libera el bloque de n bytes en el heap y pone a NULL el puntero recibido como argumento",
      "Redimensiona un bloque existente en el heap al nuevo tamaño n conservando sus datos previos"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "malloc(sizeof(int) * 10) reserva espacio para 10 ints. No inicializa la memoria (puede contener basura). Retorna NULL si no hay memoria disponible. Siempre verificar el retorno."
  },
  {
    question: "¿Qué hace <code>free(ptr)</code>?",
    options: [
      "Libera el bloque de memoria dinámica apuntado por ptr, devolviéndolo al heap",
      "Comprueba si ptr es un puntero válido antes de permitir que se acceda a la dirección",
      "Pone a cero todos los bytes del bloque apuntado por ptr sin liberarlo del heap",
      "Asigna NULL al puntero ptr y registra la liberación en la tabla de símbolos del runtime"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "free() libera memoria previamente asignada con malloc/calloc/realloc. No pone ptr a NULL automáticamente (el puntero queda 'dangling'). Liberar dos veces el mismo puntero es undefined behavior."
  },
  {
    question: "¿Cuál es el especificador de formato para imprimir un entero con printf?",
    options: [
      "%f",
      "%s",
      "%d",
      "%c"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "%d imprime int. %i también. %f para float/double. %s para string (char*). %c para char. %p para puntero. %zu para size_t."
  },
  {
    question: "¿Qué es un array en C?",
    options: [
      "Un puntero que almacena la dirección del primer elemento junto con el tamaño total del bloque",
      "Una secuencia contigua de elementos del mismo tipo en memoria, accedidos por índice (0-based)",
      "Una colección de elementos heterogéneos organizados en memoria no contigua con punteros",
      "Una estructura de datos que crece dinámicamente y gestiona su propia memoria en el heap"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "int arr[5] = {1,2,3,4,5}. Los elementos están contiguos en memoria. arr[0] es el primero. En C, el nombre del array decae a un puntero al primer elemento."
  },
  {
    question: "¿Qué es un <code>struct</code> en C?",
    options: [
      "El equivalente en C a una clase de C++ que admite herencia y polimorfismo mediante vtables",
      "Un tipo de puntero opaco que referencia una región contigua de datos de tipo heterogéneo",
      "Una función especial que inicializa un conjunto de variables relacionadas en el stack",
      "Un tipo compuesto que agrupa múltiples variables de diferentes tipos bajo un único nombre"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "struct Persona { char nombre[50]; int edad; float salario; }. Los campos se acceden con . para variables y con -> para punteros a struct."
  },
  {
    question: "¿Cuál es la diferencia entre <code>==</code> y <code>=</code> en C?",
    options: [
      "= compara y == asigna según el tipo del operando izquierdo",
      "= es asignación; == es comparación de igualdad",
      "== asigna y comprueba al mismo tiempo con un único operando",
      "Son intercambiables salvo en inicializaciones de puntero"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "Uno de los bugs más comunes en C: if(x = 5) asigna 5 a x y es siempre verdadero (si x != 0). Lo correcto es if(x == 5). Algunos compiladores advierten sobre esto con -Wall."
  },
  {
    question: "¿Qué hace <code>sizeof()</code> en C?",
    options: [
      "Calcula en tiempo de ejecución cuántos bytes ocupa la cadena incluyendo el terminador",
      "Cuenta el número de elementos de un array y lo retorna como valor de tipo size_t",
      "Retorna el número de bytes actualmente usados en el heap por la variable especificada",
      "Retorna el tamaño en bytes de un tipo o variable en tiempo de compilación"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "sizeof(int) varía por plataforma (generalmente 4). sizeof(char) siempre es 1. sizeof(arr)/sizeof(arr[0]) da el número de elementos de un array estático."
  },
  {
    question: "¿Qué retorna <code>strlen(\"hola\")</code>?",
    options: [
      "8 (tamaño en bytes)",
      "4 (sin el null terminador)",
      "5 (incluye el carácter nulo)",
      "Varía según plataforma"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "strlen() cuenta los caracteres hasta (sin incluir) el null terminador \\0. \"hola\" tiene 4 caracteres + \\0 = 5 bytes en memoria, pero strlen retorna 4."
  },
  {
    question: "¿Qué es el null terminador en strings de C?",
    options: [
      "Un puntero nulo que se coloca automáticamente al final de cada arreglo de caracteres en C",
      "El carácter '\\0' (ASCII 0) que marca el final de un string; las funciones de string dependen de él para saber dónde termina",
      "Un valor especial de tipo NULL que reserva el compilador para indicar fin de secuencia",
      "El último byte del buffer que el programador debe asignar explícitamente como centinela"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "char str[] = \"hola\" almacena: 'h','o','l','a','\\0'. Si falta el \\0, las funciones como strlen y printf pueden leer más allá del buffer causando undefined behavior."
  },
  {
    question: "¿Qué hace <code>strcpy(dest, src)</code>?",
    options: [
      "Copia el string src al buffer dest incluyendo el null terminador; peligroso si dest es insuficientemente grande",
      "Concatena el string src al final de dest reservando automáticamente el espacio adicional necesario",
      "Compara lexicográficamente src y dest retornando el índice donde difieren los primeros caracteres",
      "Retorna la longitud en bytes del string src incluyendo el terminador nulo al final de la cadena"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "strcpy no verifica el tamaño de dest. Si src es más largo que dest: buffer overflow. Usar strncpy(dest, src, n) o mejor strlcpy donde esté disponible. snprintf es la alternativa moderna segura."
  },
  {
    question: "¿Cuál es la diferencia entre <code>char *s = \"hola\"</code> y <code>char s[] = \"hola\"</code>?",
    options: [
      "char *s reserva memoria en el heap automáticamente mientras que char s[] es solo un puntero declarativo",
      "Son completamente equivalentes porque el compilador optimiza ambas formas al mismo código objeto",
      "char s[] es un puntero que puede ser reasignado, mientras que char *s es un array fijo en el stack",
      "char *s apunta a un string literal (read-only en memoria de solo lectura); char s[] crea una copia modificable en el stack"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "char *s = \"hola\": modificar *s es undefined behavior (string literal en .rodata). char s[] = \"hola\": copia en el stack, totalmente modificable. Importantísima distinción."
  },
  {
    question: "¿Qué hace el preprocesador de C cuando encuentra <code>#define MAX 100</code>?",
    options: [
      "Hace una sustitución textual: reemplaza todas las ocurrencias de MAX por 100 antes de la compilación",
      "Declara una constante con tipo verificado por el compilador equivalente a const int MAX = 100",
      "Define una función inline que el compilador expande en cada punto de uso del identificador",
      "Crea una variable global de solo lectura en el segmento .rodata del binario compilado"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "#define es una macro del preprocesador. Sustitución textual pura, sin verificación de tipos. #define MAX(a,b) ((a)>(b)?(a):(b)) es una macro función. Preferir const int o enum para constantes."
  },
  {
    question: "¿Para qué sirven los guardas de inclusión (<code>#ifndef</code>)?",
    options: [
      "Permiten compilar código condicionalmente según la arquitectura o el sistema operativo destino",
      "Sirven como directivas de documentación que el compilador procesa para generar advertencias",
      "Evitan que un archivo header sea incluido más de una vez en la misma unidad de compilación",
      "Protegen el código fuente contra inclusiones de archivos con contenido potencialmente dañino"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "#ifndef MI_HEADER_H #define MI_HEADER_H ... #endif. Sin esto, incluir el mismo header dos veces causaría errores de redefinición. #pragma once es la alternativa moderna (no estándar pero universal)."
  },
  {
    question: "¿Qué es el tipo <code>void*</code>?",
    options: [
      "Un puntero nulo que representa la ausencia de dirección válida de cualquier tipo en memoria",
      "Un tipo de retorno especial que indica que la función libera recursos antes de volver al llamador",
      "Un puntero sin tipo que almacena internamente la información del tipo original para el cast",
      "Un puntero genérico que puede apuntar a cualquier tipo; requiere cast explícito antes de dereferenciarlo"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "void* es el tipo de puntero genérico en C. malloc retorna void*. Para usarlo: int *p = (int*)malloc(sizeof(int)). En C (no C++), el cast es implícito desde void*."
  },
  {
    question: "¿Qué es el operador <code>-></code> en C?",
    options: [
      "Accede a un miembro de una estructura a través de un puntero: p->campo es (*p).campo",
      "Asigna al puntero la dirección de retorno de la función especificada en el operando derecho",
      "Calcula la diferencia en bytes entre dos punteros del mismo tipo dentro del mismo array",
      "Compara la dirección almacenada en el puntero con la dirección del operando del lado derecho"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "struct Persona *p = ...; p->nombre es equivalente a (*p).nombre. El operador -> desreferencia y accede al campo en un solo paso."
  },
  {
    question: "¿Cómo se declara una función en C que no retorna valor?",
    options: [
      "return nombreFuncion()",
      "empty nombreFuncion()",
      "void nombreFuncion()",
      "null nombreFuncion()"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "void indica que la función no retorna un valor útil. void f(void) indica que tampoco recibe parámetros (en C, f() sin void puede aceptar cualquier argumento)."
  },
  {
    question: "¿Qué hace <code>scanf(\"%d\", &x)</code>?",
    options: [
      "Busca el valor entero en el buffer de entrada sin consumirlo",
      "Imprime en stdout el valor de x usando el formato por defecto",
      "Lee un entero de la entrada estándar y lo almacena en x",
      "Lee desde stdin una línea completa y la retorna en buffer"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "scanf lee datos formateados. El & es necesario porque scanf necesita la dirección de x para modificarlo. scanf con strings: scanf(\"%s\", str) sin &, porque str ya es un puntero."
  },
  {
    question: "¿Cuál es la diferencia entre <code>int</code>, <code>short</code>, <code>long</code> y <code>long long</code>?",
    options: [
      "Difieren en el tamaño garantizado: short ≥16 bits, int ≥16 bits (usualmente 32), long ≥32 bits, long long ≥64 bits. Los tamaños exactos dependen de la plataforma",
      "Solo difieren en el rango de valores que admiten, siendo todos del mismo tamaño en bytes en cualquier arquitectura moderna de 64 bits",
      "Son idénticos en tamaño en todas las plataformas y solo sirven para documentar la intención del programador sobre el rango esperado",
      "Solo difieren en el nombre que el programador usa para expresar la semántica del valor; el compilador los trata como sinónimos"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "El estándar C garantiza mínimos. Para tamaños fijos usar <stdint.h>: int32_t, int64_t, uint8_t, etc. Preferir estos en código portable."
  },
  {
    question: "¿Qué es el tipo <code>char</code> en C?",
    options: [
      "Un tipo de exactamente 2 bytes en todas las plataformas que usa codificación UTF-16 para almacenar caracteres",
      "Un entero sin signo de 8 bits que siempre tiene el rango 0-255 en todas las implementaciones del estándar C",
      "Un tipo exclusivo para caracteres del conjunto ASCII de 7 bits; no puede representar valores superiores a 127",
      "Un tipo que almacena un carácter (1 byte = 8 bits); puede ser signed o unsigned según la implementación; mejor especificar signed char o unsigned char explícitamente"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "char ocupa 1 byte. Puede ser signed (-128..127) o unsigned (0..255) según el compilador/plataforma. Para valor numérico explícito: usar signed char o unsigned char. Para caracteres: char es suficiente."
  },
  {
    question: "¿Qué hace <code>calloc(n, size)</code>?",
    options: [
      "Libera el bloque de memoria asignado previamente y retorna el número de bytes liberados al heap",
      "Asigna memoria para n elementos de size bytes cada uno e inicializa todo a cero, a diferencia de malloc que deja la memoria sin inicializar",
      "Es equivalente a malloc pero con la firma invertida: primero el tamaño unitario y luego el número de elementos",
      "Reasigna un bloque de memoria existente al nuevo tamaño y copia los datos originales al nuevo bloque"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "calloc(10, sizeof(int)) = malloc(10*sizeof(int)) + memset a 0. Útil cuando necesitas asegurar que la memoria está inicializada a cero. Puede ser más lento que malloc+memset."
  },
  {
    question: "¿Qué es <code>NULL</code> en C?",
    options: [
      "Una macro que representa el valor de un puntero nulo; garantiza que no apunta a ninguna dirección de memoria válida; típicamente definido como (void*)0 o 0",
      "El entero cero representado como tipo long que el compilador convierte implícitamente al tipo del puntero",
      "Una función especial del runtime de C que verifica si un puntero apunta a una dirección de memoria válida",
      "El valor de un char vacío que el compilador trata como falso en expresiones booleanas de condicionales"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "NULL está definido en <stddef.h> y otros headers. Siempre inicializar punteros a NULL: int *p = NULL. Verificar antes de usar: if(p != NULL). Derreferenciar NULL es undefined behavior (generalmente segfault)."
  },
  {
    question: "¿Qué hace <code>realloc(ptr, nuevo_tamaño)</code>?",
    options: [
      "Libera el bloque original y crea siempre un bloque nuevo en una dirección diferente con el tamaño solicitado",
      "Crea siempre un bloque completamente nuevo con el tamaño indicado sin liberar el bloque original apuntado por ptr",
      "Redimensiona el bloque de memoria apuntado por ptr al nuevo tamaño; puede mover el bloque a una nueva dirección; retorna el nuevo puntero (o NULL si falla)",
      "Duplica el tamaño del bloque y copia el contenido original dejando los bytes adicionales sin inicializar"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "IMPORTANTE: asignar el resultado de realloc a una variable temporal. Si falla y retorna NULL, el bloque original sigue válido. ptr = realloc(ptr, n) pierde el puntero original si realloc falla."
  },
  {
    question: "¿Cuántos parámetros puede tener main en C?",
    options: [
      "Solo con int argc que contiene el número de argumentos; el array argv no forma parte de la firma",
      "1 (sin argumentos) o 3: main(int argc, char *argv[], char *envp[]); la forma estándar es main(int argc, char *argv[])",
      "Exclusivamente void ya que el estándar prohíbe cualquier otro tipo de parámetro en la función main",
      "Ilimitados mediante el operador variádico ... que permite acceder a cada argumento con va_arg"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "argc: número de argumentos. argv: array de strings (argv[0] es el nombre del programa). Forma completa: int main(int argc, char *argv[]). La forma int main(void) es para sin argumentos."
  },
  {
    question: "¿Qué hace <code>return 0</code> en main?",
    options: [
      "Indica al SO que el programa terminó exitosamente (0 = éxito, valores distintos de 0 = error)",
      "Es solo una convención no vinculante que el shell puede ignorar dependiendo de su configuración",
      "Es obligatorio en C99+ porque el estándar eliminó el retorno implícito de tipo int de las funciones",
      "Retorna el valor nulo al proceso padre indicando que la función main no produjo resultado útil"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "Por convención UNIX: 0 = éxito. C99 añadió que main puede omitir return 0 (retorna 0 implícitamente). EXIT_SUCCESS y EXIT_FAILURE en <stdlib.h> son las constantes estándar."
  },
  {
    question: "¿Qué es un puntero a función en C?",
    options: [
      "Un tipo de callback exclusivo de C++ que no tiene equivalente directo en el estándar C89/C90",
      "Una variable que almacena la dirección de una función, permitiendo llamarla indirectamente",
      "Un tipo de función especial que el compilador resuelve en tiempo de compilación mediante inlining",
      "Una macro de función que expande el código en el punto de llamada para evitar overhead de llamada"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "int (*pf)(int, int) = &suma; pf(3, 4) llama a suma(3,4). Sintaxis: tipo_retorno (*nombre_puntero)(tipos_parametros). Esencial para callbacks, tablas de dispatch, implementar polimorfismo en C."
  },
  {
    question: "¿Qué es el preprocesador <code>#ifdef</code>?",
    options: [
      "Un mecanismo de guard que protege secciones del código contra accesos concurrentes en tiempo real",
      "Una condición evaluada en tiempo de ejecución para seleccionar entre distintas rutas del programa",
      "Compilación condicional: el código entre #ifdef y #endif solo se compila si el símbolo está definido",
      "Un tipo especial de #define que comprueba si el identificador es una macro válida antes de usarlo"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "#ifdef DEBUG printf(\"debug: %d\\n\", x); #endif incluye la línea solo cuando se compila con -DDEBUG. Útil para código de depuración, código de plataforma específica."
  },
  {
    question: "¿Qué hace la directiva <code>#include</code>?",
    options: [
      "Importa una librería compilada en formato .a o .so y la enlaza estáticamente al binario final",
      "El preprocesador inserta el contenido del archivo especificado en ese punto del código fuente",
      "Importa un namespace externo y expone todos sus símbolos en el scope de la unidad de compilación",
      "Enlaza un objeto externo al símbolo declarado permitiendo su uso sin definición en el archivo actual"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "#include <stdio.h> busca en los directorios del sistema. #include \"mi_archivo.h\" busca en el directorio actual. El preprocesador literalmente copia el contenido del header."
  },
  {
    question: "¿Qué es la recursión en C y cuál es su limitación principal?",
    options: [
      "No tiene limitaciones de profundidad porque el compilador siempre convierte la recursión en un bucle",
      "Es equivalente a la iteración en rendimiento porque GCC siempre optimiza las llamadas recursivas finales",
      "No existe como concepto formal en C porque las funciones no pueden referenciarse a sí mismas en su cuerpo",
      "Una función que se llama a sí misma; limitada por el tamaño del stack (stack overflow si recursa demasiado profundo)"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "Cada llamada recursiva usa espacio en el stack (frame de activación). Con N=100000, la recursión puede causar stack overflow. Preferir iteración para recursión profunda, o usar tail recursion optimization."
  },
  {
    question: "¿Qué tipo de dato se usa para almacenar caracteres en C?",
    options: [
      "text",
      "char",
      "byte",
      "word"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "char almacena un único carácter (1 byte). Los strings en C son arrays de char terminados en '\\0'. No hay tipo string nativo en C."
  },
  {
    question: "¿Qué hace <code>memset(ptr, valor, n)</code>?",
    options: [
      "Mueve n bytes desde ptr hacia una dirección calculada sumando el valor al puntero base del bloque",
      "Compara los primeros n bytes del bloque apuntado por ptr con el valor byte a byte y retorna 0 si son iguales",
      "Establece los primeros n bytes del bloque apuntado por ptr al valor dado (interpretado como unsigned char)",
      "Copia n bytes desde el bloque apuntado por ptr hacia un nuevo destino reservado en el segmento .bss"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "memset(arr, 0, sizeof(arr)) inicializa a cero. memset(str, 'A', strlen(str)) llena de 'A'. Solo usa valores 0 o -1 (0xFF) para tipos no-char, ya que opera byte a byte."
  },
  {
    question: "¿Qué hace el modificador <code>const</code> aplicado a un puntero?",
    options: [
      "Hace que el puntero sea nulo de forma permanente, impidiendo que sea reasignado durante su tiempo de vida",
      "Inicializa el puntero a NULL y garantiza que el compilador emita un error si se intenta modificar su valor",
      "Hace que el puntero apunte a una región estática del proceso, preservando el valor entre llamadas a funciones",
      "Dependiendo de la posición: const int *p (apuntado es inmutable) vs int * const p (puntero es inmutable) vs const int * const p (ambos inmutables)"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "const int *p: puedes cambiar p pero no *p. int *const p: puedes cambiar *p pero no p. Leer de derecha a izquierda: 'p es un puntero constante a int constante'."
  },
  {
    question: "¿Cuál es el formato correcto para imprimir un puntero con printf?",
    options: [
      "%d",
      "%x",
      "%u",
      "%p"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "%p imprime el valor de un puntero en hexadecimal. Siempre hacer cast a void*: printf(\"%p\", (void*)ptr). %x puede usarlo pero no es portable."
  },
  {
    question: "¿Qué diferencia hay entre un array global y uno local en C?",
    options: [
      "Los arrays locales siempre son más rápidos porque el compilador los almacena en registros de la CPU en vez del stack del proceso",
      "Global: almacenado en .data/.bss (inicializado a 0 automáticamente), persiste durante toda la ejecución. Local: almacenado en el stack, sin inicializar por defecto, destruido al salir de la función",
      "Los arrays globales son más seguros porque el sistema operativo les asigna permisos de solo lectura al cargar el proceso",
      "No existe diferencia práctica entre ambos tipos porque el compilador con -O2 los trata de manera idéntica en memoria"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "Variables globales y estáticas: inicializadas a 0 por el runtime. Variables locales: sin inicializar (basura). Stack tiene tamaño limitado; para arrays grandes usar static o malloc."
  },
  {
    question: "¿Qué es el stack overflow y cuándo ocurre en C?",
    options: [
      "Un tipo especial de buffer overflow que corrompe el puntero de retorno almacenado al inicio del frame",
      "Ocurre cuando el stack se agota: recursión demasiado profunda, arrays locales muy grandes, o llamadas a funciones muy anidadas",
      "Un error del enlazador que aparece cuando dos módulos definen el mismo símbolo con tamaños distintos",
      "Un error detectado en tiempo de compilación cuando el compilador calcula que la función excede el límite"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "El stack es limitado (típicamente 1-8 MB). int arr[1000000] en una función local puede causar stack overflow. Solución: usar malloc/calloc para datos grandes, o aumentar el límite del stack."
  },
  {
    question: "¿Qué es el comportamiento indefinido (undefined behavior) en C?",
    options: [
      "Un error de runtime que el sistema operativo detecta y reporta al programador mediante una señal SIGABRT",
      "Un error de compilación que los compiladores modernos detectan con análisis de flujo estático avanzado",
      "Comportamiento no especificado por el estándar C; el compilador puede hacer cualquier cosa, incluyendo optimizaciones que asumen que UB no ocurre",
      "Una advertencia del compilador que indica que el código puede producir resultados diferentes según la plataforma"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "UB: derreferenciar NULL, desbordamiento de entero con signo, acceder fuera de los límites de un array. El compilador puede eliminar código que 'no puede ejecutarse' si asume no hay UB, causando bugs sutiles."
  },
  {
    question: "¿Qué es un buffer overflow y por qué es peligroso?",
    options: [
      "Un error de compilación que los analizadores estáticos detectan cuando el índice del array supera el tamaño declarado",
      "Un tipo especial de memory leak producido cuando se escribe en una zona del heap ya liberada provocando corrupción",
      "Llenar un buffer exactamente hasta su capacidad máxima declarada sin sobrepasar el límite establecido por el programador",
      "Escribir más datos que el tamaño de un buffer, corrompiendo memoria adyacente; puede sobrescribir la dirección de retorno y permitir ejecución de código arbitrario (exploit)"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "El ataque clásico de seguridad informática. gets() fue eliminado del estándar C11 por esta razón. Usar fgets(), snprintf(), strncat(). Stack canaries y ASLR son defensas comunes."
  },
  {
    question: "¿Qué es un puntero colgante (dangling pointer)?",
    options: [
      "Un puntero doble que se usa para implementar matrices dinámicas y listas de strings en memoria",
      "Un puntero que apunta a memoria que ya fue liberada o a un objeto que ya no existe (variable local fuera de scope)",
      "Un puntero cuyo valor ha sido establecido explícitamente a NULL para indicar que no es válido",
      "Un puntero que nunca fue inicializado y cuyo valor es basura del stack en el momento de la declaración"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "free(ptr); *ptr = 5; → UB (dangling pointer). Función retorna &var_local; → UB. Tras free(): ptr = NULL para detectar usos accidentales. Valgrind detecta usos de dangling pointers."
  },
  {
    question: "¿Qué es un memory leak?",
    options: [
      "Memoria RAM que el SO marca como corrupta cuando el proceso escribe fuera de los límites del heap",
      "Un tipo de buffer overflow que ocurre cuando malloc asigna menos bytes de los que el programa necesita",
      "Solo sucede en programas de larga ejecución; los programas cortos siempre liberan toda su memoria al terminar",
      "Memoria dinámica asignada con malloc/calloc que no se libera nunca con free; el proceso acumula memoria hasta agotar el sistema"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "El leak más común: malloc en un bucle sin free correspondiente. Valgrind, AddressSanitizer (-fsanitize=address) detectan leaks. En C moderno, considerar patrones de ownership claros."
  },
  {
    question: "¿Qué es la aritmética de punteros en C?",
    options: [
      "Multiplicar la dirección almacenada en un puntero por un factor de escala para indexar arrays multidimensionales",
      "Solo las operaciones de incremento y decremento; la suma y resta de punteros no está definida en el estándar",
      "Sumar las direcciones numéricas directamente como enteros para calcular offsets de memoria en bytes",
      "Operaciones sobre punteros que escalan automáticamente por el tamaño del tipo: ptr+1 avanza sizeof(*ptr) bytes, no 1 byte"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "int *p; p+1 apunta al siguiente int (4 bytes después). ptr2-ptr1 da el número de elementos entre ellos (no bytes). Válida solo dentro del mismo array o un elemento después."
  },
  {
    question: "¿Cuál es la relación entre arrays y punteros en C?",
    options: [
      "El nombre de un array decae a un puntero al primer elemento en la mayoría de contextos; arr[i] == *(arr+i). Sin embargo, sizeof(arr) != sizeof(puntero)",
      "Los punteros son un subconjunto especial de arrays con tamaño fijo de 1 elemento y acceso optimizado por el compilador",
      "Son tipos completamente distintos sin ninguna relación; los punteros nunca pueden indexarse con corchetes como los arrays",
      "Son exactamente iguales en todas las situaciones; el compilador genera el mismo código objeto para ambas declaraciones"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "arr[2] == *(arr+2). Pero: sizeof(int arr[10]) = 40, sizeof(int *p) = 8 (en 64-bit). Al pasar un array a función, se convierte a puntero (se pierde la dimensión)."
  },
  {
    question: "¿Qué son los punteros dobles (<code>int **p</code>)?",
    options: [
      "Un puntero que apunta a otro puntero; usado para arrays de strings, matrices dinámicas, y para modificar punteros dentro de funciones",
      "Un puntero que apunta directamente a un array bidimensional y puede indexarse con dos pares de corchetes",
      "Un tipo de referencia similar a C++ que el compilador implementa automáticamente con doble indirección",
      "Dos punteros independientes que apuntan al mismo objeto y que se declaran en la misma sentencia del programa"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "char **argv es un array de strings (puntero a puntero a char). int **matriz para matrices 2D dinámicas. Para modificar un puntero en una función: void f(int **pp) { *pp = malloc(...); }"
  },
  {
    question: "¿Qué hace <code>typedef struct</code> en C?",
    options: [
      "Crea una clase con herencia y encapsulamiento similar a C++ usando un mecanismo de vtables en la estructura",
      "Define una estructura anónima cuyos campos son accesibles directamente sin especificar el nombre intermedio",
      "Permite crear un alias de tipo para una estructura, evitando usar 'struct' cada vez que se declara una variable",
      "Inicializa una estructura con los valores por defecto especificados en la declaración del tipo compuesto"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "typedef struct Punto { int x, y; } Punto; Ahora se puede usar Punto p en lugar de struct Punto p. En C++ esto es automático, en C (antes de C11) requiere typedef explícito."
  },
  {
    question: "¿Qué es una unión (union) en C?",
    options: [
      "Una estructura donde todos los miembros comparten la misma posición de memoria; el tamaño es el del miembro más grande; solo un miembro es válido a la vez",
      "La combinación de dos structs que comparten los campos comunes y extienden los campos específicos de cada tipo",
      "Una subclase de struct que hereda todos los campos del struct padre añadiendo campos adicionales propios",
      "Un tipo de array de bytes de longitud variable donde cada campo ocupa una posición consecutiva en memoria"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "union { int i; float f; } u; u.i y u.f ocupan la misma memoria. Útil para parsear protocolos, conservar memoria cuando solo se usa un campo a la vez. Leer un miembro diferente al escrito es UB (con excepciones)."
  },
  {
    question: "¿Qué es el modificador <code>static</code> en una variable local?",
    options: [
      "La convierte en una variable de solo lectura que el compilador coloca en el segmento .rodata del binario",
      "La hace privada al módulo, impidiendo que otros archivos del proyecto puedan acceder a su valor directamente",
      "La variable se almacena en .data/.bss en lugar del stack: persiste entre llamadas a la función pero solo es visible en ella",
      "Crea una copia independiente de la variable en cada llamada, preservando el historial de valores anteriores"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "static int contador = 0; en una función: contador persiste entre llamadas. static en variable global: limita la visibilidad al archivo (file scope). static en función: la función no es visible en otros archivos."
  },
  {
    question: "¿Qué es el modificador <code>extern</code> en C?",
    options: [
      "Llama a código de una librería dinámica externa que se carga al inicio de la ejecución del proceso",
      "Declara que una variable o función está definida en otra unidad de compilación; le dice al enlazador que la busque",
      "Hace que la variable sea visible globalmente en todos los archivos del proyecto sin necesidad de declararla",
      "Es sinónimo de static en el contexto de variables globales, pero aplica además a las funciones del módulo"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "extern int x; en archivo B declara que x está definida en otro archivo (archivo A: int x = 5;). Necesario para variables globales compartidas entre archivos. Para funciones no es necesario (son extern por defecto)."
  },
  {
    question: "¿Qué es el paso de argumentos por valor vs por puntero en C?",
    options: [
      "Por valor: se copia el argumento (cambios no afectan al original). Por puntero: se copia la dirección (permite modificar el original desreferenciando)",
      "El paso por puntero es más lento porque requiere una desreferencia adicional y rompe la predicción de ramas",
      "C solo pasa argumentos por valor; el paso por puntero no existe y los compiladores lo rechazan con un error",
      "El paso por valor solo aplica a tipos primitivos; los structs y arrays siempre se pasan automáticamente por referencia"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "C siempre pasa por valor. Para simular paso por referencia: pasar &var y en la función: *param = nuevo_valor. Esto es lo que hacen scanf y funciones como swap(int *a, int *b)."
  },
  {
    question: "¿Qué hace <code>sprintf</code>?",
    options: [
      "Es idéntico a printf pero actúa sobre el descriptor stderr en lugar de stdout para mensajes de diagnóstico",
      "Lee datos formateados desde un buffer de caracteres en lugar de stdin usando los mismos especificadores",
      "Escribe una cadena formateada en un buffer de caracteres en lugar de en stdout; seguridad: snprintf es la alternativa segura con límite de tamaño",
      "Imprime en stderr con buffering desactivado para garantizar que los mensajes de error aparezcan inmediatamente"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "sprintf(buf, \"%d-%s\", num, str). Peligroso si buf es pequeño. snprintf(buf, sizeof(buf), ...) limita la escritura. Esencial para construir strings dinámicamente en C."
  },
  {
    question: "¿Qué hace el calificador <code>volatile</code> en C?",
    options: [
      "Hace la variable mutable en un contexto donde normalmente sería constante, permitiendo modificaciones en tiempo real",
      "Indica que la variable puede cambiar externamente (hardware, otro hilo, señal); previene que el compilador la cachee en un registro o elimine accesos 'redundantes'",
      "Está obsoleto en los estándares C moderno y su uso genera advertencias que el compilador trata como errores",
      "Hace que la variable se almacene en un registro de la CPU para acceso más rápido en bucles críticos de rendimiento"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "volatile int *puerto = (int*)0x4000; El compilador lee/escribe memoria cada vez, sin optimizar. Esencial en drivers de hardware y código de señales. No garantiza atomicidad (para eso: _Atomic en C11)."
  },
  {
    question: "¿Cuál es la diferencia entre <code>fgets</code> y <code>gets</code>?",
    options: [
      "fgets no lee el carácter de nueva línea y lo descarta, mientras que gets lo incluye en el buffer destino",
      "Solo difieren en el nombre; ambas tienen el mismo comportamiento interno y el mismo nivel de seguridad",
      "fgets(buf, n, stdin) limita la lectura a n-1 caracteres (seguro); gets() no tiene límite y fue eliminada en C11 por ser un vector de buffer overflow",
      "gets es la función más moderna introducida en C99 con validación de límites que reemplaza a la antigua fgets"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "gets() es la raíz de incontables vulnerabilidades de seguridad. Fue deprecada en C99, eliminada en C11. Siempre usar fgets(). Para leer líneas completas sin newline: str[strcspn(str, \"\\n\")] = '\\0'."
  },
  {
    question: "¿Qué es el tipo <code>FILE*</code> en C?",
    options: [
      "Un tipo definido por el usuario que encapsula el manejo de archivos usando herencia de structs en C",
      "Un tipo válido solo para archivos de texto; para archivos binarios se debe usar el tipo BFILE* de la misma cabecera",
      "Un puntero opaco a una estructura que representa un archivo abierto; usado con fopen, fclose, fprintf, fscanf, fgets, fread, fwrite",
      "Un descriptor de archivo entero como el que usan las llamadas al sistema POSIX open(), read() y write()"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "FILE *f = fopen(\"archivo.txt\", \"r\"); // \"r\",\"w\",\"a\",\"rb\",\"wb\" fgets(buf, n, f); fclose(f). Siempre verificar que fopen no retornó NULL. Siempre cerrar con fclose."
  },
  {
    question: "¿Qué es el linker (enlazador) y qué hace?",
    options: [
      "Un tipo de compilador que traduce el código fuente directamente a lenguaje máquina sin generar archivos intermedios",
      "Combina múltiples archivos objeto (.o) y librerías para crear el ejecutable final; resuelve referencias a símbolos externos (funciones y variables declaradas como extern)",
      "Un optimizador de código que analiza el flujo de datos completo entre funciones para eliminar instrucciones redundantes",
      "Un preprocesador especial que resuelve las macros y directivas #include antes de que el compilador lea el código"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "Compilación: .c → .o (compilador). Enlazado: .o + .a/.so → ejecutable (linker). Errores de linker: undefined reference (símbolo no encontrado), multiple definition (símbolo duplicado)."
  },
  {
    question: "¿Qué es una función de comparación para <code>qsort</code>?",
    options: [
      "Una función int cmp(const void *a, const void *b) que retorna <0, 0, o >0 según el orden de a respecto a b",
      "Una función de hash que mapea cada elemento a un índice para organizar el array antes de la búsqueda binaria",
      "Una función booleana que retorna 1 si el primer argumento debe preceder al segundo en el orden final",
      "Un tipo de puntero a función especial que el compilador verifica contra la firma de qsort en tiempo de enlazado"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "int cmp_int(const void *a, const void *b) { return (*(int*)a - *(int*)b); } qsort(arr, n, sizeof(int), cmp_int). Cuidado con overflow en la resta para enteros grandes; usar comparación explícita."
  },
  {
    question: "¿Qué hace <code>bsearch</code>?",
    options: [
      "Una búsqueda lineal que recorre el array completo comparando cada elemento con la clave buscada",
      "Búsqueda binaria en un array ordenado; usa la misma firma de comparación que qsort; retorna puntero al elemento o NULL si no se encuentra",
      "Una búsqueda recursiva que divide automáticamente el array sin requerir que esté previamente ordenado",
      "Busca en cadenas de caracteres la primera ocurrencia de un patrón usando comparación byte a byte"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "void *r = bsearch(&clave, arr, n, sizeof(int), cmp); if(r) printf(\"Encontrado\"); El array DEBE estar ordenado. Complemento natural de qsort."
  },
  {
    question: "¿Qué es el bit field en una struct de C?",
    options: [
      "Un campo de bits de ancho arbitrario que el compilador almacena en un registro de CPU separado para acceso atómico",
      "Un tipo de int especial de ancho fijo que el compilador garantiza que ocupa exactamente los bits especificados",
      "Un mecanismo exclusivo para flags booleanos de un bit que no puede usarse para campos de más de un bit de ancho",
      "Un campo de una struct que especifica cuántos bits ocupa: struct { unsigned int activo: 1; unsigned int nivel: 4; } permite empaquetar múltiples valores en una palabra"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "Los bit fields permiten definir structs compactas para protocolos de hardware. El orden y empaquetado dependen de la implementación. Útil para parsear cabeceras de red o registros de hardware."
  },
  {
    question: "¿Qué hace <code>longjmp</code> y <code>setjmp</code>?",
    options: [
      "Saltos incondicionales equivalentes a goto avanzados que el compilador traduce a instrucciones JMP del procesador",
      "Han sido marcados como obsoletos desde el estándar C99 y su uso genera advertencias de compilación en GCC",
      "Solo sirven para implementar la recursión de cola sin consumir frames del stack en funciones profundamente recursivas",
      "setjmp guarda el contexto de ejecución; longjmp restaura ese contexto desde cualquier punto de la pila de llamadas, implementando manejo de excepciones no estructurado"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "setjmp es comparable a try, longjmp es comparable a throw. Peligros: destructores no se llaman (C no los tiene), recursos no se liberan. Útil para recovery de errores en sistemas embebidos."
  },
  {
    question: "¿Cuál es la diferencia entre <code>printf</code> y <code>fprintf</code>?",
    options: [
      "printf solo puede imprimir enteros y floats; para strings es necesario usar la variante fprintf con FILE*",
      "fprintf escribe a un FILE* especificado (puede ser stdout, stderr, o un archivo); printf es equivalente a fprintf(stdout, ...)",
      "fprintf es más lento porque realiza operaciones de bloqueo sobre el descriptor de archivo en cada llamada",
      "Son exactamente iguales en comportamiento; la única diferencia es el nombre que el compilador usa para resolverlos"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "fprintf(stderr, \"Error: %s\\n\", msg) escribe a stderr. fprintf(archivo, ...) escribe al archivo. printf siempre va a stdout. Para mensajes de error, siempre usar stderr."
  },
  {
    question: "¿Qué hace el modificador <code>register</code> en C?",
    options: [
      "Es sinónimo de static en variables locales, indicando que el valor persiste entre las llamadas sucesivas a la función",
      "Una pista al compilador para almacenar la variable en un registro de CPU (acceso más rápido); en C moderno es ignorado por los compiladores modernos que optimizan automáticamente",
      "Hace que la variable sea volatile, impidiendo que el compilador la cachee en un registro aunque no cambie externamente",
      "Reserva un registro dedicado del hardware para la variable, garantizando acceso en exactamente un ciclo de reloj"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "register int i fue útil en C antiguo. Los compiladores modernos ignoran esta pista y hacen mejor trabajo de asignación de registros solos. En C11, se eliminó la restricción de no tomar su dirección."
  },
  {
    question: "¿Cuáles son los tipos de almacenamiento (storage class) en C?",
    options: [
      "Solo auto y static; las demás clases de almacenamiento forman parte de extensiones del compilador no estándar",
      "Son únicamente convenciones de estilo sin efecto real en el binario generado; el compilador las ignora completamente",
      "Solo static y extern; auto y register fueron eliminados del estándar en C11 por considerarse obsoletos",
      "auto (default para locales, stack), static (persistente, .data/.bss), extern (definición en otro archivo), register (sugerencia de registro)"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "auto es el default y rara vez se escribe explícitamente. static tiene dos significados (local persistente vs file scope). extern para variables compartidas entre archivos."
  },
  {
    question: "¿Qué es la diferencia entre declaración y definición en C?",
    options: [
      "Solo aplica a variables globales; las funciones en C no tienen esta distinción por ser siempre externas",
      "Declaración: informa al compilador sobre el tipo/firma sin reservar memoria (extern int x, prototipos de función). Definición: reserva memoria e implementa",
      "Son sinónimos que el compilador trata de manera idéntica; la distinción es puramente conceptual para el programador",
      "Solo aplica a funciones; las variables siempre se declaran y definen en el mismo punto de su aparición en el código"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "int x; // declaración y definición. extern int x; // solo declaración. int f(); // declaración (prototipo). int f() { ... } // definición. Cada símbolo puede declararse múltiples veces pero solo definirse una vez."
  },
  {
    question: "¿Qué es el operador de coma en C?",
    options: [
      "Evalúa dos expresiones de izquierda a derecha y retorna el valor de la expresión derecha; raramente usado fuera de bucles for",
      "Un operador de bits que aplica la máscara del operando derecho sobre los bits del operando izquierdo",
      "El separador de argumentos en llamadas a función, sin efecto en el orden de evaluación de los parámetros",
      "Equivalente al punto y coma que separa sentencias, evaluando ambos lados pero sin crear un punto de secuencia"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "for(int i=0, j=10; i<j; i++, j--): el i++, j-- usa el operador coma. También: x = (a=5, b=6, a+b) asigna 11 a x. Código confuso; usar con cuidado."
  },
  {
    question: "¿Qué es un array de strings en C y cómo se declara?",
    options: [
      "char arr = {\"hola\"} para un carácter inicializado con el primer byte del literal",
      "string arr[] con el tipo string que el preprocesador expande al tipo char automáticamente",
      "string[] arr con la sintaxis al estilo de Java que GCC acepta como extensión válida",
      "char *arr[] = {\"hola\", \"mundo\"} o char arr[][20] = {\"hola\", \"mundo\"}"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "char *arr[] de punteros a string literals (no modificables). char arr[][20] de arrays de chars modificables pero desperdicia espacio. Para argv: char *argv[] es correcto."
  },
  {
    question: "¿Qué hace <code>memmove</code> vs <code>memcpy</code>?",
    options: [
      "memmove está obsoleta desde C11 y el compilador la reemplaza automáticamente con memcpy al optimizar",
      "Son idénticas en comportamiento; el compilador elige cuál usar internamente según el tamaño del bloque",
      "memcpy es más segura porque verifica los límites de los buffers y aborta si detecta solapamiento de regiones",
      "memcpy requiere que origen y destino no se solapen; memmove maneja correctamente regiones solapadas pero puede ser más lento"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "Si src y dst se solapan y usas memcpy: undefined behavior. memmove garantiza corrección incluso con solapamiento. Para caso general o dudoso: siempre usar memmove."
  },
  {
    question: "¿Qué es la notación de array vs puntero en parámetros de función?",
    options: [
      "arr[] preserva el tamaño del array dentro de la función, a diferencia de int* que solo guarda la dirección",
      "En parámetros de función, int arr[] y int *arr son exactamente equivalentes; el array decae a puntero. El tamaño se pierde y debe pasarse como parámetro adicional",
      "Son tipos completamente distintos en parámetros: arr[] reserva espacio en el stack mientras que *arr no lo hace",
      "*arr es más eficiente porque evita la conversión implícita que el compilador hace al recibir un array como parámetro"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "void f(int arr[], int n) == void f(int *arr, int n). El n es necesario porque sizeof(arr) dentro de f daría sizeof(int*), no el tamaño del array original."
  },
  {
    question: "¿Qué hace <code>strtol</code> vs <code>atoi</code>?",
    options: [
      "strtol solo convierte cadenas a long; para int se debe usar la función strtoi que tiene la misma interfaz",
      "Son funcionalmente iguales pero atoi es más rápido al no verificar errores ni actualizar el puntero endptr",
      "atoi es la función más moderna introducida en C11 con validación de rango y reporte de errores integrado",
      "strtol es más robusto: maneja bases (decimal, hex, octal), detecta desbordamientos, indica dónde terminó la conversión y reporta errores via errno"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "atoi(\"123abc\") retorna 123 silenciosamente. strtol(\"123abc\", &endptr, 10): endptr apunta a 'a', puedes verificar si toda la cadena fue convertida. Para código de producción: siempre strtol."
  },
  {
    question: "¿Qué son los campos sin nombre en una struct (<code>struct { int x; struct { int y; int z; }; }</code>)?",
    options: [
      "Anonymous members (C11): los campos y y z son accesibles directamente como s.y y s.z sin especificar el struct intermedio",
      "Esta sintaxis solo está definida en C++ y en C requiere habilitar extensiones no estándar del compilador",
      "Son una extensión no oficial del compilador GCC que el estándar C11 no reconoce como sintaxis válida",
      "Un error de sintaxis porque el estándar C prohíbe declarar structs sin nombre dentro de otros structs"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "C11 añadió anonymous structs/unions. Muy útil para crear tipos con múltiples representaciones. Antes de C11 era una extensión de GCC ampliamente usada."
  },
  {
    question: "¿Cómo funciona la alineación de memoria (alignment) en structs de C?",
    options: [
      "Solo afecta a las arquitecturas x86 de 32 bits; en x86-64 y ARM todos los campos se alinean a 1 byte",
      "Es completamente configurable con #pragma pack que permite al programador especificar el alignment exacto por campo",
      "Los campos de una struct siempre se empaquetan sin padding para maximizar el uso de la memoria disponible",
      "El compilador inserta padding entre campos para alinear cada campo a su alineación natural; struct { char a; int b; } tiene 8 bytes, no 5"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "struct { char a; int b; } → char(1) + padding(3) + int(4) = 8 bytes. Para empaquetar: __attribute__((packed)) en GCC o #pragma pack(1). El empaquetado puede degradar el rendimiento por accesos no alineados."
  },
  {
    question: "¿Qué es el undefined behavior de desbordamiento de entero con signo?",
    options: [
      "Simplemente trunca el resultado al rango del tipo, como ocurre con los enteros unsigned en todas las plataformas",
      "En C, el desbordamiento de int (signed) es undefined behavior: el compilador puede asumir que no ocurre y optimizar código basándose en esa suposición, causando bugs sutiles",
      "Tiene exactamente el mismo comportamiento bien definido que el desbordamiento unsigned: el resultado hace wrapping modular",
      "Solo ocurre en arquitecturas RISC donde la unidad aritmética no tiene instrucciones de detección de desbordamiento"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "int max = INT_MAX; max + 1; // UB. El compilador puede eliminar loops que asume que no desbordan. Para overflow seguro: usar unsigned (overflow wrapping es bien definido) o builtin_add_overflow."
  },
  {
    question: "¿Qué es el strict aliasing rule en C?",
    options: [
      "El estándar C define que un puntero de un tipo no puede alias (apuntar a) un objeto de un tipo diferente, excepto char*; el compilador usa esto para optimizaciones agresivas",
      "Una regla de nomenclatura que obliga a usar prefijos de tipo en los nombres de punteros para mejorar la legibilidad",
      "Es solo una recomendación de estilo del estándar que los compiladores pueden ignorar sin consecuencias en el código",
      "Solo aplica a punteros void que por su naturaleza completamente genérica pueden alias cualquier otro tipo sin restricciones"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "float f = 1.0; int i = *(int*)&f; // UB (strict aliasing violation). Solución: memcpy(&i, &f, sizeof(int)); // correcto. -fno-strict-aliasing en GCC deshabilita la regla (más lento)."
  },
  {
    question: "¿Qué es la diferencia entre <code>restrict</code> keyword y su impacto en optimización?",
    options: [
      "Similar a const, impide que el valor apuntado sea modificado por ninguna parte del programa que acceda al puntero",
      "Fue introducido exclusivamente en el estándar C11 como reemplazo de volatile para indicar acceso exclusivo a la memoria",
      "restrict en C99 indica al compilador que el puntero es el único acceso al objeto apuntado durante su scope; permite optimizaciones que serían incorrectas con aliasing",
      "Es únicamente documentación informativa para el programador; el compilador lo ignora completamente al generar código"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "memcpy tiene restrict en sus parámetros: void *memcpy(void *restrict dst, const void *restrict src, size_t n). Garantiza que dst y src no se solapan. El compilador puede vectorizar con SIMD."
  },
  {
    question: "¿Cómo funciona un hash table en C a bajo nivel?",
    options: [
      "Solo se implementa con punteros dobles porque la tabla requiere que cada bucket tenga su propio puntero independiente",
      "Es un array previamente ordenado donde se aplica búsqueda lineal con función de hash para reducir el número de comparaciones",
      "Array de buckets + función hash que mapea claves a índices + manejo de colisiones (chaining con listas enlazadas o open addressing); implementar requiere gestión manual de memoria",
      "Está completamente incluida en la librería estándar de C como parte de <search.h> junto con las funciones hsearch y hdestroy"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "No hay hash table estándar en C. Implementación: struct Bucket { clave, valor, siguiente*}; Bucket *tabla[TAMAÑO]. hash(clave) % TAMAÑO da el índice. Colisiones con encadenamiento."
  },
  {
    question: "¿Cómo implementar listas enlazadas en C?",
    options: [
      "Con arrays dinámicos que almacenan punteros a los nodos y se redimensionan automáticamente cuando la lista crece",
      "Con uniones que permiten que cada nodo de la lista almacene datos de distintos tipos en la misma región de memoria",
      "Solo con punteros dobles int** que representan tanto el nodo como su posición en la lista con un único malloc",
      "struct Nodo { int dato; struct Nodo *siguiente; }. La lista es un Nodo* al primero. Insertar al inicio: O(1). Insertar al final: O(n) o mantener puntero al último"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "Operaciones fundamentales: insertar, eliminar, buscar, invertir. Cuidado al liberar: free cada nodo. Para lista doblemente enlazada: añadir struct Nodo *anterior. Sentinela (nodo dummy) simplifica el código."
  },
  {
    question: "¿Qué es el modelo de memoria de C y las regiones de memoria?",
    options: [
      "Es idéntico al modelo de Java: el stack almacena primitivos y el heap almacena objetos con recolección automática de basura",
      "Solo existe el heap como región de memoria; tanto las variables locales como las globales se almacenan en él con diferentes permisos",
      "Stack (variables locales, frames de función), Heap (malloc), .data (globales/estáticas inicializadas), .bss (globales/estáticas sin inicializar = 0), .text (código), .rodata (constantes)",
      "Solo existen el stack y el heap como regiones reales; las secciones .data y .bss son abstracciones del linker sin reflejo real en memoria"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "Stack: LIFO, rápido, tamaño limitado. Heap: flexible, gestionado manualmente. .text y .rodata son de solo lectura. .bss no ocupa espacio en el binario (el SO lo inicializa a 0)."
  },
  {
    question: "¿Cómo funciona el casting de punteros y cuándo es seguro?",
    options: [
      "Siempre es completamente seguro porque el compilador verifica en tiempo de compilación que los tipos son totalmente compatibles",
      "El cast de punteros es seguro cuando los tipos son compatibles en alineación y representación, o cuando se convierte a char* (para acceso byte a byte); de otro modo puede violar strict aliasing",
      "Solo es seguro con void* porque únicamente ese tipo tiene garantía explícita de compatibilidad con todos los demás tipos de puntero",
      "El cast de punteros siempre produce undefined behavior porque el compilador no puede verificar ni garantizar la alineación de memoria"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "void* ↔ cualquier tipo de puntero: seguro. Reinterpretar float* como int*: violación de strict aliasing (usar memcpy). unsigned char*: puede acceder a la representación de cualquier objeto (excepción al strict aliasing)."
  },
  {
    question: "¿Qué es el address sanitizer (ASan) y cómo usarlo?",
    options: [
      "Solo debe usarse en producción porque su overhead es suficientemente mínimo como para no afectar el rendimiento del binario",
      "Un verificador estático que analiza el código fuente sin necesidad de ejecutarlo y reporta posibles errores de memoria",
      "Una herramienta de análisis de protocolos de red que detecta fugas de memoria en la comunicación entre procesos del sistema",
      "Una herramienta de detección de errores de memoria en tiempo de ejecución: buffer overflows, use-after-free, use-after-return, memory leaks; activar con -fsanitize=address en GCC/Clang"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "gcc -fsanitize=address -g programa.c. ASan instrumenta el código para detectar accesos inválidos. Overhead: ~2x en tiempo, ~2x en memoria. Invaluable durante desarrollo y testing."
  },
  {
    question: "¿Qué es Valgrind y qué tipos de errores detecta?",
    options: [
      "Una herramienta de análisis dinámico que detecta: memory leaks, use-after-free, reads de memoria no inicializada, buffer overflows, accesos inválidos",
      "Un analizador estático que examina el código fuente en tiempo de compilación sin necesidad de ejecutar el programa",
      "Un compilador alternativo que genera binarios con verificación de memoria incorporada en cada instrucción de acceso",
      "Un depurador interactivo que permite ejecutar el programa paso a paso y examinar el estado de la memoria en cada punto"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "valgrind --leak-check=full ./programa. Más lento que ASan (~20x) pero no requiere recompilación. Cachegrind (profiling de cache), Helgrind (data races en threads), DRD (más data races)."
  },
  {
    question: "¿Cómo implementar genéricos en C sin usar void*?",
    options: [
      "Con macros que generan código tipado: #define VECTOR_TYPE(T) struct { T *data; size_t len, cap; } o con _Generic (C11) para selección de función según tipo",
      "Solo mediante casting a void* y funciones de comparación que reciben punteros genéricos sin información de tipo",
      "Con typedef que crea un alias del tipo genérico y permite instanciar contenedores para cualquier tipo primitivo",
      "No es posible implementar genéricos en C; el lenguaje no tiene mecanismos de parametrización de tipos en ninguna versión"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "_Generic(x, int: f_int, float: f_float, default: f_default)(x) selecciona la función en compilación. Macros de generación de código (tipo STC library) generan funciones tipadas. No hay templates como en C++."
  },
  {
    question: "¿Qué es <code>_Static_assert</code> en C11?",
    options: [
      "Una aserción que se evalúa en tiempo de compilación; si falla, es un error de compilación con el mensaje dado",
      "Un assert dinámico que el runtime evalúa en cada ejecución y aborta el proceso si la condición es falsa",
      "Un tipo especial de macro que el preprocesador expande para insertar código de verificación en el binario",
      "Es equivalente a assert() pero con la ventaja de que puede recibir un mensaje de error personalizado al fallar"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "_Static_assert(sizeof(int) == 4, \"Se requiere int de 32 bits\"); Si sizeof(int) != 4, el compilador falla con el mensaje. Garantiza suposiciones sobre el sistema en tiempo de compilación."
  },
  {
    question: "¿Cómo funciona el modelo de concurrencia de C11 (<code>_Atomic</code>)?",
    options: [
      "C11 añadió _Atomic que garantiza operaciones atómicas sin lock para tipos básicos; __atomic_load, __atomic_store, atomic_compare_exchange_strong, etc.",
      "C no tiene ningún modelo de concurrencia; la sincronización entre hilos depende exclusivamente de llamadas al sistema operativo",
      "Requiere enlazar con una librería externa de threads porque el estándar C11 no incluye implementación propia",
      "Es solo una extensión de volatile que añade garantía de escritura atómica sin ningún ordenamiento de memoria"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "_Atomic int contador = 0; atomic_fetch_add(&contador, 1); // atómico y sin data race. Combinado con <threads.h> (también C11) para programación concurrente portable."
  },
  {
    question: "¿Qué son las señales (signals) en C POSIX?",
    options: [
      "Notificaciones asíncronas enviadas a un proceso (SIGSEGV, SIGTERM, SIGINT); signal() o sigaction() registran handlers; muy limitados en lo que pueden hacer (solo signal-safe functions)",
      "Son equivalentes a los eventos de Windows pero con una API diferente; se entregan mediante el kernel al thread principal",
      "Un tipo de excepción estructurada que el runtime de C propaga automáticamente a través del call stack hasta encontrar un handler",
      "Mensajes síncronos entre procesos que se envían a través de pipes del kernel y se reciben en un bucle de eventos dedicado"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "SIGSEGV: acceso inválido a memoria. SIGTERM: petición de terminación. SIGINT: Ctrl+C. Los handlers solo pueden llamar a funciones async-signal-safe (write(), _exit(), etc.). Evitar printf() en handlers."
  },
  {
    question: "¿Qué es el buffer de E/S de C y cómo afecta el rendimiento?",
    options: [
      "Los buffers de E/S solo causan problemas de sincronización y el estándar C recomienda explícitamente deshabilitarlos siempre",
      "El buffering solo aplica a archivos abiertos con fopen; las operaciones directas sobre stdin y stdout son siempre síncronas",
      "Solo printf tiene buffer de salida; el resto de funciones de E/S como fwrite operan sin ningún almacenamiento intermedio",
      "Las operaciones de E/S son buffereadas por defecto (reduce syscalls); fflush() vacía el buffer; stdout es buffereado por líneas si es terminal, completamente buffereado si es archivo"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "printf sin \\n puede no aparecer inmediatamente (buffer lleno o fflush). setvbuf() configura el buffer. Las tuberías (pipes) cambian el buffering de stdout a completamente buffereado, causando confusión."
  },
  {
    question: "¿Cómo funciona el preprocesador de C con macros variádicas?",
    options: [
      "#define LOG(fmt, ...) printf(fmt, __VA_ARGS__) en C99; ##__VA_ARGS__ en GCC elimina la coma cuando no hay argumentos adicionales",
      "Las macros no pueden ser variádicas en ninguna versión del estándar C; se deben usar funciones con va_list en su lugar",
      "Con funciones variádicas solo es posible usando va_arg y va_list; el preprocesador no admite argumentos variables",
      "Solo están disponibles en C11 y versiones posteriores porque C99 no incluía soporte para __VA_ARGS__ en macros"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "Macros variádicas C99: #define DEBUG(fmt, ...) fprintf(stderr, fmt, ##__VA_ARGS__). __VA_OPT__ (C23) es la forma estándar de eliminar la coma. Las macros variádicas son base de sistemas de logging en C."
  },
  {
    question: "¿Qué es el conditional expression y el sequence point en C?",
    options: [
      "Solo existen en el estándar C++11 como parte del modelo de memoria formal que ese estándar introdujo para multithreading",
      "Son exactamente el mismo concepto con nombres ligeramente diferentes según la versión del estándar C que se consulte",
      "Son solo advertencias informativas del compilador que indican posibles problemas de orden de evaluación sin consecuencias",
      "Los sequence points (antes de C11: puntos de secuencia) definen cuándo se completan los efectos secundarios; expresiones como i++ + i++ tienen comportamiento no definido"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "a[i] = i++; // UB: el orden de evaluación es indeterminado. Regla: no usar una variable más de una vez en una expresión si uno de los usos modifica la variable sin sequence point."
  },
  {
    question: "¿Cómo implementar una pila (stack) genérica en C con macros?",
    options: [
      "Usar macros de generación de código que instancian estructuras y funciones para cada tipo: DEFINE_STACK(int) genera IntStack, IntStack_push(), IntStack_pop()",
      "No es posible implementar una pila genérica en C sin usar las templates de C++ que generan código para cada tipo",
      "Con void* y callbacks de comparación que permiten almacenar cualquier tipo pero sin verificación en compilación",
      "Solo con arrays de tamaño fijo declarados en el stack, sin posibilidad de crecer dinámicamente en tiempo de ejecución"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "Las macros X-macro o las macros de generación de código permiten crear contenedores tipados. STC (Standard Template Containers for C) implementa esto. Alternativa: void* con funciones de comparación."
  },
  {
    question: "¿Qué es <code>__attribute__((noreturn))</code> y por qué es útil?",
    options: [
      "Una función cuyo tipo de retorno es void y que por convención del programador no incluye sentencia return al final",
      "Solo está disponible en GCC como extensión propietaria no estándar; Clang usa una sintaxis completamente diferente",
      "Es equivalente a declarar el tipo de retorno como void pero con semántica adicional para la optimización de ramas",
      "Indica al compilador que la función nunca retorna (exit, abort, longjmp); permite mejor análisis de flujo y elimina advertencias de 'función puede no retornar un valor'"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "void __attribute__((noreturn)) mi_exit(int code) { ... } El compilador puede optimizar el código que llama a mi_exit() asumiendo que el código posterior es inalcanzable."
  },
  {
    question: "¿Qué es un flexible array member en C99?",
    options: [
      "Un array de tamaño variable declarado en el stack cuyo tamaño se evalúa en tiempo de ejecución con n",
      "El último miembro de una struct puede ser un array sin tamaño: struct { int len; char data[]; } Permite structs de tamaño variable con un solo malloc",
      "Un VLA incorporado dentro de una struct para definir campos de tamaño dinámico en tiempo de compilación",
      "Un tipo de array bidimensional con la primera dimensión omitida para permitir paso como parámetro a funciones"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "struct Buffer { size_t len; char data[]; }; malloc(sizeof(struct Buffer) + n) asigna la struct y el array contiguo. Mejor que struct con char *data porque un único free() es suficiente."
  },
  {
    question: "¿Qué son los Variable Length Arrays (VLA) y sus controversias?",
    options: [
      "Son completamente equivalentes a malloc pero con la ventaja adicional de que el compilador optimiza el acceso al bloque",
      "Son siempre completamente seguros porque el compilador inserta verificaciones automáticas de límites en cada acceso al array",
      "Son más rápidos que malloc porque no requieren ninguna llamada al sistema y el compilador los puede asignar en registros",
      "Arrays cuyo tamaño se determina en runtime: int arr[n]; Eran obligatorios en C99, opcionales en C11; problemáticos porque el stack puede agotarse y no hay forma de detectar el fallo"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "VLAs son peligrosos: si n es grande o malicioso, el stack desborda sin error detectable. Por eso C11 los hizo opcionales. Linus Torvalds prohibió VLAs en el kernel Linux en 2018. Usar malloc con verificación."
  },
  {
    question: "¿Cómo usar pthreads para programación multihilo en C?",
    options: [
      "Solo en Linux con el kernel compilado con soporte NPTL; en otros Unix se requiere una implementación alternativa",
      "C no soporta threads de forma nativa; se debe usar un lenguaje de mayor nivel que gestione la concurrencia",
      "Solo con la cabecera C11 <threads.h> que abstrae las diferencias entre sistemas operativos en una API portátil",
      "#include <pthread.h>; pthread_create(&tid, NULL, funcion, arg); pthread_join(tid, NULL); pthread_mutex_lock/unlock para secciones críticas"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "POSIX threads (pthreads): el API de facto para threads en Unix. pthread_mutex_t, pthread_cond_t para sincronización. Compilar con -lpthread. C11 añadió <threads.h> como alternativa estándar."
  },
  {
    question: "¿Qué es el undefined behavior de acceder a un puntero después de realloc?",
    options: [
      "realloc siempre mantiene el puntero original válido y solo modifica el bloque en su posición actual en el heap",
      "El acceso al puntero original tras realloc genera solo un warning del compilador que puede ignorarse sin consecuencias",
      "Si realloc mueve el bloque, el puntero original queda inválido (dangling). El código que guarda el resultado en una variable temporal es incorrecto si realloc falla",
      "realloc nunca mueve el bloque porque el allocator siempre puede expandir el bloque en su posición actual del heap"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "int *nuevo = realloc(ptr, nuevo_tamaño); if(nuevo) ptr = nuevo; De otro modo: si realloc retorna NULL (fallo), ptr sigue siendo válido y no se pierde la referencia. Patrón correcto."
  },
  {
    question: "¿Qué son los fat pointers y cómo simulan seguridad en C?",
    options: [
      "Una extensión propietaria de GCC que amplía el tamaño del puntero a 128 bits para sistemas con mucha memoria",
      "Punteros de 128 bits que almacenan la dirección más metadatos de tipo para habilitar verificación en runtime",
      "Solo aplican a strings y slices de arrays; los punteros a structs y primitivos no necesitan metadata adicional",
      "Estructuras que combinan el puntero con metadata de seguridad (tamaño, límites); no son estándar en C pero los lenguajes seguros los usan internamente"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "C no tiene fat pointers estándar. Algunos proyectos los implementan manualmente: struct { T *ptr; size_t len; }. El lenguaje Rust tiene fat pointers nativos para slices y objetos trait."
  },
  {
    question: "¿Qué son los designated initializers en C99?",
    options: [
      "Son equivalentes a constructores de C++ que el compilador llama automáticamente al crear una instancia del tipo",
      "Inicialización mediante el nombre de la variable en lugar del nombre del campo para evitar confusión de orden",
      "Una característica exclusiva de C11 para inicializar campos de structs con verificación de tipos estricta",
      "Inicializar structs o arrays por nombre de campo o índice: struct Punto p = { .x = 1, .y = 2 }; int arr[5] = { [2] = 7, [4] = 9 }"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "Designated initializers permiten inicializar campos en cualquier orden y dejar los demás a 0. Muy útiles para structs grandes donde solo se necesitan inicializar algunos campos."
  },
  {
    question: "¿Qué es el typedef de función en C?",
    options: [
      "Un tipo especial de macro que expande la declaración de función inline en cada punto donde se usa el alias",
      "typedef int (*MiFunc)(int, int) crea un alias de tipo para el puntero a función; hace el código más legible y permite cambiar fácilmente la firma",
      "Definir una función directamente en la declaración del typedef para que pueda usarse sin prototipo previo",
      "Crear alias de funciones existentes que el compilador resuelve en tiempo de enlazado como símbolos adicionales"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "typedef void (*Callback)(void *data); Callback cb = mi_funcion; cb(datos). Más legible que void (*cb)(void *data) = mi_funcion. Esencial para sistemas de plugins y callbacks."
  },
  {
    question: "¿Cómo funciona la optimización de tail call en C?",
    options: [
      "Cuando la última operación de una función es una llamada recursiva, el compilador puede reutilizar el frame actual en lugar de crear uno nuevo, evitando stack overflow",
      "El compilador convierte toda llamada a función en código iterativo equivalente y elimina completamente el stack frame generado por la llamada sin condiciones ni requisitos de posición",
      "El estándar C garantiza que cualquier recursión profunda se traduce automáticamente a iteración cuando el compilador detecta el patrón en la fase de análisis semántico",
      "Solo se activa cuando se usa la palabra clave inline junto con la declaración de la función, indicando al compilador que expanda el cuerpo en el sitio de la llamada sin crear un frame nuevo"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "GCC optimiza tail calls con -O2. No todas las funciones recursivas son tail-recursive. int fact_tail(int n, int acc) { return n == 0 ? acc : fact_tail(n-1, n*acc); } es tail-recursive."
  },
  {
    question: "¿Qué es el control flow integrity (CFI) y cómo protege a C?",
    options: [
      "Una técnica de cifrado que protege el binario compilado cifrando las direcciones de las funciones para que los atacantes no puedan leerlas ni modificarlas durante la ejecución del programa",
      "Un mecanismo del sistema operativo que monitorea en tiempo real todas las llamadas a función del proceso y aborta la ejecución si detecta un patrón de llamadas estadísticamente anómalo",
      "Una verificación del compilador que analiza el árbol de llamadas en tiempo de compilación y rechaza con error cualquier uso de punteros a función que no pueda resolver estáticamente",
      "Técnica de seguridad que verifica en runtime que los saltos indirectos (llamadas a función vía puntero) van a destinos válidos; previene ciertos exploits de corrupción de flujo de control"
    ],
    correct: 3,
    difficulty: "B",
    explanation: "-fsanitize=cfi en Clang instrumenta las llamadas indirectas. CFI verifica que los punteros a función apuntan a funciones del tipo correcto. Defiende contra ROP (Return-Oriented Programming) y VTable hijacking."
  },
  {
    question: "¿Qué es el memory model de C11 y sus garantías?",
    options: [
      "El mismo modelo de consistencia que POSIX pthreads, donde la sincronización se logra exclusivamente mediante mutexes y condiciones de espera sin ningún tipo de operación atómica nativa",
      "C11 define un memory model formal: operaciones atómicas con ordenaciones de memoria (sequentially consistent, acquire/release, relaxed) que garantizan visibilidad entre threads",
      "Un modelo simplificado donde toda variable compartida entre hilos debe declararse como volatile para garantizar que el compilador emita instrucciones de barrera de memoria en cada acceso",
      "Un modelo heredado de C99 que exige que los programas usen exclusivamente semáforos del sistema operativo para sincronizar el acceso concurrente a datos compartidos entre hilos"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "atomic_store_explicit(&x, 1, memory_order_release); atomic_load_explicit(&x, memory_order_acquire); establece una relación happens-before. memory_order_relaxed: solo atomicidad, sin ordering."
  },
  {
    question: "¿Cómo implementar un allocator de memoria personalizado en C?",
    options: [
      "No es posible porque el estándar C no permite reemplazar las funciones de la librería estándar de gestión de memoria",
      "Solo con malloc como base, añadiéndole un wrapper que registra las asignaciones en un log de auditoría del heap",
      "Usar sbrk()/mmap() para obtener memoria del SO, implementar un free list (lista de bloques libres) con header metadata, first-fit/best-fit para asignación",
      "Sobrescribir malloc con macros del preprocesador que interceptan las llamadas y redirigen al allocator propio"
    ],
    correct: 2,
    difficulty: "B",
    explanation: "Allocators personalizados: slab allocator para objetos del mismo tamaño (pool), bump pointer allocator para allocación lineal sin free. jemalloc y tcmalloc son ejemplos de allocators de alto rendimiento."
  },
  {
    question: "¿Qué es el heap metadata corruption y cómo se explota?",
    options: [
      "Un fallo del sistema operativo que ocurre cuando el kernel pierde la cuenta de las páginas libres y comienza a asignar la misma región de memoria a dos procesos diferentes de forma simultánea",
      "Una condición de carrera entre hilos que acceden al mismo bloque del heap sin sincronización, provocando que las escrituras concurrentes corrompan el contenido almacenado en la región compartida",
      "Las implementaciones de malloc almacenan metadata (tamaño, flags) junto al bloque del usuario; sobrescribir esta metadata con buffer overflow puede corromper la estructura del heap, permitiendo ejecución de código arbitrario",
      "Un error de alineación que ocurre cuando el programador asigna un bloque de tamaño impar y el allocator no puede encontrar una dirección correctamente alineada para el siguiente bloque contiguo"
    ],
    correct: 2,
    difficulty: "B",
    explanation: "Hardening moderno: heap canaries (guard values), safe unlinking, ASLR del heap, randomización de offsets. GCC -fheap-overflow detecta algunos casos. Shadow memory (ASan) verifica cada acceso."
  },
  {
    question: "¿Qué es el intrinsic de CPU y cómo usarlo en C?",
    options: [
      "Funciones especiales que mapean directamente a instrucciones del CPU (SIMD, criptografía, atómicos); GCC/Clang exponen intrinsics SSE/AVX via <immintrin.h>",
      "Funciones de la librería estándar que el compilador reconoce por nombre y sustituye por llamadas al sistema operativo para acceder a características específicas del procesador subyacente",
      "Bloques de assembly inline delimitados por la directiva __asm__ que el compilador inserta en el código máquina generado y que requieren conocimiento detallado del ISA objetivo",
      "Extensiones del preprocesador que el compilador expande en tiempo de preprocesamiento para generar código optimizado específico para cada familia de procesadores soportados"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "__m256i v = _mm256_loadu_si256(ptr); __m256i r = _mm256_add_epi32(v, otro); _mm256_storeu_si256(dst, r). Permite vectorización explícita cuando el autovectorizador no lo hace automáticamente."
  },
  {
    question: "¿Qué es el return-oriented programming (ROP) y cómo lo explota el atacante?",
    options: [
      "Una técnica de explotación que encadena 'gadgets' (secuencias de instrucciones terminadas en RET) existentes en el binario para ejecutar código arbitrario, eludiendo DEP/NX",
      "Un método de ataque donde el adversario inyecta código máquina directamente en el stack del proceso sobrescribiendo el buffer de entrada con instrucciones ejecutables cifradas con XOR",
      "Una técnica que aprovecha errores en el linker dinámico para sustituir entradas de la GOT (Global Offset Table) por punteros a funciones maliciosas cargadas desde una librería externa",
      "Un ataque que explota la predicción de ramas del procesador modificando el historial de bifurcaciones para redirigir la ejecución hacia código privilegiado del sistema operativo"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "ROP evita inyectar código nuevo: encadena instrucciones existentes en la memoria del programa. Defensa: ASLR + CFI (Control Flow Integrity) + stack canaries. ret2libc es un precursor de ROP."
  },
  {
    question: "¿Cómo funciona el sanitizer de thread (TSan) y qué detecta?",
    options: [
      "Una herramienta idéntica a ASan pero orientada a threads que instrumenta las llamadas a malloc y free para detectar si múltiples hilos liberan el mismo bloque de memoria simultáneamente",
      "TSan (Thread Sanitizer) detecta data races: cuando dos threads acceden al mismo dato sin sincronización y al menos uno escribe; compila con -fsanitize=thread",
      "Un perfilador de rendimiento que mide el tiempo que cada hilo pasa esperando por mutexes y genera un informe de contención que identifica los cuellos de botella de sincronización",
      "Una herramienta de análisis estático integrada en el compilador que verifica en tiempo de compilación el correcto uso de primitivas de sincronización como mutex_lock y condition_wait"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "gcc -fsanitize=thread -g programa.c. Overhead: ~5-15x. TSan instrumenta todas las operaciones de memoria y bloqueos. Los data races son bugs muy sutiles y difíciles de reproducir."
  },
  {
    question: "¿Qué es el profile-guided optimization (PGO) en C?",
    options: [
      "Un nivel de optimización equivalente a -O4 que activa todas las optimizaciones de -O3 más análisis de flujo interprocedural y eliminación agresiva de comprobaciones de límites en arrays",
      "Una técnica donde el programador anota manualmente las funciones calientes con atributos de compilador para indicar qué rutas deben inlinearse y cuáles pueden descartarse como frío",
      "Una herramienta externa que analiza el código fuente buscando patrones reconocibles de bucles internos y aplica transformaciones de vectorización que el compilador estándar no detectaría solo",
      "El compilador primero genera un binario para recopilar datos de profiling, luego recompila con esa información para optimizar las rutas calientes; mejora 10-25% en aplicaciones reales"
    ],
    correct: 3,
    difficulty: "B",
    explanation: "GCC PGO: 1) gcc -fprofile-generate; 2) ejecutar con datos reales; 3) gcc -fprofile-use. Optimiza: inlining de funciones calientes, reordenamiento de código básico, predicción de ramas."
  },
  {
    question: "¿Qué es el link-time optimization (LTO) en C?",
    options: [
      "El enlazador realiza optimizaciones entre unidades de compilación: inlining cross-file, eliminación de código muerto global, propagación de constantes entre archivos",
      "Un proceso donde el compilador analiza cada unidad de compilación de forma aislada aplicando las mismas optimizaciones que se harían en tiempo de enlazado pero sin cruzar los límites del archivo",
      "Una técnica del sistema operativo que reorganiza las secciones del ejecutable en memoria para minimizar los fallos de página durante la carga del binario en el inicio del proceso",
      "Una optimización que el linker aplica únicamente a las tablas de relocación del binario para reducir el tiempo de carga de las librerías dinámicas en el arranque de la aplicación"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "gcc -flto programa.c otro.c: el compilador emite IR (GIMPLE) en .o en lugar de código máquina; el enlazador hace optimizaciones globales. Puede reducir el tamaño del binario y mejorar el rendimiento 5-15%."
  },
  {
    question: "¿Cómo implementar un garbage collector simple en C?",
    options: [
      "Sobrescribiendo malloc y free con versiones propias que incrementan un contador de referencias y liberan el bloque automáticamente cuando el conteo llega a cero al final de cada función",
      "Usando un pool allocator donde todos los objetos tienen el mismo tamaño fijo y se liberan al final del bloque de código mediante una sola llamada que resetea el puntero del pool",
      "Delegando completamente la tarea al sistema operativo, que recupera toda la memoria del proceso al finalizar; en programas cortos esto es suficiente sin necesidad de liberar explícitamente",
      "Mark-and-sweep: mantener una lista de todos los objetos asignados; marcar los accesibles desde raíces (stack, globales); barrer y liberar los no marcados. Boehm GC es el más conocido"
    ],
    correct: 3,
    difficulty: "B",
    explanation: "Boehm-Demers-Weiser GC: reemplaza malloc/free, usa heurísticas para encontrar punteros en la pila. Conservativo: puede no liberar objetos si hay un entero que parece una dirección válida."
  },
  {
    question: "¿Qué es el formato ELF y cómo se relaciona con C en Linux?",
    options: [
      "Executable and Linkable Format: el formato de binarios y librerías en Linux. Las secciones .text, .data, .bss, .rodata corresponden directamente a las regiones de memoria del modelo de C",
      "Un formato propietario de GNU que almacena el código fuente C junto a su representación compilada, permitiendo al depurador reconstruir la información de tipos y símbolos desde el binario",
      "El formato universal de intercambio de objetos compilados entre distintos compiladores, diseñado para que GCC, Clang e ICPC puedan enlazar sus respectivos archivos objeto sin conflictos",
      "Un contenedor de metadatos que el sistema operativo usa para gestionar los permisos de ejecución de los binarios y que no guarda relación directa con la estructura interna del programa en C"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "readelf, objdump, nm son herramientas para inspeccionar ELFs. Las tablas de símbolos en ELF son las que el linker usa para resolver referencias. Entender ELF es esencial para programación de sistemas."
  },
  {
    question: "¿Cómo funciona la convención de llamadas (calling convention) en x86-64?",
    options: [
      "Es completamente transparente para el programador porque el compilador gestiona automáticamente todos los registros",
      "Varía por compilador de forma incompatible; GCC y Clang usan convenciones distintas que impiden la interoperabilidad",
      "Solo importa al escribir código assembly; el compilador C maneja la convención internamente sin importar al usuario",
      "System V AMD64 ABI: primeros 6 argumentos enteros en rdi, rsi, rdx, rcx, r8, r9; retorno en rax; el callee preserva rbx, rbp, r12-r15"
    ],
    correct: 3,
    difficulty: "B",
    explanation: "Entender la calling convention permite: escribir assembly que interopera con C, entender el overhead de funciones, escribir código de bajo nivel eficiente. Windows usa una convención diferente."
  },
  {
    question: "¿Qué es el zero-copy y cómo se implementa en C?",
    options: [
      "Solo es aplicable en los sistemas embebidos donde el hardware del dispositivo tiene acceso directo a los buffers de red del kernel",
      "Es únicamente una técnica teórica de rendimiento; en la práctica siempre se necesita al menos una copia intermedia",
      "Solo es posible con soporte DMA integrado en el hardware que transfiere datos entre periféricos sin intervención alguna de la CPU",
      "Técnicas para transferir datos sin copiarlos en el espacio de usuario: mmap() mapea archivos en memoria, sendfile() envía datos de archivo a socket directamente en el kernel"
    ],
    correct: 3,
    difficulty: "B",
    explanation: "sendfile(socket_fd, file_fd, NULL, count) transfiere datos sin pasar por el espacio de usuario. mmap() permite acceder a archivos sin leerlos explícitamente. Fundamental para servidores de alta performance (nginx usa estos)."
  },
  {
    question: "¿Cómo funciona el modelo de seguridad basado en capacidades para C?",
    options: [
      "Un modelo donde el compilador analiza estáticamente el código C y genera una política de acceso que el kernel aplica en tiempo de ejecución para rechazar cualquier llamada al sistema no prevista",
      "Sandboxing de código C usando seccomp (filtrado de syscalls en Linux), capabilities de POSIX, pledge/unveil en OpenBSD; limita lo que el proceso puede hacer si es comprometido",
      "Un esquema de privilegios basado en tokens criptográficos que el proceso debe presentar al kernel antes de cada llamada al sistema para demostrar que tiene autorización para realizarla",
      "Un sistema de control de acceso mandatorio donde el administrador define en tiempo de despliegue qué funciones de la librería estándar puede invocar cada binario del sistema instalado"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "seccomp: syscall filtering que permite solo las syscalls necesarias. Si el proceso es explotado, no puede hacer fork(), exec(), open() arbitrarios. Chromium y Firefox usan seccomp para sandboxing."
  },
  {
    question: "¿Qué es el thinLTO de LLVM/Clang?",
    options: [
      "Una variante de LTO que elimina únicamente las funciones no referenciadas en el binario final, sin realizar inlining ni propagación de constantes entre los distintos archivos objeto del proyecto",
      "Una implementación de LTO donde el compilador serializa el árbol de sintaxis abstracta completo de cada módulo para que el enlazador pueda analizar el código fuente durante la fase de enlazado",
      "El equivalente de LTO en el compilador MSVC de Microsoft que usa un formato de IR propietario incompatible con la representación GIMPLE que GCC usa para sus optimizaciones entre módulos",
      "LTO incremental: en lugar de enlazar todo el código IR junto, usa índices de módulos para hacer optimizaciones cross-module de forma más eficiente y paralelizable que LTO completo"
    ],
    correct: 3,
    difficulty: "B",
    explanation: "ThinLTO escala mejor que FullLTO en proyectos grandes: preprocesa índices en paralelo, hace inlining cross-module selectivo. Facebook, Google lo usan en producción. Clang: -flto=thin."
  },
  {
    question: "¿Qué es el Undefined Behavior Sanitizer (UBSan)?",
    options: [
      "Una herramienta de análisis estático que examina el código fuente C y marca las expresiones donde el compilador podría aplicar optimizaciones basadas en la suposición de ausencia de comportamiento indefinido",
      "Detecta en runtime comportamientos indefinidos: desbordamiento de entero, null pointer dereference, shift inválido, misaligned access, uso de VLAs con tamaño 0; -fsanitize=undefined",
      "Un sistema de verificación de contratos integrado en el compilador que comprueba en tiempo de compilación si las precondiciones de cada función son siempre satisfechas por sus sitios de llamada",
      "Una extensión del linker que verifica durante el enlazado que todos los módulos del programa fueron compilados con las mismas flags de estándar C para evitar discrepancias de comportamiento"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "Combinar: -fsanitize=address,undefined,thread. UBSan añade checks inline en el código. Imprescindible durante desarrollo. Ayuda a encontrar bugs que parecen funcionar pero son UB y pueden fallar en producción."
  },
  {
    question: "¿Cómo implementar introspección de tipos en C?",
    options: [
      "C11 _Generic permite dispatch en tiempo de compilación. __builtin_types_compatible_p (GCC) verifica compatibilidad de tipos. Para introspección en runtime: estructuras de metadatos manuales",
      "Usando void* con un campo entero adicional que almacena un identificador de tipo asignado por convención, donde el programador debe comprobar manualmente este campo antes de hacer cualquier cast",
      "Aprovechando el operador sizeof para inferir el tipo de las variables en tiempo de compilación, lo que permite al preprocesador seleccionar la implementación correcta para cada tipo de datos",
      "Declarando todas las estructuras de datos con un campo de tipo enum al inicio que el programador rellena manualmente al crear cada instancia para indicar al código genérico cómo procesar el valor"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "#define PRINT(x) _Generic((x), int: printf(\"%d\", (int)(x)), float: printf(\"%f\", (float)(x)), char*: printf(\"%s\", (char*)(x)))(x). C11 _Generic es selección de expresión en compilación basada en tipo."
  },
  {
    question: "¿Qué es el memory-mapped I/O y cómo se implementa en C?",
    options: [
      "Una técnica exclusiva de drivers del kernel donde el hardware expone sus registros en el espacio de direcciones físico y el SO los protege para que solo el código privilegiado pueda acceder",
      "Un mecanismo del sistema de archivos que almacena en caché bloques de disco en RAM y los libera automáticamente bajo presión de memoria, transparente para el programador que usa read() y write()",
      "mmap() mapea un archivo (o hardware) al espacio de direcciones del proceso; acceder a la memoria accede al archivo/hardware directamente, sin read()/write() explícitos",
      "Una interfaz de la librería estándar que usa internamente DMA para transferir datos entre el archivo y un buffer del proceso sin involucrar la CPU en la copia byte a byte del contenido"
    ],
    correct: 2,
    difficulty: "B",
    explanation: "void *addr = mmap(NULL, len, PROT_READ|PROT_WRITE, MAP_SHARED, fd, 0); addr[offset] accede al byte offset del archivo. Cambios con MAP_SHARED son visibles a otros procesos que mapeen el mismo archivo."
  },
  {
    question: "¿Qué es el técnica de hashing por open addressing vs chaining?",
    options: [
      "Chaining y open addressing son idénticos conceptualmente; la única diferencia es que chaining usa malloc para cada colisión y open addressing reutiliza el espacio ya asignado en el array principal",
      "Chaining: cada bucket tiene una lista enlazada de colisiones (más memoria). Open addressing: colisiones se resuelven buscando el siguiente bucket libre (linear/quadratic probing); mejor localidad de caché",
      "Dos estrategias que solo difieren en el factor de carga máximo tolerado: chaining funciona bien hasta 0.5 de carga y open addressing es óptimo con cargas superiores al 0.9 del array",
      "Chaining resuelve colisiones construyendo un árbol binario de búsqueda en cada bucket, mientras que open addressing construye un heap binario para mantener el orden de inserción de claves"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "Open addressing: mejor cache performance (array contiguo). Chaining: más fácil de implementar, mejor con alta tasa de colisiones. Robin Hood hashing (variante de open addressing) reduce la varianza de longitud de búsqueda."
  },
  {
    question: "¿Cómo funciona el compilador de C a nivel de representación intermedia?",
    options: [
      "El compilador transforma el código C directamente al lenguaje ensamblador del procesador objetivo sin pasar por ninguna representación intermedia, ya que las IR solo existen en compiladores JIT",
      "El preprocesador genera la representación intermedia expandiendo todas las macros, que el compilador usa directamente como formato de entrada para la fase de generación de código máquina",
      "GCC usa GIMPLE/RTL como IRs; Clang usa LLVM IR. Las optimizaciones (inlining, DCE, CSE, alias analysis) operan sobre la IR antes de la generación de código",
      "La representación intermedia es simplemente el árbol de sintaxis abstracta (AST) que el analizador sintáctico genera, y sobre el que todas las fases posteriores del compilador trabajan directamente"
    ],
    correct: 2,
    difficulty: "A",
    explanation: "LLVM IR: SSA form (Static Single Assignment). Pases de optimización: mem2reg, instcombine, gvn, licm, vectorize. gcc -fdump-tree-all vuelca el GIMPLE en cada fase. Estudiar IR ayuda a entender qué optimizaciones hace el compilador."
  },
  {
    question: "¿Qué es el alias analysis y cómo impacta en la optimización de C?",
    options: [
      "Un análisis que verifica que los nombres de los identificadores en el código C no colisionan con palabras reservadas del estándar ni con símbolos exportados por las librerías del sistema enlazadas",
      "Un análisis de dependencias entre módulos que el compilador realiza para determinar el orden correcto de compilación de los archivos fuente en proyectos con múltiples unidades de compilación",
      "El compilador analiza si dos punteros pueden apuntar al mismo objeto (aliases); si no pueden, puede reordenar operaciones y vectorizar; restrict y __restrict__ dan esta garantía explícita",
      "Un análisis del compilador que detecta variables con el mismo nombre declaradas en distintos scopes para evitar que el programador acceda accidentalmente a la variable del ámbito exterior"
    ],
    correct: 2,
    difficulty: "A",
    explanation: "Si el compilador no puede probar no-aliasing, no puede vectorizar ni reordenar accesos. restrict: la solución explícita. Type-based alias analysis (TBAA): punteros de tipos incompatibles no pueden alias (strict aliasing rule)."
  },
  {
    question: "¿Cómo se implementa un sistema de plugins con dlopen/dlsym en C POSIX?",
    options: [
      "Compilando todos los plugins potenciales como parte del binario principal y usando una tabla de funciones que se configura en tiempo de inicialización según la variable de entorno del sistema",
      "Usando fork() para crear un proceso hijo que ejecuta el código del plugin en su propio espacio de memoria y enviando resultados al proceso padre mediante pipes o memoria compartida del sistema",
      "Definiendo una interfaz de plugin mediante un archivo de cabecera común y compilando todos los plugins como librerías estáticas que se enlazan selectivamente según la configuración del programa",
      "dlopen() carga una biblioteca dinámica en runtime, dlsym() obtiene un puntero a un símbolo por nombre; permite cargar plugins sin recompilar la aplicación principal"
    ],
    correct: 3,
    difficulty: "A",
    explanation: "void *handle = dlopen(\"plugin.so\", RTLD_LAZY); void (*f)(void) = dlsym(handle, \"funcion\"); f(); dlclose(handle). Los plugins deben exponer una interfaz C (extern \"C\" en C++)."
  },
  {
    question: "¿Qué es el hardening binario y qué técnicas de compilación existen?",
    options: [
      "Un proceso que elimina los símbolos de depuración y la información de tipo del binario para dificultar la ingeniería inversa, reduciendo de paso el tamaño del ejecutable final generado por el compilador",
      "Una técnica exclusiva del kernel Linux que protege las páginas de código marcándolas de solo lectura tras la carga; los programas de espacio de usuario no tienen acceso a estas funciones de protección",
      "RELRO (rebind-only GOT), PIE/ASLR (position independent executables), stack canaries (-fstack-protector), FORTIFY_SOURCE, CFI, shadow stack (CET); en conjunto crean defensa en profundidad",
      "El proceso de compilar el programa con el máximo nivel de optimización (-O3) para que las instrucciones generadas sean más densas y difíciles de analizar por herramientas de análisis automático"
    ],
    correct: 2,
    difficulty: "A",
    explanation: "gcc -fstack-protector-strong -pie -z relro -z now -D_FORTIFY_SOURCE=2. FORTIFY_SOURCE: reemplaza funciones inseguras por versiones con checks de tamaño. Stack canaries: detectan smashing del stack."
  },
  {
    question: "¿Cómo funcionan los fat binaries y la compilación multi-arquitectura en C?",
    options: [
      "El compilador genera código máquina para todas las arquitecturas soportadas simultáneamente y el procesador selecciona en tiempo de arranque las instrucciones que corresponden a su propio conjunto de instrucciones",
      "lipo (macOS) combina binarios para múltiples arquitecturas. Universal binaries macOS tienen código para ARM64 y x86-64. CMake con toolchains cross-compila para targets distintos del host",
      "Se implementan usando directivas #ifdef __x86_64__ e #ifdef __aarch64__ que el preprocesador expande para incluir el código ensamblador específico de cada arquitectura dentro del mismo archivo fuente",
      "El linker combina archivos objeto para distintas arquitecturas en un único ejecutable usando un formato de archivo especial que encapsula los diferentes segmentos de código en secciones separadas"
    ],
    correct: 1,
    difficulty: "A",
    explanation: "Cross-compilation: toolchain arm-linux-gnueabihf para compilar desde x86 para ARM. Docker multiarch. QEMU emula para testing. Las #ifdef de arquitectura (__x86_64__, __aarch64__) seleccionan código específico."
  },
  {
    question: "¿Cómo implementar un mini-lenguaje de scripting en C (intérprete)?",
    options: [
      "Usando expresiones regulares de la librería POSIX para analizar cada línea del script y un switch-case gigante que ejecuta la acción correspondiente según el patrón que coincida con la entrada",
      "Delegando todo el análisis sintáctico a sscanf con especificadores de formato personalizados y construyendo el árbol de evaluación mediante llamadas recursivas a la función de parseo principal",
      "Generando código C a partir del script mediante sustitución textual de macros del preprocesador y compilando dinámicamente el resultado con system(\"gcc\") durante la ejecución del intérprete",
      "Lexer (tokenizer) + Parser (AST) + Evaluador/VM. En C: representar el AST con structs y unions, usar dispatch tables para operaciones, manejar memoria con GC o reference counting"
    ],
    correct: 3,
    difficulty: "A",
    explanation: "Lua está implementado en C y es famoso por su pequeño tamaño. CPython es el intérprete de Python en C. La union/struct para el AST + visitor pattern + call stack manual son los componentes clave."
  },
  {
    question: "¿Qué es el incremental compilation y cómo se gestiona en proyectos C grandes?",
    options: [
      "make/cmake rastrea dependencias entre archivos: cuando .c o .h cambian, solo recompila los archivos necesarios. ccache cachea resultados de compilación. Precompiled headers para headers costosos",
      "El compilador recompila todos los archivos fuente del proyecto en paralelo en cada build y descarta los objetos generados anteriormente para garantizar que el binario final sea siempre consistente",
      "Un sistema donde el compilador almacena el AST de cada función compilada y solo lo regenera cuando el programador modifica explícitamente esa función, ignorando cambios en los archivos de cabecera",
      "Una estrategia que ordena los archivos de cabecera por frecuencia de modificación y coloca los más estables en un módulo separado que nunca necesita recompilarse independientemente de los cambios"
    ],
    correct: 0,
    difficulty: "A",
    explanation: "Un proyecto con 1000 archivos .c recompilaría todo si un header común cambia. Separar headers estables (system headers) de los que cambian. __has_include, PCH reducen tiempos de compilación drásticamente."
  },
  {
    question: "¿Cómo funciona la verificación formal de programas C?",
    options: [
      "El compilador de C verifica automáticamente la corrección del programa aplicando análisis de flujo de datos estático con -Wall -Wextra, emitiendo errores fatales cuando detecta cualquier violación lógica",
      "El programador escribe un conjunto exhaustivo de pruebas unitarias con cobertura del 100% de las ramas del código, lo que matemáticamente equivale a una prueba formal de corrección del programa",
      "Herramientas como Frama-C (con Why3), CBMC (bounded model checking), Infer (Facebook) analizan el código C formalmente para verificar corrección, ausencia de UB y desbordamientos",
      "Se basa exclusivamente en la revisión manual del código por múltiples expertos que comprueban contra la especificación, ya que los solvers SMT no pueden manejar la aritmética de punteros de C"
    ],
    correct: 2,
    difficulty: "A",
    explanation: "CBMC: unrolled loops + SAT solver. Frama-C: anotaciones ACSL (contrato formal) + proof. NASA y Airbus usan verificación formal para código crítico. MISRA C es un subset de C diseñado para ser más verificable."
  },
  {
    question: "¿Qué es el semantic patch con Coccinelle y para qué se usa en el kernel Linux?",
    options: [
      "Coccinelle es una herramienta de transformación semántica de código C: aplica transformaciones (semantic patches) que entienden la sintaxis, no solo texto. Usada para refactorings masivos en el kernel Linux",
      "Una extensión del formato de parches unificados de git que permite especificar cambios condicionados a la semántica del código, aplicando el parche únicamente cuando el contexto lógico coincide exactamente",
      "Un script de Python que analiza los mensajes de commit del repositorio del kernel y extrae automáticamente los patrones de código que los mantenedores consideran problemáticos para reportarlos como advertencias",
      "Una herramienta de pruebas del kernel Linux que verifica que cada parche enviado no introduce regresiones en los módulos existentes ejecutando automáticamente la suite de pruebas antes de aceptarlo"
    ],
    correct: 0,
    difficulty: "A",
    explanation: "Coccinelle se usa para modernizar el kernel: cambiar API deprecadas en todos los archivos simultáneamente. A diferencia de sed, entiende la semántica C (no reemplaza en strings o comentarios)."
  },
  {
    question: "¿Cómo implementar un sistema de memoria transaccional (STM) en C?",
    options: [
      "Usando únicamente mutexes con granularidad de objeto, donde cada transacción adquiere todos los locks necesarios al inicio y los libera al final, garantizando atomicidad sin mecanismos de versioning",
      "Aprovechando las instrucciones atómicas compare-and-swap del procesador para implementar secciones críticas sin locks que el compilador C11 expone a través de las funciones de la cabecera stdatomic.h",
      "Delegando toda la gestión transaccional al sistema de archivos mediante transacciones ACID de una base de datos embebida como SQLite, que proporciona rollback automático sin código adicional en C",
      "Implementar TM en C requiere: versioning de objetos (MVCC), conflict detection (validación al commit), rollback mechanism; TinySTM es una implementación de referencia en C"
    ],
    correct: 3,
    difficulty: "A",
    explanation: "Software TM: cada thread mantiene read-set y write-set. Al commit: verifica que el read-set no fue modificado por otros (conflict detection). Si hay conflicto: rollback y reintentar. Overhead alto vs locks."
  },
  {
    question: "¿Cómo funciona el compilador JIT en C para generar código máquina en runtime?",
    options: [
      "Invocando el compilador del sistema mediante system(\"gcc\") con el código fuente generado dinámicamente, esperando a que termine la compilación y cargando el resultado con dlopen para su ejecución",
      "Usando las funciones de la librería estándar de C para generar archivos de ensamblador en disco que el proceso ensambla llamando a as y enlaza llamando a ld antes de ejecutar el resultado",
      "Asignar memoria ejecutable (mmap con PROT_EXEC), escribir código máquina como bytes en esa región, y ejecutarlo via puntero a función; base de VMs, regex engines, y emuladores",
      "Compilando el código a bytecode portable independiente de la arquitectura y usando una máquina virtual de bytecode embebida en el proceso, similar a la JVM, para ejecutar las instrucciones generadas"
    ],
    correct: 2,
    difficulty: "S",
    explanation: "void *mem = mmap(NULL, size, PROT_WRITE|PROT_EXEC, MAP_ANON|MAP_PRIVATE, -1, 0); Escribir bytes de código máquina en mem; ((void(*)())mem)(); Requiere conocer el ISA del target. GNU Lightning y asmjit son librerías que facilitan esto."
  },
  {
    question: "¿Qué es el modelo de memoria C11 y cómo se relaciona con el hardware?",
    options: [
      "Un modelo idéntico al de Java donde el compilador inserta automáticamente barreras de memoria antes y después de cada acceso a variable compartida, independientemente del hardware subyacente",
      "C11 formaliza el memory model con happens-before relations y operaciones atómicas que se mapean a instrucciones de hardware: mfence (x86), dmb (ARM), con garantías de ordering",
      "Un modelo abstracto que no tiene correspondencia directa con el hardware ya que el estándar delega completamente en el sistema operativo la garantía de consistencia entre los hilos del proceso",
      "Una extensión del modelo de volatile donde el compilador emite barreras de memoria completas en cada acceso a cualquier variable compartida, incurriendo en el overhead de serialización total"
    ],
    correct: 1,
    difficulty: "S",
    explanation: "memory_order_seq_cst compila a mfence en x86. memory_order_acquire/release: no genera instrucción en x86 (TSO garantiza esto), pero sí en ARM (ldaex/stlex). Entender el modelo de hardware es crucial para código lock-free correcto."
  },
  {
    question: "¿Cómo se implementa el C runtime (CRT) y qué hace antes de main?",
    options: [
      "El compilador inserta automáticamente código de inicialización al principio de main que inicializa la memoria a cero, configura el locale y establece los manejadores de señal por defecto antes de ejecutar el código del usuario",
      "El sistema operativo inicializa completamente el entorno del proceso antes de transferir el control al programa: carga las librerías, inicializa el heap y configura la pila antes de llamar a main directamente",
      "La librería estándar realiza su inicialización de forma lazy: cada función de la libc inicializa sus propios recursos internos la primera vez que se llama, sin necesidad de código de arranque previo a main",
      "El entry point real es _start (no main): inicializa el stack, registers, .bss (a cero), llama a constructores de objetos estáticos (__init_array), configura la herencia del entorno, luego llama a main"
    ],
    correct: 3,
    difficulty: "S",
    explanation: "glibc: _start → __libc_start_main → main. Ejecuta: setup de TLS, registro de at_exit handlers, fork handlers, llamadas a __attribute__((constructor)). Inspeccionar con -nostartfiles y código propio de _start."
  },
  {
    question: "¿Qué es el Spectre y Meltdown y cómo afectan al código C?",
    options: [
      "Vulnerabilidades de hardware que explotan ejecución especulativa y side-channel de caché de CPU; código C que usa datos sensibles puede filtrar información a través de timing de caché; mitigation: memory barriers, retpoline",
      "Ataques dirigidos únicamente al código del kernel de Linux que dependen de privilegios de administrador del sistema y que no pueden ser reproducidos por procesos de espacio de usuario sin elevar privilegios primero",
      "Vulnerabilidades que afectan exclusivamente a las implementaciones de lenguajes interpretados donde el JIT genera código especulativo sin las restricciones que impone el compilador C al generar código nativo estático",
      "Fallos de seguridad completamente mitigados mediante las actualizaciones de firmware de CPU y los parches del sistema operativo publicados en 2018 que eliminaron de forma definitiva el vector de ataque original"
    ],
    correct: 0,
    difficulty: "S",
    explanation: "Spectre: array out-of-bounds especulativo en código C puede cargar datos secretos en caché; medición de timing los revela. Mitigation: lfence, serializing loads. Retpoline: indirección para llamadas indirectas seguras contra Spectre v2."
  },
  {
    question: "¿Cómo funciona la instrumentación de código con LLVM para análisis de programas?",
    options: [
      "El análisis se implementa directamente en el código fuente C usando macros del preprocesador que insertan llamadas a funciones de monitorización en cada punto donde el programador lo especifica explícitamente",
      "LLVM permite añadir passes personalizados que instrumentan el IR: insertar código antes/después de instrucciones, funciones, bloques básicos; base de ASan, TSan, MSan, PGO, coverage",
      "Se basa en inyectar código de análisis en el binario compilado usando técnicas de parcheo binario dinámico, sin modificar el código fuente ni el proceso de compilación del programa original",
      "La instrumentación se realiza en tiempo de ejecución mediante el interpuesto de las funciones de la libc con LD_PRELOAD, redirigiendo malloc, free y las operaciones de memoria a wrappers de análisis"
    ],
    correct: 1,
    difficulty: "S",
    explanation: "Implementar un LLVM Pass: visitar instrucciones de carga/almacenamiento, insertar llamadas a funciones de check. El pass se carga con clang -fplugin o se integra en la pipeline de optimización. LLVM IR es la representación."
  },
  {
    question: "¿Qué es el symbolic execution de código C y sus aplicaciones?",
    options: [
      "Una técnica de depuración donde el programador sustituye las variables del programa por expresiones algebraicas y ejecuta el código mentalmente para verificar si la lógica es matemáticamente correcta",
      "Herramientas como KLEE ejecutan el programa con entradas simbólicas, explorando todos los caminos posibles; genera casos de prueba que maximizan cobertura y detecta bugs profundos",
      "Un método de testing donde se generan automáticamente casos de prueba aleatorios para el programa y se evalúa la cobertura de código que alcanzan comparándola con la cobertura del conjunto de pruebas manual",
      "Una técnica de análisis estático que rastrea el flujo de datos simbólico a través del grafo de control de flujo para detectar variables que nunca son inicializadas antes de su primer uso en el programa"
    ],
    correct: 1,
    difficulty: "S",
    explanation: "KLEE sobre LLVM IR: explora el árbol de ejecución, en cada branch simbólico crea dos estados. Timeout en exploración. Encuentra: array out of bounds, null dereferences, divisiones por cero. Aplicado en fuzzing dirigido."
  },
  {
    question: "¿Cómo funciona el hardware-assisted CFI (CET de Intel) y cómo lo aprovecha C?",
    options: [
      "Una característica del procesador que cifraba las direcciones de retorno almacenadas en el stack con una clave de proceso única, haciendo que los valores robados por un atacante sean inútiles para redirigir el flujo",
      "Intel CET: Shadow Stack (copia de direcciones de retorno en memoria protegida) e IBT (Indirect Branch Tracking: solo se puede saltar a instrucciones ENDBR64). GCC/Clang soportan con -mshstk -mibt",
      "Una extensión del conjunto de instrucciones que añade comprobaciones de tipo a todas las instrucciones de llamada indirecta verificando que el puntero a función y la firma del destino sean compatibles en hardware",
      "Un mecanismo del procesador que registra en un buffer circular las últimas direcciones de retorno ejecutadas y abortará el proceso si detecta que la dirección actual no coincide con ninguna entrada del historial"
    ],
    correct: 1,
    difficulty: "S",
    explanation: "Shadow Stack previene ataques de ROP al mantener una segunda copia de la pila de retorno en memoria no modificable por el atacante. IBT requiere que todas las funciones destino de llamadas indirectas tengan la instrucción ENDBR64."
  },
  {
    question: "¿Qué es el oblivious RAM (ORAM) y cómo implementarlo en C para proteger patrones de acceso?",
    options: [
      "Técnica criptográfica que oculta el patrón de acceso a memoria a observadores externos; implementado en C para sistemas con TEE (Trusted Execution Environments como Intel SGX)",
      "Un tipo de allocator especialmente diseñado que dispersa los datos del proceso en regiones aleatorias de la memoria virtual para dificultar que un observador externo correlacione los accesos con los datos reales",
      "Una técnica de cifrado simétrico de bloques de memoria donde cada acceso a un bloque cifra su contenido con una clave efímera diferente, haciendo que los patrones de acceso sean indistinguibles entre sí",
      "Un esquema de caché con política de desalojo completamente aleatoria que impide que los patrones de acceso temporal del proceso revelen información sobre los datos procesados a otros procesos del sistema"
    ],
    correct: 0,
    difficulty: "S",
    explanation: "Path ORAM: accesos reales se mezclan con accesos ficticios en un árbol de bloques; el observador no puede saber qué dato real se accede. Crítico en SGX donde el OS (no confiable) puede monitorear accesos a memoria."
  },
  {
    question: "¿Cómo diseñar un sistema de tipos en tiempo de compilación solo con macros y _Generic en C?",
    options: [
      "Definiendo una enum con un valor por cada tipo del sistema y pasándola como primer argumento a todas las funciones genéricas que usan un switch-case para seleccionar el comportamiento correcto en runtime",
      "Usando typedef para crear aliases tipados de void* y encapsulando cada tipo en una struct con un campo de identificador que las funciones genéricas comprueban antes de operar sobre el valor almacenado",
      "Usando _Generic para dispatch por tipo, X-macros para tablas de tipos, Typeof (__typeof__) para preservar tipos, y macros de generación para instanciar código tipado; permite APIs semi-tipadas sin C++",
      "Declarando todas las funciones como macros que aceptan cualquier argumento y usando sizeof para diferenciar entre tipos en tiempo de compilación mediante sentencias if constexpr equivalentes en C"
    ],
    correct: 2,
    difficulty: "S",
    explanation: "#define TYPEOF(x) __typeof__(x) y _Generic permiten crear APIs que adaptan su comportamiento según el tipo en tiempo de compilación. Librerías como STC (Standard Template Containers for C) usan esta técnica extensivamente."
  },
  {
    question: "¿Cómo funciona el análisis de tiempo de ejecución con perf y BPF en Linux para código C?",
    options: [
      "perf: sampling de CPU (perf record + perf report), flamegraphs. BPF/eBPF: programas que se ejecutan en el kernel para tracing sin modificar el programa; bpftrace para scripts, BCC para programas complejos",
      "Mediante la recompilación del binario con símbolos de depuración adicionales que el sistema operativo usa para generar trazas de ejecución detalladas que se escriben en un archivo de log analizable con herramientas estándar",
      "Usando la variable de entorno LD_PRELOAD para interponer una librería de análisis que intercepta todas las llamadas a funciones de la libc y registra su frecuencia y duración en un archivo de perfil del proceso",
      "Instrumentando manualmente el código C con llamadas a clock_gettime antes y después de cada sección de interés, calculando las diferencias de tiempo y acumulándolas en contadores globales del proceso"
    ],
    correct: 0,
    difficulty: "S",
    explanation: "perf stat: contadores de hardware (cache misses, branch mispredictions). bpftrace -e 'uprobe:/bin/prog:funcion { printf(\"%s\\n\", comm); }' rastrea llamadas sin recompilar. DTRACING de Solaris inspiró BPF."
  }
];
