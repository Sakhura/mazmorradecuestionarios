window.questions_fortran = [
  {
    question: "¿Qué significa Fortran?",
    options: [
      "Formula Translation: el primer lenguaje de alto nivel ampliamente usado (IBM, 1957); diseñado para computación científica",
      "Formal Transposition: lenguaje matemático formal para cálculo de matrices desarrollado por los Bell Labs en 1962",
      "Fast Numeric Translation: sistema de compilación numérica optimizado para álgebra matricial y cálculo diferencial",
      "Functional Transformation: el primer lenguaje funcional creado como alternativa a LISP para computación científica"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "Fortran fue el primer lenguaje de programación de alto nivel exitoso. John Backus lo creó en IBM. Demostró que el código compilado podía ser tan eficiente como el ensamblador."
  },
  {
    question: "¿Dónde se usa Fortran hoy?",
    options: [
      "Principalmente en desarrollo de videojuegos AAA donde se requiere acceso directo a la memoria de la GPU",
      "En aplicaciones web de alto tráfico que necesitan rendimiento comparable al lenguaje C en el servidor",
      "HPC (High Performance Computing): física, meteorología, astronomía, ingeniería; muchos códigos científicos críticos están en Fortran",
      "En sistemas embebidos de bajo consumo donde el compilador gfortran produce binarios más pequeños que C"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "LAPACK, BLAS, NetCDF, OpenFOAM tienen código Fortran. Los modelos climáticos del ECMWF, simulaciones de dinámica molecular y códigos de física nuclear usan Fortran activamente."
  },
  {
    question: "¿Cómo se declara una variable en Fortran moderno?",
    options: [
      "VARIABLE nombre AS TIPO = valor en la sección DECLARATIONS del módulo o subprograma correspondiente",
      "DIM nombre AS TIPO: sintaxis compatible con BASIC que Fortran moderno adoptó para mayor legibilidad",
      "INTEGER :: x = 5 o REAL :: temperatura con doble dos puntos obligatorio en Fortran 90 y posterior",
      "TYPE nombre = TIPO PRECISION valor en el bloque de especificaciones al inicio del subprograma"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "REAL :: x = 3.14. INTEGER :: n = 10. CHARACTER(LEN=20) :: nombre. LOGICAL :: flag = .TRUE. El doble :: es la sintaxis de Fortran 90+ para declaración con inicialización."
  },
  {
    question: "¿Qué diferencia hay entre REAL y DOUBLE PRECISION en Fortran?",
    options: [
      "REAL: entero de 32 bits para cálculos enteros rápidos; DOUBLE PRECISION: punto flotante de 64 bits estándar",
      "REAL: simple precisión (32-bit float); DOUBLE PRECISION o REAL(8): doble precisión (64-bit)",
      "REAL y DOUBLE PRECISION son sinónimos en Fortran moderno; el compilador elige la precisión según el hardware",
      "REAL: número racional exacto de precisión arbitraria; DOUBLE PRECISION: float con doble número de decimales"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "REAL(4): single. REAL(8) o DOUBLE PRECISION: double. REAL(16): quad precision en plataformas que lo soporten. Los parámetros de tipo kind son preferibles a nombres obsoletos."
  },
  {
    question: "¿Qué es IMPLICIT NONE?",
    options: [
      "Desactiva la declaración implícita de variables (I-N son enteros por defecto en Fortran clásico); best practice",
      "Indica que el subprograma no retorna ningún valor, equivalente a la declaración void en lenguajes C-derivados",
      "Activa el modo de compilación estricto que prohíbe el uso de características obsoletas de Fortran 77 y anteriores",
      "Desactiva la inferencia de tipos del compilador forzando que todas las funciones sean explícitamente tipadas"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "Sin IMPLICIT NONE, variables que empiezan con I-N son INTEGER implícitamente (regla de Fortran original). IMPLICIT NONE elimina este comportamiento peligroso y obliga a declarar todo."
  },
  {
    question: "¿Qué diferencia hay entre SUBROUTINE y FUNCTION en Fortran?",
    options: [
      "SUBROUTINE es una función pura sin efectos secundarios; FUNCTION puede modificar variables globales del módulo",
      "SUBROUTINE no retorna valor directo (usa parámetros de salida); FUNCTION retorna un único valor",
      "No hay diferencia funcional; SUBROUTINE es la sintaxis antigua de Fortran 77, FUNCTION es la moderna de Fortran 90",
      "SUBROUTINE se compila como procedimiento externo; FUNCTION se inlinea siempre dentro del código llamante"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "FUNCTION f(x) RESULT(y); y = x**2. CALL subroutine(a, b, result). Las subroutinas pueden tener múltiples parámetros INTENT(OUT). Las funciones retornan un solo valor o array."
  },
  {
    question: "¿Qué es INTENT en Fortran?",
    options: [
      "INTENT(IN), INTENT(OUT), INTENT(INOUT): declara cómo se usa un argumento; permite optimizaciones y verificación",
      "Una directiva del compilador que indica la intención de paralelizar el subprograma con OpenMP o MPI automáticamente",
      "Un atributo de módulo que declara si un símbolo es visible (PUBLIC) o privado (PRIVATE) desde otros módulos",
      "Una especificación de memoria que indica si el argumento debe copiarse al stack o pasarse por referencia directa"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "SUBROUTINE calc(x, y, result); REAL, INTENT(IN) :: x, y; REAL, INTENT(OUT) :: result. INTENT(IN) impide modificar el argumento. El compilador detecta uso incorrecto."
  },
  {
    question: "¿Qué son los arrays en Fortran?",
    options: [
      "Arrays unidimensionales con indexación base-0 y operaciones de BLAS disponibles como funciones intrínsecas",
      "Colecciones ordenadas accesibles por índice, con memoria contigua garantizada solo para arrays de tipo numérico",
      "Estructuras de datos similares a los vectores de C++ con redimensionamiento dinámico y semántica de valor",
      "Arrays multidimensionales column-major, 1-indexed; A(3,4) accede fila 3, columna 4; operaciones vectorizadas nativas"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "REAL :: A(100,100). A(:,1) primera columna. SUM(A), MAXVAL(A). DO concurrent y operaciones de array nativas. Column-major significa que A(1,1), A(2,1), A(3,1) son contiguos en memoria."
  },
  {
    question: "¿Qué es el MODULE en Fortran 90+?",
    options: [
      "Un archivo de encabezado similar a los .h de C que declara las interfaces públicas de un subprograma externo",
      "Una directiva de preprocesador que incluye código fuente externo durante la compilación del programa principal",
      "Un componente del sistema de paquetes de Fortran para gestionar dependencias entre archivos fuente del proyecto",
      "Unidad que encapsula declaraciones, tipos, subprogramas; USE Module para importar; permite OOP-like en Fortran moderno"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "MODULE MiModulo; IMPLICIT NONE; REAL, PARAMETER :: PI = 3.14159. CONTAINS; FUNCTION... END MODULE. USE MiModulo, ONLY: PI. Los módulos son la base del Fortran moderno."
  },
  {
    question: "¿Qué es DO CONCURRENT en Fortran 2008?",
    options: [
      "Un constructor de DO que ejecuta iteraciones en orden inverso para optimizar la localidad de caché del procesador",
      "Indica que las iteraciones del DO loop son independientes; el compilador puede vectorizar o paralelizar",
      "Una directiva equivalente a OpenMP parallel for que siempre paraleliza en todos los núcleos disponibles",
      "Un constructor de bucle que distribuye las iteraciones entre múltiples procesos MPI automáticamente"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "DO CONCURRENT (i=1:n) a(i) = b(i) + c(i). Las iteraciones son independientes: sin dependencias entre i. El compilador puede vectorizar con SIMD o paralelizar automáticamente."
  },
  {
    question: "¿Qué es OpenMP en Fortran?",
    options: [
      "Una librería de funciones matemáticas optimizadas para multiprocesador que reemplaza las funciones intrínsecas estándar",
      "Un protocolo de red para distribución de cómputo entre nodos de un cluster usando sockets TCP/IP directamente",
      "API de paralelismo de memoria compartida con directivas: !$OMP PARALLEL DO hace los loops paralelos en múltiples threads",
      "Un estándar de vectorización automática que transforma bucles DO en instrucciones SIMD sin intervención del programador"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "!$OMP PARALLEL DO REDUCTION(+:sum); DO i=1,n; sum = sum + a(i); END DO; !$OMP END PARALLEL DO. Compila con gfortran -fopenmp. Paralelismo de shared memory en múltiples cores."
  },
  {
    question: "¿Qué es MPI en Fortran?",
    options: [
      "Math Processing Interface: API estándar para cálculo de álgebra lineal densa en multiprocesador con memoria compartida",
      "Memory Partition Interface: mecanismo para gestionar la memoria distribuida entre los módulos de un programa Fortran",
      "Message Passing Interface: estándar para computación distribuida en clusters HPC; CALL MPI_SEND, MPI_RECV, MPI_REDUCE",
      "Multi-Precision Integer: una librería de aritmética de precisión arbitraria para cálculos científicos de alta exactitud"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "USE mpi. CALL MPI_INIT(ierr). CALL MPI_COMM_RANK(MPI_COMM_WORLD, rank, ierr). CALL MPI_SEND/RECV. MPI + OpenMP combina paralelismo entre nodos y dentro de nodos."
  },
  {
    question: "¿Qué hace el compilador gfortran con -O3?",
    options: [
      "Genera código de depuración con símbolos adicionales y desactiva la mayoría de optimizaciones del compilador",
      "Activa solo las optimizaciones seguras que no cambian la semántica del programa ni el orden de redondeo",
      "Incluye instrumentación de profiling en el binario para medir el tiempo de ejecución de cada subprograma",
      "Activa optimizaciones agresivas: inlining, vectorización automática (SIMD), loop unrolling, interprocedural optimization"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "gfortran -O3 -march=native -ffast-math genera código altamente optimizado. -ffast-math relaja las reglas IEEE 754 para mayor velocidad. -march=native usa las instrucciones del CPU actual."
  },
  {
    question: "¿Qué son los POINTER y ALLOCATABLE en Fortran 90+?",
    options: [
      "POINTER guarda la dirección de un subprograma para llamadas indirectas; ALLOCATABLE define arrays de tamaño dinámico",
      "ALLOCATABLE: array dinámico sin alias (más seguro); POINTER: puntero con posible aliasing; ALLOCATE/DEALLOCATE para memoria",
      "Ambos son equivalentes en Fortran moderno; la diferencia solo existe en Fortran 77 por compatibilidad histórica",
      "POINTER define un índice relativo dentro de un array; ALLOCATABLE permite acceso aleatorio por clave hash"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "REAL, ALLOCATABLE :: A(:). ALLOCATE(A(n)). DEALLOCATE(A). ALLOCATABLE es preferible porque el compilador garantiza ausencia de aliasing permitiendo mejores optimizaciones."
  },
  {
    question: "¿Qué es el derived type en Fortran?",
    options: [
      "Un tipo inferido automáticamente por el compilador cuando se omite la declaración explícita en el módulo",
      "Un tipo que hereda campos de otro tipo existente mediante la cláusula EXTENDS de Fortran 2003 y posterior",
      "Un tipo especial para cálculos de unidades físicas que el compilador verifica dimensionalmente en tiempo de compilación",
      "Estructura de datos con campos: TYPE :: Persona; CHARACTER(LEN=30) :: nombre; INTEGER :: edad; END TYPE; TYPE(Persona) :: p"
    ],
    correct: 3,
    difficulty: "B",
    explanation: "TYPE Point; REAL :: x, y, z; END TYPE. TYPE(Point) :: p; p%x = 1.0. Fortran 2003 añadió herencia (EXTENDS), polimorfismo y métodos de tipo para OOP completo."
  }
];
