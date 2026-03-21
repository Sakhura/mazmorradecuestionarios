window.questions_c = [
  {
    question: "¿Cuál es la función de entrada/salida estándar para imprimir en C?",
    options: [
      "printf()",
      "print()",
      "console.log()",
      "System.out.println()"
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
      "integer x = 5;"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "int es el tipo entero básico en C. La declaración debe preceder al uso de la variable en C89/C90 (no en C99+)."
  },
  {
    question: "¿Qué hace el operador <code>*</code> cuando se aplica a un puntero?",
    options: [
      "Declara un puntero",
      "Multiplica el puntero",
      "Desreferencia el puntero: accede al valor almacenado en la dirección de memoria apuntada",
      "Copia el puntero"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "*ptr desreferencia ptr: si ptr apunta a x, *ptr es x. No confundir con int *p donde * declara p como puntero."
  },
  {
    question: "¿Qué hace el operador <code>&</code> aplicado a una variable?",
    options: [
      "AND bit a bit",
      "Referencia una variable",
      "Crea un alias",
      "Retorna la dirección de memoria de la variable"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "&x retorna la dirección de memoria de x. Se usa para inicializar punteros: int *p = &x; o para pasar por referencia a funciones."
  },
  {
    question: "¿Cómo se declara un puntero a entero en C?",
    options: [
      "pointer int p;",
      "int& p;",
      "ref int p;",
      "int *p;"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "int *p declara p como puntero a int. El * puede estar pegado al tipo (int* p) o a la variable (int *p). La segunda forma evita confusión con int* a, b (donde solo a es puntero)."
  },
  {
    question: "¿Qué incluye la cabecera <code>#include <stdlib.h></code>?",
    options: [
      "Solo funciones matemáticas",
      "Solo funciones de entrada/salida",
      "Solo funciones de strings",
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
      "Inicializa n bytes a cero",
      "Libera n bytes de memoria",
      "Redimensiona un bloque de memoria"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "malloc(sizeof(int) * 10) reserva espacio para 10 ints. No inicializa la memoria (puede contener basura). Retorna NULL si no hay memoria disponible. Siempre verificar el retorno."
  },
  {
    question: "¿Qué hace <code>free(ptr)</code>?",
    options: [
      "Libera el bloque de memoria dinámica apuntado por ptr, devolviéndolo al heap",
      "Verifica si ptr es válido",
      "Borra el contenido apuntado por ptr",
      "Pone ptr a NULL"
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
      "Un puntero especial",
      "Una secuencia contigua de elementos del mismo tipo en memoria, accedidos por índice (0-based)",
      "Una lista dinámica",
      "Una estructura de datos dinámica"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "int arr[5] = {1,2,3,4,5}. Los elementos están contiguos en memoria. arr[0] es el primero. En C, el nombre del array decae a un puntero al primer elemento."
  },
  {
    question: "¿Qué es un <code>struct</code> en C?",
    options: [
      "Una clase de C",
      "Un tipo de puntero",
      "Una función especial",
      "Un tipo compuesto que agrupa múltiples variables de diferentes tipos bajo un único nombre"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "struct Persona { char nombre[50]; int edad; float salario; }. Los campos se acceden con . para variables y con -> para punteros a struct."
  },
  {
    question: "¿Cuál es la diferencia entre <code>==</code> y <code>=</code> en C?",
    options: [
      "= es solo para enteros",
      "= es asignación; == es comparación de igualdad",
      "== asigna y compara",
      "Son sinónimos"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "Uno de los bugs más comunes en C: if(x = 5) asigna 5 a x y es siempre verdadero (si x != 0). Lo correcto es if(x == 5). Algunos compiladores advierten sobre esto con -Wall."
  },
  {
    question: "¿Qué hace <code>sizeof()</code> en C?",
    options: [
      "Calcula el tamaño de un string",
      "Cuenta los elementos de un array",
      "Retorna el número de bytes usados en memoria dinámica",
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
      "5 (con el null)",
      "Varía según plataforma"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "strlen() cuenta los caracteres hasta (sin incluir) el null terminador \\0. \"hola\" tiene 4 caracteres + \\0 = 5 bytes en memoria, pero strlen retorna 4."
  },
  {
    question: "¿Qué es el null terminador en strings de C?",
    options: [
      "Un puntero null",
      "El carácter '\\0' (ASCII 0) que marca el final de un string; las funciones de string dependen de él para saber dónde termina",
      "Un tipo de NULL",
      "El último elemento siempre"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "char str[] = \"hola\" almacena: 'h','o','l','a','\\0'. Si falta el \\0, las funciones como strlen y printf pueden leer más allá del buffer causando undefined behavior."
  },
  {
    question: "¿Qué hace <code>strcpy(dest, src)</code>?",
    options: [
      "Copia el string src al buffer dest incluyendo el null terminador; peligroso si dest es insuficientemente grande",
      "Concatena dos strings",
      "Compara dos strings",
      "Retorna la longitud de src"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "strcpy no verifica el tamaño de dest. Si src es más largo que dest: buffer overflow. Usar strncpy(dest, src, n) o mejor strlcpy donde esté disponible. snprintf es la alternativa moderna segura."
  },
  {
    question: "¿Cuál es la diferencia entre <code>char *s = \"hola\"</code> y <code>char s[] = \"hola\"</code>?",
    options: [
      "char *s es más eficiente",
      "Son equivalentes",
      "char s[] es un puntero",
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
      "Declara una constante const",
      "Define una función",
      "Crea una variable global"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "#define es una macro del preprocesador. Sustitución textual pura, sin verificación de tipos. #define MAX(a,b) ((a)>(b)?(a):(b)) es una macro función. Preferir const int o enum para constantes."
  },
  {
    question: "¿Para qué sirven los guardas de inclusión (<code>#ifndef</code>)?",
    options: [
      "Para código condicional por plataforma",
      "Una forma de comentario",
      "Evitan que un archivo header sea incluido más de una vez en la misma unidad de compilación",
      "Protección contra código malicioso"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "#ifndef MI_HEADER_H #define MI_HEADER_H ... #endif. Sin esto, incluir el mismo header dos veces causaría errores de redefinición. #pragma once es la alternativa moderna (no estándar pero universal)."
  },
  {
    question: "¿Qué es el tipo <code>void*</code>?",
    options: [
      "Un puntero nulo",
      "Un tipo de retorno especial",
      "Un puntero vacío sin valor",
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
      "Asigna a un puntero",
      "Resta de punteros",
      "Compara punteros"
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
      "Busca un valor en x",
      "Imprime x",
      "Lee un entero de la entrada estándar y lo almacena en x",
      "Lee y devuelve un string"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "scanf lee datos formateados. El & es necesario porque scanf necesita la dirección de x para modificarlo. scanf con strings: scanf(\"%s\", str) sin &, porque str ya es un puntero."
  },
  {
    question: "¿Cuál es la diferencia entre <code>int</code>, <code>short</code>, <code>long</code> y <code>long long</code>?",
    options: [
      "Difieren en el tamaño garantizado: short ≥16 bits, int ≥16 bits (usualmente 32), long ≥32 bits, long long ≥64 bits. Los tamaños exactos dependen de la plataforma",
      "Solo difieren en el rango",
      "Son idénticos en tamaño",
      "Solo difieren en el nombre"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "El estándar C garantiza mínimos. Para tamaños fijos usar <stdint.h>: int32_t, int64_t, uint8_t, etc. Preferir estos en código portable."
  },
  {
    question: "¿Qué es el tipo <code>char</code> en C?",
    options: [
      "Un tipo de 2 bytes",
      "Siempre un unsigned",
      "Solo para caracteres ASCII",
      "Un tipo que almacena un carácter (1 byte = 8 bits); puede ser signed o unsigned según la implementación; mejor especificar signed char o unsigned char explícitamente"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "char ocupa 1 byte. Puede ser signed (-128..127) o unsigned (0..255) según el compilador/plataforma. Para valor numérico explícito: usar signed char o unsigned char. Para caracteres: char es suficiente."
  },
  {
    question: "¿Qué hace <code>calloc(n, size)</code>?",
    options: [
      "Libera memoria previamente asignada",
      "Asigna memoria para n elementos de size bytes cada uno e inicializa todo a cero, a diferencia de malloc que deja la memoria sin inicializar",
      "Es igual a malloc",
      "Reasigna memoria"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "calloc(10, sizeof(int)) = malloc(10*sizeof(int)) + memset a 0. Útil cuando necesitas asegurar que la memoria está inicializada a cero. Puede ser más lento que malloc+memset."
  },
  {
    question: "¿Qué es <code>NULL</code> en C?",
    options: [
      "Una macro que representa el valor de un puntero nulo; garantiza que no apunta a ninguna dirección de memoria válida; típicamente definido como (void*)0 o 0",
      "El valor 0 siempre",
      "Una función especial",
      "El valor de un char vacío"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "NULL está definido en <stddef.h> y otros headers. Siempre inicializar punteros a NULL: int *p = NULL. Verificar antes de usar: if(p != NULL). Derreferenciar NULL es undefined behavior (generalmente segfault)."
  },
  {
    question: "¿Qué hace <code>realloc(ptr, nuevo_tamaño)</code>?",
    options: [
      "Libera y crea un nuevo bloque siempre",
      "Siempre crea un nuevo bloque",
      "Redimensiona el bloque de memoria apuntado por ptr al nuevo tamaño; puede mover el bloque a una nueva dirección; retorna el nuevo puntero (o NULL si falla)",
      "Duplica el tamaño del bloque"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "IMPORTANTE: asignar el resultado de realloc a una variable temporal. Si falla y retorna NULL, el bloque original sigue válido. ptr = realloc(ptr, n) pierde el puntero original si realloc falla."
  },
  {
    question: "¿Cuántos parámetros puede tener main en C?",
    options: [
      "Solo con int argc",
      "1 (sin argumentos) o 3: main(int argc, char *argv[], char *envp[]); la forma estándar es main(int argc, char *argv[])",
      "Solo void",
      "Ilimitados con ..."
    ],
    correct: 1,
    difficulty: "E",
    explanation: "argc: número de argumentos. argv: array de strings (argv[0] es el nombre del programa). Forma completa: int main(int argc, char *argv[]). La forma int main(void) es para sin argumentos."
  },
  {
    question: "¿Qué hace <code>return 0</code> en main?",
    options: [
      "Indica al SO que el programa terminó exitosamente (0 = éxito, valores distintos de 0 = error)",
      "Es solo por convención",
      "Es obligatorio en C99+",
      "Retorna null"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "Por convención UNIX: 0 = éxito. C99 añadió que main puede omitir return 0 (retorna 0 implícitamente). EXIT_SUCCESS y EXIT_FAILURE en <stdlib.h> son las constantes estándar."
  },
  {
    question: "¿Qué es un puntero a función en C?",
    options: [
      "Un tipo de callback de C++",
      "Una variable que almacena la dirección de una función, permitiendo llamarla indirectamente",
      "Un tipo de función especial",
      "Una macro de función"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "int (*pf)(int, int) = &suma; pf(3, 4) llama a suma(3,4). Sintaxis: tipo_retorno (*nombre_puntero)(tipos_parametros). Esencial para callbacks, tablas de dispatch, implementar polimorfismo en C."
  },
  {
    question: "¿Qué es el preprocesador <code>#ifdef</code>?",
    options: [
      "Un guard de seguridad",
      "Una condición de runtime",
      "Compilación condicional: el código entre #ifdef y #endif solo se compila si el símbolo está definido",
      "Un tipo de #define"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "#ifdef DEBUG printf(\"debug: %d\\n\", x); #endif incluye la línea solo cuando se compila con -DDEBUG. Útil para código de depuración, código de plataforma específica."
  },
  {
    question: "¿Qué hace la directiva <code>#include</code>?",
    options: [
      "Importa una librería compilada",
      "El preprocesador inserta el contenido del archivo especificado en ese punto del código fuente",
      "Importa un namespace",
      "Enlaza un objeto externo"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "#include <stdio.h> busca en los directorios del sistema. #include \"mi_archivo.h\" busca en el directorio actual. El preprocesador literalmente copia el contenido del header."
  },
  {
    question: "¿Qué es la recursión en C y cuál es su limitación principal?",
    options: [
      "No tiene limitaciones",
      "Es igual a iteración",
      "No existe en C",
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
      "string",
      "letter"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "char almacena un único carácter (1 byte). Los strings en C son arrays de char terminados en '\\0'. No hay tipo string nativo en C."
  },
  {
    question: "¿Qué hace <code>memset(ptr, valor, n)</code>?",
    options: [
      "Mueve n bytes",
      "Compara n bytes",
      "Establece los primeros n bytes del bloque apuntado por ptr al valor dado (interpretado como unsigned char)",
      "Copia n bytes"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "memset(arr, 0, sizeof(arr)) inicializa a cero. memset(str, 'A', strlen(str)) llena de 'A'. Solo usa valores 0 o -1 (0xFF) para tipos no-char, ya que opera byte a byte."
  },
  {
    question: "¿Qué hace el modificador <code>const</code> aplicado a un puntero?",
    options: [
      "Hace el puntero nulo",
      "Inicializa el puntero a NULL",
      "Hace el puntero estático",
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
      "*ptr",
      "%p"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "%p imprime el valor de un puntero en hexadecimal. Siempre hacer cast a void*: printf(\"%p\", (void*)ptr). %x puede usarlo pero no es portable."
  },
  {
    question: "¿Qué diferencia hay entre un array global y uno local en C?",
    options: [
      "Los locales son más rápidos siempre",
      "Global: almacenado en .data/.bss (inicializado a 0 automáticamente), persiste durante toda la ejecución. Local: almacenado en el stack, sin inicializar por defecto, destruido al salir de la función",
      "Los globales son más seguros",
      "No hay diferencia"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "Variables globales y estáticas: inicializadas a 0 por el runtime. Variables locales: sin inicializar (basura). Stack tiene tamaño limitado; para arrays grandes usar static o malloc."
  },
  {
    question: "¿Qué es el stack overflow y cuándo ocurre en C?",
    options: [
      "Un tipo de buffer overflow",
      "Ocurre cuando el stack se agota: recursión demasiado profunda, arrays locales muy grandes, o llamadas a funciones muy anidadas",
      "Un error de enlazado",
      "Un error de compilación"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "El stack es limitado (típicamente 1-8 MB). int arr[1000000] en una función local puede causar stack overflow. Solución: usar malloc/calloc para datos grandes, o aumentar el límite del stack."
  },
  {
    question: "¿Qué es el comportamiento indefinido (undefined behavior) en C?",
    options: [
      "Un error de runtime siempre",
      "Un error de compilación",
      "Comportamiento no especificado por el estándar C; el compilador puede hacer cualquier cosa, incluyendo optimizaciones que asumen que UB no ocurre",
      "Un warning del compilador"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "UB: derreferenciar NULL, desbordamiento de entero con signo, acceder fuera de los límites de un array. El compilador puede eliminar código que 'no puede ejecutarse' si asume no hay UB, causando bugs sutiles."
  },
  {
    question: "¿Qué es un buffer overflow y por qué es peligroso?",
    options: [
      "Un error de compilación",
      "Un tipo de memory leak",
      "Llenar un buffer al máximo",
      "Escribir más datos que el tamaño de un buffer, corrompiendo memoria adyacente; puede sobrescribir la dirección de retorno y permitir ejecución de código arbitrario (exploit)"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "El ataque clásico de seguridad informática. gets() fue eliminado del estándar C11 por esta razón. Usar fgets(), snprintf(), strncat(). Stack canaries y ASLR son defensas comunes."
  },
  {
    question: "¿Qué es un puntero colgante (dangling pointer)?",
    options: [
      "Un puntero a puntero",
      "Un puntero que apunta a memoria que ya fue liberada o a un objeto que ya no existe (variable local fuera de scope)",
      "Un puntero NULL",
      "Un puntero no inicializado"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "free(ptr); *ptr = 5; → UB (dangling pointer). Función retorna &var_local; → UB. Tras free(): ptr = NULL para detectar usos accidentales. Valgrind detecta usos de dangling pointers."
  },
  {
    question: "¿Qué es un memory leak?",
    options: [
      "Memoria RAM que se filtra",
      "Un tipo de buffer overflow",
      "Solo en programas largos",
      "Memoria dinámica asignada con malloc/calloc que no se libera nunca con free; el proceso acumula memoria hasta agotar el sistema"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "El leak más común: malloc en un bucle sin free correspondiente. Valgrind, AddressSanitizer (-fsanitize=address) detectan leaks. En C moderno, considerar patrones de ownership claros."
  },
  {
    question: "¿Qué es la aritmética de punteros en C?",
    options: [
      "Multiplicar punteros",
      "Solo incremento y decremento",
      "Sumar las direcciones directamente",
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
      "Los punteros son un subconjunto de arrays",
      "Son tipos distintos sin relación",
      "Son exactamente iguales"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "arr[2] == *(arr+2). Pero: sizeof(int arr[10]) = 40, sizeof(int *p) = 8 (en 64-bit). Al pasar un array a función, se convierte a puntero (se pierde la dimensión)."
  },
  {
    question: "¿Qué son los punteros dobles (<code>int **p</code>)?",
    options: [
      "Un puntero que apunta a otro puntero; usado para arrays de strings, matrices dinámicas, y para modificar punteros dentro de funciones",
      "Un puntero a array",
      "Un tipo de referencia",
      "Dos punteros"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "char **argv es un array de strings (puntero a puntero a char). int **matriz para matrices 2D dinámicas. Para modificar un puntero en una función: void f(int **pp) { *pp = malloc(...); }"
  },
  {
    question: "¿Qué hace <code>typedef struct</code> en C?",
    options: [
      "Crea una clase",
      "Define una estructura anónima",
      "Permite crear un alias de tipo para una estructura, evitando usar 'struct' cada vez que se declara una variable",
      "Inicializa una estructura"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "typedef struct Punto { int x, y; } Punto; Ahora se puede usar Punto p en lugar de struct Punto p. En C++ esto es automático, en C (antes de C11) requiere typedef explícito."
  },
  {
    question: "¿Qué es una unión (union) en C?",
    options: [
      "Una estructura donde todos los miembros comparten la misma posición de memoria; el tamaño es el del miembro más grande; solo un miembro es válido a la vez",
      "La combinación de dos structs",
      "Una subclase de struct",
      "Un tipo de array"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "union { int i; float f; } u; u.i y u.f ocupan la misma memoria. Útil para parsear protocolos, conservar memoria cuando solo se usa un campo a la vez. Leer un miembro diferente al escrito es UB (con excepciones)."
  },
  {
    question: "¿Qué es el modificador <code>static</code> en una variable local?",
    options: [
      "La hace de solo lectura",
      "La hace privada",
      "La variable se almacena en .data/.bss en lugar del stack: persiste entre llamadas a la función pero solo es visible en ella",
      "La duplica en cada llamada"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "static int contador = 0; en una función: contador persiste entre llamadas. static en variable global: limita la visibilidad al archivo (file scope). static en función: la función no es visible en otros archivos."
  },
  {
    question: "¿Qué es el modificador <code>extern</code> en C?",
    options: [
      "Llama a código externo",
      "Declara que una variable o función está definida en otra unidad de compilación; le dice al enlazador que la busque",
      "Hace la variable global siempre",
      "Es sinónimo de static"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "extern int x; en archivo B declara que x está definida en otro archivo (archivo A: int x = 5;). Necesario para variables globales compartidas entre archivos. Para funciones no es necesario (son extern por defecto)."
  },
  {
    question: "¿Qué es el paso de argumentos por valor vs por puntero en C?",
    options: [
      "Por valor: se copia el argumento (cambios no afectan al original). Por puntero: se copia la dirección (permite modificar el original desreferenciando)",
      "Por puntero es más lento",
      "C solo pasa por valor",
      "Por valor es solo para primitivos"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "C siempre pasa por valor. Para simular paso por referencia: pasar &var y en la función: *param = nuevo_valor. Esto es lo que hacen scanf y funciones como swap(int *a, int *b)."
  },
  {
    question: "¿Qué hace <code>sprintf</code>?",
    options: [
      "Es igual a printf",
      "Lee de un string",
      "Escribe una cadena formateada en un buffer de caracteres en lugar de en stdout; seguridad: snprintf es la alternativa segura con límite de tamaño",
      "Imprime en stderr"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "sprintf(buf, \"%d-%s\", num, str). Peligroso si buf es pequeño. snprintf(buf, sizeof(buf), ...) limita la escritura. Esencial para construir strings dinámicamente en C."
  },
  {
    question: "¿Qué hace el calificador <code>volatile</code> en C?",
    options: [
      "Hace la variable mutable",
      "Indica que la variable puede cambiar externamente (hardware, otro hilo, señal); previene que el compilador la cachee en un registro o elimine accesos 'redundantes'",
      "Es obsoleto en C moderno",
      "Hace la variable más rápida"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "volatile int *puerto = (int*)0x4000; El compilador lee/escribe memoria cada vez, sin optimizar. Esencial en drivers de hardware y código de señales. No garantiza atomicidad (para eso: _Atomic en C11)."
  },
  {
    question: "¿Cuál es la diferencia entre <code>fgets</code> y <code>gets</code>?",
    options: [
      "fgets no lee newlines",
      "Solo el nombre",
      "fgets(buf, n, stdin) limita la lectura a n-1 caracteres (seguro); gets() no tiene límite y fue eliminada en C11 por ser un vector de buffer overflow",
      "gets es más moderno"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "gets() es la raíz de incontables vulnerabilidades de seguridad. Fue deprecada en C99, eliminada en C11. Siempre usar fgets(). Para leer líneas completas sin newline: str[strcspn(str, \"\\n\")] = '\\0'."
  },
  {
    question: "¿Qué es el tipo <code>FILE*</code> en C?",
    options: [
      "Un tipo definido por el usuario",
      "Solo para archivos de texto",
      "Un puntero opaco a una estructura que representa un archivo abierto; usado con fopen, fclose, fprintf, fscanf, fgets, fread, fwrite",
      "Un descriptor de archivo entero"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "FILE *f = fopen(\"archivo.txt\", \"r\"); // \"r\",\"w\",\"a\",\"rb\",\"wb\" fgets(buf, n, f); fclose(f). Siempre verificar que fopen no retornó NULL. Siempre cerrar con fclose."
  },
  {
    question: "¿Qué es el linker (enlazador) y qué hace?",
    options: [
      "Un tipo de compilador",
      "Combina múltiples archivos objeto (.o) y librerías para crear el ejecutable final; resuelve referencias a símbolos externos (funciones y variables declaradas como extern)",
      "Un optimizador de código",
      "Un preprocesador especial"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "Compilación: .c → .o (compilador). Enlazado: .o + .a/.so → ejecutable (linker). Errores de linker: undefined reference (símbolo no encontrado), multiple definition (símbolo duplicado)."
  },
  {
    question: "¿Qué es una función de comparación para <code>qsort</code>?",
    options: [
      "Una función int cmp(const void *a, const void *b) que retorna <0, 0, o >0 según el orden de a respecto a b",
      "Una función de hash",
      "Una función booleana",
      "Un tipo de puntero a función especial"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "int cmp_int(const void *a, const void *b) { return (*(int*)a - *(int*)b); } qsort(arr, n, sizeof(int), cmp_int). Cuidado con overflow en la resta para enteros grandes; usar comparación explícita."
  },
  {
    question: "¿Qué hace <code>bsearch</code>?",
    options: [
      "Una búsqueda lineal",
      "Búsqueda binaria en un array ordenado; usa la misma firma de comparación que qsort; retorna puntero al elemento o NULL si no se encuentra",
      "Una búsqueda recursiva automática",
      "Busca en cadenas"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "void *r = bsearch(&clave, arr, n, sizeof(int), cmp); if(r) printf(\"Encontrado\"); El array DEBE estar ordenado. Complemento natural de qsort."
  },
  {
    question: "¿Qué es el bit field en una struct de C?",
    options: [
      "Un campo de bits arbitrario",
      "Un tipo de int especial",
      "Solo para flags booleanos",
      "Un campo de una struct que especifica cuántos bits ocupa: struct { unsigned int activo: 1; unsigned int nivel: 4; } permite empaquetar múltiples valores en una palabra"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "Los bit fields permiten definir structs compactas para protocolos de hardware. El orden y empaquetado dependen de la implementación. Útil para parsear cabeceras de red o registros de hardware."
  },
  {
    question: "¿Qué hace <code>longjmp</code> y <code>setjmp</code>?",
    options: [
      "Saltos incondicionales goto avanzados",
      "Son obsoletos en C99",
      "Son solo para recursión",
      "setjmp guarda el contexto de ejecución; longjmp restaura ese contexto desde cualquier punto de la pila de llamadas, implementando manejo de excepciones no estructurado"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "setjmp es comparable a try, longjmp es comparable a throw. Peligros: destructores no se llaman (C no los tiene), recursos no se liberan. Útil para recovery de errores en sistemas embebidos."
  },
  {
    question: "¿Cuál es la diferencia entre <code>printf</code> y <code>fprintf</code>?",
    options: [
      "printf solo imprime enteros",
      "fprintf escribe a un FILE* especificado (puede ser stdout, stderr, o un archivo); printf es equivalente a fprintf(stdout, ...)",
      "fprintf es más lento",
      "Son iguales"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "fprintf(stderr, \"Error: %s\\n\", msg) escribe a stderr. fprintf(archivo, ...) escribe al archivo. printf siempre va a stdout. Para mensajes de error, siempre usar stderr."
  },
  {
    question: "¿Qué hace el modificador <code>register</code> en C?",
    options: [
      "Es sinónimo de static",
      "Una pista al compilador para almacenar la variable en un registro de CPU (acceso más rápido); en C moderno es ignorado por los compiladores modernos que optimizan automáticamente",
      "Hace la variable volatile",
      "Hace la variable de registro del hardware"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "register int i fue útil en C antiguo. Los compiladores modernos ignoran esta pista y hacen mejor trabajo de asignación de registros solos. En C11, se eliminó la restricción de no tomar su dirección."
  },
  {
    question: "¿Cuáles son los tipos de almacenamiento (storage class) en C?",
    options: [
      "Solo auto y static",
      "Son solo convenciones",
      "Solo static y extern",
      "auto (default para locales, stack), static (persistente, .data/.bss), extern (definición en otro archivo), register (sugerencia de registro)"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "auto es el default y rara vez se escribe explícitamente. static tiene dos significados (local persistente vs file scope). extern para variables compartidas entre archivos."
  },
  {
    question: "¿Qué es la diferencia entre declaración y definición en C?",
    options: [
      "Solo aplica a variables",
      "Declaración: informa al compilador sobre el tipo/firma sin reservar memoria (extern int x, prototipos de función). Definición: reserva memoria e implementa",
      "Son sinónimos",
      "Solo aplica a funciones"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "int x; // declaración y definición. extern int x; // solo declaración. int f(); // declaración (prototipo). int f() { ... } // definición. Cada símbolo puede declararse múltiples veces pero solo definirse una vez."
  },
  {
    question: "¿Qué es el operador de coma en C?",
    options: [
      "Evalúa dos expresiones de izquierda a derecha y retorna el valor de la expresión derecha; raramente usado fuera de bucles for",
      "Un operador de bits",
      "El separador de argumentos",
      "Es igual a punto y coma"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "for(int i=0, j=10; i<j; i++, j--): el i++, j-- usa el operador coma. También: x = (a=5, b=6, a+b) asigna 11 a x. Código confuso; usar con cuidado."
  },
  {
    question: "¿Qué es un array de strings en C y cómo se declara?",
    options: [
      "char arr = {\"hola\"}",
      "string arr[]",
      "string[] arr",
      "char *arr[] = {\"hola\", \"mundo\"} o char arr[][20] = {\"hola\", \"mundo\"}"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "char *arr[] de punteros a string literals (no modificables). char arr[][20] de arrays de chars modificables pero desperdicia espacio. Para argv: char *argv[] es correcto."
  },
  {
    question: "¿Qué hace <code>memmove</code> vs <code>memcpy</code>?",
    options: [
      "memmove es obsoleta",
      "Son idénticas",
      "memcpy es más segura",
      "memcpy requiere que origen y destino no se solapen; memmove maneja correctamente regiones solapadas pero puede ser más lento"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "Si src y dst se solapan y usas memcpy: undefined behavior. memmove garantiza corrección incluso con solapamiento. Para caso general o dudoso: siempre usar memmove."
  },
  {
    question: "¿Qué es la notación de array vs puntero en parámetros de función?",
    options: [
      "arr[] preserva el tamaño",
      "En parámetros de función, int arr[] y int *arr son exactamente equivalentes; el array decae a puntero. El tamaño se pierde y debe pasarse como parámetro adicional",
      "Son tipos distintos",
      "*arr es más eficiente"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "void f(int arr[], int n) == void f(int *arr, int n). El n es necesario porque sizeof(arr) dentro de f daría sizeof(int*), no el tamaño del array original."
  },
  {
    question: "¿Qué hace <code>strtol</code> vs <code>atoi</code>?",
    options: [
      "strtol solo funciona con long",
      "Son iguales",
      "atoi es más moderno",
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
      "Solo en C++",
      "Son un hack del compilador",
      "Un error de sintaxis"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "C11 añadió anonymous structs/unions. Muy útil para crear tipos con múltiples representaciones. Antes de C11 era una extensión de GCC ampliamente usada."
  },
  {
    question: "¿Cómo funciona la alineación de memoria (alignment) en structs de C?",
    options: [
      "Solo en arquitecturas x86",
      "Es configurable con #pragma",
      "Los campos se empaquetan siempre",
      "El compilador inserta padding entre campos para alinear cada campo a su alineación natural; struct { char a; int b; } tiene 8 bytes, no 5"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "struct { char a; int b; } → char(1) + padding(3) + int(4) = 8 bytes. Para empaquetar: __attribute__((packed)) en GCC o #pragma pack(1). El empaquetado puede degradar el rendimiento por accesos no alineados."
  },
  {
    question: "¿Qué es el undefined behavior de desbordamiento de entero con signo?",
    options: [
      "Simplemente trunca el resultado",
      "En C, el desbordamiento de int (signed) es undefined behavior: el compilador puede asumir que no ocurre y optimizar código basándose en esa suposición, causando bugs sutiles",
      "Es igual al desbordamiento unsigned",
      "Solo en arquitecturas RISC"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "int max = INT_MAX; max + 1; // UB. El compilador puede eliminar loops que asume que no desbordan. Para overflow seguro: usar unsigned (overflow wrapping es bien definido) o builtin_add_overflow."
  },
  {
    question: "¿Qué es el strict aliasing rule en C?",
    options: [
      "El estándar C define que un puntero de un tipo no puede alias (apuntar a) un objeto de un tipo diferente, excepto char*; el compilador usa esto para optimizaciones agresivas",
      "Una regla de nomenclatura",
      "Es solo una recomendación",
      "Solo aplica a punteros void"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "float f = 1.0; int i = *(int*)&f; // UB (strict aliasing violation). Solución: memcpy(&i, &f, sizeof(int)); // correcto. -fno-strict-aliasing en GCC deshabilita la regla (más lento)."
  },
  {
    question: "¿Qué es la diferencia entre <code>restrict</code> keyword y su impacto en optimización?",
    options: [
      "Similar a const",
      "Solo en C11",
      "restrict en C99 indica al compilador que el puntero es el único acceso al objeto apuntado durante su scope; permite optimizaciones que serían incorrectas con aliasing",
      "Es solo documentación"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "memcpy tiene restrict en sus parámetros: void *memcpy(void *restrict dst, const void *restrict src, size_t n). Garantiza que dst y src no se solapan. El compilador puede vectorizar con SIMD."
  },
  {
    question: "¿Cómo funciona un hash table en C a bajo nivel?",
    options: [
      "Solo con punteros dobles",
      "Es un array con búsqueda lineal",
      "Array de buckets + función hash que mapea claves a índices + manejo de colisiones (chaining con listas enlazadas o open addressing); implementar requiere gestión manual de memoria",
      "Es una librería estándar"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "No hay hash table estándar en C. Implementación: struct Bucket { clave, valor, siguiente*}; Bucket *tabla[TAMAÑO]. hash(clave) % TAMAÑO da el índice. Colisiones con encadenamiento."
  },
  {
    question: "¿Cómo implementar listas enlazadas en C?",
    options: [
      "Con arrays",
      "Con uniones",
      "Con punteros dobles solo",
      "struct Nodo { int dato; struct Nodo *siguiente; }. La lista es un Nodo* al primero. Insertar al inicio: O(1). Insertar al final: O(n) o mantener puntero al último"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "Operaciones fundamentales: insertar, eliminar, buscar, invertir. Cuidado al liberar: free cada nodo. Para lista doblemente enlazada: añadir struct Nodo *anterior. Sentinela (nodo dummy) simplifica el código."
  },
  {
    question: "¿Qué es el modelo de memoria de C y las regiones de memoria?",
    options: [
      "Es igual al modelo de Java",
      "Solo hay heap",
      "Stack (variables locales, frames de función), Heap (malloc), .data (globales/estáticas inicializadas), .bss (globales/estáticas sin inicializar = 0), .text (código), .rodata (constantes)",
      "Solo hay stack y heap"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "Stack: LIFO, rápido, tamaño limitado. Heap: flexible, gestionado manualmente. .text y .rodata son de solo lectura. .bss no ocupa espacio en el binario (el SO lo inicializa a 0)."
  },
  {
    question: "¿Cómo funciona el casting de punteros y cuándo es seguro?",
    options: [
      "Siempre es seguro",
      "El cast de punteros es seguro cuando los tipos son compatibles en alineación y representación, o cuando se convierte a char* (para acceso byte a byte); de otro modo puede violar strict aliasing",
      "Solo con void*",
      "El cast siempre es UB"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "void* ↔ cualquier tipo de puntero: seguro. Reinterpretar float* como int*: violación de strict aliasing (usar memcpy). unsigned char*: puede acceder a la representación de cualquier objeto (excepción al strict aliasing)."
  },
  {
    question: "¿Qué es el address sanitizer (ASan) y cómo usarlo?",
    options: [
      "Solo en producción",
      "Un verificador estático",
      "Una herramienta de red",
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
      "Un analizador estático",
      "Un compilador alternativo",
      "Un depurador de código"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "valgrind --leak-check=full ./programa. Más lento que ASan (~20x) pero no requiere recompilación. Cachegrind (profiling de cache), Helgrind (data races en threads), DRD (más data races)."
  },
  {
    question: "¿Cómo implementar genéricos en C sin usar void*?",
    options: [
      "Con macros que generan código tipado: #define VECTOR_TYPE(T) struct { T *data; size_t len, cap; } o con _Generic (C11) para selección de función según tipo",
      "Solo con casting",
      "Con typedef siempre",
      "No es posible"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "_Generic(x, int: f_int, float: f_float, default: f_default)(x) selecciona la función en compilación. Macros de generación de código (tipo STC library) generan funciones tipadas. No hay templates como en C++."
  },
  {
    question: "¿Qué es <code>_Static_assert</code> en C11?",
    options: [
      "Una aserción que se evalúa en tiempo de compilación; si falla, es un error de compilación con el mensaje dado",
      "Un assert dinámico",
      "Un tipo de macro",
      "Es igual a assert()"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "_Static_assert(sizeof(int) == 4, \"Se requiere int de 32 bits\"); Si sizeof(int) != 4, el compilador falla con el mensaje. Garantiza suposiciones sobre el sistema en tiempo de compilación."
  },
  {
    question: "¿Cómo funciona el modelo de concurrencia de C11 (<code>_Atomic</code>)?",
    options: [
      "C11 añadió _Atomic que garantiza operaciones atómicas sin lock para tipos básicos; __atomic_load, __atomic_store, atomic_compare_exchange_strong, etc.",
      "C no tiene concurrencia",
      "Requiere threads externas",
      "Es solo volatile"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "_Atomic int contador = 0; atomic_fetch_add(&contador, 1); // atómico y sin data race. Combinado con <threads.h> (también C11) para programación concurrente portable."
  },
  {
    question: "¿Qué son las señales (signals) en C POSIX?",
    options: [
      "Notificaciones asíncronas enviadas a un proceso (SIGSEGV, SIGTERM, SIGINT); signal() o sigaction() registran handlers; muy limitados en lo que pueden hacer (solo signal-safe functions)",
      "Igual a eventos de Windows",
      "Un tipo de exception",
      "Mensajes entre procesos"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "SIGSEGV: acceso inválido a memoria. SIGTERM: petición de terminación. SIGINT: Ctrl+C. Los handlers solo pueden llamar a funciones async-signal-safe (write(), _exit(), etc.). Evitar printf() en handlers."
  },
  {
    question: "¿Qué es el buffer de E/S de C y cómo afecta el rendimiento?",
    options: [
      "Los buffers causan solo problemas",
      "Solo en archivos",
      "Solo printf tiene buffer",
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
      "Las macros no pueden ser variádicas",
      "Con funciones variádicas solo",
      "Solo en C11"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "Macros variádicas C99: #define DEBUG(fmt, ...) fprintf(stderr, fmt, ##__VA_ARGS__). __VA_OPT__ (C23) es la forma estándar de eliminar la coma. Las macros variádicas son base de sistemas de logging en C."
  },
  {
    question: "¿Qué es el conditional expression y el sequence point en C?",
    options: [
      "Solo en C++11",
      "Son lo mismo",
      "Son solo advertencias",
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
      "No es posible sin C++",
      "Con void* y callbacks",
      "Solo con arrays fijos"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "Las macros X-macro o las macros de generación de código permiten crear contenedores tipados. STC (Standard Template Containers for C) implementa esto. Alternativa: void* con funciones de comparación."
  },
  {
    question: "¿Qué es <code>__attribute__((noreturn))</code> y por qué es útil?",
    options: [
      "Una función que retorna nada",
      "Solo en GCC",
      "Es igual a void",
      "Indica al compilador que la función nunca retorna (exit, abort, longjmp); permite mejor análisis de flujo y elimina advertencias de 'función puede no retornar un valor'"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "void __attribute__((noreturn)) mi_exit(int code) { ... } El compilador puede optimizar el código que llama a mi_exit() asumiendo que el código posterior es inalcanzable."
  },
  {
    question: "¿Qué es un flexible array member en C99?",
    options: [
      "Un array de tamaño variable",
      "El último miembro de una struct puede ser un array sin tamaño: struct { int len; char data[]; } Permite structs de tamaño variable con un solo malloc",
      "Un VLA dentro de una struct",
      "Un tipo de array 2D"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "struct Buffer { size_t len; char data[]; }; malloc(sizeof(struct Buffer) + n) asigna la struct y el array contiguo. Mejor que struct con char *data porque un único free() es suficiente."
  },
  {
    question: "¿Qué son los Variable Length Arrays (VLA) y sus controversias?",
    options: [
      "Son lo mismo que malloc",
      "Son siempre seguros",
      "Son más rápidos que malloc siempre",
      "Arrays cuyo tamaño se determina en runtime: int arr[n]; Eran obligatorios en C99, opcionales en C11; problemáticos porque el stack puede agotarse y no hay forma de detectar el fallo"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "VLAs son peligrosos: si n es grande o malicioso, el stack desborda sin error detectable. Por eso C11 los hizo opcionales. Linus Torvalds prohibió VLAs en el kernel Linux en 2018. Usar malloc con verificación."
  },
  {
    question: "¿Cómo usar pthreads para programación multihilo en C?",
    options: [
      "Solo en Linux",
      "C no soporta threads",
      "Solo con C11 <threads.h>",
      "#include <pthread.h>; pthread_create(&tid, NULL, funcion, arg); pthread_join(tid, NULL); pthread_mutex_lock/unlock para secciones críticas"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "POSIX threads (pthreads): el API de facto para threads en Unix. pthread_mutex_t, pthread_cond_t para sincronización. Compilar con -lpthread. C11 añadió <threads.h> como alternativa estándar."
  },
  {
    question: "¿Qué es el undefined behavior de acceder a un puntero después de realloc?",
    options: [
      "realloc siempre mantiene el puntero",
      "Solo es un warning",
      "Si realloc mueve el bloque, el puntero original queda inválido (dangling). El código que guarda el resultado en una variable temporal es incorrecto si realloc falla",
      "realloc nunca mueve el bloque"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "int *nuevo = realloc(ptr, nuevo_tamaño); if(nuevo) ptr = nuevo; De otro modo: si realloc retorna NULL (fallo), ptr sigue siendo válido y no se pierde la referencia. Patrón correcto."
  },
  {
    question: "¿Qué son los fat pointers y cómo simulan seguridad en C?",
    options: [
      "Una extensión del compilador",
      "Punteros de 128 bits",
      "Solo para strings",
      "Estructuras que combinan el puntero con metadata de seguridad (tamaño, límites); no son estándar en C pero los lenguajes seguros los usan internamente"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "C no tiene fat pointers estándar. Algunos proyectos los implementan manualmente: struct { T *ptr; size_t len; }. El lenguaje Rust tiene fat pointers nativos para slices y objetos trait."
  },
  {
    question: "¿Qué son los designated initializers en C99?",
    options: [
      "Son igual a constructores",
      "Inicialización por nombre de variable",
      "Una inicialización especial de C11",
      "Inicializar structs o arrays por nombre de campo o índice: struct Punto p = { .x = 1, .y = 2 }; int arr[5] = { [2] = 7, [4] = 9 }"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "Designated initializers permiten inicializar campos en cualquier orden y dejar los demás a 0. Muy útiles para structs grandes donde solo se necesitan inicializar algunos campos."
  },
  {
    question: "¿Qué es el typedef de función en C?",
    options: [
      "Un tipo de macro",
      "typedef int (*MiFunc)(int, int) crea un alias de tipo para el puntero a función; hace el código más legible y permite cambiar fácilmente la firma",
      "Definir una función",
      "Crear alias de funciones"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "typedef void (*Callback)(void *data); Callback cb = mi_funcion; cb(datos). Más legible que void (*cb)(void *data) = mi_funcion. Esencial para sistemas de plugins y callbacks."
  },
  {
    question: "¿Cómo funciona la optimización de tail call en C?",
    options: [
      "Cuando la última operación de una función es una llamada recursiva, el compilador puede reutilizar el frame actual en lugar de crear uno nuevo, evitando stack overflow",
      "Es automática siempre",
      "No existe en C",
      "Solo en recursión mutua"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "GCC optimiza tail calls con -O2. No todas las funciones recursivas son tail-recursive. int fact_tail(int n, int acc) { return n == 0 ? acc : fact_tail(n-1, n*acc); } es tail-recursive."
  },
  {
    question: "¿Qué es el control flow integrity (CFI) y cómo protege a C?",
    options: [
      "Es solo una heurística",
      "Solo detecta buffer overflows",
      "Un control de versiones",
      "Técnica de seguridad que verifica en runtime que los saltos indirectos (llamadas a función vía puntero) van a destinos válidos; previene ciertos exploits de corrupción de flujo de control"
    ],
    correct: 3,
    difficulty: "B",
    explanation: "-fsanitize=cfi en Clang instrumenta las llamadas indirectas. CFI verifica que los punteros a función apuntan a funciones del tipo correcto. Defiende contra ROP (Return-Oriented Programming) y VTable hijacking."
  },
  {
    question: "¿Qué es el memory model de C11 y sus garantías?",
    options: [
      "Las mismas que POSIX threads",
      "C11 define un memory model formal: operaciones atómicas con ordenaciones de memoria (sequentially consistent, acquire/release, relaxed) que garantizan visibilidad entre threads",
      "No hay garantías formales",
      "Es igual a volatile"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "atomic_store_explicit(&x, 1, memory_order_release); atomic_load_explicit(&x, memory_order_acquire); establece una relación happens-before. memory_order_relaxed: solo atomicidad, sin ordering."
  },
  {
    question: "¿Cómo implementar un allocator de memoria personalizado en C?",
    options: [
      "No es posible",
      "Solo con malloc",
      "Usar sbrk()/mmap() para obtener memoria del SO, implementar un free list (lista de bloques libres) con header metadata, first-fit/best-fit para asignación",
      "Sobreescribir malloc con macros"
    ],
    correct: 2,
    difficulty: "B",
    explanation: "Allocators personalizados: slab allocator para objetos del mismo tamaño (pool), bump pointer allocator para allocación lineal sin free. jemalloc y tcmalloc son ejemplos de allocators de alto rendimiento."
  },
  {
    question: "¿Qué es el heap metadata corruption y cómo se explota?",
    options: [
      "Ya no es posible en sistemas modernos",
      "Solo teórico",
      "Las implementaciones de malloc almacenan metadata (tamaño, flags) junto al bloque del usuario; sobrescribir esta metadata con buffer overflow puede corromper la estructura del heap, permitiendo ejecución de código arbitrario",
      "Un error de compilación"
    ],
    correct: 2,
    difficulty: "B",
    explanation: "Hardening moderno: heap canaries (guard values), safe unlinking, ASLR del heap, randomización de offsets. GCC -fheap-overflow detecta algunos casos. Shadow memory (ASan) verifica cada acceso."
  },
  {
    question: "¿Qué es el intrinsic de CPU y cómo usarlo en C?",
    options: [
      "Funciones especiales que mapean directamente a instrucciones del CPU (SIMD, criptografía, atómicos); GCC/Clang exponen intrinsics SSE/AVX via <immintrin.h>",
      "Son macros del preprocesador",
      "Instrucciones del assembler",
      "Solo en código assembly"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "__m256i v = _mm256_loadu_si256(ptr); __m256i r = _mm256_add_epi32(v, otro); _mm256_storeu_si256(dst, r). Permite vectorización explícita cuando el autovectorizador no lo hace automáticamente."
  },
  {
    question: "¿Qué es el return-oriented programming (ROP) y cómo lo explota el atacante?",
    options: [
      "Una técnica de explotación que encadena 'gadgets' (secuencias de instrucciones terminadas en RET) existentes en el binario para ejecutar código arbitrario, eludiendo DEP/NX",
      "Se previene solo con ASLR",
      "Un tipo de código recursivo",
      "Solo teórico"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "ROP evita inyectar código nuevo: encadena instrucciones existentes en la memoria del programa. Defensa: ASLR + CFI (Control Flow Integrity) + stack canaries. ret2libc es un precursor de ROP."
  },
  {
    question: "¿Cómo funciona el sanitizer de thread (TSan) y qué detecta?",
    options: [
      "Es igual a ASan",
      "TSan (Thread Sanitizer) detecta data races: cuando dos threads acceden al mismo dato sin sincronización y al menos uno escribe; compila con -fsanitize=thread",
      "Solo detecta deadlocks",
      "Requiere Valgrind"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "gcc -fsanitize=thread -g programa.c. Overhead: ~5-15x. TSan instrumenta todas las operaciones de memoria y bloqueos. Los data races son bugs muy sutiles y difíciles de reproducir."
  },
  {
    question: "¿Qué es el profile-guided optimization (PGO) en C?",
    options: [
      "Es solo una forma de -O3",
      "Solo para benchmarks",
      "Un profiler de código",
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
      "Es automático siempre",
      "Optimizar links del SO",
      "Solo para librerías"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "gcc -flto programa.c otro.c: el compilador emite IR (GIMPLE) en .o en lugar de código máquina; el enlazador hace optimizaciones globales. Puede reducir el tamaño del binario y mejorar el rendimiento 5-15%."
  },
  {
    question: "¿Cómo implementar un garbage collector simple en C?",
    options: [
      "Es imposible sin soporte del SO",
      "Solo con C++",
      "C no puede tener GC",
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
      "Un tipo de archivo de debug",
      "Un formato de imagen",
      "Solo para el kernel"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "readelf, objdump, nm son herramientas para inspeccionar ELFs. Las tablas de símbolos en ELF son las que el linker usa para resolver referencias. Entender ELF es esencial para programación de sistemas."
  },
  {
    question: "¿Cómo funciona la convención de llamadas (calling convention) en x86-64?",
    options: [
      "Es transparente para el programador",
      "Varía por compilador",
      "Solo importa en assembly",
      "System V AMD64 ABI: primeros 6 argumentos enteros en rdi, rsi, rdx, rcx, r8, r9; retorno en rax; el callee preserva rbx, rbp, r12-r15"
    ],
    correct: 3,
    difficulty: "B",
    explanation: "Entender la calling convention permite: escribir assembly que interopera con C, entender el overhead de funciones, escribir código de bajo nivel eficiente. Windows usa una convención diferente."
  },
  {
    question: "¿Qué es el zero-copy y cómo se implementa en C?",
    options: [
      "Solo en sistemas embebidos",
      "Una técnica de rendimiento solo teórica",
      "Solo con DMA del hardware",
      "Técnicas para transferir datos sin copiarlos en el espacio de usuario: mmap() mapea archivos en memoria, sendfile() envía datos de archivo a socket directamente en el kernel"
    ],
    correct: 3,
    difficulty: "B",
    explanation: "sendfile(socket_fd, file_fd, NULL, count) transfiere datos sin pasar por el espacio de usuario. mmap() permite acceder a archivos sin leerlos explícitamente. Fundamental para servidores de alta performance (nginx usa estos)."
  },
  {
    question: "¿Cómo funciona el modelo de seguridad basado en capacidades para C?",
    options: [
      "Solo en el kernel",
      "Sandboxing de código C usando seccomp (filtrado de syscalls en Linux), capabilities de POSIX, pledge/unveil en OpenBSD; limita lo que el proceso puede hacer si es comprometido",
      "Solo con virtualización",
      "Un sistema de permisos de archivo"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "seccomp: syscall filtering que permite solo las syscalls necesarias. Si el proceso es explotado, no puede hacer fork(), exec(), open() arbitrarios. Chromium y Firefox usan seccomp para sandboxing."
  },
  {
    question: "¿Qué es el thinLTO de LLVM/Clang?",
    options: [
      "Una versión ligera de LTO",
      "Solo para iOS",
      "Es igual a LTO de GCC",
      "LTO incremental: en lugar de enlazar todo el código IR junto, usa índices de módulos para hacer optimizaciones cross-module de forma más eficiente y paralelizable que LTO completo"
    ],
    correct: 3,
    difficulty: "B",
    explanation: "ThinLTO escala mejor que FullLTO en proyectos grandes: preprocesa índices en paralelo, hace inlining cross-module selectivo. Facebook, Google lo usan en producción. Clang: -flto=thin."
  },
  {
    question: "¿Qué es el Undefined Behavior Sanitizer (UBSan)?",
    options: [
      "Es igual a ASan",
      "Detecta en runtime comportamientos indefinidos: desbordamiento de entero, null pointer dereference, shift inválido, misaligned access, uso de VLAs con tamaño 0; -fsanitize=undefined",
      "Solo para aritmética",
      "Detecta errores de tipos"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "Combinar: -fsanitize=address,undefined,thread. UBSan añade checks inline en el código. Imprescindible durante desarrollo. Ayuda a encontrar bugs que parecen funcionar pero son UB y pueden fallar en producción."
  },
  {
    question: "¿Cómo implementar introspección de tipos en C?",
    options: [
      "C11 _Generic permite dispatch en tiempo de compilación. __builtin_types_compatible_p (GCC) verifica compatibilidad de tipos. Para introspección en runtime: estructuras de metadatos manuales",
      "Solo con void*",
      "No es posible en C",
      "Con macros simples"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "#define PRINT(x) _Generic((x), int: printf(\"%d\", (int)(x)), float: printf(\"%f\", (float)(x)), char*: printf(\"%s\", (char*)(x)))(x). C11 _Generic es selección de expresión en compilación basada en tipo."
  },
  {
    question: "¿Qué es el memory-mapped I/O y cómo se implementa en C?",
    options: [
      "Solo en Linux",
      "Solo para hardware",
      "mmap() mapea un archivo (o hardware) al espacio de direcciones del proceso; acceder a la memoria accede al archivo/hardware directamente, sin read()/write() explícitos",
      "Un tipo especial de archivo"
    ],
    correct: 2,
    difficulty: "B",
    explanation: "void *addr = mmap(NULL, len, PROT_READ|PROT_WRITE, MAP_SHARED, fd, 0); addr[offset] accede al byte offset del archivo. Cambios con MAP_SHARED son visibles a otros procesos que mapeen el mismo archivo."
  },
  {
    question: "¿Qué es el técnica de hashing por open addressing vs chaining?",
    options: [
      "Solo importa el factor de carga",
      "Chaining: cada bucket tiene una lista enlazada de colisiones (más memoria). Open addressing: colisiones se resuelven buscando el siguiente bucket libre (linear/quadratic probing); mejor localidad de caché",
      "Son iguales",
      "Chaining es siempre mejor"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "Open addressing: mejor cache performance (array contiguo). Chaining: más fácil de implementar, mejor con alta tasa de colisiones. Robin Hood hashing (variante de open addressing) reduce la varianza de longitud de búsqueda."
  },
  {
    question: "¿Cómo funciona el compilador de C a nivel de representación intermedia?",
    options: [
      "El preprocesador hace todas las optimizaciones",
      "Solo genera código máquina directamente",
      "GCC usa GIMPLE/RTL como IRs; Clang usa LLVM IR. Las optimizaciones (inlining, DCE, CSE, alias analysis) operan sobre la IR antes de la generación de código",
      "Es igual a un intérprete"
    ],
    correct: 2,
    difficulty: "A",
    explanation: "LLVM IR: SSA form (Static Single Assignment). Pases de optimización: mem2reg, instcombine, gvn, licm, vectorize. gcc -fdump-tree-all vuelca el GIMPLE en cada fase. Estudiar IR ayuda a entender qué optimizaciones hace el compilador."
  },
  {
    question: "¿Qué es el alias analysis y cómo impacta en la optimización de C?",
    options: [
      "Análisis de nombres de variables",
      "No existe en compiladores C",
      "El compilador analiza si dos punteros pueden apuntar al mismo objeto (aliases); si no pueden, puede reordenar operaciones y vectorizar; restrict y __restrict__ dan esta garantía explícita",
      "Solo con volatile"
    ],
    correct: 2,
    difficulty: "A",
    explanation: "Si el compilador no puede probar no-aliasing, no puede vectorizar ni reordenar accesos. restrict: la solución explícita. Type-based alias analysis (TBAA): punteros de tipos incompatibles no pueden alias (strict aliasing rule)."
  },
  {
    question: "¿Cómo se implementa un sistema de plugins con dlopen/dlsym en C POSIX?",
    options: [
      "Solo con static linking",
      "Con system() y execv()",
      "No es posible en C",
      "dlopen() carga una biblioteca dinámica en runtime, dlsym() obtiene un puntero a un símbolo por nombre; permite cargar plugins sin recompilar la aplicación principal"
    ],
    correct: 3,
    difficulty: "A",
    explanation: "void *handle = dlopen(\"plugin.so\", RTLD_LAZY); void (*f)(void) = dlsym(handle, \"funcion\"); f(); dlclose(handle). Los plugins deben exponer una interfaz C (extern \"C\" en C++)."
  },
  {
    question: "¿Qué es el hardening binario y qué técnicas de compilación existen?",
    options: [
      "Solo con ASan",
      "Solo ASLR",
      "RELRO (rebind-only GOT), PIE/ASLR (position independent executables), stack canaries (-fstack-protector), FORTIFY_SOURCE, CFI, shadow stack (CET); en conjunto crean defensa en profundidad",
      "Es solo para el kernel"
    ],
    correct: 2,
    difficulty: "A",
    explanation: "gcc -fstack-protector-strong -pie -z relro -z now -D_FORTIFY_SOURCE=2. FORTIFY_SOURCE: reemplaza funciones inseguras por versiones con checks de tamaño. Stack canaries: detectan smashing del stack."
  },
  {
    question: "¿Cómo funcionan los fat binaries y la compilación multi-arquitectura en C?",
    options: [
      "Con condicionales en el código",
      "lipo (macOS) combina binarios para múltiples arquitecturas. Universal binaries macOS tienen código para ARM64 y x86-64. CMake con toolchains cross-compila para targets distintos del host",
      "Solo en macOS",
      "No es posible en C"
    ],
    correct: 1,
    difficulty: "A",
    explanation: "Cross-compilation: toolchain arm-linux-gnueabihf para compilar desde x86 para ARM. Docker multiarch. QEMU emula para testing. Las #ifdef de arquitectura (__x86_64__, __aarch64__) seleccionan código específico."
  },
  {
    question: "¿Cómo implementar un mini-lenguaje de scripting en C (intérprete)?",
    options: [
      "Es demasiado complejo",
      "Solo en academia",
      "Solo con herramientas de generación",
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
      "Compilar más rápido",
      "No existe en C",
      "Solo con IDEs"
    ],
    correct: 0,
    difficulty: "A",
    explanation: "Un proyecto con 1000 archivos .c recompilaría todo si un header común cambia. Separar headers estables (system headers) de los que cambian. __has_include, PCH reducen tiempos de compilación drásticamente."
  },
  {
    question: "¿Cómo funciona la verificación formal de programas C?",
    options: [
      "No es posible",
      "Solo el analizador estático de GCC",
      "Herramientas como Frama-C (con Why3), CBMC (bounded model checking), Infer (Facebook) analizan el código C formalmente para verificar corrección, ausencia de UB y desbordamientos",
      "Solo para código simple"
    ],
    correct: 2,
    difficulty: "A",
    explanation: "CBMC: unrolled loops + SAT solver. Frama-C: anotaciones ACSL (contrato formal) + proof. NASA y Airbus usan verificación formal para código crítico. MISRA C es un subset de C diseñado para ser más verificable."
  },
  {
    question: "¿Qué es el semantic patch con Coccinelle y para qué se usa en el kernel Linux?",
    options: [
      "Coccinelle es una herramienta de transformación semántica de código C: aplica transformaciones (semantic patches) que entienden la sintaxis, no solo texto. Usada para refactorings masivos en el kernel Linux",
      "Solo para parches de seguridad",
      "Documentación del kernel",
      "Un tipo de linter"
    ],
    correct: 0,
    difficulty: "A",
    explanation: "Coccinelle se usa para modernizar el kernel: cambiar API deprecadas en todos los archivos simultáneamente. A diferencia de sed, entiende la semántica C (no reemplaza en strings o comentarios)."
  },
  {
    question: "¿Cómo implementar un sistema de memoria transaccional (STM) en C?",
    options: [
      "Solo con hardware TM",
      "Solo en arquitecturas especiales",
      "No es posible",
      "Implementar TM en C requiere: versioning de objetos (MVCC), conflict detection (validación al commit), rollback mechanism; TinySTM es una implementación de referencia en C"
    ],
    correct: 3,
    difficulty: "A",
    explanation: "Software TM: cada thread mantiene read-set y write-set. Al commit: verifica que el read-set no fue modificado por otros (conflict detection). Si hay conflicto: rollback y reintentar. Overhead alto vs locks."
  },
  {
    question: "¿Cómo funciona el compilador JIT en C para generar código máquina en runtime?",
    options: [
      "Solo con LLVM",
      "No es posible en C puro",
      "Asignar memoria ejecutable (mmap con PROT_EXEC), escribir código máquina como bytes en esa región, y ejecutarlo via puntero a función; base de VMs, regex engines, y emuladores",
      "Solo es posible con assembly"
    ],
    correct: 2,
    difficulty: "S",
    explanation: "void *mem = mmap(NULL, size, PROT_WRITE|PROT_EXEC, MAP_ANON|MAP_PRIVATE, -1, 0); Escribir bytes de código máquina en mem; ((void(*)())mem)(); Requiere conocer el ISA del target. GNU Lightning y asmjit son librerías que facilitan esto."
  },
  {
    question: "¿Qué es el modelo de memoria C11 y cómo se relaciona con el hardware?",
    options: [
      "Es igual al modelo de Java",
      "C11 formaliza el memory model con happens-before relations y operaciones atómicas que se mapean a instrucciones de hardware: mfence (x86), dmb (ARM), con garantías de ordering",
      "Es solo teórico",
      "Solo con volatile"
    ],
    correct: 1,
    difficulty: "S",
    explanation: "memory_order_seq_cst compila a mfence en x86. memory_order_acquire/release: no genera instrucción en x86 (TSO garantiza esto), pero sí en ARM (ldaex/stlex). Entender el modelo de hardware es crucial para código lock-free correcto."
  },
  {
    question: "¿Cómo se implementa el C runtime (CRT) y qué hace antes de main?",
    options: [
      "main es el punto de inicio real",
      "El SO llama main directamente",
      "No hay nada antes de main",
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
      "Solo afectan a otros lenguajes",
      "Ya no son relevantes",
      "Solo afectan al kernel"
    ],
    correct: 0,
    difficulty: "S",
    explanation: "Spectre: array out-of-bounds especulativo en código C puede cargar datos secretos en caché; medición de timing los revela. Mitigation: lfence, serializing loads. Retpoline: indirección para llamadas indirectas seguras contra Spectre v2."
  },
  {
    question: "¿Cómo funciona la instrumentación de código con LLVM para análisis de programas?",
    options: [
      "Solo para profiling",
      "LLVM permite añadir passes personalizados que instrumentan el IR: insertar código antes/después de instrucciones, funciones, bloques básicos; base de ASan, TSan, MSan, PGO, coverage",
      "Solo en academia",
      "Solo con plugins de IDE"
    ],
    correct: 1,
    difficulty: "S",
    explanation: "Implementar un LLVM Pass: visitar instrucciones de carga/almacenamiento, insertar llamadas a funciones de check. El pass se carga con clang -fplugin o se integra en la pipeline de optimización. LLVM IR es la representación."
  },
  {
    question: "¿Qué es el symbolic execution de código C y sus aplicaciones?",
    options: [
      "Ejecutar código con símbolos matemáticos",
      "Herramientas como KLEE ejecutan el programa con entradas simbólicas, explorando todos los caminos posibles; genera casos de prueba que maximizan cobertura y detecta bugs profundos",
      "Solo en academia",
      "Solo para código sin punteros"
    ],
    correct: 1,
    difficulty: "S",
    explanation: "KLEE sobre LLVM IR: explora el árbol de ejecución, en cada branch simbólico crea dos estados. Timeout en exploración. Encuentra: array out of bounds, null dereferences, divisiones por cero. Aplicado en fuzzing dirigido."
  },
  {
    question: "¿Cómo funciona el hardware-assisted CFI (CET de Intel) y cómo lo aprovecha C?",
    options: [
      "Ya no es relevante",
      "Intel CET: Shadow Stack (copia de direcciones de retorno en memoria protegida) e IBT (Indirect Branch Tracking: solo se puede saltar a instrucciones ENDBR64). GCC/Clang soportan con -mshstk -mibt",
      "Solo en servidores",
      "Solo en teoría"
    ],
    correct: 1,
    difficulty: "S",
    explanation: "Shadow Stack previene ataques de ROP al mantener una segunda copia de la pila de retorno en memoria no modificable por el atacante. IBT requiere que todas las funciones destino de llamadas indirectas tengan la instrucción ENDBR64."
  },
  {
    question: "¿Qué es el oblivious RAM (ORAM) y cómo implementarlo en C para proteger patrones de acceso?",
    options: [
      "Técnica criptográfica que oculta el patrón de acceso a memoria a observadores externos; implementado en C para sistemas con TEE (Trusted Execution Environments como Intel SGX)",
      "Una RAM especial de hardware",
      "Solo en clouds",
      "Solo teórico"
    ],
    correct: 0,
    difficulty: "S",
    explanation: "Path ORAM: accesos reales se mezclan con accesos ficticios en un árbol de bloques; el observador no puede saber qué dato real se accede. Crítico en SGX donde el OS (no confiable) puede monitorear accesos a memoria."
  },
  {
    question: "¿Cómo diseñar un sistema de tipos en tiempo de compilación solo con macros y _Generic en C?",
    options: [
      "No es posible",
      "No tiene valor práctico",
      "Usando _Generic para dispatch por tipo, X-macros para tablas de tipos, Typeof (__typeof__) para preservar tipos, y macros de generación para instanciar código tipado; permite APIs semi-tipadas sin C++",
      "Solo con extensiones GCC"
    ],
    correct: 2,
    difficulty: "S",
    explanation: "#define TYPEOF(x) __typeof__(x) y _Generic permiten crear APIs que adaptan su comportamiento según el tipo en tiempo de compilación. Librerías como STC (Standard Template Containers for C) usan esta técnica extensivamente."
  },
  {
    question: "¿Cómo funciona el análisis de tiempo de ejecución con perf y BPF en Linux para código C?",
    options: [
      "perf: sampling de CPU (perf record + perf report), flamegraphs. BPF/eBPF: programas que se ejecutan en el kernel para tracing sin modificar el programa; bpftrace para scripts, BCC para programas complejos",
      "Solo con printf debugging",
      "Solo con gdb",
      "Solo en producción"
    ],
    correct: 0,
    difficulty: "S",
    explanation: "perf stat: contadores de hardware (cache misses, branch mispredictions). bpftrace -e 'uprobe:/bin/prog:funcion { printf(\"%s\\n\", comm); }' rastrea llamadas sin recompilar. DTRACING de Solaris inspiró BPF."
  }
];
