window.questions_cobol = [
  {
    question: "¿Para qué se usa COBOL principalmente?",
    options: [
      "Videojuegos",
      "Inteligencia artificial",
      "Sistemas financieros y bancarios legacy; procesa el 95% de las transacciones de tarjeta de crédito y $3 trillones diarios en el mundo",
      "Desarrollo web moderno"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "COBOL (1959) sigue siendo crítico en banca, seguros y gobierno. Se estima que hay 800 billion líneas de código COBOL en producción."
  },
  {
    question: "¿Qué significa COBOL?",
    options: [
      "Common Business-Oriented Language — diseñado para ser legible en inglés y para procesamiento de datos de negocios",
      "Common Object Based Oriented Language",
      "Computer Organization Building-Output Language",
      "Compiled Object Binary Output Loader"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "COBOL fue diseñado para que las personas de negocios pudieran leer y entender el código. Su sintaxis es muy verbosa y similar al inglés."
  },
  {
    question: "¿Cuáles son las 4 divisiones principales de un programa COBOL?",
    options: [
      "IDENTIFICATION DIVISION, ENVIRONMENT DIVISION, DATA DIVISION, PROCEDURE DIVISION",
      "PROGRAM, INPUT, OUTPUT, EXECUTE",
      "HEADER, VARIABLES, CODE, FOOTER",
      "BEGIN, DATA, PROC, END"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "Todo programa COBOL tiene estas 4 divisiones. IDENTIFICATION identifica el programa. DATA declara variables. PROCEDURE contiene la lógica."
  },
  {
    question: "¿Cómo se declara una variable en COBOL?",
    options: [
      "SET nombre = valor",
      "DECLARE nombre TIPO",
      "var nombre = valor",
      "01 NOMBRE PIC X(30). con nivel numérico y PIC clause"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "01 EMPLOYEE-NAME PIC X(30). El nivel 01 indica top-level. PIC X(n) para alfanumérico, PIC 9(n) para numérico, PIC 9(n)V9(n) para decimal."
  },
  {
    question: "¿Qué significa PIC en COBOL?",
    options: [
      "Parallel Instruction Counter",
      "Program Input Character",
      "PICTURE: define el formato y tipo de un campo de datos",
      "Process In Code"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "PIC 9(5): entero de 5 dígitos. PIC X(10): 10 caracteres alfanuméricos. PIC 9(5)V99: 5 enteros y 2 decimales. PIC S9(5): signed."
  },
  {
    question: "¿Qué hace MOVE en COBOL?",
    options: [
      "Mover el cursor del programa",
      "Ejecuta un módulo",
      "Copia datos de un campo a otro: MOVE EMPLOYEE-NAME TO WS-DISPLAY-NAME",
      "Mover un archivo"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "MOVE es la asignación en COBOL. MOVE 0 TO TOTAL-AMOUNT. MOVE CORRESPONDING mueve campos con el mismo nombre entre estructuras."
  },
  {
    question: "¿Qué hace PERFORM en COBOL?",
    options: [
      "Abre un archivo",
      "Muestra datos en pantalla",
      "Optimiza el rendimiento",
      "Ejecuta un párrafo o sección: PERFORM CALCULATE-TOTALS o PERFORM UNTIL condición"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "PERFORM PROCESS-RECORD UNTIL WS-EOF = 'Y'. PERFORM VARYING I FROM 1 BY 1 UNTIL I > 100. Equivale a CALL o bucle según contexto."
  },
  {
    question: "¿Qué hace ADD en COBOL?",
    options: [
      "Solo para enteros",
      "Añade un registro al archivo",
      "ADD valor TO campo: ADD AMOUNT TO TOTAL. ADD A B GIVING C: suma A y B, guarda en C",
      "Añade un campo al programa"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "ADD SALES-AMOUNT TO TOTAL-SALES. ADD TAX-RATE TO SELLING-PRICE GIVING TOTAL-PRICE. SUBTRACT, MULTIPLY, DIVIDE son análogos."
  },
  {
    question: "¿Cómo se maneja un archivo en COBOL?",
    options: [
      "Con funciones de sistema",
      "Solo con COBOL embebido en BD",
      "SELECT archivo ASSIGN TO 'ruta' en ENVIRONMENT; FD en DATA DIVISION; OPEN, READ, WRITE, CLOSE en PROCEDURE",
      "Con try-catch"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "SELECT EMPLOYEE-FILE ASSIGN TO 'EMP.DAT' ORGANIZATION IS SEQUENTIAL. FD EMPLOYEE-FILE. OPEN INPUT EMPLOYEE-FILE. READ EMPLOYEE-FILE INTO WS-EMPLOYEE AT END MOVE 'Y' TO WS-EOF."
  },
  {
    question: "¿Qué es el WORKING-STORAGE SECTION?",
    options: [
      "Solo para constantes",
      "El área de código del programa",
      "Solo para números",
      "Sección de DATA DIVISION para variables de trabajo (persistentes durante toda la ejecución); diferente de LOCAL-STORAGE que es per-invocation"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "WORKING-STORAGE es el lugar estándar para declarar variables, flags, contadores y áreas de trabajo en COBOL. Se inicializa una vez al inicio del programa."
  },
  {
    question: "¿Qué es el nivel 88 en COBOL?",
    options: [
      "Un condition name: define un nombre para un valor o rango de valores de una variable; usada en condiciones",
      "Un nivel de seguridad",
      "Una versión del estándar",
      "Un nivel de error"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "01 WS-STATUS PIC X. 88 STATUS-ACTIVE VALUE 'A'. 88 STATUS-INACTIVE VALUE 'I'. Luego: IF STATUS-ACTIVE ..."
  },
  {
    question: "¿Qué hace EVALUATE en COBOL?",
    options: [
      "Es igual que IF",
      "Equivalente a switch/case: EVALUATE TRUE WHEN condicion1 ...",
      "Evalúa el rendimiento",
      "Solo para expresiones aritméticas"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "EVALUATE WS-OPTION WHEN 1 PERFORM OPTION-ONE WHEN 2 PERFORM OPTION-TWO WHEN OTHER PERFORM INVALID-OPTION END-EVALUATE."
  },
  {
    question: "¿Qué es COPYBOOK en COBOL?",
    options: [
      "Una copia del programa",
      "Fragmento de código reutilizable incluido con COPY: COPY EMPLOYEE-RECORD — estándar para definir estructuras compartidas",
      "Un tipo de backup",
      "Un libro de referencia"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "COPY statements incluyen copybooks (.cpy) que definen estructuras de datos comunes. Similar a headers de C o includes. Esencial en proyectos grandes para consistencia."
  },
  {
    question: "¿Qué es COBOL embedded en DB2?",
    options: [
      "Solo para Oracle",
      "Un framework ORM",
      "EXEC SQL SELECT ... INTO :WS-VAR FROM TABLE END-EXEC — SQL embebido directamente en COBOL para mainframe DB2",
      "COBOL con base de datos externa"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "EXEC SQL EXEC SELECT SALARY INTO :WS-SALARY FROM EMPLOYEE WHERE EMP-ID = :WS-EMP-ID END-EXEC. SQLCODE para verificar resultado. Estándar en aplicaciones mainframe."
  },
  {
    question: "¿Qué es CICS en contexto de COBOL?",
    options: [
      "Customer Information Control System: middleware de transacciones en IBM mainframe; COBOL programs usan EXEC CICS commands para online transactions",
      "Un sistema operativo",
      "Una versión de COBOL",
      "Un tipo de archivo VSAM"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "EXEC CICS SEND MAP('MAPNAME') FROM(WS-MAP) END-EXEC. CICS maneja transacciones online en mainframe. Junto con COBOL son la base de sistemas bancarios de misión crítica."
  },
  {
    question: "¿Qué es JCL (Job Control Language)?",
    options: [
      "Una versión de Bash para mainframes",
      "Un tipo de COBOL",
      "Lenguaje para ejecutar programas en mainframes IBM z/OS: define el job, los pasos, y los datasets de entrada/salida",
      "Un lenguaje de programación"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "//JOBNAME JOB ... //STEP1 EXEC PGM=MIPROG //INPUT DD DSNAME=MY.DATA,DISP=SHR. JCL es inseparable de COBOL en entornos mainframe."
  },
  {
    question: "¿Por qué sigue vivo COBOL?",
    options: [
      "Es el mejor lenguaje",
      "El enorme costo de migración (millones de líneas, lógica de negocio compleja, riesgo operacional), falta de personal calificado en lenguajes modernos para entender la lógica bancaria",
      "Los bancos prefieren lenguajes viejos",
      "Es el más rápido"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "Migrar un sistema bancario de COBOL es un proyecto de años y miles de millones de dólares con alto riesgo. El 'if it ain't broke, don't fix it' prevalece en sistemas financieros críticos."
  }
];
