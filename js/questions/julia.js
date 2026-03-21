window.questions_julia = [
  {
    question: "¿Para qué se usa Julia?",
    options: [
      "Scripting del sistema",
      "Desarrollo web",
      "Desarrollo de apps móviles",
      "Computación científica y numérica de alto rendimiento; diseñada para resolver el 'two-language problem'"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "Julia combina la facilidad de Python con el rendimiento de C/Fortran. Muy usada en física, estadística, optimización y machine learning."
  },
  {
    question: "¿Qué es el 'two-language problem'?",
    options: [
      "Problema con dos compiladores",
      "Problema de compatibilidad",
      "El problema de prototipar en Python pero tener que reescribir en C/Fortran para rendimiento; Julia lo resuelve siendo rápida en un solo lenguaje",
      "Un bug conocido"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "Julia alcanza rendimiento comparable a C/Fortran sin sacrificar expresividad. Benchmarks muestran <2x vs C en la mayoría de tareas numéricas."
  },
  {
    question: "¿Cómo se declara una función en Julia?",
    options: [
      "func f(x)",
      "fn f(x) ->",
      "def f(x)",
      "function f(x); return x^2; end o f(x) = x^2"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "Ambas formas son válidas. La sintaxis de una línea es conveniente para funciones matemáticas simples."
  },
  {
    question: "¿Qué es el multiple dispatch?",
    options: [
      "Múltiples retornos",
      "El método a llamar se determina por los tipos de TODOS los argumentos, no solo del primero (como OOP)",
      "Solo para tipos numéricos",
      "Un tipo de polimorfismo OOP"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "add(x::Int, y::Int) = x+y; add(x::Float64, y::Float64) = x+y. El compilador elige la especialización más específica para cada combinación de tipos."
  },
  {
    question: "¿Qué es JIT compilation en Julia?",
    options: [
      "Julia compila funciones a código nativo la primera vez que se llaman con tipos específicos; rápido después del 'time to first plot'",
      "Solo para loops",
      "Julia es interpretado",
      "Compilación de archivos .jl"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "Julia usa LLVM para JIT. La primera llamada compila; las subsiguientes usan el código compilado. 'Time to first plot' es el overhead de compilación inicial."
  },
  {
    question: "¿Qué son los Arrays en Julia?",
    options: [
      "Solo vectores 1D",
      "Como Python lists",
      "Arrays inmutables",
      "Arrays multidimensionales column-major (como Fortran); indexación base 1; operaciones vectorizadas nativas"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "A = [1 2; 3 4] crea matriz 2x2. A[1,1]=1. A .* 2 multiplicación elemento a elemento. El punto (.) vectoriza cualquier función."
  },
  {
    question: "¿Qué es el broadcasting en Julia?",
    options: [
      "Solo para suma",
      "Transmisión de datos",
      "Un tipo de paralelismo",
      "El operador . vectoriza operaciones sobre arrays: f.(array) aplica f a cada elemento; sin necesidad de map() explícito"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "sin.(x) aplica sin a cada elemento. x .^ 2 cuadrado de cada elemento. x .+ y suma elemento a elemento. @. macro para vectorizar toda una expresión."
  },
  {
    question: "¿Qué es el sistema de tipos de Julia?",
    options: [
      "Tipado como Python",
      "Tipado dinámico con anotaciones opcionales: los tipos pueden declararse para claridad o dispatch pero no son necesarios",
      "Solo tipos numéricos",
      "Tipado estático"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "function f(x::Float64)::Float64 — anotaciones opcionales. El sistema de tipos es jerárquico: AbstractFloat → Float64. Crucial para multiple dispatch."
  },
  {
    question: "¿Qué son los macros en Julia?",
    options: [
      "Son funciones especiales",
      "Solo para benchmarks",
      "Metaprogramación: @time, @benchmark, @simd, @parallel; transforman expresiones AST en tiempo de parse",
      "Solo para depuración"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "@time expr mide tiempo. @simd for loop habilita SIMD. @threads for paralleliza. Macros reciben y retornan expresiones Julia (AST)."
  },
  {
    question: "¿Qué es el paquete Flux.jl?",
    options: [
      "Una librería de gráficos",
      "Una herramienta de estadística",
      "Un gestor de paquetes",
      "Framework de Machine Learning en Julia: redes neuronales, gradientes automáticos, soporte GPU nativo"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "Flux.jl usa Zygote.jl para diferenciación automática. model = Chain(Dense(784, 256, relu), Dense(256, 10)). Compilación a GPU transparente."
  },
  {
    question: "¿Qué es DifferentialEquations.jl?",
    options: [
      "Cálculo de ecuaciones diferenciales",
      "Librería para resolver ODEs, PDEs, SDEs con múltiples solvers; una de las más completas del mundo científico",
      "Solo para EDOs lineales",
      "Un tipo de paquete de álgebra"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "prob = ODEProblem(f, u0, tspan). solve(prob, Tsit5()). DiffEq.jl soporta stiff systems, event handling, parameter estimation."
  },
  {
    question: "¿Qué es el garbage collector de Julia?",
    options: [
      "Un GC manual",
      "GC tracing incremental; la gestión de memoria es automática; para rendimiento: pre-allocar arrays y evitar allocaciones en loops",
      "Solo para variables locales",
      "No tiene GC"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "@time muestra allocations. Funciones que terminan en ! mutan in-place (convención). Evitar crear arrays dentro de loops hot para reducir GC pressure."
  },
  {
    question: "¿Qué es Pkg en Julia?",
    options: [
      "Un alias de pip",
      "Un tipo de módulo",
      "Solo para paquetes oficiales",
      "El gestor de paquetes integrado: Pkg.add('DataFrames'), Pkg.status(); environments por proyecto con Project.toml/Manifest.toml"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "using Pkg; Pkg.add('Plots'). El modo REPL: ] para entrar en Pkg mode. Environments reproducibles con Manifest.toml."
  },
  {
    question: "¿Qué es Julia's REPL?",
    options: [
      "Read-Eval-Print Loop interactivo con modos: Julia (default), Pkg (]), Shell (;), Help (?)",
      "Un editor de código",
      "Un compilador online",
      "Solo para debugging"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "El REPL de Julia tiene 4 modos. Ans para el último resultado. Tab para autocompletar incluyendo caracteres Unicode matemáticos (∑, π, α)."
  },
  {
    question: "¿Qué es el sistema de módulos en Julia?",
    options: [
      "module NombreModulo ... end; using y import para cargar; los módulos controlan el espacio de nombres",
      "Los archivos son módulos automáticamente",
      "Solo para libraries",
      "Como Python packages"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "module MyModule; export my_func; function my_func() ... end; end. using MyModule: importa exportados. import MyModule: importa el módulo."
  },
  {
    question: "¿Qué es la paralelización en Julia?",
    options: [
      "Solo para cálculos matriciales",
      "Requiere MPI siempre",
      "Multithreading (@threads, Threads.@spawn), multiprocessing (Distributed.jl, @spawn), GPU (CUDA.jl, Metal.jl)",
      "Solo con Threads.jl"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "JULIA_NUM_THREADS=4 para threads. @threads for i in 1:n. Distributed: @distributed para reduce paralelo. CUDA.jl: CuArray para computación GPU."
  },
  {
    question: "¿Qué es la diferenciación automática en Julia?",
    options: [
      "Solo para redes neuronales",
      "Zygote.jl: differentiation using source transformation; ForwardDiff.jl: forward mode; Enzyme.jl: AD a nivel LLVM",
      "Derivadas numéricas",
      "Una librería matemática"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "using Zygote; gradient(x -> x^2 + 2x, 3.0) → (8.0,). Flux usa Zygote internamente. Permite diferenciación de código Julia arbitrario."
  },
  {
    question: "¿Qué es SciML?",
    options: [
      "Scientific Machine Learning: ecosistema Julia para combinar modelos físicos con ML; DiffEq + Flux + Optimization",
      "Solo una librería",
      "Un tipo de simulación",
      "Un framework de visualización"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "SciML: DifferentialEquations.jl, Optimization.jl, DataDrivenDiffEq.jl, NeuralPDE.jl. Permite Physics-Informed Neural Networks (PINNs) y scientific machine learning."
  },
  {
    question: "¿Qué hace @generated en Julia?",
    options: [
      "Un tipo de macro",
      "Genera código HTML",
      "Permite crear funciones cuyo cuerpo se genera en tiempo de compilación basándose en los tipos de los argumentos",
      "Solo para arrays"
    ],
    correct: 2,
    difficulty: "A",
    explanation: "@generated function f(x::T) where T ... generate code based on T ... end. El cuerpo se genera una vez por combinación de tipos, permitiendo optimizaciones específicas."
  },
  {
    question: "¿Qué es el sistema de effects en Julia (experimental)?",
    options: [
      "Una librería de mónadas",
      "Solo para concurrent code",
      "Sistema para razonar sobre pureza de funciones; @base.pure, @inline, @noinline afectan análisis y optimización del compilador",
      "Efectos CSS"
    ],
    correct: 2,
    difficulty: "S",
    explanation: "Base.@assume_effects :consistent permite al compilador asumir propiedades de una función. :foldable, :effect_free, :terminates_locally para diferentes garantías."
  }
];
