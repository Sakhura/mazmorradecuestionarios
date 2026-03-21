window.questions_assembly = [
  {
    question: "¿Qué es el lenguaje ensamblador (Assembly)?",
    options: [
      "Un lenguaje intermedio",
      "Lenguaje de bajo nivel que representa instrucciones de máquina con mnemónicos legibles; dependiente de la arquitectura (x86, ARM, MIPS)",
      "Un tipo de binario",
      "Un lenguaje de alto nivel"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "Assembly es una representación simbólica del código máquina. Cada instrucción corresponde directamente a una instrucción del CPU."
  },
  {
    question: "¿Qué son los registros en x86?",
    options: [
      "Parte del disco duro",
      "Pequeñas unidades de almacenamiento ultra-rápido dentro del CPU: EAX, EBX, ECX, EDX, ESI, EDI, ESP, EBP (32-bit)",
      "Un tipo de variable",
      "Memoria RAM"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "x86-64 añade RAX, RBX, etc. (64-bit). EAX (32-bit), AX (16-bit), AL (8-bit) son partes del mismo registro RAX."
  },
  {
    question: "¿Qué hace la instrucción <code>MOV</code>?",
    options: [
      "Intercambia dos valores",
      "Solo para memoria",
      "Copia datos de fuente a destino: MOV EAX, 5 pone 5 en EAX; MOV EBX, EAX copia EAX a EBX",
      "Mueve un archivo"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "MOV dst, src copia src a dst. MOV EAX, [EBX] carga el valor de la dirección en EBX a EAX (derefernecia de memoria)."
  },
  {
    question: "¿Qué es la pila (stack) en Assembly?",
    options: [
      "Un tipo de registro",
      "Una estructura de datos abstracta",
      "Solo para funciones recursivas",
      "Área de memoria LIFO gestionada con ESP/RSP; PUSH añade, POP quita; usada para argumentos, variables locales y direcciones de retorno"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "PUSH EAX decrece ESP y guarda EAX en [ESP]. POP EAX carga [ESP] a EAX y aumenta ESP. El stack crece hacia abajo en x86."
  },
  {
    question: "¿Qué hace <code>CALL</code> y <code>RET</code>?",
    options: [
      "CALL guarda la dirección de retorno en el stack y salta a la función; RET extrae esa dirección y salta de regreso",
      "Solo para llamadas del OS",
      "Son instrucciones de datos",
      "Son jumps condicionales"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "CALL etiqueta: PUSH EIP_siguiente; JMP etiqueta. RET: POP EIP. CALL/RET implementan el mecanismo de llamada a funciones a nivel máquina."
  },
  {
    question: "¿Qué hace la instrucción <code>CMP</code>?",
    options: [
      "Copia con máscara",
      "Compara dos operandos restando el segundo del primero sin guardar el resultado; actualiza flags (ZF, SF, CF, OF)",
      "Complemento binario",
      "Copia y mueve"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "CMP EAX, 5 hace EAX-5 internamente, actualiza flags pero descarta el resultado. JE (salta si igual/ZF=1), JL (menor), JG (mayor) leen los flags."
  },
  {
    question: "¿Qué son los flags en x86?",
    options: [
      "Bits del registro EFLAGS que indican condiciones: ZF(zero), SF(sign), CF(carry), OF(overflow), PF(parity)",
      "Solo para aritmética de punto flotante",
      "Indicadores de rendimiento",
      "Variables booleanas de alto nivel"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "CMP, SUB, ADD actualizan flags. ZF=1 si resultado=0. SF=1 si negativo. CF=1 si carry/borrow. Los saltos condicionales (Jxx) verifican estos flags."
  },
  {
    question: "¿Qué hace <code>JMP</code> y sus variantes?",
    options: [
      "Solo salta a funciones",
      "Es igual que CALL",
      "Solo para bucles",
      "JMP: salto incondicional; JE/JZ: salta si ZF=1; JNE: salta si ZF=0; JL: menor (signed); JB: menor (unsigned)"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "El código de control de flujo (if, while, for) se implementa con CMP + Jxx + etiquetas en Assembly."
  },
  {
    question: "¿Qué es el segmento .text vs .data?",
    options: [
      "x86 binary sections: .text contiene código ejecutable; .data variables inicializadas; .bss variables no inicializadas; .rodata constantes",
      "Son iguales",
      "Solo para ELF binaries",
      "Solo nombres de secciones"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "section .text: instrucciones. section .data: db 'hola', 0 — variables inicializadas. section .bss: resb 100 — espacio no inicializado."
  },
  {
    question: "¿Qué hace <code>ADD</code> e <code>INC</code>?",
    options: [
      "ADD dst, src: suma src a dst; INC dst: incrementa dst en 1; más eficiente que ADD dst, 1 en algunos CPUs",
      "Son iguales",
      "INC es 2 instrucciones",
      "ADD solo para números grandes"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "ADD EAX, EBX: EAX = EAX + EBX. INC ECX: ECX++. SUB y DEC son las operaciones inversas. IMUL para multiplicación signed."
  },
  {
    question: "¿Qué es la convención de llamada (calling convention)?",
    options: [
      "Un tipo de protocolo de red",
      "Reglas sobre cómo pasar argumentos y retornar valores entre funciones: cdecl, stdcall, fastcall, System V AMD64 ABI",
      "La forma de llamar funciones en C",
      "Solo para C++"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "System V AMD64 ABI (Linux): argumentos en RDI, RSI, RDX, RCX, R8, R9; retorno en RAX. Windows x64: RCX, RDX, R8, R9. El stack debe estar 16-byte alineado antes de CALL."
  },
  {
    question: "¿Qué es NASM vs GAS?",
    options: [
      "Son lo mismo",
      "Dos CPUs diferentes",
      "Dos arquitecturas",
      "NASM (Netwide Assembler): sintaxis Intel (dst, src); GAS (GNU Assembler): sintaxis AT&T (src, dst) con sufijos de tamaño (movq, movl)"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "NASM: MOV EAX, 5. GAS: movl $5, %eax. NASM es más popular para aprendizaje y Windows. GAS se usa con GCC/G++ para código inline."
  },
  {
    question: "¿Qué es el registro RIP?",
    options: [
      "El stack pointer en x86-64",
      "Un registro de datos",
      "Instruction Pointer en x86-64: apunta a la próxima instrucción a ejecutar; RIP-relative addressing para código position-independent",
      "Rest In Peace"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "RIP (64-bit) = EIP (32-bit). MOV RAX, [RIP+offset] es RIP-relative addressing, usado en PIC (Position-Independent Code) para librerías compartidas."
  },
  {
    question: "¿Qué es SIMD en x86?",
    options: [
      "Una extensión del OS",
      "Solo para GPU",
      "Single Instruction Multiple Data: SSE, AVX instrucciones que operan sobre múltiples datos en paralelo: PADDD XMM0, XMM1 suma 4 enteros a la vez",
      "Una instrucción de memoria"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "XMM (128-bit): 4 floats o 2 doubles. YMM (256-bit AVX): 8 floats. ZMM (512-bit AVX-512): 16 floats. Esencial para procesamiento multimedia, ML e HPC."
  },
  {
    question: "¿Qué es el buffer overflow?",
    options: [
      "Escribir más allá del límite de un buffer en stack/heap, potencialmente sobreescribiendo la dirección de retorno para redirigir la ejecución",
      "Solo en lenguajes de alto nivel",
      "Un tipo de segfault inocuo",
      "Un error de IO"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "Buffer overflow en stack: sobreescribir la dirección de retorno almacenada. Si el atacante controla esa dirección, puede ejecutar código arbitrario (shell code o ROP chains)."
  },
  {
    question: "¿Qué es ROP (Return-Oriented Programming)?",
    options: [
      "Programación orientada a retornos de ventas",
      "Técnica de explotación que encadena 'gadgets' (secuencias terminadas en RET) para ejecutar código arbitrario sin inyectar shellcode",
      "Solo para x86-64",
      "Un tipo de optimización"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "ROP: con stack overflow, se pone una cadena de direcciones de gadgets (pop rdi; ret, syscall; etc.) para ejecutar código arbitrario burlando DEP/NX."
  },
  {
    question: "¿Qué es el inline assembly en C?",
    options: [
      "Solo en Windows",
      "Es una práctica obsoleta",
      "Solo posible con GCC",
      "Embeber código Assembly directamente en C con __asm__: __asm__('movq $60, %rax\\n syscall'); permite instrucciones específicas sin función C equivalente"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "GCC: __asm__ volatile ('cpuid' : '=a'(eax) : 'a'(0)); Para performance crítica, llamadas al OS sin libc, o instrucciones no expuestas por el compilador."
  },
  {
    question: "¿Qué es el System Call (syscall)?",
    options: [
      "Solo para C",
      "Una llamada entre funciones",
      "Interfaz para que programas de usuario soliciten servicios al kernel: en Linux x64, RAX=número_syscall, argumentos en RDI/RSI/RDX, SYSCALL instrucción",
      "Una llamada de red"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "Linux x86-64: mov rax, 1 (sys_write); mov rdi, 1 (stdout); mov rsi, msg; mov rdx, len; syscall. strace muestra syscalls de un proceso."
  }
];
