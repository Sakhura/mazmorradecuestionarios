window.questions_assembly = [
  {
    question: "¿Qué es el lenguaje ensamblador (Assembly)?",
    options: [
      "Un lenguaje de alto nivel con sintaxis declarativa que se compila a bytecode portable entre arquitecturas",
      "Lenguaje de bajo nivel que representa instrucciones de máquina con mnemónicos legibles; dependiente de la arquitectura (x86, ARM, MIPS)",
      "Un lenguaje intermedio entre C y el bytecode de máquina virtual que abstrae los registros del procesador",
      "Un lenguaje de scripting interpretado en tiempo de ejecución por el sistema operativo como capa de abstracción"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "Assembly es representación simbólica del código máquina. Cada instrucción corresponde directamente a una instrucción del procesador. Es específico de la arquitectura (x86, ARM, etc.)."
  },
  {
    question: "¿Qué son los registros en x86?",
    options: [
      "Pequeñas unidades de almacenamiento ultra-rápido dentro del CPU: EAX, EBX, ECX, EDX, ESI, EDI, ESP, EBP",
      "Sectores de la memoria RAM reservados por el sistema operativo para procesos con prioridad alta de ejecución",
      "Variables globales del sistema operativo que persisten entre llamadas al kernel en modo privilegiado",
      "Cachés de nivel L1 compartidos entre núcleos del procesador para instrucciones de uso frecuente"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "Los registros son la memoria más rápida del sistema (dentro del CPU). En x86-64: RAX, RBX, RCX, RDX (64-bit), EAX, EBX... (32-bit), AX, BX... (16-bit)."
  },
  {
    question: "¿Qué hace la instrucción MOV?",
    options: [
      "Intercambia atómicamente los valores entre dos registros usando un buffer temporal en el pipeline",
      "Suma el operando fuente al destino acumulando el resultado en el registro de flags del procesador",
      "Mueve un bloque de memoria desde la dirección fuente a la destino invalidando la región origen",
      "Copia datos de fuente a destino: MOV EAX, 5 pone 5 en EAX; MOV EBX, EAX copia EAX en EBX"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "MOV es la instrucción más usada en Assembly. Copia el valor fuente al destino. La fuente no se modifica. Los operandos pueden ser registros, memoria inmediata o direcciones."
  },
  {
    question: "¿Qué es la pila (stack) en Assembly?",
    options: [
      "Un área de memoria heap con estructura FIFO gestionada con instrucciones ENQUEUE y DEQUEUE del procesador",
      "Un segmento de memoria estática donde el enlazador coloca las variables globales del programa compilado",
      "Área de memoria LIFO gestionada con ESP/RSP; PUSH añade, POP quita; usada para argumentos y variables locales",
      "Una tabla de páginas virtual que el MMU usa para mapear direcciones lógicas a direcciones físicas en RAM"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "La pila crece hacia abajo. PUSH decrece ESP y escribe. POP lee y aumenta ESP. Usada para guardar el estado de funciones, parámetros y dirección de retorno."
  },
  {
    question: "¿Qué hacen CALL y RET?",
    options: [
      "CALL reserva un frame en el heap y salta a la función; RET libera el frame y devuelve el valor",
      "CALL guarda la dirección de retorno en el stack y salta a la función; RET extrae esa dirección y salta a ella",
      "CALL realiza una llamada al sistema operativo en modo privilegiado; RET retorna al modo usuario del proceso",
      "CALL y RET son aliases de JMP e IRET respectivamente, usados solo en interrupciones del hardware"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "CALL empuja EIP al stack y salta. RET hace POP de EIP y retorna. El prólogo de función típico: PUSH EBP; MOV EBP, ESP; SUB ESP, N (reserva espacio local)."
  },
  {
    question: "¿Qué hace la instrucción CMP?",
    options: [
      "Compara dos operandos restando el segundo del primero sin guardar el resultado; solo actualiza EFLAGS",
      "Copia un operando a una máscara de bits y lo compara con un patrón predefinido en el segmento .data",
      "Computa el complemento a dos del operando y actualiza el registro acumulador con el resultado final",
      "Combina dos registros con OR lógico y almacena el resultado comparado con cero en los flags del CPU"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "CMP realiza una resta (A - B) y descarta el resultado, pero actualiza ZF, SF, CF, OF. Los saltos condicionales (JE, JL, JG...) dependen de estos flags."
  },
  {
    question: "¿Qué son los flags en x86?",
    options: [
      "Parámetros de configuración del procesador almacenados en el MSR (Model Specific Register) del CPU",
      "Señales de hardware enviadas por los dispositivos de entrada/salida para interrumpir la ejecución normal",
      "Variables booleanas del sistema operativo que controlan el comportamiento del scheduler de procesos",
      "Bits del registro EFLAGS que indican condiciones: ZF(zero), SF(sign), CF(carry), OF(overflow), IF(interrupt)"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "EFLAGS es un registro especial de 32 bits (RFLAGS en 64-bit). ZF=1 si resultado es 0. CF=1 si hay acarreo. OF=1 si hay desbordamiento con signo. IF=1 habilita interrupciones."
  },
  {
    question: "¿Qué hace JMP y sus variantes condicionales?",
    options: [
      "JMP modifica el registro IP saltando al siguiente procedimiento en la tabla de símbolos del programa",
      "JMP ejecuta una llamada de sistema al kernel; JE y JNE son variantes para retornar de interrupciones",
      "JMP realiza un salto de retorno similar a RET pero sin extraer del stack la dirección de regreso",
      "JMP: salto incondicional; JE/JZ: salta si ZF=1; JNE: salta si ZF=0; JL: menor (signed); JB: menor (unsigned)"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "Los saltos condicionales evalúan flags después de CMP/TEST. JE salta si igual (ZF=1). JL salta si menor con signo (SF≠OF). JB salta si menor sin signo (CF=1)."
  },
  {
    question: "¿Qué es el segmento <code>.text</code> vs <code>.data</code>?",
    options: [
      ".text almacena cadenas de texto del programa y .data almacena los datos numéricos con formato binario",
      ".text contiene el código ejecutable (instrucciones) y .data contiene variables globales/estáticas inicializadas",
      ".text es la sección de depuración con símbolos y .data contiene el código fuente embebido en el binario",
      ".text almacena constantes de solo lectura y .data contiene el código de inicio (entry point) del programa"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "Un ejecutable tiene secciones: .text (código ejecutable, solo lectura), .data (variables inicializadas, lectura/escritura), .bss (variables no inicializadas), .rodata (constantes)."
  },
  {
    question: "¿Qué es la convención de llamada (calling convention) cdecl?",
    options: [
      "Una convención donde los argumentos se pasan en registros de izquierda a derecha y el caller limpia el stack",
      "Una convención para llamadas al sistema donde los parámetros se pasan mediante la pila del kernel directamente",
      "Los argumentos se empujan al stack de derecha a izquierda; el caller limpia la pila; EAX retorna el valor",
      "Una convención donde el callee limpia el stack y los argumentos se pasan en el orden de la declaración"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "cdecl: args en stack de derecha a izquierda, caller limpia. EAX retorna int/puntero, EDX:EAX para 64-bit en 32-bit. Permite funciones variádicas como printf."
  },
  {
    question: "¿Qué es una instrucción SIMD?",
    options: [
      "Single Instruction Multiple Data: opera sobre múltiples datos en paralelo con una sola instrucción vectorial",
      "Sequential Instruction with Multiple Dispatch: despacha múltiples instrucciones en un solo ciclo del pipeline",
      "Shared Instruction Memory Interface Device: interfaz para compartir instrucciones entre núcleos del procesador",
      "Superscalar Instruction with Macro Decode: macro-instrucción que el decodificador expande en micro-ops paralelas"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "SIMD (SSE, AVX) permite operar sobre vectores: addps xmm0, xmm1 suma 4 floats simultáneamente. AVX-512 opera sobre 512 bits (16 floats o 8 doubles) de una vez."
  },
  {
    question: "¿Qué es un buffer overflow en Assembly?",
    options: [
      "Una condición cuando el pipeline del procesador se llena con instrucciones pendientes y detiene la captación",
      "Un error aritmético producido cuando la suma de dos enteros positivos supera el rango del registro destino",
      "Escritura de datos más allá del límite de un buffer en memoria, pudiendo sobrescribir la dirección de retorno",
      "El desbordamiento del registro de flags cuando demasiadas instrucciones CMP se ejecutan consecutivamente"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "Si strcpy escribe más bytes que el buffer asignado en el stack, sobrescribe el return address. Esto permite inyectar shellcode o redirigir la ejecución a direcciones arbitrarias."
  },
  {
    question: "¿Qué es ROP (Return Oriented Programming)?",
    options: [
      "Una técnica de optimización del compilador que reutiliza fragmentos de código existentes para reducir el tamaño del binario",
      "Un método de depuración que rastrea el flujo de retornos de función para identificar cuellos de botella en el stack",
      "Reutilización de fragmentos de código existentes (gadgets) que terminan en RET para construir exploits sin shellcode",
      "Una técnica de programación donde cada función retorna inmediatamente al caller sin crear frames en el stack"
    ],
    correct: 2,
    difficulty: "B",
    explanation: "ROP encadena 'gadgets' (pequeñas secuencias que terminan en RET) para ejecutar lógica arbitraria sin inyectar código. Evita protecciones NX/DEP que marcan el stack como no ejecutable."
  },
  {
    question: "¿Qué es una syscall en Assembly?",
    options: [
      "Una llamada entre dos funciones del mismo proceso usando el registro EAX como canal de comunicación",
      "Una instrucción que salta a una dirección calculada dinámicamente en la tabla de vectores de interrupción del OS",
      "Interfaz para llamar funciones del kernel del SO; en Linux x64 usa la instrucción syscall con número en RAX",
      "Una llamada remota a otro proceso usando memoria compartida coordinada por el scheduler del sistema"
    ],
    correct: 2,
    difficulty: "B",
    explanation: "En Linux x86-64: número de syscall en RAX (1=write, 60=exit), args en RDI/RSI/RDX/R10/R8/R9. La instrucción syscall cambia a ring 0 y ejecuta el handler del kernel."
  },
  {
    question: "¿Qué hace la instrucción LEA?",
    options: [
      "Carga el contenido de la dirección de memoria apuntada por el operando fuente en el registro destino",
      "Link External Address: resuelve símbolos externos durante el enlazado dinámico de librerías compartidas",
      "Load Effective Address: calcula la dirección de memoria del operando fuente y la almacena en el destino sin acceder a memoria",
      "Extiende el signo del operando cargándolo con alineación de 64 bits en el registro destino especificado"
    ],
    correct: 2,
    difficulty: "B",
    explanation: "LEA EAX, [EBX + ECX*4 + 8] calcula la dirección sin acceder a memoria. Usado para aritmética de punteros y multiplicaciones por constantes pequeñas de forma eficiente."
  },
  {
    question: "¿Qué es el segmento <code>.bss</code>?",
    options: [
      "Block Started by Symbol: sección para variables globales no inicializadas; no ocupa espacio en el archivo binario",
      "Binary Symbol Section: tabla de símbolos que el enlazador usa para resolver referencias entre módulos compilados",
      "Buffered Stack Segment: área del stack reservada por el compilador para variables locales de gran tamaño",
      "Basic Shared Storage: segmento de memoria compartida entre todos los procesos del mismo grupo de procesos"
    ],
    correct: 0,
    difficulty: "C",
    explanation: ".bss existe como concepto en el ejecutable pero no ocupa bytes en el archivo. El OS lo inicializa a cero en memoria cuando el proceso arranca. Contraste con .data que sí tiene datos."
  },
  {
    question: "¿Qué es la instrucción XCHG?",
    options: [
      "Exchange: intercambia atómicamente los valores de dos operandos; implica un lock de bus en accesos a memoria",
      "Extended Change: modifica el tamaño del operando extendiendo su representación al doble del ancho original",
      "Execute Channel: activa un canal de DMA para transferir datos entre registros y periféricos sin usar el CPU",
      "XOR Exchange: realiza XOR de dos registros y guarda el resultado en ambos operandos simultáneamente"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "XCHG EAX, EBX intercambia los valores. Con operando de memoria incluye implícitamente un LOCK (barrera de bus). Usado en implementaciones de spinlocks y operaciones atómicas."
  },
  {
    question: "¿Qué diferencia hay entre x86 y x86-64 (AMD64)?",
    options: [
      "x86-64 solo añade soporte para instrucciones de punto flotante de doble precisión no disponibles en x86 de 32 bits",
      "x86-64 cambia la convención de llamada al modo big-endian, mientras x86 usa little-endian para todos los datos",
      "x86 usa modo real de 16 bits para compatibilidad con DOS; x86-64 elimina ese modo y requiere SO de 64 bits",
      "x86-64 extiende a registros de 64-bit (RAX, etc.), añade 8 registros extra (R8-R15) y más argumentos en registros"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "AMD64/x86-64: registros de 64 bits, R8-R15 adicionales, ABI pasa 6 args en registros (RDI/RSI/RDX/RCX/R8/R9), espacio de direcciones de 48 bits. Compatible con código x86 de 32-bit."
  }
];
