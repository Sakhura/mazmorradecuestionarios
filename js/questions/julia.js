window.questions_julia = [
  {
    question: "¿Para qué se usa Julia?",
    options: [
      "Para desarrollo de aplicaciones móviles multiplataforma con compilación a código nativo en iOS y Android",
      "Para scripting de sistema operativo y automatización de tareas en entornos de servidor Unix y Linux",
      "Para desarrollo web full-stack con un framework propio similar a Ruby on Rails pero con tipado gradual",
      "Computación científica y numérica de alto rendimiento; diseñada para resolver el 'two-language problem'"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "Julia combina la facilidad de Python con el rendimiento de C/Fortran. Muy popular en física, economía cuantitativa, bioinformática, machine learning y simulación científica."
  },
  {
    question: "¿Qué es el 'two-language problem'?",
    options: [
      "El problema de escribir el mismo algoritmo en dos lenguajes diferentes para asegurar la corrección de los resultados",
      "La dificultad de mantener compatibilidad de APIs entre las versiones 1.x y 2.x de un lenguaje en producción",
      "El problema de prototipar en Python pero tener que reescribir en C/Fortran para rendimiento; Julia lo resuelve",
      "La necesidad de usar dos compiladores distintos para el código numérico y el código de infraestructura del proyecto"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "Julia alcanza rendimiento comparable a C/Fortran sin sacrificar expresividad. No necesitas reescribir: el mismo código Julia de alto nivel se compila a código nativo eficiente."
  },
  {
    question: "¿Cómo se declara una función en Julia?",
    options: [
      "def f(x): return x^2 usando la sintaxis de Python que Julia adoptó para mayor familiaridad del ecosistema",
      "fn f(x: T) -> T { x * x } usando la sintaxis de Rust que Julia adoptó para funciones compiladas a nativo",
      "FUNCTION f(x) RESULT(y); y = x**2; END FUNCTION usando la sintaxis heredada de Fortran para compatibilidad",
      "function f(x); return x^2; end o forma corta: f(x) = x^2"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "Ambas formas son válidas. La sintaxis de una línea es conveniente para funciones matemáticas simples. Julia soporta funciones anónimas: x -> x^2 y composición de funciones."
  },
  {
    question: "¿Qué es el multiple dispatch?",
    options: [
      "Un mecanismo para despachar mensajes a múltiples procesos simultáneamente en el runtime distribuido de Julia",
      "El método a llamar se determina por los tipos de TODOS los argumentos, no solo del primero (como OOP clásico)",
      "Un sistema de callbacks que permite registrar múltiples funciones para un mismo evento del runtime de Julia",
      "La capacidad de Julia de compilar múltiples versiones de una función con diferentes niveles de optimización"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "add(x::Int, y::Int) = x+y; add(x::Float64, y::Float64) = x+y. El compilador genera código especializado para cada combinación de tipos. Esto permite extensibilidad sin herencia."
  },
  {
    question: "¿Qué es la compilación JIT en Julia?",
    options: [
      "Julia interpreta el código línea a línea la primera vez y lo cachea para acelerar las ejecuciones posteriores",
      "Julia transpila el código fuente a Python optimizado que luego CPython compila a bytecode más eficiente",
      "Julia compila funciones a código nativo la primera vez que se llaman con tipos específicos; rápido después del 'time to first plot'",
      "Julia usa un JIT de dos fases: primero a bytecode WASM, luego a código nativo por el motor del navegador"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "Julia usa LLVM para JIT. La primera llamada compila; las subsiguientes usan el código compilado. 'Time to first plot' es el tiempo de compilación inicial, un trade-off conocido."
  },
  {
    question: "¿Qué son los Arrays en Julia?",
    options: [
      "Colecciones genéricas similares a las listas de Python con indexación base-0 y tipos dinámicos por elemento",
      "Estructuras de datos con indexación base-0 y semántica de copia completa al asignar a otra variable",
      "Arrays de objetos heterogéneos similar a los cell arrays de MATLAB con acceso por llaves y claves arbitrarias",
      "Arrays multidimensionales column-major (como Fortran); indexación base 1; operaciones vectorizadas nativas"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "A = [1 2; 3 4] crea matriz 2x2. A[1,1]=1. A .* 2 multiplicación elemento a elemento. similar(A) crea array con mismas dimensiones y tipo. Column-major para interop con BLAS/LAPACK."
  },
  {
    question: "¿Qué es el broadcasting en Julia?",
    options: [
      "Un mecanismo de comunicación entre workers distribuidos para compartir arrays sin copia en la memoria del cluster",
      "La capacidad de Julia para transmitir el output de una función a múltiples canales de salida simultáneamente",
      "Una técnica de compilación que expande operaciones escalares a instrucciones SIMD automáticamente en el backend LLVM",
      "El operador . vectoriza operaciones sobre arrays: f.(array) aplica f a cada elemento sin map() explícito"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "sin.(x) aplica sin a cada elemento. x .^ 2 cuadrado de cada elemento. A .+ b suma un vector a cada fila de una matriz. El broadcasting es lazy y produce código eficiente."
  },
  {
    question: "¿Cómo funciona el sistema de tipos de Julia?",
    options: [
      "Tipado estático nominal con clases abstractas e interfaces, similar al sistema de tipos de Java o Kotlin",
      "Tipado dinámico con anotaciones opcionales: los tipos pueden declararse para claridad o dispatch pero no son requeridos",
      "Tipado estructural como TypeScript donde la compatibilidad se determina por la forma del tipo en tiempo de compilación",
      "Tipado estático inferido similar a Haskell donde el compilador deduce todos los tipos sin anotaciones del programador"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "function f(x::Float64)::Float64 — anotaciones opcionales. El sistema de tipos es dinámico pero el JIT especializa según tipos. Los tipos abstractos permiten jerarquías sin herencia de implementación."
  },
  {
    question: "¿Qué son los macros en Julia?",
    options: [
      "Funciones con nombre especial que reciben argumentos opcionales y retornan expresiones del mismo tipo que la entrada",
      "Directivas de compilación similares a los #pragma de C que controlan el comportamiento del compilador LLVM",
      "Metaprogramación: @time, @benchmark, @simd, @parallel; transforman expresiones AST en tiempo de parse",
      "Tipos de funciones de orden superior que encapsulan transformaciones sobre el sistema de tipos de Julia"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "@time expr mide tiempo. @simd for loop habilita SIMD. @threads for paraleliza en threads. Los macros en Julia son higiénicos y operan sobre el AST antes de la compilación."
  },
  {
    question: "¿Qué es el paquete Flux.jl?",
    options: [
      "Un framework de análisis de flujo de datos para procesar streams en tiempo real con backpressure automática",
      "Una librería para simulación de dinámica de fluidos computacional usando diferencias finitas en GPU y CPU",
      "Un sistema de persistencia de datos que gestiona el flujo de información entre base de datos y modelos Julia",
      "Framework de Machine Learning en Julia: redes neuronales, gradientes automáticos, soporte GPU nativo"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "Flux.jl usa Zygote.jl para diferenciación automática. model = Chain(Dense(784,256,relu), Dense(256,10)). Compila a GPU con CUDA.jl. Diseño minimalista y composable."
  },
  {
    question: "¿Qué es DifferentialEquations.jl?",
    options: [
      "Una librería de cálculo diferencial simbólico que simplifica expresiones matemáticas de forma exacta en Julia",
      "Librería para resolver ODEs, PDEs, SDEs con múltiples solvers; una de las más completas del mundo científico",
      "Un framework para definir relaciones diferenciales entre componentes de un sistema de ecuaciones algebraicas",
      "Una herramienta de diferenciación automática basada en transformaciones de código que usa el AST de Julia"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "prob = ODEProblem(f, u0, tspan). solve(prob, Tsit5()). DiffEq.jl soporta stiff/non-stiff, estocasticidad, delay DEs, y ecuaciones en diferencias parciales con múltiples backends."
  },
  {
    question: "¿Cómo funciona el garbage collector de Julia?",
    options: [
      "Julia usa reference counting como Python para liberar memoria de forma determinista al salir del scope",
      "GC tracing incremental; la gestión es automática; para rendimiento: pre-alocar arrays y evitar allocaciones en loops",
      "Julia gestiona la memoria manualmente como C, usando gc_malloc() y gc_free() para controlar el ciclo de vida",
      "Julia no tiene GC: usa ownership estático similar a Rust, liberando memoria al salir del scope de forma determinista"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "@time muestra allocations. Funciones que terminan en ! mutan in-place para evitar allocaciones. Pre-allocar arrays con similar() o zeros() antes de los loops de cómputo."
  },
  {
    question: "¿Qué es Pkg en Julia?",
    options: [
      "Un preprocesador de código que empaqueta múltiples archivos Julia en un solo binario distribuible",
      "Una herramienta de generación de documentación que empaqueta el código con sus tests y benchmarks automáticamente",
      "Un compilador cruzado que empaqueta código Julia para distribuirlo en plataformas sin el runtime de Julia instalado",
      "El gestor de paquetes integrado: Pkg.add('DataFrames'), Pkg.status(); environments por proyecto con Project.toml/Manifest.toml"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "using Pkg; Pkg.add('Plots'). El modo REPL: ] para entrar en Pkg mode. Pkg.activate('.') activa el environment local. Project.toml y Manifest.toml reproducen el entorno exactamente."
  },
  {
    question: "¿Qué es el REPL de Julia?",
    options: [
      "Un editor de código integrado con resaltado de sintaxis y completado automático para scripts Julia interactivos",
      "Una interfaz web basada en Jupyter que permite ejecutar código Julia en celdas con visualización inline",
      "Un entorno de desarrollo visual similar a MATLAB con workspace, editor y consola integrados en una sola ventana",
      "Read-Eval-Print Loop interactivo con modos: Julia (default), Pkg (]), Shell (;), Help (?)"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "El REPL de Julia tiene 4 modos. Ans para el último resultado. Tab para autocompletar. ; al final de una línea suprime la salida. El modo help (?) muestra documentación inline."
  },
  {
    question: "¿Qué es el sistema de módulos en Julia?",
    options: [
      "Un sistema de plugins para extender el compilador JIT con transformaciones personalizadas del código intermedio LLVM",
      "Un mecanismo de namespaces que replica automáticamente el árbol de directorios del proyecto como jerarquía de tipos",
      "Una abstracción similar a las clases de Python donde cada módulo es también un tipo instanciable del sistema",
      "module NombreModulo ... end; using y import para cargar; los módulos controlan el espacio de nombres"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "module MyModule; export my_func; function my_func() ... end; end. using MyModule importa los exports. import MyModule: my_func importa específicamente. Los módulos evitan conflictos de nombres."
  },
  {
    question: "¿Cómo se paraleliza código en Julia?",
    options: [
      "Julia no soporta paralelismo nativamente; se requiere la librería externa parallel.jl para ejecutar en múltiples cores",
      "Solo mediante primitivas de bajo nivel como fork() y join() de POSIX que Julia expone mediante la librería Libc.jl",
      "Multithreading (@threads, Threads.@spawn), multiprocessing (Distributed.jl, @spawn), GPU (CUDA.jl, Metal.jl)",
      "Únicamente con el modelo de actores de la librería Akka.jl que Julia portó desde el ecosistema de Erlang/Elixir"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "JULIA_NUM_THREADS=4 para threads. @threads for i in 1:n. Distributed: addprocs(4), @distributed. CUDA.jl para GPU de NVIDIA, Metal.jl para Apple Silicon y oneAPI.jl para Intel."
  },
  {
    question: "¿Qué es la diferenciación automática en Julia?",
    options: [
      "Un sistema que genera automáticamente los tests de derivadas numéricas para validar implementaciones analíticas",
      "Zygote.jl: differentiation by source transformation; ForwardDiff.jl: forward mode; Enzyme.jl: AD a nivel LLVM",
      "Un compilador simbólico que calcula las derivadas exactas de expresiones matemáticas en tiempo de compilación",
      "Una técnica de optimización del JIT que diferencia las rutas de ejecución calientes de las frías en el programa"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "using Zygote; gradient(x -> x^2 + 2x, 3.0) → (8.0,). Flux usa Zygote internamente. Enzyme.jl realiza AD directamente sobre LLVM IR para máximo rendimiento."
  },
  {
    question: "¿Qué es SciML?",
    options: [
      "Scientific Machine Learning: ecosistema Julia para combinar modelos físicos con ML; DiffEq + Flux + Optimization",
      "Simple Compute Machine Learning: una librería de Julia para ejecutar modelos de ML en recursos computacionales limitados",
      "Symbolic Computing and Machine Learning: un framework para combinar CAS simbólico con redes neuronales profundas",
      "Scientific Computing with Metaprogramming Layer: un DSL de Julia para expresar modelos físicos con macros de dominio"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "SciML: DifferentialEquations.jl, Optimization.jl, DataDrivenDiffEq.jl, ModelingToolkit.jl. Permite Physics-Informed Neural Networks (PINNs) y neural ODEs directamente en Julia."
  },
  {
    question: "¿Qué hace @generated en Julia?",
    options: [
      "Genera automáticamente el código de tests unitarios para la función basándose en su especificación de tipos",
      "Indica al compilador JIT que precaliente la función compilándola con todos los tipos conocidos del proyecto",
      "Permite crear funciones cuyo cuerpo se genera en tiempo de compilación basándose en los tipos de los argumentos",
      "Marca la función como exportable y genera automáticamente su binding de C para interoperabilidad con otras librerías"
    ],
    correct: 2,
    difficulty: "A",
    explanation: "@generated function f(x::T) where T ... generate code based on T ... end. El cuerpo recibe los tipos como valores y retorna una expresión Julia que se compila. Como comptime de Zig pero dinámico."
  },
  {
    question: "¿Qué es el sistema de effects en Julia (experimental)?",
    options: [
      "Un sistema de manejo de efectos secundarios que categoriza las funciones como puras, con I/O o con estado mutable",
      "Una API de animaciones y transformaciones CSS para las visualizaciones generadas por Plots.jl y Makie.jl",
      "Sistema para razonar sobre pureza de funciones; @base.pure, @inline, @noinline afectan análisis y optimización del compilador",
      "Un framework de programación reactiva que propaga automáticamente los cambios de estado entre celdas del REPL"
    ],
    correct: 2,
    difficulty: "S",
    explanation: "Base.@assume_effects :consistent permite al compilador asumir propiedades de las funciones para optimizaciones agresivas como constant folding y eliminación de código muerto."
  }
];
