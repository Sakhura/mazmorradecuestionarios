window.questions_fortran = [
  {
    question: "¿Qué significa Fortran?",
    options: [
      "Formal Transformation Network",
      "Formal Translation",
      "Forward Transcription",
      "FORmula TRANslation: el primer lenguaje de alto nivel ampliamente usado (IBM, 1957); diseñado para computación científica y matemática"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "Fortran fue el primer lenguaje de programación de alto nivel exitoso. Diseñado por John Backus en IBM para computación numérica. Sigue siendo relevante en HPC."
  },
  {
    question: "¿Dónde se usa Fortran hoy?",
    options: [
      "Desarrollo web moderno",
      "Solo en museos",
      "HPC (High Performance Computing): física, meteorología, astronomía, ingeniería; muchos códigos científicos críticos están en Fortran",
      "Sistemas embebidos"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "LAPACK, BLAS, NetCDF, OpenFOAM tienen código Fortran. Los modelos climáticos del mundo (CESM, ECMWF) usan Fortran. Su compilación produce código muy eficiente."
  },
  {
    question: "¿Cómo se declara una variable en Fortran moderno?",
    options: [
      "var x = 5",
      "x: integer = 5",
      "INTEGER :: x = 5 o REAL :: temperatura",
      "int x = 5"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "REAL :: x = 3.14. INTEGER :: n = 10. CHARACTER(LEN=20) :: nombre. LOGICAL :: flag = .TRUE. El :: separa el tipo de la declaración."
  },
  {
    question: "¿Qué es el tipo REAL vs DOUBLE PRECISION?",
    options: [
      "REAL: simple precisión (32-bit float); DOUBLE PRECISION o REAL(8): doble precisión (64-bit)",
      "DOUBLE solo en Fortran 90+",
      "Son iguales en Fortran",
      "REAL es solo para enteros"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "REAL(4): single. REAL(8) o DOUBLE PRECISION: double. REAL(16): quad precision (si soportado). Los cálculos científicos casi siempre usan double."
  },
  {
    question: "¿Qué es IMPLICIT NONE?",
    options: [
      "Deshabilita la compilación",
      "Solo en Fortran 77",
      "Una directiva de optimización",
      "Desactiva la declaración implícita de variables (I-N son enteros por defecto en Fortran clásico); best practice siempre declarar variables"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "Sin IMPLICIT NONE, variables que empiezan con I-N son INTEGER implícitamente. Con IMPLICIT NONE, toda variable debe declararse explícitamente (como use strict de Perl)."
  },
  {
    question: "¿Qué es un SUBROUTINE vs FUNCTION?",
    options: [
      "SUBROUTINE es obsoleto",
      "SUBROUTINE no retorna valor directo (usa parámetros de salida); FUNCTION retorna un único valor",
      "FUNCTION es más rápida",
      "Son iguales"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "FUNCTION f(x) RESULT(y); y = x**2. CALL subroutine(a, b, result). Las subrutinas con INTENT(OUT) son más flexibles para múltiples valores de retorno."
  },
  {
    question: "¿Qué es INTENT en Fortran?",
    options: [
      "INTENT(IN), INTENT(OUT), INTENT(INOUT): declara cómo se usa un argumento; permite optimizaciones y verificación de uso incorrecto",
      "Un tipo de atributo de variable",
      "Solo documentación",
      "La intención del programador"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "SUBROUTINE calc(x, y, result); REAL, INTENT(IN) :: x, y; REAL, INTENT(OUT) :: result. El compilador verifica que no se modifique un IN."
  },
  {
    question: "¿Qué son los arrays en Fortran?",
    options: [
      "Son listas dinámicas",
      "Solo vectores 1D",
      "Como los de C",
      "Arrays multidimensionales column-major, 1-indexed; A(3,4) accede fila 3, columna 4; operaciones vectorizadas nativas: A = B + C"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "REAL :: A(100,100). A(:,1) primera columna. SUM(A), MAXVAL(A). DO concurrent para loops paralelos. Column-major como Matlab (diferente de C que es row-major)."
  },
  {
    question: "¿Qué es el MODULE en Fortran 90+?",
    options: [
      "Un archivo de código",
      "Un tipo de biblioteca externa",
      "Solo para constantes",
      "Unidad que encapsula declaraciones, tipos, subprogramas; USE Module para importar; permite OOP-like programming en Fortran moderno"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "MODULE MiModulo; IMPLICIT NONE; REAL, PARAMETER :: PI = 3.14159. CONTAINS. SUBROUTINE calc(). END MODULE. USE MiModulo para importar."
  },
  {
    question: "¿Qué es DO CONCURRENT en Fortran 2008?",
    options: [
      "Igual que OpenMP",
      "Indica que las iteraciones del DO loop son independientes; el compilador puede vectorizar o paralelizar",
      "Solo un hint para el compilador",
      "Un loop paralelo de Java"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "DO CONCURRENT (i=1:n) a(i) = b(i) + c(i). Las iteraciones son independientes (no hay dependencias). El compilador puede usar SIMD o threads automáticamente."
  },
  {
    question: "¿Qué es OpenMP en Fortran?",
    options: [
      "Un protocolo de red",
      "Un tipo de MPI",
      "API de paralelismo de memoria compartida con directivas: !$OMP PARALLEL DO hace los loops paralelos en múltiples threads",
      "Solo para C"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "!$OMP PARALLEL DO REDUCTION(+:sum); DO i=1,n; sum = sum + a(i); END DO; !$OMP END PARALLEL DO. Compilar con -fopenmp."
  },
  {
    question: "¿Qué es MPI en Fortran?",
    options: [
      "Una librería de red genérica",
      "Solo para GPU",
      "Message Passing Interface: estándar para computación distribuida en clusters HPC; CALL MPI_SEND, MPI_RECV, MPI_REDUCE",
      "Un tipo de loop paralelo"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "USE mpi. CALL MPI_INIT(ierr). CALL MPI_COMM_RANK(MPI_COMM_WORLD, rank, ierr). Los modelos climáticos globales usan miles de cores con MPI."
  },
  {
    question: "¿Qué hace el compilador gfortran con -O3?",
    options: [
      "Solo para CPUs Intel",
      "Genera código de depuración",
      "Verifica errores de array bounds",
      "Activia optimizaciones agresivas: inlining, vectorización automática (SIMD), loop unrolling, interprocedural optimization"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "gfortran -O3 -march=native -ffast-math genera código altamente optimizado para la CPU local. -fcheck=all para verificación de bounds en desarrollo."
  },
  {
    question: "¿Qué son los POINTER y ALLOCATABLE en Fortran 90+?",
    options: [
      "POINTER es más seguro",
      "ALLOCATABLE: array dinámico sin alias (más seguro); POINTER: puntero con posible aliasing; ALLOCATE y DEALLOCATE para memoria dinámica",
      "ALLOCATABLE es obsoleto",
      "Son iguales"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "REAL, ALLOCATABLE :: A(:). ALLOCATE(A(n)). DEALLOCATE(A). ALLOCATABLE preferido sobre POINTER cuando no se necesita aliasing (el compilador puede optimizar mejor)."
  },
  {
    question: "¿Qué es el derived type en Fortran?",
    options: [
      "Un tipo derivado de otro",
      "Un tipo de módulo",
      "Solo para datos matemáticos",
      "Estructura de datos con campos: TYPE :: Persona; CHARACTER(LEN=30) :: nombre; INTEGER :: edad; END TYPE; TYPE(Persona) :: p"
    ],
    correct: 3,
    difficulty: "B",
    explanation: "TYPE Point; REAL :: x, y, z; END TYPE. TYPE(Point) :: p; p%x = 1.0. Fortran 2003 añadió OOP completo: herencia, polimorfismo, type-bound procedures."
  }
];
