window.questions_cobol = [
  {
    question: "¿Para qué se usa COBOL principalmente?",
    options: [
      "Desarrollo de videojuegos de alto rendimiento para plataformas de consola y PC de escritorio",
      "Sistemas de inteligencia artificial y machine learning para análisis de datos no estructurados",
      "Sistemas financieros y bancarios legacy; procesa el 95% de las transacciones de tarjeta de crédito y $3 trillones diarios",
      "Desarrollo de aplicaciones web modernas con arquitectura microservicios en la nube pública"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "COBOL (1959) sigue siendo crítico en banca, seguros y gobierno. Se estima que hay más de 200 mil millones de líneas de COBOL activas en el mundo."
  },
  {
    question: "¿Qué significa COBOL?",
    options: [
      "Common Business-Oriented Language — diseñado para ser legible en inglés y para procesamiento de datos empresariales",
      "Common Object Based Oriented Language — un lenguaje orientado a objetos diseñado para sistemas empresariales",
      "Computer Organization and Binary Output Language — para programación de bajo nivel en mainframes IBM",
      "Compiled Object Business Output Loader — herramienta de enlazado para ejecutables en entornos z/OS"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "COBOL fue diseñado para que las personas de negocios pudieran leer y entender el código. Grace Hopper fue una de sus diseñadoras principales."
  },
  {
    question: "¿Cuáles son las 4 divisiones principales de un programa COBOL?",
    options: [
      "IDENTIFICATION DIVISION, ENVIRONMENT DIVISION, DATA DIVISION, PROCEDURE DIVISION",
      "PROGRAM DIVISION, INPUT DIVISION, OUTPUT DIVISION, EXECUTE DIVISION",
      "HEADER SECTION, VARIABLES SECTION, CODE SECTION, FOOTER SECTION",
      "BEGIN BLOCK, DATA BLOCK, PROCEDURE BLOCK, END BLOCK"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "Todo programa COBOL tiene estas 4 divisiones. IDENTIFICATION identifica el programa, ENVIRONMENT define el entorno, DATA las variables, PROCEDURE la lógica."
  },
  {
    question: "¿Cómo se declara una variable en COBOL?",
    options: [
      "SET WS-NOMBRE TO valor USING tipo-dato DECLARE en la sección de configuración del programa",
      "DECLARE WS-NOMBRE AS TIPO WITH LENGTH 30 en la WORKING-STORAGE del DATA DIVISION",
      "VAR WS-NOMBRE = valor TYPE ALPHANUMERIC en la sección de variables del PROCEDURE DIVISION",
      "01 NOMBRE PIC X(30). con nivel numérico y cláusula PIC en el DATA DIVISION"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "01 EMPLOYEE-NAME PIC X(30). El nivel 01 indica top-level. PIC X(n) para alfanumérico, PIC 9(n) para numérico, PIC 9(n)V99 para decimal."
  },
  {
    question: "¿Qué significa la cláusula PIC en COBOL?",
    options: [
      "Parallel Instruction Counter: especifica el número de instrucciones que se ejecutan en paralelo",
      "Program Input Channel: define el canal de entrada de datos para lectura de archivos secuenciales",
      "PICTURE: define el formato y tipo de un campo de datos en la definición de variables",
      "Process In Code: indica que el campo se procesará en línea dentro del PROCEDURE DIVISION"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "PIC 9(5): entero de 5 dígitos. PIC X(10): 10 caracteres alfanuméricos. PIC 9(5)V99: número con 2 decimales implícitos. PIC S9(7): número con signo."
  },
  {
    question: "¿Qué hace MOVE en COBOL?",
    options: [
      "Desplaza el cursor de ejecución al párrafo especificado sin crear un frame nuevo en la pila",
      "Transfiere el control al módulo indicado y espera su finalización antes de continuar",
      "Copia datos de un campo a otro: MOVE EMPLOYEE-NAME TO WS-DISPLAY-NAME",
      "Mueve un archivo completo de un dataset origen a un dataset destino en el z/OS"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "MOVE es la asignación en COBOL. MOVE 0 TO TOTAL-AMOUNT. MOVE CORRESPONDING mueve campos con el mismo nombre entre estructuras de datos distintas."
  },
  {
    question: "¿Qué hace PERFORM en COBOL?",
    options: [
      "Abre un archivo definido en la ENVIRONMENT DIVISION para operaciones de lectura secuencial",
      "Muestra datos en pantalla usando el CICS map correspondiente al campo especificado",
      "Optimiza el rendimiento del programa reordenando la secuencia de instrucciones del párrafo",
      "Ejecuta un párrafo o sección: PERFORM CALCULATE-TOTALS o PERFORM UNTIL condición"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "PERFORM PROCESS-RECORD UNTIL WS-EOF = 'Y'. PERFORM VARYING I FROM 1 BY 1 UNTIL I > 10. Equivale a una llamada a subrutina o a un bucle for/while."
  },
  {
    question: "¿Qué hace ADD en COBOL?",
    options: [
      "Añade un registro nuevo al final de un archivo secuencial abierto en modo OUTPUT o EXTEND",
      "Añade un campo nuevo a una estructura de datos existente en el WORKING-STORAGE SECTION",
      "ADD valor TO campo: ADD AMOUNT TO TOTAL. ADD A B GIVING C: suma A y B, guarda en C",
      "Agrega una entrada nueva a la tabla de índices del archivo VSAM definido en el job step"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "ADD SALES-AMOUNT TO TOTAL-SALES. ADD TAX-RATE TO SELLING-PRICE GIVING TOTAL-PRICE. Variante ROUNDED redondea el resultado al número de decimales del destino."
  },
  {
    question: "¿Cómo se maneja un archivo en COBOL?",
    options: [
      "Con funciones del sistema operativo invocadas mediante CALL 'SYSTEM' en el PROCEDURE DIVISION",
      "Solo con SQL embebido dentro de bloques EXEC SQL END-EXEC para archivos de base de datos",
      "SELECT archivo ASSIGN TO 'ruta' en ENVIRONMENT; FD en DATA DIVISION; OPEN, READ, WRITE, CLOSE en PROCEDURE",
      "Con bloques TRY WHEN FILE-STATUS NOT EQUAL '00' para capturar errores de apertura y lectura"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "SELECT EMPLOYEE-FILE ASSIGN TO 'EMP.DAT' ORGANIZATION IS SEQUENTIAL. FD EMPLOYEE-FILE. OPEN INPUT EMPLOYEE-FILE. READ EMPLOYEE-FILE AT END MOVE 'Y' TO WS-EOF."
  },
  {
    question: "¿Qué es el WORKING-STORAGE SECTION?",
    options: [
      "La sección del PROCEDURE DIVISION donde se definen los algoritmos de procesamiento de datos",
      "Un área de memoria temporal que el sistema operativo asigna dinámicamente durante la ejecución",
      "La sección del ENVIRONMENT DIVISION donde se configuran las rutas de los archivos del job",
      "Sección de DATA DIVISION para variables de trabajo que persisten durante toda la ejecución del programa"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "WORKING-STORAGE es el lugar estándar para declarar variables, flags, contadores y estructuras de trabajo. A diferencia de LOCAL-STORAGE, sus valores persisten entre llamadas."
  },
  {
    question: "¿Qué es el nivel 88 en COBOL?",
    options: [
      "Un condition name: define un nombre para un valor o rango de valores de una variable; usado como booleano",
      "Un nivel especial para definir tablas y arrays con hasta 88 elementos en la DATA DIVISION del programa",
      "Un nivel de datos reservado para campos calculados que se derivan de otros campos automáticamente",
      "Un identificador de sección que marca el inicio de la subrutina principal dentro del PROCEDURE DIVISION"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "01 WS-STATUS PIC X. 88 STATUS-ACTIVE VALUE 'A'. 88 STATUS-INACTIVE VALUE 'I'. Luego: IF STATUS-ACTIVE PERFORM ... Muy legible y mantenible."
  },
  {
    question: "¿Qué hace EVALUATE en COBOL?",
    options: [
      "Evalúa una expresión aritmética compleja y guarda el resultado en el campo numérico especificado",
      "Equivalente a switch/case: EVALUATE TRUE WHEN condicion1 WHEN condicion2 ... WHEN OTHER",
      "Verifica la validez del contenido de un campo de datos según su cláusula PIC definida",
      "Calcula el rendimiento del programa midiendo el tiempo de ejecución de cada sección del código"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "EVALUATE WS-OPTION WHEN 1 PERFORM OPTION-ONE WHEN 2 PERFORM OPTION-TWO WHEN OTHER PERFORM INVALID-OPTION. Más legible que IF/ELSE IF anidados."
  },
  {
    question: "¿Qué es un COPYBOOK en COBOL?",
    options: [
      "Un libro de referencia del estándar COBOL que documenta todas las instrucciones y cláusulas disponibles",
      "Fragmento de código reutilizable incluido con COPY: COPY EMPLOYEE-RECORD — estándar para definir estructuras compartidas",
      "Un archivo de log donde COBOL registra todas las operaciones de entrada/salida del programa ejecutado",
      "Una copia de seguridad automática del código fuente que el compilador genera antes de cada compilación"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "COPY statements incluyen copybooks (.cpy) que definen estructuras de datos compartidas entre programas. COPY EMPLOYEE-REC añade la definición del registro de empleado."
  },
  {
    question: "¿Qué es COBOL embebido con DB2?",
    options: [
      "Una variante de COBOL optimizada para ejecutarse dentro del motor de base de datos DB2 como stored procedure",
      "Un framework de mapeo objeto-relacional que traduce automáticamente estructuras COBOL a tablas DB2",
      "EXEC SQL SELECT ... INTO :WS-VAR FROM TABLE END-EXEC — SQL embebido directamente en programas COBOL",
      "Una interfaz de programación que conecta COBOL con DB2 mediante llamadas CALL estándar del lenguaje"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "EXEC SQL SELECT SALARY INTO :WS-SALARY FROM EMPLOYEE WHERE EMP-ID = :WS-EMP-ID END-EXEC. SQLCODE indica el resultado: 0=OK, 100=no encontrado, negativo=error."
  },
  {
    question: "¿Qué es CICS en contexto de COBOL?",
    options: [
      "Customer Information Control System: middleware de transacciones en IBM mainframe; COBOL usa EXEC CICS para interactuar",
      "Common Interface for COBOL Systems: un estándar de comunicación entre módulos COBOL en entornos distribuidos",
      "Compiled Instruction Cache System: un mecanismo de optimización del compilador para instrucciones frecuentes",
      "COBOL Integrated Control System: el runtime de COBOL en mainframes IBM que gestiona la ejecución de programas"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "EXEC CICS SEND MAP('MAPNAME') FROM(WS-MAP) END-EXEC. CICS maneja transacciones online, gestiona estado, y proporciona servicios de comunicación en mainframes IBM."
  },
  {
    question: "¿Qué es JCL (Job Control Language)?",
    options: [
      "Una extensión de COBOL para definir la lógica de control de flujo entre programas batch del sistema",
      "Un lenguaje de consulta integrado que permite a los programas COBOL acceder directamente a datasets del z/OS",
      "Lenguaje para ejecutar programas en mainframes IBM z/OS: define el job, los pasos, y los datasets de entrada/salida",
      "Una herramienta de configuración en XML que reemplaza a los JCL tradicionales en los mainframes modernos"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "//JOBNAME JOB ... //STEP1 EXEC PGM=MIPROG //INPUT DD DSNAME=MY.DATA,DISP=SHR. JCL define el entorno de ejecución: memoria, tiempo, datasets, y step execution."
  },
  {
    question: "¿Por qué sigue vivo COBOL en la actualidad?",
    options: [
      "Porque es más rápido que cualquier lenguaje moderno para procesamiento de datos financieros en lote",
      "El enorme costo de migración (millones de líneas, lógica de negocio compleja, riesgo operacional) supera el beneficio de reemplazarlo",
      "Porque los bancos están obligados por regulación internacional a mantener sus sistemas en COBOL activo",
      "Porque COBOL fue actualizado en 2020 con soporte nativo para microservicios, cloud y machine learning"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "Migrar un sistema bancario de COBOL es un proyecto de años y miles de millones de dólares con alto riesgo. El costo de migración supera ampliamente el beneficio percibido."
  }
];
